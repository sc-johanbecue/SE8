/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { JSX } from 'react';
import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Text,
  RichText,
  Image as JssImage,
  Link as JssLink,
  TextField,
  RichTextField,
  ImageField,
  LinkField,
  ComponentRendering,
  ComponentParams,
  Item,
} from '@sitecore-content-sdk/nextjs';

type CarouselSlideFields = Item & {
  fields: {
    Eyebrow: TextField;
    Heading: TextField;
    Description: RichTextField;
    BackgroundImage: ImageField;
    Cta: LinkField;
  };
};

type CarouselFields = {
  Slides: CarouselSlideFields[];
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
  const autoplayPlugin = Autoplay({ delay: 5000, stopOnInteraction: false }) as unknown as any;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplayPlugin]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

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

  return (
    <section className="relative bg-[#003087] text-white">
      {/* Carousel Container */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {props.fields.Slides.map((slide, index) => (
            <div
              key={index}
              className={`flex-[0_0_100%] min-w-0 relative transition-opacity duration-500 ${
                index === selectedIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 opacity-40">
                <JssImage
                  field={slide.fields.BackgroundImage}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="relative container mx-auto px-4 py-16 md:py-24">
                <div className="max-w-2xl">
                  {/* Eyebrow */}
                  <Text tag="p" className="text-lg mb-4 font-medium" field={slide.fields.Eyebrow} />

                  {/* Heading */}
                  <Text
                    tag="h1"
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                    field={slide.fields.Heading}
                  />

                  {/* Description */}
                  <RichText
                    className="text-lg md:text-xl mb-8 leading-relaxed"
                    field={slide.fields.Description}
                  />

                  {/* CTA Button */}
                  <JssLink
                    field={slide.fields.Cta}
                    className="inline-block bg-[#0091DA] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#007AB8] transition-colors"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Navigation Dots */}
      <div className="relative pb-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-2">
            {props.fields.Slides.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === selectedIndex ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
