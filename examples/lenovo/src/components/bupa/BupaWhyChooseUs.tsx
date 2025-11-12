import React, { JSX } from 'react';
import {
  Text,
  RichText,
  Image as JssImage,
  Link as JssLink,
  ImageField,
  LinkField,
  ComponentParams,
  ComponentRendering,
  RichTextField,
  TextField,
  Item,
} from '@sitecore-content-sdk/nextjs';

type BenefitCard = Item & {
  fields: {
    Image: ImageField;
    Title: TextField;
    Description: RichTextField;
    BackgroundColor: TextField;
  };
};

type WhyChooseUsFields = {
  Heading: TextField;
  SubHeading: RichTextField;
  CtaButton: LinkField;
  BenefitCards: BenefitCard[];
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: WhyChooseUsFields;
};

/**
 * Why Choose Us Component
 * Displays member benefits with image cards
 */
export const Default = (props: ComponentProps): JSX.Element => {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Text
            tag="h2"
            className="text-3xl md:text-4xl font-bold mb-4 text-[#003087]"
            field={props.fields.Heading}
          />
          <RichText
            className="text-lg text-gray-600 max-w-3xl mx-auto mb-6"
            field={props.fields.SubHeading}
          />
          <JssLink
            field={props.fields.CtaButton}
            className="inline-block bg-[#0091DA] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#007AB8] transition-colors"
          />
        </div>

        {/* Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-1 gap-6 max-w-6xl mx-auto mt-12">
          {props.fields.BenefitCards?.map((card, index) => (
            <div
              key={index}
              className="rounded-xl shadow-lg hover:shadow-xl transition-shadow bg-white flex flex-col h-full"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden rounded-t-xl flex-shrink-0">
                <JssImage
                  field={card.fields.Image}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div
                className="p-6 rounded-b-xl flex-1 flex flex-col"
                style={{
                  backgroundColor: (card.fields.BackgroundColor?.value as string) || '#E91E63',
                }}
              >
                <Text
                  tag="h3"
                  className="text-xl font-bold mb-3 text-white"
                  field={card.fields.Title}
                />
                <RichText className="text-white leading-relaxed" field={card.fields.Description} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
