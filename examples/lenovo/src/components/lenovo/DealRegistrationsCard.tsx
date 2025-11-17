import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type ComponentParams,
  type ComponentRendering,
} from '@sitecore-content-sdk/nextjs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

type Fields = {
  Heading: TextField;
  DealRegLabel: TextField;
  DealRegValue: TextField;
  DealRegSubmitted: TextField;
  DealRegPending: TextField;
  BidRequestLabel: TextField;
  BidRequestValue: TextField;
  BidRequestHistoric: TextField;
  LeadsLabel: TextField;
  LeadsValue: TextField;
  LeadsStatus: TextField;
  InfrastructureLabel: TextField;
  InfrastructureValue: TextField;
  InfrastructureStatus: TextField;
  ButtonText: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export default function DealRegistrationsCard(props: ComponentProps): JSX.Element {
  const id = props.rendering.uid;
  const fields = props.fields;

  return (
    <Card key={id}>
      <CardHeader>
        <CardTitle>
          <Text field={fields.Heading} />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-sm font-medium text-muted-foreground mb-2">
              <Text field={fields.DealRegLabel} />
            </p>
            <p className="text-3xl font-bold">
              <Text field={fields.DealRegValue} />
            </p>
            <div className="flex gap-2 justify-center mt-2">
              <Badge variant="secondary">
                <Text field={fields.DealRegSubmitted} />
              </Badge>
              <Badge variant="destructive">
                <Text field={fields.DealRegPending} />
              </Badge>
            </div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-sm font-medium text-muted-foreground mb-2">
              <Text field={fields.BidRequestLabel} />
            </p>
            <p className="text-3xl font-bold">
              <Text field={fields.BidRequestValue} />
            </p>
            <Badge variant="outline" className="mt-2">
              <Text field={fields.BidRequestHistoric} />
            </Badge>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-sm font-medium text-muted-foreground mb-2">
              <Text field={fields.LeadsLabel} />
            </p>
            <p className="text-3xl font-bold">
              <Text field={fields.LeadsValue} />
            </p>
            <Badge className="mt-2 bg-green-500">
              <Text field={fields.LeadsStatus} />
            </Badge>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-sm font-medium text-muted-foreground mb-2">
              <Text field={fields.InfrastructureLabel} />
            </p>
            <p className="text-3xl font-bold">
              <Text field={fields.InfrastructureValue} />
            </p>
            <Badge className="mt-2 bg-green-500">
              <Text field={fields.InfrastructureStatus} />
            </Badge>
          </div>
        </div>
        <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
          <Text field={fields.ButtonText} />
        </Button>
      </CardContent>
    </Card>
  );
}

export const Default = DealRegistrationsCard;
