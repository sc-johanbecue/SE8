import React from 'react';
import { TextField, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

interface Fields {
  Heading: TextField;
}

type AldarDocumentsListProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const AldarDocumentsListDefaultComponent = (props: AldarDocumentsListProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: AldarDocumentsListProps): JSX.Element => {
  if (props.fields) {
    return (
      <div className="component infographic core-values__wrapper static-header margin-bottom-80">
        <div className="component-content">
          <div
            className="core-values container"
            data-animation="coreValues"
            data-animationConfig="coreValues"
            data-animationLoop="true"
          >
            <div className="container typos typos--title-description-link --box-shadow">
              <div className="row no-gutters">
                <div className="col-1"></div>
                <div className="col-10 col-lg-6">
                  <h2 className="h2 h2--box typos__heading">
                    <Text field={props.fields.Heading} />
                  </h2>
                </div>
                <div className="w-100"></div>
                <div className="col-1"></div>
                <div className="col-10"></div>
              </div>
            </div>
            <div className="row">
              <div className=" col-md-1 "></div>
              <div className="col-md-10">
                <div className="container">
                  <div className="row core-values__items  row-cols-4 ">
                    <div className="col">
                      <div className="core-values__item">
                        <div className="core-values__inner ">
                          <h5 className="h5 core-values__title ">
                            FY 2023 Results – Press Release
                          </h5>
                          <p className="core-values__body body-text-14"></p>
                          <Link
                            href="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/final-designed-icons/investors/latest-results-pdf/aldar-fy2023-financial-results-press-release-09-02-24-final-en.pdf?rev=8dbe6f0078dd4ed2a7d6f229cf538a6e"
                            rel="noopener noreferrer"
                            className="link link--pdf"
                            target="_blank"
                          >
                            View pdf
                          </Link>
                          <img
                            src="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/final-designed-icons/investors/latest-results-documents/latest-results-documents---press-release.svg?iar=0&amp;rev=f40ecdf5784f4180b7ac0ba3222e09fe"
                            className="core-values__img"
                            alt="Latest Results Documents - press release"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="core-values__item">
                        <div className="core-values__inner ">
                          <h5 className="h5 core-values__title ">FY 2023 Results - Presentation</h5>
                          <p className="core-values__body body-text-14"></p>
                          <Link
                            href="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/final-designed-icons/investors/latest-results-pdf/aldar-properties-results-presentation-fy2023-final-02.pdf?rev=8579f7825b89432e98c92ac66bf03749"
                            rel="noopener noreferrer"
                            className="link link--pdf"
                            target="_blank"
                          >
                            View pdf
                          </Link>
                          <img
                            src="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/final-designed-icons/investors/latest-results-documents/latest-results-documents---presentation.svg?iar=0&amp;rev=e018d52eca4e43b49359bcf6cafede80"
                            className="core-values__img"
                            alt="Latest Results Documents - presentation"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="core-values__item">
                        <div className="core-values__inner ">
                          <h5 className="h5 core-values__title ">
                            FY 2023 Results – Financial Statements
                          </h5>
                          <p className="core-values__body body-text-14"></p>
                          <Link
                            href="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/final-designed-icons/investors/latest-results-pdf/english-financial-statement-ap-pjsc-dec-23-01.pdf?rev=d03ea90722044a53acefcdd90fd2d7af"
                            rel="noopener noreferrer"
                            className="link link--pdf"
                            target="_blank"
                          >
                            View pdf
                          </Link>
                          <img
                            src="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/final-designed-icons/investors/latest-results-documents/latest-results-documents---financial-statements.svg?iar=0&amp;rev=e2b8064a57fb43b9a95ff9dcf74678e6"
                            className="core-values__img"
                            alt="Latest Results Documents - financial statements"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="core-values__item">
                        <div className="core-values__inner ">
                          <h5 className="h5 core-values__title ">
                            FY 2023 – Earnings Call Transcript
                          </h5>
                          <p className="core-values__body body-text-14"></p>
                          <Link
                            href="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/final-designed-icons/investors/latest-results-pdf/aldar-properties-full-year-2023-earnings-call-transcript-en-ar.pdf?rev=0c8d0aca49e0483abf8b21e5b2c9de86"
                            rel="noopener noreferrer"
                            className="link link--pdf"
                            target="_blank"
                          >
                            View pdf
                          </Link>
                          <img
                            src="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/final-designed-icons/investors/latest-results-documents/earning-call.svg?iar=0&amp;rev=086fb7d73fa54403a066300726ae7588"
                            className="core-values__img"
                            alt="Earning Call"
                            loading="lazy"
                          />
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

  return <AldarDocumentsListDefaultComponent {...props} />;
};
