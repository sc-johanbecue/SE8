import React, { JSX } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ComponentParams, ComponentRendering } from '@sitecore-content-sdk/nextjs';

type Fields = {
  image: string;
  title: string;
  description: string;
  ctaLink: {
    text: string;
    href: string;
  };
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const fields: Fields = {
    image: '/person-sitting-on-bench-outdoors.jpg',
    title: 'Tot € 75 bonus bij beleggen',
    description:
      'Periodiek beleggen? Dat kan bij ons dit najaar met een bonus. Open vóór 30 november 2025 je eerste beleggingsrekening en doe 6 x een automatische inleg. Je kiest zelf hoeveel je inlegt: € 50, € 100 of € 150. Voldoe je aan de actievoorwaarden? Dan krijg je € 25, € 50 of € 75 bonus. Let op: je kunt geen deel van je inleg terugstorten.',
    ctaLink: {
      text: 'Naar de actie',
      href: '#',
    },
  };

  return (
    <section className="py-8 md:py-12 bg-white" key={id}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center max-w-6xl mx-auto">
          <div className="w-full md:w-1/2">
            <Image
              src={fields.image || '/placeholder.svg'}
              alt=""
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{fields.title}</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">{fields.description}</p>
            <Link
              href={fields.ctaLink.href}
              className="inline-block px-6 py-3 bg-teal-700 text-white font-semibold rounded hover:bg-teal-800 transition-colors"
            >
              {fields.ctaLink.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
