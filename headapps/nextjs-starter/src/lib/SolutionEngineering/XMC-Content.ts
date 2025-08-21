// /**
//  * Fetches the content root path for a given Sitecore site.
//  *
//  * This uses the layout query to retrieve the parent item of the current route root.
//  * Typically used to dynamically build full item paths from relative routes.
//  *
//  * @param siteName - The name of the Sitecore site (e.g., "demo-template")
//  * @param language - The language to query in (e.g., "en")
//  * @returns An object with the `contentRoot` path as a string (e.g., "/sitecore/content/demo-template/home")
//  */

// import { GraphQLClient, gql } from 'graphql-request';
// import { TextField, LinkField } from '@sitecore-content-sdk/nextjs';

// export async function getContentRootPath(siteName: string, language: string): Promise<string> {
//   // Construct the GraphQL endpoint with the Sitecore API key
//   const endpoint = `${process.env.NEXT_PUBLIC_SITECORE_GRAPHQL_ENDPOINT}?sc_apikey=${process.env.NEXT_PUBLIC_SITECORE_API_KEY}`;
//   const client = new GraphQLClient(endpoint);

//   console.log(
//     `[getContentRoot] Fetching content root for site: ${siteName}, language: ${language}`
//   );

//   // GraphQL query to retrieve the parent item path of the current layout root
//   const query = gql`
//     query getContentRoot($site: String!, $language: String!) {
//       layout(site: $site, routePath: "/", language: $language) {
//         item {
//           contentRoot: parent {
//             path
//           }
//         }
//       }
//     }
//   `;

//   // Execute the query with the site name as a variable
//   const response = await client.request<{
//     layout?: {
//       item?: {
//         contentRoot?: {
//           path: string;
//         };
//       };
//     };
//   }>(query, { site: siteName, language: language as string });

//   const contentRootPath = response?.layout?.item?.contentRoot?.path;

//   if (!contentRootPath) {
//     console.warn(`[getContentRoot] No content root found for site: ${siteName}`);
//   } else {
//     console.log(`[getContentRoot] Content root for ${siteName}:`, contentRootPath);
//   }

//   return contentRootPath || '';
// }

// /**
//  * Retrieves the child item IDs of a given parent Sitecore item.
//  *
//  * @param parentId - The ID (GUID or path) of the parent item.
//  * @param language - The language context for the query (e.g., 'en').
//  * @returns An array of string IDs of the child items, or an empty array if not found.
//  */
// export async function getChildren(
//   parentId: string | undefined,
//   language: string | undefined
// ): Promise<string[]> {
//   // Return an empty array if parentId or language is not provided
//   if (parentId === undefined || language === undefined) {
//     return [];
//   }

//   // Construct the GraphQL endpoint with the Sitecore API key
//   const endpoint = `${process.env.NEXT_PUBLIC_SITECORE_GRAPHQL_ENDPOINT}?sc_apikey=${process.env.NEXT_PUBLIC_SITECORE_API_KEY}`;
//   const client = new GraphQLClient(endpoint);

//   console.log(`[getChildren] Fetching children for item id: ${parentId}, language: ${language}`);

//   // GraphQL query to fetch child items of a given parent item
//   const query = gql`
//     query GetChildren($parentId: String!, $language: String!) {
//       item(path: $parentId, language: $language) {
//         children {
//           results {
//             id
//           }
//         }
//       }
//     }
//   `;

//   // Execute the query using the parent ID and language
//   const result = await client.request<{
//     item?: {
//       children?: {
//         results?: { id: string }[];
//       };
//     };
//   }>(query, { parentId, language });

//   // Map the result to extract just the IDs of the child items
//   const children = result?.item?.children?.results?.map((child) => child.id) || [];

//   // Log the outcome of the query
//   if (!children.length) {
//     console.warn(`[getChildren] No children found for parent id: ${parentId}`);
//   } else {
//     console.log(`[getChildren] ${children.length} children found for parent id: ${parentId}`);
//   }

//   return children;
// }

