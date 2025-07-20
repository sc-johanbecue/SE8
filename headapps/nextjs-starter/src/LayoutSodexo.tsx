/* eslint-disable @next/next/no-css-tags */
/**
 * This Layout is needed for Starter Kit.
 */
import React from 'react';
import Head from 'next/head';
import {
  Placeholder,
  LayoutServiceData,
  Field,
  HTMLLink,
  ImageField,
} from '@sitecore-jss/sitecore-jss-nextjs';
import config from 'temp/config';
import Scripts from 'src/Scripts';

// Prefix public assets with a public URL to enable compatibility with Sitecore Experience Editor.
// If you're not supporting the Experience Editor, you can remove this.
const publicUrl = config.publicUrl;

interface LayoutProps {
  layoutData: LayoutServiceData;
  headLinks: HTMLLink[];
}

interface RouteFields {
  [key: string]: unknown;
  Title?: Field;
  OgTitle?: Field;
  OgDescription?: Field;
  OgImage?: ImageField;
}

const Layout = ({ layoutData, headLinks }: LayoutProps): JSX.Element => {
  const { route } = layoutData.sitecore;
  const fields = route?.fields as RouteFields;
  const isPageEditing = layoutData.sitecore.context.pageEditing;
  const mainClassPageEditing = isPageEditing ? 'editing-mode' : 'prod-mode';

  return (
    <>
      <Scripts />
      <Head>
        <title>
          {fields?.Title?.value?.toString() ||
            'Sodexo Group Food Services &amp; Facilities Management'}
        </title>
        <link rel="icon" href={`${publicUrl}/favicon.ico`} />
        {headLinks.map((headLink) => (
          <link rel={headLink.rel} key={headLink.href} href={headLink.href} />
        ))}
        <link rel="canonical" href={publicUrl} />
        <meta property="og:title" content={fields?.OgTitle?.value?.toString()} />
        <meta property="og:description" content={fields?.OgDescription?.value?.toString()} />
        <meta property="og:image" content={fields?.OgImage?.value?.src?.toString()} />
        <meta property="og:type" content={route?.templateName} data-attr="JSS-21.6.0" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta content="Sodexo integrates catering, facilities management, and employee benefits services to create an improved quality of life for the people we serve, our clients, employees, customers and the community. " />
        <meta content="en" property="og:locale" />
        <meta
          content="Sodexo Group Food Services &amp; Facilities Management"
          property="og:title"
        />
        <meta
          content="Sodexo integrates catering, facilities management, and employee benefits services to create an improved quality of life for the people we serve, our clients, employees, customers and the community. "
          name="description"
          property="og:description"
        />
        <meta
          content="Sodexo Group – Food Services &amp; Facilities Management"
          name="twitter:title"
        />
        <meta
          content="Sodexo integrates catering, facilities management, and employee benefits services to create an improved quality of life for the people we serve, our clients, employees, customers and the community. "
          name="twitter:description"
        />
        <meta
          content="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/Logos/Sodexo_Logotype_Blue.png?h=42&amp;iar=0&amp;w=131"
          name="twitter:image"
        />
        <link href="https://www.sodexo.com/" hrefLang="fr" rel="alternate" />
        <link href="https://www.sodexo.com/" hrefLang="en" rel="alternate" />
        <link href="https://www.sodexo.com/" rel="canonical" />
        <link
          href="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/shared/Images/Favicon/FAVICON_SDX_ICO.ico?iar=0"
          rel="icon"
          type="image/x-icon"
        />
        <link
          rel="preload"
          href="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/BannerCard-503x503/Modern-Recipe-Banner-Card.jpg?h=608&amp;iar=0&amp;w=608"
          as="image"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/BannerCard-503x503/Kitchen-Works-Banner-Card.jpg?h=608&amp;iar=0&amp;w=608"
          as="image"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/BannerCard-503x503/The-good-eating-company-Banner-Card.jpg?h=608&amp;iar=0&amp;w=608"
          as="image"
          fetchPriority="high"
        />
        <meta name="next-head-count" content="24" />
        <link data-next-font="" rel="preconnect" href="/" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://www.sodexo.com/_next/static/css/82c79a564f3ac4be.css"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://www.sodexo.com/_next/static/css/82c79a564f3ac4be.css"
          data-n-g=""
        />
        <link
          rel="stylesheet"
          href="https://www.sodexo.com/_next/static/css/7305b69b8605f7b9.css"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://www.sodexo.com/_next/static/css/7305b69b8605f7b9.css"
          data-n-p=""
        />
        <link
          rel="stylesheet"
          href="https://www.sodexo.com/_next/static/css/3db612bef2d48975.css"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://www.sodexo.com/_next/static/css/3db612bef2d48975.css"
          data-n-p=""
        />
        {/* <script
          defer
          noModule
          src="https://www.sodexo.com/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js"
        />
        {/* <script
          src="https://www.sodexo.com/_next/static/chunks/webpack-298d49d36da548df.js"
          defer
        /> */}
        <script
          src="https://www.sodexo.com/_next/static/chunks/framework-9620da855a94eb57.js"
          defer
        ></script>
        <script
          src="https://www.sodexo.com/_next/static/chunks/main-2facddc7a75f0c44.js"
          defer
        ></script>
        <script
          src="https://www.sodexo.com/_next/static/chunks/pages/_app-cc80da2dce160883.js"
          defer
        ></script>
        <script
          src="https://www.sodexo.com/_next/static/chunks/4333364f-94584e990f9d6ab0.js"
          defer
        ></script>
        <script
          src="https://www.sodexo.com/_next/static/chunks/975-6f5469cf380f081c.js"
          defer
        ></script>
        <script
          src="https://www.sodexo.com/_next/static/chunks/840-93f0fed481957f6f.js"
          defer
        ></script>
        <script
          src="https://www.sodexo.com/_next/static/chunks/285-d2992df5a9b0fd43.js"
          defer
        ></script>
        {/* <script
          src="/_next/static/chunks/pages/%5B%5B...path%5D%5D-9d39efe77f46ae8b.js"
          defer
        ></script> */}
        {/* <script src="/_next/static/B89m4RlNzSQnVapLfGlJg/_buildManifest.js" defer></script>
        <script src="/_next/static/B89m4RlNzSQnVapLfGlJg/_ssgManifest.js" defer></script> */}
      </Head>

      {/* root placeholder for the app, which we add components to using route data */}
      <div className={mainClassPageEditing}>
        <header
          className="Header_header__lDmSR Header_header--hide__ec1NG"
          role="banner"
          id="header"
        >
          {route && <Placeholder name="headless-header" rendering={route} />}
        </header>

        <main
          id="content"
          role="main"
          className="jsx-1675192690 jsx-1640501015 Layout_container__6EhJX"
        >
          <div className="jsx-1675192690 jsx-1640501015 Layout_main__4tP_M">
            {route && <Placeholder name="headless-main" rendering={route} />}
            {/* <section
              data-full-width="false"
              data-grid-layout="global"
              id="50feeb9c-a6c2-48a1-ac65-330f74b929bc"
              className="Surface_surface__Y0_rx banner-card"
            >
              <div className="BannerCard_banner-card__container__FHLDK" data-grid-layout="global">
                <div
                  className="BannerCard_banner-card__image-wrapper__T8qZB"
                  data-grid-layout="global"
                >
                  <div className="Media_media__NhvS6" id="">
                    <div className="ImageBannerCard_image-banner-card__image-container__dd7MU">
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
                        src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/BannerCard-503x503/Sodexo-2024-Report-EN.jpg?h=503&amp;iar=0&amp;w=503"
                      />
                    </div>
                  </div>
                </div>
                <div className="BannerCard_banner-card__content__JcBKs" data-grid-layout="global">
                  <div className="">
                    <h2 className="BannerCard_banner-card__title__z7y_B">
                      Integrated Report Fiscal 2024
                    </h2>
                  </div>
                  <div className="">
                    <div className="BannerCard_banner-card__text__XOb09">
                      <p>
                        Discover or rediscover Sodexo, our fundamentals, unique business model,
                        strategy and performance in our Integrated Report Fiscal 2024.
                      </p>
                    </div>
                  </div>
                  <Link
                    title="Opens page (same window)"
                    target="_self"
                    className="Button_btn__Xvq6a BannerCard_banner-card__button__xbgXJ Button_btn--link__JI8fR Button_btn--outline-blue__W1LG6"
                    href="/investors/financial-results-and-publications/integrated-report"
                  >
                    Read more
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
            <section
              data-full-width="false"
              data-grid-layout="global"
              id="b01ab0c8-85c7-4a3a-aba9-7c54826d1202"
              className="Surface_surface__Y0_rx banner-card"
            >
              <div className="BannerCard_banner-card__container__FHLDK" data-grid-layout="global">
                <div
                  className="BannerCard_banner-card__image-wrapper__T8qZB BannerCard_banner-card__image-wrapper--reversed__haj15"
                  data-grid-layout="global"
                >
                  <div className="Media_media__NhvS6" id="">
                    <div className="PushImage_push-image__V6naY PushImage_push-image--layout__PwSJd ImageBannerCard_image-banner-card__image-container__dd7MU">
                      <img
                        alt="HP-Employees3"
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
                        src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/Banner-card-608x342/HP-Employees3.jpg?h=342&amp;iar=0&amp;w=608"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="BannerCard_banner-card__content__JcBKs BannerCard_banner-card__content--reversed__mMBDq"
                  data-grid-layout="global"
                >
                  <div className="">
                    <h2 className="BannerCard_banner-card__title__z7y_B BannerCard_banner-card__title--half-bolded__nYE1S">
                      Working at Sodexo is more than a job
                    </h2>
                  </div>
                  <div className="">
                    <div className="BannerCard_banner-card__text__XOb09">
                      <p>
                        Joining Sodexo means being part of a company where your work goes beyond the
                        ordinary—it&quot;s about making a real difference every day. You belong in a
                        company that allows you to act with purpose and thrive in your own way,
                        supported by an environment that empowers you to grow on your own terms and
                        contribute to something greater.
                      </p>
                    </div>
                  </div>
                  <Link
                    title="Opens web page (same window)"
                    target="_self"
                    className="Button_btn__Xvq6a BannerCard_banner-card__button__xbgXJ Button_btn--link__JI8fR Button_btn--outline-blue__W1LG6"
                    href="/working-at-sodexo/more-than-a-job"
                  >
                    Be part of something greater
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
            <section
              className="FullBanner_full-banner__h_pyn color-white"
              data-full-width="true"
              data-grid-layout="global"
            >
              <figure className="FullBanner_full-banner__background__container__0tAvX FullBanner_full-banner__background__container_with-overlay__JVOLi full-banner-figure-.25">
                <img
                  alt=""
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="FullBanner_full-banner__background__image__y2_xF"
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
                  src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/HeroLatestNews-1440x690/making-sustainable-food-convenient-homepage-banner.jpg?h=690&amp;iar=0&amp;w=1440"
                />
              </figure>
              <div className="FullBanner_full-banner__content__17VqO" data-grid-layout="global">
                <h1 className="font-h1">Get started with Sodexo</h1>
                <p className="FullBanner_full-banner__content__testimony__jTsBb FullBanner_font-h3__AmFi9">
                  Explore our solutions: sustainable Food, Facilities Management and Hospitality
                  Services that are right for you.
                </p>
                <div className="FullBanner_full-banner__content__cta___kqUy">
                  <Link
                    title="Opens page (same window)"
                    target="_self"
                    className="Button_btn__Xvq6a Button_btn--red-waves__OSCcE Button_btn--items-center__L2yWE Button_btn--link__JI8fR Button_btn--without-border__wYHqY"
                    href="/contact-us"
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
            <div
              className="RedirectionSelector_redirection-selector__os68_"
              data-full-width="true"
              data-testid="redirection-selector-id"
            >
              <h2 className="RedirectionSelector_font-h2__h04DB">
                How about a more detailed discussion?
              </h2>
              <div className="RedirectionSelector_redirection-selector__form__MUC_l">
                <div
                  className="Select_select__HfouC Select_select-list__MQoIx RedirectionSelector_redirection-selector__select__FG8qD"
                  data-grid-layout="global"
                >
                  <fieldset className="Select_select__group__68bXi Select_select__group--select__Z5S3I">
                    <label className="Select_select__label__pfk9T Select_select__label--select__yRmDp">
                      Select a location
                    </label>
                    <input
                      aria-autocomplete="list"
                      aria-controls="select-listbox"
                      aria-expanded="false"
                      autoComplete="off"
                      className="Select_select__input__0JQC3 Select_select__input--select__YjZZq"
                      readOnly
                      role="combobox"
                      type="text"
                    />
                    <button
                      aria-controls="select-listbox"
                      aria-expanded="false"
                      aria-label="Select a location"
                      className="Select_select__button__GGpIl Select_select__icon-closed__9EUYl"
                      tabIndex={-1}
                      type="button"
                    >
                      <span
                        className="Icon_icon__qNAb6 Icon_icon--blue___O2uj Icon_icon--arrow-rtl__xN7T5"
                        style={{ height: '24px', width: '24px' }}
                      >
                        <svg aria-hidden="true" viewBox="0 0 24 24">
                          <use xlinkHref="#icons_chevron"></use>
                        </svg>
                      </span>
                    </button>
                  </fieldset>
                  <div id="listbox-wrapper-Select a location">
                    <ul aria-label="Select a location" id="select-listbox" role="listbox">
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://br.sodexo.com"
                        id="https://br.sodexo.com"
                        role="option"
                      >
                        Brazil
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://au.sodexo.com/"
                        id="https://au.sodexo.com/"
                        role="option"
                      >
                        Australia
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://at.sodexo.com/"
                        id="https://at.sodexo.com/"
                        role="option"
                      >
                        Austria
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://be.sodexo.com/"
                        id="https://be.sodexo.com/"
                        role="option"
                      >
                        Belgium
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://cz.sodexo.com/"
                        id="https://cz.sodexo.com/"
                        role="option"
                      >
                        Czech Republic
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://www.sodexo.com/our-locations/denmark"
                        id="https://www.sodexo.com/our-locations/denmark"
                        role="option"
                      >
                        Denmark
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://fi.sodexo.com/"
                        id="https://fi.sodexo.com/"
                        role="option"
                      >
                        Finland
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://fr.sodexo.com/"
                        id="https://fr.sodexo.com/"
                        role="option"
                      >
                        France
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://de.sodexo.com/"
                        id="https://de.sodexo.com/"
                        role="option"
                      >
                        Germany
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://hu.sodexo.com/"
                        id="https://hu.sodexo.com/"
                        role="option"
                      >
                        Hungary
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://ie.sodexo.com/"
                        id="https://ie.sodexo.com/"
                        role="option"
                      >
                        Ireland
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://middleeast.sodexo.com/home/about-us/overview.html"
                        id="https://middleeast.sodexo.com/home/about-us/overview.html"
                        role="option"
                      >
                        Algeria
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="http://il.sodexo.com/"
                        id="http://il.sodexo.com/"
                        role="option"
                      >
                        Israel
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://it.sodexo.com/"
                        id="https://it.sodexo.com/"
                        role="option"
                      >
                        Italy
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://lu.sodexo.com/"
                        id="https://lu.sodexo.com/"
                        role="option"
                      >
                        Luxembourg
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://middleeast.sodexo.com/home.html"
                        id="https://middleeast.sodexo.com/home.html"
                        role="option"
                      >
                        Middle East
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://nl.sodexo.com/"
                        id="https://nl.sodexo.com/"
                        role="option"
                      >
                        Netherlands
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://no.sodexo.com/"
                        id="https://no.sodexo.com/"
                        role="option"
                      >
                        Norway
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://middleeast.sodexo.com/home/about-us/overview.html"
                        id="https://middleeast.sodexo.com/home/about-us/overview.html"
                        role="option"
                      >
                        Oman
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://pl.sodexo.com/"
                        id="https://pl.sodexo.com/"
                        role="option"
                      >
                        Poland
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://middleeast.sodexo.com/home/about-us/overview.html"
                        id="https://middleeast.sodexo.com/home/about-us/overview.html"
                        role="option"
                      >
                        Qatar
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://ro.sodexo.com/"
                        id="https://ro.sodexo.com/"
                        role="option"
                      >
                        Romania
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://za.sodexo.com/"
                        id="https://za.sodexo.com/"
                        role="option"
                      >
                        South Africa
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://es.sodexo.com/"
                        id="https://es.sodexo.com/"
                        role="option"
                      >
                        Spain
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://se.sodexo.com/"
                        id="https://se.sodexo.com/"
                        role="option"
                      >
                        Sweden
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://ch.sodexo.com/"
                        id="https://ch.sodexo.com/"
                        role="option"
                      >
                        Switzerland
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://tr.sodexo.com/"
                        id="https://tr.sodexo.com/"
                        role="option"
                      >
                        Turkey
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://middleeast.sodexo.com/home/about-us/overview.html"
                        id="https://middleeast.sodexo.com/home/about-us/overview.html"
                        role="option"
                      >
                        United Arab Emirates
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://uk.sodexo.com/"
                        id="https://uk.sodexo.com/"
                        role="option"
                      >
                        United Kingdom
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://www.sodexo.com/"
                        id="https://www.sodexo.com/"
                        role="option"
                      >
                        Worldwide
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://ca.sodexo.com/"
                        id="https://ca.sodexo.com/"
                        role="option"
                      >
                        Canada
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://cl.sodexo.com"
                        id="https://cl.sodexo.com"
                        role="option"
                      >
                        Chile
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://co.sodexo.com/"
                        id="https://co.sodexo.com/"
                        role="option"
                      >
                        Colombia
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://cr.sodexo.com/"
                        id="https://cr.sodexo.com/"
                        role="option"
                      >
                        Costa Rica
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://cn.sodexo.com/"
                        id="https://cn.sodexo.com/"
                        role="option"
                      >
                        Greater China
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://cn.sodexo.com/en/about-us/sodexo-profile/sodexo-hong-kong-china.html"
                        id="https://cn.sodexo.com/en/about-us/sodexo-profile/sodexo-hong-kong-china.html"
                        role="option"
                      >
                        Hong Kong China
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://in.sodexo.com/"
                        id="https://in.sodexo.com/"
                        role="option"
                      >
                        India
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://id.sodexo.com/"
                        id="https://id.sodexo.com/"
                        role="option"
                      >
                        Indonesia
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://www.globeshipsodexo.com/"
                        id="https://www.globeshipsodexo.com/"
                        role="option"
                      >
                        Japón
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://sg.sodexo.com/about-us/sodexo-in-malaysia.html"
                        id="https://sg.sodexo.com/about-us/sodexo-in-malaysia.html"
                        role="option"
                      >
                        Malasia
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://mx.sodexo.com/"
                        id="https://mx.sodexo.com/"
                        role="option"
                      >
                        Mexico
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://www.sodexo.pa/"
                        id="https://www.sodexo.pa/"
                        role="option"
                      >
                        Panama
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://pe.sodexo.com/"
                        id="https://pe.sodexo.com/"
                        role="option"
                      >
                        Peru
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://ph.sodexo.com/"
                        id="https://ph.sodexo.com/"
                        role="option"
                      >
                        Philippines
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://sg.sodexo.com/"
                        id="https://sg.sodexo.com/"
                        role="option"
                      >
                        Singapore
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://sg.sodexo.com/about-us/sodexo-in-asia-pacific.html"
                        id="https://sg.sodexo.com/about-us/sodexo-in-asia-pacific.html"
                        role="option"
                      >
                        South Korea
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://th.sodexo.com/"
                        id="https://th.sodexo.com/"
                        role="option"
                      >
                        Thailand
                      </li>
                      <li
                        aria-selected="false"
                        className="Select_select__list-item__0PLYq"
                        data-value="https://us.sodexo.com/"
                        id="https://us.sodexo.com/"
                        role="option"
                      >
                        United States
                      </li>
                    </ul>
                  </div>
                </div>
                <Link
                  target="_self"
                  className="Button_btn__Xvq6a RedirectionSelector_redirection-selector__button__rYXbK RedirectionSelector_redirection-selector__button--disabled__dGyPX Button_btn--red-waves__OSCcE Button_btn--link__JI8fR"
                  href="/"
                >
                  Reach out to our local teams
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
            </div> */}
          </div>
        </main>
        <footer className="Surface_surface__Y0_rx Footer_footer__TvKAw color-white" id="footer">
          {route && <Placeholder name="headless-footer" rendering={route} />}
        </footer>
      </div>
    </>
  );
};

export default Layout;
