/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * XMC-ColorPalette.ts
 *
 * This function queries the Sitecore Layout Service GraphQL endpoint to retrieve a
 * structured color palette based on the provided site name and language. It extracts
 * primary, secondary, and neutral color groups and maps them into a flat object with
 * kebab-case keys and hex color values.
 */

import { GraphQLClient, gql } from 'graphql-request';

/**
 * Fetch a structured color palette from Sitecore for the given site and language.
 *
 * @param siteName - Name of the Sitecore site (e.g., "demo-site")
 * @param language - Language code (e.g., "en")
 * @returns A record of color names mapped to their hex values (e.g., { primary-dark: '#123456' })
 */
export async function getColorPalette(
  siteName: string,
  language: string
): Promise<{
  prefix: string;
  colorMap: Record<string, string>;
}> {
  // Construct the Sitecore GraphQL endpoint
  const endpoint = `${process.env.NEXT_PUBLIC_SITECORE_GRAPHQL_ENDPOINT}?sc_apikey=${process.env.NEXT_PUBLIC_SITECORE_API_KEY}`;
  const client = new GraphQLClient(endpoint);

  console.log(`Fetching color palette for site: ${siteName}, language: ${language}`);

  // Define the GraphQL query to retrieve color palette fields
  const query = gql`
    query GetStructuredColorPalette {
      layout(site: "${siteName}", routePath: "/", language: "${language}") {
        item {
          parent {
            colorPalette: field(name: "Color Palette") {
              ... on LookupField {
                targetItem {
                  prefix: field (name: "Prefix")
                  {
                    jsonValue
                  }
                  primaryColors: field(name: "Primary Colors") {
                    ... on MultilistField {
                      targetItems {
                        name
                        fields: field(name: "HexColorCode") {
                          ... on TextField {
                            value
                          }
                        }
                      }
                    }
                  }
                  secondaryColors: field(name: "Secondary Colors") {
                    ... on MultilistField {
                      targetItems {
                        name
                        fields: field(name: "HexColorCode") {
                          ... on TextField {
                            value
                          }
                        }
                      }
                    }
                  }
                  neutralColors: field(name: "Neutral Colors") {
                    ... on MultilistField {
                      targetItems {
                        name
                        fields: field(name: "HexColorCode") {
                          ... on TextField {
                            value
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  // Execute the GraphQL query and extract the result
  const response = await client.request<any>(query);
  const colorPaletteItem = response?.layout?.item?.parent?.colorPalette?.targetItem;

  // Initialize the result map
  const colorPalette: {
    prefix: string;
    colorMap: Record<string, string>;
  } = {
    prefix: '',
    colorMap: {},
  };

  // Helper function to flatten a color group into the result map
  const extractColors = (colorItems: any[]) => {
    colorItems?.forEach((item: any) => {
      const name = item?.name;
      const hex = item?.fields?.value;

      if (!name || !hex) return;

      // Convert color name to kebab-case (e.g., "Primary Light" → "primary-light")
      const kebabCaseKey = name.trim().toLowerCase().replace(/\s+/g, '-');
      colorPalette.colorMap[kebabCaseKey] = hex;

      console.log(`Mapped color: ${kebabCaseKey} = ${hex}`);
    });
  };

  colorPalette.prefix = colorPaletteItem.prefix.jsonValue.value;

  // Process all color groups
  extractColors(colorPaletteItem?.primaryColors?.targetItems);
  extractColors(colorPaletteItem?.secondaryColors?.targetItems);
  extractColors(colorPaletteItem?.neutralColors?.targetItems);

  return colorPalette;
}
