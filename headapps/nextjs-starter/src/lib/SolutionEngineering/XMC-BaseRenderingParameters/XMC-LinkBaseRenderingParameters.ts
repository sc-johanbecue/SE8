import { ComponentRendering } from '@sitecore-content-sdk/nextjs';
import { getRenderingParameterLookupValue } from 'lib/SolutionEngineering/XMC-RenderingParameterLookup';

const debuggingEnabled = false;

/**
 * Presentation-related props resolved from getStaticProps.
 */
export type LinkRenderingParameters = {
  iconLocation?: string | null;
};

/**
 * Resolve presentation props for link-based components from rendering params.
 */
export async function getLinkRenderingParameters(
  rendering: ComponentRendering,
  language: string
): Promise<LinkRenderingParameters> {
  if (debuggingEnabled) {
    console.log(
      '[XMC-LinkRenderingParameters - getLinkRenderingParameters]' +
        JSON.stringify(rendering.params)
    );
  }

  const [iconLocation] = await Promise.all([
    getRenderingParameterLookupValue(rendering.params?.['Icon Location'], language),
  ]);

  return {
    iconLocation: iconLocation,
  };
}
