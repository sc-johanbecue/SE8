import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type ComponentParams,
  type ComponentRendering,
  Placeholder,
} from '@sitecore-content-sdk/nextjs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

type Fields = {
  Title: TextField;
  Description: TextField;
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
    <Card key={id}>
      <CardHeader>
        <CardTitle>
          <Text field={props.fields.Title} />
        </CardTitle>
        <CardDescription>
          <Text field={props.fields.Description} />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Placeholder
          name={props.fields.PlaceholderKey.value as string}
          rendering={props.rendering}
        />
      </CardContent>
    </Card>
  );
};
