'use client';
////
////   Currently just a copy of COntentCards
////
import React, { JSX } from 'react';
import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { ComponentParams, ComponentRendering } from '@sitecore-content-sdk/nextjs';

type ContentCard = {
  image: string;
  title: string;
  description: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryLink?: {
    text: string;
    href: string;
  };
};

type Fields = {
  sectionTitle: string;
  cards: ContentCard[];
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const fields: Fields = {
    sectionTitle: 'Ook interessant',
    cards: [
      {
        image: '/woman-sitting-in-modern-living-room.jpg',
        title: 'Nu € 15 cadeau! 🎁',
        description:
          'Open je vóór 1 januari 2026 een Jongerenrekening voor je kind, dan ontvangt je kind €15 cadeau op de rekening!',
        primaryCta: {
          text: 'Open de rekening',
          href: '#',
        },
        secondaryLink: {
          text: 'Bekijk actievoorwaarden',
          href: '#',
        },
      },
      {
        image: '/person-holding-phone-with-abn-amro-app.jpg',
        title: 'Nieuw: Gesprek Check',
        description:
          "'Hallo, je spreekt met ABN AMRO.' Twijfel je over wie je aan de telefoon hebt? Als wij je bellen, kun je vanaf nu vragen om een Gesprek Check. De adviseur stuurt je dan een bericht in de ABN AMRO app of in Internet Bankieren met het gesprek te bevestigen. Zo weet je met wie je belt en kun je fraude voorkomen.",
        primaryCta: {
          text: 'Meer over Gesprek Check',
          href: '#',
        },
      },
      {
        image: '/woman-working-at-desk-with-laptop.jpg',
        title: 'Hulp nodig bij je bankzaken?',
        description:
          'We helpen je graag op weg. Bijvoorbeeld bij het beginnen met de ABN AMRO app. Of wanneer je slecht ziet of moeite hebt met horen. Zo proberen we bankieren voor iedereen zo makkelijk mogelijk te maken.',
        primaryCta: {
          text: 'Bekijk alle hulpmiddelen',
          href: '#',
        },
      },
    ],
  };

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    breakpoints: {
      '(min-width: 768px)': { active: false },
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
          {fields.sectionTitle}
        </h2>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {fields.cards.map((card, index) => (
                <div key={index} className="flex-[0_0_85%] min-w-0">
                  <ContentCard card={card} />
                </div>
              ))}
            </div>
          </div>
          {(canScrollPrev || canScrollNext) && (
            <div className="flex justify-center gap-2 mt-4">
              <button
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className="p-2 rounded-full bg-white border border-gray-300 disabled:opacity-50"
                aria-label="Previous"
              >
                <ChevronRight className="w-5 h-5 rotate-180" />
              </button>
              <button
                onClick={scrollNext}
                disabled={!canScrollNext}
                className="p-2 rounded-full bg-white border border-gray-300 disabled:opacity-50"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
          {fields.cards.map((card, index) => (
            <ContentCard key={index} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

function ContentCard({ card }: { card: ContentCard }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
      <Image
        src={card.image || '/placeholder.svg'}
        alt=""
        width={400}
        height={300}
        className="w-full h-56 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>
        <p className="text-gray-700 mb-6 leading-relaxed flex-grow">{card.description}</p>

        <div className="space-y-4">
          <Link
            href={card.primaryCta.href}
            className="inline-block bg-[#005f4f] text-white font-semibold px-6 py-3 rounded hover:bg-[#004d3f] transition-colors"
          >
            {card.primaryCta.text}
          </Link>

          {card.secondaryLink && (
            <Link
              href={card.secondaryLink.href}
              className="inline-flex items-center gap-1 text-[#005f4f] font-semibold underline hover:no-underline group"
            >
              <span>{card.secondaryLink.text}</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
