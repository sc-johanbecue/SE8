import React from 'react';
import {
  Text,
  TextField,
  ImageField,
  LinkField,
  Image as JssImage,
} from '@sitecore-jss/sitecore-jss-nextjs';
import 'animate.css';
import Link from 'next/link';

interface Fields {
  BrandName: TextField;
  BrandLogo: ImageField;
  BrandDetailLink: LinkField;
}

type CruiseOfferProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const CruiseOfferDefaultComponent = (props: CruiseOfferProps): JSX.Element => (
  <div className={`component CruiseOffer ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">CruiseOffer</span>
    </div>
  </div>
);

export const Default = (props: CruiseOfferProps): JSX.Element => {
  const id = 'BrandCard'; //props.params.RenderingIdentifier;

  if (props.fields) {
    return (
      <div
        className={`component other-mall-main ${props.params.styles}`}
        key={id ? id : undefined}
        id={id ? id : undefined}
      >
        <div className="other-mall">
          <Link href="https://www.majidalfuttaim.com/en/what-we-do/our-industries/brand/abercrombie-and-fitch">
            <div className="mall-img">
              <JssImage field={props.fields.BrandLogo} loading="lazy" />
            </div>
          </Link>
        </div>
        <div className="mall-name">
          <span>
            <Text field={props.fields.BrandName} />
          </span>
        </div>
      </div>
    );
  }
  return <CruiseOfferDefaultComponent {...props} />;
};
