import React, { JSX } from 'react';
import {
  TextField,
  LinkField,
  ComponentParams,
  ComponentRendering,
  GetStaticComponentProps,
} from '@sitecore-content-sdk/nextjs';

import { getTypedChildItems } from 'lib/SolutionEngineering/XMC-Content';

import {
  ScalableVectorGraphicRenderingParameters,
  getScalableVectorGraphicRenderingParameters,
} from 'lib/SolutionEngineering/XMC-BaseRenderingParameters/XMC-ScalableVectorGraphicBaseRenderingParameters';

import {
  getListRenderingParameters,
  ListRenderingParameters,
} from 'lib/SolutionEngineering/XMC-BaseRenderingParameters/XMC-ListBaseRenderingParameters';

import { Default as ScalableVectorGraphic, Fields } from './ScalableVectorGraphic';
import {
  buildListContainerClasses,
  joinClassNames,
} from 'lib/SolutionEngineering/Utils/ComponentUtils';

const debuggingEnabled = false;

/**
 * Presentation-related props resolved from rendering parameters.
 */
type StaticProps = {
  children?: (Fields & { id: string })[];
  scalablevectorgraphicRenderingParameters: ScalableVectorGraphicRenderingParameters;
  listRenderingParameters: ListRenderingParameters;
};

/**
 * Final props type combining Sitecore rendering info + presentation props.
 */
type ScalableVectorGraphicsContainerProps = {
  rendering: ComponentRendering;
  params: ComponentParams;
  isNested?: boolean;
} & StaticProps;

/**
 * Default component renderer for the ScalableVectorGraphics container.
 * Maps child items into <ScalableVectorGraphic> components with proper visual and interaction props.
 */
export const Default = (props: ScalableVectorGraphicsContainerProps): JSX.Element => {
  const id = props.rendering.uid + '-scalablevectorgraphics';

  if (debuggingEnabled) {
    console.log('[ScalableVectorGraphics - Default] - id:' + id);
    console.log('[ScalableVectorGraphics - Default] - params:' + JSON.stringify(props.params));
    console.log(
      '[ScalableVectorGraphics - Default] - rendering:' + JSON.stringify(props.rendering)
    );
    console.log('[ScalableVectorGraphics - Default] - isNested:' + JSON.stringify(props.isNested));
    console.log('[ScalableVectorGraphics - Default] - children:' + JSON.stringify(props.children));
    console.log(
      '[ScalableVectorGraphics - Default] - listRenderingParameters:' +
        JSON.stringify(props.listRenderingParameters)
    );
    console.log(
      '[ScalableVectorGraphics - Default] - scalablevectorgraphicRenderingParameters:' +
        JSON.stringify(props.scalablevectorgraphicRenderingParameters)
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
          const key = `${id}-${index}-scalablevectorgraphic`;
          if (debuggingEnabled) console.log('[ScalableVectorGraphics - Default] render key:', key);

          return (
            <ScalableVectorGraphic
              key={key}
              rendering={{ ...props.rendering, dataSource: child.id }}
              params={{
                ...props.params,
                RenderingIdentifier: child.id,
              }}
              fields={{
                ScalableVectorGraphicPath: child.ScalableVectorGraphicPath,
              }}
              isNested={true}
              scalableVectorGraphicRenderingParameters={
                props.scalablevectorgraphicRenderingParameters
              }
            />
          );
        })
      ) : (
        <span className="text-sm text-gray-500">No scalablevectorgraphics are configured.</span>
      )}
    </div>
  );
};

/**
 * Static props fetcher for the ScalableVectorGraphics component.
 * Loads visual parameters (color, layout, hover, etc.) and child data from Sitecore.
 */
export const getStaticProps: GetStaticComponentProps = async (rendering, _layoutData, context) => {
  const language = context?.locale as string;

  // Resolve all presentation-related values
  const scalablevectorgraphicRenderingParameters =
    await getScalableVectorGraphicRenderingParameters(rendering);
  const listRenderingParameters = await getListRenderingParameters(rendering, language);

  // Fetch child items for this ScalableVectorGraphics component
  const children = await getTypedChildItems<{
    ScalableVectorGraphic: TextField;
    Link: LinkField;
  }>(rendering.dataSource, language, ['ScalableVectorGraphic', 'Link']);

  if (debuggingEnabled) {
    console.log(
      '[ScalableVectorGraphics - getStaticProps] - scalablevectorgraphicRenderingParameters:' +
        JSON.stringify(scalablevectorgraphicRenderingParameters)
    );
    console.log(
      '[ScalableVectorGraphics - getStaticProps] - listRenderingParameters:' +
        JSON.stringify(listRenderingParameters)
    );
    console.log(
      '[ScalableVectorGraphics - getStaticProps] - children:(' +
        children.length +
        '):' +
        JSON.stringify(children)
    );
  }

  return {
    scalablevectorgraphicRenderingParameters,
    listRenderingParameters,
    children,
  };
};
