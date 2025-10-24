import React, { JSX } from 'react';
import {
  TextField,
  RichTextField,
  LinkField,
  Text,
  RichText,
  Link as JssLink,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

type Fields = {
  Title: TextField;
  Description: RichTextField;
  Link: LinkField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  return (
    <div className="bg-white rounded-lg p-6" key={id}>
      <Text
        tag="h3"
        className="text-xl md:text-2xl font-bold text-gray-900 mb-3"
        field={props.fields.Title}
      />
      <RichText field={props.fields.Description} className="text-gray-700 mb-4 leading-relaxed" />
      <JssLink
        field={props.fields.Link}
        className={`inline-block bg-[#FF6600] hover:bg-[#E55A00] text-white font-semibold px-6 py-2 rounded transition-colors text-center`}
      />
    </div>
  );
};
