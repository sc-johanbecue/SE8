import React from 'react';
import Image from 'next/image';
import {
  TextField,
  Text,
  ComponentParams,
  ComponentRendering,
  //useComponentProps,
  //GetStaticComponentProps,
} from '@sitecore-jss/sitecore-jss-nextjs';
import {
  //RenderingConfigurationFields,
  //fetchRenderingConfiguration,
  concatenateClassNames,
} from './Utility/RenderingConfigurationUtils';
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
    PrefixAnimationIteration: string;
    PrefixOpacity: string;
    PrefixImage: ImageItem | null;
    PrefixAnimation: string;
    PrefixAnimationDelay: string;
    PrefixAnimationSpeed: string;
    TextColor: string;
    LineHeight: string;
    MarginStart: string;
    MarginEnd: string;
    MarginTop: string;
    MarginBottom: string;
    PaddingStart: string;
    PaddingEnd: string;
    PaddingTop: string;
    PaddingBottom: string;
    FontWeight: string;
    FontSize: string;
    SuffixOpacity: string;
    SuffixImage: ImageItem | null;
    SuffixAnimation: string;
    SuffixAnimationDelay: string;
    SuffixAnimationIteration: string;
    SuffixAnimationSpeed: string;
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

type SliderHeaderProps = {
  fields: Fields;
  rendering: ComponentRendering & { params: RenderingConfigurationParam & ComponentParams };
  params: RenderingConfigurationParam & ComponentParams;
};

