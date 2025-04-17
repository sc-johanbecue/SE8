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
  const phKey = `CruiseLines-${props.params.DynamicPlaceholderId}`;

  if (props.fields) {
    return (
      <section
        className={`cruise-lines-section builder-cruise-lines-block builder-cruise-lines-block-default slider-version ${props.params.styles}`}
        id={id ? id : undefined}
      >
        <div className="inner">
          <span className="cruise-lines-section-under-h3-p">
            <h3 data-ga-element="cruiselines-block-title" className="">
              <Text field={props.fields.Title} />
            </h3>
          </span>
          <div className="wrapper cruises-block">
            <Placeholder name={phKey} rendering={props.rendering} />
          </div>
        </div>
      </section>
    );
  }
  return <CruiseLinesDefaultComponent {...props} />;
};
