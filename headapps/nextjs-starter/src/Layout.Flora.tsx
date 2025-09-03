/* eslint-disable @next/next/no-sync-scripts */
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
    document.body.classList.add('default-device');
    document.body.classList.add('bodyclass');
    document.body.classList.add('has-meta-nav');
    document.body.classList.add('has-globalHeader-nav');
    document.body.classList.add('removeheaderHeight');
  });

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
          <div id="content" className="">
            {route && <Placeholder name="headless-main" rendering={route} />}
            <div className="component container layout--fluid container--no-padding">
              <div className="component-content">
                <div className="component promo component-content combined-mask-layer animate-section layout--fluid already-visible">
                  <div className="component-content">
                    <div className="pattern-img">
                      <img
                        alt="Violife"
                        fetchPriority="high"
                        src="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Logos/curve-bottom-thick.svg?rev=5906f4b3bf0b48c48618996f49d2dbb9"
                      />
                    </div>
                    <div className="component-content mask-element" style={{ maskImage: 'url()' }}>
                      <div className="component-content mask-element">
                        <div className="component hero hero--outset">
                          <div className="component-content">
                            <div id="video-full-width">
                              <section className="hero-section">
                                <div className="custom-video">
                                  <div className="custom-video">
                                    <video
                                      id="cor-home-video"
                                      className="lazy-bg-video"
                                      autoPlay
                                      muted
                                      loop
                                      controlsList="nodownload"
                                      playsInline
                                      height="100%"
                                      width="100%"
                                    >
                                      <source
                                        type="video/mp4"
                                        src="https://www.assets.digitalupfield.com/asset/d397344e-424e-4a2a-a1cd-1a036f5dfc12/mp4/homepage-vegetarian-cheesecake.mp4"
                                      />
                                    </video>
                                  </div>
                                </div>
                                <div className="hero-content">
                                  <div></div>
                                  <h1 className="field-title field-title">Dairy free indulgence</h1>
                                  <div className="cta-section">
                                    <div className="btn btn-primary field-link1">
                                      <a
                                        className="bt bt-primary"
                                        data-variantfieldname="Link1"
                                        title="Savor now"
                                        href="https://www.violife.com/en-us/products"
                                        data-variantitemid="{7EFB37C5-72DD-48EF-9A07-4D851824BC10}"
                                      >
                                        Savor now
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </section>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="component container layout--fluid container--no-padding"
              id="footer-background-image"
            >
              <div className="component-content"></div>
            </div>

            <div className="component container layout--fluid container--no-padding padding-bottom-m">
              <div className="component-content">
                <div className="component container layout--fluid container--no-padding padding-bottom-m">
                  <div className="component-content">
                    <div className="component container layout--fluid">
                      <div className="component-content"></div>
                    </div>
                    <div className="component rich-text padding-top-m">
                      <div className="component-content">
                        <h2 style={{ textAlign: 'center' }}>NEW ON THE MENU</h2>
                        <p style={{ textAlign: 'center' }}>
                          Temptingly delicious dairy free coffee creamers!
                        </p>
                      </div>
                    </div>
                    <div className="component container layout--fluid">
                      <div className="component-content">
                        <div className="component content">
                          <div className="component-content">
                            <div className="component page-list packshot-3-card-component 3-card-packshot">
                              <ul className="items" role="list">
                                <li className="item" role="listitem">
                                  <div className="Packshot-card">
                                    <div className="field-item-link">
                                      <a
                                        data-variantfieldname="Item Link"
                                        href="https://www.violife.com/en-us/products/dairy-free-coffee-creamers/vanilla-coffee-creamer"
                                        data-variantitemid="{E11F902D-13D4-4E5E-8767-7210F844D903}"
                                      >
                                        Tempting Vanilla Coffee Creamer
                                      </a>
                                    </div>
                                    <div className="packshot-card-img-container">
                                      <div className="product-card-img">
                                        <img
                                          alt="Supreme Sweet Cream Tempting Vanilla"
                                          sizes="(max-width: 1900px)100vw,(max-width: 1200px) 50vw, (max-width: 992px) 50vw, (max-width: 768px) 50vw, (max-width: 576px) 100vw"
                                          src="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/tempting-vanilla-supreme-sweet-cream.png?rev=0a0072a16d83454eaf2b85d76c045d71&amp;w=533"
                                          srcSet="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/tempting-vanilla-supreme-sweet-cream.png?rev=0a0072a16d83454eaf2b85d76c045d71&amp;w=533 533w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/tempting-vanilla-supreme-sweet-cream.png?rev=0a0072a16d83454eaf2b85d76c045d71&amp;w=320 320w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/tempting-vanilla-supreme-sweet-cream.png?rev=0a0072a16d83454eaf2b85d76c045d71&amp;w=250 250w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/tempting-vanilla-supreme-sweet-cream.png?rev=0a0072a16d83454eaf2b85d76c045d71&amp;w=738 738w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/tempting-vanilla-supreme-sweet-cream.png?rev=0a0072a16d83454eaf2b85d76c045d71&amp;w=546 546w"
                                        />
                                        <div className="custom-video">
                                          <video
                                            id="cor-home-video"
                                            className="lazy-bg-video"
                                            autoPlay
                                            muted
                                            loop
                                            controlsList="nodownload"
                                            playsInline
                                            height="100%"
                                            width="100%"
                                          >
                                            <source
                                              src="https://www.assets.digitalupfield.com/asset/29abbf2c-b5ec-4bcc-84a0-c69854386fb7/mp4/violife-supreme-sweet-cream-tempting-vanilla.mp4"
                                              type="video/mp4"
                                            />
                                          </video>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="product-card-text">
                                      <h3 className="product-card-title field-title field-item-title">
                                        SUPREME SWEET CREAM
                                      </h3>
                                      <h4 className="product-card-title field-title field-item-heading">
                                        TEMPTING VANILLA
                                      </h4>
                                      <div className="field-link">
                                        <a
                                          className="overlay-source custom-popup violife-store-new initialized"
                                          data-variantfieldname="Link"
                                          title="Buy at"
                                          href="https://www.violife.com/en-us/store-locator"
                                          data-variantitemid="{9C1C89E4-CE50-4EB4-9193-673056951A95}"
                                          role="button"
                                        >
                                          Buy at
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li className="item active" role="listitem">
                                  <div className="Packshot-card">
                                    <div className="field-item-link">
                                      <a
                                        data-variantfieldname="Item Link"
                                        href="https://www.violife.com/en-us/products/dairy-free-coffee-creamers/caramel-coffee-creamer"
                                        data-variantitemid="{AB8FD74F-B961-4F9F-929B-4A4635241C4F}"
                                      >
                                        Caramel Coffee Creamer
                                      </a>
                                    </div>
                                    <div className="packshot-card-img-container">
                                      <div className="product-card-img">
                                        <img
                                          alt="Supreme Sweet Cream Seductive Caramel"
                                          sizes="(max-width: 1900px)100vw,(max-width: 1200px) 50vw, (max-width: 992px) 50vw, (max-width: 768px) 50vw, (max-width: 576px) 100vw"
                                          src="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/seductive-caramel-supreme-sweet-cream.png?rev=0660f7b5e92a49ae8652e30f32d2ca2a&amp;w=533"
                                          srcSet="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/seductive-caramel-supreme-sweet-cream.png?rev=0660f7b5e92a49ae8652e30f32d2ca2a&amp;w=533 533w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/seductive-caramel-supreme-sweet-cream.png?rev=0660f7b5e92a49ae8652e30f32d2ca2a&amp;w=320 320w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/seductive-caramel-supreme-sweet-cream.png?rev=0660f7b5e92a49ae8652e30f32d2ca2a&amp;w=250 250w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/seductive-caramel-supreme-sweet-cream.png?rev=0660f7b5e92a49ae8652e30f32d2ca2a&amp;w=738 738w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/seductive-caramel-supreme-sweet-cream.png?rev=0660f7b5e92a49ae8652e30f32d2ca2a&amp;w=546 546w"
                                        />
                                        <div className="custom-video">
                                          <video
                                            id="cor-home-video"
                                            className="lazy-bg-video"
                                            autoPlay
                                            muted
                                            loop
                                            controlsList="nodownload"
                                            playsInline
                                            height="100%"
                                            width="100%"
                                          >
                                            <source
                                              src="https://www.assets.digitalupfield.com/asset/b997ccd2-f239-4055-a7c7-50ce38f6efed/mp4/violife-supreme-sweet-cream-seductive-caramel.mp4"
                                              type="video/mp4"
                                            />
                                          </video>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="product-card-text">
                                      <h3 className="product-card-title field-title field-item-title">
                                        SUPREME SWEET CREAM
                                      </h3>
                                      <h4 className="product-card-title field-title field-item-heading">
                                        SEDUCTIVE CARAMEL
                                      </h4>
                                      <div className="field-link">
                                        <a
                                          className="overlay-source custom-popup violife-store-new initialized"
                                          data-variantfieldname="Link"
                                          title="Buy at"
                                          href="https://www.violife.com/en-us/store-locator"
                                          data-variantitemid="{9C1C89E4-CE50-4EB4-9193-673056951A95}"
                                          role="button"
                                        >
                                          Buy at
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li className="item" role="listitem">
                                  <div className="Packshot-card">
                                    <div className="field-item-link">
                                      <a
                                        data-variantfieldname="Item Link"
                                        href="https://www.violife.com/en-us/products/dairy-free-coffee-creamers/original-coffee-creamer"
                                        data-variantitemid="{F9E69E82-0CE2-45F8-8A01-1068474EA429}"
                                      >
                                        Boldly Original Coffee Creamer
                                      </a>
                                    </div>
                                    <div className="packshot-card-img-container">
                                      <div className="product-card-img">
                                        <img
                                          alt="Supreme Sweet Cream Boldly Original"
                                          sizes="(max-width: 1900px)100vw,(max-width: 1200px) 50vw, (max-width: 992px) 50vw, (max-width: 768px) 50vw, (max-width: 576px) 100vw"
                                          src="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/boldly-original-supreme-sweet-cream.png?rev=ae02ce6454ae44feaa81bd8a88fa5521&amp;w=533"
                                          srcSet="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/boldly-original-supreme-sweet-cream.png?rev=ae02ce6454ae44feaa81bd8a88fa5521&amp;w=533 533w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/boldly-original-supreme-sweet-cream.png?rev=ae02ce6454ae44feaa81bd8a88fa5521&amp;w=320 320w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/boldly-original-supreme-sweet-cream.png?rev=ae02ce6454ae44feaa81bd8a88fa5521&amp;w=250 250w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/boldly-original-supreme-sweet-cream.png?rev=ae02ce6454ae44feaa81bd8a88fa5521&amp;w=738 738w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/boldly-original-supreme-sweet-cream.png?rev=ae02ce6454ae44feaa81bd8a88fa5521&amp;w=546 546w"
                                        />
                                        <div className="custom-video">
                                          <video
                                            id="cor-home-video"
                                            className="lazy-bg-video"
                                            autoPlay
                                            muted
                                            loop
                                            controlsList="nodownload"
                                            playsInline
                                            height="100%"
                                            width="100%"
                                          >
                                            <source
                                              src="https://www.assets.digitalupfield.com/asset/8f577132-01f6-45e4-9da6-892da06848f3/mp4/violife-supreme-sweet-cream-boldly-original.mp4"
                                              type="video/mp4"
                                            />
                                          </video>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="product-card-text">
                                      <h3 className="product-card-title field-title field-item-title">
                                        SUPREME SWEET CREAM
                                      </h3>
                                      <h4 className="product-card-title field-title field-item-heading">
                                        BOLDLY ORIGINAL
                                      </h4>
                                      <div className="field-link">
                                        <a
                                          className="overlay-source custom-popup violife-store-new initialized"
                                          data-variantfieldname="Link"
                                          title="Buy at"
                                          href="https://www.violife.com/en-us/store-locator"
                                          data-variantitemid="{9C1C89E4-CE50-4EB4-9193-673056951A95}"
                                          role="button"
                                        >
                                          Buy at
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="component link text-align-center">
                          <div className="component-content">
                            <div className="field-link">
                              <a
                                className="btn btn-primary"
                                data-variantfieldname="Link"
                                title="Discover coffee creamers"
                                href="https://www.violife.com/en-us/products/dairy-free-coffee-creamers"
                                data-variantitemid="{E193304B-CFCA-47E2-85E1-61BE65ED5884}"
                              >
                                Discover coffee creamers
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="component container padding-bottom-l padding-top-l">
                      <div className="component-content">
                        <div className="row component column-splitter">
                          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 padding-bottom-m padding-top-m"></div>
                          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3"></div>
                          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3"></div>
                          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                            <div className="component image">
                              <div className="component-content">
                                <img
                                  alt="Free from dairy, soy, gluten, lactose, nuts, artificial preservatives"
                                  src="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/free-from.png?rev=9396b38afb754fe1b26327f3b2d3b257"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <section className="component container-fullwidth-padding">
                  <div className="component-content">
                    <div className="component content component-content animate-section layout--fluid padding-bottom-xl padding-top-m">
                      <div className="component-content">
                        <div className="container play-video-on-hover" id="carousel-on-right">
                          <div className="left">
                            <h2 className="field-list-name">DAIRY FREE CHEESE</h2>
                            <p className="field-list-description"></p>
                            <p>Dairy Free deliciousness? Just a swipe away.</p>
                            <p></p>
                            <div className="btn btn-primary field-list-url">
                              <a
                                data-variantfieldname="List URL"
                                title="Discover all"
                                href="https://www.violife.com/en-us/products"
                                data-variantitemid="{1AA960C7-AA03-44F5-AAA9-F5E09B2F2C18}"
                              >
                                Discover all
                              </a>
                            </div>
                          </div>
                          <div className="right">
                            <div
                              className="component page-list global-product-category recipe-v3 has-bullets-and-arrows toggle-arrows hide-bullets-on-mobile has-slider"
                              dir="ltr"
                            >
                              <div className="component-content">
                                <div
                                  className="arrow-left d-none"
                                  tabIndex={0}
                                  role="button"
                                  aria-labelledby="previous-arrow-label"
                                  style={{ bottom: '195.5px' }}
                                ></div>
                                <div
                                  className="arrow-right"
                                  tabIndex={0}
                                  role="button"
                                  aria-labelledby="next-arrow-label"
                                  style={{ bottom: '195.5px' }}
                                ></div>
                                <ul className="items" role="list">
                                  <li className="item" role="listitem">
                                    <div className="field-item-link">
                                      <a
                                        className="btn btn-primary"
                                        data-variantfieldname="Item Link"
                                        title="Dairy free cream cheese"
                                        href="https://www.violife.com/en-us/products/dairy-free-cream-cheese"
                                        data-variantitemid="{F8ADB8E4-570B-4890-B45F-26DCA4367A15}"
                                      >
                                        Learn more
                                      </a>
                                    </div>
                                    <div className="recipe-card-v3">
                                      <div className="recipe-card-image-container">
                                        <div className="recipe-image-wrapper">
                                          <img
                                            alt="Dairy free cream cheese"
                                            sizes="(max-width: 1900px)100vw,(max-width: 1200px) 50vw, (max-width: 992px) 50vw, (max-width: 768px) 50vw, (max-width: 576px) 100vw"
                                            src="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-cream-cheese.png?rev=c9f9d96442c9436baf13a4e0acada94a&amp;w=533"
                                            srcSet="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-cream-cheese.png?rev=c9f9d96442c9436baf13a4e0acada94a&amp;w=533 533w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-cream-cheese.png?rev=c9f9d96442c9436baf13a4e0acada94a&amp;w=320 320w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-cream-cheese.png?rev=c9f9d96442c9436baf13a4e0acada94a&amp;w=250 250w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-cream-cheese.png?rev=c9f9d96442c9436baf13a4e0acada94a&amp;w=738 738w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-cream-cheese.png?rev=c9f9d96442c9436baf13a4e0acada94a&amp;w=546 546w"
                                          />
                                          <div className="custom-video"></div>
                                        </div>
                                      </div>
                                      <div className="recipe-card-content-wrapper">
                                        <h3 className="recipe-card-title field-title field-item-title">
                                          DAIRY FREE CREAM CHEESE
                                        </h3>
                                        <div className="product-card-title field-title field-item-link">
                                          <a
                                            className="btn btn-primary"
                                            data-variantfieldname="Item Link"
                                            title="Dairy free cream cheese"
                                            href="https://www.violife.com/en-us/products/dairy-free-cream-cheese"
                                            data-variantitemid="{F8ADB8E4-570B-4890-B45F-26DCA4367A15}"
                                          >
                                            Learn more
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="item" role="listitem">
                                    <div className="field-item-link">
                                      <a
                                        className="btn btn-primary"
                                        data-variantfieldname="Item Link"
                                        title="Dairy free cheese shreds"
                                        href="https://www.violife.com/en-us/products/dairy-free-cheese-shreds"
                                        data-variantitemid="{BB7B22B4-7928-49CB-96DD-0BD04574EBEE}"
                                      >
                                        Learn more
                                      </a>
                                    </div>
                                    <div className="recipe-card-v3">
                                      <div className="recipe-card-image-container">
                                        <div className="recipe-image-wrapper">
                                          <img
                                            alt="Dairy free shreds"
                                            sizes="(max-width: 1900px)100vw,(max-width: 1200px) 50vw, (max-width: 992px) 50vw, (max-width: 768px) 50vw, (max-width: 576px) 100vw"
                                            src="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-shreds.png?rev=888ef20cfae84fd2b1c8c51b02f13f10&amp;w=533"
                                            srcSet="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-shreds.png?rev=888ef20cfae84fd2b1c8c51b02f13f10&amp;w=533 533w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-shreds.png?rev=888ef20cfae84fd2b1c8c51b02f13f10&amp;w=320 320w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-shreds.png?rev=888ef20cfae84fd2b1c8c51b02f13f10&amp;w=250 250w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-shreds.png?rev=888ef20cfae84fd2b1c8c51b02f13f10&amp;w=738 738w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-shreds.png?rev=888ef20cfae84fd2b1c8c51b02f13f10&amp;w=546 546w"
                                          />
                                          <div className="custom-video"></div>
                                        </div>
                                      </div>
                                      <div className="recipe-card-content-wrapper">
                                        <h3 className="recipe-card-title field-title field-item-title">
                                          DAIRY FREE CHEESE SHREDS
                                        </h3>
                                        <div className="product-card-title field-title field-item-link">
                                          <a
                                            className="btn btn-primary"
                                            data-variantfieldname="Item Link"
                                            title="Dairy free cheese shreds"
                                            href="https://www.violife.com/en-us/products/dairy-free-cheese-shreds"
                                            data-variantitemid="{BB7B22B4-7928-49CB-96DD-0BD04574EBEE}"
                                          >
                                            Learn more
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="item" role="listitem">
                                    <div className="field-item-link">
                                      <a
                                        className="btn btn-primary"
                                        data-variantfieldname="Item Link"
                                        title="Dairy free cheese slices"
                                        href="https://www.violife.com/en-us/products/dairy-free-cheese-slices"
                                        data-variantitemid="{7E1F19AF-691B-427C-B96C-7AACF77EDAD3}"
                                      >
                                        Learn more
                                      </a>
                                    </div>
                                    <div className="recipe-card-v3">
                                      <div className="recipe-card-image-container">
                                        <div className="recipe-image-wrapper">
                                          <img
                                            alt="Dairy free slices"
                                            sizes="(max-width: 1900px)100vw,(max-width: 1200px) 50vw, (max-width: 992px) 50vw, (max-width: 768px) 50vw, (max-width: 576px) 100vw"
                                            src="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-slices.png?rev=e5e2f74c912d41bcbc9724215e596eb8&amp;w=533"
                                            srcSet="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-slices.png?rev=e5e2f74c912d41bcbc9724215e596eb8&amp;w=533 533w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-slices.png?rev=e5e2f74c912d41bcbc9724215e596eb8&amp;w=320 320w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-slices.png?rev=e5e2f74c912d41bcbc9724215e596eb8&amp;w=250 250w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-slices.png?rev=e5e2f74c912d41bcbc9724215e596eb8&amp;w=738 738w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-slices.png?rev=e5e2f74c912d41bcbc9724215e596eb8&amp;w=546 546w"
                                          />
                                          <div className="custom-video"></div>
                                        </div>
                                      </div>
                                      <div className="recipe-card-content-wrapper">
                                        <h3 className="recipe-card-title field-title field-item-title">
                                          DAIRY FREE CHEESE SLICES
                                        </h3>
                                        <div className="product-card-title field-title field-item-link">
                                          <a
                                            className="btn btn-primary"
                                            data-variantfieldname="Item Link"
                                            title="Dairy free cheese slices"
                                            href="https://www.violife.com/en-us/products/dairy-free-cheese-slices"
                                            data-variantitemid="{7E1F19AF-691B-427C-B96C-7AACF77EDAD3}"
                                          >
                                            Learn more
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="item" role="listitem">
                                    <div className="field-item-link">
                                      <a
                                        className="btn btn-primary"
                                        data-variantfieldname="Item Link"
                                        title="Dairy free cheese blocks"
                                        href="https://www.violife.com/en-us/products/dairy-free-cheese-blocks"
                                        data-variantitemid="{1057792C-C6C3-49B2-87F7-1DBC7C1B3729}"
                                      >
                                        Learn more
                                      </a>
                                    </div>
                                    <div className="recipe-card-v3">
                                      <div className="recipe-card-image-container">
                                        <div className="recipe-image-wrapper">
                                          <img
                                            alt="Dairy free cheese blocks"
                                            sizes="(max-width: 1900px)100vw,(max-width: 1200px) 50vw, (max-width: 992px) 50vw, (max-width: 768px) 50vw, (max-width: 576px) 100vw"
                                            src="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-cheese-blocks.png?rev=075e764dceae43c29e1a0339029d2d59&amp;w=533"
                                            srcSet="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-cheese-blocks.png?rev=075e764dceae43c29e1a0339029d2d59&amp;w=533 533w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-cheese-blocks.png?rev=075e764dceae43c29e1a0339029d2d59&amp;w=320 320w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-cheese-blocks.png?rev=075e764dceae43c29e1a0339029d2d59&amp;w=250 250w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-cheese-blocks.png?rev=075e764dceae43c29e1a0339029d2d59&amp;w=738 738w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-cheese-blocks.png?rev=075e764dceae43c29e1a0339029d2d59&amp;w=546 546w"
                                          />
                                          <div className="custom-video"></div>
                                        </div>
                                      </div>
                                      <div className="recipe-card-content-wrapper">
                                        <h3 className="recipe-card-title field-title field-item-title">
                                          DAIRY FREE CHEESE BLOCKS
                                        </h3>
                                        <div className="product-card-title field-title field-item-link">
                                          <a
                                            className="btn btn-primary"
                                            data-variantfieldname="Item Link"
                                            title="Dairy free cheese blocks"
                                            href="https://www.violife.com/en-us/products/dairy-free-cheese-blocks"
                                            data-variantitemid="{1057792C-C6C3-49B2-87F7-1DBC7C1B3729}"
                                          >
                                            Learn more
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="item" role="listitem">
                                    <div className="field-item-link">
                                      <a
                                        className="btn btn-primary"
                                        data-variantfieldname="Item Link"
                                        title="Dairy free coffee creamers"
                                        href="https://www.violife.com/en-us/products/dairy-free-coffee-creamers"
                                        data-variantitemid="{B7913CB7-363B-456C-9A59-564EED5A24C6}"
                                      >
                                        Learn more
                                      </a>
                                    </div>
                                    <div className="recipe-card-v3">
                                      <div className="recipe-card-image-container">
                                        <div className="recipe-image-wrapper">
                                          <img
                                            alt="Dairy free coffee creamers"
                                            sizes="(max-width: 1900px)100vw,(max-width: 1200px) 50vw, (max-width: 992px) 50vw, (max-width: 768px) 50vw, (max-width: 576px) 100vw"
                                            src="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/coffee-creamers-dairy-free.png?rev=718c1f3d83fe420da8249543304a5e7e&amp;w=533"
                                            srcSet="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/coffee-creamers-dairy-free.png?rev=718c1f3d83fe420da8249543304a5e7e&amp;w=533 533w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/coffee-creamers-dairy-free.png?rev=718c1f3d83fe420da8249543304a5e7e&amp;w=320 320w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/coffee-creamers-dairy-free.png?rev=718c1f3d83fe420da8249543304a5e7e&amp;w=250 250w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/coffee-creamers-dairy-free.png?rev=718c1f3d83fe420da8249543304a5e7e&amp;w=738 738w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/coffee-creamers-dairy-free.png?rev=718c1f3d83fe420da8249543304a5e7e&amp;w=546 546w"
                                          />
                                          <div className="custom-video"></div>
                                        </div>
                                      </div>
                                      <div className="recipe-card-content-wrapper">
                                        <h3 className="recipe-card-title field-title field-item-title">
                                          DAIRY FREE COFFEE CREAMERS
                                        </h3>
                                        <div className="product-card-title field-title field-item-link">
                                          <a
                                            className="btn btn-primary"
                                            data-variantfieldname="Item Link"
                                            title="Dairy free coffee creamers"
                                            href="https://www.violife.com/en-us/products/dairy-free-coffee-creamers"
                                            data-variantitemid="{B7913CB7-363B-456C-9A59-564EED5A24C6}"
                                          >
                                            Learn more
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="item" role="listitem">
                                    <div className="field-item-link">
                                      <a
                                        className="btn btn-primary"
                                        data-variantfieldname="Item Link"
                                        title="Dairy free dips"
                                        href="https://www.violife.com/en-us/products/dairy-free-dips"
                                        data-variantitemid="{2BF2CFC2-D45D-4D83-84A2-B6A549F8816C}"
                                      >
                                        Learn more
                                      </a>
                                    </div>
                                    <div className="recipe-card-v3">
                                      <div className="recipe-card-image-container">
                                        <div className="recipe-image-wrapper">
                                          <img
                                            alt="Dairy free dips"
                                            sizes="(max-width: 1900px)100vw,(max-width: 1200px) 50vw, (max-width: 992px) 50vw, (max-width: 768px) 50vw, (max-width: 576px) 100vw"
                                            src="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-dips.png?rev=c3ee8b1414674d3eae590db44fff7913&amp;w=533"
                                            srcSet="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-dips.png?rev=c3ee8b1414674d3eae590db44fff7913&amp;w=533 533w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-dips.png?rev=c3ee8b1414674d3eae590db44fff7913&amp;w=320 320w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-dips.png?rev=c3ee8b1414674d3eae590db44fff7913&amp;w=250 250w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-dips.png?rev=c3ee8b1414674d3eae590db44fff7913&amp;w=738 738w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-dips.png?rev=c3ee8b1414674d3eae590db44fff7913&amp;w=546 546w"
                                          />
                                          <div className="custom-video"></div>
                                        </div>
                                      </div>
                                      <div className="recipe-card-content-wrapper">
                                        <h3 className="recipe-card-title field-title field-item-title">
                                          DAIRY FREE DIPS
                                        </h3>
                                        <div className="product-card-title field-title field-item-link">
                                          <a
                                            className="btn btn-primary"
                                            data-variantfieldname="Item Link"
                                            title="Dairy free dips"
                                            href="https://www.violife.com/en-us/products/dairy-free-dips"
                                            data-variantitemid="{2BF2CFC2-D45D-4D83-84A2-B6A549F8816C}"
                                          >
                                            Learn more
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="item" role="listitem">
                                    <div className="field-item-link">
                                      <a
                                        className="btn btn-primary"
                                        data-variantfieldname="Item Link"
                                        title="Plant butter"
                                        href="https://www.violife.com/en-us/products/plant-butter"
                                        data-variantitemid="{593D2824-363D-48D6-9F90-E6B2A73F51D1}"
                                      >
                                        Learn more
                                      </a>
                                    </div>
                                    <div className="recipe-card-v3">
                                      <div className="recipe-card-image-container">
                                        <div className="recipe-image-wrapper">
                                          <img
                                            alt="Dairy free plant butter"
                                            sizes="(max-width: 1900px)100vw,(max-width: 1200px) 50vw, (max-width: 992px) 50vw, (max-width: 768px) 50vw, (max-width: 576px) 100vw"
                                            src="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/plant-butter.png?rev=e607f6ae4b264917b1a5f219ac983b21&amp;w=533"
                                            srcSet="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/plant-butter.png?rev=e607f6ae4b264917b1a5f219ac983b21&amp;w=533 533w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/plant-butter.png?rev=e607f6ae4b264917b1a5f219ac983b21&amp;w=320 320w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/plant-butter.png?rev=e607f6ae4b264917b1a5f219ac983b21&amp;w=250 250w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/plant-butter.png?rev=e607f6ae4b264917b1a5f219ac983b21&amp;w=738 738w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/plant-butter.png?rev=e607f6ae4b264917b1a5f219ac983b21&amp;w=546 546w"
                                          />
                                          <div className="custom-video"></div>
                                        </div>
                                      </div>
                                      <div className="recipe-card-content-wrapper">
                                        <h3 className="recipe-card-title field-title field-item-title">
                                          PLANT BUTTER
                                        </h3>
                                        <div className="product-card-title field-title field-item-link">
                                          <a
                                            className="btn btn-primary"
                                            data-variantfieldname="Item Link"
                                            title="Plant butter"
                                            href="https://www.violife.com/en-us/products/plant-butter"
                                            data-variantitemid="{593D2824-363D-48D6-9F90-E6B2A73F51D1}"
                                          >
                                            Learn more
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                                <div className="bullets">
                                  <div
                                    className="dot active"
                                    data-item={0}
                                    tabIndex={0}
                                    role="button"
                                    aria-label="Carousel slide 1"
                                  ></div>
                                  <div
                                    className="dot"
                                    data-item="1"
                                    tabIndex={0}
                                    role="button"
                                    aria-label="Carousel slide 2"
                                  ></div>
                                  <div
                                    className="dot"
                                    data-item="2"
                                    tabIndex={0}
                                    role="button"
                                    aria-label="Carousel slide 3"
                                  ></div>
                                </div>
                                <div className="scrollbar">
                                  <span
                                    className="thumb"
                                    style={{
                                      width: '524.203px',
                                      transform: 'translate3d(0px, 0px, 0px)',
                                      cursor: 'default',
                                      touchAction: 'pan-y',
                                      userSelect: 'none',
                                    }}
                                  ></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <div className="component container layout--fluid container--no-padding text-align-center">
              <div className="component-content">
                <div className="component container layout--fluid container--no-padding">
                  <div className="component-content">
                    <div className="component container-with-padding">
                      <div className="component-content">
                        <div className="component rich-text">
                          <div className="component-content">
                            <h2 style={{ textAlign: 'center' }}>READY TO INSPIRE</h2>
                            <p style={{ textAlign: 'center' }}>
                              Dairy free adventure starts here. Let’s cook up something
                              unforgettable.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="component promo component global-testimonial page-list promo-list text-align-left">
                      <div className="component-content">
                        <section className="promo-testimonial">
                          <div className="row">
                            <div className="col-xs-12 col-md-7 testimonial-media">
                              <div className="custom-video">
                                <video
                                  id="cor-home-video"
                                  className="lazy-bg-video"
                                  autoPlay
                                  muted
                                  loop
                                  controlsList="nodownload"
                                  playsInline
                                  height="100%"
                                  width="100%"
                                >
                                  <source
                                    src="https://www.assets.digitalupfield.com/asset/2912845d-ac74-4bb0-b357-3eee0389fb66/mp4/no-bake-cheesecake-bars-1280x1280.mp4"
                                    type="video/mp4"
                                  />
                                </video>
                              </div>
                            </div>
                            <div className="col-xs-12 col-md-5 testimonial-content">
                              <h2 className="testimonial-title field-title">
                                NO BAKE CHEESECAKE BARS
                              </h2>
                              <p className="testimonial-intro field-text1">
                                No bake? No problem. Spoonfuls of joy, cream and strawberry gone
                                wild.
                              </p>
                              <a
                                className="btn btn-primary"
                                data-variantfieldname="Link1"
                                title="Check out recipe"
                                href="https://www.violife.com/en-us/recipe/no-bake-cheesecake-bars-255212"
                                data-variantitemid="{E8479E58-2DA3-4894-8E39-7C2308F581FC}"
                              >
                                Check out recipe
                              </a>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="component container bgc-secondary layout--fluid container--no-padding">
              <div className="component-content"></div>
            </div>

            <div className="component container layout--fluid container--no-padding">
              <div className="component-content">
                <div className="component container layout--fluid padding-bottom-m padding-top-m">
                  <div className="component-content">
                    <div className="component rich-text">
                      <div className="component-content">
                        <h2 style={{ textAlign: 'center' }}>LET&quot;S GET COOKING</h2>
                        <p style={{ textAlign: 'center' }}>
                          Next bite inspiration? You&quot;re in the right kitchen, tie your apron
                          and grab the spatula!
                        </p>
                      </div>
                    </div>
                    <div className="component content">
                      <div className="component-content">
                        <div className="component page-list packshot-3-card-component 3-card-packshot">
                          <ul className="items" role="list">
                            <li className="item" role="listitem">
                              <div className="Packshot-card">
                                <div className="field-item-link">
                                  <a
                                    data-variantfieldname="Item Link"
                                    title="Pistachio Cream bars"
                                    href="https://www.violife.com/en-us/recipe/pistachio-cream-bars-255900"
                                    data-variantitemid="{777D65D6-8044-4160-B0F7-48198E424EA8}"
                                  >
                                    Pistachio Cream bars
                                  </a>
                                </div>
                                <div className="packshot-card-img-container">
                                  <div className="product-card-img">
                                    <img
                                      alt="pistachio cream bars"
                                      sizes="(max-width: 1900px)100vw,(max-width: 1200px) 50vw, (max-width: 992px) 50vw, (max-width: 768px) 50vw, (max-width: 576px) 100vw"
                                      src="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/pistachio-cream-bars-445x581.png?rev=29c18f92783f46c0b6f0b9537ad1a48c&amp;w=533"
                                      srcSet="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/pistachio-cream-bars-445x581.png?rev=29c18f92783f46c0b6f0b9537ad1a48c&amp;w=533 533w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/pistachio-cream-bars-445x581.png?rev=29c18f92783f46c0b6f0b9537ad1a48c&amp;w=320 320w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/pistachio-cream-bars-445x581.png?rev=29c18f92783f46c0b6f0b9537ad1a48c&amp;w=250 250w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/pistachio-cream-bars-445x581.png?rev=29c18f92783f46c0b6f0b9537ad1a48c&amp;w=738 738w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/pistachio-cream-bars-445x581.png?rev=29c18f92783f46c0b6f0b9537ad1a48c&amp;w=546 546w"
                                    />
                                    <div className="custom-video">
                                      <video
                                        id="cor-home-video"
                                        className="lazy-bg-video"
                                        autoPlay
                                        muted
                                        loop
                                        controlsList="nodownload"
                                        playsInline
                                        height="100%"
                                        width="100%"
                                      >
                                        <source
                                          src="https://www.assets.digitalupfield.com/asset/cc59e274-cd23-4a9f-b4de-26923c3fbb70/mp4/pistacchio-cream-bar-445x581.mp4"
                                          type="video/mp4"
                                        />
                                      </video>
                                    </div>
                                  </div>
                                </div>
                                <div className="product-card-text">
                                  <h3 className="product-card-title field-title field-item-title">
                                    PISTACCHIO CREAM BARS
                                  </h3>
                                  <h4 className="product-card-title field-title field-item-heading">
                                    TOTALLY IRRESISTIBLE
                                  </h4>
                                </div>
                              </div>
                            </li>
                            <li className="item active" role="listitem">
                              <div className="Packshot-card">
                                <div className="field-item-link">
                                  <a
                                    data-variantfieldname="Item Link"
                                    title="Grilled Cheese and Tomato Soup"
                                    href="https://www.violife.com/en-us/recipe/grilled-cheese-and-tomato-soup-247160"
                                    data-variantitemid="{053D60B0-6C16-4299-9C2C-19A36D44C127}"
                                  >
                                    Grilled Cheese and Tomato Soup
                                  </a>
                                </div>
                                <div className="packshot-card-img-container">
                                  <div className="product-card-img">
                                    <img
                                      alt="Tomato soup"
                                      sizes="(max-width: 1900px)100vw,(max-width: 1200px) 50vw, (max-width: 992px) 50vw, (max-width: 768px) 50vw, (max-width: 576px) 100vw"
                                      src="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/tomato-soup-445x581.png?rev=358e835194a542adad6a78ec7a4b64e6&amp;w=533"
                                      srcSet="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/tomato-soup-445x581.png?rev=358e835194a542adad6a78ec7a4b64e6&amp;w=533 533w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/tomato-soup-445x581.png?rev=358e835194a542adad6a78ec7a4b64e6&amp;w=320 320w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/tomato-soup-445x581.png?rev=358e835194a542adad6a78ec7a4b64e6&amp;w=250 250w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/tomato-soup-445x581.png?rev=358e835194a542adad6a78ec7a4b64e6&amp;w=738 738w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/tomato-soup-445x581.png?rev=358e835194a542adad6a78ec7a4b64e6&amp;w=546 546w"
                                    />
                                    <div className="custom-video">
                                      <video
                                        id="cor-home-video"
                                        className="lazy-bg-video"
                                        autoPlay
                                        muted
                                        loop
                                        controlsList="nodownload"
                                        playsInline
                                        height="100%"
                                        width="100%"
                                      >
                                        <source
                                          src="https://www.assets.digitalupfield.com/asset/8399749c-602f-4e09-8f83-b494de99322e/mp4/tomato-soup-445x581.mp4"
                                          type="video/mp4"
                                        />
                                      </video>
                                    </div>
                                  </div>
                                </div>
                                <div className="product-card-text">
                                  <h3 className="product-card-title field-title field-item-title">
                                    GRILLED CHEESE AND TOMATO SOUP
                                  </h3>
                                  <h4 className="product-card-title field-title field-item-heading">
                                    ULTIMATE DIP AND SIP EXPERIENCE
                                  </h4>
                                </div>
                              </div>
                            </li>
                            <li className="item" role="listitem">
                              <div className="Packshot-card">
                                <div className="field-item-link">
                                  <a
                                    data-variantfieldname="Item Link"
                                    title="Dill and Pickle bagel"
                                    href="https://www.violife.com/en-us/recipe/dill-and-pickle-bagel-255764"
                                    data-variantitemid="{6910D900-60C3-4D41-8948-225A8A196DAF}"
                                  >
                                    Dill and Pickle bagel
                                  </a>
                                </div>
                                <div className="packshot-card-img-container">
                                  <div className="product-card-img">
                                    <img
                                      alt="Dill and pickle bagel"
                                      sizes="(max-width: 1900px)100vw,(max-width: 1200px) 50vw, (max-width: 992px) 50vw, (max-width: 768px) 50vw, (max-width: 576px) 100vw"
                                      src="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dill-and-pickle-bagel-violife-445x581.png?rev=00b0b829b7e542b1b53ba15c8b564082&amp;w=533"
                                      srcSet="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dill-and-pickle-bagel-violife-445x581.png?rev=00b0b829b7e542b1b53ba15c8b564082&amp;w=533 533w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dill-and-pickle-bagel-violife-445x581.png?rev=00b0b829b7e542b1b53ba15c8b564082&amp;w=320 320w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dill-and-pickle-bagel-violife-445x581.png?rev=00b0b829b7e542b1b53ba15c8b564082&amp;w=250 250w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dill-and-pickle-bagel-violife-445x581.png?rev=00b0b829b7e542b1b53ba15c8b564082&amp;w=738 738w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dill-and-pickle-bagel-violife-445x581.png?rev=00b0b829b7e542b1b53ba15c8b564082&amp;w=546 546w"
                                    />
                                    <div className="custom-video">
                                      <video
                                        id="cor-home-video"
                                        className="lazy-bg-video"
                                        autoPlay
                                        muted
                                        loop
                                        controlsList="nodownload"
                                        playsInline
                                        height="100%"
                                        width="100%"
                                      >
                                        <source
                                          src="https://www.assets.digitalupfield.com/asset/026618bd-72c0-49f3-bd7e-99c608937548/mp4/bagel-recipe-445x581.mp4"
                                          type="video/mp4"
                                        />
                                      </video>
                                    </div>
                                  </div>
                                </div>
                                <div className="product-card-text">
                                  <h3 className="product-card-title field-title field-item-title">
                                    DILL AND PICKLE BAGEL
                                  </h3>
                                  <h4 className="product-card-title field-title field-item-heading">
                                    CREAMY POWER ON A BAGEL
                                  </h4>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="component link text-align-center">
                      <div className="component-content">
                        <div className="field-link">
                          <a
                            className="btn btn-primary"
                            data-variantfieldname="Link"
                            title="Discover all Recipes"
                            href="https://www.violife.com/en-us/easy-recipes"
                            data-variantitemid="{8D36542B-335A-4A1C-BD4B-B01C679B4DB3}"
                          >
                            Discover all Recipes
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="component container">
                  <div className="component-content">
                    <div className="row component column-splitter">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                        <div className="component image">
                          <div className="component-content">
                            <img
                              alt="Wildly good"
                              src="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/wildly-good.png?rev=bc28424128e64ca988dcd9751ab76eee"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3"></div>
                      <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3"></div>
                      <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3"></div>
                    </div>
                  </div>
                </div>
                <div className="component container layout--fluid container--no-padding">
                  <div className="component-content">
                    <div className="component promo component global-testimonial page-list promo-list promo-video-left">
                      <div className="component-content">
                        <section className="promo-testimonial">
                          <div className="row">
                            <div className="col-xs-12 col-md-7 testimonial-media">
                              <div className="custom-video"></div>

                              <img
                                alt="Violife"
                                src="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/violife.jpg?rev=84ec73df52de4b9e8cf46fc07739a80a"
                              />
                            </div>
                            <div className="col-xs-12 col-md-5 testimonial-content">
                              <h2 className="testimonial-title field-title">WELCOME TO VIOLIFE</h2>
                              <p className="testimonial-intro field-text1">
                                Pull up a chair, and join our table. Because eating dairy&nbsp;free
                                isn’t just a choice. It’s living full-out,&nbsp;and it’s never
                                tasted this good.
                              </p>
                              <a
                                className="btn btn-primary"
                                data-variantfieldname="Link1"
                                title="About us"
                                href="https://www.violife.com/en-us/our-story"
                                data-variantitemid="{8D3EF0A0-5DE7-44F3-8A0F-123B7B8B066C}"
                              >
                                About us
                              </a>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="component container padding-bottom-l padding-top-l">
              <div className="component-content"></div>
            </div>

            <div className="component container padding-top-m">
              <div className="component-content">
                <div
                  className="component social-feed padding-bottom-m feed-1 glide--swipeable glide--ltr glide--carousel"
                  data-feedno="1"
                >
                  <div className="instagram-profile-feed">
                    <div className="component-content ">
                      <div className="feed-title">
                        <h2>LET&quot;S GET SOCIAL</h2>
                      </div>
                      <div className="feed glide bullets-with-arrows">
                        <div className="feed-content glide__track" data-glide-el="track">
                          <ul
                            className="glide_slides slider  "
                            data-source="{A6AA4E0B-02CD-407F-8D67-08C5564852B8}"
                            data-sourcelang="en-US"
                            data-updatefrequency="21600000"
                            data-layout="Slider"
                            data-backgroundcolor=""
                            data-textcolor=""
                            data-linkcolor=""
                            data-gotopost=""
                            data-likes="Likes"
                            data-comments=""
                            data-removepostids=""
                            data-amountofpost=""
                            data-autorotate="1"
                            data-rotationtimeout="4000"
                            data-pauseonhover="1"
                            data-cardborderradius="8"
                            data-postborderwidth=""
                            data-postbordercolor=""
                            data-minpostwidth="250"
                            data-postgap=""
                            data-clickaction=""
                            data-maxtextlines=""
                            data-next="Next post"
                            data-previous="Previous post"
                            data-close="Close popup"
                            data-bullets="Carousel slide"
                            data-caption="Posted with caption"
                            data-postedon="Posted on"
                            data-autoplayvideos=""
                            data-hashtags=""
                            role="list"
                            style={{
                              transition: 'transform 1200ms cubic-bezier(0.165, 0.84, 0.44, 1)',
                              width: '12510px',
                              transform: 'translate3d(-11020px, 0px, 0px)',
                            }}
                          >
                            <li
                              className="glide__slide glide__slide--clone"
                              style={{ width: '350px', marginRight: '15px' }}
                            >
                              <div
                                className="post"
                                id="18076331696310642"
                                tabIndex={-1}
                                role="article"
                                data-postno="22"
                                aria-hidden="true"
                              >
                                <div className="post-media">
                                  <span className="instagram-icon"></span>
                                  <div
                                    className="post-image lazy-bg"
                                    role="img"
                                    style={{
                                      backgroundImage: `url(https://scontent-lhr6-1.cdninstagram.com/v/t39.30808-6/532981858_802809875436927_3510198042527210976_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=JdnkW3Pkn94Q7kNvwFDyjax&_nc_oc=AdnfrOHqVu8GHYF1orc8ZyKU2WIaF7SdsIXn5IUH88wI6hyoiIXx4L85MYRgHwQifqQ&_nc_zt=23&_nc_ht=scontent-lhr6-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=W03zZrXY55evbdDEE5dCfQ&oh=00_AfU5UELP3EIjaf-CJ4wN7sTB9sdIG61F8VLF3ZNrmsgcuA&oe=68BC6390)`,
                                    }}
                                  ></div>
                                </div>
                                <div className="content-container">
                                  <div className="post-content">
                                    <div className="post-header">
                                      <div className="username">
                                        <a
                                          href="https://www.instagram.com/violife_foods/"
                                          data-permalink="https://www.instagram.com/p/DNWbnowzrjI/"
                                          target="_blank"
                                          className="permalink"
                                          tabIndex={-1}
                                          title="Go to violife_foods instagram page"
                                        >
                                          violife_foods
                                        </a>
                                      </div>
                                    </div>
                                    <div className="caption" role="text">
                                      <p className="sr-only">
                                        violife_foods Instagram post, click to view in dialog.
                                        violife_foods Posted with caption
                                      </p>
                                      We’ll go first: pasta salad 🤤
                                      <br />
                                      <br />
                                      <a
                                        href="https://www.instagram.com/explore/tags/dairyfree"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #dairyfree
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/Violife"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #Violife
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/hyperfixationmeal"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #hyperfixationmeal
                                      </a>
                                    </div>
                                  </div>
                                  <div className="post-footer">
                                    <div className="timestamp" role="text">
                                      <span aria-hidden="false" aria-label="Posted on"></span>Aug
                                      14, 2025, 11 PM
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              className="glide__slide glide__slide--clone"
                              style={{ width: '350px', marginLeft: '15px', marginRight: '15px' }}
                            >
                              <div
                                className="post"
                                id="17968592117930009"
                                tabIndex={-1}
                                role="article"
                                data-postno="23"
                                aria-hidden="true"
                              >
                                <div className="post-media">
                                  <span className="instagram-icon"></span>
                                  <div className="post-carousel-icon"></div>
                                  <div
                                    className="post-image post-carousel lazy-bg"
                                    style={{
                                      backgroundImage: `url(https://scontent-lhr8-1.cdninstagram.com/v/t39.30808-6/530665347_801213592263222_2973512115990862959_n.jpg?stp=dst-jpg_e35_tt6&amp;_nc_cat=108&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=GRuFKfdZPy4Q7kNvwEJ2iR9&amp;_nc_oc=AdmPSYio-jgvBY-yaOWHXhUOV3jNEgFz3Cad7eX34nQnw2TPaLzu6F37jrAostt1FKE&amp;_nc_zt=23&amp;_nc_ht=scontent-lhr8-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;_nc_gid=W03zZrXY55evbdDEE5dCfQ&amp;oh=00_AfUawJTZG88b8Z7Qu1JLPGBKWKm_jCOMNn7iAmSzljcA-w&amp;oe=68BC716E)`,
                                    }}
                                    role="img"
                                  ></div>
                                  <div className="carousel-media">
                                    <div
                                      className="bullets"
                                      tabIndex={0}
                                      role="button"
                                      aria-label="Carousel slide 1"
                                    >
                                      <span>
                                        <i data-index={0} data-mediatype="image"></i>
                                        <div
                                          className="carousel-image"
                                          style={{
                                            backgroundImage:
                                              'url(https://scontent-lhr8-1.cdninstagram.com/v/t39.30808-6/530665347_801213592263222_2973512115990862959_n.jpg?stp=dst-jpg_e35_tt6&amp;_nc_cat=108&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=GRuFKfdZPy4Q7kNvwEJ2iR9&amp;_nc_oc=AdmPSYio-jgvBY-yaOWHXhUOV3jNEgFz3Cad7eX34nQnw2TPaLzu6F37jrAostt1FKE&amp;_nc_zt=23&amp;_nc_ht=scontent-lhr8-1.cdninstagram.com&amp;edm=ABbrh9MEAAAA&amp;_nc_gid=-NJr2Tmtt7lcnSRn3h855A&amp;oh=00_AfXHEjfIHsFbimWhuXemau6_SBm9T-oA2fSkkAoYfOcsWw&amp;oe=68BC716E)',
                                          }}
                                        ></div>
                                      </span>
                                    </div>
                                    <div
                                      className="bullets"
                                      tabIndex={0}
                                      role="button"
                                      aria-label="Carousel slide 2"
                                    >
                                      <span>
                                        <i data-index="1" data-mediatype="image"></i>
                                        <div
                                          className="carousel-image"
                                          style={{
                                            backgroundImage:
                                              'url(https://scontent-lhr6-1.cdninstagram.com/v/t39.30808-6/532085198_801213628929885_5246787910662626701_n.jpg?stp=dst-jpg_e35_tt6&amp;_nc_cat=102&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=mGkJeTAO5_AQ7kNvwFHQeao&amp;_nc_oc=Adm4V-aghA7sXgLNFpr8E2gPhzxkmP6hgPDoNy6_KUOaVuLywVPMrt_2-CG3owLrH8o&amp;_nc_zt=23&amp;_nc_ht=scontent-lhr6-1.cdninstagram.com&amp;edm=ABbrh9MEAAAA&amp;_nc_gid=-NJr2Tmtt7lcnSRn3h855A&amp;oh=00_AfXkvCVlgbZ2pCUkNC64U6lteBSWR10AOI1Jza4phg3JGA&amp;oe=68BC751F)',
                                          }}
                                        ></div>
                                      </span>
                                    </div>
                                    <div
                                      className="bullets"
                                      tabIndex={0}
                                      role="button"
                                      aria-label="Carousel slide 3"
                                    >
                                      <span>
                                        <i data-index="2" data-mediatype="image"></i>
                                        <div
                                          className="carousel-image"
                                          style={{
                                            backgroundImage:
                                              'url(https://scontent-lhr8-2.cdninstagram.com/v/t39.30808-6/530865789_801213612263220_5634044301185430583_n.jpg?stp=dst-jpg_e35_tt6&amp;_nc_cat=103&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=kKQEl9jIRhsQ7kNvwF0uCeP&amp;_nc_oc=AdmdA2810ac4-oO6cG5od9ETOLcUKTm_nd6GZNRQANkKF4frWw2xVAI4HqkPHwId-o0&amp;_nc_zt=23&amp;_nc_ht=scontent-lhr8-2.cdninstagram.com&amp;edm=ABbrh9MEAAAA&amp;_nc_gid=-NJr2Tmtt7lcnSRn3h855A&amp;oh=00_AfVb_6wve9g8Maijg8C9oItnBogD4z6Do0bgXYiRddMJ_A&amp;oe=68BC84D0)',
                                          }}
                                        ></div>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-container">
                                  <div className="post-content">
                                    <div className="post-header">
                                      <div className="username">
                                        <a
                                          href="https://www.instagram.com/violife_foods/"
                                          data-permalink="https://www.instagram.com/p/DNTmITkMBsk/"
                                          target="_blank"
                                          className="permalink"
                                          tabIndex={-1}
                                          title="Go to violife_foods instagram page"
                                        >
                                          violife_foods
                                        </a>
                                      </div>
                                    </div>
                                    <div className="caption" role="text">
                                      <p className="sr-only">
                                        violife_foods Instagram post, click to view in dialog.
                                        violife_foods Posted with caption
                                      </p>
                                      My Belly is team Violife <br />
                                      <br />
                                      <a
                                        href="https://www.instagram.com/explore/tags/violife"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #violife
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/summer"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #summer
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/summerpicnic"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #summerpicnic
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/thesummerI"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #thesummerI
                                      </a>
                                    </div>
                                  </div>
                                  <div className="post-footer">
                                    <div className="timestamp" role="text">
                                      <span aria-hidden="false" aria-label="Posted on"></span>Aug
                                      13, 2025, 9 PM
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              className="glide__slide glide__slide--clone"
                              style={{ width: '350px', marginLeft: '15px', marginRight: '15px' }}
                            >
                              <div
                                className="post"
                                id="18067968494183710"
                                tabIndex={-1}
                                role="article"
                                data-postno="24"
                                aria-hidden="true"
                              >
                                <div className="post-media">
                                  <span className="instagram-icon"></span>
                                  <div
                                    className="post-image lazy-bg"
                                    style={{
                                      backgroundImage: `url(https://scontent-lhr8-2.cdninstagram.com/v/t51.82787-15/530795295_18520747882047494_8053603463406597737_n.webp?stp=dst-jpg_e35_tt6&amp;_nc_cat=101&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=2XczHK7XgrIQ7kNvwGAAtwA&amp;_nc_oc=AdmuvaEEe3li7sX2jxBr7-78sJhHB9xUBqVJzWfC3q8YWzZrXXvD6IS2fWOco4TN7c4&amp;_nc_zt=23&amp;_nc_ht=scontent-lhr8-2.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;_nc_gid=W03zZrXY55evbdDEE5dCfQ&amp;oh=00_AfUxZ_2AzROiDHWMynyMdzwuWArbqE-JbgvoI5bMATGB8Q&amp;oe=68BC7395)`,
                                    }}
                                    role="img"
                                  ></div>
                                </div>
                                <div className="content-container">
                                  <div className="post-content">
                                    <div className="post-header">
                                      <div className="username">
                                        <a
                                          href="https://www.instagram.com/violife_foods/"
                                          data-permalink="https://www.instagram.com/p/DNRloVovD4o/"
                                          target="_blank"
                                          className="permalink"
                                          tabIndex={-1}
                                          title="Go to violife_foods instagram page"
                                        >
                                          violife_foods
                                        </a>
                                      </div>
                                    </div>
                                    <div className="caption" role="text">
                                      <p className="sr-only">
                                        violife_foods Instagram post, click to view in dialog.
                                        violife_foods Posted with caption
                                      </p>
                                      ✨The life of a dairy free showgirl ✨ 🤠
                                      <br />
                                      <br />
                                      <a
                                        href="https://www.instagram.com/explore/tags/violife"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #violife
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/dairyfree"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #dairyfree
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/albumrelease"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #albumrelease
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/TS"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #TS
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/meme"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #meme
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/showgirl"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #showgirl
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/cheese"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #cheese
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/violifecheese"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #violifecheese
                                      </a>
                                    </div>
                                  </div>
                                  <div className="post-footer">
                                    <div className="timestamp" role="text">
                                      <span aria-hidden="false" aria-label="Posted on"></span>Aug
                                      13, 2025, 2 AM
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              className="glide__slide glide__slide--clone"
                              style={{ width: '350px', marginLeft: '15px', marginRight: '15px' }}
                            >
                              <div
                                className="post"
                                id="17857640889473178"
                                tabIndex={-1}
                                role="article"
                                data-postno="25"
                                aria-hidden="true"
                              >
                                <div className="post-media">
                                  <span className="instagram-icon"></span>
                                  <div className="post-video-container post-video">
                                    <video
                                      className="lazy-bg-video "
                                      preload="none"
                                      playsInline
                                      muted
                                      disablePictureInPicture
                                      controlsList="nodownload noplaybackrate"
                                      aria-label="play video"
                                    >
                                      <source src="https://scontent-lhr6-2.cdninstagram.com/o1/v/t2/f2/m86/AQOT_1K5WrxrB6DHR7dQWwOhdILPe4yJu5gMirpuaEMGAD2HPefKbDTUpOmGFpZ-vzj-FUQuspSZ9A9tHiFfTtScEt00NkBgDncR4EQ.mp4?_nc_cat=105&amp;_nc_sid=5e9851&amp;_nc_ht=scontent-lhr6-2.cdninstagram.com&amp;_nc_ohc=F94AfG8R1r8Q7kNvwFm0XyM&amp;efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MjE2OTEwMjIzNjkxODIzNiwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjgsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&amp;ccb=17-1&amp;vs=663b071d08e8d1b4&amp;_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9CQjQ5MTlEMTJDN0U1QkZDRkM5RjlEQjQzNTQ3REQ4OF92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HSlRIc2hfSXJSeDMzTFFEQUxMZzlPaGZwbHRiYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmuIeBha-y2gcVAigCQzMsF0AgmZmZmZmaGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&amp;_nc_gid=W03zZrXY55evbdDEE5dCfQ&amp;edm=ANo9K5cEAAAA&amp;_nc_zt=28&amp;_nc_tpa=Q5bMBQGVkwe2LGooT4njzKqXoRcv6Nx_5ilNo26xz1g-hkpOx47K3wenQwfV30Nl1J5jrxiweF0dw-52XA&amp;oh=00_AfWYRi5Ufou86YjhLrndzpONrqdxfk7B4ZaMVzvXNfR1fA&amp;oe=68B87586" />
                                    </video>
                                    <span className="video-play-icon-wrapper">
                                      <i
                                        className="video-play-icon"
                                        role="button"
                                        aria-label="video button, click to play in dialog"
                                      ></i>
                                    </span>
                                  </div>
                                </div>
                                <div className="content-container">
                                  <div className="post-content">
                                    <div className="post-header">
                                      <div className="username">
                                        <a
                                          href="https://www.instagram.com/violife_foods/"
                                          data-permalink="https://www.instagram.com/reel/DNQ6bZxsIKz/"
                                          target="_blank"
                                          className="permalink"
                                          tabIndex={-1}
                                          title="Go to violife_foods instagram page"
                                        >
                                          violife_foods
                                        </a>
                                      </div>
                                    </div>
                                    <div className="caption" role="text">
                                      <p className="sr-only">
                                        violife_foods Instagram post, click to view in dialog.
                                        violife_foods Posted with caption
                                      </p>
                                      And even more impressed that it’s dairy free 🤤
                                      <br />
                                      <br />
                                      <a
                                        href="https://www.instagram.com/explore/tags/cheesepull"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #cheesepull
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/impressive"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #impressive
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/violife"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #violife
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/food"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #food
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/cheese"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #cheese
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/vegan"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #vegan
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/hardtopleasetrend"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #hardtopleasetrend
                                      </a>
                                    </div>
                                  </div>
                                  <div className="post-footer">
                                    <div className="timestamp" role="text">
                                      <span aria-hidden="false" aria-label="Posted on"></span>Aug
                                      12, 2025, 8 PM
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              className="glide__slide"
                              style={{ width: '350px', marginLeft: '15px', marginRight: '15px' }}
                            >
                              <div
                                className="post"
                                id="18052320986216382"
                                tabIndex={-1}
                                role="article"
                                data-postno="1"
                                aria-hidden="true"
                              >
                                <div className="post-media">
                                  <span className="instagram-icon"></span>
                                  <div
                                    className="post-image lazy-bg"
                                    style={{
                                      backgroundImage: `url(https://scontent-lhr8-1.cdninstagram.com/v/t39.30808-6/539084319_813041301080451_8448150332830101551_n.jpg?stp=dst-jpg_e35_tt6&amp;_nc_cat=108&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=gI72UZA-zkQQ7kNvwFuEdvC&amp;_nc_oc=AdlM5bNAOQTIDFPjl8SWfZR_Y0DHRJjiqSm8h0-tsH9THhpQC1uUH4-PIUQKVU7cFmk&amp;_nc_zt=23&amp;_nc_ht=scontent-lhr8-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;_nc_gid=W03zZrXY55evbdDEE5dCfQ&amp;oh=00_AfWGENHsyfzj7OGvpHPkBCDGta8kOGOmJ4ALPv0jBMg7rA&amp;oe=68BC7757)`,
                                    }}
                                    role="img"
                                  ></div>
                                </div>
                                <div className="content-container">
                                  <div className="post-content">
                                    <div className="post-header">
                                      <div className="username">
                                        <a
                                          href="https://www.instagram.com/violife_foods/"
                                          data-permalink="https://www.instagram.com/p/DOB1mQoD3tk/"
                                          target="_blank"
                                          className="permalink"
                                          tabIndex={-1}
                                          title="Go to violife_foods instagram page"
                                        >
                                          violife_foods
                                        </a>
                                      </div>
                                    </div>
                                    <div className="caption" role="text">
                                      <p className="sr-only">
                                        violife_foods Instagram post, click to view in dialog.
                                        violife_foods Posted with caption
                                      </p>
                                      Know this feels impossible to choose, but either way, your
                                      stomach’s the real winner. 🙌
                                      <br />
                                      <br />
                                      <a
                                        href="https://www.instagram.com/explore/tags/dairyfree"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #dairyfree
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/Violife"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #Violife
                                      </a>
                                    </div>
                                  </div>
                                  <div className="post-footer">
                                    <div className="timestamp" role="text">
                                      <span aria-hidden="false" aria-label="Posted on"></span>Aug
                                      31, 2025, 8 PM
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              className="glide__slide"
                              style={{ width: '350px', marginLeft: '15px', marginRight: '15px' }}
                            >
                              <div
                                className="post"
                                id="18323764402238173"
                                tabIndex={-1}
                                role="article"
                                data-postno="2"
                                aria-hidden="true"
                              >
                                <div className="post-media">
                                  <span className="instagram-icon"></span>
                                  <div className="post-video-container post-video">
                                    <video
                                      className="lazy-bg-video "
                                      preload="none"
                                      playsInline
                                      muted
                                      disablePictureInPicture
                                      controlsList="nodownload noplaybackrate"
                                      aria-label="play video"
                                    >
                                      <source src="https://scontent-lhr6-2.cdninstagram.com/o1/v/t2/f2/m86/AQMtDH4CxnJCErNb0eNhLyV5HsFuhoB5WSX8H0QaRy7F1ie8Kf4v3nyxhxA9WL2OrcXy1IENkAIklH9gN7TYGQ1dw8wvb1WADa3pJeY.mp4?_nc_cat=105&amp;_nc_sid=5e9851&amp;_nc_ht=scontent-lhr6-2.cdninstagram.com&amp;_nc_ohc=Aj1T6sYGbTkQ7kNvwGs9yPN&amp;efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTMyNDIyMTc4MjY5NzQxNywidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjE0LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&amp;ccb=17-1&amp;vs=572afc98ac59c318&amp;_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC80NDREQ0NFMTAwNTY5RDVFRjVFNDM0Q0Y1QThBMUY4NV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HSER6UVNBcC1FOGZ1OVVEQU9uWU5uQ2pHT3BQYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmkpexj-2X2gQVAigCQzMsF0AtEOVgQYk3GBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&amp;_nc_gid=W03zZrXY55evbdDEE5dCfQ&amp;edm=ANo9K5cEAAAA&amp;_nc_zt=28&amp;_nc_tpa=Q5bMBQHy1n5RKrry6SDkqHQjTsEWkIe7r-SHXFPhItM-jwypcM35NyEKoKE89zi0zzXGNTcuiTOHaGTM3Q&amp;oh=00_AfUcZ6tH2fC3xZoT04UVkj0tDvrhGIfKa2NHf12p_eEgug&amp;oe=68B86D32" />
                                    </video>
                                    <span className="video-play-icon-wrapper">
                                      <i
                                        className="video-play-icon"
                                        role="button"
                                        aria-label="video button, click to play in dialog"
                                      ></i>
                                    </span>
                                  </div>
                                </div>
                                <div className="content-container">
                                  <div className="post-content">
                                    <div className="post-header">
                                      <div className="username">
                                        <a
                                          href="https://www.instagram.com/violife_foods/"
                                          data-permalink="https://www.instagram.com/reel/DN_lYa3j0wL/"
                                          target="_blank"
                                          className="permalink"
                                          tabIndex={-1}
                                          title="Go to violife_foods instagram page"
                                        >
                                          violife_foods
                                        </a>
                                      </div>
                                    </div>
                                    <div className="caption" role="text">
                                      <p className="sr-only">
                                        violife_foods Instagram post, click to view in dialog.
                                        violife_foods Posted with caption
                                      </p>
                                      Your nachos just got a new twist <br /> <br />
                                      Inspired by:
                                      <a
                                        href="https://www.instagram.com/tfimb/"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        @tfimb
                                      </a>
                                      <br />
                                      <br />
                                      <a
                                        href="https://www.instagram.com/explore/tags/violife"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #violife
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/gnocchi"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #gnocchi
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/nachos"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #nachos
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/summernachos"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #summernachos
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/vegancheese"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #vegancheese
                                      </a>
                                    </div>
                                  </div>
                                  <div className="post-footer">
                                    <div className="timestamp" role="text">
                                      <span aria-hidden="false" aria-label="Posted on"></span>Aug
                                      30, 2025, 11 PM
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              className="glide__slide"
                              style={{ width: '350px', marginLeft: '15px', marginRight: '15px' }}
                            >
                              <div
                                className="post"
                                id="18143720845419329"
                                tabIndex={-1}
                                role="article"
                                data-postno="3"
                                aria-hidden="true"
                              >
                                <div className="post-media">
                                  <span className="instagram-icon"></span>
                                  <div
                                    className="post-image lazy-bg"
                                    style={{
                                      backgroundImage: `url(https://scontent-lhr8-1.cdninstagram.com/v/t39.30808-6/538679613_813192577731990_6475474565493229976_n.jpg?stp=dst-jpg_e35_tt6&amp;_nc_cat=107&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=I45u7KkP8yIQ7kNvwFRF4Km&amp;_nc_oc=AdkbEJpzKHfn_kzm5oOso892TH2XRwut8OD37ORykRpu2QclzcvGykW5hWpWrcWD8is&amp;_nc_zt=23&amp;_nc_ht=scontent-lhr8-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;_nc_gid=W03zZrXY55evbdDEE5dCfQ&amp;oh=00_AfV5LjInIQOfcylloM9t1tM0kPTgQS3mXUKZoOkmI5BDVw&amp;oe=68BC7CF7)`,
                                    }}
                                    role="img"
                                  ></div>
                                </div>
                                <div className="content-container">
                                  <div className="post-content">
                                    <div className="post-header">
                                      <div className="username">
                                        <a
                                          href="https://www.instagram.com/violife_foods/"
                                          data-permalink="https://www.instagram.com/p/DN_QuRKjT6q/"
                                          target="_blank"
                                          className="permalink"
                                          tabIndex={-1}
                                          title="Go to violife_foods instagram page"
                                        >
                                          violife_foods
                                        </a>
                                      </div>
                                    </div>
                                    <div className="caption" role="text">
                                      <p className="sr-only">
                                        violife_foods Instagram post, click to view in dialog.
                                        violife_foods Posted with caption
                                      </p>
                                      Yes, a pie can count as your dish 😂
                                      <br />
                                      <br />
                                      <a
                                        href="https://www.instagram.com/explore/tags/dairyfree"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #dairyfree
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/Violife"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #Violife
                                      </a>
                                    </div>
                                  </div>
                                  <div className="post-footer">
                                    <div className="timestamp" role="text">
                                      <span aria-hidden="false" aria-label="Posted on"></span>Aug
                                      30, 2025, 8 PM
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              className="glide__slide"
                              style={{ width: '350px', marginLeft: '15px', marginRight: '15px' }}
                            >
                              <div
                                className="post"
                                id="18076837627985063"
                                tabIndex={-1}
                                role="article"
                                data-postno="4"
                                aria-hidden="true"
                              >
                                <div className="post-media">
                                  <span className="instagram-icon"></span>
                                  <div className="post-video-container post-video">
                                    <video
                                      className="lazy-bg-video "
                                      preload="none"
                                      playsInline
                                      muted
                                      disablePictureInPicture
                                      controlsList="nodownload noplaybackrate"
                                      aria-label="play video"
                                    >
                                      <source src="https://scontent-lhr6-2.cdninstagram.com/o1/v/t2/f2/m86/AQMkG90PDU8OOA2I0gzpRVdBAIqzEpUPDVLe8fBrpkdIuuIoWy1QAR0iXwYs7X6qM9iqfYX4T2IrDmetZpBru2maU5oxQE0-DnP4EzA.mp4?_nc_cat=104&amp;_nc_sid=5e9851&amp;_nc_ht=scontent-lhr6-2.cdninstagram.com&amp;_nc_ohc=krmGhXP7XKoQ7kNvwENDQcu&amp;efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTE3NjUzNDMxNzgzODgyOSwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjE3LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&amp;ccb=17-1&amp;vs=e6b8f361cdd656cb&amp;_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9FMzQxQThBQkI2QjZCREQ4QUIxOTIzQUZBRTAyRjVBOV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HT2VlQ3lEeGJpWWZ2QVlGQVBvOW11UjdpQ3Q5YnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAm2sel4aeDlwQVAigCQzMsF0AxTMzMzMzNGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&amp;_nc_gid=W03zZrXY55evbdDEE5dCfQ&amp;edm=ANo9K5cEAAAA&amp;_nc_zt=28&amp;_nc_tpa=Q5bMBQElkX7f13sLbHz6XJV0y2EL3FSB1rmbUiHkP91mKO0yJPwf94cYkIEpAi2PFHitQp9wsimJuVXU-A&amp;oh=00_AfXARWa1PUKDptll-7aVPj6vgdoRF_Wh7_TS1WmulsvbRQ&amp;oe=68B8822D" />
                                    </video>
                                    <span className="video-play-icon-wrapper">
                                      <i
                                        className="video-play-icon"
                                        role="button"
                                        aria-label="video button, click to play in dialog"
                                      ></i>
                                    </span>
                                  </div>
                                </div>
                                <div className="content-container">
                                  <div className="post-content">
                                    <div className="post-header">
                                      <div className="username">
                                        <a
                                          href="https://www.instagram.com/violife_foods/"
                                          data-permalink="https://www.instagram.com/reel/DN_DBEZDdwf/"
                                          target="_blank"
                                          className="permalink"
                                          tabIndex={-1}
                                          title="Go to violife_foods instagram page"
                                        >
                                          violife_foods
                                        </a>
                                      </div>
                                    </div>
                                    <div className="caption" role="text">
                                      <p className="sr-only">
                                        violife_foods Instagram post, click to view in dialog.
                                        violife_foods Posted with caption
                                      </p>
                                      Need a quick dairy-free snack? Here are some Tomato Flights in
                                      under 20 seconds!
                                      <br />
                                      <br />
                                      <a
                                        href="https://www.instagram.com/explore/tags/SnackGame"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #SnackGame
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/DairyFree"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #DairyFree
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/Violife"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #Violife
                                      </a>
                                    </div>
                                  </div>
                                  <div className="post-footer">
                                    <div className="timestamp" role="text">
                                      <span aria-hidden="false" aria-label="Posted on"></span>Aug
                                      30, 2025, 6 PM
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              className="glide__slide"
                              style={{ width: '350px', marginLeft: '15px', marginRight: '15px' }}
                            >
                              <div
                                className="post"
                                id="18024297695721060"
                                tabIndex={-1}
                                role="article"
                                data-postno="5"
                                aria-hidden="true"
                              >
                                <div className="post-media">
                                  <span className="instagram-icon"></span>
                                  <div className="post-video-container post-video">
                                    <video
                                      className="lazy-bg-video "
                                      preload="none"
                                      playsInline
                                      muted
                                      disablePictureInPicture
                                      controlsList="nodownload noplaybackrate"
                                      aria-label="play video"
                                    >
                                      <source src="https://scontent-lhr8-2.cdninstagram.com/o1/v/t2/f2/m86/AQMHKzob-uxMnCBnQYESiQiopQ_GKqh5MfuA6MPh-comErh7DasoLTAFC6IVDm7xgcgjDrPkp7jD8okVmffnTRYifuNKbZdPR2xL73k.mp4?_nc_cat=103&amp;_nc_sid=5e9851&amp;_nc_ht=scontent-lhr8-2.cdninstagram.com&amp;_nc_ohc=k2bM2IyszUkQ7kNvwFC3FtD&amp;efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6NjQ3MjI0ODIxMzA1Nzg2LCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6MTcsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&amp;ccb=17-1&amp;vs=b5b86bd9174d1ddd&amp;_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9DMjRERUUwMjk2QzkwNENCQURDRTI3RDIwN0RBMTdBQV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HQ1VzS3lBb2dlb2VKYUVFQU1pdUJQMXBZQjRwYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAm9MaC2bippgIVAigCQzMsF0Ax7tkWhysCGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&amp;_nc_gid=W03zZrXY55evbdDEE5dCfQ&amp;edm=ANo9K5cEAAAA&amp;_nc_zt=28&amp;_nc_tpa=Q5bMBQFu5g-QzUGZpJguWSZ-7ouy49rh0lTZj46k0Sn_5y3aA9U0rb1eZXZql5i_eKMBEqpHRxCO6DFpoQ&amp;oh=00_AfUIAE68HEZKXN1rlhT7iiOyD8jt7mfXCXoavv4IoPXyEw&amp;oe=68B8761C" />
                                    </video>
                                    <span className="video-play-icon-wrapper">
                                      <i
                                        className="video-play-icon"
                                        role="button"
                                        aria-label="video button, click to play in dialog"
                                      ></i>
                                    </span>
                                  </div>
                                </div>
                                <div className="content-container">
                                  <div className="post-content">
                                    <div className="post-header">
                                      <div className="username">
                                        <a
                                          href="https://www.instagram.com/violife_foods/"
                                          data-permalink="https://www.instagram.com/reel/DN85wyugYEk/"
                                          target="_blank"
                                          className="permalink"
                                          tabIndex={-1}
                                          title="Go to violife_foods instagram page"
                                        >
                                          violife_foods
                                        </a>
                                      </div>
                                    </div>
                                    <div className="caption" role="text">
                                      <p className="sr-only">
                                        violife_foods Instagram post, click to view in dialog.
                                        violife_foods Posted with caption
                                      </p>
                                      Summer desserts just for more fun
                                      <br />
                                      <br />
                                      <a
                                        href="https://www.instagram.com/explore/tags/watermeloncake"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #watermeloncake
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/violife"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #violife
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/violifecake"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #violifecake
                                      </a>
                                    </div>
                                  </div>
                                  <div className="post-footer">
                                    <div className="timestamp" role="text">
                                      <span aria-hidden="false" aria-label="Posted on"></span>Aug
                                      29, 2025, 10 PM
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              className="glide__slide"
                              style={{ width: '350px', marginLeft: '15px', marginRight: '15px' }}
                            >
                              <div
                                className="post"
                                id="17853747594520019"
                                tabIndex={-1}
                                role="article"
                                data-postno="6"
                                aria-hidden="true"
                              >
                                <div className="post-media">
                                  <span className="instagram-icon"></span>
                                  <div className="post-video-container post-video">
                                    <video
                                      className="lazy-bg-video "
                                      preload="none"
                                      playsInline
                                      muted
                                      disablePictureInPicture
                                      controlsList="nodownload noplaybackrate"
                                      aria-label="play video"
                                    >
                                      <source src="https://scontent-lhr8-2.cdninstagram.com/o1/v/t2/f2/m86/AQPbYqw1lkqAjluNbywOJaFjLPE1vW4-t3csYckQGiJZGYC3atfrhrduvc_YGMRvqCoNOlf2wGZNzmX87VpcnUv6CtFo6WwwbSz1hmk.mp4?_nc_cat=103&amp;_nc_sid=5e9851&amp;_nc_ht=scontent-lhr8-2.cdninstagram.com&amp;_nc_ohc=l8CF4FoMJIcQ7kNvwFlsnqE&amp;efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTQ2OTc1MzU5NDIyODAxOCwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjEzLCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&amp;ccb=17-1&amp;vs=b07c9383434b0317&amp;_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9BNjRCOEQ3Q0Y4NUM4OTIxREUzRENFM0U2Q0IzRThBNF92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HS0xXS3lEQ2xqNEoyX2dDQUZWN0EtUUtWN2NDYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAm5LShzvWunAUVAigCQzMsF0Aq3bItDlYEGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&amp;_nc_gid=W03zZrXY55evbdDEE5dCfQ&amp;edm=ANo9K5cEAAAA&amp;_nc_zt=28&amp;_nc_tpa=Q5bMBQHDy-v-SlmNA0sblzNeOMZFW0x7LK9zXr4wwrAUFVEkr364isAeNwXq14n78FR9WvevoK5PPuEeIw&amp;oh=00_AfVeko-9SKxR9NmQ3WDYf107g2fQGb9NeRMQ4QQEWnij6Q&amp;oe=68B87DC8" />
                                    </video>
                                    <span className="video-play-icon-wrapper">
                                      <i
                                        className="video-play-icon"
                                        role="button"
                                        aria-label="video button, click to play in dialog"
                                      ></i>
                                    </span>
                                  </div>
                                </div>
                                <div className="content-container">
                                  <div className="post-content">
                                    <div className="post-header">
                                      <div className="username">
                                        <a
                                          href="https://www.instagram.com/violife_foods/"
                                          data-permalink="https://www.instagram.com/reel/DN8JroWANTM/"
                                          target="_blank"
                                          className="permalink"
                                          tabIndex={-1}
                                          title="Go to violife_foods instagram page"
                                        >
                                          violife_foods
                                        </a>
                                      </div>
                                    </div>
                                    <div className="caption" role="text">
                                      <p className="sr-only">
                                        violife_foods Instagram post, click to view in dialog.
                                        violife_foods Posted with caption
                                      </p>
                                      Propaganda we’re falling for 😍🧋
                                      <br />
                                      <br />
                                      <a
                                        href="https://www.instagram.com/explore/tags/violife"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #violife
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/coconut"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #coconut
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/coconutwaterlatte"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #coconutwaterlatte
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/viralrecipe"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #viralrecipe
                                      </a>
                                    </div>
                                  </div>
                                  <div className="post-footer">
                                    <div className="timestamp" role="text">
                                      <span aria-hidden="false" aria-label="Posted on"></span>Aug
                                      29, 2025, 3 PM
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              className="glide__slide"
                              style={{ width: '350px', marginLeft: '15px', marginRight: '15px' }}
                            >
                              <div
                                className="post"
                                id="18083020732882407"
                                tabIndex={-1}
                                role="article"
                                data-postno="7"
                                aria-hidden="true"
                              >
                                <div className="post-media">
                                  <span className="instagram-icon"></span>
                                  <div className="post-video-container post-video">
                                    <video
                                      className="lazy-bg-video "
                                      preload="none"
                                      playsInline
                                      muted
                                      disablePictureInPicture
                                      controlsList="nodownload noplaybackrate"
                                      aria-label="play video"
                                    >
                                      <source src="https://scontent-lhr6-2.cdninstagram.com/o1/v/t2/f2/m86/AQP403cDSAv_xnvbBj4nY65r4vfGyXBZRFTO_LdruIqgdGRH2lgN-yOcOe77wD9rZ6BqqmlHeeBY0RheICeuvTCD7JPH4LbjyFhjmOg.mp4?_nc_cat=104&amp;_nc_sid=5e9851&amp;_nc_ht=scontent-lhr6-2.cdninstagram.com&amp;_nc_ohc=1vd-fkQumhIQ7kNvwFVMIsr&amp;efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTQzNTAzODYzNzYxOTIxMywidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjE0LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&amp;ccb=17-1&amp;vs=4211335e349ff715&amp;_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9CMDQyN0RFRUEwOUY3QzlGNjlEMDE1REVFODVGNzRCOF92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HQ0MySXlEdWZwUTdTR29HQUl3S0NOR2N1dTRxYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmmuDfg5_KjAUVAigCQzMsF0Asd0vGp--eGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&amp;_nc_gid=W03zZrXY55evbdDEE5dCfQ&amp;edm=ANo9K5cEAAAA&amp;_nc_zt=28&amp;_nc_tpa=Q5bMBQG9HWOMorwokpoiLXUPuGlK8bpp11L8ETrn-tSsDOfk98rrP66i7sABqhIKXTkPFK7EacC50akrrA&amp;oh=00_AfVrpuOnUIUhBmKKCA81JdcAZ8qK_vyEnWpLyumDYEqsJg&amp;oe=68B86AA9" />
                                    </video>
                                    <span className="video-play-icon-wrapper">
                                      <i
                                        className="video-play-icon"
                                        role="button"
                                        aria-label="video button, click to play in dialog"
                                      ></i>
                                    </span>
                                  </div>
                                </div>
                                <div className="content-container">
                                  <div className="post-content">
                                    <div className="post-header">
                                      <div className="username">
                                        <a
                                          href="https://www.instagram.com/violife_foods/"
                                          data-permalink="https://www.instagram.com/reel/DN6bs9slETn/"
                                          target="_blank"
                                          className="permalink"
                                          tabIndex={-1}
                                          title="Go to violife_foods instagram page"
                                        >
                                          violife_foods
                                        </a>
                                      </div>
                                    </div>
                                    <div className="caption" role="text">
                                      <p className="sr-only">
                                        violife_foods Instagram post, click to view in dialog.
                                        violife_foods Posted with caption
                                      </p>
                                      Serving Violife all day everyday 💃
                                      <br />
                                      <br />
                                      <a
                                        href="https://www.instagram.com/explore/tags/violife"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #violife
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/trend"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #trend
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/serving"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #serving
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/throwingafit"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #throwingafit
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/dairyfree"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #dairyfree
                                      </a>
                                    </div>
                                  </div>
                                  <div className="post-footer">
                                    <div className="timestamp" role="text">
                                      <span aria-hidden="false" aria-label="Posted on"></span>Aug
                                      28, 2025, 11 PM
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              className="glide__slide"
                              style={{ width: '350px', marginLeft: '15px', marginRight: '15px' }}
                            >
                              <div
                                className="post"
                                id="18100250269610030"
                                tabIndex={-1}
                                role="article"
                                data-postno="8"
                                aria-hidden="true"
                              >
                                <div className="post-media">
                                  <span className="instagram-icon"></span>
                                  <div className="post-video-container post-video">
                                    <video
                                      className="lazy-bg-video "
                                      preload="none"
                                      playsInline
                                      muted
                                      disablePictureInPicture
                                      controlsList="nodownload noplaybackrate"
                                      aria-label="play video"
                                    >
                                      <source src="https://scontent-lhr8-1.cdninstagram.com/o1/v/t2/f2/m86/AQPgM_-Tvu3aM_TKyA1Pc6npRsloyzUAwmvjh8CIzpWOGuGdN928PRILsoI_eLl6l-rhKccaB3MIA3xAsuhUYYOeTyDG_ItYy8RUdt8.mp4?_nc_cat=108&amp;_nc_sid=5e9851&amp;_nc_ht=scontent-lhr8-1.cdninstagram.com&amp;_nc_ohc=le30ZhOGLqYQ7kNvwHFtnvV&amp;efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTE1NDIxMjk3NjYxMzY5MywidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjE5LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&amp;ccb=17-1&amp;vs=b334c8bd3e67be40&amp;_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9GQzRBMDI0QjM4RjkxMjUzNkNGQkY4QUYwNEREMjE4MF92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HREhGRGlDMEdfV0s5OWtEQUZxenV5d2VLRDh3YnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAm-uS654TwjAQVAigCQzMsF0AzXbItDlYEGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&amp;_nc_gid=W03zZrXY55evbdDEE5dCfQ&amp;edm=ANo9K5cEAAAA&amp;_nc_zt=28&amp;_nc_tpa=Q5bMBQFcsPWidOs0yV1dTKgUKtVyECaSeHrC5KSGg-FVIl1PA6xV-YV3t0i7n8t19Ib7Dd6zNzOWmQtEjA&amp;oh=00_AfUYHYrrNDJBrZlkzqdLQh8N56ESyZJK5S2LjmrHinCCxA&amp;oe=68B867F5" />
                                    </video>
                                    <span className="video-play-icon-wrapper">
                                      <i
                                        className="video-play-icon"
                                        role="button"
                                        aria-label="video button, click to play in dialog"
                                      ></i>
                                    </span>
                                  </div>
                                </div>
                                <div className="content-container">
                                  <div className="post-content">
                                    <div className="post-header">
                                      <div className="username">
                                        <a
                                          href="https://www.instagram.com/violife_foods/"
                                          data-permalink="https://www.instagram.com/reel/DN6AaauDwZi/"
                                          target="_blank"
                                          className="permalink"
                                          tabIndex={-1}
                                          title="Go to violife_foods instagram page"
                                        >
                                          violife_foods
                                        </a>
                                      </div>
                                    </div>
                                    <div className="caption" role="text">
                                      <p className="sr-only">
                                        violife_foods Instagram post, click to view in dialog.
                                        violife_foods Posted with caption
                                      </p>
                                      A snack that will leave a lasting impression with no tummy
                                      issues
                                      <br />
                                      <br />
                                      <a
                                        href="https://www.instagram.com/explore/tags/violife"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #violife
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/snackgame"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #snackgame
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/cucumberfeta"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #cucumberfeta
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/jenga"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #jenga
                                      </a>
                                    </div>
                                  </div>
                                  <div className="post-footer">
                                    <div className="timestamp" role="text">
                                      <span aria-hidden="false" aria-label="Posted on"></span>Aug
                                      28, 2025, 7 PM
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              className="glide__slide"
                              style={{ width: '350px', marginLeft: '15px', marginRight: '15px' }}
                            >
                              <div
                                className="post"
                                id="17930443488068186"
                                tabIndex={-1}
                                role="article"
                                data-postno="9"
                                aria-hidden="true"
                              >
                                <div className="post-media">
                                  <span className="instagram-icon"></span>
                                  <div className="post-carousel-icon"></div>
                                  <div
                                    className="post-image post-carousel lazy-bg"
                                    style={{
                                      backgroundImage: `url(https://scontent-lhr6-2.cdninstagram.com/v/t51.82787-15/539475332_18523366486047494_2437826440136402650_n.webp?stp=dst-jpg_e35_tt6&amp;_nc_cat=104&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=9icXOVRKXe0Q7kNvwF3pdC1&amp;_nc_oc=AdnQ5WTXnYroJvln7AIUQvGhWxGumtT3oh0OKuOpOM1KmNehVzxBhwa2UeaLC2vIjpc&amp;_nc_zt=23&amp;_nc_ht=scontent-lhr6-2.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;_nc_gid=W03zZrXY55evbdDEE5dCfQ&amp;oh=00_AfXbDZnTxAaCNMImUpodsU7i0BXDedvaDRD_QADZ24ZGnw&amp;oe=68BC7EA6)`,
                                    }}
                                    role="img"
                                  ></div>
                                  <div className="carousel-media">
                                    <div
                                      className="bullets"
                                      tabIndex={0}
                                      role="button"
                                      aria-label="Carousel slide 1"
                                    >
                                      <span>
                                        <i data-index={0} data-mediatype="image"></i>
                                        <div
                                          className="carousel-image"
                                          style={{
                                            backgroundImage:
                                              'url(https://scontent-lhr6-2.cdninstagram.com/v/t51.82787-15/539475332_18523366486047494_2437826440136402650_n.webp?stp=dst-jpg_e35_tt6&amp;_nc_cat=104&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=9icXOVRKXe0Q7kNvwF3pdC1&amp;_nc_oc=AdnQ5WTXnYroJvln7AIUQvGhWxGumtT3oh0OKuOpOM1KmNehVzxBhwa2UeaLC2vIjpc&amp;_nc_zt=23&amp;_nc_ht=scontent-lhr6-2.cdninstagram.com&amp;edm=ABbrh9MEAAAA&amp;_nc_gid=5C0jT-AlbVqmXCodFXNjwg&amp;oh=00_AfVhRucqsT0n9VjT57I_USr3F1w-Hz2PEN7N2c1oJ99BVw&amp;oe=68BC7EA6)',
                                          }}
                                        ></div>
                                      </span>
                                    </div>
                                    <div
                                      className="bullets"
                                      tabIndex={0}
                                      role="button"
                                      aria-label="Carousel slide 2"
                                    >
                                      <span>
                                        <i data-index="1" data-mediatype="image"></i>
                                        <div
                                          className="carousel-image"
                                          style={{
                                            backgroundImage:
                                              'url(https://scontent-lhr8-1.cdninstagram.com/v/t51.82787-15/539303976_18523366495047494_9200884438776311276_n.webp?stp=dst-jpg_e35_tt6&amp;_nc_cat=111&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=Uuaz4nC-4NsQ7kNvwG0nznv&amp;_nc_oc=Adn3y2sJP6Vw5YNmsqF8B0G0aKy9VUQkHz9lGdG5t6MhY18AdZUXXWm_FtGtuh8ADgM&amp;_nc_zt=23&amp;_nc_ht=scontent-lhr8-1.cdninstagram.com&amp;edm=ABbrh9MEAAAA&amp;_nc_gid=5C0jT-AlbVqmXCodFXNjwg&amp;oh=00_AfUWbYFzezEywgZ_ZGxlwMyZUlWbmWJ6vSGfStS0A_amgg&amp;oe=68BC71A3)',
                                          }}
                                        ></div>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-container">
                                  <div className="post-content">
                                    <div className="post-header">
                                      <div className="username">
                                        <a
                                          href="https://www.instagram.com/violife_foods/"
                                          data-permalink="https://www.instagram.com/p/DN30z9MQvOt/"
                                          target="_blank"
                                          className="permalink"
                                          tabIndex={-1}
                                          title="Go to violife_foods instagram page"
                                        >
                                          violife_foods
                                        </a>
                                      </div>
                                    </div>
                                    <div className="caption" role="text">
                                      <p className="sr-only">
                                        violife_foods Instagram post, click to view in dialog.
                                        violife_foods Posted with caption
                                      </p>
                                      T&amp;T go together like a Bagel and Violife cream cheese 💕💕
                                      <br />
                                      <br />
                                      <a
                                        href="https://www.instagram.com/explore/tags/violife"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #violife
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/violifecheese"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #violifecheese
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/dairyfree"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #dairyfree
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/tswift"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #tswift
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/flexitarian"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #flexitarian
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/bagelandcreamcheese"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #bagelandcreamcheese
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/engagement"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #engagement
                                      </a>
                                    </div>
                                  </div>
                                  <div className="post-footer">
                                    <div className="timestamp" role="text">
                                      <span aria-hidden="false" aria-label="Posted on"></span>Aug
                                      27, 2025, 10 PM
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              className="glide__slide"
                              style={{ width: '350px', marginLeft: '15px', marginRight: '15px' }}
                            >
                              <div
                                className="post"
                                id="18386041855120511"
                                tabIndex={-1}
                                role="article"
                                data-postno="10"
                                aria-hidden="true"
                              >
                                <div className="post-media">
                                  <span className="instagram-icon"></span>
                                  <div className="post-video-container post-video">
                                    <video
                                      className="lazy-bg-video "
                                      preload="none"
                                      playsInline
                                      muted
                                      disablePictureInPicture
                                      controlsList="nodownload noplaybackrate"
                                      aria-label="play video"
                                    >
                                      <source src="https://scontent-lhr6-2.cdninstagram.com/o1/v/t2/f2/m86/AQN9F-Pc_V4op62w5XpIh24a95JrhKuNX5uIFVKN82KzTJ2OsBgyk2mLxaIGR79IC8iRdHZlqQNFj9P_FLC736cQwvSgQFu-VDi97dY.mp4?_nc_cat=105&amp;_nc_sid=5e9851&amp;_nc_ht=scontent-lhr6-2.cdninstagram.com&amp;_nc_ohc=rkLtGemSq44Q7kNvwEmqpGh&amp;efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MjE4MDI4NDg4OTE1OTc1MCwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjEzLCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&amp;ccb=17-1&amp;vs=50312a836aff1892&amp;_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9DRjQ2Mjc1MTY2NDA4NDgyQjFBNkNCOURENkZBMzM4RV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HTGpQNVI4a3FOaVpPNE1FQU15X01TRF9DbHNDYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmjOGepaS93wcVAigCQzMsF0Aqu2RaHKwIGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&amp;_nc_gid=W03zZrXY55evbdDEE5dCfQ&amp;edm=ANo9K5cEAAAA&amp;_nc_zt=28&amp;_nc_tpa=Q5bMBQE1R-PXt4trQ3gT5o-IrfWPWHBbsQ8ip_89E4zqKOlLIDCM22FusAwV62DAzsAiZg4rQ84vDIsnDg&amp;oh=00_AfWf25WHU6nQvb5XXLU6YfH25O7H_2iRwINWjT4JiikXCA&amp;oe=68B88A2E" />
                                    </video>
                                    <span className="video-play-icon-wrapper">
                                      <i
                                        className="video-play-icon"
                                        role="button"
                                        aria-label="video button, click to play in dialog"
                                      ></i>
                                    </span>
                                  </div>
                                </div>
                                <div className="content-container">
                                  <div className="post-content">
                                    <div className="post-header">
                                      <div className="username">
                                        <a
                                          href="https://www.instagram.com/violife_foods/"
                                          data-permalink="https://www.instagram.com/reel/DN3N2db2LAl/"
                                          target="_blank"
                                          className="permalink"
                                          tabIndex={-1}
                                          title="Go to violife_foods instagram page"
                                        >
                                          violife_foods
                                        </a>
                                      </div>
                                    </div>
                                    <div className="caption" role="text">
                                      <p className="sr-only">
                                        violife_foods Instagram post, click to view in dialog.
                                        violife_foods Posted with caption
                                      </p>
                                      A simple but tasty lunch your kids will love <br />
                                      <br />
                                      <a
                                        href="https://www.instagram.com/explore/tags/violife"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #violife
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/backtoschool"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #backtoschool
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/dairyfreelunch"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #dairyfreelunch
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/backtoschoollunch"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #backtoschoollunch
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/schoollunch"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #schoollunch
                                      </a>
                                    </div>
                                  </div>
                                  <div className="post-footer">
                                    <div className="timestamp" role="text">
                                      <span aria-hidden="false" aria-label="Posted on"></span>Aug
                                      27, 2025, 5 PM
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              className="glide__slide"
                              style={{ width: '350px', marginLeft: '15px', marginRight: '15px' }}
                            >
                              <div
                                className="post"
                                id="17936396736065124"
                                tabIndex={-1}
                                role="article"
                                data-postno="11"
                                aria-hidden="true"
                              >
                                <div className="post-media">
                                  <span className="instagram-icon"></span>
                                  <div className="post-video-container post-video">
                                    <video
                                      className="lazy-bg-video "
                                      preload="none"
                                      playsInline
                                      muted
                                      disablePictureInPicture
                                      controlsList="nodownload noplaybackrate"
                                      aria-label="play video"
                                    >
                                      <source src="https://scontent-lhr8-1.cdninstagram.com/o1/v/t2/f2/m86/AQOQxkYTKe1nvBJMsVKq41ILfhCX12D0l_ZUgTLwkyn2kAkmmPC0muREB1mepPZQ2sOZ7IwhugjBRn4P45yEr0HrP158kxFgPRi0V_I.mp4?_nc_cat=111&amp;_nc_sid=5e9851&amp;_nc_ht=scontent-lhr8-1.cdninstagram.com&amp;_nc_ohc=hlXQEfgRJnMQ7kNvwGspItg&amp;efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTgxMjE1NzkxNjA1MDI2MiwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjE4LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&amp;ccb=17-1&amp;vs=a7b1def968aac75c&amp;_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9GNDQ5NUM5QzFGMjE5MzlBOEVBNjY3OUNBN0IwRUFBRF92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HTE94SXlBNU5KVlVsSEFHQUtPMl8wRDNLNFk0YnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmrM3nzbyJuAYVAigCQzMsF0AyMzMzMzMzGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&amp;_nc_gid=W03zZrXY55evbdDEE5dCfQ&amp;edm=ANo9K5cEAAAA&amp;_nc_zt=28&amp;_nc_tpa=Q5bMBQFoeezLWE0USkcb3ShMOMgoy-vPnXMvWiTtV9vOai_DK30IkCJl1PQP9fASVkkUcgH5iqp97h-nLA&amp;oh=00_AfUjJQghLpmXwrrbPa3ciYunx6WOfHjuL7EUO_EplEHFBg&amp;oe=68B871A8" />
                                    </video>
                                    <span className="video-play-icon-wrapper">
                                      <i
                                        className="video-play-icon"
                                        role="button"
                                        aria-label="video button, click to play in dialog"
                                      ></i>
                                    </span>
                                  </div>
                                </div>
                                <div className="content-container">
                                  <div className="post-content">
                                    <div className="post-header">
                                      <div className="username">
                                        <a
                                          href="https://www.instagram.com/violife_foods/"
                                          data-permalink="https://www.instagram.com/reel/DN1Eeko5ATM/"
                                          target="_blank"
                                          className="permalink"
                                          tabIndex={-1}
                                          title="Go to violife_foods instagram page"
                                        >
                                          violife_foods
                                        </a>
                                      </div>
                                    </div>
                                    <div className="caption" role="text">
                                      <p className="sr-only">
                                        violife_foods Instagram post, click to view in dialog.
                                        violife_foods Posted with caption
                                      </p>
                                      IYKYK 😋
                                      <br />
                                      <br />
                                      <a
                                        href="https://www.instagram.com/explore/tags/violife"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #violife
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/copycatrecipe"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #copycatrecipe
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/recipetutorial"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #recipetutorial
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/wrap"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #wrap
                                      </a>
                                    </div>
                                  </div>
                                  <div className="post-footer">
                                    <div className="timestamp" role="text">
                                      <span aria-hidden="false" aria-label="Posted on"></span>Aug
                                      26, 2025, 9 PM
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              className="glide__slide"
                              style={{ width: '350px', marginLeft: '15px', marginRight: '15px' }}
                            >
                              <div
                                className="post"
                                id="18414887398107618"
                                tabIndex={-1}
                                role="article"
                                data-postno="12"
                                aria-hidden="true"
                              >
                                <div className="post-media">
                                  <span className="instagram-icon"></span>
                                  <div className="post-video-container post-video">
                                    <video
                                      className="lazy-bg-video "
                                      preload="none"
                                      playsInline
                                      muted
                                      disablePictureInPicture
                                      controlsList="nodownload noplaybackrate"
                                      aria-label="play video"
                                    >
                                      <source src="https://scontent-lhr8-1.cdninstagram.com/o1/v/t2/f2/m86/AQOFQ0Tg6iX0I42rYkxKdlUOi7JJYUi0Sz0Dl3rU9W78JYJJoTP-jDy7L5IbiuALIDctTY5Q0A_SsIEEvjepKEiWlV6gZWwJfo3ucB0.mp4?_nc_cat=108&amp;_nc_sid=5e9851&amp;_nc_ht=scontent-lhr8-1.cdninstagram.com&amp;_nc_ohc=YCEKdf0aPcoQ7kNvwFVZVLH&amp;efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6NjI0NTc2NDYzNzUzNzQ2LCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6OCwidXJsZ2VuX3NvdXJjZSI6Ind3dyJ9&amp;ccb=17-1&amp;vs=98818e29e6e7f62a&amp;_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC8xRTQ2REMwOTEyNEYyNjUxRjhEMEZGQjdEN0YzNkZCMl92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HQXVzSXlBVnJrZ0ZsTmtEQUhqT0I0OFg2ZEkzYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmpMiOpJGDnAIVAigCQzMsF0AgAAAAAAAAGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&amp;_nc_gid=W03zZrXY55evbdDEE5dCfQ&amp;edm=ANo9K5cEAAAA&amp;_nc_zt=28&amp;_nc_tpa=Q5bMBQG-Za8EkvKjjFACO67LNNuo2BxE7wxWB0P5TjukWS3dZIsMSg0dvwe05GwudVK4gLn2okr9e-u_-g&amp;oh=00_AfVtC8eu6zWArFZCEBpb1JZvUdpHYf5VCvVFY1o12hzysw&amp;oe=68B878F1" />
                                    </video>
                                    <span className="video-play-icon-wrapper">
                                      <i
                                        className="video-play-icon"
                                        role="button"
                                        aria-label="video button, click to play in dialog"
                                      ></i>
                                    </span>
                                  </div>
                                </div>
                                <div className="content-container">
                                  <div className="post-content">
                                    <div className="post-header">
                                      <div className="username">
                                        <a
                                          href="https://www.instagram.com/violife_foods/"
                                          data-permalink="https://www.instagram.com/reel/DNyxHhcUr-A/"
                                          target="_blank"
                                          className="permalink"
                                          tabIndex={-1}
                                          title="Go to violife_foods instagram page"
                                        >
                                          violife_foods
                                        </a>
                                      </div>
                                    </div>
                                    <div className="caption" role="text">
                                      <p className="sr-only">
                                        violife_foods Instagram post, click to view in dialog.
                                        violife_foods Posted with caption
                                      </p>
                                      He spins the dough, I sip my drink. We both win
                                      <br />
                                      <br />
                                      <a
                                        href="https://www.instagram.com/explore/tags/violife"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #violife
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/violifepizza"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #violifepizza
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/violifedatenight"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #violifedatenight
                                      </a>
                                    </div>
                                  </div>
                                  <div className="post-footer">
                                    <div className="timestamp" role="text">
                                      <span aria-hidden="false" aria-label="Posted on"></span>Aug
                                      25, 2025, 11 PM
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              className="glide__slide"
                              style={{ width: '350px', marginLeft: '15px', marginRight: '15px' }}
                            >
                              <div
                                className="post"
                                id="17918837526119957"
                                tabIndex={-1}
                                role="article"
                                data-postno="13"
                                aria-hidden="true"
                              >
                                <div className="post-media">
                                  <span className="instagram-icon"></span>
                                  <div
                                    className="post-image lazy-bg"
                                    style={{
                                      backgroundImage: `url(https://scontent-lhr6-1.cdninstagram.com/v/t39.30808-6/536029209_806684138382834_4865464493319334978_n.jpg?stp=dst-jpg_e35_tt6&amp;_nc_cat=110&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=f_yTEJlvRnAQ7kNvwHMJSC2&amp;_nc_oc=Admk9Q1R_kBgCrHWft4Q9zlUP_kLQajzIYyYu4WM-_QF2Ppq-JbdJqa_6LTe7ZpV59M&amp;_nc_zt=23&amp;_nc_ht=scontent-lhr6-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;_nc_gid=W03zZrXY55evbdDEE5dCfQ&amp;oh=00_AfWOzNv15CPSpZS86SnPN7eIUx2ko-7gRXCiCmOwKh9HuQ&amp;oe=68BC6CF7)`,
                                    }}
                                    role="img"
                                  ></div>
                                </div>
                                <div className="content-container">
                                  <div className="post-content">
                                    <div className="post-header">
                                      <div className="username">
                                        <a
                                          href="https://www.instagram.com/violife_foods/"
                                          data-permalink="https://www.instagram.com/p/DNyfojLWHa4/"
                                          target="_blank"
                                          className="permalink"
                                          tabIndex={-1}
                                          title="Go to violife_foods instagram page"
                                        >
                                          violife_foods
                                        </a>
                                      </div>
                                    </div>
                                    <div className="caption" role="text">
                                      <p className="sr-only">
                                        violife_foods Instagram post, click to view in dialog.
                                        violife_foods Posted with caption
                                      </p>
                                      Can I get a ❤️ for Dairy Free mozzarella shreds 🙏
                                      <br />
                                      <br />
                                      <a
                                        href="https://www.instagram.com/explore/tags/violife"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #violife
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/socialmediamanager"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #socialmediamanager
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/dairyfree"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #dairyfree
                                      </a>
                                    </div>
                                  </div>
                                  <div className="post-footer">
                                    <div className="timestamp" role="text">
                                      <span aria-hidden="false" aria-label="Posted on"></span>Aug
                                      25, 2025, 9 PM
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              className="glide__slide"
                              style={{ width: '350px', marginLeft: '15px', marginRight: '15px' }}
                            >
                              <div
                                className="post"
                                id="18078097246978852"
                                tabIndex={-1}
                                role="article"
                                data-postno="14"
                                aria-hidden="true"
                              >
                                <div className="post-media">
                                  <span className="instagram-icon"></span>
                                  <div
                                    className="post-image lazy-bg"
                                    style={{
                                      backgroundImage: `url(https://scontent-lhr8-2.cdninstagram.com/v/t39.30808-6/536274974_809169338134314_9167583698564965559_n.jpg?stp=dst-jpg_e35_tt6&amp;_nc_cat=101&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=s9f9qXEowKMQ7kNvwHKdT_O&amp;_nc_oc=AdnYEEOQRPd4NBzfAf97ZU3upgKX1UPJTf8PXDxTGfraca4NK5ZkGB2IDSi4ZGKMzds&amp;_nc_zt=23&amp;_nc_ht=scontent-lhr8-2.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;_nc_gid=W03zZrXY55evbdDEE5dCfQ&amp;oh=00_AfWgtxJai0apq4KMADTBR6BSuZG0sI8-HfDdj3WTA1d9jQ&amp;oe=68BC67A1)`,
                                    }}
                                    role="img"
                                  ></div>
                                </div>
                                <div className="content-container">
                                  <div className="post-content">
                                    <div className="post-header">
                                      <div className="username">
                                        <a
                                          href="https://www.instagram.com/violife_foods/"
                                          data-permalink="https://www.instagram.com/p/DNx2Y8PRAa-/"
                                          target="_blank"
                                          className="permalink"
                                          tabIndex={-1}
                                          title="Go to violife_foods instagram page"
                                        >
                                          violife_foods
                                        </a>
                                      </div>
                                    </div>
                                    <div className="caption" role="text">
                                      <p className="sr-only">
                                        violife_foods Instagram post, click to view in dialog.
                                        violife_foods Posted with caption
                                      </p>
                                      Soooooo that peach scene also lives rent-free in your head
                                      too? 🍑👀
                                      <br />
                                      <br />
                                      <a
                                        href="https://www.instagram.com/explore/tags/dairyfree"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #dairyfree
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/Violife"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #Violife
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/peach"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #peach
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/summerflavor"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #summerflavor
                                      </a>
                                    </div>
                                  </div>
                                  <div className="post-footer">
                                    <div className="timestamp" role="text">
                                      <span aria-hidden="false" aria-label="Posted on"></span>Aug
                                      25, 2025, 3 PM
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              className="glide__slide"
                              style={{ width: '350px', marginLeft: '15px', marginRight: '15px' }}
                            >
                              <div
                                className="post"
                                id="18075582565998069"
                                tabIndex={-1}
                                role="article"
                                data-postno="15"
                                aria-hidden="true"
                              >
                                <div className="post-media">
                                  <span className="instagram-icon"></span>
                                  <div className="post-video-container post-video">
                                    <video
                                      className="lazy-bg-video "
                                      preload="none"
                                      playsInline
                                      muted
                                      disablePictureInPicture
                                      controlsList="nodownload noplaybackrate"
                                      aria-label="play video"
                                    >
                                      <source src="https://scontent-lhr8-1.cdninstagram.com/o1/v/t2/f2/m86/AQM9uoqC6Cg5l0ZAOqg4Q9pi-5oc5jhNnPJzQnfTZW6n8Xt1N-LB4eo3S2lJ0DfiRdkvJ7_45DFy3NC0eQUscYXIfDJ23l8FbNIxElA.mp4?_nc_cat=108&amp;_nc_sid=5e9851&amp;_nc_ht=scontent-lhr8-1.cdninstagram.com&amp;_nc_ohc=dl0mxjBE14wQ7kNvwHkaVX3&amp;efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTQ2NTgwNzIyMTIzMTM5OCwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjUsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&amp;ccb=17-1&amp;vs=c39099ad0121477c&amp;_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9BNjQ1NzQyMUUwNTY3RjA3Mzc3RThDRDlCMzE5OTU4MV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HRkRBRGlEeGIwRkNXZDBEQUsxeFozRFNBOFpvYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmzLzY65rJmgUVAigCQzMsF0AW7peNT987GBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&amp;_nc_gid=W03zZrXY55evbdDEE5dCfQ&amp;edm=ANo9K5cEAAAA&amp;_nc_zt=28&amp;_nc_tpa=Q5bMBQFbIPCV5UA946hQRpRegcdINnupqq0GlcJ0J0vfBgYj_kk4nIPUip5T93yDwknj6jk037CI-uFjJQ&amp;oh=00_AfVoeY3CluIWwjpZA5LvtN1p6qopwSGzMUZfoRcFu0zwiA&amp;oe=68B89361" />
                                    </video>
                                    <span className="video-play-icon-wrapper">
                                      <i
                                        className="video-play-icon"
                                        role="button"
                                        aria-label="video button, click to play in dialog"
                                      ></i>
                                    </span>
                                  </div>
                                </div>
                                <div className="content-container">
                                  <div className="post-content">
                                    <div className="post-header">
                                      <div className="username">
                                        <a
                                          href="https://www.instagram.com/violife_foods/"
                                          data-permalink="https://www.instagram.com/reel/DNtFYG_WlH-/"
                                          target="_blank"
                                          className="permalink"
                                          tabIndex={-1}
                                          title="Go to violife_foods instagram page"
                                        >
                                          violife_foods
                                        </a>
                                      </div>
                                    </div>
                                    <div className="caption" role="text">
                                      <p className="sr-only">
                                        violife_foods Instagram post, click to view in dialog.
                                        violife_foods Posted with caption
                                      </p>
                                      Sorry the universe said so, we don&quot;t make the rules.
                                      <br />
                                      <br />
                                      <a
                                        href="https://www.instagram.com/explore/tags/dairyfree"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #dairyfree
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/violife"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #violife
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/plantbased"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #plantbased
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/coffee"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #coffee
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/coffeecreamer"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #coffeecreamer
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/latte"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #latte
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/flexitarian"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #flexitarian
                                      </a>
                                    </div>
                                  </div>
                                  <div className="post-footer">
                                    <div className="timestamp" role="text">
                                      <span aria-hidden="false" aria-label="Posted on"></span>Aug
                                      23, 2025, 6 PM
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              className="glide__slide"
                              style={{ width: '350px', marginLeft: '15px', marginRight: '15px' }}
                            >
                              <div
                                className="post"
                                id="18090369973743914"
                                tabIndex={-1}
                                role="article"
                                data-postno="16"
                                aria-hidden="true"
                              >
                                <div className="post-media">
                                  <span className="instagram-icon"></span>
                                  <div
                                    className="post-image lazy-bg"
                                    style={{
                                      backgroundImage: `url(https://scontent-lhr8-1.cdninstagram.com/v/t39.30808-6/532425224_802814658769782_1286197197032861851_n.jpg?stp=dst-jpg_e35_tt6&amp;_nc_cat=107&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=AGXX_NaX_OAQ7kNvwHJPRTI&amp;_nc_oc=AdmZSOgiaxEQndHzxRXnejN3txmPac3_BjWH29uAuGoAhyPz4Ed9pE_c3QPMLiu3TBk&amp;_nc_zt=23&amp;_nc_ht=scontent-lhr8-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;_nc_gid=W03zZrXY55evbdDEE5dCfQ&amp;oh=00_AfWroCLd5BiSToMG_f4OArnyNPnpsobaqtgZz6sFCwlwIw&amp;oe=68BC678A)`,
                                    }}
                                    role="img"
                                  ></div>
                                </div>
                                <div className="content-container">
                                  <div className="post-content">
                                    <div className="post-header">
                                      <div className="username">
                                        <a
                                          href="https://www.instagram.com/violife_foods/"
                                          data-permalink="https://www.instagram.com/p/DNqjYcUi6MX/"
                                          target="_blank"
                                          className="permalink"
                                          tabIndex={-1}
                                          title="Go to violife_foods instagram page"
                                        >
                                          violife_foods
                                        </a>
                                      </div>
                                    </div>
                                    <div className="caption" role="text">
                                      <p className="sr-only">
                                        violife_foods Instagram post, click to view in dialog.
                                        violife_foods Posted with caption
                                      </p>
                                      4 words: dairy free tomato flights <br />
                                      <br />
                                      <a
                                        href="https://www.instagram.com/explore/tags/farmersmarket"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #farmersmarket
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/farmersmarketfinds"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #farmersmarketfinds
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/tomatogirlsummer"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #tomatogirlsummer
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/dairyfree"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #dairyfree
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/Violife"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #Violife
                                      </a>
                                    </div>
                                  </div>
                                  <div className="post-footer">
                                    <div className="timestamp" role="text">
                                      <span aria-hidden="false" aria-label="Posted on"></span>Aug
                                      22, 2025, 7 PM
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              className="glide__slide"
                              style={{ width: '350px', marginLeft: '15px', marginRight: '15px' }}
                            >
                              <div
                                className="post"
                                id="18071377538032725"
                                tabIndex={-1}
                                role="article"
                                data-postno="17"
                                aria-hidden="true"
                              >
                                <div className="post-media">
                                  <span className="instagram-icon"></span>
                                  <div className="post-carousel-icon"></div>
                                  <div
                                    className="post-image post-carousel lazy-bg"
                                    style={{
                                      backgroundImage: `url(https://scontent-lhr8-2.cdninstagram.com/v/t39.30808-6/535906357_806682978382950_6358418381833432613_n.jpg?stp=dst-jpg_e35_tt6&amp;_nc_cat=101&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=GCLckUdBAIUQ7kNvwHMwR03&amp;_nc_oc=Adk6x5JBms0PYCiqwE-h-6wsoIwkwFzjWiQi7MZqoj0m3_Vdbx9Yj_RPCygJTRR-QxM&amp;_nc_zt=23&amp;_nc_ht=scontent-lhr8-2.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;_nc_gid=W03zZrXY55evbdDEE5dCfQ&amp;oh=00_AfUAIGR1-wSR1onFNkDISIjp8q6Dah8NARq-BC0N5DXaqg&amp;oe=68BC5869)`,
                                    }}
                                    role="img"
                                  ></div>
                                  <div className="carousel-media">
                                    <div
                                      className="bullets"
                                      tabIndex={0}
                                      role="button"
                                      aria-label="Carousel slide 1"
                                    >
                                      <span>
                                        <i data-index={0} data-mediatype="image"></i>
                                        <div
                                          className="carousel-image"
                                          style={{
                                            backgroundImage:
                                              'url(https://scontent-lhr8-2.cdninstagram.com/v/t39.30808-6/535906357_806682978382950_6358418381833432613_n.jpg?stp=dst-jpg_e35_tt6&amp;_nc_cat=101&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=GCLckUdBAIUQ7kNvwHMwR03&amp;_nc_oc=Adk6x5JBms0PYCiqwE-h-6wsoIwkwFzjWiQi7MZqoj0m3_Vdbx9Yj_RPCygJTRR-QxM&amp;_nc_zt=23&amp;_nc_ht=scontent-lhr8-2.cdninstagram.com&amp;edm=ABbrh9MEAAAA&amp;_nc_gid=VWunWADByEEFalds-pvdZg&amp;oh=00_AfUjR5khA9rAeFY7reSoLzfp8YvMKehsRuov_RCq8ISLGg&amp;oe=68BC5869)',
                                          }}
                                        ></div>
                                      </span>
                                    </div>
                                    <div
                                      className="bullets"
                                      tabIndex={0}
                                      role="button"
                                      aria-label="Carousel slide 2"
                                    >
                                      <span>
                                        <i data-index="1" data-mediatype="image"></i>
                                        <div className="carousel-image"></div>
                                      </span>
                                    </div>
                                    <div
                                      className="bullets"
                                      tabIndex={0}
                                      role="button"
                                      aria-label="Carousel slide 3"
                                    >
                                      <span>
                                        <i data-index="2" data-mediatype="image"></i>
                                        <div
                                          className="carousel-image"
                                          style={{
                                            backgroundImage:
                                              'url(https://scontent-lhr8-2.cdninstagram.com/v/t39.30808-6/536268582_806682981716283_1389324469056988785_n.jpg?stp=dst-jpg_e35_tt6&amp;_nc_cat=106&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=BhydlezBJeAQ7kNvwFAq9By&amp;_nc_oc=AdnsQ7PtwgIR5i4Xi1bUcoJO5QxEBEM5YJEVsLz7IS0ovSJf8k600wO3zm6-T2j9fxU&amp;_nc_zt=23&amp;_nc_ht=scontent-lhr8-2.cdninstagram.com&amp;edm=ABbrh9MEAAAA&amp;_nc_gid=VWunWADByEEFalds-pvdZg&amp;oh=00_AfUOWilvJOBc_Jt8WU2cEmfilMiQk5yNtpleW3XIEIn4EA&amp;oe=68BC5DA5)',
                                          }}
                                        ></div>
                                      </span>
                                    </div>
                                    <div
                                      className="bullets"
                                      tabIndex={0}
                                      role="button"
                                      aria-label="Carousel slide 4"
                                    >
                                      <span>
                                        <i data-index="3" data-mediatype="image"></i>
                                        <div
                                          className="carousel-image"
                                          style={{
                                            backgroundImage:
                                              'url(https://scontent-lhr8-2.cdninstagram.com/v/t39.30808-6/536104924_806682985049616_5815882032557644686_n.jpg?stp=dst-jpg_e35_tt6&amp;_nc_cat=106&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=gLYf1VOHCTQQ7kNvwFGmvyt&amp;_nc_oc=Adm7P1Gq5WDgA1OBh7bRwYAQhpzjiw-TydOc1zrM_wWXfmQhLMCzbFQH_Zt0TV98Mh8&amp;_nc_zt=23&amp;_nc_ht=scontent-lhr8-2.cdninstagram.com&amp;edm=ABbrh9MEAAAA&amp;_nc_gid=VWunWADByEEFalds-pvdZg&amp;oh=00_AfWAWw3H4Ugy3JENISiX-cAL4ngBql-19rH2zSRoIdw8mQ&amp;oe=68BC5F80)',
                                          }}
                                        ></div>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-container">
                                  <div className="post-content">
                                    <div className="post-header">
                                      <div className="username">
                                        <a
                                          href="https://www.instagram.com/violife_foods/"
                                          data-permalink="https://www.instagram.com/p/DNn3uzHyosu/"
                                          target="_blank"
                                          className="permalink"
                                          tabIndex={-1}
                                          title="Go to violife_foods instagram page"
                                        >
                                          violife_foods
                                        </a>
                                      </div>
                                    </div>
                                    <div className="caption" role="text">
                                      <p className="sr-only">
                                        violife_foods Instagram post, click to view in dialog.
                                        violife_foods Posted with caption
                                      </p>
                                      We rotate between these 3 on a weekly basis 🤭Who else? 👀
                                      <br />
                                      <br />
                                      <a
                                        href="https://www.instagram.com/explore/tags/violife"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #violife
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/matcha"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #matcha
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/drinkorder"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #drinkorder
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/coffee"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #coffee
                                      </a>
                                    </div>
                                  </div>
                                  <div className="post-footer">
                                    <div className="timestamp" role="text">
                                      <span aria-hidden="false" aria-label="Posted on"></span>Aug
                                      21, 2025, 6 PM
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              className="glide__slide"
                              style={{ width: '350px', marginLeft: '15px', marginRight: '15px' }}
                            >
                              <div
                                className="post"
                                id="18080025325819772"
                                tabIndex={-1}
                                role="article"
                                data-postno="18"
                                aria-hidden="true"
                              >
                                <div className="post-media">
                                  <span className="instagram-icon"></span>
                                  <div
                                    className="post-image lazy-bg"
                                    style={{
                                      backgroundImage: `url(https://scontent-lhr8-2.cdninstagram.com/v/t39.30808-6/533129006_802813962103185_4483184683598535992_n.jpg?stp=dst-jpg_e35_tt6&amp;_nc_cat=103&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=wkl4cG58bbkQ7kNvwF9gC3a&amp;_nc_oc=AdlPXz7LyqrBNP4GYKqvALUNjphU7YLpNXt6Dv4EHd-FCTEY3PdcbkW6newD3_8pwJc&amp;_nc_zt=23&amp;_nc_ht=scontent-lhr8-2.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;_nc_gid=W03zZrXY55evbdDEE5dCfQ&amp;oh=00_AfVXOzlYV87dHo7iD21qi4ZZcgZqy3pNSVn3c-xPgy5Gow&amp;oe=68BC7EF5)`,
                                    }}
                                    role="img"
                                  ></div>
                                </div>
                                <div className="content-container">
                                  <div className="post-content">
                                    <div className="post-header">
                                      <div className="username">
                                        <a
                                          href="https://www.instagram.com/violife_foods/"
                                          data-permalink="https://www.instagram.com/p/DNluZh9vDxD/"
                                          target="_blank"
                                          className="permalink"
                                          tabIndex={-1}
                                          title="Go to violife_foods instagram page"
                                        >
                                          violife_foods
                                        </a>
                                      </div>
                                    </div>
                                    <div className="caption" role="text">
                                      <p className="sr-only">
                                        violife_foods Instagram post, click to view in dialog.
                                        violife_foods Posted with caption
                                      </p>
                                      Don’t be shy, this is a safe space 👇
                                      <br />
                                      <br />
                                      <a
                                        href="https://www.instagram.com/explore/tags/comfortfood"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #comfortfood
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/comfortmeal"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #comfortmeal
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/emotionalsupportsnack"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #emotionalsupportsnack
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/dairyfree"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #dairyfree
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/Violife"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #Violife
                                      </a>
                                    </div>
                                  </div>
                                  <div className="post-footer">
                                    <div className="timestamp" role="text">
                                      <span aria-hidden="false" aria-label="Posted on"></span>Aug
                                      20, 2025, 10 PM
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              className="glide__slide"
                              style={{ width: '350px', marginLeft: '15px', marginRight: '15px' }}
                            >
                              <div
                                className="post"
                                id="18061481756524607"
                                tabIndex={-1}
                                role="article"
                                data-postno="19"
                                aria-hidden="true"
                              >
                                <div className="post-media">
                                  <span className="instagram-icon"></span>
                                  <div className="post-video-container post-video">
                                    <video
                                      className="lazy-bg-video "
                                      preload="none"
                                      playsInline
                                      muted
                                      disablePictureInPicture
                                      controlsList="nodownload noplaybackrate"
                                      aria-label="play video"
                                    >
                                      <source src="https://scontent-lhr6-1.cdninstagram.com/o1/v/t2/f2/m86/AQNd0pC2Q_S7hfcyiszcO76dvic5AbHM774XxtIO8cKzox38k3WRfPl2x1zP65DUSBC5UN_UpQQkMrPeYtfKiYcNhwxkYjSPbcf8LGY.mp4?_nc_cat=110&amp;_nc_sid=5e9851&amp;_nc_ht=scontent-lhr6-1.cdninstagram.com&amp;_nc_ohc=Tj5bJd-7c0EQ7kNvwG8hGHw&amp;efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTg0MTk1MTIzMzQwMDIwNywidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjEzLCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&amp;ccb=17-1&amp;vs=3b82ff58d74ba176&amp;_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9BRDRBNENFOURGNDE4RUZDN0FGMUNEMEZDNDdDMTE4MV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HT2V0MEI4STNnaTNkN1VIQU9ibXF3N0FWZllDYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmnvauj9bPxQYVAigCQzMsF0AqzMzMzMzNGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&amp;_nc_gid=W03zZrXY55evbdDEE5dCfQ&amp;edm=ANo9K5cEAAAA&amp;_nc_zt=28&amp;_nc_tpa=Q5bMBQFzRZ4-rvHyxGpwNnwMkvHjnBQNtxdm6MQR5IsE2IVzqb4mD08veyQrB5LIShm53EARx760Ad9rkA&amp;oh=00_AfXLha-UlVwGkm89xwqiZnRQ3fH9x9lzEaI1UcEEU0_hlA&amp;oe=68B889AB" />
                                    </video>
                                    <span className="video-play-icon-wrapper">
                                      <i
                                        className="video-play-icon"
                                        role="button"
                                        aria-label="video button, click to play in dialog"
                                      ></i>
                                    </span>
                                  </div>
                                </div>
                                <div className="content-container">
                                  <div className="post-content">
                                    <div className="post-header">
                                      <div className="username">
                                        <a
                                          href="https://www.instagram.com/violife_foods/"
                                          data-permalink="https://www.instagram.com/reel/DNlOun9MJeY/"
                                          target="_blank"
                                          className="permalink"
                                          tabIndex={-1}
                                          title="Go to violife_foods instagram page"
                                        >
                                          violife_foods
                                        </a>
                                      </div>
                                    </div>
                                    <div className="caption" role="text">
                                      <p className="sr-only">
                                        violife_foods Instagram post, click to view in dialog.
                                        violife_foods Posted with caption
                                      </p>
                                      Counting down the days until PSL szn, hbu? 🎃☕️
                                      <br />
                                      <br />
                                      <a
                                        href="https://www.instagram.com/explore/tags/violife"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #violife
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/psl"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #psl
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/pslseason"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #pslseason
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/pumpkindrink"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #pumpkindrink
                                      </a>
                                    </div>
                                  </div>
                                  <div className="post-footer">
                                    <div className="timestamp" role="text">
                                      <span aria-hidden="false" aria-label="Posted on"></span>Aug
                                      20, 2025, 5 PM
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              className="glide__slide"
                              style={{ width: '350px', marginLeft: '15px', marginRight: '15px' }}
                            >
                              <div
                                className="post"
                                id="18034992815694905"
                                tabIndex={-1}
                                role="article"
                                data-postno="20"
                                aria-hidden="true"
                              >
                                <div className="post-media">
                                  <span className="instagram-icon"></span>
                                  <div className="post-video-container post-video">
                                    <video
                                      className="lazy-bg-video "
                                      preload="none"
                                      playsInline
                                      muted
                                      disablePictureInPicture
                                      controlsList="nodownload noplaybackrate"
                                      aria-label="play video"
                                    >
                                      <source src="https://scontent-lhr8-2.cdninstagram.com/o1/v/t2/f2/m86/AQN1w4gierI2doikljeaWhrDNta04fbWzSGZoVDTc_Yg9L2nTkPOXC_kgsJnssogJxMkr_Z3Zd-P1dF0r2EyZaHTaXK2_e3eDQvFo7U.mp4?_nc_cat=103&amp;_nc_sid=5e9851&amp;_nc_ht=scontent-lhr8-2.cdninstagram.com&amp;_nc_ohc=KIHZyGpVL7MQ7kNvwFMBoLP&amp;efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MjQyOTU3MDI2MjMzOTA0MzcsInZpX3VzZWNhc2VfaWQiOjEwMDk5LCJkdXJhdGlvbl9zIjoxNiwidXJsZ2VuX3NvdXJjZSI6Ind3dyJ9&amp;ccb=17-1&amp;vs=89f6191afe5be485&amp;_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC8xOTQ5RjQxRDMyNjg3ODhCNTE0NTdFMEE1MzlCOUJCN192aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HSU1xM1I5aWcwMklKX2dEQUdLclBfTXlQMGx0YnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmyqv8xoK0qFYVAigCQzMsF0AwxBiTdLxqGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&amp;_nc_gid=W03zZrXY55evbdDEE5dCfQ&amp;edm=ANo9K5cEAAAA&amp;_nc_zt=28&amp;_nc_tpa=Q5bMBQEYvLhrO_GsyZ5cCx8bIdiEoow6KWR9nfJR19ZgvyhBRIcUEO9OsVqUrQwWPh7vwoBT7qyF7S_BxQ&amp;oh=00_AfXdb46OfPT-UVYsTRDc6RncgrJM53fv18lsvmg626gxRQ&amp;oe=68B85F04" />
                                    </video>
                                    <span className="video-play-icon-wrapper">
                                      <i
                                        className="video-play-icon"
                                        role="button"
                                        aria-label="video button, click to play in dialog"
                                      ></i>
                                    </span>
                                  </div>
                                </div>
                                <div className="content-container">
                                  <div className="post-content">
                                    <div className="post-header">
                                      <div className="username">
                                        <a
                                          href="https://www.instagram.com/violife_foods/"
                                          data-permalink="https://www.instagram.com/reel/DNf1AaEsDiD/"
                                          target="_blank"
                                          className="permalink"
                                          tabIndex={-1}
                                          title="Go to violife_foods instagram page"
                                        >
                                          violife_foods
                                        </a>
                                      </div>
                                    </div>
                                    <div className="caption" role="text">
                                      <p className="sr-only">
                                        violife_foods Instagram post, click to view in dialog.
                                        violife_foods Posted with caption
                                      </p>
                                      Tag someone who has to take you to the farmers’ market 🍅🌻
                                      <br />
                                      <br />
                                      <a
                                        href="https://www.instagram.com/explore/tags/violife"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #violife
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/farmersmarket"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #farmersmarket
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/tomatobagel"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #tomatobagel
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/summerrecipe"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #summerrecipe
                                      </a>
                                    </div>
                                  </div>
                                  <div className="post-footer">
                                    <div className="timestamp" role="text">
                                      <span aria-hidden="false" aria-label="Posted on"></span>Aug
                                      18, 2025, 3 PM
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              className="glide__slide"
                              style={{ width: '350px', marginLeft: '15px', marginRight: '15px' }}
                            >
                              <div
                                className="post"
                                id="18066114973977993"
                                tabIndex={-1}
                                role="article"
                                data-postno="21"
                                aria-hidden="true"
                              >
                                <div className="post-media">
                                  <span className="instagram-icon"></span>
                                  <div className="post-video-container post-video">
                                    <video
                                      className="lazy-bg-video "
                                      preload="none"
                                      playsInline
                                      muted
                                      disablePictureInPicture
                                      controlsList="nodownload noplaybackrate"
                                      aria-label="play video"
                                    >
                                      <source src="https://scontent-lhr8-2.cdninstagram.com/o1/v/t2/f2/m86/AQMgKojMyAL-PhUlshhioZsC7GuuQ4r5FUUk8PV0f9s5knF2w4Ueu8Mc7QYrwmo3WJ_VSB4gU9AxyMM76jHkTqsPpKKEUvJm44vXMms.mp4?_nc_cat=103&amp;_nc_sid=5e9851&amp;_nc_ht=scontent-lhr8-2.cdninstagram.com&amp;_nc_ohc=SIVl5_SJPxsQ7kNvwG0zMvr&amp;efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTA2NDA0MTk0NTg0NDQzMywidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjE2LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&amp;ccb=17-1&amp;vs=48dee812446baced&amp;_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC81NzQ1REFBMDBDNEM0MUQwQ0I3QTg1Rjk2NTUzODA4Nl92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HTGpweWg5TjBaamwxd1FGQVBmZ2lRV3laWllFYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmoquqo7Lv4wMVAigCQzMsF0AwgAAAAAAAGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&amp;_nc_gid=W03zZrXY55evbdDEE5dCfQ&amp;edm=ANo9K5cEAAAA&amp;_nc_zt=28&amp;_nc_tpa=Q5bMBQGYNvSiiDI4_m1yCkAs6oxukOXMSMTOs5MwCG-87iqdZUJlssSc60DKGX9d2s2H4hzaMuu_xtsU_Q&amp;oh=00_AfW0BN6hs6RzorZJhSgKxyfY48NVylT6gxs6e9tPX__U0Q&amp;oe=68B8676C" />
                                    </video>
                                    <span className="video-play-icon-wrapper">
                                      <i
                                        className="video-play-icon"
                                        role="button"
                                        aria-label="video button, click to play in dialog"
                                      ></i>
                                    </span>
                                  </div>
                                </div>
                                <div className="content-container">
                                  <div className="post-content">
                                    <div className="post-header">
                                      <div className="username">
                                        <a
                                          href="https://www.instagram.com/violife_foods/"
                                          data-permalink="https://www.instagram.com/reel/DNYbIaFsF08/"
                                          target="_blank"
                                          className="permalink"
                                          tabIndex={-1}
                                          title="Go to violife_foods instagram page"
                                        >
                                          violife_foods
                                        </a>
                                      </div>
                                    </div>
                                    <div className="caption" role="text">
                                      <p className="sr-only">
                                        violife_foods Instagram post, click to view in dialog.
                                        violife_foods Posted with caption
                                      </p>
                                      Well that was a freeky start to this friday 👀
                                      <br />
                                      <br />
                                      <a
                                        href="https://www.instagram.com/explore/tags/violife"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #violife
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/newmovie"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #newmovie
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/moviepremiere"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #moviepremiere
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/dairyfree"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #dairyfree
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/breakfast"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #breakfast
                                      </a>
                                    </div>
                                  </div>
                                  <div className="post-footer">
                                    <div className="timestamp" role="text">
                                      <span aria-hidden="false" aria-label="Posted on"></span>Aug
                                      15, 2025, 6 PM
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              className="glide__slide"
                              style={{ width: '350px', marginLeft: '15px', marginRight: '15px' }}
                            >
                              <div
                                className="post"
                                id="18076331696310642"
                                tabIndex={0}
                                role="article"
                                data-postno="22"
                                aria-hidden="false"
                              >
                                <div className="post-media">
                                  <span className="instagram-icon"></span>
                                  <div
                                    className="post-image lazy-bg"
                                    style={{
                                      backgroundImage: `url(https://scontent-lhr6-1.cdninstagram.com/v/t39.30808-6/532981858_802809875436927_3510198042527210976_n.jpg?stp=dst-jpg_e35_tt6&amp;_nc_cat=109&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=JdnkW3Pkn94Q7kNvwFDyjax&amp;_nc_oc=AdnfrOHqVu8GHYF1orc8ZyKU2WIaF7SdsIXn5IUH88wI6hyoiIXx4L85MYRgHwQifqQ&amp;_nc_zt=23&amp;_nc_ht=scontent-lhr6-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;_nc_gid=W03zZrXY55evbdDEE5dCfQ&amp;oh=00_AfU5UELP3EIjaf-CJ4wN7sTB9sdIG61F8VLF3ZNrmsgcuA&amp;oe=68BC6390`,
                                    }}
                                    role="img"
                                  ></div>
                                </div>
                                <div className="content-container">
                                  <div className="post-content">
                                    <div className="post-header">
                                      <div className="username">
                                        <a
                                          href="https://www.instagram.com/violife_foods/"
                                          data-permalink="https://www.instagram.com/p/DNWbnowzrjI/"
                                          target="_blank"
                                          className="permalink"
                                          tabIndex={-1}
                                          title="Go to violife_foods instagram page"
                                        >
                                          violife_foods
                                        </a>
                                      </div>
                                    </div>
                                    <div className="caption" role="text">
                                      <p className="sr-only">
                                        violife_foods Instagram post, click to view in dialog.
                                        violife_foods Posted with caption
                                      </p>
                                      We’ll go first: pasta salad 🤤
                                      <br />
                                      <br />
                                      <a
                                        href="https://www.instagram.com/explore/tags/dairyfree"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #dairyfree
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/Violife"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #Violife
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/hyperfixationmeal"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #hyperfixationmeal
                                      </a>
                                    </div>
                                  </div>
                                  <div className="post-footer">
                                    <div className="timestamp" role="text">
                                      <span aria-hidden="false" aria-label="Posted on"></span>Aug
                                      14, 2025, 11 PM
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              className="glide__slide"
                              style={{ width: '350px', marginLeft: '15px', marginRight: '15px' }}
                            >
                              <div
                                className="post"
                                id="17968592117930009"
                                tabIndex={0}
                                role="article"
                                data-postno="23"
                                aria-hidden="false"
                              >
                                <div className="post-media">
                                  <span className="instagram-icon"></span>
                                  <div className="post-carousel-icon"></div>
                                  <div
                                    className="post-image post-carousel lazy-bg"
                                    style={{
                                      backgroundImage: `url(https://scontent-lhr8-1.cdninstagram.com/v/t39.30808-6/530665347_801213592263222_2973512115990862959_n.jpg?stp=dst-jpg_e35_tt6&amp;_nc_cat=108&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=GRuFKfdZPy4Q7kNvwEJ2iR9&amp;_nc_oc=AdmPSYio-jgvBY-yaOWHXhUOV3jNEgFz3Cad7eX34nQnw2TPaLzu6F37jrAostt1FKE&amp;_nc_zt=23&amp;_nc_ht=scontent-lhr8-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;_nc_gid=W03zZrXY55evbdDEE5dCfQ&amp;oh=00_AfUawJTZG88b8Z7Qu1JLPGBKWKm_jCOMNn7iAmSzljcA-w&amp;oe=68BC716E)`,
                                    }}
                                    role="img"
                                  ></div>
                                  <div className="carousel-media">
                                    <div
                                      className="bullets"
                                      tabIndex={0}
                                      role="button"
                                      aria-label="Carousel slide 1"
                                    >
                                      <span>
                                        <i data-index={0} data-mediatype="image"></i>
                                        <div
                                          className="carousel-image"
                                          style={{
                                            backgroundImage:
                                              'url(https://scontent-lhr8-1.cdninstagram.com/v/t39.30808-6/530665347_801213592263222_2973512115990862959_n.jpg?stp=dst-jpg_e35_tt6&amp;_nc_cat=108&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=GRuFKfdZPy4Q7kNvwEJ2iR9&amp;_nc_oc=AdmPSYio-jgvBY-yaOWHXhUOV3jNEgFz3Cad7eX34nQnw2TPaLzu6F37jrAostt1FKE&amp;_nc_zt=23&amp;_nc_ht=scontent-lhr8-1.cdninstagram.com&amp;edm=ABbrh9MEAAAA&amp;_nc_gid=-NJr2Tmtt7lcnSRn3h855A&amp;oh=00_AfXHEjfIHsFbimWhuXemau6_SBm9T-oA2fSkkAoYfOcsWw&amp;oe=68BC716E)',
                                          }}
                                        ></div>
                                      </span>
                                    </div>
                                    <div
                                      className="bullets"
                                      tabIndex={0}
                                      role="button"
                                      aria-label="Carousel slide 2"
                                    >
                                      <span>
                                        <i data-index="1" data-mediatype="image"></i>
                                        <div
                                          className="carousel-image"
                                          style={{
                                            backgroundImage:
                                              'url(https://scontent-lhr6-1.cdninstagram.com/v/t39.30808-6/532085198_801213628929885_5246787910662626701_n.jpg?stp=dst-jpg_e35_tt6&amp;_nc_cat=102&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=mGkJeTAO5_AQ7kNvwFHQeao&amp;_nc_oc=Adm4V-aghA7sXgLNFpr8E2gPhzxkmP6hgPDoNy6_KUOaVuLywVPMrt_2-CG3owLrH8o&amp;_nc_zt=23&amp;_nc_ht=scontent-lhr6-1.cdninstagram.com&amp;edm=ABbrh9MEAAAA&amp;_nc_gid=-NJr2Tmtt7lcnSRn3h855A&amp;oh=00_AfXkvCVlgbZ2pCUkNC64U6lteBSWR10AOI1Jza4phg3JGA&amp;oe=68BC751F)',
                                          }}
                                        ></div>
                                      </span>
                                    </div>
                                    <div
                                      className="bullets"
                                      tabIndex={0}
                                      role="button"
                                      aria-label="Carousel slide 3"
                                    >
                                      <span>
                                        <i data-index="2" data-mediatype="image"></i>
                                        <div
                                          className="carousel-image"
                                          style={{
                                            backgroundImage:
                                              'url(https://scontent-lhr8-2.cdninstagram.com/v/t39.30808-6/530865789_801213612263220_5634044301185430583_n.jpg?stp=dst-jpg_e35_tt6&amp;_nc_cat=103&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=kKQEl9jIRhsQ7kNvwF0uCeP&amp;_nc_oc=AdmdA2810ac4-oO6cG5od9ETOLcUKTm_nd6GZNRQANkKF4frWw2xVAI4HqkPHwId-o0&amp;_nc_zt=23&amp;_nc_ht=scontent-lhr8-2.cdninstagram.com&amp;edm=ABbrh9MEAAAA&amp;_nc_gid=-NJr2Tmtt7lcnSRn3h855A&amp;oh=00_AfVb_6wve9g8Maijg8C9oItnBogD4z6Do0bgXYiRddMJ_A&amp;oe=68BC84D0)',
                                          }}
                                        ></div>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-container">
                                  <div className="post-content">
                                    <div className="post-header">
                                      <div className="username">
                                        <a
                                          href="https://www.instagram.com/violife_foods/"
                                          data-permalink="https://www.instagram.com/p/DNTmITkMBsk/"
                                          target="_blank"
                                          className="permalink"
                                          tabIndex={-1}
                                          title="Go to violife_foods instagram page"
                                        >
                                          violife_foods
                                        </a>
                                      </div>
                                    </div>
                                    <div className="caption" role="text">
                                      <p className="sr-only">
                                        violife_foods Instagram post, click to view in dialog.
                                        violife_foods Posted with caption
                                      </p>
                                      My Belly is team Violife <br />
                                      <br />
                                      <a
                                        href="https://www.instagram.com/explore/tags/violife"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #violife
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/summer"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #summer
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/summerpicnic"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #summerpicnic
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/thesummerI"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #thesummerI
                                      </a>
                                    </div>
                                  </div>
                                  <div className="post-footer">
                                    <div className="timestamp" role="text">
                                      <span aria-hidden="false" aria-label="Posted on"></span>Aug
                                      13, 2025, 9 PM
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              className="glide__slide"
                              style={{ width: '350px', marginLeft: '15px', marginRight: '15px' }}
                            >
                              <div
                                className="post"
                                id="18067968494183710"
                                tabIndex={0}
                                role="article"
                                data-postno="24"
                                aria-hidden="false"
                              >
                                <div className="post-media">
                                  <span className="instagram-icon"></span>
                                  <div
                                    className="post-image lazy-bg"
                                    style={{
                                      backgroundImage: `url(https://scontent-lhr8-2.cdninstagram.com/v/t51.82787-15/530795295_18520747882047494_8053603463406597737_n.webp?stp=dst-jpg_e35_tt6&amp;_nc_cat=101&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=2XczHK7XgrIQ7kNvwGAAtwA&amp;_nc_oc=AdmuvaEEe3li7sX2jxBr7-78sJhHB9xUBqVJzWfC3q8YWzZrXXvD6IS2fWOco4TN7c4&amp;_nc_zt=23&amp;_nc_ht=scontent-lhr8-2.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;_nc_gid=W03zZrXY55evbdDEE5dCfQ&amp;oh=00_AfUxZ_2AzROiDHWMynyMdzwuWArbqE-JbgvoI5bMATGB8Q&amp;oe=68BC7395)`,
                                    }}
                                    role="img"
                                  ></div>
                                </div>
                                <div className="content-container">
                                  <div className="post-content">
                                    <div className="post-header">
                                      <div className="username">
                                        <a
                                          href="https://www.instagram.com/violife_foods/"
                                          data-permalink="https://www.instagram.com/p/DNRloVovD4o/"
                                          target="_blank"
                                          className="permalink"
                                          tabIndex={-1}
                                          title="Go to violife_foods instagram page"
                                        >
                                          violife_foods
                                        </a>
                                      </div>
                                    </div>
                                    <div className="caption" role="text">
                                      <p className="sr-only">
                                        violife_foods Instagram post, click to view in dialog.
                                        violife_foods Posted with caption
                                      </p>
                                      ✨The life of a dairy free showgirl ✨ 🤠
                                      <br />
                                      <br />
                                      <a
                                        href="https://www.instagram.com/explore/tags/violife"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #violife
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/dairyfree"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #dairyfree
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/albumrelease"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #albumrelease
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/TS"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #TS
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/meme"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #meme
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/showgirl"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #showgirl
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/cheese"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #cheese
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/violifecheese"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #violifecheese
                                      </a>
                                    </div>
                                  </div>
                                  <div className="post-footer">
                                    <div className="timestamp" role="text">
                                      <span aria-hidden="false" aria-label="Posted on"></span>Aug
                                      13, 2025, 2 AM
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              className="glide__slide glide__slide--active"
                              style={{ width: '350px', marginLeft: '15px', marginRight: '15px' }}
                            >
                              <div
                                className="post"
                                id="17857640889473178"
                                tabIndex={-1}
                                role="article"
                                data-postno="25"
                                aria-hidden="true"
                              >
                                <div className="post-media">
                                  <span className="instagram-icon"></span>
                                  <div className="post-video-container post-video">
                                    <video
                                      className="lazy-bg-video "
                                      preload="none"
                                      playsInline
                                      muted
                                      disablePictureInPicture
                                      controlsList="nodownload noplaybackrate"
                                      aria-label="play video"
                                    >
                                      <source src="https://scontent-lhr6-2.cdninstagram.com/o1/v/t2/f2/m86/AQOT_1K5WrxrB6DHR7dQWwOhdILPe4yJu5gMirpuaEMGAD2HPefKbDTUpOmGFpZ-vzj-FUQuspSZ9A9tHiFfTtScEt00NkBgDncR4EQ.mp4?_nc_cat=105&amp;_nc_sid=5e9851&amp;_nc_ht=scontent-lhr6-2.cdninstagram.com&amp;_nc_ohc=F94AfG8R1r8Q7kNvwFm0XyM&amp;efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MjE2OTEwMjIzNjkxODIzNiwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjgsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&amp;ccb=17-1&amp;vs=663b071d08e8d1b4&amp;_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9CQjQ5MTlEMTJDN0U1QkZDRkM5RjlEQjQzNTQ3REQ4OF92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HSlRIc2hfSXJSeDMzTFFEQUxMZzlPaGZwbHRiYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmuIeBha-y2gcVAigCQzMsF0AgmZmZmZmaGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&amp;_nc_gid=W03zZrXY55evbdDEE5dCfQ&amp;edm=ANo9K5cEAAAA&amp;_nc_zt=28&amp;_nc_tpa=Q5bMBQGVkwe2LGooT4njzKqXoRcv6Nx_5ilNo26xz1g-hkpOx47K3wenQwfV30Nl1J5jrxiweF0dw-52XA&amp;oh=00_AfWYRi5Ufou86YjhLrndzpONrqdxfk7B4ZaMVzvXNfR1fA&amp;oe=68B87586" />
                                    </video>
                                    <span className="video-play-icon-wrapper">
                                      <i
                                        className="video-play-icon"
                                        role="button"
                                        aria-label="video button, click to play in dialog"
                                      ></i>
                                    </span>
                                  </div>
                                </div>
                                <div className="content-container">
                                  <div className="post-content">
                                    <div className="post-header">
                                      <div className="username">
                                        <a
                                          href="https://www.instagram.com/violife_foods/"
                                          data-permalink="https://www.instagram.com/reel/DNQ6bZxsIKz/"
                                          target="_blank"
                                          className="permalink"
                                          tabIndex={-1}
                                          title="Go to violife_foods instagram page"
                                        >
                                          violife_foods
                                        </a>
                                      </div>
                                    </div>
                                    <div className="caption" role="text">
                                      <p className="sr-only">
                                        violife_foods Instagram post, click to view in dialog.
                                        violife_foods Posted with caption
                                      </p>
                                      And even more impressed that it’s dairy free 🤤
                                      <br />
                                      <br />
                                      <a
                                        href="https://www.instagram.com/explore/tags/cheesepull"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #cheesepull
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/impressive"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #impressive
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/violife"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #violife
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/food"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #food
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/cheese"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #cheese
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/vegan"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #vegan
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/hardtopleasetrend"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #hardtopleasetrend
                                      </a>
                                    </div>
                                  </div>
                                  <div className="post-footer">
                                    <div className="timestamp" role="text">
                                      <span aria-hidden="false" aria-label="Posted on"></span>Aug
                                      12, 2025, 8 PM
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              className="glide__slide glide__slide--clone"
                              style={{ width: '350px', marginLeft: '15px', marginRight: '15px' }}
                            >
                              <div
                                className="post"
                                id="18052320986216382"
                                tabIndex={-1}
                                role="article"
                                data-postno="1"
                                aria-hidden="true"
                              >
                                <div className="post-media">
                                  <span className="instagram-icon"></span>
                                  <div
                                    className="post-image lazy-bg"
                                    style={{
                                      backgroundImage: `url(https://scontent-lhr8-1.cdninstagram.com/v/t39.30808-6/539084319_813041301080451_8448150332830101551_n.jpg?stp=dst-jpg_e35_tt6&amp;_nc_cat=108&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=gI72UZA-zkQQ7kNvwFuEdvC&amp;_nc_oc=AdlM5bNAOQTIDFPjl8SWfZR_Y0DHRJjiqSm8h0-tsH9THhpQC1uUH4-PIUQKVU7cFmk&amp;_nc_zt=23&amp;_nc_ht=scontent-lhr8-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;_nc_gid=W03zZrXY55evbdDEE5dCfQ&amp;oh=00_AfWGENHsyfzj7OGvpHPkBCDGta8kOGOmJ4ALPv0jBMg7rA&amp;oe=68BC7757)`,
                                    }}
                                    role="img"
                                  ></div>
                                </div>
                                <div className="content-container">
                                  <div className="post-content">
                                    <div className="post-header">
                                      <div className="username">
                                        <a
                                          href="https://www.instagram.com/violife_foods/"
                                          data-permalink="https://www.instagram.com/p/DOB1mQoD3tk/"
                                          target="_blank"
                                          className="permalink"
                                          tabIndex={-1}
                                          title="Go to violife_foods instagram page"
                                        >
                                          violife_foods
                                        </a>
                                      </div>
                                    </div>
                                    <div className="caption" role="text">
                                      <p className="sr-only">
                                        violife_foods Instagram post, click to view in dialog.
                                        violife_foods Posted with caption
                                      </p>
                                      Know this feels impossible to choose, but either way, your
                                      stomach’s the real winner. 🙌
                                      <br />
                                      <br />
                                      <a
                                        href="https://www.instagram.com/explore/tags/dairyfree"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #dairyfree
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/Violife"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #Violife
                                      </a>
                                    </div>
                                  </div>
                                  <div className="post-footer">
                                    <div className="timestamp" role="text">
                                      <span aria-hidden="false" aria-label="Posted on"></span>Aug
                                      31, 2025, 8 PM
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              className="glide__slide glide__slide--clone"
                              style={{ width: '350px', marginLeft: '15px', marginRight: '15px' }}
                            >
                              <div
                                className="post"
                                id="18323764402238173"
                                tabIndex={-1}
                                role="article"
                                data-postno="2"
                                aria-hidden="true"
                              >
                                <div className="post-media">
                                  <span className="instagram-icon"></span>
                                  <div className="post-video-container post-video">
                                    <video
                                      className="lazy-bg-video "
                                      preload="none"
                                      playsInline
                                      muted
                                      disablePictureInPicture
                                      controlsList="nodownload noplaybackrate"
                                      aria-label="play video"
                                    >
                                      <source src="https://scontent-lhr6-2.cdninstagram.com/o1/v/t2/f2/m86/AQMtDH4CxnJCErNb0eNhLyV5HsFuhoB5WSX8H0QaRy7F1ie8Kf4v3nyxhxA9WL2OrcXy1IENkAIklH9gN7TYGQ1dw8wvb1WADa3pJeY.mp4?_nc_cat=105&amp;_nc_sid=5e9851&amp;_nc_ht=scontent-lhr6-2.cdninstagram.com&amp;_nc_ohc=Aj1T6sYGbTkQ7kNvwGs9yPN&amp;efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTMyNDIyMTc4MjY5NzQxNywidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjE0LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&amp;ccb=17-1&amp;vs=572afc98ac59c318&amp;_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC80NDREQ0NFMTAwNTY5RDVFRjVFNDM0Q0Y1QThBMUY4NV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HSER6UVNBcC1FOGZ1OVVEQU9uWU5uQ2pHT3BQYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmkpexj-2X2gQVAigCQzMsF0AtEOVgQYk3GBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&amp;_nc_gid=W03zZrXY55evbdDEE5dCfQ&amp;edm=ANo9K5cEAAAA&amp;_nc_zt=28&amp;_nc_tpa=Q5bMBQHy1n5RKrry6SDkqHQjTsEWkIe7r-SHXFPhItM-jwypcM35NyEKoKE89zi0zzXGNTcuiTOHaGTM3Q&amp;oh=00_AfUcZ6tH2fC3xZoT04UVkj0tDvrhGIfKa2NHf12p_eEgug&amp;oe=68B86D32" />
                                    </video>
                                    <span className="video-play-icon-wrapper">
                                      <i
                                        className="video-play-icon"
                                        role="button"
                                        aria-label="video button, click to play in dialog"
                                      ></i>
                                    </span>
                                  </div>
                                </div>
                                <div className="content-container">
                                  <div className="post-content">
                                    <div className="post-header">
                                      <div className="username">
                                        <a
                                          href="https://www.instagram.com/violife_foods/"
                                          data-permalink="https://www.instagram.com/reel/DN_lYa3j0wL/"
                                          target="_blank"
                                          className="permalink"
                                          tabIndex={-1}
                                          title="Go to violife_foods instagram page"
                                        >
                                          violife_foods
                                        </a>
                                      </div>
                                    </div>
                                    <div className="caption" role="text">
                                      <p className="sr-only">
                                        violife_foods Instagram post, click to view in dialog.
                                        violife_foods Posted with caption
                                      </p>
                                      Your nachos just got a new twist <br /> <br />
                                      Inspired by:
                                      <a
                                        href="https://www.instagram.com/tfimb/"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        @tfimb
                                      </a>
                                      <br />
                                      <br />
                                      <a
                                        href="https://www.instagram.com/explore/tags/violife"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #violife
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/gnocchi"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #gnocchi
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/nachos"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #nachos
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/summernachos"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #summernachos
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/vegancheese"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #vegancheese
                                      </a>
                                    </div>
                                  </div>
                                  <div className="post-footer">
                                    <div className="timestamp" role="text">
                                      <span aria-hidden="false" aria-label="Posted on"></span>Aug
                                      30, 2025, 11 PM
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              className="glide__slide glide__slide--clone"
                              style={{ width: '350px', marginLeft: '15px', marginRight: '15px' }}
                            >
                              <div
                                className="post"
                                id="18143720845419329"
                                tabIndex={-1}
                                role="article"
                                data-postno="3"
                                aria-hidden="true"
                              >
                                <div className="post-media">
                                  <span className="instagram-icon"></span>
                                  <div
                                    className="post-image lazy-bg"
                                    style={{
                                      backgroundImage: `url(https://scontent-lhr8-1.cdninstagram.com/v/t39.30808-6/538679613_813192577731990_6475474565493229976_n.jpg?stp=dst-jpg_e35_tt6&amp;_nc_cat=107&amp;ccb=1-7&amp;_nc_sid=18de74&amp;_nc_ohc=I45u7KkP8yIQ7kNvwFRF4Km&amp;_nc_oc=AdkbEJpzKHfn_kzm5oOso892TH2XRwut8OD37ORykRpu2QclzcvGykW5hWpWrcWD8is&amp;_nc_zt=23&amp;_nc_ht=scontent-lhr8-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;_nc_gid=W03zZrXY55evbdDEE5dCfQ&amp;oh=00_AfV5LjInIQOfcylloM9t1tM0kPTgQS3mXUKZoOkmI5BDVw&amp;oe=68BC7CF7)`,
                                    }}
                                    role="img"
                                  ></div>
                                </div>
                                <div className="content-container">
                                  <div className="post-content">
                                    <div className="post-header">
                                      <div className="username">
                                        <a
                                          href="https://www.instagram.com/violife_foods/"
                                          data-permalink="https://www.instagram.com/p/DN_QuRKjT6q/"
                                          target="_blank"
                                          className="permalink"
                                          tabIndex={-1}
                                          title="Go to violife_foods instagram page"
                                        >
                                          violife_foods
                                        </a>
                                      </div>
                                    </div>
                                    <div className="caption" role="text">
                                      <p className="sr-only">
                                        violife_foods Instagram post, click to view in dialog.
                                        violife_foods Posted with caption
                                      </p>
                                      Yes, a pie can count as your dish 😂
                                      <br />
                                      <br />
                                      <a
                                        href="https://www.instagram.com/explore/tags/dairyfree"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #dairyfree
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/Violife"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #Violife
                                      </a>
                                    </div>
                                  </div>
                                  <div className="post-footer">
                                    <div className="timestamp" role="text">
                                      <span aria-hidden="false" aria-label="Posted on"></span>Aug
                                      30, 2025, 8 PM
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              className="glide__slide glide__slide--clone"
                              style={{ width: '350px', marginLeft: '15px' }}
                            >
                              <div
                                className="post"
                                id="18076837627985063"
                                tabIndex={-1}
                                role="article"
                                data-postno="4"
                                aria-hidden="true"
                              >
                                <div className="post-media">
                                  <span className="instagram-icon"></span>
                                  <div className="post-video-container post-video">
                                    <video
                                      className="lazy-bg-video "
                                      preload="none"
                                      playsInline
                                      muted
                                      disablePictureInPicture
                                      controlsList="nodownload noplaybackrate"
                                      aria-label="play video"
                                    >
                                      <source src="https://scontent-lhr6-2.cdninstagram.com/o1/v/t2/f2/m86/AQMkG90PDU8OOA2I0gzpRVdBAIqzEpUPDVLe8fBrpkdIuuIoWy1QAR0iXwYs7X6qM9iqfYX4T2IrDmetZpBru2maU5oxQE0-DnP4EzA.mp4?_nc_cat=104&amp;_nc_sid=5e9851&amp;_nc_ht=scontent-lhr6-2.cdninstagram.com&amp;_nc_ohc=krmGhXP7XKoQ7kNvwENDQcu&amp;efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTE3NjUzNDMxNzgzODgyOSwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjE3LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&amp;ccb=17-1&amp;vs=e6b8f361cdd656cb&amp;_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9FMzQxQThBQkI2QjZCREQ4QUIxOTIzQUZBRTAyRjVBOV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HT2VlQ3lEeGJpWWZ2QVlGQVBvOW11UjdpQ3Q5YnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAm2sel4aeDlwQVAigCQzMsF0AxTMzMzMzNGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&amp;_nc_gid=W03zZrXY55evbdDEE5dCfQ&amp;edm=ANo9K5cEAAAA&amp;_nc_zt=28&amp;_nc_tpa=Q5bMBQElkX7f13sLbHz6XJV0y2EL3FSB1rmbUiHkP91mKO0yJPwf94cYkIEpAi2PFHitQp9wsimJuVXU-A&amp;oh=00_AfXARWa1PUKDptll-7aVPj6vgdoRF_Wh7_TS1WmulsvbRQ&amp;oe=68B8822D" />
                                    </video>
                                    <span className="video-play-icon-wrapper">
                                      <i
                                        className="video-play-icon"
                                        role="button"
                                        aria-label="video button, click to play in dialog"
                                      ></i>
                                    </span>
                                  </div>
                                </div>
                                <div className="content-container">
                                  <div className="post-content">
                                    <div className="post-header">
                                      <div className="username">
                                        <a
                                          href="https://www.instagram.com/violife_foods/"
                                          data-permalink="https://www.instagram.com/reel/DN_DBEZDdwf/"
                                          target="_blank"
                                          className="permalink"
                                          tabIndex={-1}
                                          title="Go to violife_foods instagram page"
                                        >
                                          violife_foods
                                        </a>
                                      </div>
                                    </div>
                                    <div className="caption" role="text">
                                      <p className="sr-only">
                                        violife_foods Instagram post, click to view in dialog.
                                        violife_foods Posted with caption
                                      </p>
                                      Need a quick dairy-free snack? Here are some Tomato Flights in
                                      under 20 seconds!
                                      <br />
                                      <br />
                                      <a
                                        href="https://www.instagram.com/explore/tags/SnackGame"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #SnackGame
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/DairyFree"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #DairyFree
                                      </a>
                                      <a
                                        href="https://www.instagram.com/explore/tags/Violife"
                                        target="_blank"
                                        tabIndex={-1}
                                      >
                                        #Violife
                                      </a>
                                    </div>
                                  </div>
                                  <div className="post-footer">
                                    <div className="timestamp" role="text">
                                      <span aria-hidden="false" aria-label="Posted on"></span>Aug
                                      30, 2025, 6 PM
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="carousel-controls">
                          <div
                            className="auto-rotation-control"
                            role="button"
                            tabIndex={0}
                            aria-labelledby="pause-label"
                            data-action="stop"
                          >
                            <input
                              type="checkbox"
                              tabIndex={-1}
                              aria-hidden="true"
                              className="play-pause"
                            />
                          </div>
                          <div className="glide__arrows left-arrow" data-glide-el="controls">
                            <span
                              className="glide__arrow glide__arrow--left"
                              data-glide-dir="&lt;"
                              role="button"
                              aria-label="Previous post"
                              tabIndex={0}
                            ></span>
                          </div>
                          <div className="glide__bullets" data-glide-el="controls[nav]">
                            <span
                              className="glide__bullet"
                              data-glide-dir="=0"
                              tabIndex={0}
                              role="button"
                              aria-label="Carousel slide 1"
                            ></span>
                            <span
                              className="glide__bullet d-none"
                              data-glide-dir="=1"
                              tabIndex={0}
                              role="button"
                            ></span>
                            <span
                              className="glide__bullet d-none"
                              data-glide-dir="=2"
                              tabIndex={0}
                              role="button"
                            ></span>
                            <span
                              className="glide__bullet"
                              data-glide-dir="=3"
                              tabIndex={0}
                              role="button"
                              aria-label="Carousel slide 2"
                            ></span>
                            <span
                              className="glide__bullet d-none"
                              data-glide-dir="=4"
                              tabIndex={0}
                              role="button"
                            ></span>
                            <span
                              className="glide__bullet d-none"
                              data-glide-dir="=5"
                              tabIndex={0}
                              role="button"
                            ></span>
                            <span
                              className="glide__bullet"
                              data-glide-dir="=6"
                              tabIndex={0}
                              role="button"
                              aria-label="Carousel slide 3"
                            ></span>
                            <span
                              className="glide__bullet d-none"
                              data-glide-dir="=7"
                              tabIndex={0}
                              role="button"
                            ></span>
                            <span
                              className="glide__bullet d-none"
                              data-glide-dir="=8"
                              tabIndex={0}
                              role="button"
                            ></span>
                            <span
                              className="glide__bullet"
                              data-glide-dir="=9"
                              tabIndex={0}
                              role="button"
                              aria-label="Carousel slide 4"
                            ></span>
                            <span
                              className="glide__bullet d-none"
                              data-glide-dir="=10"
                              tabIndex={0}
                              role="button"
                            ></span>
                            <span
                              className="glide__bullet d-none"
                              data-glide-dir="=11"
                              tabIndex={0}
                              role="button"
                            ></span>
                            <span
                              className="glide__bullet"
                              data-glide-dir="=12"
                              tabIndex={0}
                              role="button"
                              aria-label="Carousel slide 5"
                            ></span>
                            <span
                              className="glide__bullet d-none"
                              data-glide-dir="=13"
                              tabIndex={0}
                              role="button"
                            ></span>
                            <span
                              className="glide__bullet d-none"
                              data-glide-dir="=14"
                              tabIndex={0}
                              role="button"
                            ></span>
                            <span
                              className="glide__bullet"
                              data-glide-dir="=15"
                              tabIndex={0}
                              role="button"
                              aria-label="Carousel slide 6"
                            ></span>
                            <span
                              className="glide__bullet d-none"
                              data-glide-dir="=16"
                              tabIndex={0}
                              role="button"
                            ></span>
                            <span
                              className="glide__bullet d-none"
                              data-glide-dir="=17"
                              tabIndex={0}
                              role="button"
                            ></span>
                            <span
                              className="glide__bullet"
                              data-glide-dir="=18"
                              tabIndex={0}
                              role="button"
                              aria-label="Carousel slide 7"
                            ></span>
                            <span
                              className="glide__bullet d-none"
                              data-glide-dir="=19"
                              tabIndex={0}
                              role="button"
                            ></span>
                            <span
                              className="glide__bullet d-none"
                              data-glide-dir="=20"
                              tabIndex={0}
                              role="button"
                            ></span>
                            <span
                              className="glide__bullet"
                              data-glide-dir="=21"
                              tabIndex={0}
                              role="button"
                              aria-label="Carousel slide 8"
                              aria-current="true"
                            ></span>
                            <span
                              className="glide__bullet d-none"
                              data-glide-dir="=22"
                              tabIndex={0}
                              role="button"
                            ></span>
                            <span
                              className="glide__bullet d-none"
                              data-glide-dir="=23"
                              tabIndex={0}
                              role="button"
                            ></span>
                            <span
                              className="glide__bullet glide__bullet--active"
                              data-glide-dir="=24"
                              tabIndex={0}
                              role="button"
                              aria-label="Carousel slide 9"
                            ></span>
                          </div>
                          <div className="glide__arrows right-arrow" data-glide-el="controls">
                            <span
                              className="glide__arrow glide__arrow--right"
                              data-glide-dir="&gt;"
                              role="button"
                              aria-label="Next post"
                              tabIndex={0}
                            ></span>
                          </div>
                        </div>
                      </div>
                      <div className="follow-us-button">
                        <a
                          className="btn btn-primary"
                          target="_blank"
                          title="Follow Us"
                          rel="noopener noreferrer"
                          href="https://www.instagram.com/violife_foods/"
                        >
                          Follow Us on Instagram
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <script type="application/ld+json">
    {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Violife Foods",
    "url": "https://www.violife.com/en-us",
    "logo": "https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Logos/violife_logo_500x100_V2-(1).svg?h=&w=",
    "sameAs":[
            "https://www.tiktok.com/@violife_foods",
"https://www.instagram.com/violifeus/",
"https://www.youtube.com/channel/UCbomgKQqQ1W5jI3XJ7I-2ow",
"https://www.tiktok.com/@violifeus"
            ]
    }
