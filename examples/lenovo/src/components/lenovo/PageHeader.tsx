import { JSX } from 'react';
import {
  TextField,
  Text,
  RichTextField,
  RichText,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

type Fields = {
  Heading: TextField;
  Tagline: TextField;
  Description: RichTextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export default function HeroSection(props: ComponentProps): JSX.Element {
  const id = props.rendering?.uid;
  const fields = props.fields;

  return (
    <section
      key={id}
      className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-8"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-3xl">
          <div className="mb-2 pt-2">
            <span className="text-sm font-semibold text-[#E2231A] uppercase tracking-wide ml-1">
              <Text field={fields.Tagline} />
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            <Text field={fields.Heading} />
          </h1>
          <div className="text-xl text-gray-300 mb-8 text-pretty">
            <RichText field={fields.Description} />
          </div>
        </div>
      </div>
    </section>
  );
}

export const Default = HeroSection;
