/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-css-tags */
/**
 * This Layout is needed for Starter Kit.
 */
import React, { useEffect } from 'react';
import Head from 'next/head';
import { Placeholder, LayoutServiceData, Field, HTMLLink } from '@sitecore-jss/sitecore-jss-nextjs';
import config from 'temp/config';
import Scripts from 'src/Scripts';
import Link from 'next/link';

//import 'public/MajidAlFuttaim/main.js';

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
}

const Layout = ({ layoutData, headLinks }: LayoutProps): JSX.Element => {
  const { route } = layoutData.sitecore;
  const fields = route?.fields as RouteFields;
  const isPageEditing = layoutData.sitecore.context.pageEditing;
  const mainClassPageEditing = isPageEditing ? 'editing-mode' : 'prod-mode';

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const body = document.body;

      if (scrollTop > 50) {
        body.classList.add(
          'normal-mode',
          'corporate-site',
          'browser-chrome',
          'cookiebanner',
          'sticky-header'
        );
      } else {
        body.classList.remove(
          'normal-mode',
          'corporate-site',
          'browser-chrome',
          'cookiebanner',
          'sticky-header'
        );
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Initial check
    handleScroll();

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const mainElement = document.querySelector('main');
    if (mainElement) {
      const mainHeight = mainElement.getBoundingClientRect().height;
      if (mainHeight < 200) {
        mainElement.style.marginTop = '100px';
      } else {
        mainElement.style.marginTop = '';
      }
    }
  }, []);

  useEffect(() => {
    const mobileLinksWrapper = document.getElementById('mobile-links');
    const allHeaderLinks = document.querySelectorAll('.header-link');
    let linksHtml = '';

    if (allHeaderLinks.length > 0) {
      for (let i = 0; i < allHeaderLinks.length; i++) {
        linksHtml += `<div class="contact-us">${allHeaderLinks[i].innerHTML}</div>`;
      }
    }

    if (mobileLinksWrapper) {
      mobileLinksWrapper.innerHTML = linksHtml;
    }

    const languageLinks = document.getElementById('desctop-language-switcher');
    if (languageLinks != null) {
      const mobileLanguageLinksWrapper = document.querySelectorAll('.mobile-language-wrapper');

      if (mobileLanguageLinksWrapper.length > 0) {
        for (let i = 0; i < mobileLanguageLinksWrapper.length; i++) {
          mobileLanguageLinksWrapper[i].innerHTML = languageLinks.innerHTML;
        }
      }
    }
  }, []);

  return (
    <>
      <Scripts />
      <Head>
        <title>{fields?.Title?.value?.toString() || 'Page'}</title>
        <link rel="icon" href={`${publicUrl}/favicon.ico`} />
        {headLinks.map((headLink) => (
          <link rel={headLink.rel} key={headLink.href} href={headLink.href} />
        ))}

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow" />
        <link
          href="https://www.majidalfuttaim.com/ResourcePackages/Corporate/assets/dist/css/main.css?v=20250429122338&amp;package=Corporate"
          rel="stylesheet"
          type="text/css"
        />
        <link
          rel="icon"
          hrefLang="en"
          href="https://www.majidalfuttaim.com/ResourcePackages/Corporate/assets/dist/images/favicon.ico"
          sizes="16x16"
          type="image/ico"
        />
        <meta
          property="og:image"
          content="https://www.majidalfuttaim.com/images/default-source/industry/brandfashion.jpg?sfvrsn=2ba5ebce_7"
        />
        <meta
          property="twitter:image"
          content="https://www.majidalfuttaim.com/images/default-source/industry/brandfashion.jpg?sfvrsn=2ba5ebce_7"
        />
        <meta
          property="og:title"
          content="Discover our Lifestyle &amp;amp; Retail Brands | Majid Al Futtaim"
        />
        <meta
          property="og:description"
          content="Majid Al Futtaim Lifestyle brings world-class Lifestyle and retail brands to the region, with more than 100 stores across the MENA region. Click here for more."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.majidalfuttaim.com/en/what-we-do/our-industries/industry/lifestyle"
        />
        <meta property="og:site_name" content="Majid Al Futtaim" />
        {/* <script
          src="https://code.jquery.com/jquery-3.7.1.min.js"
          integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
          crossOrigin="anonymous"
        ></script> */}
        <meta
          name="google-site-verification"
          content="Peq0U5gFVAI_MpFjqysMsHZd7vk5ra-1P912hsvTM8M"
        />
        <link
          rel="canonical"
          href="https://www.majidalfuttaim.com/en/what-we-do/our-industries/industry/lifestyle"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          property="twitter:title"
          content="Discover our Lifestyle &amp;amp; Retail Brands | Majid Al Futtaim"
        />
        <meta
          property="twitter:description"
          content="Majid Al Futtaim Lifestyle brings world-class Lifestyle and retail brands to the region, with more than 100 stores across the MENA region. Click here for more."
        />
        <meta
          name="description"
          content="Majid Al Futtaim Lifestyle brings world-class Lifestyle and retail brands to the region, with more than 100 stores across the MENA region. Click here for more."
        />
      </Head>

      {/* root placeholder for the app, which we add components to using route data */}
      <div className={mainClassPageEditing}>
        <header>
          <div id="header">{route && <Placeholder name="headless-header" rendering={route} />}</div>
        </header>
        <main>
          <div id="" className="section-to-scroll" data-section-name="" data-color="dark"></div>
          <div id="content">{route && <Placeholder name="headless-main" rendering={route} />}</div>
          <div className="video-pop-up">
            <div id="video-preloader">
              <div className="status">&nbsp;</div>
            </div>
            <div className="close-video-pop-up">
              <span>X</span>
            </div>
            <div className="video" id="pop-up-video">
              <video src="" id="video" controls autoPlay playsInline preload="auto"></video>
              <div id="youtube-iframe"></div>
            </div>
          </div>
          <button id="myBtn" className="backToTop" title="Go to top"></button>
        </main>
        <footer className="footer section-to-scroll">
          {route && <Placeholder name="headless-footer" rendering={route} />}
        </footer>
      </div>
      <Link href="#content" className="skip-to-content" id="skip-link">
        Skip to Content
      </Link>
      <div className="search-component">
        <div className="section-container">
          <div className="row">
            <div className="search-input" role="search">
              <form data-search-required="Please enter search text">
                <input
                  type="text"
                  name="text"
                  id="search-autocomplete-list"
                  autoComplete="off"
                  title="Please enter search text"
                  placeholder="Please enter search text"
                  aria-describedby="SearchInfo-1"
                />
                <div className="clear-search-input">
                  <img
                    className="svg-image"
                    alt="close icon"
                    src="https://www.majidalfuttaim.com/ResourcePackages/Corporate/assets/dist/images/cross-black.svg"
                  />
                </div>
                <button
                  type="button"
                  className="btn-search"
                  id="594fb8e2-464c-417c-b394-92ca0ee7c04e"
                >
                  <img
                    className="svg-image"
                    src="https://www.majidalfuttaim.com/ResourcePackages/Corporate/assets/dist/images/MAFsearch.svg"
                    alt="search icon"
                  />
                </button>
                <span id="SearchInfo-1" aria-hidden="true" hidden>
                  When autocomplete results are available use up and down arrows to review and enter
                  to select.
                </span>
              </form>
              <div
                id="3f745b30-95cf-41d9-9c62-21945993f953"
                className="autocomplete-search-results"
              ></div>
            </div>
            <div className="close-search">
              <span className="text">Close</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="22"
                viewBox="0 0 23 22"
                className="svg-image close-btn-black replaced-svg"
              >
                <path
                  fill="#8A1538"
                  fillRule="evenodd"
                  d="M12.207 10.96L22.46 21.213l-.707.707L11.5 11.667 1.247 21.92l-.707-.707L10.793 10.96.54.707 1.247 0 11.5 10.253 21.753 0l.707.707L12.207 10.96z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <input type="hidden" data-sf-role="resultsUrl" value="/en/search" />
        <input type="hidden" data-sf-role="indexCatalogue" value="site-search-index" />
        <input type="hidden" data-sf-role="wordsMode" value="AllWords" />
        <input type="hidden" data-sf-role="disableSuggestions" value="false" />
        <input type="hidden" data-sf-role="minSuggestionLength" value="3" />
        <input type="hidden" data-sf-role="suggestionFields" value="Title,Subheadline,Headline" />
        <input type="hidden" data-sf-role="language" value="en" />
        <input type="hidden" data-sf-role="siteId" value="e88f4260-4938-430d-be08-ed820837749a" />
        <input type="hidden" data-sf-role="suggestionsRoute" value="/restapi/search/suggestions" />
        <input type="hidden" data-sf-role="searchTextBoxId" value="#search-autocomplete-list" />
        <input
          type="hidden"
          data-sf-role="searchButtonId"
          value="#594fb8e2-464c-417c-b394-92ca0ee7c04e"
        />
        <input
          type="hidden"
          data-sf-role="scoringSettings"
          value="UHJlZGljdGl2ZVNpdGVTZWFyY2hQcm9maWxl"
        />
        <input
          type="hidden"
          data-sf-role="searchResultsId"
          value="#3f745b30-95cf-41d9-9c62-21945993f953"
        />
        <input type="hidden" data-sf-role="suggestionType" value="TitleSuggestions" />
      </div>
      <div className="wrapper">
        <script
          src="https://www.majidalfuttaim.com/ResourcePackages/Corporate/assets/dist/js/main.js?v=20250429122340"
          type="text/javascript"
        ></script>
      </div>
      <input
        data-sf-role="ar"
        type="hidden"
        value="https://www.majidalfuttaim.com/ar/what-we-do/our-industries/industry/lifestyle"
      />
    </>
  );
};

export default Layout;
