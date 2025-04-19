/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-sync-scripts */
/**
 * This Layout is needed for Starter Kit.
 */
import React, { useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Placeholder, LayoutServiceData, Field, HTMLLink } from '@sitecore-jss/sitecore-jss-nextjs';
import config from 'temp/config';
import Scripts from 'src/Scripts';
//import SubscribeButton from 'components/ImagineCruising/SubscribeButton';

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
    const interval = setInterval(() => {
      const button = Array.from(document.querySelectorAll('button')).find(
        (btn) => btn.textContent?.trim() === 'Subscribe'
      );

      if (button) {
        const handleClick = async () => {
          try {
            const email = document.querySelector(
              'input[data-type="email_input"][placeholder="Email"]'
            );
            console.log('email:', email);
            const firstname = document.querySelector(
              'input[data-type="text_input"][placeholder="First Name"]'
            );
            console.log('firstname:', firstname);
            const name = document.querySelector(
              'input[data-type="text_input"][placeholder="Last Name"]'
            );
            console.log('name:', name);
            const response = await fetch('/api/subscribe', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                firstname: `${firstname}`,
                name: `${name}`,
                email: `${email}`,
                persona: 'Looker',
                operator: 'Princess',
              }),
            });

            const result = await response.json();
            console.log('Result:', result);
          } catch (err) {
            console.error('Error subscribing:', err);
          }
        };

        button.addEventListener('click', handleClick);
        console.log('✅ Listener attached to Subscribe button');
        clearInterval(interval); // stop checking once we found it

        // Optional cleanup if the component unmounts
        return () => {
          button.removeEventListener('click', handleClick);
        };
      }
      return;
    }, 200); // check every 200ms

    // Stop checking after 10s (safety net)
    setTimeout(() => clearInterval(interval), 10000);
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

        <meta charSet="UTF-8" />
        <meta name="msvalidate.01" content="03CA1AD61F9CD709134D3ECB1DF42A06" />
        <meta
          name="google-site-verification"
          content="WNDQ6ihFKTZCXvoWdnfpsdbvXyqyKFIIuve8kZ2S0e4"
        />
        <link
          rel="preload"
          as="image"
          href="https://www.imaginecruising.co.uk/wp-content/uploads/2025/03/homepage-train-frame.png"
        />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=2,user-scalable=yes,viewport-fit=cover"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/favicons/favicon-16x16_white.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/favicons/favicon-16x16_black.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/favicons/favicon-32x32_white.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/favicons/favicon-32x32_black.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/favicons/favicon-48x48_white.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/favicons/favicon-48x48_black.png"
        />
        <link
          rel="apple-touch-icon"
          href="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/favicons/apple-touch-icon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/favicons/site.webmanifest.png"
        />
        <link rel="alternate" href="https://www.imaginecruising.co.uk/" hrefLang="en-GB" />
        <link rel="pingback" href="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <style>{`img:is([sizes="auto" i], [sizes^="auto," i]) { contain-intrinsic-size: 3000px 1500px }`}</style>
        {/* <script
          id="cookieyes"
          type="text/javascript"
          src="https://cdn-cookieyes.com/client_data/c80a4c6c78ab375ab177ff76/script.js"
        ></script> */}
        <meta
          name="description"
          content="At Imagine Cruising our cruise holidays offer much more than just a cruise. Discover unforgettable experiences &amp; book your once in a lifetime adventure now."
        />
        <link rel="canonical" href="https://www.imaginecruising.co.uk/" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Imagine Cruising | Cruise Holidays &amp; Packages 2025/2026"
        />
        <meta
          property="og:description"
          content="At Imagine Cruising our cruise holidays offer much more than just a cruise. Discover unforgettable experiences &amp; book your once in a lifetime adventure now."
        />
        <meta property="og:url" content="https://www.imaginecruising.co.uk/" />
        <meta property="og:site_name" content="Imagine Cruising" />
        <meta
          property="og:image"
          content="https://www.imaginecruising.co.uk/wp-content/uploads/2025/04/MSC20Cruises20MSC20Opera20Exterior204-scaled-1.jpg"
        />
        <meta property="og:image:width" content="2560" />
        <meta property="og:image:height" content="1706" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          className="yoast-schema-graph"
        >{`{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://www.imaginecruising.co.uk/","url":"https://www.imaginecruising.co.uk/","name":"Imagine Cruising | Cruise Holidays & Packages 2025/2026","isPartOf":{"@id":"https://www.imaginecruising.co.uk/#website"},"primaryImageOfPage":{"@id":"https://www.imaginecruising.co.uk/#primaryimage"},"image":{"@id":"https://www.imaginecruising.co.uk/#primaryimage"},"thumbnailUrl":"https://www.imaginecruising.co.uk/wp-content/uploads/2025/04/MSC20Cruises20MSC20Opera20Exterior204-scaled-1.jpg","datePublished":"2025-04-15T09:37:55+00:00","description":"At Imagine Cruising our cruise holidays offer much more than just a cruise. Discover unforgettable experiences & book your once in a lifetime adventure now.","breadcrumb":{"@id":"https://www.imaginecruising.co.uk/#breadcrumb"},"inLanguage":"en-GB","potentialAction":[{"@type":"ReadAction","target":["https://www.imaginecruising.co.uk/"]}]},{"@type":"ImageObject","inLanguage":"en-GB","@id":"https://www.imaginecruising.co.uk/#primaryimage","url":"https://www.imaginecruising.co.uk/wp-content/uploads/2025/04/MSC20Cruises20MSC20Opera20Exterior204-scaled-1.jpg","contentUrl":"https://www.imaginecruising.co.uk/wp-content/uploads/2025/04/MSC20Cruises20MSC20Opera20Exterior204-scaled-1.jpg","width":2560,"height":1706},{"@type":"BreadcrumbList","@id":"https://www.imaginecruising.co.uk/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home"}]},{"@type":"WebSite","@id":"https://www.imaginecruising.co.uk/#website","url":"https://www.imaginecruising.co.uk/","name":"Imagine Cruising","description":"","potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://www.imaginecruising.co.uk/?s={search_term_string}"},"query-input":{"@type":"PropertyValueSpecification","valueRequired":true,"valueName":"search_term_string"}}],"inLanguage":"en-GB"}]}`}</script>
        <style id="wp-emoji-styles-inline-css" type="text/css" jsx>
          {`
            img.wp-smiley,
            img.emoji {
              display: inline !important;
              border: none !important;
              box-shadow: none !important;
              height: 1em !important;
              width: 1em !important;
              margin: 0 0.07em !important;
              vertical-align: -0.1em !important;
              background: none !important;
              padding: 0 !important;
            }
          `}
        </style>
        <link
          rel="stylesheet"
          id="wp-block-library-css"
          href="https://www.imaginecruising.co.uk/wp-includes/css/dist/block-library/style.min.css?ver=6.7.2"
          type="text/css"
          media="all"
        />
        <style id="classic-theme-styles-inline-css" type="text/css" jsx>
          {`
            /*! This file is auto-generated */
            .wp-block-button__link {
              color: #fff;
              background-color: #32373c;
              border-radius: 9999px;
              box-shadow: none;
              text-decoration: none;
              padding: calc(0.667em + 2px) calc(1.333em + 2px);
              font-size: 1.125em;
            }
            .wp-block-file__button {
              background: #32373c;
              color: #fff;
              text-decoration: none;
            }
          `}
        </style>
        <style id="global-styles-inline-css" type="text/css" jsx>
          {`
            :root {
              --wp--preset--aspect-ratio--square: 1;
              --wp--preset--aspect-ratio--4-3: 4/3;
              --wp--preset--aspect-ratio--3-4: 3/4;
              --wp--preset--aspect-ratio--3-2: 3/2;
              --wp--preset--aspect-ratio--2-3: 2/3;
              --wp--preset--aspect-ratio--16-9: 16/9;
              --wp--preset--aspect-ratio--9-16: 9/16;
              --wp--preset--color--black: #000000;
              --wp--preset--color--cyan-bluish-gray: #abb8c3;
              --wp--preset--color--white: #ffffff;
              --wp--preset--color--pale-pink: #f78da7;
              --wp--preset--color--vivid-red: #cf2e2e;
              --wp--preset--color--luminous-vivid-orange: #ff6900;
              --wp--preset--color--luminous-vivid-amber: #fcb900;
              --wp--preset--color--light-green-cyan: #7bdcb5;
              --wp--preset--color--vivid-green-cyan: #00d084;
              --wp--preset--color--pale-cyan-blue: #8ed1fc;
              --wp--preset--color--vivid-cyan-blue: #0693e3;
              --wp--preset--color--vivid-purple: #9b51e0;
              --wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(
                135deg,
                rgba(6, 147, 227, 1) 0%,
                rgb(155, 81, 224) 100%
              );
              --wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(
                135deg,
                rgb(122, 220, 180) 0%,
                rgb(0, 208, 130) 100%
              );
              --wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(
                135deg,
                rgba(252, 185, 0, 1) 0%,
                rgba(255, 105, 0, 1) 100%
              );
              --wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(
                135deg,
                rgba(255, 105, 0, 1) 0%,
                rgb(207, 46, 46) 100%
              );
              --wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(
                135deg,
                rgb(238, 238, 238) 0%,
                rgb(169, 184, 195) 100%
              );
              --wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(
                135deg,
                rgb(74, 234, 220) 0%,
                rgb(151, 120, 209) 20%,
                rgb(207, 42, 186) 40%,
                rgb(238, 44, 130) 60%,
                rgb(251, 105, 98) 80%,
                rgb(254, 248, 76) 100%
              );
              --wp--preset--gradient--blush-light-purple: linear-gradient(
                135deg,
                rgb(255, 206, 236) 0%,
                rgb(152, 150, 240) 100%
              );
              --wp--preset--gradient--blush-bordeaux: linear-gradient(
                135deg,
                rgb(254, 205, 165) 0%,
                rgb(254, 45, 45) 50%,
                rgb(107, 0, 62) 100%
              );
              --wp--preset--gradient--luminous-dusk: linear-gradient(
                135deg,
                rgb(255, 203, 112) 0%,
                rgb(199, 81, 192) 50%,
                rgb(65, 88, 208) 100%
              );
              --wp--preset--gradient--pale-ocean: linear-gradient(
                135deg,
                rgb(255, 245, 203) 0%,
                rgb(182, 227, 212) 50%,
                rgb(51, 167, 181) 100%
              );
              --wp--preset--gradient--electric-grass: linear-gradient(
                135deg,
                rgb(202, 248, 128) 0%,
                rgb(113, 206, 126) 100%
              );
              --wp--preset--gradient--midnight: linear-gradient(
                135deg,
                rgb(2, 3, 129) 0%,
                rgb(40, 116, 252) 100%
              );
              --wp--preset--font-size--small: 13px;
              --wp--preset--font-size--medium: 20px;
              --wp--preset--font-size--large: 36px;
              --wp--preset--font-size--x-large: 42px;
              --wp--preset--spacing--20: 0.44rem;
              --wp--preset--spacing--30: 0.67rem;
              --wp--preset--spacing--40: 1rem;
              --wp--preset--spacing--50: 1.5rem;
              --wp--preset--spacing--60: 2.25rem;
              --wp--preset--spacing--70: 3.38rem;
              --wp--preset--spacing--80: 5.06rem;
              --wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);
              --wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);
              --wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);
              --wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1),
                6px 6px rgba(0, 0, 0, 1);
              --wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);
            }
            :where(.is-layout-flex) {
              gap: 0.5em;
            }
            :where(.is-layout-grid) {
              gap: 0.5em;
            }
            body .is-layout-flex {
              display: flex;
            }
            .is-layout-flex {
              flex-wrap: wrap;
              align-items: center;
            }
            .is-layout-flex > :is(*, div) {
              margin: 0;
            }
            body .is-layout-grid {
              display: grid;
            }
            .is-layout-grid > :is(*, div) {
              margin: 0;
            }
            :where(.wp-block-columns.is-layout-flex) {
              gap: 2em;
            }
            :where(.wp-block-columns.is-layout-grid) {
              gap: 2em;
            }
            :where(.wp-block-post-template.is-layout-flex) {
              gap: 1.25em;
            }
            :where(.wp-block-post-template.is-layout-grid) {
              gap: 1.25em;
            }
            .has-black-color {
              color: var(--wp--preset--color--black) !important;
            }
            .has-cyan-bluish-gray-color {
              color: var(--wp--preset--color--cyan-bluish-gray) !important;
            }
            .has-white-color {
              color: var(--wp--preset--color--white) !important;
            }
            .has-pale-pink-color {
              color: var(--wp--preset--color--pale-pink) !important;
            }
            .has-vivid-red-color {
              color: var(--wp--preset--color--vivid-red) !important;
            }
            .has-luminous-vivid-orange-color {
              color: var(--wp--preset--color--luminous-vivid-orange) !important;
            }
            .has-luminous-vivid-amber-color {
              color: var(--wp--preset--color--luminous-vivid-amber) !important;
            }
            .has-light-green-cyan-color {
              color: var(--wp--preset--color--light-green-cyan) !important;
            }
            .has-vivid-green-cyan-color {
              color: var(--wp--preset--color--vivid-green-cyan) !important;
            }
            .has-pale-cyan-blue-color {
              color: var(--wp--preset--color--pale-cyan-blue) !important;
            }
            .has-vivid-cyan-blue-color {
              color: var(--wp--preset--color--vivid-cyan-blue) !important;
            }
            .has-vivid-purple-color {
              color: var(--wp--preset--color--vivid-purple) !important;
            }
            .has-black-background-color {
              background-color: var(--wp--preset--color--black) !important;
            }
            .has-cyan-bluish-gray-background-color {
              background-color: var(--wp--preset--color--cyan-bluish-gray) !important;
            }
            .has-white-background-color {
              background-color: var(--wp--preset--color--white) !important;
            }
            .has-pale-pink-background-color {
              background-color: var(--wp--preset--color--pale-pink) !important;
            }
            .has-vivid-red-background-color {
              background-color: var(--wp--preset--color--vivid-red) !important;
            }
            .has-luminous-vivid-orange-background-color {
              background-color: var(--wp--preset--color--luminous-vivid-orange) !important;
            }
            .has-luminous-vivid-amber-background-color {
              background-color: var(--wp--preset--color--luminous-vivid-amber) !important;
            }
            .has-light-green-cyan-background-color {
              background-color: var(--wp--preset--color--light-green-cyan) !important;
            }
            .has-vivid-green-cyan-background-color {
              background-color: var(--wp--preset--color--vivid-green-cyan) !important;
            }
            .has-pale-cyan-blue-background-color {
              background-color: var(--wp--preset--color--pale-cyan-blue) !important;
            }
            .has-vivid-cyan-blue-background-color {
              background-color: var(--wp--preset--color--vivid-cyan-blue) !important;
            }
            .has-vivid-purple-background-color {
              background-color: var(--wp--preset--color--vivid-purple) !important;
            }
            .has-black-border-color {
              border-color: var(--wp--preset--color--black) !important;
            }
            .has-cyan-bluish-gray-border-color {
              border-color: var(--wp--preset--color--cyan-bluish-gray) !important;
            }
            .has-white-border-color {
              border-color: var(--wp--preset--color--white) !important;
            }
            .has-pale-pink-border-color {
              border-color: var(--wp--preset--color--pale-pink) !important;
            }
            .has-vivid-red-border-color {
              border-color: var(--wp--preset--color--vivid-red) !important;
            }
            .has-luminous-vivid-orange-border-color {
              border-color: var(--wp--preset--color--luminous-vivid-orange) !important;
            }
            .has-luminous-vivid-amber-border-color {
              border-color: var(--wp--preset--color--luminous-vivid-amber) !important;
            }
            .has-light-green-cyan-border-color {
              border-color: var(--wp--preset--color--light-green-cyan) !important;
            }
            .has-vivid-green-cyan-border-color {
              border-color: var(--wp--preset--color--vivid-green-cyan) !important;
            }
            .has-pale-cyan-blue-border-color {
              border-color: var(--wp--preset--color--pale-cyan-blue) !important;
            }
            .has-vivid-cyan-blue-border-color {
              border-color: var(--wp--preset--color--vivid-cyan-blue) !important;
            }
            .has-vivid-purple-border-color {
              border-color: var(--wp--preset--color--vivid-purple) !important;
            }
            .has-vivid-cyan-blue-to-vivid-purple-gradient-background {
              background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;
            }
            .has-light-green-cyan-to-vivid-green-cyan-gradient-background {
              background: var(
                --wp--preset--gradient--light-green-cyan-to-vivid-green-cyan
              ) !important;
            }
            .has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background {
              background: var(
                --wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange
              ) !important;
            }
            .has-luminous-vivid-orange-to-vivid-red-gradient-background {
              background: var(
                --wp--preset--gradient--luminous-vivid-orange-to-vivid-red
              ) !important;
            }
            .has-very-light-gray-to-cyan-bluish-gray-gradient-background {
              background: var(
                --wp--preset--gradient--very-light-gray-to-cyan-bluish-gray
              ) !important;
            }
            .has-cool-to-warm-spectrum-gradient-background {
              background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;
            }
            .has-blush-light-purple-gradient-background {
              background: var(--wp--preset--gradient--blush-light-purple) !important;
            }
            .has-blush-bordeaux-gradient-background {
              background: var(--wp--preset--gradient--blush-bordeaux) !important;
            }
            .has-luminous-dusk-gradient-background {
              background: var(--wp--preset--gradient--luminous-dusk) !important;
            }
            .has-pale-ocean-gradient-background {
              background: var(--wp--preset--gradient--pale-ocean) !important;
            }
            .has-electric-grass-gradient-background {
              background: var(--wp--preset--gradient--electric-grass) !important;
            }
            .has-midnight-gradient-background {
              background: var(--wp--preset--gradient--midnight) !important;
            }
            .has-small-font-size {
              font-size: var(--wp--preset--font-size--small) !important;
            }
            .has-medium-font-size {
              font-size: var(--wp--preset--font-size--medium) !important;
            }
            .has-large-font-size {
              font-size: var(--wp--preset--font-size--large) !important;
            }
            .has-x-large-font-size {
              font-size: var(--wp--preset--font-size--x-large) !important;
            }
            :where(.wp-block-post-template.is-layout-flex) {
              gap: 1.25em;
            }
            :where(.wp-block-post-template.is-layout-grid) {
              gap: 1.25em;
            }
            :where(.wp-block-columns.is-layout-flex) {
              gap: 2em;
            }
            :where(.wp-block-columns.is-layout-grid) {
              gap: 2em;
            }
            :root :where(.wp-block-pullquote) {
              font-size: 1.5em;
              line-height: 1.6;
            }
          `}
        </style>
        <link
          data-minify="1"
          rel="stylesheet"
          id="litepicker-css"
          href="https://www.imaginecruising.co.uk/wp-content/cache/min/1/npm/litepicker@2.0.11/dist/css/litepicker.css?ver=1744621463"
          type="text/css"
          media="all"
        />
        <link
          data-minify="1"
          rel="stylesheet"
          id="jquery-ui-slider-css"
          href="https://www.imaginecruising.co.uk/wp-content/cache/min/1/npm/jquery-ui-slider@1.12.1/jquery-ui.min.css?ver=1744621463"
          type="text/css"
          media="all"
        />
        <link
          data-minify="1"
          rel="stylesheet"
          id="search-results-css"
          href="https://www.imaginecruising.co.uk/wp-content/cache/min/1/wp-content/themes/imagine-rebrand/css/search-results.css?ver=1744621463"
          type="text/css"
          media="all"
        />
        <link
          data-minify="1"
          rel="stylesheet"
          id="search-form-css"
          href="https://www.imaginecruising.co.uk/wp-content/cache/min/1/wp-content/themes/imagine-rebrand/css/search-form.css?ver=1744621463"
          type="text/css"
          media="all"
        />
        <link
          data-minify="1"
          rel="stylesheet"
          id="vars-css"
          href="https://www.imaginecruising.co.uk/wp-content/cache/min/1/wp-content/themes/imagine-rebrand/css/vars.css?ver=1744621463"
          type="text/css"
          media="all"
        />
        <link
          data-minify="1"
          rel="stylesheet"
          id="fontawesome6-css"
          href="https://www.imaginecruising.co.uk/wp-content/cache/min/1/ajax/libs/font-awesome/6.0.0/css/all.min.css?ver=1744621463"
          type="text/css"
          media="all"
        />
        <link
          data-minify="1"
          rel="stylesheet"
          id="css-reboot-css"
          href="https://www.imaginecruising.co.uk/wp-content/cache/min/1/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap-reboot.min.css?ver=1744621464"
          type="text/css"
          media="all"
        />
        <link
          data-minify="1"
          rel="stylesheet"
          id="fancybox-css"
          href="https://www.imaginecruising.co.uk/wp-content/cache/min/1/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css?ver=1744621464"
          type="text/css"
          media="all"
        />
        <link
          data-minify="1"
          rel="stylesheet"
          id="magnific-popup-css-css"
          href="https://www.imaginecruising.co.uk/wp-content/cache/min/1/ajax/libs/magnific-popup.js/1.0.1/magnific-popup.min.css?ver=1744621464"
          type="text/css"
          media="all"
        />
        <link
          data-minify="1"
          rel="stylesheet"
          id="flexslider-css"
          href="https://www.imaginecruising.co.uk/wp-content/cache/min/1/ajax/libs/flexslider/2.7.2/flexslider.min.css?ver=1744621464"
          type="text/css"
          media="all"
        />
        <link
          data-minify="1"
          rel="stylesheet"
          id="nice-select-css-css"
          href="https://www.imaginecruising.co.uk/wp-content/cache/min/1/ajax/libs/jquery-nice-select/1.1.0/css/nice-select.min.css?ver=1744621464"
          type="text/css"
          media="all"
        />
        <link
          data-minify="1"
          rel="stylesheet"
          id="slick-css"
          href="https://www.imaginecruising.co.uk/wp-content/cache/min/1/ajax/libs/slick-carousel/1.9.0/slick.min.css?ver=1744621464"
          type="text/css"
          media="all"
        />
        <link
          data-minify="1"
          rel="stylesheet"
          id="slick-themes-css"
          href="https://www.imaginecruising.co.uk/wp-content/cache/min/1/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css?ver=1744621464"
          type="text/css"
          media="all"
        />
        <link
          data-minify="1"
          rel="stylesheet"
          id="jquery-ui-css"
          href="https://www.imaginecruising.co.uk/wp-content/cache/min/1/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css?ver=1744621464"
          type="text/css"
          media="all"
        />
        <link
          data-minify="1"
          rel="stylesheet"
          id="jquery-ui-structure-css"
          href="https://www.imaginecruising.co.uk/wp-content/cache/min/1/ajax/libs/jqueryui/1.12.1/jquery-ui.structure.min.css?ver=1744621465"
          type="text/css"
          media="all"
        />
        <link
          data-minify="1"
          rel="stylesheet"
          id="jquery-ui-theme-css"
          href="https://www.imaginecruising.co.uk/wp-content/cache/min/1/ajax/libs/jqueryui/1.12.1/themes/base/jquery-ui.min.css?ver=1744621465"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="google-fonts-roboto-css"
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&#038;display=swap&#038;ver=6.7.2"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="google-fonts-raleway-css"
          href="https://fonts.googleapis.com/css2?family=Raleway%3Awght%40400%3B700&#038;display=swap&#038;ver=6.7.2"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="google-fonts-lora-css"
          href="https://fonts.googleapis.com/css2?family=Lora%3Aital%2Cwght%400%2C400..700%3B1%2C400..700&#038;display=swap&#038;ver=6.7.2"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="google-fonts-montserrat-css"
          href="https://fonts.googleapis.com/css2?family=Montserrat%3Aital%2Cwght%400%2C100..900%3B1%2C100..900&#038;display=swap&#038;ver=6.7.2"
          type="text/css"
          media="all"
        />
        <link
          data-minify="1"
          rel="stylesheet"
          id="adobe-typekit-css"
          href="https://www.imaginecruising.co.uk/wp-content/cache/min/1/liz3xwv.css?ver=1744621465"
          type="text/css"
          media="all"
        />
        <link
          data-minify="1"
          rel="stylesheet"
          id="builder-style-css"
          href="https://www.imaginecruising.co.uk/wp-content/cache/min/1/wp-content/themes/imagine-rebrand/css/builder-style.css?ver=1744621465"
          type="text/css"
          media="all"
        />
        <link
          data-minify="1"
          rel="stylesheet"
          id="iprogress-style-css"
          href="https://www.imaginecruising.co.uk/wp-content/cache/min/1/wp-content/themes/imagine-rebrand/css/style.css?ver=1744621465"
          type="text/css"
          media="all"
        />
        <link
          data-minify="1"
          rel="stylesheet"
          id="iprogress-style-craig-css"
          href="https://www.imaginecruising.co.uk/wp-content/cache/min/1/wp-content/themes/imagine-rebrand/css/style-craig.css?ver=1744621465"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="single-cruise-css"
          href="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/css/single-cruise.css?ver=1734947786"
          type="text/css"
          media="all"
        />
        <link
          data-minify="1"
          rel="stylesheet"
          id="destinations-css"
          href="https://www.imaginecruising.co.uk/wp-content/cache/min/1/wp-content/themes/imagine-rebrand/css/destinations.css?ver=1744621465"
          type="text/css"
          media="all"
        />
        <link
          data-minify="1"
          rel="stylesheet"
          id="leaflet-css"
          href="https://www.imaginecruising.co.uk/wp-content/cache/min/1/leaflet@1.6.0/dist/leaflet.css?ver=1744621465"
          type="text/css"
          media="all"
        />
        <link
          data-minify="1"
          rel="stylesheet"
          id="page-custom-css"
          href="https://www.imaginecruising.co.uk/wp-content/cache/min/1/wp-content/themes/imagine-rebrand/css/page-custom.css?ver=1744621465"
          type="text/css"
          media="all"
        />
        <link
          data-minify="1"
          rel="stylesheet"
          id="cg-styles-css"
          href="https://www.imaginecruising.co.uk/wp-content/cache/min/1/wp-content/themes/imagine-rebrand/css/cg-styles.css?ver=1744621465"
          type="text/css"
          media="all"
        />
        <link
          data-minify="1"
          rel="stylesheet"
          id="site-redesign-css"
          href="https://www.imaginecruising.co.uk/wp-content/cache/min/1/wp-content/themes/imagine-rebrand/css/site-redesign.css?ver=1744621465"
          type="text/css"
          media="all"
        />
        <link
          data-minify="1"
          rel="stylesheet"
          id="landingPage-css"
          href="https://www.imaginecruising.co.uk/wp-content/cache/min/1/wp-content/themes/imagine-rebrand/css/landing-page.css?ver=1744621465"
          type="text/css"
          media="all"
        />
        <link
          data-minify="1"
          rel="stylesheet"
          id="custom-scroll-css"
          href="https://www.imaginecruising.co.uk/wp-content/cache/min/1/wp-content/themes/imagine-rebrand/css/jquery.mCustomScrollbar.css?ver=1744621465"
          type="text/css"
          media="all"
        />
        <link
          data-minify="1"
          rel="stylesheet"
          id="satoshi-font-css"
          href="https://www.imaginecruising.co.uk/wp-content/cache/min/1/wp-content/themes/imagine-rebrand/fonts/Satoshi/css/satoshi.css?ver=1744621465"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="google-fonts-charm-css"
          href="https://fonts.googleapis.com/css2?family=Charm%3Awght%40700&#038;display=swap&#038;ver=6.7.2"
          type="text/css"
          media="all"
        />
        <link
          data-minify="1"
          rel="stylesheet"
          id="single-agent2-style-css"
          href="https://www.imaginecruising.co.uk/wp-content/cache/min/1/wp-content/themes/imagine-rebrand/css/single-agent2.css?ver=1744621465"
          type="text/css"
          media="all"
        />
        <link
          data-minify="1"
          rel="stylesheet"
          id="operator-cruise-tour-style-css"
          href="https://www.imaginecruising.co.uk/wp-content/cache/min/1/wp-content/themes/imagine-rebrand/css/single-operator-cruise-tour.css?ver=1744621465"
          type="text/css"
          media="all"
        />
        {/* <script
          type="text/javascript"
          src="https://www.imaginecruising.co.uk/wp-includes/js/jquery/jquery.min.js?ver=3.7.1"
          id="jquery-core-js"
        ></script>
        <script
          type="text/javascript"
          src="https://www.imaginecruising.co.uk/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1"
          id="jquery-migrate-js"
        ></script> */}
        <script
          type="text/javascript"
          src="https://kit.fontawesome.com/df89c64e34.js?ver=6.7.2"
          id="fontawesome-js"
          defer
        ></script>
        <link rel="shortlink" href="https://www.imaginecruising.co.uk/" />
      </Head>
      {/* root placeholder for the app, which we add components to using route data */}
      <div className={mainClassPageEditing}>
        <header>
          <div id="header">{route && <Placeholder name="headless-header" rendering={route} />}</div>
        </header>
        <main>
          <div id="container">
            <div id="content">
              {route && <Placeholder name="headless-main" rendering={route} />}
            </div>
          </div>
        </main>
        <footer>
          <div id="footer">{route && <Placeholder name="headless-footer" rendering={route} />}</div>
        </footer>
      </div>

      {/* <body className="home page-template-default page page-id-972"> */}

      <div id="search">
        {/* <form action="/" method="get">
          <input
            onChange={(e) => console.log(e.target.value)}
            type="text"
            name="s"
            value=""
            placeholder="Search"
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form> */}
      </div>
      <div data-ga-element="mobile-navigation" id="mobile-navigation">
        <div data-ga-element="mobile-nav-close" className="close">
          <img
            className=""
            src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/close-white.svg"
          />
        </div>
        <div className="custom-menus">
          <ul
            data-ga-element="mobile-custom-links"
            id="custom-nav"
            className="flex flex-justify-between flex-align-left"
          >
            <li
              data-ga-element="mobile-custom-link"
              key="0"
              className="top-level "
              data-menu="Home"
            >
              <Link href="https://www.imaginecruising.co.uk/">
                <div className="child-name">
                  <span>Home</span>
                  <div
                    style={{
                      backgroundImage:
                        'https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Home-nav-images-mobile-desktop-300x158-.jpg',
                    }}
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li
              data-ga-element="mobile-custom-link"
              key="1"
              className="top-level "
              data-menu="Cruise Deals"
            >
              <Link href="https://www.imaginecruising.co.uk/cruise-deals/">
                <div className="child-name">
                  <span>Cruise Deals</span>
                  <div
                    style={{
                      backgroundImage:
                        'https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Cruise-Deals-nav-images-mobile-desktop-300x158-1-300x158.jpg',
                    }}
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li
              data-ga-element="mobile-custom-link"
              key="2"
              className="top-level has-children"
              data-menu="Holiday Types"
            >
              <Link href="https://www.imaginecruising.co.uk/holiday-types/">
                <div className="child-name">
                  <span>
                    Holiday Types <i className="fa-solid fa-chevron-right" aria-hidden></i>
                  </span>
                  <div
                    style={{
                      backgroundImage:
                        'https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/shutterstock_1917467366-holiday_types.jpg',
                    }}
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li
              data-ga-element="mobile-custom-link"
              key="3"
              className="top-level "
              data-menu="Cruise from the UK"
            >
              <Link href="https://www.imaginecruising.co.uk/cruise-from-the-uk/">
                <div className="child-name">
                  <span>Cruise from the UK</span>
                  <div
                    style={{
                      backgroundImage:
                        'https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Cruise_From_UK_Tile.jpg',
                    }}
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li
              data-ga-element="mobile-custom-link"
              key="4"
              className="top-level "
              data-menu="River Cruising"
            >
              <Link href="https://www.imaginecruising.co.uk/river-cruise-collection/">
                <div className="child-name">
                  <span>River Cruising</span>
                  <div
                    style={{
                      backgroundImage:
                        'https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-River-300x158.jpg',
                    }}
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li
              data-ga-element="mobile-custom-link"
              key="5"
              className="top-level has-children"
              data-menu="Cruise Lines"
            >
              <Link href="https://www.imaginecruising.co.uk/cruise-lines/">
                <div className="child-name">
                  <span>
                    Cruise Lines <i className="fa-solid fa-chevron-right" aria-hidden></i>
                  </span>
                  <div
                    style={{
                      backgroundImage:
                        'https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Cruise-Lines-nav-images-mobile-desktop-300x158-OCo-2-300x158.jpg',
                    }}
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li
              data-ga-element="mobile-custom-link"
              key="6"
              className="top-level has-children"
              data-menu="Destinations"
            >
              <Link href="https://www.imaginecruising.co.uk/destinations/">
                <div className="child-name">
                  <span>
                    Destinations <i className="fa-solid fa-chevron-right" aria-hidden></i>
                  </span>
                  <div
                    style={{
                      backgroundImage:
                        'https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/View-all-nav-images-mobile-desktop-300x158-Destination-OCo-3-300x158.jpg',
                    }}
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li
              data-ga-element="mobile-custom-link"
              key="7"
              className="top-level "
              data-menu="About us"
            >
              <Link href="https://www.imaginecruising.co.uk/about-us/">
                <div className="child-name">
                  <span>About us</span>
                  <div
                    style={{
                      backgroundImage:
                        'https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-About-us-300x158.jpg',
                    }}
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <div
              style={{
                backgroundImage:
                  'https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Manage-my-Booking_320x179-1.jpg',
              }}
              className="header-right rocket-lazyload"
            >
              <div className="dark-overlay absolute-zero"></div>
              <div className="phone-title">Holiday Enquiries</div>
              <div className="header-telephone">
                <Link className="fsource__tel" href="tel:0800 840 5801" aria-label="Telephone">
                  0800 840 5801
                </Link>
              </div>
              <div className="schedule">Mon - Sun 9am-8pm</div>
              <div data-ga-element="mobile-manage-my-booking" className="manage-booking">
                <Link
                  className=""
                  href="https://www.imaginecruising.co.uk/manage-my-booking/"
                  target="_blank"
                  rel="noopener"
                >
                  Manage my booking
                </Link>
              </div>
            </div>
          </ul>
          <ul
            data-ga-element="mobile-custom-sub-nav"
            key="2"
            className="custom-sub-nav"
            data-parent="Holiday Types"
          >
            <div className="custom-sub-prev">
              <i className="fa-solid fa-chevron-left" aria-hidden></i> Holiday Types
            </div>
            <li data-ga-element="mobile-custom-sub-nav-link" key="0" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/holiday-types/cruise-touring/">
                <div className="child-name">
                  <span>Cruise & Touring</span>
                  <div
                    style={{
                      backgroundImage:
                        'https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Cruise-and-Touring.jpg',
                    }}
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li data-ga-element="mobile-custom-sub-nav-link" key="1" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/holiday-types/cruise-rail/">
                <div className="child-name">
                  <span>Cruise & Rail</span>
                  <div
                    style={{
                      backgroundImage:
                        'https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Cruise-and-Rail-1.jpg',
                    }}
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li data-ga-element="mobile-custom-sub-nav-link" key="2" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/holiday-types/cruise-stay/">
                <div className="child-name">
                  <span>Cruise & Stay</span>
                  <div
                    style={{
                      backgroundImage:
                        'https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Cruise-and-Rail-OCo-1-1-300x158.jpg',
                    }}
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li data-ga-element="mobile-custom-sub-nav-link" key="3" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/holiday-types/cruise-event/">
                <div className="child-name">
                  <span>Cruise & Event</span>
                  <div
                    style={{
                      backgroundImage:
                        'https://www.imaginecruising.co.uk/wp-content/uploads/2023/10/Cruise-Event-300x136.jpg',
                    }}
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li data-ga-element="mobile-custom-sub-nav-link" key="4" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/cruise-from-the-uk/">
                <div className="child-name">
                  <span>Cruise from the UK</span>
                  <div
                    style={{
                      backgroundImage:
                        'https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Cruise_From_UK_Tile.jpg',
                    }}
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
          </ul>
          <ul
            data-ga-element="mobile-custom-sub-nav"
            key="5"
            className="custom-sub-nav"
            data-parent="Cruise Lines"
          >
            <div className="custom-sub-prev">
              <i className="fa-solid fa-chevron-left" aria-hidden></i> Cruise Lines
            </div>
            <li data-ga-element="mobile-custom-sub-nav-link" key="0" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/cruise-lines/azamara/">
                <div className="child-name">
                  <span>Azamara</span>
                  <div
                    style={{
                      backgroundImage:
                        'https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Azamara-OCo-1-300x158.jpg',
                    }}
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li data-ga-element="mobile-custom-sub-nav-link" key="1" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/cruise-lines/celebrity-cruises/">
                <div className="child-name">
                  <span>Celebrity </span>
                  <div
                    style={{
                      backgroundImage:
                        'https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Celebrity-OCo-1-300x158.jpg',
                    }}
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li data-ga-element="mobile-custom-sub-nav-link" key="2" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/cruise-lines/cunard-line/">
                <div className="child-name">
                  <span>Cunard</span>
                  <div
                    style={{
                      backgroundImage:
                        'https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Cunard-OCo-1-300x158.jpg',
                    }}
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li data-ga-element="mobile-custom-sub-nav-link" key="3" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/cruise-lines/holland-america-line/">
                <div className="child-name">
                  <span>Holland America Line</span>
                  <div
                    style={{
                      backgroundImage:
                        'https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-HAL-OCo-1-300x158.jpg',
                    }}
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li data-ga-element="mobile-custom-sub-nav-link" key="4" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/cruise-lines/po-cruises/">
                <div className="child-name">
                  <span>P&O</span>
                  <div
                    style={{
                      backgroundImage:
                        'https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-PO-OCo-1-300x158.jpg',
                    }}
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li data-ga-element="mobile-custom-sub-nav-link" key="5" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/cruise-lines/princess-cruises/">
                <div className="child-name">
                  <span>Princess</span>
                  <div
                    style={{
                      backgroundImage:
                        'https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Princess-OCo-1-300x158.jpg',
                    }}
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li data-ga-element="mobile-custom-sub-nav-link" key="6" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/cruise-lines/silversea-cruises/">
                <div className="child-name">
                  <span>Silversea</span>
                  <div
                    style={{
                      backgroundImage:
                        'https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Silversea-1-300x158.jpg"',
                    }}
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li data-ga-element="mobile-custom-sub-nav-link" key="7" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/cruise-lines/">
                <div className="child-name">
                  <span>View all </span>
                  <div
                    style={{
                      backgroundImage:
                        'https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Cruise-Line-300x158.jpg',
                    }}
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
          </ul>
          <ul
            data-ga-element="mobile-custom-sub-nav"
            key="6"
            className="custom-sub-nav"
            data-parent="Destinations"
          >
            <div className="custom-sub-prev">
              <i className="fa-solid fa-chevron-left" aria-hidden></i> Destinations
            </div>
            <li data-ga-element="mobile-custom-sub-nav-link" key="0" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/destinations/africa/">
                <div className="child-name">
                  <span>Africa</span>
                  <div
                    style={{
                      backgroundImage:
                        'https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Africa.jpg',
                    }}
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li data-ga-element="mobile-custom-sub-nav-link" key="1" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/destinations/asia/">
                <div className="child-name">
                  <span>Asia</span>
                  <div
                    style={{
                      backgroundImage:
                        'https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Asia-nav-images-mobile-desktop-300x158-Destination.jpg',
                    }}
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li data-ga-element="mobile-custom-sub-nav-link" key="2" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/australia-and-new-zealand/">
                <div className="child-name">
                  <span>Australia & New Zealand</span>
                  <div
                    style={{
                      backgroundImage:
                        'https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Australia-nav-images-mobile-desktop-300x158-Destination-OCo-1.jpg',
                    }}
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li data-ga-element="mobile-custom-sub-nav-link" key="3" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/destinations/caribbean/">
                <div className="child-name">
                  <span>Caribbean</span>
                  <div
                    style={{
                      backgroundImage:
                        'https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Caribbean-nav-images-mobile-desktop-300x158-Destination-OCo-2.jpg',
                    }}
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li data-ga-element="mobile-custom-sub-nav-link" key="4" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/destinations/europe/">
                <div className="child-name">
                  <span>Europe</span>
                  <div
                    style={{
                      backgroundImage:
                        'https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Europe-nav-images-mobile-desktop-300x158-Destination-OCo-4-300x158.jpg',
                    }}
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li data-ga-element="mobile-custom-sub-nav-link" key="5" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/destinations/indian-ocean/">
                <div className="child-name">
                  <span>Indian Ocean</span>
                  <div
                    style={{
                      backgroundImage:
                        'https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Indian-Ocean-nav-images-mobile-desktop-300x158-Destination-OCo-5-300x158.jpg',
                    }}
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li data-ga-element="mobile-custom-sub-nav-link" key="6" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/destinations/indian-subcontinent/">
                <div className="child-name">
                  <span>Indian Subcontinent </span>
                  <div
                    style={{
                      backgroundImage:
                        'https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Indian-sub-1-300x158.jpg',
                    }}
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li data-ga-element="mobile-custom-sub-nav-link" key="7" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/destinations/middle-east/">
                <div className="child-name">
                  <span>Middle East</span>
                  <div
                    style={{
                      backgroundImage:
                        'https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Middle-East-nav-images-mobile-desktop-300x158-Destination-OCo-6-300x158.jpg',
                    }}
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li data-ga-element="mobile-custom-sub-nav-link" key="8" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/north-america/">
                <div className="child-name">
                  <span>North America</span>
                  <div
                    style={{
                      backgroundImage:
                        'https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/North-America-1.jpg',
                    }}
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li data-ga-element="mobile-custom-sub-nav-link" key="9" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/destinations/south-america/">
                <div className="child-name">
                  <span>South America</span>
                  <div
                    style={{
                      backgroundImage:
                        'https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/South-America-nav-images-mobile-desktop-300x158-Destination-OCo-7-300x158.jpg',
                    }}
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li data-ga-element="mobile-custom-sub-nav-link" key="10" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/cruise-from-the-uk/">
                <div className="child-name">
                  <span>Cruise from the UK</span>
                  <div
                    style={{
                      backgroundImage:
                        'https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Cruise_From_UK_Tile.jpg',
                    }}
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li data-ga-element="mobile-custom-sub-nav-link" key="11" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/destinations/">
                <div className="child-name">
                  <span>View all</span>
                  <div
                    style={{
                      backgroundImage:
                        'https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/View-all-nav-images-mobile-desktop-300x158-Destination-OCo-3-300x158.jpg',
                    }}
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <ul data-ga-element="mobile-socials" className="mobile-socials">
          <li data-ga-element="mobile-socials-link" key="0">
            <Link href="https://www.facebook.com/imaginecruising">
              <i className="fa-classic fa-brands fa-square-facebook" aria-hidden></i>
            </Link>
          </li>
          <li data-ga-element="mobile-socials-link" key="1">
            <Link href="https://www.instagram.com/imaginecruising/">
              <i className="fa-classic fa-brands fa-square-instagram" aria-hidden></i>
            </Link>
          </li>
        </ul>
      </div>
      <div id="mobile-background"></div>
      <div
        data-ga-element="brochure-request"
        id="brochure-request-overlay"
        className="flex flex-align-center flex-justify-center"
      >
        <div id="brochure-request-popup">
          <h3 className="blue-line">Request a Brochure</h3>
          <p>Enter your details below or call us on 0800 008 6677</p>
          Please select a valid form.
        </div>
      </div>
      <div data-ga-element="cruise-enquiry-popup" id="cruise-enquiry-popup">
        <h3 className="blue-line">Enquire Now</h3>
        <div className="flex flex-align-start">
          Please select a valid form.
          <div className="details text-center">
            <span className="image">
              <img src="" />
            </span>
            <p></p>
          </div>
        </div>
      </div>
      <div data-ga-element="timed-popup-form" id="timed-popup" data-delay="60">
        <div className="bg-spacer"></div>
        <div className="timed-wrapper">
          <div
            style={{
              backgroundSize: 'cover',
              backgroundImage:
                'https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Frame-6-2-768x610.jpg',
            }}
            className="timed-form rocket-lazyload"
          >
            <div className="form-overlay"></div>
            <span data-ga-element="timed-popup-close" className="timed-close">
              <img
                className="close-white"
                src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/close-white.svg"
              />

              <img
                className="close-hover"
                src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/close-gold.svg"
              />
            </span>
          </div>
        </div>
      </div>
      {/* <script
        type="text/javascript"
        src="https://www.imaginecruising.co.uk/wp-includes/js/dist/vendor/moment.min.js?ver=2.30.1"
        id="moment-js"
        data-rocket-defer
        defer
      ></script>
      <script
        type="text/javascript"
        src="https://www.imaginecruising.co.uk/wp-includes/js/jquery/ui/core.min.js?ver=1.13.3"
        id="jquery-ui-core-js"
      ></script>
      <script
        type="text/javascript"
        src="https://www.imaginecruising.co.uk/wp-includes/js/jquery/ui/mouse.min.js?ver=1.13.3"
        id="jquery-ui-mouse-js"
      ></script>
      <script
        type="text/javascript"
        src="https://www.imaginecruising.co.uk/wp-includes/js/jquery/ui/slider.min.js?ver=1.13.3"
        id="jquery-ui-slider-js"
      ></script>
      <script
        data-minify="1"
        type="text/javascript"
        src="https://www.imaginecruising.co.uk/wp-content/cache/min/1/npm/jquery-ui-touch-punch@0.2.3/jquery.ui.touch-punch.min.js?ver=1744621466"
        id="jquery-ui-touch-js"
      ></script>
      <script
        type="rocketlazyloadscript"
        data-minify="1"
        data-rocket-type="text/javascript"
        data-rocket-src="https://www.imaginecruising.co.uk/wp-content/cache/min/1/wp-content/themes/imagine-rebrand/js/search-form.js?ver=1744621466"
        id="search-form-js"
        data-rocket-defer
        defer
      ></script>
      <script
        data-minify="1"
        type="text/javascript"
        src="https://www.imaginecruising.co.uk/wp-content/cache/min/1/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js?ver=1744621466"
        id="fancybox-js"
      ></script>
      <script
        data-minify="1"
        type="text/javascript"
        src="https://www.imaginecruising.co.uk/wp-content/cache/min/1/npm/magnific-popup@1.1.0/dist/jquery.magnific-popup.min.js?ver=1744621466"
        id="magnific-popup-js"
      ></script>
      <script
        data-minify="1"
        type="text/javascript"
        src="https://www.imaginecruising.co.uk/wp-content/cache/min/1/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js?ver=1744621466"
        id="jquery-ui-js"
      ></script>
      <script
        data-minify="1"
        type="text/javascript"
        src="https://www.imaginecruising.co.uk/wp-content/cache/min/1/ajax/libs/jquery-nice-select/1.1.0/js/jquery.nice-select.min.js?ver=1744621467"
        id="nice-select-js-js"
      ></script>
      <script
        data-minify="1"
        type="text/javascript"
        src="https://www.imaginecruising.co.uk/wp-content/cache/min/1/ajax/libs/flexslider/2.7.2/jquery.flexslider.min.js?ver=1744621467"
        id="flexslider-js"
      ></script>
      <script
        type="text/javascript"
        src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/js/jquery.mCustomScrollbar.concat.min.js?ver=1734947792"
        id="custom-scroll-js"
      ></script> */}
      {/* <script
        data-minify="1"
        type="text/javascript"
        src="https://www.imaginecruising.co.uk/wp-content/cache/min/1/bootstrap/v5/tp.widget.bootstrap.min.js?ver=1744621467"
        id="tp-widget-js"
        defer
      ></script> */}
    </>
  );
};

export default Layout;
