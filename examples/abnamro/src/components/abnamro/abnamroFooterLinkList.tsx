import React, { JSX } from 'react';
import { ArrowRight } from 'lucide-react';
import {
  TextField,
  Text,
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
    <div key={id}>
      <h2 className="text-xl md:text-2xl font-normal mb-6">
        <Text field={props.fields.data.datasource.title.jsonValue} />
      </h2>
      <ul className="space-y-3">
        {props.fields.data.datasource.children.results.map((link, index) => (
          <li key={index} className="flex items-center gap-2 group">
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            <JssLink
              field={link.field.link}
              className="inline-flex items-center gap-2 text-white underline-offset-4"
            >
              <span className="border-b border-white">{link.field.link.value.text}</span>
            </JssLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
