import { JSX, useState } from 'react';
import {
  TextField,
  Text,
  RichTextField,
  RichText,
  LinkField,
  Link as JssLink,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

type FAQ = {
  Question: {
    jsonValue: TextField;
  };
  Answer: {
    jsonValue: RichTextField;
  };
};

type Fields = {
  Heading: {
    jsonValue: TextField;
  };
  ViewMoreLink: {
    jsonValue: LinkField;
  };
  ViewMoreLinkText: {
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
          items: FAQ[];
        };
      };
    };
  };
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div key={id} className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#1a1a4d] text-center mb-8">
          <Text field={props.fields.data.item.Heading.jsonValue} />
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {props.fields.data.item.children.items.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900">
                  <Text field={faq.Question.jsonValue} />
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === index ? 'rotate-45' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600 text-sm">
                  <RichText field={faq.Answer.jsonValue} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <JssLink
            field={props.fields.data.item.ViewMoreLink}
            className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded hover:bg-gray-50 transition-colors"
          >
            <Text field={props.fields.data.item.ViewMoreLinkText.jsonValue} />
          </JssLink>
        </div>
      </div>
    </div>
  );
};
