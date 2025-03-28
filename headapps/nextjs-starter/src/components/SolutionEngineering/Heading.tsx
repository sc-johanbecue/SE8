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

type HeadingProps = {
  fields: Fields;
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
};

const HeadingDefaultComponent = (props: HeadingProps): JSX.Element => (
  <div className={`component Main ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Main</span>
    </div>
  </div>
);

export const Default = (props: HeadingProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  if (props.fields) {
    return (
      <h3
        id={id || undefined}
        className="position-relative text-color-light text-4 line-height-5 font-weight-normal px-4 mb-2 appear-animation animated fadeInDownShorter appear-animation-visible"
        data-appear-animation="fadeInDownShorter"
        data-plugin-options="{'minWindowWidth': 0}"
        style={{ animationDelay: '100ms' }}
      >
        <Text field={props.fields.Title} />
      </h3>
    );
  }
  return <HeadingDefaultComponent {...props} />;
};

//export const getServerSideProps: GetServerSideComponentProps
export const getStaticProps: GetStaticComponentProps = async () => {
  console.log('Starting getStaticProps');

  // Specify the path for the GraphQL query and the fields you need.
  const staticProps = await fetchRenderingConfiguration(
    '/sitecore/content/default/templates/Presentation/Rendering Configurations/Heading Configuration',
    [
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
    ]
  );

  console.log(
    ('getStaticProps - FieldName: PrefixImage' +
      ' - Value: ' +
      staticProps.PrefixImage?.value.src) as string
  );
  console.log('Ended getStaticProps');
  return staticProps;
};

// Helper function to render a heading with a dynamic tag
const renderHeading = (props: HeadingProps, Tag: keyof JSX.IntrinsicElements): JSX.Element => {
  const staticProps = useComponentProps<RenderingConfigurationFields>(props.rendering.uid);
  const id = props.params.RenderingIdentifier;

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
      <Tag
        id={id ? id : undefined}
        className={`component position-relative ${props.params.Styles}`}
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
      </Tag>
    );
  }
  return <HeadingDefaultComponent {...props} />;
};

// Export heading components with different tags
export const Heading1 = (props: HeadingProps): JSX.Element => renderHeading(props, 'h1');
export const Heading2 = (props: HeadingProps): JSX.Element => renderHeading(props, 'h2');
export const Heading3 = (props: HeadingProps): JSX.Element => renderHeading(props, 'h3');
export const Heading4 = (props: HeadingProps): JSX.Element => renderHeading(props, 'h4');
export const Heading5 = (props: HeadingProps): JSX.Element => renderHeading(props, 'h5');
export const Heading6 = (props: HeadingProps): JSX.Element => renderHeading(props, 'h6');
