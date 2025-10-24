import React, { JSX } from 'react';
import Link from 'next/link';
import { Facebook, Linkedin, Youtube, Mail } from 'lucide-react';
import { ComponentParams, ComponentRendering } from '@sitecore-content-sdk/nextjs';

type FooterLink = {
  text: string;
  href: string;
};

type SocialLink = {
  icon: typeof Facebook;
  href: string;
  label: string;
};

type Fields = {
  topLinks: FooterLink[];
  bottomLinks: FooterLink[];
  socialLinks: SocialLink[];
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
    topLinks: [
      { text: 'Over ABN AMRO', href: '#' },
      { text: 'Klacht indienen', href: '#' },
      { text: 'Werken bij ABN AMRO', href: '#' },
      { text: 'Toegankelijkheid', href: '#' },
      { text: 'Omgangsregels', href: '#' },
    ],
    bottomLinks: [
      { text: 'Duurzaamheid', href: '#' },
      { text: 'Veiligheid', href: '#' },
      { text: 'Privacy', href: '#' },
      { text: 'Disclaimer', href: '#' },
      { text: 'Cookie-instellingen', href: '#' },
    ],
    socialLinks: [
      {
        icon: Facebook,
        href: '#',
        label: 'Facebook',
      },
      {
        icon: Linkedin,
        href: '#',
        label: 'LinkedIn',
      },
      {
        icon: Youtube,
        href: '#',
        label: 'YouTube',
      },
      {
        icon: Mail,
        href: '#',
        label: 'Email',
      },
    ],
    copyright: '© 2025 ABN AMRO',
  };

  return (
    <div className="bg-white text-[#005e5d]" key={id}>
      <div className="container mx-auto px-4 py-6 md:py-8">
        {/* Desktop Layout */}
        <div className="hidden md:flex md:flex-col gap-4">
          {/* Top row: Links and Social */}
          <div className="flex justify-between items-start">
            {/* Links */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {fields.topLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-sm hover:underline underline-offset-4"
                >
                  {link.text}
                </Link>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {fields.socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="hover:opacity-70"
                  >
                    <IconComponent className="w-6 h-6" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Bottom row: More links and Copyright */}
          <div className="flex justify-between items-center">
            {/* Bottom Links */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {fields.bottomLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-sm hover:underline underline-offset-4"
                >
                  {link.text}
                </Link>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-600">{fields.copyright}</div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col md:hidden gap-6">
          {/* All Links Stacked */}
          <div className="flex flex-col gap-3">
            {[...fields.topLinks, ...fields.bottomLinks].map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-sm hover:underline underline-offset-4"
              >
                {link.text}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-6">
            {fields.socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <Link
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="hover:opacity-70"
                >
                  <IconComponent className="w-6 h-6" />
                </Link>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-600 text-center">{fields.copyright}</div>
        </div>
      </div>
    </div>
  );
};
