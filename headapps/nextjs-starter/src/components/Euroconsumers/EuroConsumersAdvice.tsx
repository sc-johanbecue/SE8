/* eslint-disable jsx-a11y/role-has-required-aria-props */
import React from 'react';
import { TextField, ImageField, Image as JssImage, Text } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: TextField;
  Image: ImageField;
  Content: TextField;
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
      <div className="hub-description-advice theme--color-10">
        <div
          data-type="ALineHubDescriptionController"
          data-rendering="HubDescription"
          data-datasource="{87BB5B9C-D058-439C-8109-C2E0B1F5BBA0}"
          className=""
        >
          <div className="constrained">
            <div className="flex__row hub-description-advice__details align-central">
              <div className="flex__col-xs-12">
                <JssImage
                  field={props.fields.Image}
                  className="margin--left-auto margin--right-auto"
                  height="276"
                  width="315"
                  fetchPriority="high"
                />
              </div>
              <div className="flex__col-xs-12 padding--top-xlarge">
                <h1 className="beta stronger">
                  <Text field={props.fields.Title} />
                </h1>
                <h2 className="stronger margin--bottom-xsmall"></h2>
                <p className="no-margin">
                  <Text field={props.fields.Content}></Text>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <EuroConsumersArticleDefaultComponent {...props} />;
};
