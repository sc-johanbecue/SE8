import React, { JSX } from 'react';
import {
  Text,
  TextField,
  ImageField,
  LinkField,
  Placeholder,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

type ImageCardItem = {
  tag: TextField;
  heading: TextField;
  description: TextField;
  image: ImageField;
  link: LinkField;
};

type MediClinicImageCardsFields = {
  Heading: TextField;
  Cards: ImageCardItem[];
};

type ComponentProps = {
  url: string;
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: MediClinicImageCardsFields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const phImageCardsContainer = `MediClinicImageCardsContainer-${props.params.DynamicPlaceholderId}`;

  return (
    <section className="container mx-auto px-4 py-16">
      <Text
        tag="h2"
        field={props.fields.Heading}
        className="text-3xl font-bold text-gray-900 mb-8"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Placeholder name={phImageCardsContainer} rendering={props.rendering} />
      </div>
    </section>
  );
};
