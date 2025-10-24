import React, { JSX } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ComponentParams, ComponentRendering } from '@sitecore-content-sdk/nextjs';

type FooterLink = {
  text: string;
  href: string;
};

type Fields = {
  serviceContact: {
    title: string;
    links: FooterLink[];
  };
  helpSection: {
    title: string;
    description: string;
    ctaLink: {
      text: string;
      href: string;
    };
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
    serviceContact: {
      title: 'Service en Contact',
      links: [
        { text: 'Betaalpas kwijt of gestolen', href: '#' },
        { text: 'Daglimiet wijzigen', href: '#' },
        { text: 'Adres wijzigen', href: '#' },
        { text: 'Je gegevens controleren', href: '#' },
        { text: 'Toegankelijkheid: bankieren', href: '#' },
      ],
    },
    helpSection: {
      title: 'Hulp nodig?',
      description: 'Bekijk op de pagina Service & Contact hoe we je vooruit kunnen helpen.',
      ctaLink: {
        text: 'Naar Service en Contact',
        href: '#',
      },
    },
  };

  return (
    <div className="bg-[#0e6b6b] text-white" key={id}>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Service en Contact */}
          <div>
            <h2 className="text-xl md:text-2xl font-normal mb-6">{fields.serviceContact.title}</h2>
            <ul className="space-y-3">
              {fields.serviceContact.links.map((link, index) => (
                <li key={index}>
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

          {/* Hulp nodig */}
          <div>
            <h2 className="text-xl md:text-2xl font-normal mb-4">{fields.helpSection.title}</h2>
            <p className="text-white mb-6 leading-relaxed">{fields.helpSection.description}</p>
            <Link
              href={fields.helpSection.ctaLink.href}
              className="inline-flex items-center gap-2 text-white hover:underline underline-offset-4"
            >
              <span className="border-b border-white">{fields.helpSection.ctaLink.text}</span>
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
