import React from 'react';
import {
  TextField,
  Text,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-jss/sitecore-jss-nextjs';

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

  // Use the helper function to extract attributes for PrefixImage
  const prefixAttributes = props.params.PrefixImage
    ? extractAttributes(props.params.PrefixImage)
    : undefined;

  // Similarly, extract attributes for SuffixImage if available
  const suffixAttributes = props.params.SuffixImage
    ? extractAttributes(props.params.SuffixImage)
    : undefined;

  if (props.fields) {
    return (
      <h3
        id={id || undefined}
        className="position-relative text-color-light text-4 line-height-5 font-weight-normal px-4 mb-2 appear-animation animated fadeInDownShorter appear-animation-visible"
        data-appear-animation="fadeInDownShorter"
        data-plugin-options="{'minWindowWidth': 0}"
        style={{ animationDelay: '100ms' }}
      >
        {prefixAttributes && (
          <span className="position-absolute right-100pct top-50pct transform3dy-n50 opacity-3">
            <img
              src={prefixAttributes['mediaurl']}
              className="w-auto appear-animation animated fadeInLeftShorter appear-animation-visible"
              data-appear-animation="fadeInLeftShorter"
              data-appear-animation-delay="250"
              data-plugin-options="{'minWindowWidth': 0}"
              alt=""
              style={{ animationDelay: '250ms' }}
            />
          </span>
        )}
        <Text field={props.fields.Title} />
        {suffixAttributes && (
          <span className="position-absolute left-100pct top-50pct transform3dy-n50 opacity-3">
            <img
              src={suffixAttributes['mediaurl']}
              className="w-auto appear-animation animated fadeInRightShorter appear-animation-visible"
              data-appear-animation="fadeInRightShorter"
              data-appear-animation-delay="250"
              data-plugin-options="{'minWindowWidth': 0}"
              alt=""
              style={{ animationDelay: '250ms' }}
            />
          </span>
        )}
      </h3>
    );
  }

  return <SlideTitleDefaultComponent {...props} />;
};
