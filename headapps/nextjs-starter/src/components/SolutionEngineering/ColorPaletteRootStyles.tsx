/**
 * ColorPaletteStyle.tsx
 *
 * Injects global CSS custom properties from the Sitecore color palette into the `:root` scope.
 * Also calculates contrast variables for accessibility, based on the best contrast between
 * neutral and accent colors.
 *
 * Accent colors = all keys starting with "primary" or "secondary"
 * Neutral colors = all other color keys
 */

import React from 'react';
import { getColorPalette } from 'lib/SolutionEngineering/XMC-ColorPalette';
import { LayoutServiceData } from '@sitecore-content-sdk/nextjs';
import { getContrastsOrdered } from 'lib/SolutionEngineering/NeutralContrastColors';

const debuggingEnabled = false;

interface ColorPaletteStyleProps {
  layoutData: LayoutServiceData;
}

const ColorPaletteStyle = async ({ layoutData }: ColorPaletteStyleProps) => {
  const siteName = layoutData.sitecore.context.site?.name as string;
  const language = layoutData.sitecore.context.language as string;

  /** 1. Fetch color palette from Sitecore **/
  const colorPalette = await getColorPalette(siteName, language);

  if (!colorPalette.colorMap || Object.keys(colorPalette.colorMap).length === 0) {
    if (debuggingEnabled) {
      console.warn(
        '[ColorPaletteRootStyles - ColorPaletteStyle] No colors returned from Sitecore.'
      );
    }
    return null;
  }

  if (debuggingEnabled) {
    console.log(
      '[ColorPaletteRootStyles - ColorPaletteStyle] Loaded palette:',
      colorPalette.colorMap
    );
  }
  /** 2. Create base CSS variables like --tw-color-primary-dark: #123456; **/
  const baseCssVariables = Object.entries(colorPalette.colorMap).map(
    ([colorKey, colorValue]) => `--${colorPalette.prefix}-${colorKey}: ${colorValue};`
  );

  /** 3. Classify colors **/
  const isAccent = (key: string): boolean =>
    key.startsWith('primary') || key.startsWith('secondary');

  const neutralColors = Object.entries(colorPalette.colorMap)
    .filter(([colorKey]) => !isAccent(colorKey))
    .map(([, colorValue]) => colorValue)
    .filter((hex): hex is string => typeof hex === 'string' && hex.length >= 4);

  const accentColors = Object.entries(colorPalette.colorMap)
    .filter(([colorKey]) => isAccent(colorKey))
    .map(([, colorValue]) => colorValue)
    .filter((hex): hex is string => typeof hex === 'string' && hex.length >= 4);

  if (debuggingEnabled) {
    console.log('[ColorPaletteRootStyles - ColorPaletteStyle] Neutral colors:', neutralColors);
    console.log('[ColorPaletteRootStyles - ColorPaletteStyle] Accent colors:', accentColors);
  }
  /** 4. Generate contrast CSS variables **/
  const contrastCssVariables: string[] = [];

  for (const [colorKey, rawHex] of Object.entries(colorPalette.colorMap)) {
    // Normalize hex format
    const hex = rawHex?.startsWith('#') ? rawHex : `#${rawHex}`;

    if (isAccent(colorKey)) {
      const bestNeutralContrast = getContrastsOrdered(hex, neutralColors)[0];
      if (bestNeutralContrast) {
        contrastCssVariables.push(
          `--${colorPalette.prefix}-${colorKey}-contrast: ${bestNeutralContrast.color};`
        );
        if (debuggingEnabled) {
          console.log(
            `[ColorPaletteRootStyles - ColorPaletteStyle] Contrast for ${colorKey}:`,
            bestNeutralContrast.color
          );
        }
      }
    } else {
      const bestAccentContrast = getContrastsOrdered(hex, accentColors)[0];
      if (bestAccentContrast) {
        contrastCssVariables.push(
          `--${colorPalette.prefix}-${colorKey}-contrast: ${bestAccentContrast.color};`
        );
        if (debuggingEnabled) {
          console.log(
            `[ColorPaletteRootStyles - ColorPaletteStyle] Contrast for ${colorKey}:`,
            bestAccentContrast.color
          );
        }
      }
    }
  }

  /** 5. Combine and inject all CSS variables **/
  const allCssVariables = [...baseCssVariables, ...contrastCssVariables].join(' ');
  if (debuggingEnabled) {
    console.log(
      '[ColorPaletteRootStyles - ColorPaletteStyle] Final CSS variables injected:',
      allCssVariables
    );
  }
  return <style>{`:root { ${allCssVariables} }`}</style>;
};

export default ColorPaletteStyle;
