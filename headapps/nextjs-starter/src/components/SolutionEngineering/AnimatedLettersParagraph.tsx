import React from 'react';
import {
  Text,
  TextField,
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
import AnimatedLetters from './Utility/AnimatedLetters'; // Import the generic component
import 'animate.css';

interface Fields {
  Title: TextField;
}

type AnimatedLettersParagraphProps = {
  fields: Fields;
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
};

//export const getServerSideProps: GetServerSideComponentProps
export const getStaticProps: GetStaticComponentProps = async (context) => {
  console.log('AnimatedLettersParagraph - Starting getStaticProps');

  // Extract the renderingConfiguration GUID from the context params.
  // Note: if the field is nested differently, adjust accordingly.
  const renderingConfigurationGuid = context?.params?.RenderingConfiguration as string;

  const staticProps = await fetchRenderingConfiguration(renderingConfigurationGuid, [
    'LineHeight',
    'TextColor',
    'CharacterSpacing',
    'CharacterAnimationConfiguration',
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
  console.log('AnimatedLettersParagraph - Ended getStaticProps');
  return staticProps;
};

const AnimatedLettersParagraphDefaultComponent = (
  props: AnimatedLettersParagraphProps
): JSX.Element => (
  <div className={`component Main ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Main</span>
    </div>
  </div>
);

// Helper function to render a heading with a dynamic tag
export const Default = (props: AnimatedLettersParagraphProps): JSX.Element => {
  const staticProps = useComponentProps<RenderingConfigurationFields>(props.rendering.uid);
  const id = props.params.RenderingIdentifier;

  const headingClassNames = concatenateClassNames(
    staticProps?.RenderingConfigurationFields.TextColor,
    staticProps?.RenderingConfigurationFields.FontWeight,
    staticProps?.RenderingConfigurationFields.PaddingStart,
    staticProps?.RenderingConfigurationFields.PaddingEnd,
    staticProps?.RenderingConfigurationFields.PaddingTop,
    staticProps?.RenderingConfigurationFields.PaddingBottom,
    staticProps?.RenderingConfigurationFields.MarginStart,
    staticProps?.RenderingConfigurationFields.MarginEnd,
    staticProps?.RenderingConfigurationFields.MarginTop,
    staticProps?.RenderingConfigurationFields.MarginBottom
  );

  if (props.fields) {
    return (
      <p
        key={id ? id : undefined}
        id={id ? id : undefined}
        className={`component text-center ${headingClassNames} ${
          props.params.Styles ? props.params.Styles : ''
        }`}
      >
        {staticProps?.RenderingConfigurationFields.CharacterAnimationConfiguration != undefined ? (
          <AnimatedLetters
            text={props.fields.Title?.value as string}
            characterAnimationConfiguration={
              staticProps?.RenderingConfigurationFields.CharacterAnimationConfiguration
            }
          />
        ) : (
          <Text field={props.fields.Title} />
        )}
      </p>
    );
  }
  return <AnimatedLettersParagraphDefaultComponent {...props} />;
};
