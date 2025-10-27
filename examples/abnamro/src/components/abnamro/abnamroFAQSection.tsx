import React, { JSX } from 'react';
import {
  TextField,
  RichTextField,
  Text,
  RichText,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type FAQItem = {
  fields: {
    Question: TextField;
    Answer: RichTextField;
  };
};

type Fields = {
  Title: TextField;
  Faqs: FAQItem[];
};
type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;

  return (
    <section className="bg-gray-50 py-12 md:py-16 lg:py-20" key={id}>
      <div className="container mx-auto px-4">
        <Text
          tag="h2"
          field={props.fields.Title}
          className="mb-8 text-center text-3xl font-bold text-gray-900 md:mb-12 md:text-4xl"
        />

        <div className="mx-auto max-w-3xl">
          <Accordion type="multiple" className="space-y-4">
            {props.fields.Faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-lg border-none bg-gray-200 px-6 py-2"
              >
                <AccordionTrigger className="text-left text-base font-normal text-gray-900 hover:no-underline md:text-lg">
                  <Text field={faq.fields.Question} />
                </AccordionTrigger>
                <AccordionContent className="pt-4 text-base text-gray-900">
                  <RichText field={faq.fields.Answer} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
