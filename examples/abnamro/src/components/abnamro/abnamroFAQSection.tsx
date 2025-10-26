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

  //   const defaultFields: Fields = {
  //     title: "Veelgestelde vragen",
  //     faqs: [
  //       {
  //         question: "Hoe spaar ik voor mijn pensioen?",
  //         answer:
  //           'Bouw je voldoende inkomen op voor later? En hoeveel is voldoende? Antwoorden op deze vragen en tips over hoe je dit aanpakt lees je in <a href="#" class="text-primary underline hover:no-underline">ons blog over sparen voor je pensioen</a>.',
  //       },
  //       {
  //         question: "Kan ik naast sparen ook beleggen?",
  //         answer:
  //           'Het kan interessant zijn om een deel van je spaargeld te gebruiken om te beleggen. Je moet je dan wel bewust zijn van de risico\'s van beleggen. <a href="#" class="text-primary underline hover:no-underline">Lees meer over de combinatie van sparen en beleggen</a>.',
  //       },
  //       {
  //         question: "Waar vind ik mijn geopende spaarrekening?",
  //         answer:
  //           "Via Internet Bankieren: log in en je komt in jouw rekeningoverzicht.\n\nVia de ABN AMRO app: log in en je komt in jouw rekeningoverzicht.\n\nIs je geopende spaarrekening niet zichtbaar? Ga naar 'Mijn profiel'. Vervolgens ga je naar 'Rekeningoverzicht' en selecteer je de spaarrekening die je wilt tonen. Kies ten slotte voor 'Opslaan'.",
  //       },
  //       {
  //         question: "Wat is de huidige rente?",
  //         answer:
  //           'We hebben alle actuele rentes op onze spaarrekeningen op één handige plek verzameld. <a href="#" class="text-primary underline hover:no-underline">Bekijk de actuele rentes</a>.',
  //       },
  //       {
  //         question: "Waar kan ik oude spaarproducten vinden?",
  //         answer:
  //           'We hebben alle niet meer te openen spaarrekeningen op één handige plek verzameld. <a href="#" class="text-primary underline hover:no-underline">Meer informatie over oude spaarproducten</a>.',
  //       },
  //     ],
  //   }

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
