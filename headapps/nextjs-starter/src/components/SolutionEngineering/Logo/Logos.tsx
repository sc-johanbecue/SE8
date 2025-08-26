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
import {
  getListRenderingParameters,
  ListRenderingParameters,
} from 'lib/SolutionEngineering/XMC-BaseRenderingParameters/XMC-ListBaseRenderingParameters';
import { Default as Logo, Fields } from './Logo';
import {
  buildListContainerClasses,
  joinClassNames,
} from 'lib/SolutionEngineering/Utils/ComponentUtils';

const debuggingEnabled = false;

type StaticProps = {
  children?: (Fields & { id: string })[];
  imageRenderingParameters: ImageRenderingParameters;
  listRenderingParameters: ListRenderingParameters;
};

/**
 * Final props type combining Sitecore rendering info + presentation props.
 */
type LogosContainerProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  isNested?: boolean;
} & StaticProps;

/**
 * Default component renderer for the Logos container.
 * Maps child items into <Logo> components with proper visual and interaction props.
 */
export const Default = (props: LogosContainerProps): JSX.Element => {
  const id = props.rendering.uid + '-logos';

  if (debuggingEnabled) {
    console.log('[Logos - Default] - id:' + id);
    console.log('[Logos - Default] - params:' + JSON.stringify(props.params));
    console.log('[Logos - Default] - rendering:' + JSON.stringify(props.rendering));
    console.log('[Logos - Default] - isNested:' + JSON.stringify(props.isNested));
    console.log('[Logos - Default] - children:' + JSON.stringify(props.children));
    console.log(
      '[Logos - Default] - listRenderingParameters:' + JSON.stringify(props.listRenderingParameters)
    );
    console.log(
      '[Logos - Default] - imageRenderingParameters:' +
        JSON.stringify(props.imageRenderingParameters)
    );
  }

  const listLayoutStyle = buildListContainerClasses(props.listRenderingParameters.listLayoutStyle);

  const wrapperClassNames = props.isNested
    ? listLayoutStyle
    : joinClassNames('component', props.params.styles, listLayoutStyle);

  return (
    <div className={wrapperClassNames} id={id}>
      {props.children?.length ? (
        props.children.map((child, index) => {
          const key = `${id}-${index}-logo`;
          if (debuggingEnabled) console.log('[Logos - Default] render key:', key);

          return (
            <Logo
              key={key}
              rendering={{ ...props.rendering, dataSource: child.id }}
              params={{
                ...props.params,
                RenderingIdentifier: `logo-${child.id}`,
              }}
              fields={{
                Logo: child.Logo,
                Link: child.Link,
              }}
              isNested={true}
              imageRenderingParameters={props.imageRenderingParameters}
            />
          );
        })
      ) : (
        <span className="text-sm text-gray-500">No logos are configured.</span>
      )}
    </div>
  );
};

/**
 * Static props fetcher for the Logos component.
 * Loads visual parameters (color, layout, hover, etc.) and child data from Sitecore.
 */
export const getStaticProps: GetStaticComponentProps = async (rendering, _layoutData, context) => {
  const language = context?.locale as string;

  // Resolve all presentation-related values
  const imageRenderingParameters = await getImageRenderingParameters(rendering, language);
  const listRenderingParameters = await getListRenderingParameters(rendering, language);

  // Fetch child items for this Socials component
  const children = await getTypedChildItems<{
    Logo: ImageField;
    Link: LinkField;
  }>(rendering.dataSource, language, ['Logo', 'Link']);

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
