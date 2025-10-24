'use client';
import React, { JSX } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { ComponentParams, ComponentRendering } from '@sitecore-content-sdk/nextjs';

type Fields = {
  greeting: string;
  subtitle: string;
  placeholder: string;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const [searchQuery, setSearchQuery] = useState('');

  const fields: Fields = {
    greeting: 'Goedenacht,',
    subtitle: 'Waarmee kunnen we je vooruit helpen?',
    placeholder: 'Zoeken naar...',
  };

  return (
    <section className="bg-gray-50 py-8 md:py-12" key={id}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{fields.greeting}</h2>
          <p className="text-gray-600 mb-6">{fields.subtitle}</p>
          <div className="relative">
            <Image
              src="/search-icon.png"
              alt=""
              width={20}
              height={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={fields.placeholder}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
