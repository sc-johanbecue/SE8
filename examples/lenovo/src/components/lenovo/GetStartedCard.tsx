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
  Heading: TextField;
  Description: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

const defaultFields: Fields = {
  Heading: { value: 'Get Started' },
  Description: { value: 'Get to know your partner portal' },
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const fields = props.fields || defaultFields;
  const phGetStartedVideos = `lenovoGetStartedVideos-${props.params.DynamicPlaceholderId}`;

  return (
    <Card key={id}>
      <CardHeader>
        <CardTitle>
          <Text field={fields.Heading} />
        </CardTitle>
        <CardDescription>
          <Text field={fields.Description} />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Placeholder name={phGetStartedVideos} rendering={props.rendering} />
        </div>
      </CardContent>
    </Card>
  );
};
