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
 * Props for the ImageContainer component.
 */
type ImageContainerProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  isNested?: boolean;
} & StaticProps;

/**
 * The ImageContainer component wraps a Placeholder for nested image components.
 * It supports flexible layout direction and gap via rendering parameters.
 */
export const Default = (props: ImageContainerProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();

  const id = props.rendering.uid + '-imageContainer';
  const phKey = `imageContainer-${props.params?.DynamicPlaceholderId}`;
  const editingPhKey = `imageContainer-{*}`;

  // Check if placeholder has children (different in Experience Editor)
  const hasChildren = sitecoreContext.pageEditing
    ? props.rendering.placeholders?.[editingPhKey]?.length
    : props.rendering.placeholders?.[phKey]?.length;

  if (debuggingEnabled) {
    console.log('[ImageContainer - Default] - id:' + id);
    console.log('[ImageContainer - Default] - params:' + JSON.stringify(props.params));
    console.log('[ImageContainer - Default] - rendering:' + JSON.stringify(props.rendering));
    console.log('[ImageContainer - Default] - isNested:' + JSON.stringify(props.isNested));
    console.log('[ImageContainer - Default] - hasChildren:' + JSON.stringify(hasChildren));
    console.log(
      '[ImageContainer - Default] - listRenderingParameters:' +
        JSON.stringify(props.listRenderingParameters)
    );
  }

  const wrapperClassNames = props.isNested ? '' : joinClassNames('component', props.params.styles);

  const listContainerClasses = buildListContainerClasses(props.listRenderingParameters.gridLayout);

  return (
    <div className={wrapperClassNames} id={id}>
      <div className={hasChildren === 0 ? 'contents' : listContainerClasses}>
        <Placeholder name={phKey} rendering={props.rendering} />
      </div>
    </div>
  );
};

/**
 * Static props function for ImageContainer component.
 * Resolves layout values like direction and spacing from rendering parameters.
 */
export const getStaticProps: GetStaticComponentProps = async (rendering, _layoutData, context) => {
  const language = context?.locale as string;

  // Resolve all presentation-related values
  const listRenderingParameters = await getListRenderingParameters(rendering, language);

  if (debuggingEnabled) {
    console.log(
      '[ImageContainer - getStaticProps] - listRenderingParameters:' +
        JSON.stringify(listRenderingParameters)
    );
  }

  return {
    listRenderingParameters,
  };
};
