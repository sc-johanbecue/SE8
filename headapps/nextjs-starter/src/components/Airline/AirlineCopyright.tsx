import React from 'react';
import { ImageField, TextField, Text, Image as JssImage } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Copyright: TextField;
  Logo: ImageField;
}

type AirlineCopyrightProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const AirlineCopyrightDefaultComponent = (props: AirlineCopyrightProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: AirlineCopyrightProps): JSX.Element => {
  if (props.fields) {
    return (
      <div className="copyright_area">
        <div className="container">
          <div className="row align-items-center">
            <div className="co-lg-6 col-md-6 col-sm-12 col-12">
              <div className="copyright_left">
                <p>
                  <Text field={props.fields.Copyright} />
                </p>
              </div>
            </div>
            <div className="co-lg-6 col-md-6 col-sm-12 col-12">
              <div className="copyright_right">
                <JssImage field={props.fields.Logo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <AirlineCopyrightDefaultComponent {...props} />;
};
