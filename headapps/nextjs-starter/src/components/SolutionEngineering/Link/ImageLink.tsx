import React, { JSX } from 'react';
import {
  ImageField,
  LinkField,
  ComponentParams,
  ComponentRendering,
  GetStaticComponentProps,
} from '@sitecore-content-sdk/nextjs';

import { BaseLink } from './BaseLink';
import { Default as Image } from '../Image/Image';

import {
  ImageRenderingParameters,
  getImageRenderingParameters,
} from 'lib/SolutionEngineering/XMC-BaseRenderingParameters/XMC-ImageBaseRenderingParameters';
import { joinClassNames } from 'lib/SolutionEngineering/Utils/ComponentUtils';

const debuggingEnabled = false;

/**
 * Field definitions expected from Sitecore.
 */
interface Fields {
  Image: ImageField;
  Link: LinkField;
}

type StaticProps = {
  imageRenderingParameters: ImageRenderingParameters;
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
  const id = props.rendering.uid + '-imageLink';

  if (debuggingEnabled) {
    console.log('[ImageLink - Default] - id:' + id);
    console.log('[ImageLink - Default] - params:' + JSON.stringify(props.params));
    console.log('[ImageLink - Default] - rendering:' + JSON.stringify(props.rendering));
    console.log('[ImageLink - Default] - isNested:' + JSON.stringify(props.isNested));
    console.log('[ImageLink - Default] - fields:' + JSON.stringify(props.fields));
    console.log(
      '[ImageLink - Default] - imageRenderingParameters:' +
        JSON.stringify(props.imageRenderingParameters)
    );
  }

  const baseWrapperClassNames = joinClassNames('p-0');

  const wrapperClassNames = props.isNested
    ? baseWrapperClassNames
    : joinClassNames('component', props.params.styles, baseWrapperClassNames);

  return (
    <BaseLink link={props.fields.Link} className={wrapperClassNames} id={id} isNested={true}>
      <Image
        rendering={props.rendering}
        params={props.params}
        fields={props.fields}
        imageRenderingParameters={props.imageRenderingParameters}
        isNested={true}
      />
    </BaseLink>
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
      '[ImageLink - getStaticProps] - imageRenderingParameters:' +
        JSON.stringify(imageRenderingParameters)
    );
  }
  return { imageRenderingParameters };
};
