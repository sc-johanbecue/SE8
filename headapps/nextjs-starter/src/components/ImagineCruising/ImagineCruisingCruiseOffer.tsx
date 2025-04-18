/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {
  Text,
  TextField,
  Field,
  ImageField,
  LinkField,
  Image as JssImage,
  Link as JssLink,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import 'animate.css';

interface Fields {
  Name: TextField;
  Exclusive: TextField;
  Image: ImageField;
  Favorite: Field;
  Link: LinkField;
  HolidayType: TextField;
  Date: TextField;
  Nights: TextField;
  Operator: TextField;
  Price: TextField;
  PriceUnit: TextField;
}

type CruiseOfferProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const CruiseOfferDefaultComponent = (props: CruiseOfferProps): JSX.Element => (
  <div className={`component CruiseOffer ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">CruiseOffer</span>
    </div>
  </div>
);

export const Default = (props: CruiseOfferProps): JSX.Element => {
  const id = 'CruiseOffer-content'; //props.params.RenderingIdentifier;
  const { sitecoreContext } = useSitecoreContext();

  if (props.fields) {
    return (
      <div
        className={`component item-cruise cruise-719572 slide-position-1 ${props.params.styles}`}
        key={id ? id : undefined}
        id={id ? id : undefined}
      >
        {!sitecoreContext.pageEditing ? (
          <JssLink field={props.fields.Link} className="test-cg cover-link" />
        ) : (
          <></>
        )}
        <div className="cruise-img-block">
          <JssImage field={props.fields.Image} />
          <div className="cruise-exclusive exclusive">
            <span>
              <Text field={props.fields.Exclusive} />
            </span>
          </div>
          <span className="fave" data-favourite="719572">
            <i className="far fa-heart" aria-hidden></i>
          </span>
        </div>
        <div className="cruise-content-block">
          <div className="cruise-top-content">
            <div data-ga-element="cruise-offers-single-name" className="cruise-name">
              <Text field={props.fields.Name} />
            </div>
            <div className="cruise-meta-block">
              <div className="holiday-type">
                <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/luggage.svg" />
                <Text field={props.fields.HolidayType} />
              </div>
              <div className="holiday-dates">
                <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/calendar-icon.svg" />
                <Text field={props.fields.Date} />
                &nbsp;|&nbsp;
                <Text field={props.fields.Nights} />
                &nbsp;Nights
              </div>
              <div className="holiday-operator">
                <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/ship.svg" />
                <Text field={props.fields.Operator} />
              </div>
            </div>
          </div>
          <div className="cruise-button-block">
            <div className="price-block">
              <div className="cruise-price">
                <span className="price-from">From</span>
                <span className="the-price">
                  &pound;
                  <Text field={props.fields.Price} />
                </span>
                <span className="pp">
                  <Text field={props.fields.PriceUnit} />
                </span>
              </div>
            </div>
            <JssLink
              data-ga-element="cruise-offers-single-related-cta"
              field={props.fields.Link}
              className="default-cta"
            />
          </div>
        </div>
      </div>
    );
  }
  return <CruiseOfferDefaultComponent {...props} />;
};
