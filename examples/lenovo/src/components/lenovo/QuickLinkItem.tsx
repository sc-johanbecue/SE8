import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type LinkField,
  Link,
  type ComponentParams,
  type ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

type Fields = {
  LinkText: TextField;
  LinkUrl: LinkField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

const defaultFields: Fields = {
  LinkText: { value: 'BID PLATFORM' },
  LinkUrl: { value: { href: '/bid-platform', text: 'BID PLATFORM' } },
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const fields = defaultFields; //props.fields ||

  return (
    <Link key={id} field={fields.LinkUrl} className="block text-sm text-blue-600 hover:underline">
      <Text field={fields.LinkText} />
    </Link>
  );
};
