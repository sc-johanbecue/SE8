import React from 'react';
import {
  TextField,
  ImageField,
  RichTextField,
  LinkField,
  Text,
  Link as JssLink,
  Image as JssImage,
  RichText,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: TextField;
  Title1: TextField;
  Text1: RichTextField;
  Link1: LinkField;
  Image1: ImageField;
  Title2: TextField;
  Text2: RichTextField;
  Link2: LinkField;
  Image2: ImageField;

  Title3: TextField;
  Text3: RichTextField;
  Link3: LinkField;
  Image3: ImageField;
}

type SodexoBannerProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const SodexoBannerDefaultComponent = (props: SodexoBannerProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: SodexoBannerProps): JSX.Element => {
  if (props.fields) {
    return (
      <>
        <style jsx>{`
          @media (min-width: 769px) {
            :global(.CardsSlider_cards-slider__item__slider__item__JBE) {
              flex: 0 0 32%;
              max-width: 32%;
            }
          }

          @media (max-width: 768px) {
            :global(.CardsSlider_cards-slider__item__slider__item__JBE) {
              flex: 0 0 100%;
              max-width: 100%;
            }
          }

          :global(.splide__list) {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
          }
        `}</style>
        <section
          className="ContentBlock_content-block__PkQ1i"
          data-grid-layout="global"
          id="bcb4e2cb-b76d-43b3-a382-c358013e1e1e"
        >
          <div className="RichText_rich-text__Xj3Dc" data-testid="rich-text">
            <h2 className="rte-align-center">
              <Text field={props.fields.Title} />
            </h2>
          </div>
        </section>
        <section
          className="CardsSlider_cards-slider__fSELa"
          id="bf831cab-1a1c-45ea-b9c3-ac49ac2815a2"
        >
          <section
            className="splide splide Slider_slider__CJilF cards-slider__slider"
            aria-labelledby=""
            aria-roledescription="carousel"
            data-grid-layout="global"
            role="region"
          >
            <div
              className="splide__track CardsSlider_cards-slider__slides__8FwQ9"
              aria-atomic="false"
              aria-live="polite"
            >
              <ul className="splide__list">
                <li
                  className="splide__slide CardsSlider_cards-slider__item__slider__item__JBE"
                  role="group"
                  style={{ visibility: 'visible' }}
                >
                  <article className="Card_card-container__BrcrH CardsSlider_cards-slider__card__scWqG Card_card-container--hover-effect__xG_UX">
                    <div className="Card_card-container__picture__q2urq">
                      <JssImage
                        field={props.fields.Image1}
                        style={{
                          position: 'absolute',
                          height: '100%',
                          width: '100%',
                          left: '0',
                          top: '0',
                          right: '0',
                          bottom: '0',
                          objectFit: 'cover',
                          color: 'transparent',
                        }}
                      />
                    </div>
                    <section className="Card_card-container__presentation__Q_aCH">
                      <p className="Card_card-container__presentation-typo__1ENx9 Card_font-body__qRScb Card_font-bold__8gf2G">
                        <Text field={props.fields.Title1} />
                      </p>
                      <div className="Card_font-h4__Idw5p Card_font-base__PyGMI">
                        <RichText field={props.fields.Text1} />
                      </div>
                      <div className="Card_card-container__presentation-buttons__rDbZU">
                        <JssLink
                          field={props.fields.Link1}
                          className="Button_btn__Xvq6a card-container__presentation-buttons-link Button_btn--blue__16_CO Button_btn--items-center__L2yWE Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                        >
                          <span
                            className="Icon_icon__qNAb6 Icon_icon--red__KxdQl Icon_icon--arrow-rtl__xN7T5"
                            style={{ height: '24px', width: '24px' }}
                          >
                            <svg aria-hidden="true" viewBox="0 0 24 24">
                              <use xlinkHref="#icons_arrow"></use>
                            </svg>
                          </span>
                        </JssLink>
                      </div>
                    </section>
                  </article>
                </li>
                <li
                  className="splide__slide CardsSlider_cards-slider__item__slider__item__JBE"
                  role="group"
                  style={{ visibility: 'visible' }}
                >
                  <article className="Card_card-container__BrcrH CardsSlider_cards-slider__card__scWqG Card_card-container--hover-effect__xG_UX">
                    <div className="Card_card-container__picture__q2urq">
                      <JssImage
                        field={props.fields.Image2}
                        style={{
                          position: 'absolute',
                          height: '100%',
                          width: '100%',
                          left: '0',
                          top: '0',
                          right: '0',
                          bottom: '0',
                          objectFit: 'cover',
                          color: 'transparent',
                        }}
                      />
                    </div>
                    <section className="Card_card-container__presentation__Q_aCH">
                      <p className="Card_card-container__presentation-typo__1ENx9 Card_font-body__qRScb Card_font-bold__8gf2G">
                        <Text field={props.fields.Title2} />
                      </p>
                      <div className="Card_font-h4__Idw5p Card_font-base__PyGMI">
                        <RichText field={props.fields.Text2} />
                      </div>
                      <div className="Card_card-container__presentation-buttons__rDbZU">
                        <JssLink
                          field={props.fields.Link2}
                          className="Button_btn__Xvq6a card-container__presentation-buttons-link Button_btn--blue__16_CO Button_btn--items-center__L2yWE Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                        >
                          <span
                            className="Icon_icon__qNAb6 Icon_icon--red__KxdQl Icon_icon--arrow-rtl__xN7T5"
                            style={{ height: '24px', width: '24px' }}
                          >
                            <svg aria-hidden="true" viewBox="0 0 24 24">
                              <use xlinkHref="#icons_arrow"></use>
                            </svg>
                          </span>
                        </JssLink>
                      </div>
                    </section>
                  </article>
                </li>
                <li
                  className="splide__slide CardsSlider_cards-slider__item__slider__item__JBE"
                  role="group"
                  style={{ visibility: 'visible' }}
                >
                  <article className="Card_card-container__BrcrH CardsSlider_cards-slider__card__scWqG Card_card-container--hover-effect__xG_UX">
                    <div className="Card_card-container__picture__q2urq">
                      <JssImage
                        field={props.fields.Image3}
                        style={{
                          position: 'absolute',
                          height: '100%',
                          width: '100%',
                          left: '0',
                          top: '0',
                          right: '0',
                          bottom: '0',
                          objectFit: 'cover',
                          color: 'transparent',
                        }}
                      />
                    </div>
                    <section className="Card_card-container__presentation__Q_aCH">
                      <p className="Card_card-container__presentation-typo__1ENx9 Card_font-body__qRScb Card_font-bold__8gf2G">
                        <Text field={props.fields.Title3} />
                      </p>
                      <div className="Card_font-h4__Idw5p Card_font-base__PyGMI">
                        <RichText field={props.fields.Text3} />
                      </div>
                      <div className="Card_card-container__presentation-buttons__rDbZU">
                        <JssLink
                          field={props.fields.Link3}
                          className="Button_btn__Xvq6a card-container__presentation-buttons-link Button_btn--blue__16_CO Button_btn--items-center__L2yWE Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                        >
                          <span
                            className="Icon_icon__qNAb6 Icon_icon--red__KxdQl Icon_icon--arrow-rtl__xN7T5"
                            style={{ height: '24px', width: '24px' }}
                          >
                            <svg aria-hidden="true" viewBox="0 0 24 24">
                              <use xlinkHref="#icons_arrow"></use>
                            </svg>
                          </span>
                        </JssLink>
                      </div>
                    </section>
                  </article>
                </li>
              </ul>
            </div>
            <button className="Button_btn__Xvq6a CardsSlider_cards-slider__link__89T9S Button_btn--blue__16_CO Button_btn--reverse__NQ5qh Button_btn--underlined__broDi Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"></button>
            <div
              className="SliderControls_slider-controls__t9rMj CardsSlider_cards-slider__navigation__quABb"
              data-testid="slider-controls"
            >
              <ul className="splide__arrows SliderArrows_slider-arrows__n89FR SliderControls_slider-controls__arrows__wFqwO SliderControls_slider-controls__arrows--hidden__apV18">
                <li className="splide__arrow--prev SliderArrows_slider-arrows__arrow__d8O_p">
                  <button
                    aria-label="Previous slide"
                    className="Button_btn__Xvq6a SliderArrows_slider-arrows__arrow--rotated__VJ_fE Button_btn--unshaped__MfqLg"
                  >
                    <span className="Icon_icon__qNAb6 SliderArrows_slider-arrows__arrow-icon__qHj5H Icon_icon--white__ymQDN Icon_icon--arrow-rtl__xN7T5 Icon_icon--bg-red__sbGiT">
                      <svg aria-hidden="false">
                        <use xlinkHref="#icons_chevron"></use>
                      </svg>
                    </span>
                  </button>
                </li>
                <li className="splide__arrow--next SliderArrows_slider-arrows__arrow__d8O_p">
                  <button
                    aria-label="Next slide"
                    className="Button_btn__Xvq6a Button_btn--unshaped__MfqLg"
                  >
                    <span className="Icon_icon__qNAb6 SliderArrows_slider-arrows__arrow-icon__qHj5H Icon_icon--white__ymQDN Icon_icon--arrow-rtl__xN7T5 Icon_icon--bg-red__sbGiT">
                      <svg aria-hidden="false">
                        <use xlinkHref="#icons_chevron"></use>
                      </svg>
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </section>
        </section>
      </>
    );
  }

  return <SodexoBannerDefaultComponent {...props} />;
};
