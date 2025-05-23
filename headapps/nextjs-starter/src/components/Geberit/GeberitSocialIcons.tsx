import type React from 'react';
import {
  ImageField,
  LinkField,
  ComponentRendering,
  ComponentParams,
  Image as JssImage,
  Link as JssLink,
} from '@sitecore-jss/sitecore-jss-nextjs';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'animate.css';

interface Fields {
  Socials: Social[];
}

interface Social {
  fields: {
    Image: ImageField;
    Href: LinkField;
  };
}

interface MainHeroProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
}

const MainHeroDefaultComponent = (props: MainHeroProps): JSX.Element => (
  <div className={`component MainHero ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">MainHero</span>
    </div>
  </div>
);

export const Default = (props: MainHeroProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  const socials = props.fields.Socials || [];

  if (props.fields) {
    return (
      <div
        className={`component c-footer__social ${props.params.styles}`}
        key={id ? id : undefined}
        id={id ? id : undefined}
      >
        {socials.map((social, index) => (
          <JssLink
            key={index}
            field={social.fields.Href}
            target="_blank"
            className="noArrow gtm-utm-ignored-link"
            rel="noopener noreferrer"
            aria-label="_blank"
          >
            <JssImage field={social.fields.Image} />
          </JssLink>
        ))}
      </div>
    );
  }

  return <MainHeroDefaultComponent {...props} />;
};
