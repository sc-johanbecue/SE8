import React from 'react';
import {
  ComponentRendering,
  ComponentParams,
  Text,
  TextField,
} from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

interface Fields {
  data: {
    datasource: {
      Name: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
      SubTitle: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
      Country: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
      PhoneNumber: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
      Email: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
      CountryOfAdmission: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
    };
    contextItem: {
      Name: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
      SubTitle: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
      Country: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
      PhoneNumber: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
      Email: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
      CountryOfAdmission: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
    };
  };
}

type LinkLatersContactContactDetailsProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const LinkLatersContactContactDetailsDefaultComponent = (
  props: LinkLatersContactContactDetailsProps
): JSX.Element => (
  <div className={`component ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: LinkLatersContactContactDetailsProps): JSX.Element => {
  const datasource = props.fields?.data?.datasource;
  const contextItem = props.fields?.data?.contextItem;

  const name = datasource?.Name || contextItem?.Name;
  const subTitle = datasource?.SubTitle || contextItem?.SubTitle;
  const country = datasource?.Country || contextItem?.Country;
  const phoneNumber = datasource?.PhoneNumber || contextItem?.PhoneNumber;
  const email = datasource?.Email || contextItem?.Email;
  const countryOfAdmission = datasource?.CountryOfAdmission || contextItem?.CountryOfAdmission;

  const nameField: TextField = {
    value: name?.jsonValue?.value,
    editable: name?.jsonValue?.editable,
  };

  const subTitleField: TextField = {
    value: subTitle?.jsonValue?.value,
    editable: subTitle?.jsonValue?.editable,
  };

  const countryField: TextField = {
    value: country?.jsonValue?.value,
    editable: country?.jsonValue?.editable,
  };

  const phoneNumberField: TextField = {
    value: phoneNumber?.jsonValue?.value,
    editable: phoneNumber?.jsonValue?.editable,
  };

  const emailField: TextField = {
    value: email?.jsonValue?.value,
    editable: email?.jsonValue?.editable,
  };

  const countryOfAdmissionField: TextField = {
    value: countryOfAdmission?.jsonValue?.value,
    editable: countryOfAdmission?.jsonValue?.editable,
  };

  if (props.fields) {
    if (props.fields.data) {
      return (
        <ul className="listDetails">
          <li className="listDetails__item">
            <h3 className="listDetails__title">
              <Text field={nameField} />
            </h3>
            <h4 className="listDetails__subTitle">
              <Text field={subTitleField} />
            </h4>
          </li>
          <li className="listDetails__item">
            <div className="listDetails__content">
              <span className="icon-pin listDetails__icon"></span>
              <span className="listDetails__info">
                <Text field={countryField} />
              </span>
            </div>
          </li>
          <li className="listDetails__item">
            <div className="listDetails__content">
              <a href="tel:+12129039111" className="listDetails__link">
                <span className="icon-telephone listDetails__icon"></span>
                <span className="listDetails__info">
                  <Text field={phoneNumberField} />
                </span>
              </a>
            </div>
          </li>

          <li className="listDetails__item">
            <div className="listDetails__content">
              <Link href="mailto:lauren.bachtel@linklaters.com" className="listDetails__link">
                <span className="icon-envelope listDetails__icon"></span>
                <span className="listDetails__info">
                  <Text field={emailField} />
                </span>
              </Link>
            </div>
          </li>
          <li className="listDetails__item">
            <div className="listDetails__content">
              <Link
                href="/en/api/lawyers/downloadvcf/fbe74014-32e8-4892-9c49-897cf31c180f"
                rel="nofollow"
                className="listDetails__link"
              >
                <span className="icon-person-plus listDetails__icon"></span>
                <span className="listDetails__info">Add to your Outlook contacts</span>
              </Link>
            </div>
          </li>
          <li className="listDetails__item">
            <div className="listDetails__content">
              <span className="icon-globe listDetails__icon"></span>
              <span className="listDetails__info">
                Country of Admission <br />
                <Text field={countryOfAdmissionField} />
              </span>
            </div>
          </li>
        </ul>
      );
    }
  }
  return <LinkLatersContactContactDetailsDefaultComponent {...props} />;
};
