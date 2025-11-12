import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type RichTextField,
  RichText,
  type LinkField,
  Link as SitecoreLink,
  type ComponentParams,
  type ComponentRendering,
} from '@sitecore-content-sdk/nextjs';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

type Fields = {
  Heading: TextField;
  Description: RichTextField;
  PrimaryButtonText: TextField;
  PrimaryButtonLink: LinkField;
  SecondaryButtonText: TextField;
  SecondaryButtonLink: LinkField;
};

type ComponentProps = {
  rendering?: ComponentRendering & { params: ComponentParams };
  params?: ComponentParams;
  fields?: Fields;
};

const defaultFields: Fields = {
  Heading: { value: 'Focus on delivering outcomes' },
  Description: {
    value:
      '<p>Maximize your revenue, efficiency and customer value with Lenovo 360 Solutions Hub</p>',
  },
  PrimaryButtonText: { value: 'Get Started' },
  PrimaryButtonLink: { value: { href: '/login', text: 'Get Started' } },
  SecondaryButtonText: { value: 'Explore Solutions' },
  SecondaryButtonLink: { value: { href: '/solutions', text: 'Explore Solutions' } },
};

export default function HeroSection(props?: ComponentProps): JSX.Element {
  const id = props?.rendering?.uid || 'hero-section';
  const fields = props?.fields || defaultFields;
  const isSitecoreContext = !!props?.rendering;

  return (
    <section
      key={id}
      className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            <Text field={fields.Heading} />
          </h1>
          <div className="text-xl text-gray-300 mb-8 text-pretty">
            <RichText field={fields.Description} />
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-[#E2231A] hover:bg-[#C11D15]">
              {isSitecoreContext ? (
                <SitecoreLink field={fields.PrimaryButtonLink}>
                  <Text field={fields.PrimaryButtonText} /> <ArrowRight className="ml-2 h-4 w-4" />
                </SitecoreLink>
              ) : (
                <Link href={fields.PrimaryButtonLink.value?.href || '/login'}>
                  <Text field={fields.PrimaryButtonText} /> <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              )}
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
            >
              {isSitecoreContext ? (
                <SitecoreLink field={fields.SecondaryButtonLink}>
                  <Text field={fields.SecondaryButtonText} />
                </SitecoreLink>
              ) : (
                <Link href={fields.SecondaryButtonLink.value?.href || '/solutions'}>
                  <Text field={fields.SecondaryButtonText} />
                </Link>
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export const Default = HeroSection;
