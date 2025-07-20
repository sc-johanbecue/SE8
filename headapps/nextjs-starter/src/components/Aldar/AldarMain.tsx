import React from 'react';
import Link from 'next/link';
import {
  Placeholder,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-jss/sitecore-jss-nextjs';

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
};

const AldarMainDefaultComponent = (props: ComponentProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: ComponentProps): JSX.Element => {
  return (
    <main>
      <div id="content" className="container-fluid no-padding">
        {/* <div className="component summary">
          <section className="cookie-banner">
            <div className="container">
              <div className="row">
                <div className="col-1 col-xl-2"></div>
                <div className="col-10 col-xl-8">
                  <div className="cookie-banner__container">
                    <div className="cookie-banner__content">
                      <p>
                        We use cookies to offer you a better user experience. By continuing to use
                        this website, you consent to the use of cookies in accordance with our
                        &nbsp;
                        <Link href="https://www.aldar.com/en/privacy-policy">Privacy policy</Link>
                      </p>
                    </div>
                    <div className="cookie-banner__buttons">
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        className="o-button -white cookie-banner__btn"
                      >
                        Accept
                      </a>
                      <Link
                        className="cookie-banner__link "
                        href="https://www.aldar.com/en/privacy-policy"
                        target="|Custom"
                      >
                        No, I want more info
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div> */}
        <div className="component container full-width">
          <div className="component-content">
            {/* <div className="component content">
              <div className="component-content">
                <div className="floating-cta">
                  <div className="floating-cta__overlay"></div>
                  <div className="floating-cta__content">
                    <div className="cta-buttons">
                      <Link href="" className="open-chat closed">
                        {' '}
                      </Link>
                      <Link href="tel://80025327" target="" className="request-callback">
                        Call 800ALDAR
                      </Link>
                      <div className="cta-options">
                        <div>
                          <div className="">
                            <Link href="tel://80025327" target="" className="cta-action-info">
                              Call 800ALDAR
                            </Link>
                            <Link href="" className="cta-action">
                              <img
                                src="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/floating-cta/icon-call.svg?iar=0&amp;rev=f0ce86949c40481883e025336c8732ba"
                                alt="icon call"
                              />
                            </Link>
                          </div>
                        </div>
                        <div>
                          <a
                            onClick={() => {
                              window.open(
                                'https://aldar.eu.qualtrics.com/jfe/form/SV_6QBWQ64ioCcHVqd',
                                'popUpWindow',
                                'height=500,width=400,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes'
                              );
                            }}
                            target=""
                            className="cta-action-info"
                          >
                            Share your feedback
                          </a>
                          <Link href="" className="cta-action">
                            <img
                              src="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/floating-cta/icon-pointer.svg?iar=0&amp;rev=49ee4b9102af4e989d8347896c19341c"
                              alt="icon pointer"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="component hero-banner-component sc-background-image-stretch">
              <div className="component-content">
                <div className="main-hero ">
                  <div className="swiper-container" data-swiperconfig="mainHero">
                    <div className="main-hero__controls">
                      <div className="swiper-pagination"></div>
                      <div className="o-button-group">
                        <a
                          className="o-button -white -square -left swiper-button-prev carousel-button__prev"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          <span className="o-button_label"></span>
                        </a>
                        <a
                          className="o-button -white -square swiper-button-next carousel-button__next"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          <span className="o-button_label"></span>
                        </a>
                      </div>
                    </div>
                    <div className="swiper-wrapper">
                      <div className="swiper-slide" data-hover-label="Live Aldar">
                        <div className="main-hero__item">
                          <div className="main-hero__bg">
                            <figure className="d-none d-lg-block">
                              <img
                                src="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/aldar-living/live-aldar-homepagebanner-1920x854.jpg?h=854&amp;iar=0&amp;w=1920&amp;rev=6eb4e47c928b42deacd98196fdf77746"
                                alt="live-aldar-homepagebanner-1920x854"
                                width="1920"
                                height="854"
                                data-lazy="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/aldar-living/live-aldar-homepagebanner-1920x854.jpg?rev=6eb4e47c928b42deacd98196fdf77746"
                              />
                            </figure>
                            <figure className="main-hero__image-mobile d-block d-lg-none">
                              <img
                                src="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/aldar-living/live-aldar-mobilebanner-496x816.jpg?h=816&amp;iar=0&amp;w=496&amp;rev=00fec0640d0d46bc9c6c302cfe4f8297"
                                alt="live-aldar-mobilebanner-496x816"
                                width="496"
                                height="816"
                                data-lazy="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/aldar-living/live-aldar-mobilebanner-496x816.jpg?rev=00fec0640d0d46bc9c6c302cfe4f8297"
                              />
                            </figure>
                          </div>
                          <div className="main-hero__content">
                            <div className="main-hero__left">
                              <h2 className="h1 h1--box"> Live Aldar</h2>
                              <p className="body-text-18">
                                Well Designed. Human Centric. Positive Impact.
                              </p>
                              <Link
                                className="o-button -anim -white main-hero__cta hasYoutube video-button hero__button-video"
                                href="https://www.youtube.com/watch?v=k1doZRbh-0A"
                              >
                                Watch Video
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide" data-hover-label="Future Talent Programme">
                        <div className="main-hero__item">
                          <div className="main-hero__bg">
                            <figure className="d-none d-lg-block">
                              <img
                                src="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/graduate-programme/resized/graduate-programme-banner-1920x667.jpg?h=666&amp;iar=0&amp;w=1920&amp;rev=d8cff8a61b574ff9a688319d13de8eba"
                                alt="graduate-programme-banner-1920x667"
                                width="1920"
                                height="666"
                                data-lazy="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/graduate-programme/resized/graduate-programme-banner-1920x667.jpg?rev=d8cff8a61b574ff9a688319d13de8eba"
                              />
                            </figure>
                            <figure className="main-hero__image-mobile d-block d-lg-none">
                              <img
                                src="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/graduate-programme/resized/graduate-programme-banner-1920x667.jpg?h=666&amp;iar=0&amp;w=1920&amp;rev=d8cff8a61b574ff9a688319d13de8eba"
                                alt="graduate-programme-banner-1920x667"
                                width="1920"
                                height="666"
                                data-lazy="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/graduate-programme/resized/graduate-programme-banner-1920x667.jpg?rev=d8cff8a61b574ff9a688319d13de8eba"
                              />
                            </figure>
                          </div>
                          <div className="main-hero__content">
                            <div className="main-hero__left">
                              <h2 className="h1 h1--box"> Future Talent Programme</h2>
                              <p className="body-text-18"></p>
                              <Link
                                className="o-button -anim -white main-hero__cta "
                                href="https://www.aldar.com/en/careers/graduate-programme"
                              >
                                Learn More
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="swiper-slide"
                        data-hover-label="Together We Can Achieve Net Zero."
                      >
                        <div className="main-hero__item">
                          <div className="main-hero__bg">
                            <figure className="d-none d-lg-block">
                              <img
                                src="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/sustainability/netzero-neo/net-zero-homepage.png?h=640&amp;iar=0&amp;w=1440&amp;rev=dd1300ccbc834790b91fb74aebc0cb19"
                                alt="net zero homepage"
                                width="1440"
                                height="640"
                                data-lazy="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/sustainability/netzero-neo/net-zero-homepage.png?rev=dd1300ccbc834790b91fb74aebc0cb19"
                              />
                            </figure>
                            <figure className="main-hero__image-mobile d-block d-lg-none">
                              <img
                                src="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/sustainability/netzero-neo/net-zero-homepage-mobile.png?h=818&amp;iar=0&amp;w=496&amp;rev=f98629cd31784811bbfe986f1e660511"
                                alt="net zero homepage mobile"
                                width="496"
                                height="818"
                                data-lazy="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/sustainability/netzero-neo/net-zero-homepage-mobile.png?rev=f98629cd31784811bbfe986f1e660511"
                              />
                            </figure>
                          </div>
                          <div className="main-hero__content">
                            <div className="main-hero__left">
                              <h2 className="h1 h1--box"> Together We Can Achieve Net Zero.</h2>
                              <p className="body-text-18">
                                <p>
                                  Our Net Zero Plan sets the pathway to become a Net Zero business
                                  by 2050
                                </p>
                              </p>
                              <Link
                                className="o-button -anim -white main-hero__cta "
                                href="https://www.aldar.com/en/explore-aldar/sustainability/netzero"
                              >
                                Learn More
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide" data-hover-label="Places to Enjoy">
                        <div className="main-hero__item">
                          <div className="main-hero__bg">
                            <figure className="d-none d-lg-block">
                              <img
                                src="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/home/updated-images/homepage-places-to-enjoy-banner-1920x853.png?h=853&amp;iar=0&amp;w=1920&amp;rev=73cae242823b4a479035bbaa54a0a53b"
                                alt="homepage-places-to-enjoy-banner-1920x853"
                                width="1920"
                                height="853"
                                data-lazy="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/home/updated-images/homepage-places-to-enjoy-banner-1920x853.png?rev=73cae242823b4a479035bbaa54a0a53b"
                              />
                            </figure>
                            <figure className="main-hero__image-mobile d-block d-lg-none">
                              <img
                                src="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/home/updated-images/homepage-places-to-enjoy-banner-mobile-496x816.png?h=816&amp;iar=0&amp;w=496&amp;rev=b925fad522aa4ac6b09a41778391313c"
                                alt="homepage-places-to-enjoy-banner-mobile-496x816"
                                width="496"
                                height="816"
                                data-lazy="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/home/updated-images/homepage-places-to-enjoy-banner-mobile-496x816.png?rev=b925fad522aa4ac6b09a41778391313c"
                              />
                            </figure>
                          </div>
                          <div className="main-hero__content">
                            <div className="main-hero__left">
                              <h2 className="h1 h1--box"> Places to Enjoy</h2>
                              <p className="body-text-18"></p>
                              <Link
                                className="o-button -anim -white main-hero__cta "
                                href="https://www.aldar.com/en/explore-aldar/businesses/hospitality"
                              >
                                Learn more
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide" data-hover-label="Space to Work">
                        <div className="main-hero__item">
                          <div className="main-hero__bg">
                            <figure className="d-none d-lg-block">
                              <img
                                src="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/home/updated-images/space-to-work-banner.jpg?h=1080&amp;iar=0&amp;w=1920&amp;rev=b8dc9f68e2e149e9977ce781158fda23"
                                alt="space to work banner"
                                width="1920"
                                height="1080"
                                data-lazy="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/home/updated-images/space-to-work-banner.jpg?rev=b8dc9f68e2e149e9977ce781158fda23"
                              />
                            </figure>
                            <figure className="main-hero__image-mobile d-block d-lg-none">
                              <img
                                src="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/home/updated-images/space-to-work-banner-mobile.jpg?h=816&amp;iar=0&amp;w=496&amp;rev=a9aacc7948d04bfe962e06966b5a3cf5"
                                alt="space to work banner mobile"
                                width="496"
                                height="816"
                                data-lazy="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/home/updated-images/space-to-work-banner-mobile.jpg?rev=a9aacc7948d04bfe962e06966b5a3cf5"
                              />
                            </figure>
                          </div>
                          <div className="main-hero__content">
                            <div className="main-hero__left">
                              <h2 className="h1 h1--box"> Space to Work</h2>
                              <p className="body-text-18"></p>
                              <Link
                                className="o-button -anim -white main-hero__cta "
                                href="https://www.aldar.com/en/explore-aldar/businesses/investment/commercial"
                              >
                                Learn more
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="component typos-component container --title-description margin-top-80">
              <div className="component-content">
                <div className="container typos" data-animation="">
                  <div className="row">
                    <div className="col-1 "></div>
                    <div className="col-10 col-md-3 ">
                      <h2 className="h2 h2--box typos__heading">
                        Aldar: Redefining Luxury Living with Innovative Properties
                      </h2>
                    </div>
                    <div className="w-100 d-lg-none"></div>
                    <div className="col-1 d-lg-none"></div>
                    <div className="col-10 col-md-7 ">
                      <div className="typos__holder">
                        <p className="body-text-18" />
                        Welcome to a world of unparalleled luxury and sophistication, where your
                        dreams of the perfect living space become a stunning reality. At Aldar, we
                        pride ourselves on being at the forefront of creating innovative and iconic
                        properties that redefine the very essence of modern living. Whether you are
                        looking for apartments for rent in Abu Dhabi or villas for rent in Abu
                        Dhabi, we offer a range of properties that cater to your every need and
                        desire.&nbsp;
                        <br />
                        <br />
                        With a commitment to excellence in every aspect of our business, we strive
                        to exceed your expectations and provide you with the ultimate lifestyle
                        experience. So come, explore our world of luxury and let us help you find
                        your perfect home.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="component promo promotion2-v2 JBEJBE">
              <div className="component-content">
                <div className="promotion__container">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    className="promotion__btn"
                    data-target="#promotion3"
                  >
                    <span className="body-text-bold-15">Promotions</span>
                  </a>
                </div>
                <div className="main-hero__popup promotion" id="promotion3" data-animation="">
                  <button
                    onClick={() => {
                      return false;
                    }}
                    className="close-button -white"
                    data-target="#promotion3"
                  >
                    <span>Close</span>
                  </button>
                  <div className="promotion__items h-100">
                    <div className="container h-100">
                      <div className="row h-100">
                        <div className="col-1"></div>
                        <div className="col-11 col-lg-5 promotion__item h-100">
                          <div className="container h-100">
                            <div className="row h-100">
                              <div className="col promotion__content-container">
                                <div className="promotion__content">
                                  <h2>Haven</h2>
                                  <Link
                                    className="o-button -white -anim promotion__link"
                                    href="https://www.aldar.com/en/haven"
                                  >
                                    Register your Interest
                                    <span className="o-button_label">Register your Interest </span>
                                    <div className="o-button_line"></div>
                                    <div className="o-button_line"></div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="container">
                            <div className="row promotion__image-row ">
                              <div className="col promotion__image-content">
                                <figure className="promotion__image">
                                  <img
                                    src="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/project-takeover/haven-takeover/haven-promotion-584x467.jpg?h=467&amp;iar=0&amp;w=584&amp;rev=3e647fe896d64a62b38baa198d05ae6a"
                                    alt="haven-promotion-584x467"
                                    width="584"
                                    height="467"
                                  />
                                </figure>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-1 d-none d-md-block d-lg-none"></div>
                        <div className="col-11 col-lg-5 promotion__item h-100">
                          <div className="container h-100">
                            <div className="row h-100">
                              <div className="col promotion__content-container">
                                <div className="promotion__content">
                                  <h2>Gardenia Bay</h2>
                                  <Link
                                    className="o-button -white -anim promotion__link"
                                    href="https://www.aldar.com/en/gardenia-bay"
                                  >
                                    Register your Interest
                                    <span className="o-button_label">Register your Interest </span>
                                    <div className="o-button_line"></div>
                                    <div className="o-button_line"></div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="container">
                            <div className="row promotion__image-row ">
                              <div className="col promotion__image-content">
                                <figure className="promotion__image">
                                  <img
                                    src="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/project-takeover/gardenia-bay/gardenia-bay-promo-584x467.png?h=467&amp;iar=0&amp;w=584&amp;rev=a1f6984aa1d6454fa631141012364916"
                                    alt="gardenia-bay-promo-584x467"
                                    width="584"
                                    height="467"
                                  />
                                </figure>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-1 d-md-none d-block"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="component promo margin-bottom-60">
              <div className="component-content"></div>
            </div> */}
            {/* <div className="component infographic core-values__wrapper static-header margin-bottom-80">
              <div className="component-content">
                <div
                  className="core-values container"
                  data-animation="coreValues"
                  data-animationConfig="coreValues"
                  data-animationLoop="true"
                >
                  <div className="container typos typos--title-description-link --box-shadow">
                    <div className="row no-gutters">
                      <div className="col-1"></div>
                      <div className="col-10 col-lg-6">
                        <h2 className="h2 h2--box typos__heading">Latest Results Documents </h2>
                      </div>
                      <div className="w-100"></div>
                      <div className="col-1"></div>
                      <div className="col-10"></div>
                    </div>
                  </div>
                  <div className="row">
                    <div className=" col-md-1 "></div>
                    <div className="col-md-10">
                      <div className="container">
                        <div className="row core-values__items  row-cols-4 ">
                          <div className="col">
                            <div className="core-values__item">
                              <div className="core-values__inner ">
                                <h5 className="h5 core-values__title ">
                                  FY 2023 Results – Press Release
                                </h5>
                                <p className="core-values__body body-text-14"></p>
                                <Link
                                  href="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/final-designed-icons/investors/latest-results-pdf/aldar-fy2023-financial-results-press-release-09-02-24-final-en.pdf?rev=8dbe6f0078dd4ed2a7d6f229cf538a6e"
                                  rel="noopener noreferrer"
                                  className="link link--pdf"
                                  target="_blank"
                                >
                                  View pdf
                                </Link>
                                <img
                                  src="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/final-designed-icons/investors/latest-results-documents/latest-results-documents---press-release.svg?iar=0&amp;rev=f40ecdf5784f4180b7ac0ba3222e09fe"
                                  className="core-values__img"
                                  alt="Latest Results Documents - press release"
                                  loading="lazy"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="core-values__item">
                              <div className="core-values__inner ">
                                <h5 className="h5 core-values__title ">
                                  FY 2023 Results - Presentation
                                </h5>
                                <p className="core-values__body body-text-14"></p>
                                <Link
                                  href="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/final-designed-icons/investors/latest-results-pdf/aldar-properties-results-presentation-fy2023-final-02.pdf?rev=8579f7825b89432e98c92ac66bf03749"
                                  rel="noopener noreferrer"
                                  className="link link--pdf"
                                  target="_blank"
                                >
                                  View pdf
                                </Link>
                                <img
                                  src="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/final-designed-icons/investors/latest-results-documents/latest-results-documents---presentation.svg?iar=0&amp;rev=e018d52eca4e43b49359bcf6cafede80"
                                  className="core-values__img"
                                  alt="Latest Results Documents - presentation"
                                  loading="lazy"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="core-values__item">
                              <div className="core-values__inner ">
                                <h5 className="h5 core-values__title ">
                                  FY 2023 Results – Financial Statements
                                </h5>
                                <p className="core-values__body body-text-14"></p>
                                <Link
                                  href="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/final-designed-icons/investors/latest-results-pdf/english-financial-statement-ap-pjsc-dec-23-01.pdf?rev=d03ea90722044a53acefcdd90fd2d7af"
                                  rel="noopener noreferrer"
                                  className="link link--pdf"
                                  target="_blank"
                                >
                                  View pdf
                                </Link>
                                <img
                                  src="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/final-designed-icons/investors/latest-results-documents/latest-results-documents---financial-statements.svg?iar=0&amp;rev=e2b8064a57fb43b9a95ff9dcf74678e6"
                                  className="core-values__img"
                                  alt="Latest Results Documents - financial statements"
                                  loading="lazy"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="core-values__item">
                              <div className="core-values__inner ">
                                <h5 className="h5 core-values__title ">
                                  FY 2023 – Earnings Call Transcript
                                </h5>
                                <p className="core-values__body body-text-14"></p>
                                <Link
                                  href="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/final-designed-icons/investors/latest-results-pdf/aldar-properties-full-year-2023-earnings-call-transcript-en-ar.pdf?rev=0c8d0aca49e0483abf8b21e5b2c9de86"
                                  rel="noopener noreferrer"
                                  className="link link--pdf"
                                  target="_blank"
                                >
                                  View pdf
                                </Link>
                                <img
                                  src="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/final-designed-icons/investors/latest-results-documents/earning-call.svg?iar=0&amp;rev=086fb7d73fa54403a066300726ae7588"
                                  className="core-values__img"
                                  alt="Earning Call"
                                  loading="lazy"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <Placeholder key="aldarcontent" name="content" rendering={props.rendering} />
            {/* <div className="component summary margin-bottom-80">
              <section className="facts padding-bottom-80" data-animation="">
                <div className="container typos --box-shadow margin-bottom-40" data-animation="">
                  <div className="row">
                    <div className="col-2"></div>
                    <div className="col-10">
                      <p className="typos-lower-header-description">As of 2022</p>
                      <h2 className="h2 h2--box typos__heading">Aldar in Numbers</h2>
                    </div>
                    <div className="w-100 d-lg-none"></div>
                    <div className="col-1 d-lg-none"></div>
                    <div className="col-10 col-md-7">
                      <div className="typos__holder"></div>
                    </div>
                  </div>
                </div>
                <div className="container facts__item-container">
                  <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-12 col-lg-8">
                      <div className="contaier">
                        <div className="row no-gutters facts__item-row">
                          <div className="col-12 col-lg-3 ">
                            <div className="facts__item with-border">
                              <img
                                src="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/final-designed-icons/homepage-icons/aldar-in-numbers-1.svg?h=80&amp;iar=0&amp;w=80&amp;rev=63605cb08c20489ba25a88498ff85e57"
                                alt="Agreement Icon"
                                width="80"
                                height="80"
                              />
                              <small>Over</small>
                              <h3 className="h3">53,000</h3>
                              <p className="body-text-14--medium">Residential Units</p>
                            </div>
                          </div>
                          <div className="col-12 col-lg-3 ">
                            <div className="facts__item with-border">
                              <img
                                src="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/final-designed-icons/homepage-icons/aldar-in-numbers-2.svg?h=80&amp;iar=0&amp;w=80&amp;rev=5a447a1677dc4224b4fcf580bece9f49"
                                alt="Table Icon "
                                width="80"
                                height="80"
                              />
                              <small>SQM</small>
                              <h3 className="h3">1M+</h3>
                              <p className="body-text-14--medium">Office Space</p>
                            </div>
                          </div>
                          <div className="col-12 col-lg-3 ">
                            <div className="facts__item with-border">
                              <img
                                src="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/final-designed-icons/homepage-icons/aldar-in-numbers-3.svg?h=80&amp;iar=0&amp;w=80&amp;rev=ce1f96d8642e4fe98c6c3f3edc01fd01"
                                alt="Briefcase icon"
                                width="80"
                                height="80"
                              />
                              <small>SQM/GLA</small>
                              <h3 className="h3">600,000 +</h3>
                              <p className="body-text-14--medium">Retail Space</p>
                            </div>
                          </div>
                          <div className="col-12 col-lg-3 ">
                            <div className="facts__item with-border">
                              <img
                                src="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/final-designed-icons/homepage-icons/aldar-in-numbers-5.svg?h=80&amp;iar=0&amp;w=80&amp;rev=3f27a8539eee4d7d995762dfe349ac0c"
                                alt="Hotel bell icon"
                                width="80"
                                height="80"
                              />
                              <small>rooms and suites</small>
                              <h3 className="h3">2,758</h3>
                              <p className="body-text-14--medium">Hospitality</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-100 d-lg-none"></div>
                    <div className="col-2 d-lg-none"></div>
                    <div className="col-10 col-lg-3">
                      <figure className="facts__image-container">
                        <img
                          src="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/our-businesses/aldar-in-numbers.jpg?h=436&amp;iar=0&amp;w=372&amp;rev=040e4094dd894a488d71f1ae179089ed"
                          alt="Aldar in Numbers Infographic"
                          width="372"
                          height="436"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </section>
            </div> */}
            {/* <div className="component promo margin-bottom-80">
              <div className="component-content">
                <div className="staggered-box-with-image" style={{ position: 'relative' }}>
                  <section className="staggered-boxes ">
                    <div className="container">
                      <div className="row staggered-boxes__title">
                        <div className="col-1"></div>
                        <div className="col-10 col-lg-6">
                          <h2 className="h2 h2--box">Latest Launches </h2>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-1 d-lg-none"></div>
                        <div className="col-10 col-lg-3 align-self-end"></div>
                      </div>
                      <div className="">
                        <div className="row staggered-boxes__list">
                          <div className="col-1"></div>
                          <div className="col-12 col-lg-10">
                            <div className="row">
                              <div
                                className="col-12 col-xl-6 staggered-boxes__col"
                                data-animation=""
                              >
                                <article className="staggered-box">
                                  <small className="staggered-box__type body-text-bold-11">
                                    Residential
                                  </small>
                                  <h3 className="h3 h2--box staggered-box__title">Sama Yas</h3>
                                  <div className="staggered-box__cols">
                                    <div className="staggered-box__col">
                                      <label className="body-text-bold-10">Starting at</label>
                                      <p className="body-text-14--medium">AED 1,900,000</p>
                                    </div>
                                  </div>
                                  <Link
                                    className="link staggered-box__link link-margin "
                                    href="https://www.aldar.com/samayas/"
                                  >
                                    Learn More
                                  </Link>
                                  <div className="">
                                    <figure
                                      className="staggered-box__image-container"
                                      data-badge="RESIDENTIAL PROJECT"
                                    >
                                      <img
                                        src="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/project-takeover/sama-yas/samayas-latest-launches-244x335.jpg?h=335&amp;iar=0&amp;w=224&amp;rev=08872a13676e4011b964ad7a5f56653f"
                                        className="staggered-box__image"
                                        alt="samayas-latest-launches-244x335"
                                        width="224"
                                        height="335"
                                        data-lazy="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/project-takeover/sama-yas/samayas-latest-launches-244x335.jpg?rev=08872a13676e4011b964ad7a5f56653f"
                                      />
                                    </figure>
                                  </div>
                                </article>
                              </div>
                              <div
                                className="col-12 col-xl-6 staggered-boxes__col"
                                data-animation=""
                              >
                                <article className="staggered-box">
                                  <small className="staggered-box__type body-text-bold-11">
                                    Residential
                                  </small>
                                  <h3 className="h3 h2--box staggered-box__title">
                                    Manarat <br />
                                    Living II
                                  </h3>
                                  <div className="staggered-box__cols">
                                    <div className="staggered-box__col">
                                      <label className="body-text-bold-10">Starting at</label>
                                      <p className="body-text-14--medium">AED 730,000</p>
                                    </div>
                                  </div>
                                  <Link
                                    className="link staggered-box__link link-margin "
                                    href="https://www.aldar.com/en/manarat-living"
                                    target="_blank"
                                  >
                                    Learn more
                                  </Link>
                                  <div className="">
                                    <figure
                                      className="staggered-box__image-container"
                                      data-badge="RESIDENTIAL PROJECT"
                                    >
                                      <img
                                        src="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/latest-launched/manarat-living-ii.png?h=335&amp;iar=0&amp;w=224&amp;rev=ef2329a04e294c64a08bd27955068b7a"
                                        className="staggered-box__image"
                                        alt="manarat-living-ii"
                                        width="224"
                                        height="335"
                                        data-lazy="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/latest-launched/manarat-living-ii.png?rev=ef2329a04e294c64a08bd27955068b7a"
                                      />
                                    </figure>
                                  </div>
                                </article>
                              </div>
                            </div>
                          </div>
                          <div className="col-1 d-block d-lg-none"></div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div> */}
            {/* <div className="component promo margin-bottom-80" id="enjoy-letters">
              <div className="component-content">
                <div
                  className="related-list"
                  data-animation="relatedList"
                  data-animationConfig="relatedList"
                  data-animationLoop="true"
                >
                  <div className="container typos --single-column" data-animation="">
                    <div className="row no-gutters">
                      <div className="col-1"></div>
                      <div className="col-10 col-lg-5">
                        <h2 className="h2 h2--box typos__heading">
                          We are more than <br />
                          what you know
                          <br />
                        </h2>
                      </div>
                      <div className="w-100"></div>
                      <div className="col-1"></div>
                      <div className="col-10 col-lg-4">
                        <div className="typos__holder"></div>
                      </div>
                    </div>
                  </div>
                  <div className="related-list__holder">
                    <div className="related-list__items">
                      <div
                        className="related-list__item"
                        data-lazy="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/aldar-updated-images/updated-images/homepage/homepage-we-are-more-academy-338x383.jpg?rev=52b9a384aa1643e79b60c16dd6198739"
                        data-lazytype="bg-cover"
                      >
                        <div className="related-list__content">
                          <h5 className="h5 related-list__title">The Pearl Academy</h5>
                          <Link
                            className="link related-list__link "
                            href="https://www.aldar.com/en/explore-aldar/businesses/education/academies/the-pearl-academy"
                            target="|Custom"
                          >
                            Learn more
                          </Link>
                        </div>
                      </div>
                      <div
                        className="related-list__item"
                        data-lazy="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/aldar-updated-images/updated-images/homepage/homepage-we-are-more-wabudhabi-338x383.jpg?rev=c1605c279a3a40ec832c6f988f02afe7"
                        data-lazytype="bg-cover"
                      >
                        <div className="related-list__content">
                          <h5 className="h5 related-list__title">W Abu Dhabi</h5>
                          <Link
                            className="link related-list__link "
                            href="https://www.aldar.com/en/explore-aldar/businesses/hospitality/hotels/w-abu-dhabi"
                            target="|Custom"
                          >
                            Learn more
                          </Link>
                        </div>
                      </div>
                      <div
                        className="related-list__item"
                        data-lazy="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/aldar-updated-images/updated-images/homepage/homepage-we-are-more-yasmall338x383.jpg?rev=f3e45cdb9bb64fc8acf97df4432183a1"
                        data-lazytype="bg-cover"
                      >
                        <div className="related-list__content">
                          <h5 className="h5 related-list__title">Yas Mall</h5>
                          <Link
                            className="link related-list__link "
                            href="https://www.aldar.com/en/explore-aldar/businesses/investment/retail/malls/yas-mall"
                            target="|Custom"
                          >
                            Learn more
                          </Link>
                        </div>
                      </div>
                      <div
                        className="related-list__item"
                        data-lazy="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/aldar-updated-images/updated-images/homepage/homepage-we-are-more-bridges-338x383.jpg?rev=6d21c8f3b4cb4002a1ccb8a673f7ffd2"
                        data-lazytype="bg-cover"
                      >
                        <div className="related-list__content">
                          <h5 className="h5 related-list__title">
                            <span>The Bridges</span>
                          </h5>
                          <Link
                            className="link related-list__link "
                            href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/the-bridges"
                          >
                            Learn more
                          </Link>
                        </div>
                      </div>
                      <div
                        className="related-list__item"
                        data-lazy="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/residential/project-gallery/al-ghadeer/al-ghadeer-project-gallery---condo.jpg?rev=877d8e114dad43ccb59b6b8f83188afd"
                        data-lazytype="bg-cover"
                      >
                        <div className="related-list__content">
                          <h5 className="h5 related-list__title">Al Ghadeer</h5>
                          <Link
                            className="link related-list__link "
                            href="https://www.aldar.com/en/explore-aldar/businesses/development/land/al-ghadeer"
                            target="|Custom"
                          >
                            Learn more
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <template id="relatedListSwiperTemplate">
                  <div className="controls">
                    <div className="swiper-pagination"></div>
                    <div className="o-button-group">
                      <a
                        className="o-button -square -left swiper-button-prev carousel-button__prev"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <span className="o-button_label"></span>
                      </a>
                      <a
                        className="o-button -square swiper-button-next carousel-button__next"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <span className="o-button_label"></span>
                      </a>
                    </div>
                  </div>
                  <div
                    className="swiper-container related-list__swiper-container"
                    data-swiperconfig="relatedList"
                  >
                    <div className="swiper-wrapper">ITEMS_PLACEHOLDER</div>
                  </div>
                </template>
                <template id="relatedListSwiperItemTemplate">
                  <div className="swiper-slide">
                    <div
                      className="related-list__item"
                      style={{
                        background: "url('IMAGE_PLACEHOLDER') center center / cover no-repeat;",
                      }}
                    >
                      <div className="related-list__content">
                        <h5 className="h5 related-list__title">TITLE_PLACEHOLDER</h5>
                        LINK_PLACEHOLDER
                      </div>
                    </div>
                  </div>
                </template>
              </div>
            </div> */}
            {/* <div className="component infographic">
              <div className="component-content">
                <div className="box-component__wrapper box-component-with-external padding-bottom-40">
                  <div className="box-component container" data-animation="boxComponent">
                    <div className="row">
                      <div className="col-1 col-md-2"></div>
                      <div className="col-10 col-lg-5 box-component__header-container">
                        <div className="box-component__header">
                          <h2 className="h2 h2--box box-component__heading">
                            Invest with the best for
                            <br />
                            long-term value
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-8"></div>
                      <div className="col-12 col-lg-3">
                        <div className="box-component__iframe-container">
                           <iframe
                            className="full-height-iframe"
                            width="100%"
                            height="260"
                            scrolling="no"
                            frameBorder="0"
                            src="https://tools.eurolandir.com/tools/ticker/html/?companycode=ae-aldar&v=chart&lang=en-gb"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-1"></div>
                      <div className="col-12 col-lg-9">
                        <div className="container">
                          <div className="row box-component__item-row">
                            <div className="col-12 col-sm-6 col-md-4 box-component__container">
                              <div
                                className="box-component__item "
                                style={{ transitionDelay: '200ms' }}
                              >
                                <h5 className="h5 box-component__title">Annual Report 2023</h5>
                                <p className="box-component__description body-text-14"></p>
                                <Link
                                  href="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/aldar-annual-report-2023.pdf?rev=e38b652ff9b04046a9c18c91a7b9f03e"
                                  rel="noopener noreferrer"
                                  className="link box-component__link "
                                  target="_blank"
                                >
                                  View Annual Report
                                </Link>
                              </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 box-component__container">
                              <div
                                className="box-component__item "
                                style={{ transitionDelay: '200ms' }}
                              >
                                <h5 className="h5 box-component__title">Development</h5>
                                <p className="box-component__description body-text-14">
                                  Aldar is Abu Dhabi&apos;s leading regional developer. To date,
                                  we&apos;ve created more than 26,000 homes that people love to live
                                  in across the emirate.
                                </p>
                                <Link
                                  className="link box-component__link "
                                  href="https://www.aldar.com/Aldar Tenant/Aldar2/Home/about-us/businesses"
                                >
                                  View details
                                </Link>
                              </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 box-component__container">
                              <div
                                className="box-component__item "
                                style={{ transitionDelay: '200ms' }}
                              >
                                <h5 className="h5 box-component__title">Investment</h5>
                                <p className="box-component__description body-text-14">
                                  Aldar owns and manages a diverse portfolio of assets in Abu Dhabi,
                                  with a value of AED 20 billion.
                                </p>
                                <Link
                                  className="link box-component__link "
                                  href="https://www.aldar.com/Aldar Tenant/Aldar2/Home/about-us/businesses"
                                >
                                  View details
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="component summary">
              <div className="tdb__with-list-link margin-bottom-80">
                <section className="tdb tdb__with-list-links ">
                  <div className="container tdb__title">
                    <div className="row">
                      <div className="col-1 col-md-2"></div>
                      <div className="col-11 col-md-8">
                        <h2 className="h2 h2--box">
                          Sustainability is at the heart <br />
                          of everything we do
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="tdb__content">
                    <div className="container tdb__content-container">
                      <div className="row">
                        <div className="col-lg-2"></div>
                        <div className="col-12 col-lg-5 tdb__content-col">
                          <p className="d-none d-md-block">
                            <p className="d-none d-md-block">
                              <span>
                                Our sustainability framework reinforces our commitment to shaping
                                communities that people love to live in. Built on the four
                                sustainability pillars of economy, community, people and
                                environment, our framework incorporates national strategies and
                                international sustainable development goals, addressing the issues
                                our stakeholders care about.
                              </span>
                            </p>
                          </p>
                          <small className="d-none d-md-block">
                            <span>
                              To promote clear accountability, we established a Sustainability
                              Council to oversee our framework, alongside our Chief Financial and
                              Sustainability Officer.
                            </span>
                          </small>
                          <Link
                            className="link "
                            href="https://www.aldar.com/en/explore-aldar/sustainability"
                          >
                            Read More About Our Sustainability Strategy
                          </Link>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-8"></div>
                        <div className="col-12 col-lg-3 ">
                          <div className="tdb__content-links">
                            <ul>
                              <li>
                                <Link
                                  className="link "
                                  href="https://www.aldar.com/en/explore-aldar/sustainability/strategy"
                                >
                                  Sustainability Strategy
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="link "
                                  href="https://www.aldar.com/en/explore-aldar/sustainability/reporting"
                                >
                                  Reporting &amp; Performance
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="link "
                                  href="https://www.aldar.com/en/explore-aldar/sustainability/governance-and-policies"
                                >
                                  Governance &amp; Policies
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="link "
                                  href="https://www.aldar.com/en/explore-aldar/sustainability/corporate-social-responsibility"
                                >
                                  CSR
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div> */}
            {/* <div className="component popularCarousel margin-bottom-80">
              <div className="component-content">
                <div
                  className="popular-news"
                  data-animation=""
                  data-animationConfig=""
                  data-animationLoop="true"
                >
                  <div className="news-container">
                    <div className="container">
                      <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10 typos-container">
                          <div className="hdr-container hdr-container__split-between small-screen-spacing">
                            <h2 className="h2 h2--box heading">What&apos;s new at Aldar</h2>
                          </div>
                          <div className="controls ">
                            <div className="swiper-pagination"></div>
                            <div className="nav">
                              <div className="o-button-group">
                                <a
                                  className="o-button -square -left swiper-button-prev carousel-button__prev "
                                  onClick={(e) => {
                                    e.preventDefault();
                                  }}
                                >
                                  <span className="o-button_label"></span>
                                </a>
                                <a
                                  className="o-button -square swiper-button-next carousel-button__next "
                                  onClick={(e) => {
                                    e.preventDefault();
                                  }}
                                >
                                  <span className="o-button_label"></span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-container" data-swiperconfig="popularNews">
                      <div className="swiper-wrapper item">
                        <div className="swiper-slide">
                          <div className="news-image" data-animation="newsImage">
                            <div className="container news-image__bg-container">
                              <div className="row">
                                <div className="col-12">
                                  <div
                                    className="news-image__main-image"
                                    data-lazy="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/press-releases/18-march-2024-pr/aldar-nobu-residences-penthouse-pr-1920x667.jpg?rev=195047988c434ff39786e1db8e7867cb"
                                    data-lazytype="bg-cover"
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div className="container news-image__container">
                              <div className="row">
                                <div className="col-md-1"></div>
                                <div className="col-12 col-md-10 news-image__information-container">
                                  <div className="container">
                                    <div className="row no-gutters">
                                      <div className="news-image__information">
                                        <div className="news-title">
                                          <span>Aldar General News</span>
                                        </div>
                                        <div className="row no-gutters description-container">
                                          <div className="col description-container__title">
                                            <div className="type-heading">Press Release</div>
                                            <h5 className="h5">
                                              AED 137 MILLION PENTHOUSE AT ALDAR&apos;S NOBU
                                              RESIDENCES SETS NEW ABU DHABI RECORD{' '}
                                            </h5>
                                          </div>
                                          <div className="col description-container__description">
                                            <div className="date-heading">March 18, 2024</div>
                                            <p>
                                              • The unit sets a new benchmark for price per square
                                              metre at more than AED 96,000 per sqm and is the most
                                              expensive apartment ever sold in Abu Dhabi
                                            </p>
                                          </div>
                                          <div className="col description-container__link-item link-item">
                                            <div className="link--container">
                                              <Link
                                                className="link"
                                                href="https://www.aldar.com/en/news-and-media/aed-137-million-penthouse-at-aldar-nobu-residences"
                                              >
                                                Read more
                                              </Link>
                                              <Link
                                                className="link link--download"
                                                href="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/press-releases/18-march-2024-pr/aldar_-penthouses_press-release_en_final.pdf?rev=295920a1fb5844c7b92416f5ee852e8b"
                                              >
                                                Download
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="news-image" data-animation="newsImage">
                            <div className="container news-image__bg-container">
                              <div className="row">
                                <div className="col-12">
                                  <div
                                    className="news-image__main-image"
                                    data-lazy="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/press-releases/13-march-2024-pr/nouran-living-launch-pr-1920x666.jpg?rev=7f9ef58fcbcb43aab9f2f51d5d1608e3"
                                    data-lazytype="bg-cover"
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div className="container news-image__container">
                              <div className="row">
                                <div className="col-md-1"></div>
                                <div className="col-12 col-md-10 news-image__information-container">
                                  <div className="container">
                                    <div className="row no-gutters">
                                      <div className="news-image__information">
                                        <div className="news-title">
                                          <span>Aldar General News</span>
                                        </div>
                                        <div className="row no-gutters description-container">
                                          <div className="col description-container__title">
                                            <div className="type-heading">Press Release</div>
                                            <h5 className="h5">
                                              NOURAN LIVING: ALDAR&apos;S FIRST RESIDENCES IN
                                              SAADIYAT ISLAND&apos;S MARINA DISTRICT
                                            </h5>
                                          </div>
                                          <div className="col description-container__description">
                                            <div className="date-heading">March 13, 2024</div>
                                            <p>
                                              • A boutique mid-rise residential address, Nouran
                                              Living is located within walking distance of the
                                              island&apos;s exciting new marina project
                                            </p>
                                          </div>
                                          <div className="col description-container__link-item link-item">
                                            <div className="link--container">
                                              <Link
                                                className="link"
                                                href="https://www.aldar.com/en/news-and-media/aldar-nouran-living-launch"
                                              >
                                                Read more
                                              </Link>
                                              <Link
                                                className="link link--download"
                                                href="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/press-releases/13-march-2024-pr/aldar_nouran-living_launch-press-release_en_130324.pdf?rev=81f05182cadc4416b742fa2cf8c92319"
                                              >
                                                Download
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="news-image" data-animation="newsImage">
                            <div className="container news-image__bg-container">
                              <div className="row">
                                <div className="col-12">
                                  <div
                                    className="news-image__main-image"
                                    data-lazy="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/press-releases/27-feb-2024-pr/dubai-south-aldar-develop-grade-a-assets-logistics-district-1440x500.png?rev=7907a4ee7edb47018475694f267bb793"
                                    data-lazytype="bg-cover"
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div className="container news-image__container">
                              <div className="row">
                                <div className="col-md-1"></div>
                                <div className="col-12 col-md-10 news-image__information-container">
                                  <div className="container">
                                    <div className="row no-gutters">
                                      <div className="news-image__information">
                                        <div className="news-title">
                                          <span>Aldar General News</span>
                                        </div>
                                        <div className="row no-gutters description-container">
                                          <div className="col description-container__title">
                                            <div className="type-heading">Press Release</div>
                                            <h5 className="h5">
                                              DUBAI SOUTH AND ALDAR PARTNER TO DEVELOP GRADE A
                                              ASSETS IN DUBAI SOUTH LOGISTICS DISTRICT
                                            </h5>
                                          </div>
                                          <div className="col description-container__description">
                                            <div className="date-heading">February 27, 2024</div>
                                            <p>
                                              • The partnership will see the development of
                                              logistics facilities in Dubai&apos;s prime logistics
                                              location, bolstering Aldar&apos;s offering and
                                              exposure to this key sector
                                            </p>
                                          </div>
                                          <div className="col description-container__link-item link-item">
                                            <div className="link--container">
                                              <Link
                                                className="link"
                                                href="https://www.aldar.com/en/news-and-media/dubai-south-aldar-develop-grade-a-assets-logistics-district"
                                              >
                                                Read more
                                              </Link>
                                              <Link
                                                className="link link--download"
                                                href="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/press-releases/27-feb-2024-pr/dubai-south-aldar-develop-grade-a-assets-logistics-district-en.pdf?rev=97d163ba4b27470ea6fc2ac41bc7db51"
                                              >
                                                Download
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="component listing margin-bottom-80">
              <div className="component-content">
                <div className="no-box-shadow">
                  <div
                    className="news-listing container overflow-visible"
                    data-animation="newsListing"
                  >
                    <div
                      className="container typos  --title-link  margin-bottom-60"
                      data-animation=""
                    >
                      <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10 col-md-6">
                          <h2 className="h3 h2--box typos__heading">#GeneralNews</h2>
                        </div>
                        <div className="w-100 d-lg-none"></div>
                        <div className="col-1 d-lg-none"></div>
                        <div className="col-10 col-md-4 align-self-end">
                          <div className="typos__holder">
                            <Link
                              className="link pull-right typos__link"
                              href="https://www.aldar.com/en/news-and-media #Aldar News Category=Aldar General News"
                            >
                              View All News
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-1"></div>
                      <div className="col-10">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-6 news-listing__item">
                              <div className="news-box" style={{ transitionDelay: '100ms' }}>
                                <div className="news-box__news-type">Press Release</div>
                                <div className="news-box__news-title h5">
                                  AED 137 MILLION PENTHOUSE AT ALDAR&apos;S NOBU RESIDENCES SETS NEW
                                  ABU DHABI RECORD
                                </div>
                                <div className="news-box__news-description">
                                  • The unit sets a new benchmark for price per square metre at more
                                  than AED 96,000 per sqm and is the most expensive apartment ever
                                  sold in Abu Dhabi
                                </div>
                                <div className="news-box__news-date">March 18, 2024</div>
                                <div className="news-box__link-container">
                                  <Link
                                    className="link news-box__news-more"
                                    href="https://www.aldar.com/en/news-and-media/aed-137-million-penthouse-at-aldar-nobu-residences"
                                  >
                                    Read more
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 news-listing__item">
                              <div className="news-box" style={{ transitionDelay: '100ms' }}>
                                <div className="news-box__news-type">Press Release</div>
                                <div className="news-box__news-title h5">
                                  NOURAN LIVING: ALDAR&apos;S FIRST RESIDENCES IN SAADIYAT
                                  ISLAND&apos;S MARINA DISTRICT
                                </div>
                                <div className="news-box__news-description">
                                  • A boutique mid-rise residential address, Nouran Living is
                                  located within walking distance of the island&apos;s exciting new
                                  marina project
                                </div>
                                <div className="news-box__news-date">March 13, 2024</div>
                                <div className="news-box__link-container">
                                  <Link
                                    className="link news-box__news-more"
                                    href="https://www.aldar.com/en/news-and-media/aldar-nouran-living-launch"
                                  >
                                    Read more
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 news-listing__item">
                              <div className="news-box" style={{ transitionDelay: '100ms' }}>
                                <div className="news-box__news-type">Press Release</div>
                                <div className="news-box__news-title h5">
                                  DUBAI SOUTH AND ALDAR PARTNER TO DEVELOP GRADE A ASSETS IN DUBAI
                                  SOUTH LOGISTICS DISTRICT
                                </div>
                                <div className="news-box__news-description">
                                  • The partnership will see the development of logistics facilities
                                  in Dubai&apos;s prime logistics location, bolstering Aldar&apos;s
                                  offering and exposure to this key sector
                                </div>
                                <div className="news-box__news-date">February 27, 2024</div>
                                <div className="news-box__link-container">
                                  <Link
                                    className="link news-box__news-more"
                                    href="https://www.aldar.com/en/news-and-media/dubai-south-aldar-develop-grade-a-assets-logistics-district"
                                  >
                                    Read more
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 news-listing__item">
                              <div className="news-box" style={{ transitionDelay: '100ms' }}>
                                <div className="news-box__news-type">Press Release</div>
                                <div className="news-box__news-title h5">
                                  ALDAR PARTNERS WITH CARLYLE TO INVEST IN UK AND EUROPEAN LOGISTICS
                                  AND STORAGE REAL ESTATE
                                </div>
                                <div className="news-box__news-description"></div>
                                <div className="news-box__news-date">February 08, 2024</div>
                                <div className="news-box__link-container">
                                  <Link
                                    className="link news-box__news-more"
                                    href="https://www.aldar.com/en/news-and-media/aldar-partners-with-carlyle-to-invest-in-uk-and-european-score-logistics-and-storage-real-estate"
                                  >
                                    Read more
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="component summary">
              <section className="contact" data-animation="">
                <div className="container">
                  <div className="row">
                    <div className="col-1"></div>
                    <div className="col-12 col-lg-5">
                      <h5 className="contact__col-title">Contact Us</h5>
                      <h2 className="contact__title">
                        For specific inquiries, please contact us to speak with someone from our
                        customer service team.
                      </h2>
                    </div>
                    <div className="col-12 col-lg-3">
                      <h5 className="contact__col-title">Email</h5>
                      <h5>
                        <label>
                          <span>
                            <Link
                              rel="noopener noreferrer"
                              href="mailto:customercare@aldar.com"
                              target="_blank"
                            >
                              <strong>
                                <span style={{ textDecoration: 'underline' }}>
                                  customercare@aldar.com
                                </span>
                              </strong>
                            </Link>
                          </span>
                          &nbsp;
                        </label>
                      </h5>
                      <h5 className="contact__col-title">Phone</h5>
                      <label>800-ALDAR / 800-25327</label>
                    </div>
                    <div className="col-12 col-lg-1 contact__button-col">
                      <Link className="o-button " href="https://www.aldar.com/en/contact-us">
                        Contact us
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </div> */}
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
  );

  return <AldarMainDefaultComponent {...props} />;
};
