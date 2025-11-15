import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type ComponentParams,
  type ComponentRendering,
  Placeholder,
} from '@sitecore-content-sdk/nextjs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Award } from 'lucide-react';

type Fields = {
  Heading: TextField;
  Description: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

const defaultFields: Fields = {
  Heading: { value: 'Featured Training Programs' },
  Description: { value: 'Explore our most popular courses and certification paths' },
};

const defaultPrograms = [
  {
    title: 'Lenovo Solution Builder Fundamentals',
    description:
      'Master the basics of building and configuring Lenovo solutions for enterprise clients',
    duration: '8 hours',
    level: 'Beginner',
    enrolled: '1,234',
    category: 'Solutions',
  },
  {
    title: 'ThinkPad Advanced Configuration',
    description: 'Deep dive into ThinkPad configuration, customization, and deployment strategies',
    duration: '12 hours',
    level: 'Intermediate',
    enrolled: '856',
    category: 'Products',
  },
  {
    title: 'Data Center Solutions Expert',
    description: 'Become an expert in designing and implementing enterprise data center solutions',
    duration: '20 hours',
    level: 'Advanced',
    enrolled: '423',
    category: 'Infrastructure',
  },
  {
    title: 'Sales Excellence Program',
    description: 'Learn proven sales techniques and strategies for Lenovo products and services',
    duration: '10 hours',
    level: 'Intermediate',
    enrolled: '2,105',
    category: 'Sales',
  },
  {
    title: 'Cloud & Hybrid Solutions',
    description:
      'Master cloud integration and hybrid infrastructure solutions with Lenovo technologies',
    duration: '15 hours',
    level: 'Advanced',
    enrolled: '612',
    category: 'Cloud',
  },
  {
    title: 'Service & Support Certification',
    description:
      'Get certified in providing exceptional service and technical support for Lenovo products',
    duration: '6 hours',
    level: 'Beginner',
    enrolled: '1,890',
    category: 'Support',
  },
];

const getLevelColor = (level: string) => {
  switch (level.toLowerCase()) {
    case 'beginner':
      return 'bg-green-500';
    case 'intermediate':
      return 'bg-yellow-500';
    case 'advanced':
      return 'bg-red-500';
    default:
      return 'bg-gray-500';
  }
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const fields = props.fields || defaultFields;
  const phPrograms = `lenovoFeaturedPrograms-${props.params.DynamicPlaceholderId}`;

  return (
    <section id={id} className="mb-12 p-10">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">
          <Text field={fields.Heading} />
        </h2>
        <p className="text-muted-foreground">
          <Text field={fields.Description} />
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {defaultPrograms.map((program, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <Badge variant="secondary">{program.category}</Badge>
                <Badge className={getLevelColor(program.level)}>{program.level}</Badge>
              </div>
              <CardTitle className="text-xl">{program.title}</CardTitle>
              <CardDescription>{program.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-end">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{program.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{program.enrolled} enrolled</span>
                </div>
              </div>
              <Button className="w-full bg-[#E2231A] hover:bg-[#C41E16]">
                <Award className="h-4 w-4 mr-2" />
                Enroll Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <Placeholder name={phPrograms} rendering={props.rendering} />
    </section>
  );
};
