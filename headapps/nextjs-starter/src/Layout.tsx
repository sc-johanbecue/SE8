/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-css-tags */
/**
 * This Layout is needed for Starter Kit.
 */
import React, { useEffect } from 'react';
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
        {/* Web Fonts */}
        <link
          id="googleFonts"
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800%7CShadows+Into+Light%7CPlayfair+Display:400&display=swap"
          rel="stylesheet"
          type="text/css"
        />
        {/* Vendor CSS */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css"
          integrity="sha512-jnSuA4Ss2PkkikSOLtYs8BlYIeeIK1h99ty4YfvRPAlzr377vr3CXDb7sb7eEEBYjDtcYj+AjBH3FLv5uSJuXg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.compat.css"
          integrity="sha512-gFn7XRm5v3GlgOwAQ80SXDT8pyg6uaV9JbW2OkNx5Im2jR8zx2X/3DbHymcZnUraU+klZjRJqNfNkFN7SyR3fg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.5.5/css/simple-line-icons.min.css"
          integrity="sha512-QKC1UZ/ZHNgFzVKSAhV5v5j73eeL9EEN289eKAEFaAjgAiobVAnVv/AGuPbXsKl1dNoel3kNr6PYnSiTzVVBCw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
          integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
          integrity="sha512-sMXtMNL1zRzolHYKEujM2AqCLUR9F2C4/05cdbxjjLSRvMQIciEPCQZo++nk7go3BtSuK9kfa/s+a4f4i5pLkw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.2.0/magnific-popup.min.css"
          integrity="sha512-lvaVbvmbHhG8cmfivxLRhemYlTT60Ly9Cc35USrpi8/m+Lf/f/T8x9kEIQq47cRj1VQIFuxTxxCcvqiQeQSHjQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* Theme CSS */}
        <link rel="stylesheet" href="/css/theme.css" />
        <link rel="stylesheet" href="/css/theme-elements.css" />
        <link rel="stylesheet" href="/css/theme-blog.css" />
        <link rel="stylesheet" href="/css/theme-shop.css" />

        {/* Skin CSS */}
        <link id="skinCSS" rel="stylesheet" href="/css/skins/skin-corporate-10.css" />

        {/* Theme Custom CSS */}
        <link rel="stylesheet" href="/css/custom.css" />
      </Head>
      {/* root placeholder for the app, which we add components to using route data */}
      <div className={'body ' + mainClassPageEditing}>
        <header
          id="header"
          className="header-transparent header-effect-shrink"
          data-plugin-options="{'stickyEnabled': true, 'stickyEffect': 'shrink', 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': false, 'stickyChangeLogo': true, 'stickyStartAt': 30, 'stickyHeaderContainerHeight': 70}"
        >
          {route && <Placeholder name="headless-header" rendering={route} />}
        </header>
        <main>
          <div role="main" className="main" id="content">
            {route && <Placeholder name="headless-main" rendering={route} />}
          </div>
        </main>
        <footer id="footer" className="bg-color-light border-0 pt-5 mt-0">
          {route && <Placeholder name="headless-footer" rendering={route} />}
        </footer>
      </div>
      <a
        className="style-switcher-open-loader"
        href="#"
        data-base-path=""
        data-skin-src=""
        data-bs-toggle="tooltip"
        data-bs-animation="false"
        data-bs-placement="right"
        title="Style Switcher"
        aria-label="Style Switcher"
      >
        <i className="fas fa-cogs"></i>
        <div className="style-switcher-tooltip">
          <strong>Style Switcher</strong>
          <p>Check out different color options and styles.</p>
        </div>
      </a>

      {/* Vendor */}
      <script src="../vendor/plugins/js/plugins.min.js" />
      {/* <script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
        integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.min.js"
        integrity="sha512-ykZ1QQr0Jy/4ZkvKuqWn4iF3lqPZyij9iRv6sGqLRdTPkY69YX6+7wvVGmsdBbiIfN/8OdsI7HABjvEok6ZopQ=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"
        integrity="sha512-3j3VU6WC5rPQB4Ld1jnLV7Kd5xr+cq9avvhwqzbH/taCRNURoeEpoPBK9pDyeukwSxwRPJ8fDgvYXd6SkaZ2TA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.21.0/jquery.validate.min.js"
        integrity="sha512-KFHXdr2oObHKI9w4Hv1XPKc898mE4kgYx58oqsc/JqqdLMDI4YjOLzom+EMlW8HFUd0QfjfAvxSL6sEq/a42fQ=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery.appear/0.4.1/jquery.appear.min.js"
        integrity="sha512-vYYoQJKYzaJQaOaYxaJhhmxikOJ2SEgHwmCNa0EMP0aRr7opdt4HHrorAwnCyPm8bdW/JBApIomo85YaBX81zA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      /> */}
      {/* Theme Base, Components and Settings */}
      <script src="../js/theme.js" />
      {/* Current Page Vendor and Views */}
      <script src="../js/views/view.contact.js" />
      {/* Theme Custom */}
      <script src="../js/custom.js" />
      {/* Theme Initialization Files */}
      <script src="../js/theme.init.js" />
    </>
  );
};

export default Layout;
