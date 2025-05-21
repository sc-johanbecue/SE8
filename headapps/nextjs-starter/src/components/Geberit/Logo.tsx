import React from 'react';
import {
  Link as JssLink,
  Image as JssImage,
  LinkField,
  ImageField,
} from '@sitecore-jss/sitecore-jss-nextjs';

import 'animate.css';

interface Fields {
  href: LinkField;
  logo: ImageField;
}

type LogoProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const LogoDefaultComponent = (props: LogoProps): JSX.Element => (
  <div className={`component Logo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Logo</span>
    </div>
  </div>
);

/**
 * Logo component for displaying the site logo
 *
 * Sitecore XM Cloud Configuration:
 * - Template: "Logo"
 * - Fields:
 *   - logo: Image field (stores the logo image)
 *   - alt: Single-Line Text field (stores the alt text for the logo)
 *   - href: Single-Line Text field (stores the link URL for the logo)
 */
export const Default = (props: LogoProps): JSX.Element => {
  if (props.fields) {
    return (
      <div className="logo">
        <JssLink field={props.fields.href}>
          <JssImage field={props.fields.logo} priority />
        </JssLink>
      </div>
    );
  }
  return <LogoDefaultComponent {...props} />;
};
