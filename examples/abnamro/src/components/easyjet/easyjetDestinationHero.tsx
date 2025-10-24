import React, { JSX } from 'react';
import {
  LinkField,
  Link as JssLink,
  ImageField,
  TextField,
  Text,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

interface Fields {
  Title: TextField;
  BackgroundImage: ImageField;
  SearchPlaceholder: TextField;
  PriceText: TextField;
  Link: LinkField;
}

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;

  return (
    <div className="relative h-[400px] md:h-[500px] overflow-hidden" key={id}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${props.fields.BackgroundImage.value?.src})` }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <Text
          tag="h1"
          field={props.fields.Title}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        />

        <div className="flex items-center gap-2 text-lg text-white">
          <Text tag="span" field={props.fields.PriceText} />
          <br />
          <br />
        </div>

        <JssLink
          field={props.fields.Link}
          className={`inline-block bg-[#FF6600] hover:bg-[#E55A00] text-white font-semibold px-6 py-2 rounded transition-colors text-center w-60`}
        />
      </div>
    </div>
  );
};
