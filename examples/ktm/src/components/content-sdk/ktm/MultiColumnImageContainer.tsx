import {
  ComponentParams,
  ComponentRendering,
  Placeholder,
} from '@sitecore-content-sdk/nextjs';
import React, { JSX } from 'react';


type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const phContainer = `KtmImageItemContainer-${props.params.DynamicPlaceholderId}`;

  return (
    <div className="responsivegrid-3-columns responsivegrid aem-GridColumn aem-GridColumn--default--12">
      <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 aem-Grid--phone--12">
        <Placeholder name={phContainer} rendering={props.rendering} />
      </div>
    </div>
  );
};
