/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * XMC-PresentationStyle.ts
 *
 * Utility function for retrieving the value of a Sitecore rendering parameter
 * (typically used for settings like "PresentationStyle" that point to a lookup item).
 *
 * This function:
 * - Fetches a Sitecore item by ID (or path)
 * - Extracts the `value` field of that item
 * - Returns the string value (e.g., "text-lg" or "btn-sm")
 */

import { GraphQLClient, gql } from 'graphql-request';

/**
 * Retrieves the "Value" field from a given Sitecore item.
 *
 * This is typically used when a rendering parameter like "PresentationStyle" points to a lookup item
 * which contains a `Value` field (e.g., used to control Tailwind CSS class names).
 *
 * @param PresentationStyleItemId - Sitecore item ID or path of the "PresentationStyle" lookup item
 * @param language - Language to use in the query (e.g., "en")
 * @returns A string value from the item's "Value" field (e.g., "text-sm"), or null if not found
 */
export async function getPresentationStyleValue(
  PresentationStyleItemId: string | undefined,
  language: string
): Promise<string | null> {
  if (PresentationStyleItemId === undefined || language === undefined) {
    return null;
  }

  const endpoint = `${process.env.NEXT_PUBLIC_SITECORE_GRAPHQL_ENDPOINT}?sc_apikey=${process.env.NEXT_PUBLIC_SITECORE_API_KEY}`;
  const client = new GraphQLClient(endpoint);

  const query = gql`
    query GetPresentationStyleValue($PresentationStyleItemId: String!, $language: String!) {
      item(path: $PresentationStyleItemId, language: $language) {
        PresentationStyle: field(name: "value") {
          value
        }
      }
    }
  `;

  let PresentationStyle = '';

  if (PresentationStyleItemId) {
    try {
      const result = await client.request<{
        item?: { PresentationStyle?: { value: string } };
      }>(query, {
        PresentationStyleItemId,
        language,
      });

      console.warn(
        `[getPresentationStyleValue] result.item?.PresentationStyle:`,
        result.item?.PresentationStyle
      );

      if (result.item?.PresentationStyle?.value) {
        PresentationStyle = result.item.PresentationStyle.value;
      }
    } catch (err) {
      console.warn(
        `[getPresentationStyleValue] Failed to fetch presentation style value for ID ${PresentationStyleItemId}:`,
        err
      );
      return null;
    }
  }

  return PresentationStyle;
}
