import React, { JSX } from 'react'; //, useState
import {
  ImageField,
  Image as JssImage,
  LinkField,
  Link as JssLink,
  ComponentParams,
  ComponentRendering,
  GetStaticComponentProps,
} from '@sitecore-content-sdk/nextjs';

import { getRenderingParameterLookupValue } from 'lib/SolutionEngineering/XMC-RenderingParameterLookup';

/**
 * Field definitions expected from Sitecore.
 */
interface Fields {
  Logo: ImageField;
  Link: LinkField;
}

/**
 * Presentation-related props resolved from getStaticProps.
 */
type LogoPresentationProps = {
  iconSize?: string;
};

/**
 * Component props for Logo icon link.
 */
type LogoProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
} & LogoPresentationProps;

/**
 * Component displayed when required fields (Icon or Link) are missing.
 */
const DefaultContent = (props: LogoProps): JSX.Element => (
  <div
    className={`component Logo ${props.params.styles ?? ''}`}
    id={props.params.RenderingIdentifier || undefined}
  >
    <div className="component-content">
      <span className="is-empty-hint">Logo Component</span>
    </div>
  </div>
);

/**
 * The default exported Logo component renders a single icon link
 * with hover states, background styling, and dynamic coloring.
 */
export const Default = (props: LogoProps): JSX.Element => {
  const { fields, params } = props;

  // const [hovered, setHovered] = useState(false);
  const id = params.RenderingIdentifier;

  // Fallback rendering if required values are missing
  if (!props.fields.Logo) {
    return <DefaultContent {...props} />;
  }

  return (
    <div
      className={`component ${params.styles ?? ''} p-0 h-10 flex items-center`}
      id={id || undefined}
    >
      <JssLink field={fields.Link} className="block h-full" editable={false}>
        <JssImage field={fields.Logo} className="h-full w-auto object-contain" />
      </JssLink>
    </div>
  );
};

/**
 * Static props function for the Logo component.
 * Resolves icon size, styles, and color variables from Sitecore rendering params.
 */
export const getStaticProps: GetStaticComponentProps = async (rendering, _layoutData, context) => {
  const language = context?.locale as string;

  // Resolve all presentation-related values
  const [iconSize] = await Promise.all([
    getRenderingParameterLookupValue(rendering.params?.['Icon Size'], language),
  ]);

  return {
    iconSize,
  };
};
