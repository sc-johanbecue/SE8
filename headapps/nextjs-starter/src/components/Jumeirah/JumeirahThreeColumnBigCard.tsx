import React from 'react';

import {
  TextField,
  Text,
  ImageField,
  Image,
  LinkField,
  Link,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Image: ImageField;
  Tagline: LinkField;
  Title: TextField;
  Text: TextField;
  Link: LinkField;
}

type Props = {
  params: { [key: string]: string };
  fields: Fields;
};

const JumeirahThreeColumnBigCard = (props: Props): JSX.Element => {
  return (
    <div
      style={{
        backgroundColor: '#FAF8F5',
        boxShadow: 'none',
        width: '100%',
        maxWidth: '448px',
        border: 'none',
        cursor: 'pointer',
      }}
      className="story-card feature-card card"
    >
      <div className="card-image-wrapper" style={{ cursor: 'pointer' }}>
        <Image
          field={props.fields.Image}
          width="448"
          height="597"
          style={{ objectFit: 'cover' }}
          className="card-img-top"
        />
      </div>
      <div className="border-anima"></div>
      <div className="card-body">
        <div className="d-flex flex-row justify-content-between">
          <Link
            field={props.fields.Tagline}
            className="tagline left-tagline 11"
            style={{
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              color: '#6D6F6E',
              display: 'inline-block',
              letterSpacing: '0.075rem',
              fontWeight: '500',
            }}
          />
        </div>
        <h3
          style={{
            fontSize: '1.5rem',
            fontFamily: 'Bressay Display,Old Standard TT,serif',
            color: '#212322',
            marginTop: '0.5rem',
            fontWeight: '400',
            letterSpacing: 'normal',
          }}
          className="card-title"
        >
          <Text field={props.fields.Title} />
        </h3>
        <p
          style={{
            fontSize: '0.875rem',
            fontFamily: 'Avenir Next,Roboto,sans-serif',
            fontWeight: '400',
            marginTop: '0.5rem',
            color: '#212322',
          }}
          className="text-lg card-text"
        >
          <Text field={props.fields.Text} />
        </p>
      </div>
    </div>
  );
};

export default JumeirahThreeColumnBigCard;
