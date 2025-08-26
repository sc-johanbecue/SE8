import React, { JSX } from 'react';
import {
  ComponentParams,
  ComponentRendering,
  Placeholder,
  useSitecoreContext,
  GetStaticComponentProps,
} from '@sitecore-content-sdk/nextjs';

import {
  getListRenderingParameters,
  ListRenderingParameters,
} from 'lib/SolutionEngineering/XMC-BaseRenderingParameters/XMC-ListBaseRenderingParameters';
import {
  buildListContainerClasses,
  joinClassNames,
} from 'lib/SolutionEngineering/Utils/ComponentUtils';

const debuggingEnabled = false;

/**
 * Presentation props returned from getStaticProps,
 * controlling layout direction and spacing.
 */
type StaticProps = {
  listRenderingParameters: ListRenderingParameters;
};

/**
 * Props for the SocialContainer component.
 */
type SocialContainerProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  isNested?: boolean;
} & StaticProps;

/**
 * The SocialContainer component wraps a Placeholder for nested social components.
 * It supports flexible layout direction and gap via rendering parameters.
 */
export const Default = (props: SocialContainerProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();

  const id = props.rendering.uid + '-socialContainer';
  const phKey = `socialContainer-${props.params?.DynamicPlaceholderId}`;
  const editingPhKey = `socialContainer-{*}`;

  // Check if placeholder has children (different in Experience Editor)
  const hasChildren = sitecoreContext.pageEditing
    ? props.rendering.placeholders?.[editingPhKey]?.length
    : props.rendering.placeholders?.[phKey]?.length;

  if (debuggingEnabled) {
    console.log('[SocialContainer - Default] - id:' + id);
    console.log('[SocialContainer - Default] - params:' + JSON.stringify(props.params));
    console.log('[SocialContainer - Default] - rendering:' + JSON.stringify(props.rendering));
    console.log('[SocialContainer - Default] - isNested:' + JSON.stringify(props.isNested));
    console.log('[SocialContainer - Default] - hasChildren:' + JSON.stringify(hasChildren));
    console.log(
      '[SocialContainer - Default] - listRenderingParameters:' +
        JSON.stringify(props.listRenderingParameters)
    );
  }

  const wrapperClassNames = props.isNested ? '' : joinClassNames('component', props.params.styles);

  const listContainerClasses = buildListContainerClasses(
    props.listRenderingParameters.listLayoutStyle
  );

  return (
    <div className={wrapperClassNames} id={id}>
      <div className={hasChildren === 0 ? 'contents' : listContainerClasses}>
        <Placeholder name={phKey} rendering={props.rendering} />
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

  const listRenderingParameters = await getListRenderingParameters(rendering, language);

  if (debuggingEnabled) {
    console.log(
      '[SocialContainer - getStaticProps] - listRenderingParameters:' +
        JSON.stringify(listRenderingParameters)
    );
  }

  return {
    listRenderingParameters,
  };
};
