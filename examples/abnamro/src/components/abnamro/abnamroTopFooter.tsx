import React, { JSX } from 'react';
import { ArrowRight } from 'lucide-react';
import {
  TextField,
  Text,
  LinkField,
  Link as JssLink,
  ComponentParams,
  ComponentRendering,
  Placeholder,
} from '@sitecore-content-sdk/nextjs';

type Fields = {
  Title: TextField;
  Description: TextField;
  Link: LinkField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const phFooterLinkListContainer = `abnamroFooterLinkListContainer-${props.params.DynamicPlaceholderId}`;

  return (
    <div className="bg-[#0e6b6b] text-white" key={id}>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <Placeholder name={phFooterLinkListContainer} rendering={props.rendering} />

          {/* Hulp nodig */}
          <div>
            <h2 className="text-xl md:text-2xl font-normal mb-4">
              <Text field={props.fields.Title} />
            </h2>
            <p className="text-white mb-6 leading-relaxed">
              <Text field={props.fields.Description} />
            </p>
            <div className="flex items-center gap-2 group">
              <JssLink
                field={props.fields.Link}
                className="inline-flex items-center gap-2 text-white underline-offset-4"
              >
                <span className="border-b border-white">{props.fields.Link.value.text}</span>
              </JssLink>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
