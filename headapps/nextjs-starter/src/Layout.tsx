/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-sync-scripts */
/**
 * This Layout is needed for Starter Kit.
 */
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Placeholder, LayoutServiceData, Field, HTMLLink } from '@sitecore-jss/sitecore-jss-nextjs';
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
          data-rocket-preload
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
        <link rel="dns-prefetch" href="https://www.imaginecruising.co.uk//cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="https://www.imaginecruising.co.uk//kit.fontawesome.com" />
        <link rel="dns-prefetch" href="https://www.imaginecruising.co.uk//cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="https://www.imaginecruising.co.uk//unpkg.com" />
        <link rel="dns-prefetch" href="https://www.imaginecruising.co.uk//widget.trustpilot.com" />
        <link rel="dns-prefetch" href="https://www.imaginecruising.co.uk//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.imaginecruising.co.uk//use.typekit.net" />
        <style id="wp-emoji-styles-inline-css" type="text/css">
          {`
         img.wp-smiley, img.emoji {
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
        <style id="classic-theme-styles-inline-css" type="text/css">
          {`
         /*! This file is auto-generated */
         .wp-block-button__link{color:#fff;background-color:#32373c;border-radius:9999px;box-shadow:none;text-decoration:none;padding:calc(.667em + 2px) calc(1.333em + 2px);font-size:1.125em}.wp-block-file__button{background:#32373c;color:#fff;text-decoration:none}
      `}
        </style>
        <style id="global-styles-inline-css" type="text/css">
          {`  :root{--wp--preset--aspect-ratio--square: 1;--wp--preset--aspect-ratio--4-3: 4/3;--wp--preset--aspect-ratio--3-4: 3/4;--wp--preset--aspect-ratio--3-2: 3/2;--wp--preset--aspect-ratio--2-3: 2/3;--wp--preset--aspect-ratio--16-9: 16/9;--wp--preset--aspect-ratio--9-16: 9/16;--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);--wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);}:where(.is-layout-flex){gap: 0.5em;}:where(.is-layout-grid){gap: 0.5em;}body .is-layout-flex{display: flex;}.is-layout-flex{flex-wrap: wrap;align-items: center;}.is-layout-flex > :is(*, div){margin: 0;}body .is-layout-grid{display: grid;}.is-layout-grid > :is(*, div){margin: 0;}:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}
         :where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}
         :where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}
         :root :where(.wp-block-pullquote){font-size: 1.5em;line-height: 1.6;}
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
        <script
          type="text/javascript"
          src="https://www.imaginecruising.co.uk/wp-includes/js/jquery/jquery.min.js?ver=3.7.1"
          id="jquery-core-js"
        ></script>
        <script
          type="text/javascript"
          src="https://www.imaginecruising.co.uk/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1"
          id="jquery-migrate-js"
        ></script>
        <script
          type="rocketlazyloadscript"
          data-rocket-type="text/javascript"
          data-rocket-src="https://kit.fontawesome.com/df89c64e34.js?ver=6.7.2"
          id="fontawesome-js"
          data-rocket-defer
          defer
        ></script>
        <script
          type="rocketlazyloadscript"
          data-minify="1"
          data-rocket-type="text/javascript"
          data-rocket-src="https://www.imaginecruising.co.uk/wp-content/cache/min/1/leaflet@1.6.0/dist/leaflet.js?ver=1744621466"
          id="leaflet-js"
          data-rocket-defer
          defer
        ></script>
        <link rel="https://api.w.org/" href="https://www.imaginecruising.co.uk/wp-json/" />
        <link
          rel="alternate"
          title="JSON"
          type="application/json"
          href="https://www.imaginecruising.co.uk/wp-json/wp/v2/pages/972"
        />
        <link rel="shortlink" href="https://www.imaginecruising.co.uk/" />
        <link
          rel="alternate"
          title="oEmbed (JSON)"
          type="application/json+oembed"
          href="https://www.imaginecruising.co.uk/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.imaginecruising.co.uk%2F"
        />
        <link
          rel="alternate"
          title="oEmbed (XML)"
          type="text/xml+oembed"
          href="https://www.imaginecruising.co.uk/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.imaginecruising.co.uk%2F&#038;format=xml"
        />
        <script type="rocketlazyloadscript" data-rocket-type="text/javascript">
          {`
         (function(c,l,a,r,i,t,y){
         	c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;
         	t.src="https://www.clarity.ms/tag/"+i+"?ref=wordpress";y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
         })(window, document, "clarity", "script", "kqus9aw9za");
         `}
        </script>
        <script type="rocketlazyloadscript">{`document.documentElement.className += " js";`}</script>
        <noscript>
          <style id="rocket-lazyload-nojs-css">{`.rll-youtube-player, [data-lazy-src]{display:none !important;}`}</style>
        </noscript>
        <meta
          name="generator"
          content="WP Rocket 3.18.3"
          data-wpr-features="wpr_delay_js wpr_defer_js wpr_minify_js wpr_lazyload_images wpr_oci wpr_minify_css wpr_desktop"
        />
      </Head>

      {/* root placeholder for the app, which we add components to using route data */}
      <div className={mainClassPageEditing}>
        <header>
          <div id="header">{route && <Placeholder name="headless-header" rendering={route} />}</div>
        </header>
        <main>
          <div id="content">{route && <Placeholder name="headless-main" rendering={route} />}</div>
        </main>
        <footer>
          <div id="footer">{route && <Placeholder name="headless-footer" rendering={route} />}</div>
        </footer>
      </div>

      {/* <body className="home page-template-default page page-id-972"> */}
      <div id="container">
        <header>
          <div
            data-ga-element="header-content"
            id="header-content"
            className="flex flex-justify-between content-margin"
          >
            <div className="header-left">
              <div className="header-logo-cont">
                <div data-ga-element="header-logo" id="logo">
                  <Link href="https://www.imaginecruising.co.uk" title="Imagine Cruising">
                    <img
                      id="dark-logo--image"
                      className=""
                      alt="Imagine Cruising"
                      src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/logos/black-white-no-reg.png"
                    />
                    <noscript>
                      <img
                        id="dark-logo--image"
                        className=""
                        src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/logos/black-white-no-reg.png"
                        alt="Imagine Cruising"
                      />
                    </noscript>
                    {/* <span className="visuallyhidden">Imagine Cruising</span> */}
                  </Link>
                </div>
                <div className="header-favourites">
                  <div className="favourites-top">
                    <Link
                      className="favourites-count"
                      href="https://www.imaginecruising.co.uk/favourites/"
                      data-favourites-count="0"
                    >
                      <span>
                        Favourites <i className="fa-regular fa-heart"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* header-left */}
            <div className="header-right">
              <div className="phone-title">
                <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/phone_icon.svg" />
                Holiday Enquiries
              </div>
              <div data-ga-element="header-telephone" className="header-telephone">
                <Link
                  className="fsource__tel"
                  href=""
                  data-default="0800 840 5801 "
                  aria-label="Telephone"
                ></Link>
              </div>
              <div className="schedule">Mon - Sun: 9am - 8pm</div>
            </div>
            {/* header-right */}
            <div data-ga-element="mobile-nav-block" id="mobile-nav-block">
              <div className="item-menu">
                <Link
                  className="fsource__tel no-text"
                  href="tel:0800 840 5801"
                  aria-label="Telephone"
                >
                  <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/phone_icon.svg" />
                </Link>
              </div>
              <div data-ga-element="mobile-logo" className="mobile-logo">
                <Link href="https://www.imaginecruising.co.uk">
                  <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/logos/black-white-no-reg-mobile.png" />
                </Link>
              </div>
              <div className="item-menu" id="mobile-navigation-control">
                <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/hamburger_menu_icon.svg" />
              </div>
            </div>
          </div>
          <div data-ga-element="header-navigation-container" className="header-nav-cont">
            <nav className="header-nav">
              <ul
                data-ga-element="header-nav-list"
                id="custom-nav"
                className="flex flex-justify-between flex-align-left"
              >
                <li data-ga-element="header-nav-list-item" className="top-level " data-ga-index="0">
                  <Link href="https://www.imaginecruising.co.uk/">Home</Link>
                </li>
                <li data-ga-element="header-nav-list-item" className="top-level " data-ga-index="1">
                  <Link href="https://www.imaginecruising.co.uk/cruise-deals/">Cruise Deals</Link>
                </li>
                <li
                  data-ga-element="header-nav-list-item"
                  className="top-level has-children"
                  data-ga-index="2"
                >
                  <Link href="https://www.imaginecruising.co.uk/holiday-types/">
                    Holiday Types <i className="fa-solid fa-chevron-down"></i>
                  </Link>
                  <ul className="custom-sub-nav">
                    <li className="sub-page" data-ga-index="0">
                      <Link href="https://www.imaginecruising.co.uk/holiday-types/cruise-touring/">
                        <div className="child-name">
                          <span>Cruise & Touring</span>
                          <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Cruise-and-Touring.jpg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Cruise-and-Touring.jpg" />
                          </noscript>
                        </div>
                      </Link>
                    </li>
                    <li className="sub-page" data-ga-index="1">
                      <Link href="https://www.imaginecruising.co.uk/holiday-types/cruise-rail/">
                        <div className="child-name">
                          <span>Cruise & Rail</span>
                          <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Cruise-and-Rail-1.jpg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Cruise-and-Rail-1.jpg" />
                          </noscript>
                        </div>
                      </Link>
                    </li>
                    <li className="sub-page" data-ga-index="2">
                      <Link href="https://www.imaginecruising.co.uk/holiday-types/cruise-stay/">
                        <div className="child-name">
                          <span>Cruise & Stay</span>
                          <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Cruise-and-Rail-OCo-1-1-300x158.jpg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Cruise-and-Rail-OCo-1-1-300x158.jpg" />
                          </noscript>
                        </div>
                      </Link>
                    </li>
                    <li className="sub-page" data-ga-index="3">
                      <Link href="https://www.imaginecruising.co.uk/holiday-types/cruise-event/">
                        <div className="child-name">
                          <span>Cruise & Event</span>
                          <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2023/10/Cruise-Event-300x136.jpg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2023/10/Cruise-Event-300x136.jpg" />
                          </noscript>
                        </div>
                      </Link>
                    </li>
                    <li className="sub-page" data-ga-index="4">
                      <Link href="https://www.imaginecruising.co.uk/cruise-from-the-uk/">
                        <div className="child-name">
                          <span>Cruise from the UK</span>
                          <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Cruise_From_UK_Tile.jpg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Cruise_From_UK_Tile.jpg" />
                          </noscript>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li data-ga-element="header-nav-list-item" className="top-level " data-ga-index="3">
                  <Link href="https://www.imaginecruising.co.uk/cruise-from-the-uk/">
                    Cruise from the UK
                  </Link>
                </li>
                <li data-ga-element="header-nav-list-item" className="top-level " data-ga-index="4">
                  <Link href="https://www.imaginecruising.co.uk/river-cruise-collection/">
                    River Cruising
                  </Link>
                </li>
                <li
                  data-ga-element="header-nav-list-item"
                  className="top-level has-children"
                  data-ga-index="5"
                >
                  <Link href="https://www.imaginecruising.co.uk/cruise-lines/">
                    Cruise Lines <i className="fa-solid fa-chevron-down"></i>
                  </Link>
                  <ul className="custom-sub-nav">
                    <li className="sub-page" data-ga-index="0">
                      <Link href="https://www.imaginecruising.co.uk/cruise-lines/azamara/">
                        <div className="child-name">
                          <span>Azamara</span>
                          <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Azamara-OCo-1-300x158.jpg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Azamara-OCo-1-300x158.jpg" />
                          </noscript>
                        </div>
                      </Link>
                    </li>
                    <li className="sub-page" data-ga-index="1">
                      <Link href="https://www.imaginecruising.co.uk/cruise-lines/celebrity-cruises/">
                        <div className="child-name">
                          <span>Celebrity </span>
                          <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Celebrity-OCo-1-300x158.jpg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Celebrity-OCo-1-300x158.jpg" />
                          </noscript>
                        </div>
                      </Link>
                    </li>
                    <li className="sub-page" data-ga-index="2">
                      <Link href="https://www.imaginecruising.co.uk/cruise-lines/cunard-line/">
                        <div className="child-name">
                          <span>Cunard</span>
                          <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Cunard-OCo-1-300x158.jpg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Cunard-OCo-1-300x158.jpg" />
                          </noscript>
                        </div>
                      </Link>
                    </li>
                    <li className="sub-page" data-ga-index="3">
                      <Link href="https://www.imaginecruising.co.uk/cruise-lines/holland-america-line/">
                        <div className="child-name">
                          <span>Holland America Line</span>
                          <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-HAL-OCo-1-300x158.jpg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-HAL-OCo-1-300x158.jpg" />
                          </noscript>
                        </div>
                      </Link>
                    </li>
                    <li className="sub-page" data-ga-index="4">
                      <Link href="https://www.imaginecruising.co.uk/cruise-lines/po-cruises/">
                        <div className="child-name">
                          <span>P&O</span>
                          <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-PO-OCo-1-300x158.jpg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-PO-OCo-1-300x158.jpg" />
                          </noscript>
                        </div>
                      </Link>
                    </li>
                    <li className="sub-page" data-ga-index="5">
                      <Link href="https://www.imaginecruising.co.uk/cruise-lines/princess-cruises/">
                        <div className="child-name">
                          <span>Princess</span>
                          <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Princess-OCo-1-300x158.jpg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Princess-OCo-1-300x158.jpg" />
                          </noscript>
                        </div>
                      </Link>
                    </li>
                    <li className="sub-page" data-ga-index="6">
                      <Link href="https://www.imaginecruising.co.uk/cruise-lines/silversea-cruises/">
                        <div className="child-name">
                          <span>Silversea</span>
                          <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Silversea-1-300x158.jpg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Silversea-1-300x158.jpg" />
                          </noscript>
                        </div>
                      </Link>
                    </li>
                    <li className="sub-page" data-ga-index="7">
                      <Link href="https://www.imaginecruising.co.uk/cruise-lines/">
                        <div className="child-name">
                          <span>View all </span>
                          <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Cruise-Line-300x158.jpg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Cruise-Line-300x158.jpg" />
                          </noscript>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li
                  data-ga-element="header-nav-list-item"
                  className="top-level has-children"
                  data-ga-index="6"
                >
                  <Link href="https://www.imaginecruising.co.uk/destinations/">
                    Destinations <i className="fa-solid fa-chevron-down"></i>
                  </Link>
                  <ul className="custom-sub-nav">
                    <li className="sub-page" data-ga-index="0">
                      <Link href="https://www.imaginecruising.co.uk/destinations/africa/">
                        <div className="child-name">
                          <span>Africa</span>
                          <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Africa.jpg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Africa.jpg" />
                          </noscript>
                        </div>
                      </Link>
                    </li>
                    <li className="sub-page" data-ga-index="1">
                      <Link href="https://www.imaginecruising.co.uk/destinations/asia/">
                        <div className="child-name">
                          <span>Asia</span>
                          <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Asia-nav-images-mobile-desktop-300x158-Destination.jpg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Asia-nav-images-mobile-desktop-300x158-Destination.jpg" />
                          </noscript>
                        </div>
                      </Link>
                    </li>
                    <li className="sub-page" data-ga-index="2">
                      <Link href="https://www.imaginecruising.co.uk/australia-and-new-zealand/">
                        <div className="child-name">
                          <span>Australia & New Zealand</span>
                          <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Australia-nav-images-mobile-desktop-300x158-Destination-OCo-1.jpg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Australia-nav-images-mobile-desktop-300x158-Destination-OCo-1.jpg" />
                          </noscript>
                        </div>
                      </Link>
                    </li>
                    <li className="sub-page" data-ga-index="3">
                      <Link href="https://www.imaginecruising.co.uk/destinations/caribbean/">
                        <div className="child-name">
                          <span>Caribbean</span>
                          <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Caribbean-nav-images-mobile-desktop-300x158-Destination-OCo-2.jpg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Caribbean-nav-images-mobile-desktop-300x158-Destination-OCo-2.jpg" />
                          </noscript>
                        </div>
                      </Link>
                    </li>
                    <li className="sub-page" data-ga-index="4">
                      <Link href="https://www.imaginecruising.co.uk/destinations/europe/">
                        <div className="child-name">
                          <span>Europe</span>
                          <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Europe-nav-images-mobile-desktop-300x158-Destination-OCo-4-300x158.jpg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Europe-nav-images-mobile-desktop-300x158-Destination-OCo-4-300x158.jpg" />
                          </noscript>
                        </div>
                      </Link>
                    </li>
                    <li className="sub-page" data-ga-index="5">
                      <Link href="https://www.imaginecruising.co.uk/destinations/indian-ocean/">
                        <div className="child-name">
                          <span>Indian Ocean</span>
                          <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Indian-Ocean-nav-images-mobile-desktop-300x158-Destination-OCo-5-300x158.jpg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Indian-Ocean-nav-images-mobile-desktop-300x158-Destination-OCo-5-300x158.jpg" />
                          </noscript>
                        </div>
                      </Link>
                    </li>
                    <li className="sub-page" data-ga-index="6">
                      <Link href="https://www.imaginecruising.co.uk/destinations/indian-subcontinent/">
                        <div className="child-name">
                          <span>Indian Subcontinent </span>
                          <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Indian-sub-1-300x158.jpg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Indian-sub-1-300x158.jpg" />
                          </noscript>
                        </div>
                      </Link>
                    </li>
                    <li className="sub-page" data-ga-index="7">
                      <Link href="https://www.imaginecruising.co.uk/destinations/middle-east/">
                        <div className="child-name">
                          <span>Middle East</span>
                          <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Middle-East-nav-images-mobile-desktop-300x158-Destination-OCo-6-300x158.jpg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Middle-East-nav-images-mobile-desktop-300x158-Destination-OCo-6-300x158.jpg" />
                          </noscript>
                        </div>
                      </Link>
                    </li>
                    <li className="sub-page" data-ga-index="8">
                      <Link href="https://www.imaginecruising.co.uk/north-america/">
                        <div className="child-name">
                          <span>North America</span>
                          <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/North-America-1.jpg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/North-America-1.jpg" />
                          </noscript>
                        </div>
                      </Link>
                    </li>
                    <li className="sub-page" data-ga-index="9">
                      <Link href="https://www.imaginecruising.co.uk/destinations/south-america/">
                        <div className="child-name">
                          <span>South America</span>
                          <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/South-America-nav-images-mobile-desktop-300x158-Destination-OCo-7-300x158.jpg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/South-America-nav-images-mobile-desktop-300x158-Destination-OCo-7-300x158.jpg" />
                          </noscript>
                        </div>
                      </Link>
                    </li>
                    <li className="sub-page" data-ga-index="10">
                      <Link href="https://www.imaginecruising.co.uk/cruise-from-the-uk/">
                        <div className="child-name">
                          <span>Cruise from the UK</span>
                          <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Cruise_From_UK_Tile.jpg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Cruise_From_UK_Tile.jpg" />
                          </noscript>
                        </div>
                      </Link>
                    </li>
                    <li className="sub-page" data-ga-index="11">
                      <Link href="https://www.imaginecruising.co.uk/destinations/">
                        <div className="child-name">
                          <span>View all</span>
                          <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/View-all-nav-images-mobile-desktop-300x158-Destination-OCo-3-300x158.jpg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/View-all-nav-images-mobile-desktop-300x158-Destination-OCo-3-300x158.jpg" />
                          </noscript>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li data-ga-element="header-nav-list-item" className="top-level " data-ga-index="7">
                  <Link href="https://www.imaginecruising.co.uk/about-us/">About us</Link>
                </li>
                <li data-ga-element="manage-my-booking">
                  <Link
                    className=""
                    href="https://www.imaginecruising.co.uk/manage-my-booking/"
                    target="_blank"
                    rel="noopener"
                  >
                    <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/passenger_icon_white.svg" />
                    <noscript>
                      <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/passenger_icon_white.svg" />
                    </noscript>
                    Manage my booking
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <div id="content">
          <div className="home-intro-wrap ">
            <div
              id="home-video"
              data-ga-content="Home Page Video"
              data-ga-index="0"
              className="video-background"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                disablePictureInPicture
                disableRemotePlayback
                preload="auto"
                id="background-video"
                poster="https://www.imaginecruising.co.uk/wp-content/uploads/2025/03/homepage-train-frame.png"
              >
                <source
                  src="https://player.vimeo.com/progressive_redirect/playback/1039713923/rendition/1080p/file.mp4?loc=external&signature=63c620da5e2de6ff9143fe724968edabda4d179e1a69a28b0cb6a7cad8a21178#t=5"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div className="video-overlay">
                <div className="video-content">
                  <h1>More Than Just A Cruise</h1>
                </div>
                <div className="video-scroll">
                  <Link
                    href="#home-video-lower"
                    data-ga-element="home-video-scroll"
                    className="scroll-down"
                  >
                    <span>SCROLL</span>
                  </Link>
                </div>
              </div>
            </div>
            <div id="home-video-lower" data-ga-index="1">
              <div className="content-margin">
                <h2>Expert Creators of World-Class Cruise Holidays</h2>
                <p>
                  <b>
                    <span data-teams="true">
                      <strong>
                        Established in 2011, we are a leading travel provider with offices across
                        the globe, specialising in exceptional cruise holidays brimming with
                        enriching experiences that offer so much more than just a cruise.
                      </strong>
                    </span>
                  </b>
                </p>
                <p>
                  We create outstanding cruise holidays, seamlessly paired with immersive tours of
                  the world’s most <span data-teams="true">desirable </span>natural and man-made
                  marvels, enchanting rail journeys, exclusive events in unexpected locations, and
                  fabulous hotel stays at hand-picked accommodations.
                </p>
              </div>
            </div>
            <section data-ga-index="2" id="quick-search-section" className="">
              <div className="container">
                <div id="holiday-search-form">
                  <div className="inner">
                    <div className="form-wrap flex">
                      <div>
                        <span className="search-form-text">
                          Already seen something you like? Enter a code to lookup one of our
                          holidays
                        </span>
                      </div>
                      <div data-ga-element="holiday-search-form">
                        <div id="search-form">
                          <form action="https://www.imaginecruising.co.uk/search/" method="get">
                            <div id="search-form-container">
                              <div
                                className="search-form-autocomplete"
                                id="search-form-autocomplete"
                                data-type="autocomplete"
                              >
                                <div className="search-form-autocomplete-container">
                                  <div className="search-form-autocomplete-selected"></div>
                                  <div className="search-form-autocomplete-input">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      data-ga-element="search-form-autocomplete"
                                      id="cruiseappy-autocomplete"
                                      name="cruise_reference[]"
                                      type="text"
                                      placeholder="e.g. ASA2287"
                                      autoComplete="off"
                                    />
                                  </div>
                                </div>
                                <div className="search-form-autocomplete-options">
                                  <ul></ul>
                                </div>
                              </div>
                              <div className="search-form-autocomplete-selected-options-container"></div>
                              <button
                                data-ga-element="search-form-submit"
                                type="submit"
                                disabled
                                data-label="Go"
                              >
                                Go
                              </button>
                            </div>
                            <div id="search-form-options">
                              <div id="search-form-close">
                                <i
                                  data-ga-element="search-form-close"
                                  className="fa-solid fa-circle-xmark"
                                ></i>
                              </div>
                              <div
                                className="search-options-item"
                                id="search-options-destinations"
                                data-type="destinations"
                              >
                                <div className="search-options-container">
                                  <label
                                    data-ga-element="search-form-destination-option"
                                    htmlFor="sf_destination_0"
                                    className=""
                                  >
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="destination[]"
                                      id="sf_destination_0"
                                      value="Africa"
                                    />
                                    <span>Africa</span>
                                    <i
                                      data-ga-element="search-form-destination-option-remove"
                                      className="fa-solid fa-xmark"
                                    ></i>
                                  </label>
                                  <label
                                    data-ga-element="search-form-destination-option"
                                    htmlFor="sf_destination_1"
                                    className=""
                                  >
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="destination[]"
                                      id="sf_destination_1"
                                      value="Antarctica and Arctic"
                                    />
                                    <span>Antarctica and Arctic</span>
                                    <i
                                      data-ga-element="search-form-destination-option-remove"
                                      className="fa-solid fa-xmark"
                                    ></i>
                                  </label>
                                  <label
                                    data-ga-element="search-form-destination-option"
                                    htmlFor="sf_destination_2"
                                    className=""
                                  >
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="destination[]"
                                      id="sf_destination_2"
                                      value="Asia"
                                    />
                                    <span>Asia</span>
                                    <i
                                      data-ga-element="search-form-destination-option-remove"
                                      className="fa-solid fa-xmark"
                                    ></i>
                                  </label>
                                  <label
                                    data-ga-element="search-form-destination-option"
                                    htmlFor="sf_destination_3"
                                    className=""
                                  >
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="destination[]"
                                      id="sf_destination_3"
                                      value="Australia &#038; New Zealand"
                                    />
                                    <span>Australia &#038; New Zealand</span>
                                    <i
                                      data-ga-element="search-form-destination-option-remove"
                                      className="fa-solid fa-xmark"
                                    ></i>
                                  </label>
                                  <label
                                    data-ga-element="search-form-destination-option"
                                    htmlFor="sf_destination_4"
                                    className=""
                                  >
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="destination[]"
                                      id="sf_destination_4"
                                      value="Caribbean"
                                    />
                                    <span>Caribbean</span>
                                    <i
                                      data-ga-element="search-form-destination-option-remove"
                                      className="fa-solid fa-xmark"
                                    ></i>
                                  </label>
                                  <label
                                    data-ga-element="search-form-destination-option"
                                    htmlFor="sf_destination_5"
                                    className=""
                                  >
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="destination[]"
                                      id="sf_destination_5"
                                      value="Europe"
                                    />
                                    <span>Europe</span>
                                    <i
                                      data-ga-element="search-form-destination-option-remove"
                                      className="fa-solid fa-xmark"
                                    ></i>
                                  </label>
                                  <label
                                    data-ga-element="search-form-destination-option"
                                    htmlFor="sf_destination_6"
                                    className=""
                                  >
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="destination[]"
                                      id="sf_destination_6"
                                      value="Middle East"
                                    />
                                    <span>Middle East</span>
                                    <i
                                      data-ga-element="search-form-destination-option-remove"
                                      className="fa-solid fa-xmark"
                                    ></i>
                                  </label>
                                  <label
                                    data-ga-element="search-form-destination-option"
                                    htmlFor="sf_destination_7"
                                    className=""
                                  >
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="destination[]"
                                      id="sf_destination_7"
                                      value="North America"
                                    />
                                    <span>North America</span>
                                    <i
                                      data-ga-element="search-form-destination-option-remove"
                                      className="fa-solid fa-xmark"
                                    ></i>
                                  </label>
                                  <label
                                    data-ga-element="search-form-destination-option"
                                    htmlFor="sf_destination_8"
                                    className=""
                                  >
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="destination[]"
                                      id="sf_destination_8"
                                      value="South America"
                                    />
                                    <span>South America</span>
                                    <i
                                      data-ga-element="search-form-destination-option-remove"
                                      className="fa-solid fa-xmark"
                                    ></i>
                                  </label>
                                  <label
                                    data-ga-element="search-form-destination-option"
                                    htmlFor="sf_destination_9"
                                    className=""
                                  >
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="destination[]"
                                      id="sf_destination_9"
                                      value="Transatlantic"
                                    />
                                    <span>Transatlantic</span>
                                    <i
                                      data-ga-element="search-form-destination-option-remove"
                                      className="fa-solid fa-xmark"
                                    ></i>
                                  </label>
                                  <label
                                    data-ga-element="search-form-destination-option"
                                    htmlFor="sf_destination_10"
                                    className=""
                                  >
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="destination[]"
                                      id="sf_destination_10"
                                      value="Transatlantic
                                                   East Coast US"
                                    />
                                    <span>Transatlantic East Coast US</span>
                                    <i
                                      data-ga-element="search-form-destination-option-remove"
                                      className="fa-solid fa-xmark"
                                    ></i>
                                  </label>
                                  <label
                                    data-ga-element="search-form-destination-option"
                                    htmlFor="sf_destination_11"
                                    className=""
                                  >
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="destination[]"
                                      id="sf_destination_11"
                                      value="Transatlantic
                                                   Northern Europe"
                                    />
                                    <span>Transatlantic Northern Europe</span>
                                    <i
                                      data-ga-element="search-form-destination-option-remove"
                                      className="fa-solid fa-xmark"
                                    ></i>
                                  </label>
                                  <label
                                    data-ga-element="search-form-destination-option"
                                    htmlFor="sf_destination_12"
                                    className=""
                                  >
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="destination[]"
                                      id="sf_destination_12"
                                      value="West Coast US
                                                   South America"
                                    />
                                    <span>West Coast US South America</span>
                                    <i
                                      data-ga-element="search-form-destination-option-remove"
                                      className="fa-solid fa-xmark"
                                    ></i>
                                  </label>
                                  <label
                                    data-ga-element="search-form-destination-option"
                                    htmlFor="sf_destination_13"
                                    className=""
                                  >
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="destination[]"
                                      id="sf_destination_13"
                                      value="West Coast US
                                                   South America
                                                   Panama Canal"
                                    />
                                    <span>West Coast US South America Panama Canal</span>
                                    <i
                                      data-ga-element="search-form-destination-option-remove"
                                      className="fa-solid fa-xmark"
                                    ></i>
                                  </label>
                                  <label
                                    data-ga-element="search-form-destination-option"
                                    htmlFor="sf_destination_14"
                                    className=""
                                  >
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="destination[]"
                                      id="sf_destination_14"
                                      value="World Cruise"
                                    />
                                    <span>World Cruise</span>
                                    <i
                                      data-ga-element="search-form-destination-option-remove"
                                      className="fa-solid fa-xmark"
                                    ></i>
                                  </label>
                                </div>
                              </div>
                              <div
                                className="search-options-item"
                                id="search-options-cruise-type"
                                data-type="cruise-type"
                              >
                                <div className="search-options-container">
                                  <label htmlFor="sf_cruise_type_0" className="">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="traveltype[]"
                                      id="sf_cruise_type_0"
                                      value="Cruise & Event"
                                    />
                                    <span>Cruise & Event</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_cruise_type_1" className="">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="traveltype[]"
                                      id="sf_cruise_type_1"
                                      value="Cruise & Rail"
                                    />
                                    <span>Cruise & Rail</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_cruise_type_2" className="">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="traveltype[]"
                                      id="sf_cruise_type_2"
                                      value="Cruise & Stay"
                                    />
                                    <span>Cruise & Stay</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_cruise_type_3" className="">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="traveltype[]"
                                      id="sf_cruise_type_3"
                                      value="Cruise & Touring"
                                    />
                                    <span>Cruise & Touring</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_cruise_type_4" className="">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="traveltype[]"
                                      id="sf_cruise_type_4"
                                      value="Cruise Only"
                                    />
                                    <span>Cruise Only</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_cruise_type_5" className="">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="traveltype[]"
                                      id="sf_cruise_type_5"
                                      value="Fly Cruise"
                                    />
                                    <span>Fly Cruise</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_cruise_type_6" className="">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="traveltype[]"
                                      id="sf_cruise_type_6"
                                      value="Luxury Cruises"
                                    />
                                    <span>Luxury Cruises</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_cruise_type_7" className="">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="traveltype[]"
                                      id="sf_cruise_type_7"
                                      value="River Cruising"
                                    />
                                    <span>River Cruising</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                </div>
                              </div>
                              <div
                                className="search-options-item"
                                id="search-options-cruiselines"
                                data-type="cruiselines"
                              >
                                <div className="search-options-container">
                                  <label htmlFor="sf_cruiseline_0" className="">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="cruiseline[]"
                                      id="sf_cruiseline_0"
                                      value="APT Guided Tours & River Cruises"
                                    />
                                    <span>APT Guided Tours & River Cruises</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_cruiseline_1" className="">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="cruiseline[]"
                                      id="sf_cruiseline_1"
                                      value="APT Travelmarvel"
                                    />
                                    <span>APT Travelmarvel</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_cruiseline_2" className="">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="cruiseline[]"
                                      id="sf_cruiseline_2"
                                      value="AmaWaterways"
                                    />
                                    <span>AmaWaterways</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_cruiseline_3" className="">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="cruiseline[]"
                                      id="sf_cruiseline_3"
                                      value="Ambassador Cruise Line"
                                    />
                                    <span>Ambassador Cruise Line</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_cruiseline_4" className="">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="cruiseline[]"
                                      id="sf_cruiseline_4"
                                      value="Azamara"
                                    />
                                    <span>Azamara</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_cruiseline_5" className="">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="cruiseline[]"
                                      id="sf_cruiseline_5"
                                      value="Celebrity Cruises"
                                    />
                                    <span>Celebrity Cruises</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_cruiseline_6" className="">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="cruiseline[]"
                                      id="sf_cruiseline_6"
                                      value="Cunard Line"
                                    />
                                    <span>Cunard Line</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_cruiseline_7" className="">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="cruiseline[]"
                                      id="sf_cruiseline_7"
                                      value="Emerald Cruises"
                                    />
                                    <span>Emerald Cruises</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_cruiseline_8" className="">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="cruiseline[]"
                                      id="sf_cruiseline_8"
                                      value="Holland America Line"
                                    />
                                    <span>Holland America Line</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_cruiseline_9" className="">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="cruiseline[]"
                                      id="sf_cruiseline_9"
                                      value="Lotus Cruises"
                                    />
                                    <span>Lotus Cruises</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_cruiseline_10" className="">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="cruiseline[]"
                                      id="sf_cruiseline_10"
                                      value="MSC Cruises"
                                    />
                                    <span>MSC Cruises</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_cruiseline_12" className="">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="cruiseline[]"
                                      id="sf_cruiseline_12"
                                      value="Norwegian Cruise Line"
                                    />
                                    <span>Norwegian Cruise Line</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_cruiseline_13" className="">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="cruiseline[]"
                                      id="sf_cruiseline_13"
                                      value="Oceania Cruises"
                                    />
                                    <span>Oceania Cruises</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_cruiseline_14" className="">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="cruiseline[]"
                                      id="sf_cruiseline_14"
                                      value="P&O Cruises"
                                    />
                                    <span>P&O Cruises</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_cruiseline_15" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="cruiseline[]"
                                      id="sf_cruiseline_15"
                                      value="Princess Cruises"
                                    />
                                    <span>Princess Cruises</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_cruiseline_16" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="cruiseline[]"
                                      id="sf_cruiseline_16"
                                      value="Resorts World Cruises"
                                    />
                                    <span>Resorts World Cruises</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_cruiseline_17" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="cruiseline[]"
                                      id="sf_cruiseline_17"
                                      value="Royal Caribbean International"
                                    />
                                    <span>Royal Caribbean International</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_cruiseline_18" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="cruiseline[]"
                                      id="sf_cruiseline_18"
                                      value="Scenic Ocean Cruises"
                                    />
                                    <span>Scenic Ocean Cruises</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_cruiseline_19" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="cruiseline[]"
                                      id="sf_cruiseline_19"
                                      value="Seabourn"
                                    />
                                    <span>Seabourn</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_cruiseline_20" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="cruiseline[]"
                                      id="sf_cruiseline_20"
                                      value="Silversea"
                                    />
                                    <span>Silversea</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_cruiseline_21" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="cruiseline[]"
                                      id="sf_cruiseline_21"
                                      value="Star Clippers"
                                    />
                                    <span>Star Clippers</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_cruiseline_22" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="cruiseline[]"
                                      id="sf_cruiseline_22"
                                      value="Transcend Cruises™"
                                    />
                                    <span>Transcend Cruises™</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_cruiseline_23" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="cruiseline[]"
                                      id="sf_cruiseline_23"
                                      value="Zambezi Queen Collection"
                                    />
                                    <span>Zambezi Queen Collection</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                </div>
                              </div>
                              <div
                                className="search-options-item calendar"
                                id="search-options-date"
                                data-type="date"
                              >
                                <div className="search-options-container calendar-view">
                                  <div className="year-group">
                                    <p>2025</p>
                                    <div className="month-group">
                                      <label htmlFor="sf_date_2025-01-01" className="disabled">
                                        <span>Jan</span>
                                        <i className="fa-solid fa-xmark"></i>
                                      </label>
                                      <label htmlFor="sf_date_2025-02-01" className="disabled">
                                        <span>Feb</span>
                                        <i className="fa-solid fa-xmark"></i>
                                      </label>
                                      <label htmlFor="sf_date_2025-03-01" className="disabled">
                                        <span>Mar</span>
                                        <i className="fa-solid fa-xmark"></i>
                                      </label>
                                      <label htmlFor="sf_date_2025-04-01" className="">
                                        <input
                                          onChange={(e) => console.log(e.target.value)}
                                          type="checkbox"
                                          name=""
                                          id="sf_date_2025-04-01"
                                          value="2025-04-30"
                                        />
                                        <span>Apr</span>
                                        <i className="fa-solid fa-xmark"></i>
                                      </label>
                                      <label htmlFor="sf_date_2025-05-01" className="">
                                        <input
                                          onChange={(e) => console.log(e.target.value)}
                                          type="checkbox"
                                          name=""
                                          id="sf_date_2025-05-01"
                                          value="2025-05-31"
                                        />
                                        <span>May</span>
                                        <i className="fa-solid fa-xmark"></i>
                                      </label>
                                      <label htmlFor="sf_date_2025-06-01" className="">
                                        <input
                                          onChange={(e) => console.log(e.target.value)}
                                          type="checkbox"
                                          name=""
                                          id="sf_date_2025-06-01"
                                          value="2025-06-30"
                                        />
                                        <span>Jun</span>
                                        <i className="fa-solid fa-xmark"></i>
                                      </label>
                                      <label htmlFor="sf_date_2025-07-01" className="">
                                        <input
                                          onChange={(e) => console.log(e.target.value)}
                                          type="checkbox"
                                          name=""
                                          id="sf_date_2025-07-01"
                                          value="2025-07-31"
                                        />
                                        <span>Jul</span>
                                        <i className="fa-solid fa-xmark"></i>
                                      </label>
                                      <label htmlFor="sf_date_2025-08-01" className="">
                                        <input
                                          onChange={(e) => console.log(e.target.value)}
                                          type="checkbox"
                                          name=""
                                          id="sf_date_2025-08-01"
                                          value="2025-08-31"
                                        />
                                        <span>Aug</span>
                                        <i className="fa-solid fa-xmark"></i>
                                      </label>
                                      <label htmlFor="sf_date_2025-09-01" className="">
                                        <input
                                          onChange={(e) => console.log(e.target.value)}
                                          type="checkbox"
                                          name=""
                                          id="sf_date_2025-09-01"
                                          value="2025-09-30"
                                        />
                                        <span>Sep</span>
                                        <i className="fa-solid fa-xmark"></i>
                                      </label>
                                      <label htmlFor="sf_date_2025-10-01" className="">
                                        <input
                                          onChange={(e) => console.log(e.target.value)}
                                          type="checkbox"
                                          name=""
                                          id="sf_date_2025-10-01"
                                          value="2025-10-31"
                                        />
                                        <span>Oct</span>
                                        <i className="fa-solid fa-xmark"></i>
                                      </label>
                                      <label htmlFor="sf_date_2025-11-01" className="">
                                        <input
                                          onChange={(e) => console.log(e.target.value)}
                                          type="checkbox"
                                          name=""
                                          id="sf_date_2025-11-01"
                                          value="2025-11-30"
                                        />
                                        <span>Nov</span>
                                        <i className="fa-solid fa-xmark"></i>
                                      </label>
                                      <label htmlFor="sf_date_2025-12-01" className="">
                                        <input
                                          onChange={(e) => console.log(e.target.value)}
                                          type="checkbox"
                                          name=""
                                          id="sf_date_2025-12-01"
                                          value="2025-12-31"
                                        />
                                        <span>Dec</span>
                                        <i className="fa-solid fa-xmark"></i>
                                      </label>
                                    </div>
                                  </div>
                                  <div className="year-group">
                                    <p>2026</p>
                                    <div className="month-group">
                                      <label htmlFor="sf_date_2026-01-01" className="">
                                        <input
                                          onChange={(e) => console.log(e.target.value)}
                                          type="checkbox"
                                          name=""
                                          id="sf_date_2026-01-01"
                                          value="2026-01-31"
                                        />
                                        <span>Jan</span>
                                        <i className="fa-solid fa-xmark"></i>
                                      </label>
                                      <label htmlFor="sf_date_2026-02-01" className="">
                                        <input
                                          onChange={(e) => console.log(e.target.value)}
                                          type="checkbox"
                                          name=""
                                          id="sf_date_2026-02-01"
                                          value="2026-02-28"
                                        />
                                        <span>Feb</span>
                                        <i className="fa-solid fa-xmark"></i>
                                      </label>
                                      <label htmlFor="sf_date_2026-03-01" className="">
                                        <input
                                          onChange={(e) => console.log(e.target.value)}
                                          type="checkbox"
                                          name=""
                                          id="sf_date_2026-03-01"
                                          value="2026-03-31"
                                        />
                                        <span>Mar</span>
                                        <i className="fa-solid fa-xmark"></i>
                                      </label>
                                      <label htmlFor="sf_date_2026-04-01" className="">
                                        <input
                                          onChange={(e) => console.log(e.target.value)}
                                          type="checkbox"
                                          name=""
                                          id="sf_date_2026-04-01"
                                          value="2026-04-30"
                                        />
                                        <span>Apr</span>
                                        <i className="fa-solid fa-xmark"></i>
                                      </label>
                                      <label htmlFor="sf_date_2026-05-01" className="">
                                        <input
                                          onChange={(e) => console.log(e.target.value)}
                                          type="checkbox"
                                          name=""
                                          id="sf_date_2026-05-01"
                                          value="2026-05-31"
                                        />
                                        <span>May</span>
                                        <i className="fa-solid fa-xmark"></i>
                                      </label>
                                      <label htmlFor="sf_date_2026-06-01" className="">
                                        <input
                                          onChange={(e) => console.log(e.target.value)}
                                          type="checkbox"
                                          name=""
                                          id="sf_date_2026-06-01"
                                          value="2026-06-30"
                                        />
                                        <span>Jun</span>
                                        <i className="fa-solid fa-xmark"></i>
                                      </label>
                                      <label htmlFor="sf_date_2026-07-01" className="">
                                        <input
                                          onChange={(e) => console.log(e.target.value)}
                                          type="checkbox"
                                          name=""
                                          id="sf_date_2026-07-01"
                                          value="2026-07-31"
                                        />
                                        <span>Jul</span>
                                        <i className="fa-solid fa-xmark"></i>
                                      </label>
                                      <label htmlFor="sf_date_2026-08-01" className="">
                                        <input
                                          onChange={(e) => console.log(e.target.value)}
                                          type="checkbox"
                                          name=""
                                          id="sf_date_2026-08-01"
                                          value="2026-08-31"
                                        />
                                        <span>Aug</span>
                                        <i className="fa-solid fa-xmark"></i>
                                      </label>
                                      <label htmlFor="sf_date_2026-09-01" className="">
                                        <input
                                          onChange={(e) => console.log(e.target.value)}
                                          type="checkbox"
                                          name=""
                                          id="sf_date_2026-09-01"
                                          value="2026-09-30"
                                        />
                                        <span>Sep</span>
                                        <i className="fa-solid fa-xmark"></i>
                                      </label>
                                      <label htmlFor="sf_date_2026-10-01" className="">
                                        <input
                                          onChange={(e) => console.log(e.target.value)}
                                          type="checkbox"
                                          name=""
                                          id="sf_date_2026-10-01"
                                          value="2026-10-31"
                                        />
                                        <span>Oct</span>
                                        <i className="fa-solid fa-xmark"></i>
                                      </label>
                                      <label htmlFor="sf_date_2026-11-01" className="">
                                        <input
                                          onChange={(e) => console.log(e.target.value)}
                                          type="checkbox"
                                          name=""
                                          id="sf_date_2026-11-01"
                                          value="2026-11-30"
                                        />
                                        <span>Nov</span>
                                        <i className="fa-solid fa-xmark"></i>
                                      </label>
                                      <label htmlFor="sf_date_2026-12-01" className="">
                                        <input
                                          onChange={(e) => console.log(e.target.value)}
                                          type="checkbox"
                                          name=""
                                          id="sf_date_2026-12-01"
                                          value="2026-12-31"
                                        />
                                        <span>Dec</span>
                                        <i className="fa-solid fa-xmark"></i>
                                      </label>
                                    </div>
                                  </div>
                                  <div className="year-group">
                                    <p>2027</p>
                                    <div className="month-group">
                                      <label htmlFor="sf_date_2027-01-01" className="">
                                        <input
                                          onChange={(e) => console.log(e.target.value)}
                                          type="checkbox"
                                          name=""
                                          id="sf_date_2027-01-01"
                                          value="2027-01-31"
                                        />
                                        <span>Jan</span>
                                        <i className="fa-solid fa-xmark"></i>
                                      </label>
                                      <label htmlFor="sf_date_2027-02-01" className="">
                                        <input
                                          onChange={(e) => console.log(e.target.value)}
                                          type="checkbox"
                                          name=""
                                          id="sf_date_2027-02-01"
                                          value="2027-02-28"
                                        />
                                        <span>Feb</span>
                                        <i className="fa-solid fa-xmark"></i>
                                      </label>
                                      <label htmlFor="sf_date_2027-03-01" className="">
                                        <input
                                          onChange={(e) => console.log(e.target.value)}
                                          type="checkbox"
                                          name=""
                                          id="sf_date_2027-03-01"
                                          value="2027-03-31"
                                        />
                                        <span>Mar</span>
                                        <i className="fa-solid fa-xmark"></i>
                                      </label>
                                      <label htmlFor="sf_date_2027-04-01" className="">
                                        <input
                                          onChange={(e) => console.log(e.target.value)}
                                          type="checkbox"
                                          name=""
                                          id="sf_date_2027-04-01"
                                          value="2027-04-30"
                                        />
                                        <span>Apr</span>
                                        <i className="fa-solid fa-xmark"></i>
                                      </label>
                                      <label htmlFor="sf_date_2027-05-01" className="">
                                        <input
                                          onChange={(e) => console.log(e.target.value)}
                                          type="checkbox"
                                          name=""
                                          id="sf_date_2027-05-01"
                                          value="2027-05-31"
                                        />
                                        <span>May</span>
                                        <i className="fa-solid fa-xmark"></i>
                                      </label>
                                      <label htmlFor="sf_date_2027-06-01" className="">
                                        <input
                                          onChange={(e) => console.log(e.target.value)}
                                          type="checkbox"
                                          name=""
                                          id="sf_date_2027-06-01"
                                          value="2027-06-30"
                                        />
                                        <span>Jun</span>
                                        <i className="fa-solid fa-xmark"></i>
                                      </label>
                                      <label htmlFor="sf_date_2027-07-01" className="">
                                        <input
                                          onChange={(e) => console.log(e.target.value)}
                                          type="checkbox"
                                          name=""
                                          id="sf_date_2027-07-01"
                                          value="2027-07-31"
                                        />
                                        <span>Jul</span>
                                        <i className="fa-solid fa-xmark"></i>
                                      </label>
                                      <label htmlFor="sf_date_2027-08-01" className="">
                                        <input
                                          onChange={(e) => console.log(e.target.value)}
                                          type="checkbox"
                                          name=""
                                          id="sf_date_2027-08-01"
                                          value="2027-08-31"
                                        />
                                        <span>Aug</span>
                                        <i className="fa-solid fa-xmark"></i>
                                      </label>
                                      <label htmlFor="sf_date_2027-09-01" className="">
                                        <input
                                          onChange={(e) => console.log(e.target.value)}
                                          type="checkbox"
                                          name=""
                                          id="sf_date_2027-09-01"
                                          value="2027-09-30"
                                        />
                                        <span>Sep</span>
                                        <i className="fa-solid fa-xmark"></i>
                                      </label>
                                      <label htmlFor="sf_date_2027-10-01" className="">
                                        <input
                                          onChange={(e) => console.log(e.target.value)}
                                          type="checkbox"
                                          name=""
                                          id="sf_date_2027-10-01"
                                          value="2027-10-31"
                                        />
                                        <span>Oct</span>
                                        <i className="fa-solid fa-xmark"></i>
                                      </label>
                                      <label htmlFor="sf_date_2027-11-01" className="disabled">
                                        <span>Nov</span>
                                        <i className="fa-solid fa-xmark"></i>
                                      </label>
                                      <label htmlFor="sf_date_2027-12-01" className="disabled">
                                        <span>Dec</span>
                                        <i className="fa-solid fa-xmark"></i>
                                      </label>
                                    </div>
                                  </div>
                                  <input
                                    onChange={(e) => console.log(e.target.value)}
                                    type="hidden"
                                    name="date_from"
                                    value=""
                                    readOnly
                                  />
                                  <input
                                    onChange={(e) => console.log(e.target.value)}
                                    type="hidden"
                                    name="date_to"
                                    value=""
                                    readOnly
                                  />
                                </div>
                              </div>
                              <div
                                className="search-options-item"
                                id="search-options-duration"
                                data-type="duration"
                              >
                                <div className="search-options-container">
                                  <label
                                    htmlFor="sf_duration_0"
                                    style={{ order: '0' }}
                                    className=""
                                  >
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="duration[]"
                                      id="sf_duration_0"
                                      value="1 to 6 nights"
                                    />
                                    <span>1 to 6 nights</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label
                                    htmlFor="sf_duration_1"
                                    style={{ order: '1' }}
                                    className=""
                                  >
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="duration[]"
                                      id="sf_duration_1"
                                      value="7 to 9 nights"
                                    />
                                    <span>7 to 9 nights</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label
                                    htmlFor="sf_duration_2"
                                    style={{ order: '2' }}
                                    className=""
                                  >
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="duration[]"
                                      id="sf_duration_2"
                                      value="10 to 14 nights"
                                    />
                                    <span>10 to 14 nights</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label
                                    htmlFor="sf_duration_3"
                                    style={{ order: '3' }}
                                    className=""
                                  >
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="duration[]"
                                      id="sf_duration_3"
                                      value="15 nights or more"
                                    />
                                    <span>15 nights or more</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                </div>
                              </div>
                              <div
                                className="search-options-item"
                                id="search-options-depart-port"
                                data-type="depart-port"
                                style={{ display: 'none' }}
                              >
                                <div className="search-options-container">
                                  <label htmlFor="sf_depart_port_0" className="">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_0"
                                      value=""
                                    />
                                    <span></span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_1" className="">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_1"
                                      value="Abu Dhabi"
                                    />
                                    <span>Abu Dhabi</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_2" className="">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_2"
                                      value="Adelaide"
                                    />
                                    <span>Adelaide</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_3" className="">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_3"
                                      value="Alicante"
                                    />
                                    <span>Alicante</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_4" className="">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_4"
                                      value="Amsterdam"
                                    />
                                    <span>Amsterdam</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_5" className="">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_5"
                                      value="Amsterdam: Embark Ship & Overnight in Port"
                                    />
                                    <span>Amsterdam: Embark Ship & Overnight in Port</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_6" className="">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_6"
                                      value="Anchorage"
                                    />
                                    <span>Anchorage</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_7" className="">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_7"
                                      value="Ancona"
                                    />
                                    <span>Ancona</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_8" className="">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_8"
                                      value="Antwerp"
                                    />
                                    <span>Antwerp</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_9" className="">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_9"
                                      value="Arles: Embark Ship & Overnight in Port"
                                    />
                                    <span>Arles: Embark Ship & Overnight in Port</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_10" className="">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_10"
                                      value="Arrecife"
                                    />
                                    <span>Arrecife</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_11" className="">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_11"
                                      value="Athens"
                                    />
                                    <span>Athens</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_12" className="">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_12"
                                      value="Auckland"
                                    />
                                    <span>Auckland</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_13" className="">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_13"
                                      value="Baltimore"
                                    />
                                    <span>Baltimore</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_14" className="">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_14"
                                      value="Baltra Island"
                                    />
                                    <span>Baltra Island</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_15" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_15"
                                      value="Bangkok"
                                    />
                                    <span>Bangkok</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_16" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_16"
                                      value="Baoshan Pt"
                                    />
                                    <span>Baoshan Pt</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_17" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_17"
                                      value="Barbados: Hotel Stay"
                                    />
                                    <span>Barbados: Hotel Stay</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_18" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_18"
                                      value="Barcelona"
                                    />
                                    <span>Barcelona</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_19" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_19"
                                      value="Barcelona: Hotel Stay"
                                    />
                                    <span>Barcelona: Hotel Stay</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_20" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_20"
                                      value="Bari"
                                    />
                                    <span>Bari</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_21" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_21"
                                      value="Basel: Embark Ship"
                                    />
                                    <span>Basel: Embark Ship</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_22" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_22"
                                      value="Belfast"
                                    />
                                    <span>Belfast</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_23" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_23"
                                      value="Benoa"
                                    />
                                    <span>Benoa</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_24" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_24"
                                      value="Bilbao"
                                    />
                                    <span>Bilbao</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_25" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_25"
                                      value="Bordeaux"
                                    />
                                    <span>Bordeaux</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_26" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_26"
                                      value="Bordeaux: Embark Ship & Overnight in Port"
                                    />
                                    <span>Bordeaux: Embark Ship & Overnight in Port</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_27" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_27"
                                      value="Boston"
                                    />
                                    <span>Boston</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_28" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_28"
                                      value="Bridgetown"
                                    />
                                    <span>Bridgetown</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_29" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_29"
                                      value="Brindisi"
                                    />
                                    <span>Brindisi</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_30" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_30"
                                      value="Brisbane"
                                    />
                                    <span>Brisbane</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_31" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_31"
                                      value="Bristol"
                                    />
                                    <span>Bristol</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_32" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_32"
                                      value="Broome"
                                    />
                                    <span>Broome</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_33" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_33"
                                      value="Budapest: Embark Ship"
                                    />
                                    <span>Budapest: Embark Ship</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_34" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_34"
                                      value="Budapest: Embark ship & Overnight in Port"
                                    />
                                    <span>Budapest: Embark ship & Overnight in Port</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_35" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_35"
                                      value="Buenos Aires"
                                    />
                                    <span>Buenos Aires</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_36" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_36"
                                      value="Busan"
                                    />
                                    <span>Busan</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_37" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_37"
                                      value="Busselton"
                                    />
                                    <span>Busselton</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_38" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_38"
                                      value="Cagliari"
                                    />
                                    <span>Cagliari</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_39" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_39"
                                      value="Cairo: Hotel Stay"
                                    />
                                    <span>Cairo: Hotel Stay</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_40" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_40"
                                      value="Calgary: Hotel Stay "
                                    />
                                    <span>Calgary: Hotel Stay </span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_41" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_41"
                                      value="Callao"
                                    />
                                    <span>Callao</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_42" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_42"
                                      value="Cannes"
                                    />
                                    <span>Cannes</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_43" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_43"
                                      value="Cape Liberty"
                                    />
                                    <span>Cape Liberty</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_44" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_44"
                                      value="Cape Town"
                                    />
                                    <span>Cape Town</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_45" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_45"
                                      value="Cartagena"
                                    />
                                    <span>Cartagena</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_46" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_46"
                                      value="Charlotte Amalie"
                                    />
                                    <span>Charlotte Amalie</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_47" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_47"
                                      value="Civitavecchia"
                                    />
                                    <span>Civitavecchia</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_48" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_48"
                                      value="Colón"
                                    />
                                    <span>Colón</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_49" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_49"
                                      value="Copenhagen"
                                    />
                                    <span>Copenhagen</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_50" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_50"
                                      value="Corfu"
                                    />
                                    <span>Corfu</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_51" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_51"
                                      value="Crete: Hotel Stay"
                                    />
                                    <span>Crete: Hotel Stay</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_52" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_52"
                                      value="Darwin"
                                    />
                                    <span>Darwin</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_53" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_53"
                                      value="Doha"
                                    />
                                    <span>Doha</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_54" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_54"
                                      value="Dover"
                                    />
                                    <span>Dover</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_55" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_55"
                                      value="Dubai"
                                    />
                                    <span>Dubai</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_56" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_56"
                                      value="Dublin"
                                    />
                                    <span>Dublin</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_57" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_57"
                                      value="Dubrovnik"
                                    />
                                    <span>Dubrovnik</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_58" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_58"
                                      value="Dundee"
                                    />
                                    <span>Dundee</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_59" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_59"
                                      value="Durban"
                                    />
                                    <span>Durban</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_60" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_60"
                                      value="Edinburgh"
                                    />
                                    <span>Edinburgh</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_61" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_61"
                                      value="Ermoupoli"
                                    />
                                    <span>Ermoupoli</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_62" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_62"
                                      value="Fairbanks"
                                    />
                                    <span>Fairbanks</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_63" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_63"
                                      value="Falmouth"
                                    />
                                    <span>Falmouth</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_64" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_64"
                                      value="Fly Overnight to Auckland"
                                    />
                                    <span>Fly Overnight to Auckland</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_65" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_65"
                                      value="Fly Overnight to Bali"
                                    />
                                    <span>Fly Overnight to Bali</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_66" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_66"
                                      value="Fly Overnight to Beijing"
                                    />
                                    <span>Fly Overnight to Beijing</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_67" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_67"
                                      value="Fly Overnight to Brisbane"
                                    />
                                    <span>Fly Overnight to Brisbane</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_68" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_68"
                                      value="Fly Overnight to Buenos Aires"
                                    />
                                    <span>Fly Overnight to Buenos Aires</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_69" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_69"
                                      value="Fly Overnight to Cape Town"
                                    />
                                    <span>Fly Overnight to Cape Town</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_70" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_70"
                                      value="Fly Overnight to Delhi"
                                    />
                                    <span>Fly Overnight to Delhi</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_71" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_71"
                                      value="Fly Overnight to Dubai"
                                    />
                                    <span>Fly Overnight to Dubai</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_72" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_72"
                                      value="Fly Overnight to Hanoi"
                                    />
                                    <span>Fly Overnight to Hanoi</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_73" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_73"
                                      value="Fly Overnight to Ho Chi Minh City"
                                    />
                                    <span>Fly Overnight to Ho Chi Minh City</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_74" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_74"
                                      value="Fly Overnight to Kansai"
                                    />
                                    <span>Fly Overnight to Kansai</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_75" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_75"
                                      value="Fly Overnight to Kuala Lumpur"
                                    />
                                    <span>Fly Overnight to Kuala Lumpur</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_76" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_76"
                                      value="Fly Overnight to Lima"
                                    />
                                    <span>Fly Overnight to Lima</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_77" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_77"
                                      value="Fly Overnight to Maldives"
                                    />
                                    <span>Fly Overnight to Maldives</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_78" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_78"
                                      value="Fly Overnight to Mauritius "
                                    />
                                    <span>Fly Overnight to Mauritius </span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_79" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_79"
                                      value="Fly Overnight to Melbourne"
                                    />
                                    <span>Fly Overnight to Melbourne</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_80" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_80"
                                      value="Fly Overnight to Osaka"
                                    />
                                    <span>Fly Overnight to Osaka</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_81" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_81"
                                      value="Fly Overnight to Rio de Janeiro"
                                    />
                                    <span>Fly Overnight to Rio de Janeiro</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_82" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_82"
                                      value="Fly Overnight to Shanghai"
                                    />
                                    <span>Fly Overnight to Shanghai</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_83" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_83"
                                      value="Fly Overnight to Siem Reap"
                                    />
                                    <span>Fly Overnight to Siem Reap</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_84" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_84"
                                      value="Fly Overnight to Singapore"
                                    />
                                    <span>Fly Overnight to Singapore</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_85" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_85"
                                      value="Fly Overnight to Sydney"
                                    />
                                    <span>Fly Overnight to Sydney</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_86" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_86"
                                      value="Fly Overnight to Tahiti"
                                    />
                                    <span>Fly Overnight to Tahiti</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_87" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_87"
                                      value="Fly Overnight to Tokyo"
                                    />
                                    <span>Fly Overnight to Tokyo</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_88" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_88"
                                      value="Fly Overnight to the Maldives"
                                    />
                                    <span>Fly Overnight to the Maldives</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_89" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_89"
                                      value="Fly overnight to Hong Kong"
                                    />
                                    <span>Fly overnight to Hong Kong</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_90" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_90"
                                      value="Fort Lauderdale"
                                    />
                                    <span>Fort Lauderdale</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_91" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_91"
                                      value="Fort Lauderdale: Hotel Stay"
                                    />
                                    <span>Fort Lauderdale: Hotel Stay</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_92" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_92"
                                      value="Fort-de-France"
                                    />
                                    <span>Fort-de-France</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_93" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_93"
                                      value="Fremantle"
                                    />
                                    <span>Fremantle</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_94" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_94"
                                      value="Fuerte Amador"
                                    />
                                    <span>Fuerte Amador</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_95" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_95"
                                      value="Funchal"
                                    />
                                    <span>Funchal</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_96" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_96"
                                      value="Galveston"
                                    />
                                    <span>Galveston</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_97" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_97"
                                      value="Genoa"
                                    />
                                    <span>Genoa</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_98" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_98"
                                      value="Gran Canaria: Hotel Stay"
                                    />
                                    <span>Gran Canaria: Hotel Stay</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_99" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_99"
                                      value="Greenock"
                                    />
                                    <span>Greenock</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_100" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_100"
                                      value="Haifa"
                                    />
                                    <span>Haifa</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_101" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_101"
                                      value="Halifax"
                                    />
                                    <span>Halifax</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_102" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_102"
                                      value="Hamburg"
                                    />
                                    <span>Hamburg</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_103" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_103"
                                      value="Helsinki"
                                    />
                                    <span>Helsinki</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_104" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_104"
                                      value="Ho Chi Minh City: Hotel Stay "
                                    />
                                    <span>Ho Chi Minh City: Hotel Stay </span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_105" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_105"
                                      value="Hobart"
                                    />
                                    <span>Hobart</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_106" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_106"
                                      value="Honfleur"
                                    />
                                    <span>Honfleur</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_107" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_107"
                                      value="Hong Kong"
                                    />
                                    <span>Hong Kong</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_108" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_108"
                                      value="Honolulu"
                                    />
                                    <span>Honolulu</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_109" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_109"
                                      value="IJmuiden"
                                    />
                                    <span>IJmuiden</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_110" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_110"
                                      value="Incheon"
                                    />
                                    <span>Incheon</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_111" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_111"
                                      value="Istanbul"
                                    />
                                    <span>Istanbul</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_112" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_112"
                                      value="Itajai"
                                    />
                                    <span>Itajai</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_113" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_113"
                                      value="Jacksonville"
                                    />
                                    <span>Jacksonville</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_114" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_114"
                                      value="Juneau"
                                    />
                                    <span>Juneau</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_115" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_115"
                                      value="Keelung (Chilung)"
                                    />
                                    <span>Keelung (Chilung)</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_116" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_116"
                                      value="Kiel"
                                    />
                                    <span>Kiel</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_117" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_117"
                                      value="Kobe"
                                    />
                                    <span>Kobe</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_118" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_118"
                                      value="Koper"
                                    />
                                    <span>Koper</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_119" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_119"
                                      value="Kusadasi"
                                    />
                                    <span>Kusadasi</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_120" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_120"
                                      value="La Goulette"
                                    />
                                    <span>La Goulette</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_121" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_121"
                                      value="La Romana"
                                    />
                                    <span>La Romana</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_122" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_122"
                                      value="La Spezia"
                                    />
                                    <span>La Spezia</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_123" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_123"
                                      value="Laem Chabang"
                                    />
                                    <span>Laem Chabang</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_124" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_124"
                                      value="Lake Garda: Hotel Stay "
                                    />
                                    <span>Lake Garda: Hotel Stay </span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_125" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_125"
                                      value="Lake Maggiore: Hotel Stay"
                                    />
                                    <span>Lake Maggiore: Hotel Stay</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_126" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_126"
                                      value="Las Palmas de Gran Canaria"
                                    />
                                    <span>Las Palmas de Gran Canaria</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_127" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_127"
                                      value="Lautoka"
                                    />
                                    <span>Lautoka</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_128" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_128"
                                      value="Le Havre"
                                    />
                                    <span>Le Havre</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_129" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_129"
                                      value="Leith"
                                    />
                                    <span>Leith</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_130" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_130"
                                      value="Lisbon"
                                    />
                                    <span>Lisbon</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_131" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_131"
                                      value="Lisbon: Hotel Stay"
                                    />
                                    <span>Lisbon: Hotel Stay</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_132" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_132"
                                      value="Liverpool"
                                    />
                                    <span>Liverpool</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_133" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_133"
                                      value="Livorno"
                                    />
                                    <span>Livorno</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_134" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_134"
                                      value="London: Embark Ship "
                                    />
                                    <span>London: Embark Ship </span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_135" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_135"
                                      value="London: Fly Overnight to Perth"
                                    />
                                    <span>London: Fly Overnight to Perth</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_136" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_136"
                                      value="Long Beach"
                                    />
                                    <span>Long Beach</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_137" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_137"
                                      value="Los Angeles"
                                    />
                                    <span>Los Angeles</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_138" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_138"
                                      value="Luxor: Embark Ship & Overnight in Port"
                                    />
                                    <span>Luxor: Embark Ship & Overnight in Port</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_139" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_139"
                                      value="Maceió"
                                    />
                                    <span>Maceió</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_140" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_140"
                                      value="Madrid: Hotel Stay"
                                    />
                                    <span>Madrid: Hotel Stay</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_141" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_141"
                                      value="Manaus"
                                    />
                                    <span>Manaus</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_142" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_142"
                                      value="Marseille"
                                    />
                                    <span>Marseille</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_143" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_143"
                                      value="Maui: Hotel Stay"
                                    />
                                    <span>Maui: Hotel Stay</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_144" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_144"
                                      value="Melbourne"
                                    />
                                    <span>Melbourne</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_145" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_145"
                                      value="Messina"
                                    />
                                    <span>Messina</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_146" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_146"
                                      value="Mestre: Hotel Stay "
                                    />
                                    <span>Mestre: Hotel Stay </span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_147" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_147"
                                      value="Miami"
                                    />
                                    <span>Miami</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_148" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_148"
                                      value="Miami: Hotel Stay"
                                    />
                                    <span>Miami: Hotel Stay</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_149" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_149"
                                      value="Monaco"
                                    />
                                    <span>Monaco</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_150" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_150"
                                      value="Monte-Carlo"
                                    />
                                    <span>Monte-Carlo</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_151" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_151"
                                      value="Montecatini Terme: Hotel Stay"
                                    />
                                    <span>Montecatini Terme: Hotel Stay</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_152" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_152"
                                      value="Montevideo"
                                    />
                                    <span>Montevideo</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_153" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_153"
                                      value="Montréal"
                                    />
                                    <span>Montréal</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_154" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_154"
                                      value="Mumbai (ex Bombay)"
                                    />
                                    <span>Mumbai (ex Bombay)</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_155" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_155"
                                      value="Málaga"
                                    />
                                    <span>Málaga</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_156" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_156"
                                      value="Naha"
                                    />
                                    <span>Naha</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_157" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_157"
                                      value="Naples"
                                    />
                                    <span>Naples</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_158" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_158"
                                      value="New Orleans"
                                    />
                                    <span>New Orleans</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_159" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_159"
                                      value="New York"
                                    />
                                    <span>New York</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_160" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_160"
                                      value="New York: Hotel Stay "
                                    />
                                    <span>New York: Hotel Stay </span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_161" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_161"
                                      value="Newcastle upon Tyne"
                                    />
                                    <span>Newcastle upon Tyne</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_162" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_162"
                                      value="Nice"
                                    />
                                    <span>Nice</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_163" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_163"
                                      value="Nice: Hotel Stay"
                                    />
                                    <span>Nice: Hotel Stay</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_164" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_164"
                                      value="Olbia"
                                    />
                                    <span>Olbia</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_165" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_165"
                                      value="Opatija"
                                    />
                                    <span>Opatija</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_166" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_166"
                                      value="Osaka"
                                    />
                                    <span>Osaka</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_167" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_167"
                                      value="Oslo"
                                    />
                                    <span>Oslo</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_168" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_168"
                                      value="Overnight flight"
                                    />
                                    <span>Overnight flight</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_169" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_169"
                                      value="Palermo"
                                    />
                                    <span>Palermo</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_170" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_170"
                                      value="Palma de Mallorca"
                                    />
                                    <span>Palma de Mallorca</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_171" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_171"
                                      value="Panama City"
                                    />
                                    <span>Panama City</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_172" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_172"
                                      value="Papeete"
                                    />
                                    <span>Papeete</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_173" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_173"
                                      value="Paris: Board Venice Simplon-Orient-Express "
                                    />
                                    <span>Paris: Board Venice Simplon-Orient-Express </span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_174" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_174"
                                      value="Paris: Board the Venice Simplon-Orient-Express"
                                    />
                                    <span>Paris: Board the Venice Simplon-Orient-Express</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_175" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_175"
                                      value="Paris: Embark Ship"
                                    />
                                    <span>Paris: Embark Ship</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_176" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_176"
                                      value="Passau: Embark Ship"
                                    />
                                    <span>Passau: Embark Ship</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_177" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_177"
                                      value="Passau: Embark Ship & Overnight in port"
                                    />
                                    <span>Passau: Embark Ship & Overnight in port</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_178" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_178"
                                      value="Perth"
                                    />
                                    <span>Perth</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_179" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_179"
                                      value="Philadelphia"
                                    />
                                    <span>Philadelphia</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_180" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_180"
                                      value="Philipsburg"
                                    />
                                    <span>Philipsburg</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_181" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_181"
                                      value="Piraeus"
                                    />
                                    <span>Piraeus</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_182" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_182"
                                      value="Pointe-à-Pitre"
                                    />
                                    <span>Pointe-à-Pitre</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_183" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_183"
                                      value="Port Canaveral"
                                    />
                                    <span>Port Canaveral</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_184" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_184"
                                      value="Port Louis"
                                    />
                                    <span>Port Louis</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_185" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_185"
                                      value="Port Victoria"
                                    />
                                    <span>Port Victoria</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_186" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_186"
                                      value="Porto: Embark Ship & Overnight in Port"
                                    />
                                    <span>Porto: Embark Ship & Overnight in Port</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_187" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_187"
                                      value="Portsmouth"
                                    />
                                    <span>Portsmouth</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_188" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_188"
                                      value="Quebec City"
                                    />
                                    <span>Quebec City</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_189" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_189"
                                      value="Ravenna"
                                    />
                                    <span>Ravenna</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_190" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_190"
                                      value="Regensburg: Embark Ship & Overnight in port"
                                    />
                                    <span>Regensburg: Embark Ship & Overnight in port</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_191" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_191"
                                      value="Reykjavík"
                                    />
                                    <span>Reykjavík</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_192" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_192"
                                      value="Reykjavík: Embark Ship "
                                    />
                                    <span>Reykjavík: Embark Ship </span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_193" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_193"
                                      value="Rio de Janeiro"
                                    />
                                    <span>Rio de Janeiro</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_194" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_194"
                                      value="Rio de Janeiro: Hotel Stay "
                                    />
                                    <span>Rio de Janeiro: Hotel Stay </span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_195" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_195"
                                      value="Rome: Hotel Stay "
                                    />
                                    <span>Rome: Hotel Stay </span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_196" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_196"
                                      value="Rostock"
                                    />
                                    <span>Rostock</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_197" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_197"
                                      value="Rosyth"
                                    />
                                    <span>Rosyth</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_198" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_198"
                                      value="Rotterdam"
                                    />
                                    <span>Rotterdam</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_199" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_199"
                                      value="Saint John's"
                                    />
                                    <span>Saint John&quot;s</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_200" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_200"
                                      value="Salvador de Bahia"
                                    />
                                    <span>Salvador de Bahia</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_201" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_201"
                                      value="San Antonio"
                                    />
                                    <span>San Antonio</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_202" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_202"
                                      value="San Diego"
                                    />
                                    <span>San Diego</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_203" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_203"
                                      value="San Francisco"
                                    />
                                    <span>San Francisco</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_204" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_204"
                                      value="San José: Hotel Stay"
                                    />
                                    <span>San José: Hotel Stay</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_205" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_205"
                                      value="San Juan (Puerto Rico)"
                                    />
                                    <span>San Juan (Puerto Rico)</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_206" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_206"
                                      value="Santa Cruz de Tenerife"
                                    />
                                    <span>Santa Cruz de Tenerife</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_207" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_207"
                                      value="Santa Cruz de Tenerife: Hotel Stay"
                                    />
                                    <span>Santa Cruz de Tenerife: Hotel Stay</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_208" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_208"
                                      value="Santos"
                                    />
                                    <span>Santos</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_209" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_209"
                                      value="Seattle"
                                    />
                                    <span>Seattle</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_210" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_210"
                                      value="Seward"
                                    />
                                    <span>Seward</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_211" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_211"
                                      value="Shanghai"
                                    />
                                    <span>Shanghai</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_212" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_212"
                                      value="Siem Reap: Hotel Stay "
                                    />
                                    <span>Siem Reap: Hotel Stay </span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_213" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_213"
                                      value="Singapore"
                                    />
                                    <span>Singapore</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_214" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_214"
                                      value="Sint Maarten"
                                    />
                                    <span>Sint Maarten</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_215" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_215"
                                      value="Skagway"
                                    />
                                    <span>Skagway</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_216" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_216"
                                      value="Southampton"
                                    />
                                    <span>Southampton</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_217" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_217"
                                      value="Southampton: Embark Ship"
                                    />
                                    <span>Southampton: Embark Ship</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_218" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_218"
                                      value="Split"
                                    />
                                    <span>Split</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_219" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_219"
                                      value="Stockholm"
                                    />
                                    <span>Stockholm</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_220" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_220"
                                      value="Sydney"
                                    />
                                    <span>Sydney</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_221" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_221"
                                      value="Tampa"
                                    />
                                    <span>Tampa</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_222" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_222"
                                      value="Tarragona"
                                    />
                                    <span>Tarragona</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_223" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_223"
                                      value="Tianjin"
                                    />
                                    <span>Tianjin</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_224" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_224"
                                      value="Tilbury"
                                    />
                                    <span>Tilbury</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_225" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_225"
                                      value="Tokyo"
                                    />
                                    <span>Tokyo</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_226" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_226"
                                      value="Trieste"
                                    />
                                    <span>Trieste</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_227" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_227"
                                      value="Valencia"
                                    />
                                    <span>Valencia</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_228" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_228"
                                      value="Valletta"
                                    />
                                    <span>Valletta</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_229" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_229"
                                      value="Valparaiso"
                                    />
                                    <span>Valparaiso</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_230" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_230"
                                      value="Vancouver"
                                    />
                                    <span>Vancouver</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_231" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_231"
                                      value="Venice"
                                    />
                                    <span>Venice</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_232" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_232"
                                      value="Venice: Embark Ship & Overnight in Port"
                                    />
                                    <span>Venice: Embark Ship & Overnight in Port</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_233" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_233"
                                      value="Vigo"
                                    />
                                    <span>Vigo</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_234" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_234"
                                      value="Villa Nova de Gaia: Embark Ship & Overnight in Port"
                                    />
                                    <span>Villa Nova de Gaia: Embark Ship & Overnight in Port</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_235" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_235"
                                      value="Vilshofen an der Donau: Embark Ship"
                                    />
                                    <span>Vilshofen an der Donau: Embark Ship</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_236" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_236"
                                      value="Virgin Gorda"
                                    />
                                    <span>Virgin Gorda</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_237" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_237"
                                      value="Whittier"
                                    />
                                    <span>Whittier</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_238" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_238"
                                      value="Yokohama"
                                    />
                                    <span>Yokohama</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_239" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_239"
                                      value="Zadar"
                                    />
                                    <span>Zadar</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_240" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_240"
                                      value="İstanbul Hotel Stay"
                                    />
                                    <span>İstanbul Hotel Stay</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                  <label htmlFor="sf_depart_port_241" className="more">
                                    <input
                                      onChange={(e) => console.log(e.target.value)}
                                      type="checkbox"
                                      name="departport[]"
                                      id="sf_depart_port_241"
                                      value="İstanbul: Hotel Stay"
                                    />
                                    <span>İstanbul: Hotel Stay</span>
                                    <i className="fa-solid fa-xmark"></i>
                                  </label>
                                </div>
                              </div>
                              <button type="submit" data-label="Search">
                                Search
                              </button>
                            </div>
                            <div id="search-form-overlay"></div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* home intro background */}
          <section
            data-ga-index="3"
            className="white-block  grid-area-3 cta-blocks-one"
            data-ga-context="holiday_types"
          >
            <div className="inner">
              <h3>Explore</h3>
              <div className="gallery-grid-items visible-rows-two ">
                <div
                  data-ga-element="cta-blocks-1-block"
                  data-ga-index="0"
                  className="img-item img-item-0"
                >
                  <Link
                    data-ga-element="cta-blocks-1-block-link"
                    href="https://www.imaginecruising.co.uk/holiday-types/"
                    title="Holiday Types"
                  >
                    <img
                      title=""
                      alt=""
                      src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/HolidayTypes_CategoryTileHP.jpg"
                    />
                    <noscript>
                      <img
                        src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/HolidayTypes_CategoryTileHP.jpg"
                        title=""
                        alt=""
                      />
                    </noscript>
                    <div className="wrapper-text">
                      <div className="small-text">Explore </div>
                      <div className="large-text">Our Holiday Types</div>
                      <div className="description">
                        Discover more than just a cruise – from scenic rail journeys to immersive
                        tours
                      </div>
                    </div>
                  </Link>
                </div>
                <div
                  data-ga-element="cta-blocks-1-block"
                  data-ga-index="1"
                  className="img-item img-item-1"
                >
                  <Link
                    data-ga-element="cta-blocks-1-block-link"
                    href="https://online.fliphtml5.com/lbmak/hrdr/"
                    title="Discover more"
                  >
                    <img
                      title=""
                      alt=""
                      src="https://www.imaginecruising.co.uk/wp-content/uploads/2025/04/April-Brochure-1.jpg"
                    />
                    <noscript>
                      <img
                        src="https://www.imaginecruising.co.uk/wp-content/uploads/2025/04/April-Brochure-1.jpg"
                        title=""
                        alt=""
                      />
                    </noscript>
                    <div className="wrapper-text">
                      <div className="small-text">Explore</div>
                      <div className="large-text">Our Brochure</div>
                      <div className="description">
                        Explore extraordinary cruise holidays filled with unique experiences around
                        the globe
                      </div>
                    </div>
                  </Link>
                </div>
                <div
                  data-ga-element="cta-blocks-1-block"
                  data-ga-index="2"
                  className="img-item img-item-2"
                >
                  <Link
                    data-ga-element="cta-blocks-1-block-link"
                    href="https://www.imaginecruising.co.uk/cruise-deals/"
                    title="Cruise Deals"
                  >
                    <img
                      title=""
                      alt=""
                      src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/cruise_deals_explore_card@2x-1_6474192de6d_647539e2550.jpg"
                    />
                    <noscript>
                      <img
                        src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/cruise_deals_explore_card@2x-1_6474192de6d_647539e2550.jpg"
                        title=""
                        alt=""
                      />
                    </noscript>
                    <div className="wrapper-text">
                      <div className="small-text">Explore</div>
                      <div className="large-text">Our Cruise Deals</div>
                      <div className="description">
                        Discover exclusive deals and promotions from the world&#8217;s top cruise
                        lines for your next getaway
                      </div>
                    </div>
                  </Link>
                </div>
                <div
                  data-ga-element="cta-blocks-1-block"
                  data-ga-index="3"
                  className="img-item img-item-3"
                >
                  <Link
                    data-ga-element="cta-blocks-1-block-link"
                    href="https://imaginecruising.co.uk/galapagos/"
                    title="Galapagos"
                  >
                    <img
                      title=""
                      alt=""
                      src="https://www.imaginecruising.co.uk/wp-content/uploads/2025/03/Galapogos-Homepage.jpg"
                    />
                    <noscript>
                      <img
                        src="https://www.imaginecruising.co.uk/wp-content/uploads/2025/03/Galapogos-Homepage.jpg"
                        title=""
                        alt=""
                      />
                    </noscript>
                    <div className="wrapper-text">
                      <div className="small-text">Discover the</div>
                      <div className="large-text">Galapagos Islands</div>
                      <div className="description">
                        a wildlife paradise boasting unparallel natural beauty and adventure
                      </div>
                    </div>
                  </Link>
                </div>
                <div
                  data-ga-element="cta-blocks-1-block"
                  data-ga-index="4"
                  className="img-item img-item-4"
                >
                  <Link
                    data-ga-element="cta-blocks-1-block-link"
                    href="https://imaginecruising.co.uk/abu-dhabi-grand-prix-collection/"
                    title="Transcend"
                  >
                    <img
                      title=""
                      alt=""
                      src="https://www.imaginecruising.co.uk/wp-content/uploads/2025/03/ADGP-Homepage.jpg"
                    />
                    <noscript>
                      <img
                        src="https://www.imaginecruising.co.uk/wp-content/uploads/2025/03/ADGP-Homepage.jpg"
                        title=""
                        alt=""
                      />
                    </noscript>
                    <div className="wrapper-text">
                      <div className="small-text">Experience </div>
                      <div className="large-text">the Thrilling</div>
                      <div className="description">Abu Dhabi Grand Prix™ with Guenther Steiner</div>
                    </div>
                  </Link>
                </div>
                <div
                  data-ga-element="cta-blocks-1-block"
                  data-ga-index="5"
                  className="img-item img-item-5"
                >
                  <Link
                    data-ga-element="cta-blocks-1-block-link"
                    href="https://imaginecruising.co.uk/cruises-from-the-uk/"
                    title="Cruise from the UK"
                  >
                    <img
                      title=""
                      alt=""
                      src="https://www.imaginecruising.co.uk/wp-content/uploads/2025/01/shutterstock_2475796677-scaled.jpg"
                    />
                    <noscript>
                      <img
                        src="https://www.imaginecruising.co.uk/wp-content/uploads/2025/01/shutterstock_2475796677-scaled.jpg"
                        title=""
                        alt=""
                      />
                    </noscript>
                    <div className="wrapper-text">
                      <div className="small-text">Discover</div>
                      <div className="large-text">Cruises from the UK</div>
                      <div className="description">
                        Set sail on an unforgettable adventure from a port right on your doorstep!
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section
            data-ga-index="4"
            data-ga-context="our_customer_favourites"
            className=" mobile-no-padding cruise-offers builder-section builder-cruise-offers  slider-position-0"
          >
            <div className="inner">
              <h3 data-ga-element="cruise-offers-title">Our Customer Favourites</h3>
              <div className="cruises-block cruises-block-slider mobile-center-slider">
                <div data-ga-index="0" className="item-cruise cruise-719572 slide-position-1">
                  <Link
                    data-ga-element="cruise-offers-cover-link"
                    className="test-cg cover-link"
                    href="https://www.imaginecruising.co.uk/search/?cruise_reference[]=AME7943"
                  ></Link>
                  <div className="cruise-img-block">
                    <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2025/03/Celebrity-Equinox-EZE-EZE-31JAN26-Iguazu-Falls-Machu-Picchu-TZOO-Tile-1-1-1-3-768x525.jpg" />
                    <div className="cruise-exclusive exclusive">
                      <span>Complimentary Tours of Machu Picchu & Sacred Valley</span>
                    </div>
                    <span className="fave" data-favourite="719572">
                      <i className="far fa-heart"></i>
                    </span>
                  </div>
                  <div className="cruise-content-block">
                    <div className="cruise-top-content">
                      <div data-ga-element="cruise-offers-single-name" className="cruise-name">
                        All-Inclusive Ultimate South America Voyage, Machu Picchu &#038; Iguazu
                        Falls
                      </div>
                      <div className="cruise-meta-block">
                        <div className="holiday-type">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/luggage.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/luggage.svg" />
                          </noscript>
                          Cruise &#038; Touring
                        </div>
                        <div className="holiday-dates">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/calendar-icon.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/calendar-icon.svg" />
                          </noscript>
                          January 2026 | 30 - 32 Nights
                        </div>
                        <div className="holiday-operator">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/ship.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/ship.svg" />
                          </noscript>
                          Celebrity Cruises
                        </div>
                      </div>
                    </div>
                    <div className="cruise-button-block">
                      <div className="price-block">
                        <div className="cruise-price">
                          <span className="price-from">From</span>{' '}
                          <span className="the-price">&pound;6,999</span>
                          <span className="pp"> pp</span>
                        </div>
                      </div>
                      <Link
                        data-ga-element="cruise-offers-single-related-cta"
                        href="https://www.imaginecruising.co.uk/search/?cruise_reference[]AME7943"
                        className="default-cta"
                      >
                        Discover more{' '}
                      </Link>
                    </div>
                  </div>
                </div>
                <div data-ga-index="1" className="item-cruise cruise-690002 slide-position-2">
                  <Link
                    data-ga-element="cruise-offers-cover-link"
                    className="test-cg cover-link"
                    href="https://www.imaginecruising.co.uk/holidays/ultimate-australia-all-inclusive-indian-pacific-rail-journey-and-princess-new-zealand-voyage/"
                  ></Link>
                  <div className="cruise-img-block">
                    <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2025/02/UK-Princess-Crown-BNE-BNE-16FEB26-Indian-Pacific-NEW-PRICING-Tile-768x525.jpg" />
                    <div className="cruise-exclusive exclusive">
                      <span>Complimentary Hotel Stays in Brisbane, Sydney & Perth </span>
                    </div>
                    <span className="fave" data-favourite="690002">
                      <i className="far fa-heart"></i>
                    </span>
                  </div>
                  <div className="cruise-content-block">
                    <div className="cruise-top-content">
                      <div data-ga-element="cruise-offers-single-name" className="cruise-name">
                        Ultimate Australia: All-Inclusive Indian Pacific Rail Journey &#038;
                        Princess New Zealand Voyage
                      </div>
                      <div className="cruise-meta-block">
                        <div className="holiday-type">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/luggage.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/luggage.svg" />
                          </noscript>
                          Cruise &#038; Rail
                        </div>
                        <div className="holiday-dates">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/calendar-icon.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/calendar-icon.svg" />
                          </noscript>
                          14 February 2026 | 23 Nights
                        </div>
                        <div className="holiday-operator">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/ship.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/ship.svg" />
                          </noscript>
                          Princess Cruises
                        </div>
                      </div>
                    </div>
                    <div className="cruise-button-block">
                      <div className="price-block">
                        <div className="cruise-price">
                          <span className="price-from">From</span>{' '}
                          <span className="the-price">&pound;4,999</span>
                          <span className="pp"> pp</span>
                        </div>
                      </div>
                      <Link
                        data-ga-element="cruise-offers-single-related-cta"
                        href="https://www.imaginecruising.co.uk/holidays/ultimate-australia-all-inclusive-indian-pacific-rail-journey-and-princess-new-zealand-voyage/"
                        className="default-cta"
                      >
                        Discover more{' '}
                      </Link>
                    </div>
                  </div>
                </div>
                <div data-ga-index="2" className="item-cruise cruise-679008 slide-position-3">
                  <Link
                    data-ga-element="cruise-offers-cover-link"
                    className="test-cg cover-link"
                    href="https://www.imaginecruising.co.uk/holidays/luxury-cunard-voyage-from-southampton-to-cape-town-with-victoria-falls-and-pilanesberg-safari/"
                  ></Link>
                  <div className="cruise-img-block">
                    <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2025/04/Cunard-QA-SOU-CPT-11JAN2026-Vic-Falls-Pilanesberg-Event-Tile-1-1-768x525.jpg" />
                    <div className="cruise-exclusive exclusive">
                      <span>Complimentary Oceanview to Balcony Upgrade</span>
                    </div>
                    <span className="fave" data-favourite="679008">
                      <i className="far fa-heart"></i>
                    </span>
                  </div>
                  <div className="cruise-content-block">
                    <div className="cruise-top-content">
                      <div data-ga-element="cruise-offers-single-name" className="cruise-name">
                        Luxury Cunard Voyage from Southampton to Cape Town with Victoria Falls
                        &#038; Pilanesberg Safari
                      </div>
                      <div className="cruise-meta-block">
                        <div className="holiday-type">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/luggage.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/luggage.svg" />
                          </noscript>
                          Cruise &#038; Touring
                        </div>
                        <div className="holiday-dates">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/calendar-icon.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/calendar-icon.svg" />
                          </noscript>
                          11 January 2026 | 30 Nights
                        </div>
                        <div className="holiday-operator">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/ship.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/ship.svg" />
                          </noscript>
                          Cunard Line
                        </div>
                      </div>
                    </div>
                    <div className="cruise-button-block">
                      <div className="price-block">
                        <div className="cruise-price">
                          <span className="price-from">From</span>{' '}
                          <span className="the-price">&pound;4,999</span>
                          <span className="pp"> pp</span>
                        </div>
                      </div>
                      <Link
                        data-ga-element="cruise-offers-single-related-cta"
                        href="https://www.imaginecruising.co.uk/holidays/luxury-cunard-voyage-from-southampton-to-cape-town-with-victoria-falls-and-pilanesberg-safari/"
                        className="default-cta"
                      >
                        Discover more{' '}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            data-ga-index="5"
            data-ga-context="Cruise_and_rail"
            className=" mobile-no-padding cruise-offers builder-section builder-cruise-offers  slider-position-1"
          >
            <div className="inner">
              <h3 data-ga-element="cruise-offers-title">Cruise & Rail Holidays</h3>
              <div className="cruises-block cruises-block-slider mobile-center-slider">
                <div data-ga-index="0" className="item-cruise cruise-693396 slide-position-1">
                  <Link
                    data-ga-element="cruise-offers-cover-link"
                    className="test-cg cover-link"
                    href="https://www.imaginecruising.co.uk/holidays/mediterranean-cunard-voyage-italian-lakes-and-all-inclusive-venice-simplon-orient-express-2/"
                  ></Link>
                  <div className="cruise-img-block">
                    <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/05/Cunard-QA-CIV-SOU-25AUG25-No-Fly-VSOE-Florence-Tile_57300766ca7-768x525.jpg" />
                    <div className="cruise-exclusive exclusive">
                      <span>Complimentary 7-NIGHT Italian Lakes Escape </span>
                    </div>
                    <span className="fave" data-favourite="693396">
                      <i className="far fa-heart"></i>
                    </span>
                  </div>
                  <div className="cruise-content-block">
                    <div className="cruise-top-content">
                      <div data-ga-element="cruise-offers-single-name" className="cruise-name">
                        Mediterranean Cunard Voyage, Italian Lakes &#038; All-Inclusive Venice
                        Simplon-Orient-Express
                      </div>
                      <div className="cruise-meta-block">
                        <div className="holiday-type">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/luggage.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/luggage.svg" />
                          </noscript>
                          Cruise &#038; Rail
                        </div>
                        <div className="holiday-dates">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/calendar-icon.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/calendar-icon.svg" />
                          </noscript>
                          20 June 2026 | 16 Nights
                        </div>
                        <div className="holiday-operator">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/ship.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/ship.svg" />
                          </noscript>
                          Cunard Line
                        </div>
                      </div>
                    </div>
                    <div className="cruise-button-block">
                      <div className="price-block">
                        <div className="cruise-price">
                          <span className="price-from">From</span>{' '}
                          <span className="the-price">&pound;6,999</span>
                          <span className="pp"> pp</span>
                        </div>
                      </div>
                      <Link
                        data-ga-element="cruise-offers-single-related-cta"
                        href="https://www.imaginecruising.co.uk/holidays/mediterranean-cunard-voyage-italian-lakes-and-all-inclusive-venice-simplon-orient-express-2/"
                        className="default-cta"
                      >
                        Discover more{' '}
                      </Link>
                    </div>
                  </div>
                </div>
                <div data-ga-index="1" className="item-cruise cruise-662281 slide-position-2">
                  <Link
                    data-ga-element="cruise-offers-cover-link"
                    className="test-cg cover-link"
                    href="https://www.imaginecruising.co.uk/holidays/celebrity-all-inclusive-asia-voyage-and-japan-rail-discovery-4aug26/"
                  ></Link>
                  <div className="cruise-img-block">
                    <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Celebrity-Millenium-TYO-TYO-MAY-AUG2026-Japan-Rail-Tile-768x525.jpg" />
                    <div className="cruise-exclusive exclusive">
                      <span>COMPLIMENTARY CLASSIC DRINKS PACKAGE & WI-FI</span>
                    </div>
                    <span className="fave" data-favourite="662281">
                      <i className="far fa-heart"></i>
                    </span>
                  </div>
                  <div className="cruise-content-block">
                    <div className="cruise-top-content">
                      <div data-ga-element="cruise-offers-single-name" className="cruise-name">
                        Celebrity All-Inclusive Asia Voyage &#038; Japan Rail Discovery
                      </div>
                      <div className="cruise-meta-block">
                        <div className="holiday-type">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/luggage.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/luggage.svg" />
                          </noscript>
                          Cruise &#038; Rail
                        </div>
                        <div className="holiday-dates">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/calendar-icon.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/calendar-icon.svg" />
                          </noscript>
                          04 August 2026 | 26 Nights
                        </div>
                        <div className="holiday-operator">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/ship.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/ship.svg" />
                          </noscript>
                          Celebrity Cruises
                        </div>
                      </div>
                    </div>
                    <div className="cruise-button-block">
                      <div className="price-block">
                        <div className="cruise-price">
                          <span className="price-from">From</span>{' '}
                          <span className="the-price">&pound;5,999</span>
                          <span className="pp"> pp</span>
                        </div>
                      </div>
                      <Link
                        data-ga-element="cruise-offers-single-related-cta"
                        href="https://www.imaginecruising.co.uk/holidays/celebrity-all-inclusive-asia-voyage-and-japan-rail-discovery-4aug26/"
                        className="default-cta"
                      >
                        Discover more{' '}
                      </Link>
                    </div>
                  </div>
                </div>
                <div data-ga-index="2" className="item-cruise cruise-646327 slide-position-3">
                  <Link
                    data-ga-element="cruise-offers-cover-link"
                    className="test-cg cover-link"
                    href="https://www.imaginecruising.co.uk/holidays/all-inclusive-celebrity-voyage-and-ultimate-indian-experience-tigers-the-himalayas-and-golden-triangle-tour-12mar26/"
                  ></Link>
                  <div className="cruise-img-block">
                    <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/10/Celebrity-Solstice-SIN-HKG-HKG-SIN-NOV2025-JAN2026-Shimla-Golden-Triangle-Tile-768x525.jpg" />
                    <div className="cruise-exclusive exclusive">
                      <span>Complimentary 13-Night Fully Escorted Golden Triangle Tour</span>
                    </div>
                    <span className="fave" data-favourite="646327">
                      <i className="far fa-heart"></i>
                    </span>
                  </div>
                  <div className="cruise-content-block">
                    <div className="cruise-top-content">
                      <div data-ga-element="cruise-offers-single-name" className="cruise-name">
                        All-Inclusive Celebrity Voyage &#038; Ultimate Indian Experience: Tigers,
                        The Himalayas &#038; Golden Triangle Tour
                      </div>
                      <div className="cruise-meta-block">
                        <div className="holiday-type">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/luggage.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/luggage.svg" />
                          </noscript>
                          Cruise &#038; Touring
                        </div>
                        <div className="holiday-dates">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/calendar-icon.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/calendar-icon.svg" />
                          </noscript>
                          12 March 2026 | 29 Nights
                        </div>
                        <div className="holiday-operator">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/ship.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/ship.svg" />
                          </noscript>
                          Celebrity Cruises
                        </div>
                      </div>
                    </div>
                    <div className="cruise-button-block">
                      <div className="price-block">
                        <div className="cruise-price">
                          <span className="price-from">From</span>{' '}
                          <span className="the-price">&pound;4,999</span>
                          <span className="pp"> pp</span>
                        </div>
                      </div>
                      <Link
                        data-ga-element="cruise-offers-single-related-cta"
                        href="https://www.imaginecruising.co.uk/holidays/all-inclusive-celebrity-voyage-and-ultimate-indian-experience-tigers-the-himalayas-and-golden-triangle-tour-12mar26/"
                        className="default-cta"
                      >
                        Discover more{' '}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            data-ga-index="6"
            data-ga-context="cruise_and_touring"
            className=" mobile-no-padding cruise-offers builder-section builder-cruise-offers  slider-position-2"
          >
            <div className="inner">
              <h3 data-ga-element="cruise-offers-title">Cruise & Touring Holidays</h3>
              <div className="cruises-block cruises-block-slider mobile-center-slider">
                <div data-ga-index="0" className="item-cruise cruise-723529 slide-position-1">
                  <Link
                    data-ga-element="cruise-offers-cover-link"
                    className="test-cg cover-link"
                    href="https://www.imaginecruising.co.uk/holidays/ultimate-vietnam-and-cambodia-discovery-with-all-inclusive-celebrity-asia-voyage/"
                  ></Link>
                  <div className="cruise-img-block">
                    <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2025/04/Celebrity-Millennium-SIN-SIN-20FEB2026-Vietnam-Cambodia-Tour-Tile-768x525.jpg" />
                    <div className="cruise-exclusive exclusive">
                      <span>Complimentary 13-Night Tour of Vietnam & Cambodia</span>
                    </div>
                    <span className="fave" data-favourite="723529">
                      <i className="far fa-heart"></i>
                    </span>
                  </div>
                  <div className="cruise-content-block">
                    <div className="cruise-top-content">
                      <div data-ga-element="cruise-offers-single-name" className="cruise-name">
                        Ultimate Vietnam &#038; Cambodia Discovery with All-Inclusive Celebrity Asia
                        Voyage
                      </div>
                      <div className="cruise-meta-block">
                        <div className="holiday-type">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/luggage.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/luggage.svg" />
                          </noscript>
                          Cruise &#038; Touring
                        </div>
                        <div className="holiday-dates">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/calendar-icon.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/calendar-icon.svg" />
                          </noscript>
                          05 February 2026 | 27 Nights
                        </div>
                        <div className="holiday-operator">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/ship.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/ship.svg" />
                          </noscript>
                          Celebrity Cruises
                        </div>
                      </div>
                    </div>
                    <div className="cruise-button-block">
                      <div className="price-block">
                        <div className="cruise-price">
                          <span className="price-from">From</span>{' '}
                          <span className="the-price">&pound;4,499</span>
                          <span className="pp"> pp</span>
                        </div>
                      </div>
                      <Link
                        data-ga-element="cruise-offers-single-related-cta"
                        href="https://www.imaginecruising.co.uk/holidays/ultimate-vietnam-and-cambodia-discovery-with-all-inclusive-celebrity-asia-voyage/"
                        className="default-cta"
                      >
                        Discover more{' '}
                      </Link>
                    </div>
                  </div>
                </div>
                <div data-ga-index="1" className="item-cruise cruise-699869 slide-position-2">
                  <Link
                    data-ga-element="cruise-offers-cover-link"
                    className="test-cg cover-link"
                    href="https://www.imaginecruising.co.uk/search/?cruise_reference[]=EUR2253"
                  ></Link>
                  <div className="cruise-img-block">
                    <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2025/04/Silversea-Muse-VCE-VCE-SEP2026-OCT2026-Italian-Lakes-Tile-2-768x525.jpg" />
                    <div className="cruise-exclusive exclusive">
                      <span>Complimentary 6-Night Italian Lakes Escape</span>
                    </div>
                    <span className="fave" data-favourite="699869">
                      <i className="far fa-heart"></i>
                    </span>
                  </div>
                  <div className="cruise-content-block">
                    <div className="cruise-top-content">
                      <div data-ga-element="cruise-offers-single-name" className="cruise-name">
                        All-Inclusive Mediterranean Silversea Voyage, Trio of Italian Lakes and
                        Scenic Rail Journey
                      </div>
                      <div className="cruise-meta-block">
                        <div className="holiday-type">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/luggage.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/luggage.svg" />
                          </noscript>
                          Cruise &#038; Touring
                        </div>
                        <div className="holiday-dates">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/calendar-icon.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/calendar-icon.svg" />
                          </noscript>
                          Sep - Oct 2026 | 15 Nights
                        </div>
                        <div className="holiday-operator">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/ship.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/ship.svg" />
                          </noscript>
                          Silversea
                        </div>
                      </div>
                    </div>
                    <div className="cruise-button-block">
                      <div className="price-block">
                        <div className="cruise-price">
                          <span className="price-from">From</span>{' '}
                          <span className="the-price">&pound;4,999</span>
                          <span className="pp"> pp</span>
                        </div>
                      </div>
                      <Link
                        data-ga-element="cruise-offers-single-related-cta"
                        href="https://www.imaginecruising.co.uk/search/?cruise_reference[]EUR2253"
                        className="default-cta"
                      >
                        Discover more{' '}
                      </Link>
                    </div>
                  </div>
                </div>
                <div data-ga-index="2" className="item-cruise cruise-723106 slide-position-3">
                  <Link
                    data-ga-element="cruise-offers-cover-link"
                    className="test-cg cover-link"
                    href="https://www.imaginecruising.co.uk/holidays/princess-new-zealand-voyage-and-ultimate-australia-tour-v2/"
                  ></Link>
                  <div className="cruise-img-block">
                    <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/11/Princess-Crown-BNE-BNE-02FEB2026-Australia-Tour-Tile-768x525.jpg" />
                    <div className="cruise-exclusive exclusive">
                      <span>Includes tour of the Great Barrier Reef</span>
                    </div>
                    <span className="fave" data-favourite="723106">
                      <i className="far fa-heart"></i>
                    </span>
                  </div>
                  <div className="cruise-content-block">
                    <div className="cruise-top-content">
                      <div data-ga-element="cruise-offers-single-name" className="cruise-name">
                        Princess New Zealand Voyage &#038; Ultimate Australia Tour
                      </div>
                      <div className="cruise-meta-block">
                        <div className="holiday-type">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/luggage.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/luggage.svg" />
                          </noscript>
                          Cruise &#038; Touring
                        </div>
                        <div className="holiday-dates">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/calendar-icon.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/calendar-icon.svg" />
                          </noscript>
                          25 January 2026 | 23 Nights
                        </div>
                        <div className="holiday-operator">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/ship.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/ship.svg" />
                          </noscript>
                          Princess Cruises
                        </div>
                      </div>
                    </div>
                    <div className="cruise-button-block">
                      <div className="price-block">
                        <div className="cruise-price">
                          <span className="price-from">From</span>{' '}
                          <span className="the-price">&pound;4,999</span>
                          <span className="pp"> pp</span>
                        </div>
                      </div>
                      <Link
                        data-ga-element="cruise-offers-single-related-cta"
                        href="https://www.imaginecruising.co.uk/holidays/princess-new-zealand-voyage-and-ultimate-australia-tour-v2/"
                        className="default-cta"
                      >
                        Discover more{' '}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            data-ga-index="7"
            data-ga-context="cruise_and_stay"
            className=" mobile-no-padding cruise-offers builder-section builder-cruise-offers  slider-position-3"
          >
            <div className="inner">
              <h3 data-ga-element="cruise-offers-title">Cruise & Stay Holidays</h3>
              <div className="cruises-block cruises-block-slider mobile-center-slider">
                <div data-ga-index="0" className="item-cruise cruise-717645 slide-position-1">
                  <Link
                    data-ga-element="cruise-offers-cover-link"
                    className="test-cg cover-link"
                    href="https://www.imaginecruising.co.uk/holidays/luxury-cunard-queen-anne-voyage-from-sydney-to-southampton/"
                  ></Link>
                  <div className="cruise-img-block">
                    <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2025/03/Cunard-QA-SYD-SOU-17MAR2026-Sydney-Stay-TILETile-768x525.jpg" />
                    <div className="cruise-exclusive exclusive">
                      <span>Complimentary 3-night Hotel stay in Sydney</span>
                    </div>
                    <span className="fave" data-favourite="717645">
                      <i className="far fa-heart"></i>
                    </span>
                  </div>
                  <div className="cruise-content-block">
                    <div className="cruise-top-content">
                      <div data-ga-element="cruise-offers-single-name" className="cruise-name">
                        Luxury Cunard Queen Anne Voyage from Sydney to Southampton
                      </div>
                      <div className="cruise-meta-block">
                        <div className="holiday-type">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/luggage.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/luggage.svg" />
                          </noscript>
                          Cruise &#038; Stay
                        </div>
                        <div className="holiday-dates">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/calendar-icon.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/calendar-icon.svg" />
                          </noscript>
                          13 March 2026 | 49 Nights
                        </div>
                        <div className="holiday-operator">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/ship.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/ship.svg" />
                          </noscript>
                          Cunard Line
                        </div>
                      </div>
                    </div>
                    <div className="cruise-button-block">
                      <div className="price-block">
                        <div className="cruise-price">
                          <span className="price-from">From</span>{' '}
                          <span className="the-price">&pound;4,999</span>
                          <span className="pp"> pp</span>
                        </div>
                      </div>
                      <Link
                        data-ga-element="cruise-offers-single-related-cta"
                        href="https://www.imaginecruising.co.uk/holidays/luxury-cunard-queen-anne-voyage-from-sydney-to-southampton/"
                        className="default-cta"
                      >
                        Discover more{' '}
                      </Link>
                    </div>
                  </div>
                </div>
                <div data-ga-index="1" className="item-cruise cruise-673874 slide-position-2">
                  <Link
                    data-ga-element="cruise-offers-cover-link"
                    className="test-cg cover-link"
                    href="https://www.imaginecruising.co.uk/search/?cruise_reference[]=AME7965"
                  ></Link>
                  <div className="cruise-img-block">
                    <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2025/02/Silverseaspirit-BGI-FLL-FLL-BGI-Tile-768x525.jpg" />
                    <div className="cruise-exclusive exclusive">
                      <span>Complimentary All-inclusive hotel stay in Barbados</span>
                    </div>
                    <span className="fave" data-favourite="673874">
                      <i className="far fa-heart"></i>
                    </span>
                  </div>
                  <div className="cruise-content-block">
                    <div className="cruise-top-content">
                      <div data-ga-element="cruise-offers-single-name" className="cruise-name">
                        Luxury All-Inclusive Silversea Caribbean Voyage &#038; Barbados Escape
                      </div>
                      <div className="cruise-meta-block">
                        <div className="holiday-type">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/luggage.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/luggage.svg" />
                          </noscript>
                          Cruise &#038; Stay
                        </div>
                        <div className="holiday-dates">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/calendar-icon.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/calendar-icon.svg" />
                          </noscript>
                          Nov 2025 - Feb 2026 | 15 - 17 Nights
                        </div>
                        <div className="holiday-operator">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/ship.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/ship.svg" />
                          </noscript>
                          Silversea
                        </div>
                      </div>
                    </div>
                    <div className="cruise-button-block">
                      <div className="price-block">
                        <div className="cruise-price">
                          <span className="price-from">From</span>{' '}
                          <span className="the-price">&pound;4,999</span>
                          <span className="pp"> pp</span>
                        </div>
                      </div>
                      <Link
                        data-ga-element="cruise-offers-single-related-cta"
                        href="https://www.imaginecruising.co.uk/search/?cruise_reference[]AME7965"
                        className="default-cta"
                      >
                        Discover more{' '}
                      </Link>
                    </div>
                  </div>
                </div>
                <div data-ga-index="2" className="item-cruise cruise-616537 slide-position-3">
                  <Link
                    data-ga-element="cruise-offers-cover-link"
                    className="test-cg cover-link"
                    href="https://www.imaginecruising.co.uk/holidays/celebrity-voyage-all-inclusive-new-year-in-the-maldives-and-bali-retreat/"
                  ></Link>
                  <div className="cruise-img-block">
                    <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Luxury-Celebrity-Voyage-All-Inclusive-New-Year-in-the-Maldives-Bali-Retreat-Tile-–-10-768x525.jpg" />
                    <div className="cruise-exclusive exclusive">
                      <span>Complimentary 5★ All-Inclusive Hotel Stay in Bali</span>
                    </div>
                    <span className="fave" data-favourite="616537">
                      <i className="far fa-heart"></i>
                    </span>
                  </div>
                  <div className="cruise-content-block">
                    <div className="cruise-top-content">
                      <div data-ga-element="cruise-offers-single-name" className="cruise-name">
                        Celebrity Voyage, All-Inclusive New Year in the Maldives &#038; Bali Retreat
                      </div>
                      <div className="cruise-meta-block">
                        <div className="holiday-type">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/luggage.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/luggage.svg" />
                          </noscript>
                          Cruise &#038; Stay
                        </div>
                        <div className="holiday-dates">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/calendar-icon.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/calendar-icon.svg" />
                          </noscript>
                          27 December 2025 | 25 Nights
                        </div>
                        <div className="holiday-operator">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/ship.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/ship.svg" />
                          </noscript>
                          Celebrity Cruises
                        </div>
                      </div>
                    </div>
                    <div className="cruise-button-block">
                      <div className="price-block">
                        <div className="cruise-price">
                          <span className="price-from">From</span>{' '}
                          <span className="the-price">&pound;5,499</span>
                          <span className="pp"> pp</span>
                        </div>
                      </div>
                      <Link
                        data-ga-element="cruise-offers-single-related-cta"
                        href="https://www.imaginecruising.co.uk/holidays/celebrity-voyage-all-inclusive-new-year-in-the-maldives-and-bali-retreat/"
                        className="default-cta"
                      >
                        Discover more{' '}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            data-ga-index="8"
            data-ga-context="cruise_and_event"
            className=" mobile-no-padding cruise-offers builder-section builder-cruise-offers  slider-position-4"
          >
            <div className="inner">
              <h3 data-ga-element="cruise-offers-title">Cruise & Event Holidays</h3>
              <div className="cruises-block cruises-block-slider mobile-center-slider">
                <div data-ga-index="0" className="item-cruise cruise-587261 slide-position-1">
                  <Link
                    data-ga-element="cruise-offers-cover-link"
                    className="test-cg cover-link"
                    href="https://www.imaginecruising.co.uk/holidays/a-captivating-voyage-exclusive-canaries-sailcation/"
                  ></Link>
                  <div className="cruise-img-block">
                    <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2025/01/PrincessSky_SOU-SOU_Nov25-Tile_579484fc228-2_635871d72a2-768x525.jpg" />
                    <div className="cruise-exclusive exclusive">
                      <span>Complimentary Oceanview to Balcony Upgrade</span>
                    </div>
                    <span className="fave" data-favourite="587261">
                      <i className="far fa-heart"></i>
                    </span>
                  </div>
                  <div className="cruise-content-block">
                    <div className="cruise-top-content">
                      <div data-ga-element="cruise-offers-single-name" className="cruise-name">
                        A Captivating Voyage: Exclusive Canaries Sailcation
                      </div>
                      <div className="cruise-meta-block">
                        <div className="holiday-type">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/luggage.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/luggage.svg" />
                          </noscript>
                          Cruise &#038; Event
                        </div>
                        <div className="holiday-dates">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/calendar-icon.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/calendar-icon.svg" />
                          </noscript>
                          02 November 2025 | 12 Nights
                        </div>
                        <div className="holiday-operator">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/ship.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/ship.svg" />
                          </noscript>
                          Princess Cruises
                        </div>
                      </div>
                    </div>
                    <div className="cruise-button-block">
                      <div className="price-block">
                        <div className="cruise-price">
                          <span className="price-from">From</span>{' '}
                          <span className="the-price">&pound;999</span>
                          <span className="pp"> pp</span>
                        </div>
                      </div>
                      <Link
                        data-ga-element="cruise-offers-single-related-cta"
                        href="https://www.imaginecruising.co.uk/holidays/a-captivating-voyage-exclusive-canaries-sailcation/"
                        className="default-cta"
                      >
                        Discover more{' '}
                      </Link>
                    </div>
                  </div>
                </div>
                <div data-ga-index="1" className="item-cruise cruise-646407 slide-position-2">
                  <Link
                    data-ga-element="cruise-offers-cover-link"
                    className="test-cg cover-link"
                    href="https://www.imaginecruising.co.uk/holidays/a-magical-voyage-exclusive-mediterranean-sailcation/"
                  ></Link>
                  <div className="cruise-img-block">
                    <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Product-Tile-A-Magical-Voyage-Exclusive-Mediterranean-Sailcation-Ship-and-celebs-New-Rory-Bremner-768x525.jpg" />
                    <div className="cruise-exclusive exclusive">
                      <span>EXCLUSIVE PERFORMANCES FROM A STAR-STUDDED LINE-UP</span>
                    </div>
                    <span className="fave" data-favourite="646407">
                      <i className="far fa-heart"></i>
                    </span>
                  </div>
                  <div className="cruise-content-block">
                    <div className="cruise-top-content">
                      <div data-ga-element="cruise-offers-single-name" className="cruise-name">
                        A Magical Voyage: Exclusive Mediterranean Sailcation
                      </div>
                      <div className="cruise-meta-block">
                        <div className="holiday-type">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/luggage.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/luggage.svg" />
                          </noscript>
                          Cruise &#038; Event
                        </div>
                        <div className="holiday-dates">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/calendar-icon.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/calendar-icon.svg" />
                          </noscript>
                          03 May 2025 | 14 Nights
                        </div>
                        <div className="holiday-operator">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/ship.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/ship.svg" />
                          </noscript>
                          Princess Cruises
                        </div>
                      </div>
                    </div>
                    <div className="cruise-button-block">
                      <div className="price-block">
                        <div className="cruise-price">
                          <span className="price-from">From</span>{' '}
                          <span className="the-price">&pound;1,199</span>
                          <span className="pp"> pp</span>
                        </div>
                      </div>
                      <Link
                        data-ga-element="cruise-offers-single-related-cta"
                        href="https://www.imaginecruising.co.uk/holidays/a-magical-voyage-exclusive-mediterranean-sailcation/"
                        className="default-cta"
                      >
                        Discover more{' '}
                      </Link>
                    </div>
                  </div>
                </div>
                <div data-ga-index="2" className="item-cruise cruise-669994 slide-position-3">
                  <Link
                    data-ga-element="cruise-offers-cover-link"
                    className="test-cg cover-link"
                    href="https://www.imaginecruising.co.uk/holidays/danubes-ballroom-serenade-exclusive-river-cruise-experience/"
                  ></Link>
                  <div className="cruise-img-block">
                    <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2025/01/Mobile-Image-1152-x-788px-4-768x525.jpg" />
                    <div className="cruise-exclusive exclusive">
                      <span>Includes Exclusive event with Anton Du Bec & Erin Boag</span>
                    </div>
                    <span className="fave" data-favourite="669994">
                      <i className="far fa-heart"></i>
                    </span>
                  </div>
                  <div className="cruise-content-block">
                    <div className="cruise-top-content">
                      <div data-ga-element="cruise-offers-single-name" className="cruise-name">
                        Danube&#8217;s Ballroom Serenade: Exclusive River Cruise Experience
                      </div>
                      <div className="cruise-meta-block">
                        <div className="holiday-type">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/luggage.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/luggage.svg" />
                          </noscript>
                          Cruise &#038; Event
                        </div>
                        <div className="holiday-dates">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/calendar-icon.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/calendar-icon.svg" />
                          </noscript>
                          27 June 2026 | 7 Nights
                        </div>
                        <div className="holiday-operator">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/ship.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/ship.svg" />
                          </noscript>
                          Transcend Cruises™
                        </div>
                      </div>
                    </div>
                    <div className="cruise-button-block">
                      <div className="price-block">
                        <div className="cruise-price">
                          <span className="price-from">From</span>{' '}
                          <span className="the-price">&pound;2,999</span>
                          <span className="pp"> pp</span>
                        </div>
                      </div>
                      <Link
                        data-ga-element="cruise-offers-single-related-cta"
                        href="https://www.imaginecruising.co.uk/holidays/danubes-ballroom-serenade-exclusive-river-cruise-experience/"
                        className="default-cta"
                      >
                        Discover more{' '}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            data-ga-index="9"
            data-ga-context="cruise_deals"
            className=" mobile-no-padding cruise-offers builder-section builder-cruise-offers  slider-position-5"
          >
            <div className="inner">
              <h3 data-ga-element="cruise-offers-title">Cruise Deals</h3>
              <div className="cruises-block cruises-block-slider mobile-center-slider">
                <div data-ga-index="0" className="item-cruise cruise-646571 slide-position-1">
                  <Link
                    data-ga-element="cruise-offers-cover-link"
                    className="test-cg cover-link"
                    href="https://www.imaginecruising.co.uk/search/?cruise_reference[]=AME7945"
                  ></Link>
                  <div className="cruise-img-block">
                    <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2025/03/Cunard-Caribbean-Retail-Tile-768x525.jpg" />
                    <div className="cruise-exclusive exclusive">
                      <span>Exclusive to Imagine Cruising</span>
                    </div>
                    <span className="fave" data-favourite="646571">
                      <i className="far fa-heart"></i>
                    </span>
                  </div>
                  <div className="cruise-content-block">
                    <div className="cruise-top-content">
                      <div data-ga-element="cruise-offers-single-name" className="cruise-name">
                        Luxury Cunard Queen Elizabeth Caribbean Voyage &#038; Miami Escape
                      </div>
                      <div className="cruise-meta-block">
                        <div className="holiday-type">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/luggage.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/luggage.svg" />
                          </noscript>
                          Cruise &#038; Stay
                        </div>
                        <div className="holiday-dates">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/calendar-icon.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/calendar-icon.svg" />
                          </noscript>
                          Oct 2025 - Apr 2026 | 14 Nights
                        </div>
                        <div className="holiday-operator">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/ship.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/ship.svg" />
                          </noscript>
                          Cunard Line
                        </div>
                      </div>
                    </div>
                    <div className="cruise-button-block">
                      <div className="price-block">
                        <div className="cruise-price">
                          <span className="price-from">From</span>{' '}
                          <span className="the-price">&pound;1,499</span>
                          <span className="pp"> pp</span>
                        </div>
                      </div>
                      <Link
                        data-ga-element="cruise-offers-single-related-cta"
                        href="https://www.imaginecruising.co.uk/search/?cruise_reference[]AME7945"
                        className="default-cta"
                      >
                        Discover more{' '}
                      </Link>
                    </div>
                  </div>
                </div>
                <div data-ga-index="1" className="item-cruise cruise-699803 slide-position-2">
                  <Link
                    data-ga-element="cruise-offers-cover-link"
                    className="test-cg cover-link"
                    href="https://www.imaginecruising.co.uk/search/?cruise_reference[]=ASA8463"
                  ></Link>
                  <div className="cruise-img-block">
                    <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2025/03/RCCL-Ovation-SIN-SIN-OCT25-MAR26-Bali-Stay-Tile_67555218a06-16-768x525.jpg" />
                    <div className="cruise-exclusive exclusive">
                      <span>Includes 5-Night 5★ Hotel Stay in Bali</span>
                    </div>
                    <span className="fave" data-favourite="699803">
                      <i className="far fa-heart"></i>
                    </span>
                  </div>
                  <div className="cruise-content-block">
                    <div className="cruise-top-content">
                      <div data-ga-element="cruise-offers-single-name" className="cruise-name">
                        Southeast Asia Voyage &#038; Five-Star Bali Retreat
                      </div>
                      <div className="cruise-meta-block">
                        <div className="holiday-type">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/luggage.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/luggage.svg" />
                          </noscript>
                          Cruise &#038; Stay
                        </div>
                        <div className="holiday-dates">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/calendar-icon.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/calendar-icon.svg" />
                          </noscript>
                          Oct 2025 - Mar 2026 | 12 Nights
                        </div>
                        <div className="holiday-operator">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/ship.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/ship.svg" />
                          </noscript>
                          Royal Caribbean International
                        </div>
                      </div>
                    </div>
                    <div className="cruise-button-block">
                      <div className="price-block">
                        <div className="cruise-price">
                          <span className="price-from">From</span>{' '}
                          <span className="the-price">&pound;1,999</span>
                          <span className="pp"> pp</span>
                        </div>
                      </div>
                      <Link
                        data-ga-element="cruise-offers-single-related-cta"
                        href="https://www.imaginecruising.co.uk/search/?cruise_reference[]ASA8463"
                        className="default-cta"
                      >
                        Discover more{' '}
                      </Link>
                    </div>
                  </div>
                </div>
                <div data-ga-index="2" className="item-cruise cruise-699830 slide-position-3">
                  <Link
                    data-ga-element="cruise-offers-cover-link"
                    className="test-cg cover-link"
                    href="https://www.imaginecruising.co.uk/search/?cruise_reference[]=ASA8462"
                  ></Link>
                  <div className="cruise-img-block">
                    <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2025/04/MSC-Euribia-DXB-DXB-NOV2025-FEB2026-Mauritius-Dubai-Tile-7-768x525.jpg" />
                    <div className="cruise-exclusive exclusive">
                      <span>Includes all-inclusive 5-night Hotel Stay in Mauritius</span>
                    </div>
                    <span className="fave" data-favourite="699830">
                      <i className="far fa-heart"></i>
                    </span>
                  </div>
                  <div className="cruise-content-block">
                    <div className="cruise-top-content">
                      <div data-ga-element="cruise-offers-single-name" className="cruise-name">
                        All-Inclusive Mauritius Escape, Dubai &#038; Arabian Gulf Adventure
                      </div>
                      <div className="cruise-meta-block">
                        <div className="holiday-type">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/luggage.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/luggage.svg" />
                          </noscript>
                          Cruise &#038; Stay
                        </div>
                        <div className="holiday-dates">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/calendar-icon.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/calendar-icon.svg" />
                          </noscript>
                          Nov 2025 - Feb 2026 | 15 Nights
                        </div>
                        <div className="holiday-operator">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/ship.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/ship.svg" />
                          </noscript>
                          MSC Cruises
                        </div>
                      </div>
                    </div>
                    <div className="cruise-button-block">
                      <div className="price-block">
                        <div className="cruise-price">
                          <span className="price-from">From</span>{' '}
                          <span className="the-price">&pound;2,599</span>
                          <span className="pp"> pp</span>
                        </div>
                      </div>
                      <Link
                        data-ga-element="cruise-offers-single-related-cta"
                        href="https://www.imaginecruising.co.uk/search/?cruise_reference[]ASA8462"
                        className="default-cta"
                      >
                        Discover more{' '}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            data-ga-index="10"
            data-ga-context="river_cruise"
            className=" mobile-no-padding cruise-offers builder-section builder-cruise-offers  slider-position-6"
          >
            <div className="inner">
              <h3 data-ga-element="cruise-offers-title">River Cruise Holidays</h3>
              <div className="cruises-block cruises-block-slider mobile-center-slider">
                <div data-ga-index="0" className="item-cruise cruise-584610 slide-position-1">
                  <Link
                    data-ga-element="cruise-offers-cover-link"
                    className="test-cg cover-link"
                    href="https://www.imaginecruising.co.uk/search/?cruise_reference[]=ASA2229"
                  ></Link>
                  <div className="cruise-img-block">
                    <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2025/04/Lotus-Mekong-Navigator-SIE-MYT-MYT-SIE-DEC2024-APR2025-RESELL-Tile_6482194a1c8-6-1-1-768x525.jpg" />
                    <div className="cruise-exclusive exclusive">
                      <span>Limited availability</span>
                    </div>
                    <span className="fave" data-favourite="584610">
                      <i className="far fa-heart"></i>
                    </span>
                  </div>
                  <div className="cruise-content-block">
                    <div className="cruise-top-content">
                      <div data-ga-element="cruise-offers-single-name" className="cruise-name">
                        All-Inclusive Luxury Mekong River Cruise with Vietnam &#038; Cambodia Tour
                      </div>
                      <div className="cruise-meta-block">
                        <div className="holiday-type">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/luggage.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/luggage.svg" />
                          </noscript>
                          River Cruising
                        </div>
                        <div className="holiday-dates">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/calendar-icon.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/calendar-icon.svg" />
                          </noscript>
                          Sep 2025 - Apr 2026 | 15 Nights
                        </div>
                        <div className="holiday-operator">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/ship.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/ship.svg" />
                          </noscript>
                          Lotus Cruises
                        </div>
                      </div>
                    </div>
                    <div className="cruise-button-block">
                      <div className="price-block">
                        <div className="cruise-price">
                          <span className="price-from">From</span>{' '}
                          <span className="the-price">&pound;3,299</span>
                          <span className="pp"> pp</span>
                        </div>
                      </div>
                      <Link
                        data-ga-element="cruise-offers-single-related-cta"
                        href="https://www.imaginecruising.co.uk/search/?cruise_reference[]ASA2229"
                        className="default-cta"
                      >
                        Discover more{' '}
                      </Link>
                    </div>
                  </div>
                </div>
                <div data-ga-index="1" className="item-cruise cruise-649622 slide-position-2">
                  <Link
                    data-ga-element="cruise-offers-cover-link"
                    className="test-cg cover-link"
                    href="https://www.imaginecruising.co.uk/search/?cruise_reference[]=AFR2224"
                  ></Link>
                  <div className="cruise-img-block">
                    <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Zambezi-Header-Stay-Tile_608495b9a96-10-1_644817b7e72-8-1-1-768x525.jpg" />
                    <div className="cruise-exclusive exclusive">
                      <span>Limited Availability</span>
                    </div>
                    <span className="fave" data-favourite="649622">
                      <i className="far fa-heart"></i>
                    </span>
                  </div>
                  <div className="cruise-content-block">
                    <div className="cruise-top-content">
                      <div data-ga-element="cruise-offers-single-name" className="cruise-name">
                        Zambezi River Cruise, Game Safaris, Victoria Falls and Cape Town Stay
                      </div>
                      <div className="cruise-meta-block">
                        <div className="holiday-type">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/luggage.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/luggage.svg" />
                          </noscript>
                          River Cruising
                        </div>
                        <div className="holiday-dates">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/calendar-icon.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/calendar-icon.svg" />
                          </noscript>
                          Jan - Apr 2026 | 13 Nights
                        </div>
                        <div className="holiday-operator">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/ship.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/ship.svg" />
                          </noscript>
                          Zambezi Queen Collection
                        </div>
                      </div>
                    </div>
                    <div className="cruise-button-block">
                      <div className="price-block">
                        <div className="cruise-price">
                          <span className="price-from">From</span>{' '}
                          <span className="the-price">&pound;5,599</span>
                          <span className="pp"> pp</span>
                        </div>
                      </div>
                      <Link
                        data-ga-element="cruise-offers-single-related-cta"
                        href="https://www.imaginecruising.co.uk/search/?cruise_reference[]AFR2224"
                        className="default-cta"
                      >
                        Discover more{' '}
                      </Link>
                    </div>
                  </div>
                </div>
                <div data-ga-index="2" className="item-cruise cruise-717779 slide-position-3">
                  <Link
                    data-ga-element="cruise-offers-cover-link"
                    className="test-cg cover-link"
                    href="https://www.imaginecruising.co.uk/search/?cruise_reference[]=RVR2223"
                  ></Link>
                  <div className="cruise-img-block">
                    <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2025/01/Taste-of-Bordeaux-JUL-AUG24-Tile_6493491a494-4-1-768x525.jpg" />
                    <div className="cruise-exclusive exclusive">
                      <span>includes drinks with meals on board</span>
                    </div>
                    <span className="fave" data-favourite="717779">
                      <i className="far fa-heart"></i>
                    </span>
                  </div>
                  <div className="cruise-content-block">
                    <div className="cruise-top-content">
                      <div data-ga-element="cruise-offers-single-name" className="cruise-name">
                        Flavours of Bordeaux
                      </div>
                      <div className="cruise-meta-block">
                        <div className="holiday-type">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/luggage.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/luggage.svg" />
                          </noscript>
                          River Cruising
                        </div>
                        <div className="holiday-dates">
                          <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/calendar-icon.svg" />
                          <noscript>
                            <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/calendar-icon.svg" />
                          </noscript>
                          Apr - Aug 2025 | 7 Nights
                        </div>
                      </div>
                    </div>
                    <div className="cruise-button-block">
                      <div className="price-block">
                        <div className="cruise-price">
                          <span className="price-from">From</span>{' '}
                          <span className="the-price">&pound;1,799</span>
                          <span className="pp"> pp</span>
                        </div>
                      </div>
                      <Link
                        data-ga-element="cruise-offers-single-related-cta"
                        href="https://www.imaginecruising.co.uk/search/?cruise_reference[]RVR2223"
                        className="default-cta"
                      >
                        Discover more{' '}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            data-ga-index="11"
            data-ga-context="cruiseline_offers"
            className="cruise-lines-section builder-cruise-lines-block builder-cruise-lines-block-default slider-version"
          >
            <div className="inner">
              <span className="cruise-lines-section-under-h3-p">
                <h3 data-ga-element="cruiselines-block-title" className="">
                  Cruise Line Deals
                </h3>
              </span>
              <div className="wrapper cruises-block">
                <div data-ga-index="0" className="item-grid item-cruise-line">
                  <div
                    data-bg="https://www.imaginecruising.co.uk/wp-content/uploads/2023/10/Cruise-Line-Brand-Image-–-Cunard.jpg"
                    className="img-block background rocket-lazyload"
                  ></div>
                  <div className="meta-data-flex flex flex-direction-column">
                    <div className="meta-data">
                      <div data-ga-element="cruiseslines-block-name" className="cruise-line-name">
                        Cunard Line
                      </div>
                      <div
                        data-ga-element="cruiselines-block-desc"
                        className="cruise-line-description"
                      >
                        The Cunard cruise line is synonymous with luxury cruising and boasts an
                        unrivalled maritime heritage dating back almost two centuries.
                      </div>
                    </div>
                    <div className="cruise-line-logo">
                      <Link
                        data-ga-element="cruiselines-block-logo-link"
                        href="https://www.imaginecruising.co.uk/cruise-lines/cunard-line/"
                      >
                        <img
                          width="300"
                          height="65"
                          alt="Cunard Line"
                          src="https://www.imaginecruising.co.uk/wp-content/uploads/2023/07/Logo_Cunard_Horizontal_FC_CrestOnLeft_h7wxdw-300x65.png"
                        />
                        <noscript>
                          <img
                            src="https://www.imaginecruising.co.uk/wp-content/uploads/2023/07/Logo_Cunard_Horizontal_FC_CrestOnLeft_h7wxdw-300x65.png"
                            width="300"
                            height="65"
                            alt="Cunard Line"
                          />
                        </noscript>
                      </Link>
                    </div>
                    <div className="button-block">
                      <Link
                        data-ga-element="cruiselines-block-discover-link"
                        href="https://www.imaginecruising.co.uk/cruise-lines/cunard-line/"
                        className="button default-cta cruise-line-detail"
                      >
                        Discover More
                      </Link>
                      {/* <Link href="https://www.imaginecruising.co.uk/search/?cruiseline[]=Cunard+Line" className="button button-gold cruise-search">View Offers<i className="fa fa-chevron-right" aria-hidden="true"></i></Link> */}
                    </div>
                  </div>
                </div>
                <div data-ga-index="1" className="item-grid item-cruise-line">
                  <div
                    data-bg="https://www.imaginecruising.co.uk/wp-content/uploads/2023/04/ss6198-scaled.jpg"
                    className="img-block background rocket-lazyload"
                  ></div>
                  <div className="meta-data-flex flex flex-direction-column">
                    <div className="meta-data">
                      <div data-ga-element="cruiseslines-block-name" className="cruise-line-name">
                        Silversea
                      </div>
                      <div
                        data-ga-element="cruiselines-block-desc"
                        className="cruise-line-description"
                      >
                        Intimate, stylish ships, an all-inclusive basis and in-suite butlers to
                        attend to your every desire – this is what it means to embark on a Silversea
                        cruise.
                      </div>
                    </div>
                    <div className="cruise-line-logo">
                      <Link
                        data-ga-element="cruiselines-block-logo-link"
                        href="https://www.imaginecruising.co.uk/cruise-lines/silversea-cruises/"
                      >
                        <img
                          width="210"
                          height="40"
                          alt="Silversea"
                          src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Silversea_ColourLogo.png"
                        />
                        <noscript>
                          <img
                            src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Silversea_ColourLogo.png"
                            width="210"
                            height="40"
                            alt="Silversea"
                          />
                        </noscript>
                      </Link>
                    </div>
                    <div className="button-block">
                      <Link
                        data-ga-element="cruiselines-block-discover-link"
                        href="https://www.imaginecruising.co.uk/cruise-lines/silversea-cruises/"
                        className="button default-cta cruise-line-detail"
                      >
                        Discover More
                      </Link>
                    </div>
                  </div>
                </div>
                <div data-ga-index="2" className="item-grid item-cruise-line">
                  <div
                    data-bg="https://www.imaginecruising.co.uk/wp-content/uploads/2023/04/Celebrity-Cruise-Line-Page.jpg"
                    className="img-block background rocket-lazyload"
                  ></div>
                  <div className="meta-data-flex flex flex-direction-column">
                    <div className="meta-data">
                      <div data-ga-element="cruiseslines-block-name" className="cruise-line-name">
                        Celebrity Cruises
                      </div>
                      <div
                        data-ga-element="cruiselines-block-desc"
                        className="cruise-line-description"
                      >
                        Celebrity Cruises truly embodies “relaxed luxury”, having been providing
                        unforgettable moments for guests since its establishment in Greece in 1988.
                      </div>
                    </div>
                    <div className="cruise-line-logo">
                      <Link
                        data-ga-element="cruiselines-block-logo-link"
                        href="https://www.imaginecruising.co.uk/cruise-lines/celebrity-cruises/"
                      >
                        <img
                          width="300"
                          height="63"
                          alt="Celebrity Cruises"
                          src="https://www.imaginecruising.co.uk/wp-content/uploads/2023/04/Celebrity20Cruises20Logo20Dec202021200-300x63.png"
                        />
                        <noscript>
                          <img
                            src="https://www.imaginecruising.co.uk/wp-content/uploads/2023/04/Celebrity20Cruises20Logo20Dec202021200-300x63.png"
                            width="300"
                            height="63"
                            alt="Celebrity Cruises"
                          />
                        </noscript>
                      </Link>
                    </div>
                    <div className="button-block">
                      <Link
                        data-ga-element="cruiselines-block-discover-link"
                        href="https://www.imaginecruising.co.uk/cruise-lines/celebrity-cruises/"
                        className="button default-cta cruise-line-detail"
                      >
                        Discover More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section data-ga-index="12" id="home-categories" data-ga-context="landholidays_tiles">
            <div className="inner"></div>
          </section>
        </div>
        <footer id="main-footer">
          <div
            data-ga-element="subscribe-toolbar"
            id="subscribe-toolbar"
            className="subscribe-toolbar-disrupter"
          >
            <div className="content-margin">
              <p data-ga-element="toolbar-header" className="toolbar-header">
                Latest Offers from Imagine Cruising
              </p>
              <p>
                The world is your oyster. Subscribe to our newsletter to uncover hidden gems,
                inspiring destinations, and insider tips from our knowledgeable team
              </p>
              <div className="signup-row flex">
                <input
                  onChange={(e) => console.log(e.target.value)}
                  type="email"
                  id="form-first-email"
                  placeholder="Enter Email Address"
                />
                <button data-ga-element="subscribe-cta" className="footer-newsletter aqua-button">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div id="footer-lower">
            <div
              data-ga-element="mobile-footer-sticky"
              id="footer-sticky-number"
              className="mobile-only fixed"
            >
              <div className="flex">
                <Link
                  className="absolute-zero fsource__tel no-text"
                  href="tel:0800 840 5801"
                ></Link>
                <p>
                  Speak to a cruise expert{' '}
                  <span style={{ color: '#0CC0CC' }}>We&#8217;re open</span>
                </p>
                <Link
                  data-ga-element="sticky-footer-telephone-link"
                  href="tel:0800 840 5801"
                  className="phone__number fsource__tel"
                >
                  0800 840 5801
                </Link>
              </div>
            </div>
            <div className="content-margin center">
              <div className="flex flex-wrap flex-direction-column">
                <div
                  data-ga-element="footer-links"
                  id="footer-links"
                  className="flex flex-align-start flex-justify-center desktop"
                >
                  <div
                    data-ga-element="footer-link-column"
                    data-ga-index="0"
                    className="links-column   links-column-1"
                  >
                    <p className="links-title">Useful Links</p>
                    <div className="footer-link-holder">
                      <Link
                        data-ga-element="footer-link"
                        data-ga-index="0"
                        className="footer-link "
                        aria-label="Home"
                        href="https://www.imaginecruising.co.uk/"
                      >
                        Home
                      </Link>
                      <Link
                        data-ga-element="footer-link"
                        data-ga-index="1"
                        className="footer-link "
                        aria-label="About us"
                        href="https://www.imaginecruising.co.uk/about/"
                      >
                        About us
                      </Link>
                      <Link
                        data-ga-element="footer-link"
                        data-ga-index="2"
                        className="footer-link "
                        aria-label="Holiday Extras"
                        href="https://www.holidayextras.com/imaginecruising/hotels.html#"
                      >
                        Holiday Extras
                      </Link>
                      <Link
                        data-ga-element="footer-link"
                        data-ga-index="3"
                        className="footer-link "
                        aria-label="FAQs"
                        href="https://www.imaginecruising.co.uk/faqs/"
                      >
                        FAQs
                      </Link>
                      <Link
                        data-ga-element="footer-link"
                        data-ga-index="4"
                        className="footer-link "
                        aria-label="Contact us"
                        href="https://www.imaginecruising.co.uk/contact-us/"
                      >
                        Contact us
                      </Link>
                      <Link
                        data-ga-element="footer-link"
                        data-ga-index="5"
                        className="footer-link "
                        aria-label="Careers"
                        href="https://www.imaginecruising.co.uk/career-opportunities/"
                      >
                        Careers
                      </Link>
                    </div>
                  </div>
                  <div
                    data-ga-element="footer-link-column"
                    data-ga-index="1"
                    className="links-column   links-column-2"
                  >
                    <p className="links-title">Legal</p>
                    <div className="footer-link-holder">
                      <Link
                        data-ga-element="footer-link"
                        data-ga-index="0"
                        className="footer-link "
                        aria-label="Cookie Policy"
                        href="https://www.imaginecruising.co.uk/cookie-policy/"
                      >
                        Cookie Policy
                      </Link>
                      <Link
                        data-ga-element="footer-link"
                        data-ga-index="1"
                        className="footer-link "
                        aria-label="Group Tax Strategy"
                        href="https://res.cloudinary.com/deh6eqgn0/image/upload/v1739896521/dnata-Emirates-UK-tax-strategy-_2024-25.pdf"
                      >
                        Group Tax Strategy
                      </Link>
                      <Link
                        data-ga-element="footer-link"
                        data-ga-index="2"
                        className="footer-link "
                        aria-label="Modern Slavery Transparency Statement"
                        href="https://res.cloudinary.com/deh6eqgn0/image/upload/v1734018241/Imagine-Modern-Slavery-Statement-FY23-24-SS_Rebrand_1.pdf"
                      >
                        Modern Slavery Transparency Statement
                      </Link>
                      <Link
                        data-ga-element="footer-link"
                        data-ga-index="3"
                        className="footer-link "
                        aria-label="Anti-Slavery and Human Trafficking Policy"
                        href="https://res.cloudinary.com/deh6eqgn0/images/v1689758498/Anti-Slavery_and_Human_Trafficking_Policy/Anti-Slavery_and_Human_Trafficking_Policy.pdf?_i=AA"
                      >
                        Anti-Slavery and Human Trafficking Policy
                      </Link>
                      <Link
                        data-ga-element="footer-link"
                        data-ga-index="4"
                        className="footer-link "
                        aria-label="Privacy Notice"
                        href="https://www.imaginecruising.co.uk/privacy-policy/"
                      >
                        Privacy Notice
                      </Link>
                      <Link
                        data-ga-element="footer-link"
                        data-ga-index="5"
                        className="footer-link "
                        aria-label="Terms and Conditions"
                        href="https://www.imaginecruising.co.uk/terms-conditions/"
                      >
                        Terms and Conditions
                      </Link>
                    </div>
                  </div>
                  <div
                    data-ga-element="footer-link-column"
                    data-ga-index="2"
                    className="links-column   links-column-3"
                  >
                    <p className="links-title">Holiday Types</p>
                    <div className="footer-link-holder">
                      <Link
                        data-ga-element="footer-link"
                        data-ga-index="0"
                        className="footer-link "
                        aria-label="Cruise & Touring"
                        href="https://www.imaginecruising.co.uk/holiday-types/cruise-touring/"
                      >
                        Cruise & Touring
                      </Link>
                      <Link
                        data-ga-element="footer-link"
                        data-ga-index="1"
                        className="footer-link "
                        aria-label="Cruise & Rail"
                        href="https://www.imaginecruising.co.uk/holiday-types/cruise-rail/"
                      >
                        Cruise & Rail
                      </Link>
                      <Link
                        data-ga-element="footer-link"
                        data-ga-index="2"
                        className="footer-link "
                        aria-label="Cruise & Stay"
                        href="https://www.imaginecruising.co.uk/holiday-types/cruise-stay/"
                      >
                        Cruise & Stay
                      </Link>
                      <Link
                        data-ga-element="footer-link"
                        data-ga-index="3"
                        className="footer-link "
                        aria-label="Cruise & Event"
                        href="https://www.imaginecruising.co.uk/holiday-types/cruise-event/"
                      >
                        Cruise & Event
                      </Link>
                      <Link
                        data-ga-element="footer-link"
                        data-ga-index="4"
                        className="footer-link "
                        aria-label="River Cruising"
                        href="https://www.imaginecruising.co.uk/river-cruise-collection/"
                      >
                        River Cruising
                      </Link>
                    </div>
                  </div>
                  <div data-ga-element="footer-link-column" className="links-column links-column-4">
                    <div
                      data-ga-element="trustpilot"
                      className="trustpilot-widget ml-2 mt-2 first-wiget"
                      data-locale="en-GB"
                      data-template-id="5406e65db0d04a09e042d5fc"
                      data-businessunit-id="58b690190000ff00059d93e2"
                      data-style-height="20px"
                      data-style-width="100px"
                      data-theme="dark"
                    >
                      <Link
                        href="https://uk.trustpilot.com/review/imaginecruising.co.uk"
                        target="_blank"
                        rel="noopener"
                      ></Link>
                    </div>
                    <div
                      data-ga-element="trustpilot"
                      className="trustpilot-widget"
                      data-locale="en-GB"
                      data-template-id="5419b637fa0340045cd0c936"
                      data-businessunit-id="58b690190000ff00059d93e2"
                      data-style-height="28px"
                      data-style-width="230px"
                      data-theme="dark"
                    >
                      <Link
                        href="https://uk.trustpilot.com/review/imaginecruising.co.uk"
                        target="_blank"
                        rel="noopener"
                      ></Link>
                    </div>
                    <div className="footer-socials flex flex-justify-end flex-align-center">
                      <Link
                        data-ga-element="footer-social-link"
                        data-ga-index="0"
                        href="https://www.facebook.com/imaginecruising"
                      >
                        <i
                          className="fa-classic fa-brands fa-square-facebook"
                          aria-hidden="true"
                        ></i>
                      </Link>
                      <Link
                        data-ga-element="footer-social-link"
                        data-ga-index="1"
                        href="https://www.instagram.com/imaginecruising/"
                      >
                        <i
                          className="fa-classic fa-brands fa-square-instagram"
                          aria-hidden="true"
                        ></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div data-ga-element="footer-copyright" id="footer-copyright">
                  <p>
                    Portland House, Bincknoll Lane, Interface Business Park, Royal Wootton Bassett,
                    Wiltshire, SN4 8SY. Copyright © 2025 Imagine Cruising Ltd. All rights reserved.
                    <br />
                    Please check{' '}
                    <Link
                      href="https://travelaware.campaign.gov.uk/"
                      target="_blank"
                      rel="noopener"
                    >
                      travelaware.campaign.gov.uk
                    </Link>{' '}
                    regularly for updates ahead of travel, as the advice can change.
                  </p>
                  <p>
                    <img
                      decoding="async"
                      alt="Abta Logo"
                      src="https://res.cloudinary.com/deh6eqgn0/images/v1686302092/abta-logo_254747d9e1a/abta-logo_254747d9e1a.png?_i=AA"
                    />
                    <noscript>
                      <img
                        decoding="async"
                        src="https://res.cloudinary.com/deh6eqgn0/images/v1686302092/abta-logo_254747d9e1a/abta-logo_254747d9e1a.png?_i=AA"
                        alt="Abta Logo"
                      />
                    </noscript>
                    <img
                      decoding="async"
                      alt="ATOL Logo"
                      width="77"
                      height="75"
                      src="https://res.cloudinary.com/deh6eqgn0/images/v1686302084/atol-logo/atol-logo.png?_i=AA"
                    />
                    <noscript>
                      <img
                        decoding="async"
                        src="https://res.cloudinary.com/deh6eqgn0/images/v1686302084/atol-logo/atol-logo.png?_i=AA"
                        alt="ATOL Logo"
                        width="77"
                        height="75"
                      />
                    </noscript>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div id="search">
        <form action="/" method="get">
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
        </form>
      </div>
      <div data-ga-element="mobile-navigation" id="mobile-navigation">
        <div data-ga-element="mobile-nav-close" className="close">
          <img
            className=""
            src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/close-white.svg"
          />
          <noscript>
            <img
              className=""
              src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/close-white.svg"
            />
          </noscript>
        </div>
        <div className="custom-menus">
          <ul
            data-ga-element="mobile-custom-links"
            id="custom-nav"
            className="flex flex-justify-between flex-align-left"
          >
            <li
              data-ga-element="mobile-custom-link"
              data-ga-index="0"
              className="top-level "
              data-menu="Home"
            >
              <Link href="https://www.imaginecruising.co.uk/">
                <div className="child-name">
                  <span>Home</span>
                  <div
                    data-bg="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Home-nav-images-mobile-desktop-300x158-.jpg"
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li
              data-ga-element="mobile-custom-link"
              data-ga-index="1"
              className="top-level "
              data-menu="Cruise Deals"
            >
              <Link href="https://www.imaginecruising.co.uk/cruise-deals/">
                <div className="child-name">
                  <span>Cruise Deals</span>
                  <div
                    data-bg="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Cruise-Deals-nav-images-mobile-desktop-300x158-1-300x158.jpg"
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li
              data-ga-element="mobile-custom-link"
              data-ga-index="2"
              className="top-level has-children"
              data-menu="Holiday Types"
            >
              <Link href="https://www.imaginecruising.co.uk/holiday-types/">
                <div className="child-name">
                  <span>
                    Holiday Types <i className="fa-solid fa-chevron-right"></i>
                  </span>
                  <div
                    data-bg="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/shutterstock_1917467366-holiday_types.jpg"
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li
              data-ga-element="mobile-custom-link"
              data-ga-index="3"
              className="top-level "
              data-menu="Cruise from the UK"
            >
              <Link href="https://www.imaginecruising.co.uk/cruise-from-the-uk/">
                <div className="child-name">
                  <span>Cruise from the UK</span>
                  <div
                    data-bg="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Cruise_From_UK_Tile.jpg"
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li
              data-ga-element="mobile-custom-link"
              data-ga-index="4"
              className="top-level "
              data-menu="River Cruising"
            >
              <Link href="https://www.imaginecruising.co.uk/river-cruise-collection/">
                <div className="child-name">
                  <span>River Cruising</span>
                  <div
                    data-bg="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-River-300x158.jpg"
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li
              data-ga-element="mobile-custom-link"
              data-ga-index="5"
              className="top-level has-children"
              data-menu="Cruise Lines"
            >
              <Link href="https://www.imaginecruising.co.uk/cruise-lines/">
                <div className="child-name">
                  <span>
                    Cruise Lines <i className="fa-solid fa-chevron-right"></i>
                  </span>
                  <div
                    data-bg="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Cruise-Lines-nav-images-mobile-desktop-300x158-OCo-2-300x158.jpg"
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li
              data-ga-element="mobile-custom-link"
              data-ga-index="6"
              className="top-level has-children"
              data-menu="Destinations"
            >
              <Link href="https://www.imaginecruising.co.uk/destinations/">
                <div className="child-name">
                  <span>
                    Destinations <i className="fa-solid fa-chevron-right"></i>
                  </span>
                  <div
                    data-bg="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/View-all-nav-images-mobile-desktop-300x158-Destination-OCo-3-300x158.jpg"
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li
              data-ga-element="mobile-custom-link"
              data-ga-index="7"
              className="top-level "
              data-menu="About us"
            >
              <Link href="https://www.imaginecruising.co.uk/about-us/">
                <div className="child-name">
                  <span>About us</span>
                  <div
                    data-bg="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-About-us-300x158.jpg"
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <div
              data-bg="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Manage-my-Booking_320x179-1.jpg"
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
            data-ga-index="2"
            className="custom-sub-nav"
            data-parent="Holiday Types"
          >
            <div className="custom-sub-prev">
              <i className="fa-solid fa-chevron-left"></i> Holiday Types
            </div>
            <li data-ga-element="mobile-custom-sub-nav-link" data-ga-index="0" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/holiday-types/cruise-touring/">
                <div className="child-name">
                  <span>Cruise & Touring</span>
                  <div
                    data-bg="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Cruise-and-Touring.jpg"
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li data-ga-element="mobile-custom-sub-nav-link" data-ga-index="1" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/holiday-types/cruise-rail/">
                <div className="child-name">
                  <span>Cruise & Rail</span>
                  <div
                    data-bg="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Cruise-and-Rail-1.jpg"
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li data-ga-element="mobile-custom-sub-nav-link" data-ga-index="2" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/holiday-types/cruise-stay/">
                <div className="child-name">
                  <span>Cruise & Stay</span>
                  <div
                    data-bg="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Cruise-and-Rail-OCo-1-1-300x158.jpg"
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li data-ga-element="mobile-custom-sub-nav-link" data-ga-index="3" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/holiday-types/cruise-event/">
                <div className="child-name">
                  <span>Cruise & Event</span>
                  <div
                    data-bg="https://www.imaginecruising.co.uk/wp-content/uploads/2023/10/Cruise-Event-300x136.jpg"
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li data-ga-element="mobile-custom-sub-nav-link" data-ga-index="4" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/cruise-from-the-uk/">
                <div className="child-name">
                  <span>Cruise from the UK</span>
                  <div
                    data-bg="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Cruise_From_UK_Tile.jpg"
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
          </ul>
          <ul
            data-ga-element="mobile-custom-sub-nav"
            data-ga-index="5"
            className="custom-sub-nav"
            data-parent="Cruise Lines"
          >
            <div className="custom-sub-prev">
              <i className="fa-solid fa-chevron-left"></i> Cruise Lines
            </div>
            <li data-ga-element="mobile-custom-sub-nav-link" data-ga-index="0" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/cruise-lines/azamara/">
                <div className="child-name">
                  <span>Azamara</span>
                  <div
                    data-bg="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Azamara-OCo-1-300x158.jpg"
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li data-ga-element="mobile-custom-sub-nav-link" data-ga-index="1" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/cruise-lines/celebrity-cruises/">
                <div className="child-name">
                  <span>Celebrity </span>
                  <div
                    data-bg="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Celebrity-OCo-1-300x158.jpg"
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li data-ga-element="mobile-custom-sub-nav-link" data-ga-index="2" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/cruise-lines/cunard-line/">
                <div className="child-name">
                  <span>Cunard</span>
                  <div
                    data-bg="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Cunard-OCo-1-300x158.jpg"
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li data-ga-element="mobile-custom-sub-nav-link" data-ga-index="3" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/cruise-lines/holland-america-line/">
                <div className="child-name">
                  <span>Holland America Line</span>
                  <div
                    data-bg="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-HAL-OCo-1-300x158.jpg"
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li data-ga-element="mobile-custom-sub-nav-link" data-ga-index="4" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/cruise-lines/po-cruises/">
                <div className="child-name">
                  <span>P&O</span>
                  <div
                    data-bg="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-PO-OCo-1-300x158.jpg"
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li data-ga-element="mobile-custom-sub-nav-link" data-ga-index="5" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/cruise-lines/princess-cruises/">
                <div className="child-name">
                  <span>Princess</span>
                  <div
                    data-bg="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Princess-OCo-1-300x158.jpg"
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li data-ga-element="mobile-custom-sub-nav-link" data-ga-index="6" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/cruise-lines/silversea-cruises/">
                <div className="child-name">
                  <span>Silversea</span>
                  <div
                    data-bg="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Silversea-1-300x158.jpg"
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li data-ga-element="mobile-custom-sub-nav-link" data-ga-index="7" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/cruise-lines/">
                <div className="child-name">
                  <span>View all </span>
                  <div
                    data-bg="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Cruise-Line-300x158.jpg"
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
          </ul>
          <ul
            data-ga-element="mobile-custom-sub-nav"
            data-ga-index="6"
            className="custom-sub-nav"
            data-parent="Destinations"
          >
            <div className="custom-sub-prev">
              <i className="fa-solid fa-chevron-left"></i> Destinations
            </div>
            <li data-ga-element="mobile-custom-sub-nav-link" data-ga-index="0" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/destinations/africa/">
                <div className="child-name">
                  <span>Africa</span>
                  <div
                    data-bg="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Africa.jpg"
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li data-ga-element="mobile-custom-sub-nav-link" data-ga-index="1" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/destinations/asia/">
                <div className="child-name">
                  <span>Asia</span>
                  <div
                    data-bg="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Asia-nav-images-mobile-desktop-300x158-Destination.jpg"
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li data-ga-element="mobile-custom-sub-nav-link" data-ga-index="2" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/australia-and-new-zealand/">
                <div className="child-name">
                  <span>Australia & New Zealand</span>
                  <div
                    data-bg="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Australia-nav-images-mobile-desktop-300x158-Destination-OCo-1.jpg"
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li data-ga-element="mobile-custom-sub-nav-link" data-ga-index="3" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/destinations/caribbean/">
                <div className="child-name">
                  <span>Caribbean</span>
                  <div
                    data-bg="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Caribbean-nav-images-mobile-desktop-300x158-Destination-OCo-2.jpg"
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li data-ga-element="mobile-custom-sub-nav-link" data-ga-index="4" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/destinations/europe/">
                <div className="child-name">
                  <span>Europe</span>
                  <div
                    data-bg="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Europe-nav-images-mobile-desktop-300x158-Destination-OCo-4-300x158.jpg"
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li data-ga-element="mobile-custom-sub-nav-link" data-ga-index="5" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/destinations/indian-ocean/">
                <div className="child-name">
                  <span>Indian Ocean</span>
                  <div
                    data-bg="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Indian-Ocean-nav-images-mobile-desktop-300x158-Destination-OCo-5-300x158.jpg"
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li data-ga-element="mobile-custom-sub-nav-link" data-ga-index="6" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/destinations/indian-subcontinent/">
                <div className="child-name">
                  <span>Indian Subcontinent </span>
                  <div
                    data-bg="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Indian-sub-1-300x158.jpg"
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li data-ga-element="mobile-custom-sub-nav-link" data-ga-index="7" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/destinations/middle-east/">
                <div className="child-name">
                  <span>Middle East</span>
                  <div
                    data-bg="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Middle-East-nav-images-mobile-desktop-300x158-Destination-OCo-6-300x158.jpg"
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li data-ga-element="mobile-custom-sub-nav-link" data-ga-index="8" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/north-america/">
                <div className="child-name">
                  <span>North America</span>
                  <div
                    data-bg="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/North-America-1.jpg"
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li data-ga-element="mobile-custom-sub-nav-link" data-ga-index="9" className="sub-page">
              <Link href="https://www.imaginecruising.co.uk/destinations/south-america/">
                <div className="child-name">
                  <span>South America</span>
                  <div
                    data-bg="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/South-America-nav-images-mobile-desktop-300x158-Destination-OCo-7-300x158.jpg"
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li
              data-ga-element="mobile-custom-sub-nav-link"
              data-ga-index="10"
              className="sub-page"
            >
              <Link href="https://www.imaginecruising.co.uk/cruise-from-the-uk/">
                <div className="child-name">
                  <span>Cruise from the UK</span>
                  <div
                    data-bg="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Cruise_From_UK_Tile.jpg"
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
            <li
              data-ga-element="mobile-custom-sub-nav-link"
              data-ga-index="11"
              className="sub-page"
            >
              <Link href="https://www.imaginecruising.co.uk/destinations/">
                <div className="child-name">
                  <span>View all</span>
                  <div
                    data-bg="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/View-all-nav-images-mobile-desktop-300x158-Destination-OCo-3-300x158.jpg"
                    className="menu-img rocket-lazyload"
                  ></div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <ul data-ga-element="mobile-socials" className="mobile-socials">
          <li data-ga-element="mobile-socials-link" data-ga-index="0">
            <Link href="https://www.facebook.com/imaginecruising">
              <i className="fa-classic fa-brands fa-square-facebook" aria-hidden="true"></i>
            </Link>
          </li>
          <li data-ga-element="mobile-socials-link" data-ga-index="1">
            <Link href="https://www.instagram.com/imaginecruising/">
              <i className="fa-classic fa-brands fa-square-instagram" aria-hidden="true"></i>
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
            data-bg="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Frame-6-2-768x610.jpg"
            className="timed-form rocket-lazyload"
            style={{ backgroundSize: 'cover' }}
          >
            <div className="form-overlay"></div>
            <span data-ga-element="timed-popup-close" className="timed-close">
              <img
                className="close-white"
                src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/close-white.svg"
              />
              <noscript>
                <img
                  className="close-white"
                  src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/close-white.svg"
                />
              </noscript>
              <img
                className="close-hover"
                src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/close-gold.svg"
              />
              <noscript>
                <img
                  className="close-hover"
                  src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/close-gold.svg"
                />
              </noscript>
            </span>
            <form
              action="https://mp.imaginecruising.co.uk/x/plugin/?pName=subscribe&MIDRID=S7Y1AgAA82&pLang=en&Z=-521571858"
              method="post"
              id="frm1"
            >
              <input
                onChange={(e) => console.log(e.target.value)}
                type="hidden"
                name="accName"
                value="Imagine_Cruising_UK"
              />
              <input
                onChange={(e) => console.log(e.target.value)}
                type="hidden"
                name="listName"
                value="ImagineCruising_UK"
              />
              <input
                onChange={(e) => console.log(e.target.value)}
                type="hidden"
                name="successUrl"
                value="https://imaginecruising.co.uk/thank-you-for-signing-up"
              />
              <input
                onChange={(e) => console.log(e.target.value)}
                type="hidden"
                name="errorUrl"
                value=""
              />
              <input
                onChange={(e) => console.log(e.target.value)}
                type="hidden"
                name="DMDtask"
                value="subscribe"
              />
              <input
                onChange={(e) => console.log(e.target.value)}
                type="hidden"
                name="contactsource1"
                value="Web"
              />
              <input
                onChange={(e) => console.log(e.target.value)}
                type="hidden"
                name="contactsource2"
                value="IC Web"
              />
              <input
                onChange={(e) => console.log(e.target.value)}
                className="fsourceField"
                type="hidden"
                name="webfsource"
                value=""
              />
              <input
                onChange={(e) => console.log(e.target.value)}
                type="hidden"
                name="looker"
                value="Yes"
              />
              <input
                onChange={(e) => console.log(e.target.value)}
                type="hidden"
                name="bau"
                value="Yes"
              />
              <input
                onChange={(e) => console.log(e.target.value)}
                type="hidden"
                name="testfield"
                value="A"
              />
              <input
                onChange={(e) => console.log(e.target.value)}
                type="hidden"
                name="doubleOptin"
                value="false"
              />
              <p className="standard-text">
                Sign up to our mailing list and stay
                <br className="desktop-only" /> up-to date with our latest offers.
                <br />
              </p>
              <input
                onChange={(e) => console.log(e.target.value)}
                data-ga-element="popup-email-field"
                id="popup-email"
                className="verify-email"
                type="email"
                name="email"
                placeholder="Email"
              />
              <br />
              <input
                onChange={(e) => console.log(e.target.value)}
                data-ga-element="popup-firstname-field"
                type="text"
                name="FirstName"
                placeholder="First Name"
              />
              <br />
              <input
                onChange={(e) => console.log(e.target.value)}
                data-ga-element="popup-surname-field"
                type="text"
                name="LastName"
                placeholder="Last Name"
              />
              <br />
              <input
                onChange={(e) => console.log(e.target.value)}
                type="hidden"
                name="EngagedContact"
                value="Yes"
              />
              <input
                onChange={(e) => console.log(e.target.value)}
                type="hidden"
                name="ContactSource1"
                value="Web"
              />
              <input
                onChange={(e) => console.log(e.target.value)}
                type="hidden"
                name="AlwaysExclude"
                value="No"
              />
              <input
                onChange={(e) => console.log(e.target.value)}
                type="hidden"
                name="Pure_Parallel_Run_Flag"
                value="N"
              />
              <input
                onChange={(e) => console.log(e.target.value)}
                type="hidden"
                name="InterestedInCruise"
                value="Yes"
              />
              <input
                onChange={(e) => console.log(e.target.value)}
                type="hidden"
                name="InterestedInHoliday"
                value="Yes"
              />
              <input
                onChange={(e) => console.log(e.target.value)}
                type="hidden"
                name="ContactSource2"
                value="IC Web"
              />
              <input
                onChange={(e) => console.log(e.target.value)}
                type="hidden"
                name="WebSignup_AB"
                value="popup_original"
              />
              <input
                onChange={(e) => console.log(e.target.value)}
                type="hidden"
                name=" AB_April2023"
                value="A"
              />
              <input
                onChange={(e) => console.log(e.target.value)}
                type="hidden"
                name="InterestedInSailcationNov25"
                value="N"
              />
              <input
                onChange={(e) => console.log(e.target.value)}
                type="hidden"
                name="InterestedInF1"
                value="N"
              />
              <input
                onChange={(e) => console.log(e.target.value)}
                type="hidden"
                name="InterestedInMusic"
                value="N"
              />
              <script src="https://www.google.com/recaptcha/api.js" />
              <div
                className="g-recaptcha"
                data-sitekey="6Ldo2swqAAAAANgzuyYGcPYbLZBrfHn97IrvR6ve"
              ></div>
              <div className="popup-form-buttons">
                <input
                  onChange={(e) => console.log(e.target.value)}
                  data-ga-element="popup-form-submit-button"
                  className="orange-button "
                  type="submit"
                  value="Subscribe"
                  disabled
                />
              </div>
              <br />
              <p className="popup-copyright">
                By clicking subscribe you agree to our{' '}
                <Link href="https://www.imaginecruising.co.uk/cookie-policy">Cookie Policy</Link>{' '}
                and{' '}
                <Link href="https://www.imaginecruising.co.uk/privacy-policy">Privacy Policy</Link>
              </p>
              <script type="rocketlazyloadscript">
                {`
                     window.VerifaliaWidgetConfig = {
                         inputBindings: {
                             appendHiddenFields: true,
                             autoWireup: true,
                             debounceTime: 1500,
                             squiggles: false,
                             selector: '//input[@id="popup-email"]',
                             styling: true
                         }
                     };
                     `}
              </script>
              <div style={{ display: 'none' }}>
                Powered by Verifalia <Link href="https://verifalia.com/">email verification</Link>
              </div>
              <script
                type="rocketlazyloadscript"
                data-minify="1"
                defer
                data-rocket-src="https://www.imaginecruising.co.uk/wp-content/cache/min/1/verifalia-widget@1.9.0/dist/verifalia-widget.js?ver=1744621466"
                data-verifalia-appkey="5ae7fd39a4ca4e37a6c0679d29b00d7c"
                crossOrigin="anonymous"
              />
            </form>
          </div>
        </div>
      </div>
      <script
        type="text/javascript"
        src="https://www.imaginecruising.co.uk/wp-includes/js/dist/vendor/moment.min.js?ver=2.30.1"
        id="moment-js"
        data-rocket-defer
        defer
      ></script>
      <script type="text/javascript" id="moment-js-after">
        {`
         /* <![CDATA[ */
         moment.updateLocale( 'en_GB', {"months":["January","February","March","April","May","June","July","August","September","October","November","December"],"monthsShort":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"weekdays":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"weekdaysShort":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"week":{"dow":1},"longDateFormat":{"LT":"g:i a","LTS":null,"L":null,"LL":"F j, Y","LLL":"j F Y H:i","LLLL":null}} );
         /* ]]> */`}
      </script>
      <script
        type="rocketlazyloadscript"
        data-minify="1"
        data-rocket-type="text/javascript"
        data-rocket-src="https://www.imaginecruising.co.uk/wp-content/cache/min/1/npm/luxon@3.2.1/build/global/luxon.min.js?ver=1744621466"
        id="luxon-js"
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
        data-rocket-src="https://www.imaginecruising.co.uk/wp-content/cache/min/1/npm/litepicker@2.0.11/dist/litepicker.min.js?ver=1744621466"
        id="litepicker-js"
        data-rocket-defer
        defer
      ></script>
      <script
        type="rocketlazyloadscript"
        data-minify="1"
        data-rocket-type="text/javascript"
        data-rocket-src="https://www.imaginecruising.co.uk/wp-content/cache/min/1/npm/litepicker@2.0.11/dist/plugins/mobilefriendly.min.js?ver=1744621466"
        id="litepicker-mobile-js"
        data-rocket-defer
        defer
      ></script>
      <script type="text/javascript" id="search-form-js-extra">
        {`
         /* <![CDATA[ */
         var cruiseappy = {"ajax_url":"https:\/\/www.imaginecruising.co.uk\/wp-admin\/admin-ajax.php","logged_in":"","website":"https:\/\/www.imaginecruising.co.uk","active_language":"en","theme":"https:\/\/www.imaginecruising.co.uk\/wp-content\/themes\/imagine-rebrand","plugin":"https:\/\/www.imaginecruising.co.uk\/wp-content\/plugins\/cruiseappy-widgety","currency":{"code":"GBP","symbol":"&pound;","decimals":"0","decimal_separator":".","thousand_separator":","},"guarantee_cabins":["guar","wlt","gty","garantiert","garantiehut"],"language":"en-GB","locale":"en_GB","js_locale":"en","booking":{"success":"https:\/\/www.imaginecruising.co.uk\/wp-content\/plugins\/cruiseappy-widgety\/actions\/booking\/","error":false},"labels":{"apply":"Apply","cancel":"Cancel","error":"Error","call_for_price":"Sold Out","enquire_button":"Enquire Now","book_button":"Book Now","loading_prices":"Finding the latest prices","loading_search":"Finding the latest cruises","select_cabin":"Select","find_cabin":"Find Cabin","view_cabin":"Find Cabin","book_cabin":"Book Cabin","enquire_cabin":"Enquire","no_cabins":"No Cabins Found","back_to_cabins":"Back to Cabins","cabins_subtitle":"","cabins":false,"cabin_name":"Cabin Name \/ Grade","deck":"Deck","occupancy":"Occupancy","price":"Price","filters":"Filters","deal_type":"Deal type","nights":"Nights","night":"Night","from":"From","to":"To","position":"Position","search":"Search","choose_your_deal":"Choose your deal","choose_your_flight":"Choose your flight","indirect_flights":"Show indirect flights","choose_airport":"Choose your airport","cruise_found":"cruise found","cruises_found":"results found","departing_ports":"Departing Ports","adults":"Adults","children":"Children","up_to":"Up to","reset":"Reset","regional":"","no_prices_found":null,"date":"Date","duration":"Duration","cruise_number":"Cruise No","ship":"Ship","cruiselines":"Cruise Lines","itinerary":"Itinerary","no_cruises_found":"There were no cruises found for your search options","enquire_now":"Enquire Now","view_details":"View Details","cruise":"cruise","cruises":"cruises","back_to_hotels":"Back to Hotels","price_included":"Included","price_includes":"Price includes","view_rooms":"View Rooms","selected":"Selected","select":"Select","cruiseline":"Cruise Line","destination":"Destination","depart_port":"Depart Port","travel_type":"Holiday Type","no_deckplan":""},"translations":{"search":{"itinerary":{"more":"View Full Itinerary","less":"Less"}}},"search":{"pagination":{"first":"<i className=\"fa-regular fa-chevrons-left\"><\/i> First","previous":"<i className=\"fa-regular fa-chevron-left\"><\/i> Previous","pages":"2","next":"Next <i className=\"fa-regular fa-chevron-right\"><\/i>","last":"Last <i className=\"fa-regular fa-chevrons-right\"><\/i>"},"filter_order":"alpha","results_limit":"12","results_limit_mobile":null},"custom":{"all_destinations":"All destinations","all_cruise_companies":"All cruise companies","all_cruise_ships":"All cruise ships","all_depart_ports":"All depart ports","all_visit_ports":"All visit ports","all_durations":"All durations","all_cruise_types":"All cruise types","show_filters":"Show Filters","hide_filters":"Hide Filters","cabin_from":"Cabin from","pp":"pp","call_for_price":"Continue for price","more_details":"More Details","share_results":"Share results","select":"Select","price":"Price","cabin_type":"Cabin Type","deck":"Deck","cabin_number":"Cabin Number","cabin_name":"Cabin Name","position":"Position","price_pp":"Price (pp)","back_to_cabins":"Back to Cabins","select_this":"Select This","your_cabin":"Your Cabin","select_the_deck":"Select the deck and cabin number below","filters":"Filters","any":"Any","any_position":"Any position","any_deck":"Any deck","more_info":"Details","more_info_mobile":"Discover more","inside_cabine_from":"INSIDE CABIN FROM","inside":"Inside","outside":"Outside","balcony":"Balcony","suite":"Suite","multiple_selected":"Multiple selected","price_from":"Prices from","durations_order":"name","chosen_banner_type":"static","static_banners":[{"desktop":"https:\/\/www.imaginecruising.co.uk\/wp-content\/uploads\/2024\/12\/Canaries-Sailcation_Search-Disrupter-scaled.jpg","mobile":"https:\/\/www.imaginecruising.co.uk\/wp-content\/uploads\/2024\/12\/Canaries-Sailcation_Mob_1080_1080-3.jpg","tablet":"https:\/\/www.imaginecruising.co.uk\/wp-content\/uploads\/2025\/03\/Canaries-Sailcation_Tab-scaled.jpg","link":"https:\/\/www.imaginecruising.co.uk\/holidays\/a-captivating-voyage-exclusive-canaries-sailcation\/","position":"1"},{"desktop":"https:\/\/www.imaginecruising.co.uk\/wp-content\/uploads\/2024\/12\/Sailcation-RB-\u2013-Disruptor-2.jpg","mobile":"https:\/\/www.imaginecruising.co.uk\/wp-content\/uploads\/2024\/12\/Sailcation-RB-\u2013-Disruptor-\u2013-Mobile.jpg","tablet":"","link":"https:\/\/www.imaginecruising.co.uk\/holidays\/a-magical-voyage-exclusive-mediterranean-sailcation\/","position":"3"}],"product_banners":[]}};
         /* ]]> */
      `}
      </script>
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
        type="rocketlazyloadscript"
        data-minify="1"
        data-rocket-type="text/javascript"
        data-rocket-src="https://www.imaginecruising.co.uk/wp-content/cache/min/1/wp-content/plugins/cruiseappy-widgety/js/public.toolbox.js?ver=1744621466"
        id="public_toolbox-js"
        data-rocket-defer
        defer
      ></script>
      <script
        type="rocketlazyloadscript"
        data-minify="1"
        data-rocket-type="text/javascript"
        data-rocket-src="https://www.imaginecruising.co.uk/wp-content/cache/min/1/wp-content/plugins/cruiseappy-widgety/js/public.search.js?ver=1744621466"
        id="public_search-js"
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
        type="rocketlazyloadscript"
        data-minify="1"
        data-rocket-type="text/javascript"
        data-rocket-src="https://www.imaginecruising.co.uk/wp-content/cache/min/1/ajax/libs/slick-carousel/1.9.0/slick.min.js?ver=1744621466"
        id="slick-js"
        data-rocket-defer
        defer
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
        data-minify="1"
        type="text/javascript"
        src="https://www.imaginecruising.co.uk/wp-content/cache/min/1/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js?ver=1744621467"
        id="cookie-js-js"
      ></script>
      <script
        type="rocketlazyloadscript"
        data-minify="1"
        data-rocket-type="text/javascript"
        data-rocket-src="https://www.imaginecruising.co.uk/wp-content/cache/min/1/wp-content/themes/imagine-rebrand/js/custom.js?ver=1744621467"
        id="iprogress-custom-js"
        data-rocket-defer
        defer
      ></script>
      <script
        type="rocketlazyloadscript"
        data-minify="1"
        data-rocket-type="text/javascript"
        data-rocket-src="https://www.imaginecruising.co.uk/wp-content/cache/min/1/wp-content/themes/imagine-rebrand/js/custom-craig.js?ver=1744621467"
        id="iprogress-custom-craig-js"
        data-rocket-defer
        defer
      ></script>
      <script
        type="text/javascript"
        src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/js/jquery.mCustomScrollbar.concat.min.js?ver=1734947792"
        id="custom-scroll-js"
      ></script>
      <script
        data-minify="1"
        type="text/javascript"
        src="https://www.imaginecruising.co.uk/wp-content/cache/min/1/bootstrap/v5/tp.widget.bootstrap.min.js?ver=1744621467"
        id="tp-widget-js"
        data-rocket-defer
        defer
      ></script>
      <script
        type="rocketlazyloadscript"
        data-minify="1"
        data-rocket-type="text/javascript"
        data-rocket-src="https://www.imaginecruising.co.uk/wp-content/cache/min/1/wp-content/themes/imagine-rebrand/js/produce-agent2.js?ver=1744621467"
        id="single-agent2-js-js"
        data-rocket-defer
        defer
      ></script>
      <script>
        {`
         window.lazyLoadOptions=[{elements_selector:"img[data-lazy-src],.rocket-lazyload",data_src:"lazy-src",data_srcset:"lazy-srcset",data_sizes:"lazy-sizes",class_loading:"lazyloading",class_loaded:"lazyloaded",threshold:300,callback_loaded:function(element){if(element.tagName==="IFRAME"&&element.dataset.rocketLazyload=="fitvidscompatible"){if(element.classList.contains("lazyloaded")){if(typeof window.jQuery!="undefined"){if(jQuery.fn.fitVids){jQuery(element).parent().fitVids()}}}}}},{elements_selector:".rocket-lazyload",data_src:"lazy-src",data_srcset:"lazy-srcset",data_sizes:"lazy-sizes",class_loading:"lazyloading",class_loaded:"lazyloaded",threshold:300,}];window.addEventListener('LazyLoad::Initialized',function(e){var lazyLoadInstance=e.detail.instance;if(window.MutationObserver){var observer=new MutationObserver(function(mutations){var image_count=0;var iframe_count=0;var rocketlazy_count=0;mutations.forEach(function(mutation){for(var i=0;i<mutation.addedNodes.length;i++){if(typeof mutation.addedNodes[i].getElementsByTagName!=='function'){continue}
         if(typeof mutation.addedNodes[i].getElementsByClassName!=='function'){continue}
         images=mutation.addedNodes[i].getElementsByTagName('img');is_image=mutation.addedNodes[i].tagName=="IMG";iframes=mutation.addedNodes[i].getElementsByTagName('iframe');is_iframe=mutation.addedNodes[i].tagName=="IFRAME";rocket_lazy=mutation.addedNodes[i].getElementsByClassName('rocket-lazyload');image_count+=images.length;iframe_count+=iframes.length;rocketlazy_count+=rocket_lazy.length;if(is_image){image_count+=1}
         if(is_iframe){iframe_count+=1}}});if(image_count>0||iframe_count>0||rocketlazy_count>0){lazyLoadInstance.update()}});var b=document.getElementsByTagName("body")[0];var config={childList:!0,subtree:!0};observer.observe(b,config)}},!1)
        `}
      </script>
      <script
        data-no-minify="1"
        async
        src="https://www.imaginecruising.co.uk/wp-content/plugins/wp-rocket/assets/js/lazyload/17.8.3/lazyload.min.js"
      />
      <script type="rocketlazyloadscript" data-cfasync="false">
        {`
         (function(W, i, s, e, P, o, p) {
             W['WisePopsObject'] = P;
             W[P] = W[P] || function() {
                 (W[P].q = W[P].q || []).push(arguments)
             }, W[P].l = 1 * new Date();
             o = i.createElement(s), p = i.getElementsByTagName(s)[0];
             o.defer = 1;
             o.src = e;
             p.parentNode.insertBefore(o, p)
         })(window, document, 'script', '//loader.wisepops.com/get-loader.js?v=1&site=SuDnceWuyw', 'wisepops');
         `}
      </script>
    </>
  );
};

export default Layout;
