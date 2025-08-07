import React, { JSX } from 'react';
import {
  ComponentParams,
  ComponentRendering,
  Placeholder,
  useSitecoreContext,
  GetStaticComponentProps,
} from '@sitecore-content-sdk/nextjs';

import { getRenderingParameterLookupValue } from 'lib/SolutionEngineering/XMC-RenderingParameterLookup';

/**
 * Presentation props returned from getStaticProps,
 * controlling layout direction and spacing.
 */
type LogoContainerPresentationProps = {
  direction?: string;
  gap?: string;
};

/**
 * Props for the LogoContainer component.
 */
type LogoContainerProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
} & LogoContainerPresentationProps;

/**
 * The LogoContainer component wraps a Placeholder for nested logo components.
 * It supports flexible layout direction and gap via rendering parameters.
 */
export const Default = (props: LogoContainerProps): JSX.Element => {
  const { rendering, params, direction, gap } = props;
  const { sitecoreContext } = useSitecoreContext();

  const id = props.rendering.uid + '-logoContainer';
  const phKey = `logoContainer-${params?.DynamicPlaceholderId}`;
  const editingPhKey = `logoContainer-{*}`;

  // Check if placeholder has children (different in Experience Editor)
  const hasChildren = sitecoreContext.pageEditing
    ? rendering.placeholders?.[editingPhKey]?.length
    : rendering.placeholders?.[phKey]?.length;

  return (
    <div className={`component ${params?.styles || ''}`} id={id || undefined}>
      <div
        className={hasChildren === 0 ? 'contents' : `flex ${direction || 'flex-row'} ${gap || ''}`}
      >
        <Placeholder name={phKey} rendering={rendering} />
      </div>
    </div>
  );
};

/**
 * Static props function for LogoContainer component.
 * Resolves layout values like direction and spacing from rendering parameters.
 */
export const getStaticProps: GetStaticComponentProps = async (rendering, _layoutData, context) => {
  const language = context?.locale as string;

  const direction = await getRenderingParameterLookupValue(
    rendering.params?.['Direction'],
    language
  );

  const gap = await getRenderingParameterLookupValue(rendering.params?.['Gap'], language);

  return {
    direction,
    gap,
  };
};
