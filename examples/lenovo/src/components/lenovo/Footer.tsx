import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type ComponentParams,
  type ComponentRendering,
  Placeholder,
  RichTextField,
  RichText,
} from '@sitecore-content-sdk/nextjs';

type Fields = {
  LogoText: TextField;
  Description: RichTextField;
  CopyrightText: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const fields = props.fields;
  const phFooterLeftColumn = `lenovoLeftFooterColumnContainer-${props.params.DynamicPlaceholderId}`;
  const phFooterMiddleColumn = `lenovoMiddleFooterColumnContainer-${props.params.DynamicPlaceholderId}`;
  const phFooterRightColumn = `lenovoRightFooterColumnContainer-${props.params.DynamicPlaceholderId}`;

  return (
    <footer key={id} className="border-t bg-gray-50 mt-auto">
      <div className="container py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="bg-[#E2231A] px-3 py-1 text-white font-bold text-lg inline-block mb-4">
              <Text field={fields.LogoText} />
            </div>
            <RichText field={fields.Description} className="text-sm text-muted-foreground" />
          </div>

          <div>
            <Placeholder name={phFooterLeftColumn} rendering={props.rendering} />
          </div>
          <div>
            <Placeholder name={phFooterMiddleColumn} rendering={props.rendering} />
          </div>
          <div>
            <Placeholder name={phFooterRightColumn} rendering={props.rendering} />
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <Text field={fields.CopyrightText} />
        </div>
      </div>
    </footer>
  );
};

export default Default;
