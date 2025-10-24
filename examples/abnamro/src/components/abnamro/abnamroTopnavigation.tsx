import React, { JSX } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ComponentParams, ComponentRendering } from '@sitecore-content-sdk/nextjs';

type Fields = {
  logo: {
    src: string;
    alt: string;
  };
  topLinks: Array<{
    text: string;
    href: string;
  }>;
  loginButton: {
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
    logo: {
      src: '/abn-amro-logo.jpg',
      alt: 'ABN AMRO',
    },
    topLinks: [
      { text: 'Privé', href: '#' },
      { text: 'Zakelijk', href: '#' },
      { text: 'Private banking', href: '#' },
      { text: 'English', href: '#' },
    ],
    loginButton: {
      text: 'Inloggen',
      href: '#',
    },
  };

  return (
    <header className="bg-white border-b border-gray-200" key={id}>
      <div className="container mx-auto px-4">
        {/* Top bar - desktop only */}
        <div className="hidden md:flex items-center justify-between py-3 border-b border-gray-200">
          <Link href="/" className="flex items-center">
            <Image
              src={fields.logo.src || '/placeholder.svg'}
              alt={fields.logo.alt}
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
          <div className="flex items-center gap-6">
            {fields.topLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-sm text-gray-700 hover:text-gray-900"
              >
                {link.text}
              </Link>
            ))}
            <Link
              href={fields.loginButton.href}
              className="inline-flex items-center gap-2 px-4 py-2 bg-teal-700 text-white text-sm font-medium rounded hover:bg-teal-800"
            >
              <Image src="/lock-icon.png" alt="" width={16} height={16} />
              {fields.loginButton.text}
            </Link>
          </div>
        </div>

        {/* Mobile header */}
        <div className="flex md:hidden items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <Image
              src={fields.logo.src || '/placeholder.svg'}
              alt={fields.logo.alt}
              width={100}
              height={32}
              className="h-6 w-auto"
            />
          </Link>
          <div className="flex items-center gap-4">
            <button className="text-gray-700">
              <Image src="/search-icon.png" alt="Search" width={24} height={24} />
            </button>
            <button className="text-gray-700">
              <Image src="/menu-icon.png" alt="Menu" width={24} height={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
