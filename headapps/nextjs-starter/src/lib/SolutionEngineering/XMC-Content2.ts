import { GraphQLClient, gql } from 'graphql-request';

// Raw field structure returned by Sitecore GraphQL
type RawSitecoreField = {
  name: string;
  jsonValue: unknown;
};

type SitecoreChildItemRaw = {
  id: string;
  fields: RawSitecoreField[];
};

// 1. Generic fetcher for raw child items
export async function getChildItems(
  parentId: string | undefined,
  language: string | undefined
): Promise<SitecoreChildItemRaw[]> {
  if (!parentId || !language) return [];

  const endpoint = `${process.env.NEXT_PUBLIC_SITECORE_GRAPHQL_ENDPOINT}?sc_apikey=${process.env.NEXT_PUBLIC_SITECORE_API_KEY}`;
  const client = new GraphQLClient(endpoint);

  const query = gql`
    query GetChildren($parentId: String!, $language: String!) {
      item(path: $parentId, language: $language) {
        children {
          results {
            id
            fields {
              name
              jsonValue
            }
          }
        }
      }
    }
  `;

  const result = await client.request<{
    item?: { children?: { results?: SitecoreChildItemRaw[] } };
  }>(query, { parentId, language });

  return result?.item?.children?.results ?? [];
}

// 2. Generic function to extract and type specified fields
export async function getTypedChildItems<TFieldMap extends Record<string, unknown>>(
  parentId: string,
  language: string,
  fieldsToExtract: (keyof TFieldMap)[]
): Promise<(TFieldMap & { id: string })[]> {
  const children = await getChildItems(parentId, language);

  return children.map((child) => {
    const typedFields: Partial<TFieldMap> = {};

    for (const fieldName of fieldsToExtract) {
      const rawField = child.fields.find((f) => f.name === fieldName);
      if (rawField) {
        typedFields[fieldName] = rawField.jsonValue as TFieldMap[typeof fieldName];
      }
    }

    return {
      id: child.id,
      ...typedFields,
    } as TFieldMap & { id: string };
  });
}
