import React from 'react';
import { TextField } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

interface Fields {
  Heading: TextField;
}

type AldarBannerCarouselProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const AldarBannerCarouselDefaultComponent = (props: AldarBannerCarouselProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: AldarBannerCarouselProps): JSX.Element => {
  if (props.fields) {
    return (
      <div className="component hero-banner-component sc-background-image-stretch">
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
                <div className="swiper-slide" data-hover-label="Together We Can Achieve Net Zero.">
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
                            Our Net Zero Plan sets the pathway to become a Net Zero business by 2050
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
      </div>
    );
  }

  return <AldarBannerCarouselDefaultComponent {...props} />;
};
