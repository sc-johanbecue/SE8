import React, { JSX } from 'react';
import {
  TextField,
  Text,
  ComponentParams,
  ComponentRendering,
  Placeholder,
} from '@sitecore-content-sdk/nextjs';

type Fields = {
  Title: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const phComparisonCardsContainer = `abnamroComparisonCardsContainer-${props.params.DynamicPlaceholderId}`;

  return (
    <section className="py-12 lg:py-16" key={id}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8 lg:mb-12 text-gray-900">
          <Text field={props.fields.Title} />
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <Placeholder name={phComparisonCardsContainer} rendering={props.rendering} />
        </div>
      </div>
    </section>
  );
};
