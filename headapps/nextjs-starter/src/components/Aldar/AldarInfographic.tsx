import React from 'react';
import { TextField, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

interface Fields {
  Heading: TextField;
}

type AldarInfographicProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const AldarInfographicDefaultComponent = (props: AldarInfographicProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: AldarInfographicProps): JSX.Element => {
  if (props.fields) {
    return (
      <div className="component infographic">
        <div className="component-content">
          <div className="box-component__wrapper box-component-with-external padding-bottom-40">
            <div className="box-component container" data-animation="boxComponent">
              <div className="row">
                <div className="col-1 col-md-2"></div>
                <div className="col-10 col-lg-5 box-component__header-container">
                  <div className="box-component__header">
                    <h2 className="h2 h2--box box-component__heading">
                      <Text field={props.fields.Heading} />
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8"></div>
                <div className="col-12 col-lg-3">
                  <div className="box-component__iframe-container">
                    {/* <iframe
                            className="full-height-iframe"
                            width="100%"
                            height="260"
                            scrolling="no"
                            frameBorder="0"
                            src="https://tools.eurolandir.com/tools/ticker/html/?companycode=ae-aldar&v=chart&lang=en-gb"
                          ></iframe> */}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-12 col-lg-9">
                  <div className="container">
                    <div className="row box-component__item-row">
                      <div className="col-12 col-sm-6 col-md-4 box-component__container">
                        <div className="box-component__item " style={{ transitionDelay: '200ms' }}>
                          <h5 className="h5 box-component__title">Annual Report 2023</h5>
                          <p className="box-component__description body-text-14"></p>
                          <Link
                            href="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/aldar-annual-report-2023.pdf?rev=e38b652ff9b04046a9c18c91a7b9f03e"
                            rel="noopener noreferrer"
                            className="link box-component__link "
                            target="_blank"
                          >
                            View Annual Report
                          </Link>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 col-md-4 box-component__container">
                        <div className="box-component__item " style={{ transitionDelay: '200ms' }}>
                          <h5 className="h5 box-component__title">Development</h5>
                          <p className="box-component__description body-text-14">
                            Aldar is Abu Dhabi&apos;s leading regional developer. To date,
                            we&apos;ve created more than 26,000 homes that people love to live in
                            across the emirate.
                          </p>
                          <Link
                            className="link box-component__link "
                            href="https://www.aldar.com/Aldar Tenant/Aldar2/Home/about-us/businesses"
                          >
                            View details
                          </Link>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 col-md-4 box-component__container">
                        <div className="box-component__item " style={{ transitionDelay: '200ms' }}>
                          <h5 className="h5 box-component__title">Investment</h5>
                          <p className="box-component__description body-text-14">
                            Aldar owns and manages a diverse portfolio of assets in Abu Dhabi, with
                            a value of AED 20 billion.
                          </p>
                          <Link
                            className="link box-component__link "
                            href="https://www.aldar.com/Aldar Tenant/Aldar2/Home/about-us/businesses"
                          >
                            View details
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
    );
  }

  return <AldarInfographicDefaultComponent {...props} />;
};
