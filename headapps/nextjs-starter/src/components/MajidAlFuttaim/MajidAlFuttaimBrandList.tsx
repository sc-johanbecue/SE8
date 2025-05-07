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

type CruiseOffersProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

const CruiseOffersDefaultComponent = (props: CruiseOffersProps): JSX.Element => (
  <div className={`component CruiseOffers ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">CruiseOffers</span>
    </div>
  </div>
);

export const Default = (props: CruiseOffersProps): JSX.Element => {
  //const id = 'BrandList'; //props.params.RenderingIdentifier;
  const phKey = `BrandList-${props.params.DynamicPlaceholderId}`;

  if (props.fields) {
    return (
      <div
        id="brands"
        className={`component section-to-scroll ${props.params.styles}`}
        data-color="dark"
        data-section-name=""
      >
        <div className="other-mall-container">
          <div className="section-container">
            <div className="section-heading">
              <h2>
                <Text field={props.fields.Title} />
              </h2>
            </div>
            <div className="other-malls">
              <Placeholder name={phKey} rendering={props.rendering} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <CruiseOffersDefaultComponent {...props} />;
};
