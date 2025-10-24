import React, { JSX } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ComponentParams, ComponentRendering } from '@sitecore-content-sdk/nextjs';

type InfoLink = {
  text: string;
  href: string;
};

type InfoColumn = {
  icon: string;
  title: string;
  links: InfoLink[];
};

type Fields = {
  columns: InfoColumn[];
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
        icon: '/people-icon-teal.jpg',
        title: 'Je situatie',
        links: [
          { text: 'Preferred Banking', href: '#' },
          { text: 'Studenten', href: '#' },
          { text: 'Ouder en kind', href: '#' },
          { text: 'Senioren', href: '#' },
          { text: 'Overlijden melden', href: '#' },
        ],
      },
      {
        icon: '/laptop-screen-icon-teal.jpg',
        title: 'Direct regelen',
        links: [
          { text: 'Lening inzien in Internet Bankieren', href: '#' },
          { text: 'Betaalpas blokkeren', href: '#' },
          { text: 'Betaalpas vervangen', href: '#' },
          { text: 'Bankrekening openen', href: '#' },
          { text: 'Hulp bij geldzaken', href: '#' },
        ],
      },
      {
        icon: '/folder-magnifying-glass-icon-teal.jpg',
        title: 'Meest gezocht',
        links: [
          { text: 'Hypotheek Berekenen', href: '#' },
          { text: 'Actuele spaarrente', href: '#' },
          { text: 'Creditcard', href: '#' },
          { text: 'Werkelijk rendement box 3', href: '#' },
          { text: 'E.dentifier', href: '#' },
        ],
      },
    ],
  };

  return (
    <section className="py-12 md:py-16 bg-gray-50" key={id}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {fields.columns.map((column, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-6">
                <img src={column.icon || '/placeholder.svg'} alt="" className="w-16 h-16 mb-4" />
                <h2 className="text-2xl font-semibold text-gray-900">{column.title}</h2>
              </div>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-[#00857d] hover:text-[#006d66] group"
                    >
                      <ArrowRight className="w-4 h-4 flex-shrink-0" />
                      <span className="underline group-hover:no-underline">{link.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
