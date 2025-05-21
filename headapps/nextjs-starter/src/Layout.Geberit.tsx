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

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preload" as="image" href="https://www.geberit.co.uk/images/geberit_logo.svg" />
        <link
          rel="preload"
          as="image"
          imageSrcSet="/_assetsmaster/global-media/pictures/gac/products/2023-geberit-aquaclean-mera-comfort-chrome-with-remote-control-sigma70-original-570-322.png 1x, /_assetsmaster/global-media/pictures/gac/products/2023-geberit-aquaclean-mera-comfort-chrome-with-remote-control-sigma70-original-16-9.png 2x, /_assetsmaster/global-media/pictures/gac/products/2023-geberit-aquaclean-mera-comfort-chrome-with-remote-control-sigma70-original-16-9.png 3x"
        />
        <link
          rel="preload"
          as="image"
          imageSrcSet="/_assetsmaster/global-media/pictures/gac/products/2023-geberit-aquaclean-sela-white-with-remote-control-sigma20-570-322.png 1x, /_assetsmaster/global-media/pictures/gac/products/2023-geberit-aquaclean-sela-white-with-remote-control-sigma20-16-9.png 2x, /_assetsmaster/global-media/pictures/gac/products/2023-geberit-aquaclean-sela-white-with-remote-control-sigma20-16-9.png 3x"
        />
        <link
          rel="preload"
          as="image"
          imageSrcSet="/_assetsmaster/global-media/pictures/gac/products/2023-geberit-aquaclean-tuma-comfort-with-remote-control-sigma20-570-322.jpg 1x, /_assetsmaster/global-media/pictures/gac/products/2023-geberit-aquaclean-tuma-comfort-with-remote-control-sigma20-16-9.jpg 2x, /_assetsmaster/global-media/pictures/gac/products/2023-geberit-aquaclean-tuma-comfort-with-remote-control-sigma20-16-9.jpg 3x"
        />
        <link
          rel="preload"
          as="image"
          imageSrcSet="/_assetsmaster/global-media/pictures/webshop/img-gac-tuma-tile-572418-380-214.jpg 1x, /_assetsmaster/global-media/pictures/webshop/img-gac-tuma-tile-572418-790-444.jpg 2x, /_assetsmaster/global-media/pictures/webshop/img-gac-tuma-tile-572418-16-9.jpg 3x"
        />
        <link
          rel="preload"
          as="image"
          imageSrcSet="/_assetsmaster/global-media/pictures/webshop/img-gac-tuma-aufsatz-tile-572424-380-214.jpg 1x, /_assetsmaster/global-media/pictures/webshop/img-gac-tuma-aufsatz-tile-572424-790-444.jpg 2x, /_assetsmaster/global-media/pictures/webshop/img-gac-tuma-aufsatz-tile-572424-16-9.jpg 3x"
        />
        <link
          rel="preload"
          as="image"
          imageSrcSet="/_assetsmaster/global-media/pictures/gac/products/2024-geberit-aquaclean-alba-private-sigma20-grey-570-322.png 1x, /_assetsmaster/global-media/pictures/gac/products/2024-geberit-aquaclean-alba-private-sigma20-grey-16-9.png 2x, /_assetsmaster/global-media/pictures/gac/products/2024-geberit-aquaclean-alba-private-sigma20-grey-16-9.png 3x"
        />
        <link
          rel="preload"
          as="image"
          imageSrcSet="/_assetsmaster/global-media/pictures/gac/products/4000/geberit-aquaclean-4000-with-design-cover-big-size-570-322.jpg 1x, /_assetsmaster/global-media/pictures/gac/products/4000/geberit-aquaclean-4000-with-design-cover-big-size-16-9.jpg 2x, /_assetsmaster/global-media/pictures/gac/products/4000/geberit-aquaclean-4000-with-design-cover-big-size-16-9.jpg 3x"
        />
        <link
          rel="preload"
          as="image"
          imageSrcSet="/_assets/local-media/geberit-alpha-roomset-5-inspiration-98cm-with-gac-option-2-final-570-322.jpg 1x, /_assets/local-media/geberit-alpha-roomset-5-inspiration-98cm-with-gac-option-2-final-16-9.jpg 2x, /_assets/local-media/geberit-alpha-roomset-5-inspiration-98cm-with-gac-option-2-final-16-9.jpg 3x"
        />
        <link
          rel="preload"
          as="image"
          href="https://www.geberit.co.uk/_assetsmaster/global-media/pictures/logo-und-awards/pictos/whirl-spray-grey-cmyk-original.svg"
        />
        <link
          rel="stylesheet"
          href="https://www.geberit.co.uk/public/css/Geberit/36f9c5f2ef350a84.css"
          data-precedence="next"
        />
        <link
          rel="stylesheet"
          href="https://www.geberit.co.uk/public/css/Geberit/5f7c1d1f52eda09b.css"
          data-precedence="next"
        />
        <link
          rel="stylesheet"
          href="https://www.geberit.co.uk/public/css/Geberit/d83254217b54d7a1.css"
          data-precedence="next"
        />
        <link
          rel="stylesheet"
          href="https://www.geberit.co.uk/public/css/Geberit/e88fa211fc869aeb.css"
          data-precedence="next"
        />
        <link
          rel="stylesheet"
          href="https://www.geberit.co.uk/public/css/Geberit/126a8151cdb37eec.css"
          data-precedence="next"
        />
        <link
          rel="stylesheet"
          href="https://www.geberit.co.uk/public/css/Geberit/4457375927306b32.css"
          data-precedence="next"
        />
        <link
          rel="stylesheet"
          href="https://www.geberit.co.uk/public/css/Geberit/cfa6ac4318bb0476.css"
          data-precedence="next"
        />
        <link
          rel="stylesheet"
          href="https://www.geberit.co.uk/public/css/Geberit/5a553e3e6341fd6a.css"
          data-precedence="next"
        />
        <link
          rel="stylesheet"
          href="https://www.geberit.co.uk/public/css/Geberit/fd8785b93b846603.css"
          data-precedence="next"
        />
        <link
          rel="stylesheet"
          href="https://www.geberit.co.uk/public/css/Geberit/56d302d4800a6bd9.css"
          data-precedence="next"
        />
        <link
          rel="stylesheet"
          href="https://www.geberit.co.uk/public/css/Geberit/ad36e5257962f408.css"
          data-precedence="next"
        />
        <link
          rel="stylesheet"
          href="https://www.geberit.co.uk/public/css/Geberit/cf00e74488947ccd.css"
          data-precedence="next"
        />
        <link
          href="https://www.geberit.co.uk/public/css/Geberit/3650e54c2d7d6f1a.css"
          rel="stylesheet"
          as="style"
          data-precedence="dynamic"
        />
        <link
          href="https://www.geberit.co.uk/public/css/Geberit/86ffad896fec29d2.css"
          rel="stylesheet"
          as="style"
          data-precedence="dynamic"
        />
        <link
          href="https://www.geberit.co.uk/public/css/Geberit/8bca84fe55517758.css"
          rel="stylesheet"
          as="style"
          data-precedence="dynamic"
        />
        <link
          href="https://www.geberit.co.uk/public/css/Geberit/fb926d789ec1272f.css"
          rel="stylesheet"
          as="style"
          data-precedence="dynamic"
        />
        <link
          rel="preload"
          as="script"
          fetchPriority="low"
          href="https://www.geberit.co.uk/public/js/Geberit/webpack-a088078cd583fc17.js"
        />
        <script src="/public/js/Geberit/4bd1b696-e29cff45ad8bb6af.js" async></script>
        <script src="/public/js/Geberit/1684-aa39c495466949b6.js" async></script>
        <script src="/public/js/Geberit/main-app-7143f0d627919eb6.js" async></script>
        <script src="/public/js/Geberit/6707-02b290b26d8af29c.js" async></script>
        <script src="/public/js/Geberit/8636-1e0658675a80a617.js" async></script>
        <script src="/public/js/Geberit/app/global-error-0f2a53e7cd05053c.js" async></script>
        <script src="/public/js/Geberit/8cc6faea-5f388f244a6561de.js" async></script>
        <script src="/public/js/Geberit/d648eb28-c1297205378274b8.js" async></script>
        <script src="/public/js/Geberit/6867-1f7dac40f71f8f91.js" async></script>
        <script src="/public/js/Geberit/351-94fb6b16abaf34e6.js" async></script>
        <script src="/public/js/Geberit/7727-17524fe44a30dfd9.js" async></script>
        <script src="/public/js/Geberit/6407-087c83c3ea841daa.js" async></script>
        <script src="/public/js/Geberit/6629-ea397d76ec445c02.js" async></script>
        <script src="/public/js/Geberit/8194-4362823f57a64cf2.js" async></script>
        <script src="/public/js/Geberit/2855-f98996f4f265ae63.js" async></script>
        <script src="/public/js/Geberit/7830-804fc7ed658f2a51.js" async></script>
        <script src="/public/js/Geberit/9507-ee5749cf9cd1e600.js" async></script>
        <script src="/public/js/Geberit/4452-ce61a9ec43d61dc3.js" async></script>
        <script src="/public/js/Geberit/7538-56cceaf3e51d6274.js" async></script>
        <script src="/public/js/Geberit/9166-9e044c127455a16a.js" async></script>
        <script src="/public/js/Geberit/6213-2e495adb8589be47.js" async></script>
        <script
          src="/public/js/Geberit/app/template-377aebae9a02d3dd.js"
          async
        ></script>
        <script src="/public/js/Geberit/3161-65c0635445389317.js" async></script>
        <script src="/public/js/Geberit/4265-30f466ae6cf935be.js" async></script>
        <script src="/public/js/Geberit/7923-37d8f3ca459d32f5.js" async></script>
        <script src="/public/js/Geberit/9546-99f28031052d73b7.js" async></script>
        <script src="/public/js/Geberit/7393-91cc214e749213df.js" async></script>
        <script src="/public/js/Geberit/app/layout-c66844dc2bbf54b6.js" async></script>
        <script src="/public/js/Geberit/app/error-79e5185abc16c90e.js" async></script>
        <script src="/public/js/Geberit/c16f53c3-d2d21fb0c6531174.js" async></script>
        <script src="/public/js/Geberit/13633bf0-a1c2fe1d2bf4113a.js" async></script>
        <script src="/public/js/Geberit/4e6af11a-5f798b936e03c0be.js" async></script>
        <script src="/public/js/Geberit/6920-aa50730a0a6ed731.js" async></script>
        <script src="/public/js/Geberit/5476-82f35b0ca8e6c11c.js" async></script>
        <script src="/public/js/Geberit/7012-0a9f2b4f9a4f708b.js" async></script>
        <script
          src="/public/js/Geberit/app/page-1579195e35095298.js"
          async
        ></script>
        <script
          type="application/javascript"
          id="usercentrics-cmp"
          src="https://app.usercentrics.eu/browser-ui/latest/loader.js"
          data-settings-id="WHgWKTTW3jS744"
          async
        ></script>
        <link rel="manifest" href="https://www.geberit.co.uk/images/fav/site.webmanifest" crossOrigin="use-credentials" />
        <link rel="mask-icon" href="https://www.geberit.co.uk/images/fav/safari-pinned-tab.svg" color="#5bbad5" />
        <meta property="og:image" content="https://www.geberit.co.uk/images/geberit-logo.jpg" />
        <meta
          itemProp="name"
          content="Geberit shower toilet: The perfect model for everyone | Geberit UK"
        />
        <meta
          itemProp="description"
          content="Shower toilets from Geberit: Convenience and hygiene in the bathroom as a complete solution or enhancement ► Discover our products"
        />
        <meta itemProp="image" content="https://www.geberit.co.uk/images/geberit-logo.jpg" />
        <title>Geberit shower toilet: The perfect model for everyone | Geberit UK</title>
        <meta
          name="description"
          content="Shower toilets from Geberit: Convenience and hygiene in the bathroom as a complete solution or enhancement ► Discover our products"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.geberit.co.uk/bathroom-products/wcs-urinals/shower-toilets-geberit-aquaclean/products/"
        />
        <meta
          name="google-site-verification"
          content="6tNWtTZEB0xjvEM1jVfSg8W4KghiEtfbgQP_DjYfEWs"
        />
        <meta
          property="og:title"
          content="Geberit shower toilet: The perfect model for everyone | Geberit UK"
        />
        <meta
          property="og:description"
          content="Shower toilets from Geberit: Convenience and hygiene in the bathroom as a complete solution or enhancement ► Discover our products"
        />
        <meta
          property="og:url"
          content="https://www.geberit.co.uk/bathroom-products/wcs-urinals/shower-toilets-geberit-aquaclean/products/"
        />
        <meta property="og:site_name" content="Geberit UK" />
        <meta property="og:locale" content="en-GB" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="Geberit Group" />
        <meta name="twitter:site:id" content="group_meta_twitter_siteId" />
        <meta
          name="twitter:title"
          content="Geberit shower toilet: The perfect model for everyone"
        />
        <meta
          name="twitter:description"
          content="Shower toilets from Geberit: Convenience and hygiene in the bathroom as a complete solution or enhancement ► Discover our products"
        />
        <link rel="shortcut icon" href="https://www.geberit.co.uk/images/fav/favicon-128x128.png" sizes="128x128" />
        <link rel="icon" href="https://www.geberit.co.uk/images/fav/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="https://www.geberit.co.uk/images/fav/favicon-16x16.png" sizes="16x16" />
        <link rel="apple-touch-icon" href="https://www.geberit.co.uk/images/fav/apple-touch-icon.png" sizes="180x180" />
        <script>{`document.querySelectorAll('body link[rel="icon"], body link[rel="apple-touch-icon"]').forEach(el => document.head.appendChild(el))`}</script>
        <script async src="/public/js/Geberit/polyfills-42372ed130431b0a.js" noModule />
        <style data-styled="" data-styled-version="5.3.11">
          {`.dRbgvV{display:block;line-height:0;}/*!sc*/
         @media (hover:none) and (pointer:coarse) and (min-width:0) and (max-width:48rem){}/*!sc*/
         .dRbgvV svg{width:1rem;}/*!sc*/
         .kRQNiy{display:block;line-height:0;}/*!sc*/
         @media (hover:none) and (pointer:coarse) and (min-width:0) and (max-width:48rem){}/*!sc*/
         .kRQNiy svg{width:1.5rem;fill:ICON_COLOR_PRIMARY;}/*!sc*/
         .kRQNiy svg path{fill:ICON_COLOR_PRIMARY;}/*!sc*/
         .hlnAlm{display:block;line-height:0;}/*!sc*/
         @media (hover:none) and (pointer:coarse) and (min-width:0) and (max-width:48rem){}/*!sc*/
         .hlnAlm svg{width:1.5rem;fill:ICON_COLOR_WHITE;}/*!sc*/
         .hlnAlm svg path{fill:ICON_COLOR_WHITE;}/*!sc*/
         data-styled.g1[id="sc-aXZVg"]{content:"dRbgvV,kRQNiy,hlnAlm,"}/*!sc*/
         .gGbxpp{cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:'AktivGrotesk',helvetica,arial,sans-serif;font-weight:500;background-color:transparent;color:#000000;border:1px solid rgba(0,0,0,0);box-sizing:border-box;white-space:nowrap;min-width:unset;height:40px;width:40px;font-size:0.875rem;line-height:1.25rem;padding:0;}/*!sc*/
         .gGbxpp span.icon,.gGbxpp span.no-icon{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:40px !important;height:40px;}/*!sc*/
         .gGbxpp svg{fill:#000000;width:20px;}/*!sc*/
         @media (hover:hover){.gGbxpp:hover{color:#000000;background-color:rgba(0,0,0,0.08);border:1px solid rgba(0,0,0,0);}.gGbxpp:hover svg{fill:#000000;}}/*!sc*/
         .gGbxpp:focus{outline:none;}/*!sc*/
         .gGbxpp::-moz-focus-inner{border:0;}/*!sc*/
         .gGbxpp:active{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#FFFFFF;background-color:#3D3D3D;border:1px solid #3D3D3D;}/*!sc*/
         .gGbxpp:active svg{fill:#FFFFFF;}/*!sc*/
         .gGbxpp:disabled{cursor:default;color:rgba(0,0,0,0.26);background-color:transparent;border:1px solid rgba(0,0,0,0);}/*!sc*/
         .gGbxpp:disabled svg{fill:rgba(0,0,0,0.26);}/*!sc*/
         .gGbxpp span.icon{width:32px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}/*!sc*/
         @media (hover:none) and (pointer:coarse) and (min-width:0) and (max-width:48rem) and (orientation:landscape){.gGbxpp{font-size:0.875rem;line-height:1.25rem;height:44px !important;padding:0 16px 0 0;}.gGbxpp span{width:44px !important;height:44px !important;}.gGbxpp span svg{width:20px;}}/*!sc*/
         .bngqul{cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:'AktivGrotesk',helvetica,arial,sans-serif;font-weight:500;background-color:#3D3D3D;color:#FFFFFF;border:1px solid #3D3D3D;box-sizing:border-box;white-space:nowrap;min-width:unset;height:40px;min-width:6.25rem;font-size:0.875rem;line-height:1.25rem;padding:0 24px;}/*!sc*/
         .bngqul span.icon,.bngqul span.no-icon{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:40px !important;height:40px;}/*!sc*/
         .bngqul svg{fill:#FFFFFF;width:20px;}/*!sc*/
         @media (hover:hover){.bngqul:hover{background-color:#5C5C5C;border:1px solid #5C5C5C;}}/*!sc*/
         .bngqul:focus{outline:none;}/*!sc*/
         .bngqul::-moz-focus-inner{border:0;}/*!sc*/
         .bngqul:active{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#CCCCCC;border:1px solid #CCCCCC;}/*!sc*/
         .bngqul:disabled{cursor:default;color:rgba(0,0,0,0.3);background-color:rgba(0,0,0,0);border:1px solid rgba(0,0,0,0);}/*!sc*/
         .bngqul:disabled svg{fill:rgba(0,0,0,0.3);}/*!sc*/
         @media (hover:none) and (pointer:coarse) and (min-width:0) and (max-width:48rem) and (orientation:landscape){.bngqul{font-size:0.875rem;line-height:1.25rem;height:44px !important;}.bngqul span{width:44px !important;height:44px !important;}.bngqul span svg{width:20px;}}/*!sc*/
         .fkdofr{cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:'AktivGrotesk',helvetica,arial,sans-serif;font-weight:500;background-color:transparent;color:#000000;border:1px solid rgba(0,0,0,0);box-sizing:border-box;white-space:nowrap;min-width:unset;height:40px;width:40px;font-size:0.875rem;line-height:1.25rem;padding:0;}/*!sc*/
         .fkdofr span.icon,.fkdofr span.no-icon{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:40px !important;height:40px;}/*!sc*/
         .fkdofr svg{fill:#000000;width:20px;}/*!sc*/
         @media (hover:hover){.fkdofr:hover{color:#000000;background-color:rgba(0,0,0,0.08);border:1px solid rgba(0,0,0,0);}.fkdofr:hover svg{fill:#000000;}}/*!sc*/
         .fkdofr:focus{outline:none;}/*!sc*/
         .fkdofr::-moz-focus-inner{border:0;}/*!sc*/
         .fkdofr:active{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#FFFFFF;background-color:#3D3D3D;border:1px solid #3D3D3D;}/*!sc*/
         .fkdofr:active svg{fill:#FFFFFF;}/*!sc*/
         .fkdofr:disabled{cursor:default;color:rgba(0,0,0,0.26);background-color:transparent;border:1px solid rgba(0,0,0,0);}/*!sc*/
         .fkdofr:disabled svg{fill:rgba(0,0,0,0.26);}/*!sc*/
         @media (hover:none) and (pointer:coarse) and (min-width:0) and (max-width:48rem) and (orientation:landscape){.fkdofr{font-size:0.875rem;line-height:1.25rem;height:44px !important;width:44px !important;}.fkdofr span{width:44px !important;height:44px !important;}.fkdofr span svg{width:20px;}}/*!sc*/
         .ljAFzM{cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:'AktivGrotesk',helvetica,arial,sans-serif;font-weight:500;background-color:#3D3D3D;color:#FFFFFF;border:1px solid #3D3D3D;box-sizing:border-box;white-space:nowrap;min-width:unset;height:40px;min-width:100%;font-size:0.875rem;line-height:1.25rem;padding:0 24px;}/*!sc*/
         .ljAFzM span.icon,.ljAFzM span.no-icon{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:40px !important;height:40px;}/*!sc*/
         .ljAFzM svg{fill:#FFFFFF;width:20px;}/*!sc*/
         @media (hover:hover){.ljAFzM:hover{background-color:#5C5C5C;border:1px solid #5C5C5C;}}/*!sc*/
         .ljAFzM:focus{outline:none;}/*!sc*/
         .ljAFzM::-moz-focus-inner{border:0;}/*!sc*/
         .ljAFzM:active{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#CCCCCC;border:1px solid #CCCCCC;}/*!sc*/
         .ljAFzM:disabled{cursor:default;color:rgba(0,0,0,0.3);background-color:rgba(0,0,0,0);border:1px solid rgba(0,0,0,0);}/*!sc*/
         .ljAFzM:disabled svg{fill:rgba(0,0,0,0.3);}/*!sc*/
         @media (hover:none) and (pointer:coarse) and (min-width:0) and (max-width:48rem) and (orientation:landscape){.ljAFzM{font-size:0.875rem;line-height:1.25rem;height:44px !important;}.ljAFzM span{width:44px !important;height:44px !important;}.ljAFzM span svg{width:20px;}}/*!sc*/
         data-styled.g2[id="sc-gEvEer"]{content:"gGbxpp,bngqul,fkdofr,ljAFzM,"}/*!sc*/
         .fMLOwk{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-0.5rem;margin-left:-0.5rem;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}/*!sc*/
         @media (min-width:48rem){.fMLOwk{margin-right:-0.75rem;margin-left:-0.75rem;}}/*!sc*/
         data-styled.g5[id="sc-dcJsrY"]{content:"fMLOwk,"}/*!sc*/
         .hjfVnN{-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%;box-sizing:border-box;display:block;padding-right:0.5rem;padding-left:0.5rem;-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}/*!sc*/
         @media (min-width:48rem){.hjfVnN{padding-right:0.75rem;padding-left:0.75rem;}}/*!sc*/
         @media (min-width:48rem){.hjfVnN{-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%;}}/*!sc*/
         @media (min-width:64rem){.hjfVnN{-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%;}}/*!sc*/
         data-styled.g6[id="sc-iGgWBj"]{content:"hjfVnN,"}/*!sc*/
         .pBsox{position:relative;max-width:80rem;padding-right:1rem;padding-left:1rem;margin:0 auto;box-sizing:border-box;}/*!sc*/
         @media (min-width:48rem){.pBsox{padding-right:1.5rem;padding-left:1.5rem;}}/*!sc*/
         data-styled.g22[id="sc-gFqAkR"]{content:"pBsox,"}/*!sc*/
         .hiCRZc{box-sizing:border-box;border:none;margin-block-start:0;margin-block-end:0;width:100%;height:1px;border-top:1px solid;border-color:rgba(0,0,0,0.16);}/*!sc*/
         data-styled.g36[id="sc-dtBdUo"]{content:"hiCRZc,"}/*!sc*/
         .gptVcn.gptVcn{right:1.5625rem;bottom:calc(-3rem + calc(var(--chat-height,0px) + var(--chat-controls-height,0px)));opacity:0;position:absolute;bottom:unset;opacity:1;top:-4.625rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:2.625rem;width:2.625rem;background-color:var(--gb-brand-primary);font-size:1.3rem;z-index:20;-webkit-transition:background-color 0.15s ease-in-out,opacity 0.2s cubic-bezier(0.4,0,1,1),-webkit-transform 0.2s cubic-bezier(0.4,0,1,1);-webkit-transition:background-color 0.15s ease-in-out,opacity 0.2s cubic-bezier(0.4,0,1,1),transform 0.2s cubic-bezier(0.4,0,1,1);transition:background-color 0.15s ease-in-out,opacity 0.2s cubic-bezier(0.4,0,1,1),transform 0.2s cubic-bezier(0.4,0,1,1);-webkit-transition:none;transition:none;}/*!sc*/
         .gptVcn.gptVcn:focus,.gptVcn.gptVcn:hover{background-color:var(--gb-brand-primary-dark);}/*!sc*/
         .gptVcn.gptVcn:before{content:none;}/*!sc*/
         .gptVcn.gptVcn i{color:var(--white);}/*!sc*/
         data-styled.g57[id="sc-d40cdb30-0"]{content:"gptVcn,"}/*!sc*/
         .bFVQh.bFVQh{right:1.5625rem;visibility:hidden;position:absolute;top:-4.625rem;height:2.625rem;width:2.625rem;}/*!sc*/
         data-styled.g58[id="sc-d40cdb30-1"]{content:"bFVQh,"}/*!sc*/
         .bITiMD{height:40px;margin-top:-2px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-text-decoration:none;text-decoration:none;z-index:50;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;border:1px solid transparent;outline-offset:0px;}/*!sc*/
         .bITiMD::before{display:none;}/*!sc*/
         @media screen and (min-width:768px){.bITiMD{height:44px;margin-top:-2px;}}/*!sc*/
         @media (min-width:1024px){.bITiMD{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;}}/*!sc*/
         .bITiMD:hover,.bITiMD:focus{-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
         .bITiMD:focus-visible{border:1px solid #376EB4;outline:1px solid #376EB4;}/*!sc*/
         .bITiMD .image{height:2.5rem;vertical-align:middle;width:9.0625rem;}/*!sc*/
         @media screen and (max-width:1023px){#mega-menu .sc-f8ba61a8-1 .image{height:1rem;width:auto;}}/*!sc*/
         .bITiMD .claim{color:#999999;font-size:0.75rem;line-height:0.625rem;word-break:initial;display:none;margin-top:-0.43rem;}/*!sc*/
         .bITiMD .claim [data-preview-id]{display:block;min-height:unset;}/*!sc*/
         #mega-menu .sc-f8ba61a8-1 .claim{display:block;margin-left:0.5rem;}/*!sc*/
         @media screen and (min-width:1024px){.bITiMD .claim{display:block;margin-left:0.3125rem;margin-top:-0.6rem;}}/*!sc*/
         data-styled.g106[id="sc-f8ba61a8-1"]{content:"bITiMD,"}/*!sc*/
         .fWhegE{position:relative;}/*!sc*/
         data-styled.g112[id="sc-sLsrZ"]{content:"fWhegE,"}/*!sc*/
         .jaagoI{position:relative;width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;min-height:2.75rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0.6875rem 2.75rem 0.6875rem 0.5rem;font-size:14px;line-height:20px;font-weight:500;border:1px solid transparent;outline-offset:0;-webkit-transition:none;transition:none;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none;}/*!sc*/
         .jaagoI.jaagoI{color:#000000;border-radius:0px;border-bottom-color:transparent;}/*!sc*/
         @media (hover:hover) and (pointer:fine){.jaagoI{min-height:2.5rem;padding:0.5625rem 2.5rem 0.5625rem 0.5rem;}}/*!sc*/
         .jaagoI:before{content:none;}/*!sc*/
         .jaagoI.jaagoI:focus-visible{border:1px solid #376EB4;outline:1px solid #376EB4;-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
         .jaagoI.jaagoI:visited:focus{-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
         .jaagoI:focus,.jaagoI:link{-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
         @media (hover:hover) and (pointer:fine){.jaagoI:hover{-webkit-tap-highlight-color:transparent;-webkit-text-decoration:none;text-decoration:none;background-color:rgba(0,0,0,0.08);}}/*!sc*/
         .jaagoI:active{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-text-decoration:none;text-decoration:none;background-color:#3D3D3D;color:#FFFFFF;}/*!sc*/
         .jaagoI span{min-height:unset;}/*!sc*/
         .jaagoI span.first-icon,.jaagoI span.last-icon{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0.75rem;}/*!sc*/
         @media (hover:hover) and (pointer:fine){.jaagoI span.first-icon,.jaagoI span.last-icon{padding:0.625rem;}}/*!sc*/
         .jaagoI span.first-icon svg,.jaagoI span.last-icon svg{width:1.25rem;visibility:visible;fill:currentColor;}/*!sc*/
         .jaagoI span.first-icon{left:0;top:0;}/*!sc*/
         .jaagoI span.last-icon{right:0;}/*!sc*/
         .iGocAk{position:relative;width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;min-height:2.75rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0.6875rem 2.75rem 0.6875rem 0.5rem;font-size:14px;line-height:20px;font-weight:500;border:1px solid transparent;outline-offset:0;-webkit-transition:none;transition:none;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none;padding-left:2.75rem;}/*!sc*/
         .iGocAk.iGocAk{color:#000000;border-radius:0px;border-bottom-color:transparent;}/*!sc*/
         @media (hover:hover) and (pointer:fine){.iGocAk{min-height:2.5rem;padding:0.5625rem 2.5rem 0.5625rem 0.5rem;padding-left:2.5rem;}}/*!sc*/
         .iGocAk:before{content:none;}/*!sc*/
         .iGocAk.iGocAk:focus-visible{border:1px solid #376EB4;outline:1px solid #376EB4;-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
         .iGocAk.iGocAk:visited:focus{-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
         .iGocAk:focus,.iGocAk:link{-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
         @media (hover:hover) and (pointer:fine){.iGocAk:hover{-webkit-tap-highlight-color:transparent;-webkit-text-decoration:none;text-decoration:none;background-color:rgba(0,0,0,0.08);}}/*!sc*/
         .iGocAk:active{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-text-decoration:none;text-decoration:none;background-color:#3D3D3D;color:#FFFFFF;}/*!sc*/
         .iGocAk span{min-height:unset;}/*!sc*/
         .iGocAk span.first-icon,.iGocAk span.last-icon{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0.75rem;}/*!sc*/
         @media (hover:hover) and (pointer:fine){.iGocAk span.first-icon,.iGocAk span.last-icon{padding:0.625rem;}}/*!sc*/
         .iGocAk span.first-icon svg,.iGocAk span.last-icon svg{width:1.25rem;visibility:hidden;fill:currentColor;}/*!sc*/
         .iGocAk span.first-icon{left:0;top:0;}/*!sc*/
         .iGocAk span.last-icon{right:0;}/*!sc*/
         .ZgqtA{position:relative;width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;min-height:2.75rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0.6875rem 2.75rem 0.6875rem 0.5rem;font-size:14px;line-height:20px;font-weight:500;border:1px solid transparent;outline-offset:0;-webkit-transition:none;transition:none;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none;padding-left:2.75rem;}/*!sc*/
         .ZgqtA.ZgqtA{color:#000000;border-radius:0px;border-bottom-color:transparent;}/*!sc*/
         @media (hover:hover) and (pointer:fine){.ZgqtA{min-height:2.5rem;padding:0.5625rem 2.5rem 0.5625rem 0.5rem;padding-left:2.5rem;}}/*!sc*/
         .ZgqtA:before{content:none;}/*!sc*/
         .ZgqtA.ZgqtA:focus-visible{border:1px solid #376EB4;outline:1px solid #376EB4;-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
         .ZgqtA.ZgqtA:visited:focus{-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
         .ZgqtA:focus,.ZgqtA:link{-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
         @media (hover:hover) and (pointer:fine){.ZgqtA:hover{-webkit-tap-highlight-color:transparent;-webkit-text-decoration:none;text-decoration:none;background-color:rgba(0,0,0,0.08);}}/*!sc*/
         .ZgqtA:active{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-text-decoration:none;text-decoration:none;background-color:#3D3D3D;color:#FFFFFF;}/*!sc*/
         .ZgqtA span{min-height:unset;}/*!sc*/
         .ZgqtA span.first-icon,.ZgqtA span.last-icon{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0.75rem;}/*!sc*/
         @media (hover:hover) and (pointer:fine){.ZgqtA span.first-icon,.ZgqtA span.last-icon{padding:0.625rem;}}/*!sc*/
         .ZgqtA span.first-icon svg,.ZgqtA span.last-icon svg{width:1.25rem;visibility:visible;fill:currentColor;}/*!sc*/
         .ZgqtA span.first-icon{left:0;top:0;}/*!sc*/
         .ZgqtA span.last-icon{right:0;}/*!sc*/
         data-styled.g114[id="sc-28a4cd60-0"]{content:"jaagoI,iGocAk,ZgqtA,"}/*!sc*/
         .gYlZIO{display:none;}/*!sc*/
         @media (min-width:64rem){.gYlZIO{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-right:1.5rem;overflow:visible;visibility:visible;opacity:1;-webkit-transition:opacity var(--meta-nav-animation-duration) ease;transition:opacity var(--meta-nav-animation-duration) ease;}}/*!sc*/
         data-styled.g115[id="sc-446dc962-0"]{content:"gYlZIO,"}/*!sc*/
         .llYepF{max-width:36rem;margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding-left:0;}/*!sc*/
         .llYepF.llYepF > li{-webkit-flex-basis:content;-ms-flex-preferred-size:content;flex-basis:content;min-width:0;max-width:10rem;margin-left:0.25rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}/*!sc*/
         .llYepF.llYepF > li a{min-height:unset;display:block;padding:0.6875rem 0.5rem;font-weight:500;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;}/*!sc*/
         @media (hover:hover) and (pointer:fine){.llYepF.llYepF > li a{padding:0.5625rem 0.5rem;}}/*!sc*/
         data-styled.g116[id="sc-446dc962-1"]{content:"llYepF,"}/*!sc*/
         .fVIlkR{width:100%;min-height:2.75rem;-webkit-transition:none;transition:none;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:14px;line-height:20px;font-weight:500;border:1px solid transparent;padding:0.6875rem 0.5rem;padding-left:0;}/*!sc*/
         .fVIlkR.fVIlkR{color:#000000;}/*!sc*/
         .fVIlkR.fVIlkR.selected{color:#0A5A96;}/*!sc*/
         .fVIlkR .sc-cabc6967-0{left:5px;}/*!sc*/
         @media (hover:hover) and (pointer:fine){.fVIlkR .sc-cabc6967-0{left:10px;}}/*!sc*/
         .initials.sc-44675b79-0 .sc-cabc6967-0{left:5px;}/*!sc*/
         @media (hover:hover) and (pointer:fine){.initials.sc-44675b79-0 .sc-cabc6967-0{left:3px;}}/*!sc*/
         .fVIlkR.initials{padding-right:0;}/*!sc*/
         @media (hover:hover) and (pointer:fine){.fVIlkR.initials{padding-left:2.375rem;}}/*!sc*/
         .fVIlkR .cart-count{position:absolute;right:0;margin:0.6875rem;}/*!sc*/
         @media (hover:hover) and (pointer:fine){.fVIlkR{min-height:2.5rem;padding:0.5625rem 0.5rem;padding-left:0;}.fVIlkR.initials{padding-right:0;}}/*!sc*/
         .fVIlkR.fVIlkR:focus-visible{border:1px solid #0A5A96;outline:1px solid #0A5A96;-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
         .fVIlkR.fVIlkR:visited:focus{-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
         .fVIlkR:focus{-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
         @media (hover:hover) and (pointer:fine){.fVIlkR:hover{-webkit-tap-highlight-color:transparent;background-color:rgba(0,0,0,0.08);}}/*!sc*/
         .fVIlkR:active{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-text-decoration:none;text-decoration:none;background-color:#3D3D3D;color:#FFFFFF;}/*!sc*/
         .fVIlkR:active .initials{border-color:#FFFFFF;}/*!sc*/
         .fVIlkR span{min-height:unset;}/*!sc*/
         .fVIlkR span svg{width:1.25rem;fill:currentColor;}/*!sc*/
         .fVIlkR span.first-icon,.fVIlkR span.last-icon{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;min-width:2.75rem;}/*!sc*/
         @media (hover:hover) and (pointer:fine){.fVIlkR span.first-icon,.fVIlkR span.last-icon{min-width:2.5rem;}}/*!sc*/
         .fVIlkR span.last-icon{margin-left:auto;}/*!sc*/
         data-styled.g118[id="sc-44675b79-0"]{content:"fVIlkR,"}/*!sc*/
         .fFGleh{background-color:#FFFFFF;}/*!sc*/
         .fFGleh .animated-logo{display:block;}/*!sc*/
         @media (min-width:64rem){.fFGleh{-webkit-animation-name:kjMjtU;animation-name:kjMjtU;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:ease;animation-timing-function:ease;margin-top:4rem;}.fFGleh .animated-logo{display:none;}.fFGleh .animated-logo.show-on-desktop{display:block;right:0 !important;}}/*!sc*/
         data-styled.g119[id="sc-821ebc6d-0"]{content:"fFGleh,"}/*!sc*/
         .hkLOLM{width:100%;padding:0;list-style:none;}/*!sc*/
         .hkLOLM.spacer{margin-bottom:1.5rem;}/*!sc*/
         data-styled.g120[id="sc-821ebc6d-1"]{content:"hkLOLM,"}/*!sc*/
         .PvzvN{margin:1rem 0;display:none;}/*!sc*/
         .PvzvN:active{color:#000000;}/*!sc*/
         .PvzvN span{min-height:unset;}/*!sc*/
         @media (min-width:48rem){.PvzvN{margin:0 1.5rem;padding:0.5625rem 1.4375rem;display:block;display:none;height:2.75rem;}@media (hover:hover) and (pointer:fine){.PvzvN{height:2.5rem;}}}/*!sc*/
         @media (min-width:64rem){.PvzvN{display:block;margin-right:0;margin-left:1.5rem;}}/*!sc*/
         .hPUDx{margin:1rem 0;display:block;}/*!sc*/
         .hPUDx:active{color:#000000;}/*!sc*/
         .hPUDx span{min-height:unset;}/*!sc*/
         @media (min-width:48rem){.hPUDx{margin:0 1.5rem;padding:0.5625rem 1.4375rem;display:none;display:none;height:2.75rem;}@media (hover:hover) and (pointer:fine){.hPUDx{height:2.5rem;}}}/*!sc*/
         @media (min-width:64rem){.hPUDx{display:block;margin-right:0;margin-left:1.5rem;}}/*!sc*/
         data-styled.g123[id="sc-821ebc6d-4"]{content:"PvzvN,hPUDx,"}/*!sc*/
         .flRCiV{margin:1rem 0;}/*!sc*/
         @media (min-width:48rem){.flRCiV{margin:0.5rem 0;}}/*!sc*/
         data-styled.g124[id="sc-821ebc6d-5"]{content:"flRCiV,"}/*!sc*/
         .dEgCCS:not(.withDesktopAnimation){-webkit-animation-name:none;animation-name:none;-webkit-animation-duration:var(--animation-duration);animation-duration:var(--animation-duration);-webkit-animation-delay:0s;animation-delay:0s;opacity:0;margin:0 2rem 0 -2rem;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}/*!sc*/
         @media (min-width:64rem){.dEgCCS{-webkit-animation-name:none;animation-name:none;-webkit-animation-duration:var(--animation-duration);animation-duration:var(--animation-duration);-webkit-animation-delay:0s;animation-delay:0s;opacity:0;margin:0 2rem 0 -2rem;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}.dEgCCS:not(.withDesktopAnimation){-webkit-animation-name:none;animation-name:none;-webkit-animation-duration:unset;animation-duration:unset;opacity:1;margin:unset;-webkit-animation-fill-mode:none;animation-fill-mode:none;}}/*!sc*/
         .eMqlDi:not(.withDesktopAnimation){-webkit-animation-name:dXAZWi;animation-name:dXAZWi;-webkit-animation-duration:var(--animation-duration);animation-duration:var(--animation-duration);-webkit-animation-delay:0s;animation-delay:0s;opacity:0;margin:0 2rem 0 -2rem;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}/*!sc*/
         @media (min-width:64rem){.eMqlDi{-webkit-animation-name:dXAZWi;animation-name:dXAZWi;-webkit-animation-duration:var(--animation-duration);animation-duration:var(--animation-duration);-webkit-animation-delay:0s;animation-delay:0s;opacity:0;margin:0 2rem 0 -2rem;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}.eMqlDi:not(.withDesktopAnimation){-webkit-animation-name:none;animation-name:none;-webkit-animation-duration:unset;animation-duration:unset;opacity:1;margin:unset;-webkit-animation-fill-mode:none;animation-fill-mode:none;}}/*!sc*/
         data-styled.g125[id="sc-821ebc6d-6"]{content:"dEgCCS,eMqlDi,"}/*!sc*/
         .iXrGsR{-webkit-animation-name:kemfJm;animation-name:kemfJm;-webkit-animation-duration:var(--animation-duration);animation-duration:var(--animation-duration);opacity:0;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}/*!sc*/
         .hfqKdm{-webkit-animation-name:dXAZWi;animation-name:dXAZWi;-webkit-animation-duration:var(--animation-duration);animation-duration:var(--animation-duration);opacity:0;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}/*!sc*/
         data-styled.g126[id="sc-821ebc6d-7"]{content:"iXrGsR,hfqKdm,"}/*!sc*/
         .cgoKAP{display:grid;grid-template-rows:0fr;-webkit-transition-property:grid-template-rows,padding-top;transition-property:grid-template-rows,padding-top;-webkit-transition-duration:var(--animation-duration);transition-duration:var(--animation-duration);-webkit-transition-delay:var(--animation-duration);transition-delay:var(--animation-duration);grid-template-rows:0fr;position:fixed;margin-top:4.25rem;padding-top:0;top:0;left:0;right:0;background-color:#FFFFFF;z-index:22;}/*!sc*/
         @media (hover:hover) and (pointer:fine){.cgoKAP{margin-top:4rem;}}/*!sc*/
         .cgoKAP > div{overflow:hidden;width:100%;}/*!sc*/
         .cgoKAP > div > div{height:100vh;}/*!sc*/
         @media (min-width:48rem){.cgoKAP{padding-top:1.5rem;width:21rem;left:initial;-webkit-transition-property:right,padding-top;transition-property:right,padding-top;grid-template-rows:1fr;right:-21rem;}}/*!sc*/
         data-styled.g127[id="sc-821ebc6d-8"]{content:"cgoKAP,"}/*!sc*/
         .eMdFQK{--animation-duration:300ms;--meta-nav-animation-duration:200ms;--safe-area-inset-top:env(safe-area-inset-top);--safe-area-inset-bottom:env(safe-area-inset-bottom);--flyout-height:calc(100% + (var(--safe-area-inset-top) + var(--safe-area-inset-bottom)));--flyout-margin-top:4.25rem;}/*!sc*/
         @media (hover:hover) and (pointer:fine){.eMdFQK{--flyout-height:calc(100% + (var(--safe-area-inset-top) + var(--safe-area-inset-bottom)));--flyout-margin-top:4rem;}}/*!sc*/
         data-styled.g128[id="sc-821ebc6d-9"]{content:"eMdFQK,"}/*!sc*/
         .fkMPpU{position:relative;width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;min-height:2.75rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:14px;line-height:20px;font-weight:500;border:none;outline-offset:0;-webkit-transition:none;transition:none;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none;padding:0.75rem 2.75rem 0.75rem 0.5rem;padding-left:2.75rem;border:1px solid transparent;}/*!sc*/
         .fkMPpU.fkMPpU{color:#000000;border-radius:0px;}/*!sc*/
         .fkMPpU.disabled{color:rgba(0,0,0,0.26);pointer-events:none;}/*!sc*/
         @media (hover:hover) and (pointer:fine){.fkMPpU{min-height:2.5rem;padding:0.5rem 2.5rem 0.5rem 0.5rem;padding-left:2.5rem;}}/*!sc*/
         .fkMPpU:before{content:none;}/*!sc*/
         .fkMPpU.fkMPpU:focus-visible{border:1px solid #376EB4;outline:1px solid #376EB4;-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
         .fkMPpU.fkMPpU:visited:focus{-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
         .fkMPpU:focus,.fkMPpU:link{-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
         @media (hover:hover) and (pointer:fine){.fkMPpU:hover{-webkit-tap-highlight-color:transparent;-webkit-text-decoration:none;text-decoration:none;background-color:rgba(0,0,0,0.08);}}/*!sc*/
         .fkMPpU:active{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-text-decoration:none;text-decoration:none;background-color:#3D3D3D;color:#FFFFFF;}/*!sc*/
         .fkMPpU span{min-height:unset;}/*!sc*/
         .fkMPpU span.first-icon{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0.75rem;}/*!sc*/
         @media (hover:hover) and (pointer:fine){.fkMPpU span.first-icon{padding:0.625rem;}}/*!sc*/
         .fkMPpU span.first-icon svg{width:1.25rem;visibility:visible;fill:currentColor;}/*!sc*/
         .fkMPpU span.first-icon{left:0;top:0;}/*!sc*/
         .gfpXHQ{position:relative;width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;min-height:2.75rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:14px;line-height:20px;font-weight:500;border:none;outline-offset:0;-webkit-transition:none;transition:none;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none;padding:0.75rem 2.75rem 0.75rem 0.5rem;padding-left:2.75rem;border:1px solid transparent;}/*!sc*/
         .gfpXHQ.gfpXHQ{color:#000000;border-radius:0px;}/*!sc*/
         .gfpXHQ.disabled{color:rgba(0,0,0,0.26);pointer-events:none;}/*!sc*/
         @media (hover:hover) and (pointer:fine){.gfpXHQ{min-height:2.5rem;padding:0.5rem 2.5rem 0.5rem 0.5rem;padding-left:2.5rem;}}/*!sc*/
         .gfpXHQ:before{content:none;}/*!sc*/
         .gfpXHQ.gfpXHQ:focus-visible{border:1px solid #376EB4;outline:1px solid #376EB4;-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
         .gfpXHQ.gfpXHQ:visited:focus{-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
         .gfpXHQ:focus,.gfpXHQ:link{-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
         @media (hover:hover) and (pointer:fine){.gfpXHQ:hover{-webkit-tap-highlight-color:transparent;-webkit-text-decoration:none;text-decoration:none;background-color:rgba(0,0,0,0.08);}}/*!sc*/
         .gfpXHQ:active{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-text-decoration:none;text-decoration:none;background-color:#3D3D3D;color:#FFFFFF;}/*!sc*/
         .gfpXHQ span{min-height:unset;}/*!sc*/
         .gfpXHQ span.first-icon{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0.75rem;}/*!sc*/
         @media (hover:hover) and (pointer:fine){.gfpXHQ span.first-icon{padding:0.625rem;}}/*!sc*/
         .gfpXHQ span.first-icon svg{width:1.25rem;visibility:hidden;fill:currentColor;}/*!sc*/
         .gfpXHQ span.first-icon{left:0;top:0;}/*!sc*/
         data-styled.g129[id="sc-2097f723-0"]{content:"fkMPpU,gfpXHQ,"}/*!sc*/
         .kbKFyA{position:fixed;top:0;left:0;right:0;width:100%;background-color:#FFFFFF;z-index:99;box-sizing:border-box;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:transparent;}/*!sc*/
         @media (min-width:64rem){.kbKFyA{box-shadow:none;border-bottom-width:0;}.kbKFyA .sc-2097f723-0{font-size:14px;line-height:20px;font-weight:500;}}/*!sc*/
         data-styled.g130[id="sc-eb953e09-0"]{content:"kbKFyA,"}/*!sc*/
         .kndgIn{width:100%;top:0;padding:0.75rem 0rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#FFFFFF;box-sizing:border-box;height:4.25rem;}/*!sc*/
         @media (min-width:64rem){.kndgIn{padding:0.75rem 0rem;}}/*!sc*/
         @media (hover:hover) and (pointer:fine){.kndgIn{height:4rem;}}/*!sc*/
         data-styled.g131[id="sc-eb953e09-1"]{content:"kndgIn,"}/*!sc*/
         .dLnDNk{max-width:11.5625rem;max-height:2.5rem;margin-right:auto;}/*!sc*/
         .dLnDNk img{height:1rem;width:auto;}/*!sc*/
         @media (min-width:64rem){.dLnDNk img{height:1.25rem;}}/*!sc*/
         data-styled.g132[id="sc-eb953e09-2"]{content:"dLnDNk,"}/*!sc*/
         .iqEvvd{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}/*!sc*/
         .iqEvvd .icons .user-icon,.iqEvvd .icons .basket-icon{display:none;position:relative;}/*!sc*/
         .iqEvvd .icons .user-icon .cart-counter,.iqEvvd .icons .basket-icon .cart-counter{position:absolute;right:1px;top:1px;margin:0;}/*!sc*/
         @media (min-width:48rem){.iqEvvd .icons .user-icon{display:block;}}/*!sc*/
         @media (min-width:375px){.iqEvvd .icons .basket-icon{display:block;}}/*!sc*/
         .iqEvvd.iqEvvd.iqEvvd.iqEvvd div button{padding-right:0;}/*!sc*/
         @media (min-width:64rem){.iqEvvd{-webkit-column-gap:0;column-gap:0;-webkit-transition:column-gap var(--meta-nav-animation-duration) ease;transition:column-gap var(--meta-nav-animation-duration) ease;}}/*!sc*/
         .iqEvvd.iqEvvd.iqEvvd a.with-text{width:unset;max-width:10rem;padding-left:2.5rem;}/*!sc*/
         @media (min-width:64rem){.iqEvvd.iqEvvd.iqEvvd a.with-text{padding-right:0.5rem;}}/*!sc*/
         .iqEvvd.iqEvvd.iqEvvd .label{height:unset;width:unset;max-width:10rem;display:none;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;}/*!sc*/
         @media (min-width:64rem){.iqEvvd.iqEvvd.iqEvvd .label{display:block;}}/*!sc*/
         .iqEvvd.iqEvvd.iqEvvd .menu-button{position:relative;}/*!sc*/
         .iqEvvd.iqEvvd.iqEvvd .menu-info{position:absolute;top:0.25rem;right:0.25rem;}/*!sc*/
         @media (min-width:375px){.iqEvvd.iqEvvd.iqEvvd .menu-info{display:none;}}/*!sc*/
         data-styled.g133[id="sc-eb953e09-3"]{content:"iqEvvd,"}/*!sc*/
         .inwfsW{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}/*!sc*/
         .inwfsW .sc-44675b79-0.initials{padding-right:0;}/*!sc*/
         .inwfsW .sc-2097f723-0{width:2.5rem;padding:0;}/*!sc*/
         @media (hover:none) and (pointer:coarse){.inwfsW .sc-2097f723-0{width:2.75rem;}}/*!sc*/
         @media (hover:none) and (pointer:coarse){.inwfsW.inwfsW.inwfsW button:not(.initials){height:2.75rem;min-width:2.75rem;}}/*!sc*/
         @media (hover:none) and (pointer:coarse){.inwfsW span:not(.label):first-of-type{width:2.75rem;min-width:2.75rem;height:2.75rem;}}/*!sc*/
         .inwfsW span:not(.label) [data-preview-id]{width:unset;}/*!sc*/
         .inwfsW svg{fill:#000000;}/*!sc*/
         .inwfsW .selected{background-color:rgba(0,0,0,0.14);color:#000000;}/*!sc*/
         .inwfsW .selected path{fill:#000000;}/*!sc*/
         @media (min-width:64rem){.inwfsW.inwfsW.inwfsW button{padding-right:0.5rem;min-width:2.5rem;-webkit-transition:padding-right var(--meta-nav-animation-duration) ease,min-width var(--meta-nav-animation-duration) ease;transition:padding-right var(--meta-nav-animation-duration) ease,min-width var(--meta-nav-animation-duration) ease;}}/*!sc*/
         .inwfsW svg{fill:#000000;width:1.25rem;}/*!sc*/
         @media (hover:hover) and (pointer:fine){.inwfsW:hover{-webkit-tap-highlight-color:transparent;}.inwfsW:hover svg{fill:#000000;}}/*!sc*/
         .inwfsW:active.sc-eb953e09-4:active.sc-eb953e09-4:active button{background-color:#3D3D3D;color:#FFFFFF;}/*!sc*/
         .inwfsW:active.sc-eb953e09-4:active.sc-eb953e09-4:active button div:not(.cart-counter),.inwfsW:active.inwfsW:active.inwfsW:active button div:not(.cart-counter) label{background-color:#3D3D3D;}/*!sc*/
         .inwfsW:active.sc-eb953e09-4:active.sc-eb953e09-4:active button svg path{fill:#FFFFFF;}/*!sc*/
         .inwfsW:focus-visible{border:1px solid #376EB4;outline:1px solid #376EB4;-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
         @media (min-width:64rem){.inwfsW.close-icon{display:none;}}/*!sc*/
         .inwfsW.basket-icon{border:1px solid transparent;}/*!sc*/
         .inwfsW.basket-icon:focus{border:1px solid #376EB4;outline:1px solid #376EB4;}/*!sc*/
         .kViWoD{display:none;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}/*!sc*/
         .kViWoD .sc-44675b79-0.initials{padding-right:0;}/*!sc*/
         .kViWoD .sc-2097f723-0{width:2.5rem;padding:0;}/*!sc*/
         @media (hover:none) and (pointer:coarse){.kViWoD .sc-2097f723-0{width:2.75rem;}}/*!sc*/
         @media (hover:none) and (pointer:coarse){.kViWoD.kViWoD.kViWoD button:not(.initials){height:2.75rem;min-width:2.75rem;}}/*!sc*/
         @media (hover:none) and (pointer:coarse){.kViWoD span:not(.label):first-of-type{width:2.75rem;min-width:2.75rem;height:2.75rem;}}/*!sc*/
         .kViWoD span:not(.label) [data-preview-id]{width:unset;}/*!sc*/
         .kViWoD svg{fill:#000000;}/*!sc*/
         .kViWoD .selected{background-color:rgba(0,0,0,0.14);color:#000000;}/*!sc*/
         .kViWoD .selected path{fill:#000000;}/*!sc*/
         @media (min-width:64rem){.kViWoD.kViWoD.kViWoD button{padding-right:0.5rem;min-width:2.5rem;-webkit-transition:padding-right var(--meta-nav-animation-duration) ease,min-width var(--meta-nav-animation-duration) ease;transition:padding-right var(--meta-nav-animation-duration) ease,min-width var(--meta-nav-animation-duration) ease;}}/*!sc*/
         .kViWoD svg{fill:#000000;width:1.25rem;}/*!sc*/
         @media (hover:hover) and (pointer:fine){.kViWoD:hover{-webkit-tap-highlight-color:transparent;}.kViWoD:hover svg{fill:#000000;}}/*!sc*/
         .kViWoD:active.sc-eb953e09-4:active.sc-eb953e09-4:active button{background-color:#3D3D3D;color:#FFFFFF;}/*!sc*/
         .kViWoD:active.sc-eb953e09-4:active.sc-eb953e09-4:active button div:not(.cart-counter),.kViWoD:active.kViWoD:active.kViWoD:active button div:not(.cart-counter) label{background-color:#3D3D3D;}/*!sc*/
         .kViWoD:active.sc-eb953e09-4:active.sc-eb953e09-4:active button svg path{fill:#FFFFFF;}/*!sc*/
         .kViWoD:focus-visible{border:1px solid #376EB4;outline:1px solid #376EB4;-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
         @media (min-width:64rem){.kViWoD.close-icon{display:none;}}/*!sc*/
         .kViWoD.basket-icon{border:1px solid transparent;}/*!sc*/
         .kViWoD.basket-icon:focus{border:1px solid #376EB4;outline:1px solid #376EB4;}/*!sc*/
         data-styled.g134[id="sc-eb953e09-4"]{content:"inwfsW,kViWoD,"}/*!sc*/
         .jizqKn{justify-self:end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;right:1rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}/*!sc*/
         @media (min-width:64rem){.jizqKn{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-column-gap:0;column-gap:0;-webkit-transition:column-gap var(--meta-nav-animation-duration) ease;transition:column-gap var(--meta-nav-animation-duration) ease;}}/*!sc*/
         data-styled.g135[id="sc-eb953e09-5"]{content:"jizqKn,"}/*!sc*/
         .fhigZi{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;line-height:1.5rem;overflow:hidden;min-width:0;max-width:0;-webkit-transition:min-width,max-width,var(--meta-nav-animation-duration) ease;transition:min-width,max-width,var(--meta-nav-animation-duration) ease;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}/*!sc*/
         .fhigZi .label{opacity:0;-webkit-transition:opacity var(--meta-nav-animation-duration) ease;transition:opacity var(--meta-nav-animation-duration) ease;}/*!sc*/
         data-styled.g136[id="sc-eb953e09-6"]{content:"fhigZi,"}/*!sc*/
         .bReebN{position:relative;display:none;border:1px solid transparent;}/*!sc*/
         @media (width >= 23.4375rem){.bReebN{display:initial;}}/*!sc*/
         .bReebN:focus{border:1px solid #376EB4;outline:1px solid #376EB4;}/*!sc*/
         data-styled.g137[id="sc-eb953e09-7"]{content:"bReebN,"}/*!sc*/
         .MnrHO{position:relative;display:none;border:1px solid transparent;}/*!sc*/
         @media (min-width:48rem){.MnrHO{display:initial;}}/*!sc*/
         .MnrHO:focus{border:1px solid #376EB4;outline:1px solid #376EB4;}/*!sc*/
         data-styled.g138[id="sc-eb953e09-8"]{content:"MnrHO,"}/*!sc*/
         .dswcqB{border:1px solid transparent;}/*!sc*/
         .dswcqB:focus{border:1px solid #376EB4;outline:1px solid #376EB4;}/*!sc*/
         data-styled.g139[id="sc-eb953e09-9"]{content:"dswcqB,"}/*!sc*/
         .iHKyEw{left:0;right:0;top:100%;margin:auto;position:absolute;height:0;-webkit-transition:all 0.3s ease;transition:all 0.3s ease;-webkit-transition-delay:0.3s;transition-delay:0.3s;background-color:#FFFFFF;z-index:102;padding:0 1rem;border-top:1px solid #D9D9D9;}/*!sc*/
         @media (min-width:48rem){.iHKyEw{padding:0 6.25rem;}}/*!sc*/
         @media (min-width:64rem){.iHKyEw{display:none;}}/*!sc*/
         data-styled.g140[id="sc-eb953e09-10"]{content:"iHKyEw,"}/*!sc*/
         .hpuGVL{width:100%;display:none;grid-template-rows:0fr;-webkit-transition:grid-template-rows 0.3s ease;transition:grid-template-rows 0.3s ease;border-top-width:0px;border-top-style:solid;border-top-color:#D9D9D9;padding:0;margin:0;box-shadow:0px 8px 12px -6px rgba(0,0,0,0.3);}/*!sc*/
         .hpuGVL .sc-gFqAkR{position:relative;}/*!sc*/
         .hpuGVL .sc-eb953e09-12{overflow:hidden;}/*!sc*/
         @media (min-width:64rem){.hpuGVL{display:grid;position:fixed;background-color:#FFFFFF;}}/*!sc*/
         data-styled.g141[id="sc-eb953e09-11"]{content:"hpuGVL,"}/*!sc*/
         .llTAjB{position:relative;overflow:hidden;}/*!sc*/
         data-styled.g142[id="sc-eb953e09-12"]{content:"llTAjB,"}/*!sc*/
         @media (min-width:64rem){.hhHhqc{position:absolute;z-index:100;top:1rem;right:1.5rem;}.hhHhqc svg{width:1.25rem;}}/*!sc*/
         data-styled.g143[id="sc-eb953e09-13"]{content:"hhHhqc,"}/*!sc*/
         .ibLwzK{position:absolute;min-width:12.5rem;top:2.75rem;white-space:nowrap;background-color:#FFFFFF;box-shadow:0px 2px 6px 0px rgba(0,0,0,0.26);pointer-events:none;opacity:0;padding:0 0;-webkit-transition:opacity 0.2s ease,padding 0.2s ease;transition:opacity 0.2s ease,padding 0.2s ease;}/*!sc*/
         .ibLwzK a{pointer-events:none;}/*!sc*/
         @media (hover:hover) and (pointer:fine){.ibLwzK{top:2.5rem;}}/*!sc*/
         data-styled.g144[id="sc-4b5a4535-0"]{content:"ibLwzK,"}/*!sc*/
         .fwGqIk{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;white-space:nowrap;position:absolute;top:2.5rem;z-index:100;right:0;background-color:#FFFFFF;box-shadow:0px 2px 6px 0px rgba(0,0,0,0.26);pointer-events:none;opacity:0;padding:0 0;-webkit-transition:opacity 0.2s ease,padding 0.2s ease;transition:opacity 0.2s ease,padding 0.2s ease;}/*!sc*/
         .fwGqIk a{pointer-events:none;}/*!sc*/
         @media (min-width:48rem){.fwGqIk{left:0;right:auto;}}/*!sc*/
         data-styled.g145[id="sc-c0aec0-0"]{content:"fwGqIk,"}/*!sc*/
         .cvGnjx{height:3rem;width:0;visibility:hidden;opacity:0;-webkit-transition:all 0.3s ease;transition:all 0.3s ease;-webkit-transition-delay:0;transition-delay:0;left:50%;-webkit-transform:translate(-50%,0);-ms-transform:translate(-50%,0);transform:translate(-50%,0);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;position:relative;margin-top:2.5rem;}/*!sc*/
         @media (min-width:48rem){.cvGnjx{margin-top:6.25rem;}}/*!sc*/
         @media (min-width:64rem){.cvGnjx{margin-top:0;}}/*!sc*/
         .cvGnjx button{position:absolute;right:0;top:0;width:3rem;height:3rem;}/*!sc*/
         .cvGnjx button >{width:3rem;height:3rem;}/*!sc*/
         .cvGnjx button span{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}/*!sc*/
         .cvGnjx button span svg{width:1.25rem;height:1.25rem;fill:#707070;}/*!sc*/
         data-styled.g146[id="sc-d464b8f3-0"]{content:"cvGnjx,"}/*!sc*/
         .kHQuJG{border:0;width:100%;height:3rem;line-height:1.5rem;font-size:1.125rem;padding-right:2.5rem;padding-left:0.5rem;background-color:transparent;border:1px solid transparent;border-bottom:1px solid #B4B4B4;border-radius:0px;outline:1px solid transparent;}/*!sc*/
         @media (hover:hover) and (pointer:fine){.kHQuJG:hover{-webkit-tap-highlight-color:transparent;background-color:rgba(0,0,0,0.04);border-bottom-color:#5C5C5C;}}/*!sc*/
         .kHQuJG:active{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:rgba(0,0,0,0.06);}/*!sc*/
         .kHQuJG::-webkit-input-placeholder{line-height:1.5rem;font-size:1.125rem;}/*!sc*/
         .kHQuJG::-moz-placeholder{line-height:1.5rem;font-size:1.125rem;}/*!sc*/
         .kHQuJG:-ms-input-placeholder{line-height:1.5rem;font-size:1.125rem;}/*!sc*/
         .kHQuJG::placeholder{line-height:1.5rem;font-size:1.125rem;}/*!sc*/
         @media (min-width:64rem){.kHQuJG{width:37.5rem;}}/*!sc*/
         data-styled.g147[id="sc-d464b8f3-1"]{content:"kHQuJG,"}/*!sc*/
         .izVVYd{position:absolute;right:0.625rem;}/*!sc*/
         .izVVYd svg{width:1.25rem;fill:#707070;}/*!sc*/
         data-styled.g151[id="sc-d464b8f3-5"]{content:"izVVYd,"}/*!sc*/
         .dJecPp{position:relative;width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;min-height:2.75rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0.75rem 2.75rem 0.75rem 0.5rem;font-size:14px;line-height:20px;font-weight:500;-webkit-transition:none;transition:none;-webkit-hyphens:manual;-moz-hyphens:manual;-ms-hyphens:manual;hyphens:manual;pointer-events:auto;}/*!sc*/
         .dJecPp svg.overview-icon{stroke:#000000;}/*!sc*/
         .dJecPp.dJecPp{color:#000000;}/*!sc*/
         .dJecPp:before{content:none;}/*!sc*/
         .dJecPp.dJecPp:visited:focus{-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
         .dJecPp:focus,.dJecPp:link{-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
         @media (hover:hover) and (pointer:fine){.dJecPp:hover{-webkit-tap-highlight-color:transparent;-webkit-text-decoration:none;text-decoration:none;background-color:rgba(0,0,0,0.08);}}/*!sc*/
         .dJecPp:active{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-text-decoration:none;text-decoration:none;background-color:#3D3D3D;color:#FFFFFF;}/*!sc*/
         .dJecPp:active svg.overview-icon{stroke:#FFFFFF;}/*!sc*/
         .dJecPp:active > img{-webkit-filter:invert(99%) sepia(2%) saturate(159%) hue-rotate(253deg) brightness(116%) contrast(100%);filter:invert(99%) sepia(2%) saturate(159%) hue-rotate(253deg) brightness(116%) contrast(100%);}/*!sc*/
         .dJecPp .pictogram{position:absolute;left:0;height:2rem;width:2rem;margin:0 0.5rem;}/*!sc*/
         @media (min-width:64rem){.dJecPp .pictogram{position:unset;left:unset;}}/*!sc*/
         .dJecPp:active.sc-5b3e516d-0:active img{-webkit-filter:invert(99%) sepia(2%) saturate(159%) hue-rotate(253deg) brightness(116%) contrast(100%);filter:invert(99%) sepia(2%) saturate(159%) hue-rotate(253deg) brightness(116%) contrast(100%);}/*!sc*/
         .dJecPp img{position:absolute;height:1.25rem;width:1.25rem;margin:0.75rem;left:0;top:0;}/*!sc*/
         .pictogram .sc-5b3e516d-0 img{top:unset;height:2rem;width:2rem;margin:0;}/*!sc*/
         .dJecPp span{min-height:unset;}/*!sc*/
         .dJecPp span.first-icon,.dJecPp span.last-icon{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0.75rem;}/*!sc*/
         .dJecPp span.first-icon svg,.dJecPp span.last-icon svg{width:1.25rem;visibility:visible;fill:currentColor;}/*!sc*/
         .dJecPp span.first-icon{left:0;top:0;}/*!sc*/
         .dJecPp span.last-icon{right:0;}/*!sc*/
         data-styled.g154[id="sc-5b3e516d-0"]{content:"dJecPp,"}/*!sc*/
         .bbOiuQ{padding:0 0 1.5rem 0;margin:0;}/*!sc*/
         @media (min-width:64rem){.bbOiuQ{display:none;}}/*!sc*/
         data-styled.g156[id="sc-2abe06a4-0"]{content:"bbOiuQ,"}/*!sc*/
         .hRofbz{display:none;}/*!sc*/
         @media (min-width:64rem){.hRofbz{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding:0;margin:0;-webkit-column-gap:2rem;column-gap:2rem;}.hRofbz > li{-webkit-flex-basis:content;-ms-flex-preferred-size:content;flex-basis:content;}}/*!sc*/
         data-styled.g159[id="sc-42f4379a-1"]{content:"hRofbz,"}/*!sc*/
         .iyEqST{display:none;grid-template-rows:0fr;-webkit-transition-property:grid-template-rows;transition-property:grid-template-rows;-webkit-transition-duration:var(--animation-duration);transition-duration:var(--animation-duration);-webkit-transition-delay:var(--animation-duration);transition-delay:var(--animation-duration);border-top-width:0px;border-top-style:solid;border-top-color:#D9D9D9;}/*!sc*/
         @media (min-width:64rem){.iyEqST{display:grid;visibility:hidden;position:absolute;left:0;right:0;top:'var(--first-level-nav-height, 56px)';width:100%;}.iyEqST .sc-gFqAkR{position:relative;background-color:white;}}/*!sc*/
         data-styled.g160[id="sc-42f4379a-2"]{content:"iyEqST,"}/*!sc*/
         .kSknSn .sc-821ebc6d-5,.kSknSn .trigger{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}/*!sc*/
         @media (width >= 375px){.kSknSn .sc-821ebc6d-5,.kSknSn .trigger{display:none;}}/*!sc*/
         data-styled.g165[id="sc-86e8dd6c-0"]{content:"kSknSn,"}/*!sc*/
         .gHVWEl{display:none;position:fixed;margin-top:4.25rem;padding:1.5rem 0rem 1.5rem 0rem;height:100vh;inset:0;background-color:#FFFFFF;z-index:22;}/*!sc*/
         @media (hover:hover) and (pointer:fine){.gHVWEl{margin-top:4rem;}}/*!sc*/
         @media (min-width:48rem){.gHVWEl{display:initial;top:0;right:0;left:100%;width:21rem;height:var(--flyout-height);margin-top:var(--flyout-margin-top);-webkit-transition:left 0.3s ease;transition:left 0.3s ease;padding-top:1.5rem;}.gHVWEl .sc-4b5a4535-0{box-shadow:unset;position:unset;padding:0;opacity:0;}}/*!sc*/
         data-styled.g166[id="sc-86e8dd6c-1"]{content:"gHVWEl,"}/*!sc*/
         .kJMsPW{position:relative;width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;min-height:2.75rem;padding:1rem 0rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:none;-webkit-transition:none;transition:none;pointer-events:auto;-webkit-text-decoration:none;text-decoration:none;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none;-webkit-line-clamp:2;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;}/*!sc*/
         .kJMsPW.kJMsPW{color:#000000;line-height:24px;font-size:16px;font-weight:400;}/*!sc*/
         .kJMsPW.kJMsPW:before{content:'';height:1.5rem;box-sizing:border-box;position:absolute;top:1rem;left:1px;right:1px;border:1px solid rgba(255,255,255,0);outline:1px solid rgba(255,255,255,0);}/*!sc*/
         .kJMsPW:after{content:'';position:absolute;bottom:0px;left:0;right:0;height:0.25rem;}/*!sc*/
         .kJMsPW:link{-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
         @media (hover:hover) and (pointer:fine){.kJMsPW:hover{-webkit-tap-highlight-color:transparent;}.kJMsPW:hover:after{background-color:#B4B4B4;}}/*!sc*/
         .kJMsPW.kJMsPW:focus-visible.kJMsPW.kJMsPW:focus-visible:before{border:1px solid #376EB4;outline:1px solid #376EB4;}/*!sc*/
         .kJMsPW:active:after{background-color:#3D3D3D;}/*!sc*/
         data-styled.g171[id="sc-955e2100-0"]{content:"kJMsPW,"}/*!sc*/
         .hvXFzQ{padding:1.5rem 0;-webkit-transition:height,min-height 0.2s ease-in-out;transition:height,min-height 0.2s ease-in-out;box-sizing:content-box;}/*!sc*/
         @media (min-width:64rem){.hvXFzQ{display:grid;grid-template-rows:var(--first-level-nav-height,56px);-webkit-transition-delay:var(--animation-duration);transition-delay:var(--animation-duration);-webkit-transition-property:grid-template-rows;transition-property:grid-template-rows;-webkit-transition-duration:var(--animation-duration);transition-duration:var(--animation-duration);padding:0;}.hvXFzQ > div{width:100%;position:unset;}}/*!sc*/
         data-styled.g173[id="sc-587a74fb-0"]{content:"hvXFzQ,"}/*!sc*/
         .eyicku{width:37.5rem;}/*!sc*/
         data-styled.g174[id="sc-587a74fb-1"]{content:"eyicku,"}/*!sc*/
         .bGWSFJ{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex:1;-ms-flex:1;flex:1;height:12.5rem;}/*!sc*/
         .bGWSFJ .search-animated-logo{position:absolute;bottom:-91px;margin-top:unset;right:1.5rem;}/*!sc*/
         data-styled.g175[id="sc-587a74fb-2"]{content:"bGWSFJ,"}/*!sc*/
         .kkEfFy{width:100%;padding:1.5rem 0;background-color:#F1F1F1;margin-top:auto;}/*!sc*/
         @media (min-width:64rem){.kkEfFy{display:none;}}/*!sc*/
         data-styled.g176[id="sc-6df84c7d-0"]{content:"kkEfFy,"}/*!sc*/
         @media (min-width:375px){.kGearL .basket{display:none;}}/*!sc*/
         @media (min-width:48rem){.kGearL > button{display:none;}}/*!sc*/
         data-styled.g177[id="sc-6df84c7d-1"]{content:"kGearL,"}/*!sc*/
         .kxtfEE{margin:0;padding:0;}/*!sc*/
         data-styled.g178[id="sc-6df84c7d-2"]{content:"kxtfEE,"}/*!sc*/
         .dwrTHV{height:var(--flyout-height);margin-top:var(--flyout-margin-top);background-color:rgba(0,0,0,0);-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease;width:100%;z-index:98;display:none;position:fixed;pointer-events:none;}/*!sc*/
         @media (min-width:48rem){.dwrTHV{display:initial;}}/*!sc*/
         @media (min-width:64rem){.dwrTHV{display:none;}}/*!sc*/
         data-styled.g179[id="sc-e5ce6e88-0"]{content:"dwrTHV,"}/*!sc*/
         .fqYYmq{height:var(--flyout-margin-top);padding-top:var(--flyout-margin-top);-webkit-transition:height 0.3s ease;transition:height 0.3s ease;-webkit-transition-delay:0.3s;transition-delay:0.3s;width:100%;background-color:#FFFFFF;position:fixed;z-index:98;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-bottom:var(--safe-area-inset-bottom);box-shadow:0 3px 12px 0 rgba(0,0,0,0.2);-webkit-clip-path:inset(0 0 -12px 0);clip-path:inset(0 0 -12px 0);overflow:hidden auto;}/*!sc*/
         @media (min-width:48rem){.fqYYmq{width:21rem;right:-21rem;-webkit-transition:right 0.3s ease;transition:right 0.3s ease;-webkit-transition-delay:var(--animation-duration);transition-delay:var(--animation-duration);box-shadow:none;}}/*!sc*/
         @media (min-width:64rem){.fqYYmq{padding-bottom:0;padding-top:0;right:0;margin-top:0;z-index:97;width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;max-height:initial;position:relative;box-shadow:0 3px 12px 0 rgba(0,0,0,0.2);-webkit-clip-path:none;clip-path:none;overflow:visible;}}/*!sc*/
         data-styled.g180[id="sc-e5ce6e88-1"]{content:"fqYYmq,"}/*!sc*/
         @-webkit-keyframes kjMjtU{0%{margin-top:0;}100%{margin-top:4rem;}}/*!sc*/
         @keyframes kjMjtU{0%{margin-top:0;}100%{margin-top:4rem;}}/*!sc*/
         data-styled.g394[id="sc-keyframes-kjMjtU"]{content:"kjMjtU,"}/*!sc*/
         @-webkit-keyframes kemfJm{0%{opacity:0;margin:0 -2rem 0 2rem;}100%{opacity:1;margin:0;}}/*!sc*/
         @keyframes kemfJm{0%{opacity:0;margin:0 -2rem 0 2rem;}100%{opacity:1;margin:0;}}/*!sc*/
         data-styled.g395[id="sc-keyframes-kemfJm"]{content:"kemfJm,"}/*!sc*/
         @-webkit-keyframes dXAZWi{0%{opacity:1;margin:0;}100%{opacity:0;margin:0 -2rem 0 2rem;}}/*!sc*/
         @keyframes dXAZWi{0%{opacity:1;margin:0;}100%{opacity:0;margin:0 -2rem 0 2rem;}}/*!sc*/
         data-styled.g396[id="sc-keyframes-dXAZWi"]{content:"dXAZWi,"}/*!sc*/
         `}
        </style>
      </Head>

      {/* root placeholder for the app, which we add components to using route data */}
      <div className={`geberit-homepage ${mainClassPageEditing}`}>
        <header>
          <div id="header">{route && <Placeholder name="headless-header" rendering={route} />}</div>
        </header>
        <main>
          <div id="content">{route && <Placeholder name="headless-main" rendering={route} />}</div>
        </main>
        <footer className="bg-light pt-5">
          <div id="footer">{route && <Placeholder name="headless-footer" rendering={route} />}</div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
