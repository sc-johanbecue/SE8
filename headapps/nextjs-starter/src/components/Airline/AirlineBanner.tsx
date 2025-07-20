import React, { JSX } from 'react';
import { TextField, Text, ImageField } from '@sitecore-content-sdk/nextjs';

interface Fields {
  Title: TextField;
  Subtitle: TextField;
  Image: ImageField;
}

type AirlineBannerProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const AirlineBannerDefaultComponent = (props: AirlineBannerProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: AirlineBannerProps): JSX.Element => {
  const backgroundImageUrl = props.fields.Image.value?.src;
  if (props.fields) {
    return (
      <section id="home_one_banner" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="banner_one_text" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                <h1>
                  <Text field={props.fields.Title} />
                </h1>
                <h3>
                  <Text field={props.fields.Subtitle} />
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return <AirlineBannerDefaultComponent {...props} />;
};
