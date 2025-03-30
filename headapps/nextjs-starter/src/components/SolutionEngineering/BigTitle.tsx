import React from 'react';
import { TextField, ComponentParams, ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs';
import 'animate.css';

interface Fields {
  Title: TextField;
}

type BigTitleProps = {
  fields: Fields;
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
};

const BigTitleDefaultComponent = (props: BigTitleProps): JSX.Element => (
  <div className={`component Main ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Main</span>
    </div>
  </div>
);

// Helper function to render a heading with a dynamic tag
export const Default = (props: BigTitleProps): JSX.Element => {
  // const staticProps = useComponentProps<RenderingConfigurationFields>(props.rendering.uid);
  const id = props.params.RenderingIdentifier;

  // const headingClassNames = concatenateClassNames(
  //   staticProps?.RenderingConfigurationFields.LineHeight,
  //   staticProps?.RenderingConfigurationFields.TextColor,
  //   staticProps?.RenderingConfigurationFields.FontWeight,
  //   staticProps?.RenderingConfigurationFields.FontSize,
  //   staticProps?.RenderingConfigurationFields.PaddingStart,
  //   staticProps?.RenderingConfigurationFields.PaddingEnd,
  //   staticProps?.RenderingConfigurationFields.PaddingTop,
  //   staticProps?.RenderingConfigurationFields.PaddingBottom,
  //   staticProps?.RenderingConfigurationFields.MarginStart,
  //   staticProps?.RenderingConfigurationFields.MarginEnd,
  //   staticProps?.RenderingConfigurationFields.MarginTop,
  //   staticProps?.RenderingConfigurationFields.MarginBottom
  // );

  if (props.fields) {
    return (
      <h2
        id={id || undefined}
        className="porto-big-title text-color-light font-weight-extra-bold mb-3 initialized"
        data-plugin-animated-letters=""
        data-plugin-options="{'startDelay': 1000, 'minWindowWidth': 0, 'animationSpeed': 300, 'animationName': 'fadeInRightShorterOpacity', 'letterClass': 'd-inline-block'}"
        style={{ minHeight: '115.2px' }}
      >
        <span className="animated-letters-wrapper ">
          <span
            className="animated-letters-item letter d-inline-block fadeInRightShorterOpacity animated"
            style={{ animationDelay: '0ms' }}
          >
            P
          </span>
        </span>
        <span className="animated-letters-wrapper ">
          <span
            className="animated-letters-item letter d-inline-block fadeInRightShorterOpacity animated"
            style={{ animationDelay: '300ms' }}
          >
            O
          </span>
        </span>
        <span className="animated-letters-wrapper ">
          <span
            className="animated-letters-item letter d-inline-block fadeInRightShorterOpacity animated"
            style={{ animationDelay: '600ms' }}
          >
            R
          </span>
        </span>
        <span className="animated-letters-wrapper ">
          <span
            className="animated-letters-item letter d-inline-block fadeInRightShorterOpacity animated"
            style={{ animationDelay: '900ms' }}
          >
            T
          </span>
        </span>
        <span className="animated-letters-wrapper ">
          <span
            className="animated-letters-item letter d-inline-block fadeInRightShorterOpacity animated"
            style={{ animationDelay: '1200ms' }}
          >
            O
          </span>
        </span>
      </h2>
    );
  }
  return <BigTitleDefaultComponent {...props} />;
};
