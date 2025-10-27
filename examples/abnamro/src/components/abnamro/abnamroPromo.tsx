import React, { JSX } from 'react';
import {
  TextField,
  ImageField,
  RichTextField,
  LinkField,
  Text,
  Image as JssImage,
  Link as JssLink,
  RichText,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

type Fields = {
  Image: ImageField;
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
    <section className="py-8 md:py-12 bg-white" key={id}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center max-w-6xl mx-auto">
          <div className="w-full md:w-1/2">
            <JssImage
              field={props.fields.Image}
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              <Text field={props.fields.Title} />
            </h2>
            <RichText
              field={props.fields.Description}
              className="text-gray-700 mb-6 leading-relaxed"
            />
            <JssLink
              field={props.fields.Link}
              className="inline-block px-6 py-3 bg-teal-700 text-white font-semibold rounded hover:bg-teal-800 transition-colors"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Reversed = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;

  return (
    <section className="py-8 md:py-12 bg-white" key={id}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center max-w-6xl mx-auto">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              <Text field={props.fields.Title} />
            </h2>
            <RichText
              field={props.fields.Description}
              className="text-gray-700 mb-6 leading-relaxed"
            />
            <JssLink
              field={props.fields.Link}
              className="inline-block px-6 py-3 bg-teal-700 text-white font-semibold rounded hover:bg-teal-800 transition-colors"
            />
          </div>
          <div className="w-full md:w-1/2">
            <JssImage
              field={props.fields.Image}
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
