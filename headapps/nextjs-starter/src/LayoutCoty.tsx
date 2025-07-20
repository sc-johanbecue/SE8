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
        <title>{fields?.Title?.value?.toString() || 'Page'}</title>
        {/* <title>Burberry - Prestige Brands - Coty</title> */}
        <link rel="icon" href={`${publicUrl}/favicon.ico`} />
        {headLinks.map((headLink) => (
          <link rel={headLink.rel} key={headLink.href} href={headLink.href} />
        ))}
        <link rel="canonical" href={publicUrl} />
        <meta property="og:title" content={fields?.OgTitle?.value?.toString()} />
        <meta property="og:description" content={fields?.OgDescription?.value?.toString()} />
        <meta property="og:image" content={fields?.OgImage?.value?.src?.toString()} />
        <meta property="og:type" content={route?.templateName} data-attr="JSS-21.6.0" />
        <meta
          name="description"
          content="British luxury fashion house established in 1856 by Thomas Burberry headquartered in London, England."
        />
        <meta name="keywords" content="Burberry" />
        <link
          rel="shortcut icon"
          href="https://www.coty.com/favicon.ico"
          type="image/vnd.microsoft.icon"
        />
        <link rel="icon" href="https://www.coty.com/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" href="https://www.coty.com/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="https://www.coty.com/favicon-96x96.png" sizes="96x96" />
        <link
          rel="stylesheet"
          href="https://www.sportingkampenhout.be/sitecore/Cotyea348a8ec5ce6481.css"
        />
        <link
          rel="stylesheet"
          href="https://www.sportingkampenhout.be/sitecore/Coty9741213a0e947ea8.css"
        />
        <script async src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"></script>
      </Head>

      {/* root placeholder for the app, which we add components to using route data */}
      <div className={mainClassPageEditing}>
        <nav className="sticky top-0 z-50 flex w-full items-center bg-white px-6 py-6 h-24 md:px-16 md:py-8  text-blue ">
          {route && <Placeholder name="headless-header" rendering={route} />}
        </nav>
        <main id="content" tabIndex={-1}>
          {route && <Placeholder name="headless-main" rendering={route} />}
        </main>
        <footer className="relative z-10 flex min-h-[66.66vh] flex-col bg-blue px-6 pb-8 text-white md:min-h-[50vh] md:px-12">
          {route && <Placeholder name="headless-footer" rendering={route} />}
        </footer>
      </div>
    </>
  );
};

export default Layout;
