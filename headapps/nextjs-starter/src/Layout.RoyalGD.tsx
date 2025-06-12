/* eslint-disable @next/next/no-css-tags */
/**
 * This Layout is needed for Starter Kit.
 */
import React from 'react';
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

        <title>Royal GD | AHEAD IN ANIMAL HEALTH</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="mobileoptimized" content="0" />
        <meta charSet="utf-8" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="author" content="GD" />
        <link
          type="image/x-icon"
          href="https://www.gdanimalhealth.com/favicons/gddeventer/favicon.ico"
          rel="icon"
        />
        <link
          href="https://www.gdanimalhealth.com/favicons/gddeventer/apple-touch-icon-precomposed.png"
          rel="apple-touch-icon"
        />
        <link href="/RoyalGD/main.css" rel="stylesheet" />
        <meta
          name="description"
          content="Royal GD is a leading organisation in animal health and animal production. GD has supported industrial customers, governments, veterinarians and farmers by providing animal health programmes and laboratory diagnostic services."
        />
        <meta property="og:type" content="article" />
        <meta name="scID" content="4dc3a592-c4e2-4ff4-bff0-9de3de31fa6a" />
        <meta property="og:title" content="Royal GD | AHEAD IN ANIMAL HEALTH" />
        <meta name="Last-Modified" content="20240307145910" />
        <meta http-equiv="Content-Language" content="en" />
        <meta name="language" content="en" />
        <meta name="category" content="overig" />
      </Head>

      {/* root placeholder for the app, which we add components to using route data */}
      <div className={mainClassPageEditing}>
        <header className="header">
          {route && <Placeholder name="headless-header" rendering={route} />}
        </header>
        <main>
          <div id="content" style={{marginLeft: "10px"}}>{route && <Placeholder name="headless-main" rendering={route} />}</div>
        </main>
        <footer className="footer">
          {route && <Placeholder name="headless-footer" rendering={route} />}
        </footer>
      </div>

      {/* <script
        type="text/javascript"
        src="https://www.gdanimalhealth.com/assets/scripts/CookieConsent.js"
        async
      ></script> */}
      {/* <script
        data-main="https://www.gdanimalhealth.com/assets/scripts/main.js"
        src="https://www.gdanimalhealth.com/assets/scripts/vendor/requirejs/require.js"
        async
      ></script> */}
      <div className="callout browser-notification hide" data-closable>
        <h3 className="title">Oude browser</h3>
        <p>
          We zien dat u gebruik maakt van een verouderde browser. Niet alle onderdelen van de
          website zullen daardoor goed functioneren. Download nu de{' '}
          <a rel="nofollow" href="http://browsehappy.com/?locale=nl">
            laatste versie
          </a>{' '}
          van uw browser om veilig te kunnen surfen.
        </p>
        <button className="close-button" aria-label="Dismiss alert" type="button" data-close>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </>
  );
};

export default Layout;
