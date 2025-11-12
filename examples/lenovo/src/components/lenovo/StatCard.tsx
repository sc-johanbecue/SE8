import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type ImageField,
  Image,
  type ComponentParams,
  type ComponentRendering,
} from '@sitecore-content-sdk/nextjs';
import { Card, CardContent } from '@/components/ui/card';

type Fields = {
  Icon: ImageField;
  IconColor: TextField;
  Value: TextField;
  Label: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

const defaultFields: Fields = {
  Icon: { value: { src: '/icons/building.svg', alt: 'Building Icon' } },
  IconColor: { value: 'text-[#E2231A]' },
  Value: { value: '10K+' },
  Label: { value: 'Active Partners' },
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const fields = props.fields || defaultFields;

  return (
    <Card key={id}>
      <CardContent className="pt-6">
        <div className="flex items-center gap-4">
          <div className={`p-3 bg-[#E2231A]/10 rounded-lg`}>
            <Image field={fields.Icon} className="h-6 w-6" />
          </div>
          <div>
            <p className="text-3xl font-bold">
              <Text field={fields.Value} />
            </p>
            <p className="text-sm text-muted-foreground">
              <Text field={fields.Label} />
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
