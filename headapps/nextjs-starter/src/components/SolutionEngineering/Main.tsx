import React from 'react';
import { TextField } from '@sitecore-jss/sitecore-jss-nextjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface Fields {
  Title: TextField;
  Text: TextField;
}

type MainProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const MainDefaultComponent = (props: MainProps): JSX.Element => (
  <div className={`component Main ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Main</span>
    </div>
  </div>
);

export const Default = (props: MainProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <>
      <section
        key={id ? id : undefined}
        className="section section-with-shape-divider border-0 py-0 m-0"
      >
        <div className="shape-divider shape-divider-bottom z-index-3" style={{ height: '136px' }}>
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
                              src="/img/slides/slide-title-border.png"
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
                              src="/img/slides/slide-title-border.png"
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
                              src="/img/slides/slide-title-border-light.png"
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
                              src="/img/slides/slide-title-border-light.png"
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
                          GET STARTED NOW
                          <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                          {/* <i className="fas fa-arrow-right ms-2"></i> */}
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit phasellus blandit massa enim.
            </p>
            <p className="line-height-9 text-4 pe-lg-5 me-lg-5 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim.
              Nullam id varius nunc. Vivamus bibendum magna ex. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Phasellus blandit massa enim.
            </p>
            <a href="#" className="learn-more text-primary font-weight-semibold text-2">
              VIEW MORE
              <FontAwesomeIcon icon={faChevronRight} className="text-3 ms-2" />
              {/* <i className="fas fa-chevron-right text-3 ms-2"></i> */}
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
                          src="/img/gallery/gallery-2.jpg"
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
                          src="/img/gallery/gallery-3.jpg"
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
                          src="/img/gallery/gallery-4.jpg"
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
                          src="/img/gallery/gallery-5.jpg"
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
                          src="/img/gallery/gallery-2.jpg"
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
                          src="/img/gallery/gallery-3.jpg"
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
              <img className="img-fluid" src="/img/logos/logo-1.png" alt="" />
            </div>
            <div>
              <img className="img-fluid" src="/img/logos/logo-2.png" alt="" />
            </div>
            <div>
              <img className="img-fluid" src="/img/logos/logo-3.png" alt="" />
            </div>
            <div>
              <img className="img-fluid" src="/img/logos/logo-4.png" alt="" />
            </div>
            <div>
              <img className="img-fluid" src="/img/logos/logo-5.png" alt="" />
            </div>
            <div>
              <img className="img-fluid" src="/img/logos/logo-6.png" alt="" />
            </div>
            <div>
              <img className="img-fluid" src="/img/logos/logo-4.png" alt="" />
            </div>
            <div>
              <img className="img-fluid" src="/img/logos/logo-2.png" alt="" />
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
    </>
  );

  return <MainDefaultComponent {...props} />;
};
