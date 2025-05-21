import type React from 'react';
import Link from 'next/link';
import { Nav } from 'react-bootstrap';
import { ComponentRendering, ComponentParams } from '@sitecore-jss/sitecore-jss-nextjs';

import 'animate.css';

type TopMenuProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
};

const TopMenuDefaultComponent = (props: TopMenuProps): JSX.Element => (
  <div className={`component TopMenu ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">TopMenu</span>
    </div>
  </div>
);

export const Default = (props: TopMenuProps): JSX.Element => {
  const items = [
    { text: 'Professional', href: '/professional' },
    { text: 'About Us', href: '/about-us' },
    { text: 'Contact', href: '/contact' },
    { text: 'My Geberit', href: '/my-geberit' },
  ];
  return (
    <Nav className="top-menu justify-content-end">
      {items.map((item, index) => (
        <Nav.Item key={index}>
          <Link href={item.href} passHref legacyBehavior>
            <Nav.Link className="px-3 py-1">{item.text}</Nav.Link>
          </Link>
        </Nav.Item>
      ))}
    </Nav>
  );

  return <TopMenuDefaultComponent {...props} />;
};
