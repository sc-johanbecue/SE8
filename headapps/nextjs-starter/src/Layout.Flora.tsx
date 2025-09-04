/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-sync-scripts */
/**
 * This Layout is needed for Starter Kit.
 */
import React from 'react';
import Head from 'next/head';
import { Placeholder, LayoutServiceData, Field, HTMLLink } from '@sitecore-jss/sitecore-jss-nextjs';
import config from 'temp/config';
import Scripts from 'src/Scripts';
import Script from 'next/script';

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

  // useEffect(() => {
  //   document.body.classList.add('default-device');
  //   document.body.classList.add('bodyclass');
  //   document.body.classList.add('has-meta-nav');
  //   document.body.classList.add('has-globalHeader-nav');
  //   document.body.classList.add('removeheaderHeight');
  // });

  let paddingTop = { paddingTop: '0px' };
  if (route?.placeholders?.['headless-main'].length == 0) {
    paddingTop = { paddingTop: '130px' };
  }

  return (
    <>
      <Scripts />
      <Head>
        <title>{fields?.Title?.value?.toString() || 'Page'}</title>
        <link rel="icon" href={`${publicUrl}/favicon.ico`} />
        {headLinks.map((headLink) => (
          <link rel={headLink.rel} key={headLink.href} href={headLink.href} />
        ))}

        <link
          href="https://www.violife.com/en-us/-/media/Feature/Experience-Accelerator/Bootstrap-4/Bootstrap-4/Styles/optimized-min.css?revision=c791701c12314a028642b552c9df5f71&amp;t=20230118T052108Z"
          rel="stylesheet"
        />
        <link
          href="https://www.violife.com/en-us/-/media/Base-Themes/Core-Libraries/styles/optimized-min.css?revision=42170b6797b142e99f29e0370ed88a35&amp;t=20241110T130905Z"
          rel="stylesheet"
        />
        <link
          href="https://www.violife.com/en-us/-/media/Base-Themes/Main-Theme/styles/optimized-min.css?revision=a1d613ab282641808e9ed1482abaa9e7&amp;t=20241110T130935Z"
          rel="stylesheet"
        />
        <link
          href="https://www.violife.com/en-us/-/media/Themes/Upfield/Whitelabels/Whitelabel/Whitelabel/Styles/optimized-min.css?revision=6548e87ee986487fb19869a8aad9baf4&amp;t=20250828T030128Z"
          rel="stylesheet"
        />
        <link
          href="https://www.violife.com/en-us/-/media/Themes/Upfield/Brands/Violife-Foods/Violife-Foods-Global/styles/optimized-min.css?revision=6e25b344abb548c1a83aa099e927e567&amp;t=20250828T033247Z"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://c.evidon.com" />
        <link rel="preconnect" href="https://apps.bazaarvoice.com" />
        <link rel="preconnect" href="https://f.vimeocdn.com" />

        <meta
          name="google-site-verification"
          content="0xpyUT2MXEiowQ4aY8tb0PZ9py-SxAgDYUfqryhq8RM"
        />
        <meta name="Title" content="Delicious dairy free cheese | Violife" />
        <link
          href="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Logos/favicon-32x32-V2.png?rev=fbb4b8aaad9e4f8cb582cb6bd187c357"
          rel="shortcut icon"
        />
        <meta
          property="og:description"
          content="Dairy free cheese that brings bold flavor and fierce melt to all your dishes. Melty, stretchy, creamy bites - all made easy. Utterly irresistible!"
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Violife Foods" />
        <meta
          property="og:image"
          content="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/About-us/violife-range720x405.png?rev=a6bc6c00f6c643b8b9d61fd5ff617791"
        />
        <meta property="og:title" content="Delicious dairy free cheese" />
        <meta property="og:url" content="https://www.violife.com/en-us" />
        <meta
          name="description"
          content="Dairy free cheese that brings bold flavor and fierce melt to all your dishes. Melty, stretchy, creamy bites - all made easy. Utterly irresistible!"
        />
        <meta name="keywords" content="Dairy free, Dairy free cheese" />
        <meta
          property="twitter:image"
          content="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/About-us/violife-range720x405.png?rev=a6bc6c00f6c643b8b9d61fd5ff617791"
        />
        <meta
          property="twitter:description"
          content="Dairy free cheese that brings bold flavor and fierce melt to all your dishes. Melty, stretchy, creamy bites - all made easy. Utterly irresistible!"
        />
        <meta property="twitter:title" content="Delicious dairy free cheese" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.violife.com/en-us" />
        <style jsx>
          {`
            :root {
              --brand-color-3: black;
              --social-post-link-color: var(--brand-color-3);
              --brand-color-3: black;
              --social-post-text-color: var(--brand-color-3);
              --pattern: url('/en-us/-/media/Themes/Upfield/Whitelabels/Whitelabel/Whitelabel/Images/bg-pattern.jpg?rev=-1');
            }
          `}
        </style>

        <meta name="robots" content="index, follow" />

        <script src="https://www.youtube.com/iframe_api" />
        <script src="https://player.vimeo.com/api/player.js" />
      </Head>
      <div className="component skip-to-main-content hidden-print">
        <div className="component-content">
          <ul role="list">
            <li role="listitem">
              <a href="#content" className="skip-link">
                <strong>Skip to main content</strong>
              </a>
            </li>
            <li role="listitem">
              <a href="#footer" className="skip-link">
                <strong>Skip to footer</strong>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="accessibility-labels d-none">
        <div className="carousel-controls">
          <span id="previous-arrow-label">Previous slide</span>
          <span id="next-arrow-label">Next slide</span>
          <span id="bullet-label">Carousel slide</span>
          <span id="pause-label">Pause slide movement</span>
          <span id="resume-label">Resume slide movement</span>
        </div>
        <div className="tab-controls">
          <span id="tab-label">use left or right arrow keys to navigate the tab,</span>
        </div>
        <div className="pagination-controls">
          <span id="pagination-page-label">Page</span>
          <span id="pagination-firstpage-label">First page</span>
          <span id="pagination-lastpage-label">Last page</span>
          <span id="pagination-morepages-label">More pages</span>
          <span id="pagination-nextpage-label">Next page</span>
          <span id="pagination-previouspage-label">Previous page</span>
        </div>
        <div className="togglebtn-controls">
          <span id="toggle-button-label">
            Press Enter or Space to expand or collapse and use down arrow to navigate to the tab
            content
          </span>
        </div>
        <div className="menu-close-button">
          <span id="menu-close-button-label">close menu</span>
          <span id="menu-open-button-label">open menu</span>
        </div>
        <div className="recipe-card-controls">
          <span id="recipe-card-tooltip-label">Click to read more about this recipe</span>
        </div>
        <div className="checklist-controls">
          <span id="checklist-tick-label">Includes</span>
        </div>
      </div>
      <div id="wrapper" className={mainClassPageEditing}>
        <header>
          <div>{route && <Placeholder name="headless-header" rendering={route} />}</div>
        </header>
        <main>
          <div id="content" style={paddingTop}>
            {route && <Placeholder name="headless-main" rendering={route} />}
          </div>
        </main>
        <footer id="footer-global">
          <div>{route && <Placeholder name="headless-footer" rendering={route} />}</div>
        </footer>
      </div>
      <section
        className="social-feed-popup-manager"
        tabIndex={-1}
        role="dialog"
        aria-label="Instagram post dialog"
      >
        <a className="popup-close" role="button" aria-label="" tabIndex={0}>
          <svg
            className="cancel-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 920"
            width="24"
            height="24"
            fill="#fff"
          >
            <path
              transform="scale(1,-1) translate(0,-850)"
              d="M654 349l346-346-154-154-346 346-346-346-154 154 346 346-346 346 154 154 346-346 346 346 154-154z"
            ></path>
          </svg>
        </a>
        <div className="popup-wrapper">
          <div className="popup-container">
            <div className="popup-content-wrapper">
              <a className="previous-post" role="button" aria-label="" tabIndex={0}></a>
              <div className="popup-left-container"></div>
              <div className="popup-right-container">
                <div className="popup-header"></div>
                <div className="popup-text"></div>
                <div className="popup-bottom-container">
                  <div className="popup-read-more"></div>
                  <div className="popup-footer"></div>
                </div>
              </div>
              <a className="next-post" role="button" aria-label="" tabIndex={0}></a>
            </div>
          </div>
        </div>
      </section>
      <Script
        src="https://www.violife.com/en-us/-/media/Themes/Upfield/Brands/Violife-Foods/Violife-Foods-Global/scripts/optimized-min.js?revision=8ac0667bcbac4dfa82d918891d4bd969&amp;t=20250828T031244Z"
        strategy="afterInteractive"
      />
      {/* <!-- /#wrapper --> */}
      <div className="overlay-wrapper">
        <div className="overlay component">
          <div className="component-content" role="dialog" style={{ maxHeight: '485.9px' }}>
            <div className="overlay-inner"></div>
            <div className="overlay-close" role="button" aria-label="Close dialog"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
