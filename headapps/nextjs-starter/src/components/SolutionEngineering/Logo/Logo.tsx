import React, { JSX } from 'react';
import {
  ImageField,
  LinkField,
  ComponentParams,
  ComponentRendering,
  GetStaticComponentProps,
} from '@sitecore-content-sdk/nextjs';

import {
  ImageRenderingParameters,
  getImageRenderingParameters,
} from 'lib/SolutionEngineering/XMC-BaseRenderingParameters/XMC-ImageBaseRenderingParameters';

import { Default as ImageLink } from '../Link/ImageLink';

const debuggingEnabled = false;

/**
 * Field definitions expected from Sitecore.
 */
export interface Fields {
  Logo: ImageField;
  Link: LinkField;
}

/**
 * Presentation-related props resolved from getStaticProps.
 */
type StaticProps = {
  imageRenderingParameters: ImageRenderingParameters;
};

/**
 * Component props for Logo icon link.
 */
type LogoProps = {
  rendering: ComponentRendering;
  params: ComponentParams;
  fields: Fields;
  isNested?: boolean;
} & StaticProps;

/**
 * The default exported Logo component renders a single icon link
 * with hover states, background styling, and dynamic coloring.
 */
export const Default = (props: LogoProps): JSX.Element => {
  const id = props.rendering.uid + '-logo';

  if (debuggingEnabled) {
    console.log('[Logo - Default] - id:' + id);
    console.log('[Logo - Default] - params:' + JSON.stringify(props.params));
    console.log('[Logo - Default] - rendering:' + JSON.stringify(props.rendering));
    console.log('[Logo - Default] - isNested:' + JSON.stringify(props.isNested));
    console.log('[Logo - Default] - fields:' + JSON.stringify(props.fields));
    console.log(
      '[Logo - Default] - imageRenderingParameters:' +
        JSON.stringify(props.imageRenderingParameters)
    );
  }

  return (
    <ImageLink
      isNested={props.isNested}
      rendering={props.rendering}
      params={props.params}
      imageRenderingParameters={props.imageRenderingParameters}
      fields={{ Image: props.fields.Logo, Link: props.fields.Link }}
    />
  );
};

/**
 * Static props function for the Logo component.
 * Resolves icon size, styles, and color variables from Sitecore rendering params.
 */
export const getStaticProps: GetStaticComponentProps = async (rendering, _layoutData, context) => {
  const language = context?.locale as string;

  const imageRenderingParameters = await getImageRenderingParameters(rendering, language);

  if (debuggingEnabled) {
    console.log(
      '[Logo - getStaticProps] - imageRenderingParameters:' +
        JSON.stringify(imageRenderingParameters)
    );
  }

  return {
    imageRenderingParameters,
  };
};
