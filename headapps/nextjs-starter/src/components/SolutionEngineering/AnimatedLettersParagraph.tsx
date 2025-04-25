import React from 'react';
import {
  Text,
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
    TextColor?: { fields: { Value: { value: string } } };
    FontWeight?: { fields: { Value: { value: string } } };
    FontSize?: { fields: { Value: { value: string } } };
    LineHeight?: { fields: { Value: { value: string } } };
    CharacterSpacing?: { fields: { Value: { value: string } } };
    CharacterAnimationConfiguration?: { fields: { Value: { value: string } } };
    PaddingStart?: { fields: { Value: { value: string } } };
    PaddingEnd?: { fields: { Value: { value: string } } };
    PaddingTop?: { fields: { Value: { value: string } } };
    PaddingBottom?: { fields: { Value: { value: string } } };
    MarginStart?: { fields: { Value: { value: string } } };
    MarginEnd?: { fields: { Value: { value: string } } };
    MarginTop?: { fields: { Value: { value: string } } };
    MarginBottom?: { fields: { Value: { value: string } } };
    WrapText?: { fields: { Value: { value: string } } };
  };
}

type AnimatedLettersParagraphProps = {
  fields: Fields;
  rendering: ComponentRendering & { params: RenderingConfigurationParam & ComponentParams };
  params: RenderingConfigurationParam & ComponentParams;
};

// //export const getServerSideProps: GetServerSideComponentProps
// export const getStaticProps: GetStaticComponentProps = async (context) => {
//   console.log('AnimatedLettersParagraph - Starting getStaticProps');

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
//   ]);

//   console.log(
//     ('getStaticProps - FieldName: PrefixImage' +
//       ' - Value: ' +
//       staticProps.PrefixImage?.Value.src) as string
//   );
//   console.log('AnimatedLettersParagraph - Ended getStaticProps');
//   return staticProps;
// };

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
  const id = props.params.RenderingIdentifier;

  const headingClassNames = concatenateClassNames(
    props.params.RenderingConfiguration.TextColor?.Value,
    props.params.RenderingConfiguration.FontWeight?.Value,
    props.params.RenderingConfiguration.PaddingStart?.Value,
    props.params.RenderingConfiguration.PaddingEnd?.Value,
    props.params.RenderingConfiguration.PaddingTop?.Value,
    props.params.RenderingConfiguration.PaddingBottom?.Value,
    props.params.RenderingConfiguration.MarginStart?.Value,
    props.params.RenderingConfiguration.MarginEnd?.Value,
    props.params.RenderingConfiguration.MarginTop?.Value,
    props.params.RenderingConfiguration.MarginBottom?.Value
  );

  if (props.fields) {
    return (
      <p
        id={id ? id : undefined}
        className={`component text-center ${headingClassNames} ${
          props.params.Styles ? props.params.Styles : ''
        }`}
      >
        {props.params.RenderingConfiguration.CharacterAnimationConfiguration != undefined ? (
          <AnimatedLetters
            text={props.fields.Title?.value as string}
            characterAnimationConfiguration={
              props.params.RenderingConfiguration.CharacterAnimationConfiguration
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
