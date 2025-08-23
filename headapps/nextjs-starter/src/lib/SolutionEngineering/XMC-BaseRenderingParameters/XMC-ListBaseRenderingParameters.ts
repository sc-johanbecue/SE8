import { ComponentRendering } from '@sitecore-content-sdk/nextjs';
import { getRenderingParameterLookupValue } from 'lib/SolutionEngineering/XMC-RenderingParameterLookup';

const debuggingEnabled = false;

/**
 * Presentation-related props resolved from getStaticProps.
 */
export type ListRenderingParameters = {
  gridLayout: string | null;
};

/**
 * Resolve presentation props for icon-based components from rendering params.
 */
export async function getListRenderingParameters(
  rendering: ComponentRendering,
  language: string
): Promise<ListRenderingParameters> {
  if (debuggingEnabled) {
    console.log(
      '[XMC-ListRenderingParameters - getListRenderingParameters]' +
        JSON.stringify(rendering.params)
    );
  }

  const [gridLayout] = await Promise.all([
    getRenderingParameterLookupValue(rendering.params?.['Grid Layout'], language),
  ]);

  return {
    gridLayout: gridLayout,
  };
}
