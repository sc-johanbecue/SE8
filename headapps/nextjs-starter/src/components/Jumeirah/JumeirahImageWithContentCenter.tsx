import React from 'react';

import {
  TextField,
  Text,
  ImageField,
  //Image,
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

const JumeirahImageWithContentContainerCenter = (props: Props): JSX.Element => {
  return (
    <div className="full-bleed-rd ImageWithConentCenter container-fluid">
      <div
        style={{
          background: `radial-gradient(31.25% 31.25% at 50% 50%, rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.00) 100%), url("${props?.fields?.Image?.value?.src}"), lightgray -425.99px -508.877px / 164.457% 194.95% no-repeat`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        className="image-row row"
      ></div>
      <div className="centerContentBox">
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
              fontSize: '2.0rem',
              fontFamily: 'Bressay Display,Old Standard TT,serif',
              color: '#FAF8F5',
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
            style={{ width: '5.875rem', height: '0.0625rem', backgroundColor: '#A7A9A8' }}
          ></div>
          <p
            style={{
              fontSize: '0.875rem',
              fontFamily: 'Avenir Next,Roboto,sans-serif',
              fontWeight: 400,
              marginTop: '0.5rem',
              color: '#FAF8F5',
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
              maxWidth: '100%',
              fontFamily: 'Avenir Next,Roboto,sans-serif',
              fontWeight: '500',
              padding: '0 2rem',
              color: '#212322',
              borderColor: 'none',
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
  );
};

export default JumeirahImageWithContentContainerCenter;
