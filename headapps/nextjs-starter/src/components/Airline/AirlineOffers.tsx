import React from 'react';
import {
  Placeholder,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-jss/sitecore-jss-nextjs';

type AirlineOffersProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
};

const AirlineOffersDefaultComponent = (props: AirlineOffersProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: AirlineOffersProps): JSX.Element => {
  const phKeyOfferItems = `offerItems-${props.params.DynamicPlaceholderId}`;

  return (
    <section id="offer_area" className="section_padding_top">
      <div className="container">
        <div className="row">
          <Placeholder name={phKeyOfferItems} rendering={props.rendering} />
        </div>
      </div>
    </section>
  );

  return <AirlineOffersDefaultComponent {...props} />;
};
