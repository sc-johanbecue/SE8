import { ComponentRendering } from '@sitecore-content-sdk/nextjs';
import { getColorCssVars, ColorCssVars } from 'lib/SolutionEngineering/XMC-ColorPalette';

const debuggingEnabled = false;

/**
 * Presentation-related props resolved from getStaticProps.
 */
export type ColorRenderingParameters = {
  color?: ColorCssVars | null;
  hoverColor?: ColorCssVars | null;
};

/**
 * Resolve presentation props for icon-based components from rendering params.
 */
export async function getColorRenderingParameters(
  rendering: ComponentRendering,
  language: string
): Promise<ColorRenderingParameters> {
  if (debuggingEnabled) {
    console.log(
      '[XMC-ColorRenderingParameters - getColorRenderingParameters]' +
        JSON.stringify(rendering.params)
    );
  }

  const [color, hoverColor] = await Promise.all([
    getColorCssVars(rendering.params?.['Color'], language),
    getColorCssVars(rendering.params?.['Hover Color'], language),
  ]);

  return {
    color: color,
    hoverColor: hoverColor,
  };
}
