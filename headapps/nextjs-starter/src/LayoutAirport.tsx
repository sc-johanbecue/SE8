/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-css-tags */
/**
 * This Layout is needed for Starter Kit.
 */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

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

  // useEffect(() => {
  //   // Function to adjust the div's position
  //   const moveDivIfCloseToOrigin = () => {
  //     const div = document.querySelector('.sc-jss-empty-placeholder') as HTMLElement | null;

  //     if (div) {
  //       const rect = div.getBoundingClientRect();

  //       // Check if the starting coordinates are within 40px from the top of the page
  //       if (rect.y < 40) {
  //         // Move the div 145 pixels lower
  //         div.style.transform = 'translateY(145px)'; // Set transform property
  //         div.style.transition = 'transform 0.3s ease'; // Add smooth transition
  //       }
  //     }
  //   };

  //   moveDivIfCloseToOrigin();

  //   // Cleanup function to reset the position when the component unmounts
  //   return () => {
  //     const div = document.querySelector('.sc-jss-empty-placeholder') as HTMLElement | null;
  //     if (div) {
  //       div.style.transform = ''; // Reset transform property
  //       div.style.transition = ''; // Reset transition property
  //     }
  //   };
  // }, []); // Run once on mount

  const router = useRouter();
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    // Check if the current route is the homepage
    const currentPath = router.asPath;
    setIsHomePage(currentPath === '/' || currentPath === '/home'); // Adjust as per your site's homepage path
  }, [router.asPath]);

  const [paddingTop, setpaddingTop] = useState(0);

  useEffect(() => {
    const updatePadding = () => {
      setpaddingTop(window.innerWidth > 767 ? 137 : 0);
    };

    updatePadding(); // set on load
    window.addEventListener('resize', updatePadding);
    return () => window.removeEventListener('resize', updatePadding);
  }, []);

  return (
    <>
      <Scripts />
      <Head>
        <title>{fields?.Title?.value?.toString() || 'Page'}</title>
        {/* <link rel="icon" href={`${publicUrl}/favicon.ico`} /> */}
        {headLinks.map((headLink) => (
          <link rel={headLink.rel} key={headLink.href} href={headLink.href} />
        ))}
        <link rel="canonical" href={publicUrl} />
        <meta property="og:title" content={fields?.OgTitle?.value?.toString()} />
        <meta property="og:description" content={fields?.OgDescription?.value?.toString()} />
        <meta property="og:image" content={fields?.OgImage?.value?.src?.toString()} />
        <meta property="og:type" content={route?.templateName} data-attr="JSS-21.6.0" />

        <meta charSet="utf-8" />
        <link rel="icon" href="https://www.sportingkampenhout.be/Sitecore/airline/favicon.ico" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Web site created using create-react-app" />
        <link
          rel="apple-touch-icon"
          href="https://www.sportingkampenhout.be/Sitecore/airline/logo192.png"
        />
        <link
          rel="manifest"
          href="https://www.sportingkampenhout.be/Sitecore/airline/manifest.json"
        />
        <link
          rel="stylesheet"
          href="https://www.sportingkampenhout.be/Sitecore/airline/assets/css/bootstrap.min.css"
        />
        {/* <script
          defer
          src="https://www.sportingkampenhout.be/Sitecore/airline/static/js/main.e22c0515.js"
        ></script> */}
        {/* https://xmc-sitecoresaa9e21-jbetherig-custom.sitecorecloud.io/-/media/Feature/Airline/styling/main */}
        <link
          href="https://www.sportingkampenhout.be/Sitecore/airline/static/css/main_airport.css"
          rel="stylesheet"
        />
        <meta
          id="ConnectiveDocSignExtentionInstalled"
          name="ConnectiveDocSignExtentionInstalled"
          data-extension-version="1.0.7"
        />
        <script src="https://kit.fontawesome.com/f733f636bb.js" crossOrigin="anonymous"></script>
      </Head>

      {/* root placeholder for the app, which we add components to using route data */}
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div className={mainClassPageEditing} id="root">
        {/* <header>
          <div id="header">{route && <Placeholder name="headless-header" rendering={route} />}</div>
        </header>
        <main>
          <div id="content">{route && <Placeholder name="headless-main" rendering={route} />}</div>
        </main>
        <footer>
          <div id="footer">{route && <Placeholder name="headless-footer" rendering={route} />}</div>
        </footer> */}
        {/* <div>{route && <Placeholder name="headless-copyright" rendering={route} />}</div> */}

        <header
          className="main_header_arae"
          style={{
            backgroundColor: isHomePage ? 'transparent' : 'rgb(237 238 253 / 1)',
          }}
        >
          {route && <Placeholder name="headless-header" rendering={route} />}
        </header>
        {route && (
          <div style={{ paddingTop }}>
            <Placeholder name="headless-main" rendering={route} />
          </div>
        )}
        <footer id="footer_area">
          {route && <Placeholder name="headless-footer" rendering={route} />}
        </footer>
        {route && <Placeholder name="headless-copyright" rendering={route} />}
      </div>
      <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
      <script src="https://www.sportingkampenhout.be/Sitecore/airline/assets/js/bootstrap.bundle.js"></script>
    </>
  );
};

export default Layout;
