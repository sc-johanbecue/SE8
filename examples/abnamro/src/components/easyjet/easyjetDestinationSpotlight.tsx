import React, { JSX } from 'react';
import {
  TextField,
  RichTextField,
  ImageField,
  LinkField,
  Text,
  RichText,
  Image as JssImage,
  Link as JssLink,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

interface Fields {
  Heading: TextField;
  SubHeading: TextField;
  Title: TextField;
  Description: RichTextField;
  Image: ImageField;
  Link: LinkField;
}

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <Text
          tag="h2"
          field={props.fields.Heading}
          className="text-3xl md:text-4xl font-bold text-center mb-2 uppercase"
        />
        <Text tag="p" field={props.fields.SubHeading} className="text-center text-gray-600 mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div>
            <Text
              tag="h3"
              field={props.fields.Title}
              className="text-2xl font-bold mb-4 text-[#FF6600] uppercase"
            />
            <RichText
              field={props.fields.Description}
              className="text-gray-700 mb-6 leading-relaxed"
            />
            <JssLink
              field={props.fields.Link}
              className={`inline-block bg-[#FF6600] hover:bg-[#E55A00] text-white font-semibold px-6 py-2 rounded transition-colors text-center`}
            />
          </div>
          <div className="relative h-70 rounded-lg overflow-hidden shadow-xl">
            <JssImage
              field={props.fields.Image}
              alt={props.fields.Title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Reversed = (props: ComponentProps): JSX.Element => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <Text
          tag="h2"
          field={props.fields.Heading}
          className="text-3xl md:text-4xl font-bold text-center mb-2 uppercase"
        />
        <Text tag="p" field={props.fields.SubHeading} className="text-center text-gray-600 mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div className="relative h-70 rounded-lg overflow-hidden shadow-xl">
            <JssImage
              field={props.fields.Image}
              alt={props.fields.Title}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <Text
              tag="h3"
              field={props.fields.Title}
              className="text-2xl font-bold mb-4 text-[#FF6600] uppercase"
            />
            <RichText
              field={props.fields.Description}
              className="text-gray-700 mb-6 leading-relaxed"
            />
            <JssLink
              field={props.fields.Link}
              className={`inline-block bg-[#FF6600] hover:bg-[#E55A00] text-white font-semibold px-6 py-2 rounded transition-colors text-center`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
