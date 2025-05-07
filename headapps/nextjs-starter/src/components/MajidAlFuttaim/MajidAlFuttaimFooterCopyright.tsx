/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { TextField, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import 'animate.css';

interface Fields {
  Copyright: TextField;
}

type FooterCopyrightProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const FooterCopyrightDefaultComponent = (props: FooterCopyrightProps): JSX.Element => (
  <div className={`component FooterCopyright ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Footer Copyright</span>
    </div>
  </div>
);

export const Default = (props: FooterCopyrightProps): JSX.Element => {
  if (props.fields) {
    return (
      <div className="footer-copyright">
        <div className="section-container">
          <div className="copyright-text">
            <span>
              <Text field={props.fields.Copyright} />
            </span>
          </div>
        </div>
      </div>
    );
  }
  return <FooterCopyrightDefaultComponent {...props} />;
};
