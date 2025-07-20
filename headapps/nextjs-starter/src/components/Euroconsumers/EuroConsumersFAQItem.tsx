/* eslint-disable jsx-a11y/role-has-required-aria-props */
import React from 'react';
import { useState } from 'react';
import { TextField, Text } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Question: TextField;
  Answer: TextField;
}

type EuroConsumersFAQItemProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const EuroConsumersFAQItemDefaultComponent = (props: EuroConsumersFAQItemProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">EuroConsumers Header</span>
    </div>
  </div>
);

export const Default = (props: EuroConsumersFAQItemProps): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  if (props.fields) {
    return (
      <div
        className="collapsible__item "
        data-active="false"
        data-selector="search-content-scraper"
      >
        <h3
          className="no-margin collapsible__head strong block "
          id="collapsibleTrigger-3202"
          aria-expanded="false"
          aria-controls="collapsibleContent-4686"
          role="button"
        >
          <i className="icon-chevron-down icon--heavy" onClick={toggleVisibility}></i>
          <Text field={props.fields.Question} />
        </h3>
        <div
          className="collapsible__content"
          id="collapsibleContent-4686"
          role="region"
          aria-labelledby="collapsibleTrigger-3202"
          style={{ display: isVisible ? 'inherit' : 'none' }}
        >
          <p></p>
          <Text field={props.fields.Answer} />
          <p></p>
        </div>
        <style jsx>
          {`
            .toggle-content {
              transition: opacity 0.3s ease;
            }
          `}
        </style>
      </div>
    );
  }

  return <EuroConsumersFAQItemDefaultComponent {...props} />;
};
