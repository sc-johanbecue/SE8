import { ComponentRendering } from '@sitecore-content-sdk/nextjs';
import { getRenderingParameterLookupValue } from 'lib/SolutionEngineering/XMC-RenderingParameterLookup';

const debuggingEnabled = false;

/**
 * Presentation-related props resolved from getStaticProps.
 */
export type ListRenderingParameters = {
  listLayoutStyle: string;
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

  const [listLayoutStyle] = await Promise.all([
    getRenderingParameterLookupValue(rendering.params?.['List Layout Style'], language),
  ]);

  return {
    listLayoutStyle: listLayoutStyle as string,
  };
}
