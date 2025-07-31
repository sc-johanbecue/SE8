import React, { JSX } from 'react';
import { TextField, Text } from '@sitecore-content-sdk/nextjs';

interface Fields {
  'Copyright Text': TextField;
}

type CopyrightProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const DefaultContent = (props: CopyrightProps): JSX.Element => (
  <div
    className={`component copyright ${props.params.styles}`}
    id={props.params.RenderingIdentifier || undefined}
  >
    <div className="component-content">
      <span className="is-empty-hint">Copyright Component</span>
    </div>
  </div>
);

export const Default = (props: CopyrightProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  if (props.fields) {
    return (
      <div className={`component copyright ${props.params.styles}`} id={id || undefined}>
        <div className="component-content">
          <Text field={props.fields['Copyright Text']} />
        </div>
      </div>
    );
  }

  return <DefaultContent {...props} />;
};
