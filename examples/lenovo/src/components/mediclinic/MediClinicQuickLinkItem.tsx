import React, { JSX } from 'react';
import {
  Link as JssLink,
  TextField,
  LinkField,
  Text,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';
import { Search, Users, MessageSquare, BookOpen, Activity, Calculator } from 'lucide-react';

type IconField = {
  fields: {
    Value: TextField;
  };
};

type QuickLinkItem = {
  Icon: IconField;
  Link: LinkField;
  LinkText: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: QuickLinkItem;
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  search: Search,
  users: Users,
  message: MessageSquare,
  book: BookOpen,
  activity: Activity,
  calculator: Calculator,
};

export const Default = (props: ComponentProps): JSX.Element => {
  const IconComponent = iconMap[props.fields.Icon?.fields.Value.value as string] || Search;
  const id = props.rendering.uid;

  return (
    <JssLink
      key={id}
      field={props.fields.Link}
      className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
    >
      <IconComponent className="w-5 h-5 text-cyan-500 flex-shrink-0" />
      <Text
        field={props.fields.LinkText}
        className="text-black-800 font-medium group-hover:text-cyan-600 transition-colors"
      />
    </JssLink>
  );
};
