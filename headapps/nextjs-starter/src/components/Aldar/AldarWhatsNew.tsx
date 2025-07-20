import React from 'react';
import { TextField, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

interface Fields {
  Heading: TextField;
}

type AldarWhatsNewProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const AldarWhatsNewDefaultComponent = (props: AldarWhatsNewProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: AldarWhatsNewProps): JSX.Element => {
  if (props.fields) {
    return (
      <div className="component popularCarousel margin-bottom-80">
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
                      <h2 className="h2 h2--box heading">
                        <Text field={props.fields.Heading} />
                      </h2>
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
                                        AED 137 MILLION PENTHOUSE AT ALDAR&apos;S NOBU RESIDENCES
                                        SETS NEW ABU DHABI RECORD{' '}
                                      </h5>
                                    </div>
                                    <div className="col description-container__description">
                                      <div className="date-heading">March 18, 2024</div>
                                      <p>
                                        • The unit sets a new benchmark for price per square metre
                                        at more than AED 96,000 per sqm and is the most expensive
                                        apartment ever sold in Abu Dhabi
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
                                        NOURAN LIVING: ALDAR&apos;S FIRST RESIDENCES IN SAADIYAT
                                        ISLAND&apos;S MARINA DISTRICT
                                      </h5>
                                    </div>
                                    <div className="col description-container__description">
                                      <div className="date-heading">March 13, 2024</div>
                                      <p>
                                        • A boutique mid-rise residential address, Nouran Living is
                                        located within walking distance of the island&apos;s
                                        exciting new marina project
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
                                        DUBAI SOUTH AND ALDAR PARTNER TO DEVELOP GRADE A ASSETS IN
                                        DUBAI SOUTH LOGISTICS DISTRICT
                                      </h5>
                                    </div>
                                    <div className="col description-container__description">
                                      <div className="date-heading">February 27, 2024</div>
                                      <p>
                                        • The partnership will see the development of logistics
                                        facilities in Dubai&apos;s prime logistics location,
                                        bolstering Aldar&apos;s offering and exposure to this key
                                        sector
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
      </div>
    );
  }

  return <AldarWhatsNewDefaultComponent {...props} />;
};
