import React, { JSX } from 'react';
import {
  TextField,
  ImageField,
  LinkField,
  Text,
  Field,
  Link as JssLink,
  Image as JssImage,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';
import Image from 'next/image';

type Fields = {
  Image: ImageField;
  Title: TextField;
  Subtitle: TextField;
  LinkText: TextField;
  Link: LinkField;
};

type ParamFields = {
  FlipBackgoundImage: Field<boolean>;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams & { fields: ParamFields };
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  return (
    <section className="w-full" key={id}>
      {/* Mobile Layout: Image on top, content below */}
      <div className="lg:hidden">
        <div className="relative w-full">
          <JssImage field={props.fields.Image} fill className="object-cover" priority />
        </div>
        <div className="bg-[#004c4c] px-3 py-6">
          <Text tag="h2" field={props.fields.Title} className="text-3xl text-white mb-2" />
          <Text tag="p" field={props.fields.Subtitle} className="text-2xl text-white mb-4" />
          <JssLink
            field={props.fields.Link}
            className="inline-block bg-[#ffcc00] text-[#004c4c] px-8 py-2 font-semibold hover:bg-[#e6b800] transition-colors"
          >
            <Text field={props.fields.LinkText} />
          </JssLink>
        </div>
      </div>

      {/* Desktop Layout: Split view with content on left, image on right */}
      <div className="hidden lg:flex h-[440px]">
        <div className="w-1/2 bg-[#004c4c] flex items-center px-16 py-20">
          <div>
            <Text
              tag="h2"
              field={props.fields.Title}
              className="text-3xl font-semibold text-white mb-6"
            />
            <Text tag="p" field={props.fields.Subtitle} className="text-2xl text-white mb-10" />
            <JssLink
              field={props.fields.Link}
              className="inline-block bg-[#ffcc00] text-[#004c4c] px-8 py-4 font-semibold hover:bg-[#e6b800] transition-colors"
            >
              <Text field={props.fields.LinkText} />
            </JssLink>
          </div>
        </div>
        <div className="w-1/2 relative h-full">
          <JssImage
            field={props.fields.Image}
            fill-cover
            className="inset-0 w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export const ReversedDefault = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  return (
    <section className="w-full" key={id}>
      {/* Mobile Layout: Image on top, content below */}
      <div className="lg:hidden">
        <div className="bg-[#004c4c] px-3 py-6">
          <Text tag="h2" field={props.fields.Title} className="text-3xl text-white mb-2" />
          <Text tag="p" field={props.fields.Subtitle} className="text-2xl text-white mb-4" />
          <JssLink
            field={props.fields.Link}
            className="inline-block bg-[#ffcc00] text-[#004c4c] px-8 py-2 font-semibold hover:bg-[#e6b800] transition-colors"
          >
            <Text field={props.fields.LinkText} />
          </JssLink>
        </div>
        <div className="relative w-full">
          <JssImage field={props.fields.Image} fill className="object-cover" priority />
        </div>
      </div>

      {/* Desktop Layout: Split view with content on left, image on right */}
      <div className="hidden lg:flex h-[440px]">
        <div className="w-1/2 bg-[#004c4c] flex items-center px-16 py-20">
          <div>
            <Text
              tag="h2"
              field={props.fields.Title}
              className="text-3xl font-semibold text-white mb-6"
            />
            <Text tag="p" field={props.fields.Subtitle} className="text-2xl text-white mb-10" />
            <JssLink
              field={props.fields.Link}
              className="inline-block bg-[#ffcc00] text-[#004c4c] px-8 py-4 font-semibold hover:bg-[#e6b800] transition-colors"
            >
              <Text field={props.fields.LinkText} />
            </JssLink>
          </div>
        </div>
        <div className="w-1/2 relative h-full">
          <JssImage
            field={props.fields.Image}
            fill-cover
            className="inset-0 w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export const BackgroundImage = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;

  return (
    <section className="relative h-[200px] md:h-[440px] overflow-hidden" key={id}>
      <Image
        src={props.fields.Image.value?.src as string}
        alt={props.fields.Image.value?.alt as string}
        fill
        className={`object-cover ${props.params.FlipBackgoundImage ? 'scale-x-[-1]' : ''}`}
        priority
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-xl">
          <Text
            tag="h1"
            field={props.fields.Title}
            className="text-xl md:text-5xl font-bold text-white mb-4 text-balance"
          />
          <Text
            tag="p"
            field={props.fields.Subtitle}
            className="text-l md:text-2xl text-white mb-6"
          />
          <JssLink
            field={props.fields.Link}
            className="inline-block px-6 py-3 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition-colors"
          >
            <Text field={props.fields.LinkText} />
          </JssLink>
        </div>
      </div>
    </section>
  );
};

export const ReversedBackgroundImage = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;

  return (
    <section className="relative h-[200px] md:h-[440px] overflow-hidden">
      <Image
        src={props.fields.Image.value?.src as string}
        alt={props.fields.Image.value?.alt as string}
        fill
        className={`object-cover ${props.params.FlipBackgoundImage ? 'scale-x-[-1]' : ''}`}
        priority
      />
      <div className="absolute inset-0 bg-black/30" />
      <div
        className={`relative container mx-auto px-4 md:px-8 lg:px-16 h-full flex flex-col justify-center md:justify-center items-end text-right`}
      >
        <div className="max-w-xl md:ml-auto">
          <Text
            tag="h1"
            field={props.fields.Title}
            className="text-xl md:text-5xl font-bold text-white mb-4 text-balance"
          />
          <Text
            tag="p"
            field={props.fields.Subtitle}
            className="text-l md:text-2xl text-white mb-6"
          />
          <JssLink
            field={props.fields.Link}
            className="inline-block px-6 py-3 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition-colors"
          >
            <Text field={props.fields.LinkText} />
          </JssLink>
        </div>
      </div>
    </section>
  );
};
