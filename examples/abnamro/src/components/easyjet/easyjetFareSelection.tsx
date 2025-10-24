import React, { JSX, useEffect, useState } from 'react';
import {
  TextField,
  Text,
  ImageField,
  Image as JssImage,
  RichTextField,
  RichText,
  LinkField,
  Link as JssLink,
  ComponentParams,
  ComponentRendering,
  useSitecore,
} from '@sitecore-content-sdk/nextjs';

type Fields = {
  Title: TextField;
  Subtitle: TextField;
  Type: TextField;
  Price: TextField;
  Image: ImageField;
  Features: RichTextField;
  AdditionalInfo: LinkField;
  AvailableSeats: TextField;
  BookNowLink: LinkField;
  BookNowButtonText: TextField;
  ShowOtherFaresButtonText: TextField;
  ShowOtherFaresLink: LinkField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const { page } = useSitecore();

  const [availableSeats, setAvailableSeats] = useState<number>(
    (props.fields.AvailableSeats.value as number) || 15
  );

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const hasUtmCampaign = urlParams.has('utm_campaign');

    if (hasUtmCampaign) {
      setAvailableSeats(Math.floor(Math.random() * 14) + 1);
    } else {
      setAvailableSeats(Math.floor(Math.random() * 11) + 15);
    }
  }, []);

  return (
    <div className="w-full bg-gray-50 py-8 md:py-12" key={id}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <Text
            tag="h1"
            field={props.fields.Title}
            className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl"
          />
          <Text
            tag="p"
            field={props.fields.Subtitle}
            className="text-lg text-gray-600 md:text-xl"
          />
        </div>

        {/* Fare Card */}
        <div className="mx-auto mb-8 max-w-6xl overflow-hidden rounded-2xl bg-white shadow-lg">
          <div className="grid gap-0 md:grid-cols-2">
            {/* Left: Image */}
            <div className="relative h-64 md:h-auto">
              <JssImage field={props.fields.Image} fill className="object-cover" />
            </div>

            {/* Right: Fare Details */}
            <div className="relative p-6 md:p-8">
              {/* Price Badge */}
              <div className="absolute right-6 top-6 rounded-full bg-gray-900 px-4 py-2 md:right-8 md:top-8">
                <Text
                  tag="span"
                  field={props.fields.Price}
                  className="text-lg font-bold text-white md:text-xl"
                />
              </div>

              {/* Fare Type */}
              <Text
                tag="h2"
                field={props.fields.Type}
                className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl"
              />

              {/* Features List */}
              <RichText field={props.fields.Features} />

              {/* Additional Info Link */}
              <JssLink
                field={props.fields.AdditionalInfo}
                className="mb-6 inline-block text-[#FF6600] hover:underline"
              />

              {/* Book Now Button */}
              <div className="mt-6">
                <JssLink
                  field={props.fields.BookNowLink}
                  className="relative inline-block rounded-md bg-[#FF6600] px-8 py-3 text-lg font-semibold text-white hover:bg-[#E55A00]"
                >
                  {props.fields.BookNowLink.value.text}
                  {availableSeats && (
                    <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white">
                      {!page.mode.isEditing ? <span>{availableSeats}</span> : <span>#</span>}
                    </div>
                  )}
                </JssLink>
              </div>
            </div>
          </div>
        </div>

        {/* Show Other Fares Button */}
        <div className="text-center">
          <JssLink
            field={props.fields.ShowOtherFaresLink}
            className={`inline-block bg-[#FF6600] hover:bg-[#E55A00] text-white font-semibold px-6 py-2 rounded transition-colors text-center w-60`}
          />
        </div>
      </div>
    </div>
  );
};
