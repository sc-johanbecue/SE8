import type React from 'react';
import { TextField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import 'bootstrap-icons/font/bootstrap-icons.css';

import 'animate.css';
import Link from 'next/link';

interface Fields {
  icons: SocialIcon[];
  size: TextField;
}

interface SocialIcon {
  name: TextField;
  icon: TextField;
  url: LinkField;
}

interface MainHeroProps {
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

  const icons = [
    { name: 'Facebook', icon: 'facebook', url: 'https://facebook.com' },
    { name: 'Twitter', icon: 'twitter', url: 'https://twitter.com' },
    { name: 'Instagram', icon: 'instagram', url: 'https://instagram.com' },
    { name: 'YouTube', icon: 'youtube', url: 'https://youtube.com' },
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com' },
  ];
  const iconSize = (props.fields?.size?.value as 'sm' | 'md' | 'lg') || 'sm';

  const sizeClass = {
    sm: 'fs-6',
    md: 'fs-5',
    lg: 'fs-4',
  }[iconSize];

  if (props.fields) {
    return (
      <div
        className={`component social-icons d-flex gap-3 ${props.params.styles}`}
        key={id ? id : undefined}
        id={id ? id : undefined}
      >
        {icons.map((icon, index) => (
          <Link
            key={index}
            href={icon.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            <i className={`bi bi-${icon.icon} ${sizeClass}`}></i>
            <span className="visually-hidden">{icon.name}</span>
          </Link>
        ))}
      </div>
    );
  }

  return <MainHeroDefaultComponent {...props} />;
};
