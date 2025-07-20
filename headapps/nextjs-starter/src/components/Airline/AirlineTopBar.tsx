import React from 'react';
import { LinkField, TextField, Text, Link as JssLink } from '@sitecore-jss/sitecore-jss-nextjs';
import { FaXTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa6';

interface Fields {
  Phonenumber: TextField;
  Email: LinkField;
  OptionLink1: LinkField;
  OptionLink2: LinkField;
}

type AirlineTopBarProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const AirlineTopBarDefaultComponent = (props: AirlineTopBarProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: AirlineTopBarProps): JSX.Element => {
  if (props.fields) {
    return (
      <div className="topbar-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <ul className="topbar-list">
                <li>
                  <div className="flex gap-4" style={{ display: 'inline-flex' }}>
                    <a href="https://www.sportingkampenhout.be/Sitecore/airline/#!">
                      <FaFacebookF className="w-6 h-6 text-primary-portgore hover:text-blue-700 transition" />
                    </a>
                    <a href="https://www.sportingkampenhout.be/Sitecore/airline/#!">
                      <FaXTwitter className="w-6 h-6 text-primary-portgore hover:text-blue-500 transition" />
                    </a>
                    <a href="https://www.sportingkampenhout.be/Sitecore/airline/#!">
                      <FaInstagram className="w-6 h-6 text-primary-portgore hover:text-pink-600 transition" />
                    </a>
                    <a href="https://www.sportingkampenhout.be/Sitecore/airline/#!">
                      <FaLinkedinIn className="w-6 h-6 text-primary-portgore hover:text-blue-800 transition" />
                    </a>
                  </div>
                </li>
                <li>
                  <a href="https://www.sportingkampenhout.be/Sitecore/airline/#!">
                    <span>
                      <Text field={props.fields.Phonenumber} />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="https://www.sportingkampenhout.be/Sitecore/airline/#!">
                    <span>
                      <JssLink field={props.fields.Email} />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-6">
              <ul className="topbar-others-options">
                <li>
                  <JssLink field={props.fields.OptionLink1} />
                </li>
                <li>
                  <JssLink field={props.fields.OptionLink2} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <AirlineTopBarDefaultComponent {...props} />;
};
