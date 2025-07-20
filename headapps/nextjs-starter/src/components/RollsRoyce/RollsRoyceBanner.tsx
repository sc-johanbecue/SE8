import React from 'react';
import {
  ImageField,
  TextField,
  RichTextField,
  Image,
  Text,
  RichText,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  BannerTitle: TextField;
  BannerBody: RichTextField;
  BannerImage: ImageField;
}

type RollsRoyceBannerProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const RollsRoyceBannerDefaultComponent = (props: RollsRoyceBannerProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: RollsRoyceBannerProps): JSX.Element => {
  const backgroundStyle = `url(${props.fields.BannerImage.value?.src})`;

  if (props.fields) {
    return (
      <div className="full-width-banner" id="civil-aerospace">
        <div
          className="full-width-banner-inner new-video-fw clearfix fw-video-container bnr-overlay"
          style={{
            backgroundImage: backgroundStyle,
          }}
        >
          <div className="new-banner-mobi hide">
            <Image field={props.fields.BannerImage} width="2200" height="766" />
          </div>
          <div className="full-width-banner-main">
            <div
              className="full-width-banner-content box4-text-middle-left navy-blue"
              style={{ display: 'initial' }}
            >
              <p>
                {' '}
                <Text field={props.fields.BannerTitle} />
              </p>
              <div className="full-width-banner-txt font24">
                <p>
                  <RichText field={props.fields.BannerBody} />
                </p>
              </div>
            </div>
          </div>
          <div className="banner-down-arrow">
            <div id="arrow-down" className="">
              <i className="fa fa-angle-down"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <RollsRoyceBannerDefaultComponent {...props} />;
};
