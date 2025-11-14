import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type ComponentParams,
  type ComponentRendering,
} from '@sitecore-content-sdk/nextjs';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

type Benefit = {
  fields: {
    Description: TextField;
  };
};

type Fields = {
  BenefitsTitle: TextField;
  Benefits: Benefit[];
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering?.uid;
  const fields = props.fields;

  return (
    <div key={id} className="mb-16 py-12 container mx-auto px-4 max-w-7xl">
      <h2 className="text-3xl font-bold mb-8 text-center">
        <Text field={fields.BenefitsTitle} />
      </h2>

      <Card className="bg-gradient-to-br from-slate-50 to-slate-100">
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fields.Benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-[#E2231A] flex-shrink-0 mt-1" />
                <p className="text-lg">
                  <Text field={benefit.fields.Description} />
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Default;
