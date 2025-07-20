import React from 'react';
import { TextField, Text } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  DividerText: TextField;
}
type SimpleDividerProps = {
  // rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const SimpleDividerDefaultComponent = (props: SimpleDividerProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);
export const Default = (props: SimpleDividerProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  if (props.fields) {
    return (
      <div className={`${props.params.styles}`} id={id ? id : undefined}>
        <div className="simple-divider">
          <h1>
            <Text field={props.fields.DividerText} />
          </h1>
        </div>
      </div>
    );
  }

  return <SimpleDividerDefaultComponent {...props} />;
};
