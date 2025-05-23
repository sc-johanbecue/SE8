import type React from 'react';
import {
  TextField,
  LinkField,
  Text,
  Link as JssLink,
  ComponentRendering,
  ComponentParams,
} from '@sitecore-jss/sitecore-jss-nextjs';

import 'animate.css';

interface FooterNavigationItem {
  fields: {
    Text: TextField;
    Href: LinkField;
  };
}

type FooterNavigationProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: {
    NavigationItems: FooterNavigationItem[];
  };
};

const FooterNavigationDefaultComponent = (props: FooterNavigationProps): JSX.Element => (
  <div className={`component FooterNavigation ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">FooterNavigation</span>
    </div>
  </div>
);

export const Default = (props: FooterNavigationProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const items = props.fields.NavigationItems || [];

  return (
    <>
      {/* div style={{display: "flex", flexBasis: "100%", flexWrap: "wrap"}} */}
      {items.map((item, index) => (
        <JssLink
          className={`component noArrow gtm-utm-ignored-link ${props.params.styles}`}
          key={index}
          id={id ? id : undefined}
          field={item.fields.Href}
          aria-label={item.fields.Text.value?.toString()}
        >
          <Text field={item.fields.Text} />
        </JssLink>
      ))}
    </>
  );

  return <FooterNavigationDefaultComponent {...props} />;
};
