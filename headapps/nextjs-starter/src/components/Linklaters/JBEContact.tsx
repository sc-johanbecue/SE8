import React from 'react';
import {
  TextField,
  ImageField,
  Text,
  Image as JssImage,
  ComponentRendering,
  ComponentParams,
  useSitecoreContext,
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
      Name: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
      Image: {
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

type LinkLatersContactProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const LinkLatersContactDefaultComponent = (props: LinkLatersContactProps): JSX.Element => (
  <div className={`component ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: LinkLatersContactProps): JSX.Element => {
  const datasource = props.fields?.data?.datasource;

  const title = datasource?.Title;
  const titleField: TextField = {
    value: title?.jsonValue?.value,
    editable: title?.jsonValue?.editable,
  };

  const name = datasource?.Name;
  const nameField: TextField = {
    value: name?.jsonValue?.value,
    editable: name?.jsonValue?.editable,
  };

  const image = datasource?.Image;
  const imageField: ImageField = {
    value: image?.jsonValue,
    editable: image?.jsonValue?.editable,
  };

  const { sitecoreContext } = useSitecoreContext();
  const isPageEditing = sitecoreContext.pageEditing;

  let href = '';
  if (!isPageEditing) {
    href = datasource.url.path;
  }

  if (props.fields) {
    return (
      <li className="listCta__item listCta__item--bgGrey">
        <Link href={href} className="listCta__link">
          <JssImage field={imageField} className="listCta__img listCta__img--round" />
          <span className="listCta__subtitle listCta__subtitle--top">
            <Text field={nameField} />
          </span>
          <span className="listCta__subtitle listCta__subtitle--bottom">
            <Text field={titleField} />
          </span>
          <span className="icon-link-arrow-right listCta__linkArrow"></span>
        </Link>
      </li>
    );
  }

  return <LinkLatersContactDefaultComponent {...props} />;
};
