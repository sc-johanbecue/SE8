import React from 'react';
import {
  TextField,
  LinkField,
  ImageField,
  Text,
  Link as JssLink,
  Image as JssImage,
  ComponentRendering,
  ComponentParams,
} from '@sitecore-jss/sitecore-jss-nextjs';

import 'animate.css';

interface Fields {
  BackgroundImage: ImageField;
  Header: TextField;
  SubHeader: TextField;
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

export const Default = (props: MainHeroProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const paddingTop = props.params.PaddingTop ? `${props.params.PaddingTop}rem` : '7rem';
  const paddingLeft = props.params.PaddingLeft ? `${props.params.PaddingLeft}rem` : '-1rem';
  const width = props.params.Width ? `${props.params.Width}rem` : '35rem';

  return (
    <section
      className={`component position-relative overflow-hidden ${props.params.styles}`}
      key={id ? id : undefined}
      id={id ? id : undefined}
    >
      {/* Background Image */}
      <div className="position-absolute top-0 start-0 w-100">
        <JssImage
          field={props.fields.BackgroundImage}
          fill
          priority
          style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }}
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100"
        style={{
          background: 'linear-gradient(to right, #001428, rgba(0, 51, 102, 0.8))',
          zIndex: 1,
        }}
      ></div>

      {/* Desktop Content (hidden on small screens) */}
      <div
        className="container position-relative d-none d-lg-flex"
        style={{ zIndex: 2, margin: '2rem' }}
      >
        <div
          className="row"
          style={{ paddingTop: paddingTop, paddingLeft: paddingLeft, width: width }}
        >
          <div className="">
            <div className={`p-4 p-md-5 box`}>
              <h1 className="display-4 fw-bold mb-2">
                <Text field={props.fields.Header} />
              </h1>
              <h2 className="display-4 fw-light mb-4">
                <Text field={props.fields.SubHeader} />
              </h2>
              <JssLink className="btn btn-outline-light px-4 py-2" field={props.fields.Link} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Content (visible only on small screens) */}
      <div
        className="position-absolute d-lg-none w-100"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          zIndex: 2,
          top: '20%',
          transform: 'translateY(-50%)',
          padding: '2rem 1rem',
        }}
      >
        <div className="text-white ps-3">
          <h1 className="fw-bold mb-0" style={{ fontSize: '2rem' }}>
            <Text field={props.fields.Header} />
          </h1>
          <h2 className="fw-light" style={{ fontSize: '2rem' }}>
            <Text field={props.fields.SubHeader} />
          </h2>
        </div>
        <div className="mt-3 d-flex justify-content-end pe-3">
          <JssLink className="btn btn-outline-light px-4 py-2" field={props.fields.Link} />
        </div>
      </div>
    </section>
  );

  return <MainHeroDefaultComponent {...props} />;
};
