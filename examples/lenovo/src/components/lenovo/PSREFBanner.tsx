import type { JSX } from 'react';
import {
  type TextField,
  type LinkField,
  Text,
  Link as SitecoreLink,
  type ComponentParams,
  type ComponentRendering,
} from '@sitecore-content-sdk/nextjs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type Fields = {
  Title: TextField;
  Description: TextField;
  ButtonText: TextField;
  ButtonLink: LinkField;
  BackgroundColor?: TextField;
  TextColor?: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const bgColor = props.fields.BackgroundColor?.value || 'bg-slate-900';
  const textColor = props.fields.TextColor?.value || 'text-white';

  return (
    <Card key={id} className={`${bgColor} ${textColor}`}>
      <CardHeader>
        <CardTitle>
          <Text field={props.fields.Title} />
        </CardTitle>
        <CardDescription className="text-gray-300">
          <Text field={props.fields.Description} />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SitecoreLink field={props.fields.ButtonLink}>
          <Button variant="secondary">
            <Text field={props.fields.ButtonText} />
          </Button>
        </SitecoreLink>
      </CardContent>
    </Card>
  );
};
