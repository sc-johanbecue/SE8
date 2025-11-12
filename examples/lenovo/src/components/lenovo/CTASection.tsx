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
  ButtonText: TextField;
  ButtonLink: LinkField;
  BackgroundColor: TextField;
  TextColor: TextField;
};

type ComponentProps = {
  rendering?: ComponentRendering & { params: ComponentParams };
  params?: ComponentParams;
  fields?: Fields;
};

const defaultFields: Fields = {
  Heading: { value: 'Ready to grow your business?' },
  Description: {
    value:
      '<p>Join thousands of partners already leveraging Lenovo solutions to drive customer success and business growth</p>',
  },
  ButtonText: { value: 'Access Partner Portal' },
  ButtonLink: { value: { href: '/login', text: 'Access Partner Portal' } },
  BackgroundColor: { value: 'bg-slate-900' },
  TextColor: { value: 'text-white' },
};

export default function CTASection(props?: ComponentProps): JSX.Element {
  const id = props?.rendering?.uid || 'cta-section';
  const fields = props?.fields || defaultFields;
  const isSitecoreContext = !!props?.rendering;

  return (
    <section key={id} className={`py-16 ${fields.BackgroundColor.value} ${fields.TextColor.value}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            <Text field={fields.Heading} />
          </h2>
          <div className="text-gray-300 mb-8 text-pretty">
            <RichText field={fields.Description} />
          </div>
          <Button asChild size="lg" className="bg-[#E2231A] hover:bg-[#C11D15]">
            {isSitecoreContext ? (
              <SitecoreLink field={fields.ButtonLink}>
                <Text field={fields.ButtonText} /> <ArrowRight className="ml-2 h-4 w-4" />
              </SitecoreLink>
            ) : (
              <Link href={fields.ButtonLink.value?.href || '/login'}>
                <Text field={fields.ButtonText} /> <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
}

// Named export for Sitecore XM Cloud compatibility
export const Default = CTASection;
