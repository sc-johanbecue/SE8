import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type ComponentParams,
  type ComponentRendering,
  Placeholder,
} from '@sitecore-content-sdk/nextjs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Fields = {
  Heading: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

const defaultFields: Fields = {
  Heading: { value: 'My Quick Links' },
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const fields = defaultFields; //props.fields || 
  const phQuickLinks = `lenovoQuickLinks-${props.params.DynamicPlaceholderId}`;

  return (
    <Card key={id}>
      <CardHeader>
        <CardTitle>
          <Text field={fields.Heading} />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <Placeholder name={phQuickLinks} rendering={props.rendering} />
      </CardContent>
    </Card>
  );
};
