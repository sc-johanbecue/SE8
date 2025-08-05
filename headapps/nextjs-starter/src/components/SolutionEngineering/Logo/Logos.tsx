import React, { JSX } from 'react';
import {
  ImageField,
  LinkField,
  ComponentParams,
  ComponentRendering,
  GetStaticComponentProps,
} from '@sitecore-content-sdk/nextjs';

import { getTypedChildItems } from 'lib/SolutionEngineering/XMC-Content2';
import { getRenderingParameterLookupValue } from 'lib/SolutionEngineering/XMC-RenderingParameterLookup';

import * as LogoComponent from './Logo';
const Logo = LogoComponent.Default;

/**
 * Fetches typed child items (Icon + Link fields) for a given parent.
 */
async function getLogoChildren(parentId: string | undefined, language: string | undefined) {
  if (!parentId || !language) {
    console.warn('[getLogoChildren] Missing parentId or language.');
    return [];
  }

  const children = await getTypedChildItems<{
    Logo: ImageField;
    Link: LinkField;
  }>(parentId, language, ['Logo', 'Link']);

  return children;
}

/**
 * Child item structure returned by getLogoChildren.
 */
type LogoChild = {
  id: string;
  Logo: ImageField;
  Link: LinkField;
};

/**
 * Presentation-related props resolved from rendering parameters.
 */
type LogoPresentationProps = {
  children?: LogoChild[];
  iconSize: string;
  direction?: string;
  gap?: string;
};

/**
 * Final props type combining Sitecore rendering info + presentation props.
 */
type LogosContainerProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
} & LogoPresentationProps;

/**
 * Default component renderer for the Logos container.
 * Maps child items into <Logo> components with proper visual and interaction props.
 */
export const Default = (props: LogosContainerProps): JSX.Element => {
  const { rendering, params, children, iconSize, direction, gap } = props;

  const renderingId = params?.RenderingIdentifier;

  return (
    <div className={`component ${params?.styles || ''}`} id={renderingId || undefined}>
      <div className={`flex ${direction || 'flex-row'} ${gap || ''}`}>
        {children?.length ? (
          children.map((child, index) => (
            <>
              <Logo
                key={index}
                rendering={{ ...rendering, dataSource: child.id }}
                params={{
                  ...params,
                  RenderingIdentifier: `logo-${child.id}`,
                }}
                fields={{
                  Logo: child.Logo,
                  Link: child.Link,
                }}
                iconSize={iconSize}
              />
            </>
          ))
        ) : (
          <span className="text-sm text-gray-500">No logos are configured.</span>
        )}
      </div>
    </div>
  );
};

/**
 * Static props fetcher for the Logos component.
 * Loads visual parameters (color, layout, hover, etc.) and child data from Sitecore.
 */
export const getStaticProps: GetStaticComponentProps = async (rendering, _layoutData, context) => {
  const language = context?.locale as string;

  // Helper to reduce repetition for parameter lookups
  const resolveParam = (key: string) =>
    getRenderingParameterLookupValue(rendering.params?.[key], language);

  // Fetch all design-related rendering parameters in parallel
  const [iconSize, direction, gap] = await Promise.all([
    resolveParam('Icon Size'),
    resolveParam('Direction'),
    resolveParam('Gap'),
  ]);

  // Fetch child items for this Logos component
  const children = await getLogoChildren(rendering.dataSource, language);

  console.log('[getStaticProps] Loaded logos:', children);

  return {
    iconSize,
    direction,
    gap,
    children,
  };
};
