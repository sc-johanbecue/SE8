import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type LinkField,
  Link as JssLink,
  type ComponentParams,
  type ComponentRendering,
} from '@sitecore-content-sdk/nextjs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Upload } from 'lucide-react';

type Fields = {
  Heading: TextField;
  Action1Text: TextField;
  Action1Link: LinkField;
  Action1Icon: TextField;
  Action2Text: TextField;
  Action2Link: LinkField;
  Action2Icon: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

const defaultFields: Fields = {
  Heading: { value: 'Quick Actions' },
  Action1Text: { value: 'Update Company Information' },
  Action1Link: { value: { href: '/company', text: 'Update Company Information' } },
  Action1Icon: { value: 'FileText' },
  Action2Text: { value: 'Upload Documents' },
  Action2Link: { value: { href: '/documents', text: 'Upload Documents' } },
  Action2Icon: { value: 'Upload' },
};

export default function QuickActionsCard(props: ComponentProps): JSX.Element {
  const id = props.rendering.uid;
  const fields = defaultFields; //props.fields ||

  return (
    <Card key={id}>
      <CardHeader>
        <CardTitle>
          <Text field={fields.Heading} />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
          <JssLink field={fields.Action1Link}>
            <FileText className="mr-2 h-4 w-4" />
            <Text field={fields.Action1Text} />
          </JssLink>
        </Button>
        <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
          <JssLink field={fields.Action2Link}>
            <Upload className="mr-2 h-4 w-4" />
            <Text field={fields.Action2Text} />
          </JssLink>
        </Button>
      </CardContent>
    </Card>
  );
}

export const Default = QuickActionsCard;
