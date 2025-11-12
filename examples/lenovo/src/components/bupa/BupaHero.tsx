import React, { JSX } from 'react';
import {
  Text,
  RichText,
  Image as JssImage,
  Link as JssLink,
  TextField,
  RichTextField,
  ImageField,
  LinkField,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

type HeroFields = {
  Eyebrow: TextField;
  Heading: TextField;
  Description: RichTextField;
  BackgroundImage: ImageField;
  CtaButton: LinkField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: HeroFields;
};

/**
 * Hero Component
 * Inspired by Bupa Global's hero section with image background and CTA
 */
export const Default = (props: ComponentProps): JSX.Element => {
  return (
    <section className="relative bg-[#003087] text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-40">
        <JssImage field={props.fields.BackgroundImage} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <Text tag="p" className="text-lg mb-4 font-medium" field={props.fields.Eyebrow} />

          {/* Heading */}
          <Text
            tag="h1"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            field={props.fields.Heading}
          />

          {/* Description */}
          <RichText
            className="text-lg md:text-xl mb-8 leading-relaxed"
            field={props.fields.Description}
          />

          {/* CTA Button */}
          <JssLink
            field={props.fields.CtaButton}
            className="inline-block bg-[#0091DA] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#007AB8] transition-colors"
          />
        </div>
      </div>
    </section>
  );
};
