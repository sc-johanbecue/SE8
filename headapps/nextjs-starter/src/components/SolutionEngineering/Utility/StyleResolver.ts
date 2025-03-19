// styleResolver.ts

import { GraphQLRequestClient } from '@sitecore-jss/sitecore-jss-nextjs/graphql';

const graphQLEndpoint =
  process.env.SITECORE_GRAPHQL_ENDPOINT || 'https://your-sitecore-instance/sitecore/api/graph';
const client = new GraphQLRequestClient(graphQLEndpoint);

/**
 * Defines the expected shape of the GraphQL response for the Style item.
 */
interface GetStyleItemResponse {
  item: {
    fields: {
      value: {
        value: string;
      };
    };
  };
}

/**
 * Fetches the 'value' field from a Sitecore Style item using a GraphQL query.
 *
 * @param referenceId - The GUID from the DropLink/DropTree field.
 * @returns A Promise resolving to the Style item's value.
 */
export async function fetchStyleValue(referenceId: string): Promise<string> {
  const query = `
    query GetStyleItem($id: String!) {
      item(id: $id) {
        fields {
          value {
            value
          }
        }
      }
    }
  `;
  const variables = { id: referenceId };

  try {
    const response = await client.request<GetStyleItemResponse>(query, variables);
    return response?.item?.fields?.value?.value || '';
  } catch (error) {
    console.error(`Error fetching style for ${referenceId}:`, error);
    throw error;
  }
}

/**
 * Resolves a single style reference using its GUID.
 *
 * @param referenceId - The GUID from the DropLink/DropTree field.
 * @returns A Promise resolving to the Style item's value.
 */
export async function resolveStyleReference(referenceId: string): Promise<string> {
  if (!referenceId) return '';
  try {
    const value = await fetchStyleValue(referenceId);
    return value;
  } catch (error) {
    console.error(`Error resolving style for ${referenceId}:`, error);
    return '';
  }
}
