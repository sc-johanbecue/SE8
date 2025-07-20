import React from 'react';
import {
  ImageField,
  TextField,
  RichTextField,
  Text,
  Image as JssImage,
  RichText as JssRichText,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Text: RichTextField;
  Image: ImageField;
  CtaText: TextField;
}

type TheRigIntroProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const TheRigHeaderDefaultComponent = (props: TheRigIntroProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: TheRigIntroProps): JSX.Element => {
  if (props.fields) {
    return (
      <div className="intro-wrapper css-19tk58b">
        <img src="https://therig.sa/bg/linear.webp" className="css-179ykmo" alt="" />
        <div className="css-8hvgb2">
          <div typeof="video/mp4" className="css-ly8dp0">
            <div style={{ width: '100%', height: '100%' }}>
              <video
                src="https://therig.sa/bg/TheRig_video.mp4"
                preload="auto"
                autoPlay={true}
                loop={true}
                playsInline={true}
                webkit-playsinline={true}
                x5-playsinline={true}
                style={{ width: '100%', height: '100%;' }}
              ></video>
            </div>
          </div>
        </div>
        <div className="MuiContainer-root MuiContainer-maxWidthLg css-sjot2u">
          <div className="MuiGrid-root MuiGrid-direction-xs-row css-124fws5">
            <div className="css-1ug0hhs">
              <JssImage
                field={props.fields.Image}
                alt=""
                loading="lazy"
                width="866"
                height="150"
                decoding="async"
                data-nimg="1"
                className="css-1vtk6j6"
                style={{ color: 'transparent' }}
              />
              <div className="MuiGrid-root MuiGrid-direction-xs-row css-124fws5">
                <p className="MuiTypography-root MuiTypography-body1 css-pheo6p">
                  <span>
                    <JssRichText field={props.fields.Text} style={{ color: '#FFFFFF' }} />
                  </span>
                </p>
                <div className="MuiGrid-root MuiGrid-direction-xs-row css-124fws5">
                  <button type="submit" style={{ display: 'inline-flex' }} className="css-e35sq3">
                    <span>
                      <Text field={props.fields.CtaText} style={{ color: '#FFFFFF' }} />
                      <img
                        alt=""
                        loading="lazy"
                        width="10"
                        height="10"
                        decoding="async"
                        data-nimg="1"
                        className="css-iiupvq"
                        style={{ color: 'transparent', display: 'inline-flex' }}
                        src="https://therig.sa/down.svg"
                      />
                    </span>
                  </button>
                </div>
                <img
                  alt="A world-first in adventure tourism"
                  loading="lazy"
                  width="38"
                  height="50"
                  decoding="async"
                  data-nimg="1"
                  className="css-11ant8a"
                  style={{ color: 'transparent' }}
                  srcSet="https://therig.sa/_next/image/?url=%2FScroll-Down.gif&amp;w=48&amp;q=75 1x, https://therig.sa/_next/image/?url=%2FScroll-Down.gif&amp;w=96&amp;q=75 2x"
                  src="https://therig.sa/_next/image/?url=%2FScroll-Down.gif&amp;w=96&amp;q=75"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="MuiGrid-root css-1peekm2"></div>
        <div className="css-mizbsd"></div>
      </div>
    );
  }

  return <TheRigHeaderDefaultComponent {...props} />;
};