const SliderHeaderDefaultComponent = (props: SliderHeaderProps): JSX.Element => (
  <div className={`component Main ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Main</span>
    </div>
  </div>
);

// //export const getServerSideProps: GetServerSideComponentProps
// export const getStaticProps: GetStaticComponentProps = async (context) => {
//   console.log('Starting getStaticProps');

//   // Extract the renderingConfiguration GUID from the context params.
//   // Note: if the field is nested differently, adjust accordingly.
//   const renderingConfigurationGuid = context?.params?.RenderingConfiguration as string;

//   const staticProps = await fetchRenderingConfiguration(renderingConfigurationGuid, [
//     'LineHeight',
//     'TextColor',
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
//     'PrefixImage',
//     'PrefixOpacity',
//     'PrefixAnimation',
//     'PrefixAnimationDelay',
//     'PrefixAnimationIteration',
//     'PrefixAnimationSpeed',
//     'SuffixImage',
//     'SuffixOpacity',
//     'SuffixAnimation',
//     'SuffixAnimationDelay',
//     'SuffixAnimationIteration',
//     'SuffixAnimationSpeed',
//   ]);

//   console.log(
//     ('getStaticProps - FieldName: PrefixImage' +
//       ' - Value: ' +
//       staticProps.PrefixImage?.value.src) as string
//   );
//   console.log('Ended getStaticProps');
//   return staticProps;
// };

// Helper function to render a heading with a dynamic tag
const RenderHeading = (
  props: SliderHeaderProps,
  HeadingTag: keyof JSX.IntrinsicElements
): JSX.Element => {
  //const staticProps = useComponentProps<RenderingConfigurationFields>(props.rendering.uid);
  const id = props.params.RenderingIdentifier;

  const headingClassNames = concatenateClassNames(
    props.params.RenderingConfiguration.LineHeight,
    props.params.RenderingConfiguration.TextColor,
    props.params.RenderingConfiguration.FontWeight,
    props.params.RenderingConfiguration.FontSize,
    props.params.RenderingConfiguration.PaddingStart,
    props.params.RenderingConfiguration.PaddingEnd,
    props.params.RenderingConfiguration.PaddingTop,
    props.params.RenderingConfiguration.PaddingBottom,
    props.params.RenderingConfiguration.MarginStart,
    props.params.RenderingConfiguration.MarginEnd,
    props.params.RenderingConfiguration.MarginTop,
    props.params.RenderingConfiguration.MarginBottom
  );

  const prefixImageClassNames = concatenateClassNames(
    props.params.RenderingConfiguration.PrefixAnimation,
    props.params.RenderingConfiguration.PrefixAnimationDelay,
    props.params.RenderingConfiguration.PrefixAnimationIteration,
    props.params.RenderingConfiguration.PrefixAnimationSpeed
  );

  const suffixImageClassNames = concatenateClassNames(
    props.params.RenderingConfiguration.SuffixAnimation,
    props.params.RenderingConfiguration.SuffixAnimationDelay,
    props.params.RenderingConfiguration.SuffixAnimationIteration,
    props.params.RenderingConfiguration.SuffixAnimationSpeed
  );

  const prefixSpanClassNames = concatenateClassNames(
    props.params.RenderingConfiguration.PrefixOpacity
  );

  const suffixSpanClassNames = concatenateClassNames(
    props.params.RenderingConfiguration.SuffixOpacity
  );

  const prefixSpanStyle = {
    ...(props.params.RenderingConfiguration.PrefixImage?.value.width && {
      width: `${props.params.RenderingConfiguration.PrefixImage.value.width}px`,
    }),
    ...(props.params.RenderingConfiguration.PrefixImage?.value.height && {
      height: `${props.params.RenderingConfiguration.PrefixImage.value.height}px`,
    }),
  };

  const suffixSpanStyle = {
    ...(props.params.RenderingConfiguration.SuffixImage?.value.width && {
      width: `${props.params.RenderingConfiguration.SuffixImage.value.width}px`,
    }),
    ...(props.params.RenderingConfiguration.SuffixImage?.value.height && {
      height: `${props.params.RenderingConfiguration.SuffixImage.value.height}px`,
    }),
  };

  if (props.fields) {
    return (
      <HeadingTag
        id={id ? id : undefined}
        className={`component position-relative ${headingClassNames} ${
          props.params.Styles ? props.params.Styles : ''
        }`}
      >
        {props.params.RenderingConfiguration.PrefixImage && (
          <span
            className={`position-absolute right-100pct top-50pct transform3dy-n50 ${prefixSpanClassNames}`}
            style={prefixSpanStyle}
          >
            <Image
              className={`w-auto ${prefixImageClassNames}`}
              src={props.params.RenderingConfiguration.PrefixImage.value.src}
              alt={props.params.RenderingConfiguration.PrefixImage.value.alt as string}
              fill={true}
              sizes={`${props.params.RenderingConfiguration.PrefixImage.value.width}px`}
            />
          </span>
        )}
        <Text field={props.fields.Title} />
        {props.params.RenderingConfiguration.SuffixImage && (
          <span
            className={`position-absolute left-100pct top-50pct transform3dy-n50 ${suffixSpanClassNames}`}
            style={suffixSpanStyle}
          >
            <Image
              className={`w-auto ${suffixImageClassNames}`}
              src={props.params.RenderingConfiguration.SuffixImage.value.src}
              alt={props.params.RenderingConfiguration.SuffixImage.value.alt as string}
              fill={true}
              sizes={`${props.params.RenderingConfiguration.SuffixImage.value.width}px`}
            />
          </span>
        )}
      </HeadingTag>
    );
  }
  return <SliderHeaderDefaultComponent {...props} />;
};

// Export heading components with different tags
export const Default = (props: SliderHeaderProps): JSX.Element => RenderHeading(props, 'h3');
export const Heading1 = (props: SliderHeaderProps): JSX.Element => RenderHeading(props, 'h1');
export const Heading2 = (props: SliderHeaderProps): JSX.Element => RenderHeading(props, 'h2');
export const Heading3 = (props: SliderHeaderProps): JSX.Element => RenderHeading(props, 'h3');
export const Heading4 = (props: SliderHeaderProps): JSX.Element => RenderHeading(props, 'h4');
export const Heading5 = (props: SliderHeaderProps): JSX.Element => RenderHeading(props, 'h5');
export const Heading6 = (props: SliderHeaderProps): JSX.Element => RenderHeading(props, 'h6');