// /**
//  * Retrieves the child item IDs of a given parent Sitecore item.
//  *
//  * @param parentId - The ID (GUID or path) of the parent item.
//  * @param language - The language context for the query (e.g., 'en').
//  * @returns An array of string IDs of the child items, or an empty array if not found.
//  */
// export async function getSocialChildren(
//   parentId: string | undefined,
//   language: string | undefined
// ): Promise<
//   {
//     icon: { value: TextField };
//     link: {
//       jsonValue: LinkField;
//     };
//   }[]
// > {
//   // Return an empty array if parentId or language is not provided
//   if (parentId === undefined || language === undefined) {
//     return [];
//   }

//   // Construct the GraphQL endpoint with the Sitecore API key
//   const endpoint = `${process.env.NEXT_PUBLIC_SITECORE_GRAPHQL_ENDPOINT}?sc_apikey=${process.env.NEXT_PUBLIC_SITECORE_API_KEY}`;
//   const client = new GraphQLClient(endpoint);

//   console.log(`[getChildren] Fetching children for item id: ${parentId}, language: ${language}`);

//   // GraphQL query to fetch child items of a given parent item
//   const query = gql`
//     query GetChildren($parentId: String!, $language: String!) {
//       item(path: $parentId, language: $language) {
//         children {
//           results {
//             icon: field(name: "Icon") {
//               value
//             }
//             link: field(name: "Link") {
//               jsonValue
//             }
//           }
//         }
//       }
//     }
//   `;

//   // Execute the query using the parent ID and language
//   const result = await client.request<{
//     item?: {
//       children?: {
//         results?: { icon: { value: TextField }; link: { jsonValue: LinkField } }[];
//       };
//     };
//   }>(query, { parentId, language });

//   //console.log(`[getChildren] Result:`, result?.item?.children?.results);
//   console.log(`[getChildren] Result:`, JSON.stringify(result?.item?.children?.results, null, 2));

//   // Map the result to extract just the IDs of the child items
//   const children = result?.item?.children?.results;

//   // Log the outcome of the query
//   if (!children?.length) {
//     console.warn(`[getChildren] No children found for parent id: ${parentId}`);
//     return [];
//   } else {
//     console.log(`[getChildren] ${children.length} children found for parent id: ${parentId}`);
//     return children;
//   }
// }

// export async function getCopyright(
//   siteName: string | undefined,
//   language: string | undefined
// ): Promise<string> {
//   if (!siteName || !language) {
//     console.warn('[getCopyright] Missing siteName or language, returning empty string.');
//     return '';
//   }

//   // Construct the GraphQL endpoint with the Sitecore API key
//   const endpoint = `${process.env.NEXT_PUBLIC_SITECORE_GRAPHQL_ENDPOINT}?sc_apikey=${process.env.NEXT_PUBLIC_SITECORE_API_KEY}`;
//   const client = new GraphQLClient(endpoint);

//   console.log(
//     `[getContentRoot] Fetching copyright from content root for site: ${siteName}, language: ${language}`
//   );

//   // GraphQL query to retrieve the parent item path of the current layout root
//   const query = gql`
//     query contentRoot($site: String!, $language: String!) {
//       layout(site: $site, routePath: "/", language: $language) {
//         item {
//           contentRoot: parent {
//             copyright: field(name: "Copyright Text") {
//               jsonValue
//             }
//           }
//         }
//       }
//     }
//   `;

//   // Execute the query with the site name as a variable
//   const response = await client.request<{
//     layout?: {
//       item?: {
//         contentRoot?: {
//           copyright: {
//             jsonValue: string;
//           };
//         };
//       };
//     };
//   }>(query, { site: siteName, language: language as string });

//   const contentRootPath = response?.layout?.item?.contentRoot?.copyright?.jsonValue;

//   if (!contentRootPath) {
//     console.warn(`[getContentRoot] No content root found for site: ${siteName}`);
//   } else {
//     console.log(`[getContentRoot] Content root for ${siteName}:`, contentRootPath);
//   }

//   return contentRootPath || '';
// }