</script> */}
          </div>
        </main>
        <footer id="footer-global">
          <div>{route && <Placeholder name="headless-footer" rendering={route} />}</div>
        </footer>
      </div>
      {/* <!-- /#wrapper --> */}
      {/* <script src="https://www.violife.com/en-us/-/media/Base-Themes/Core-Libraries/scripts/optimized-min.js?revision=c5487368ab7a4aac9929bb17a5525e07&amp;t=20250106T064139Z"></script>
      <script src="https://www.violife.com/en-us/-/media/Base-Themes/XA-API/Scripts/optimized-min.js?revision=e8b4debdea4e43269918753549026e96&amp;t=20241110T130915Z"></script>
      <script src="https://www.violife.com/en-us/-/media/Base-Themes/Main-Theme/scripts/optimized-min.js?revision=8000b3ebd9d34f8d946f596f23232bad&amp;t=20250106T065148Z"></script>
      <script src="https://www.violife.com/en-us/-/media/Base-Themes/SearchTheme/Scripts/optimized-min.js?revision=7b17d8d230e54405a2e10001f08c37c2&amp;t=20241204T055259Z"></script>
      <script src="https://www.violife.com/en-us/-/media/Base-Themes/Components-Theme/Scripts/optimized-min.js?revision=b176056992304dfe817b578e9e5fd2c3&amp;t=20250521T030712Z"></script>
      <script src="https://www.violife.com/en-us/-/media/Base-Themes/Resolve-Conflicts/Scripts/optimized-min.js?revision=de3f9bb207224eebaf9532f9c4ca1ca7&amp;t=20241110T131028Z"></script>
      <script src="https://www.violife.com/en-us/-/media/Themes/Upfield/Whitelabels/Whitelabel/Whitelabel/scripts/optimized-min.js?revision=9868eb1f392a4567a596eebf75b1844c&amp;t=20250828T030112Z"></script> */}
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
      <script src="https://www.violife.com/en-us/-/media/Themes/Upfield/Brands/Violife-Foods/Violife-Foods-Global/scripts/optimized-min.js?revision=8ac0667bcbac4dfa82d918891d4bd969&amp;t=20250828T031244Z" />
      {/* <!-- /#wrapper --> */}
      <div className="overlay-wrapper">
        <div className="overlay component">
          <div className="component-content" role="dialog" style={{ maxHeight: '485.9px' }}>
            <div className="overlay-inner"></div>
            <div className="overlay-close" role="button" aria-label="Close dialog"></div>
          </div>
        </div>
      </div>
      {/* <script type="text/javascript" id="" charset="">var myCallback=function(){if(window.digitalData)try{digitalData.registerTMS(function(a){var b=a.timestampMS/1E3;switch(a.eventName){case "is-viewed":console.log(a);viewedDescription(a,b);break;case "click":console.log(a);clickedDescription(a,b);break;case "blur":console.log(a),blurredDescription(a)}}),clearInterval(intervalID)}catch(a){console.log("error event mapper"),console.log(a),clearInterval(intervalID)}};
function viewedDescription(a,b){window.dataLayer.push({event:"component-viewed",category:a.eventCategory+" - viewed",action:"Component "+a.eventCategory+" was viewed on "+a.pagePath,label:"position "+a.pageComponentIndex+"-"+a.pageComponentsTotal,value:parseInt(b,10),interaction_time:b,nonInteraction:1})}
function clickedDescription(a,b){window.dataLayer.push({event:"dd_click",category:"Component - interaction: "+a.eventAction.split(".link")[0],action:a.eventName+" on a "+a.nodeName+" type link",label:"Click on page "+a.pagePath,value:b})}function blurredDescription(a){window.dataLayer.push({event:"blur",category:a.eventName,action:a.nodeName+" in formfield"+a.elementType,label:a.eventLabel,value:a.elementValue})}var intervalID=window.setInterval(myCallback,500),dataLayer=dataLayer||[];</script><script type="text/javascript" id="" charset="">(function(h){window.custom_random_number_user_tempid=google_tag_manager["rm"]["12289599"](67)+"_"+(new Date).getTime();var f=!0;window.evidon.priorConsentCallback=function(b,c,a){try{c=[];for(var d in b)c.push(d+":"+b[d]);f==1&&(f=!1,window.dataLayer.push({event:"evidon_cookie_banner_status",evidon_banner_isvisible:"false",temp_user_id:window.custom_random_number_user_tempid,consent_level:c.join(" | ")}))}catch(e){}};window.evidon.closeCallback=function(){};window.evidon.consentWithdrawnCallback=function(){};window.evidon.consentDeclinedCallback=
function(){window.evidon.notice.dropSuppressionCookie(30);try{var b=typeof window.evidon.banner!="undefined"?window.evidon.banner:!1,c="NA";c=b?b.isVisible():!1;b=[];var a=window.evidon.notice.getConsentData();a=a.value.categories;var d=Object.keys(a)[0];a=a[d];for(var e in a)b.push(e+":"+a[e]);window.dataLayer.push({event:"evidon_cookie_banner_update",evidon_banner_isvisible:c.toString(),temp_user_id:window.custom_random_number_user_tempid,consent_level:b.join(" | ")})}catch(g){}};window.evidon.consentRejectCallback=
function(){};setTimeout(function(){if(f===!0){f=!1;try{var b=typeof window.evidon.banner!="undefined"?window.evidon.banner:!1,c="NA";c=b?b.isVisible():!1;b=[];var a=window.evidon.notice.getConsentData();a=a.value.categories;var d=Object.keys(a)[0];a=a[d];for(var e in a)b.push(e+":"+a[e]);window.dataLayer.push({event:"evidon_cookie_banner_status",evidon_banner_isvisible:c.toString(),temp_user_id:window.custom_random_number_user_tempid,consent_level:b.join(" | ")})}catch(g){}}},500)})(6378);</script><script type="text/javascript" id="" charset="">setTimeout(function(){var b=[],a=window.evidon.notice.getConsentData();a=a.value.categories;var d=Object.keys(a)[0];a=a[d];for(var c in a)b.push(c+":"+a[c]);window.dataLayer.push({event:"evidon_cookie_banner_update",evidon_banner_isvisible:"false",temp_user_id:custom_random_number_user_tempid,consent_level:b.join(" | ")})},250);</script><iframe height={0} width={0} data-gtm-yt-inspected-91="true" style="display: none; visibility: hidden;" data-gtm-yt-inspected-117="true"></iframe><script type="text/javascript" id="" charset="">var _elqQ=_elqQ||[];_elqQ.push(["elqSetSiteId","938126"]);_elqQ.push(["elqUseFirstPartyCookie","trk.violife.com"]);_elqQ.push(["elqTrackPageView",window.location.href]);(function(){var a=document.createElement("script");a.type="text/javascript";a.async=!0;a.src="https://img.en25.com/i/elqCfg.min.js";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)})();</script><iframe height={0} width={0} src="https://14035750.fls.doubleclick.net/activityi;src=14035750;type=violi0;cat=violi0;ord=8909292520572;npa=0;auiddc=416087581.1756808635;uaa=x86;uab=64;uafvl=Not%253BA%253DBrand%3B99.0.0.0%7CMicrosoft%2520Edge%3B139.0.3405.102%7CChromium%3B139.0.7258.128;uamb=0;uam=;uap=Windows;uapv=15.0.0;uaw=0;pscdl=noapi;frm=0;_tu=KFA;gtm=45fe58r1z89119436943za200zb9119436943zd812289599xea;gcs=G111;gcd=13r3r3r2r5l1;dma_cps=syphamo;dma=1;dc_fmt=2;tag_exp=101509157~103116026~103200004~103233427~104527907~104528501~104684208~104684211~104948811~104948813~105427542~105427544;epver=2;dc_random=Xw2sIRj_QwLd0vT90etppmUV4XxrrhDwcA;_dc_test=1;~oref=https%3A%2F%2Fwww.violife.com%2Fen-us?" style="display: none; visibility: hidden;" data-gtm-yt-inspected-91="true" data-gtm-yt-inspected-117="true"></iframe><script id="" text="" charset="" type="text/javascript" src="https://js.adsrvr.org/up_loader.1.1.0.js"></script> */}
      {/* <script type="text/javascript" id="" charset="">ttd_dom_ready(function(){if("function"===typeof TTDUniversalPixelApi){var a=new TTDUniversalPixelApi;a.init("7vb5j68",["2xiuoqm"],"https://insight.adsrvr.org/track/up")}});</script><iframe id="universal_pixel_2xiuoqm" height={0} width={0} style="display:none;" src="https://insight.adsrvr.org/track/cei?advertiser_id=7vb5j68&amp;cookie_sync=1&amp;upv=3.0.0&amp;upid=2xiuoqm&amp;paapi=1&amp;ref=https://www.violife.com/en-us" title="TTD Universal Pixel" data-gtm-yt-inspected-91="true" data-gtm-yt-inspected-117="true"></iframe> */}
      {/* root placeholder for the app, which we add components to using route data */}
    </>
  );
};

export default Layout;
