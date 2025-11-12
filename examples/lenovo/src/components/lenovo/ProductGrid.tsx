'use client';

import type { JSX } from 'react';
import {
  type TextField,
  type ComponentParams,
  type ComponentRendering,
  Placeholder,
} from '@sitecore-content-sdk/nextjs';

type Fields = {
  PlaceholderKey: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;

  return (
    <div key={id} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Placeholder name={props.fields.PlaceholderKey.value as string} rendering={props.rendering} />
    </div>
  );
};
