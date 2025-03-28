import React from 'react';
import Image from 'next/image';
import {
  TextField,
  ComponentParams,
  ComponentRendering,
  useComponentProps,
  GetStaticComponentProps,
} from '@sitecore-jss/sitecore-jss-nextjs';
import {
  RenderingConfigurationFields,
  fetchRenderingConfiguration,
} from './Utility/RenderingConfigurationUtils';
import 'animate.css';

interface Fields {
  Title: TextField;
}

type PrefixOrPrefixImageProps = {
  fields: Fields;
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
};

const PrefixOrSuffixImageDefaultComponent = (props: PrefixOrPrefixImageProps): JSX.Element => (
  <div className={`component Main ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Main</span>
    </div>
  </div>
);
//export const getServerSideProps: GetServerSideComponentProps
export const getStaticProps: GetStaticComponentProps = async () => {
  console.log('Starting getStaticProps');

  // Specify the path for the GraphQL query and the fields you need.
  const staticProps = await fetchRenderingConfiguration(
    '/sitecore/content/default/templates/Presentation/Rendering Configurations/Span Configuration',
    [
      'PrefixImage',
      'PrefixOpacity',
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

// Helper function to render a heading with a dynamic tag
export const Default = (props: PrefixOrPrefixImageProps): JSX.Element => {
  const staticProps = useComponentProps<RenderingConfigurationFields>(props.rendering.uid);
  const id = props.params.RenderingIdentifier;

  if (props.fields) {
    return (
      <span
        id={id ? id : undefined}
        className={`component position-absolute left-100pct top-50pct transform3dy-n50`}
        style={{ width: '37px', height: '10px' }}
      >
        <Image
          className={`w-auto`}
          src={staticProps?.RenderingConfigurationFields.PrefixImage.value.src}
          alt={staticProps?.RenderingConfigurationFields.PrefixImage.value.alt as string}
          fill={true}
          sizes={`${staticProps?.RenderingConfigurationFields.PrefixImage.value.width}px`}
        />
      </span>
    );
  }
  return <PrefixOrSuffixImageDefaultComponent {...props} />;
};
