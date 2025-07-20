import React from 'react';
import { TextField, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

interface Fields {
  Heading: TextField;
}

type AldarStaggeredBoxesProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const AldarStaggeredBoxesDefaultComponent = (props: AldarStaggeredBoxesProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: AldarStaggeredBoxesProps): JSX.Element => {
  if (props.fields) {
    return (
      <div className="component promo margin-bottom-80">
        <div className="component-content">
          <div className="staggered-box-with-image" style={{ position: 'relative' }}>
            <section className="staggered-boxes ">
              <div className="container">
                <div className="row staggered-boxes__title">
                  <div className="col-1"></div>
                  <div className="col-10 col-lg-6">
                    <h2 className="h2 h2--box">
                      <Text field={props.fields.Heading} />
                    </h2>
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
                        <div className="col-12 col-xl-6 staggered-boxes__col" data-animation="">
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
                        <div className="col-12 col-xl-6 staggered-boxes__col" data-animation="">
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
      </div>
    );
  }

  return <AldarStaggeredBoxesDefaultComponent {...props} />;
};
