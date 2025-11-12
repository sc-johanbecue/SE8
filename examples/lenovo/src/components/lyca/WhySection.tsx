import { JSX } from 'react';
import {
  TextField,
  ImageField,
  RichTextField,
  LinkField,
  Image as JssImage,
  Link as JssLink,
  RichText,
  Text,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

type Why = {
  Icon: {
    jsonValue: ImageField;
  };
  Title: {
    jsonValue: TextField;
  };
  Description: {
    jsonValue: RichTextField;
  };
  ReadMoreLink: {
    jsonValue: LinkField;
  };
  ReadMoreLinkText: {
    jsonValue: TextField;
  };
};

type Fields = {
  Heading: {
    jsonValue: TextField;
  };
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: {
    data: {
      item: Fields & {
        children: {
          items: Why[];
        };
      };
    };
  };
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;

  return (
    <section key={id} className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a4d] text-center mb-12">
          <Text field={props.fields.data.item.Heading.jsonValue} />
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {props.fields.data.item.children.items.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-4">
                <JssImage field={feature.Icon.jsonValue} />
              </div>
              <h3 className="text-xl font-bold text-[#1a1a4d] mb-3">
                <Text field={feature.Title.jsonValue} />
              </h3>
              <RichText
                field={feature.Description.jsonValue}
                className="text-gray-600 text-sm leading-relaxed mb-4"
              />
              <JssLink
                field={feature.ReadMoreLink.jsonValue}
                className="text-[#0066ff] text-sm font-medium hover:underline"
              >
                <Text field={feature.ReadMoreLinkText.jsonValue} />
              </JssLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
