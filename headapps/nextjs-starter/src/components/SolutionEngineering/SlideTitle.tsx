import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import {
  TextField,
  Text,
  ComponentParams,
  ComponentRendering,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { transferPrefixedClasses, ClassMapping } from './Utility/transferPrefixedClasses';

import 'animate.css';

interface Fields {
  Title: TextField;
}

type SlideTitleProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
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

export const WithPrefixSuffixImage = (props: SlideTitleProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const { sitecoreContext } = useSitecoreContext();
  const isPageEditing = sitecoreContext.pageEditing;

  // Extract attributes for PrefixImage and SuffixImage if available.
  const prefixAttributes = props.params.PrefixImage
    ? extractAttributes(props.params.PrefixImage)
    : undefined;
  const suffixAttributes = props.params.SuffixImage
    ? extractAttributes(props.params.SuffixImage)
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
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLElement>(null);
  const leftHeadingBorderRef = useRef<HTMLElement>(null);
  const rightHeadingBorderRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mappings: ClassMapping[] = [
      { targetRef: headingRef, prefix: '{{Heading}}' },
      { targetRef: leftHeadingBorderRef, prefix: '{{LeftHeadingBorderImage}}' },
      { targetRef: rightHeadingBorderRef, prefix: '{{RightHeadingBorderImage}}' },
    ];

    const observer = transferPrefixedClasses(containerRef, mappings, isPageEditing);
    return () => {
      observer?.disconnect();
    };
  }, [props.params.Styles, isPageEditing]);

  if (props.fields) {
    return (
      <div
        ref={containerRef}
        className={`component ${props.params.Styles}`}
        id={id ? id : undefined}
      >
        <HeadingTag
          ref={headingRef}
          className="position-relative text-color-light text-4 line-height-5 font-weight-normal px-4 mb-2"
        >
          {prefixAttributes && (
            <span
              className="position-absolute right-100pct top-50pct transform3dy-n50 opacity-3"
              style={{ width: '37px', height: '10px' }}
            >
              <Image
                ref={leftHeadingBorderRef as React.RefObject<HTMLImageElement>}
                src={prefixAttributes['mediaurl']}
                alt={prefixAttributes['alt']}
                fill
                sizes="37px" // Added sizes prop
              />
            </span>
          )}
          <Text field={props.fields.Title} />
          {suffixAttributes && (
            <span
              className="position-absolute left-100pct top-50pct transform3dy-n50 opacity-3"
              style={{ width: '37px', height: '10px' }}
            >
              <Image
                ref={rightHeadingBorderRef as React.RefObject<HTMLImageElement>}
                src={suffixAttributes['mediaurl']}
                alt={suffixAttributes['alt']}
                fill
                sizes="37px" // Added sizes prop
              />
            </span>
          )}
        </HeadingTag>
      </div>
    );
  }

  return <SlideTitleDefaultComponent {...props} />;
};
