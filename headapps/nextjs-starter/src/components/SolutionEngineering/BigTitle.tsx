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
    PrefixAnimationIteration: StyleItem | null;
    PrefixOpacity: StyleItem | null;
    PrefixImage: ImageItem | null;
    PrefixAnimation: StyleItem | null;
    PrefixAnimationDelay: StyleItem | null;
    PrefixAnimationSpeed: StyleItem | null;
    TextColor: StyleItem | null;
    LineHeight: StyleItem | null;
    MarginStart: StyleItem | null;
    MarginEnd: StyleItem | null;
    MarginTop: StyleItem | null;
    MarginBottom: StyleItem | null;
    PaddingStart: StyleItem | null;
    PaddingEnd: StyleItem | null;
    PaddingTop: StyleItem | null;
    PaddingBottom: StyleItem | null;
    FontWeight: StyleItem | null;
    FontSize: StyleItem | null;
    SuffixOpacity: StyleItem | null;
    SuffixImage: ImageItem | null;
    SuffixAnimation: StyleItem | null;
    SuffixAnimationDelay: StyleItem | null;
    SuffixAnimationIteration: StyleItem | null;
    SuffixAnimationSpeed: StyleItem | null;
  };
}

interface ImageItem {
  value: {
    src: string;
    alt: string;
    width: string;
    height: string;
  };
}
interface StyleItem {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    IsVerifiedStyle?: { value: boolean };
    Value?: { value: string };
    Icon?: { value: string };
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
    z.TextColor?.fields.Value?.value as string,
    z.FontWeight?.fields.Value?.value as string,
    z.PaddingStart?.fields.Value?.value as string,
    z.PaddingEnd?.fields.Value?.value as string,
    z.PaddingTop?.fields.Value?.value as string,
    z.PaddingBottom?.fields.Value?.value as string,
    z.MarginStart?.fields.Value?.value as string,
    z.MarginEnd?.fields.Value?.value as string,
    z.MarginTop?.fields.Value?.value as string,
    z.MarginBottom?.fields.Value?.value as string
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
