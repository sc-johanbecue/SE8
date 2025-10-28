import React, { JSX } from 'react';
import {
  TextField,
  Text,
  LinkField,
  Link as JssLink,
  ImageField,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';
import Link from 'next/link';
import Image from 'next/image';

type FooterLink = {
  fields: {
    Link: LinkField;
  };
};

type SocialLink = {
  fields: {
    Icon: ImageField;
    Link: LinkField;
  };
};

type Fields = {
  TopLinks: FooterLink[];
  BottomLinks: FooterLink[];
  SocialLinks: SocialLink[];
  Copyright: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;

  return (
    <div className="bg-white text-[#005e5d]" key={id}>
      <div className="container mx-auto px-4 py-6 md:py-8">
        {/* Desktop Layout */}
        <div className="hidden md:flex md:flex-col gap-4">
          {/* Top row: Links and Social */}
          <div className="flex justify-between items-start">
            {/* Links */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {props.fields.TopLinks.map((link, index) => (
                <JssLink
                  key={index}
                  field={link.fields.Link}
                  className="text-sm hover:underline underline-offset-4"
                />
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {props.fields.SocialLinks.map((social, index) => {
                return (
                  <Link
                    key={index}
                    href={social.fields.Link.value.href || '#'}
                    aria-label={social.fields.Link.value.text}
                    className="hover:opacity-70"
                  >
                    <Image
                      className="w-6 h-6"
                      src={social.fields.Icon.value?.src as string}
                      alt=""
                      width={6}
                      height={6}
                    />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Bottom row: More links and Copyright */}
          <div className="flex justify-between items-center">
            {/* Bottom Links */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {props.fields.BottomLinks.map((link, index) => (
                <JssLink
                  key={index}
                  field={link.fields.Link}
                  className="text-sm hover:underline underline-offset-4"
                />
              ))}
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-600">
              <Text field={props.fields.Copyright} />
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col md:hidden gap-6">
          {/* All Links Stacked */}
          <div className="flex flex-col gap-3">
            {[...props.fields.TopLinks, ...props.fields.BottomLinks].map((link, index) => (
              <JssLink
                key={index}
                field={link.fields.Link}
                className="text-sm hover:underline underline-offset-4"
              />
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-6">
            {props.fields.SocialLinks.map((social, index) => {
              return (
                <Link
                  key={index}
                  href={social.fields.Link.value.href || '#'}
                  aria-label={social.fields.Link.value.text}
                  className="hover:opacity-70"
                >
                  <Image
                    className="w-6 h-6"
                    src={social.fields.Icon.value?.src as string}
                    alt=""
                    width={6}
                    height={6}
                  />
                </Link>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-600 text-center">
            <Text field={props.fields.Copyright} />
          </div>
        </div>
      </div>
    </div>
  );
};
