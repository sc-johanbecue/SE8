/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { GraphQLClient, gql } from 'graphql-request';

export async function fetchColorPalette(): Promise<Record<string, string>> {
  const endpoint = `${process.env.NEXT_PUBLIC_SITECORE_GRAPHQL_ENDPOINT}?sc_apikey=${process.env.NEXT_PUBLIC_SITECORE_API_KEY}`;
  const client = new GraphQLClient(endpoint);

  const query = gql`
    query GetFlatColorPalette {
      layout(site: "generic-demo-template", routePath: "/", language: "en") {
        item {
          parent {
            colorPalette: field(name: "Color Palette") {
              ... on LookupField {
                targetItem {
                  fields {
                    name
                    ... on LookupField {
                      targetItem {
                        fields: field(name: "Hex Color Code") {
                          HexColorCode: value
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

  const data = await client.request<any>(query);
  const fields = data?.layout?.item?.parent?.colorPalette?.targetItem?.fields;
  const colors: Record<string, string> = {};

  fields?.forEach((field: any) => {
    const rawName = field?.name;
    const hex = field?.targetItem?.fields?.HexColorCode;

    if (!rawName || !hex) return;

    let key = rawName.trim();

    if (key.toLowerCase().startsWith('primary color')) {
      key = key.replace(/\s+/g, '-').toLowerCase();
    } else if (key.toLowerCase().startsWith('secondary color')) {
      key = key.replace(/\s+/g, '-').toLowerCase();
    } else {
      key = 'neutral-color-' + key.toLowerCase().replace(/\s+/g, '-');
    }

    colors[key] = hex;
    console.log(`Color: ${key} = ${hex}`);
  });

  return colors;
}

export function getColorStyleTag(colors: Record<string, string>): React.ReactElement {
  const cssVars = Object.entries(colors)
    .map(([key, value]) => `--tw-${key}: ${value};`)
    .join(' ');

  return <style>{`:root { ${cssVars} }`}</style>;
}
