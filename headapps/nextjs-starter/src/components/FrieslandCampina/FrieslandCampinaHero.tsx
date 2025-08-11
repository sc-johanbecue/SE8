// components/blocks/Hero.tsx
import React from 'react';
import {
  ComponentRendering,
  ComponentParams,
  Text as JssText,
  RichText as JssRichText,
  Image as JssImage,
  TextField,
  RichTextField,
  ImageField,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: TextField; // "Duurzaamheid"
  Intro?: RichTextField; // "Een positieve impact..."
  Image: ImageField; // right-side visual
}

type Props = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export default function Hero(props: Props) {
  return (
    <header className="block block--hero hero hero--primary hero--has-image hero--image-bottom theme--blue">
      <div className="hero__container ls-gutter ls-container--m">
        <div className="hero__inner">
          <div className="hero__column hero__column--message">
            <div className="hero__message">
              <h1 className="hero__title title--l">
                <JssText field={props.fields.Title} />
              </h1>
              {props.fields?.Intro?.value && (
                <div className="hero__intro text--l">
                  <JssRichText field={props.fields.Intro!} />
                </div>
              )}
              <div className="hero__svgs">
                <svg
                  preserveAspectRatio="none"
                  className="hero__shape"
                  viewBox="0 0 1004 178"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3.33786e-05 157.057L0 157V2.51055e-06L3.33786e-05 2.45094e-06H183.127C183.166 -8.36749e-07 183.206 -8.1684e-07 183.245 2.51055e-06L1004 2.51055e-06V177.761H865.891C748.654 177.759 633.699 148.744 533.731 93.9219L515.237 83.7712C415.309 29 300.417 0.00985183 183.245 2.51055e-06L183.127 2.45094e-06H3.33786e-05V157.057Z"></path>
                  <path d="M183.127 2.45094e-06C183.166 -8.36749e-07 183.206 -8.1684e-07 183.245 2.51055e-06L183.127 2.45094e-06Z"></path>
                </svg>
                <svg
                  className="hero__illustration hero__illustration--trees"
                  width="85"
                  height="80"
                >
                  <use xlinkHref="#illustration--trees"></use>
                </svg>
                <svg
                  className="hero__illustration hero__illustration--plant"
                  width="72"
                  height="144"
                >
                  <use xlinkHref="#illustration--plant"></use>
                </svg>
              </div>
            </div>
          </div>
          <div className="hero__column hero__column--visual">
            <div className="hero__visual">
              <JssImage
                field={props.fields.Image}
                className="hero__image lazyautosizes lazyloaded"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
