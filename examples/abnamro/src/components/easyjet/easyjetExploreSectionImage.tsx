import React, { JSX } from 'react';
import {
  TextField,
  LinkField,
  ImageField,
  Image as JssImage,
  Text,
  Link as JssLink,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

interface Fields {
  Text: TextField;
  Image: ImageField;
  Link: LinkField;
}

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;

  return props.fields.Link.value.href ? (
    <JssLink
      field={props.fields.Link}
      className="relative aspect-[4/3] overflow-hidden rounded-lg"
      key={id}
    >
      <JssImage field={props.fields.Image} fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <Text
        tag="h3"
        field={props.fields.Text}
        className="absolute bottom-2 left-2 text-white font-bold text-base"
      />
    </JssLink>
  ) : (
    <div className="relative aspect-[4/3] overflow-hidden rounded-lg" key={id}>
      <JssImage field={props.fields.Image} fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <Text
        tag="h3"
        field={props.fields.Text}
        className="absolute bottom-2 left-2 text-white font-bold text-base"
      />
    </div>
  );
};

export { Default as EasyjetMaltaSection };
