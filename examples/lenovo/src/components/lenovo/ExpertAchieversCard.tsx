import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type LinkField,
  Link as SitecoreLink,
  type ComponentParams,
  type ComponentRendering,
} from '@sitecore-content-sdk/nextjs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, TrendingUp } from 'lucide-react';
import Link from 'next/link';

type Fields = {
  Heading: TextField;
  PointsToClaimLabel: TextField;
  PointsToClaimValue: TextField;
  PointsToRedeemLabel: TextField;
  PointsToRedeemValue: TextField;
  Description: TextField;
  ButtonText: TextField;
  ButtonLink: LinkField;
  GradientFrom: TextField;
  GradientTo: TextField;
};

type ComponentProps = {
  rendering?: ComponentRendering & { params: ComponentParams };
  params?: ComponentProps;
  fields?: Fields;
};

const defaultFields: Fields = {
  Heading: { value: 'Lenovo 360 Expert Achievers Program' },
  PointsToClaimLabel: { value: 'Points to Claim' },
  PointsToClaimValue: { value: '0' },
  PointsToRedeemLabel: { value: 'Points to Redeem' },
  PointsToRedeemValue: { value: '0' },
  Description: { value: 'Jump to LEAP and start earning on eligible Lenovo activities now!' },
  ButtonText: { value: 'Start Earning' },
  ButtonLink: { value: { href: '/leap', text: 'Start Earning' } },
  GradientFrom: { value: 'from-slate-800' },
  GradientTo: { value: 'to-slate-900' },
};

export default function ExpertAchieversCard(props?: ComponentProps): JSX.Element {
  const id = props?.rendering?.uid || 'expert-achievers-card';
  const fields = props?.fields || defaultFields;
  const isSitecoreContext = !!props?.rendering;

  return (
    <Card
      key={id}
      className={`bg-gradient-to-br ${fields.GradientFrom.value} ${fields.GradientTo.value} text-white`}
    >
      <CardHeader>
        <CardTitle>
          <Text field={fields.Heading} />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
          <div>
            <p className="text-sm opacity-80">
              <Text field={fields.PointsToClaimLabel} />
            </p>
            <p className="text-2xl font-bold">
              <Text field={fields.PointsToClaimValue} />
            </p>
          </div>
          <Award className="h-8 w-8 opacity-80" />
        </div>
        <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
          <div>
            <p className="text-sm opacity-80">
              <Text field={fields.PointsToRedeemLabel} />
            </p>
            <p className="text-2xl font-bold">
              <Text field={fields.PointsToRedeemValue} />
            </p>
          </div>
          <TrendingUp className="h-8 w-8 opacity-80" />
        </div>
        <p className="text-sm opacity-80">
          <Text field={fields.Description} />
        </p>
        <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
          {isSitecoreContext ? (
            <SitecoreLink field={fields.ButtonLink}>
              <Text field={fields.ButtonText} />
            </SitecoreLink>
          ) : (
            <Link href={fields.ButtonLink.value?.href || '/leap'}>
              <Text field={fields.ButtonText} />
            </Link>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}

export const Default = ExpertAchieversCard;
