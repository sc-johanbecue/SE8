/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {
  TextField,
  Text,
  ComponentParams,
  ComponentRendering,
  Placeholder,
} from '@sitecore-jss/sitecore-jss-nextjs';
import 'animate.css';

interface Fields {
  Title: TextField;
  Text: TextField;
}

type CruiseLinesProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

const CruiseLinesDefaultComponent = (props: CruiseLinesProps): JSX.Element => (
  <div className={`component CruiseLines ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">CruiseLines</span>
    </div>
  </div>
);

export const Default = (props: CruiseLinesProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const phKey = `Explore-${props.params.DynamicPlaceholderId}`;

  if (props.fields) {
    return (
      <section
        className={`component white-block grid-area-3 cta-blocks-one ${props.params.styles}`}
        id={id ? id : undefined}
      >
        <div className="inner">
          <h3>
            <Text field={props.fields.Title} />
          </h3>
          <div className="gallery-grid-items visible-rows-two ">
            <Placeholder name={phKey} rendering={props.rendering} />
          </div>
        </div>
      </section>
    );
  }
  return <CruiseLinesDefaultComponent {...props} />;
};
