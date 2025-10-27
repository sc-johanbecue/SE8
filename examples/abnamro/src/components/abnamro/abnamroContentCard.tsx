import React, { JSX } from 'react';
import { ChevronRight } from 'lucide-react';
import {
  TextField,
  ImageField,
  LinkField,
  RichTextField,
  Text,
  RichText,
  Link as JssLink,
  Image as JssImage,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

type Fields = {
  Image: ImageField;
  Title: TextField;
  Description: RichTextField;
  PrimaryLinkText: TextField;
  PrimaryLink: LinkField;
  SecondaryLinkText: TextField;
  SecondaryLink: LinkField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col h-full"
      key={id}
    >
      <JssImage
        field={props.fields.Image}
        width={400}
        height={300}
        className="w-full h-56 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <Text
          tag="h3"
          field={props.fields.Title}
          className="text-2xl font-bold text-gray-900 mb-4"
        />
        <RichText
          field={props.fields.Description}
          className="text-gray-700 mb-6 leading-relaxed flex-grow"
        />

        <div className="space-y-4">
          <JssLink
            field={props.fields.PrimaryLink}
            className="inline-block bg-[#005f4f] text-white font-semibold px-6 py-3 rounded hover:bg-[#004d3f] transition-colors"
          >
            <Text field={props.fields.PrimaryLinkText} />
          </JssLink>

          {props.fields.SecondaryLink.value.href != undefined && (
            <JssLink
              field={props.fields.SecondaryLink}
              className="inline-flex items-center gap-1 text-[#005f4f] font-semibold underline hover:no-underline group"
            >
              <span>
                <Text field={props.fields.SecondaryLinkText} />
              </span>
              {props.fields.SecondaryLinkText.value != '' && (
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              )}
            </JssLink>
          )}
        </div>
      </div>
    </div>
  );
};
