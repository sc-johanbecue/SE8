import React from 'react';
import {
  TextField,
  Text,
  ImageField,
  Image as JssImage,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-jss/sitecore-jss-nextjs';
import 'animate.css';

interface Fields {
  PrefixImage: ImageField;
  Title: TextField;
  SuffixImage: ImageField;
}

type HeadingProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

// A fallback component to render when no valid fields are provided.
const HeadingDefaultComponent = ({ params }: HeadingProps): JSX.Element => (
  <div className={`component Heading ${params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Heading2</span>
    </div>
  </div>
);

export const Default = (props: HeadingProps): JSX.Element => {
  // Destructure props for easier access.
  const { params, fields } = props;
  const id = params.RenderingIdentifier;

  // Render the link component if valid fields are provided.
  if (fields) {
    return (
      <h3
        id={id || undefined}
        className="position-relative text-color-light text-4 line-height-5 font-weight-normal px-4 mb-2 appear-animation animated fadeInDownShorter appear-animation-visible"
        data-appear-animation="fadeInDownShorter"
        data-plugin-options="{'minWindowWidth': 0}"
        style={{ animationDelay: '100ms' }}
      >
        <span className="position-absolute right-100pct top-50pct transform3dy-n50 opacity-3">
          <JssImage field={props.fields.PrefixImage} />
          <img
            src="img/slides/slide-title-border.png"
            className="w-auto appear-animation animated fadeInLeftShorter appear-animation-visible"
            data-appear-animation="fadeInLeftShorter"
            data-appear-animation-delay="250"
            data-plugin-options="{'minWindowWidth': 0}"
            alt=""
            style={{ animationDelay: '250ms' }}
          />
        </span>
        <Text field={props.fields.Title} />
        <span className="position-absolute left-100pct top-50pct transform3dy-n50 opacity-3">
          <JssImage field={props.fields.PrefixImage} />
          <img
            src="img/slides/slide-title-border.png"
            className="w-auto appear-animation animated fadeInRightShorter appear-animation-visible"
            data-appear-animation="fadeInRightShorter"
            data-appear-animation-delay="250"
            data-plugin-options="{'minWindowWidth': 0}"
            alt=""
            style={{ animationDelay: '250ms' }}
          />
        </span>
      </h3>
    );
  }

  // Fallback component if no valid fields are available.
  return <HeadingDefaultComponent {...props} />;
};
