import { ComponentRendering } from '@sitecore-content-sdk/nextjs';
import { getRenderingParameterLookupValue } from 'lib/SolutionEngineering/XMC-RenderingParameterLookup';
import { ColorCssVars, getColorCssVars } from '../XMC-ColorPalette';

const debuggingEnabled = false;

/**
 * Presentation-related props resolved from getStaticProps.
 */
export type IconRenderingParameters = {
  iconColor?: ColorCssVars | null;
  iconBackgroundColor?: ColorCssVars | null;
  iconSize?: string;
  iconStyle?: string;
  hoveredIconColor?: ColorCssVars | null;
  hoveredIconBackgroundColor?: ColorCssVars | null;
};

/**
 * Resolve presentation props for icon-based components from rendering params.
 */
export async function getIconRenderingParameters(
  rendering: ComponentRendering,
  language: string
): Promise<IconRenderingParameters> {
  if (debuggingEnabled) {
    console.log(
      '[XMC-IconRenderingParameters - getIconRenderingParameters]' +
        JSON.stringify(rendering.params)
    );
  }

  const [
    iconColor,
    iconBackgroundColor,
    iconSize,
    iconStyle,
    hoveredIconColor,
    hoveredIconBackgroundColor,
  ] = await Promise.all([
    getColorCssVars(rendering.params?.['Icon Color'], language),
    getColorCssVars(rendering.params?.['Icon Background Color'], language),
    getRenderingParameterLookupValue(rendering.params?.['Icon Size'], language),
    getRenderingParameterLookupValue(rendering.params?.['Icon Style'], language),
    getColorCssVars(rendering.params?.['Hovered Icon Color'], language),
    getColorCssVars(rendering.params?.['Hovered Icon Background Color'], language),
  ]);

  return {
    iconColor: iconColor,
    iconBackgroundColor: iconBackgroundColor,
    iconSize: iconSize as string,
    iconStyle: iconStyle as string,
    hoveredIconColor: hoveredIconColor,
    hoveredIconBackgroundColor: hoveredIconBackgroundColor,
  };
}
