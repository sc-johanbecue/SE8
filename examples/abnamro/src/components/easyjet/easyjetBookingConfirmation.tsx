import React, { JSX } from 'react';
import {
  TextField,
  Text,
  ImageField,
  Image as JssImage,
  RichTextField,
  RichText,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

type Fields = {
  Title: TextField;
  Subtitle: TextField;
  Image: ImageField;
  Text: RichTextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  return (
    <div className="w-full bg-gray-50 py-8 md:py-12" key={id}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <Text
            tag="h1"
            field={props.fields.Title}
            className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl"
          />
          <Text
            tag="p"
            field={props.fields.Subtitle}
            className="text-lg text-gray-600 md:text-xl"
          />
        </div>

        {/* Fare Card */}
        <div className="mx-auto mb-8 max-w-6xl overflow-hidden rounded-2xl bg-white shadow-lg">
          <div className="grid gap-0 md:grid-cols-2">
            {/* Left: Image */}
            <div className="relative h-64 md:h-auto">
              <JssImage field={props.fields.Image} fill className="object-cover" />
            </div>

            {/* Right: Fare Details */}
            <div className="relative p-6 md:p-8">
              {/* Features List */}
              <RichText field={props.fields.Text} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
