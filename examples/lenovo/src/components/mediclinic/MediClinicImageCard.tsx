import React, { JSX } from 'react';
import {
  Text,
  Image as JssImage,
  Link as JssLink,
  TextField,
  ImageField,
  LinkField,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

type ImageCardFields = {
  Tag: TextField;
  Heading: TextField;
  Description: TextField;
  Image: ImageField;
  Link: LinkField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: ImageCardFields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;

  return (
    <JssLink
      key={id}
      field={props.fields.Link}
      className="group relative overflow-hidden rounded-lg aspect-[4/5] block"
    >
      <JssImage
        field={props.fields.Image}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <div className="absolute top-4 left-4">
        <span className="inline-block px-3 py-1 bg-white/90 text-gray-900 text-xs font-semibold rounded">
          {props.fields.Tag?.value}
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <Text tag="h3" field={props.fields.Heading} className="text-xl font-bold mb-2" />
        <Text
          tag="p"
          field={props.fields.Description}
          className="text-sm leading-relaxed opacity-90"
        />
      </div>
    </JssLink>
  );
};
