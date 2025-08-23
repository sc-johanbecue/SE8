import React, { JSX } from 'react';
import {
  TextField,
  LinkField,
  ComponentParams,
  ComponentRendering,
  GetStaticComponentProps,
} from '@sitecore-content-sdk/nextjs';

import { getTypedChildItems } from 'lib/SolutionEngineering/XMC-Content';

import {
  IconRenderingParameters,
  getIconRenderingParameters,
} from 'lib/SolutionEngineering/XMC-BaseRenderingParameters/XMC-IconBaseRenderingParameters';

import {
  getListRenderingParameters,
  ListRenderingParameters,
} from 'lib/SolutionEngineering/XMC-BaseRenderingParameters/XMC-ListBaseRenderingParameters';

import { Default as Social, Fields } from './Social';
import {
  buildListContainerClasses,
  joinClassNames,
} from 'lib/SolutionEngineering/Utils/ComponentUtils';

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
type SocialsContainerProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  isNested?: boolean;
} & StaticProps;

/**
 * Default component renderer for the Socials container.
 * Maps child items into <Social> components with proper visual and interaction props.
 */
export const Default = (props: SocialsContainerProps): JSX.Element => {
  const id = props.rendering.uid + '-socials';

  if (debuggingEnabled) {
    console.log('[Socials - Default] - id:' + id);
    console.log('[Socials - Default] - params:' + JSON.stringify(props.params));
    console.log('[Socials - Default] - rendering:' + JSON.stringify(props.rendering));
    console.log('[Socials - Default] - isNested:' + JSON.stringify(props.isNested));
    console.log('[Socials - Default] - children:' + JSON.stringify(props.children));
    console.log(
      '[Socials - Default] - listRenderingParameters:' +
        JSON.stringify(props.listRenderingParameters)
    );
    console.log(
      '[Socials - Default] - iconRenderingParameters:' +
        JSON.stringify(props.iconRenderingParameters)
    );
  }

  const wrapperClassNames = props.isNested ? '' : joinClassNames('component', props.params.styles);

  const listContainerClasses = buildListContainerClasses(props.listRenderingParameters.gridLayout);

  return (
    <div className={wrapperClassNames} id={id}>
      <div className={listContainerClasses}>
        {props.children?.length ? (
          props.children.map((child, index) => {
            const key = `${id}-${index}-social`;
            if (debuggingEnabled) console.log('[Socials - Default] render key:', key);

            return (
              <Social
                key={key}
                rendering={{ ...props.rendering, dataSource: child.id }}
                params={{
                  ...props.params,
                  RenderingIdentifier: child.id,
                }}
                fields={{
                  Icon: child.Icon,
                  Link: child.Link,
                }}
                iconRenderingParameters={props.iconRenderingParameters}
                isNested={true}
              />
            );
          })
        ) : (
          <span className="text-sm text-gray-500">No socials are configured.</span>
        )}
      </div>
    </div>
  );
};

/**
 * Static props fetcher for the Socials component.
 * Loads visual parameters (color, layout, hover, etc.) and child data from Sitecore.
 */
export const getStaticProps: GetStaticComponentProps = async (rendering, _layoutData, context) => {
  const language = context?.locale as string;

  // Resolve all presentation-related values
  const iconRenderingParameters = await getIconRenderingParameters(rendering, language);
  const listRenderingParameters = await getListRenderingParameters(rendering, language);

  // Fetch child items for this Socials component
  const children = await getTypedChildItems<{
    Icon: TextField;
    Link: LinkField;
  }>(rendering.dataSource, language, ['Icon', 'Link']);

  if (debuggingEnabled) {
    console.log(
      '[Socials - getStaticProps] - iconRenderingParameters:' +
        JSON.stringify(iconRenderingParameters)
    );
    console.log(
      '[Socials - getStaticProps] - listRenderingParameters:' +
        JSON.stringify(listRenderingParameters)
    );
    console.log(
      '[Socials - getStaticProps] - children:(' + children.length + '):' + JSON.stringify(children)
    );
  }

  return {
    iconRenderingParameters,
    listRenderingParameters,
    children,
  };
};
