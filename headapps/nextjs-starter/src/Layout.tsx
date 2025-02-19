/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-page-custom-font */
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

  // {/* <body data-plugin-page-transition> */}

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
        <link rel="stylesheet" href="../css/theme.css" />
        <link rel="stylesheet" href="../css/theme-elements.css" />
        <link rel="stylesheet" href="../css/theme-blog.css" />
        <link rel="stylesheet" href="../css/theme-shop.css" />

        {/* Skin CSS */}
        <link id="skinCSS" rel="stylesheet" href="../css/skins/skin-corporate-10.css" />
        {/* Theme Custom CSS */}
        <link rel="stylesheet" href="../css/custom.css" />
      </Head>
      {/* root placeholder for the app, which we add components to using route data */}
      <div className={'body ' + mainClassPageEditing}>
        <header
          id="header"
          className="header-transparent header-effect-shrink"
          data-plugin-options="{'stickyEnabled': true, 'stickyEffect': 'shrink', 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': false, 'stickyChangeLogo': true, 'stickyStartAt': 30, 'stickyHeaderContainerHeight': 70}"
        >
          <div id="header">{route && <Placeholder name="headless-header" rendering={route} />}</div>
        </header>
        <main>
          <div id="content">{route && <Placeholder name="headless-main" rendering={route} />}</div>
        </main>
        <footer>
          <div id="footer">{route && <Placeholder name="headless-footer" rendering={route} />}</div>
        </footer>
        <div role="main" className="main">
          <section className="section section-with-shape-divider border-0 py-0 m-0">
            <div
              className="shape-divider shape-divider-bottom z-index-3"
              style={{ height: '136px' }}
            >
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 1920 136"
                preserveAspectRatio="xMinYMin"
              >
                <path
                  d="M 0 0.11 L 0 136 L 1920 136 L 1920 1.9 C 1650.0482 79.0955 1327.0648 134 980 134 C 615.6218 134 277.7878 84.5059 0 0.11 Z"
                  fill="#ffffff"
                />
              </svg>
            </div>
            <div
              className="owl-carousel owl-carousel-light owl-carousel-light-init-fadeIn owl-theme manual dots-inside dots-horizontal-center show-dots-hover show-dots-xs nav-style-1 nav-inside nav-inside-plus nav-primary nav-md nav-font-size-md show-nav-hover mb-0"
              data-plugin-options="{'autoplayTimeout': 9000}"
              style={{ height: '100vh' }}
            >
              <div className="owl-stage-outer">
                <div className="owl-stage">
                  {/* <!-- Carousel Slide 1 --> */}
                  <div
                    className="owl-item position-relative overlay overlay-show overlay-op-8"
                    style={{
                      backgroundImage: 'url(img/slides/slide-corporate-10-1.jpg)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      height: '100vh',
                    }}
                  >
                    <div className="container position-relative z-index-3 h-100">
                      <div className="row justify-content-center align-items-center h-100">
                        <div className="col-lg-6">
                          <div className="d-flex flex-column align-items-center">
                            <h3
                              className="position-relative text-color-light text-4 line-height-5 font-weight-normal px-4 mb-2 appear-animation"
                              data-appear-animation="fadeInDownShorter"
                              data-plugin-options="{'minWindowWidth': 0}"
                            >
                              <span className="position-absolute right-100pct top-50pct transform3dy-n50 opacity-3">
                                <img
                                  src="img/slides/slide-title-border.png"
                                  className="w-auto appear-animation"
                                  data-appear-animation="fadeInLeftShorter"
                                  data-appear-animation-delay="250"
                                  data-plugin-options="{'minWindowWidth': 0}"
                                  alt=""
                                />
                              </span>
                              WE CREATE DESIGNS, WE ARE
                              <span className="position-absolute left-100pct top-50pct transform3dy-n50 opacity-3">
                                <img
                                  src="img/slides/slide-title-border.png"
                                  className="w-auto appear-animation"
                                  data-appear-animation="fadeInRightShorter"
                                  data-appear-animation-delay="250"
                                  data-plugin-options="{'minWindowWidth': 0}"
                                  alt=""
                                />
                              </span>
                            </h3>
                            <h2
                              className="porto-big-title text-color-light font-weight-extra-bold mb-3"
                              data-plugin-animated-letters
                              data-plugin-options="{'startDelay': 1000, 'minWindowWidth': 0, 'animationSpeed': 300, 'animationName': 'fadeInRightShorterOpacity', 'letterClass': 'd-inline-block'}"
                            >
                              PORTO
                            </h2>
                            <p
                              className="text-4 text-color-light font-weight-light text-center mb-4"
                              data-plugin-animated-letters
                              data-plugin-options="{'startDelay': 2000, 'minWindowWidth': 0}"
                            >
                              The best choice for your new website
                            </p>
                            <a
                              href="#"
                              className="btn btn-primary btn-modern font-weight-bold text-3 py-3 btn-px-5 mt-1 appear-animation"
                              data-appear-animation="fadeInUpShorter"
                              data-appear-animation-delay="1800"
                              data-plugin-options="{'minWindowWidth': 0}"
                            >
                              GET STARTED NOW!
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Carousel Slide 2 --> */}
                  <div
                    className="owl-item position-relative overlay overlay-show overlay-op-9 pt-5"
                    style={{
                      backgroundImage: 'url(img/slides/slide-corporate-10-2.jpg)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      height: '100vh',
                    }}
                  >
                    <div className="container position-relative z-index-3 h-100">
                      <div className="row justify-content-center align-items-center h-100">
                        <div className="col-lg-7 text-center">
                          <div className="d-flex flex-column align-items-center justify-content-center h-100">
                            <h3
                              className="position-relative text-color-light text-5 line-height-5 font-weight-normal ls-0 px-4 mb-2 appear-animation"
                              data-appear-animation="fadeInDownShorterPlus"
                              data-plugin-options="{'minWindowWidth': 0}"
                            >
                              <span className="position-absolute right-100pct top-50pct transform3dy-n50 opacity-7">
                                <img
                                  src="img/slides/slide-title-border-light.png"
                                  className="w-auto appear-animation"
                                  data-appear-animation="fadeInRightShorter"
                                  data-appear-animation-delay="250"
                                  data-plugin-options="{'minWindowWidth': 0}"
                                  alt=""
                                />
                              </span>
                              HELLO, THIS IS
                              <span className="position-absolute left-100pct top-50pct transform3dy-n50 opacity-7">
                                <img
                                  src="img/slides/slide-title-border-light.png"
                                  className="w-auto appear-animation"
                                  data-appear-animation="fadeInLeftShorter"
                                  data-appear-animation-delay="250"
                                  data-plugin-options="{'minWindowWidth': 0}"
                                  alt=""
                                />
                              </span>
                            </h3>
                            <h1
                              className="text-color-light font-weight-extra-bold text-10 text-md-12-13 line-height-1 line-height-sm-3 mb-2 appear-animation"
                              data-appear-animation="blurIn"
                              data-appear-animation-delay="500"
                              data-plugin-options="{'minWindowWidth': 0}"
                            >
                              PORTO HTML TEMPLATE
                            </h1>
                            <p
                              className="text-4-5 text-color-light font-weight-light text-center mb-5"
                              data-plugin-animated-letters
                              data-plugin-options="{'startDelay': 1000, 'minWindowWidth': 0, 'animationSpeed': 30}"
                            >
                              Trusted by over 40,000 satisfied users.
                            </p>
                            <a
                              href="#"
                              className="btn btn-primary btn-modern font-weight-bold text-3 py-3 btn-px-5 appear-animation"
                              data-appear-animation="fadeInUpShorter"
                              data-appear-animation-delay="1800"
                              data-plugin-options="{'minWindowWidth': 0}"
                            >
                              GET STARTED NOW <i className="fas fa-arrow-right ms-2"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-nav">
                <button
                  type="button"
                  role="presentation"
                  className="owl-prev"
                  aria-label="Previous"
                ></button>
                <button
                  type="button"
                  role="presentation"
                  className="owl-next"
                  aria-label="Next"
                ></button>
              </div>
              <div className="owl-dots mb-5">
                <button role="button" className="owl-dot active">
                  <span></span>
                </button>
                <button role="button" className="owl-dot">
                  <span></span>
                </button>
              </div>
            </div>
          </section>
          <div className="container container-xl-custom py-4">
            <div className="row py-lg-5 my-5">
              <div className="col-lg-7 pe-lg-5 mb-5 mb-lg-0">
                <h2 className="font-weight-bold mb-4">Hello, we are Porto</h2>
                <p className="text-color-dark text-6 line-height-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit phasellus blandit massa
                  enim.
                </p>
                <p className="line-height-9 text-4 pe-lg-5 me-lg-5 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa
                  enim. Nullam id varius nunc. Vivamus bibendum magna ex. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Phasellus blandit massa enim.
                </p>
                <a href="#" className="learn-more text-primary font-weight-semibold text-2">
                  VIEW MORE <i className="fas fa-chevron-right text-3 ms-2"></i>
                </a>
              </div>
              <div className="col-md-10 col-lg-5">
                <div className="row">
                  <div className="col-6 mb-4">
                    <div
                      className="appear-animation"
                      data-appear-animation="fadeInUp"
                      data-appear-animation-delay="200"
                    >
                      <span className="d-inline-block font-weight-extra-bold text-color-primary font-italic line-height-1 text-14 ls-0 mb-2">
                        01
                      </span>
                      <h4 className="font-weight-bold text-5 ps-1 mb-2">Strategy</h4>
                      <p className="ps-1">Lorem ipsum dolor sit amet, coctetur adipiscing elit.</p>
                    </div>
                  </div>
                  <div className="col-6 mb-4">
                    <div
                      className="appear-animation"
                      data-appear-animation="fadeInUp"
                      data-appear-animation-delay="600"
                    >
                      <span className="d-inline-block font-weight-extra-bold text-color-primary font-italic line-height-1 text-14 ls-0 mb-2">
                        02
                      </span>
                      <h4 className="font-weight-bold text-5 ps-1 mb-2">Plan</h4>
                      <p className="ps-1">Lorem ipsum dolor sit amet, coctetur adipiscing elit.</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 mb-4 mb-sm-0">
                    <div
                      className="appear-animation"
                      data-appear-animation="fadeInUp"
                      data-appear-animation-delay="1000"
                    >
                      <span className="d-inline-block font-weight-extra-bold text-color-primary font-italic line-height-1 text-14 ls-0 mb-2">
                        03
                      </span>
                      <h4 className="font-weight-bold text-5 ps-1 mb-2">Work</h4>
                      <p className="ps-1">Lorem ipsum dolor sit amet, coctetur adipiscing elit.</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div
                      className="appear-animation"
                      data-appear-animation="fadeInUp"
                      data-appear-animation-delay="1400"
                    >
                      <span className="d-inline-block font-weight-extra-bold text-color-primary font-italic line-height-1 text-14 ls-0 mb-2">
                        04
                      </span>
                      <h4 className="font-weight-bold text-5 ps-1 mb-2">Quality</h4>
                      <p className="ps-1">Lorem ipsum dolor sit amet, coctetur adipiscing elit.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="section bg-color-grey section-height-3 border-0 m-0">
            <div className="container container-xl-custom py-3">
              <div className="row">
                <div className="col text-center">
                  <h2 className="font-weight-normal mb-5">
                    Our <strong className="font-weight-extra-bold">Portfolio</strong>
                  </h2>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col">
                  <div
                    className="owl-carousel owl-theme nav-style-1 stage-margin mb-0"
                    data-plugin-options="{'responsive': {'576': {'items': 1}, '768': {'items': 2}, '992': {'items': 3}, '1200': {'items': 4}}, 'margin': 3, 'loop': true, 'nav': true, 'dots': false, 'stagePadding': 40}"
                  >
                    <div className="m-3">
                      <div className="hover-effect-3d">
                        <div className="thumb-info thumb-info-hide-wrapper-bg thumb-info-no-zoom rounded-0">
                          <div className="thumb-info-wrapper">
                            <img
                              src="img/gallery/gallery-2.jpg"
                              className="img-fluid rounded-0 hover-effect-2"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="m-3">
                      <div className="hover-effect-3d">
                        <div className="thumb-info thumb-info-hide-wrapper-bg thumb-info-no-zoom rounded-0">
                          <div className="thumb-info-wrapper">
                            <img
                              src="img/gallery/gallery-3.jpg"
                              className="img-fluid rounded-0 hover-effect-2"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="m-3">
                      <div className="hover-effect-3d">
                        <div className="thumb-info thumb-info-hide-wrapper-bg thumb-info-no-zoom rounded-0">
                          <div className="thumb-info-wrapper">
                            <img
                              src="img/gallery/gallery-4.jpg"
                              className="img-fluid rounded-0 hover-effect-2"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="m-3">
                      <div className="hover-effect-3d">
                        <div className="thumb-info thumb-info-hide-wrapper-bg thumb-info-no-zoom rounded-0">
                          <div className="thumb-info-wrapper">
                            <img
                              src="img/gallery/gallery-5.jpg"
                              className="img-fluid rounded-0 hover-effect-2"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="m-3">
                      <div className="hover-effect-3d">
                        <div className="thumb-info thumb-info-hide-wrapper-bg thumb-info-no-zoom rounded-0">
                          <div className="thumb-info-wrapper">
                            <img
                              src="img/gallery/gallery-2.jpg"
                              className="img-fluid rounded-0 hover-effect-2"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="m-3">
                      <div className="hover-effect-3d">
                        <div className="thumb-info thumb-info-hide-wrapper-bg thumb-info-no-zoom rounded-0">
                          <div className="thumb-info-wrapper">
                            <img
                              src="img/gallery/gallery-3.jpg"
                              className="img-fluid rounded-0 hover-effect-2"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col text-center">
                  <a href="#" className="btn btn-primary font-weight-semibold text-3 px-5 btn-py-2">
                    VIEW MORE
                  </a>
                </div>
              </div>
            </div>
          </section>
          <div className="container container-xl-custom">
            <div className="row text-center py-4 my-5">
              <div
                className="owl-carousel owl-theme carousel-center-active-item mb-0"
                data-plugin-options="{'responsive': {'0': {'items': 1}, '476': {'items': 1}, '768': {'items': 5}, '992': {'items': 7}, '1200': {'items': 7}}, 'margin': 50, 'autoplay': true, 'autoplayTimeout': 3000, 'dots': false}"
              >
                <div>
                  <img className="img-fluid" src="img/logos/logo-1.png" alt="" />
                </div>
                <div>
                  <img className="img-fluid" src="img/logos/logo-2.png" alt="" />
                </div>
                <div>
                  <img className="img-fluid" src="img/logos/logo-3.png" alt="" />
                </div>
                <div>
                  <img className="img-fluid" src="img/logos/logo-4.png" alt="" />
                </div>
                <div>
                  <img className="img-fluid" src="img/logos/logo-5.png" alt="" />
                </div>
                <div>
                  <img className="img-fluid" src="img/logos/logo-6.png" alt="" />
                </div>
                <div>
                  <img className="img-fluid" src="img/logos/logo-4.png" alt="" />
                </div>
                <div>
                  <img className="img-fluid" src="img/logos/logo-2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="container container-xl-custom">
            <div className="row justify-content-center featured-boxes featured-boxes-style-4 pb-3 mb-4">
              <div className="col-md-4">
                <div className="featured-box featured-box-primary">
                  <div
                    className="box-content appear-animation"
                    data-appear-animation="fadeInUp"
                    data-appear-animation-delay="200"
                  >
                    <i className="icon-featured icons icon-location-pin mb-3"></i>
                    <span className="d-block opacity-7 line-height-1">PORTO ADDRESS</span>
                    <h2 className="font-weight-bold text-color-dark text-5 mb-0">
                      123 Street Name, City, USA
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="featured-box featured-box-primary mx-5">
                  <div
                    className="box-content appear-animation"
                    data-appear-animation="fadeInUp"
                    data-appear-animation-delay="600"
                  >
                    <i className="icon-featured icons icon-clock mb-3"></i>
                    <span className="d-block opacity-7 line-height-1">BUSINESS HOURS</span>
                    <h2 className="font-weight-bold text-color-dark text-5 mb-0">
                      Mon - Sun / 9:00AM - 8:00PM
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="featured-box featured-box-primary">
                  <div
                    className="box-content appear-animation"
                    data-appear-animation="fadeInUp"
                    data-appear-animation-delay="1000"
                  >
                    <i className="icon-featured icons icon-call-in mb-3"></i>
                    <span className="d-block opacity-7 line-height-1">CALL US NOW</span>
                    <h2 className="font-weight-bold text-color-dark text-5 mb-0">
                      <a
                        href="tel:0123456789"
                        className="text-decoration-none text-color-dark text-color-hover-primary"
                      >
                        (123) 456-7890
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
        </div>
        <footer id="footer" className="bg-color-light border-0 pt-5 mt-0">
          <div className="container pb-5 mb-5">
            <div className="row justify-content-center">
              <div className="col-md-9 col-lg-6">
                <h2 className="font-weight-normal text-color-dark text-center text-8 mb-4">
                  <strong className="font-weight-extra-bold">Contact</strong> Us
                </h2>
                <p className="text-4 opacity-8 text-center mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa
                  enim. Nullam id varius nunc. Vivamus bibendum
                </p>
                <form
                  className="contact-form form-style-3"
                  action="php/contact-form.php"
                  method="POST"
                >
                  <div className="contact-form-success alert alert-success d-none">
                    Message has been sent to us.
                  </div>
                  <div className="contact-form-error alert alert-danger d-none">
                    Error sending your message.
                    <span className="mail-error-message text-1 d-block"></span>
                  </div>
                  <input type="hidden" value="Contact Form" name="subject" id="subject" />
                  <div className="row">
                    <div className="form-group col-md-6 pe-md-2">
                      <input
                        type="text"
                        value=""
                        data-msg-required="Please enter your name."
                        maxLength={100}
                        className="form-control h-auto py-2"
                        placeholder="Your Name..."
                        name="name"
                        id="name"
                        required
                      />
                    </div>
                    <div className="form-group col-md-6 ps-md-2">
                      <input
                        type="text"
                        value=""
                        data-msg-required="Please enter your phone."
                        maxLength={100}
                        className="form-control h-auto py-2"
                        placeholder="Your Phone..."
                        name="phone"
                        id="phone"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      value=""
                      data-msg-required="Please enter your email address."
                      data-msg-email="Please enter a valid email address."
                      maxLength={100}
                      className="form-control h-auto py-2"
                      placeholder="Your Email Address..."
                      name="email"
                      id="email"
                      required
                    />
                  </div>
                  <div className="row">
                    <div className="form-group col">
                      <textarea
                        maxLength={5000}
                        data-msg-required="Please enter your message."
                        rows={4}
                        className="form-control"
                        placeholder="Your Message..."
                        name="message"
                        id="message"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col text-center">
                      <input
                        type="submit"
                        value="SUBMIT"
                        className="btn btn-primary font-weight-semibold text-3 px-5 btn-py-2"
                        data-loading-text="Loading..."
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="footer-copyright curved-border curved-border-top d-flex align-items-center">
            <div className="container py-2">
              <div className="row py-4">
                <div className="col text-center">
                  <p className="text-3">
                    2024 ©{' '}
                    <strong className="font-weight-normal text-color-light opacity-7">
                      Porto Template
                    </strong>{' '}
                    - Copyright. All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
