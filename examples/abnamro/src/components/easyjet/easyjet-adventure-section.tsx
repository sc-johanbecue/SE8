import React, { JSX } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ComponentParams, ComponentRendering } from '@sitecore-content-sdk/nextjs';

type AdventureCard = {
  title: string;
  description: string;
  buttonText: string;
  image: string;
  link: string;
};

interface Fields {
  Title: string;
  Cards: AdventureCard[];
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
          {props.fields.Cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={card.image || '/placeholder.svg'}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 uppercase">{card.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{card.description}</p>
                <Button className="bg-[#FF6600] hover:bg-[#E55A00] text-white font-semibold">
                  {card.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
