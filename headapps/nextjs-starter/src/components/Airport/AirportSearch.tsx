import React, { JSX } from 'react';
import {
  Placeholder,
  TextField,
  ComponentRendering,
  ComponentParams,
  LinkField,
  Link as JssLink,
  Text,
} from '@sitecore-content-sdk/nextjs';
import { FaMagnifyingGlass } from 'react-icons/fa6';

interface Fields {
  Title: TextField;
  ArrivalsLink: LinkField;
  DeparturesLink: LinkField;
  SearchPlaceholderText: TextField;
}

type SearchFormProps = {
  params: { [key: string]: string };
  rendering: ComponentRendering & { params: ComponentParams };
  fields: Fields;
};

const SearchFormDefaultComponent = (props: SearchFormProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: SearchFormProps): JSX.Element => {
  const phKeyFlightStatusLinks = `flightStatusLinks-${props.params.DynamicPlaceholderId}`;

  if (props.fields) {
    return (
      <section id="theme_search_form">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="theme_search_form_area">
                <div className="container">
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="flights"
                      role="tabpanel"
                      aria-labelledby="flights-tab"
                    ></div>
                    <div className="row">
                      <div className="col-md-7">
                        <div className="flight-status-left">
                          <h2 className="flight-status-title">
                            <Text field={props.fields.Title} />
                          </h2>

                          <div
                            className="flight-status-input-wrapper"
                            style={{ display: 'ruby-text' }}
                          >
                            <FaMagnifyingGlass />
                            <input
                              type="text"
                              placeholder={props.fields.SearchPlaceholderText.value?.toString()}
                              className="flight-status-input"
                              style={{
                                borderWidth: '1px 1px 1px 1px',
                                borderColor: 'black',
                              }}
                            />
                          </div>

                          <div className="flight-status-links">
                            <JssLink field={props.fields.DeparturesLink} /> →
                            <JssLink field={props.fields.ArrivalsLink} /> →
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div
                          className="flight-status-icons"
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: '10px',
                          }}
                        >
                          <Placeholder name={phKeyFlightStatusLinks} rendering={props.rendering} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return <SearchFormDefaultComponent {...props} />;
};
