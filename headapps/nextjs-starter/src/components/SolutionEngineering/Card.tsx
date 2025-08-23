import React, { JSX } from 'react';
import {
  ImageField,
  LinkField,
  TextField,
  Text,
  RichTextField,
  RichText,
  ComponentParams,
  ComponentRendering,
  GetStaticComponentProps,
} from '@sitecore-content-sdk/nextjs';

import {
  ImageRenderingParameters,
  getImageRenderingParameters,
} from 'lib/SolutionEngineering/XMC-BaseRenderingParameters/XMC-ImageBaseRenderingParameters';

import { Default as IconLink } from '../SolutionEngineering/Link/IconLink';
import { BaseLink } from '../SolutionEngineering/Link/BaseLink';
import { Default as Image } from './Image/Image';

import { joinClassNames } from 'lib/SolutionEngineering/Utils/ComponentUtils';

import {
  getLinkRenderingParameters,
  LinkRenderingParameters,
} from 'lib/SolutionEngineering/XMC-BaseRenderingParameters/XMC-LinkBaseRenderingParameters';
import {
  getIconRenderingParameters,
  IconRenderingParameters,
} from 'lib/SolutionEngineering/XMC-BaseRenderingParameters/XMC-IconBaseRenderingParameters';
import {
  FontRenderingParameters,
  getFontRenderingParameters,
} from 'lib/SolutionEngineering/XMC-BaseRenderingParameters/XMC-FontBaseRenderingParameters';

const debuggingEnabled = false;

/**
 * Field definitions expected from Sitecore.
 */
export interface Fields {
  Image: ImageField;
  Link: LinkField;
  Icon: TextField;
  Title: TextField;
  Description: RichTextField;
}

type StaticProps = {
  imageRenderingParameters: ImageRenderingParameters;
  linkRenderingParameters: LinkRenderingParameters;
  fontRenderingParameters: FontRenderingParameters;
  iconRenderingParameters: IconRenderingParameters;
};

/**
 * Component props for Image icon link.
 */
type ImageProps = {
  rendering: ComponentRendering;
  params: ComponentParams;
  fields: Fields;
  isNested?: boolean;
  iconRenderingParameters: IconRenderingParameters;
  linkRenderingParameters: LinkRenderingParameters;
  imageRenderingParameters: ImageRenderingParameters;
} & StaticProps;

/**
 * The default exported Image component renders a single icon link
 * with hover states, background styling, and dynamic coloring.
 */
export const Default = (props: ImageProps): JSX.Element => {
  const id = props.rendering.uid + '-image';

  if (debuggingEnabled) {
    console.log('[Card - Default] - id:' + id);
    console.log('[Card - Default] - fields:' + JSON.stringify(props.fields));
    console.log('[Card - Default] - params:' + JSON.stringify(props.params));
    console.log('[Card - Default] - isNested:' + JSON.stringify(props.isNested));
    console.log('[Card - Default] - rendering:' + JSON.stringify(props.rendering));
    console.log(
      '[Card - Default] - imageRenderingParameters:' +
        JSON.stringify(props.imageRenderingParameters)
    );
    console.log(
      '[Card - Default] - linkRenderingParameters:' + JSON.stringify(props.linkRenderingParameters)
    );
  }

  const baseWrapperClassNames = joinClassNames(
    'max-w-sm',
    'bg-white',
    'border',
    'border-gray-200',
    'rounded-lg',
    'shadow-sm',
    'dark:bg-gray-800',
    'dark:border-gray-700'
  );

  const wrapperClassName = props.isNested
    ? baseWrapperClassNames
    : joinClassNames('component', props.params.styles, baseWrapperClassNames);

  return (
    <div className={wrapperClassName}>
      <BaseLink className="block" link={props.fields.Link}>
        {/* Use a wrapper for rounded corners & clipping */}
        <div className="relative aspect-[16/9] overflow-hidden rounded-t-lg">
          <Image
            imageRenderingParameters={props.imageRenderingParameters}
            fields={props.fields}
            params={props.params}
            rendering={props.rendering}
            isNested={true}
          />
        </div>
      </BaseLink>

      <div className="p-5">
        <BaseLink link={props.fields.Link} className="block">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <Text field={props.fields.Title} />
          </h5>
        </BaseLink>
        <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <RichText field={props.fields.Description} />
        </div>

        <IconLink
          rendering={props.rendering}
          params={props.params}
          fields={props.fields}
          iconRenderingParameters={props.iconRenderingParameters}
          isNested={true}
          // className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white
          //            bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none
          //            focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        />
      </div>
    </div>
  );
};

/**
 * Static props function for the Image component.
 * Resolves icon size, styles, and color variables from Sitecore rendering params.
 */
export const getStaticProps: GetStaticComponentProps = async (rendering, _layoutData, context) => {
  const language = context?.locale as string;

  const imageRenderingParameters = await getImageRenderingParameters(rendering, language);
  const iconRenderingParameters = await getIconRenderingParameters(rendering, language);
  const linkRenderingParameters = await getLinkRenderingParameters(rendering, language);
  const fontRenderingParameters = await getFontRenderingParameters(rendering, language);

  if (debuggingEnabled) {
    console.log(
      '[Image - getStaticProps] - imageRenderingParameters:' +
        JSON.stringify(imageRenderingParameters)
    );
  }

  return {
    imageRenderingParameters,
    iconRenderingParameters,
    linkRenderingParameters,
    fontRenderingParameters,
  };
};
