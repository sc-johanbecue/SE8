/* eslint-disable  @typescript-eslint/no-explicit-any */

// FetchRenderingConfiguration.ts
// ----------------------------------------------------------------------
// This module contains utility functions for fetching and processing
// rendering configuration data from Sitecore. It centralizes the logic
// for extracting drop link style values and concatenating them.
// ----------------------------------------------------------------------
import { GraphQLRequestClient } from '@sitecore-jss/sitecore-jss-nextjs/graphql';
import config from 'temp/config';

/**
 * Interface representing the structure of rendering configuration fields.
 */
export interface GraphQLData {
  item: {
    fields: {
      id: string;
      name: string;
      jsonValue: {
        value: { [key: string]: any };
      } | null;
    }[];
  };
}

export interface RenderingConfigurationFields {
  RenderingConfigurationFields: RenderingConfigurationField;
}

export interface RenderingConfigurationFields {
  RenderingConfigurationFields: RenderingConfigurationField;
}

export interface RenderingConfigurationField {
  [key: string]: any;
}

/**
 * Extracts a string value from a rendering configuration drop link style field.
 *
 * The function checks if the field exists and navigates its nested structure to
 * retrieve the actual string value. If the field or expected value is missing,
 * it returns an empty string.
 *
 * @param field - The field object from which to extract the value.
 * @returns The extracted string value or an empty string.
 */
export function getValueFromRenderingConfigurationDropLinkStyle(item: any) {
  return item?.fields?.Value?.value || '';
}

/**
 * Concatenates multiple rendering configuration style fields into a single string.
 *
 * This function applies the drop link style extraction to each provided field,
 * filters out any empty results, and joins the non-empty strings with a single space.
 *
 * @param fields - A list of rendering configuration field objects.
 * @returns A concatenated string of the extracted values.
 */
export function concatenateClassNames(...fields: string[]) {
  return fields
    .map((field) => getValueFromRenderingConfigurationDropLinkStyle(field))
    .filter(Boolean)
    .join(' ');
}

/**
 * Fetches rendering configuration data from Sitecore.
 *
 * @param path - The Sitecore path to the rendering configuration.
 * @param fields - An array of field names to retrieve.
 * @returns A promise that resolves to an object containing the rendering configuration fields.
 *
 */
export async function fetchRenderingConfiguration(
  path: string,
  fieldNames: string[]
): Promise<RenderingConfigurationField> {
  console.log('Starting fetchRenderingConfiguration');
  const graphQLClient = new GraphQLRequestClient(config.graphQLEndpoint, {
    apiKey: config.sitecoreApiKey,
  });

  // The query remains the same except for the dynamic path
  const query = `
    query {
      item(
        path: "${path}"
        language: "en"
      ) {
        fields {
          id
          name
          jsonValue
        }
      }
    }
  `;

  const externalData: RenderingConfigurationField = {};

  try {
    const response = await graphQLClient.request<GraphQLData>(query);
    // For each field requested, find the corresponding field in the response and add it to externalData.
    fieldNames.forEach((fieldName) => {
      const foundField = response.item.fields.find((field: any) => field.name === fieldName);
      if (foundField) {
        externalData[fieldName] = foundField.jsonValue;
      }
    });
  } catch (error) {
    console.error('Error fetching external data:', error);
  }

  console.log(externalData);
  // console.log('Ended fetchRenderingConfiguration');

  return { RenderingConfigurationFields: externalData };
}
