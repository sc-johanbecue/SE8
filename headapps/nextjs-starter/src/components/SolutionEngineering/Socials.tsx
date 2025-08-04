import React, { JSX } from 'react';
import {
  TextField,
  LinkField,
  ComponentParams,
  ComponentRendering,
  GetStaticComponentProps,
} from '@sitecore-content-sdk/nextjs';

import { Guid } from 'lib/SolutionEngineering/Types';
import { getSocialChildren } from 'lib/SolutionEngineering/XMC-Content';
import { getColorCssVars, ColorCssVars } from 'lib/SolutionEngineering/XMC-ColorPalette';
import { getPresentationStyleValue } from 'lib/SolutionEngineering/XMC-PresentationStyle';

import * as SocialComponent from './Social';
const Social = SocialComponent.Default;

/**
 * Props for each child social item (used for mapping icons/links).
 */
type SocialChild = {
  id: Guid;
  icon: TextField;
  link: { jsonValue: LinkField };
};

/**
 * Props for the Socials container component.
 */
type SocialsContainerProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  children?: SocialChild[];
  color?: ColorCssVars;
  hoverColor?: ColorCssVars;
  backgroundColor?: ColorCssVars;
  hoverBackgroundColor?: ColorCssVars;
  iconSize: string;
  backgroundStyle: string;
  hoverBackgroundStyle: string;
};

/**
 * The default SocialsContainer component renders a horizontal row of social media icons,
 * with support for dynamic colors, hover styles, and button sizing.
 */
export const Default = (props: SocialsContainerProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <div className={`component ${props.params.styles}`} id={id || undefined}>
      <div className="flex flex-row gap-2">
        {props.children?.length ? (
          props.children.map((child, index) => (
            <Social
              key={child.id} // Guid is unique, better than using `index`
              rendering={{ ...props.rendering, dataSource: child.id }}
              params={{
                ...props.params,
                RenderingIdentifier: `social-${index}`,
              }}
              fields={{
                Icon: child.icon,
                Link: child.link.jsonValue,
              }}
              // Visual props
              color={props.color}
              hoverColor={props.hoverColor}
              backgroundColor={props.backgroundColor}
              hoverBackgroundColor={props.hoverBackgroundColor}
              iconSize={props.iconSize}
              backgroundStyle={props.backgroundStyle}
              hoverBackgroundStyle={props.hoverBackgroundStyle}
            />
          ))
        ) : (
          // Optional fallback if no children exist
          <span className="text-sm text-gray-500">No socials are configured.</span>
        )}
      </div>
    </div>
  );
};

/**
 * getStaticProps prepares data for the SocialsContainer component.
 * It fetches design tokens like colors, styles, icon sizes, and child components.
 */
export const getStaticProps: GetStaticComponentProps = async (_rendering, _layoutData, context) => {
  const language = context?.locale as string;

  // Get color tokens for icon and background styling
  const color = await getColorCssVars(_rendering.params?.['Color'], language);
  const hoverColor = await getColorCssVars(_rendering.params?.['Hover Color'], language);
  const backgroundColor = await getColorCssVars(_rendering.params?.['Background Color'], language);
  const hoverBackgroundColor = await getColorCssVars(
    _rendering.params?.['Hover Background Color'],
    language
  );

  // Get Tailwind class names for icon sizing and button styling
  const iconSize = await getPresentationStyleValue(_rendering.params?.['Icon Size'], language);
  const backgroundStyle = await getPresentationStyleValue(
    _rendering.params?.['Background Style'],
    language
  );
  const hoverBackgroundStyle = await getPresentationStyleValue(
    _rendering.params?.['Hover Background Style'],
    language
  );

  // Get child social components (with ID, icon, and link fields)
  const children = await getSocialChildren(_rendering.dataSource, language);

  return {
    color,
    hoverColor,
    backgroundColor,
    hoverBackgroundColor,
    iconSize,
    backgroundStyle,
    hoverBackgroundStyle,
    children,
  };
};
