import React, { JSX } from 'react';
import {
  ImageField,
  Image as JssImage,
  ComponentParams,
  ComponentRendering,
  GetStaticComponentProps,
} from '@sitecore-content-sdk/nextjs';

import {
  ImageRenderingParameters,
  getImageRenderingParameters,
} from 'lib/SolutionEngineering/XMC-BaseRenderingParameters/XMC-ImageBaseRenderingParameters';

import { joinClassNames } from 'lib/SolutionEngineering/Utils/ComponentUtils';

const debuggingEnabled = true;

/**
 * Field definitions expected from Sitecore.
 */
export interface Fields {
  Image: ImageField;
}

type StaticProps = {
  imageRenderingParameters: ImageRenderingParameters;
};

/**
 * Component props for Image icon link.
 */
type ImageProps = {
  rendering: ComponentRendering;
  params: ComponentParams;
  fields: Fields;
  isNested?: boolean;
} & StaticProps;

/**
 * The default exported Image component renders a single icon link
 * with hover states, background styling, and dynamic coloring.
 */
export const Default = (props: ImageProps): JSX.Element => {
  const id = props.rendering.uid + '-image';

  if (debuggingEnabled) {
    console.log('[Image - Default] - id:' + id);
    console.log('[Image - Default] - fields:' + JSON.stringify(props.fields));
    console.log('[Image - Default] - params:' + JSON.stringify(props.params));
    console.log('[Image - Default] - isNested:' + JSON.stringify(props.isNested));
    console.log('[Image - Default] - rendering:' + JSON.stringify(props.rendering));
    console.log(
      '[Image - Default] - imageRenderingParameters:' +
        JSON.stringify(props.imageRenderingParameters)
    );
  }

  const imageWrapperLayoutStyles = joinClassNames(
    props.imageRenderingParameters.imageWrapperLayoutStyles
  );
  const imageWrapperClassNames = props.isNested
    ? imageWrapperLayoutStyles
    : joinClassNames('component', props.params.styles, imageWrapperLayoutStyles);

  const imageLayoutStyles = joinClassNames(
    props.imageRenderingParameters.imageLayoutStyles,
    props.imageRenderingParameters.imageFit
  );

  const imageClassNames = props.isNested
    ? imageLayoutStyles
    : joinClassNames('', imageLayoutStyles);

  return (
    <div className={imageWrapperClassNames} id={id}>
      {/* Sitecore JSS Image component (handles media URLs, alt text, etc.) */}
      <JssImage field={props.fields.Image} className={imageClassNames} />
    </div>
  );
};

/**
 * Static props function for the Image component.
 * Resolves icon size, styles, and color variables from Sitecore rendering params.
 */
export const getStaticProps: GetStaticComponentProps = async (rendering, _layoutData, context) => {
  const language = context?.locale as string;

  const imageRenderingParameters = await getImageRenderingParameters(rendering, language);

  if (debuggingEnabled) {
    console.log(
      '[Image - getStaticProps] - imageRenderingParameters:' +
        JSON.stringify(imageRenderingParameters)
    );
  }

  return { imageRenderingParameters };
};
