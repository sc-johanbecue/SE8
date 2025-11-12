import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type ComponentParams,
  type ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

type Fields = {
  WelcomeText: TextField;
  UserNamePlaceholder: TextField;
  SubText: TextField;
  GradientFrom: TextField;
  GradientTo: TextField;
};

type ComponentProps = {
  rendering?: ComponentRendering & { params: ComponentParams };
  params?: ComponentParams;
  fields?: Fields;
};

const defaultFields: Fields = {
  WelcomeText: { value: 'Welcome' },
  UserNamePlaceholder: { value: 'Partner' },
  SubText: { value: 'Get to know your partner portal' },
  GradientFrom: { value: 'from-purple-600' },
  GradientTo: { value: 'to-blue-600' },
};

export default function DashboardWelcomeBanner(props?: ComponentProps): JSX.Element {
  const id = props?.rendering?.uid || 'dashboard-welcome-banner';
  const fields = props?.fields || defaultFields;

  return (
    <div
      key={id}
      className={`bg-gradient-to-r ${fields.GradientFrom.value} ${fields.GradientTo.value} text-white rounded-lg p-6 mb-8`}
    >
      <h1 className="text-2xl md:text-3xl font-bold mb-2">
        <Text field={fields.WelcomeText} /> <Text field={fields.UserNamePlaceholder} />!
      </h1>
      <p className="text-purple-100">
        <Text field={fields.SubText} />
      </p>
    </div>
  );
}

export const Default = DashboardWelcomeBanner;
