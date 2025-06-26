import { fetchColorPalette } from 'lib/SolutionEngineering/fetchColorPalette';
import { TAILWIND_VARIABLE_PREFIX } from 'lib/SolutionEngineering/constants';
import React from 'react';

const ColorPaletteStyle = async () => {
  const x = await fetchColorPalette();
  console.log('ColorPaletteStyle props:', x);

  const cssVars = Object.entries(x)
    .map(([key, value]) => `--${TAILWIND_VARIABLE_PREFIX}-${key}: ${value};`)
    .join(' ');

  return <style>{`:root { ${cssVars} }`}</style>;
};

export default ColorPaletteStyle;
