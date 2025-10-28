import React, { JSX } from 'react';
import { Placeholder, ComponentParams, ComponentRendering } from '@sitecore-content-sdk/nextjs';

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const phFooterLinkListContainer = `abnamroFooterLinkListContainer-${props.params.DynamicPlaceholderId}`;

  return (
    <div className="bg-[#005e5d] text-white" key={id}>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <Placeholder name={phFooterLinkListContainer} rendering={props.rendering} />
        </div>
      </div>
    </div>
  );
};
