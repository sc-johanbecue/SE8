import React from 'react';
import {
  ImageField,
  Image as JssImage,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-jss/sitecore-jss-nextjs';
import 'animate.css';

interface Fields {
  Image: ImageField;
}

type ImageProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

const ImageDefaultComponent = (props: ImageProps): JSX.Element => (
  <div className={`component Main ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Image</span>
    </div>
  </div>
);

export const Default = (props: ImageProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  if (props.fields) {
    return (
      <span
        id={id || undefined}
        className="position-absolute right-100pct top-50pct transform3dy-n50 opacity-3"
      >
        <JssImage
          field={props.fields.Image}
          src="img/slides/slide-title-border.png"
          className="w-auto appear-animation animated fadeInLeftShorter appear-animation-visible"
          data-appear-animation="fadeInLeftShorter"
          data-appear-animation-delay="250"
          data-plugin-options="{'minWindowWidth': 0}"
          alt=""
          style={{ animationDelay: '250ms' }}
        />
      </span>
    );
  }

  return <ImageDefaultComponent {...props} />;
};
