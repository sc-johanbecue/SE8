import React, { JSX } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ComponentParams, ComponentRendering } from '@sitecore-content-sdk/nextjs';

type Partner = {
  title: string;
  description: string;
  image: string;
  logos?: string[];
  logo?: string;
  buttonText: string;
  link: string;
};

interface Fields {
  Title: string;
  Partners: Partner[];
}

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase">
          {props.fields.Title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {props.fields.Partners.map((partner, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image
                  src={partner.image || '/placeholder.svg'}
                  alt={partner.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 uppercase">{partner.title}</h3>
                <p className="text-gray-700 mb-4">{partner.description}</p>
                {partner.logos && (
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {partner.logos.map((logo, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 rounded text-sm font-semibold">
                        {logo}
                      </span>
                    ))}
                  </div>
                )}
                {partner.logo && (
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-gray-100 rounded text-sm font-semibold">
                      {partner.logo}
                    </span>
                  </div>
                )}
                <Button className="bg-[#FF6600] hover:bg-[#E55A00] text-white font-semibold w-full">
                  {partner.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Default as EasyjetPartnersSection };
