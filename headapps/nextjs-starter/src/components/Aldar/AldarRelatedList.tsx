import React from 'react';
import { TextField, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

interface Fields {
  Heading: TextField;
}

type AldarRelatedListProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const AldarRelatedListDefaultComponent = (props: AldarRelatedListProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: AldarRelatedListProps): JSX.Element => {
  if (props.fields) {
    return (
      <div className="component promo margin-bottom-80" id="enjoy-letters">
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
                    <Text field={props.fields.Heading} />
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
      </div>
    );
  }

  return <AldarRelatedListDefaultComponent {...props} />;
};
