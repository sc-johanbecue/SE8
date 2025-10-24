import React, { JSX } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ComponentParams, ComponentRendering } from '@sitecore-content-sdk/nextjs';

type SpainDestination = {
  title: string;
  image: string;
  link: string;
};

type InfoSection = {
  title: string;
  description: string;
};

interface Fields {
  Title: string;
  Destinations: SpainDestination[];
  InfoTitle: string;
  InfoDescription: string;
  AdditionalSections: InfoSection[];
  ButtonText: string;
  Link: string;
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase">
          {props.fields.Title}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {props.fields.Destinations.map((dest, index) => (
            <div
              key={index}
              className="relative h-48 md:h-64 rounded-lg overflow-hidden shadow-lg group cursor-pointer"
            >
              <Image
                src={dest.image || '/placeholder.svg'}
                alt={dest.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-xl md:text-2xl font-bold uppercase">{dest.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-[#FF6600] uppercase">
            {props.fields.InfoTitle}
          </h3>
          <p className="text-gray-700 mb-6 leading-relaxed">{props.fields.InfoDescription}</p>

          {props.fields.AdditionalSections.map((section, index) => (
            <div key={index} className="mb-6">
              <h4 className="text-xl font-bold mb-2">{section.title}</h4>
              <p className="text-gray-700 leading-relaxed">{section.description}</p>
            </div>
          ))}

          <Button className="bg-[#FF6600] hover:bg-[#E55A00] text-white font-semibold mt-4">
            {props.fields.ButtonText}
          </Button>
        </div>
      </div>
    </section>
  );
};
