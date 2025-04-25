import React from 'react';
import {
  TextField,
  ComponentParams,
  ComponentRendering,

  // useComponentProps,
  // GetStaticComponentProps,
} from '@sitecore-jss/sitecore-jss-nextjs';
import {
  // RenderingConfigurationFields,
  // fetchRenderingConfiguration,
  concatenateClassNames,
} from './Utility/RenderingConfigurationUtils';
import AnimatedLetters from './Utility/AnimatedLetters'; // Import the generic component

import 'animate.css';

interface Fields {
  Title: TextField;
}

interface RenderingConfigurationParam {
  RenderingConfiguration: {
    CharacterAnimationConfiguration: {
      fields: {
        Animation: string;
        AnimationIteration: string;
        AnimationSpeed: string;
        AnimationDelay: { value: number };
      };
    };
    TextColor: string;
    MarginStart: string;
    MarginEnd: string;
    MarginTop: string;
    MarginBottom: string;
    PaddingStart: string;
    PaddingEnd: string;
    PaddingTop: string;
    PaddingBottom: string;
    FontWeight: string;
  };
}

type BigTitleProps = {
  fields: Fields;
  rendering: ComponentRendering & { params: RenderingConfigurationParam & ComponentParams };
  params: RenderingConfigurationParam & ComponentParams;
};

// //export const getServerSideProps: GetServerSideComponentProps
// export const getStaticProps: GetStaticComponentProps = async (context) => {
//   console.log('Big Title - Starting getStaticProps');

//   // Extract the renderingConfiguration GUID from the context params.
//   // Note: if the field is nested differently, adjust accordingly.
//   const renderingConfigurationGuid = context?.params?.RenderingConfiguration as string;

//   const staticProps = await fetchRenderingConfiguration(renderingConfigurationGuid, [
//     'LineHeight',
//     'TextColor',
//     'CharacterSpacing',
//     'CharacterAnimationConfiguration',
//     'FontWeight',
//     'FontSize',
//     'PaddingStart',
//     'PaddingEnd',
//     'PaddingTop',
//     'PaddingBottom',
//     'MarginStart',
//     'MarginEnd',
//     'MarginTop',
//     'MarginBottom',
//     'WrapText',
//   ]);

//   console.log('Big Title - Ended getStaticProps');
//   return staticProps;
// };

const BigTitleDefaultComponent = (props: BigTitleProps): JSX.Element => (
  <div className={`component Main ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Main</span>
    </div>
  </div>
);

// Helper function to render a heading with a dynamic tag
export const RenderBigTitle = (
  props: BigTitleProps,
  BigTitleTag: keyof JSX.IntrinsicElements
): JSX.Element => {
  // const staticProps = useComponentProps<RenderingConfigurationFields>(props.rendering.uid);
  const id = props.params.RenderingIdentifier;

  // const headingClassNames = concatenateClassNames(
  //   staticProps?.RenderingConfigurationFields.TextColor,
  //   staticProps?.RenderingConfigurationFields.FontWeight,
  //   staticProps?.RenderingConfigurationFields.PaddingStart,
  //   staticProps?.RenderingConfigurationFields.PaddingEnd,
  //   staticProps?.RenderingConfigurationFields.PaddingTop,
  //   staticProps?.RenderingConfigurationFields.PaddingBottom,
  //   staticProps?.RenderingConfigurationFields.MarginStart,
  //   staticProps?.RenderingConfigurationFields.MarginEnd,
  //   staticProps?.RenderingConfigurationFields.MarginTop,
  //   staticProps?.RenderingConfigurationFields.MarginBottom
  // );

  const z = props.params.RenderingConfiguration;
  const headingClassNames = concatenateClassNames(
    z.TextColor,
    z.FontWeight,
    z.PaddingStart,
    z.PaddingEnd,
    z.PaddingTop,
    z.PaddingBottom,
    z.MarginStart,
    z.MarginEnd,
    z.MarginTop,
    z.MarginBottom
  );

  if (props.fields) {
    return (
      <BigTitleTag
        id={id ? id : undefined}
        className={`component position-relative big-title d-inline-flex ${headingClassNames} ${
          props.params.Styles ? props.params.Styles : ''
        }`}
      >
        <AnimatedLetters
          text={props.fields.Title?.value as string}
          characterAnimationConfiguration={z.CharacterAnimationConfiguration}
        />
      </BigTitleTag>
    );
  }

  return <BigTitleDefaultComponent {...props} />;
};

// Export BigTitle components with different tags
export const Default = (props: BigTitleProps): JSX.Element => RenderBigTitle(props, 'h3');
export const Heading1 = (props: BigTitleProps): JSX.Element => RenderBigTitle(props, 'h1');
export const Heading2 = (props: BigTitleProps): JSX.Element => RenderBigTitle(props, 'h2');
export const Heading3 = (props: BigTitleProps): JSX.Element => RenderBigTitle(props, 'h3');
export const Heading4 = (props: BigTitleProps): JSX.Element => RenderBigTitle(props, 'h4');
export const Heading5 = (props: BigTitleProps): JSX.Element => RenderBigTitle(props, 'h5');
export const Heading6 = (props: BigTitleProps): JSX.Element => RenderBigTitle(props, 'h6');
