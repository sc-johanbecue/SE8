import React from 'react';
import {
  Image as JssImage,
  Link as JssLink,
  ImageField,
  LinkField,
  TextField,
  Text,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  CountryIcon: ImageField;
  CountryName: TextField;
  Description: TextField;
  MoreInfoText: TextField;
  MoreInfoLink: LinkField;
  Contacts: LinkField;
}

type CountryBlockProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const CountryBlockDefaultComponent = (props: CountryBlockProps): JSX.Element => (
  <div className={`col-md-6 ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);
export const Default = (props: CountryBlockProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  if (props.fields) {
    return (
      //   <div className={`${props.params.styles}`} id={id ? id : undefined}>
      <div className="col-12 col-lg-6" id={id ? id : undefined}>
        <div className="LCountryBlock">
          <div className="CountryFlag">
            <JssImage className="CountryFlag" field={props.fields.CountryIcon} />
          </div>
          <div className="CountryName">
            <h3>
              <Text field={props.fields.CountryName} />
            </h3>
          </div>
          <div className="CountryDetail">
            <p>
              <Text field={props.fields.Description} />
            </p>
            <p>
              <Text field={props.fields.MoreInfoText} />
              <strong>
                &nbsp; <JssLink field={props.fields.MoreInfoLink} />
              </strong>
              .
            </p>
            <p>
              {' '}
              <span>
                Find your key contacts <JssLink field={props.fields.Contacts} />.
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
  return <CountryBlockDefaultComponent {...props} />;
};
