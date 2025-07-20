export type ContrastResult = {
  color: string;
  contrast: number;
};

function hexToRgb(hex: string): [number, number, number] {
  const parsed = hex.replace('#', '');
  const bigint = parseInt(
    parsed.length === 3
      ? parsed
          .split('')
          .map((c) => c + c)
          .join('')
      : parsed,
    16
  );
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}

function luminance(r: number, g: number, b: number): number {
  const a = [r, g, b].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
}

function contrastRatio(hex1: string, hex2: string): number {
  const [r1, g1, b1] = hexToRgb(hex1);
  const [r2, g2, b2] = hexToRgb(hex2);
  const lum1 = luminance(r1, g1, b1);
  const lum2 = luminance(r2, g2, b2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

export function getContrastsOrdered(backgroundHex: string, candidates: string[]): ContrastResult[] {
  return candidates
    .map((color) => ({
      color,
      contrast: contrastRatio(backgroundHex, color),
    }))
    .sort((a, b) => b.contrast - a.contrast);
}
