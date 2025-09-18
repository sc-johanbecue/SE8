import {
  ComponentParams,
  ComponentRendering,
  TextField,
  Text,
  LinkField,
  RichTextField,
  RichText,
  ImageField,
  Image as JssImage,
} from '@sitecore-content-sdk/nextjs';
import Link from 'next/link';
import React, { JSX } from 'react';

type ItemFields = {
  Title: TextField;
  Image: ImageField;
  Text: RichTextField;
  ButtonLabel: TextField;
  Link: LinkField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: ItemFields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  return (
    <div className="slider-card__item o-col-3--lg" js-hook-slider-card-item>
      <Link
        href={props.fields.Link.value.href || ''}
        js-hook-customer-service-tile
        data-type=""
        className="c-card nj-card nj-card--border"
      >
        <div className="card__image-container">
          <figure className="c-image card__image nj-card__img" js-hook-objectfit-container>
            <JssImage
              field={props.fields.Image}
              className="image__default"
              js-hook-objectfit-img
              style={{ objectPosition: '50% 50%' }}
              sizes="(max-width: 320px) 370px,(max-width: 480px) 585px,(max-width: 768px) 390px,570px"
            />
            <JssImage
              field={props.fields.Image}
              className="image__ghost"
              aria-hidden="true"
              js-hook-objectfit-img
              style={{ objectPosition: '50% 50%' }}
              js-hook-shadow-image
            />
          </figure>
        </div>
        <div className="card__body nj-card__body">
          <h4
            id="Title-f468195b-eb16-4e81-84a8-a8ec6906e40e"
            className="card__title nj-card__title"
          >
            <Text field={props.fields.Title} />
          </h4>
          <p id="Text-f468195b-eb16-4e81-84a8-a8ec6906e40e" className="card__text s-rich-text">
            <RichText field={props.fields.Text} />
          </p>

          <div
            id="button-f468195b-eb16-4e81-84a8-a8ec6906e40e"
            className="c-button--link  button--icon  card__button"
          >
            <span className="button__label">
              <Text field={props.fields.ButtonLabel} />
            </span>
            <span className="button__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="svg--icons-chevron-right"
                width="8"
                height="12"
                viewBox="0 0 8 12"
              >
                <path d="M7.359 6 1.344 0-.071 1.415 4.55 6 0 10.585 1.415 12z" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};
