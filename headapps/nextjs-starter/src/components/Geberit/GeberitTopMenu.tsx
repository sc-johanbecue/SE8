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

interface TopMenuItem {
  fields: {
    Text: TextField;
    Href: LinkField;
  };
}

type TopMenuProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: {
    MenuItems: TopMenuItem[];
  };
};

const TopMenuDefaultComponent = (props: TopMenuProps): JSX.Element => (
  <div className={`component TopMenu ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">TopMenu</span>
    </div>
  </div>
);

export const Default = (props: TopMenuProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const items = props.fields.MenuItems || [];

  return (
    <div
      className={`component sc-446dc962-0 gYlZIO`}
      key={id ? id : undefined}
      id={id ? id : undefined}
    >
      <ul className="sc-446dc962-1 llYepF">
        {items.map((item, index) => (
          <li className="sc-821ebc6d-1 hkLOLM with-border" key={index}>
            <JssLink className="sc-28a4cd60-0 jaagoI gtm-utm-ignored-link" field={item.fields.Href}>
              <Text field={item.fields.Text} />
            </JssLink>
          </li>
        ))}
      </ul>
    </div>
  );

  return <TopMenuDefaultComponent {...props} />;
};
