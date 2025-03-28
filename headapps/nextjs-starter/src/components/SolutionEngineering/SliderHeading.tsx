import React from 'react';
import {
  TextField,
  Text,
  ComponentParams,
  ComponentRendering,
  GetStaticComponentProps,
} from '@sitecore-jss/sitecore-jss-nextjs';
import {
  fetchRenderingConfiguration,
} from './Utility/RenderingConfigurationUtils';
import 'animate.css';

interface Fields {
  Title: TextField;
}

type SliderHeadingProps = {
  fields: Fields;
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
};

const SliderHeadingDefaultComponent = (props: SliderHeadingProps): JSX.Element => (
  <div className={`component Main ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Main</span>
    </div>
  </div>
);

export const Default = (props: SliderHeadingProps): JSX.Element => {
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
  return <SliderHeadingDefaultComponent {...props} />;
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
const renderHeading = (props: SliderHeadingProps, Tag: keyof JSX.IntrinsicElements): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  if (props.fields) {
    return (
      <Tag
        id={id ? id : undefined}
        className={`component position-relative ${props.params.Styles}`}
      >
        <Text field={props.fields.Title} />
      </Tag>
    );
  }
  return <SliderHeadingDefaultComponent {...props} />;
};

// Export heading components with different tags
export const Heading1 = (props: SliderHeadingProps): JSX.Element => renderHeading(props, 'h1');
export const Heading2 = (props: SliderHeadingProps): JSX.Element => renderHeading(props, 'h2');
export const Heading3 = (props: SliderHeadingProps): JSX.Element => renderHeading(props, 'h3');
export const Heading4 = (props: SliderHeadingProps): JSX.Element => renderHeading(props, 'h4');
export const Heading5 = (props: SliderHeadingProps): JSX.Element => renderHeading(props, 'h5');
export const Heading6 = (props: SliderHeadingProps): JSX.Element => renderHeading(props, 'h6');
