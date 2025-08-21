import { ComponentRendering } from '@sitecore-content-sdk/nextjs';
import { getColorCssVars, ColorCssVars } from 'lib/SolutionEngineering/XMC-ColorPalette';

const debuggingEnabled = false;

/**
 * Presentation-related props resolved from getStaticProps.
 */
export type BackgroundColorRenderingParameters = {
  backgroundColor?: ColorCssVars | null;
  hoverBackgroundColor?: ColorCssVars | null;
};

/**
 * Resolve presentation props for icon-based components from rendering params.
 */
export async function getBackgroundColorRenderingParameters(
  rendering: ComponentRendering,
  language: string
): Promise<BackgroundColorRenderingParameters> {
  if (debuggingEnabled) {
    console.log(
      '[XMC-ColorRenderingParameters - getBackgroundColorRenderingParameters]' +
        JSON.stringify(rendering.params)
    );
  }

  const [backgroundColor, hoverBackgroundColor] = await Promise.all([
    getColorCssVars(rendering.params?.['Background Color'], language),
    getColorCssVars(rendering.params?.['Hover Background Color'], language),
  ]);

  return {
    backgroundColor: backgroundColor,
    hoverBackgroundColor: hoverBackgroundColor,
  };
}
