import React from 'react';
import {
  Text,
  TextField,
  RichTextField,
  RichText,
  Placeholder,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

interface Fields {
  Title: TextField;
  Intro: RichTextField;
}

type RollsRoyceProductListProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const RollsRoyceProductListDefaultComponent = (props: RollsRoyceProductListProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: RollsRoyceProductListProps): JSX.Element => {
  const phKeyProductList = `rollsRoyceProductList-${props.params.DynamicPlaceholderId}`;
  if (props.fields) {
    return (
      <div
        className="fw-ship-design sub-section new-country-site-section module-sec ship-design-module-section clearfix new-module-spacing"
        id="inner-our-family-engine"
      >
        <div
          className="module-center-heading module-heading section-slide-wrap"
          id="our-family-engine"
        >
          <h2 className="">
            <Link className="mixbold-1 sec-ttl-link" href="https://www.rolls-royce.com/">
              <Text field={props.fields.Title} />
            </Link>
          </h2>
          <div className="font24 fw-intro-text">
            <p>
              <RichText field={props.fields.Intro} />
            </p>
          </div>
        </div>
        <div className="prod-container fw-sld-wrapper">
          <div className="general-listing central-slider fw-sld-wrapper">
            <Placeholder name={phKeyProductList} rendering={props.rendering} />
          </div>
        </div>
      </div>
    );
  }

  return <RollsRoyceProductListDefaultComponent {...props} />;
};
