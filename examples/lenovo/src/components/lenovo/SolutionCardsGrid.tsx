import type { JSX } from 'react';
import {
  type ComponentParams,
  type ComponentRendering,
  type TextField,
  type RichTextField,
  type LinkField,
  type ImageField,
  Image as JssImage,
  Text,
  RichText,
  Link as JssLink,
} from '@sitecore-content-sdk/nextjs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

type Solution = {
  name: string;
  fields: {
    Title: TextField;
    Description: RichTextField;
    Badge1: TextField;
    Link: LinkField;
    Gradient: TextField;
    BackgroundImage: ImageField;
  };
};

type Fields = {
  items: Solution[];
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export default function SolutionCardsGrid(props: ComponentProps): JSX.Element {
  const id = props.rendering?.uid;

  return (
    <div key={id} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {props.fields.items
        .filter((e) => e.name != 'Data')
        .map((solution, index) => (
          <Card key={index} className="group hover:shadow-lg transition-all hover:scale-105">
            <div
              className={`aspect-video bg-gradient-to-br ${solution.fields.Gradient.value} relative overflow-hidden flex items-center justify-center`}
            >
              <JssImage
                field={solution.fields.BackgroundImage}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="text-xl">
                  <Text field={solution.fields.Title} />
                </CardTitle>
                <span className="text-xs bg-[#E2231A] text-white px-2 py-1 rounded">
                  <Text field={solution.fields.Badge1} />
                </span>
              </div>
              <CardDescription>
                <RichText field={solution.fields.Description} />
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                className="w-full group-hover:bg-[#E2231A] group-hover:text-white group-hover:border-[#E2231A] bg-transparent transition-colors"
                asChild
              >
                <JssLink field={solution.fields.Link}>
                  {solution.fields.Link?.value.title}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </JssLink>
              </Button>
            </CardContent>
          </Card>
        ))}
    </div>
  );
}

export const Default = SolutionCardsGrid;
