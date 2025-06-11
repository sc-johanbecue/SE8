import React from 'react';
import { TextField, Text } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Heading: TextField;
}

type HeadingProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const HeadingDefaultComponent = (props: HeadingProps): JSX.Element => (
  <div className={`component Heading ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Heading</span>
    </div>
  </div>
);

export const Default = (props: HeadingProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <div
      key={id ? id : undefined}
      id={id ? id : undefined}
      className={`component columns small-12 ${props.params.styles}`}
    >
      <h3>
        <Text field={props.fields.Heading} />
      </h3>
      <hr />
    </div>
  );

  return <HeadingDefaultComponent {...props} />;
};
