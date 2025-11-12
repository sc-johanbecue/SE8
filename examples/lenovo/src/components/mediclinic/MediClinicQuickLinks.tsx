import React, { JSX } from 'react';
import { Placeholder, ComponentParams, ComponentRendering } from '@sitecore-content-sdk/nextjs';

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
};

/**
 * MediClinic Quick Links Component
 * Grid of quick access service links
 */
export const Default = (props: ComponentProps): JSX.Element => {
  const phQuickLinksContainer = `MediClinicQuickLinksContainer-${props.params.DynamicPlaceholderId}`;

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        <Placeholder name={phQuickLinksContainer} rendering={props.rendering} />
      </div>
    </section>
  );
};
