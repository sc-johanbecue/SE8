import React, { JSX } from 'react';
import {
  Item,
  TextField,
  LinkField,
  ComponentParams,
  ComponentRendering,
  GetStaticComponentProps,
} from '@sitecore-content-sdk/nextjs';

import { BaseLink } from './BaseLink';
import {
  IconRenderingParameters,
  getIconRenderingParameters,
} from 'lib/SolutionEngineering/XMC-BaseRenderingParameters/XMC-IconBaseRenderingParameters';
import {
  LinkRenderingParameters,
  getLinkRenderingParameters,
} from 'lib/SolutionEngineering/XMC-BaseRenderingParameters/XMC-LinkBaseRenderingParameters';
import {
  FontRenderingParameters,
  getFontRenderingParameters,
} from 'lib/SolutionEngineering/XMC-BaseRenderingParameters/XMC-FontBaseRenderingParameters';
import { Default as Icon } from '../Icon/Icon';
import { joinClassNames } from 'lib/SolutionEngineering/Utils/ComponentUtils';

const debuggingEnabled = false;

/**
 * Field definitions expected from Sitecore.
 */
interface Fields {
  Icon: Item & {
    fields: {
      Icon: TextField;
    };
  };
  Link: LinkField;
}

/**
 * Presentation-related props resolved from getStaticProps.
 */
type StaticProps = {
  iconRenderingParameters: IconRenderingParameters;
  linkRenderingParameters: LinkRenderingParameters;
  fontRenderingParameters: FontRenderingParameters;
};

/**
 * Component props for Link icon link.
 */
type LinkProps = {
  rendering: ComponentRendering;
  params: ComponentParams;
  fields: Fields;
  isNested?: boolean;
} & StaticProps;

/**
 * The default exported Link component renders a single icon link
 * with hover states, background styling, and dynamic coloring.
 */
export const Default = (props: LinkProps): JSX.Element => {
  const id = props.rendering.uid + '-link';

  if (debuggingEnabled) {
    console.log('[Link - Default] - id:' + id);
    console.log('[Link - Default] - params:' + JSON.stringify(props.params));
    console.log('[Link - Default] - rendering:' + JSON.stringify(props.rendering));
    console.log('[Link - Default] - isNested:' + JSON.stringify(props.isNested));
    console.log('[Link - Default] - fields:' + JSON.stringify(props.fields));
    console.log(
      '[Link - Default] - iconRenderingParameters:' + JSON.stringify(props.iconRenderingParameters)
    );
    console.log(
      '[Link - Default] - fontRenderingParameters:' + JSON.stringify(props.fontRenderingParameters)
    );
  }

  const baseWrapperClassNames = joinClassNames('p-0');

  const wrapperClassNames = props.isNested
    ? baseWrapperClassNames
    : joinClassNames('component', props.params.styles, baseWrapperClassNames);

  if (props.linkRenderingParameters.iconLocation == 'Icon-before') {
    return (
      <div className={wrapperClassNames}>
        <Icon
          fields={props.fields.Icon.fields}
          rendering={props.rendering}
          params={props.params}
          isNested={true}
          iconRenderingParameters={props.iconRenderingParameters}
        />
        <BaseLink
          link={props.fields.Link}
          fontRenderingParameters={props.fontRenderingParameters}
          isNested={true}
        >
          {props.fields.Link.value.text}
        </BaseLink>
      </div>
    );
  } else if (props.linkRenderingParameters.iconLocation == 'Icon-after') {
    return (
      <div className={props.isNested ? `p-0` : `component ${props.params.styles ?? ''} p-0`}>
        <BaseLink link={props.fields.Link} fontRenderingParameters={props.fontRenderingParameters}>
          {props.fields.Link.value.text}
        </BaseLink>
        <Icon
          fields={props.fields.Icon.fields}
          rendering={props.rendering}
          params={props.params}
          isNested={true}
          iconRenderingParameters={props.iconRenderingParameters}
        />
      </div>
    );
  }
  return (
    <BaseLink
      link={props.fields.Link}
      className={props.isNested ? `p-0` : `component ${props.params.styles ?? ''} p-0`}
      id={id}
      fontRenderingParameters={props.fontRenderingParameters}
    >
      {props.fields.Link.value.text}
    </BaseLink>
  );
};

/**
 * Static props function for the Social component.
 * Resolves icon size, styles, and color variables from Sitecore rendering params.
 */
export const getStaticProps: GetStaticComponentProps = async (rendering, _layoutData, context) => {
  const language = context?.locale as string;

  // Resolve all presentation-related values
  const iconRenderingParameters = await getIconRenderingParameters(rendering, language);
  const linkRenderingParameters = await getLinkRenderingParameters(rendering, language);
  const fontRenderingParameters = await getFontRenderingParameters(rendering, language);

  if (debuggingEnabled) {
    console.log(
      '[Link - getStaticProps] - iconRenderingParameters:' + JSON.stringify(iconRenderingParameters)
    );
    console.log(
      '[Link - getStaticProps] - linkRenderingParameters:' + JSON.stringify(linkRenderingParameters)
    );
    console.log(
      '[Link - getStaticProps] - fontRenderingParameters:' + JSON.stringify(fontRenderingParameters)
    );
  }

  return {
    iconRenderingParameters,
    linkRenderingParameters,
    fontRenderingParameters,
  };
};
