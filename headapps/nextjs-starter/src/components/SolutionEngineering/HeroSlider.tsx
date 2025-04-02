import Slider from 'react-slick';

import React from 'react';
import {
  TextField,
  ComponentParams,
  ComponentRendering,
  Placeholder,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: TextField;
}

type HeroSliderProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

const HeroSliderDefaultComponent = (props: HeroSliderProps): JSX.Element => (
  <div className={`component HeroSlider ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">HeroSlider</span>
    </div>
  </div>
);

export const Default = (props: HeroSliderProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const phKey = `slide-container-${props.params.DynamicPlaceholderId}`;

  const settings = {
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
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  if (props.fields) {
    return (
      <section
        className="section section-with-shape-divider border-0 py-0 m-0"
        id={id ? id : undefined}
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
            ></path>
          </svg>
        </div>
        <div className="slider-container" style={{ height: '100vh', opacity: '1' }}>
          <Slider {...settings}>
            <div>
              <div
                className="owl-item position-relative overlay overlay-show overlay-op-8 removing animated active fadeIn"
                style={{
                  backgroundImage:
                    'url(https://www.okler.net/previews/porto/12.1.0/img/slides/slide-corporate-10-1.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '100vh',
                }}
              >
                <div className="container position-relative z-index-3 h-100">
                  <div className="row justify-content-center align-items-center h-100">
                    <div className="col-lg-6">
                      <div className="d-flex flex-column align-items-center">
                        <p
                          className="text-4 text-color-light font-weight-light text-center mb-4 initialized"
                          data-plugin-animated-letters=""
                          data-plugin-options="{'startDelay': 2000, 'minWindowWidth': 0}"
                          style={{ minHeight: '25.9875px' }}
                        ></p>
                        <Placeholder name={phKey} rendering={props.rendering} />
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

  return <HeroSliderDefaultComponent {...props} />;
};
