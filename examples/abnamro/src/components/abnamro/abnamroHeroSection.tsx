import React, { JSX } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ComponentParams, ComponentRendering } from '@sitecore-content-sdk/nextjs';

type Fields = {
  backgroundImage: string;
  title: string;
  subtitle: string;
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
    backgroundImage: '/people-celebrating-outdoors.jpg',
    title: 'De hele wereld wil wat van je. Maar wat wil jij?',
    subtitle: 'Begin met een plan',
    ctaLink: {
      text: 'Plan je gesprek',
      href: '#',
    },
  };

  return (
    <section className="relative h-[400px] md:h-[500px] overflow-hidden" key={id}>
      <Image
        src={fields.backgroundImage || '/placeholder.svg'}
        alt=""
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 text-balance">
            {fields.title}
          </h1>
          <p className="text-xl md:text-2xl text-white mb-6">{fields.subtitle}</p>
          <Link
            href={fields.ctaLink.href}
            className="inline-block px-6 py-3 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition-colors"
          >
            {fields.ctaLink.text}
          </Link>
        </div>
      </div>
    </section>
  );
};
