import React, { JSX } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  serviceSection: {
    title: string;
    description: string;
    ctaLink: {
      text: string;
      href: string;
    };
    links: FooterLink[];
  };
  columns: FooterColumn[];
  bottomLinks: FooterLink[];
  socialLinks: Array<{
    icon: string;
    href: string;
    label: string;
  }>;
  copyright: string;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const fields: Fields = {
    serviceSection: {
      title: 'Service en Contact',
      description: 'Bekijk op de pagina Service & Contact hoe we je vooruit kunnen helpen.',
      ctaLink: {
        text: 'Naar Service en Contact',
        href: '#',
      },
      links: [
        { text: 'Betaalpas kwijt of gestolen', href: '#' },
        { text: 'Algemeen opzeggen', href: '#' },
        { text: 'Adres wijzigen', href: '#' },
        { text: 'Lid algemene vergadering', href: '#' },
        { text: 'Toegankelijkheid bankieren', href: '#' },
      ],
    },
    columns: [
      {
        title: 'Producten',
        links: [
          { text: 'Betalen & Creditcard', href: '#' },
          { text: 'Hypotheken', href: '#' },
          { text: 'Geld lenen', href: '#' },
          { text: 'Sparen', href: '#' },
          { text: 'Verzekeringen', href: '#' },
          { text: 'Pensioen', href: '#' },
        ],
      },
      {
        title: 'Je situatie',
        links: [
          { text: 'Ouder & kinderen', href: '#' },
          { text: 'Wonen', href: '#' },
          { text: 'Preferred Banking', href: '#' },
          { text: 'Senioren', href: '#' },
          { text: 'Ondernemer', href: '#' },
        ],
      },
      {
        title: 'Digitale diensten',
        links: [
          { text: 'Internet Bankieren', href: '#' },
          { text: 'Mobiel Bankieren', href: '#' },
          { text: 'ABN AMRO app', href: '#' },
          { text: 'Grip op je geld', href: '#' },
          { text: 'Apple Pay', href: '#' },
          { text: 'Google Pay', href: '#' },
          { text: 'Veilig bankieren', href: '#' },
        ],
      },
      {
        title: 'Meest gezocht',
        links: [
          { text: 'Hypotheek Berekenen', href: '#' },
          { text: 'Actuele rentetarieven', href: '#' },
          { text: 'Creditcard', href: '#' },
          { text: 'Werkelijk rendement box 3', href: '#' },
          { text: 'Ledenfilter', href: '#' },
          { text: 'Grip op je geld', href: '#' },
          { text: 'Betaalpas blokkeren', href: '#' },
        ],
      },
      {
        title: 'Laatste berichten',
        links: [
          { text: 'Grip op je geld', href: '#' },
          { text: 'Betaalpas blokkeren', href: '#' },
          { text: 'Betaalpas verzorgen', href: '#' },
          { text: 'Bankrekening openen', href: '#' },
          { text: 'Hulp bij geldzaken', href: '#' },
        ],
      },
      {
        title: 'Meer gezocht',
        links: [
          { text: 'Hypotheek Berekenen', href: '#' },
          { text: 'Actuele rentetarieven', href: '#' },
          { text: 'Creditcard', href: '#' },
          { text: 'Werkelijk rendement box 3', href: '#' },
          { text: 'Ledenfilter', href: '#' },
        ],
      },
    ],
    bottomLinks: [
      { text: 'Over ABN AMRO', href: '#' },
      { text: 'Maatschappelijk', href: '#' },
      { text: 'Werken bij ABN AMRO', href: '#' },
      { text: 'Toegankelijkheid', href: '#' },
      { text: 'Omgevingswet', href: '#' },
      { text: 'Duurzaamheid', href: '#' },
      { text: 'Veiligheid', href: '#' },
      { text: 'Privacy', href: '#' },
      { text: 'Disclaimer', href: '#' },
      { text: 'Cookie-instellingen', href: '#' },
    ],
    socialLinks: [
      {
        icon: '/placeholder.svg?height=24&width=24',
        href: '#',
        label: 'Facebook',
      },
      {
        icon: '/placeholder.svg?height=24&width=24',
        href: '#',
        label: 'LinkedIn',
      },
      {
        icon: '/placeholder.svg?height=24&width=24',
        href: '#',
        label: 'YouTube',
      },
      {
        icon: '/placeholder.svg?height=24&width=24',
        href: '#',
        label: 'Instagram',
      },
    ],
    copyright: '© 2025 ABN AMRO',
  };

  return (
    <footer className="bg-teal-900 text-white" key={id}>
      {/* Service section */}
      <div className="border-b border-teal-800">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl">
            <h2 className="text-xl md:text-2xl font-bold mb-2">{fields.serviceSection.title}</h2>
            <p className="text-teal-100 mb-4">{fields.serviceSection.description}</p>
            <Link
              href={fields.serviceSection.ctaLink.href}
              className="inline-flex items-center gap-2 text-white font-semibold hover:underline mb-6"
            >
              <span>{fields.serviceSection.ctaLink.text}</span>
              <Image src="/placeholder.svg?height=16&width=16" alt="" width={16} height={16} />
            </Link>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {fields.serviceSection.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-teal-100 hover:text-white"
                  >
                    <Image
                      src="/placeholder.svg?height=16&width=16"
                      alt=""
                      width={16}
                      height={16}
                    />
                    <span className="hover:underline">{link.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Main footer columns */}
      <div className="border-b border-teal-800">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {fields.columns.map((column, index) => (
              <div key={index}>
                <h3 className="font-bold mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-teal-100 hover:text-white hover:underline"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
            {fields.bottomLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-teal-100 hover:text-white hover:underline"
              >
                {link.text}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {fields.socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                aria-label={social.label}
                className="hover:opacity-80"
              >
                <Image
                  src={social.icon || '/placeholder.svg'}
                  alt={social.label}
                  width={24}
                  height={24}
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="text-center md:text-left mt-4 text-sm text-teal-100">
          {fields.copyright}
        </div>
      </div>
    </footer>
  );
};
