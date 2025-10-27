import React, { JSX } from 'react';
import { ChevronRight } from 'lucide-react';
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

type Tile = {
  fields: {
    Image: ImageField;
    Text: TextField;
    Link: LinkField;
  };
};

type Fields = {
  Tiles: Tile[];
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;

  return (
    <section className="py-8 md:py-12 bg-gray-50" key={id}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-6">
          {props.fields.Tiles &&
            props.fields.Tiles.map((tile, index) => (
              <JssLink
                key={index}
                field={tile.fields.Link}
                className="flex items-center gap-3 md:gap-4 p-4 md:p-5 bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors group"
              >
                <JssImage
                  field={tile.fields.Image}
                  width={56}
                  height={56}
                  className="flex-shrink-0"
                />
                <span className="text-gray-900 font-normal text-base md:text-sm flex-1">
                  <Text field={tile.fields.Text} />
                </span>
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </JssLink>
            ))}
        </div>
      </div>
    </section>
  );
};
