import React from 'react';
import { ImageField, TextField, Image as JssImage, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

interface Fields {
  ProductName: TextField;
  Image: ImageField;
  Href: string;
}

type RollsRoyceProductListItemProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const RollsRoyceProductListItemDefaultComponent = (
  props: RollsRoyceProductListItemProps
): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: RollsRoyceProductListItemProps): JSX.Element => {
  if (props.fields) {
    return (
      <div
        id={props.fields.ProductName.value?.toString()}
        className="product-item equal-height product-item-1 first"
      >
        <div className="product-item-inner">
          <Link
            className="async-link"
            href="https://www.rolls-royce.com/products-and-services/civil-aerospace/widebody/trent-7000.aspx#section-our-designs"
          >
            <div className="product-item-top">
              <div className="product-item-image">
                <JssImage field={props.fields.Image} />
              </div>
            </div>
            <div className="product-item-bottom">
              <div className="product-item-title font18 mixbold">
                <Text field={props.fields.ProductName} />
              </div>
            </div>
          </Link>
          <div>{props.fields.Href}</div>
        </div>
      </div>
    );
  }

  return <RollsRoyceProductListItemDefaultComponent {...props} />;
};
