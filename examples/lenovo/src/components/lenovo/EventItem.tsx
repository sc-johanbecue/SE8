import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type ComponentParams,
  type ComponentRendering,
} from '@sitecore-content-sdk/nextjs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

type Fields = {
  EventDay: TextField;
  EventMonth: TextField;
  EventTitle: TextField;
  EventStatus: TextField;
  EventDescription: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

const defaultFields: Fields = {
  EventDay: { value: '26' },
  EventMonth: { value: 'FEB' },
  EventTitle: { value: 'Lenovo ISG Data Management Channel Assets' },
  EventStatus: { value: 'In Progress' },
  EventDescription: { value: 'Lenovo ISG Data Management Channel Assets' },
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const fields = props.fields || defaultFields;

  return (
    <div
      key={id}
      className="flex items-start gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
    >
      <div className="text-center">
        <div className="bg-blue-600 text-white rounded-lg p-2 min-w-[60px]">
          <p className="text-2xl font-bold">
            <Text field={fields.EventDay} />
          </p>
          <p className="text-xs">
            <Text field={fields.EventMonth} />
          </p>
        </div>
      </div>
      <div className="flex-1">
        <h3 className="font-semibold mb-1">
          <Text field={fields.EventTitle} />
        </h3>
        <Badge className="bg-orange-500 mb-2">
          <Text field={fields.EventStatus} />
        </Badge>
        <p className="text-sm text-muted-foreground">
          <Text field={fields.EventDescription} />
        </p>
      </div>
      <Button variant="ghost" size="icon">
        <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  );
};
