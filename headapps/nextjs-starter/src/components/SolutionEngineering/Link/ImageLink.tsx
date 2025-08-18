import React, { JSX } from 'react';
import {
  ImageField,
  LinkField,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

import { BaseLink } from './BaseLink';

import * as BaseImageComponent from '../Image/BaseImage';
const BaseImage = BaseImageComponent.Default;

/**
 * Field definitions expected from Sitecore.
 */
interface Fields {
  Image: ImageField;
  Link: LinkField;
}

/**
 * Component props for Link icon link.
 */
type LinkProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

/**
 * Component displayed when required fields (Icon or Link) are missing.
 */
const DefaultContent = (props: LinkProps): JSX.Element => (
  <div
    className={`component Link ${props.params.styles ?? ''}`}
    id={props.params.RenderingIdentifier || undefined}
  >
    <div className="component-content">
      <span className="is-empty-hint">Link Component</span>
    </div>
  </div>
);

/**
 * The default exported Link component renders a single icon link
 * with hover states, background styling, and dynamic coloring.
 */
export const Default = (props: LinkProps): JSX.Element => {
  const { fields, params } = props;

  const id = params.RenderingIdentifier + '-link';

  // Fallback rendering if required values are missing
  if (!fields?.Link?.value?.url) {
    return <DefaultContent {...props} />;
  }

  return (
    <BaseLink link={fields.Link} className={`component ${params.styles ?? ''} p-0`} id={id}>
      <BaseImage image={fields.Image} params={props.params} rendering={props.rendering} />
    </BaseLink>
  );
};
