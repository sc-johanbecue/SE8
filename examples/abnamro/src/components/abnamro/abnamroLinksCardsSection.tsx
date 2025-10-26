import React, { JSX } from 'react';
import { ComponentParams, ComponentRendering, Placeholder } from '@sitecore-content-sdk/nextjs';

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const phCardsContainer = `abnamroLinksCardsContainer-${props.params.DynamicPlaceholderId}`;

  return (
    <section className="py-12 md:py-16 bg-gray-50" key={id}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-8">
          <Placeholder name={phCardsContainer} rendering={props.rendering} />
        </div>
      </div>
    </section>
  );
};
