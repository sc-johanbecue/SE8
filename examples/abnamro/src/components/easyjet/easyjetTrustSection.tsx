import React, { JSX } from 'react';
import {
  TextField,
  RichTextField,
  ImageField,
  Image as JssImage,
  Text,
  RichText,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

type TrustItem = {
  fields: {
    Image: ImageField;
    OptionalSecondImage: ImageField;
    Title: TextField;
    Description: RichTextField;
  };
};

interface Fields {
  Items: TrustItem[];
}

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  //   {
  //     icon: 'travel-aware',
  //     title: 'TRAVEL ADVICE & SAFETY',
  //     description:
  //       'To prepare for your trip abroad and find useful information about safety, health, local laws, natural disasters, political situation, passport and visa requirements visit the',
  //     linkText: 'FCDO Travel Aware website',
  //     linkUrl: '#',
  //   },
  //   {
  //     icon: 'atol',
  //     title: 'ATOL PROTECTED',
  //     description:
  //       "We know it's important to feel protected when booking your holiday. That's why all the holidays sold on this website are financially protected by the",
  //     linkText: 'ATOL scheme',
  //     linkUrl: '#',
  //     logos: ['abta', 'atol'],
  //   },
  //   {
  //     icon: 'award',
  //     title: 'WHY BOOK WITH US?',
  //     description:
  //       'From our Best Price Guarantee to the ability to secure your holiday with just a £60pp deposit. We have a wide range of reasons to book with us, click',
  //     linkText: 'here',
  //     linkUrl: '#',
  //   },
  // ];

  return (
    <section
      key={id}
      className="relative overflow-hidden bg-[#ff6600] text-white"
      style={{ clipPath: 'polygon(0 0, 100% 8%, 100% 92%, 0 100%)' }}
    >
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          {props.fields.Items.map((item, index) => (
            <div key={index}>
              <div className="flex gap-4">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <JssImage
                    field={item.fields.Image}
                    alt=""
                    width={64}
                    height={64}
                    className="h-16 w-16 object-contain md:h-20 md:w-20"
                  />
                  {item.fields.OptionalSecondImage.value?.src && (
                    <JssImage
                      field={item.fields.OptionalSecondImage}
                      alt=""
                      width={64}
                      height={64}
                      className="h-16 w-16 object-contain md:h-20 md:w-20"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="mb-2 text-sm font-bold md:mb-3 md:text-base">
                    <Text field={item.fields.Title} />
                  </h3>
                  <p className="text-[11px] leading-relaxed md:text-xs">
                    <RichText field={item.fields.Description} />
                  </p>
                </div>
              </div>

              {/* Mobile divider lines between sections */}
              {index < props.fields.Items.length - 1 && (
                <div className="mt-6 border-t border-white/30 pt-6 md:hidden" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
