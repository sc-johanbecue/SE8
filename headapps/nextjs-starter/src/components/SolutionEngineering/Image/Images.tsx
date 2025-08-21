import React, { JSX } from 'react';
import {
  ImageField,
  LinkField,
  ComponentParams,
  ComponentRendering,
  GetStaticComponentProps,
} from '@sitecore-content-sdk/nextjs';

import { getTypedChildItems } from 'lib/SolutionEngineering/XMC-Content2';

import {
  getImageRenderingParameters,
  ImageRenderingParameters,
} from 'lib/SolutionEngineering/XMC-BaseRenderingParameters/XMC-ImageBaseRenderingParameters';

import { Default as Image, Fields } from './Image';
import {
  getListRenderingParameters,
  ListRenderingParameters,
} from 'lib/SolutionEngineering/XMC-BaseRenderingParameters/XMC-ListBaseRenderingParameters';
import { joinClassNames } from 'lib/SolutionEngineering/Utils/ClassNameUtils';

const debuggingEnabled = false;

/**
 * Fetches typed child items (Image field) for a given parent.
 */
async function getImageChildren(parentId: string | undefined, language: string | undefined) {
  if (!parentId || !language) {
    console.warn('[getImageChildren] Missing parentId or language.');
    return [];
  }

  const children = await getTypedChildItems<{
    Image: ImageField;
    Link: LinkField;
  }>(parentId, language, ['Image', 'Link']);

  return children;
}

/**
 * Presentation-related props resolved from rendering parameters.
 */
type StaticProps = {
  children?: (Fields & { id: string })[];
  imageRenderingParameters: ImageRenderingParameters;
  listRenderingParameters: ListRenderingParameters;
};

/**
 * Final props type combining Sitecore rendering info + presentation props.
 */
type ImagesContainerProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  isNested?: boolean;
} & StaticProps;

/**
 * Default component renderer for the Images container.
 * Maps child items into <Image> components with proper visual and interaction props.
 */
export const Default = (props: ImagesContainerProps): JSX.Element => {
  const id = props.rendering.uid + '-images';

  if (debuggingEnabled) {
    console.log('[Images - Default] - id:' + id);
    console.log('[Images - Default] - params:' + JSON.stringify(props.params));
    console.log('[Images - Default] - rendering:' + JSON.stringify(props.rendering));
    console.log('[Images - Default] - isNested:' + JSON.stringify(props.isNested));
    console.log('[Images - Default] - children:' + JSON.stringify(props.children));
    console.log(
      '[Images - Default] - listRenderingParameters:' +
        JSON.stringify(props.listRenderingParameters)
    );
    console.log(
      '[Images - Default] - imageRenderingParameters:' +
        JSON.stringify(props.imageRenderingParameters)
    );
  }

  const wrapperClassNames = props.isNested ? '' : joinClassNames('component', props.params.styles);

  return (
    <div className={wrapperClassNames} id={id || undefined}>
      <div
        className={`flex ${props.listRenderingParameters.direction || 'flex-row'} ${props.listRenderingParameters.gap || ''}`}
      >
        {props.children?.length ? (
          props.children.map((child, index) => {
            const key = `${id}-${index}-image`;
            if (debuggingEnabled) console.log('[Logos - Default] render key:', key);

            return (
              <Image
                key={key}
                rendering={{ ...props.rendering, dataSource: child.id }}
                params={{
                  ...props.params,
                  RenderingIdentifier: `image-${child.id}`,
                }}
                fields={{
                  Image: child.Image,
                }}
                isNested={true}
                imageRenderingParameters={props.imageRenderingParameters}
              />
            );
          })
        ) : (
          <span className="text-sm text-gray-500">No images are configured.</span>
        )}
      </div>
    </div>
  );
};

/**
 * Static props fetcher for the Images component.
 * Loads visual parameters (color, layout, hover, etc.) and child data from Sitecore.
 */
export const getStaticProps: GetStaticComponentProps = async (rendering, _layoutData, context) => {
  const language = context?.locale as string;

  // Helper to reduce repetition for parameter lookups
  // Resolve all presentation-related values
  const imageRenderingParameters = await getImageRenderingParameters(rendering, language);
  const listRenderingParameters = await getListRenderingParameters(rendering, language);

  // Fetch child items for this Socials component
  const children = await getImageChildren(rendering.dataSource, language);

  if (debuggingEnabled) {
    console.log(
      '[Logos - getStaticProps] - iconRenderingParameters:' +
        JSON.stringify(imageRenderingParameters)
    );
    console.log(
      '[Logos - getStaticProps] - listRenderingParameters:' +
        JSON.stringify(listRenderingParameters)
    );
    console.log(
      '[Logos - getStaticProps] - children:(' + children.length + '):' + JSON.stringify(children)
    );
  }

  return {
    imageRenderingParameters,
    listRenderingParameters,
    children,
  };
};
