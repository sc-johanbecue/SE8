import React from 'react';
import { TextField, LinkField, Link as JssLink, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

interface Fields {
  Heading: TextField;
  Link: LinkField;
}

type AldarContactUsProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const AldarContactUsDefaultComponent = (props: AldarContactUsProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: AldarContactUsProps): JSX.Element => {
  if (props.fields) {
    return (
      <div className="component listing margin-bottom-80">
        <div className="component-content">
          <div className="no-box-shadow">
            <div className="news-listing container overflow-visible" data-animation="newsListing">
              <div className="container typos  --title-link  margin-bottom-60" data-animation="">
                <div className="row">
                  <div className="col-1"></div>
                  <div className="col-10 col-md-6">
                    <h2 className="h3 h2--box typos__heading">
                      <Text field={props.fields.Heading} />
                    </h2>
                  </div>
                  <div className="w-100 d-lg-none"></div>
                  <div className="col-1 d-lg-none"></div>
                  <div className="col-10 col-md-4 align-self-end">
                    <div className="typos__holder">
                      <JssLink field={props.fields.Link} />
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
                            AED 137 MILLION PENTHOUSE AT ALDAR&apos;S NOBU RESIDENCES SETS NEW ABU
                            DHABI RECORD
                          </div>
                          <div className="news-box__news-description">
                            • The unit sets a new benchmark for price per square metre at more than
                            AED 96,000 per sqm and is the most expensive apartment ever sold in Abu
                            Dhabi
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
                            NOURAN LIVING: ALDAR&apos;S FIRST RESIDENCES IN SAADIYAT ISLAND&apos;S
                            MARINA DISTRICT
                          </div>
                          <div className="news-box__news-description">
                            • A boutique mid-rise residential address, Nouran Living is located
                            within walking distance of the island&apos;s exciting new marina project
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
                            DUBAI SOUTH AND ALDAR PARTNER TO DEVELOP GRADE A ASSETS IN DUBAI SOUTH
                            LOGISTICS DISTRICT
                          </div>
                          <div className="news-box__news-description">
                            • The partnership will see the development of logistics facilities in
                            Dubai&apos;s prime logistics location, bolstering Aldar&apos;s offering
                            and exposure to this key sector
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
                            ALDAR PARTNERS WITH CARLYLE TO INVEST IN UK AND EUROPEAN LOGISTICS AND
                            STORAGE REAL ESTATE
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
      </div>
    );
  }

  return <AldarContactUsDefaultComponent {...props} />;
};
