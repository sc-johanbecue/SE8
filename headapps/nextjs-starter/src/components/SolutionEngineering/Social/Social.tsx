import React, { JSX } from 'react';
import {
  TextField,
  LinkField,
  ComponentParams,
  ComponentRendering,
  GetStaticComponentProps,
} from '@sitecore-content-sdk/nextjs';

import {
  IconRenderingParameters,
  getIconRenderingParameters,
} from 'lib/SolutionEngineering/XMC-BaseRenderingParameters/XMC-IconBaseRenderingParameters';

import { Default as IconLink } from '../Link/IconLink';

const debuggingEnabled = false;

/**
 * Field definitions expected from Sitecore.
 */
export interface Fields {
  Icon: {
    id: string;
    url: string;
    name: string;
    displayName: string;
    fields: {
      Icon: TextField;
    };
  };
  Link: LinkField;
}

type StaticProps = {
  iconRenderingParameters: IconRenderingParameters;
};

/**
 * Component props for Social icon link.
 */
type SocialProps = {
  rendering: ComponentRendering;
  params: ComponentParams;
  fields: Fields;
  isNested?: boolean;
} & StaticProps;

/**
 * The default exported Social component renders a single icon link
 * with hover states, background styling, and dynamic coloring.
 */
export const Default = (props: SocialProps): JSX.Element => {
  const id = props.rendering.uid + '-social';

  if (debuggingEnabled) {
    console.log('[Social - Default] - id:' + id);
    console.log('[Social - Default] - params:' + JSON.stringify(props.params));
    console.log('[Social - Default] - rendering:' + JSON.stringify(props.rendering));
    console.log('[Social - Default] - isNested:' + JSON.stringify(props.isNested));
    console.log('[Social - Default] - fields:' + JSON.stringify(props.fields));
    console.log(
      '[Social - Default] - iconRenderingParameters:' +
        JSON.stringify(props.iconRenderingParameters)
    );
  }

  return (
    <IconLink
      rendering={props.rendering}
      params={props.params}
      isNested={props.isNested}
      fields={{
        Icon: props.fields.Icon.fields.Icon,
        Link: props.fields.Link,
      }}
      iconRenderingParameters={props.iconRenderingParameters}
    ></IconLink>
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
      '[Social - getStaticProps] - iconRenderingParameters:' +
        JSON.stringify(iconRenderingParameters)
    );
  }

  return { iconRenderingParameters };
};
