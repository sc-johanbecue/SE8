import React from 'react'; //{ useState }
import {
  ComponentRendering,
  ComponentParams,
  TextField,
  Text,
  ImageField,
  LinkField,
  Link as JssLink,
  Image as JssImage,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Image: ImageField;
  Title: TextField;
  Heading: TextField;
  Link: LinkField;
  BuyLink: LinkField;
  Video: LinkField;
}

type ThreeCardsProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const ThreeCardsDefaultComponent = (props: ThreeCardsProps): JSX.Element => (
  <div className={`component ThreeCards ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">ThreeCards</span>
    </div>
  </div>
);

export const Default = (props: ThreeCardsProps): JSX.Element => {
  if (props.fields) {
    return (
      <div className="Packshot-card">
        <div className="field-item-link">
          <JssLink field={props.fields.Link} />
        </div>
        <div className="packshot-card-img-container">
          <div className="product-card-img">
            <JssImage field={props.fields.Image} />
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
        <div className="product-card-text">
          <h3 className="product-card-title field-title field-item-title">
            <Text field={props.fields.Title} />
          </h3>
          <h4 className="product-card-title field-title field-item-heading">
            <Text field={props.fields.Heading} />
          </h4>
          {props.params['Hide Buy Link'] != '1' ? (
            <div className="field-link">
              <JssLink
                field={props.fields.BuyLink}
                className="overlay-source custom-popup violife-store-new initialized"
                role="button"
              />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
  return <ThreeCardsDefaultComponent {...props} />;
};
