import React, { JSX } from 'react';
import {
  TextField,
  LinkField,
  ComponentParams,
  ComponentRendering,
  GetStaticComponentProps,
} from '@sitecore-content-sdk/nextjs';

import { getTypedChildItems } from 'lib/SolutionEngineering/XMC-Content2';

import {
  IconRenderingParameters,
  getIconRenderingParameters,
} from 'lib/SolutionEngineering/XMC-BaseRenderingParameters/XMC-IconBaseRenderingParameters';

import {
  getListRenderingParameters,
  ListRenderingParameters,
} from 'lib/SolutionEngineering/XMC-BaseRenderingParameters/XMC-ListBaseRenderingParameters';

import { Default as Icon, Fields } from './Icon';
import { joinClassNames } from 'lib/SolutionEngineering/Utils/ClassNameUtils';

const debuggingEnabled = false;

/**
 * Presentation-related props resolved from rendering parameters.
 */
type StaticProps = {
  children?: (Fields & { id: string })[];
  iconRenderingParameters: IconRenderingParameters;
  listRenderingParameters: ListRenderingParameters;
};

/**
 * Final props type combining Sitecore rendering info + presentation props.
 */
type IconsContainerProps = {
  rendering: ComponentRendering;
  params: ComponentParams;
  isNested?: boolean;
} & StaticProps;

/**
 * Default component renderer for the Icons container.
 * Maps child items into <Icon> components with proper visual and interaction props.
 */
export const Default = (props: IconsContainerProps): JSX.Element => {
  const id = props.rendering.uid + '-icons';

  if (debuggingEnabled) {
    console.log('[Icons - Default] - id:' + id);
    console.log('[Icons - Default] - params:' + JSON.stringify(props.params));
    console.log('[Icons - Default] - rendering:' + JSON.stringify(props.rendering));
    console.log('[Icons - Default] - isNested:' + JSON.stringify(props.isNested));
    console.log('[Icons - Default] - children:' + JSON.stringify(props.children));
    console.log(
      '[Icons - Default] - listRenderingParameters:' + JSON.stringify(props.listRenderingParameters)
    );
    console.log(
      '[Icons - Default] - iconRenderingParameters:' + JSON.stringify(props.iconRenderingParameters)
    );
  }

  const wrapperClassNames = props.isNested ? '' : joinClassNames('component', props.params.styles);

  return (
    <div className={wrapperClassNames} id={id}>
      <div
        className={`flex ${props.listRenderingParameters.direction || 'flex-row'} ${props.listRenderingParameters.gap || ''}`}
      >
        {props.children?.length ? (
          props.children.map((child, index) => {
            const key = `${id}-${index}-icon`;
            if (debuggingEnabled) console.log('[Icons - Default] render key:', key);

            return (
              <Icon
                key={key}
                rendering={{ ...props.rendering, dataSource: child.id }}
                params={{
                  ...props.params,
                  RenderingIdentifier: child.id,
                }}
                fields={{
                  Icon: child.Icon,
                }}
                isNested={true}
                iconRenderingParameters={props.iconRenderingParameters}
              />
            );
          })
        ) : (
          <span className="text-sm text-gray-500">No icons are configured.</span>
        )}
      </div>
    </div>
  );
};

/**
 * Fetches typed child items (Icon + Link fields) for a given parent.
 */
async function getIconChildren(parentId: string | undefined, language: string | undefined) {
  if (!parentId || !language) {
    console.warn('[getIconChildren] Missing parentId or language.');
    return [];
  }

  const children = await getTypedChildItems<{
    Icon: TextField;
    Link: LinkField;
  }>(parentId, language, ['Icon', 'Link']);

  return children;
}

/**
 * Static props fetcher for the Icons component.
 * Loads visual parameters (color, layout, hover, etc.) and child data from Sitecore.
 */
export const getStaticProps: GetStaticComponentProps = async (rendering, _layoutData, context) => {
  const language = context?.locale as string;

  // Resolve all presentation-related values
  const iconRenderingParameters = await getIconRenderingParameters(rendering, language);
  const listRenderingParameters = await getListRenderingParameters(rendering, language);

  // Fetch child items for this Icons component
  const children = await getIconChildren(rendering.dataSource, language);

  if (debuggingEnabled) {
    console.log(
      '[Icons - getStaticProps] - iconRenderingParameters:' +
        JSON.stringify(iconRenderingParameters)
    );
    console.log(
      '[Icons - getStaticProps] - listRenderingParameters:' +
        JSON.stringify(listRenderingParameters)
    );
    console.log(
      '[Icons - getStaticProps] - children:(' + children.length + '):' + JSON.stringify(children)
    );
  }

  return {
    iconRenderingParameters,
    listRenderingParameters,
    children,
  };
};
