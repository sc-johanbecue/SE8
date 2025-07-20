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

const JumeirahFourColumnCard = (props: Props): JSX.Element => {
  return (
    <div className="d-sm-flex justify-content-sm-center">
      <div
        style={{
          backgroundColor: '#FAF8F5',
          boxShadow: 'none',
          width: '290px',
          maxWidth: '290px',
          border: 'none',
        }}
        className="story-card feature-card card"
      >
        <div className="card-image-wrapper" style={{ cursor: 'pointer' }}>
          <Image
            field={props.fields.Image}
            alt="Card image cap"
            width="290"
            height="330"
            style={{ objectFit: 'cover', width: '290px' }}
            className="card-img-top"
          />
        </div>
        <div className="border-anima"></div>
        <div style={{ cursor: 'pointer' }}>
          <div className="card-body">
            <div className="d-flex flex-row justify-content-between">
              <Link
                field={props.fields.Tagline}
                href=""
                className="tagline left-tagline"
                style={{
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  color: '#6D6F6E',
                  display: 'inline-block',
                  letterSpacing: '0.075rem',
                  fontWeight: 500,
                }}
              />
            </div>
            <h3
              style={{
                fontSize: '1.5rem',
                fontFamily: 'Bressay Display, Old Standard TT, serif',
                color: '#212322',
                marginTop: 0,
                fontWeight: 400,
                letterSpacing: 'normal',
              }}
              className="card-title"
            >
              <Text field={props.fields.Title} />
            </h3>
            <p
              style={{
                fontSize: '0.875rem',
                fontFamily: 'Avenir Next, Roboto, sans-serif',
                fontWeight: 400,
                marginTop: '0.5rem',
                color: '#212322',
              }}
              className="text-lg card-text"
            >
              <Text field={props.fields.Text} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JumeirahFourColumnCard;
