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
  const phContainer = `KtmRecentlyLaunchedItemContainer-${props.params.DynamicPlaceholderId}`;

  console.log('ktm RecentlyLaunchedSection props:', JSON.stringify(props));
  return (
    <div className="responsivegrid-1-column responsivegrid aem-GridColumn aem-GridColumn--default--12">
      <div className="container">
        <div className="aem-Grid aem-Grid--12 aem-Grid--default--12">
          <div className="htmlSourceCode aem-GridColumn aem-GridColumn--default--12">
            <div className="component">
              <h2 style={{ textAlign: 'center' }}>
                <Text field={props.fields.Heading} />
              </h2>
            </div>
          </div>
          <div className="modelList aem-GridColumn--default--none aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--offset--default--0">
            <div className="c-model-list component">
              <div className="c-model-list__section-container">
                <section className="c-model-list__model-section">
                  <div className="c-model-list__row">
                    <Placeholder name={phContainer} rendering={props.rendering} />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
