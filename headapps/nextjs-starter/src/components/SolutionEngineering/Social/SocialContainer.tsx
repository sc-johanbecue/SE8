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
type SocialContainerPresentationProps = {
  direction?: string;
  gap?: string;
};

/**
 * Props for the SocialContainer component.
 */
type SocialContainerProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
} & SocialContainerPresentationProps;

/**
 * The SocialContainer component wraps a Placeholder for nested social components.
 * It supports flexible layout direction and gap via rendering parameters.
 */
export const Default = (props: SocialContainerProps): JSX.Element => {
  const { rendering, params, direction, gap } = props;
  const { sitecoreContext } = useSitecoreContext();

  const id = rendering.uid + '-socialContainer';
  const phKey = `socialContainer-${params?.DynamicPlaceholderId}`;
  const editingPhKey = `socialContainer-{*}`;

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
 * Static props function for SocialContainer component.
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
