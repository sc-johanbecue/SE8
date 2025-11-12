import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type ImageField,
  Image,
  type ComponentParams,
  type ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

type Fields = {
  BackgroundImage: ImageField;
  Title: TextField;
  GradientFrom: TextField;
  GradientTo: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

const defaultFields: Fields = {
  BackgroundImage: {
    value: { src: '/lenovo-partner-hub.jpg', alt: 'Lenovo Partner Hub User Guides' },
  },
  Title: { value: 'Lenovo Partner Hub: User Guides' },
  GradientFrom: { value: 'from-blue-500' },
  GradientTo: { value: 'to-cyan-500' },
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const fields = props.fields || defaultFields;

  return (
    <div
      key={id}
      className={`relative rounded-lg overflow-hidden aspect-video bg-gradient-to-br ${fields.GradientFrom.value} ${fields.GradientTo.value}`}
    >
      <div className="absolute inset-0 opacity-20">
        <Image field={fields.BackgroundImage} className="w-full h-full object-cover" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
        <p className="text-white text-sm font-medium">
          <Text field={fields.Title} />
        </p>
      </div>
    </div>
  );
};
