import type React from 'react';
import { Text, type TextField, Image as JssImage, ImageField } from '@sitecore-content-sdk/nextjs';

type MediClinicHeroFields = {
  Heading: TextField;
  SubHeading: TextField;
  Image: ImageField;
};

type MediClinicHeroProps = {
  fields: MediClinicHeroFields;
};

/**
 * MediClinic Hero Component
 * Large hero section with heading
 */
export const MediClinicHero = ({ fields }: MediClinicHeroProps): React.JSX.Element => {
  return (
    <section className="relative bg-gray-50 h-[300px] md:h-[500px] overflow-hidden">
      {fields.Image?.value?.src && (
        <div className="absolute inset-0 z-0">
          <JssImage field={fields.Image} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <Text
            tag="h1"
            field={fields.Heading}
            className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight drop-shadow-lg"
          />
          {fields.SubHeading?.value && (
            <Text tag="p" field={fields.SubHeading} className="text-lg text-white drop-shadow-md" />
          )}
        </div>
      </div>
    </section>
  );
};

export default MediClinicHero;
