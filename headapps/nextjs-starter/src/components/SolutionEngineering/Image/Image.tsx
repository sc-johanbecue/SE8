import React, { JSX } from 'react'; //, useState
import {
  ImageField,
  ComponentParams,
  ComponentRendering,
  GetStaticComponentProps,
} from '@sitecore-content-sdk/nextjs';

import { getRenderingParameterLookupValue } from 'lib/SolutionEngineering/XMC-RenderingParameterLookup';

import * as ImageComponent from './BaseImage';
const Image = ImageComponent.Default;

/**
 * Field definitions expected from Sitecore.
 */
interface Fields {
  Image: ImageField;
}

/**
 * Presentation-related props resolved from getStaticProps.
 */
type ImagePresentationProps = {
  height?: string;
  width?: string;
};

/**
 * Component props for Image icon link.
 */
type ImageProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
} & ImagePresentationProps;

/**
 * The default exported Image component renders a single icon link
 * with hover states, background styling, and dynamic coloring.
 */
export const Default = (props: ImageProps): JSX.Element => {
  return (
    <Image
      image={props.fields.Image}
      params={props.params}
      rendering={props.rendering}
      height={props.height}
      width={props.width}
    />
  );
};

/**
 * Static props function for the Image component.
 * Resolves icon size, styles, and color variables from Sitecore rendering params.
 */
export const getStaticProps: GetStaticComponentProps = async (rendering, _layoutData, context) => {
  const language = context?.locale as string;

  // Resolve all presentation-related values
  const [height, width] = await Promise.all([
    getRenderingParameterLookupValue(rendering.params?.['Height'], language),
    getRenderingParameterLookupValue(rendering.params?.['Width'], language),
  ]);

  console.log('[getStaticProps] Loaded image props:', {
    height,
    width,
  });

  return {
    height,
    width,
  };
};
