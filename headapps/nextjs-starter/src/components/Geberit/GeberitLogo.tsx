import React from 'react';
import {
  useSitecoreContext,
  Image as JssImage,
  LinkField,
  ImageField,
  TextField,
  Text,
} from '@sitecore-jss/sitecore-jss-nextjs';

import 'animate.css';
import Link from 'next/link';

interface Fields {
  Href: LinkField;
  Logo: ImageField;
  Claim: TextField;
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
 *   - Logo: Image field (stores the logo image)
 *   - Href: Single-Line Text field (stores the link URL for the logo)
 */
export const Default = (props: LogoProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const href = props.fields?.Href?.value?.href || '';
  const { sitecoreContext } = useSitecoreContext();

  if (props.fields) {
    return (
      <div
        className={`component sc-eb953e09-2 dLnDNk ${props.params.styles}`}
        key={id ? id : undefined}
        id={id ? id : undefined}
      >
        {sitecoreContext.pageEditing ? (
          <Link
            tabIndex={0}
            id="logo"
            className="sc-f8ba61a8-1 bITiMD gtm-utm-ignored-link"
            href={href}
          >
            <JssImage field={props.fields.Logo} className="image" />

            <span className="claim">
              <Text field={props.fields.Claim} />
            </span>
          </Link>
        ) : (
          <>
            <JssImage field={props.fields.Logo} className="image" />
            <span className="claim">
              <Text field={props.fields.Claim} />
            </span>
          </>
        )}
      </div>
    );
  }
  return <LogoDefaultComponent {...props} />;
};
