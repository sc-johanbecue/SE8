import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type ComponentParams,
  type ComponentRendering,
  Placeholder,
} from '@sitecore-content-sdk/nextjs';

type Fields = {
  Heading: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

const defaultFields: Fields = {
  Heading: { value: 'Intelligent Devices (IDG)' },
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const fields = props.fields || defaultFields;
  const phProductCards = `lenovoProductCards-${props.params.DynamicPlaceholderId}`;

  return (
    <div key={id} className="mb-12">
      <h2 className="text-2xl font-bold mb-6">
        <Text field={fields.Heading} />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Placeholder name={phProductCards} rendering={props.rendering} />
      </div>
    </div>
  );
};
