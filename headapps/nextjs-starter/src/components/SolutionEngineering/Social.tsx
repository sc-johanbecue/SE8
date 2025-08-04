import React, { JSX, useState } from 'react';
import {
  TextField,
  LinkField,
  ComponentParams,
  ComponentRendering,
  GetStaticComponentProps,
} from '@sitecore-content-sdk/nextjs';
import * as FaIcons6 from 'react-icons/fa6';
import { IconType } from 'react-icons';
import { getColorCssVars, ColorCssVars } from '../../lib/SolutionEngineering/XMC-ColorPalette';
import { getPresentationStyleValue } from 'lib/SolutionEngineering/XMC-PresentationStyle';

// Define expected field types from Sitecore
interface Fields {
  Icon: TextField;
  Link: LinkField;
}

// Props received by the Social component
type SocialProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
  color?: ColorCssVars;
  hoverColor?: ColorCssVars;
  backgroundColor?: ColorCssVars;
  hoverBackgroundColor?: ColorCssVars;
  iconSize?: string;
  backgroundStyle?: string;
  hoverBackgroundStyle?: string;
};

// Component shown when required fields are not populated (i.e., fallback content)
const DefaultContent = (props: SocialProps): JSX.Element => (
  <div
    className={`component Social ${props.params.styles ?? ''}`}
    id={props.params.RenderingIdentifier || undefined}
  >
    <div className="component-content">
      <span className="is-empty-hint">Social Component</span>
    </div>
  </div>
);

export const Default = (props: SocialProps): JSX.Element => {
  const { fields, params, iconSize, color, hoverColor, backgroundColor, hoverBackgroundColor } =
    props;
  const [hovered, setHovered] = useState(false);

  const id = params.RenderingIdentifier;

  // Safely extract the icon name from the Icon field
  const iconName = typeof fields?.Icon?.value === 'string' ? fields.Icon.value : '';
  const iconMap: Record<string, IconType> = { ...FaIcons6 };

  const Icon = iconMap[iconName];
  const IconBackground = hovered
    ? (iconMap[props.hoverBackgroundStyle ?? ''] ?? undefined)
    : (iconMap[props.backgroundStyle ?? ''] ?? undefined);

  // If Icon is not available, render fallback
  if (!Icon || !fields?.Link?.value?.url) {
    return <DefaultContent {...props} />;
  }

  return (
    <div className={`component ${params.styles ?? ''} p-0`} id={id || undefined}>
      <a
        href={fields.Link.value.url as string}
        target={fields.Link.value.target || '_self'}
        aria-label={fields.Link.value.text}
      >
        <span
          className={`fa-stack ${iconSize}`}
          style={{ flexShrink: 0 }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {IconBackground && (
            <IconBackground
              className="fa-stack-2x"
              style={{
                color: hovered
                  ? hoverBackgroundColor?.cssVar
                    ? `var(${hoverBackgroundColor.cssVar})`
                    : undefined
                  : backgroundColor?.cssVar
                    ? `var(${backgroundColor.cssVar})`
                    : 'transparent',
              }}
            />
          )}
          <Icon
            className="fa-stack-1x"
            style={{
              top: '0.5em',
              color: hovered
                ? hoverColor?.cssVar
                  ? `var(${hoverColor.cssVar})`
                  : undefined
                : color?.cssVar
                  ? `var(${color.cssVar})`
                  : undefined,
              transition: 'color 0.2s ease',
            }}
          />
        </span>
      </a>
    </div>
  );
};

// Fetch styling and color props for static site generation
export const getStaticProps: GetStaticComponentProps = async (_rendering, _layoutData, context) => {
  const language = context?.locale as string;

  const color = await getColorCssVars(_rendering.params?.['Color'], language);
  const hoverColor = await getColorCssVars(_rendering.params?.['Hover Color'], language);
  const backgroundColor = await getColorCssVars(_rendering.params?.['Background Color'], language);
  const hoverBackgroundColor = await getColorCssVars(
    _rendering.params?.['Hover Background Color'],
    language
  );

  const iconSize = await getPresentationStyleValue(_rendering.params?.['Icon Size'], language);
  const backgroundStyle = await getPresentationStyleValue(
    _rendering.params?.['Background Style'],
    language
  );
  const hoverBackgroundStyle = await getPresentationStyleValue(
    _rendering.params?.['Hover Background Style'],
    language
  );

  return {
    color,
    hoverColor,
    backgroundColor,
    hoverBackgroundColor,
    iconSize,
    backgroundStyle,
    hoverBackgroundStyle,
  };
};
