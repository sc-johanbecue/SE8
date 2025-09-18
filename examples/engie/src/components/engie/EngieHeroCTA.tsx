import {
  ComponentParams,
  ComponentRendering,
  TextField,
  LinkField,
  Text,
  Image as JssImage,
  RichTextField,
  ImageField,
  RichText,
  Placeholder,
} from '@sitecore-content-sdk/nextjs';
import React, { JSX } from 'react';

type ItemFields = {
  Heading: TextField;
  Image: ImageField;
  Text: RichTextField;
  ButtonLabel: TextField;
  Link: LinkField;
  CTATitle: TextField;
  Promotion: RichTextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: ItemFields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  console.log(props);
  const phUSPContainer = `EngieUSPContainer-${props.params.DynamicPlaceholderId}`;

  return (
    <div id="HeaderImage" className="c-hero c-hero-with-cta">
      <div className="hero__image-container">
        <figure className="c-image " js-hook-objectfit-container>
          <img
            src={props.fields.Image.value}
            alt=""
            className="image__default"
            js-hook-objectfit-img
            style={{ objectPosition: '50% 50%' }}
          />
        </figure>
      </div>

      <div className="o-container hero__content">
        <div className="o-grid">
          <div className="o-col-12 c-hero-breadcrumb"></div>
          <div className="o-col-12 o-col-6--lg c-hero-title">
            <h1
              id="Title-b61fb18d-d9ca-4a85-a8bc-83e0f17a5650"
              className="hero__title u-text--white"
            >
              <Text field={props.fields.Heading} />
            </h1>
          </div>

          <div id="CtaPat-b24314a1-f176-449e-a382-293e6814400d" className="o-col-12 o-col-6--lg">
            {/* <!-- begin CtaPat Content --> */}
            <div className="c-cta-pat">
              <h4 id="Title" className="cta-pat__title">
                <Text field={props.fields.CTATitle} />
              </h4>
              <div className="o-col-12">
                <ul className="c-usps     cta-pat__usps usps--green usps--vertical">
                  <Placeholder name={phUSPContainer} rendering={props.rendering} />
                </ul>
              </div>
              <div className="cta-pat__promotion-block cta-pat__promotion-block--shape- cta-pat__promotion-block--border-gradient">
                <RichText field={props.fields.Promotion} />
              </div>
              <form
                className="c-form cta-pat__form"
                action="https://energie.engie.nl"
                js-hook-cta-pat-form=""
              >
                <div className="c-alert alert--error u-hidden" js-hook-alert=""></div>
                <div className="cta-pat__form-row">
                  <div className="c-input form__item cta-pat__input-zipcode input--text">
                    <div className="input__wrapper" title="">
                      <label className="input__label" htmlFor="thuis-zipcode"></label>
                      <input
                        className="input__input"
                        type="text"
                        name="postcode"
                        value=""
                        id="thuis-zipcode"
                        data-validate="required,zipcode"
                        placeholder="Postcode"
                        autoComplete="disable"
                        js-hook-zipcode=""
                      />
                      <span className="focus-helper"></span>
                    </div>
                    <div className="form__item-error u-hidden"></div>
                  </div>
                  <div className="c-input form__item cta-pat__input-number input--number">
                    <div className="input__wrapper" title="">
                      <label className="input__label" htmlFor="thuis-house-number"></label>
                      <input
                        className="input__input"
                        type="number"
                        name="huisnummer"
                        value=""
                        id="thuis-house-number"
                        data-validate="required"
                        placeholder="Huisnummer"
                        autoComplete="disable"
                        js-hook-house-number=""
                      ></input>
                      <span className="focus-helper"></span>
                    </div>
                    <div className="form__item-error u-hidden"></div>
                  </div>
                  <div className="c-input form__item cta-pat__input-house-number-extension input--text">
                    <div className="input__wrapper" title="">
                      <label
                        className="input__label"
                        htmlFor="thuis-house-number-extension"
                      ></label>
                      <input
                        className="input__input"
                        type="text"
                        name="toevoeging"
                        value=""
                        id="thuis-house-number-extension"
                        placeholder="Toevoeging"
                        autoComplete="disable"
                        js-hook-house-number-extension=""
                      ></input>
                      <span className="focus-helper"></span>
                    </div>
                    <div className="form__item-error u-hidden"></div>
                  </div>
                </div>
                <button className="c-button--secondary button--large cta-pat__button" type="submit">
                  <span id="ButtonText" className="button__label">
                    Bereken je maandbedrag
                  </span>
                </button>
                <div className="cta-pat__foot-note">
                  <span className="cta-pat__foot-note-text">
                    <p>Binnen 1 minuut berekend</p>
                    <span className="svg--icons-arrow-up">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg--icons-arrow-up"
                        viewBox="0 0 512 512"
                      >
                        <path d="M48 488a24 24 0 0 1 0-48 294.062 294.062 0 0 0 209.3-86.7A294.066 294.066 0 0 0 344 144V48a24 24 0 0 1 48 0v96a341.876 341.876 0 0 1-27.043 133.907 342.818 342.818 0 0 1-73.712 109.337A343 343 0 0 1 48 488z" />
                        <path d="M464.017 200a23.96 23.96 0 0 1-19.218-9.6L368 88l-76.8 102.4a24 24 0 1 1-38.4-28.8l96-128a24 24 0 0 1 38.4 0l96 128a24 24 0 0 1-19.183 38.4z" />
                      </svg>
                    </span>
                  </span>
                </div>
              </form>
            </div>
          </div>
          <div className="o-col-12"></div>
        </div>
      </div>
      <button className="c-hero-scroll-indicator" js-hook-hero-scroll-indicator>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="svg--icons-chevron-down"
          width="12"
          height="8"
          viewBox="0 0 12 8"
        >
          <path fill="#212121" fill-rule="evenodd" d="M1.41.59 6 5.17 10.59.59 12 2 6 8 0 2z" />
        </svg>
      </button>
    </div>
  );
};
