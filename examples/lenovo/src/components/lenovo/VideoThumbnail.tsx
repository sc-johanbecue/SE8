import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type ImageField,
  Image as JssImage,
  type ComponentParams,
  type ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

type Fields = {
  BackgroundImage: ImageField;
  Title: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const fields = props.fields;

  return (
    <div key={id} className={`relative rounded-lg overflow-hidden aspect-video`}>
      <div className="absolute inset-0 opacity-75">
        <JssImage field={fields.BackgroundImage} className="w-full h-full object-cover" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
        <p className="text-white text-sm font-medium">
          <Text field={fields.Title} />
        </p>
      </div>
    </div>
  );
};
