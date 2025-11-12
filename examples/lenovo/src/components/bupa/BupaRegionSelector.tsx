'use client';

import React, { JSX } from 'react';
import {
  RichTextField,
  RichText,
  ComponentRendering,
  ComponentParams,
} from '@sitecore-content-sdk/nextjs';

type CarouselFields = {
  Description: RichTextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: CarouselFields;
};

/**
 * Carousel Component
 * Hero-style carousel using Embla Carousel with autoplay
 */
export const Default = (props: ComponentProps): JSX.Element => {
  return (
    <section className="relative bg-[#003087] text-white">
      <div className="relative bg-white text-gray-900 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-4">
            <RichText tag="label" className="font-medium" field={props.fields.Description} />
            <div className="flex items-center gap-4">
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[300px]">
                <option value="">Select your region</option>
                <option value="uk">United Kingdom</option>
                <option value="us">United States</option>
                <option value="au">Australia</option>
                <option value="ae">United Arab Emirates</option>
              </select>
              <button className="bg-[#0091DA] text-white p-3 rounded-lg hover:bg-[#007AB8] transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
