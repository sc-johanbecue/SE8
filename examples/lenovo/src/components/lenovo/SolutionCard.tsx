import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type ImageField,
  Image,
  type LinkField,
  Link,
  type ComponentParams,
  type ComponentRendering,
} from '@sitecore-content-sdk/nextjs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

type Fields = {
  BackgroundImage: ImageField;
  Title: TextField;
  Description: TextField;
  Badge: TextField;
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
  BackgroundImage: { value: { src: '/digital-workspace.jpg', alt: 'Digital Workplace' } },
  Title: { value: 'Digital Workplace' },
  Description: { value: 'Modern workplace solutions for hybrid work environments' },
  Badge: { value: 'Lenovo' },
  ButtonText: { value: 'View solutions' },
  ButtonLink: { value: { href: '/solutions/digital-workplace', text: 'View solutions' } },
  GradientFrom: { value: 'from-blue-500' },
  GradientTo: { value: 'to-cyan-500' },
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const fields = props.fields || defaultFields;

  return (
    <Card key={id} className="group hover:shadow-lg transition-shadow">
      <div
        className={`aspect-video bg-gradient-to-br ${fields.GradientFrom.value} ${fields.GradientTo.value} relative overflow-hidden`}
      >
        <div className="absolute inset-0 opacity-20">
          <Image field={fields.BackgroundImage} className="w-full h-full object-cover" />
        </div>
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>
            <Text field={fields.Title} />
          </CardTitle>
          <span className="text-xs bg-[#E2231A] text-white px-2 py-1 rounded">
            <Text field={fields.Badge} />
          </span>
        </div>
        <CardDescription>
          <Text field={fields.Description} />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          variant="outline"
          className="w-full group-hover:bg-[#E2231A] group-hover:text-white group-hover:border-[#E2231A] bg-transparent"
          asChild
        >
          <Link field={fields.ButtonLink}>
            <Text field={fields.ButtonText} /> <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};
