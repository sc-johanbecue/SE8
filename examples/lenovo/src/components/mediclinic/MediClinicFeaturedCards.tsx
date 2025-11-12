'use client';

import React, { JSX } from 'react';
import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
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

type FeaturedItem = {
  fields: {
    Tag: TextField;
    Heading: TextField;
    Description: RichTextField;
    Image: ImageField;
    CtaLink: LinkField;
  };
};

type MediClinicFeaturedCardFields = {
  Items: FeaturedItem[];
};

type ComponentProps = {
  url: string;
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: MediClinicFeaturedCardFields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {props.fields.Items?.map((item, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row max-w-4xl mx-auto">
                <div className="md:w-1/2">
                  <JssImage
                    field={item.fields.Image}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <Text
                    tag="span"
                    field={item.fields.Tag}
                    className="inline-block px-3 py-1 bg-pink-500 text-white text-xs font-semibold rounded mb-4 w-fit"
                  />
                  <Text
                    tag="h3"
                    field={item.fields.Heading}
                    className="text-2xl font-bold text-gray-900 mb-4"
                  />
                  <RichText
                    field={item.fields.Description}
                    className="text-gray-600 mb-6 leading-relaxed"
                  />
                  <JssLink
                    field={item.fields.CtaLink}
                    className="inline-block px-6 py-3 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition-colors w-fit"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {props.fields.Items?.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === selectedIndex ? 'bg-cyan-500' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export const Reversed = (props: ComponentProps): JSX.Element => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {props.fields.Items?.map((item, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row max-w-4xl mx-auto">
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <Text
                    tag="span"
                    field={item.fields.Tag}
                    className="inline-block px-3 py-1 bg-pink-500 text-white text-xs font-semibold rounded mb-4 w-fit"
                  />
                  <Text
                    tag="h3"
                    field={item.fields.Heading}
                    className="text-2xl font-bold text-gray-900 mb-4"
                  />
                  <RichText
                    field={item.fields.Description}
                    className="text-gray-600 mb-6 leading-relaxed"
                  />
                  <JssLink
                    field={item.fields.CtaLink}
                    className="inline-block px-6 py-3 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition-colors w-fit"
                  />
                </div>
                <div className="md:w-1/2">
                  <JssImage
                    field={item.fields.Image}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {props.fields.Items?.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === selectedIndex ? 'bg-cyan-500' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
