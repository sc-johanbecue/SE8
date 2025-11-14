import type { JSX } from 'react';
import {
  type TextField,
  Text,
  RichText,
  type RichTextField,
  type ImageField,
  Image as JssImage,
  type LinkField,
  Link as JssLink,
  type ComponentParams,
  type ComponentRendering,
} from '@sitecore-content-sdk/nextjs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

type Fields = {
  BackgroundImage: ImageField;
  Title: TextField;
  Description: RichTextField;
  Badge1: TextField;
  ButtonText: TextField;
  ButtonLink: LinkField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const fields = props.fields;

  return (
    <Card key={id} className="group hover:shadow-lg transition-shadow  flex flex-col h-full">
      <div className={`aspect-video relative overflow-hidden`}>
        <div className="absolute inset-0">
          <JssImage field={fields.BackgroundImage} className="w-full h-full object-cover" />
        </div>
      </div>
      <CardHeader className="flex-grow">
        <div className="flex items-start justify-between gap-2 mb-2">
          <CardTitle>
            <Text field={fields.Title} />
          </CardTitle>
          <span className="text-xs bg-[#E2231A] text-white px-2 py-1 rounded flex-shrink-0">
            <Text field={fields.Badge1} />
          </span>
        </div>
        <CardDescription>
          <RichText field={fields.Description} />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          variant="outline"
          className="w-full group-hover:bg-[#E2231A] group-hover:text-white group-hover:border-[#E2231A] bg-transparent"
          asChild
        >
          <JssLink field={fields.ButtonLink}>
            <Text field={fields.ButtonText} /> <ArrowRight className="ml-2 h-4 w-4" />
          </JssLink>
        </Button>
      </CardContent>
    </Card>
  );
};
