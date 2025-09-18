import {
  ComponentParams,
  ComponentRendering,
  TextField,
  LinkField,
  RichTextField,
  ImageField,
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
  console.log(props);
  return (
    <>
      <a className="u-sr-only" href="#content" title="Skip to main content">
        Skip to main content
      </a>

      <header className="c-header header--transparent" data-variant="transparent" js-hook-header>
        <div className="header__outer-container">
          <div className="c-search-form header__search-form is--hidden" js-hook-header-search>
            <form
              className="c-form search__form"
              action="https://www.engie.nl/zoekresultaten"
              js-hook-search-form
            >
              <div className="c-alert alert--error u-hidden" js-hook-alert></div>
              <div className="c-autocomplete c-search-autocomplete" js-hook-autocomplete-wrapper>
                <div className="c-input form__item search-form__input input--search">
                  <div
                    id="InputFieldTitle-4d04ed5f-3585-4310-bcac-46a8de51943e"
                    className="input__wrapper"
                    title="Zoeken binnen de website"
                  >
                    <label className="input__label u-sr-only" htmlFor="search-form--header">
                      Zoeken binnen de website
                    </label>
                    <input
                      className="input__input"
                      type="search"
                      name="q"
                      value=""
                      id="search-form--header"
                      placeholder="Waar ben je naar op zoek?"
                      js-hook-search-input=""
                      data-api="search/suggestions?Id=4d04ed5f-3585-4310-bcac-46a8de51943e"
                      autoComplete="off"
                    />
                    <span className="focus-helper"></span>
                  </div>
                  <div className="form__item-error"></div>
                </div>
                <div className="autocomplete__element" js-hook-search-autoComplete="search-input">
                  <div className="autocomplete__category">
                    <h6 className="autocomplete__category-title">Zoeksuggesties</h6>
                    <ul className="autocomplete__list" js-hook-autocomplete-suggestion-list=""></ul>
                  </div>
                </div>
              </div>
              <button
                className="c-button--primary button--icon button--icon-left search-form__button"
                type="submit"
              >
                <span className="button__label">Zoeken</span>
                <span className="button__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg--icons-looking-glass"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path
                      fill="#212121"
                      fill-rule="evenodd"
                      d="m11.71 11-.28-.27A6.471 6.471 0 0 0 13 6.5 6.5 6.5 0 1 0 6.5 13c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L17.49 16l-4.99-5h-.79zM6.5 11C4.01 11 2 8.99 2 6.5S4.01 2 6.5 2 11 4.01 11 6.5 8.99 11 6.5 11z"
                    />
                  </svg>
                </span>
              </button>
              <span
                className="search-form__icon--close search-form__icon--hide"
                js-hook-clearable=""
                data-htmlFor="search-form--header"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg--icons-close"
                  width="357"
                  height="357"
                  viewBox="0 0 357 357"
                >
                  <path d="M357 35.7 321.3 0 178.5 142.8 35.7 0 0 35.7l142.8 142.8L0 321.3 35.7 357l142.8-142.8L321.3 357l35.7-35.7-142.8-142.8z" />
                </svg>
              </span>
            </form>
            <button type="button" className="header__search-close" js-hook-header-search-close="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="svg--icons-close"
                width="357"
                height="357"
                viewBox="0 0 357 357"
              >
                <path d="M357 35.7 321.3 0 178.5 142.8 35.7 0 0 35.7l142.8 142.8L0 321.3 35.7 357l142.8-142.8L321.3 357l35.7-35.7-142.8-142.8z" />
              </svg>
            </button>
          </div>

          <div className="header__left-container">
            <Link href="https://www.engie.nl/" className="header__logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="svg--brand-engie"
                width="90"
                height="32"
                viewBox="0 0 90 32"
              >
                <path
                  fill="#0AF"
                  fill-rule="nonzero"
                  d="M80.322 16.685c6.54 0 8.773 3.72 8.773 6.175 0 1.553-.664 2.305-2.02 2.305-2.048-.006-6.175-.04-7.8-.04-1.136-.005-1.559-.645-1.559-1.206 0-.71.527-1.235 1.513-1.272 1.736-.065 3.823-.13 4.933-.196 1.209-.07 1.38-.938.767-1.575-.992-1.02-2.905-1.53-5.353-1.336-2.333.188-5.294 1.482-5.294 4.662 0 4.21 6.835 5.578 12.805 4.298.848-.183 1.414.078 1.594.777.206.778-.428 1.28-1.127 1.519-7.375 2.532-17.442.452-17.442-6.364 0-4.805 4.294-7.747 10.21-7.747zm-69.28 0c6.538 0 8.775 3.72 8.775 6.175 0 1.553-.668 2.305-2.02 2.305-2.048-.006-6.178-.04-7.804-.04-1.135-.005-1.558-.645-1.558-1.206 0-.71.527-1.235 1.513-1.272 1.735-.065 3.823-.13 4.936-.196 1.206-.07 1.378-.938.763-1.575-.994-1.02-2.907-1.53-5.352-1.336C7.959 19.728 5 21.022 5 24.202c0 4.21 6.832 5.578 12.805 4.298.848-.183 1.414.078 1.597.777.206.778-.428 1.28-1.127 1.519C10.896 33.328.83 31.248.83 24.432c0-4.805 4.294-7.747 10.21-7.747zm41.36-.008a22.1 22.1 0 0 1 5.76.684c1.036.273 1.551.778 1.34 1.564-.197.741-.986.884-1.789.772-9.125-1.289-12.199 1.74-12.199 4.491 0 2.925 3.59 4.772 6.852 4.772 2.493 0 4.9-.84 5.888-2.12.493-.64.473-1.386-.983-1.459-1.082-.056-3.426-.166-5.266-.261-1.208-.062-1.558-.707-1.558-1.207 0-.575.324-1.272 1.62-1.272 2.48-.005 6.258-.034 7.867-.038h.332c1.417 0 2.26.63 2.254 2.278 0 3.24-3.328 6.945-10.16 6.945-6.119 0-11.027-2.453-11.027-7.506 0-4.721 4.925-7.643 11.07-7.643zm15.783 4.402.054.003a.216.216 0 0 1 .174.251 178.49 178.49 0 0 1-.633 8.503c-.127 1.417-.834 1.78-1.564 1.78-.73 0-1.448-.388-1.575-1.791-.099-1.081-.45-4.163-.583-7.88a.233.233 0 0 1 .186-.23l3.888-.626a.219.219 0 0 1 .107-.007zm-44.176-4.054a2.295 2.295 0 0 1 1.51.561l8.126 6.883c.512.443 1.115.78 1.611.561.413-.182.508-.581.567-1.005l.033-.255c.113-.848.623-4.191.752-5.157.116-.873.57-1.586 1.454-1.586.752 0 1.38.545 1.378 1.539v10.722c0 2.044-1.223 2.325-1.896 2.325a2.21 2.21 0 0 1-1.651-.62s-6.835-6.156-7.663-6.872c-.829-.716-1.372-1.053-1.956-.873-.645.199-.749.721-.867 1.386-.093.573-.938 5.701-.938 5.701a1.373 1.373 0 0 1-1.41 1.278c-.027 0-.055 0-.083-.003a1.299 1.299 0 0 1-1.22-1.373V19.472c0-1.737 1.104-2.447 2.253-2.447zm42.331-.353.113.002a2.176 2.176 0 0 1 2.09 2.26c-.017.092-.017.286-.017.477a.233.233 0 0 1-.197.221l-4.057.657a.239.239 0 0 1-.282-.222 40.555 40.555 0 0 1-.045-1.145 2.147 2.147 0 0 1 2.282-2.246 2.43 2.43 0 0 1 .226-.002zM44.956 0C62.148 0 77.863 4.848 89.91 12.862 77.93 8.892 63.923 6.43 44.956 6.43 25.99 6.43 11.982 8.893 0 12.86 12.047 4.849 27.765 0 44.956 0z"
                />
              </svg>
            </Link>
          </div>

          <div className="header__right-container">
            <div
              className="header__modal-container"
              id="mobile-menu"
              data-disable-open-className="true"
              data-keep-scroll-position="true"
              js-hook-modal
            >
              <nav className="header__nav">
                <ul className="header__list">
                  <li className="header__list-item header__list-item--home">
                    <Link href="https://www.engie.nl/" className="header__link">
                      Home
                    </Link>
                  </li>

                  <li className="header__list-item ">
                    <Link href="https://www.engie.nl/energie" target="" className="header__link">
                      Energie
                    </Link>
                  </li>
                  <li className="header__list-item ">
                    <Link
                      href="https://www.engie.nl/product-advies"
                      target=""
                      className="header__link"
                    >
                      Product en advies
                    </Link>
                  </li>
                  <li className="header__list-item ">
                    <Link
                      href="https://www.engie.nl/verduurzamen"
                      target=""
                      className="header__link"
                    >
                      Verduurzamen
                    </Link>
                  </li>
                </ul>
              </nav>

              <nav className="c-top-nav header__top-nav">
                <div className="u-flex">
                  <div className="c-dark-mode-switch nj-toggle" js-hook-dark-mode-switch>
                    <label>
                      <input type="checkbox" js-hook-dark-mode-input />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        className="nj-toggle__icon-dm"
                      >
                        <path
                          d="M8 3.2a.4.4 0 00.4-.4V.4a.4.4 0 10-.8 0v2.4a.4.4 0 00.4.4zm4 1.41l1.7-1.7a.4.4 0 00-.57-.57L11.39 4a.4.4 0 00.57.57zm3.64 3H13.2a.4.4 0 100 .8h2.4a.4.4 0 100-.8zm-4.21 3.79a.42.42 0 01.57 0l1.7 1.7a.4.4 0 01-.57.57L11.39 12a.42.42 0 010-.61zM3.18 7.86a.43.43 0 01-.13.45.38.38 0 01-.25.09H.4a.4.4 0 110-.8h2.4a.41.41 0 01.38.26zM8 12.8a.4.4 0 00-.4.4v2.4a.4.4 0 10.8 0v-2.4a.4.4 0 00-.4-.4zm-4-1.41a.41.41 0 01.5-.05.42.42 0 01.18.3.41.41 0 01-.11.32l-1.7 1.7a.4.4 0 01-.57-.57L3.47 12zM3.48 4l.52.61A.4.4 0 004.61 4l-1.7-1.7a.4.4 0 00-.57.57zM8 4a4 4 0 104 4 4 4 0 00-4-4zm0 7.19A3.2 3.2 0 1111.22 8a3.17 3.17 0 01-.93 2.27A3.22 3.22 0 018 11.2z"
                          fill-rule="evenodd"
                        />
                      </svg>
                      <span className="nj-toggle__track"></span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        className="nj-toggle__icon-dm"
                      >
                        <path d="M9.53 16h-.48a8 8 0 01-7.4-8.47A7.94 7.94 0 019.52 0h.94l-.64.6a7.71 7.71 0 00-2.06 8 7.6 7.6 0 006.3 5.23l.87.1-.7.52A7.77 7.77 0 019.53 16zM8.71.74a7.31 7.31 0 00.38 14.54 7.06 7.06 0 004-.94 8.35 8.35 0 01-6-5.55A8.48 8.48 0 018.71.74z" />
                      </svg>
                    </label>
                  </div>

                  <ul className="top-nav__list top-nav__list--klanttype">
                    <li className="top-nav__list-item">
                      <Link
                        href="https://www.engie.nl/"
                        className="top-nav__link top-nav__link--active"
                      >
                        Thuis
                      </Link>
                    </li>
                    <li className="top-nav__list-item">
                      <Link href="https://www.engie.nl/zzp-mkb" className="top-nav__link ">
                        Zzp &amp; mkb
                      </Link>
                    </li>
                    <li className="top-nav__list-item">
                      <Link href="https://www.engie.nl/zakelijk" className="top-nav__link ">
                        Grootzakelijk
                      </Link>
                    </li>
                  </ul>
                </div>
                <ul className="top-nav__list">
                  <li className="top-nav__list-item">
                    <Link
                      href="https://www.engie.nl/klantenservice"
                      target=""
                      className="top-nav__link"
                    >
                      Klantenservice
                    </Link>
                  </li>
                  <li className="top-nav__list-item">
                    <Link href="https://www.engie.nl/over-ons" target="" className="top-nav__link">
                      Over ons
                    </Link>
                  </li>
                  <li className="top-nav__list-item">
                    <Link
                      href="https://www.engie.nl/over-ons/werkenbij"
                      target=""
                      className="top-nav__link"
                    >
                      Werken bij
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <button
              className="header__search-button"
              aria-controls="search-modal"
              aria-label="Zoeken"
              js-hook-header-search-open
            >
              <span className="u-sr-only">Zoeken</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="svg--icons-looking-glass"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path
                  fill="#212121"
                  fill-rule="evenodd"
                  d="m11.71 11-.28-.27A6.471 6.471 0 0 0 13 6.5 6.5 6.5 0 1 0 6.5 13c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L17.49 16l-4.99-5h-.79zM6.5 11C4.01 11 2 8.99 2 6.5S4.01 2 6.5 2 11 4.01 11 6.5 8.99 11 6.5 11z"
                />
              </svg>
            </button>

            <Link className="header__account-button" href="/authenticatie/inloggen">
              <span className="button__label">Inloggen MijnENGIE</span>
              <span className="button__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="svg--icons-silhouette"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <defs>
                    <path
                      id="a"
                      d="M12 3a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 11.25c4.973 0 9 2.014 9 4.5V21H3v-2.25c0-2.486 4.027-4.5 9-4.5z"
                    />
                  </defs>
                  <g fill="none" fill-rule="evenodd" transform="translate(-3 -3)">
                    <path d="M0 0h24v24H0z" />
                    <use xlinkHref="#a" fill="#212121" />
                  </g>
                </svg>
              </span>
            </Link>

            <button
              className="c-hamburger header__hamburger"
              aria-controls="mobile-menu"
              //  on:click=account-menu::close
            >
              <span className="u-sr-only">Open navigatie</span>
              <span className="hamburger__icon"></span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
