import Slider from 'react-slick';

export default function HeroSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="section section-with-shape-divider border-0 py-0 m-0">
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
          ></path>
        </svg>
      </div>
      <div className="slider-container" style={{height: "100vh", opacity: "1"}}>
        <Slider {...settings}>
          <div>
            <div
              className="owl-item position-relative overlay overlay-show overlay-op-8 removing animated active fadeIn"
              style={{
                backgroundImage:
                  'url(https://www.okler.net/previews/porto/12.1.0/img/slides/slide-corporate-10-1.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh'
              }}
            >
              <div className="container position-relative z-index-3 h-100">
                <div className="row justify-content-center align-items-center h-100">
                  <div className="col-lg-6">
                    <div className="d-flex flex-column align-items-center">
                      <h3
                        className="position-relative text-color-light text-4 line-height-5 font-weight-normal px-4 mb-2 appear-animation animated fadeInDownShorter appear-animation-visible"
                        data-appear-animation="fadeInDownShorter"
                        data-plugin-options="{'minWindowWidth': 0}"
                        style={{ animationDelay: '100ms' }}
                      >
                        <span className="position-absolute right-100pct top-50pct transform3dy-n50 opacity-3">
                          <img
                            src="img/slides/slide-title-border.png"
                            className="w-auto appear-animation animated fadeInLeftShorter appear-animation-visible"
                            data-appear-animation="fadeInLeftShorter"
                            data-appear-animation-delay="250"
                            data-plugin-options="{'minWindowWidth': 0}"
                            alt=""
                            style={{ animationDelay: '250ms' }}
                          />
                        </span>
                        WE CREATE DESIGNS, WE ARE222
                        <span className="position-absolute left-100pct top-50pct transform3dy-n50 opacity-3">
                          <img
                            src="img/slides/slide-title-border.png"
                            className="w-auto appear-animation animated fadeInRightShorter appear-animation-visible"
                            data-appear-animation="fadeInRightShorter"
                            data-appear-animation-delay="250"
                            data-plugin-options="{'minWindowWidth': 0}"
                            alt=""
                            style={{ animationDelay: '250ms' }}
                          />
                        </span>
                      </h3>
                      <h2
                        className="porto-big-title text-color-light font-weight-extra-bold mb-3 initialized"
                        data-plugin-animated-letters=""
                        data-plugin-options="{'startDelay': 1000, 'minWindowWidth': 0, 'animationSpeed': 300, 'animationName': 'fadeInRightShorterOpacity', 'letterClass': 'd-inline-block'}"
                        style={{ minHeight: '115.2px' }}
                      >
                        <span className="animated-letters-wrapper ">
                          <span
                            className="animated-letters-item letter d-inline-block fadeInRightShorterOpacity animated"
                            style={{ animationDelay: '0ms' }}
                          >
                            P
                          </span>
                        </span>
                        <span className="animated-letters-wrapper ">
                          <span
                            className="animated-letters-item letter d-inline-block fadeInRightShorterOpacity animated"
                            style={{ animationDelay: '300ms' }}
                          >
                            O
                          </span>
                        </span>
                        <span className="animated-letters-wrapper ">
                          <span
                            className="animated-letters-item letter d-inline-block fadeInRightShorterOpacity animated"
                            style={{ animationDelay: '600ms' }}
                          >
                            R
                          </span>
                        </span>
                        <span className="animated-letters-wrapper ">
                          <span
                            className="animated-letters-item letter d-inline-block fadeInRightShorterOpacity animated"
                            style={{ animationDelay: '900ms' }}
                          >
                            T
                          </span>
                        </span>
                        <span className="animated-letters-wrapper ">
                          <span
                            className="animated-letters-item letter d-inline-block fadeInRightShorterOpacity animated"
                            style={{ animationDelay: '1200ms' }}
                          >
                            O
                          </span>
                        </span>
                      </h2>
                      <p
                        className="text-4 text-color-light font-weight-light text-center mb-4 initialized"
                        data-plugin-animated-letters=""
                        data-plugin-options="{'startDelay': 2000, 'minWindowWidth': 0}"
                        style={{ minHeight: '26px' }}
                      ></p>
                      <a
                        href="#"
                        className="btn btn-primary btn-modern font-weight-bold text-3 py-3 btn-px-5 mt-1 appear-animation animated fadeInUpShorter appear-animation-visible"
                        data-appear-animation="fadeInUpShorter"
                        data-appear-animation-delay="1800"
                        data-plugin-options="{'minWindowWidth': 0}"
                        style={{ animationDelay: '1800ms' }}
                      >
                        GET STARTED NOW!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
        </Slider>
      </div>
    </section>
  );
}
