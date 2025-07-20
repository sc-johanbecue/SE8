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
      Title: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
      url: {
        path: string;
      };
    };
  };
}

type LinkLatersRelatedContentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const LinkLatersRelatedContentDefaultComponent = (
  props: LinkLatersRelatedContentProps
): JSX.Element => (
  <div className={`component ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: LinkLatersRelatedContentProps): JSX.Element => {
  const datasource = props.fields?.data?.datasource;

  const title = datasource?.Title;
  const titleField: TextField = {
    value: title?.jsonValue?.value,
    editable: title?.jsonValue?.editable,
  };

  if (props.fields) {
    if (props.fields.data) {
      if (props.fields.data.datasource) {
        const dataSourceUrl = props.fields.data.datasource.url.path;
        return (
          <li className="listCta__item listCta__item--noBorder listCta__item--bgGreyNoBorder">
            <Link href={dataSourceUrl} className="listCta__link listCta__link--paddRight80">
              <span>
                <Text field={titleField} />
              </span>
              <span className="icon-link-arrow-right listCta__linkArrow listCta__linkArrow--noBorder"></span>
            </Link>
          </li>
        );
      }
    }
  }
  return <LinkLatersRelatedContentDefaultComponent {...props} />;
};
