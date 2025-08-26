import { ComponentRendering } from '@sitecore-content-sdk/nextjs';
import { getRenderingParameterLookupValue } from 'lib/SolutionEngineering/XMC-RenderingParameterLookup';

const debuggingEnabled = true;

/**
 * Presentation-related props resolved from getStaticProps.
 */
export type ImageRenderingParameters = {
  imageFit: string;
  imageLayoutStyles: string;
  imageWrapperLayoutStyles: string;
};

/**
 * Resolve presentation props for icon-based components from rendering params.
 */
export async function getImageRenderingParameters(
  rendering: ComponentRendering,
  language: string
): Promise<ImageRenderingParameters> {
  if (debuggingEnabled) {
    console.log(
      '[XMC-ImageRenderingParameters - getImageRenderingParameters]' +
        JSON.stringify(rendering.params)
    );
  }

  const [imageFit, imageLayoutStyles, imageWrapperLayoutStyles] = await Promise.all([
    getRenderingParameterLookupValue(rendering.params?.['Image Fit'], language),
    getRenderingParameterLookupValue(rendering.params?.['Image Layout Styles'], language),
    getRenderingParameterLookupValue(rendering.params?.['Image Wrapper Layout Styles'], language),
  ]);

  return {
    imageFit: imageFit as string,
    imageLayoutStyles: imageLayoutStyles as string,
    imageWrapperLayoutStyles: imageWrapperLayoutStyles as string,
  };
}
