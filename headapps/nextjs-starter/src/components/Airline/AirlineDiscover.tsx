import React from 'react';
import {
  TextField,
  Text,
  Placeholder,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: TextField;
  Subtitle: TextField;
}

type AirlineDiscoverProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const AirlineDiscoverDefaultComponent = (props: AirlineDiscoverProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: AirlineDiscoverProps): JSX.Element => {
  const phKeyDiscoverItems = `discoverItems-${props.params.DynamicPlaceholderId}`;
  if (props.fields) {
    return (
      <section id="go_beyond_area" className="section_padding_top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="heading_left_area">
                <h2>
                  <Text field={props.fields.Title} />
                </h2>
                <h5>
                  <Text field={props.fields.Subtitle} />
                </h5>
              </div>
            </div>
            <Placeholder name={phKeyDiscoverItems} rendering={props.rendering} />
          </div>
        </div>
      </section>
    );
  }

  return <AirlineDiscoverDefaultComponent {...props} />;
};
