import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type ComponentParams,
  type ComponentRendering,
} from '@sitecore-content-sdk/nextjs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users } from 'lucide-react';

type Fields = {
  Heading: TextField;
  DateText: TextField;
  ClientRecordsLabel: TextField;
  ClientRecordsValue: TextField;
  CreatedLabel: TextField;
  CreatedValue: TextField;
  SentLabel: TextField;
  SentValue: TextField;
  ViewedLabel: TextField;
  ViewedValue: TextField;
  DownloadedLabel: TextField;
  DownloadedValue: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

const defaultFields: Fields = {
  Heading: { value: 'My Progress' },
  DateText: { value: 'As of 2025-01-12' },
  ClientRecordsLabel: { value: 'Total Client Records' },
  ClientRecordsValue: { value: '240' },
  CreatedLabel: { value: 'Created' },
  CreatedValue: { value: '$350000' },
  SentLabel: { value: 'Sent' },
  SentValue: { value: '4' },
  ViewedLabel: { value: 'Viewed' },
  ViewedValue: { value: '10' },
  DownloadedLabel: { value: 'Downloaded' },
  DownloadedValue: { value: '3.4 TB' },
};

export default function MyProgressCard(props: ComponentProps): JSX.Element {
  const id = props.rendering.uid;
  const fields = defaultFields; //props?.fields ||

  return (
    <Card key={id}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>
              <Text field={fields.Heading} />
            </CardTitle>
            <CardDescription>
              <Text field={fields.DateText} />
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-4 p-4 border rounded-lg">
            <div className="p-3 bg-blue-50 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                <Text field={fields.ClientRecordsLabel} />
              </p>
              <p className="text-2xl font-bold">
                <Text field={fields.ClientRecordsValue} />
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">
                <Text field={fields.CreatedLabel} />
              </p>
              <p className="text-2xl font-bold">
                <Text field={fields.CreatedValue} />
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">
                <Text field={fields.SentLabel} />
              </p>
              <p className="text-2xl font-bold">
                <Text field={fields.SentValue} />
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">
                <Text field={fields.ViewedLabel} />
              </p>
              <p className="text-2xl font-bold">
                <Text field={fields.ViewedValue} />
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">
                <Text field={fields.DownloadedLabel} />
              </p>
              <p className="text-2xl font-bold">
                <Text field={fields.DownloadedValue} />
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export const Default = MyProgressCard;
