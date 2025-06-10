import React from 'react';
import {
  TextField,
  Text,
  ComponentParams,
  ComponentRendering,
  // useComponentProps,
  GetStaticComponentProps,
} from '@sitecore-jss/sitecore-jss-nextjs';
import {
  // RenderingConfigurationFields,
  fetchRenderingConfiguration,
  // concatenateClassNames,
} from './Utility/RenderingConfigurationUtils';

import { useAppearAnimation } from './Utility/useAppearAnimation';
import 'animate.css';

interface Fields {
  Title: TextField;
}

type HeadingProps = {
  fields: Fields;
  rendering: ComponentRendering;
  params: ComponentParams;
};

//export const getServerSideProps: GetServerSideComponentProps
export const getStaticProps: GetStaticComponentProps = async (context) => {
  console.log('Starting getStaticProps');

  // Extract the renderingConfiguration GUID from the context params.
  // Note: if the field is nested differently, adjust accordingly.
  const renderingConfigurationGuid = context?.params?.RenderingConfiguration as string;

  const staticProps = await fetchRenderingConfiguration(renderingConfigurationGuid, [
    'LineHeight',
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
  ]);

  console.log(
    ('getStaticProps - FieldName: PrefixImage' +
      ' - Value: ' +
      staticProps.PrefixImage?.value.src) as string
  );
  console.log('Ended getStaticProps');
  return staticProps;
};

const HeadingDefaultComponent = (props: HeadingProps): JSX.Element => (
  <div className={`component Main ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Main</span>
    </div>
  </div>
);

// Helper function to render a heading with a dynamic tag
export const RenderHeading = (
  props: HeadingProps,
  HeadingTag: keyof JSX.IntrinsicElements
): JSX.Element => {
  // const staticProps = useComponentProps<RenderingConfigurationFields>(props.rendering.uid);
  const id = props.params.RenderingIdentifier;

  const animationRef = useAppearAnimation<HTMLHeadingElement>({
    params: props.params,
  });

  // const headingClassNames = concatenateClassNames(
  //   staticProps?.RenderingConfigurationFields.LineHeight,
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
      <HeadingTag
        ref={animationRef}
        key={id ? id : undefined}
        id={id ? id : undefined}
        className={`component position-relative`}
      >
        <Text field={props.fields.Title} />
        JOHAN
      </HeadingTag>
    );
  }
  return <HeadingDefaultComponent {...props} />;
};

// Export heading components with different tags
export const Default = (props: HeadingProps): JSX.Element => RenderHeading(props, 'h3');
export const Heading1 = (props: HeadingProps): JSX.Element => RenderHeading(props, 'h1');
export const Heading2 = (props: HeadingProps): JSX.Element => RenderHeading(props, 'h2');
export const Heading3 = (props: HeadingProps): JSX.Element => RenderHeading(props, 'h3');
export const Heading4 = (props: HeadingProps): JSX.Element => RenderHeading(props, 'h4');
export const Heading5 = (props: HeadingProps): JSX.Element => RenderHeading(props, 'h5');
export const Heading6 = (props: HeadingProps): JSX.Element => RenderHeading(props, 'h6');
