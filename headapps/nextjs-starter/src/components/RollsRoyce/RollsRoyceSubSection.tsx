import React from 'react';
import {
  Text,
  TextField,
  RichTextField,
  RichText,
  ComponentParams,
  ComponentRendering,
  ImageField,
  LinkField,
  Link as JssLink,
  Image as JssImage,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: TextField;
  Text: RichTextField;
  Cta: LinkField;
  Image: ImageField;
}

type RollsRoyceSubSectionProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const RollsRoyceSubSectionDefaultComponent = (props: RollsRoyceSubSectionProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: RollsRoyceSubSectionProps): JSX.Element => {
  const backgroundStyle = `url(${props.fields.Image.value?.src}) center center / cover`;
  //no-repeat scroll center center

  if (props.fields) {
    return (
      <div
        className="sub-section new-country-site-section clearfix new-module-spacing"
        id="inner-technology-development"
      >
        <section
          id="technology-development"
          className="text-and-media-module module-wrapper new-module-spacing fullwidth-module"
          style={{
            background: backgroundStyle,
          }}
        >
          <div className="text-and-media-box-hidden">
            <JssImage field={props.fields.Image} alt="" width="2000" height="549" />
          </div>
          <div className="container-fluid module-max-width">
            <div className="row">
              <div className="col-lg-offset-0 col-lg-12 col-md-offset-0 col-md-12 col-xs-12">
                <div className="text-media-content-box dark-grey box-right">
                  <h2 className="font40 mixbold">
                    <Text field={props.fields.Title} />
                  </h2>
                  <div className="font18 fw-para-text">
                    <p>
                      <RichText field={props.fields.Text} />
                    </p>
                  </div>
                  <div className="font18 fw-para-text">
                    <JssLink
                      field={props.fields.Cta}
                      className="font18links mixbold fw-para-link"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return <RollsRoyceSubSectionDefaultComponent {...props} />;
};
