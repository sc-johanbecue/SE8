import type React from 'react';
import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type ComponentParams,
  type ComponentRendering,
} from '@sitecore-content-sdk/nextjs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Laptop, Tablet, Monitor, Server, HardDrive, Wifi } from 'lucide-react';
import Link from 'next/link';

type Fields = {
  Heading: TextField;
  Description: TextField;
  // Category 1
  Category1Name: TextField;
  Category1Description: TextField;
  Category1Icon: TextField;
  Category1ItemCount: TextField;
  Category1Link: TextField;
  // Category 2
  Category2Name: TextField;
  Category2Description: TextField;
  Category2Icon: TextField;
  Category2ItemCount: TextField;
  Category2Link: TextField;
  // Category 3
  Category3Name: TextField;
  Category3Description: TextField;
  Category3Icon: TextField;
  Category3ItemCount: TextField;
  Category3Link: TextField;
  // Category 4
  Category4Name: TextField;
  Category4Description: TextField;
  Category4Icon: TextField;
  Category4ItemCount: TextField;
  Category4Link: TextField;
  // Category 5
  Category5Name: TextField;
  Category5Description: TextField;
  Category5Icon: TextField;
  Category5ItemCount: TextField;
  Category5Link: TextField;
  // Category 6
  Category6Name: TextField;
  Category6Description: TextField;
  Category6Icon: TextField;
  Category6ItemCount: TextField;
  Category6Link: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

const iconMap: Record<string, React.ElementType> = {
  laptop: Laptop,
  tablet: Tablet,
  monitor: Monitor,
  server: Server,
  harddrive: HardDrive,
  wifi: Wifi,
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;

  const categories = [
    {
      name: props.fields.Category1Name,
      description: props.fields.Category1Description,
      icon: props.fields.Category1Icon,
      itemCount: props.fields.Category1ItemCount,
      link: props.fields.Category1Link,
    },
    {
      name: props.fields.Category2Name,
      description: props.fields.Category2Description,
      icon: props.fields.Category2Icon,
      itemCount: props.fields.Category2ItemCount,
      link: props.fields.Category2Link,
    },
    {
      name: props.fields.Category3Name,
      description: props.fields.Category3Description,
      icon: props.fields.Category3Icon,
      itemCount: props.fields.Category3ItemCount,
      link: props.fields.Category3Link,
    },
    {
      name: props.fields.Category4Name,
      description: props.fields.Category4Description,
      icon: props.fields.Category4Icon,
      itemCount: props.fields.Category4ItemCount,
      link: props.fields.Category4Link,
    },
    {
      name: props.fields.Category5Name,
      description: props.fields.Category5Description,
      icon: props.fields.Category5Icon,
      itemCount: props.fields.Category5ItemCount,
      link: props.fields.Category5Link,
    },
    {
      name: props.fields.Category6Name,
      description: props.fields.Category6Description,
      icon: props.fields.Category6Icon,
      itemCount: props.fields.Category6ItemCount,
      link: props.fields.Category6Link,
    },
  ].filter((cat) => cat.name.value);

  return (
    <section key={id} className="py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">
          <Text field={props.fields.Heading} />
        </h2>
        <p className="text-muted-foreground">
          <Text field={props.fields.Description} />
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => {
          const IconComponent = iconMap[category.icon.value as string] || Laptop;
          return (
            <Link key={index} href={category.link.value as string}>
              <Card className="hover:shadow-lg transition-all hover:border-[#E2231A]/50 h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#E2231A]/10 to-[#E2231A]/5 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-[#E2231A]" />
                    </div>
                    <CardTitle className="text-xl">
                      <Text field={category.name} />
                    </CardTitle>
                  </div>
                  <CardDescription>
                    <Text field={category.description} />
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm font-semibold text-[#E2231A]">
                    <Text field={category.itemCount} />
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
