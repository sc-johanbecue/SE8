'use client';
import React, { JSX, useMemo } from 'react';
import { useState } from 'react';
import {
  TextField,
  Text,
  Field,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';
import { Search } from 'lucide-react';

type Greeting = {
  fields: {
    StartHour: Field<number>;
    EndHour: Field<number>;
    Text: TextField;
  };
};

type Fields = {
  Greetings: Array<Greeting>;
  Text: TextField;
  PlaceholderText: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const [searchQuery, setSearchQuery] = useState('');

  const currentGreeting = useMemo(() => {
    const currentHour = new Date().getHours();

    const greeting = props.fields.Greetings.find((g) => {
      // Handle time ranges that cross midnight (e.g., 22:00 to 6:00)
      if (g.fields.StartHour.value > g.fields.EndHour.value) {
        return currentHour >= g.fields.StartHour.value || currentHour < g.fields.EndHour.value;
      }
      return currentHour >= g.fields.StartHour.value && currentHour < g.fields.EndHour.value;
    });

    return greeting?.fields.Text.value + ',';
  }, [props.fields.Greetings]);

  return (
    <section className="bg-gray-50 py-8 md:py-12" key={id}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{currentGreeting}</h2>
          <p className="text-gray-600 mb-6">
            <Text field={props.fields.Text} />
          </p>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={props.fields.PlaceholderText.value as string}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
