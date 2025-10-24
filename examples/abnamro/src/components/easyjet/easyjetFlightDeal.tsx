import React, { JSX } from 'react';
import {
  Text,
  Image as JssImage,
  TextField,
  RichTextField,
  ImageField,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

type Fields = {
  City: TextField;
  Description: RichTextField;
  Price: TextField;
  Image: ImageField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  return (
    <div key={id} className="flex-[0_0_100%] md:flex-[0_0_33.333%] lg:flex-[0_0_15.5%] min-w-2">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
        <div className="relative h-48">
          <JssImage
            field={props.fields.Image}
            alt={props.fields.City}
            heigth={300}
            fill
            className="object-cover"
            style={{ width: '100%', height: '175px' }}
          />
        </div>
        <div className="p-4">
          <Text tag="h3" field={props.fields.City} className="font-bold text-xs mb-1 text-black" />
          <Text
            tag="p"
            field={props.fields.Description}
            className="text-xs text-gray-600 mb-2 line-clamp-2"
          />
          <Text tag="p" field={props.fields.Price} className="text-[#FF6600] font-bold" />
        </div>
      </div>
    </div>
  );
};

export { Default as EasyjetFlightDealsCarousel };
