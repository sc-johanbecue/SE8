import React, { JSX } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ComponentParams, ComponentRendering } from '@sitecore-content-sdk/nextjs';

type FooterLink = {
  text: string;
  href: string;
};

type FooterColumn = {
  title: string;
  links: FooterLink[];
};

type Fields = {
  columns: FooterColumn[];
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const fields: Fields = {
    columns: [
      {
        title: 'Producten',
        links: [
          { text: 'Betalen & Creditcards', href: '#' },
          { text: 'Hypotheken', href: '#' },
          { text: 'Geld lenen', href: '#' },
          { text: 'Beleggen', href: '#' },
          { text: 'Sparen', href: '#' },
          { text: 'Verzekeringen', href: '#' },
          { text: 'Pensioen', href: '#' },
        ],
      },
      {
        title: 'Je situatie',
        links: [
          { text: 'Ouders & kinderen', href: '#' },
          { text: 'Wonen', href: '#' },
          { text: 'Studeren', href: '#' },
          { text: 'Preferred Banking', href: '#' },
          { text: 'Senioren', href: '#' },
          { text: 'Ondernemers', href: '#' },
        ],
      },
      {
        title: 'Digitale diensten',
        links: [
          { text: 'Internet Bankieren', href: '#' },
          { text: 'ABN AMRO app', href: '#' },
          { text: 'Tikkie', href: '#' },
          { text: 'Apple Pay', href: '#' },
          { text: 'Google Pay', href: '#' },
          { text: 'Veilig bankieren', href: '#' },
        ],
      },
      {
        title: 'Meest gezocht',
        links: [
          { text: 'Hypotheek berekenen', href: '#' },
          { text: 'E.dentifier', href: '#' },
          { text: 'Jaaroverzicht', href: '#' },
          { text: 'Rood staan', href: '#' },
        ],
      },
    ],
  };

  return (
    <div className="bg-[#005e5d] text-white" key={id}>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {fields.columns.map((column, index) => (
            <div key={index}>
              <h3 className="text-lg md:text-xl font-normal mb-4 md:mb-6">{column.title}</h3>
              <ul className="space-y-2 md:space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-2 text-white hover:underline underline-offset-4"
                    >
                      <ArrowRight className="w-4 h-4 flex-shrink-0" />
                      <span className="border-b border-white">{link.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
