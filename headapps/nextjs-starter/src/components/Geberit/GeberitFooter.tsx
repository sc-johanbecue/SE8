import React from 'react'; //{ useState }
import {
  Placeholder,
  ComponentRendering,
  ComponentParams,
  TextField,
  LinkField,
  Text,
  Link as JssLink,
} from '@sitecore-jss/sitecore-jss-nextjs';
import 'animate.css';
import Link from 'next/link';

interface Fields {
  Copyright: TextField;
  CurrentCountryLabel: TextField;
  Country: TextField;
  CountryLink: LinkField;
}

type FooterProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const FooterDefaultComponent = (props: FooterProps): JSX.Element => (
  <div className={`component Footer ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Footer</span>
    </div>
  </div>
);

export const Default = (props: FooterProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  const phKeySocialIcons = `GeberitSocialIcons-${props.params.DynamicPlaceholderId}`;
  const phKeyFooterNavigation = `GeberitFooterNavigation-${props.params.DynamicPlaceholderId}`;

  if (props.fields) {
    return (
      <>
        <section
          className={`component grid-container ${props.params.styles}`}
          key={id ? id : undefined}
          id={id ? id : undefined}
        >
          <div className="c-footer__wrapper">
            <div className="c-footer__country-change">
              <p>
                <strong>
                  <Text field={props.fields.CurrentCountryLabel} />
                </strong>
                <JssLink className="noArrow gtm-utm-ignored-link" field={props.fields.CountryLink}>
                  <Text field={props.fields.Country} />
                </JssLink>
              </p>
            </div>
            <Placeholder name={phKeySocialIcons} rendering={props.rendering} />
            <div className="c-footer__nav">
              <p>
                <Text field={props.fields.Copyright} />
              </p>
              <Placeholder name={phKeyFooterNavigation} rendering={props.rendering} />
            </div>
          </div>
        </section>
        <Link href="#to-top" aria-label="to the top s" className="sc-d40cdb30-0 gptVcn">
          <i className="icon web20-icon web20-icon-chevron-large-up"></i>
        </Link>
        <div className="sc-d40cdb30-1 bFVQh"></div>
      </>
    );
  }
  return <FooterDefaultComponent {...props} />;
};
