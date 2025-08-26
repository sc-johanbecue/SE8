import { ComponentRendering } from '@sitecore-content-sdk/nextjs';
import { FontCssVars, getFontCssVars } from '../XMC-Fonts';
import { getRenderingParameterLookupValue } from '../XMC-RenderingParameterLookup';

const debuggingEnabled = false;

/**
 * Presentation-related props resolved from getStaticProps.
 */
export type FontRenderingParameters = {
  fontFamily: FontCssVars | null;
  fontSize: string;
};

/**
 * Resolve presentation props for font-based components from rendering params.
 */
export async function getFontRenderingParameters(
  rendering: ComponentRendering,
  language: string
): Promise<FontRenderingParameters> {
  if (debuggingEnabled) {
    console.log(
      '[XMC-FontRenderingParameters - getFontRenderingParameters]' +
        JSON.stringify(rendering.params)
    );
  }

  const [fontFamily, fontSize] = await Promise.all([
    getFontCssVars(rendering.params?.['Font Family'], language),
    getRenderingParameterLookupValue(rendering.params?.['Font Size'], language),
  ]);

  return {
    fontFamily: fontFamily,
    fontSize: fontSize as string,
  };
}
