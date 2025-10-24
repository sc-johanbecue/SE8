'use client';

import React, { JSX } from 'react';
import {
  Text,
  RichText,
  TextField,
  RichTextField,
  ImageField,
  Image as JssImage,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

type PlanOption = {
  fields: {
    Image: ImageField;
    Title: TextField;
    Description: RichTextField;
  };
};

type PlanFinderFields = {
  Heading: TextField;
  SubHeading: RichTextField;
  PlanOptions: PlanOption[];
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: PlanFinderFields;
};

/**
 * Plan Finder Component
 * Helps users find the best healthcare plan for their needs
 */
export const Default = (props: ComponentProps): JSX.Element => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Text
            tag="h2"
            className="text-3xl md:text-4xl font-bold mb-4 text-[#003087]"
            field={props.fields.Heading}
          />
          <RichText
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            field={props.fields.SubHeading}
          />
        </div>

        {/* Plan Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {props.fields.PlanOptions?.map((option, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#0091DA] hover:shadow-lg transition-all text-left group"
            >
              {/* Icon */}
              <div className="mb-4">
                <JssImage field={option.fields.Image} className="icons" />
              </div>

              {/* Title */}

              <Text
                tag="h3"
                className="text-lg font-bold mb-3 text-[#003087] group-hover:text-[#0091DA] transition-colors"
                field={option.fields.Title}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
