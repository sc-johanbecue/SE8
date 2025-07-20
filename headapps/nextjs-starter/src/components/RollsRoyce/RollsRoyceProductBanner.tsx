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
  BannerParaphrase: TextField;
  BannerImage: ImageField;
}

type RollsRoyceProductBannerProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const RollsRoyceProductBannerDefaultComponent = (
  props: RollsRoyceProductBannerProps
): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: RollsRoyceProductBannerProps): JSX.Element => {
  const backgroundStyle = `url(${props.fields.BannerImage.value?.src}) no-repeat scroll center center`;

  if (props.fields) {
    return (
      <div className="homecontentwrapper add-padding-for-sticky">
        <div className="home-banner-fw new-video-fw clearfix fw-video-container ">
          <div
            className="video_fade home-banner-fw-inner"
            style={{
              background: backgroundStyle,
              backgroundSize: 'cover',
            }}
          >
            <div className="banner-mobi-img">
              <Image field={props.fields.BannerImage} className="fw-mobi-banner-img" />
              <Image field={props.fields.BannerImage} className="fw-1399-banner-img" />
            </div>

            <div className="max-width-content-no-image">
              <div className="home-content-fw NavyBlue">
                <div className="home-content-fw-inner White">
                  <p className="msBannerTitle trueBannerImage White">
                    <Text field={props.fields.BannerTitle} />
                  </p>

                  <div className="bannerpara White">
                    <Text field={props.fields.BannerParaphrase} />
                  </div>

                  <div className="fw-bnr-body-copy font18">
                    <p>
                      <RichText field={props.fields.BannerBody} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <RollsRoyceProductBannerDefaultComponent {...props} />;
};

export const Black = (props: RollsRoyceProductBannerProps): JSX.Element => {
  const backgroundStyle = `url(${props.fields.BannerImage.value?.src}) no-repeat scroll center center`;

  if (props.fields) {
    return (
      <div className="homecontentwrapper add-padding-for-sticky">
        <div className="home-banner-fw new-video-fw clearfix fw-video-container ">
          <div
            className="video_fade home-banner-fw-inner"
            style={{
              background: backgroundStyle,
              backgroundSize: 'cover',
            }}
          >
            <div className="banner-mobi-img">
              <Image field={props.fields.BannerImage} className="fw-mobi-banner-img" />
              <Image field={props.fields.BannerImage} className="fw-1399-banner-img" />
            </div>

            <div className="max-width-content-no-image">
              <div className="home-content-fw NavyBlue">
                <div className="home-content-fw-inner">
                  <p className="msBannerTitle trueBannerImage">
                    <Text field={props.fields.BannerTitle} />
                  </p>

                  <div className="bannerpara">
                    <Text field={props.fields.BannerParaphrase} />
                  </div>

                  <div className="fw-bnr-body-copy font18">
                    <p>
                      <RichText field={props.fields.BannerBody} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <RollsRoyceProductBannerDefaultComponent {...props} />;
};
