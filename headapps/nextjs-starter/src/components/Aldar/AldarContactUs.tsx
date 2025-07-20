import React from 'react';
import { TextField, LinkField, Link as JssLink, Text } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: TextField;
  Text: TextField;
  EmailTitle: TextField;
  Email: LinkField;
  PhoneTitle: TextField;
  Phone: TextField;
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
      <div className="component summary">
        <section className="contact" data-animation="">
          <div className="container">
            <div className="row">
              <div className="col-1"></div>
              <div className="col-12 col-lg-5">
                <h5 className="contact__col-title">
                  <Text field={props.fields.Title} />
                </h5>
                <h2 className="contact__title">
                  <Text field={props.fields.Text} />
                </h2>
              </div>
              <div className="col-12 col-lg-3">
                <h5 className="contact__col-title">
                  <Text field={props.fields.EmailTitle} />
                </h5>
                <h5>
                  <label>
                    <span>
                      <JssLink field={props.fields.Email} rel="noopener noreferrer" />
                    </span>
                    &nbsp;
                  </label>
                </h5>
                <h5 className="contact__col-title">
                  <Text field={props.fields.PhoneTitle} />
                </h5>
                <label>
                  <Text field={props.fields.Phone} />
                </label>
              </div>
              <div className="col-12 col-lg-1 contact__button-col">
                <JssLink field={props.fields.Link} rel="noopener noreferrer" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return <AldarContactUsDefaultComponent {...props} />;
};
