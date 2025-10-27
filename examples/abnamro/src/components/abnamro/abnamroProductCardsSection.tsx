import React, { JSX } from 'react';
import { Check, ChevronRight } from 'lucide-react';
import {
  TextField,
  ImageField,
  LinkField,
  Text,
  Link as JssLink,
  Image as JssImage,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

type Feature = {
  fields: {
    Text: TextField;
  };
};

type Card = {
  fields: {
    Image: ImageField;
    Title: TextField;
    Features: Feature[];
    PrimaryLinkText: TextField;
    PrimaryLink: LinkField;
    SecondaryLinkText: TextField;
    SecondaryLink: LinkField;
    FeaturedText: TextField;
  };
};

type Fields = {
  Title: TextField;
  Cards: Card[];
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  return (
    <section className="py-12 md:py-16 lg:py-20" key={id}>
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        {/* Section Title */}
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8 lg:mb-12 text-gray-900">
          <Text field={props.fields.Title} />
        </h2>

        {/* Cards Grid */}
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:gap-12">
            {props.fields.Cards.map((card, index) => (
              <div key={index} className="flex flex-col">
                {/* Featured Badge - positioned above card */}
                <div className="h-12 mb-0">
                  {card.fields.FeaturedText.value != '' && (
                    <Text
                      tag="div"
                      field={card.fields.FeaturedText}
                      className="bg-[#00695f] text-white text-center py-3 px-4 font-semibold uppercase text-sm tracking-wide rounded-t-lg h-full flex items-center justify-center"
                    />
                  )}
                </div>

                {/* Card with border when featured */}
                <div
                  className={`bg-white shadow-md overflow-hidden flex flex-col flex-grow ${
                    card.fields.FeaturedText.value != ''
                      ? 'border-2 border-[#00695f] rounded-b-lg'
                      : 'rounded-lg'
                  }`}
                >
                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Icon */}
                    <div className="mb-4">
                      <JssImage
                        field={card.fields.Image}
                        width={60}
                        height={60}
                        className="object-contain"
                      />
                    </div>

                    {/* Title */}
                    <Text
                      tag="h3"
                      field={card.fields.Title}
                      className="text-xl lg:text-2xl font-bold mb-4 text-gray-900"
                    />

                    {/* Features List */}
                    <ul className="space-y-3 mb-6 flex-grow">
                      {card.fields.Features.map((feature, featureIndex) => (
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
                      field={card.fields.PrimaryLink}
                      className="group flex items-center gap-2 text-base font-medium text-teal-700 underline decoration-teal-700 underline-offset-4 transition-colors hover:text-teal-800 hover:decoration-teal-800 md:text-lg"
                    >
                      <Text field={card.fields.PrimaryLinkText} />
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </JssLink>

                    {/* Secondary Link */}
                    {card.fields.SecondaryLink.value.href != undefined && (
                      <JssLink
                        field={card.fields.SecondaryLink}
                        className="group flex items-center gap-2 text-base font-medium text-teal-700 underline decoration-teal-700 underline-offset-4 transition-colors hover:text-teal-800 hover:decoration-teal-800 md:text-lg"
                      >
                        <Text tag="span" field={card.fields.SecondaryLinkText} />
                        {card.fields.SecondaryLinkText.value != '' && (
                          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        )}
                      </JssLink>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
