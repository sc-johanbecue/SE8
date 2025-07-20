/**
 * This Layout is needed for Starter Kit.
 */
import React from 'react';
import Head from 'next/head';
import {
  LayoutServiceData,
  Field,
  HTMLLink,
  ImageField,
  Placeholder,
} from '@sitecore-jss/sitecore-jss-nextjs';
import config from 'temp/config';
import Scripts from 'src/Scripts';
import AldarHeader from 'components/Aldar/AldarHeader';
import AldarFooter from 'components/Aldar/AldarFooter';
import Link from 'next/link';

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
  const direction = layoutData.sitecore.context.language === 'ar-SA' ? 'rtl' : 'ltr';

  return (
    <>
      <Scripts />
      <Head>
        <title>{fields?.Title?.value?.toString() || 'Page'}</title>
        <link rel="icon" href={`${publicUrl}/favicon.ico`} />
        {headLinks.map((headLink) => (
          <link rel={headLink.rel} key={headLink.href} href={headLink.href} />
        ))}
        <link rel="canonical" href={publicUrl} />
        <meta property="og:title" content={fields?.OgTitle?.value?.toString()} />
        <meta property="og:description" content={fields?.OgDescription?.value?.toString()} />
        <meta property="og:image" content={fields?.OgImage?.value?.src?.toString()} />
        <meta property="og:type" content={route?.templateName} data-attr="JSS-21.6.0" />

        <link
          href="https://cdn.aldar.com/-/media/feature/aldar-tenant/aldar-bootstrap-4/aldar-bootstrap-4/styles/optimized-min.css?rev=a0845e903cf246a0888a3f2c0c611abb&t=20210113T201624Z"
          rel="stylesheet"
        />
        <link
          href="https://cdn.aldar.com/-/media/base-themes/core-libraries/styles/optimized-min.css?rev=07b88e8c80f9474884b6bc319be25a7e&t=20201010T213053Z"
          rel="stylesheet"
        />
        <link
          href="https://cdn.aldar.com/-/media/base-themes/main-theme/styles/optimized-min.css?rev=e1a000ae24164edab6292316c6666b86&t=20201010T213056Z"
          rel="stylesheet"
        />
        <link
          href="https://cdn.aldar.com/-/media/themes/aldar-tenant/global/aldar/styles/pre-optimized-min.css?rev=035944b5004e4f5f865ace7a151534c2&sc_lang=en&t=20231027T130735Z"
          rel="stylesheet"
        />

        <link
          href="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/favicons/favicon-taskbar.png?rev=60f93a907eff4fcaa251f387b209c17a"
          rel="shortcut icon"
        />
        <meta property="og:url" content="https://www.aldar.com/en" />
        <meta
          name="description"
          content="Aldar offers UAE residents and investors a range of premium properties and real estate services. Explore our villas, apartments, and offices in Abu Dhabi.        "
        />
        <meta property="twitter:title" content="Home" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style
          id="bodyhtmlStyle"
          dangerouslySetInnerHTML={{
            __html: `
                body, html
                {
                    overflow-x: initial!important;
                    overflow-y: initial!important;
                }
          `,
          }}
        ></style>
      </Head>

      {/* root placeholder for the app, which we add components to using route data */}
      <div className={mainClassPageEditing} dir={direction}>
        <AldarHeader></AldarHeader>
        {/* <header>
          <div id="header">{route && <Placeholder name="headless-header" rendering={route} />}</div>
        </header> */}
        <main>
          <div id="content" className="container-fluid no-padding">
            <div className="component container full-width">
              <div className="component-content">
                {route && <Placeholder name="headless-main" rendering={route} />}
              </div>
            </div>
            <div className="component popup-component">
              <div className="component-content">
                <template id="mediaVideoTemplate">
                  <div
                    className="video-popup media-popup popup c d-flex align-items-center justify-content-center active"
                    id="mediaVideo-popup"
                  >
                    <button className="video-popup__close body-text-bold-15 media-popup__close">
                      <i className="close-icon"></i>
                      Close
                    </button>
                    <div className="component video">
                      <div className="component-content">
                        <div className="sxa-video-wrapper">VIDEO_PLACEHOLDER</div>
                        <div className="video-caption"></div>
                      </div>
                    </div>
                  </div>
                </template>
                <template id="mediaGalleryTemplate">
                  <div
                    className="gallery-popup media-popup popup d-flex align-items-center justify-content-center active"
                    id="mediaGallery-popup"
                  >
                    <button className="popup__close body-text-bold-15 media-popup__close">
                      <i className="close-icon"></i> Close
                    </button>
                    <div className="gallery-popup__holder">
                      <div
                        className="swiper-container gallery-popup__carousel"
                        data-swiperconfig="galleryPopup"
                      >
                        <div className="swiper-wrapper">ITEMS_PLACEHOLDER</div>
                      </div>
                      <div className="o-button-group">
                        <a
                          className="o-button -left -white swiper-button-prev carousel-button__prev"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          <span className="o-button_label"></span>
                        </a>
                        <a
                          className="o-button -white swiper-button-next carousel-button__next"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          <span className="o-button_label"></span>
                        </a>
                      </div>
                      360BUTTON_PLACEHOLDER
                    </div>
                  </div>
                </template>
                <template id="mediaGalleryItemTemplate">
                  <div className="swiper-slide">
                    <div className="gallery-popup__item">
                      <figure>
                        <img src="IMAGE_PLACEHOLDER" alt="" />

                        <Link href="" className="gallery-popup__item-zoom">
                          {/* onClick={() => zoomImage(this)} */}
                        </Link>
                      </figure>
                      <div className="gallery-popup__inner">
                        <h5 className="h5 gallery-popup__title">TITLE_PLACEHOLDER</h5>
                        <p className="body-text-18 gallery-popup__desc">DESC_PLACEHOLDER</p>
                      </div>
                    </div>
                  </div>
                </template>
                <template id="mediaGallery360ItemTemplate">
                  <div className="swiper-slide">
                    <div className="gallery-popup__item gallery-popup__item--360">
                      {/* <iframe src="URL_PLACEHOLDER" width="949" height="606"></iframe> */}
                    </div>
                  </div>
                </template>
                <template id="mediaGellery360ButtonTemplate">
                  <div className="gallery-popup__360">
                    <Link href="" className="o-button -white view360">
                      <span className="o-button_label"> 360 View</span>
                      <div className="o-button_line"></div>
                      <div className="o-button_line"></div>
                    </Link>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </main>
        {/* <main>
          <div id="content">{route && <Placeholder name="headless-main" rendering={route} />}</div>
        </main> */}
        <AldarFooter></AldarFooter>
        {/* <footer>
          <div id="footer">{route && <Placeholder name="headless-footer" rendering={route} />}</div>
        </footer> */}
      </div>
      <script
        defer
        src="https://www.aldar.com/sitecore%20modules/Web/ExperienceForms/scripts/jquery-3.6.0.min.js?v=1"
      ></script>
      <script
        defer
        src="https://www.aldar.com/sitecore%20modules/Web/ExperienceForms/scripts/jquery.validate.min.js?v=1"
      ></script>
      <script
        defer
        src="https://www.aldar.com/sitecore%20modules/Web/ExperienceForms/scripts/jquery.validate.unobtrusive.min.js?v=1"
      ></script>
      <script
        defer
        src="https://www.aldar.com/sitecore%20modules/Web/ExperienceForms/scripts/jquery.unobtrusive-ajax.min.js"
      ></script>
      <script
        defer
        src="https://www.aldar.com/sitecore%20modules/Web/ExperienceForms/scripts/form.validate.js?v=3"
      ></script>
      <script
        defer
        src="https://www.aldar.com/sitecore%20modules/Web/ExperienceForms/scripts/form.tracking.js"
      ></script>
      <script
        defer
        src="https://www.aldar.com/sitecore%20modules/Web/ExperienceForms/scripts/form.conditions.js"
      ></script>
      <script
        defer
        src="https://www.aldar.com/sitecore%20modules/Web/ExperienceForms/scripts/formsextensions.validate.js"
      ></script>
      <script
        defer
        src="https://cdn.aldar.com/-/media/base-themes/core-libraries/scripts/optimized-min.js?rev=6165373d2ce14cf7ad4c8a9b5d8b2b2a&t=20230810T074042Z"
      ></script>
      <script
        defer
        src="https://cdn.aldar.com/-/media/base-themes/xa-api/scripts/optimized-min.js?rev=ea3fad816cdb44cca61914013790300b&t=20201010T213054Z"
      ></script>
      <script
        defer
        src="https://cdn.aldar.com/-/media/base-themes/main-theme/scripts/optimized-min.js?rev=c0982cd79aaf4e2ea7f12615308a3f8c&t=20201010T213055Z"
      ></script>
      <script
        defer
        src="https://cdn.aldar.com/-/media/base-themes/google-maps-js-connector/scripts/optimized-min.js?rev=d6654e8cb137491d83b07bc20925095a&t=20201010T213056Z"
      ></script>
      <script
        defer
        src="https://cdn.aldar.com/-/media/base-themes/maps/scripts/optimized-min.js?rev=131bf95750bc4ce28626bae7ad97fa89&t=20201010T213057Z"
      ></script>
      <script
        defer
        src="https://cdn.aldar.com/-/media/base-themes/searchtheme/scripts/optimized-min.js?rev=6cb361a96e444ae1aac45fa7bcd22bee&t=20201010T213058Z"
      ></script>
      <script
        defer
        src="https://cdn.aldar.com/-/media/base-themes/components-theme/scripts/optimized-min.js?rev=d0f06bc707bc4134b79194c16d7181a2&t=20201010T213059Z"
      ></script>
      <script
        defer
        src="https://cdn.aldar.com/-/media/base-themes/resolve-conflicts/scripts/optimized-min.js?rev=150808b4a1df41e68ccfca0bc3d7f105&t=20201010T213059Z"
      ></script>
      <script
        defer
        src="https://cdn.aldar.com/-/media/themes/aldar-tenant/global/aldar/scripts/optimized-min.js?rev=b7c252edce3c466298971f1b414116e5&t=20240206T151823Z"
      ></script>
    </>
  );
};

export default Layout;
