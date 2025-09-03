/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from 'react'; //{ useState }
import {
  ComponentRendering,
  ComponentParams,
  RichText,
  RichTextField,
  TextField,
  Text,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: TextField;
  Intro: RichTextField;
}

type FooterProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const FooterDefaultComponent = (props: FooterProps): JSX.Element => (
  <div className={`component Footer ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Footer</span>
    </div>
  </div>
);

export const Default = (props: FooterProps): JSX.Element => {
  if (props.fields) {
    return (
      <div className="component container layout--fluid container--no-padding text-align-center">
        <div className="component-content">
          <div className="component container layout--fluid container--no-padding">
            <div className="component-content">
              <div className="component container-with-padding">
                <div className="component-content">
                  <div className="component rich-text">
                    <div className="component-content">
                      <h2 style={{ textAlign: 'center' }}>
                        <Text field={props.fields.Title} />
                      </h2>
                      <RichText field={props.fields.Intro} style={{ textAlign: 'center' }} />
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
  return <FooterDefaultComponent {...props} />;
};
