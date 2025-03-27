import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import {
  TextField,
  ImageField,
  Text,
  ComponentParams,
  ComponentRendering,
  useSitecoreContext,
  useComponentProps,
  GetStaticComponentProps,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { transferPrefixedClasses, ClassMapping } from './Utility/transferPrefixedClasses';
import {
  RenderingConfigurationFields,
  fetchRenderingConfiguration,
  concatenateClassNames,
} from './Utility/RenderingConfigurationUtils';
import 'animate.css';

interface Fields {
  Title: TextField;
}

interface CustomTextColor {
  Value: {
    value: string;
  };
}

type CustomParams = Omit<ComponentParams, 'TextColor' | 'Prefix Image' | 'Suffix Image'> & {
  'Text Color': CustomTextColor;
  PrefixImage: ImageField;
  SuffixImage: ImageField;
};

type SlideTitleProps = {
  fields: Fields;
  rendering: ComponentRendering & { params: ComponentParams };
  params: CustomParams;
};

const SlideTitleDefaultComponent = (props: SlideTitleProps): JSX.Element => (
  <div className={`component Main ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Main</span>
    </div>
  </div>
);

export const Default = (props: SlideTitleProps): JSX.Element => {
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
  return <SlideTitleDefaultComponent {...props} />;
};

//export const getServerSideProps: GetServerSideComponentProps
export const getStaticProps: GetStaticComponentProps = async () => {
  console.log('Starting getStaticProps');

  // Specify the path for the GraphQL query and the fields you need.
  const staticProps = await fetchRenderingConfiguration(
    '/sitecore/content/default/templates/Presentation/Rendering Configurations/Slide Title Configuration',
    [
      'PrefixImage',
      'SuffixImage',
      'SuffixAnimation',
      'SuffixAnimationDelay',
      'SuffixAnimationIteration',
      'SuffixAnimationSpeed',
      'PrefixAnimation',
      'PrefixAnimationDelay',
      'PrefixAnimationIteration',
      'PrefixAnimationSpeed',
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

export const WithPrefixSuffixImage = (props: SlideTitleProps): JSX.Element => {
  const staticProps = useComponentProps<RenderingConfigurationFields>(props.rendering.uid);
  const id = props.params.RenderingIdentifier;
  const { sitecoreContext } = useSitecoreContext();
  const isPageEditing = sitecoreContext.pageEditing;

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

  // Determine the heading tag.
  const headingTag =
    props.params.Heading === 'Heading 1'
      ? 'h1'
      : props.params.Heading === 'Heading 2'
      ? 'h2'
      : props.params.Heading === 'Heading 3'
      ? 'h3'
      : props.params.Heading === 'Heading 4'
      ? 'h4'
      : props.params.Heading === 'Heading 5'
      ? 'h5'
      : props.params.Heading === 'Heading 6'
      ? 'h6'
      : 'h3';
  const HeadingTag = headingTag as keyof JSX.IntrinsicElements;

  // Refs for transferPrefixedClasses utility.
  const headingRef = useRef<HTMLDivElement>(null);
  const leftHeadingBorderSpanRef = useRef<HTMLElement>(null);
  const rightHeadingBorderSpanRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mappings: ClassMapping[] = [
      { targetRef: leftHeadingBorderSpanRef, prefix: '{{HeadingBorderSpan}}' },
      { targetRef: rightHeadingBorderSpanRef, prefix: '{{HeadingBorderSpan}}' },
    ];
    const observer = transferPrefixedClasses(headingRef, mappings, isPageEditing);
    return () => {
      observer?.disconnect();
    };
  }, [props.params.Styles, isPageEditing]);

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
        ref={headingRef}
        id={id ? id : undefined}
        className={`component position-relative text-color-light px-4 ${props.params.Styles}`}
      >
        {staticProps?.RenderingConfigurationFields.PrefixImage && (
          <span
            ref={leftHeadingBorderSpanRef as React.RefObject<HTMLImageElement>}
            className="position-absolute right-100pct top-50pct transform3dy-n50"
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
            ref={rightHeadingBorderSpanRef as React.RefObject<HTMLImageElement>}
            className="position-absolute left-100pct top-50pct transform3dy-n50"
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

  return <SlideTitleDefaultComponent {...props} />;
};
