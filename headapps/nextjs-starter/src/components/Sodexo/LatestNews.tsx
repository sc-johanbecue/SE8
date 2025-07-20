import React from 'react';
import { TextField, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

interface Fields {
  Title: TextField;
  Subtitle: TextField;
  Image: ImageField;
}

type BrandDetailProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const BrandDetailDefaultComponent = (props: BrandDetailProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: BrandDetailProps): JSX.Element => {
  if (props.fields) {
    return (
      <>
        <style jsx>{`
          @media (min-width: 769px) and (max-width: 1279px) {
            .responsive-grid-2-5 {
              grid-column: 1 / 5 !important;
              padding: 2rem 9rem;
            }

            .responsive-grid-6-13 {
              grid-column: 1 / 5 !important;
              padding: 2rem 4rem;
            }

            .LatestNews_latest-news__slider__ptqhR {
              grid-column: 1 / 5 !important;
              padding: 2rem 4rem;
            }

            .LatestNews_latest-news__introduction__Ne3xZ {
              grid-column: 1 / 5 !important;
              padding: 2rem 9rem;
            }
          }
        `}</style>
        <section className="HeroLatestNews_hero-latest-news__a0Yow">
          <section className="OpacityOverlayBannerLayout-module_container__-umdD color-neutral HeroEditorial-module_editorial__1oU40 color-white">
            <div className="OpacityOverlayBannerLayout-module_background__6YRNF OpacityOverlayBannerLayout-module_opacity25__I8iCN OpacityOverlayBannerLayout-module_withOverlay__9E6Pf">
              <img
                alt=""
                loading="eager"
                decoding="async"
                data-nimg="fill"
                className="HeroEditorial-module_image__CkIvM"
                // style={{
                //   position: 'absolute',
                //   height: '100%',
                //   width: '100%',
                //   left: '0',
                //   top: '0',
                //   right: '0',
                //   bottom: '0',
                //   objectFit: 'cover',
                //   color: 'transparent',
                // }}
                src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/Banner-1240x698/news/2025/H1-2025-Banner.jpg?h=698&amp;iar=0&amp;w=1240"
              />
            </div>
            <div className="HeroEditorial-module_content__rjYwE">
              <p className="HeroEditorial-module_metadata__L37Uu font-body font-bold">
                Apr 04, 2025
              </p>
              <Link
                id="715b0434-73e7-4a6d-929a-eb5dfe21ff5f"
                target=""
                className=""
                title="Opens page (same window)"
                href="/investors/financial-results-and-publications/financial-results"
              >
                <h1 className="HeroEditorial-module_title__ppi-b font-hero-title">
                  H1 Fiscal 2025 results
                </h1>
              </Link>
              <p className="HeroEditorial-module_description__VNc38 font-body"> </p>
              <Link
                title="Opens page (same window)"
                target="_self"
                className="Button_btn__Xvq6a Button_btn--red-waves__OSCcE Button_btn--link__JI8fR Button_btn--without-border__wYHqY"
                href="/investors/financial-results-and-publications/financial-results"
              >
                Learn more
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
          </section>
          <div className="HeroLatestNews_hero-latest-news__slider__wZ9xe">
            <div className="Surface_surface__Y0_rx LatestNews_latest-news__9Eyrq">
              <div className="LatestNews_latest-news__introduction__Ne3xZ responsive-grid-2-5">
                <section className="LatestNewsIntro_latest-news-intro__jva9R responsive-grid-2-5">
                  <h2 className="LatestNewsIntro_latest-news-intro__title__hBsQZ LatestNewsIntro_font-h2__HtlRu">
                    Read our latest news
                  </h2>
                  <p className="LatestNewsIntro_latest-news-intro__presentation__GFsQ_">
                    Sodexo is the global leader in sustainable food and valued experiences at every
                    moment in life.
                  </p>
                  <Link
                    target="_self"
                    className="Button_btn__Xvq6a Button_btn--items-center__L2yWE Button_btn--link__JI8fR Button_btn--outline-blue__W1LG6"
                    href="/news/newsroom"
                  >
                    See our latest news
                    <span
                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                      style={{ height: '24px', width: '24px' }}
                    >
                      <svg aria-hidden="true" viewBox="0 0 24 24">
                        <use xlinkHref="#icons_arrow"></use>
                      </svg>
                    </span>
                  </Link>
                </section>
              </div>
              <section
                className="splide splide Slider_slider__CJilF LatestNews_latest-news__slider__ptqhR responsive-grid-6-13"
                aria-labelledby=""
                aria-roledescription="carousel"
                data-grid-layout="global"
                role="region"
              >
                <div className="splide__track" aria-atomic="false" aria-live="polite">
                  <ul className="splide__list">
                    <li
                      className="splide__slide"
                      role="group"
                      style={{ visibility: 'visible', width: 'calc(100%)' }}
                    >
                      <article className="LatestNewsSlide_latest-news-slide__WLk__">
                        <div className="LatestNewsSlide_latest-news-slide__image__ZWzY7">
                          <div className="PushImage_push-image__V6naY PushImage_push-image--layout__PwSJd">
                            <img
                              alt=""
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="PushImage_push-image--rounded-bottom-left__3k2A8"
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
                              src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/Banner-1240x698/news/2025/Prix-DSIN.jpg?h=698&amp;iar=0&amp;w=1240"
                            />
                          </div>
                        </div>
                        <div className="LatestNewsSlide_latest-news-slide__content__fT26E">
                          <h3 className="LatestNewsSlide_latest-news-slide__content__title__0TF1Y LatestNewsSlide_font-h3__9qeWo">
                            Alice Guéhennec, Chief Tech, Data, Digital, and Innovation Officer at
                            Sodexo, awarded “Best CDIO” in the “Data &amp; AI” category, by the 2024
                            DSIN
                          </h3>
                          <div className="LatestNewsSlide_latest-news-slide__content__text__oVqab">
                            Alice Guéhennec, Chief Tech, Data, Digital, and Innovation Officer at
                            Sodexo, has been awarded “Best CDIO” in the “Data and Artificial
                            Intelligence” category, by the 2024 DSIN Trophies jury. Learn more.
                          </div>
                          <div className="LatestNewsSlide_latest-news-slide__content__buttons__5sWAm">
                            <Link
                              target="_self"
                              className="Button_btn__Xvq6a LatestNewsSlide_latest-news-slide__content__buttons--link__W_tAU Button_btn--blue__16_CO Button_btn--items-center__L2yWE Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                              href="/news/newsroom/2025/alice-guehennec-awarded-best-cdio-data-ai-dsin"
                            >
                              Learn more
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
                      </article>
                    </li>
                    {/* <li className="splide__slide" role="group" style={{ width: 'calc(100%)' }}>
                    <article className="LatestNewsSlide_latest-news-slide__WLk__">
                      <div className="LatestNewsSlide_latest-news-slide__image__ZWzY7">
                        <div className="PushImage_push-image__V6naY PushImage_push-image--layout__PwSJd">
                          <img
                            alt=""
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="PushImage_push-image--rounded-bottom-left__3k2A8"
                            // style={{
                            //   position: 'absolute',
                            //   height: '100%',
                            //   width: '100%',
                            //   left: '0',
                            //   top: '0',
                            //   right: '0',
                            //   bottom: '0',
                            //   objectFit: 'cover',
                            //   color: 'transparent',
                            // }}
                            src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/Banner-1240x698/news/2025/Equileap-2025-banner.jpg?h=698&amp;iar=0&amp;w=1240"
                          />
                        </div>
                      </div>
                      <div className="LatestNewsSlide_latest-news-slide__content__fT26E">
                        <h3 className="LatestNewsSlide_latest-news-slide__content__title__0TF1Y LatestNewsSlide_font-h3__9qeWo">
                          Sodexo makes significant progress in Equileap’s global ranking, reaching
                          4th place in France
                        </h3>
                        <div className="LatestNewsSlide_latest-news-slide__content__text__oVqab">
                          Sodexo is pleased to announce its significant progress in the 2025
                          Equileap ranking, which recognizes the top-performing companies in terms
                          of workplace equality.
                        </div>
                        <div className="LatestNewsSlide_latest-news-slide__content__buttons__5sWAm">
                          <Link
                            target="_self"
                            className="Button_btn__Xvq6a LatestNewsSlide_latest-news-slide__content__buttons--link__W_tAU Button_btn--blue__16_CO Button_btn--items-center__L2yWE Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                            href="/news/newsroom/2025/equileap-2025"
                          >
                            Learn more
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
                    </article>
                  </li>
                  <li className="splide__slide" role="group" style={{ width: 'calc(100%)' }}>
                    <article className="LatestNewsSlide_latest-news-slide__WLk__">
                      <div className="LatestNewsSlide_latest-news-slide__image__ZWzY7">
                        <div className="PushImage_push-image__V6naY PushImage_push-image--layout__PwSJd">
                          <img
                            alt="Sodexo Team"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="PushImage_push-image--rounded-bottom-left__3k2A8"
                            // style={{
                            //   position: 'absolute',
                            //   height: '100%',
                            //   width: '100%',
                            //   left: '0',
                            //   top: '0',
                            //   right: '0',
                            //   bottom: '0',
                            //   objectFit: 'cover',
                            //   color: 'transparent',
                            // }}
                            src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/Banner-1240x698/news/2025/Ethisphere-march-2025-banner.jpg?h=440&amp;iar=0&amp;w=990"
                          />
                        </div>
                      </div>
                      <div className="LatestNewsSlide_latest-news-slide__content__fT26E">
                        <h3 className="LatestNewsSlide_latest-news-slide__content__title__0TF1Y LatestNewsSlide_font-h3__9qeWo">
                          Sodexo named one of the World’s Most Ethical Companies® by Ethisphere for
                          the second year in a row
                        </h3>
                        <div className="LatestNewsSlide_latest-news-slide__content__text__oVqab">
                          Sodexo is proud to announce its recognition as one of the World’s Most
                          Ethical Compagnies® for the second consecutive year. Issued by Ethisphere,
                          a global leader in defining and advancing the standards of ethical
                          business, this annual recognition honors Sodexo’s continuous commitment to
                          business integrity through best-in-class policies and practices. Learn
                          more.
                        </div>
                        <div className="LatestNewsSlide_latest-news-slide__content__buttons__5sWAm">
                          <Link
                            target="_self"
                            className="Button_btn__Xvq6a LatestNewsSlide_latest-news-slide__content__buttons--link__W_tAU Button_btn--blue__16_CO Button_btn--items-center__L2yWE Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                            href="/news/newsroom/2025/sodexo-named-one-of-the-world-most-ethical-companies-by-ethisphere-for-the-second-year-in-a-row"
                          >
                            Learn more
                            <span
                              className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                              style={{ height: '24px', width: '24px' }}
                            >
                              <svg aria-hidden="true" viewBox="0 0 24 24">
                                <use xlinkHref="#icons_arrow"></use>
                              </svg>
                            </span>
                          </Link>
                          <Link
                            href="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Documents/press-releases/2025/PR-Sodexo-Worlds-Most-Ethical-Companies-Ethisphere-2025.pdf"
                            aria-label="Download"
                            className="Button_btn__Xvq6a LatestNewsSlide_latest-news-slide__file-button__9IU2p Button_btn--unshaped__MfqLg"
                          >
                            <span
                              className="Icon_icon__qNAb6 Icon_icon--bg-red__sbGiT"
                              style={{ height: '24px', width: '24px' }}
                            >
                              <svg aria-hidden="true" viewBox="0 0 24 24">
                                <use xlinkHref="#icons_download"></use>
                              </svg>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </article>
                  </li>
                  <li className="splide__slide" role="group" style={{ width: 'calc(100%)' }}>
                    <article className="LatestNewsSlide_latest-news-slide__WLk__">
                      <div className="LatestNewsSlide_latest-news-slide__image__ZWzY7">
                        <div className="PushImage_push-image__V6naY PushImage_push-image--layout__PwSJd">
                          <img
                            alt="Facilities Maintenance"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="PushImage_push-image--rounded-bottom-left__3k2A8"
                            // style={{
                            //   position: 'absolute',
                            //   height: '100%',
                            //   width: '100%',
                            //   left: '0',
                            //   top: '0',
                            //   right: '0',
                            //   bottom: '0',
                            //   objectFit: 'cover',
                            //   color: 'transparent',
                            // }}
                            src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/Banner-1240x698/news/2025/Facilities-Maintenance.jpg?h=698&amp;iar=0&amp;w=1240"
                          />
                        </div>
                      </div>
                      <div className="LatestNewsSlide_latest-news-slide__content__fT26E">
                        <h3 className="LatestNewsSlide_latest-news-slide__content__title__0TF1Y LatestNewsSlide_font-h3__9qeWo">
                          Sodexo awarded a significant contract with Santos, cementing its
                          market-leading position in Australia’s energy and resources sector
                        </h3>
                        <div className="LatestNewsSlide_latest-news-slide__content__text__oVqab">
                          Sodexo in Australia has been awarded a large five-year contract with
                          Santos, the largest supplier of natural gas in Australia. Discover more.
                        </div>
                        <div className="LatestNewsSlide_latest-news-slide__content__buttons__5sWAm">
                          <Link
                            target="_self"
                            className="Button_btn__Xvq6a LatestNewsSlide_latest-news-slide__content__buttons--link__W_tAU Button_btn--blue__16_CO Button_btn--items-center__L2yWE Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                            href="/news/newsroom/2025/significant-contract-with-santos-australia"
                          >
                            Learn more
                            <span
                              className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                              style={{ height: '24px', width: '24px' }}
                            >
                              <svg aria-hidden="true" viewBox="0 0 24 24">
                                <use xlinkHref="#icons_arrow"></use>
                              </svg>
                            </span>
                          </Link>
                          <Link
                            href="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Documents/press-releases/2025/PR-Sodexo-in-Australia-x-Santos.pdf"
                            aria-label="Download"
                            className="Button_btn__Xvq6a LatestNewsSlide_latest-news-slide__file-button__9IU2p Button_btn--unshaped__MfqLg"
                          >
                            <span
                              className="Icon_icon__qNAb6 Icon_icon--bg-red__sbGiT"
                              style={{ height: '24px', width: '24px' }}
                            >
                              <svg aria-hidden="true" viewBox="0 0 24 24">
                                <use xlinkHref="#icons_download"></use>
                              </svg>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </article>
                  </li>
                  <li className="splide__slide" role="group" style={{ width: 'calc(100%)' }}>
                    <article className="LatestNewsSlide_latest-news-slide__WLk__">
                      <div className="LatestNewsSlide_latest-news-slide__image__ZWzY7">
                        <div className="PushImage_push-image__V6naY PushImage_push-image--layout__PwSJd">
                          <img
                            alt=""
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="PushImage_push-image--rounded-bottom-left__3k2A8"
                            // style={{
                            //   position: 'absolute',
                            //   height: '100%',
                            //   width: '100%',
                            //   left: '0',
                            //   top: '0',
                            //   right: '0',
                            //   bottom: '0',
                            //   objectFit: 'cover',
                            //   color: 'transparent',
                            // }}
                            src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/Banner-1240x698/news/2025/Contract-Mucem-2025.jpg?h=698&amp;iar=0&amp;w=1240"
                          />
                        </div>
                      </div>
                      <div className="LatestNewsSlide_latest-news-slide__content__fT26E">
                        <h3 className="LatestNewsSlide_latest-news-slide__content__title__0TF1Y LatestNewsSlide_font-h3__9qeWo">
                          In Marseille, the Mucem selects Michelin Star chef Alexandre Mazzia and
                          Sodexo Live! to redefine its J4 culinary experience
                        </h3>
                        <div className="LatestNewsSlide_latest-news-slide__content__text__oVqab">
                          Following a call for proposals initiated by the Mucem in late 2024, the
                          project signed by Alexandre Mazzia and Sodexo Live! has been selected to
                          oversee and manage the dining spaces of the J4 building until 2036. Learn
                          more.
                        </div>
                        <div className="LatestNewsSlide_latest-news-slide__content__buttons__5sWAm">
                          <Link
                            target="_self"
                            className="Button_btn__Xvq6a LatestNewsSlide_latest-news-slide__content__buttons--link__W_tAU Button_btn--blue__16_CO Button_btn--items-center__L2yWE Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                            href="/news/newsroom/2025/mucem-selects-michelin-star-chef-alexandre-mazzia-and-sodexo-live"
                          >
                            Learn more
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
                    </article>
                  </li> */}
                  </ul>
                </div>
                <div
                  className="SliderControls_slider-controls__t9rMj LatestNews_latest-news__slider__controls__qETs7"
                  data-testid="slider-controls"
                >
                  <ul className="splide__arrows SliderArrows_slider-arrows__n89FR SliderControls_slider-controls__arrows__wFqwO SliderControls_slider-controls__arrows--hidden__apV18">
                    <li className="splide__arrow--prev SliderArrows_slider-arrows__arrow__d8O_p">
                      <button
                        aria-label="Previous slide"
                        className="Button_btn__Xvq6a SliderArrows_slider-arrows__arrow--rotated__VJ_fE Button_btn--unshaped__MfqLg"
                      >
                        <span className="Icon_icon__qNAb6 SliderArrows_slider-arrows__arrow-icon__qHj5H SliderArrows_slider-arrows__arrow-icon_big__N13YL Icon_icon--white__ymQDN Icon_icon--arrow-rtl__xN7T5 Icon_icon--bg-red__sbGiT">
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
                        <span className="Icon_icon__qNAb6 SliderArrows_slider-arrows__arrow-icon__qHj5H SliderArrows_slider-arrows__arrow-icon_big__N13YL Icon_icon--white__ymQDN Icon_icon--arrow-rtl__xN7T5 Icon_icon--bg-red__sbGiT">
                          <svg aria-hidden="false">
                            <use xlinkHref="#icons_chevron"></use>
                          </svg>
                        </span>
                      </button>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </section>
      </>
    );
  }

  return <BrandDetailDefaultComponent {...props} />;
};
