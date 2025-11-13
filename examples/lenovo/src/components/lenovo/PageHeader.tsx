import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type RichTextField,
  RichText,
  type ComponentParams,
  type ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

type Fields = {
  Title: TextField;
  Description: RichTextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;

  return (
    <div className="mb-8" key={id}>
      <h1 className="text-4xl font-bold mb-4">
        <Text field={props.fields.Title} />
      </h1>
      <div className="text-muted-foreground text-lg">
        <RichText field={props.fields.Description} />
      </div>
    </div>
  );
};
