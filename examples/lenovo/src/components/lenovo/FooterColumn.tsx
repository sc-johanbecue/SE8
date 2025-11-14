'use client';

import React, { JSX, useState } from 'react';
import {
  Text,
  Link as JssLink,
  TextField,
  LinkField,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';
import { Minus, Plus } from 'lucide-react';

type ResultsFieldLink = {
  field: {
    link: LinkField;
  };
};

interface Fields {
  data: {
    datasource: {
      children: {
        results: ResultsFieldLink[];
      };
      field: {
        title: TextField;
      };
    };
  };
}

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => setIsOpen((p) => !p);

  return (
    <div className="border-b border-gray-2 00 md:border-0 mx-2">
      {/* Mobile: Accordion Header */}
      <button
        onClick={toggleSection}
        className="w-full flex items-center justify-between py-4 md:py-0 md:pointer-events-none"
        aria-expanded={isOpen}
        aria-controls="footer-links"
      >
        <Text
          tag="h3"
          field={props.fields.data.datasource.field.title}
          className="font-bold text-gray-800 text-base md:text-sm mb-5"
        />
        <span className="md:hidden text-cyan-500">
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </span>
      </button>

      {/* Links - Desktop: Always visible, Mobile: Collapsible */}
      <ul
        id="footer-links"
        className={`space-y-2 pb-4 md:pb-0 ${isOpen ? 'block' : 'hidden'} md:block`}
      >
        {props.fields.data.datasource.children.results?.map((item, linkIndex) => (
          <li key={linkIndex}>
            <JssLink
              field={item.field.link}
              className="text-gray-600 hover:text-cyan-500 transition-colors text-sm block"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
