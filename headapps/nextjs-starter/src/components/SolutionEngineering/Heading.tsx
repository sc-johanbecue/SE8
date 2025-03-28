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

type HeadingProps = {
  fields: Fields;
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
};

const HeadingDefaultComponent = (props: HeadingProps): JSX.Element => (
  <div className={`component Main ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Main</span>
    </div>
  </div>
);

// Helper function to render a heading with a dynamic tag
export const renderHeading = (
  props: HeadingProps,
  Tag: keyof JSX.IntrinsicElements
): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  if (props.fields) {
    return (
      <Tag
        id={id ? id : undefined}
        className={`component position-relative ${props.params.Styles}`}
      >
        <Text field={props.fields.Title} />
      </Tag>
    );
  }
  return <HeadingDefaultComponent {...props} />;
};

// Export heading components with different tags
export const Default = (props: HeadingProps): JSX.Element => renderHeading(props, 'h3');
export const Heading1 = (props: HeadingProps): JSX.Element => renderHeading(props, 'h1');
export const Heading2 = (props: HeadingProps): JSX.Element => renderHeading(props, 'h2');
export const Heading3 = (props: HeadingProps): JSX.Element => renderHeading(props, 'h3');
export const Heading4 = (props: HeadingProps): JSX.Element => renderHeading(props, 'h4');
export const Heading5 = (props: HeadingProps): JSX.Element => renderHeading(props, 'h5');
export const Heading6 = (props: HeadingProps): JSX.Element => renderHeading(props, 'h6');
