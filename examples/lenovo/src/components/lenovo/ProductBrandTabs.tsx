'use client';

import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type ComponentParams,
  type ComponentRendering,
  Placeholder,
} from '@sitecore-content-sdk/nextjs';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type Fields = {
  Tab1Id: TextField;
  Tab1Label: TextField;
  Tab1PlaceholderKey: TextField;
  Tab2Id: TextField;
  Tab2Label: TextField;
  Tab2PlaceholderKey: TextField;
  Tab3Id: TextField;
  Tab3Label: TextField;
  Tab3PlaceholderKey: TextField;
  Tab4Id: TextField;
  Tab4Label: TextField;
  Tab4PlaceholderKey: TextField;
  Tab5Id: TextField;
  Tab5Label: TextField;
  Tab5PlaceholderKey: TextField;
  Tab6Id: TextField;
  Tab6Label: TextField;
  Tab6PlaceholderKey: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;

  const tabs = [
    {
      id: props.fields.Tab1Id,
      label: props.fields.Tab1Label,
      placeholderKey: props.fields.Tab1PlaceholderKey,
    },
    {
      id: props.fields.Tab2Id,
      label: props.fields.Tab2Label,
      placeholderKey: props.fields.Tab2PlaceholderKey,
    },
    {
      id: props.fields.Tab3Id,
      label: props.fields.Tab3Label,
      placeholderKey: props.fields.Tab3PlaceholderKey,
    },
    {
      id: props.fields.Tab4Id,
      label: props.fields.Tab4Label,
      placeholderKey: props.fields.Tab4PlaceholderKey,
    },
    {
      id: props.fields.Tab5Id,
      label: props.fields.Tab5Label,
      placeholderKey: props.fields.Tab5PlaceholderKey,
    },
    {
      id: props.fields.Tab6Id,
      label: props.fields.Tab6Label,
      placeholderKey: props.fields.Tab6PlaceholderKey,
    },
  ].filter((tab) => tab.id.value && tab.label.value);

  return (
    <Tabs key={id} defaultValue={tabs[0]?.id.value as string} className="mb-8">
      <TabsList>
        {tabs.map((tab) => (
          <TabsTrigger key={tab.id.value} value={tab.id.value as string}>
            <Text field={tab.label} />
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent key={tab.id.value} value={tab.id.value as string} className="space-y-6">
          <Placeholder name={tab.placeholderKey.value as string} rendering={props.rendering} />
        </TabsContent>
      ))}
    </Tabs>
  );
};
