import React from 'react';
import { TextField, Text } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: TextField;
}

type AirlineTopDestinationsProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const AirlineTopDestinationsDefaultComponent = (
  props: AirlineTopDestinationsProps
): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: AirlineTopDestinationsProps): JSX.Element => {
  if (props.fields) {
    return (
      <section id="top_destinations" className="section_padding_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="section_heading_center">
                <h2>
                  <Text field={props.fields.Title} />
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="destinations_content_box img_animation">
                <img
                  src="https://www.sportingkampenhout.be/Sitecore/airline/static/media/big-img.b56e4b126d8cdc425c95.png"
                  alt="img"
                />
                <div className="destinations_content_inner">
                  <h2>Up to</h2>
                  <div className="destinations_big_offer">
                    <h1>50</h1>
                    <h6>
                      <span>%</span> <span>Off</span>
                    </h6>
                  </div>
                  <h2>Holiday packages</h2>
                  <a
                    className="btn btn_theme btn_md"
                    href="https://www.sportingkampenhout.be/Sitecore/airline/#!"
                  >
                    Book now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="destinations_content_box img_animation">
                    <a href="https://www.sportingkampenhout.be/Sitecore/airline/#!">
                      <img
                        src="https://www.sportingkampenhout.be/Sitecore/airline/static/media/destination1.916f20475212163261c7.png"
                        alt="img"
                      />
                    </a>
                    <div className="destinations_content_inner">
                      <h3>
                        <a href="https://www.sportingkampenhout.be/Sitecore/airline/">China</a>
                      </h3>
                    </div>
                  </div>
                  <div className="destinations_content_box img_animation">
                    <a href="https://www.sportingkampenhout.be/Sitecore/airline/#!">
                      <img
                        src="https://www.sportingkampenhout.be/Sitecore/airline/static/media/destination2.29fb638d593a102958b4.png"
                        alt="img"
                      />
                    </a>
                    <div className="destinations_content_inner">
                      <h3>
                        <a href="https://www.sportingkampenhout.be/Sitecore/airline/">Darjeeling</a>
                      </h3>
                    </div>
                  </div>
                  <div className="destinations_content_box img_animation">
                    <a href="https://www.sportingkampenhout.be/Sitecore/airline/#!">
                      <img
                        src="https://www.sportingkampenhout.be/Sitecore/airline/static/media/destination3.3fec9f5935a0179d0ca8.png"
                        alt="img"
                      />
                    </a>
                    <div className="destinations_content_inner">
                      <h3>
                        <a href="https://www.sportingkampenhout.be/Sitecore/airline/">Malaysia</a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="destinations_content_box img_animation">
                    <a href="https://www.sportingkampenhout.be/Sitecore/airline/#!">
                      <img
                        src="https://www.sportingkampenhout.be/Sitecore/airline/static/media/destination4.d65143d658f6074949ea.png"
                        alt="img"
                      />
                    </a>
                    <div className="destinations_content_inner">
                      <h3>
                        <a href="https://www.sportingkampenhout.be/Sitecore/airline/#!">Gangtok</a>
                      </h3>
                    </div>
                  </div>
                  <div className="destinations_content_box img_animation">
                    <a href="https://www.sportingkampenhout.be/Sitecore/airline/#!">
                      <img
                        src="https://www.sportingkampenhout.be/Sitecore/airline/static/media/destination5.bcf61ab9e079f438bc9f.png"
                        alt="img"
                      />
                    </a>
                    <div className="destinations_content_inner">
                      <h3>
                        <a href="https://www.sportingkampenhout.be/Sitecore/airline/#!">Thailand</a>
                      </h3>
                    </div>
                  </div>
                  <div className="destinations_content_box img_animation">
                    <a href="https://www.sportingkampenhout.be/Sitecore/airline/#!">
                      <img
                        src="https://www.sportingkampenhout.be/Sitecore/airline/static/media/destination6.1555d99894afafd18abb.png"
                        alt="img"
                      />
                    </a>
                    <div className="destinations_content_inner">
                      <h3>
                        <a href="https://www.sportingkampenhout.be/Sitecore/airline/#!">
                          Australia
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="destinations_content_box img_animation">
                    <a href="https://www.sportingkampenhout.be/Sitecore/airline/">
                      <img
                        src="https://www.sportingkampenhout.be/Sitecore/airline/static/media/destination7.81908c1df834294e9fcb.png"
                        alt="img"
                      />
                    </a>
                    <div className="destinations_content_inner">
                      <h3>
                        <a href="https://www.sportingkampenhout.be/Sitecore/airline/">London</a>
                      </h3>
                    </div>
                  </div>
                  <div className="destinations_content_box img_animation">
                    <a href="https://www.sportingkampenhout.be/Sitecore/airline/">
                      <img
                        src="https://www.sportingkampenhout.be/Sitecore/airline/static/media/destination8.16cc6886161d3c9c1d26.png"
                        alt="img"
                      />
                    </a>
                    <div className="destinations_content_inner">
                      <h3>
                        <a href="https://www.sportingkampenhout.be/Sitecore/airline/">USA</a>
                      </h3>
                    </div>
                  </div>
                  <div className="destinations_content_box">
                    <a
                      href="https://www.sportingkampenhout.be/Sitecore/airline/"
                      className="btn btn_theme btn_md w-100"
                    >
                      View all
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return <AirlineTopDestinationsDefaultComponent {...props} />;
};
