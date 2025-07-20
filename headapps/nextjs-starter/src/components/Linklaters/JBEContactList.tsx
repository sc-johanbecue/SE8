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

type LinkLatersContactListProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const LinkLatersContactListDefaultComponent = (props: LinkLatersContactListProps): JSX.Element => (
  <div className={`component ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: LinkLatersContactListProps): JSX.Element => {
  const phContacts = `contacts-${props.params.DynamicPlaceholderId}`;

  if (props.fields) {
    return (
      <ul className={`listCta ${props.params.styles}`}>
        <li className="listCta__item listCta__item--bgGrey">
          <h5 className="listCta__title">
            <Text field={props.fields.Title} />
          </h5>
        </li>
        <Placeholder name={phContacts} rendering={props.rendering} />
      </ul>
    );
  }

  return <LinkLatersContactListDefaultComponent {...props} />;
};
