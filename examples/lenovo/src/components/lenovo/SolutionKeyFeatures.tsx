import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type RichTextField,
  RichText,
  type ComponentParams,
  type ComponentRendering,
} from '@sitecore-content-sdk/nextjs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Monitor, Cloud, Shield, Zap, Users, TrendingUp } from 'lucide-react';

type Feature = {
  fields: {
    Title: TextField;
    Description: RichTextField;
  };
};

type Fields = {
  KeyFeaturesTitle: TextField;
  KeyFeaturesDescription: RichTextField;
  KeyFeatures: Feature[];
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering?.uid;
  const fields = props.fields;
  const icons = [Monitor, Cloud, Shield, Zap, Users, TrendingUp];

  return (
    <div key={id} className="mb-16 py-12 container mx-auto px-4 max-w-7xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          <Text field={fields.KeyFeaturesTitle} />
        </h2>
        <RichText field={fields.KeyFeaturesDescription} className="text-xl text-muted-foreground" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {props.fields.KeyFeatures.map((feature, index) => {
          const Icon = icons[index];
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 w-12 h-12 bg-[#E2231A]/10 rounded-lg flex items-center justify-center">
                  <Icon className="h-6 w-6 text-[#E2231A]" />
                </div>
                <CardTitle>
                  <Text field={feature.fields.Title} />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <RichText field={feature.fields.Description} />
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Default;
