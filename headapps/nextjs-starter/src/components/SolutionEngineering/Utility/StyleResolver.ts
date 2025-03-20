// // styleResolver.ts

// import { GraphQLRequestClient } from '@sitecore-jss/sitecore-jss-nextjs/graphql';

// // Configure your GraphQL endpoint.
// const graphQLEndpoint =
//   process.env.SITECORE_GRAPHQL_ENDPOINT || 'https://your-sitecore-instance/sitecore/api/graph';
// const client = new GraphQLRequestClient(graphQLEndpoint);

// /**
//  * Defines the expected shape of the GraphQL response for the Style item.
//  */
// interface GetStyleItemResponse {
//   item: {
//     fields: {
//       value: {
//         value: string;
//       };
//     };
//   };
// }

// /**
//  * Defines the type for rendering parameters. Each key maps to a string (the GUID) or is undefined.
//  */
// export interface RenderingParams {
//   [key: string]: string | undefined;
// }

// /**
//  * Fetches the 'value' field from a Sitecore Style item using a GraphQL query.
//  *
//  * @param referenceId - The GUID from the DropLink/DropTree field.
//  * @returns A Promise resolving to the Style item's value.
//  */
// export async function fetchStyleValue(referenceId: string): Promise<string> {
//   const query = `
//     query GetStyleItem($id: String!) {
//       item(id: $id) {
//         fields {
//           value {
//             value
//           }
//         }
//       }
//     }
//   `;
//   const variables = { id: referenceId };

//   try {
//     const response = await client.request<GetStyleItemResponse>(query, variables);
//     return response?.item?.fields?.value?.value || '';
//   } catch (error) {
//     console.error(`Error fetching style for ${referenceId}:`, error);
//     throw error;
//   }
// }

// /**
//  * Resolves style references in the provided rendering parameters.
//  *
//  * @param renderingParams - The rendering parameters object from Sitecore.
//  * @param fields - Array of field names that reference a Style item.
//  * @returns A Promise that resolves to an object mapping field names to style values.
//  */
// export async function resolveStyleReferences(
//   renderingParams: RenderingParams,
//   fields: string[]
// ): Promise<Record<string, string>> {
//   const resolved: Record<string, string> = {};

//   for (const field of fields) {
//     const referenceId = renderingParams[field];
//     if (referenceId) {
//       try {
//         const value = await fetchStyleValue(referenceId);
//         resolved[field] = value;
//       } catch (error) {
//         console.error(`Error resolving style for field "${field}":`, error);
//         resolved[field] = '';
//       }
//     } else {
//       resolved[field] = '';
//     }
//   }

//   return resolved;
// }
