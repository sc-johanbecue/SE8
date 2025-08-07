import React, { JSX, useState } from 'react';
import {
  TextField,
  ComponentParams,
  ComponentRendering,
  GetStaticComponentProps,
} from '@sitecore-content-sdk/nextjs';

import * as FaIcons6 from 'react-icons/fa6';
import { IconType } from 'react-icons';

import { getColorCssVars, ColorCssVars } from 'lib/SolutionEngineering/XMC-ColorPalette';
import { getRenderingParameterLookupValue } from 'lib/SolutionEngineering/XMC-RenderingParameterLookup';

/**
 * Field definitions expected from Sitecore.
 */
interface Fields {
  Icon: TextField;
}

/**
 * Presentation-related props resolved from getStaticProps.
 */
type SocialPresentationProps = {
  color?: ColorCssVars;
  hoverColor?: ColorCssVars;
  backgroundColor?: ColorCssVars;
  hoverBackgroundColor?: ColorCssVars;
  iconSize?: string;
  backgroundStyle?: string;
  hoverBackgroundStyle?: string;
};

/**
 * Component props for Social icon link.
 */
type SocialProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
} & SocialPresentationProps;

/**
 * Component displayed when required fields (Icon or Link) are missing.
 */
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

/**
 * The default exported Social component renders a single icon link
 * with hover states, background styling, and dynamic coloring.
 */
export const Default = (props: SocialProps): JSX.Element => {
  const {
    fields,
    params,
    iconSize,
    color,
    hoverColor,
    backgroundColor,
    hoverBackgroundColor,
    backgroundStyle,
    hoverBackgroundStyle,
  } = props;

  const [hovered, setHovered] = useState(false);
  const id = params.RenderingIdentifier + '-icon';

  // Extract icon name and corresponding component from icon map
  const iconName = typeof fields?.Icon?.value === 'string' ? fields.Icon.value : '';
  const iconMap: Record<string, IconType> = { ...FaIcons6 };
  const Icon = iconMap[iconName];

  // Dynamically resolve background icon component based on hover state
  const IconBackground = hovered
    ? iconMap[hoverBackgroundStyle ?? '']
    : iconMap[backgroundStyle ?? ''];

  // Fallback rendering if required values are missing
  if (!Icon) {
    return <DefaultContent {...props} />;
  }

  return (
    <span
      className={`component ${params.styles ?? ''} p-0 fa-stack ${iconSize}`}
      id={id || undefined}
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
  );
};

/**
 * Static props function for the Social component.
 * Resolves icon size, styles, and color variables from Sitecore rendering params.
 */
export const getStaticProps: GetStaticComponentProps = async (rendering, _layoutData, context) => {
  const language = context?.locale as string;

  // Resolve all presentation-related values
  const [
    color,
    hoverColor,
    backgroundColor,
    hoverBackgroundColor,
    iconSize,
    backgroundStyle,
    hoverBackgroundStyle,
  ] = await Promise.all([
    getColorCssVars(rendering.params?.['Color'], language),
    getColorCssVars(rendering.params?.['Hover Color'], language),
    getColorCssVars(rendering.params?.['Background Color'], language),
    getColorCssVars(rendering.params?.['Hover Background Color'], language),
    getRenderingParameterLookupValue(rendering.params?.['Icon Size'], language),
    getRenderingParameterLookupValue(rendering.params?.['Background Style'], language),
    getRenderingParameterLookupValue(rendering.params?.['Hover Background Style'], language),
  ]);

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
