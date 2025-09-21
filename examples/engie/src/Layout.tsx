/* eslint-disable @next/next/no-css-tags */
/**
 * This Layout is needed for Starter Kit.
 */
import React, { type JSX } from 'react';
import Head from 'next/head';
import { Placeholder, Page, Field, DesignLibrary, ImageField } from '@sitecore-content-sdk/nextjs';
import Scripts from 'src/Scripts';
import SitecoreStyles from 'components/content-sdk/SitecoreStyles';
import { ThemeProvider } from '@/components/theme-provider/theme-provider.dev';
import { VideoProvider } from './contexts/VideoContext';

interface LayoutProps {
  page: Page;
}

interface RouteFields {
  [key: string]: unknown;
  Title?: Field;
  metadataTitle?: Field;
  metadataKeywords?: Field;
  pageTitle?: Field;
  metadataDescription?: Field;
  pageSummary?: Field;
  ogTitle?: Field;
  ogDescription?: Field;
  ogImage?: ImageField;
  thumbnailImage?: ImageField;
}

const Layout = ({ page }: LayoutProps): JSX.Element => {
  const { layout, mode } = page;
  const { route } = layout.sitecore;
  const fields = route?.fields as RouteFields;
  const mainClassPageEditing = mode.isEditing ? 'editing-mode' : 'prod-mode';
  const classNamesMain = `${mainClassPageEditing} main-layout`;

  const metaTitle =
    fields?.metadataTitle?.value?.toString() || fields?.pageTitle?.value?.toString() || 'Page';
  const metaDescription =
    fields?.metadataDescription?.value?.toString() || fields?.pageSummary?.value?.toString() || '';
  const metaKeywords = fields?.metadataKeywords?.value?.toString() || '';
  const ogTitle =
    fields?.ogTitle?.value?.toString() ||
    fields?.metadataTitle?.value?.toString() ||
    fields?.pageTitle?.value?.toString() ||
    'Page';
  const ogImage = fields?.ogImage?.value?.src || fields?.thumbnailImage?.value?.src;
  const ogDescription =
    fields?.ogDescription?.value?.toString() ||
    fields?.metadataDescription?.value?.toString() ||
    fields?.pageSummary?.value?.toString() ||
    '';
  return (
    <>
      <Scripts />
      <SitecoreStyles layoutData={layout} />
      <Head>
        <link rel="preconnect" href="https://edge-platform.sitecorecloud.io" />
        <title>{metaTitle}</title>
        {metaDescription && <meta name="description" content={metaDescription} />}
        {metaKeywords && <meta name="keywords" content={metaKeywords} />}
        <link rel="icon" href="/favicon.ico" />
        {ogTitle && <meta property="og:title" content={ogTitle} />}
        {ogDescription && <meta property="og:description " content={ogDescription} />}
        {ogImage && <meta property="og:image " content={ogImage} />}

        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <meta name="disabled-adaptations" content="watch" />
        <meta
          name="description"
          content="Wereldwijd de grootste investeerder in duurzame energie ✅ Energie, technologie en optimisme ✅ Actief in meer dan 30 landen ✅ Ontdek eenvoudig jouw voordeel op groene energie"
        />
        <meta name="robots" content="index,follow" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-config" content="/assets/images/favicons/browserconfig.xml" />

        {/* OpenGraph Tags */}
        <meta
          property="og:title"
          content="ENGIE - Energieleverancier van groene stroom en gas | ENGIE"
        />
        <meta
          property="og:description"
          content="Wereldwijd de grootste investeerder in duurzame energie ✅ Energie, technologie en optimisme ✅ Actief in meer dan 30 landen ✅ Ontdek eenvoudig jouw voordeel op groene energie"
        />
        <meta
          property="og:image"
          content="https://www.engie.nl/-/media/engie/logo/engie-logo.png"
        />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="70" />
        <meta property="og:site_name" content="ENGIE" />
        <meta property="og:locale" content="nl_NL" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.engie.nl/" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="ENGIE" />
        <meta
          name="twitter:title"
          content="ENGIE - Energieleverancier van groene stroom en gas | ENGIE"
        />
        <meta
          name="twitter:description"
          content="Wereldwijd de grootste investeerder in duurzame energie ✅ Energie, technologie en optimisme ✅ Actief in meer dan 30 landen ✅ Ontdek eenvoudig jouw voordeel op groene energie"
        />
        <meta
          name="twitter:image"
          content="https://www.engie.nl/-/media/engie/logo/engie-logo.png"
        />
        <meta name="twitter:image:alt" content="" />

        {/* Smart App Banner */}
        <meta name="apple-itunes-app" content="app-id=1046782864" />
        <meta name="smartbanner:title" content="ENGIE Energie NL" />
        <meta name="smartbanner:price" content="Gratis" />
        <meta name="smartbanner:price-suffix-google" content=" - In Google Play" />
        <meta
          name="smartbanner:icon-google"
          content="https://www.engie.nl/Resources/Engie/Images/engie-icon-180x180.png"
        />
        <meta name="smartbanner:button" content="Installeren" />
        <meta
          name="smartbanner:button-url-google"
          content="https://play.google.com/store/apps/details?id=nl.engie.engieapp"
        />
        <meta name="smartbanner:enabled-platforms" content="android" />
        <meta name="smartbanner:close-label" content="Sluiten" />
        <meta name="smartbanner:hide-ttl" content="1296000000" />

        {/* Stylesheets */}
        <link
          rel="stylesheet"
          href="https://www.engie.nl/assets/css/main.a8946fcadb8ae1b496ec.css"
        />
        {/* Favicons */}
        <link rel="manifest" href="https://www.engie.nl/assets/images/favicons/manifest.json" />
        <link
          rel="mask-icon"
          href="https://www.engie.nl/assets/images/favicons/safari-pinned-tab.svg"
        />
        <link
          rel="icon"
          href="https://www.engie.nl/assets/images/favicons/favicon.svg"
          type="image/svg+xml"
        />
      </Head>
      <VideoProvider>
        {/* root placeholder for the app, which we add components to using route data */}
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <div className={`min-h-screen flex flex-col ${classNamesMain}`}>
            {mode.isDesignLibrary ? (
              <DesignLibrary />
            ) : (
              <>
                <header>
                  <div id="header">
                    {route && <Placeholder name="headless-header" rendering={route} />}
                  </div>
                </header>
                <main>
                  <div id="content" className="antialiased">
                    {route && <Placeholder name="headless-main" rendering={route} />}
                  </div>
                </main>
                <footer>
                  <div id="footer">
                    {route && <Placeholder name="headless-footer" rendering={route} />}
                  </div>
                </footer>
                {/* <section
                    className="c-content-slot content-slot--background content-slot--background-color  content-slot--background-full u-background--grey-100"
                    js-hook-inview
                  >
                    <div className="o-container">
                      <div className="o-grid">
                        <div className="o-col-12 content-slot__header">
                          <h2 className="content-slot__title">Mooie waardering</h2>
                        </div>
                      </div>

                      <div className="o-grid">
                        <div className="o-col-12">
                          <div className="c-slider-card" js-hook-slider-card>
                            <div className="slider-card__wrapper o-grid" js-hook-slider-slides>
                              <div
                                className="slider-card__item o-col-4--lg"
                                js-hook-slider-card-item
                              >
                                <a
                                  href="https://websitevhjaar.nl/vote/engie/index.html"
                                  js-hook-customer-service-tile
                                  data-type=""
                                  className="c-card nj-card nj-card--border"
                                >
                                  <div className="card__image-container">
                                    <figure
                                      className="c-image card__image nj-card__img"
                                      js-hook-objectfit-container
                                    >
                                      <img
                                        id="image-194aad88-07e3-48a9-a197-ba8c7bac74eb"
                                        className="image__default"
                                        src="https://www.engie.nl/-/media/engie/thuis/tegel---varianten/1440x680_website_van_het_jaar_2025.png?w=10&hash=C3591938573020CE951731FEFE852104"
                                        js-hook-objectfit-img
                                        style={{ objectPosition: '50% 50%' }}
                                        alt="Logo van de verkiezing Website van het jaar 2025"
                                        data-src="https://www.engie.nl/-/media/engie/thuis/tegel---varianten/1440x680_website_van_het_jaar_2025.png?w=390&hash=F7BAF76CF436866C6E8558764CE1C365"
                                        data-srcSet="https://www.engie.nl/-/media/engie/thuis/tegel---varianten/1440x680_website_van_het_jaar_2025.png?w=370&hash=15ADD85A0DA167A7289D1DC62626140E 370w,https://www.engie.nl/-/media/engie/thuis/tegel---varianten/1440x680_website_van_het_jaar_2025.png?w=585&hash=FE66788A7AFB4AFE4D2E60C6DF83D766 585w,https://www.engie.nl/-/media/engie/thuis/tegel---varianten/1440x680_website_van_het_jaar_2025.png?w=390&hash=F7BAF76CF436866C6E8558764CE1C365 390w,https://www.engie.nl/-/media/engie/thuis/tegel---varianten/1440x680_website_van_het_jaar_2025.png?w=570&hash=D85377746BDC897018055314A9B451E6 570w"
                                        sizes="(max-width: 320px) 370px,(max-width: 480px) 585px,(max-width: 768px) 390px,570px"
                                      />
                                      <img
                                        id="image-194aad88-07e3-48a9-a197-ba8c7bac74eb-ghost"
                                        className="image__ghost"
                                        aria-hidden="true"
                                        src="https://www.engie.nl/-/media/engie/thuis/tegel---varianten/1440x680_website_van_het_jaar_2025.png?w=10&hash=C3591938573020CE951731FEFE852104"
                                        js-hook-objectfit-img
                                        style={{ objectPosition: '50% 50%' }}
                                        alt="Logo van de verkiezing Website van het jaar 2025"
                                        js-hook-shadow-image
                                      />
                                    </figure>
                                  </div>
                                  <div className="card__body nj-card__body">
                                    <h4
                                      id="Title-f4ed5925-320d-4bbd-ae90-52c847e1f687"
                                      className="card__title nj-card__title"
                                    >
                                      Website van het jaar 2025 nominatie
                                    </h4>
                                    <p
                                      id="Text-f4ed5925-320d-4bbd-ae90-52c847e1f687"
                                      className="card__text s-rich-text"
                                    >
                                      Onze website is genomineerd voor de verkiezing Website van het
                                      jaar 2025. Help jij ons winnen? Stem op ons en maak kans op
                                      mooie prijzen.
                                    </p>

                                    <div
                                      id="button-f4ed5925-320d-4bbd-ae90-52c847e1f687"
                                      className="c-button--link  button--icon  card__button"
                                    >
                                      <span className="button__label">Breng je stem uit</span>
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
                                </a>
                              </div>

                              <div
                                className="slider-card__item o-col-4--lg"
                                js-hook-slider-card-item
                              >
                                <a
                                  href="https://www.engie.nl/over-ons/kennisbank/nieuws/klantvriendelijkste-energieleverancier-2024"
                                  js-hook-customer-service-tile
                                  data-type=""
                                  className="c-card nj-card nj-card--border"
                                >
                                  <div className="card__image-container">
                                    <figure
                                      className="c-image card__image nj-card__img"
                                      js-hook-objectfit-container
                                    >
                                      <img
                                        id="image-c2e2bb50-d97d-43bd-8404-7a8a9157a9a6"
                                        className="image__default"
                                        src="https://www.engie.nl/-/media/engie/thuis/tegel---varianten/1440x680_klantvriendelijkste_energieleverancier_2024.png?w=10&hash=AE2E4909A5193ADC583E7355FBC175C4"
                                        js-hook-objectfit-img
                                        style={{ objectPosition: '50% 50%' }}
                                        alt="Logo van verkiezing Klantvriendelijkste energieleverancier 2024"
                                        data-src="https://www.engie.nl/-/media/engie/thuis/tegel---varianten/1440x680_klantvriendelijkste_energieleverancier_2024.png?w=390&hash=50D70CD41AE231FFF61C024DD6B87E1D"
                                        data-srcSet="https://www.engie.nl/-/media/engie/thuis/tegel---varianten/1440x680_klantvriendelijkste_energieleverancier_2024.png?w=370&hash=C34587AB6F2B0D903112C1CCD73C6167 370w,https://www.engie.nl/-/media/engie/thuis/tegel---varianten/1440x680_klantvriendelijkste_energieleverancier_2024.png?w=585&hash=074D2E5E02C72AD7634BBD7E50774ADA 585w,https://www.engie.nl/-/media/engie/thuis/tegel---varianten/1440x680_klantvriendelijkste_energieleverancier_2024.png?w=390&hash=50D70CD41AE231FFF61C024DD6B87E1D 390w,https://www.engie.nl/-/media/engie/thuis/tegel---varianten/1440x680_klantvriendelijkste_energieleverancier_2024.png?w=570&hash=4E8375834B7E8FD61930FA4D62A994FB 570w"
                                        sizes="(max-width: 320px) 370px,(max-width: 480px) 585px,(max-width: 768px) 390px,570px"
                                      />
                                      <img
                                        id="image-c2e2bb50-d97d-43bd-8404-7a8a9157a9a6-ghost"
                                        className="image__ghost"
                                        aria-hidden="true"
                                        src="https://www.engie.nl/-/media/engie/thuis/tegel---varianten/1440x680_klantvriendelijkste_energieleverancier_2024.png?w=10&hash=AE2E4909A5193ADC583E7355FBC175C4"
                                        js-hook-objectfit-img
                                        style={{ objectPosition: '50% 50%' }}
                                        alt="Logo van verkiezing Klantvriendelijkste energieleverancier 2024"
                                        js-hook-shadow-image
                                      />
                                    </figure>
                                  </div>
                                  <div className="card__body nj-card__body">
                                    <h4
                                      id="Title-503c20d7-1c99-4ffc-bf8a-58135b03bde6"
                                      className="card__title nj-card__title"
                                    >
                                      Klantvriendelijkste energieleverancier 2024
                                    </h4>
                                    <p
                                      id="Text-503c20d7-1c99-4ffc-bf8a-58135b03bde6"
                                      className="card__text s-rich-text"
                                    >
                                      ENGIE is verkozen tot Klantvriendelijkste energieleverancier
                                      van Nederland 2024 in onafhankelijke onderzoek van
                                      MarketResponse.
                                    </p>

                                    <div
                                      id="button-503c20d7-1c99-4ffc-bf8a-58135b03bde6"
                                      className="c-button--link  button--icon  card__button"
                                    >
                                      <span className="button__label">Bekijk het onderzoek</span>
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
                                </a>
                              </div>

                              <div
                                className="slider-card__item o-col-4--lg"
                                js-hook-slider-card-item
                              >
                                <a
                                  href="https://www.engie.nl/over-ons/kennisbank/nieuws/engie-top-3-energieleveranciers-2025"
                                  js-hook-customer-service-tile
                                  data-type=""
                                  className="c-card nj-card nj-card--border"
                                >
                                  <div className="card__image-container">
                                    <figure
                                      className="c-image card__image nj-card__img"
                                      js-hook-objectfit-container
                                    >
                                      <img
                                        id="image-7e2979e9-12bf-4fa2-99fb-6bfb741a98a8"
                                        className="image__default"
                                        src="https://www.engie.nl/-/media/engie/thuis/tegel---varianten/1440x680_beste_energieleverancier_2025.png?w=10&hash=5CB2C2A5E31F0C84227C9C1AB99BDD7A"
                                        js-hook-objectfit-img
                                        style={{ objectPosition: '50% 50%' }}
                                        alt="Image"
                                        data-src="https://www.engie.nl/-/media/engie/thuis/tegel---varianten/1440x680_beste_energieleverancier_2025.png?w=390&hash=12D106FAC7B5A14D805F35CDA817D975"
                                        data-srcSet="https://www.engie.nl/-/media/engie/thuis/tegel---varianten/1440x680_beste_energieleverancier_2025.png?w=370&hash=D420FC3EDCE2FC1BDD2AA0163CC5CE72 370w,https://www.engie.nl/-/media/engie/thuis/tegel---varianten/1440x680_beste_energieleverancier_2025.png?w=585&hash=279DEB225D218325F63D7DC1F89EF908 585w,https://www.engie.nl/-/media/engie/thuis/tegel---varianten/1440x680_beste_energieleverancier_2025.png?w=390&hash=12D106FAC7B5A14D805F35CDA817D975 390w,https://www.engie.nl/-/media/engie/thuis/tegel---varianten/1440x680_beste_energieleverancier_2025.png?w=570&hash=EDBDCEBDE7845D832B4434AAA22AA4D1 570w"
                                        sizes="(max-width: 320px) 370px,(max-width: 480px) 585px,(max-width: 768px) 390px,570px"
                                      />
                                      <img
                                        id="image-7e2979e9-12bf-4fa2-99fb-6bfb741a98a8-ghost"
                                        className="image__ghost"
                                        aria-hidden="true"
                                        src="https://www.engie.nl/-/media/engie/thuis/tegel---varianten/1440x680_beste_energieleverancier_2025.png?w=10&hash=5CB2C2A5E31F0C84227C9C1AB99BDD7A"
                                        js-hook-objectfit-img
                                        style={{ objectPosition: '50% 50%' }}
                                        alt="Image"
                                        js-hook-shadow-image
                                      />
                                    </figure>
                                  </div>
                                  <div className="card__body nj-card__body">
                                    <h4
                                      id="Title-755f012d-bbb6-4ed2-8e17-8cdbbd37d4e6"
                                      className="card__title nj-card__title"
                                    >
                                      Beste energieleverancier 2025
                                    </h4>
                                    <p
                                      id="Text-755f012d-bbb6-4ed2-8e17-8cdbbd37d4e6"
                                      className="card__text s-rich-text"
                                    >
                                      Bij Gaslicht.com is ENGIE met een 8,4 voor het derde jaar op
                                      rij in de top 3 geëindigd bij de verkiezing &doublequot; Beste
                                      energieleverancier van Nederland&doublequot;.
                                    </p>

                                    <div
                                      id="button-755f012d-bbb6-4ed2-8e17-8cdbbd37d4e6"
                                      className="c-button--link  button--icon  card__button"
                                    >
                                      <span className="button__label">Lees meer</span>
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
                                </a>
                              </div>
                            </div>
                            <div className="slider-card__footer ">
                              <div className="c-scroll-indicator u-hidden slider-card__scroll-indicator">
                                <div className="scroll-indicator__wrapper" js-hook-scroll-indicator>
                                  <span
                                    className="scroll-indicator__knob"
                                    js-hook-scroll-indicator-knob
                                  ></span>
                                </div>
                              </div>

                              <div
                                className="slider-card__controls u-hidden"
                                js-hook-slider-controls
                              >
                                <button className="slider-card__control" js-hook-slider-prev>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="svg--icons-arrow-left"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                  >
                                    <path
                                      fill="#212121"
                                      d="M16 7H3.83l5.59-5.59L8 0 0 8l8 8 1.41-1.41L3.83 9H16z"
                                    />
                                  </svg>
                                </button>

                                <button className="slider-card__control" js-hook-slider-next>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="svg--icons-arrow-right"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                  >
                                    <path
                                      fill="#212121"
                                      d="M8 0 6.59 1.41 12.17 7H0v2h12.17l-5.58 5.59L8 16l8-8z"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    className="c-content-slot content-slot--background content-slot--background-color  content-slot--background-half content-slot--background-grey-100"
                    js-hook-inview
                  >
                    <div className="o-container">
                      <div className="o-grid">
                        <div className="o-col-12 content-slot__header">
                          <h2 className="content-slot__title">Je energiezaken zó geregeld</h2>
                          <div className="content-slot__subtitle">
                            Bij ENGIE kun je al je energiezaken gemakkelijk regelen. En heb je grip
                            op je energiekosten en inzicht in je energieverbruik.
                          </div>
                        </div>
                      </div>

                      <div className="o-grid">
                        <div className="o-col-12">
                          <div className="c-slider-card" js-hook-slider-card>
                            <div className="slider-card__wrapper o-grid" js-hook-slider-slides>
                              <div
                                className="slider-card__item o-col-3--lg"
                                js-hook-slider-card-item
                              >
                                <a
                                  href="https://www.engie.nl/klantenservice/betalen/termijnbedrag"
                                  js-hook-customer-service-tile
                                  data-type=""
                                  className="c-card nj-card nj-card--border"
                                >
                                  <div className="card__image-container">
                                    <figure
                                      className="c-image card__image nj-card__img"
                                      js-hook-objectfit-container
                                    >
                                      <img
                                        id="image-f19a1783-51ef-44d4-b3d8-e1123173ad47"
                                        className="image__default"
                                        src="https://www.engie.nl/-/media/engie/thuis/tegel---varianten/tegel---270-x-170/270x170_termijnbedragadvies.png?w=10&hash=EBB53425B055922A49D948768997E22D"
                                        js-hook-objectfit-img
                                        style={{ objectPosition: '50% 50%' }}
                                        alt="Image"
                                        data-src="https://www.engie.nl/-/media/engie/thuis/tegel---varianten/tegel---270-x-170/270x170_termijnbedragadvies.png?w=390&hash=2D77577344354307B50176DF65E021A8"
                                        data-srcSet="https://www.engie.nl/-/media/engie/thuis/tegel---varianten/tegel---270-x-170/270x170_termijnbedragadvies.png?w=370&hash=05E8AE1548165C64626F0CA64658FC31 370w,https://www.engie.nl/-/media/engie/thuis/tegel---varianten/tegel---270-x-170/270x170_termijnbedragadvies.png?w=585&hash=6748DDF8B886EEEA9996BA4999D1C1CC 585w,https://www.engie.nl/-/media/engie/thuis/tegel---varianten/tegel---270-x-170/270x170_termijnbedragadvies.png?w=390&hash=2D77577344354307B50176DF65E021A8 390w,https://www.engie.nl/-/media/engie/thuis/tegel---varianten/tegel---270-x-170/270x170_termijnbedragadvies.png?w=570&hash=4841777F6D2277C9F1F7A145D9CF9863 570w"
                                        sizes="(max-width: 320px) 370px,(max-width: 480px) 585px,(max-width: 768px) 390px,570px"
                                      />
                                      <img
                                        id="image-f19a1783-51ef-44d4-b3d8-e1123173ad47-ghost"
                                        className="image__ghost"
                                        aria-hidden="true"
                                        src="https://www.engie.nl/-/media/engie/thuis/tegel---varianten/tegel---270-x-170/270x170_termijnbedragadvies.png?w=10&hash=EBB53425B055922A49D948768997E22D"
                                        js-hook-objectfit-img
                                        style={{ objectPosition: '50% 50%' }}
                                        alt="Image"
                                        js-hook-shadow-image
                                      />
                                    </figure>
                                  </div>
                                  <div className="card__body nj-card__body">
                                    <h4
                                      id="Title-174294ce-3d68-4ba7-a214-cab2860c1533"
                                      className="card__title nj-card__title"
                                    >
                                      Termijnbedragcheck
                                    </h4>
                                    <p
                                      id="Text-174294ce-3d68-4ba7-a214-cab2860c1533"
                                      className="card__text s-rich-text"
                                    ></p>

                                    <div
                                      id="button-174294ce-3d68-4ba7-a214-cab2860c1533"
                                      className="c-button--link  button--icon  card__button"
                                    >
                                      <span className="button__label">Meer informatie</span>
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
                                </a>
                              </div>

                              <div
                                className="slider-card__item o-col-3--lg"
                                js-hook-slider-card-item
                              >
                                <a
                                  href="https://www.engie.nl/klantenservice/zelf-wijzigingen-doorgeven"
                                  js-hook-customer-service-tile
                                  data-type=""
                                  className="c-card nj-card nj-card--border"
                                >
                                  <div className="card__image-container">
                                    <figure
                                      className="c-image card__image nj-card__img"
                                      js-hook-objectfit-container
                                    >
                                      <img
                                        id="image-afc86fef-a4f8-46d7-a1a0-8c63d577d097"
                                        className="image__default"
                                        src="https://www.engie.nl/-/media/engie/thuis/tegel---varianten/tegel---270-x-170/270x170_gegevens_wijzigen.png?w=10&hash=F8C8FC2A906ACB32E87AE480EB5A349B"
                                        js-hook-objectfit-img
                                        style={{ objectPosition: '50% 50%' }}
                                        alt="Gegevens wijzigen"
                                        data-src="https://www.engie.nl/-/media/engie/thuis/tegel---varianten/tegel---270-x-170/270x170_gegevens_wijzigen.png?w=390&hash=A5284E86AE4A6146EA5C271054B2C69C"
                                        data-srcSet="https://www.engie.nl/-/media/engie/thuis/tegel---varianten/tegel---270-x-170/270x170_gegevens_wijzigen.png?w=370&hash=933B9110F529DDA46009AE392BB1CC33 370w,https://www.engie.nl/-/media/engie/thuis/tegel---varianten/tegel---270-x-170/270x170_gegevens_wijzigen.png?w=585&hash=636CABF6C69234D9D2A5577A50E54A62 585w,https://www.engie.nl/-/media/engie/thuis/tegel---varianten/tegel---270-x-170/270x170_gegevens_wijzigen.png?w=390&hash=A5284E86AE4A6146EA5C271054B2C69C 390w,https://www.engie.nl/-/media/engie/thuis/tegel---varianten/tegel---270-x-170/270x170_gegevens_wijzigen.png?w=570&hash=A385E39891AAC9638728567D0C00EE85 570w"
                                        sizes="(max-width: 320px) 370px,(max-width: 480px) 585px,(max-width: 768px) 390px,570px"
                                      />
                                      <img
                                        id="image-afc86fef-a4f8-46d7-a1a0-8c63d577d097-ghost"
                                        className="image__ghost"
                                        aria-hidden="true"
                                        src="https://www.engie.nl/-/media/engie/thuis/tegel---varianten/tegel---270-x-170/270x170_gegevens_wijzigen.png?w=10&hash=F8C8FC2A906ACB32E87AE480EB5A349B"
                                        js-hook-objectfit-img
                                        style={{ objectPosition: '50% 50%' }}
                                        alt="Gegevens wijzigen"
                                        js-hook-shadow-image
                                      />
                                    </figure>
                                  </div>
                                  <div className="card__body nj-card__body">
                                    <h4
                                      id="Title-86ab3bae-5a1a-4da4-b976-781233a2f151"
                                      className="card__title nj-card__title"
                                    >
                                      Gegevens wijzigen
                                    </h4>
                                    <p
                                      id="Text-86ab3bae-5a1a-4da4-b976-781233a2f151"
                                      className="card__text s-rich-text"
                                    ></p>

                                    <div
                                      id="button-86ab3bae-5a1a-4da4-b976-781233a2f151"
                                      className="c-button--link  button--icon  card__button"
                                    >
                                      <span className="button__label">Meer informatie</span>
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
                                </a>
                              </div>

                              <div
                                className="slider-card__item o-col-3--lg"
                                js-hook-slider-card-item
                              >
                                <a
                                  href="https://www.engie.nl/product-advies/app"
                                  js-hook-customer-service-tile
                                  data-type=""
                                  className="c-card nj-card nj-card--border"
                                >
                                  <div className="card__image-container">
                                    <figure
                                      className="c-image card__image nj-card__img"
                                      js-hook-objectfit-container
                                    >
                                      <img
                                        id="image-9cb877cd-a992-4a7d-88fc-746055ef3b76"
                                        className="image__default"
                                        src="https://www.engie.nl/-/media/engie/thuis/tegel---varianten/tegel---270-x-170/270x170_verbruik_2.png?w=10&hash=7F53485924541BAA50914961172C6279"
                                        js-hook-objectfit-img
                                        style={{ objectPosition: '50% 50%' }}
                                        alt="Verbruik inzicht"
                                        data-src="https://www.engie.nl/-/media/engie/thuis/tegel---varianten/tegel---270-x-170/270x170_verbruik_2.png?w=390&hash=8D1BFF3C951BF7DB2B36395F59B8BB3C"
                                        data-srcSet="https://www.engie.nl/-/media/engie/thuis/tegel---varianten/tegel---270-x-170/270x170_verbruik_2.png?w=370&hash=2DD238909E800791A529AEB651B6685D 370w,https://www.engie.nl/-/media/engie/thuis/tegel---varianten/tegel---270-x-170/270x170_verbruik_2.png?w=585&hash=C6F698D9FBB36566BCEF958716BC2906 585w,https://www.engie.nl/-/media/engie/thuis/tegel---varianten/tegel---270-x-170/270x170_verbruik_2.png?w=390&hash=8D1BFF3C951BF7DB2B36395F59B8BB3C 390w,https://www.engie.nl/-/media/engie/thuis/tegel---varianten/tegel---270-x-170/270x170_verbruik_2.png?w=570&hash=080D7679B59BD8F1B1704E05228D1D86 570w"
                                        sizes="(max-width: 320px) 370px,(max-width: 480px) 585px,(max-width: 768px) 390px,570px"
                                      />
                                      <img
                                        id="image-9cb877cd-a992-4a7d-88fc-746055ef3b76-ghost"
                                        className="image__ghost"
                                        aria-hidden="true"
                                        src="https://www.engie.nl/-/media/engie/thuis/tegel---varianten/tegel---270-x-170/270x170_verbruik_2.png?w=10&hash=7F53485924541BAA50914961172C6279"
                                        js-hook-objectfit-img
                                        style={{ objectPosition: '50% 50%' }}
                                        alt="Verbruik inzicht"
                                        js-hook-shadow-image
                                      />
                                    </figure>
                                  </div>
                                  <div className="card__body nj-card__body">
                                    <h4
                                      id="Title-ed2bbb74-0cc5-495c-aad2-02cc0c52101f"
                                      className="card__title nj-card__title"
                                    >
                                      Verbruiksinzicht
                                    </h4>
                                    <p
                                      id="Text-ed2bbb74-0cc5-495c-aad2-02cc0c52101f"
                                      className="card__text s-rich-text"
                                    ></p>

                                    <div
                                      id="button-ed2bbb74-0cc5-495c-aad2-02cc0c52101f"
                                      className="c-button--link  button--icon  card__button"
                                    >
                                      <span className="button__label">Meer informatie</span>
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
                                </a>
                              </div>

                              <div
                                className="slider-card__item o-col-3--lg"
                                js-hook-slider-card-item
                              >
                                <a
                                  href="https://www.engie.nl/klantenservice/over-meterstanden/meterstanden-doorgeven"
                                  js-hook-customer-service-tile
                                  data-type=""
                                  className="c-card nj-card nj-card--border"
                                >
                                  <div className="card__image-container">
                                    <figure
                                      className="c-image card__image nj-card__img"
                                      js-hook-objectfit-container
                                    >
                                      <img
                                        id="image-d3ead9da-378d-4a9c-af55-925a59cd35bd"
                                        className="image__default"
                                        src="https://www.engie.nl/-/media/engie/thuis/tegel---varianten/tegel---270-x-170/270x170_meterstanden_2.png?w=10&hash=D7DDB0B5F521CA5E9FFD9C420DCC8691"
                                        js-hook-objectfit-img
                                        style={{ objectPosition: '47% 51%' }}
                                        alt="Meterstanden doorgeven"
                                        data-src="https://www.engie.nl/-/media/engie/thuis/tegel---varianten/tegel---270-x-170/270x170_meterstanden_2.png?w=390&hash=F65AAED1897FEC1D67416AF05E0195CE"
                                        data-srcSet="https://www.engie.nl/-/media/engie/thuis/tegel---varianten/tegel---270-x-170/270x170_meterstanden_2.png?w=370&hash=86961E9E8D893DEE95981122528F31E2 370w,https://www.engie.nl/-/media/engie/thuis/tegel---varianten/tegel---270-x-170/270x170_meterstanden_2.png?w=585&hash=AA3E1D5554A39EA2D01BA0FA9A922C70 585w,https://www.engie.nl/-/media/engie/thuis/tegel---varianten/tegel---270-x-170/270x170_meterstanden_2.png?w=390&hash=F65AAED1897FEC1D67416AF05E0195CE 390w,https://www.engie.nl/-/media/engie/thuis/tegel---varianten/tegel---270-x-170/270x170_meterstanden_2.png?w=570&hash=584FB1E1E1BFD0F45911E3B7D0DFDD44 570w"
                                        sizes="(max-width: 320px) 370px,(max-width: 480px) 585px,(max-width: 768px) 390px,570px"
                                      />
                                      <img
                                        id="image-d3ead9da-378d-4a9c-af55-925a59cd35bd-ghost"
                                        className="image__ghost"
                                        aria-hidden="true"
                                        src="https://www.engie.nl/-/media/engie/thuis/tegel---varianten/tegel---270-x-170/270x170_meterstanden_2.png?w=10&hash=D7DDB0B5F521CA5E9FFD9C420DCC8691"
                                        js-hook-objectfit-img
                                        style={{ objectPosition: '47% 51%' }}
                                        alt="Meterstanden doorgeven"
                                        js-hook-shadow-image
                                      />
                                    </figure>
                                  </div>
                                  <div className="card__body nj-card__body">
                                    <h4
                                      id="Title-ce7e66a0-b977-4028-b6ae-ab1ff1c4a337"
                                      className="card__title nj-card__title"
                                    >
                                      Meterstanden
                                    </h4>
                                    <p
                                      id="Text-ce7e66a0-b977-4028-b6ae-ab1ff1c4a337"
                                      className="card__text s-rich-text"
                                    ></p>

                                    <div
                                      id="button-ce7e66a0-b977-4028-b6ae-ab1ff1c4a337"
                                      className="c-button--link  button--icon  card__button"
                                    >
                                      <span className="button__label">Meer informatie</span>
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
                                </a>
                              </div>
                            </div>
                            <div className="slider-card__footer ">
                              <div className="c-scroll-indicator u-hidden slider-card__scroll-indicator">
                                <div className="scroll-indicator__wrapper" js-hook-scroll-indicator>
                                  <span
                                    className="scroll-indicator__knob"
                                    js-hook-scroll-indicator-knob
                                  ></span>
                                </div>
                              </div>

                              <div
                                className="slider-card__controls u-hidden"
                                js-hook-slider-controls
                              >
                                <button className="slider-card__control" js-hook-slider-prev>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="svg--icons-arrow-left"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                  >
                                    <path
                                      fill="#212121"
                                      d="M16 7H3.83l5.59-5.59L8 0 0 8l8 8 1.41-1.41L3.83 9H16z"
                                    />
                                  </svg>
                                </button>

                                <button className="slider-card__control" js-hook-slider-next>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="svg--icons-arrow-right"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                  >
                                    <path
                                      fill="#212121"
                                      d="M8 0 6.59 1.41 12.17 7H0v2h12.17l-5.58 5.59L8 16l8-8z"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="c-content-slot" js-hook-inview="">
                    <div className="o-container">
                      <div className="o-grid">
                        <div className="o-col-12">
                          <div className="c-feedback" js-hook-feedback="">
                            <div className="o-grid">
                              <div className="o-col-12 o-col-6--md feedback__score">
                                <h3 className="feedback__title">
                                  <span className="feedback__title-score u-text--gradient u-h1">
                                    8,0
                                  </span>
                                  Van onze klanten gekregen
                                </h3>
                                <a
                                  className="feedback__logo"
                                  rel="noopener"
                                  href="https://www.feedbackcompany.com/nl-nl/reviews/engie-nl/"
                                  target="_blank"
                                  title="Ga naar website van feedback company"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    className="svg--icons-feedback"
                                    width="93"
                                    height="26"
                                    viewBox="0 0 93 26"
                                  >
                                    <image
                                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAAAlCAYAAABh2FqVAAAABGdBTUEAALGOfPtRkwAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAg6ADAAQAAAABAAAAJQAAAACj008VAAAWLElEQVR4Ae1bB3xWRbafmdvyfekJTZIgCM9CIPlClBKCgiCCGMACtvfbXdsqKCxvV5+oq2btZVdd9Ymu+vNZwFWUBUJZsRAhCUUiCUk2lAiIoYaQkPa1e2fef25yPwmE0IKrTwZu5t6ZM2fOnDlz5pwz81HSkWnd61pfv7iOMf4oEeRsQiil+HO8XQiCVkQ0Af7vjSzw4LbBM/Yeb9szcKfOAfXUUfyA4QKv/xKmqK8TQV0nIgQOhuY2NFxQcrNbGArKb3bqzuSnnwMdKgyMqZOgCFwgu8S0xB8YEwdPZAhcoQq1xA0KYVPRblTXT58L33v5vY0ngqMt2OTkZF2P6xFNGgipCotoqFw119sWXEeX9Rw+PEz1unSjwcvLynLROyGSFn9EjzD5XrFmqSzj8v10p5SU0eFNLkUx93oD27fn+trqr0OFAZvC2XJ1Q9cvLx829fO2OjxWWfKKl+qEym4Gnsg4V1QU9olTEoaUzAmDVEqfRL8pJJLQzjy4LTLtimvL1y/57li0nGp9rBn9CNXpjSLW2ArBGLs9N9dnxPT+rcHYveBSIC3jilHrC04/HXIcSpTr4yhK+4pEdc727eT+tsbWocLgdECJgDycXGIq5aHG7pPD4bTq6Rkeg73mLXz3tWVUED8mIYoFmqodmNOZYxzxjNIeggif6fdDvqEGGI1S7DLiZ0Q/Lfxvc0yMdqOE9sAWHtdmPQptYt4t3hPuU/b3DQolllmWTfTRGjjllhBcYa7iKal99jllP7U80hXZrXkyqEB6kgcC71mUh0Fln5K2+amNs6PoUV9aXZzYSKvnU07TFMgtYcclC5AiuRsEPstevnxc9ogRZkcR1JF4BGFYBVQKvAVxKFXCDMXbaO7Cd4vySdeSMzp7FKL3ZpTX+YLeNRvXfnGE1ujTZ6wR3llJZSo7h5u0pqbBXLujZHHN4bSmDBqbSFVtILOEtzKsfiW16FH5Au5xPxRVytAx56lE9XCLVRatXrha0noo3u7pWe5OKkmBxuwNfUuZyUvWr11UejicbHP+wJHxGnMPhAsXQxnfc7Cxcf32otzaQ/Ed9k77Z47rpTHdCJgioOpu9RUADAB3pEo4gRVDYfjwLWVVVS2MPaybf/NnWuaE6RCEB6CibWONKPQdOQHuMPoYSHsqZciVI1VVexZj7osB6JQy4WaR+zyZ418vylv4KGDscaUOHT9CYewvcJD7QsVqqip4fKxWHZ85/pX1eXVPE5IrJ5ylZV41g1KBvZjGARVPMmMr0F0lvOs2OSH5rTHjMVRnoY2bKSI4YNjEb0y/ddOGtTnbZCPPkKyJTFX+ir67yr5BEiWK4ksbNrEgGKi/qXTNF7brnZw8STfiAk+g+leUkTgIDXZH1YyL1Ha4Mq4YWd6WXTJ8uJoWjHoY4/4dtCbTmLhLrprLbWoFeSJIzHdUXbeZYJe188fyesX+iordcydPbiXJ7TT5casoDaLDcjA7XgiwSPA1nIhaCMe3fQaNjVJV9QXUJ2PCipF/LDjtDaZfzyi71zN0fEFR/sLP5EpXKHsb9T1g838D2LlgTl/svTdgjT7kyYzaVJRH5sJIvQgC8CjKw8HY3YAphOJMoIRdgrZHSdQN2kZggj+H2HWDQKTje4iiK3ejwR9kI5MqJToldcBXDPrLIHOxjIobUHWppkc9jvwOPMKI9s9AXzOg1eV+KMezA2ZbItrtKNebduI7lKBcBIEgeKyomyEIdj9yCy1SD86Btqe6tPc4J/OnpaVuC7X6mb+sXzn/9ZTBWWuopqzEULSAad5fajSuJStzrbShE2+B5yM1Qn0wSH5dsmpBSc+ew8NiE2POwoSMAU+xwtNzFU2/FGKUAPYc8Fv8+rJVCytsuKToBAjNSCYgFITMxTK8ChPqBj7OLTqlSK9ZfN7uKJe7M8tBP5e0zUpBOeczi/LrZndOJmFJcTGfQCBGo//xnc4bmr1/U359acH8b89JH5W5NdJsJCuggdLTtXR3UhJwXoE5GwF30WWFU0Mo9E6UqcBX1ujll28urK9NHOLXwg8wlWzKD21VmHSZ6tLMmBsA/xKEX+eE/6Uob8FToJGrQGrrMR2o2ib6Z1vKLS4s20LGEKCGLZLbrNKxOEaB8QrWiKYp9I/YUpr9bkp6g0koJr2TkyMNMOtCW+WC0YbKHgGczSNMWILNFUqxooGJ0XOgFSjhYl+D4i+Q/WyCoKV1nigF8SjCQE1oqXVym6kqIw1JwyZ+AdjR6Ltb17iIrvvRXtoAYZp7jCdI09mwCV0wVS7Q40FPsjfdHxnGXCaPxwq3PQSQ/tnmwhw0JaRyFQkJgfx2EmhNQvPrpEKBAM/ldd4/oc4el8MrB/YXkE8Cz4LN7hUlmHCsRnDGGTgmSBqGjaQz/po0HgKB/0JGRcehoQOGBjacDJ1LVroIAxJKGowD3lBAC2u/Dh5+qE2rFwpvjFO/UwZRrZemLrSSykiYC9Ep3W1Ezkb9aDwBPLsZI7XopNkGkuKAhO1NR2Z3glV/zPA9hBaCIOUdIyDkPO4Ki0B721bEEH5paS4H0/bIUWOVVZnCHEm55Tn0sUzzsrJc2/104L7jfnPQoTDy3e8L/KeNhwo7uoj3aBoRFS7LZMI+Htv81sZfQVTBSEyoRuFnyXdMkD8o/PX9YnpfAgwj8JjYe2b6TW+6r7p2GNR6XqgNXkwVAiUgSkgQ2l52Jj/aSBBmKUFeSNAsVDfiI0XT2TMO6C9QGIjk3MdYFzIAFUs5uyhY568uVOt3NVTRmoBlRTeqllyJcgOVaj4IFiYQVbnEhsvbtbtB0BofQVuXCQvfFqpSuRljOuJUhV6Tnj4qOnnI+D5gvFzVbSbgVGDXTkobNrZzyoXj+mHFXy0BBRfbfHt8exQGDwIuAXCYiMJtKFvlr9MiYzphZf/HoQiZYlWj4+ZYD2VjPBkTU+EuxnoGj+mZljHh2sTEIa5D4QE775u8gzMgYA+hPAD8k1Izx9+CdyieX2DakLdgkeBkBRhrwG18VYt2Fw6wYlYgllCiqcaaSEu7QLKlrqlhOZhXgnlGBJnOUqNc69IyE1eEM1ZiUHWdTlwZEs4XCM5FVouVhnM69hIJj9gEG0Na9f1lfVtJCg+2hHuwU23R3PrXjLFkCYfi2fbZARfrIaxeCG2Yoipz0jKjv1Q0WgiaewIslEryFtdAWF5HgdQOSUwha3SmbWF62EYYvy/G9oxr2VZamgiOrS3XbNhrzoL4roBQunEk9FrqkIkXHr8wZAs27jH/BeOeNK/OetqcnPW4/5qRT9bFh6j6Cb5gacOIolVgcRUxFelqOkkEiHUbrO+XwGwEoejZeNKlpoCeLg76g7Y7trXw84NNnI+HQLyGhlUw1HqCeQOwmmJR9k2Q0wqJcOPaJVtMIX6NidyE9kEwWXoWOZbgU1C2D/DVqmGgCMuP0ybU70P5BwjiPgjavHjHJi72c0u8bNWZb0m44vycctD3HHR/NRU0Fv3254J/aVnWJLT/Du32G/U+2/Aza7a8bFl8JpptwziwDeIURhAIEv2qvrLRtmEQVKyx+4VhKvFXVCz1Wz7fNBi9RfiswbWDB+hrG8pshArlntv7998gAQ9Pw7OFGqEHHoEl+jvURWBwtgWC0b25aKb+Wwe+X/6rObBrxqHTd8p2xt9GTiIG0b/g5fOxna5FH9zU2QXlF96x28F/ErnSZ9jYOHlaWbHeC8PQ9iZaoZEWu0JciYyqKhXWgQ0HyneBUyHDzgHukza2c4SLJlgMXkiAHdjQGLaTlM2V20kowQ2MjjL0Xj5GmjbmNW1Ff0L2b5jcKlv16QEJ2D093e12dwlvalIbdxXmNPUbNLIro+4EK0j2lxXm7Agha36hiHUkcKF1CxJf9aa1yyAERIBmGMBREMJ/SJy2kElwREqjXJ31s4li6thb9pcXhFfC85Uag8itw0u5quzTfJs2LbQFwm6DmAvRYUgjHZcwjHsicAvUz6uAR0zCjlRyQXHYzPmTix4wHpeIZErOe+VhypRsvDZCIBZB50nLvN0kqFXe1L36je29sm33roOFod2+z1S25gCcmfZTevYuNyyL32OlGpjgPOjd6VRojRbx88qA0UqS/X4+2whjk6HS+jJE81q8n/Y7EKoVvqvL5OT8WY+U7fzyq/aBz9SeTg4cUxhchlsGX6RliyTyl95vrG9+P/Jvxcjp3/bOn3WpS5A/Yw+8GPrLtraPhHRKIDZUSAt5KPauJX27j3jUr7DFuhXSfA7gmfxH4MAxheFEafh26JR95KOPbu7TY0+46bXaNVDD/YLxyLArYIU/BnvkbCZENvbXG6FRpAXcHNA5UQLOwJ80B44QhtfXrdN2b91KsydPbmUcnVAPMBxhZiP6dlzp/XNXvloA//wpbC3jYMbYLtZxtTwD1KEcaLVyX1i37iyuuz7sen7y27incISgdGjPhyDbPGzq1n9Vxt8In+w3cLNwsigtZPjh9Qjfn0k/GgdCE25ydqtLd2Flkl6YgZqzunaV0flTcevsQYybWRvLosP/C8fHle7e2ltzJ1Pb1TlihNAmmwj55NyCl0s1oUyHsdpQVpWLGMGppX4ZE3vjrP52aBzEEWDDCLKT+/ifi9cttG2f5PSsHrpbuRPlF8p6+Mxbg5y/U1KwMA8922536pArB1JVuZ4GyJuAuBXliDUIH+dieVHBzhdSMhNG4hLvr2AAJQBPtcWtecX+nR+SwkI7toFT0lsRYNBRXqowTbbviX7qLCL+UZy34D18wy5vTvb9CcomgBYZ+ML8iO8Qj/7bhvyc1S0gNG3ohOxA0Jqn67QvztuuAa4umLMqhCsWFmk1syVcWjD6IZxF1xTl57zY0s7OOicPj0iKjX7askhO8aoFnx5aF9IM2LenoeIcEHEAwZDn7+jb95QFQXYkosKGIirxR4WSZ31bW077DqWg9bvYnDFtY9nQqVPLMqf+N5nc7CO3Bjn+r/PSLuuuMzIfkyQDR/lgzhJQZFmqZbuxyRdd0c1wK/MxsWMw75+ifg7CP500hS3xZIwf6/SECyY9GKG3U43NAR4c7Ii3EdDZxhT6oCcj6TmVsicwxi0IGr2NmI+iKGyWR0sY2NIecUkxmAp2n0q1N1C2C/Hw/0Wo+4DC6PNpmVnyTkFoHnA0Pgl9JCHA9Akiix9CiM8H/o+l0Dr4YF+NMwz1eQjC3YBdi9NZ9EsQ0RSvesyITHlqivncB1z3nDvkyoSWdnbWPSZ2NI5ZJ5vE9+2h5fLd0QzwHGHPC54XNOn0lRXl8lpVhySqqDoO6CC8uHoT9B/Du+iQLh0k1OV23wMmuQNN/tGlhUudwSsAsFe8Zqh3YOCdg35+sXO7CNfMZnd1sTeYwv6E9+UyMCQRQqBcFufvF+XrLzQHcibNHjAs4EL85W5ECsfKyzASrt+g8UuxYr8mKhuFz3xZZidGY6ygGF28av7X+AY7hr8/YFj0ARxSzuh30YQ5pV8v+F7C7fVa9+yKrA+0HLeT5EET8gyd5qlhymBU75AwMkELeILcN7C0oHlcCHjNi3VF5FKiTkZ1bl1j4KOoCOM+t8KuxfdfZRt5H0Jh4g40XosgmMMPu0r+gcCTPcjl7ZwHdUO7cvqAfsUdeXtJ4LZHqLcf8QXMicJ5wgSI+CeHCIKkQG5TInHIEBfOBq6GjbLQEQRZKSc/GBTP4LV3vCFSZZlM2La8pulf5kT0ZI4y7Gw4emZBGdK1U6m58wCAd8Jl7uaUyRwBusqDu2tlhBeslikXQUK6EJ/RqmL1bi5r7p/k1lMZGcX2lKCrAnfEaRB3GqMdGJlDg62AIGxzymToHBJeDmYnoYxWrF9aDfryoJYmSiGQcKn6WV2QpcNzz0HeQoesaU5qoNEcqLlIYEpq6k/2lrND7InkbhYehfF2guqXE3ZEClNjIrC6ukIdlx9e6SPB7RoxggpTeqFuVXO9COJqYyiMK8ugLTgeX5282eqkyEh5oCzLQ6rfhmW0Lj6+3tq+3QGUsxHAuYgBnalJ+0wm5snIymIKbCYqzsOZhI4Zk5osphUyFEDbbkVmazjkdsLWIwXdAeUwv9+DvfTuuaxb0mZCthKmDUIThou6rWyFluZEnT44tdL5+P+UK6oFRqngD65+tZFUf4BTw5CBEP3waoNxeXQstWbIvUZgTOBk8YjVdHjbo31jlcJsOiwJnENiA8U/aUAy3L28D31MAeXPKqZYYUL4hM7jNKb98/B1LAXxMGxHfFb7vv+qmyuxwq2rU3BZ5kGF8VuwAOYVrZ6/4whgFLTJqLYAf25lZl3DQSU2ejfmcABol/PQaiI3WrV1aSJyMwqxWuzVFGKuprhSZFkwILCgOiaBgHifD1fpcD/CwQg56IP+sVPx3bikG4ErDnfhfVFx/oJXHBjPoCtViKvUDiecdhUWNnXJTHyPKuwBT2SvxWDDIEtYuI3dWqM4iB2V4nx3eK4QJbIFKW4kGlKN/ShJ/rYRrt/b8gJJyqAsOeFOkoLBpNsHi/k1HEJe3j/jylC9B7/CglX+PFbyutI1df9yGp16TpP02JirgMdRELhGoNwMrbA3EFS3SPw4A8L5H5UC05KGq0Rjt6EMW97JJfyGYxkiu1FwjX8PDLVWbf1RnYOT0wy42zBG9+I3jOp1ELJDiG9NMFQ0VK11GdwwLABafPAg2dsa4vR+WfXWG1o0Hazq7EP81iAfazAImpLgij1dXDB/2Z5676Lu0a4PNEV9F5ddC1DnxV4tNUmYSYL3SyOvwygUAr+hINM8F0+4inG4l5T0h1T0sEw+bePaBfIomiDG8Awu2zwCWj9uNkLp+RBKGILC9jROhpZvAju/G6AmLcM2lwU8r7X3a7ITFoZRTx+IDuPmHZSpD4M4NxjoSHqbtLYIQpWwzOxVL2jeNoFOU2EJfvXUp0+fG9xdkrNURYzmCCrBql/C603p3pG9G5Y1Qjrv6j8063KVKlmCCQPXzt456G18X1rnDllcBDdQoT+C6272pIXKLWs5bjfUGQ0RdtzCLs/N5SRz4itwN+1byg4slvzueuK7KsIybsLdRw8meXXQDN5ZunpxuQNTnL/wldQhWdsVBROHG0gIUr3VuNdcEN7VmGCZZGMLHBYWf1GYbQgIFx9gPuS5DmBaEjSgmXHW31VFvdQ0g2+2qnNgWvJ2J1LCZD5VGxtL3ZsB2AmStRRF8pTRA8mW1+z3YLIr4De1oGudgTDETUhJ0Ay8+SkPLyHZxzZ6WmPo0C85Vvm0TewP6vsHRnZM9zRt2IS/QdUn08bvLylsjkrK7flodMhenXk5ZVrS4VZyV+InwKmtz1sgI8xH7feENAMGdDmokzq/CYLwsWmKhyI26NvRQZtpriyde5Twc5stTmuhZGx7zG2vrqMJO+qEtHTUEbRA4CZRK8w/XCF0uMnJVOBut9/jEgaoNGgthx8U6o/PyLnfmOOUnMnb5wBYZwtiYftgHVYrfygc2dX4H8SqeiDccaE8Q6nyV847VgfH9CZUf7Tc53FDmPjwvBfwWRk5M/UPjoX4TH2IAzCXyCd4ZsGD+VG8KVx2NaG5/4lDgKWwkX4TqD14k3QzQxQd5eX/AJDWK9fasw64AAAAAElFTkSuQmCC"
                                      width="93"
                                      height="26"
                                      x="390"
                                      y="617"
                                      fill="none"
                                      fill-rule="evenodd"
                                      transform="translate(-390 -617)"
                                    />
                                  </svg>
                                </a>
                                <div className="feedback__footnote">
                                  90% van onze klanten beveelt ons aan, op basis van 3500+
                                  waarderingen
                                </div>
                              </div>
                              <div className="o-col-12 o-col-6--md feedback__slider">
                                <div className="feedback__slider-wrapper" js-hook-slider-slides="">
                                  {' '}
                                  <div className="feedback__slider-slide" js-hook-slide="">
                                    <h3 className="feedback__slide-title">
                                      <q>
                                        Goede ervaringen, makkelijk en vriendelijk telefonisch
                                        contact
                                      </q>
                                    </h3>
                                    <div className="feedback__slide-stars">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="svg--icons-star-filled"
                                        width="24"
                                        height="22"
                                        viewBox="0 0 24 22"
                                      >
                                        <path
                                          fill="#FFF"
                                          fill-rule="evenodd"
                                          d="m12 18-7.053 3.708 1.347-7.854L.587 8.292l7.886-1.146L12 0l3.527 7.146 7.886 1.146-5.707 5.562 1.347 7.854z"
                                        />
                                      </svg>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="svg--icons-star-filled"
                                        width="24"
                                        height="22"
                                        viewBox="0 0 24 22"
                                      >
                                        <path
                                          fill="#FFF"
                                          fill-rule="evenodd"
                                          d="m12 18-7.053 3.708 1.347-7.854L.587 8.292l7.886-1.146L12 0l3.527 7.146 7.886 1.146-5.707 5.562 1.347 7.854z"
                                        />
                                      </svg>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="svg--icons-star-filled"
                                        width="24"
                                        height="22"
                                        viewBox="0 0 24 22"
                                      >
                                        <path
                                          fill="#FFF"
                                          fill-rule="evenodd"
                                          d="m12 18-7.053 3.708 1.347-7.854L.587 8.292l7.886-1.146L12 0l3.527 7.146 7.886 1.146-5.707 5.562 1.347 7.854z"
                                        />
                                      </svg>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="svg--icons-star-filled"
                                        width="24"
                                        height="22"
                                        viewBox="0 0 24 22"
                                      >
                                        <path
                                          fill="#FFF"
                                          fill-rule="evenodd"
                                          d="m12 18-7.053 3.708 1.347-7.854L.587 8.292l7.886-1.146L12 0l3.527 7.146 7.886 1.146-5.707 5.562 1.347 7.854z"
                                        />
                                      </svg>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="svg--icons-star-filled"
                                        width="24"
                                        height="22"
                                        viewBox="0 0 24 22"
                                      >
                                        <path
                                          fill="#FFF"
                                          fill-rule="evenodd"
                                          d="m12 18-7.053 3.708 1.347-7.854L.587 8.292l7.886-1.146L12 0l3.527 7.146 7.886 1.146-5.707 5.562 1.347 7.854z"
                                        />
                                      </svg>{' '}
                                    </div>
                                    <div className="feedback__slide-date feedback__footnote"></div>
                                  </div>
                                  <div className="feedback__slider-slide" js-hook-slide="">
                                    <h3 className="feedback__slide-title">
                                      <q>
                                        Fijn om elke maand een overzicht te krijgen van je verbruik
                                      </q>
                                    </h3>
                                    <div className="feedback__slide-stars">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="svg--icons-star-filled"
                                        width="24"
                                        height="22"
                                        viewBox="0 0 24 22"
                                      >
                                        <path
                                          fill="#FFF"
                                          fill-rule="evenodd"
                                          d="m12 18-7.053 3.708 1.347-7.854L.587 8.292l7.886-1.146L12 0l3.527 7.146 7.886 1.146-5.707 5.562 1.347 7.854z"
                                        />
                                      </svg>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="svg--icons-star-filled"
                                        width="24"
                                        height="22"
                                        viewBox="0 0 24 22"
                                      >
                                        <path
                                          fill="#FFF"
                                          fill-rule="evenodd"
                                          d="m12 18-7.053 3.708 1.347-7.854L.587 8.292l7.886-1.146L12 0l3.527 7.146 7.886 1.146-5.707 5.562 1.347 7.854z"
                                        />
                                      </svg>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="svg--icons-star-filled"
                                        width="24"
                                        height="22"
                                        viewBox="0 0 24 22"
                                      >
                                        <path
                                          fill="#FFF"
                                          fill-rule="evenodd"
                                          d="m12 18-7.053 3.708 1.347-7.854L.587 8.292l7.886-1.146L12 0l3.527 7.146 7.886 1.146-5.707 5.562 1.347 7.854z"
                                        />
                                      </svg>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="svg--icons-star-filled"
                                        width="24"
                                        height="22"
                                        viewBox="0 0 24 22"
                                      >
                                        <path
                                          fill="#FFF"
                                          fill-rule="evenodd"
                                          d="m12 18-7.053 3.708 1.347-7.854L.587 8.292l7.886-1.146L12 0l3.527 7.146 7.886 1.146-5.707 5.562 1.347 7.854z"
                                        />
                                      </svg>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="svg--icons-star-filled"
                                        width="24"
                                        height="22"
                                        viewBox="0 0 24 22"
                                      >
                                        <path
                                          fill="#FFF"
                                          fill-rule="evenodd"
                                          d="m12 18-7.053 3.708 1.347-7.854L.587 8.292l7.886-1.146L12 0l3.527 7.146 7.886 1.146-5.707 5.562 1.347 7.854z"
                                        />
                                      </svg>{' '}
                                    </div>
                                    <div className="feedback__slide-date feedback__footnote"></div>
                                  </div>
                                  <div className="feedback__slider-slide" js-hook-slide="">
                                    <h3 className="feedback__slide-title">
                                      <q>
                                        Positief; duidelijke informatie, goed werkende app. Stuurt
                                        informatieve nieuwsbrieven
                                      </q>
                                    </h3>
                                    <div className="feedback__slide-stars">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="svg--icons-star-filled"
                                        width="24"
                                        height="22"
                                        viewBox="0 0 24 22"
                                      >
                                        <path
                                          fill="#FFF"
                                          fill-rule="evenodd"
                                          d="m12 18-7.053 3.708 1.347-7.854L.587 8.292l7.886-1.146L12 0l3.527 7.146 7.886 1.146-5.707 5.562 1.347 7.854z"
                                        />
                                      </svg>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="svg--icons-star-filled"
                                        width="24"
                                        height="22"
                                        viewBox="0 0 24 22"
                                      >
                                        <path
                                          fill="#FFF"
                                          fill-rule="evenodd"
                                          d="m12 18-7.053 3.708 1.347-7.854L.587 8.292l7.886-1.146L12 0l3.527 7.146 7.886 1.146-5.707 5.562 1.347 7.854z"
                                        />
                                      </svg>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="svg--icons-star-filled"
                                        width="24"
                                        height="22"
                                        viewBox="0 0 24 22"
                                      >
                                        <path
                                          fill="#FFF"
                                          fill-rule="evenodd"
                                          d="m12 18-7.053 3.708 1.347-7.854L.587 8.292l7.886-1.146L12 0l3.527 7.146 7.886 1.146-5.707 5.562 1.347 7.854z"
                                        />
                                      </svg>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="svg--icons-star-filled"
                                        width="24"
                                        height="22"
                                        viewBox="0 0 24 22"
                                      >
                                        <path
                                          fill="#FFF"
                                          fill-rule="evenodd"
                                          d="m12 18-7.053 3.708 1.347-7.854L.587 8.292l7.886-1.146L12 0l3.527 7.146 7.886 1.146-5.707 5.562 1.347 7.854z"
                                        />
                                      </svg>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="svg--icons-star-filled"
                                        width="24"
                                        height="22"
                                        viewBox="0 0 24 22"
                                      >
                                        <path
                                          fill="#FFF"
                                          fill-rule="evenodd"
                                          d="m12 18-7.053 3.708 1.347-7.854L.587 8.292l7.886-1.146L12 0l3.527 7.146 7.886 1.146-5.707 5.562 1.347 7.854z"
                                        />
                                      </svg>{' '}
                                    </div>
                                    <div className="feedback__slide-date feedback__footnote"></div>
                                  </div>
                                  <div className="feedback__slider-slide" js-hook-slide="">
                                    <h3 className="feedback__slide-title">
                                      <q>
                                        Zeer tevreden. Ik krijg altijd eerlijke adviezen. De klant
                                        staat voorop!
                                      </q>
                                    </h3>
                                    <div className="feedback__slide-stars">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="svg--icons-star-filled"
                                        width="24"
                                        height="22"
                                        viewBox="0 0 24 22"
                                      >
                                        <path
                                          fill="#FFF"
                                          fill-rule="evenodd"
                                          d="m12 18-7.053 3.708 1.347-7.854L.587 8.292l7.886-1.146L12 0l3.527 7.146 7.886 1.146-5.707 5.562 1.347 7.854z"
                                        />
                                      </svg>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="svg--icons-star-filled"
                                        width="24"
                                        height="22"
                                        viewBox="0 0 24 22"
                                      >
                                        <path
                                          fill="#FFF"
                                          fill-rule="evenodd"
                                          d="m12 18-7.053 3.708 1.347-7.854L.587 8.292l7.886-1.146L12 0l3.527 7.146 7.886 1.146-5.707 5.562 1.347 7.854z"
                                        />
                                      </svg>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="svg--icons-star-filled"
                                        width="24"
                                        height="22"
                                        viewBox="0 0 24 22"
                                      >
                                        <path
                                          fill="#FFF"
                                          fill-rule="evenodd"
                                          d="m12 18-7.053 3.708 1.347-7.854L.587 8.292l7.886-1.146L12 0l3.527 7.146 7.886 1.146-5.707 5.562 1.347 7.854z"
                                        />
                                      </svg>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="svg--icons-star-filled"
                                        width="24"
                                        height="22"
                                        viewBox="0 0 24 22"
                                      >
                                        <path
                                          fill="#FFF"
                                          fill-rule="evenodd"
                                          d="m12 18-7.053 3.708 1.347-7.854L.587 8.292l7.886-1.146L12 0l3.527 7.146 7.886 1.146-5.707 5.562 1.347 7.854z"
                                        />
                                      </svg>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="svg--icons-star-filled"
                                        width="24"
                                        height="22"
                                        viewBox="0 0 24 22"
                                      >
                                        <path
                                          fill="#FFF"
                                          fill-rule="evenodd"
                                          d="m12 18-7.053 3.708 1.347-7.854L.587 8.292l7.886-1.146L12 0l3.527 7.146 7.886 1.146-5.707 5.562 1.347 7.854z"
                                        />
                                      </svg>{' '}
                                    </div>
                                    <div className="feedback__slide-date feedback__footnote"></div>
                                  </div>
                                </div>
                                <div className="feedback__slider-footer">
                                  <div className="c-scroll-indicator u-hidden feedback__slider-scroll-indicator">
                                    <div
                                      className="scroll-indicator__wrapper"
                                      js-hook-scroll-indicator=""
                                    >
                                      <span
                                        className="scroll-indicator__knob"
                                        js-hook-scroll-indicator-knob=""
                                      ></span>
                                    </div>
                                  </div>
                                  <div
                                    className="feedback__slider__controls-wrapper"
                                    js-hook-slider-controls=""
                                  >
                                    <button
                                      className="image-with-slider__control"
                                      js-hook-slider-prev=""
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="svg--icons-arrow-left"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                      >
                                        <path
                                          fill="#212121"
                                          d="M16 7H3.83l5.59-5.59L8 0 0 8l8 8 1.41-1.41L3.83 9H16z"
                                        />
                                      </svg>
                                      <span className="u-sr-only">Ga naar vorig item</span>
                                    </button>
                                    <button
                                      className="image-with-slider__control"
                                      js-hook-slider-next=""
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="svg--icons-arrow-right"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                      >
                                        <path
                                          fill="#212121"
                                          d="M8 0 6.59 1.41 12.17 7H0v2h12.17l-5.58 5.59L8 16l8-8z"
                                        />
                                      </svg>
                                      <span className="u-sr-only">Ga naar volgend item</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    id="TextAndTitle-54bc18ea-78fb-4194-bee4-c153fccd909e"
                    className="c-content-slot"
                    js-hook-inview=""
                  >
                    <div className="o-container">
                      <div className="o-grid">
                        <div className="o-col-12 o-col-7--md">
                          <div className="c-title-text s-rich-text">
                            <h2
                              id="Title-dd6b0458-f29a-4e76-8703-24bd0941c015"
                              className="title-text__title"
                            >
                              Kies voor het gemak van ENGIE
                            </h2>
                            <p>
                              We weten allemaal dat we <strong>de aarde goed achterlaten</strong>{' '}
                              voor volgende generaties. En niet morgen maar het liefst vandaag nog.
                              Daaraan bijdragen kan <strong>op allerlei manieren</strong>. Welke
                              vorm jij ook kiest, ENGIE helpt jou daarbij. Of het nu gaat om{' '}
                              <a href="https://www.engie.nl/product-advies/energie-besparen">
                                energie besparen
                              </a>
                              , zelf stroom opwekken met{' '}
                              <a href="https://www.engie.nl/product-advies/zonnepanelen">
                                zonnepanelen
                              </a>
                              , minder gas gebruiken via{' '}
                              <a href="https://www.engie.nl/product-advies/isolatie">isolatie</a> of
                              een{' '}
                              <a href="https://www.engie.nl/product-advies/warmtepomp">
                                warmtepomp
                              </a>{' '}
                              of het plaatsen van een{' '}
                              <a href="https://www.engie.nl/product-advies/laadpalen">laadpaal</a>{' '}
                              voor jouw elektrische auto. Weet je nog niet waar je moet beginnen?
                              Dan geven we je graag{' '}
                              <a href="https://www.engie.nl/product-advies/woningscan">
                                persoonlijk energieadvies
                              </a>
                              . Dat is <strong>het gemak</strong> van ENGIE.
                            </p>
                            <p>
                              De <strong>eerste groene stap </strong>is snel gezet. Door te kiezen
                              voor onze{' '}
                              <a href="https://www.engie.nl/energie/groene-stroom">
                                Nederlandse&nbsp;groene stroom
                              </a>
                              . Klant worden? Dat is z&oacute; geregeld.&nbsp;Binnen 1 minuut kun je
                              jouw{' '}
                              <a href="https://www.engie.nl/energie/energiekosten-berekenen">
                                energiekosten berekenen
                              </a>{' '}
                              en overstappen. Ondertussen bouwen wij samen met onze partners aan{' '}
                              <strong>nieuwe duurzame bronnen</strong> om Nederlandse{' '}
                              <a href="https://www.engie.nl/verduurzamen/zonne-energie">
                                zonne-energie
                              </a>{' '}
                              en{' '}
                              <a href="https://www.engie.nl/verduurzamen/windenergie">
                                windenergie
                              </a>{' '}
                              op te wekken. Zo maken we samen{' '}
                              <strong>heel Nederland duurzaam</strong>.
                            </p>
                            <p>
                              Als klant van ENGIE krijg je altijd{' '}
                              <strong>100%&nbsp;Nederlandse groene stroom</strong>. Zo woon je
                              duurzamer zonder extra kosten. Al meer dan{' '}
                              <strong>300.000 klanten</strong> gingen je voor!
                            </p>
                          </div>
                        </div>
                        <div className="o-col-12 s-rich-text">
                          <div className="o-grid"></div>
                        </div>
                      </div>
                    </div>
                  </section> */}

                <div className="c-section-scroll-indicator" js-hook-section-scroll-indicator></div>
              </>
            )}
          </div>
        </ThemeProvider>
      </VideoProvider>
    </>
  );
};

export default Layout;
