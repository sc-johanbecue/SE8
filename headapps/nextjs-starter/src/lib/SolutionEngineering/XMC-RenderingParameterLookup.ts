/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * XMC-RenderingParameterLookup.ts
 *
 * Utility function for retrieving the value of a Sitecore rendering parameter
 * (typically used for settings like "RenderingParameterLookup" that point to a lookup item).
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
 * This is typically used when a rendering parameter like "RenderingParameterLookup" points to a lookup item
 * which contains a `Value` field (e.g., used to control Tailwind CSS class names).
 *
 * @param RenderingParameterLookupItemId - Sitecore item ID or path of the "RenderingParameterLookup" lookup item
 * @param language - Language to use in the query (e.g., "en")
 * @returns A string value from the item's "Value" field (e.g., "text-sm"), or null if not found
 */
export async function getRenderingParameterLookupValue(
  RenderingParameterLookupItemId: string | undefined,
  language: string
): Promise<string | null> {
  if (RenderingParameterLookupItemId === undefined || language === undefined) {
    return null;
  }

  const endpoint = `${process.env.NEXT_PUBLIC_SITECORE_GRAPHQL_ENDPOINT}?sc_apikey=${process.env.NEXT_PUBLIC_SITECORE_API_KEY}`;
  const client = new GraphQLClient(endpoint);

  const query = gql`
    query GetRenderingParameterLookupValue(
      $RenderingParameterLookupItemId: String!
      $language: String!
    ) {
      item(path: $RenderingParameterLookupItemId, language: $language) {
        RenderingParameterLookup: field(name: "Value") {
          value
        }
      }
    }
  `;

  let RenderingParameterLookup = '';

  if (RenderingParameterLookupItemId) {
    try {
      const result = await client.request<{
        item?: { RenderingParameterLookup?: { value: string } };
      }>(query, {
        RenderingParameterLookupItemId,
        language,
      });

      console.warn(
        `[getRenderingParameterLookupValue] result.item?.RenderingParameterLookup:`,
        result.item?.RenderingParameterLookup
      );

      if (result.item?.RenderingParameterLookup?.value) {
        RenderingParameterLookup = result.item.RenderingParameterLookup.value;
      }
    } catch (err) {
      console.warn(
        `[getRenderingParameterLookupValue] Failed to fetch presentation style value for ID ${RenderingParameterLookupItemId}:`,
        err
      );
      return null;
    }
  }

  return RenderingParameterLookup;
}
