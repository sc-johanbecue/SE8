import {
  ComponentParams,
  ComponentRendering,
  TextField,
  LinkField,
  Link as JssLink,
  GetStaticComponentProps,
} from '@sitecore-content-sdk/nextjs';
import { FaPhone, FaEnvelope, FaClock } from 'react-icons/fa6';
import * as FaIcons6 from 'react-icons/fa6';
import React, { JSX, useState } from 'react';
import { GraphQLClient, gql } from 'graphql-request';
import { getColorCssVars } from '../../lib/SolutionEngineering/XMC-ColorPalette';

interface HeaderTopFields {
  PhoneNumber: TextField;
  Email: TextField;
  Hours: TextField;
  AppointmentLink: LinkField;
}

type SocialItem = {
  id: string;
  icon: TextField;
  link: {
    jsonValue: LinkField;
  };
};

type LayoutSocialQueryResult = {
  layout?: {
    item?: {
      parent?: {
        socials?: {
          targetItems?: SocialItem[];
        };
      };
    };
  };
};

type ColorCssVars = {
  cssVar: string;
  contrastCssVar: string;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: HeaderTopFields;
  socials: SocialItem[];
  backgroundColor: ColorCssVars;
  hoverBackgroundColor: ColorCssVars;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const iconMap = {
    ...FaIcons6,
  } as Record<
    string,
    React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>
  >;

  const SocialIcon: React.FC<{ name: string }> = ({ name }) => {
    const Icon = iconMap[name];
    const [hovered, setHovered] = useState(false);

    if (!Icon) {
      console.warn(`[HeaderTop] Icon "${name}" not found.`);
      return null;
    }

    return (
      <span
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="inline-flex items-center justify-center w-8 h-8 rounded transition-all duration-200 transform hover:scale-110"
        style={{
          backgroundColor: hovered
            ? `var(${props.hoverBackgroundColor.cssVar})`
            : `var(${props.backgroundColor.contrastCssVar})`,
        }}
      >
        <Icon
          size={16}
          style={{
            color: hovered
              ? `var(${props.hoverBackgroundColor.contrastCssVar})`
              : `var(${props.backgroundColor.cssVar})`,
            transition: 'color 0.2s ease',
          }}
        />
      </span>
    );
  };

  return (
    <div className="w-full border-b border-gray-200 bg-white text-sm text-gray-700">
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-xs md:text-sm">
          {props.fields.PhoneNumber?.value && (
            <span className="flex items-center gap-1">
              <FaPhone className="text-blue-600" />
              <span className="text-blue-600 font-medium">{props.fields.PhoneNumber.value}</span>
            </span>
          )}
          {props.fields.Email?.value && (
            <span className="flex items-center gap-1">
              <FaEnvelope className="text-gray-500" />
              <span>{props.fields.Email.value}</span>
            </span>
          )}
          {props.fields.Hours?.value && (
            <span className="flex items-center gap-1 text-gray-500">
              <FaClock />
              <span>{props.fields.Hours.value}</span>
            </span>
          )}
        </div>

        {/* Socials + CTA */}
        <div className="flex items-center gap-2">
          {(props.socials ?? []).map((item) => {
            const iconName = typeof item.icon.value === 'string' ? item.icon.value : '';
            return iconName && item.link?.jsonValue?.value?.href ? (
              <a
                key={item.id}
                href={item.link.jsonValue.value.url as string}
                target={item.link.jsonValue.value.target || '_self'}
                className="group"
                aria-label={item.link.jsonValue.value.text}
              >
                <SocialIcon name={iconName} />
              </a>
            ) : null;
          })}
          <JssLink field={props.fields.AppointmentLink}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded text-sm font-semibold whitespace-nowrap">
              MAKE AN APPOINTMENT
            </button>
          </JssLink>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticComponentProps = async (_rendering, _layoutData, context) => {
  const siteName = process.env.NEXT_PUBLIC_SITECORE_SITE_NAME;
  const language = context?.locale || 'en';

  const query = gql`
    query GetSiteSocialsFromLayout {
      layout(site: "${siteName}", routePath: "/", language: "${language}") {
        item {
          parent {
            socials: field(name: "socials") {
              ... on MultilistField {
                targetItems {
                  id
                  icon: field(name: "Icon") {
                    value
                  }
                  link: field(name: "Link") {
                    jsonValue
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const endpoint = `${process.env.NEXT_PUBLIC_SITECORE_GRAPHQL_ENDPOINT}?sc_apikey=${process.env.NEXT_PUBLIC_SITECORE_API_KEY}`;
  const client = new GraphQLClient(endpoint);

  let socials: SocialItem[] = [];

  try {
    const data = await client.request<LayoutSocialQueryResult>(query);
    const targetItems = data.layout?.item?.parent?.socials?.targetItems;
    if (targetItems) {
      socials = targetItems;
    }
  } catch (error) {
    console.warn('[HeaderTop] Failed to fetch socials from layout query:', error);
  }

  const backgroundColor = await getColorCssVars(_rendering.params?.['Background Color'], language);
  const hoverBackgroundColor = await getColorCssVars(
    _rendering.params?.['Hover Background Color'],
    language
  );

  return {
    socials,
    backgroundColor,
    hoverBackgroundColor,
  };
};
