import {
  ComponentParams,
  ComponentRendering,
  TextField,
  Placeholder,
  Text,
} from '@sitecore-content-sdk/nextjs';
import React, { JSX } from 'react';

type ItemFields = {
  Heading: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: ItemFields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const phCardContainer = `KtmDiscoverItemContainer-${props.params.DynamicPlaceholderId}`;

  console.log('ktm discoverSection props:', JSON.stringify(props));
  return (
    <>
      <div className="htmlSourceCode aem-GridColumn aem-GridColumn--default--12">
        <div className="component">
          <h2 style={{ textAlign: 'center' }}>
            <Text field={props.fields.Heading} />
          </h2>
        </div>
      </div>
      <div className="responsivegrid-4-columns responsivegrid aem-GridColumn aem-GridColumn--default--12">
        <div className="aem-Grid aem-Grid--12 aem-Grid--tablet--12 aem-Grid--default--12 aem-Grid--phone--12">
          <Placeholder name={phCardContainer} rendering={props.rendering} />
        </div>
      </div>
    </>
  );
};
