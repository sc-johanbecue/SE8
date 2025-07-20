import React from 'react';
import {
  DateField,
  TextField,
  RichTextField,
  RichText,
  Text,
} from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

interface Fields {
  data: {
    datasource: {
      Date: {
        jsonValue: {
          value?: string | undefined;
          editable?: string | undefined;
        };
      };
      Category: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
      Title: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
      Content: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
    };
    contextItem: {
      Date: {
        jsonValue: {
          value?: string | undefined;
          editable?: string | undefined;
        };
      };
      Category: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
      Title: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
      Content: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
    };
  };
}

type LinkLatersArticleProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const LinkLatersArticleDefaultComponent = (props: LinkLatersArticleProps): JSX.Element => (
  <div className={`component ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: LinkLatersArticleProps): JSX.Element => {
  const datasource = props.fields?.data?.datasource;
  const contextItem = props.fields?.data?.contextItem;

  const title = datasource?.Title || contextItem?.Title;
  const content = datasource?.Content || contextItem?.Content;
  const date = datasource?.Date || contextItem?.Date;
  const category = datasource?.Category || contextItem?.Category;

  const titleField: TextField = {
    value: title?.jsonValue?.value,
    editable: title?.jsonValue?.editable,
  };

  const contentField: RichTextField = {
    value: content?.jsonValue?.value,
    editable: content?.jsonValue?.editable,
  };

  const dateField = {
    value: date?.jsonValue?.value,
    editable: date?.jsonValue?.editable,
  };

  const categoryField: TextField = {
    value: category?.jsonValue?.value,
    editable: category?.jsonValue?.editable,
  };

  if (props.fields) {
    return (
      <>
        <div className="articleInfo">
          <span className="articleInfo__text">
            <DateField field={dateField} />
          </span>
          <span className="articleInfo__text">
            <Link href="/en/find-a-lawyer/lauren-bachtel">Lauren Bachtel</Link>&nbsp;-&nbsp;
            <Link href="/en/find-a-lawyer/will-kim">Will Kim</Link>&nbsp;-&nbsp;
            <Link href="/en/find-a-lawyer/chee-lee">Chee Lee</Link>
          </span>
          <span className="articleInfo__text">
            <Text field={categoryField} />
          </span>
        </div>
        <a id="content-top-2e1c551edd824f6aab752e1e364e6036"></a>
        <h1 className="mobile-text-center">
          <Text field={titleField} />
        </h1>
        <div id="content-2e1c551edd824f6aab752e1e364e6036" className="content-block__content">
          <RichText field={contentField} />
        </div>

        <div className="ctaDocuments"></div>
      </>
    );
  }

  return <LinkLatersArticleDefaultComponent {...props} />;
};
