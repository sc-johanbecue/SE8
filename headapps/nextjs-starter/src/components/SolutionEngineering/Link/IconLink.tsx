import React, { JSX } from 'react';
import {
  TextField,
  LinkField,
  ComponentParams,
  ComponentRendering,
  GetStaticComponentProps,
} from '@sitecore-content-sdk/nextjs';

import { BaseLink } from './BaseLink';
import { Default as Icon } from '../Icon/Icon';

import {
  IconRenderingParameters,
  getIconRenderingParameters,
} from 'lib/SolutionEngineering/XMC-BaseRenderingParameters/XMC-IconBaseRenderingParameters';
import { joinClassNames } from 'lib/SolutionEngineering/Utils/ComponentUtils';

const debuggingEnabled = false;

/**
 * Field definitions expected from Sitecore.
 */
interface Fields {
  Icon: TextField;
  Link: LinkField;
}

type StaticProps = {
  iconRenderingParameters: IconRenderingParameters;
};

/**
 * Component props for Link icon link.
 */
type LinkProps = {
  rendering: ComponentRendering;
  params: ComponentParams;
  fields: Fields;
  isNested?: boolean;
} & StaticProps;

/**
 * The default exported Link component renders a single icon link
 * with hover states, background styling, and dynamic coloring.
 */
export const Default = (props: LinkProps): JSX.Element => {
  const id = props.rendering.uid + '-iconlink';

  if (debuggingEnabled) {
    console.log('[IconLink - Default] - id:' + id);
    console.log('[IconLink - Default] - fields:' + JSON.stringify(props.fields));
    console.log('[IconLink - Default] - params:' + JSON.stringify(props.params));
    console.log('[IconLink - Default] - isNested:' + JSON.stringify(props.isNested));
    console.log('[IconLink - Default] - rendering:' + JSON.stringify(props.rendering));
    console.log(
      '[IconLink - Default] - iconRenderingParameters:' +
        JSON.stringify(props.iconRenderingParameters)
    );
  }

  const baseWrapperClassNames = joinClassNames('p-0');

  const wrapperClassNames = props.isNested
    ? baseWrapperClassNames
    : joinClassNames('component', props.params.styles, baseWrapperClassNames);

  return (
    <BaseLink link={props.fields.Link} isNested={true} className={wrapperClassNames} id={id}>
      <Icon
        rendering={props.rendering}
        params={props.params}
        fields={props.fields}
        isNested={true}
        iconRenderingParameters={props.iconRenderingParameters}
      ></Icon>
    </BaseLink>
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
      '[IconLink - getStaticProps] - iconRenderingParameters:' +
        JSON.stringify(iconRenderingParameters)
    );
  }

  return { iconRenderingParameters };
};
