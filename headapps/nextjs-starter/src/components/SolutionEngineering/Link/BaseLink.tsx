// BaseLink.tsx
import React, { JSX } from 'react';
import { LinkField, Link as JssLink } from '@sitecore-content-sdk/nextjs';
import { FontRenderingParameters } from 'lib/SolutionEngineering/XMC-BaseRenderingParameters/XMC-FontBaseRenderingParameters';

const debuggingEnabled = false;

type BaseLinkProps = {
  link: LinkField;
  children: React.ReactNode;
  className?: string;
  id?: string;
  fontRenderingParameters?: FontRenderingParameters | null;
  isNested?: boolean;
};

const varValue = (cssVar?: string) => (cssVar ? `var(${cssVar})` : undefined);

function buildStyle(params?: FontRenderingParameters | null): React.CSSProperties | undefined {
  if (!params) return undefined;

  const s: React.CSSProperties = {
    ...(params.fontFamily?.cssVar && { fontFamily: varValue(params.fontFamily.cssVar) }),
  };

  return Object.keys(s).length ? s : undefined;
}

export const BaseLink = ({
  link,
  children,
  className,
  id,
  fontRenderingParameters,
  isNested,
}: BaseLinkProps): JSX.Element => {
  const style = buildStyle(fontRenderingParameters);

  if (debuggingEnabled) {
    console.log('[BaseLink] - id:' + id);
    console.log('[BaseLink] - link:' + JSON.stringify(link));
    console.log('[BaseLink] - children:' + JSON.stringify(children));
    console.log('[BaseLink] - className:' + JSON.stringify(className));
    console.log('[BaseLink] - fontRenderingParameters:' + JSON.stringify(fontRenderingParameters));
    console.log('[BaseLink] - isNested:' + JSON.stringify(isNested));
  }

  if (!link?.value?.url) {
    return <>{children}</>; // no link? just return the content
  }

  return (
    <JssLink field={link} className={className} id={id} editable={false} style={style}>
      {children}
    </JssLink>
  );
};
