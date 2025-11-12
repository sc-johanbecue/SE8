import React, { JSX } from 'react';
import {
  Text,
  Image as JssImage,
  Link as JssLink,
  type Field,
  type ImageField,
  type LinkField,
  ComponentParams,
  ComponentRendering,
  Item,
} from '@sitecore-content-sdk/nextjs';

type FooterColumn = Item & {
  fields: {
    heading: Field<string>;
    links: Array<{
      fields: {
        title: Field<string>;
        link: LinkField;
      };
    }>;
  };
};

type SocialLink = Item & {
  fields: {
    platform: Field<string>;
    url: LinkField;
    icon: Field<string>;
  };
};

type FooterFields = {
  Logo: ImageField;
  columns: FooterColumn[];
  socialLinks: SocialLink[];
  copyrightText: Field<string>;
  legalLinks: Array<{
    fields: {
      title: Field<string>;
      link: LinkField;
    };
  }>;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: FooterFields;
};

/**
 * Footer Component
 * Site footer with navigation columns and social links
 */
export const Default = (props: ComponentProps): JSX.Element => {
  return (
    <footer className="bg-[#003087] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo Column */}
          <div className="lg:col-span-1">
            <JssImage field={props.fields.Logo} className="h-10 w-auto mb-6" />
          </div>

          {/* Navigation Columns */}
          {props.fields.columns?.map((column, index) => (
            <div key={index}>
              <Text tag="h3" className="font-bold text-lg mb-4" field={column.fields.heading} />
              <ul className="space-y-2">
                {column.fields.links?.map((linkItem, linkIndex) => (
                  <li key={linkIndex}>
                    <JssLink
                      field={linkItem.fields.link}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {linkItem.fields.title.value}
                    </JssLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-blue-700">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-4">
              {props.fields.socialLinks?.map((social, index) => (
                <JssLink
                  key={index}
                  field={social.fields.url}
                  className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <span dangerouslySetInnerHTML={{ __html: social.fields.icon.value || '' }} />
                </JssLink>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#002066] py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-300">
            <Text tag="p" field={props.fields.copyrightText} />
            <div className="flex flex-wrap gap-4">
              {props.fields.legalLinks?.map((link, index) => (
                <JssLink
                  key={index}
                  field={link.fields.link}
                  className="hover:text-white transition-colors"
                >
                  {link.fields.title.value}
                </JssLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
