import React from 'react';
import Image from 'next/image';
import {
  TextField,
  Text,
  ComponentParams,
  ComponentRendering,
  useComponentProps,
  GetStaticComponentProps,
} from '@sitecore-jss/sitecore-jss-nextjs';
import {
  RenderingConfigurationFields,
  fetchRenderingConfiguration,
  concatenateClassNames,
} from './Utility/RenderingConfigurationUtils';
import 'animate.css';

interface Fields {
  Title: TextField;
}

type SliderHeaderProps = {
  fields: Fields;
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
};

const SliderHeaderDefaultComponent = (props: SliderHeaderProps): JSX.Element => (
  <div className={`component Main ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Main</span>
    </div>
  </div>
);

//export const getServerSideProps: GetServerSideComponentProps
export const getStaticProps: GetStaticComponentProps = async (context) => {
  console.log('Starting getStaticProps');

  // Extract the renderingConfiguration GUID from the context params.
  // Note: if the field is nested differently, adjust accordingly.
  const renderingConfigurationGuid = context?.params?.RenderingConfiguration as string;

  const staticProps = await fetchRenderingConfiguration(renderingConfigurationGuid, [
    'LineHeight',
    'TextColor',
    'FontWeight',
    'FontSize',
    'PaddingStart',
    'PaddingEnd',
    'PaddingTop',
    'PaddingBottom',
    'MarginStart',
    'MarginEnd',
    'MarginTop',
    'MarginBottom',
    'PrefixImage',
    'PrefixOpacity',
    'PrefixAnimation',
    'PrefixAnimationDelay',
    'PrefixAnimationIteration',
    'PrefixAnimationSpeed',
    'SuffixImage',
    'SuffixOpacity',
    'SuffixAnimation',
    'SuffixAnimationDelay',
    'SuffixAnimationIteration',
    'SuffixAnimationSpeed',
  ]);

  console.log(
    ('getStaticProps - FieldName: PrefixImage' +
      ' - Value: ' +
      staticProps.PrefixImage?.value.src) as string
  );
  console.log('Ended getStaticProps');
  return staticProps;
};

// Helper function to render a heading with a dynamic tag
const RenderHeading = (
  props: SliderHeaderProps,
  HeadingTag: keyof JSX.IntrinsicElements
): JSX.Element => {
  const staticProps = useComponentProps<RenderingConfigurationFields>(props.rendering.uid);
  const id = props.params.RenderingIdentifier;

  const headingClassNames = concatenateClassNames(
    staticProps?.RenderingConfigurationFields.LineHeight,
    staticProps?.RenderingConfigurationFields.TextColor,
    staticProps?.RenderingConfigurationFields.FontWeight,
    staticProps?.RenderingConfigurationFields.FontSize,
    staticProps?.RenderingConfigurationFields.PaddingStart,
    staticProps?.RenderingConfigurationFields.PaddingEnd,
    staticProps?.RenderingConfigurationFields.PaddingTop,
    staticProps?.RenderingConfigurationFields.PaddingBottom,
    staticProps?.RenderingConfigurationFields.MarginStart,
    staticProps?.RenderingConfigurationFields.MarginEnd,
    staticProps?.RenderingConfigurationFields.MarginTop,
    staticProps?.RenderingConfigurationFields.MarginBottom
  );

  const prefixImageClassNames = concatenateClassNames(
    staticProps?.RenderingConfigurationFields.PrefixAnimation,
    staticProps?.RenderingConfigurationFields.PrefixAnimationDelay,
    staticProps?.RenderingConfigurationFields.PrefixAnimationIteration,
    staticProps?.RenderingConfigurationFields.PrefixAnimationSpeed
  );

  const suffixImageClassNames = concatenateClassNames(
    staticProps?.RenderingConfigurationFields.SuffixAnimation,
    staticProps?.RenderingConfigurationFields.SuffixAnimationDelay,
    staticProps?.RenderingConfigurationFields.SuffixAnimationIteration,
    staticProps?.RenderingConfigurationFields.SuffixAnimationSpeed
  );

  const prefixSpanClassNames = concatenateClassNames(
    staticProps?.RenderingConfigurationFields.PrefixOpacity
  );

  const suffixSpanClassNames = concatenateClassNames(
    staticProps?.RenderingConfigurationFields.SuffixOpacity
  );

  const prefixSpanStyle = {
    ...(staticProps?.RenderingConfigurationFields.PrefixImage.value.width && {
      width: `${staticProps.RenderingConfigurationFields.PrefixImage.value.width}px`,
    }),
    ...(staticProps?.RenderingConfigurationFields.PrefixImage.value.height && {
      height: `${staticProps.RenderingConfigurationFields.PrefixImage.value.height}px`,
    }),
  };

  const suffixSpanStyle = {
    ...(staticProps?.RenderingConfigurationFields.SuffixImage.value.width && {
      width: `${staticProps.RenderingConfigurationFields.SuffixImage.value.width}px`,
    }),
    ...(staticProps?.RenderingConfigurationFields.SuffixImage.value.height && {
      height: `${staticProps.RenderingConfigurationFields.SuffixImage.value.height}px`,
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
        {staticProps?.RenderingConfigurationFields.PrefixImage && (
          <span
            className={`position-absolute right-100pct top-50pct transform3dy-n50 ${prefixSpanClassNames}`}
            style={prefixSpanStyle}
          >
            <Image
              className={`w-auto ${prefixImageClassNames}`}
              src={staticProps?.RenderingConfigurationFields.PrefixImage.value.src}
              alt={staticProps?.RenderingConfigurationFields.PrefixImage.value.alt as string}
              fill={true}
              sizes={`${staticProps?.RenderingConfigurationFields.PrefixImage.value.width}px`}
            />
          </span>
        )}
        <Text field={props.fields.Title} />
        {staticProps?.RenderingConfigurationFields.SuffixImage && (
          <span
            className={`position-absolute left-100pct top-50pct transform3dy-n50 ${suffixSpanClassNames}`}
            style={suffixSpanStyle}
          >
            <Image
              className={`w-auto ${suffixImageClassNames}`}
              src={staticProps?.RenderingConfigurationFields.SuffixImage.value.src}
              alt={staticProps?.RenderingConfigurationFields.SuffixImage.value.alt as string}
              fill={true}
              sizes={`${staticProps?.RenderingConfigurationFields.SuffixImage.value.width}px`}
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
