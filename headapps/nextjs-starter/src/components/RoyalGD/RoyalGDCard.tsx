import React from 'react';
import { TextField } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: TextField;
  Text: TextField;
}

type CardProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const CardDefaultComponent = (props: CardProps): JSX.Element => (
  <div className={`component Card ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Card</span>
    </div>
  </div>
);

export const Default = (props: CardProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <>
      <div
        key={id ? id : undefined}
        id={id ? id : undefined}
        className={`component card card--image ${props.params.styles}`}
        data-equalizer-watch
      >
        <a href="https://www.gdanimalhealth.com/contract-research-organisation">
          <div className="card-image">
            <img
              src="https://www.gdanimalhealth.com/-/media/Images/GDDiergezondheid/CallToAction/CRO/cro-home-cta.png?h=221&amp;iar=0&amp;w=372&amp;hash=B2C07186D9372A3602724992DD8F6B97"
              alt=""
              width="372"
              height="221"
            />
          </div>
          <div className="card-divider">
            <span>CRO</span>
          </div>
        </a>
      </div>
    </>
  );

  return <CardDefaultComponent {...props} />;
};
