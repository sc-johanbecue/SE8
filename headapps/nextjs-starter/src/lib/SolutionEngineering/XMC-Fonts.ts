/* eslint-disable @typescript-eslint/no-explicit-any */

import { GraphQLClient, gql } from 'graphql-request';
import { getContentRootPath } from './XMC-Content';

export async function getFonts(
  siteName: string,
  language: string
): Promise<{
  prefix: string;
  fontMap: Record<string, string>;
}> {
  const endpoint = `${process.env.NEXT_PUBLIC_SITECORE_GRAPHQL_ENDPOINT}?sc_apikey=${process.env.NEXT_PUBLIC_SITECORE_API_KEY}`;
  const client = new GraphQLClient(endpoint);

  const query = gql`
    query GetFonts($path: String!, $language: String!) {
      item(path: $path, language: $language) {
        name
        prefix: field(name: "Prefix") {
          value
        }
        children {
          results {
            name
            fontFamily: field(name: "Font Family") {
              value
            }
          }
        }
      }
    }
  `;

  const root = await getContentRootPath(siteName, language);
  const path = `${root}/Presentation/Rendering Parameter Options/Fonts`;

  const response = await client.request<any>(query, {
    path,
    language,
  });

  const fontMap: Record<string, string> = {};
  const prefix = response?.item?.prefix?.value?.replace(/\s+/g, '-').toLowerCase() ?? 'se';

  for (const font of response?.item?.children?.results ?? []) {
    const kebabName = font?.name?.replace(/\s+/g, '-').toLowerCase();
    const value = font?.fontFamily?.value;
    if (kebabName && value) {
      fontMap[kebabName] = value;
    }
  }

  return { prefix, fontMap };
}

/**
 * Type for resolved font variable names used in Tailwind-compatible theming.
 */
export type FontCssVars = {
  cssVar: string;
};

/**
 * Resolves the Tailwind-compatible CSS variable names for a font item in Sitecore.
 *
 * @param fontItemId - The path or ID of the font item
 * @param client - An initialized GraphQLClient
 * @param language - The language to query (e.g., "en")
 * @returns An object with:
 *  - cssVar: the CSS variable name (e.g., "--prefix-font")
 *  - contrastCssVar: the contrast version (e.g., "--prefix-font-contrast")
 */
export async function getFontCssVars(
  fontItemId: string | undefined,
  language: string
): Promise<FontCssVars | null> {
  const endpoint = `${process.env.NEXT_PUBLIC_SITECORE_GRAPHQL_ENDPOINT}?sc_apikey=${process.env.NEXT_PUBLIC_SITECORE_API_KEY}`;
  const client = new GraphQLClient(endpoint);

  const query = gql`
    query GetFontCssVars($id: String!, $language: String!) {
      item(path: $id, language: $language) {
        name
        parent {
          prefix: field(name: "Prefix") {
            value
          }
        }
      }
    }
  `;

  let fontKey = '';

  if (fontItemId) {
    try {
      const result = await client.request<{
        item?: {
          name?: string;
          parent: { prefix: { value: string } };
        };
      }>(query, {
        id: fontItemId,
        language,
      });

      console.log(`[XMC-Fonts - getFontCssVars] result:`, result);

      if (result.item?.name && result.item?.parent?.prefix.value) {
        const prefix = result.item.parent.prefix.value.replace(/\s+/g, '-').toLowerCase();
        const name = result.item.name.replace(/\s+/g, '-').toLowerCase();
        fontKey = `${prefix}-${name}`;
      }
    } catch (err) {
      console.warn(`[getFontCssVars] Failed to fetch font item for ID ${fontItemId}:`, err);
      return null;
    }
  }

  if (fontKey) {
    return {
      cssVar: `--${fontKey}`,
    };
  } else {
    return null;
  }
}
