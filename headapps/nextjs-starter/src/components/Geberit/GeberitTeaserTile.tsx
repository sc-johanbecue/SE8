import React from 'react';
import {
  TextField,
  Text,
  Link as JssLink,
  LinkField,
  ImageField,
  ComponentRendering,
  ComponentParams,
} from '@sitecore-jss/sitecore-jss-nextjs';

import 'animate.css';

interface Fields {
  Headnote: TextField;
  Title: TextField;
  SubTitle: TextField;
  Image: ImageField;
  Link: LinkField;
}

interface MainHeroProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
}

const MainHeroDefaultComponent = (props: MainHeroProps): JSX.Element => (
  <div className={`component MainHero ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">MainHero</span>
    </div>
  </div>
);

export const Square = (props: MainHeroProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  if (props.fields) {
    return (
      <div
        className={`component xmc-teaser-tile square ${props.params.styles}`}
        key={id ? id : undefined}
        id={id ? id : undefined}
        style={{
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div className="xmc-teaser-header">
          <p className="xmc-teaser-category">
            <Text field={props.fields.Headnote} />
          </p>
          <h2 className="xmc-teaser-title">
            <Text field={props.fields.Title} />
            <br />
          </h2>
          <Text field={props.fields.SubTitle} />
        </div>
      </div>
    );
  }

  return <MainHeroDefaultComponent {...props} />;
};

export const SquareImage = (props: MainHeroProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const imageUrl = props.fields.Image?.value?.src;

  if (props.fields) {
    return (
      <div
        className={`component xmc-teaser-tile square ${props.params.styles}`}
        key={id ? id : undefined}
        id={id ? id : undefined}
        style={{
          marginTop: '0',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div
          className="xmc-teaser-footer"
          style={{
            marginTop: '0',
            padding: '2rem',
            flex: '1',
            position: 'relative',
            display: 'flex',
            alignItems: 'stretch',
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
          }}
        >
          <div className="xmc-teaser-header">
            <p className="xmc-teaser-category">
              <Text field={props.fields.Headnote} />
            </p>
            <h2 className="xmc-teaser-title">
              <Text field={props.fields.Title} />
              <br />
            </h2>
            <Text field={props.fields.SubTitle} />
          </div>
          <JssLink
            field={props.fields.Link}
            className="xmc-teaser-link text-dark"
            style={{
              position: 'absolute',
              bottom: '1rem',
              left: '1rem',
              background: 'rgba(255,255,255,0.7)',
              padding: '0.5rem 1rem',
              borderRadius: '0.25rem',
              textDecoration: 'none',
            }}
          >
            → DISCOVER MORE
          </JssLink>
        </div>
      </div>
    );
  }

  return <MainHeroDefaultComponent {...props} />;
};

// Vertical Tile (spans 2 rows)
export const Vertical = (props: MainHeroProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const imageUrl = props.fields.Image?.value?.src;

  if (props.fields) {
    return (
      <div
        className={`component xmc-teaser-tile vertical ${props.params.styles}`}
        key={id ? id : undefined}
        id={id ? id : undefined}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <div className="xmc-teaser-content text-dark" style={{ flex: 1, maxHeight: '50%' }}>
          <div className="xmc-teaser-header">
            <p className="xmc-teaser-category">
              <Text field={props.fields.Headnote} />
            </p>
            <h2 className="xmc-teaser-title">
              <span>
                <Text field={props.fields.Title} />
              </span>
              <br />
              <Text field={props.fields.SubTitle} />
            </h2>
          </div>
        </div>

        <div
          className="xmc-teaser-footer"
          style={{
            position: 'relative',
            height: '50%',
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
          }}
        >
          <JssLink
            field={props.fields.Link}
            className="xmc-teaser-link text-dark"
            style={{
              position: 'absolute',
              bottom: '1rem',
              left: '1rem',
              background: 'rgba(255,255,255,0.7)',
              padding: '0.5rem 1rem',
              borderRadius: '0.25rem',
              textDecoration: 'none',
            }}
          >
            → DISCOVER MORE
          </JssLink>
        </div>
      </div>
    );
  }

  return <MainHeroDefaultComponent {...props} />;
};

export const Horizontal = (props: MainHeroProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const imageUrl = props.fields.Image?.value?.src;

  if (props.fields) {
    return (
      <div
        className={`component xmc-teaser-tile horizontal ${props.params.styles}`}
        key={id ? id : undefined}
        id={id ? id : undefined}
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
        }}
      >
        {/* Left content (text) */}
        <div
          className="xmc-teaser-content text-dark"
          style={{
            maxWidth: '50%',
            flex: '1',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div className="xmc-teaser-header">
            <p className="xmc-teaser-category">
              <Text field={props.fields.SubTitle} />
            </p>
            <h2 className="xmc-teaser-title">
              <span>
                <Text field={props.fields.Title} />
              </span>
              <br />
              <Text field={props.fields.Headnote} />
            </h2>
          </div>
        </div>

        {/* Right image section */}
        <div
          className="xmc-teaser-footer"
          style={{
            flex: '1',
            marginTop: '0',
            position: 'relative',
            display: 'flex',
            alignItems: 'stretch',
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
          }}
        >
          <JssLink
            field={props.fields.Link}
            className="xmc-teaser-link text-dark"
            style={{
              position: 'absolute',
              bottom: '1rem',
              left: '1rem',
              background: 'rgba(255,255,255,0.7)',
              padding: '0.5rem 1rem',
              borderRadius: '0.25rem',
              textDecoration: 'none',
            }}
          >
            → DISCOVER MORE
          </JssLink>
        </div>
      </div>
    );
  }

  return <MainHeroDefaultComponent {...props} />;
};
