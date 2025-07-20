import React from 'react';
import { Link as JssLink, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  CTALink: LinkField;
}
type CTALinkProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const CTALinkDefaultComponent = (props: CTALinkProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: CTALinkProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  if (props.fields) {
    return (
      <div className={`component ${props.params.styles}`} id={id ? id : undefined}>
        <ul className="listCta">
          <li className="listCta__item listCta__item--bgGrey">
            <span className="icon-globe listCta__img"></span>
            <span className="listCta__subtitle listCta__subtitle--topBottom listCta__subtitle--font20">
              <JssLink field={props.fields.CTALink} className="listCta__link" />
            </span>
            <span className="icon-link-arrow-right listCta__linkArrow"></span>
          </li>
        </ul>
      </div>
    );
  }

  return <CTALinkDefaultComponent {...props} />;
};
