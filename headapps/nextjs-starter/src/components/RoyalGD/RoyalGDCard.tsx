import React from 'react';
import { TextField, Text, Image as JssImage, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: TextField;
  Image: ImageField;
}

type CardProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const CardDefaultComponent = (props: CardProps): JSX.Element => (
  <div className={`component Card ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Card</span>
    </div>
  </div>
);

export const Default = (props: CardProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <>
      <div
        key={id ? id : undefined}
        id={id ? id : undefined}
        className={`component card card--image ${props.params.styles}`}
        data-equalizer-watch
      >
        <a href="https://www.gdanimalhealth.com/contract-research-organisation">
          <div className="card-image">
            <JssImage field={props.fields.Image} />
          </div>
          <div className="card-divider">
            <span>
              <Text field={props.fields.Title} />
            </span>
          </div>
        </a>
      </div>
    </>
  );

  return <CardDefaultComponent {...props} />;
};
