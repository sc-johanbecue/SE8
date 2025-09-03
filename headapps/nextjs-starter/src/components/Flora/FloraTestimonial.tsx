/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from 'react'; //{ useState }
import {
  ComponentRendering,
  ComponentParams,
  RichText,
  RichTextField,
  TextField,
  Text,
  LinkField,
  Link as JssLink,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: TextField;
  Intro: RichTextField;
  Link: LinkField;
  Video: LinkField;
}

type TestimonialProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const TestimonialDefaultComponent = (props: TestimonialProps): JSX.Element => (
  <div className={`component Testimonial ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Testimonial</span>
    </div>
  </div>
);

export const Default = (props: TestimonialProps): JSX.Element => {
  if (props.fields) {
    return (
      <div className="component container layout--fluid container--no-padding text-align-center">
        <div className="component-content">
          <div className="component container layout--fluid container--no-padding">
            <div className="component-content">
              <div className="component promo component global-testimonial page-list promo-list text-align-left">
                <div className="component-content">
                  <section className="promo-testimonial">
                    <div className="row">
                      <div className="col-xs-12 col-md-7 testimonial-media">
                        <div className="custom-video">
                          <video
                            id="cor-home-video"
                            className="lazy-bg-video"
                            autoPlay
                            muted
                            loop
                            controlsList="nodownload"
                            playsInline
                            height="100%"
                            width="100%"
                          >
                            <source src={props.fields.Video.value.href} type="video/mp4" />
                          </video>
                        </div>
                      </div>
                      <div className="col-xs-12 col-md-5 testimonial-content">
                        <h2 className="testimonial-title field-title">
                          <Text field={props.fields.Title} />
                        </h2>
                        <RichText
                          field={props.fields.Intro}
                          className="testimonial-intro field-text1"
                        />
                        <JssLink field={props.fields.Link} className="btn btn-primary" />
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <TestimonialDefaultComponent {...props} />;
};

export const Inversed = (props: TestimonialProps): JSX.Element => {
  if (props.fields) {
    return (
      <div className="component container layout--fluid container--no-padding text-align-center">
        <div className="component-content">
          <div className="component container layout--fluid container--no-padding">
            <div className="component-content">
              <div className="component promo component global-testimonial page-list promo-list text-align-left">
                <div className="component-content">
                  <section className="promo-testimonial">
                    <div className="row">
                      <div
                        className="col-xs-12 col-md-5 testimonial-content"
                        style={{ paddingLeft: '50px' }}
                      >
                        <h2 className="testimonial-title field-title">
                          <Text field={props.fields.Title} />
                        </h2>
                        <RichText
                          field={props.fields.Intro}
                          className="testimonial-intro field-text1"
                        />
                        <JssLink field={props.fields.Link} className="btn btn-primary" />
                      </div>
                      <div className="col-xs-12 col-md-7 testimonial-media">
                        <div className="custom-video">
                          <video
                            id="cor-home-video"
                            className="lazy-bg-video"
                            autoPlay
                            muted
                            loop
                            controlsList="nodownload"
                            playsInline
                            height="100%"
                            width="100%"
                          >
                            <source src={props.fields.Video.value.href} type="video/mp4" />
                          </video>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <TestimonialDefaultComponent {...props} />;
};
