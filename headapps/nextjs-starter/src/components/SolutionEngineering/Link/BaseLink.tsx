// BaseLink.tsx
import React, { JSX } from 'react';
import { LinkField, Link as JssLink } from '@sitecore-content-sdk/nextjs';

type BaseLinkProps = {
  link: LinkField;
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export const BaseLink = ({ link, children, className, id }: BaseLinkProps): JSX.Element => {
  if (!link?.value?.url) {
    return <>{children}</>; // no link? just return the content
  }

  return (
    <JssLink field={link} className={className} id={id} editable={false}>
      {children}
    </JssLink>
  );
};
