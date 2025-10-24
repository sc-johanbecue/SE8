import React, { JSX } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { ComponentParams, ComponentRendering } from '@sitecore-content-sdk/nextjs';

type ServiceCard = {
  icon: string;
  title: string;
  href: string;
};

type Fields = {
  cards: ServiceCard[];
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const fields: Fields = {
    cards: [
      {
        icon: '/lock-icon-teal.jpg',
        title: 'Inloggen',
        href: '#',
      },
      {
        icon: '/credit-card-icon-teal.jpg',
        title: 'Betalen',
        href: '#',
      },
      {
        icon: '/umbrella-icon-teal.jpg',
        title: 'Verzekeren',
        href: '#',
      },
      {
        icon: '/house-icon-teal.jpg',
        title: 'Hypotheken',
        href: '#',
      },
      {
        icon: '/money-bag-icon-teal.jpg',
        title: 'Lenen',
        href: '#',
      },
      {
        icon: '/chart-icon-teal.jpg',
        title: 'Beleggen',
        href: '#',
      },
      {
        icon: '/piggy-bank-icon-teal.jpg',
        title: 'Sparen',
        href: '#',
      },
      {
        icon: '/retirement-icon-teal.jpg',
        title: 'Pensioen',
        href: '#',
      },
    ],
  };

  return (
    <section className="py-8 md:py-12 bg-gray-50" key={id}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {fields.cards.map((card, index) => (
            <Link
              key={index}
              href={card.href}
              className="flex items-center gap-3 md:gap-4 p-4 md:p-5 bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors group"
            >
              <Image
                src={card.icon || '/placeholder.svg'}
                alt=""
                width={56}
                height={56}
                className="flex-shrink-0"
              />
              <span className="text-gray-900 font-normal text-base md:text-lg flex-1">
                {card.title}
              </span>
              <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
