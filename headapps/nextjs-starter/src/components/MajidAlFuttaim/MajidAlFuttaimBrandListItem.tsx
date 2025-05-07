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
  Name: TextField;
  Logo: ImageField;
  DetailLink: LinkField;
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
              <style>
                {`
                  .other-malls .other-mall .mall-img img {
                      max-width: 150px;
                      max-height: 150px;
                      width: 100%;  }
                `}
              </style>
              <JssImage
                field={props.fields.Logo}
                loading="lazy"
                // style={{ maxWidth: '150px', maxHeight: '150px' }}
              />
            </div>
          </Link>
        </div>
        <div className="mall-name">
          <span style={{ display: 'flex', justifyContent: 'center' }}>
            <Text field={props.fields.Name} />
          </span>
        </div>
      </div>
    );
  }
  return <CruiseOfferDefaultComponent {...props} />;
};
