import React, { JSX } from 'react';
import {
  Text,
  RichText,
  ComponentParams,
  ComponentRendering,
  RichTextField,
  TextField,
  Image as JssImage,
  ImageField,
  Item,
} from '@sitecore-content-sdk/nextjs';

type PromiseCard = Item & {
  fields: {
    Image: ImageField;
    Statistic: TextField;
    Title: TextField;
    Description: RichTextField;
  };
};

type PromiseCardsFields = {
  Heading: TextField;
  SubHeading: RichTextField;
  Cards: PromiseCard[];
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: PromiseCardsFields;
};

/**
 * Promise Cards Component
 * Displays key statistics and promises (2 million+ providers, 24-hour support, 190 languages)
 */
export const Default = (props: ComponentProps): JSX.Element => {
  return (
    <section className="bg-[#0091DA] text-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Text
            tag="h2"
            className="text-3xl md:text-4xl font-bold mb-4"
            field={props.fields.Heading}
          />
          <RichText
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            field={props.fields.SubHeading}
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {props.fields.Cards?.map((card, index) => (
            <div key={index} className="bg-white text-gray-900 rounded-xl p-8 shadow-lg">
              {/* Icon */}
              <div className="mb-6">
                <JssImage field={card.fields.Image} className="w-8 h-8 text-[#0091DA]" />
              </div>

              {/* Title */}
              <Text
                tag="h3"
                className="text-xl font-bold mb-3 text-[#003087]"
                field={card.fields.Title}
              />

              {/* Description */}
              <RichText className="text-gray-600 leading-relaxed" field={card.fields.Description} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
