import React, { JSX } from 'react';
import { Check, ChevronRight } from 'lucide-react';
import {
  TextField,
  ImageField,
  LinkField,
  Text,
  Image as JssImage,
  Link as JssLink,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

type Feature = {
  fields: {
    Text: TextField;
  };
};

type Field = {
  Image: ImageField;
  Title: TextField;
  Features: Feature[];
  PrimaryLinkText: TextField;
  PrimaryLink: LinkField;
  SecondaryLinkText: TextField;
  SecondaryLink: LinkField;
  FeaturedText: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Field;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;

  return (
    <div key={id} className="flex flex-col">
      {/* Featured Badge - positioned above card */}
      <div className="h-12 mb-0">
        {props.fields.FeaturedText.value != '' && (
          <Text
            tag="div"
            field={props.fields.FeaturedText}
            className="bg-[#00695f] text-white text-center py-3 px-4 font-semibold uppercase text-sm tracking-wide rounded-t-lg h-full flex items-center justify-center"
          />
        )}
      </div>

      {/* Card with border when featured */}
      <div
        className={`bg-white shadow-md overflow-hidden flex flex-col flex-grow ${
          props.fields.FeaturedText.value != ''
            ? 'border-2 border-[#00695f] rounded-b-lg'
            : 'rounded-lg'
        }`}
      >
        {/* Card Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Icon */}
          <div className="mb-4">
            <JssImage
              field={props.fields.Image}
              width={60}
              height={60}
              className="object-contain"
            />
          </div>

          {/* Title */}
          <Text
            tag="h3"
            field={props.fields.Title}
            className="text-xl lg:text-2xl font-bold mb-4 text-gray-900"
          />

          {/* Features List */}
          <ul className="space-y-3 mb-6 flex-grow">
            {props.fields.Features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#00695f] flex-shrink-0 mt-0.5" />
                <Text
                  tag="span"
                  field={feature.fields.Text}
                  className="text-gray-700 text-sm lg:text-base"
                />
              </li>
            ))}
          </ul>

          {/* Primary CTA Button */}
          <JssLink
            field={props.fields.PrimaryLink}
            className="block w-full bg-[#ffcc00] hover:bg-[#e6b800] text-gray-900 font-semibold py-3 px-6 rounded text-center transition-colors mb-4"
          >
            <Text field={props.fields.PrimaryLinkText} />
          </JssLink>

          {/* Secondary Link */}
          {props.fields.SecondaryLink && (
            <JssLink
              field={props.fields.SecondaryLink}
              className="group flex items-center gap-1 text-[#00695f] hover:text-[#004d40] font-medium text-sm underline transition-colors"
            >
              <Text tag="span" field={props.fields.SecondaryLinkText} />
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </JssLink>
          )}
        </div>
      </div>
    </div>
  );
};
