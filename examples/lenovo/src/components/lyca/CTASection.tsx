import { JSX } from 'react';
import {
  TextField,
  Text,
  LinkField,
  Link as JssLink,
  ImageField,
  Image as JssImage,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

type Fields = {
  Text: TextField;
  Link: LinkField;
  Icon: ImageField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;

  return (
    <section key={id} className="bg-[#0066ff] py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4">
          <JssLink field={props.fields.Link}>
            <span className="text-white font-semibold text-lg flex">
              <JssImage field={props.fields.Icon} />
              <Text field={props.fields.Text} />
            </span>
          </JssLink>
        </div>
      </div>
    </section>
  );
};
