/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from 'react'; //{ useState }
import {
  ComponentRendering,
  ComponentParams,
  TextField,
  Text,
  Image as JssImage,
  ImageField,
  LinkField,
  Link as JssLink,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: TextField;
  Link: LinkField;
  Image: ImageField;
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
      <li className="item" role="listitem">
        <div className="field-item-link">
          <JssLink field={props.fields.Link} />
        </div>
        <div className="recipe-card-v3">
          <div className="recipe-card-image-container">
            <div className="recipe-image-wrapper">
              <JssImage field={props.fields.Image} />
              <div className="custom-video"></div>
            </div>
          </div>
          <div className="recipe-card-content-wrapper">
            <h3 className="recipe-card-title field-title field-item-title">
              <Text field={props.fields.Title} />
              {/* DAIRY FREE CREAM CHEESE */}
            </h3>
            <div className="product-card-title field-title field-item-link">
              <JssLink field={props.fields.Link} />
            </div>
          </div>
        </div>
      </li>
    );
  }
  return <ThreeCardsDefaultComponent {...props} />;
};
