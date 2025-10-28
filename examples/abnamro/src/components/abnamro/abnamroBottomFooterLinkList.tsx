import React, { JSX } from 'react';
import {
  TextField,
  LinkField,
  Link as JssLink,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

type ResultsFieldLink = {
  field: {
    link: LinkField;
  };
};

interface Fields {
  data: {
    datasource: {
      children: {
        results: ResultsFieldLink[];
      };
      title: {
        jsonValue: TextField;
      };
    };
  };
}

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;

  return (
    <div className="flex flex-wrap gap-x-6 gap-y-2" key={id}>
      {props.fields.data.datasource.children.results.map((link, index) => (
        <JssLink
          field={link.field.link}
          key={index}
          className="inline-flex items-center gap-2 text-white underline-offset-4"
        >
          <span className="border-b border-white">{link.field.link.value.text}</span>
        </JssLink>
      ))}
    </div>
  );
};
