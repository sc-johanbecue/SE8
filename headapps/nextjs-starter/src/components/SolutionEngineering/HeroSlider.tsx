import React, { useState, useEffect, useRef } from 'react';
import { RichTextField } from '@sitecore-jss/sitecore-jss-nextjs';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    backgroundImage: '/img/slides/slide-corporate-10-1.jpg',
    subtitle: 'WE CREATE DESIGNS, WE ARE',
    title: 'PORTO',
    description: 'The best choice for your new website',
    buttonText: 'GET STARTED NOW!',
    buttonLink: '#',
    overlayOpacity: 'overlay-op-8',
  },
  {
    id: 2,
    backgroundImage: '/img/slides/slide-corporate-10-2.jpg',
    subtitle: 'HELLO, THIS IS',
    title: 'PORTO HTML TEMPLATE',
    description: 'Trusted by over 40,000 satisfied users.',
    buttonText: 'GET STARTED NOW',
    buttonLink: '#',
    overlayOpacity: 'overlay-op-9',
  },
];

interface Fields {
  Title: RichTextField;
  SubTitle: RichTextField;
}

type HeroSliderProps = {
  params: { [key: string]: string };
  fields: Fields;
  size: 'sm' | 'md' | 'lg';
};

const HeroSliderDefaultComponent = (props: HeroSliderProps): JSX.Element => (
  <div className={`component HeroSlider ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">HeroSlider</span>
    </div>
  </div>
);

export const HeroSlider = (props: HeroSliderProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveSlide(index);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const nextSlide = () => {
    goToSlide((activeSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    goToSlide((activeSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    // Auto-advance slides
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 9000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []); // Removed activeSlide dependency

  if (props.fields) {
    return (
      <section
        className="section section-with-shape-divider border-0 py-0 m-0"
        id={id || undefined}
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
          style={{ height: '100vh' }}
        >
          <div className="owl-stage-outer">
            <div className="owl-stage">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`owl-item position-relative overlay ${slide.overlayOpacity} ${
                    index === activeSlide ? 'active' : 'hidden'
                  }`}
                  style={{
                    backgroundImage: `url(${slide.backgroundImage})`,
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
                          >
                            <span className="position-absolute right-100pct top-50pct transform3dy-n50 opacity-3">
                              <Image
                                src="/img/slides/slide-title-border.png"
                                className="w-auto appear-animation"
                                width={100}
                                height={20}
                                alt=""
                              />
                            </span>
                            {slide.subtitle}
                            <span className="position-absolute left-100pct top-50pct transform3dy-n50 opacity-3">
                              <Image
                                src="/img/slides/slide-title-border.png"
                                className="w-auto appear-animation"
                                width={100}
                                height={20}
                                alt=""
                              />
                            </span>
                          </h3>
                          <h2 className="porto-big-title text-color-light font-weight-extra-bold mb-3">
                            {slide.title}
                          </h2>
                          <p className="text-4 text-color-light font-weight-light text-center mb-4">
                            {slide.description}
                          </p>
                          <a
                            href={slide.buttonLink}
                            className="btn btn-primary btn-modern font-weight-bold text-3 py-3 btn-px-5 mt-1 appear-animation"
                          >
                            {slide.buttonText}
                            {index === 1 && <ChevronRight className="ms-2" size={16} />}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="owl-nav">
            <button
              type="button"
              role="presentation"
              className="owl-prev"
              onClick={prevSlide}
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              type="button"
              role="presentation"
              className="owl-next"
              onClick={nextSlide}
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          <div className="owl-dots mb-5">
            {slides.map((_, index) => (
              <button
                key={index}
                role="button"
                className={`owl-dot ${index === activeSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              >
                <span></span>
              </button>
            ))}
          </div>
        </div>
      </section>
    );
  } else return <HeroSliderDefaultComponent {...props} />;
};
