/* eslint-disable jsx-a11y/role-has-required-aria-props */
import React from 'react';
import { TextField, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

interface Fields {
  Title: TextField;
  Introduction: TextField;
  Content: TextField;
  AdditionalContent: TextField;
}

type EuroConsumersArticleProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const EuroConsumersArticleDefaultComponent = (props: EuroConsumersArticleProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">EuroConsumers Header</span>
    </div>
  </div>
);

export const Default = (props: EuroConsumersArticleProps): JSX.Element => {
  if (props.fields) {
    return (
      <>
        <div id="step-by-step__content" className="main flex__row">
          <div
            id="step-by-step__guide"
            className="flex__col-xs-12 flex__col-xs-12 flex__col-lg-12 margin--left-auto margin--bottom-xlarge"
            data-selector="for-scraping"
          >
            <div
              data-type="ALineAdviceParagraphController"
              data-rendering="AdviceParagraph"
              data-datasource="{E26E3014-E9F9-47C3-9E0B-C1527D08E4B8}"
              className=""
            >
              <div
                data-plugin="waypointScroll"
                data-plugin-settings="#46cd431f-4664-4c7b-81cc-ee9a1af4cad2-waypoint-settings"
                id="welke-type-van-koelkast-zoek-je"
                className="step-by-step__guide padding--top-medium padding--bottom-medium has-plugin"
                data-selector="search-content-scraper"
              >
                <h2 className="stronger">
                  <Text field={props.fields.Title} />
                </h2>
                <Text field={props.fields.Introduction} />
                <Text field={props.fields.Content} />
                <Text field={props.fields.AdditionalContent} />
              </div>
              <Link
                className="block step-by-step__scroll-to-top hide-on-desktop has-plugin"
                data-plugin="scrollToTarget"
                href="#step-by-step__navigation"
              >
                Terug naar boven
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  return <EuroConsumersArticleDefaultComponent {...props} />;
};
