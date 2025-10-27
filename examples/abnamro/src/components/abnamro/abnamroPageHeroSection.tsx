import React, { JSX } from 'react';
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

type Fields = {
  Title: TextField;
  Subtitle: TextField;
  Link: LinkField;
  LinkText: TextField;
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
    <section className="w-full" key={id}>
      {/* Mobile Layout: Image on top, content below */}
      <div className="lg:hidden">
        <div className="relative w-full aspect-[4/3]">
          <JssImage field={props.fields.Image} fill className="object-cover" priority />
        </div>
        <div className="bg-[#00695f] px-6 py-12">
          <h2 className="text-3xl font-semibold text-white mb-4">
            <Text field={props.fields.Title} />
          </h2>
          <p className="text-xl text-white mb-8">
            <Text field={props.fields.Subtitle} />
          </p>
          <JssLink
            field={props.fields.Link}
            className="inline-block bg-[#ffcc00] text-[#00695f] px-8 py-4 font-semibold hover:bg-[#e6b800] transition-colors"
          >
            <Text field={props.fields.LinkText} />
          </JssLink>
        </div>
      </div>

      {/* Desktop Layout: Split view with content on left, image on right */}
      <div className="hidden lg:flex">
        <div className="w-1/2 bg-[#00695f] flex items-center px-16 py-20">
          <div>
            <h2 className="text-5xl font-semibold text-white mb-6">
              <Text field={props.fields.Title} />
            </h2>
            <p className="text-2xl text-white mb-10">
              <Text field={props.fields.Subtitle} />
            </p>
            <JssLink
              field={props.fields.Link}
              className="inline-block bg-[#ffcc00] text-[#00695f] px-8 py-4 font-semibold hover:bg-[#e6b800] transition-colors"
            >
              <Text field={props.fields.LinkText} />
            </JssLink>
          </div>
        </div>
        <div className="w-1/2 relative">
          <JssImage field={props.fields.Image} fill className="object-cover" priority />
        </div>
      </div>
    </section>
  );
};
