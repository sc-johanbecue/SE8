import React, { JSX } from 'react';
import {
  RichTextField,
  RichText,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

type Fields = {
  Text: RichTextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  return (
    <section className="bg-white py-12 md:py-16" key={id}>
      <div className="container bg-white  mx-auto px-4">
        <div className="bg-white mx-auto max-w-4xl text-center">
          <RichText
            field={props.fields.Text}
            className="bg-white text-pretty text-lg leading-relaxed text-gray-800 md:text-xl md:leading-relaxed article"
          />
        </div>
      </div>
    </section>
  );
};
