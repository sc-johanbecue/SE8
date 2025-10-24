import React, { JSX } from 'react';
import {
  TextField,
  LinkField,
  RichTextField,
  ImageField,
  Text,
  RichText,
  Link as JssLink,
  ComponentParams,
  ComponentRendering,
  Placeholder,
} from '@sitecore-content-sdk/nextjs';

interface Fields {
  Heading: TextField;
  SubHeading: TextField;
  Title: TextField;
  Description: RichTextField;
  Image1: ImageField;
  Image2: ImageField;
  Image3: ImageField;
  Image4: ImageField;
  Link: LinkField;
}

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const phExploreSectionImagesContainer = `EasyjetExploreSectionImagesContainer-${props.params.DynamicPlaceholderId}`;

  return (
    <section className="py-12 md:py-16 bg-gray-50" key={id}>
      <div className="container mx-auto px-4">
        <Text
          tag="h2"
          field={props.fields.Heading}
          className="text-3xl md:text-4xl font-bold text-center mb-2 uppercase"
        />
        <Text tag="p" field={props.fields.SubHeading} className="text-center text-gray-600 mb-8" />

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="grid grid-cols-2 gap-x-3 gap-y-2">
                <Placeholder name={phExploreSectionImagesContainer} rendering={props.rendering} />
              </div>
            </div>
            <div>
              <Text
                tag="h3"
                field={props.fields.Title}
                className="text-2xl font-bold mb-4 text-[#FF6600] uppercase"
              />
              <RichText
                field={props.fields.Description}
                className="text-gray-700 mb-4 leading-relaxed"
              />
              <JssLink
                field={props.fields.Link}
                className={`inline-block bg-[#FF6600] hover:bg-[#E55A00] text-white font-semibold px-6 py-2 rounded transition-colors text-center`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Default as EasyjetMaltaSection };
