import React, { JSX } from 'react';
import Link from 'next/link';
import {
  ChevronDown,
  ChevronUp,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from 'lucide-react';
import { ComponentParams, ComponentRendering } from '@sitecore-content-sdk/nextjs';

interface Fields {
  HelpfulLinks: { title: string; link: string }[];
  AboutUs: { title: string; link: string }[];
  AboutUsCollapsible: { title: string; items: { title: string; link: string }[] };
  KeepingSafe: { title: string; link: string }[];
  OurWebsite: { title: string; link: string }[];
  SocialLinks: { platform: string; link: string }[];
  ExploreMore: {
    title: string;
    sections: { title: string; items: { title: string; link: string }[] }[];
  };
}

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

type FooterColumnProps = {
  title: string;
  items: { title: string; link: string }[];
};

const FooterColumn = ({ title, items }: FooterColumnProps) => (
  <div>
    <h3 className="font-bold text-gray-600 mb-3 md:mb-4 uppercase text-sm">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index}>
          <Link href={item.link} className="text-[#ff6600] hover:underline text-sm">
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

type ExploreSectionButtonProps = {
  section: { title: string; items: { title: string; link: string }[] };
  isExpanded: boolean;
  onClick: () => void;
};

const ExploreSectionButton = ({ section, isExpanded, onClick }: ExploreSectionButtonProps) => (
  <button onClick={onClick} className="flex items-center text-[#ff6600] text-sm hover:underline">
    {section.title}
    {isExpanded ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
  </button>
);

type SocialLinksProps = {
  socialLinks: { platform: string; link: string }[];
  getSocialIcon: (platform: string) => React.ReactNode;
};

const SocialLinks = ({ socialLinks, getSocialIcon }: SocialLinksProps) => (
  <div className="flex items-center gap-4">
    {socialLinks.map((social, index) => (
      <Link key={index} href={social.link} className="text-[#ff6600] hover:opacity-80">
        {getSocialIcon(social.platform)}
      </Link>
    ))}
  </div>
);

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;

  const [expandedSection, setExpandedSection] = React.useState<string | null>(null);

  const fields = {
    HelpfulLinks: footerData.helpfulLinks,
    AboutUs: footerData.aboutUs,
    AboutUsCollapsible: footerData.aboutUsCollapsible,
    KeepingSafe: footerData.keepingSafe,
    OurWebsite: footerData.ourWebsite,
    SocialLinks: footerData.socialLinks,
    ExploreMore: footerData.exploreMore,
  };

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'instagram':
        return <Instagram className="w-6 h-6" />;
      case 'facebook':
        return <Facebook className="w-6 h-6" />;
      case 'twitter':
        return <Twitter className="w-6 h-6" />;
      case 'linkedin':
        return <Linkedin className="w-6 h-6" />;
      case 'youtube':
        return <Youtube className="w-6 h-6" />;
      default:
        return null;
    }
  };

  const footerColumns = [
    { title: 'HELPFUL LINKS', items: fields.HelpfulLinks },
    { title: 'ABOUT US', items: fields.AboutUs },
    { title: 'KEEPING SAFE', items: fields.KeepingSafe },
    { title: 'OUR WEBSITE', items: fields.OurWebsite },
  ];

  return (
    <footer className="bg-[#f5f5f5] text-gray-700" key={id}>
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-8">
          {footerColumns.map((column, index) => (
            <FooterColumn key={index} title={column.title} items={column.items} />
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-6"></div>

        {/* Offer conditions and social links */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <button className="flex items-center text-[#ff6600] text-sm">
            *Offer conditions
            <ChevronDown className="w-4 h-4 ml-1" />
          </button>

          <SocialLinks socialLinks={fields.SocialLinks} getSocialIcon={getSocialIcon} />
        </div>

        {/* Explore more section */}
        <div className="border-t border-gray-300 pt-6">
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <span className="text-gray-700 text-sm">{fields.ExploreMore.title}</span>

              {/* Desktop - Horizontal dropdowns */}
              <div className="hidden md:flex flex-wrap items-center gap-4">
                {fields.ExploreMore.sections.map((section, index) => (
                  <ExploreSectionButton
                    key={index}
                    section={section}
                    isExpanded={expandedSection === section.title}
                    onClick={() =>
                      setExpandedSection(expandedSection === section.title ? null : section.title)
                    }
                  />
                ))}
              </div>

              {/* Mobile - Vertical dropdowns */}
              <div className="md:hidden space-y-2">
                {fields.ExploreMore.sections.map((section, index) => (
                  <div key={index}>
                    <button
                      onClick={() =>
                        setExpandedSection(expandedSection === section.title ? null : section.title)
                      }
                      className="flex items-center justify-between w-full text-[#ff6600] text-sm py-2"
                    >
                      {section.title}
                      {expandedSection === section.title ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>

                    {expandedSection === section.title && (
                      <ul className="space-y-2 pl-4 pb-2">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <Link
                              href={item.link}
                              className="text-[#ff6600] hover:underline text-sm"
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {expandedSection && (
              <div className="hidden md:block bg-[#f5f5f5] border-t border-gray-300 pt-6">
                {fields.ExploreMore.sections
                  .filter((section) => section.title === expandedSection)
                  .map((section, index) => (
                    <div key={index}>
                      <h4 className="font-bold text-gray-900 mb-4">{section.title}</h4>
                      <div className="grid grid-cols-4 gap-x-8 gap-y-3">
                        {section.items.map((item, itemIndex) => (
                          <Link
                            key={itemIndex}
                            href={item.link}
                            className="text-[#ff6600] hover:underline text-sm"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

const footerData = {
  helpfulLinks: [
    { title: 'Help centre', link: '#' },
    { title: 'Assisted Travel', link: '#' },
    { title: 'Download the app', link: '#' },
    { title: 'Booking conditions', link: '#' },
  ],
  aboutUs: [
    { title: 'Media Centre', link: '#' },
    { title: 'Investors', link: '#' },
    { title: 'Modern Slavery Act', link: '#' },
    { title: 'Terms of use', link: '#' },
    { title: 'Affiliates', link: '#' },
  ],
  aboutUsCollapsible: {
    title: 'Find your perfect holiday',
    items: [
      { title: 'Modern Slavery Act', link: '#' },
      { title: 'Terms of use', link: '#' },
      { title: 'Affiliates', link: '#' },
    ],
  },
  keepingSafe: [
    { title: 'ATOL protected', link: '#' },
    { title: 'Travel aware', link: '#' },
    { title: 'FCDO travel advice', link: '#' },
    { title: 'ABTA', link: '#' },
    { title: 'Reviews policy', link: '#' },
  ],
  ourWebsite: [
    { title: 'Accessibility', link: '#' },
    { title: 'Contact us', link: '#' },
    { title: 'Group cookie notice', link: '#' },
    { title: 'Privacy policy', link: '#' },
    { title: 'Sitemap', link: '#' },
  ],
  socialLinks: [
    { platform: 'instagram', link: '#' },
    { platform: 'facebook', link: '#' },
    { platform: 'twitter', link: '#' },
    { platform: 'linkedin', link: '#' },
    { platform: 'youtube', link: '#' },
  ],
  exploreMore: {
    title: 'Explore more holidays and flights',
    sections: [
      {
        title: 'Holiday Types',
        items: [
          { title: 'Beach holidays', link: '#' },
          { title: 'City breaks', link: '#' },
          { title: 'Family holidays', link: '#' },
          { title: 'Ski holidays', link: '#' },
        ],
      },
      {
        title: 'Holiday Deals',
        items: [
          { title: 'Cheap Holiday Deals', link: '#' },
          { title: 'Cheap All Inclusive Holiday Deals', link: '#' },
          { title: 'Cheap Family Holiday Deals', link: '#' },
          { title: 'Cheap Summer City Breaks', link: '#' },
          { title: 'Cheap School Holiday Deals', link: '#' },
          { title: 'Cheap Spain Holiday Deals', link: '#' },
          { title: 'Cheap Greece Holiday Deals', link: '#' },
          { title: 'Cheap Portugal Holiday Deals', link: '#' },
          { title: 'Cheap Italy Holiday Deals', link: '#' },
          { title: 'Cheap Turkey Holiday Deals', link: '#' },
          { title: 'Free child places', link: '#' },
          { title: 'Discounted holidays', link: '#' },
          { title: 'Holiday offers', link: '#' },
        ],
      },
      {
        title: 'Popular Countries',
        items: [
          { title: 'Spain', link: '#' },
          { title: 'Greece', link: '#' },
          { title: 'Portugal', link: '#' },
          { title: 'Italy', link: '#' },
          { title: 'Turkey', link: '#' },
          { title: 'France', link: '#' },
        ],
      },
      {
        title: 'Popular Destinations',
        items: [
          { title: 'Alicante', link: '#' },
          { title: 'Barcelona', link: '#' },
          { title: 'Malaga', link: '#' },
          { title: 'Palma', link: '#' },
          { title: 'Faro', link: '#' },
          { title: 'Nice', link: '#' },
        ],
      },
      {
        title: 'Flight Only',
        items: [
          { title: 'Cheap flights', link: '#' },
          { title: 'Last minute flights', link: '#' },
          { title: 'Flight deals', link: '#' },
          { title: 'Low fare finder', link: '#' },
        ],
      },
      {
        title: 'Top hotels',
        items: [
          { title: 'Hotels in Spain', link: '#' },
          { title: 'Hotels in Greece', link: '#' },
          { title: 'Hotels in Portugal', link: '#' },
          { title: 'Hotels in Italy', link: '#' },
        ],
      },
    ],
  },
};
