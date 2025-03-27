import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import {
  TextField,
  ImageField,
  Text,
  ComponentParams,
  ComponentRendering,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { transferPrefixedClasses, ClassMapping } from './Utility/transferPrefixedClasses';
import { GraphQLRequestClient } from '@sitecore-jss/sitecore-jss-nextjs/graphql';
import config from 'temp/config';

import 'animate.css';

interface Fields {
  Title: TextField;
}

// Define types for the expected JSON structure
interface PrefixImageValue {
  src: string;
  alt: string;
  width: string;
  height: string;
}

interface Field {
  id: string;
  name: string;
  jsonValue: {
    value: PrefixImageValue;
  } | null;
}

interface GraphQLData {
  item: {
    fields: Field[];
  };
}

// Define a type for your TextColor object.
interface CustomTextColor {
  Value: {
    value: string;
  };
}

// Create a custom params type by overriding TextColor.
type CustomParams = Omit<ComponentParams, 'TextColor' | 'Prefix Image' | 'Suffix Image'> & {
  'Text Color': CustomTextColor;
  PrefixImage: ImageField;
  SuffixImage: ImageField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: CustomParams;
};

type SlideTitleProps = ComponentProps & {
  altPrefix: string;
  fields: Fields;
};

type SettingProps = {
  altPrefix: string;
};

const getComponentSettings = async () => {
  //async (rendering, layoutData, context)
  let altPrefix = 'initial';

  const graphQLClient = new GraphQLRequestClient(config.graphQLEndpoint, {
    apiKey: config.sitecoreApiKey,
  });

  const query = `
    item(
      path: "/sitecore/content/default/templates/Presentation/Rendering Configurations/Slide Title Configuration"
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

  try {
    // Tell the GraphQL client what shape to expect
    const prefixResponse = await graphQLClient.request<{ data: GraphQLData }>(query);

    console.log(prefixResponse);

    // Find the field with the name "PrefixImage"
    const prefixImageField = prefixResponse.data.item.fields.find(
      (field) => field.name === 'PrefixImage'
    );

    // Use the alt value from the JSON or fallback to the previous altPrefix value
    altPrefix = prefixImageField?.jsonValue?.value?.alt || altPrefix;
  } catch (error) {
    console.error('Error fetching prefix alt:', error);
  }

  //altPrefix = 'JOHAN';

  return {
    props: {
      altPrefix,
      // ...other props you need
    },
  };
};

const SlideTitleDefaultComponent = (props: SlideTitleProps): JSX.Element => (
  <div className={`component Main ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Main</span>
    </div>
  </div>
);

const extractAttributes = (xml: string): Record<string, string> => {
  const attributes: Record<string, string> = {};
  const regex = /(\w+)="([^"]*)"/g;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(xml)) !== null) {
    attributes[match[1]] = match[2];
  }
  return attributes;
};

export const Default = (props: SlideTitleProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  if (props.fields) {
    return (
      <h3
        id={id || undefined}
        className="position-relative text-color-light text-4 line-height-5 font-weight-normal px-4 mb-2 appear-animation animated fadeInDownShorter appear-animation-visible"
        data-appear-animation="fadeInDownShorter"
        data-plugin-options="{'minWindowWidth': 0}"
        style={{ animationDelay: '100ms' }}
      >
        <Text field={props.fields.Title} />
      </h3>
    );
  }

  return <SlideTitleDefaultComponent {...props} />;
};

export const WithPrefixSuffixImage = (props: SlideTitleProps & SettingProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const componentSettings = getComponentSettings();
  console.log(componentSettings);
  console.dir(componentSettings);
  const { sitecoreContext } = useSitecoreContext();
  const isPageEditing = sitecoreContext.pageEditing;

  // Extract attributes for PrefixImage and SuffixImage if available.
  const prefixAttributes = props.params.PrefixImage
    ? extractAttributes(props.params.PrefixImage as string)
    : undefined;
  const suffixAttributes = props.params.SuffixImage
    ? extractAttributes(props.params.SuffixImage as string)
    : undefined;

  // Assume the extracted heading has a "value" key with a string like "Heading 1"
  const headingTag =
    props.params.Heading === 'Heading 1'
      ? 'h1'
      : props.params.Heading === 'Heading 2'
      ? 'h2'
      : props.params.Heading === 'Heading 3'
      ? 'h3'
      : props.params.Heading === 'Heading 4'
      ? 'h4'
      : props.params.Heading === 'Heading 5'
      ? 'h5'
      : props.params.Heading === 'Heading 6'
      ? 'h6'
      : 'h3'; // default to h3 if no valid value is found

  // Create a variable component for the heading tag.
  const HeadingTag = headingTag as keyof JSX.IntrinsicElements;

  // Refs for the container element and target elements.
  const headingRef = useRef<HTMLDivElement>(null);
  const leftHeadingBorderSpanRef = useRef<HTMLElement>(null);
  const leftHeadingBorderImageRef = useRef<HTMLElement>(null);
  const rightHeadingBorderSpanRef = useRef<HTMLElement>(null);
  const rightHeadingBorderImageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mappings: ClassMapping[] = [
      { targetRef: leftHeadingBorderSpanRef, prefix: '{{HeadingBorderSpan}}' },
      { targetRef: leftHeadingBorderImageRef, prefix: '{{LeftHeadingBorderImage}}' },
      { targetRef: rightHeadingBorderSpanRef, prefix: '{{HeadingBorderSpan}}' },
      { targetRef: rightHeadingBorderImageRef, prefix: '{{RightHeadingBorderImage}}' },
    ];

    const observer = transferPrefixedClasses(headingRef, mappings, isPageEditing);
    return () => {
      observer?.disconnect();
    };
  }, [props.params.Styles, isPageEditing]);

  if (props.fields) {
    return (
      <HeadingTag
        ref={headingRef}
        id={id ? id : undefined}
        className={`component position-relative text-color-light px-4 ${props.params.Styles}`}
      >
        {prefixAttributes && (
          <span
            ref={leftHeadingBorderSpanRef as React.RefObject<HTMLImageElement>}
            className="position-absolute right-100pct top-50pct transform3dy-n50"
            style={{ width: '37px', height: '10px' }}
          >
            <Image
              ref={leftHeadingBorderImageRef as React.RefObject<HTMLImageElement>}
              src={prefixAttributes['mediaurl']}
              alt={props.altPrefix}
              fill
              sizes="37px" // Added sizes prop
            />
          </span>
        )}
        <Text field={props.fields.Title} />
        {props.params['Text Color']?.Value?.value}
        {suffixAttributes && (
          <span
            ref={rightHeadingBorderSpanRef as React.RefObject<HTMLImageElement>}
            className="position-absolute left-100pct top-50pct transform3dy-n50"
            style={{ width: '37px', height: '10px' }}
          >
            <Image
              ref={rightHeadingBorderImageRef as React.RefObject<HTMLImageElement>}
              className="w-auto"
              src={suffixAttributes['mediaurl']}
              alt="right"
              fill
              sizes="37px" // Added sizes prop
            />
          </span>
        )}
      </HeadingTag>
    );
  }

  return <SlideTitleDefaultComponent {...props} />;
};
