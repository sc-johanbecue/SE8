import { ComponentRendering } from '@sitecore-content-sdk/nextjs';
import { getRenderingParameterValue } from 'lib/SolutionEngineering/XMC-RenderingParameterLookup';

const debuggingEnabled = false;

/**
 * Presentation-related props resolved from getStaticProps.
 */
export type ScalableVectorGraphicRenderingParameters = {
  viewBox: string;
  fill: string;
  layoutStyles: string;
};

/**
 * Resolve presentation props for scalablevectorgraphic-based components from rendering params.
 */
export async function getScalableVectorGraphicRenderingParameters(
  rendering: ComponentRendering
): Promise<ScalableVectorGraphicRenderingParameters> {
  if (debuggingEnabled) {
    console.log(
      '[XMC-ScalableVectorGraphicRenderingParameters - getScalableVectorGraphicRenderingParameters]' +
        JSON.stringify(rendering.params)
    );
  }

  const [viewBox, fill, layoutStyles] = await Promise.all([
    getRenderingParameterValue(rendering.params?.['Scalable Vector Graphic ViewBox']),
    getRenderingParameterValue(rendering.params?.['Scalable Vector Graphic Fill']),
    getRenderingParameterValue(rendering.params?.['Scalable Vector Graphic Layout Styles']),
  ]);

  return {
    viewBox: viewBox as string,
    fill: fill as string,
    layoutStyles: layoutStyles as string,
  };
}
