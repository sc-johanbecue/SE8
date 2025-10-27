import React, { JSX } from 'react';
import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronRight } from 'lucide-react';
import {
  TextField,
  ImageField,
  LinkField,
  RichTextField,
  Text,
  RichText,
  Link as JssLink,
  Image as JssImage,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

type ContentCard = {
  fields: {
    Image: ImageField;
    Title: TextField;
    Description: RichTextField;
    PrimaryLinkText: TextField;
    PrimaryLink: LinkField;
    SecondaryLinkText: TextField;
    SecondaryLink: LinkField;
  };
};

type Fields = {
  Title: TextField;
  Cards: Array<ContentCard>;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 769px) and (max-width: 1023px)': {
        active: props.fields.Cards.length > 2,
      },
      '(min-width: 1024px)': {
        active: props.fields.Cards.length > 3,
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
        <Text
          tag="h2"
          field={props.fields.Title}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center"
        />

        <div className="md:hidden space-y-6">
          {props.fields.Cards &&
            props.fields.Cards.map((card, index) => <ContentCard key={index} card={card} />)}
        </div>

        <div className="hidden md:block">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 md:gap-6">
              {props.fields.Cards &&
                props.fields.Cards.map((card, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_calc(50%-12px)] min-w-0 lg:flex-[0_0_calc(33.333%-16px)]"
                  >
                    <ContentCard card={card} />
                  </div>
                ))}
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

function ContentCard({ card }: { card: ContentCard }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
      <JssImage
        field={card.fields.Image}
        width={400}
        height={300}
        className="w-full h-56 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <Text
          tag="h3"
          field={card.fields.Title}
          className="text-2xl font-bold text-gray-900 mb-4"
        />
        <RichText
          field={card.fields.Description}
          className="text-gray-700 mb-6 leading-relaxed flex-grow"
        />

        <div className="space-y-4">
          <JssLink
            field={card.fields.PrimaryLink}
            className="inline-block bg-[#005f4f] text-white font-semibold px-6 py-3 rounded hover:bg-[#004d3f] transition-colors"
          >
            <Text field={card.fields.PrimaryLinkText} />
          </JssLink>

          {card.fields.SecondaryLink.value && (
            <JssLink
              field={card.fields.SecondaryLink}
              className="inline-flex items-center gap-1 text-[#005f4f] font-semibold underline hover:no-underline group"
            >
              <span>
                <Text field={card.fields.SecondaryLinkText} />
              </span>
              {card.fields.SecondaryLinkText.value != '' && (
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              )}
            </JssLink>
          )}
        </div>
      </div>
    </div>
  );
}
