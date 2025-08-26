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

const debuggingEnabled = false;
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
  if (debuggingEnabled) {
    console.log(
      '[XMC-RenderingParameterLookup - getRenderingParameterLookupValue] RenderingParameterLookupItemId:' +
        JSON.stringify(RenderingParameterLookupItemId)
    );
    console.log(
      '[XMC-RenderingParameterLookup - getRenderingParameterLookupValue] language:' +
        JSON.stringify(RenderingParameterLookupItemId)
    );
  }

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

      if (debuggingEnabled) {
        console.log(
          `[RenderingParameterLookup - getRenderingParameterLookupValue] result.item?.RenderingParameterLookup:`,
          result.item?.RenderingParameterLookup
        );
      }

      if (result.item?.RenderingParameterLookup?.value) {
        RenderingParameterLookup = result.item.RenderingParameterLookup.value;
      }
    } catch (err) {
      console.warn(
        `[XMC-RenderingParameterLookup - getRenderingParameterLookupValue] Failed to fetch presentation style value for ID ${RenderingParameterLookupItemId}:`,
        err
      );
      return null;
    }
  }

  return RenderingParameterLookup;
}

// export async function getImageClassNameRenderingParametersValue(
//   ImageClassNamesRenderingParameterLookupItemId: string | undefined,
//   language: string
// ): Promise<{ imageClassNames: string; imageContainerClassNames: string } | null> {
//   if (debuggingEnabled) {
//     console.log(
//       '[XMC-RenderingParameterLookup - getImageClassNameRenderingParametersValue] ImageClassNamesRenderingParameterLookupItemId:' +
//         JSON.stringify(ImageClassNamesRenderingParameterLookupItemId)
//     );
//     console.log(
//       '[XMC-RenderingParameterLookup - getImageClassNameRenderingParametersValue] language:' +
//         JSON.stringify(ImageClassNamesRenderingParameterLookupItemId)
//     );
//   }

//   if (ImageClassNamesRenderingParameterLookupItemId === undefined || language === undefined) {
//     return null;
//   }

//   const endpoint = `${process.env.NEXT_PUBLIC_SITECORE_GRAPHQL_ENDPOINT}?sc_apikey=${process.env.NEXT_PUBLIC_SITECORE_API_KEY}`;
//   const client = new GraphQLClient(endpoint);

//   const query = gql`
//     query GetRenderingParameterLookupValue(
//   $RenderingParameterLookupItemId: String!
//   $language: String!
// ) {
//   item(path: $RenderingParameterLookupItemId, language: $language) {
//     ImageClassNames: field(name: "Image Class Names") {
//       value
//     }
//     ImageContainerClassNames: field(name: "Image Container Class Names") {
//       value
//     }
//   }
//   `;

//   let imageClassNameRenderingParameters = { imageClassNames: '', imageContainerClassNames: '' };

//   if (ImageClassNamesRenderingParameterLookupItemId) {
//     try {
//       const result = await client.request<{
//         item?: {
//           ImageClassNames?: { value: string };
//           ImageContainerClassNames?: { value: string };
//         };
//       }>(query, {
//         ImageClassNamesRenderingParameterLookupItemId,
//         language,
//       });

//       if (debuggingEnabled) {
//         console.log(
//           `[RenderingParameterLookup - getImageClassNameRenderingParametersValue] result.item?.RenderingParameterLookup:`,
//           result.item?.ImageClassNames
//         );
//       }

//       imageClassNameRenderingParameters = {
//         imageClassNames: result.item?.ImageClassNames?.value as string,
//         imageContainerClassNames: result.item?.ImageContainerClassNames?.value as string,
//       };
//     } catch (err) {
//       console.warn(
//         `[XMC-RenderingParameterLookup - getImageClassNameRenderingParametersValue] Failed to fetch presentation style value for ID ${ImageClassNamesRenderingParameterLookupItemId}:`,
//         err
//       );
//     }
//   }

//   return imageClassNameRenderingParameters;
// }

export async function getRenderingParameterValue(
  RenderingParameterValue: string | undefined
): Promise<string | null> {
  if (debuggingEnabled) {
    console.log(
      '[XMC-RenderingParameterLookup - getRenderingParameterValue] RenderingParameterValue:' +
        JSON.stringify(RenderingParameterValue)
    );
  }

  if (RenderingParameterValue === undefined) {
    return '';
  }

  return RenderingParameterValue;
}
