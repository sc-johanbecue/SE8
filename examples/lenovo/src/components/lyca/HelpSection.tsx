import { JSX } from 'react';
import {
  TextField,
  LinkField,
  ImageField,
  Link as JssLink,
  Image as JssImage,
  Text,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

type HelpLink = {
  Icon: {
    jsonValue: ImageField;
  };
  Link: {
    jsonValue: LinkField;
  };
  Title: {
    jsonValue: TextField;
  };
};

type Fields = {
  Heading: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: {
    data: {
      item: {
        fields: Fields;
        children: {
          items: HelpLink[];
        };
      };
    };
  };
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;

  return (
    <section key={id} className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#1a1a4d] text-center mb-8">
          <Text field={props.fields.data.item.fields.Heading} />
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {props.fields.data.item.children.items.map((option, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full bg-[#0066ff] text-white flex items-center justify-center mb-4 group-hover:bg-[#0052cc] transition-colors">
                <JssImage field={option.Icon.jsonValue} />
              </div>
              <p className="text-sm font-medium text-gray-700">
                <JssLink field={option.Link.jsonValue}>
                  <Text field={option.Title.jsonValue} />
                </JssLink>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
