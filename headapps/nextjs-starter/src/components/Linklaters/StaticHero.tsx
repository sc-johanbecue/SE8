import React from 'react';
import {
  Image as JssImage,
  ImageField,
  /*Link as JssLink,
  LinkField,*/
  TextField,
  Text,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: TextField;
  BackgroundImage: ImageField;
}

type StaticHeroProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const StaticHeroDefaultComponent = (props: StaticHeroProps): JSX.Element => (
  <div className={`col-md-6 ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);
export const Default = (props: StaticHeroProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  if (props.fields) {
    return (
      <div className="heroContainer ">
        <div className="static-background" id={id ? id : undefined}>
          <JssImage field={props.fields.BackgroundImage} />
        </div>
        <div className="background-overlay">&nbsp;</div>
        <div className="text-overlay">
          <div className="subheader color-brand-white">
            <Text field={props.fields.Title} className="header color-brand-white" />
          </div>
          <div className="overlay-footer">
            <div className="seperator-container">
              <div className="overlay-seperator"></div>
            </div>
            <a href="#" className="explore">
              Explore
            </a>
          </div>
        </div>
      </div>
    );
  }
  return <StaticHeroDefaultComponent {...props} />;
};
