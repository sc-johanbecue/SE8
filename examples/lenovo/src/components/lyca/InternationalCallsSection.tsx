import { JSX } from 'react';
import {
  TextField,
  Text,
  ImageField,
  Image as JssImage,
  LinkField,
  Link as JssLink,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

type Country = {
  Flag: {
    jsonValue: ImageField;
  };
  Name: {
    jsonValue: TextField;
  };
  Link: {
    jsonValue: LinkField;
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
          items: Country[];
        };
      };
    };
  };
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;

  return (
    <section key={id} className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#1a1a4d] text-center mb-8">
          <Text field={props.fields.data.item.Heading.jsonValue} />
        </h2>

        <div className="flex flex-wrap justify-center gap-8 max-w-3xl mx-auto">
          {props.fields.data.item.children.items.map((country, index) => (
            <div key={index} className="flex flex-col items-center group cursor-pointer">
              <JssLink field={country.Link.jsonValue}>
                <div className="w-16 h-16 rounded-full overflow-hidden mb-2 group-hover:border-2 group-hover:border-[#0066ff] transition-colors">
                  <div className="w-full h-full flex items-center justify-center text-3xl">
                    <JssImage field={country.Flag.jsonValue} />
                  </div>
                </div>
                <p className="w-full flex text-sm font-medium text-gray-700 justify-center items-center">
                  <Text field={country.Name.jsonValue} />
                </p>
              </JssLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
