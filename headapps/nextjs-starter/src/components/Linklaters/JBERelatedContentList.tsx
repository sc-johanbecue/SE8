import React from 'react';
import {
  Placeholder,
  ComponentRendering,
  ComponentParams,
  TextField,
  Text,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: TextField;
}

type LinkLatersRelatedContentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const LinkLatersRelatedContentDefaultComponent = (
  props: LinkLatersRelatedContentProps
): JSX.Element => (
  <div className={`component ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: LinkLatersRelatedContentProps): JSX.Element => {
  const phRelatedContent = `relatedContent-${props.params.DynamicPlaceholderId}`;

  if (props.fields) {
    return (
      <div className="linksWidget linksWidget--v2">
        <ul className="listCta">
          <li className="listCta__item listCta__item--noBorder listCta__item--bgGreyNoBorder">
            <h3 className="listCta__title listCta__title--light">
              <Text field={props.fields.Title} />
            </h3>
          </li>
          <Placeholder name={phRelatedContent} rendering={props.rendering} />
        </ul>
      </div>
    );
  }

  return <LinkLatersRelatedContentDefaultComponent {...props} />;
};
