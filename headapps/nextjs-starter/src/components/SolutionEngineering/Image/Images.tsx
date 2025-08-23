import React, { JSX } from 'react';
import {
  ImageField,
  LinkField,
  ComponentParams,
  ComponentRendering,
  GetStaticComponentProps,
} from '@sitecore-content-sdk/nextjs';

import { getTypedChildItems } from 'lib/SolutionEngineering/XMC-Content';

import {
  getImageRenderingParameters,
  ImageRenderingParameters,
} from 'lib/SolutionEngineering/XMC-BaseRenderingParameters/XMC-ImageBaseRenderingParameters';

import { Default as Image, Fields } from './Image';
import {
  getListRenderingParameters,
  ListRenderingParameters,
} from 'lib/SolutionEngineering/XMC-BaseRenderingParameters/XMC-ListBaseRenderingParameters';
import {
  buildListContainerClasses,
  joinClassNames,
} from 'lib/SolutionEngineering/Utils/ComponentUtils';

const debuggingEnabled = false;

/** Presentation-related props resolved from rendering parameters. */
type StaticProps = {
  children?: (Fields & { id: string })[];
  imageRenderingParameters: ImageRenderingParameters;
  listRenderingParameters: ListRenderingParameters;
};

/** Final props type combining Sitecore rendering info + presentation props. */
type ImagesContainerProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  isNested?: boolean;
} & StaticProps;

/**
 * Default component renderer for the Images container.
 */
export const Default = (props: ImagesContainerProps): JSX.Element => {
  const id = props.rendering.uid + '-images';

  if (debuggingEnabled) {
    console.log('[Images - Default] id:', id);
    console.log(
      '[Images - Default] listRenderingParameters:',
      JSON.stringify(props.listRenderingParameters)
    );
  }

  const wrapperClassNames = props.isNested ? '' : joinClassNames('component', props.params.styles);

  const listContainerClasses = buildListContainerClasses(props.listRenderingParameters.gridLayout);

  return (
    <div className={wrapperClassNames} id={id || undefined}>
      <div className={listContainerClasses}>
        {props.children?.length ? (
          props.children.map((child, index) => {
            const key = `${id}-${index}-image`;
            return (
              <Image
                key={key}
                rendering={{ ...props.rendering, dataSource: child.id }}
                params={{
                  ...props.params,
                  RenderingIdentifier: `image-${child.id}`,
                }}
                fields={{ Image: child.Image }}
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
 */
export const getStaticProps: GetStaticComponentProps = async (rendering, _layoutData, context) => {
  const language = context?.locale as string;

  const imageRenderingParameters = await getImageRenderingParameters(rendering, language);
  const listRenderingParameters = await getListRenderingParameters(rendering, language);

  const children = await getTypedChildItems<{
    Image: ImageField;
    Link: LinkField;
  }>(rendering.dataSource, language, ['Image', 'Link']);

  if (debuggingEnabled) {
    console.log(
      '[Images - getStaticProps] imageRenderingParameters:',
      JSON.stringify(imageRenderingParameters)
    );
    console.log(
      '[Images - getStaticProps] listRenderingParameters:',
      JSON.stringify(listRenderingParameters)
    );
    console.log('[Images - getStaticProps] children:', children.length);
  }

  return {
    imageRenderingParameters,
    listRenderingParameters,
    children,
  };
};
