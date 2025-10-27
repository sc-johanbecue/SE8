import React, { JSX } from 'react';
import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronRight } from 'lucide-react';
import {
  TextField,
  Text,
  ComponentParams,
  ComponentRendering,
  Placeholder,
  PlaceholdersData,
} from '@sitecore-content-sdk/nextjs';

type Fields = {
  Title: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const phCardsContainer = `abnamroCardsContainer-${props.params.DynamicPlaceholderId}`;

  console.log('phCardsContainerItems:', JSON.stringify(phCardsContainer));
  console.log('placeholder:', JSON.stringify(props.rendering.placeholders));
  console.log('placeholder:', JSON.stringify(props.rendering.placeholders as PlaceholdersData)[2]);

  const phCardsContainerItems =
    (props.rendering.placeholders as PlaceholdersData)[phCardsContainer]?.length || 0;

  console.log('phCardsContainerItems:', phCardsContainerItems);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 769px) and (max-width: 1023px)': {
        active: phCardsContainerItems > 2,
      },
      '(min-width: 1024px)': {
        active: phCardsContainerItems > 3,
      },
    },
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-12 md:py-16 bg-gray-50" key={id}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
          <Text field={props.fields.Title} />
        </h2>

        <div className="md:hidden space-y-6">
          <Placeholder name={phCardsContainer} rendering={props.rendering} />
        </div>

        <div className="hidden md:block">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 md:gap-6">
              <Placeholder name={phCardsContainer} rendering={props.rendering} />
            </div>
          </div>

          {(canScrollPrev || canScrollNext) && (
            <div className="flex justify-center gap-2 mt-6">
              <button
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className="p-2 rounded-full bg-white border border-gray-300 disabled:opacity-50 hover:bg-gray-50 transition-colors"
                aria-label="Previous"
              >
                <ChevronRight className="w-5 h-5 rotate-180" />
              </button>
              <button
                onClick={scrollNext}
                disabled={!canScrollNext}
                className="p-2 rounded-full bg-white border border-gray-300 disabled:opacity-50 hover:bg-gray-50 transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
