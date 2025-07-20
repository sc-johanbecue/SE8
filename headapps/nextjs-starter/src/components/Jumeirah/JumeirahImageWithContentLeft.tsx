import React from 'react';

import {
  TextField,
  Text,
  ImageField,
  Image,
  LinkField,
  Link,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Image: ImageField;
  Tagline: LinkField;
  Title: TextField;
  Text: TextField;
  Link: LinkField;
}

type Props = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const JumeirahImageWithContentLeft = (props: Props): JSX.Element => {
  return (
    <div className="full-bleed-rd ImageWithContentLeft    container-fluid">
      <div
        style={{
          backgroundColor: '#FAF8F5',
          boxShadow: 'none',
          width: '100%',
          maxWidth: '100%',
          border: 'none',
          display: 'flex',
          flexDirection: 'row-reverse',
          alignItems: 'flex-start',
        }}
        className="story-card home card"
      >
        <div className="card-image-wrapper" style={{ cursor: 'auto' }}>
          <Image
            field={props.fields.Image}
            width="802px"
            height="802px"
            style={{ objectFit: 'cover', width: '802px' }}
            className="card-img-top"
          />
        </div>
        <div style={{ cursor: 'auto' }}>
          <div className="card-body">
            <div className="d-flex flex-row justify-content-between">
              <Link
                field={props.fields.Tagline}
                className="tagline left-tagline"
                style={{
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  color: '#6D6F6E',
                  display: 'inline-block',
                  letterSpacing: '0.075rem',
                  fontWeight: '500',
                }}
              ></Link>
            </div>
            <h3
              style={{
                fontSize: '2rem',
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
            <div
              className="line"
              style={{
                width: '5.875rem',
                height: '0.0625rem',
                backgroundColor: '#A7A9A8',
              }}
            ></div>
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
            <Link
              field={props.fields.Link}
              style={{
                width: 'auto',
                minWidth: '14.4375rem',
                height: '2.0rem',
                lineHeight: 'normal',
                maxWidth: '14.5625rem',
                fontFamily: 'Avenir Next,Roboto,sans-serif',
                fontWeight: '500',
                padding: '0 2rem',
                color: '#212322',
                borderColor: '#212322',
                fontSize: '0.75rem',
                letterSpacing: '0.075rem',
                textTransform: 'uppercase',
                transition: 'all 0.5s ease 0s',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: 'none',
              }}
              target="_self"
              className="primary-button btn btn-outline-primary btn-block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JumeirahImageWithContentLeft;
