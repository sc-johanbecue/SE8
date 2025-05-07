/**
 * This Layout is needed for Starter Kit.
 */
import React, { useEffect } from 'react';
import Head from 'next/head';
import { Placeholder, LayoutServiceData, Field, HTMLLink } from '@sitecore-jss/sitecore-jss-nextjs';
import config from 'temp/config';
import Scripts from 'src/Scripts';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Will be used to replace magnific-popup
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";

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
    document.body.setAttribute('data-plugin-page-transition', '');
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

        {/* Basic */}
        <meta charSet="utf-8" />
        <meta name="keywords" content="WebSite Template" />
        <meta name="description" content="Porto - Multipurpose Website Template" />
        <meta name="author" content="okler.net" />
        {/* Favicon */}
        <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="img/apple-touch-icon.png" />
        {/* Mobile Metas */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1.0, shrink-to-fit=no"
        />
      </Head>
      {/* root placeholder for the app, which we add components to using route data */}
      <div className={'body ' + mainClassPageEditing}>
        <header
          className="header-transparent header-effect-shrink"
          data-plugin-options="{'stickyEnabled': true, 'stickyEffect': 'shrink', 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': false, 'stickyChangeLogo': true, 'stickyStartAt': 30, 'stickyHeaderContainerHeight': 70}"
        >
          <div id="header">{route && <Placeholder name="headless-header" rendering={route} />}</div>
        </header>
        <main>
          <div role="main" className="main" id="content">
            {route && <Placeholder name="headless-main" rendering={route} />}
          </div>
        </main>
        <footer id="footer" className="bg-color-light border-0 pt-5 mt-0">
          <div id="footer">{route && <Placeholder name="headless-footer" rendering={route} />}</div>
        </footer>
      </div>

      {/* Vendor */}
      <script async src="/vendor/plugins/js/plugins.min.js" />
      {/* Theme Base, Components and Settings */}
      <script async src="/js/theme.js" />
      {/* Current Page Vendor and Views */}
      <script async src="/js/views/view.contact.js" />
      {/* Theme Custom */}
      <script async src="/js/custom.js" />
      {/* Theme Initialization Files */}
      <script async src="/js/theme.init.js" />
    </>
  );
};

export default Layout;
