import React from 'react';
import { getFonts } from 'lib/SolutionEngineering/XMC-Fonts';
import { LayoutServiceData } from '@sitecore-content-sdk/nextjs';

interface FontPaletteStyleProps {
  layoutData: LayoutServiceData;
}

const FontPaletteStyle = async ({ layoutData }: FontPaletteStyleProps) => {
  const siteName = layoutData.sitecore.context.site?.name as string;
  const language = layoutData.sitecore.context.language as string;

  const fontPalette = await getFonts(siteName, language);
  if (!fontPalette || Object.keys(fontPalette.fontMap).length === 0) {
    console.warn('[FontPaletteStyle] No fonts found.');
    return null;
  }

  const cssVariables = Object.entries(fontPalette.fontMap).map(
    ([fontKey, fontValue]) => `--${fontPalette.prefix}-${fontKey}: ${fontValue};`
  );

  const combinedStyles = cssVariables.join(' ');

  return <style>{`:root { ${combinedStyles} }`}</style>;
};

export default FontPaletteStyle;
