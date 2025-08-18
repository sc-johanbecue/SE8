import React, { JSX } from 'react'; //, useState
import {
  ImageField,
  Image as JssImage,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

/**
 * Component props for Image icon link.
 */
type ImageProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  image: ImageField;
  height?: string;
  width?: string;
};

/**
 * Component displayed when required fields (Icon or Link) are missing.
 */
const DefaultContent = (props: ImageProps): JSX.Element => (
  <div
    className={`component Image ${props.params.styles ?? ''}`}
    id={props.params.RenderingIdentifier || undefined}
  >
    <div className="component-content">
      <span className="is-empty-hint">Image Component</span>
    </div>
  </div>
);

/**
 * The default exported Image component renders a single icon link
 * with hover states, background styling, and dynamic coloring.
 */
export const Default = (props: ImageProps): JSX.Element => {
  const { params, height, width } = props;

  // const [hovered, setHovered] = useState(false);
  const id = props.rendering.uid + '-image';

  // Fallback rendering if required values are missing
  if (!props.image) {
    return <DefaultContent {...props} />;
  }

  console.log('[Image] Rendering with fields:', {
    Image: props.image,
    height: props.height,
    width: props.width,
  });

  return (
    <div
      className={`component ${params.styles ?? ''} p-0 ${height || ''} ${width || ''} flex items-center`}
      id={id || undefined}
    >
      <JssImage field={props.image} className="h-full w-auto object-contain" />
    </div>
  );
};
