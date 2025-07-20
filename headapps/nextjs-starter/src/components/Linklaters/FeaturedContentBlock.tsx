import React from 'react';
import {
  Image as JssImage,
  Link as JssLink,
  ImageField,
  LinkField,
  TextField,
  Text,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  BackgroundImage: ImageField;
  FeatureLink: LinkField;
  LinkTitle: TextField;
}

type FeaturedContentBlockProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const FeaturedContentBlockDefaultComponent = (props: FeaturedContentBlockProps): JSX.Element => (
  <div className={`col-md-6 ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);
export const Default = (props: FeaturedContentBlockProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  if (props.fields) {
    return (
      <div className="blockBase" id={id ? id : undefined}>
        <div className="backimg">
          <JssImage className="feature-image" field={props.fields.BackgroundImage} />
        </div>
        <div className="feature-inner-overlay">
          <JssLink className="feature-link" field={props.fields.FeatureLink} />
          <h2>
            <Text field={props.fields.LinkTitle} />{' '}
          </h2>
          <h3></h3>
        </div>
      </div>
    );
  }
  return <FeaturedContentBlockDefaultComponent {...props} />;
};
