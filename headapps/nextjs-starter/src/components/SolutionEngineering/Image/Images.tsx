import React, { JSX } from 'react';
import {
  ImageField,
  LinkField,
  ComponentParams,
  ComponentRendering,
  GetStaticComponentProps,
} from '@sitecore-content-sdk/nextjs';

import { getTypedChildItems } from 'lib/SolutionEngineering/XMC-Content2';
import { getRenderingParameterLookupValue } from 'lib/SolutionEngineering/XMC-RenderingParameterLookup';

import * as ImageComponent from './Image';
const Image = ImageComponent.Default;

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
 * Child item structure returned by getImageChildren.
 */
type ImageChild = {
  id: string;
  Image: ImageField;
  Link: LinkField;
};

/**
 * Presentation-related props resolved from rendering parameters.
 */
type ImagePresentationProps = {
  children?: ImageChild[];
  height: string;
  width: string;
  direction?: string;
  gap?: string;
};

/**
 * Final props type combining Sitecore rendering info + presentation props.
 */
type ImagesContainerProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
} & ImagePresentationProps;

/**
 * Default component renderer for the Images container.
 * Maps child items into <Image> components with proper visual and interaction props.
 */
export const Default = (props: ImagesContainerProps): JSX.Element => {
  const { rendering, params, children, height, width, direction, gap } = props;

  const id = props.rendering.uid + '-images';

  return (
    <div className={`component ${params?.styles || ''}`} id={id || undefined}>
      <div className={`flex ${direction || 'flex-row'} ${gap || ''}`}>
        {children?.length ? (
          children.map((child, index) => (
            <>
              <Image
                key={index}
                rendering={{ ...rendering, dataSource: child.id }}
                params={{
                  ...params,
                  RenderingIdentifier: `image-${child.id}`,
                }}
                fields={{
                  Image: child.Image,
                }}
                height={height}
                width={width}
              />
            </>
          ))
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
  const resolveParam = (key: string) =>
    getRenderingParameterLookupValue(rendering.params?.[key], language);

  // Fetch all design-related rendering parameters in parallel
  const [height, width, direction, gap] = await Promise.all([
    resolveParam('Height'),
    resolveParam('Width'),
    resolveParam('Direction'),
    resolveParam('Gap'),
  ]);

  // Fetch child items for this Images component
  const children = await getImageChildren(rendering.dataSource, language);

  console.log('[getStaticProps] Loaded images:', children);

  return {
    height,
    width,
    direction,
    gap,
    children,
  };
};
