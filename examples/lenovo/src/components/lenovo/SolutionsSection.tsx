import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type RichTextField,
  RichText,
  type ComponentParams,
  type ComponentRendering,
  Placeholder,
} from '@sitecore-content-sdk/nextjs';

type Fields = {
  Heading: TextField;
  Description: RichTextField;
};

type ComponentProps = {
  rendering?: ComponentRendering & { params: ComponentParams };
  params?: ComponentParams;
  fields?: Fields;
};

const defaultFields: Fields = {
  Heading: { value: 'Solution Hub' },
  Description: {
    value:
      '<p>Explore our comprehensive solutions designed to help you deliver exceptional value to your customers</p>',
  },
};

export default function SolutionsSection(props?: ComponentProps): JSX.Element {
  const id = props?.rendering?.uid || 'solutions-section';
  const fields = props?.fields || defaultFields;
  const phSolutionCards = `lenovoSolutionCards-${props?.params?.DynamicPlaceholderId || 'default'}`;

  return (
    <section key={id} className="py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <Text field={fields.Heading} />
          </h2>
          <div className="text-muted-foreground max-w-2xl mx-auto">
            <RichText field={fields.Description} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {props?.rendering ? (
            <Placeholder name={phSolutionCards} rendering={props.rendering} />
          ) : (
            <>
              <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#E2231A] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">🖥️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Digital Workplace</h3>
                <p className="text-muted-foreground mb-4">
                  Modern devices and solutions for hybrid work environments
                </p>
              </div>
              <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#E2231A] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">☁️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Hybrid Cloud / Data Center</h3>
                <p className="text-muted-foreground mb-4">
                  Flexible infrastructure for your evolving needs
                </p>
              </div>
              <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#E2231A] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Edge / AI Solutions</h3>
                <p className="text-muted-foreground mb-4">
                  Cutting-edge AI and edge computing capabilities
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export const Default = SolutionsSection;
