import {
  ComponentParams,
  ComponentRendering,
  TextField,
  Text,
  LinkField,
  RichTextField,
  RichText,
  ImageField,
  Placeholder,
  Image as JssImage,
  Link as JssLink,
} from '@sitecore-content-sdk/nextjs';
import React, { JSX } from 'react';

type ItemFields = {
  Title: TextField;
  Image: ImageField;
  Text: RichTextField;
  ButtonLabel: TextField;
  Link1: LinkField;
  Link2: LinkField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: ItemFields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const phUSPContainer = `EngieUSPContainer-${props.params.DynamicPlaceholderId}`;
  return (
    <section
      id="ImageText-260e82fc-0af7-424d-bc7a-3dc7af73b842"
      className="c-content-slot"
      js-hook-inview=""
    >
      <div className="o-container">
        <div className="o-grid">
          <div className="o-col-12">
            <div className="c-image-text">
              <div className="image-text__wrapper o-grid">
                <div className="o-col-12 o-col-6--md ">
                  <div className="image-text__content is--left">
                    <h2
                      id="Title-260e82fc-0af7-424d-bc7a-3dc7af73b842"
                      className="image-text__title"
                    >
                      <Text field={props.fields.Title} />
                    </h2>
                    <div
                      id="Text-260e82fc-0af7-424d-bc7a-3dc7af73b842"
                      className="image-text__description s-rich-text"
                    >
                      <RichText field={props.fields.Text} />
                      <ul className="c-usps     cta-pat__usps usps--green usps--vertical">
                        <Placeholder name={phUSPContainer} rendering={props.rendering} />
                      </ul>
                    </div>
                    <div className="image-text__buttons">
                      <JssLink
                        field={props.fields.Link1}
                        className="c-button--secondary image-text__button"
                      >
                        <span id="ButtonTitle" className="button__label">
                          {props.fields.Link1?.value.text}
                        </span>
                      </JssLink>
                      <JssLink
                        field={props.fields.Link2}
                        className="image-text__button c-button--ghost"
                      >
                        <span className="button__label">{props.fields.Link2?.value.text}</span>
                      </JssLink>
                    </div>
                  </div>
                </div>
                <div className="o-col-12 o-col-6--md ">
                  <div className="image-text__image-container">
                    <figure className="c-image image-text__image" js-hook-objectfit-container>
                      <JssImage
                        field={props.fields.Image}
                        className="image__default"
                        js-hook-objectfit-img
                        style={{ objectPosition: '50% 50%', opacity: '1' }}
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const WithoutCTA = (props: ComponentProps): JSX.Element => {
  return (
    <section
      id="ImageText-260e82fc-0af7-424d-bc7a-3dc7af73b842"
      className="c-content-slot"
      js-hook-inview=""
    >
      <div className="o-container">
        <div className="o-grid">
          <div className="o-col-12">
            <div className="c-image-text">
              <div className="image-text__wrapper o-grid">
                <div className="o-col-12 o-col-6--md ">
                  <div className="image-text__content is--left">
                    <h2
                      id="Title-260e82fc-0af7-424d-bc7a-3dc7af73b842"
                      className="image-text__title"
                    >
                      <Text field={props.fields.Title} />
                    </h2>
                    <div
                      id="Text-260e82fc-0af7-424d-bc7a-3dc7af73b842"
                      className="image-text__description s-rich-text"
                    >
                      <RichText field={props.fields.Text} />
                    </div>
                    <div className="image-text__buttons">
                      <JssLink
                        field={props.fields.Link1}
                        className="c-button--secondary image-text__button"
                      >
                        <span id="ButtonTitle" className="button__label">
                          {props.fields.Link1?.value.text}
                        </span>
                      </JssLink>
                    </div>
                  </div>
                </div>
                <div className="o-col-12 o-col-6--md ">
                  <div className="image-text__image-container">
                    <figure className="c-image image-text__image" js-hook-objectfit-container>
                      <JssImage
                        field={props.fields.Image}
                        className="image__default"
                        js-hook-objectfit-img
                        style={{ objectPosition: '50% 50%', opacity: '1' }}
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
