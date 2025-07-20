import React from 'react';
import {
  Text,
  Link as JssLink,
  RichText,
  RichTextField,
  TextField,
  LinkField,
  ImageField,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: TextField;
  SubTitle: RichTextField;
  Link: LinkField;
  Image: ImageField;
}

type AldarHeroBannerProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const AldarHeroBannerDefaultComponent = (props: AldarHeroBannerProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: AldarHeroBannerProps): JSX.Element => {
  if (props.fields) {
    return (
      <div className="component promo margin-bottom-80">
        <div className="component-content">
          <div className="hero hero--560 " data-animation="hero">
            <div className="container hero__bg-container">
              <div className="row h-100 no-gutters">
                <div className="col-12">
                  <div className="hero__bg hero__bg--img">
                    <div
                      style={{
                        backgroundImage:
                          'url(https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/sustainability-new/aldar-sustainability-report-thumbnail-1920x747.jpg?rev=d168e9293d604ab0bc8d18ffcd3b3261)',
                      }}
                    ></div>
                    <div className="hero__box-shadow"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container h-100">
              <div className="row h-100 no-gutters">
                <div className="col-2"></div>
                <div className="col-9 col-md-5 col-lg-5">
                  <div className="hero__con">
                    <h2 className="h2 h2--box hero__title">
                      <Text field={props.fields.Title} />
                    </h2>
                    <p className="body-text-18 hero__subTitle d-none d-lg-block">
                      <RichText field={props.fields.SubTitle} />
                    </p>
                    <div className="hero__btn-container">
                      <JssLink field={props.fields.Link} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <AldarHeroBannerDefaultComponent {...props} />;
};
