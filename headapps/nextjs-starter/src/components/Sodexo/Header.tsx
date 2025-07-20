import React from 'react';
import { TextField, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

interface Fields {
  Title: TextField;
  Subtitle: TextField;
  Image: ImageField;
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
          .show-mobile {
            display: block;
          }
          .show-desktop {
            display: none;
          }

          @media (min-width: 768px) {
            .show-mobile {
              display: none;
            }
            .show-desktop {
              display: block;
            }
          }
        `}</style>
        <header>
          <div className="Header_header__content__YuahI Header_header__content--hide__Zn37G">
            <div className="MainNavMobile_main-nav-mobile__33IiE show-mobile">
              <div className="MainNavMobile_main-nav-mobile__header__UAcKF">
                <Link
                  title="Opens homepage (same window)"
                  target="_self"
                  className="Button_btn__Xvq6a MainNavMobile_main-nav-mobile__header__logo__neAwj Button_btn--link__JI8fR Button_btn--unshaped__MfqLg"
                  aria-label="Sodexo Homepage"
                  role="menuitem"
                  href="/"
                >
                  <img
                    alt=""
                    width="97"
                    height="32"
                    className="main-nav-mobile__header__img"
                    src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/Logos/Sodexo_Logotype_Blue.png?h=32&amp;w=97"
                  />
                </Link>
                <div className="MainNavMobile_main-nav-mobile__header__items__7hMro">
                  <Link
                    title=""
                    target="_self"
                    className="Button_btn__Xvq6a MainNavMobile_main-nav-mobile__header__button__WiPJV Button_btn--link__JI8fR Button_btn--unshaped__MfqLg"
                    aria-label="Search"
                    role="menuitem"
                    href="/How-can-we-help-you"
                  >
                    <span className="Icon_icon__qNAb6" style={{ height: '32px', width: '32px' }}>
                      <svg aria-hidden="true" viewBox="0 0 32 32">
                        <use xlinkHref="#icons_search"></use>
                      </svg>
                    </span>
                  </Link>
                  <button
                    aria-label="Open"
                    className="Button_btn__Xvq6a MainNavMobile_main-nav-mobile__header__button__WiPJV MainNavMobile_main-nav-mobile__header__button--no-collapse___BlDD Button_btn--unshaped__MfqLg"
                    role="menuitem"
                  >
                    <span className="Icon_icon__qNAb6" style={{ height: '32px', width: '32px' }}>
                      <svg aria-hidden="true" viewBox="0 0 32 32">
                        <use xlinkHref="#icons_burger"></use>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
              <nav
                aria-label="Main navigation"
                className="MainNavMobile_main-nav-mobile__container__k_30_"
                role="navigation"
              >
                <div className="MainNavMobile_main-nav-mobile__nav__D74og MainNavMobile_main-nav-mobile__nav--is-local-nav__NJmVh">
                  <ul
                    className="MainNavMobile_main-nav-mobile__items__H1CF6 MainNavMobile_main-nav-mobile__items--is-local-nav__Mq9kl"
                    role="menubar"
                  >
                    <li className="MainNavMobile_main-nav-mobile__item__XKfAe">
                      <button
                        className="Button_btn__Xvq6a MainNavMobile_main-nav-mobile__item__button__8aioY Button_btn--blue__16_CO Button_btn--full__ovmcM Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                        role="menuitem"
                      >
                        <span>About Us</span>
                        <span
                          className="Icon_icon__qNAb6"
                          style={{ height: '24px', width: '24px' }}
                        >
                          <svg aria-hidden="true" viewBox="0 0 24 24">
                            <use xlinkHref="#icons_chevron"></use>
                          </svg>
                        </span>
                      </button>
                    </li>
                    <li className="MainNavMobile_main-nav-mobile__item__XKfAe">
                      <button
                        className="Button_btn__Xvq6a MainNavMobile_main-nav-mobile__item__button__8aioY Button_btn--blue__16_CO Button_btn--full__ovmcM Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                        role="menuitem"
                      >
                        <span>Brands &amp; Services</span>
                        <span
                          className="Icon_icon__qNAb6"
                          style={{ height: '24px', width: '24px' }}
                        >
                          <svg aria-hidden="true" viewBox="0 0 24 24">
                            <use xlinkHref="#icons_chevron"></use>
                          </svg>
                        </span>
                      </button>
                    </li>
                    <li className="MainNavMobile_main-nav-mobile__item__XKfAe">
                      <button
                        className="Button_btn__Xvq6a MainNavMobile_main-nav-mobile__item__button__8aioY Button_btn--blue__16_CO Button_btn--full__ovmcM Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                        role="menuitem"
                      >
                        <span>Corporate Responsibility</span>
                        <span
                          className="Icon_icon__qNAb6"
                          style={{ height: '24px', width: '24px' }}
                        >
                          <svg aria-hidden="true" viewBox="0 0 24 24">
                            <use xlinkHref="#icons_chevron"></use>
                          </svg>
                        </span>
                      </button>
                    </li>
                    <li className="MainNavMobile_main-nav-mobile__item__XKfAe">
                      <button
                        className="Button_btn__Xvq6a MainNavMobile_main-nav-mobile__item__button__8aioY Button_btn--blue__16_CO Button_btn--full__ovmcM Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                        role="menuitem"
                      >
                        <span>Insights</span>
                        <span
                          className="Icon_icon__qNAb6"
                          style={{ height: '24px', width: '24px' }}
                        >
                          <svg aria-hidden="true" viewBox="0 0 24 24">
                            <use xlinkHref="#icons_chevron"></use>
                          </svg>
                        </span>
                      </button>
                    </li>
                    <li className="MainNavMobile_main-nav-mobile__item__XKfAe">
                      <button
                        className="Button_btn__Xvq6a MainNavMobile_main-nav-mobile__item__button__8aioY Button_btn--blue__16_CO Button_btn--full__ovmcM Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                        role="menuitem"
                      >
                        <span>Working at Sodexo</span>
                        <span
                          className="Icon_icon__qNAb6"
                          style={{ height: '24px', width: '24px' }}
                        >
                          <svg aria-hidden="true" viewBox="0 0 24 24">
                            <use xlinkHref="#icons_chevron"></use>
                          </svg>
                        </span>
                      </button>
                    </li>
                  </ul>
                  <ul
                    className="MainBottomNav_main-bottom-nav__uP_AN main-nav__bottom--is-local-nav"
                    role="menubar"
                  >
                    <li className="MainBottomNav_main-bottom-nav__item__dZPyI">
                      <button
                        className="Button_btn__Xvq6a MainBottomNav_main-bottom-nav__button__cUZ0L Button_btn--blue__16_CO Button_btn--full__ovmcM Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                        role="menuitem"
                      >
                        <span>Investors</span>
                        <span
                          className="Icon_icon__qNAb6"
                          style={{ height: '24px', width: '24px' }}
                        >
                          <svg aria-hidden="true" viewBox="0 0 24 24">
                            <use xlinkHref="#icons_chevron"></use>
                          </svg>
                        </span>
                      </button>
                    </li>
                    <li className="MainBottomNav_main-bottom-nav__item__dZPyI">
                      <button
                        className="Button_btn__Xvq6a MainBottomNav_main-bottom-nav__button__cUZ0L Button_btn--blue__16_CO Button_btn--full__ovmcM Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                        role="menuitem"
                      >
                        <span>Newsroom</span>
                        <span
                          className="Icon_icon__qNAb6"
                          style={{ height: '24px', width: '24px' }}
                        >
                          <svg aria-hidden="true" viewBox="0 0 24 24">
                            <use xlinkHref="#icons_chevron"></use>
                          </svg>
                        </span>
                      </button>
                    </li>
                  </ul>
                </div>
                <nav
                  aria-label="Contact us"
                  className="SupNav_sup-nav__dNFRi color-white MainNavMobile_main-nav-mobile__footer__0rTjp"
                  role="navigation"
                >
                  <ul className="SupNav_sup-nav__items__OjN_T">
                    <li className="SupNav_sup-nav__item__8bdW7 SupNav_sup-nav__item_skip-to-content__xkvcu">
                      <Link
                        href="#id_main_skip_to_content"
                        className="Button_btn__Xvq6a SupNav_sup-nav__item__skip-button__sINS2 Button_btn--white__F9cW2 Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-white__RvzsU"
                        title=""
                        target="_self"
                      >
                        Go to content
                      </Link>
                    </li>
                    <li className="SupNav_sup-nav__item__8bdW7">
                      <div className="LineSlide_line-slide__mrcBo" data-theme="white">
                        <Link
                          title="Opens page (same window)"
                          target="_self"
                          className="Button_btn__Xvq6a LineSlide_line-slide__button__hD2YY SupNav_sup-nav__item__button__yPRgg Button_btn--white__F9cW2 Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-white__RvzsU"
                          href="/contact-us"
                        >
                          Contact Us
                        </Link>
                      </div>
                    </li>
                    <li className="SupNav_sup-nav__item__8bdW7">
                      <div className="LineSlide_line-slide__mrcBo" data-theme="white">
                        <button className="Button_btn__Xvq6a LineSlide_line-slide__button__hD2YY SupNav_sup-nav__item__button__yPRgg Button_btn--white__F9cW2 Button_btn--reverse__NQ5qh Button_btn--unshaped__MfqLg Button_btn--unshaped-white__RvzsU">
                          <span>Location</span>
                          <span
                            className="Icon_icon__qNAb6"
                            style={{ height: '24px', width: '24px' }}
                          >
                            <svg aria-hidden="true" viewBox="0 0 24 24">
                              <use xlinkHref="#icons_planet"></use>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </li>
                    <li className="SupNav_sup-nav__item__8bdW7">
                      <div
                        aria-label="Language selection"
                        className="HeaderLanguageSelector_selector__1J9ck"
                      >
                        <div className="LineSlide_line-slide__mrcBo" data-theme="white">
                          <Link
                            className="LineSlide_line-slide__button__hD2YY font-semibold"
                            href="/fr"
                          >
                            fr
                          </Link>
                        </div>
                        <span className="HeaderLanguageSelector_separator__7DZ_l">/</span>
                      </div>
                      <div
                        aria-label="Language selection"
                        className="HeaderLanguageSelector_selector__1J9ck"
                      >
                        <div className="LineSlide_line-slide__mrcBo" data-theme="white">
                          <Link
                            className="LineSlide_line-slide__button__hD2YY font-semibold"
                            href="https://www.sodexo.com/"
                          >
                            en
                          </Link>
                        </div>
                      </div>
                    </li>
                  </ul>
                </nav>
              </nav>
            </div>
            <nav
              aria-label="Contact us"
              className="SupNav_sup-nav__dNFRi color-white Header_header__sup-nav__HISv_ show-desktop"
              role="navigation"
            >
              <ul className="SupNav_sup-nav__items__OjN_T">
                <li className="SupNav_sup-nav__item__8bdW7 SupNav_sup-nav__item_skip-to-content__xkvcu">
                  <Link
                    href="#id_main_skip_to_content"
                    className="Button_btn__Xvq6a SupNav_sup-nav__item__skip-button__sINS2 Button_btn--white__F9cW2 Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-white__RvzsU"
                    title=""
                    target="_self"
                  >
                    Go to content
                  </Link>
                </li>
                <li className="SupNav_sup-nav__item__8bdW7">
                  <div className="LineSlide_line-slide__mrcBo" data-theme="white">
                    <Link
                      title="Opens page (same window)"
                      target="_self"
                      className="Button_btn__Xvq6a LineSlide_line-slide__button__hD2YY SupNav_sup-nav__item__button__yPRgg Button_btn--white__F9cW2 Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-white__RvzsU"
                      href="/contact-us"
                    >
                      Contact Us
                    </Link>
                  </div>
                </li>
                <li className="SupNav_sup-nav__item__8bdW7">
                  <div className="LineSlide_line-slide__mrcBo" data-theme="white">
                    <button className="Button_btn__Xvq6a LineSlide_line-slide__button__hD2YY SupNav_sup-nav__item__button__yPRgg Button_btn--white__F9cW2 Button_btn--reverse__NQ5qh Button_btn--unshaped__MfqLg Button_btn--unshaped-white__RvzsU">
                      <span>Location</span>
                      <span className="Icon_icon__qNAb6" style={{ height: '24px', width: '24px' }}>
                        <svg aria-hidden="true" viewBox="0 0 24 24">
                          <use xlinkHref="#icons_planet"></use>
                        </svg>
                      </span>
                    </button>
                  </div>
                </li>
                <li className="SupNav_sup-nav__item__8bdW7">
                  <div
                    aria-label="Language selection"
                    className="HeaderLanguageSelector_selector__1J9ck"
                  >
                    <div className="LineSlide_line-slide__mrcBo" data-theme="white">
                      <Link
                        className="LineSlide_line-slide__button__hD2YY font-semibold"
                        href="/fr"
                      >
                        fr
                      </Link>
                    </div>
                    <span className="HeaderLanguageSelector_separator__7DZ_l">/</span>
                  </div>
                  <div
                    aria-label="Language selection"
                    className="HeaderLanguageSelector_selector__1J9ck"
                  >
                    <div className="LineSlide_line-slide__mrcBo" data-theme="white">
                      <Link
                        className="LineSlide_line-slide__button__hD2YY font-semibold"
                        href="https://www.sodexo.com/"
                      >
                        en
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
            <div className="Header_header__main-nav__container__T0Tcd">
              <nav
                aria-label="Main navigation"
                className="MainNav_main-nav__W_abG"
                role="navigation"
              >
                <ul className="MainNav_main-nav__items__yB2c3" role="menubar">
                  <li className="MainNav_main-nav__item___rOZL">
                    <Link
                      title="Opens homepage (same window)"
                      target="_self"
                      className="Button_btn__Xvq6a MainNav_main-nav__item__logo__ReTIR Button_btn--link__JI8fR Button_btn--unshaped__MfqLg"
                      aria-label="Sodexo Homepage"
                      role="menuitem"
                      href="/"
                    >
                      <img
                        alt=""
                        width="131"
                        height="42"
                        src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/Logos/Sodexo_Logotype_Blue.png?h=42&amp;iar=0&amp;w=131"
                      />
                    </Link>
                  </li>
                  <li className="MainNav_main-nav__item___rOZL">
                    <div
                      className="IconRotate_icon-rotate__es0G_"
                      data-rotate-end="270"
                      data-rotate-start="90"
                    >
                      <div className="LineSlide_line-slide__mrcBo" data-theme="secondary">
                        <button
                          aria-expanded="false"
                          aria-haspopup="menu"
                          className="Button_btn__Xvq6a LineSlide_line-slide__button__hD2YY MainNav_main-nav__item__button__6pfmO MainNav_font-bold__xTgVJ Button_btn--blue__16_CO Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                          role="menuitem"
                        >
                          <span>About Us</span>
                          <span
                            className="Icon_icon__qNAb6"
                            style={{ height: '16px', width: '16px' }}
                          >
                            <svg aria-hidden="true" viewBox="0 0 16 16">
                              <use xlinkHref="#icons_chevron"></use>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                    <section className="MegaMenu_megamenu__0nlkj" id="About Us_0" role="menu">
                      <div className="MegaMenu_megamenu__container__zZn9P">
                        <div className="MegaMenu_megamenu__category___Q8he">
                          <p className="MegaMenu_megamenu__category__title__BQ4mJ">About Us</p>
                          <p>
                            Sodexo was created in 1966. Today, we are the global leader in
                            sustainable food and valued experiences at every moment in life: learn,
                            work, heal and play. We believe in creating a better day for everyone to
                            build a better life for all. Whether you’re looking for key figures or
                            our in-depth mission – this is who we are.
                          </p>
                        </div>
                        <div className="MegaMenu_megamenu__category__content__qn5GV">
                          <div className="circle-scale">
                            <button
                              aria-label="Back"
                              className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--dark-blue__7qBLy MegaMenu_megamenu__button__close__QnTqq Button_btn--unshaped__MfqLg"
                              role="menuitem"
                            >
                              <span
                                className="Icon_icon__qNAb6"
                                style={{ height: '24px', width: '24px' }}
                              >
                                <svg aria-hidden="true" viewBox="0 0 24 24">
                                  <use xlinkHref="#icons_cross"></use>
                                </svg>
                              </span>
                            </button>
                          </div>
                          <div className="MegaMenu_megamenu__content__Raoni">
                            <ul className="MegaMenu_megamenu__items__ol09A">
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <Link
                                    title=""
                                    target="_self"
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                    href="/about-us/sodexo-in-brief"
                                  >
                                    Sodexo in Brief
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_arrow"></use>
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <Link
                                    title=""
                                    target="_self"
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                    href="/about-us/mission-and-ambition"
                                  >
                                    Our mission and ambition
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_arrow"></use>
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <Link
                                    title=""
                                    target="_self"
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                    href="/about-us/sodexo-leadership-team"
                                  >
                                    Sodexo Leadership Team
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_arrow"></use>
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <Link
                                    title=""
                                    target="_self"
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                    href="/about-us/board-of-directors"
                                  >
                                    Board of Directors
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_arrow"></use>
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <Link
                                    title=""
                                    target="_self"
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                    href="/about-us/innovation-approach"
                                  >
                                    Our Innovation Approach
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_arrow"></use>
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <Link
                                    title=""
                                    target="_self"
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                    href="/about-us/our-history"
                                  >
                                    Our History
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_arrow"></use>
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <Link
                                    title=""
                                    target="_self"
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                    href="/about-us/awards"
                                  >
                                    Our Awards
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_arrow"></use>
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </li>
                            </ul>
                            <div className="MegaMenuPush_megamenu-push__LGiSD">
                              <div className="PushImage_push-image__V6naY PushImage_push-image--layout__PwSJd">
                                <img
                                  alt=""
                                  loading="lazy"
                                  width="292"
                                  height="164"
                                  decoding="async"
                                  data-nimg="1"
                                  className="MegaMenuPush_megamenu-push__picture__hG58Z PushImage_push-image--rounded-top-left__2b0_6"
                                  src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/Menu_images_292x164/URD-FY2024.jpg?h=164&amp;iar=0&amp;w=292"
                                  style={{ color: 'transparent', objectFit: 'cover' }}
                                />
                              </div>
                              <p className="MegaMenuPush_megamenu-push__title__QoWNg MegaMenuPush_font-h4__G44Yq">
                                Integrated Report Fiscal 2024
                              </p>
                              <p className="MegaMenuPush_megamenu-push__description__L24Xd MegaMenuPush_font-body-small__uG15h">
                                Discover how we are creating a better everyday in the our report.
                              </p>
                              <Link
                                title=""
                                target="_self"
                                className="Button_btn__Xvq6a MegaMenuPush_megamenu-push__button__PmRwc Button_btn--link__JI8fR Button_btn--outline-blue__W1LG6"
                                href="/investors/financial-results-and-publications/integrated-report"
                              >
                                Download the report
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
                        </div>
                      </div>
                    </section>
                  </li>
                  <li className="MainNav_main-nav__item___rOZL">
                    <div
                      className="IconRotate_icon-rotate__es0G_"
                      data-rotate-end="270"
                      data-rotate-start="90"
                    >
                      <div className="LineSlide_line-slide__mrcBo" data-theme="secondary">
                        <button
                          aria-expanded="false"
                          aria-haspopup="menu"
                          className="Button_btn__Xvq6a LineSlide_line-slide__button__hD2YY MainNav_main-nav__item__button__6pfmO MainNav_font-bold__xTgVJ Button_btn--blue__16_CO Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                          role="menuitem"
                        >
                          <span>Brands &amp; Services</span>
                          <span
                            className="Icon_icon__qNAb6"
                            style={{ height: '16px', width: '16px' }}
                          >
                            <svg aria-hidden="true" viewBox="0 0 16 16">
                              <use xlinkHref="#icons_chevron"></use>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                    <section
                      className="MegaMenu_megamenu__0nlkj"
                      id="Brands &amp; Services_1"
                      role="menu"
                    >
                      <div className="MegaMenu_megamenu__container__zZn9P">
                        <div className="MegaMenu_megamenu__category___Q8he">
                          <p className="MegaMenu_megamenu__category__title__BQ4mJ">
                            Brands &amp; Services
                          </p>
                          <p>
                            Our portfolio of activities encompasses Food Services, Facilities
                            Management Services, as well as Hospitality services with Sodexo Live!
                            From the daily services we deliver to the brands we manage – this is
                            what we do.{' '}
                          </p>
                        </div>
                        <div className="MegaMenu_megamenu__category__content__qn5GV">
                          <div className="circle-scale">
                            <button
                              aria-label="Back"
                              className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--dark-blue__7qBLy MegaMenu_megamenu__button__close__QnTqq Button_btn--unshaped__MfqLg"
                              role="menuitem"
                            >
                              <span
                                className="Icon_icon__qNAb6"
                                style={{ height: '24px', width: '24px' }}
                              >
                                <svg aria-hidden="true" viewBox="0 0 24 24">
                                  <use xlinkHref="#icons_cross"></use>
                                </svg>
                              </span>
                            </button>
                          </div>
                          <div className="MegaMenu_megamenu__content__Raoni">
                            <ul className="MegaMenu_megamenu__items__ol09A">
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <button
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                  >
                                    <span>Food Brands &amp; Services</span>
                                    <span
                                      className="Icon_icon__qNAb6"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_chevron"></use>
                                      </svg>
                                    </span>
                                  </button>
                                </div>
                                <ul className="MegaMenu_megamenu__subItem__fxm_D">
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title="Opens page (same window)"
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/brands-services/food/brands"
                                      >
                                        Brands Overview
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title="Opens page (same window)"
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/brands-services/food/brands/modern-recipe"
                                      >
                                        Modern Recipe
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title="Opens page (same window)"
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/brands-services/food/brands/kitchen-works"
                                      >
                                        Kitchen Works
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title="Opens page (same window)"
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/brands-services/food/brands/the-good-eating-company"
                                      >
                                        The Good Eating Company
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title="Opens page (same window)"
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/brands-services/food/services"
                                      >
                                        Food Services
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <Link
                                    title=""
                                    target="_self"
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                    href="/brands-services/facilities-management-services"
                                  >
                                    Facility Management Services
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_arrow"></use>
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <Link
                                    title=""
                                    target="_self"
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                    href="/brands-services/sodexo-live"
                                  >
                                    Sodexo Live!
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_arrow"></use>
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <Link
                                    title=""
                                    target="_self"
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                    href="/brands-services/entegra"
                                  >
                                    Entegra
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_arrow"></use>
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <Link
                                    title=""
                                    target="_self"
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                    href="/brands-services/circles"
                                  >
                                    Circles
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_arrow"></use>
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </li>
                            </ul>
                            <div className="MegaMenuPush_megamenu-push__LGiSD">
                              <div className="PushImage_push-image__V6naY PushImage_push-image--layout__PwSJd">
                                <img
                                  alt=""
                                  loading="lazy"
                                  width="292"
                                  height="164"
                                  decoding="async"
                                  data-nimg="1"
                                  className="MegaMenuPush_megamenu-push__picture__hG58Z PushImage_push-image--rounded-top-left__2b0_6"
                                  src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/Menu_images_292x164/Brands-292x164.jpg?h=164&amp;iar=0&amp;w=292"
                                  style={{ color: 'transparent', objectFit: 'cover' }}
                                />
                              </div>
                              <p className="MegaMenuPush_megamenu-push__title__QoWNg MegaMenuPush_font-h4__G44Yq">
                                Our food brands
                              </p>
                              <p className="MegaMenuPush_megamenu-push__description__L24Xd MegaMenuPush_font-body-small__uG15h">
                                We prepare local, fresh, and healthy foods that taste delicious and
                                enhance our guests’ experience whether they are at a work, a
                                sporting event or their school cafeteria.
                              </p>
                              <Link
                                title="Opens page (same window)"
                                target="_self"
                                className="Button_btn__Xvq6a MegaMenuPush_megamenu-push__button__PmRwc Button_btn--link__JI8fR Button_btn--outline-blue__W1LG6"
                                href="/brands-services/food/brands"
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
                        </div>
                      </div>
                    </section>
                  </li>
                  <li className="MainNav_main-nav__item___rOZL">
                    <div
                      className="IconRotate_icon-rotate__es0G_"
                      data-rotate-end="270"
                      data-rotate-start="90"
                    >
                      <div className="LineSlide_line-slide__mrcBo" data-theme="secondary">
                        <button
                          aria-expanded="false"
                          aria-haspopup="menu"
                          className="Button_btn__Xvq6a LineSlide_line-slide__button__hD2YY MainNav_main-nav__item__button__6pfmO MainNav_font-bold__xTgVJ Button_btn--blue__16_CO Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                          role="menuitem"
                        >
                          <span>Corporate Responsibility</span>
                          <span
                            className="Icon_icon__qNAb6"
                            style={{ height: '16px', width: '16px' }}
                          >
                            <svg aria-hidden="true" viewBox="0 0 16 16">
                              <use xlinkHref="#icons_chevron"></use>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                    <section
                      className="MegaMenu_megamenu__0nlkj"
                      id="Corporate Responsibility_2"
                      role="menu"
                    >
                      <div className="MegaMenu_megamenu__container__zZn9P">
                        <div className="MegaMenu_megamenu__category___Q8he">
                          <p className="MegaMenu_megamenu__category__title__BQ4mJ">
                            Corporate Responsibility
                          </p>
                          <p>
                            We feel responsible for supporting individuals, communities and the
                            environment. We commit to business integrity through setting our
                            sustainable goals and checking our progress – thanks to reports,
                            roadmaps and partnerships. Fostering health and safety, fighting for
                            human rights and inclusion, protecting the planet – this is how we act.
                          </p>
                        </div>
                        <div className="MegaMenu_megamenu__category__content__qn5GV">
                          <div className="circle-scale">
                            <button
                              aria-label="Back"
                              className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--dark-blue__7qBLy MegaMenu_megamenu__button__close__QnTqq Button_btn--unshaped__MfqLg"
                              role="menuitem"
                            >
                              <span
                                className="Icon_icon__qNAb6"
                                style={{ height: '24px', width: '24px' }}
                              >
                                <svg aria-hidden="true" viewBox="0 0 24 24">
                                  <use xlinkHref="#icons_cross"></use>
                                </svg>
                              </span>
                            </button>
                          </div>
                          <div className="MegaMenu_megamenu__content__Raoni">
                            <ul className="MegaMenu_megamenu__items__ol09A">
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <button
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                  >
                                    <span>Our Commitments</span>
                                    <span
                                      className="Icon_icon__qNAb6"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_chevron"></use>
                                      </svg>
                                    </span>
                                  </button>
                                </div>
                                <ul className="MegaMenu_megamenu__subItem__fxm_D">
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/corporate-responsibility/our-commitments/CSR-commitments-progress"
                                      >
                                        CSR Commitments &amp; Progress
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/corporate-responsibility/our-commitments/materiality-matrix"
                                      >
                                        Materiality Matrix
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/corporate-responsibility/our-commitments/partnerships"
                                      >
                                        Partnerships
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/corporate-responsibility/our-commitments/policies-and-positioning"
                                      >
                                        Policies and Positioning
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/corporate-responsibility/our-commitments/business-integrity-human-rights"
                                      >
                                        Business Integrity
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/corporate-responsibility/our-commitments/human-rights"
                                      >
                                        Human Rights
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <button
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                  >
                                    <span>Impact on Individuals</span>
                                    <span
                                      className="Icon_icon__qNAb6"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_chevron"></use>
                                      </svg>
                                    </span>
                                  </button>
                                </div>
                                <ul className="MegaMenu_megamenu__subItem__fxm_D">
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/corporate-responsibility/impact-on-environment/healthy-sustainable-eating"
                                      >
                                        Healthy &amp; Sustainable Eating
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/corporate-responsibility/impact-on-communities/responsible-sourcing"
                                      >
                                        Responsible Sourcing
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/corporate-responsibility/impact-on-individuals/health-safety"
                                      >
                                        Our Health and Safety Culture
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <button
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                  >
                                    <span>Impact on Communities</span>
                                    <span
                                      className="Icon_icon__qNAb6"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_chevron"></use>
                                      </svg>
                                    </span>
                                  </button>
                                </div>
                                <ul className="MegaMenu_megamenu__subItem__fxm_D">
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/corporate-responsibility/impact-on-communities/community-support"
                                      >
                                        Community Support
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/corporate-responsibility/impact-on-communities/responsible-sourcing"
                                      >
                                        Responsible Sourcing
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <button
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                  >
                                    <span>Impact on Environment</span>
                                    <span
                                      className="Icon_icon__qNAb6"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_chevron"></use>
                                      </svg>
                                    </span>
                                  </button>
                                </div>
                                <ul className="MegaMenu_megamenu__subItem__fxm_D">
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/corporate-responsibility/impact-on-environment/our-climate-journey"
                                      >
                                        Our Contribution for Climate
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/corporate-responsibility/impact-on-environment/saving-resources-reducing-waste"
                                      >
                                        Saving Resources and Reducing Waste
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/corporate-responsibility/impact-on-environment/healthy-sustainable-eating"
                                      >
                                        Committed to sustainable eating
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/corporate-responsibility/impact-on-communities/responsible-sourcing"
                                      >
                                        Responsible Sourcing
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                            <div className="MegaMenuPush_megamenu-push__LGiSD">
                              <div className="PushImage_push-image__V6naY PushImage_push-image--layout__PwSJd">
                                <img
                                  alt=""
                                  loading="lazy"
                                  width="292"
                                  height="164"
                                  decoding="async"
                                  data-nimg="1"
                                  className="MegaMenuPush_megamenu-push__picture__hG58Z PushImage_push-image--rounded-top-left__2b0_6"
                                  src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/Menu_images_292x164/Stop-Hunger-2024-Impact-report-Menu.jpg?h=164&amp;iar=0&amp;w=292"
                                  style={{ color: 'transparent', objectFit: 'cover' }}
                                />
                              </div>
                              <p className="MegaMenuPush_megamenu-push__title__QoWNg MegaMenuPush_font-h4__G44Yq">
                                Stop Hunger 2024 Impact Report
                              </p>
                              <p className="MegaMenuPush_megamenu-push__description__L24Xd MegaMenuPush_font-body-small__uG15h">
                                Inspiring stories, lasting impact. Discover Stop Hunger&quot;s 2024
                                Impact Report
                              </p>
                              <Link
                                href="https://www.stop-hunger.org/cms/render/live/en/sites/stophunger/home/actualites/news/content-col1-area/latest-news/2024-stop-hunger-impact-report.html"
                                className="Button_btn__Xvq6a MegaMenuPush_megamenu-push__button__PmRwc Button_btn--link__JI8fR Button_btn--outline-blue__W1LG6"
                                title="Opens website (new window)"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Read the report
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
                        </div>
                      </div>
                    </section>
                  </li>
                  <li className="MainNav_main-nav__item___rOZL">
                    <div
                      className="IconRotate_icon-rotate__es0G_"
                      data-rotate-end="270"
                      data-rotate-start="90"
                    >
                      <div className="LineSlide_line-slide__mrcBo" data-theme="secondary">
                        <button
                          aria-expanded="false"
                          aria-haspopup="menu"
                          className="Button_btn__Xvq6a LineSlide_line-slide__button__hD2YY MainNav_main-nav__item__button__6pfmO MainNav_font-bold__xTgVJ Button_btn--blue__16_CO Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                          role="menuitem"
                        >
                          <span>Insights</span>
                          <span
                            className="Icon_icon__qNAb6"
                            style={{ height: '16px', width: '16px' }}
                          >
                            <svg aria-hidden="true" viewBox="0 0 16 16">
                              <use xlinkHref="#icons_chevron"></use>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                    <section className="MegaMenu_megamenu__0nlkj" id="Insights_3" role="menu">
                      <div className="MegaMenu_megamenu__container__zZn9P">
                        <div className="MegaMenu_megamenu__category___Q8he">
                          <p className="MegaMenu_megamenu__category__title__BQ4mJ">Insights</p>
                          <p>
                            We have stories to tell and insights to share. Whether envisioning the
                            future of the workplace, hunting for tech innovations, promoting
                            sustainable practices, or offering our expert views on food, health and
                            safety – this is how we think.
                          </p>
                        </div>
                        <div className="MegaMenu_megamenu__category__content__qn5GV">
                          <div className="circle-scale">
                            <button
                              aria-label="Back"
                              className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--dark-blue__7qBLy MegaMenu_megamenu__button__close__QnTqq Button_btn--unshaped__MfqLg"
                              role="menuitem"
                            >
                              <span
                                className="Icon_icon__qNAb6"
                                style={{ height: '24px', width: '24px' }}
                              >
                                <svg aria-hidden="true" viewBox="0 0 24 24">
                                  <use xlinkHref="#icons_cross"></use>
                                </svg>
                              </span>
                            </button>
                          </div>
                          <div className="MegaMenu_megamenu__content__Raoni">
                            <ul className="MegaMenu_megamenu__items__ol09A">
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <Link
                                    title=""
                                    target="_self"
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                    href="/blog/our-everyday-stories"
                                  >
                                    Our everyday stories
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_arrow"></use>
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <Link
                                    title="Opens page (same window)"
                                    target="_self"
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                    href="/working-at-sodexo/our-people-stories"
                                  >
                                    Our people stories
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_arrow"></use>
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </li>
                            </ul>
                            <div className="MegaMenuPush_megamenu-push__LGiSD">
                              <div className="PushImage_push-image__V6naY PushImage_push-image--layout__PwSJd">
                                <img
                                  alt=""
                                  loading="lazy"
                                  width="292"
                                  height="164"
                                  decoding="async"
                                  data-nimg="1"
                                  className="MegaMenuPush_megamenu-push__picture__hG58Z PushImage_push-image--rounded-top-left__2b0_6"
                                  src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/Menu_images_292x164/Insights-Cfc-Menu.jpg?h=164&amp;iar=0&amp;w=292"
                                  style={{ color: 'transparent', objectFit: 'cover' }}
                                />
                              </div>
                              <p className="MegaMenuPush_megamenu-push__title__QoWNg MegaMenuPush_font-h4__G44Yq">
                                Discover the Cook for Change! – The sustainable chef challenge
                              </p>
                              <p className="MegaMenuPush_megamenu-push__description__L24Xd MegaMenuPush_font-body-small__uG15h">
                                Get inspired by the creativity of our 8 eco-chef finalists as they
                                crafted delicious, planet-friendly dishes in the grand final in
                                Paris.
                              </p>
                              <Link
                                title="Opens page (same window)"
                                target="_self"
                                className="Button_btn__Xvq6a MegaMenuPush_megamenu-push__button__PmRwc Button_btn--link__JI8fR Button_btn--outline-blue__W1LG6"
                                href="/blog/our-everyday-stories/business-stories/cook-for-change-2024"
                              >
                                Watch the video
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
                        </div>
                      </div>
                    </section>
                  </li>
                  <li className="MainNav_main-nav__item___rOZL">
                    <div
                      className="IconRotate_icon-rotate__es0G_"
                      data-rotate-end="270"
                      data-rotate-start="90"
                    >
                      <div className="LineSlide_line-slide__mrcBo" data-theme="secondary">
                        <button
                          aria-expanded="false"
                          aria-haspopup="menu"
                          className="Button_btn__Xvq6a LineSlide_line-slide__button__hD2YY MainNav_main-nav__item__button__6pfmO MainNav_font-bold__xTgVJ Button_btn--blue__16_CO Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                          role="menuitem"
                        >
                          <span>Working at Sodexo</span>
                          <span
                            className="Icon_icon__qNAb6"
                            style={{ height: '16px', width: '16px' }}
                          >
                            <svg aria-hidden="true" viewBox="0 0 16 16">
                              <use xlinkHref="#icons_chevron"></use>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                    <section
                      className="MegaMenu_megamenu__0nlkj"
                      id="Working at Sodexo_4"
                      role="menu"
                    >
                      <div className="MegaMenu_megamenu__container__zZn9P">
                        <div className="MegaMenu_megamenu__category___Q8he">
                          <p className="MegaMenu_megamenu__category__title__BQ4mJ">
                            Working at Sodexo
                          </p>
                          <p>
                            Working with us is more than a job: it’s becoming a part of something
                            greater because we believe our everyday actions have an impact. Our
                            employees’ stories show we’re a group of humans who belong in a company
                            that allows you to thrive and act with purpose. If you’re looking for a
                            career – this is how we work.
                          </p>
                        </div>
                        <div className="MegaMenu_megamenu__category__content__qn5GV">
                          <div className="circle-scale">
                            <button
                              aria-label="Back"
                              className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--dark-blue__7qBLy MegaMenu_megamenu__button__close__QnTqq Button_btn--unshaped__MfqLg"
                              role="menuitem"
                            >
                              <span
                                className="Icon_icon__qNAb6"
                                style={{ height: '24px', width: '24px' }}
                              >
                                <svg aria-hidden="true" viewBox="0 0 24 24">
                                  <use xlinkHref="#icons_cross"></use>
                                </svg>
                              </span>
                            </button>
                          </div>
                          <div className="MegaMenu_megamenu__content__Raoni">
                            <ul className="MegaMenu_megamenu__items__ol09A">
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <Link
                                    title=""
                                    target="_self"
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                    href="/working-at-sodexo/more-than-a-job"
                                  >
                                    More than a job
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_arrow"></use>
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <Link
                                    title=""
                                    target="_self"
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                    href="/working-at-sodexo/find-a-job"
                                  >
                                    Find a job
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_arrow"></use>
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <Link
                                    title=""
                                    target="_self"
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                    href="/working-at-sodexo/belonging-and-inclusion"
                                  >
                                    Belonging &amp; Inclusion
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_arrow"></use>
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <Link
                                    title=""
                                    target="_self"
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                    href="/working-at-sodexo/our-people-stories"
                                  >
                                    People Stories
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_arrow"></use>
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <Link
                                    title=""
                                    target="_self"
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                    href="/working-at-sodexo/more-than-a-job/vita"
                                  >
                                    Vita
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_arrow"></use>
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </li>
                            </ul>
                            <div className="MegaMenuPush_megamenu-push__LGiSD">
                              <div className="PushImage_push-image__V6naY PushImage_push-image--layout__PwSJd">
                                <img
                                  alt="health workers"
                                  loading="lazy"
                                  width="393"
                                  height="397"
                                  decoding="async"
                                  data-nimg="1"
                                  className="MegaMenuPush_megamenu-push__picture__hG58Z PushImage_push-image--rounded-top-left__2b0_6"
                                  src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/Menu_images_393x397/working_at_menu_image_square2.jpg?h=397&amp;iar=0&amp;w=393"
                                  style={{ color: 'transparent', objectFit: 'cover' }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </li>
                </ul>
                <ul className="MainRightNav_main-right-nav__hR4Vf" role="menubar">
                  <li className="MainRightNav_main-right-nav__item__muzGi">
                    <div
                      className="IconRotate_icon-rotate__es0G_"
                      data-rotate-end="270"
                      data-rotate-start="90"
                    >
                      <div className="TextSlide_text-slide__6LG59" data-theme="light">
                        <button
                          aria-expanded="false"
                          aria-haspopup="menu"
                          className="Button_btn__Xvq6a TextSlide_text-slide__button__RS_o1 MainRightNav_main-right-nav__button__myVXL Button_btn--dark-blue__mOPUf Button_btn--unshaped__MfqLg Button_btn--unshaped-dark-blue__UGX4S"
                          role="menuitem"
                        >
                          <span>Investors</span>
                          <span
                            className="Icon_icon__qNAb6"
                            style={{ height: '16px', width: '16px' }}
                          >
                            <svg aria-hidden="true" viewBox="0 0 16 16">
                              <use xlinkHref="#icons_chevron"></use>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                    <section className="MegaMenu_megamenu__0nlkj" id="Investors_0" role="menu">
                      <div className="MegaMenu_megamenu__container__zZn9P">
                        <div className="MegaMenu_megamenu__category___Q8he">
                          <p className="MegaMenu_megamenu__category__title__BQ4mJ">Investors</p>
                          <p>
                            We provide transparent financial news and quarterly announcements as
                            well as detailed share information.
                          </p>
                        </div>
                        <div className="MegaMenu_megamenu__category__content__qn5GV">
                          <div className="circle-scale">
                            <button
                              aria-label="Back"
                              className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--dark-blue__7qBLy MegaMenu_megamenu__button__close__QnTqq Button_btn--unshaped__MfqLg"
                              role="menuitem"
                            >
                              <span
                                className="Icon_icon__qNAb6"
                                style={{ height: '24px', width: '24px' }}
                              >
                                <svg aria-hidden="true" viewBox="0 0 24 24">
                                  <use xlinkHref="#icons_cross"></use>
                                </svg>
                              </span>
                            </button>
                          </div>
                          <div className="MegaMenu_megamenu__content__Raoni">
                            <ul className="MegaMenu_megamenu__items__ol09A">
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <button
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                  >
                                    <span>Financial Results and Publications</span>
                                    <span
                                      className="Icon_icon__qNAb6"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_chevron"></use>
                                      </svg>
                                    </span>
                                  </button>
                                </div>
                                <ul className="MegaMenu_megamenu__subItem__fxm_D">
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/investors/financial-results-and-publications/financial-results"
                                      >
                                        Financial Results
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/investors/financial-results-and-publications/Universal-Registration-Document"
                                      >
                                        Universal Registration Document
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title="Opens page (same window)"
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/investors/financial-results-and-publications/integrated-report"
                                      >
                                        Integrated Report Fiscal 2024
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/investors/financial-results-and-publications/archives"
                                      >
                                        Presentation archive
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/investors/financial-results-and-publications/pluxee"
                                      >
                                        Pluxee Spin-off and Listing
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <button
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                  >
                                    <span>News</span>
                                    <span
                                      className="Icon_icon__qNAb6"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_chevron"></use>
                                      </svg>
                                    </span>
                                  </button>
                                </div>
                                <ul className="MegaMenu_megamenu__subItem__fxm_D">
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/news/newsroom"
                                      >
                                        Press Releases
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/investors/news/financial-calendar"
                                      >
                                        Financial Calendar
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <button
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                  >
                                    <span>Shareholders</span>
                                    <span
                                      className="Icon_icon__qNAb6"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_chevron"></use>
                                      </svg>
                                    </span>
                                  </button>
                                </div>
                                <ul className="MegaMenu_megamenu__subItem__fxm_D">
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/investors/shareholders/benefits-registered-shareholder"
                                      >
                                        Benefits of being a registered shareholder
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/investors/shareholders/shareholders-meetings"
                                      >
                                        Shareholder Meetings
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/investors/shareholders/share-ownership"
                                      >
                                        Share Ownership
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/investors/shareholders/bellon-sa"
                                      >
                                        Bellon SA
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <button
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                  >
                                    <span>Governance</span>
                                    <span
                                      className="Icon_icon__qNAb6"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_chevron"></use>
                                      </svg>
                                    </span>
                                  </button>
                                </div>
                                <ul className="MegaMenu_megamenu__subItem__fxm_D">
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/about-us/board-of-directors"
                                      >
                                        Board of Directors
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/about-us/sodexo-leadership-team"
                                      >
                                        Sodexo Leadership Team
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/investors/Governance/risk-factors"
                                      >
                                        Risk factors
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/investors/Governance/compensation"
                                      >
                                        Corporate Officers Compensation
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/investors/Governance/related-party-transactions"
                                      >
                                        Related-party Transactions
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <button
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                  >
                                    <span>Sodexo Share</span>
                                    <span
                                      className="Icon_icon__qNAb6"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_chevron"></use>
                                      </svg>
                                    </span>
                                  </button>
                                </div>
                                <ul className="MegaMenu_megamenu__subItem__fxm_D">
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/investors/sodexo-share/share-price"
                                      >
                                        Share Price
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/investors/sodexo-share/share-profile"
                                      >
                                        Share Profile
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/investors/sodexo-share/dividends"
                                      >
                                        Dividends
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/investors/sodexo-share/ADR"
                                      >
                                        ADR
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <button
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                  >
                                    <span>Debt and Bonds</span>
                                    <span
                                      className="Icon_icon__qNAb6"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_chevron"></use>
                                      </svg>
                                    </span>
                                  </button>
                                </div>
                                <ul className="MegaMenu_megamenu__subItem__fxm_D">
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/investors/Debt-bonds/financing-strategy"
                                      >
                                        Financing Strategy
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/investors/Debt-bonds/debt-structure"
                                      >
                                        Debt Structure
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/investors/Debt-bonds/credit-rating"
                                      >
                                        Credit Rating
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                  <li className="MegaMenu_megamenu__item__drU0L">
                                    <div className="circle-scale">
                                      <Link
                                        title=""
                                        target="_self"
                                        className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                        role="menuitem"
                                        href="/investors/Debt-bonds/documentation"
                                      >
                                        Debt Documentation
                                        <span
                                          className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                          style={{ height: '32px', width: '32px' }}
                                        >
                                          <svg aria-hidden="true" viewBox="0 0 32 32">
                                            <use xlinkHref="#icons_arrow"></use>
                                          </svg>
                                        </span>
                                      </Link>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <Link
                                    title=""
                                    target="_self"
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                    href="/investors/regulated-information"
                                  >
                                    Regulated Information
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_arrow"></use>
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </li>
                            </ul>
                            <div className="MegaMenuPush_megamenu-push__LGiSD">
                              <div className="PushImage_push-image__V6naY PushImage_push-image--layout__PwSJd">
                                <img
                                  alt=""
                                  loading="lazy"
                                  width="292"
                                  height="164"
                                  decoding="async"
                                  data-nimg="1"
                                  className="MegaMenuPush_megamenu-push__picture__hG58Z PushImage_push-image--rounded-top-left__2b0_6"
                                  src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/Menu_images_292x164/Sodexo-Logo-background-Menu.jpg?h=164&amp;iar=0&amp;w=292"
                                  style={{ color: 'transparent', objectFit: 'cover' }}
                                />
                              </div>
                              <p className="MegaMenuPush_megamenu-push__title__QoWNg MegaMenuPush_font-h4__G44Yq">
                                Fiscal 2025 trading update
                              </p>
                              <p className="MegaMenuPush_megamenu-push__description__L24Xd MegaMenuPush_font-body-small__uG15h">
                                Thursday, March 20th 2025
                              </p>
                              <Link
                                href="https://edge.media-server.com/mmc/p/oxxxitwa/"
                                className="Button_btn__Xvq6a MegaMenuPush_megamenu-push__button__PmRwc Button_btn--link__JI8fR Button_btn--outline-blue__W1LG6"
                                title="Opens web page (new window)"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Watch the webcast
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
                        </div>
                      </div>
                    </section>
                  </li>
                  <li className="MainRightNav_main-right-nav__item__muzGi">
                    <div
                      className="IconRotate_icon-rotate__es0G_"
                      data-rotate-end="270"
                      data-rotate-start="90"
                    >
                      <div className="TextSlide_text-slide__6LG59" data-theme="light">
                        <button
                          aria-expanded="false"
                          aria-haspopup="menu"
                          className="Button_btn__Xvq6a TextSlide_text-slide__button__RS_o1 MainRightNav_main-right-nav__button__myVXL Button_btn--dark-blue__mOPUf Button_btn--unshaped__MfqLg Button_btn--unshaped-dark-blue__UGX4S"
                          role="menuitem"
                        >
                          <span>Newsroom</span>
                          <span
                            className="Icon_icon__qNAb6"
                            style={{ height: '16px', width: '16px' }}
                          >
                            <svg aria-hidden="true" viewBox="0 0 16 16">
                              <use xlinkHref="#icons_chevron"></use>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                    <section className="MegaMenu_megamenu__0nlkj" id="Newsroom_1" role="menu">
                      <div className="MegaMenu_megamenu__container__zZn9P">
                        <div className="MegaMenu_megamenu__category___Q8he">
                          <p className="MegaMenu_megamenu__category__title__BQ4mJ">Newsroom</p>
                          <p>
                            We’re always bustling with activity and are glad to share our latest
                            news, press releases, institutional reports and images.
                          </p>
                        </div>
                        <div className="MegaMenu_megamenu__category__content__qn5GV">
                          <div className="circle-scale">
                            <button
                              aria-label="Back"
                              className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--dark-blue__7qBLy MegaMenu_megamenu__button__close__QnTqq Button_btn--unshaped__MfqLg"
                              role="menuitem"
                            >
                              <span
                                className="Icon_icon__qNAb6"
                                style={{ height: '24px', width: '24px' }}
                              >
                                <svg aria-hidden="true" viewBox="0 0 24 24">
                                  <use xlinkHref="#icons_cross"></use>
                                </svg>
                              </span>
                            </button>
                          </div>
                          <div className="MegaMenu_megamenu__content__Raoni">
                            <ul className="MegaMenu_megamenu__items__ol09A">
                              <li className="MegaMenu_megamenu__item__drU0L">
                                <div className="circle-scale">
                                  <Link
                                    title=""
                                    target="_self"
                                    className="Button_btn__Xvq6a CircleScale_circle-scale__button__8OW5R CircleScale_circle-scale__button--red__zIRaj MegaMenu_megamenu__item__link__EntFb Button_btn--blue__16_CO Button_btn--link__JI8fR Button_btn--unshaped__MfqLg Button_btn--unshaped-blue__zPYkC"
                                    role="menuitem"
                                    href="/news/newsroom"
                                  >
                                    Newsroom
                                    <span
                                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5"
                                      style={{ height: '32px', width: '32px' }}
                                    >
                                      <svg aria-hidden="true" viewBox="0 0 32 32">
                                        <use xlinkHref="#icons_arrow"></use>
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </li>
                            </ul>
                            <div className="MegaMenuPush_megamenu-push__LGiSD">
                              <div className="PushImage_push-image__V6naY PushImage_push-image--layout__PwSJd">
                                <img
                                  alt="office work"
                                  loading="lazy"
                                  width="393"
                                  height="397"
                                  decoding="async"
                                  data-nimg="1"
                                  className="MegaMenuPush_megamenu-push__picture__hG58Z PushImage_push-image--rounded-top-left__2b0_6"
                                  src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/Menu_images_393x397/Newsroom_menu_image_square.jpg?h=397&amp;iar=0&amp;w=393"
                                  style={{ color: 'transparent', objectFit: 'cover' }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </li>
                  <li className="MainRightNav_main-right-nav__item__muzGi">
                    <div className="IconSlide_icon-slide__Zlul4" data-theme="light">
                      <Link
                        title=""
                        target="_self"
                        className="Button_btn__Xvq6a IconSlide_icon-slide__button__TOG0Q MainRightNav_main-right-nav__button__myVXL Button_btn--link__JI8fR Button_btn--unshaped__MfqLg"
                        aria-label="Search"
                        role="menuitem"
                        href="/How-can-we-help-you"
                      >
                        <span
                          className="Icon_icon__qNAb6"
                          style={{ height: '32px', width: '32px' }}
                        >
                          <svg aria-hidden="true" viewBox="0 0 32 32">
                            <use xlinkHref="#icons_search"></use>
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </li>
                </ul>
              </nav>
              <div className="MainNav_main-nav__overlay__xEWYd"></div>
            </div>
          </div>
        </header>
      </>
    );
  }

  return <SodexoBannerDefaultComponent {...props} />;
};
