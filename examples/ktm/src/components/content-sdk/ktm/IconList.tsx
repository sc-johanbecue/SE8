import {
  ComponentParams,
  ComponentRendering,
  TextField,
  Placeholder,
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
  const phContainer = `KtmIconListItemContainer-${props.params.DynamicPlaceholderId}`;

  console.log('ktm iconList props:', JSON.stringify(props));
  return (
    <div className="iconList aem-GridColumn aem-GridColumn--default--12" style={{margin: '0 -30px !important'}}>
      <div className="component c-icon-list-container">
        <div className="c-icon-list-wrapper">
          <div className="c-icon-list container">
            <Placeholder name={phContainer} rendering={props.rendering} />
          </div>
        </div>
      </div>
    </div>
  );
};
