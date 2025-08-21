import React, { JSX, useState } from 'react';
import {
  TextField,
  ComponentParams,
  ComponentRendering,
  GetStaticComponentProps,
} from '@sitecore-content-sdk/nextjs';

import {
  IconRenderingParameters,
  getIconRenderingParameters,
} from 'lib/SolutionEngineering/XMC-BaseRenderingParameters/XMC-IconBaseRenderingParameters';

import * as FaIcons6 from 'react-icons/fa6';
// Import all FontAwesome v6 icons
import { IconType } from 'react-icons';
import { joinClassNames } from 'lib/SolutionEngineering/Utils/ClassNameUtils';
// Type definition for any react-icons icon

const debuggingEnabled = false;

/**
 * Field definitions expected from Sitecore.
 */
export interface Fields {
  Icon: TextField;
}

type StaticProps = {
  iconRenderingParameters: IconRenderingParameters;
};

/**
 * Component props for Social icon link.
 */
type IconProps = {
  rendering: ComponentRendering;
  params: ComponentParams;
  fields: Fields;
  isNested?: boolean;
} & StaticProps;

/**
 * The default exported Social component renders a single icon link
 * with hover states, background styling, and dynamic coloring.
 */
export const Default = (props: IconProps): JSX.Element => {
  const id = props.rendering.uid + '-icon';

  if (debuggingEnabled) {
    console.log('[Icon - Default] - id:' + id);
    console.log('[Icon - Default] - fields:' + JSON.stringify(props.fields));
    console.log('[Icon - Default] - params:' + JSON.stringify(props.params));
    console.log('[Icon - Default] - rendering:' + JSON.stringify(props.rendering));
    console.log('[Logo - Default] - isNested:' + JSON.stringify(props.isNested));
    console.log(
      '[Icon - Default] - iconRenderingParameters:' + JSON.stringify(props.iconRenderingParameters)
    );
  }

  // Local state to track hover status
  const [hovered, setHovered] = useState(false);

  // Get icon name string from Sitecore TextField
  const iconName = typeof props.fields.Icon?.value === 'string' ? props.fields.Icon.value : '';
  if (debuggingEnabled) {
    console.log('[BaseIcon] - icon:' + JSON.stringify(props.fields.Icon));
  }
  // Map all available FontAwesome icons into an object for lookup
  const iconMap: Record<string, IconType> = { ...FaIcons6 };

  // Resolve foreground icon component based on the icon name
  const Icon = iconMap[iconName];

  // Resolve background icon component, which changes on hover
  const IconBackground = iconMap[props.iconRenderingParameters.iconStyle ?? ''];

  const baseWrapperClassNames = joinClassNames(
    'p-0',
    'fa-stack',
    props.iconRenderingParameters.iconSize
  );

  const wrapperClassName = props.isNested
    ? baseWrapperClassNames
    : joinClassNames('component', props.params.styles, baseWrapperClassNames);

  return (
    <span
      // Wrapper span for icon stack (FontAwesome stack styling)
      className={wrapperClassName}
      id={id} // Ensure unique id for DOM
      style={{ flexShrink: 0 }} // Prevent shrinking inside flex layouts
      // Hover listeners to update state
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Render background icon if defined (fills "fa-stack-2x" layer) */}
      {IconBackground && (
        <IconBackground
          className="fa-stack-2x"
          style={{
            // Use Sitecore color variables for hover/non-hover background
            color: hovered
              ? props.iconRenderingParameters.hoveredIconBackgroundColor?.cssVar
                ? `var(${props.iconRenderingParameters.hoveredIconBackgroundColor.cssVar})`
                : ''
              : props.iconRenderingParameters.iconBackgroundColor?.cssVar
                ? `var(${props.iconRenderingParameters.iconBackgroundColor.cssVar})`
                : 'transparent',
          }}
        />
      )}

      {/* Render foreground icon (sits on "fa-stack-1x" layer) */}
      <Icon
        className="fa-stack-1x"
        style={{
          top: '0.5em', // Slight vertical alignment adjustment
          // Switch between normal and hover colors
          color: hovered
            ? props.iconRenderingParameters.hoveredIconColor?.cssVar
              ? `var(${props.iconRenderingParameters.hoveredIconColor.cssVar})`
              : ''
            : props.iconRenderingParameters.iconColor?.cssVar
              ? `var(${props.iconRenderingParameters.iconColor.cssVar})`
              : '',
          transition: 'color 0.2s ease', // Smooth hover color transition
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
  const iconRenderingParameters = await getIconRenderingParameters(rendering, language);

  if (debuggingEnabled) {
    console.log(
      '[Icon - getStaticProps] - iconRenderingParameters:' + JSON.stringify(iconRenderingParameters)
    );
  }

  return { iconRenderingParameters };
};
