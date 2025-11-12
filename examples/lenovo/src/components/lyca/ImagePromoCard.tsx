import { JSX } from 'react';
import {
  ImageField,
  Image as JssImage,
  LinkField,
  Link as JssLink,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

type Fields = {
  Image: ImageField;
  Link: LinkField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  return (
    <div
      key={id}
      className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(50%-12px)] flex justify-center"
    >
      {props.fields.Link.value ? (
        <JssLink field={props.fields.Link}>
          <JssImage field={props.fields.Image} />
        </JssLink>
      ) : (
        <JssImage field={props.fields.Image} />
      )}
    </div>
  );
};
