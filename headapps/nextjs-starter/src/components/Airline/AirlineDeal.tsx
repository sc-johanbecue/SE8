import React from 'react';
import {
  TextField,
  Text,
  LinkField,
  Link as JssLink,
  ImageField,
  Image as JssImage,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Link: LinkField;
  Image: ImageField;
  Location: TextField;
  Country: TextField;
  Hotel: TextField;
  Discount: TextField;
  ReviewRating: TextField;
  ReviewCount: TextField;
  Currency: TextField;
  StartPrice: TextField;
}

type AirlineDealProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const AirlineDealDefaultComponent = (props: AirlineDealProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: AirlineDealProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const isPageEditing = sitecoreContext.pageEditing;

  if (props.fields) {
    return (
      <div className="col-lg-3 col-md-6 col-sm-6 col-12">
        <div className="theme_common_box_two img_hover">
          <div className="theme_two_box_img">
            {isPageEditing ? (
              <>
                <JssLink field={props.fields.Link} />
                <JssImage field={props.fields.Image} />
              </>
            ) : (
              <JssLink field={props.fields.Link}>
                <JssImage field={props.fields.Image} />
              </JssLink>
            )}
            <p>
              <i className="fas fa-map-marker-alt"></i> <Text field={props.fields.Location} />
            </p>
            {isPageEditing || props.fields.Discount.value != '' ? (
              <div className="discount_tab">
                <span>
                  <Text field={props.fields.Discount} />
                </span>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="theme_two_box_content">
            <h4>
              {isPageEditing ? (
                <>
                  <Text field={props.fields.Hotel} />
                </>
              ) : (
                <JssLink field={props.fields.Link}>
                  <Text field={props.fields.Hotel} />
                </JssLink>
              )}
            </h4>
            <p>
              <span className="review_rating">
                <Text field={props.fields.ReviewRating} />
              </span>
              <span className="review_count">
                (<Text field={props.fields.ReviewCount} /> reviews)
              </span>
            </p>
            <h3>
              <Text field={props.fields.Currency} />
              <Text field={props.fields.StartPrice} /> <span>Price starts from</span>
            </h3>
          </div>
        </div>
      </div>
    );
  }

  return <AirlineDealDefaultComponent {...props} />;
};
