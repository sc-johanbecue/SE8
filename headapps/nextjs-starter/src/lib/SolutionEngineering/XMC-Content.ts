/**
 * Fetches the content root path for a given Sitecore site.
 *
 * This uses the layout query to retrieve the parent item of the current route root.
 * Typically used to dynamically build full item paths from relative routes.
 *
 * @param siteName - The name of the Sitecore site (e.g., "demo-template")
 * @param language - The language to query in (e.g., "en")
 * @returns An object with the `contentRoot` path as a string (e.g., "/sitecore/content/demo-template/home")
 */

import { GraphQLClient, gql } from 'graphql-request';

export async function getContentRootPath(siteName: string, language: string): Promise<string> {
  // Construct the GraphQL endpoint with the Sitecore API key
  const endpoint = `${process.env.NEXT_PUBLIC_SITECORE_GRAPHQL_ENDPOINT}?sc_apikey=${process.env.NEXT_PUBLIC_SITECORE_API_KEY}`;
  const client = new GraphQLClient(endpoint);

  console.log(
    `[getContentRoot] Fetching content root for site: ${siteName}, language: ${language}`
  );

  // GraphQL query to retrieve the parent item path of the current layout root
  const query = gql`
    query getContentRoot($site: String!, $language: String!) {
      layout(site: $site, routePath: "/", language: $language) {
        item {
          contentRoot: parent {
            path
          }
        }
      }
    }
  `;

  // Execute the query with the site name as a variable
  const response = await client.request<{
    layout?: {
      item?: {
        contentRoot?: {
          path: string;
        };
      };
    };
  }>(query, { site: siteName, language: language as string });

  const contentRootPath = response?.layout?.item?.contentRoot?.path;

  if (!contentRootPath) {
    console.warn(`[getContentRoot] No content root found for site: ${siteName}`);
  } else {
    console.log(`[getContentRoot] Content root for ${siteName}:`, contentRootPath);
  }

  return contentRootPath || '';
}

export async function getCopyright(
  siteName: string | undefined,
  language: string | undefined
): Promise<string> {
  if (!siteName || !language) {
    console.warn('[getCopyright] Missing siteName or language, returning empty string.');
    return '';
  }

  // Construct the GraphQL endpoint with the Sitecore API key
  const endpoint = `${process.env.NEXT_PUBLIC_SITECORE_GRAPHQL_ENDPOINT}?sc_apikey=${process.env.NEXT_PUBLIC_SITECORE_API_KEY}`;
  const client = new GraphQLClient(endpoint);

  console.log(
    `[getContentRoot] Fetching copyright from content root for site: ${siteName}, language: ${language}`
  );

  // GraphQL query to retrieve the parent item path of the current layout root
  const query = gql`
    query contentRoot($site: String!, $language: String!) {
      layout(site: $site, routePath: "/", language: $language) {
        item {
          contentRoot: parent {
            copyright: field(name: "Copyright Text") {
              jsonValue
            }
          }
        }
      }
    }
  `;

  // Execute the query with the site name as a variable
  const response = await client.request<{
    layout?: {
      item?: {
        contentRoot?: {
          copyright: {
            jsonValue: string;
          };
        };
      };
    };
  }>(query, { site: siteName, language: language as string });

  const contentRootPath = response?.layout?.item?.contentRoot?.copyright?.jsonValue;

  if (!contentRootPath) {
    console.warn(`[getContentRoot] No content root found for site: ${siteName}`);
  } else {
    console.log(`[getContentRoot] Content root for ${siteName}:`, contentRootPath);
  }

  return contentRootPath || '';
}
