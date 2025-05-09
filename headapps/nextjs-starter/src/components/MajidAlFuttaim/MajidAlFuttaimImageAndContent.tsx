/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {
  TextField,
  Text,
  RichTextField,
  RichText,
  ImageField,
  Image as JssImage,
} from '@sitecore-jss/sitecore-jss-nextjs';
import 'animate.css';

interface Fields {
  Heading: TextField;
  BulletPoints: RichTextField;
  Image: ImageField;
}

type HeaderProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const HeaderDefaultComponent = (props: HeaderProps): JSX.Element => (
  <div className={`component Header ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Header</span>
    </div>
  </div>
);

export const Default = (props: HeaderProps): JSX.Element => {
  if (props.fields) {
    return (
      <div id="" className="section-to-scroll" data-section-name="" data-color="dark">
        <div className="left-image-video-col seprate-component reverse-content">
          <div className="section-container">
            <div className="row swap-content">
              <div className="left-video-sec">
                <div className="video-image-container">
                  <JssImage field={props.fields.Image} className="video-image" loading="lazy" />

                  {/* <picture className="video-image">
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://www.majidalfuttaim.com/images/default-source/industry/industriesfashiondetailwidget.png?sfvrsn=d2bb3317_4"
                    />
                    <img
                      loading="lazy"
                      src="https://www.majidalfuttaim.com/images/default-source/industry/industriesfashiondetailwidget.png?sfvrsn=d2bb3317_4"
                      alt="industriesfashiondetailwidget"
                    />
                  </picture> */}
                </div>
              </div>
              <div className="content-with-heading">
                <div className="component-heading">
                  <div className="section-heading" style={{ backgroundColor: 'red' }}>
                    <h3>
                      <Text field={props.fields.Heading} />
                    </h3>
                  </div>
                </div>
                <div className="bullet-points-section">
                  <RichText field={props.fields.BulletPoints} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <HeaderDefaultComponent {...props} />;
};
