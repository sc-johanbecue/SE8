/* eslint-disable jsx-a11y/role-has-required-aria-props */
import React from 'react';
import {
  TextField,
  Text,
  Placeholder,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

interface Fields {
  Title: TextField;
  Content: TextField;
}

type EuroConsumersFAQProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const EuroConsumersFAQDefaultComponent = (props: EuroConsumersFAQProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">EuroConsumers Header</span>
    </div>
  </div>
);

export const Default = (props: EuroConsumersFAQProps): JSX.Element => {
  const phFAQItems = `faqItems-${props.params.DynamicPlaceholderId}`;

  if (props.fields) {
    return (
      <div
        data-type="ALineAdviceFaqController"
        data-rendering="AdviceFAQcontainer"
        data-datasource="{4E7739F7-A2E0-4229-80B1-4B67F3508952}"
        className=""
      >
        <div
          data-plugin="waypointScroll"
          data-plugin-settings="#faq-waypoint-settings"
          id="veelgestelde-vragen"
          className="step-by-step__guide padding--top-medium padding--bottom-medium has-plugin"
        >
          <h2 className="stronger advice-container">
            <Text field={props.fields.Title} />
          </h2>
          <div className="article-paragraph-container__segment-content">
            <Text field={props.fields.Content} />
            <div data-plugin="collapsible" className="has-plugin">
              <Placeholder name={phFAQItems} rendering={props.rendering} />
            </div>
          </div>
          <Link
            className="block step-by-step__scroll-to-top hide-on-desktop has-plugin"
            data-plugin="scrollToTarget"
            href="#step-by-step__navigation"
          >
            Terug naar boven
          </Link>
        </div>
        <script type="application/json" id="faq-waypoint-settings">
          {/* {
        "offset": 150,
        "once": false,
        "callbackIn": "EC.HubStepByStep.WaypointIn",
        "callbackOut": "EC.HubStepByStep.WaypointOut"
        } */}
        </script>
      </div>
    );
  }

  return <EuroConsumersFAQDefaultComponent {...props} />;
};
