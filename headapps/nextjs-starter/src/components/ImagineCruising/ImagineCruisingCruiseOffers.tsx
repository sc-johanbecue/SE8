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
  const id = 'CruiseOffers'; //props.params.RenderingIdentifier;
  const phKey = `CruiseOffers-${props.params.DynamicPlaceholderId}`;

  if (props.fields) {
    return (
      <section
        id={id ? id : undefined}
        className={`mobile-no-padding cruise-offers builder-section builder-cruise-offers  slider-position-0 ${props.params.styles}`}
      >
        <div className="inner">
          <h3 data-ga-element="cruise-offers-title">
            <Text field={props.fields.Title} />
          </h3>
          <div className="cruises-block cruises-block-slider mobile-center-slider">
            <Placeholder name={phKey} rendering={props.rendering} />
          </div>
        </div>
      </section>
    );
  }
  return <CruiseOffersDefaultComponent {...props} />;
};
