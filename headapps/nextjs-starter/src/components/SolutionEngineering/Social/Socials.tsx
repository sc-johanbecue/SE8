import React, { JSX } from 'react';
import {
  Item,
  TextField,
  LinkField,
  ComponentParams,
  ComponentRendering,
  GetStaticComponentProps,
} from '@sitecore-content-sdk/nextjs';

import { getTypedChildItems } from 'lib/SolutionEngineering/XMC-Content2';
import { getColorCssVars, ColorCssVars } from 'lib/SolutionEngineering/XMC-ColorPalette';
import { getRenderingParameterLookupValue } from 'lib/SolutionEngineering/XMC-RenderingParameterLookup';

import * as SocialComponent from './Social';
const Social = SocialComponent.Default;

/**
 * Fetches typed child items (Icon + Link fields) for a given parent.
 */
async function getSocialChildren(parentId: string | undefined, language: string | undefined) {
  if (!parentId || !language) {
    console.warn('[getSocialChildren] Missing parentId or language.');
    return [];
  }

  const children = await getTypedChildItems<{
    Icon: TextField;
    Link: LinkField;
  }>(parentId, language, ['Icon', 'Link']);

  return children;
}

/**
 * Child item structure returned by getSocialChildren.
 */
type SocialChild = {
  id: string;
  Icon: Item & {
    fields: {
      Icon: TextField;
    };
  };
  Link: LinkField;
};

/**
 * Presentation-related props resolved from rendering parameters.
 */
type SocialPresentationProps = {
  children?: SocialChild[];
  color?: ColorCssVars;
  hoverColor?: ColorCssVars;
  backgroundColor?: ColorCssVars;
  hoverBackgroundColor?: ColorCssVars;
  iconSize: string;
  backgroundStyle: string;
  hoverBackgroundStyle: string;
  direction?: string;
  gap?: string;
};

/**
 * Final props type combining Sitecore rendering info + presentation props.
 */
type SocialsContainerProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
} & SocialPresentationProps;

/**
 * Default component renderer for the Socials container.
 * Maps child items into <Social> components with proper visual and interaction props.
 */
export const Default = (props: SocialsContainerProps): JSX.Element => {
  const {
    rendering,
    params,
    children,
    color,
    hoverColor,
    backgroundColor,
    hoverBackgroundColor,
    iconSize,
    backgroundStyle,
    hoverBackgroundStyle,
    direction,
    gap,
  } = props;

  const id = props.rendering.uid + '-socials';

  return (
    <div className={`component ${params?.styles || ''}`} id={id || undefined}>
      <div className={`flex ${direction || 'flex-row'} ${gap || ''}`}>
        {children?.length ? (
          children.map((child, index) => (
            <Social
              key={index}
              rendering={{ ...rendering, dataSource: child.id }}
              params={{
                ...params,
                RenderingIdentifier: child.id,
              }}
              fields={{
                Icon: child.Icon,
                Link: child.Link,
              }}
              color={color}
              hoverColor={hoverColor}
              backgroundColor={backgroundColor}
              hoverBackgroundColor={hoverBackgroundColor}
              iconSize={iconSize}
              backgroundStyle={backgroundStyle}
              hoverBackgroundStyle={hoverBackgroundStyle}
            />
          ))
        ) : (
          <span className="text-sm text-gray-500">No socials are configured.</span>
        )}
      </div>
    </div>
  );
};

/**
 * Static props fetcher for the Socials component.
 * Loads visual parameters (color, layout, hover, etc.) and child data from Sitecore.
 */
export const getStaticProps: GetStaticComponentProps = async (rendering, _layoutData, context) => {
  const language = context?.locale as string;

  // Helper to reduce repetition for parameter lookups
  const resolveParam = (key: string) =>
    getRenderingParameterLookupValue(rendering.params?.[key], language);

  // Fetch all design-related rendering parameters in parallel
  const [
    color,
    hoverColor,
    backgroundColor,
    hoverBackgroundColor,
    iconSize,
    backgroundStyle,
    hoverBackgroundStyle,
    direction,
    gap,
  ] = await Promise.all([
    getColorCssVars(rendering.params?.['Color'], language),
    getColorCssVars(rendering.params?.['Hover Color'], language),
    getColorCssVars(rendering.params?.['Background Color'], language),
    getColorCssVars(rendering.params?.['Hover Background Color'], language),
    resolveParam('Icon Size'),
    resolveParam('Background Style'),
    resolveParam('Hover Background Style'),
    resolveParam('Direction'),
    resolveParam('Gap'),
  ]);

  // Fetch child items for this Socials component
  const children = await getSocialChildren(rendering.dataSource, language);

  console.log('[getStaticProps] Loaded socials:', children.length);

  return {
    color,
    hoverColor,
    backgroundColor,
    hoverBackgroundColor,
    iconSize,
    backgroundStyle,
    hoverBackgroundStyle,
    direction,
    gap,
    children,
  };
};
