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

type Feature = {
  fields: {
    Text: TextField;
  };
};

type Fields = {
  Heading: TextField;
  SubHeading: TextField;
  Image: ImageField;
  AppStoreLink: LinkField;
  AppStoreImage: ImageField;
  GooglePlayLink: LinkField;
  GooglePlayImage: ImageField;
  Features: Feature[];
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;

  return (
    <section key={id} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="text-white text-center">
                <JssImage field={props.fields.Image} />
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a4d] mb-2">
                <Text field={props.fields.Heading} />
              </h2>
              <h3 className="text-xl font-semibold text-[#1a1a4d] mb-6">
                <Text field={props.fields.SubHeading} />
              </h3>

              <ul className="space-y-3 mb-8">
                {props.fields.Features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[#00d4aa] flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700 text-sm">
                      <Text field={feature.fields.Text} />
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <JssLink field={props.fields.AppStoreLink} className="inline-block">
                  <JssImage field={props.fields.AppStoreImage} className="w-30" />
                </JssLink>
                <JssLink field={props.fields.GooglePlayLink} className="inline-block">
                  <JssImage field={props.fields.GooglePlayImage} className="w-30" />
                </JssLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
