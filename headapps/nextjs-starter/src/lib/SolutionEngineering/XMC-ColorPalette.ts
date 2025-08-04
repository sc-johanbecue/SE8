/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * XMC-ColorPalette.ts
 *
 * Utility functions for fetching and structuring color palette data from Sitecore XM Cloud via GraphQL.
 * Includes:
 *  - Flattening hierarchical color folders into key-value hex map
 *  - Resolving CSS variable names from color items with optional prefix
 */

import { GraphQLClient, gql } from 'graphql-request';
import { getContentRootPath } from './XMC-Content';

/**
 * Fetches a structured color palette from Sitecore and flattens it into a key-value map.
 *
 * @param siteName - The Sitecore site name (e.g., "demo-site")
 * @param language - Language code (e.g., "en")
 * @returns An object containing:
 *  - prefix: kebab-case string used for CSS variable naming
 *  - colorMap: map of kebab-case color names to hex codes
 */
export async function getColorPalette(
  siteName: string,
  language: string
): Promise<{
  prefix: string;
  colorMap: Record<string, string>;
}> {
  const endpoint = `${process.env.NEXT_PUBLIC_SITECORE_GRAPHQL_ENDPOINT}?sc_apikey=${process.env.NEXT_PUBLIC_SITECORE_API_KEY}`;
  const client = new GraphQLClient(endpoint);

  console.log(`Fetching color palette for site: ${siteName}, language: ${language}`);

  const query = gql`
    query GetBackgroundColor($path: String!, $language: String!) {
      item(path: $path, language: $language) {
        name
        prefix: field(name: "Prefix") {
          value
        }
        colorPalette: children {
          results {
            name

            colorFolder: children {
              results {
                color: name
                name: field(name: "Name") {
                  value
                }
                hexColorCode: field(name: "HexColorCode") {
                  value
                }
              }
            }
          }
        }
      }
    }
  `;

  const contentRoot = await getContentRootPath(siteName, language);
  const colorPaletteItemPath = `${contentRoot}/Presentation/Color Palette`;
  console.log(`Color palette item path: ${colorPaletteItemPath}`);
  const response = await client.request<any>(query, {
    path: colorPaletteItemPath as string,
    language: language as string,
  });

  const colorMap: Record<string, string> = {};
  const prefix = response?.item?.prefix?.value?.replace(/\s+/g, '-').toLowerCase();
  const paletteGroups = response?.item?.colorPalette?.results;

  for (const group of paletteGroups ?? []) {
    for (const color of group?.colorFolder?.results ?? []) {
      const rawName = color?.color;
      const hex = color?.hexColorCode?.value;
      if (!rawName || !hex) continue;

      // Convert "Primary Color 1" → "primary-color-1"
      const kebab = rawName.replace(/\s+/g, '-').toLowerCase();
      colorMap[kebab] = hex;
      console.log(`Mapped color: ${kebab} = ${hex}`);
    }
  }

  return {
    prefix,
    colorMap,
  };
}

/**
 * Type for resolved color variable names used in Tailwind-compatible theming.
 */
export type ColorCssVars = {
  cssVar: string;
  contrastCssVar: string;
};

/**
 * Resolves the Tailwind-compatible CSS variable names for a color item in Sitecore.
 *
 * @param colorItemId - The path or ID of the color item
 * @param client - An initialized GraphQLClient
 * @param language - The language to query (e.g., "en")
 * @returns An object with:
 *  - cssVar: the CSS variable name (e.g., "--prefix-color")
 *  - contrastCssVar: the contrast version (e.g., "--prefix-color-contrast")
 */
export async function getColorCssVars(
  colorItemId: string | undefined,
  language: string
): Promise<ColorCssVars | null> {
  const endpoint = `${process.env.NEXT_PUBLIC_SITECORE_GRAPHQL_ENDPOINT}?sc_apikey=${process.env.NEXT_PUBLIC_SITECORE_API_KEY}`;
  const client = new GraphQLClient(endpoint);

  const query = gql`
    query GetColorCssVars($id: String!, $language: String!) {
      item(path: $id, language: $language) {
        name
        parent {
          parent {
            prefix: field(name: "Prefix") {
              value
            }
          }
        }
      }
    }
  `;

  let colorKey = '';

  if (colorItemId) {
    try {
      const result = await client.request<{
        item?: {
          name?: string;
          parent: {
            parent: { prefix: { value: string } };
          };
        };
      }>(query, {
        id: colorItemId,
        language,
      });

      if (result.item?.name && result.item?.parent?.parent?.prefix.value) {
        const prefix = result.item.parent.parent.prefix.value.replace(/\s+/g, '-').toLowerCase();
        const name = result.item.name.replace(/\s+/g, '-').toLowerCase();
        colorKey = `${prefix}-${name}`;
      }
    } catch (err) {
      console.warn(`[getColorCssVars] Failed to fetch color item for ID ${colorItemId}:`, err);
      return null;
    }
  }

  if (colorKey) {
    return {
      cssVar: `--${colorKey}`,
      contrastCssVar: `--${colorKey}-contrast`,
    };
  } else {
    return null;
  }
}
