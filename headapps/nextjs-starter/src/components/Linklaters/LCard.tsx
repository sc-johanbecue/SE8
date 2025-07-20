import React from 'react';
import {
  Image as JssImage,
  Link as JssLink,
  //   DateField,
  ImageField,
  LinkField,
  TextField,
  Text,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  CardImage: ImageField;
  CardTitle: TextField;
  CreationDate: TextField;
  Description: TextField;
  MoreInfoLink: LinkField;
}
type LCardProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const LCardDefaultComponent = (props: LCardProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);
export const Default = (props: LCardProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  if (props.fields) {
    return (
      <div className={`component col-12 col-md-4 ${props.params.styles}`} id={id ? id : undefined}>
        {/* <div className="card card--flex"> */}
        <div className="card__content">
          <div className="card__imgWrapper">
            <JssImage className="" field={props.fields.CardImage} />
          </div>
          <div className="card__info">
            <h4 className="card__title title-4">
              <Text field={props.fields.CardTitle} />
            </h4>
            <p className="card__details">
              <Text field={props.fields.CreationDate} />
            </p>
            <p className="card__text">
              <Text field={props.fields.Description} />
            </p>
          </div>

          <div className="card__cta ">
            {/* className="cta" /> */}

            <span className="cta__text">
              Find out more <JssLink field={props.fields.MoreInfoLink} />
            </span>
            <span className="sr-only">
              <Text field={props.fields.CardTitle} />
            </span>
            <span className="icon-link-arrow-right cta__arrow">
              <JssLink field={props.fields.MoreInfoLink} />
            </span>
          </div>
          {/* </div> */}
        </div>

        {/* ***************************************************
        <div className="simple-divider">
          <h1>
            <Text field={props.fields.DividerText} />
          </h1>
        </div>
***************************************************** */}
      </div>
    );
  }

  return <LCardDefaultComponent {...props} />;
};
