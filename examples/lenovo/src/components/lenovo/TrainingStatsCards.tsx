import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type ComponentParams,
  type ComponentRendering,
  Placeholder,
} from '@sitecore-content-sdk/nextjs';
import { Card, CardContent } from '@/components/ui/card';

type Fields = {
  Heading: TextField;
  Stat1Label: TextField;
  Stat1Value: TextField;
  Stat1Description: TextField;
  Stat2Label: TextField;
  Stat2Value: TextField;
  Stat2Description: TextField;
  Stat3Label: TextField;
  Stat3Value: TextField;
  Stat3Description: TextField;
  Stat4Label: TextField;
  Stat4Value: TextField;
  Stat4Description: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

const defaultFields: Fields = {
  Heading: { value: 'Your Training Journey' },
  Stat1Label: { value: 'Courses Completed' },
  Stat1Value: { value: '12' },
  Stat1Description: { value: 'Keep learning to expand your expertise' },
  Stat2Label: { value: 'Certifications Earned' },
  Stat2Value: { value: '3' },
  Stat2Description: { value: 'Industry-recognized credentials' },
  Stat3Label: { value: 'Learning Hours' },
  Stat3Value: { value: '48' },
  Stat3Description: { value: 'Total training time invested' },
  Stat4Label: { value: 'Next Milestone' },
  Stat4Value: { value: 'Expert' },
  Stat4Description: { value: '2 more courses to reach expert level' },
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const fields = props.fields || defaultFields;

  const stats = [
    { label: fields.Stat1Label, value: fields.Stat1Value, description: fields.Stat1Description },
    { label: fields.Stat2Label, value: fields.Stat2Value, description: fields.Stat2Description },
    { label: fields.Stat3Label, value: fields.Stat3Value, description: fields.Stat3Description },
    { label: fields.Stat4Label, value: fields.Stat4Value, description: fields.Stat4Description },
  ];

  return (
    <section id={id} className="mb-12">
      <h2 className="text-2xl font-bold mb-6">
        <Text field={fields.Heading} />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="text-sm text-muted-foreground mb-2">
                <Text field={stat.label} />
              </div>
              <div className="text-3xl font-bold text-[#E2231A] mb-2">
                <Text field={stat.value} />
              </div>
              <div className="text-sm text-muted-foreground">
                <Text field={stat.description} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Placeholder name="training-stats-cards" rendering={props.rendering} />
    </section>
  );
};
