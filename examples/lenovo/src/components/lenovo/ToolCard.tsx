import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type LinkField,
  Link,
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
  GradientFrom: TextField;
  GradientTo: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

const defaultFields: Fields = {
  Title: { value: 'Configure & Price' },
  Description: {
    value:
      'Infrastructure Solutions Configurator (ICSC) - Build Lenovo solutions for your customers',
  },
  ButtonText: { value: 'Launch Configurator' },
  ButtonLink: { value: { href: '/configure', text: 'Launch Configurator' } },
  GradientFrom: { value: 'from-blue-50' },
  GradientTo: { value: 'to-cyan-50' },
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const fields = props.fields || defaultFields;

  return (
    <Card
      key={id}
      className={`bg-gradient-to-br ${fields.GradientFrom.value} ${fields.GradientTo.value}`}
    >
      <CardHeader>
        <CardTitle>
          <Text field={fields.Title} />
        </CardTitle>
        <CardDescription>
          <Text field={fields.Description} />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button className="bg-[#E2231A] hover:bg-[#C11D15]" asChild>
          <Link field={fields.ButtonLink}>
            <Text field={fields.ButtonText} />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};
