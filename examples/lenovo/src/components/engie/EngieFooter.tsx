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
      <footer className="c-footer">
        <div className="o-container">
          <div className="o-grid footer__section">
            <div className="o-col-12 footer__top">
              <Link href="https://www.engie.nl/" className="footer__logo">
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
              <span className="footer__pay-off"></span>
            </div>
          </div>
          <div className="o-grid footer__section accordion--transparent" js-hook-accordion>
            <div className="o-col-12 o-col-4--md" data-only-mobile="true" js-hook-accordion-item>
              <button
                aria-controls="footer-column-1"
                aria-expanded="false"
                className="footer__title accordion__item-header accordion__item-header--mobile-only"
                // js-hook-accordion-button
                // on:click.prevent="accordion[footer-column-1]::toggle"
                tabIndex={-1}
              >
                Snel Regelen
              </button>
              <ul
                id="footer-column-1"
                className="footer__list accordion__item-content-holder"
                aria-hidden="true"
                js-hook-accordion-content-holder
              >
                <li className="footer__list-item">
                  <Link
                    href="https://www.engie.nl/energie/energiekosten-berekenen"
                    className="footer__link"
                    target=""
                  >
                    Energiekosten berekenen
                  </Link>
                </li>
                <li className="footer__list-item">
                  <Link
                    href="https://www.engie.nl/energie/energie-aanvragen/spoedaanvraag-energie"
                    className="footer__link"
                    target=""
                  >
                    Spoedaanvraag
                  </Link>
                </li>
                <li className="footer__list-item">
                  <Link
                    href="https://www.engie.nl/product-advies/energieadvies"
                    className="footer__link"
                    target=""
                  >
                    Energieadvies
                  </Link>
                </li>
                <li className="footer__list-item">
                  <Link
                    href="https://www.engie.nl/authenticatie/inloggen"
                    className="footer__link"
                    target=""
                  >
                    MijnENGIE
                  </Link>
                </li>
                <li className="footer__list-item">
                  <Link
                    href="https://www.engie.nl/product-advies/app"
                    className="footer__link"
                    target=""
                  >
                    ENGIE-app
                  </Link>
                </li>
                <li className="footer__list-item">
                  <Link
                    href="https://www.engie.nl/energie/modelcontract"
                    className="footer__link"
                    target=""
                  >
                    Modelcontract
                  </Link>
                </li>
              </ul>
            </div>
            <div className="o-col-12 o-col-4--md" data-only-mobile="true" js-hook-accordion-item>
              <button
                aria-controls="footer-column-2"
                aria-expanded="false"
                className="footer__title accordion__item-header accordion__item-header--mobile-only"
                // js-hook-accordion-button
                // on:click.prevent="accordion[footer-column-2]::toggle"
                tabIndex={-1}
              >
                Klantenservice
              </button>

              <ul
                id="footer-column-2"
                className="footer__list accordion__item-content-holder"
                aria-hidden="true"
                js-hook-accordion-content-holder
              >
                <li className="footer__list-item">
                  <Link
                    href="https://www.engie.nl/klantenservice"
                    className="footer__link"
                    target=""
                  >
                    Contact
                  </Link>
                </li>
                <li className="footer__list-item">
                  <Link
                    href="https://www.engie.nl/klantenservice/verhuizen"
                    className="footer__link"
                    target=""
                  >
                    Verhuizing doorgeven
                  </Link>
                </li>
                <li className="footer__list-item">
                  <Link
                    href="https://www.engie.nl/klantenservice/betalen"
                    className="footer__link"
                    target=""
                  >
                    Facturen en betalen
                  </Link>
                </li>
                <li className="footer__list-item">
                  <Link
                    href="https://www.engie.nl/klantenservice/overige-zaken/boetevergoeding"
                    className="footer__link"
                    target=""
                  >
                    Boetevergoeding
                  </Link>
                </li>
                <li className="footer__list-item">
                  <Link
                    href="https://www.engie.nl/klantenservice/over-meterstanden"
                    className="footer__link"
                    target=""
                  >
                    Meterstanden doorgeven
                  </Link>
                </li>
                <li className="footer__list-item">
                  <Link
                    href="https://www.engie.nl/klantenservice/jouw-energieverbruik"
                    className="footer__link"
                    target=""
                  >
                    Jouw energieverbruik
                  </Link>
                </li>
              </ul>
            </div>
            <div className="o-col-12 o-col-4--md" data-only-mobile="true" js-hook-accordion-item>
              <button
                aria-controls="footer-column-3"
                aria-expanded="false"
                className="footer__title accordion__item-header accordion__item-header--mobile-only"
                // js-hook-accordion-button
                // on:click.prevent="accordion[footer-column-3]::toggle"
                tabIndex={-1}
              >
                Meer ENGIE
              </button>

              <ul
                id="footer-column-3"
                className="footer__list accordion__item-content-holder"
                aria-hidden="true"
                js-hook-accordion-content-holder
              >
                <li className="footer__list-item">
                  <Link href="https://www.engie.nl/over-ons" className="footer__link" target="">
                    Over ENGIE
                  </Link>
                </li>
                <li className="footer__list-item">
                  <Link
                    href="https://www.engie.nl/over-ons/kennisbank"
                    className="footer__link"
                    target=""
                  >
                    Nieuws en Kennisbank
                  </Link>
                </li>
                <li className="footer__list-item">
                  <Link
                    href="https://www.engie.nl/over-ons/werkenbij"
                    className="footer__link"
                    target=""
                  >
                    Werken bij ENGIE
                  </Link>
                </li>
                <li className="footer__list-item">
                  <Link
                    href="https://www.engie.nl/over-ons/stroometiket"
                    className="footer__link"
                    target=""
                  >
                    Stroometiket
                  </Link>
                </li>
                <li className="footer__list-item">
                  <Link
                    href="https://www.engie.nl/-/media/engie/over/_downloads/klokkenluidersregeling.pdf"
                    className="footer__link"
                    target="_blank"
                  >
                    Klokkenluidersregeling
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="o-grid footer__section footer__section--medium">
            <div className="o-col-12 footer__media-container">
              <Link
                className="footer__logo-item"
                href="https://play.google.com/store/apps/details?id=nl.engie.engieapp"
                target="_blank"
              >
                <figure className="c-image ">
                  <img
                    id="image-dcd3d322-25ae-45f4-99ee-57b2bc8dcd3e"
                    className="image__default"
                    src="https://www.engie.nl/-/media/engie/website/app/buttons/googleplay-engie-small.png?w=10&hash=93D9F9C1454671921194F7CEBF50C947"
                    alt="ENGIE app"
                    data-src="https://www.engie.nl/-/media/engie/website/app/buttons/googleplay-engie-small.png?w=115&hash=E281E89271DD817D33F1DC02957C1653"
                    data-srcSet="https://www.engie.nl/-/media/engie/website/app/buttons/googleplay-engie-small.png?w=48&hash=B1222CB0C54490C87DEF2CF9E843F432 48w,https://www.engie.nl/-/media/engie/website/app/buttons/googleplay-engie-small.png?w=72&hash=B1878822AE348C6CAE449027804269C3 72w,https://www.engie.nl/-/media/engie/website/app/buttons/googleplay-engie-small.png?w=115&hash=E281E89271DD817D33F1DC02957C1653 115w,https://www.engie.nl/-/media/engie/website/app/buttons/googleplay-engie-small.png?w=177&hash=17C367788E6464A0640D19AFFA3E68B3 177w"
                    sizes="(max-width: 320px) 48px,(max-width: 480px) 72px,(max-width: 768px) 115px,177px"
                  />
                  <img
                    id="image-dcd3d322-25ae-45f4-99ee-57b2bc8dcd3e-ghost"
                    className="image__ghost"
                    aria-hidden="true"
                    src="https://www.engie.nl/-/media/engie/website/app/buttons/googleplay-engie-small.png?w=10&hash=93D9F9C1454671921194F7CEBF50C947"
                    alt="ENGIE app"
                    js-hook-shadow-image
                  />
                </figure>
              </Link>
              <Link
                className="footer__logo-item"
                href="https://apps.apple.com/nl/app/engie-energie-nl/id1046782864"
                target="_blank"
              >
                <figure className="c-image ">
                  <img
                    id="image-3a83380a-2226-4b09-be89-b7815af46181"
                    className="image__default"
                    src="https://www.engie.nl/-/media/engie/website/app/buttons/appstore-engie-small.png?w=10&hash=250626DBFD4D2C43C16C6212D3F93235"
                    alt="ENGIE app"
                    data-src="https://www.engie.nl/-/media/engie/website/app/buttons/appstore-engie-small.png?w=115&hash=276E1BE7BE7FA927E29D59E23BC2CF88"
                    data-srcSet="https://www.engie.nl/-/media/engie/website/app/buttons/appstore-engie-small.png?w=48&hash=7ECAE25D18F2F608493455D3C02343F4 48w,https://www.engie.nl/-/media/engie/website/app/buttons/appstore-engie-small.png?w=72&hash=ABB0C9210E552C3E1BA42A6E32733BD6 72w,https://www.engie.nl/-/media/engie/website/app/buttons/appstore-engie-small.png?w=115&hash=276E1BE7BE7FA927E29D59E23BC2CF88 115w,https://www.engie.nl/-/media/engie/website/app/buttons/appstore-engie-small.png?w=177&hash=CA2ED83DA108560BF9F8CCCF5CA425D8 177w"
                    sizes="(max-width: 320px) 48px,(max-width: 480px) 72px,(max-width: 768px) 115px,177px"
                  />
                  <img
                    id="image-3a83380a-2226-4b09-be89-b7815af46181-ghost"
                    className="image__ghost"
                    aria-hidden="true"
                    src="https://www.engie.nl/-/media/engie/website/app/buttons/appstore-engie-small.png?w=10&hash=250626DBFD4D2C43C16C6212D3F93235"
                    alt="ENGIE app"
                    js-hook-shadow-image
                  />
                </figure>
              </Link>
              <ul className="footer__list footer__list--social">
                <li className="footer__social-list-item">
                  <Link
                    href="https://www.facebook.com/engieenergienl"
                    className="footer__link"
                    rel="noopener"
                    target="_blank"
                    title="facebook"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="svg--social-facebook"
                      width="23"
                      height="50"
                      viewBox="0 0 23 50"
                    >
                      <path d="M5 9.684v6.883H0V25h5v25h10V25h7.037s.652-4.051.963-8.463h-8v-5.756c0-.861 1.335-2.018 2.436-2.018H23V0h-7.564C4.719 0 5 8.426 5 9.684z" />
                    </svg>
                  </Link>
                </li>
                <li className="footer__social-list-item">
                  <Link
                    href="https://www.instagram.com/engie_energie/"
                    className="footer__link"
                    rel="noopener"
                    target="_blank"
                    title="instagram"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="svg--social-instagram"
                      width="50"
                      height="50"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 49.5c67.3 0 75.2.3 101.8 1.5 24.6 1.1 37.9 5.2 46.8 8.7 11.8 4.6 20.2 10 29 18.8s14.3 17.2 18.8 29c3.4 8.9 7.6 22.2 8.7 46.8 1.2 26.6 1.5 34.5 1.5 101.8s-.3 75.2-1.5 101.8c-1.1 24.6-5.2 37.9-8.7 46.8-4.6 11.8-10 20.2-18.8 29s-17.2 14.3-29 18.8c-8.9 3.4-22.2 7.6-46.8 8.7-26.6 1.2-34.5 1.5-101.8 1.5s-75.2-.3-101.8-1.5c-24.6-1.1-37.9-5.2-46.8-8.7-11.8-4.6-20.2-10-29-18.8s-14.3-17.2-18.8-29c-3.4-8.9-7.6-22.2-8.7-46.8-1.2-26.6-1.5-34.5-1.5-101.8s.3-75.2 1.5-101.8c1.1-24.6 5.2-37.9 8.7-46.8 4.6-11.8 10-20.2 18.8-29s17.2-14.3 29-18.8c8.9-3.4 22.2-7.6 46.8-8.7 26.6-1.3 34.5-1.5 101.8-1.5m0-45.4c-68.4 0-77 .3-103.9 1.5C125.3 6.8 107 11.1 91 17.3c-16.6 6.4-30.6 15.1-44.6 29.1-14 14-22.6 28.1-29.1 44.6-6.2 16-10.5 34.3-11.7 61.2C4.4 179 4.1 187.6 4.1 256s.3 77 1.5 103.9c1.2 26.8 5.5 45.1 11.7 61.2 6.4 16.6 15.1 30.6 29.1 44.6 14 14 28.1 22.6 44.6 29.1 16 6.2 34.3 10.5 61.2 11.7 26.9 1.2 35.4 1.5 103.9 1.5s77-.3 103.9-1.5c26.8-1.2 45.1-5.5 61.2-11.7 16.6-6.4 30.6-15.1 44.6-29.1 14-14 22.6-28.1 29.1-44.6 6.2-16 10.5-34.3 11.7-61.2 1.2-26.9 1.5-35.4 1.5-103.9s-.3-77-1.5-103.9c-1.2-26.8-5.5-45.1-11.7-61.2-6.4-16.6-15.1-30.6-29.1-44.6-14-14-28.1-22.6-44.6-29.1-16-6.2-34.3-10.5-61.2-11.7-27-1.1-35.6-1.4-104-1.4z" />
                      <path d="M256 126.6c-71.4 0-129.4 57.9-129.4 129.4s58 129.4 129.4 129.4 129.4-58 129.4-129.4-58-129.4-129.4-129.4zm0 213.4c-46.4 0-84-37.6-84-84s37.6-84 84-84 84 37.6 84 84-37.6 84-84 84z" />
                      <circle cx="390.5" cy="121.5" r="30.2" />
                    </svg>
                  </Link>
                </li>
                <li className="footer__social-list-item">
                  <Link
                    href="https://www.linkedin.com/company/engie-energie-nederland/"
                    className="footer__link"
                    rel="noopener"
                    target="_blank"
                    title="LinkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="svg--social-linkedin"
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                    >
                      <path d="M49.999 30.43V49H39.281V31.674c0-4.354-1.549-7.324-5.428-7.324-2.961 0-4.725 2.002-5.5 3.938-.283.691-.354 1.656-.354 2.625V49h-10.72s.145-29.348 0-32.389h10.719v4.592c-.021.035-.051.07-.07.104h.07v-.104c1.424-2.205 3.968-5.352 9.66-5.352 7.054.001 12.341 4.629 12.341 14.579zM6.066 1C2.399 1 0 3.416 0 6.594c0 3.109 2.33 5.6 5.924 5.6h.072c3.738 0 6.063-2.488 6.063-5.6C11.988 3.416 9.733 1 6.066 1zM.636 49h10.716V16.611H.636V49z" />
                    </svg>
                  </Link>
                </li>
                <li className="footer__social-list-item">
                  <Link
                    href="https://www.youtube.com/channel/UCL6WQ-rf8V0AGxEmjIFjAJQ"
                    className="footer__link"
                    rel="noopener"
                    target="_blank"
                    title="youtube"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="svg--social-youtube"
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                    >
                      <path d="M50 14.477A7.475 7.475 0 0 0 42.527 7H7.472A7.475 7.475 0 0 0 0 14.477v20.047c0 4.129 3.345 7.479 7.472 7.479h35.055c4.127 0 7.473-3.35 7.473-7.479V14.477zM20 32.959v-18.83l14.279 9.414L20 32.959z" />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="o-grid footer__section footer__section--small">
            <div className="o-col-12 footer__bottom-container">
              <ul className="footer__list footer__list--bottom">
                <li className="footer__list-item-bottom">
                  <Link
                    href="https://www.engie.nl/voorwaarden/disclaimer"
                    target="_blank"
                    className="footer__link"
                  >
                    Disclaimer
                  </Link>
                </li>
                <li className="footer__list-item-bottom">
                  <Link
                    href="https://www.engie.nl/voorwaarden/cookie-statement"
                    target="_blank"
                    className="footer__link"
                  >
                    Cookie statement
                  </Link>
                </li>
                <li className="footer__list-item-bottom">
                  <Link
                    href="https://www.engie.nl/voorwaarden/privacy-statement"
                    target="_blank"
                    className="footer__link"
                  >
                    Privacy statement
                  </Link>
                </li>
                <li className="footer__list-item-bottom">
                  <Link
                    href="https://www.engie.nl/voorwaarden"
                    target="_blank"
                    className="footer__link"
                  >
                    Voorwaarden
                  </Link>
                </li>
                <li className="footer__list-item-bottom">
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
                </li>
              </ul>

              <span className="footer__copyright">&#169; ENGIE Nederland</span>
            </div>
          </div>
        </div>
      </footer>

      <div className="c-ie-warning  is--hidden" js-hook-ie-warning>
        <div
          className="c-modal"
          id="ie-warning"
          data-modal-auto-focus="true"
          data-modal-no-body-className="false"
          data-modal-close-all-others="true"
          js-hook-modal
        >
          <div className="modal__container">
            <div className="modal__content" role="dialog">
              <div className="ie-warning__content s-rich-text">
                <h3>Browserupdate aangeraden</h3>
                <p>
                  Je browser wordt niet meer ondersteund. Gebruik Edge, Safari, FireFox of Chrome om
                  Engie optimaal te kunnen gebruiken.
                </p>
              </div>
              <div>
                <h5>InternetExplorerWarning/SubTitle</h5>
                <ul className="ie-warning__browser-list">
                  <li className="ie-warning__browser-list-item">
                    <figure className="c-image image--is-loaded">
                      <img
                        className="image__default"
                        src="https://www.engie.nl/assets/images/chrome.png"
                        alt="chrome"
                      />
                    </figure>
                    <span>Chrome</span>
                  </li>
                  <li className="ie-warning__browser-list-item">
                    <figure className="c-image image--is-loaded">
                      <img
                        className="image__default"
                        src="https://www.engie.nl/assets/images/firefox.png"
                        alt="firefox"
                      />
                    </figure>
                    <span>Firefox</span>
                  </li>
                  <li className="ie-warning__browser-list-item">
                    <figure className="c-image image--is-loaded">
                      <img
                        className="image__default"
                        src="https://www.engie.nl/assets/images/safari.png"
                        alt="safari"
                      />
                    </figure>
                    <span>Safari</span>
                  </li>
                  <li className="ie-warning__browser-list-item">
                    <figure className="c-image image--is-loaded">
                      <img
                        className="image__default"
                        src="https://www.engie.nl/assets/images/edge.png"
                        alt="edge"
                      />
                    </figure>
                    <span>Edge</span>
                  </li>
                </ul>
              </div>
              <button
                className="c-button--primary ie-warning__close-button"
                type="button"
                js-hook-button-modal-close
                aria-label="Close modalbox"
              >
                <span className="button__label">Doorgaan naar Engie</span>
              </button>

              <button
                type="button"
                className="modal__button-close"
                js-hook-button-modal-close
                aria-label="Close modalbox"
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
              </button>
            </div>
          </div>
          <div className="modal__background" js-hook-button-modal-close></div>
        </div>
      </div>
    </>
  );
};
