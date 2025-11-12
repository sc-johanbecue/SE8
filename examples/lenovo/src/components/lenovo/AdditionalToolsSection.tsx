import type React from 'react';
import type { JSX } from 'react';
import {
  type TextField,
  type ComponentParams,
  type ComponentRendering,
  Placeholder,
} from '@sitecore-content-sdk/nextjs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, FileText, Calculator, ShoppingCart } from 'lucide-react';

type Fields = {
  SectionTitle: TextField;
  tools?: {
    title: TextField;
    description: TextField;
    icon: TextField;
    link: TextField;
  }[];
};

type ComponentProps = {
  rendering?: ComponentRendering & { params?: ComponentParams };
  params?: ComponentParams;
  fields?: Fields;
};

const defaultFields: Fields = {
  SectionTitle: { value: 'Additional Tools' },
  tools: [
    {
      title: { value: 'Infrastructure Solutions Configurator (DCSG)' },
      description: { value: 'Build and price Lenovo server, storage, and networking solutions' },
      icon: { value: 'settings' },
      link: { value: '/tools/configurator' },
    },
    {
      title: { value: 'PSREF Book' },
      description: { value: 'Product specifications reference with detailed technical specs' },
      icon: { value: 'filetext' },
      link: { value: '/tools/psref' },
    },
    {
      title: { value: 'Withdrawn Products' },
      description: { value: 'View products that have been discontinued or withdrawn' },
      icon: { value: 'calculator' },
      link: { value: '/tools/withdrawn' },
    },
    {
      title: { value: 'Lenovo Catalog Center' },
      description: { value: 'Find Lenovo product pricing and manage connected pricing' },
      icon: { value: 'shoppingcart' },
      link: { value: '/tools/catalog' },
    },
  ],
};

const iconMap: Record<string, React.ElementType> = {
  settings: Settings,
  filetext: FileText,
  calculator: Calculator,
  shoppingcart: ShoppingCart,
};

export default function AdditionalToolsSection(props?: ComponentProps): JSX.Element {
  const id = props?.rendering?.uid || 'additional-tools-section';
  const fields = props?.fields || defaultFields;
  const phToolCards = props?.params?.DynamicPlaceholderId
    ? `lenovoToolCards-${props.params.DynamicPlaceholderId}`
    : null;

  return (
    <section id={id} className="py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">{fields.SectionTitle.value}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {phToolCards && props?.rendering ? (
          <Placeholder name={phToolCards} rendering={props.rendering} />
        ) : (
          fields.tools?.map((tool, index) => {
            const IconComponent = iconMap[tool.icon.value as string] || Settings;
            return (
              <Card
                key={index}
                className="hover:shadow-lg transition-all hover:border-[#E2231A]/50"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#E2231A]/10 to-[#E2231A]/5 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-[#E2231A]" />
                    </div>
                    <CardTitle className="text-xl">{tool.title.value}</CardTitle>
                  </div>
                  <CardDescription>{tool.description.value}</CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href={tool.link.value as string}
                    className="text-sm font-semibold text-[#E2231A] hover:underline inline-flex items-center gap-1"
                  >
                    Open Tool →
                  </a>
                </CardContent>
              </Card>
            );
          })
        )}
      </div>
    </section>
  );
}

export const Default = AdditionalToolsSection;
