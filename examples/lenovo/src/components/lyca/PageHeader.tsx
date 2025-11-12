import { JSX } from 'react';
import {
  TextField,
  Text,
  RichTextField,
  RichText,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

type Fields = {
  Title: TextField;
  Description: RichTextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;

  return (
    <div key={id} className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a4d] text-center mb-4">
          <Text field={props.fields.Title} />
        </h1>
        <RichText
          field={props.fields.Description}
          className="text-center text-gray-600 text-sm max-w-4xl mx-auto leading-relaxed"
        />
      </div>
    </div>
  );
};
