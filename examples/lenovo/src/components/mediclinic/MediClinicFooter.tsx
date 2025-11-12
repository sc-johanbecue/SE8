'use client';

import React, { JSX } from 'react';
import {
  Item,
  Text,
  Image as JssImage,
  Link as JssLink,
  TextField,
  ImageField,
  LinkField,
  RichTextField,
  RichText,
  Placeholder,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';
import { Facebook, Instagram, Linkedin, Youtube, ChevronUp } from 'lucide-react';
import { TbBrandTiktok } from 'react-icons/tb';
import { FaRss } from 'react-icons/fa';

type FooterLink = Item & {
  fields: {
    Link: LinkField;
  };
};

type FooterColumn = Item & {
  fields: {
    Title: TextField;
    Links: FooterLink[];
  };
};

type SocialLink = Item & {
  fields: {
    Platform: TextField;
    Link: LinkField;
  };
};

type MediClinicFooterFields = {
  Logo: ImageField;
  GroupHeading: TextField;
  GroupDescription: RichTextField;
  FollowUsText: TextField;
  SocialLinks: SocialLink[];
  EmergencyLabel: TextField;
  EmergencyNumber: TextField;
  Columns: FooterColumn[];
  CopyrightText: TextField;
  LegalLinks: FooterLink[];
  ContactLink: LinkField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: MediClinicFooterFields;
};

const socialIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  facebook: Facebook,
  instagram: Instagram,
  tiktok: TbBrandTiktok,
  linkedin: Linkedin,
  youtube: Youtube,
  rss: FaRss,
};

/**
 * MediClinic Footer Component
 * Responsive footer with accordion on mobile, multi-column on desktop
 */
export const Default = (props: ComponentProps): JSX.Element => {
  const phFooterColumnsContainer = `MediClinicFooterColumnsContainer-${props.params.DynamicPlaceholderId}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 mb-8">
          {/* Group Description */}
          <div className="md:max-w-md">
            <Text
              tag="h2"
              field={props.fields.GroupHeading}
              className="text-gray-800 font-bold text-base md:text-sm uppercase tracking-wider mb-3"
            />
            <RichText
              tag="div"
              field={props.fields.GroupDescription}
              className="text-gray-600 text-sm leading-relaxed"
            />
          </div>

          {/* Follow Us Section */}
          <div>
            <Text
              tag="p"
              field={props.fields.FollowUsText}
              className="text-gray-800 font-bold text-base md:text-sm uppercase tracking-wider mb-4"
            />
            <div className="flex gap-3">
              {props.fields.SocialLinks?.map((social, index) => {
                const IconComponent =
                  socialIconMap[(social.fields.Platform?.value as string).toLowerCase()];
                return (
                  <JssLink
                    key={index}
                    field={social.fields.Link}
                    className="w-10 h-10 md:w-9 md:h-9 rounded-md bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors text-gray-700"
                  >
                    <IconComponent className="w-5 h-5 md:w-4 md:h-4" />
                  </JssLink>
                );
              })}
            </div>
          </div>
        </div>

        <div className="relative border-t border-gray-300 mb-8">
          <button
            onClick={scrollToTop}
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-300 rounded flex items-center justify-center hover:border-gray-400 transition-colors"
            aria-label="Back to top"
          >
            <ChevronUp className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Emergency Number */}
          <div className="hidden md:block">
            <JssImage field={props.fields.Logo} className="h-8 w-auto mb-6" />
            <Text
              tag="p"
              field={props.fields.EmergencyLabel}
              className="text-red-600 font-semibold text-sm mb-1"
            />
            <Text
              tag="p"
              field={props.fields.EmergencyNumber}
              className="text-red-600 font-bold text-4xl"
            />
          </div>

          {/* Mobile: Logo and Emergency at top */}
          <div className="md:hidden mb-6">
            <JssImage field={props.fields.Logo} className="h-8 w-auto mb-6" />
            <Text
              tag="p"
              field={props.fields.EmergencyLabel}
              className="text-red-600 font-semibold text-sm mb-1"
            />
            <Text
              tag="p"
              field={props.fields.EmergencyNumber}
              className="text-red-600 font-bold text-5xl"
            />
          </div>

          <Placeholder name={phFooterColumnsContainer} rendering={props.rendering} />
        </div>

        <div className="hidden md:flex items-center justify-between pt-6 border-t border-gray-200 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <Text tag="span" field={props.fields.CopyrightText} />
            {props.fields.LegalLinks?.map((item, index) => (
              <span key={index} className="flex items-center gap-2">
                <span>|</span>
                <JssLink
                  field={item.fields.Link}
                  className="hover:text-cyan-500 transition-colors"
                />
              </span>
            ))}
          </div>
          <JssLink
            field={props.fields.ContactLink}
            className="text-cyan-500 hover:text-cyan-600 transition-colors flex items-center gap-1"
          />
        </div>
      </div>
    </footer>
  );
};
