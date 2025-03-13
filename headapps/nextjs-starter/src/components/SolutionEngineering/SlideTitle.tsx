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
  // Use the helper function to extract attributes for PrefixImage
  const prefixAttributes = props.params.PrefixImage
    ? extractAttributes(props.params.PrefixImage)
    : undefined;

  // Similarly, extract attributes for SuffixImage if available
  const suffixAttributes = props.params.SuffixImage
    ? extractAttributes(props.params.SuffixImage)
    : undefined;

  // Split the space-separated string into an array and filter out any empty strings
  // const classArray = props.params.styles.split(' ').filter(Boolean);

  // Top-level classes: those that are not prefixed with "{{"
  // const topLevelClasses = classArray.filter((cls) => !cls.startsWith('{{'));

  // const leftHeadingBorderClasses = classArray
  //   .filter((cls) => cls.startsWith('{{LeftHeadingBorderAnimation'))
  //   .map((cls) => cls.replace('{{LeftHeadingBorderAnimation}}', ''));

  // const rightHeadingBorderClasses = classArray
  //   .filter((cls) => cls.startsWith('{{RightHeadingBorderAnimation'))
  //   .map((cls) => cls.replace('{{RightHeadingBorderAnimation}}', ''));

  // Refs for the container element and target elements.
  const containerRef = useRef<HTMLDivElement>(null);
  const leftHeadingBorderRef = useRef<HTMLElement>(null);
  const rightHeadingBorderRef = useRef<HTMLElement>(null);

  useEffect(() => {
    console.log('useEffect triggered');
    const mappings: ClassMapping[] = [
      { targetRef: leftHeadingBorderRef, prefix: '{{LeftHeadingBorderAnimation}}' },
      { targetRef: rightHeadingBorderRef, prefix: '{{RightHeadingBorderAnimation}}' },
    ];

    const observer = transferPrefixedClasses(containerRef, mappings, isPageEditing);
    console.log('After transfer, container classes:', containerRef.current?.className);
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
        <h3
          className={`position-relative text-color-light text-4 line-height-5 font-weight-normal px-4 mb-2 appear-animation animated fadeInDownShorter appear-animation-visible`}
          data-appear-animation="fadeInDownShorter"
          data-plugin-options="{'minWindowWidth': 0}"
          style={{ animationDelay: '100ms' }}
        >
          {prefixAttributes && (
            <span
              className={`position-absolute right-100pct top-50pct transform3dy-n50 opacity-3`}
              style={{ width: '37px', height: '10px' }}
            >
              <Image
                ref={leftHeadingBorderRef as React.RefObject<HTMLImageElement>}
                src={prefixAttributes['mediaurl']}
                className={`object-cover w-auto appear-animation animated fadeInLeftShorter appear-animation-visible`}
                data-appear-animation="fadeInLeftShorter"
                data-appear-animation-delay="250"
                data-plugin-options="{'minWindowWidth': 0}"
                alt=""
                style={{ animationDelay: '250ms' }}
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
                className={`object-cover w-auto appear-animation animated fadeInRightShorter appear-animation-visible`}
                data-appear-animation="fadeInRightShorter"
                data-appear-animation-delay="250"
                data-plugin-options="{'minWindowWidth': 0}"
                alt=""
                style={{ animationDelay: '250ms' }}
                fill
                sizes="37px" // Added sizes prop
              />
            </span>
          )}
        </h3>
      </div>
    );
  }

  return <SlideTitleDefaultComponent {...props} />;
};
