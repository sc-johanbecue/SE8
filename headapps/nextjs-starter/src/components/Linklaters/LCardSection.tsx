import React from 'react';
import {
  TextField,
  Text,
  Placeholder,
  ComponentRendering,
  ComponentParams,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  SectionHeader: TextField;
}
type LCardSectionProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const LCardSectionDefaultComponent = (props: LCardSectionProps): JSX.Element => (
  <div className={`component ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);
export const Default = (props: LCardSectionProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const SectionCards = `sectionCards-${props.params.DynamicPlaceholderId}`;

  if (props.fields) {
    return (
      <div className={`component ${props.params.styles}`} id={id ? id : undefined}>
        <div className="card-section-header">
          <h1>
            <Text field={props.fields.SectionHeader} />
          </h1>
        </div>
        <div className="card-section">
          <Placeholder name={SectionCards} rendering={props.rendering} />
        </div>
      </div>
    );
  }
  console.log({ props });
  return <LCardSectionDefaultComponent {...props} />;
};
