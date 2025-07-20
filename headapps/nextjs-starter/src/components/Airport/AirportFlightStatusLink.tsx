import React from 'react';
import {
  LinkField,
  ImageField,
  Link as JssLink,
  Image as JssImage,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Image: ImageField;
  Link: LinkField;
}

type SearchFormProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const SearchFormDefaultComponent = (props: SearchFormProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: SearchFormProps): JSX.Element => {
  if (props.fields) {
    return (
      <div
        className="flight-status-icon"
        style={{
          display: 'inline-block',
          width: '80px',
          height: '80px',
          flex: '0 0 48%',
          textAlign: 'center',
        }}
      >
        <JssImage field={props.fields.Image} style={{ display: 'block', margin: '0 auto' }} />
        <JssLink field={props.fields.Link}>{props.fields.Link.value.title}</JssLink>
      </div>
    );
  }

  return <SearchFormDefaultComponent {...props} />;
};
