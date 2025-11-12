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
  EventCount: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

const defaultFields: Fields = {
  Heading: { value: 'Upcoming Events' },
  EventCount: { value: '(1)' },
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const fields = props.fields || defaultFields;
  const phEvents = `lenovoUpcomingEvents-${props.params.DynamicPlaceholderId}`;

  return (
    <Card key={id}>
      <CardHeader>
        <CardTitle>
          <Text field={fields.Heading} /> <Text field={fields.EventCount} />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Placeholder name={phEvents} rendering={props.rendering} />
      </CardContent>
    </Card>
  );
};
