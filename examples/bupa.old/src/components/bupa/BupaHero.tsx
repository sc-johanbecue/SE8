import type React from 'react';
import {
  Text,
  RichText,
  Image as JssImage,
  Link as JssLink,
  TextField,
  RichTextField,
  ImageField,
  LinkField,
} from '@sitecore-content-sdk/nextjs';

type HeroFields = {
  eyebrow: TextField;
  heading: TextField;
  description: RichTextField;
  backgroundImage: ImageField;
  ctaButton: LinkField;
};

interface HeroProps {
  fields: HeroFields;
}

/**
 * Hero Component
 * Inspired by Bupa Global's hero section with image background and CTA
 */
const Hero = ({ fields }: HeroProps): React.JSX.Element => {
  return (
    <section className="relative bg-[#003087] text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-40">
        <JssImage field={fields.backgroundImage} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <Text tag="p" className="text-lg mb-4 font-medium" field={fields.eyebrow} />

          {/* Heading */}
          <Text
            tag="h1"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            field={fields.heading}
          />

          {/* Description */}
          <RichText
            className="text-lg md:text-xl mb-8 leading-relaxed"
            field={fields.description}
          />

          {/* CTA Button */}
          <JssLink
            field={fields.ctaButton}
            className="inline-block bg-[#0091DA] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#007AB8] transition-colors"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero };
