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

        {/* Verification */}
        <meta name="facebook-domain-verification" content="40b1svczs83kj79taon46giep5d2n6" />

        {/* Stylesheets */}
        <link
          rel="stylesheet"
          href="https://www.engie.nl/assets/css/main.a8946fcadb8ae1b496ec.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.conversationalsdevelopment.nl/engie/client/v2/index.css"
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

        {/* Preconnect / DNS-prefetch */}
        <link rel="preconnect" href="https://googletagmanager.com/" />
        <link rel="preconnect" href="https://google-analytics.com/" />
        <link rel="dns-prefetch" href="https://googletagmanager.com/" />
        <link rel="dns-prefetch" href="https://google-analytics.com/" />

        <script async src="https://www.engie.nl/Resources/Foundation/Logging/SourceBuster.js" />

        {/* Environment Script */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `(function () {
              var environment = 'production';
              var endpoint = '/api/v1/';
              window.EnvironmentSettings = {
                endpoint: endpoint,
                environment: environment
              };
              window.validationMessages = {
                required: 'Dit veld is verplicht',
                email: 'Geen geldig e-mailadres',
                iban: 'Geen geldig IBAN nummer',
                zipcode: 'Geen geldige postcode'
              };
            })();`,
          }}
        /> */}

        {/* Optimizely */}
        {/* <script src="https://cdn.optimizely.com/js/26422020719.js"></script> */}

        {/* Google Tag Manager */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KBNRX9Q');`,
          }}
        /> */}

        {/* Main JS File */}
        <script src="https://www.engie.nl/assets/js/main.aefa371b74660051986e.js" defer></script>
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
              </>
            )}
          </div>
        </ThemeProvider>
      </VideoProvider>
    </>
  );
};

export default Layout;
