import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type RichTextField,
  RichText,
  type ComponentParams,
  type ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

type Fields = {
  Heading: TextField;
  Description: RichTextField;
  Tagline: TextField;
};

type ComponentProps = {
  rendering?: ComponentRendering & { params: ComponentParams };
  params?: ComponentParams;
  fields?: Fields;
};

const defaultFields: Fields = {
  Heading: { value: 'Lenovo 360 Solutions Hub' },
  Tagline: { value: 'Deliver exceptional value to your customers' },
  Description: {
    value:
      '<p>Access comprehensive solutions, resources, and tools designed to help partners maximize revenue, efficiency, and customer satisfaction. From digital workplace to edge AI, find everything you need to succeed.</p>',
  },
};

export default function SolutionHubHeader(props?: ComponentProps): JSX.Element {
  const id = props?.rendering?.uid || 'solution-hub-header';
  const fields = props?.fields || defaultFields;

  return (
    <div key={id} className="mb-12">
      <div className="mb-2">
        <span className="text-sm font-semibold text-[#E2231A] uppercase tracking-wide">
          <Text field={fields.Tagline} />
        </span>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
        <Text field={fields.Heading} />
      </h1>
      <div className="text-lg text-muted-foreground max-w-3xl text-pretty">
        <RichText field={fields.Description} />
      </div>
    </div>
  );
}

export const Default = SolutionHubHeader;
