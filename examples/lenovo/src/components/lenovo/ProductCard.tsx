import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type LinkField,
  Link,
  type ImageField,
  type ComponentParams,
  type ComponentRendering,
} from '@sitecore-content-sdk/nextjs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Laptop } from 'lucide-react';

type Fields = {
  Title: TextField;
  Description: TextField;
  Icon: ImageField;
  IconName: TextField;
  CountBadge: TextField;
  ButtonText: TextField;
  ButtonLink: LinkField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

const defaultFields: Fields = {
  Title: { value: 'Laptops' },
  Description: { value: 'Explore our comprehensive range of laptops' },
  Icon: { value: { src: '/icons/laptop.svg', alt: 'Laptop Icon' } },
  IconName: { value: 'Laptop' },
  CountBadge: { value: '150+ models' },
  ButtonText: { value: 'View Products' },
  ButtonLink: { value: { href: '/products/laptops', text: 'View Products' } },
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const fields = props.fields || defaultFields;

  return (
    <Card key={id} className="group hover:shadow-lg transition-all hover:border-[#E2231A]">
      <CardHeader>
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-[#E2231A]/10 transition-colors">
            <Laptop className="h-6 w-6 group-hover:text-[#E2231A] transition-colors" />
          </div>
          <Badge variant="secondary">
            <Text field={fields.CountBadge} />
          </Badge>
        </div>
        <CardTitle>
          <Text field={fields.Title} />
        </CardTitle>
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
            <Text field={fields.ButtonText} />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};
