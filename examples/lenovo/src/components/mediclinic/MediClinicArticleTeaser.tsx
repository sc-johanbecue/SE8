import React, { JSX } from 'react';
import {
  Text,
  TextField,
  ComponentParams,
  ComponentRendering,
  GetComponentServerProps,
} from '@sitecore-content-sdk/nextjs';
import { GraphQLRequestClient } from '@sitecore-content-sdk/nextjs/client';
import Link from 'next/link';

type NewsArticle = {
  Category: TextField;
  PublicationDate: TextField;
  Title: TextField;
  Source: TextField;
};

type ComponentProps = {
  url: string;
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: NewsArticle;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const publicationDate = props.fields?.PublicationDate?.value;

  const formattedDate = publicationDate
    ? new Date(publicationDate).toLocaleDateString('en-GB') // 'en-GB' gives dd/mm/yyyy
    : '';

  return (
    <div
      className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
      key={props.params.DynamicPlaceholderId}
    >
      <div className="flex items-center justify-between mb-3">
        <Text
          tag="span"
          field={props.fields.Category}
          className="inline-block px-3 py-1 bg-blue-100 text-cyan-600 text-xs font-semibold rounded"
        />
        <span className="text-sm text-gray-500">{formattedDate}</span>
      </div>
      <Link href={props.url} className="block group">
        <Text
          tag="h3"
          field={props.fields.Title}
          className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors"
        />
        <Text tag="p" field={props.fields.Source} className="text-sm text-gray-600" />
      </Link>
    </div>
  );
};

type ItemUrlResult = { item?: { url?: { path?: string | null } | null } | null };

export const getComponentServerProps: GetComponentServerProps = async (
  rendering,
  _layoutData,
  context
) => {
  const client: GraphQLRequestClient = new GraphQLRequestClient(
    'https://xmc-sitecoresaa8b69-jbe4a93-production734d.sitecorecloud.io/sitecore/api/graph/edge',
    {
      apiKey: '06402ca7af7f4c85bde4b1b7283e071d',
    }
  );

  // Edge GraphQL lets you resolve by id or path. We pass both; one will be used.
  const query = /* GraphQL */ `
    query ItemUrl($path: String, $language: String!) {
      item(path: $path, language: $language) {
        url {
          path
        }
      }
    }
  `;

  const vars = { path: rendering.dataSource, language: context.locale };
  const res = client.request<ItemUrlResult>(query, vars);

  return {
    url: (await res).item?.url?.path ?? null,
  };
};
