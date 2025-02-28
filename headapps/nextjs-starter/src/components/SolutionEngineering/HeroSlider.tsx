import { useRef, useState } from "react"
import Image from "next/image"
import Slider from "react-slick"
import { ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    backgroundImage: "/img/slides/slide-corporate-10-1.jpg",
    subtitle: "WE CREATE DESIGNS, WE ARE",
    title: "PORTO",
    description: "The best choice for your new website",
    buttonText: "GET STARTED NOW!",
    buttonLink: "#",
    overlayOpacity: "overlay-op-8",
  },
  {
    id: 2,
    backgroundImage: "/img/slides/slide-corporate-10-2.jpg",
    subtitle: "HELLO, THIS IS",
    title: "PORTO HTML TEMPLATE",
    description: "Trusted by over 40,000 satisfied users.",
    buttonText: "GET STARTED NOW",
    buttonLink: "#",
    overlayOpacity: "overlay-op-9",
  },
]

export default function HeroSlider() {
  const sliderRef = useRef<Slider>(null)
  const [activeSlide, setActiveSlide] = useState(0)

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,
    pauseOnHover: false,
    fade: true,
    beforeChange: (newIndex: number) => {
      setActiveSlide(newIndex)
    },
  }

  return (
    <section className="section section-with-shape-divider border-0 py-0 m-0">
      <div className="shape-divider shape-divider-bottom z-index-3" style={{ height: "136px" }}>
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
      <div className="custom-slider">
        <Slider ref={sliderRef} {...settings}>
          {slides.map((slide, index) => (
            <div key={slide.id}>
              <div
                className={`slide-overlay ${slide.overlayOpacity}`}
                style={{
                  backgroundImage: `url(${slide.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "100vh",
                }}
              >
                <div className="slide-content">
                  <div className="container h-100">
                    <div className="row align-items-center justify-content-center h-100">
                      <div className="col-lg-6 text-center">
                        <div
                          className={`slide-element ${activeSlide === index ? "fade-in-down animation-delay-100" : ""}`}
                          style={{ visibility: activeSlide === index ? "visible" : "hidden" }}
                        >
                          <h3 className="position-relative text-color-light text-4 line-height-5 font-weight-normal px-4 mb-2 slide-title-border">
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
                        </div>

                        <div
                          className={`slide-element ${activeSlide === index ? "fade-in-down animation-delay-200" : ""}`}
                          style={{ visibility: activeSlide === index ? "visible" : "hidden" }}
                        >
                          <h2 className="porto-big-title text-color-light font-weight-extra-bold mb-3">
                            {slide.title}
                          </h2>
                        </div>

                        <div
                          className={`slide-element ${activeSlide === index ? "fade-in-down animation-delay-300" : ""}`}
                          style={{ visibility: activeSlide === index ? "visible" : "hidden" }}
                        >
                          <p className="text-4 text-color-light font-weight-light mb-4">{slide.description}</p>
                        </div>

                        <div
                          className={`slide-element ${activeSlide === index ? "fade-in-up animation-delay-300" : ""}`}
                          style={{ visibility: activeSlide === index ? "visible" : "hidden" }}
                        >
                          <a
                            href={slide.buttonLink}
                            className="btn btn-primary btn-modern font-weight-bold text-3 py-3 btn-px-5 mt-1"
                          >
                            {slide.buttonText}
                            {index === 1 && <ChevronRight className="ms-2" size={16} />}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}