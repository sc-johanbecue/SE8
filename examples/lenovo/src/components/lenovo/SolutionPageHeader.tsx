import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type ImageField,
  Image as JssImage,
  type LinkField,
  Link as JssLink,
  type ComponentParams,
  type ComponentRendering,
} from '@sitecore-content-sdk/nextjs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

type Fields = {
  BackgroundImage: ImageField;
  Title: TextField;
  Subtitle: TextField;
  Description: TextField;
  Badge1: TextField;
  Badge2: TextField;
  Badge3: TextField;
  Gradient: TextField;
  BackLink: LinkField;
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
    <div
      key={id}
      className={`relative bg-gradient-to-br ${fields.Gradient.value} text-white overflow-hidden`}
    >
      <div className="absolute inset-0 opacity-10">
        <JssImage field={fields.BackgroundImage} className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 py-16 max-w-7xl relative z-10">
        <Button variant="ghost" className="text-white hover:text-white/80 mb-6 -ml-4" asChild>
          <JssLink field={props.fields.BackLink}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Solutions
          </JssLink>
        </Button>

        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-4">
            <Text field={fields.Title} />
          </h1>
          <p className="text-2xl mb-6 text-white/90">
            <Text field={fields.Subtitle} />
          </p>
          <p className="text-lg mb-8 text-white/80 leading-relaxed">
            <Text field={fields.Description} />
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1 px-3">
              <Text field={fields.Badge1} />
            </Badge>
            <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1 px-3">
              <Text field={fields.Badge2} />
            </Badge>
            <Badge className="bg-white/20 text-white hover:bg-white/30 text-sm py-1 px-3">
              <Text field={fields.Badge3} />
            </Badge>
          </div>

          <Button size="lg" className="bg-white text-[#E2231A] hover:bg-white/90">
            Contact Sales
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Default;
