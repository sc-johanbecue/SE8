import React from 'react';
import {
  TextField,
  ImageField,
  LinkField,
  RichTextField,
  RichText,
  Text,
  Image as JssImage,
  Link as JssLink,
} from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

interface Fields {
  HeroTitle: TextField;
  HeroBannerImage: ImageField;
  Link: LinkField;
  LogoImage: ImageField;
  ShortDescription: RichTextField;
  FeatureImage: ImageField;
  ApproachTitle: TextField;
  ApproachDescription: RichTextField;
  Approach1Image: ImageField;
  Approach1SubTitle: TextField;
  Approach1Text: RichTextField;
  Approach2Image: ImageField;
  Approach2SubTitle: TextField;
  Approach2Text: RichTextField;
  Approach3Image: ImageField;
  Approach3SubTitle: TextField;
  Approach3Text: RichTextField;
  Quote: TextField;
  QuoteSignature: TextField;
}

type SodexoBrandDetailProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const SodexoBrandDetailDefaultComponent = (props: SodexoBrandDetailProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: SodexoBrandDetailProps): JSX.Element => {
  if (props.fields) {
    return (
      <div className="jsx-3448995667 jsx-24671738 Layout_main__4tP_M">
        <section
          className="HeroFeatureBanner_hero-feature__nSttY"
          data-full-width="true"
          data-grid-layout="global"
        >
          <div className="HeroFeatureBanner_hero-feature__background-container__jddjR HeroFeatureBanner_hero-feature__background-overlay__t4GgB hero-feature__background-image-.25">
            <JssImage
              field={props.fields.HeroBannerImage}
              className="HeroFeatureBanner_hero-feature__background-image__TUG2E"
              style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                left: '0',
                top: '0',
                right: '0',
                bottom: '0',
                color: 'transparent',
              }}
            />
            <img
              alt="Modern-Recipe-Hero-Feature"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="HeroFeatureBanner_hero-feature__background-image__TUG2E"
              style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                left: '0',
                top: '0',
                right: '0',
                bottom: '0',
                color: 'transparent',
              }}
              src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/HeroLatestNews-1440x690/Modern-Recipe-Hero-Feature.jpg?h=690&amp;iar=0&amp;w=1440"
            />
          </div>
          <h1 className="HeroFeatureBanner_hero-feature__logo-container__Bjain HeroFeatureBanner_hero-feature__logo-container--elongated__Efp9U">
            <JssImage
              style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                left: '0',
                top: '0',
                right: '0',
                bottom: '0',
                objectFit: 'contain',
                color: 'transparent',
              }}
              field={props.fields.LogoImage}
            />
            <span className="HeroFeatureBanner_hero-feature__logo-alt__8C3nM"></span>
          </h1>
          <JssLink
            field={props.fields.Link}
            className="Button_btn__Xvq6a HeroFeatureBanner_hero-feature__button__cwRsx Button_btn--white__F9cW2 Button_btn--items-center__L2yWE Button_btn--link__JI8fR"
          >
            Experience Modern Recipe
            <span
              className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
              style={{ height: '24px', width: '24px' }}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <use xlinkHref="#icons_arrow"></use>
              </svg>
            </span>
          </JssLink>
        </section>
        <section className="ParallaxCards_container__fRqjr">
          <div className="ParallaxCards_body__f4Pk8" id="e89e65b9-6123-44f7-a514-c2ac71557f7f">
            <div
              className="Surface_surface__Y0_rx ParallaxCards_content__nbLCz"
              style={
                {
                  '--dynamic-translate-y': '-1.5rem',
                  background: '#0C4D4F',
                  color: '#FFFFFF',
                } as React.CSSProperties
              }
            >
              <h2 className="font-hero-title">
                <Text field={props.fields.HeroTitle} />
              </h2>
              <div>
                <RichText field={props.fields.ShortDescription} />
              </div>
              <div className="CardFeature_buttons__ZommA"></div>
            </div>
            <div
              className="ParallaxCards_media__G_q5n"
              style={{ '--dynamic-translate-y': '1.5rem' } as React.CSSProperties}
            >
              <JssImage
                field={props.fields.FeatureImage}
                className="ParallaxCards_image__ijs8m"
                style={{
                  position: 'absolute',
                  height: '100%',
                  width: '100%',
                  left: '0',
                  top: '0',
                  right: '0',
                  bottom: '0',
                  color: 'transparent',
                }}
              />
            </div>
          </div>
        </section>
        <div className="Media_media__NhvS6" id="6c273a13-771b-4688-a401-8bf8c058f9c2">
          <div className="YouTubeMedia_youtube-media__player-container__5VnJG">
            <iframe
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              height="100%"
              id=":R1u96:"
              src="https://www.youtube-nocookie.com/embed/hoPmgLWerpM?rel=0"
              style={{ aspectRatio: 16 / 9 }}
              title="Embedded youtube"
              width="100%"
            ></iframe>
          </div>
        </div>
        <section id="d61295e3-26b9-42f4-ac81-f820f16ffec7">
          <h2 className="H2Title_h2title__nPUYH H2Title_font-h2__h_TJR H2Title_h2title_center__zlb94">
            <Text field={props.fields.ApproachTitle} />
          </h2>
        </section>
        <section
          className="ContentBlock_content-block__PkQ1i"
          data-grid-layout="global"
          id="72f88748-d345-4cbe-9e54-7dd205da2e06"
        >
          <div className="RichText_rich-text__Xj3Dc" data-testid="rich-text">
            <RichText field={props.fields.ApproachDescription} />
          </div>
        </section>
        <section
          data-full-width="false"
          data-grid-layout="global"
          id="bed6bd1a-c552-4c57-9d07-2ef34aafa06a"
          className="Surface_surface__Y0_rx banner-card"
        >
          <div className="BannerCard_banner-card__container__FHLDK" data-grid-layout="global">
            <div className="BannerCard_banner-card__image-wrapper__T8qZB" data-grid-layout="global">
              <div className="Media_media__NhvS6" id="">
                <div className="PushImage_push-image__V6naY PushImage_push-image--layout__PwSJd ImageBannerCard_image-banner-card__image-container__dd7MU">
                  <JssImage
                    field={props.fields.Approach1Image}
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
              </div>
            </div>
            <div className="BannerCard_banner-card__content__JcBKs" data-grid-layout="global">
              <div className="">
                <h2 className="BannerCard_banner-card__title__z7y_B">
                  <Text field={props.fields.Approach1SubTitle} />
                </h2>
              </div>
              <div className="">
                <div className="BannerCard_banner-card__text__XOb09">
                  <RichText field={props.fields.Approach1Text} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          data-full-width="false"
          data-grid-layout="global"
          id="0ba5151e-adcb-4176-8467-66bb959221af"
          className="Surface_surface__Y0_rx banner-card"
        >
          <div className="BannerCard_banner-card__container__FHLDK" data-grid-layout="global">
            <div
              className="BannerCard_banner-card__image-wrapper__T8qZB BannerCard_banner-card__image-wrapper--reversed__haj15"
              data-grid-layout="global"
            >
              <div className="Media_media__NhvS6" id="">
                <div className="PushImage_push-image__V6naY PushImage_push-image--layout__PwSJd ImageBannerCard_image-banner-card__image-container__dd7MU">
                  <JssImage
                    field={props.fields.Approach2Image}
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
              </div>
            </div>
            <div
              className="BannerCard_banner-card__content__JcBKs BannerCard_banner-card__content--reversed__mMBDq"
              data-grid-layout="global"
            >
              <div className="">
                <h2 className="BannerCard_banner-card__title__z7y_B">
                  <Text field={props.fields.Approach2SubTitle} />
                </h2>
              </div>
              <div className="">
                <div className="BannerCard_banner-card__text__XOb09">
                  <RichText field={props.fields.Approach2Text} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          data-full-width="false"
          data-grid-layout="global"
          id="6162046d-323b-4779-b3c4-c3b3f303b1bb"
          className="Surface_surface__Y0_rx banner-card"
        >
          <div className="BannerCard_banner-card__container__FHLDK" data-grid-layout="global">
            <div className="BannerCard_banner-card__image-wrapper__T8qZB" data-grid-layout="global">
              <div className="Media_media__NhvS6" id="">
                <div className="PushImage_push-image__V6naY PushImage_push-image--layout__PwSJd ImageBannerCard_image-banner-card__image-container__dd7MU">
                  <JssImage
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
                    field={props.fields.Approach3Image}
                  />
                </div>
              </div>
            </div>
            <div className="BannerCard_banner-card__content__JcBKs" data-grid-layout="global">
              <div className="">
                <h2 className="BannerCard_banner-card__title__z7y_B">
                  <Text field={props.fields.Approach3SubTitle} />
                </h2>
              </div>
              <div className="">
                <div className="BannerCard_banner-card__text__XOb09">
                  <RichText field={props.fields.Approach3Text} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <figure
          className="Quote_quote__QW6q6 color-primary"
          data-grid-layout="global"
          id="bb46a7eb-84a6-45dc-bea9-e852fb17bd8e"
        >
          <div className="Quote_quote__container__FDXC_">
            <span
              className="Icon_icon__qNAb6 Quote_quote__container__icon__rvdaa Icon_icon--light-blue__kZbFz"
              style={{ height: '75px', width: '131px' }}
            >
              <svg aria-hidden="true" viewBox="0 0 131 75">
                <use xlinkHref="#icons_quote"></use>
              </svg>
            </span>
            <div className="">
              <blockquote className="Quote_font-h2__Zo2o0" data-testid="quote-title">
                <Text field={props.fields.Quote} />
              </blockquote>
            </div>
            <div className="">
              <div className="Signature_signature__rtQMD color-primary quote__signature">
                <figcaption className="signature__caption Signature_signature__caption--separator__sncSA">
                  <span className="Signature_signature__text__ueKZ6 Signature_signature__text--bold__8NAqe Signature_font-body-big__Yuawj Signature_font-bold__CQHPs Signature_font-heading__uv1Aw">
                    <Text field={props.fields.QuoteSignature} />
                  </span>
                </figcaption>
              </div>
            </div>
          </div>
        </figure>
        <section className="MagazineSlider_container__2x33j">
          <section
            className="splide MagazineSlider_slider__q9sq3 MagazineSlider_slider-single__ezPvm"
            aria-roledescription="carousel"
            role="region"
          >
            <div className="splide__track" aria-atomic="false" aria-live="polite">
              <ul className="splide__list">
                <li className="splide__slide" role="group">
                  <article className="Surface_surface__Y0_rx MagazineSlideCard_slide__4yYnE">
                    <div className="MagazineSlideCard_image__72_ju">
                      <div className="PushImage_push-image__V6naY">
                        <img
                          alt=""
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className=""
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
                          src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/HeroLatestNews-1440x690/Modern-Recipe-Mag.jpg?h=608&amp;iar=0&amp;w=1240"
                        />
                      </div>
                    </div>
                    <div
                      className="MagazineSlideCard_summary__zNtOv MagazineSlideText_summary-active__A8vcE"
                      data-testid="summary-id"
                    >
                      <h3 className="font-h3">Delicious &amp; craveable dishes </h3>
                      <div className="">
                        We&quot;re all about freshness, flavor, and deliciousness in crafting our
                        menus, featuring seasonal ingredients and sourced directly from local
                        suppliers. Our commitment to healthy food extends to our plant-forward
                        menus, rooted in EAT-Lancet recommendations for diets that are healthy for
                        people and planet.{' '}
                      </div>
                      <button className="Button_btn__Xvq6a MagazineSlideText_button-container__JfGes Button_btn--unshaped__MfqLg">
                        <span className="Icon_icon__qNAb6 MagazineSlideText_icon__kMrSm Icon_icon--bg-red__sbGiT">
                          <svg aria-hidden="false">
                            <use xlinkHref="#icons_chevron-rounded"></use>
                          </svg>
                        </span>
                      </button>
                    </div>
                  </article>
                </li>
                <li className="splide__slide" role="group">
                  <article className="Surface_surface__Y0_rx MagazineSlideCard_slide__4yYnE">
                    <div className="MagazineSlideCard_image__72_ju">
                      <div className="PushImage_push-image__V6naY">
                        <img
                          alt=""
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className=""
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
                          src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/HeroLatestNews-1440x690/Modern-Recipe-Mag2.jpg?h=608&amp;iar=0&amp;w=1240"
                        />
                      </div>
                    </div>
                    <div
                      className="MagazineSlideCard_summary__zNtOv MagazineSlideText_summary-active__A8vcE"
                      data-testid="summary-id"
                    >
                      <h3 className="font-h3">Responsible ingredients</h3>
                      <div className="">
                        At Modern Recipe, we serve food that is good for you but also for our
                        planet. Our seasonal and plant forward menus not only support local
                        suppliers, they also help reducing the carbon footprint associated with food
                        transportation and preserve our environment.{' '}
                      </div>
                      <button className="Button_btn__Xvq6a MagazineSlideText_button-container__JfGes Button_btn--unshaped__MfqLg">
                        <span className="Icon_icon__qNAb6 MagazineSlideText_icon__kMrSm Icon_icon--bg-red__sbGiT">
                          <svg aria-hidden="false">
                            <use xlinkHref="#icons_chevron-rounded"></use>
                          </svg>
                        </span>
                      </button>
                    </div>
                  </article>
                </li>
                <li className="splide__slide" role="group">
                  <article className="Surface_surface__Y0_rx MagazineSlideCard_slide__4yYnE">
                    <div className="MagazineSlideCard_image__72_ju">
                      <div className="PushImage_push-image__V6naY">
                        <img
                          alt=""
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className=""
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
                          src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/HeroLatestNews-1440x690/Modern-Recipe-Mag3.jpg?h=608&amp;iar=0&amp;w=1240"
                        />
                      </div>
                    </div>
                    <div
                      className="MagazineSlideCard_summary__zNtOv MagazineSlideText_summary-active__A8vcE"
                      data-testid="summary-id"
                    >
                      <h3 className="font-h3">Luxe experiences</h3>
                      <div className="">
                        Authentic hospitality lies in the details. From seamless technology to warm
                        greetings by our trained staff from renowned hospitality ambassadors, our
                        spaces prioritize your employees needs. They will enjoy delicious food that
                        fosters connections for a great workplace experience.{' '}
                      </div>
                      <button className="Button_btn__Xvq6a MagazineSlideText_button-container__JfGes Button_btn--unshaped__MfqLg">
                        <span className="Icon_icon__qNAb6 MagazineSlideText_icon__kMrSm Icon_icon--bg-red__sbGiT">
                          <svg aria-hidden="false">
                            <use xlinkHref="#icons_chevron-rounded"></use>
                          </svg>
                        </span>
                      </button>
                    </div>
                  </article>
                </li>
              </ul>
            </div>
            <ul className="splide__arrows MagazineSliderControls_arrows__L0zRS">
              <li>
                <button className="splide__arrow splide__arrow--prev">
                  <span
                    aria-label="Previous slide"
                    className="Icon_icon__qNAb6 Icon_icon--white__ymQDN Icon_icon--bg-red__sbGiT Icon_icon--rotate__LGlfc"
                    style={{ height: '32px', width: '32px' }}
                  >
                    <svg aria-hidden="false" viewBox="0 0 32 32">
                      <use xlinkHref="#icons_chevron"></use>
                    </svg>
                  </span>
                </button>
              </li>
              <li>
                <button className="splide__arrow splide__arrow--next">
                  <span
                    aria-label="Next slide"
                    className="Icon_icon__qNAb6 Icon_icon--white__ymQDN Icon_icon--arrow-rtl__xN7T5 Icon_icon--bg-red__sbGiT"
                    style={{ height: '32px', width: '32px' }}
                  >
                    <svg aria-hidden="false" viewBox="0 0 32 32">
                      <use xlinkHref="#icons_chevron"></use>
                    </svg>
                  </span>
                </button>
              </li>
            </ul>
            <button className="splide__toggle MagazineSliderControls_toggle__gTVoW" type="button">
              <span className="splide__toggle__play">
                <span
                  className="Icon_icon__qNAb6 Icon_icon--dark-blue__otp6D Icon_icon--bg-white__b0E4T"
                  style={{ height: '32px', width: '32px' }}
                >
                  <svg aria-hidden="true" viewBox="0 0 32 32">
                    <use xlinkHref="#icons_play"></use>
                  </svg>
                </span>
              </span>
              <span className="splide__toggle__pause">
                <span
                  className="Icon_icon__qNAb6 Icon_icon--dark-blue__otp6D Icon_icon--bg-white__b0E4T"
                  style={{ height: '32px', width: '32px' }}
                >
                  <svg aria-hidden="true" viewBox="0 0 32 32">
                    <use xlinkHref="#icons_pause"></use>
                  </svg>
                </span>
              </span>
            </button>
          </section>
          <div className="MagazineSlider_cards__xkIOw" data-testid="simple-cards-container-id">
            <article className="Surface_surface__Y0_rx MagazineSlideCard_slide__4yYnE MagazineSlideCard_slide-simple__zkQRi MagazineSlideCard_slide-active__OUl84">
              <div
                className="MagazineSlideCard_summary__zNtOv MagazineSlideText_summary-active__A8vcE MagazineSlideCard_summary-simple__ylKgh"
                data-testid="summary-id"
              >
                <h3 className="font-h3">Delicious &amp; craveable dishes </h3>
                <div className="MagazineSlideText_text-active__gC5zI">
                  We&quot;re all about freshness, flavor, and deliciousness in crafting our menus,
                  featuring seasonal ingredients and sourced directly from local suppliers. Our
                  commitment to healthy food extends to our plant-forward menus, rooted in
                  EAT-Lancet recommendations for diets that are healthy for people and planet.
                </div>
                <button className="Button_btn__Xvq6a MagazineSlideText_button-container__JfGes MagazineSlideText_icon-rotated__ZKomI Button_btn--unshaped__MfqLg">
                  <span className="Icon_icon__qNAb6 MagazineSlideText_icon__kMrSm Icon_icon--bg-red__sbGiT">
                    <svg aria-hidden="false">
                      <use xlinkHref="#icons_chevron-rounded"></use>
                    </svg>
                  </span>
                </button>
              </div>
            </article>
            <article className="Surface_surface__Y0_rx MagazineSlideCard_slide__4yYnE MagazineSlideCard_slide-simple__zkQRi">
              <div
                className="MagazineSlideCard_summary__zNtOv MagazineSlideText_summary-row__vvCga MagazineSlideCard_summary-simple__ylKgh"
                data-testid="summary-id"
              >
                <h3 className="font-h3">Responsible ingredients</h3>
                <button className="Button_btn__Xvq6a MagazineSlideText_button-container__JfGes Button_btn--unshaped__MfqLg">
                  <span className="Icon_icon__qNAb6 MagazineSlideText_icon__kMrSm Icon_icon--bg-red__sbGiT">
                    <svg aria-hidden="false">
                      <use xlinkHref="#icons_chevron-rounded"></use>
                    </svg>
                  </span>
                </button>
              </div>
            </article>
            <article className="Surface_surface__Y0_rx MagazineSlideCard_slide__4yYnE MagazineSlideCard_slide-simple__zkQRi">
              <div
                className="MagazineSlideCard_summary__zNtOv MagazineSlideText_summary-row__vvCga MagazineSlideCard_summary-simple__ylKgh"
                data-testid="summary-id"
              >
                <h3 className="font-h3">Luxe experiences</h3>
                <button className="Button_btn__Xvq6a MagazineSlideText_button-container__JfGes Button_btn--unshaped__MfqLg">
                  <span className="Icon_icon__qNAb6 MagazineSlideText_icon__kMrSm Icon_icon--bg-red__sbGiT">
                    <svg aria-hidden="false">
                      <use xlinkHref="#icons_chevron-rounded"></use>
                    </svg>
                  </span>
                </button>
              </div>
            </article>
          </div>
        </section>
        <section
          className="KeyFiguresCarousel_container___eL5W"
          id="460fe8ad-f7b6-4c18-b3f3-f81b358d42e0"
        >
          <h2 className="font-h2 KeyFiguresCarousel_header__gxFk5" id="carousel-label">
            About Modern Recipe
          </h2>
          <section
            className="splide splide"
            aria-labelledby="carousel-label"
            aria-roledescription="carousel"
            role="region"
          >
            <div className="splide__track" aria-atomic="false" aria-live="polite">
              <ul className="splide__list">
                <li className="splide__slide KeyFiguresCarouselItem_container__kJXq1" role="group">
                  <div
                    className="Surface_surface__Y0_rx KeyFiguresCarouselItem_card__BYcxM"
                    style={{ background: '#C6E9E8', color: '#004C4E' }}
                  >
                    <div className="KeyFiguresCarouselItem_content__U2007">
                      <p className="font-hero-title">+ 400 </p>
                      <p className="font-body-big KeyFiguresCarouselItem_text__dUBDw">
                        Modern Recipe Corporate dining worldwide{' '}
                      </p>
                    </div>
                  </div>
                </li>
                <li className="splide__slide KeyFiguresCarouselItem_container__kJXq1" role="group">
                  <div className="Surface_surface__Y0_rx KeyFiguresCarouselItem_card__BYcxM">
                    <div className="KeyFiguresCarouselItem_content__U2007">
                      <p className="font-hero-title">50%</p>
                      <p className="font-body-big KeyFiguresCarouselItem_text__dUBDw">
                        Plant forward menu items targeted
                      </p>
                    </div>
                  </div>
                </li>
                <li className="splide__slide KeyFiguresCarouselItem_container__kJXq1" role="group">
                  <div className="Surface_surface__Y0_rx KeyFiguresCarouselItem_card__BYcxM">
                    <div className="KeyFiguresCarouselItem_content__U2007">
                      <p className="font-hero-title">28%</p>
                      <p className="font-body-big KeyFiguresCarouselItem_text__dUBDw">
                        Less CO2 emissions than restaurant average{' '}
                      </p>
                    </div>
                  </div>
                </li>
                <li className="splide__slide KeyFiguresCarouselItem_container__kJXq1" role="group">
                  <div className="Surface_surface__Y0_rx KeyFiguresCarouselItem_card__BYcxM">
                    <div className="KeyFiguresCarouselItem_content__U2007">
                      <p className="font-hero-title">65%</p>
                      <p className="font-body-big KeyFiguresCarouselItem_text__dUBDw">
                        Fresh products
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="CarouselContainer_controls__ZYO8_">
              <div className="CarouselContainer_progress-container__9JCww" id="splide-progress">
                <div className="CarouselContainer_progress-bar__m6Sd7"></div>
                <div
                  className="CarouselContainer_progress__lWzfn"
                  style={{ '--dynamic-width': '0%' } as React.CSSProperties}
                ></div>
              </div>
              <ul className="splide__arrows CarouselContainer_arrows__tH4VV">
                <li className="splide__arrow--prev CarouselContainer_arrow__8HUB8 CarouselContainer_rotated__IKATs">
                  <button className="Button_btn__Xvq6a Button_btn--unshaped__MfqLg">
                    <span className="Icon_icon__qNAb6 CarouselContainer_icon__qurJ0 Icon_icon--arrow-rtl__xN7T5 Icon_icon--bg-red__sbGiT">
                      <svg aria-hidden="false">
                        <use xlinkHref="#icons_chevron"></use>
                      </svg>
                    </span>
                  </button>
                </li>
                <li className="splide__arrow--next CarouselContainer_arrow__8HUB8">
                  <button className="Button_btn__Xvq6a Button_btn--unshaped__MfqLg">
                    <span className="Icon_icon__qNAb6 CarouselContainer_icon__qurJ0 Icon_icon--arrow-rtl__xN7T5 Icon_icon--bg-red__sbGiT">
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
        <section data-full-width="true" id="c1870559-2017-4bbb-9cad-7d91cb257f2e">
          <div
            data-full-width="true"
            className="Surface_surface__Y0_rx HeroCard_hero-card__EW9HT color-white HeroCard_hero-card--full-width__x5BnP HeroCard_hero-card--no-background__X3oMd"
            style={{ background: '#F4D8D3', color: '#004C4E' }}
          >
            <div className="HeroCard_hero-card__content__HzbPp HeroCard_hero-card__content--full-width__vDOre">
              <div className="">
                <h2 className="HeroCard_hero-card__content__heading__T_TA9 HeroCard_font-h2__IH7ti">
                  Give your employees the workplace experience they deserve
                </h2>
                <div
                  className="HeroCard_hero-card__content__richtext__XC0BS HeroCard_font-body__hJ42F"
                  data-testid="hero-card-richtext"
                >
                  <p>Talk to our expert team</p>
                </div>
              </div>
              <Link
                title=""
                target="_self"
                className="Button_btn__Xvq6a HeroCard_hero-card__content__link__DCWSU Button_btn--white__F9cW2 Button_btn--link__JI8fR"
                href="/contact-us/contact-form?sc_lang=en"
              >
                Contact us
                <span
                  className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                  style={{ height: '24px', width: '24px' }}
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24">
                    <use xlinkHref="#icons_arrow"></use>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return <SodexoBrandDetailDefaultComponent {...props} />;
};
