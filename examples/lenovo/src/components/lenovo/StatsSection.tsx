import type { JSX } from 'react';
import {
  type TextField,
  type ComponentParams,
  type ComponentRendering,
  Placeholder,
} from '@sitecore-content-sdk/nextjs';

type Fields = {
  BackgroundColor: TextField;
};

type ComponentProps = {
  rendering?: ComponentRendering & { params: ComponentParams };
  params?: ComponentParams;
  fields?: Fields;
};

const defaultFields: Fields = {
  BackgroundColor: { value: 'bg-gray-50' },
};

export default function StatsSection(props?: ComponentProps): JSX.Element {
  const id = props?.rendering?.uid || 'stats-section';
  const fields = props?.fields || defaultFields;
  const phStatsCards = `lenovoStatsCards-${props?.params?.DynamicPlaceholderId || 'default'}`;

  return (
    <section key={id} className={`py-16 ${fields.BackgroundColor.value}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {props?.rendering ? (
            <Placeholder name={phStatsCards} rendering={props.rendering} />
          ) : (
            <>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#E2231A] mb-2">15K+</div>
                <p className="text-muted-foreground">Active Partners</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#E2231A] mb-2">98%</div>
                <p className="text-muted-foreground">Customer Satisfaction</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#E2231A] mb-2">200+</div>
                <p className="text-muted-foreground">Solutions Available</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#E2231A] mb-2">24/7</div>
                <p className="text-muted-foreground">Partner Support</p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export const Default = StatsSection;
