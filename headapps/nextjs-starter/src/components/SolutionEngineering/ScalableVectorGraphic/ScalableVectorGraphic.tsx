import React, { JSX } from 'react';
import {
  TextField,
  ComponentParams,
  ComponentRendering,
  GetStaticComponentProps,
} from '@sitecore-content-sdk/nextjs';

import { joinClassNames } from 'lib/SolutionEngineering/Utils/ComponentUtils';
import {
  getScalableVectorGraphicRenderingParameters,
  ScalableVectorGraphicRenderingParameters,
} from 'lib/SolutionEngineering/XMC-BaseRenderingParameters/XMC-ScalableVectorGraphicBaseRenderingParameters';
// Type definition for any react-scalablevectorgraphics scalablevectorgraphic

const debuggingEnabled = false;

/**
 * Field definitions expected from Sitecore.
 */
export interface Fields {
  ScalableVectorGraphicPath: TextField;
}

type StaticProps = {
  scalableVectorGraphicRenderingParameters: ScalableVectorGraphicRenderingParameters;
};

/**
 * Component props for Social scalablevectorgraphic link.
 */
type ScalableVectorGraphicProps = {
  rendering: ComponentRendering;
  params: ComponentParams;
  fields: Fields;
  isNested?: boolean;
} & StaticProps;

/**
 * The default exported Social component renders a single scalablevectorgraphic link
 * with hover states, background styling, and dynamic coloring.
 */
export const Default = (props: ScalableVectorGraphicProps): JSX.Element => {
  const id = props.rendering.uid + '-scalablevectorgraphic';

  if (debuggingEnabled) {
    console.log('[ScalableVectorGraphic - Default] - id:' + id);
    console.log('[ScalableVectorGraphic - Default] - fields:' + JSON.stringify(props.fields));
    console.log('[ScalableVectorGraphic - Default] - params:' + JSON.stringify(props.params));
    console.log('[ScalableVectorGraphic - Default] - rendering:' + JSON.stringify(props.rendering));
    console.log('[Logo - Default] - isNested:' + JSON.stringify(props.isNested));
    console.log(
      '[ScalableVectorGraphic - Default] - scalableVectorGraphicRenderingParameters:' +
        JSON.stringify(props.scalableVectorGraphicRenderingParameters)
    );
  }

  if (debuggingEnabled) {
    console.log(
      '[BaseScalableVectorGraphic] - scalablevectorgraphic:' +
        JSON.stringify(props.fields.ScalableVectorGraphicPath)
    );
  }

  const baseClassNames = joinClassNames(
    'p-0',
    'fa-stack',
    props.scalableVectorGraphicRenderingParameters.layoutStyles
  );

  const wrapperClassName = props.isNested
    ? baseClassNames
    : joinClassNames('component', props.params.styles, baseClassNames);

  return (
    <svg
      id={id}
      className={wrapperClassName}
      viewBox={props.scalableVectorGraphicRenderingParameters.viewBox as string}
      aria-hidden="true"
      fill={props.scalableVectorGraphicRenderingParameters.fill as string}
    >
      <path d={props.fields.ScalableVectorGraphicPath.value as string} />
    </svg>
  );
};

/**
 * Static props function for the Social component.
 * Resolves scalablevectorgraphic size, styles, and color variables from Sitecore rendering params.
 */
export const getStaticProps: GetStaticComponentProps = async (rendering) => {
  // Resolve all presentation-related values
  const scalableVectorGraphicRenderingParameters =
    await getScalableVectorGraphicRenderingParameters(rendering);

  if (debuggingEnabled) {
    console.log(
      '[ScalableVectorGraphic - getStaticProps] - scalableVectorGraphicRenderingParameters:' +
        JSON.stringify(scalableVectorGraphicRenderingParameters)
    );
  }

  return { scalableVectorGraphicRenderingParameters };
};
