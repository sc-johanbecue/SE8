import React from 'react';
import { TextField, Text, RichTextField, RichText } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Heading: TextField;
  Body: RichTextField;
}

type AldarTitleAndDescriptionProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const AldarTitleAndDescriptionDefaultComponent = (
  props: AldarTitleAndDescriptionProps
): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: AldarTitleAndDescriptionProps): JSX.Element => {
  if (props.fields) {
    return (
      <div className="component typos-component container --title-description margin-top-80">
        <div className="component-content">
          <div className="container typos" data-animation="">
            <div className="row">
              <div className="col-1 "></div>
              <div className="col-10 col-md-3 ">
                <h2 className="h2 h2--box typos__heading">
                  <Text field={props.fields.Heading} />
                </h2>
              </div>
              <div className="w-100 d-lg-none"></div>
              <div className="col-1 d-lg-none"></div>
              <div className="col-10 col-md-7 ">
                <div className="typos__holder">
                  <p className="body-text-18" />
                  <RichText field={props.fields.Body} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <AldarTitleAndDescriptionDefaultComponent {...props} />;
};
