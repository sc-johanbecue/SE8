import { ComponentRendering } from '@sitecore-content-sdk/nextjs';
import { getRenderingParameterLookupValue } from 'lib/SolutionEngineering/XMC-RenderingParameterLookup';

const debuggingEnabled = false;

/**
 * Presentation-related props resolved from getStaticProps.
 */
export type ImageRenderingParameters = {
  imageHeight?: string | null;
  imageWidth?: string | null;
  imageFit?: string | null;
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

  const [imageHeight, imageWidth, imageFit] = await Promise.all([
    getRenderingParameterLookupValue(rendering.params?.['Image Height'], language),
    getRenderingParameterLookupValue(rendering.params?.['Image Width'], language),
    getRenderingParameterLookupValue(rendering.params?.['Image Fit'], language),
  ]);

  return {
    imageHeight: imageHeight,
    imageWidth: imageWidth,
    imageFit: imageFit,
  };
}
