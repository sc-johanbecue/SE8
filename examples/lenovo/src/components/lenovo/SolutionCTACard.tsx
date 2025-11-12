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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';
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
  Heading: { value: 'Need help finding the right solution?' },
  Description: {
    value:
      "<p>Our solution specialists are here to help you identify the best Lenovo solutions for your customers' unique needs. Get personalized guidance and support.</p>",
  },
  PrimaryButtonText: { value: 'Contact a Specialist' },
  PrimaryButtonLink: { value: { href: '/contact', text: 'Contact a Specialist' } },
  SecondaryButtonText: { value: 'Browse All Solutions' },
  SecondaryButtonLink: { value: { href: '/solutions', text: 'Browse All Solutions' } },
};

export default function SolutionCTACard(props?: ComponentProps): JSX.Element {
  const id = props?.rendering?.uid || 'solution-cta-card';
  const fields = props?.fields || defaultFields;
  const isSitecoreContext = !!props?.rendering;

  return (
    <Card key={id} className="bg-gradient-to-br from-slate-900 to-slate-800 text-white border-0">
      <CardHeader>
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-[#E2231A] rounded-lg flex items-center justify-center flex-shrink-0">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <div>
            <CardTitle className="text-2xl mb-2">
              <Text field={fields.Heading} />
            </CardTitle>
            <CardDescription className="text-gray-300">
              <RichText field={fields.Description} />
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" className="bg-[#E2231A] hover:bg-[#C11D15]">
            {isSitecoreContext ? (
              <SitecoreLink field={fields.PrimaryButtonLink}>
                <Text field={fields.PrimaryButtonText} /> <ArrowRight className="ml-2 h-4 w-4" />
              </SitecoreLink>
            ) : (
              <Link href={fields.PrimaryButtonLink.value?.href || '/contact'}>
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
      </CardContent>
    </Card>
  );
}

export const Default = SolutionCTACard;
