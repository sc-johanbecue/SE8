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

  const z = props.params.RenderingConfiguration;
  const headingClassNames = concatenateClassNames(
    z.TextColor,
    z.FontWeight,
    z.PaddingStart,
    z.PaddingEnd,
    z.PaddingTop,
    z.PaddingBottom,
    z.MarginStart,
    z.MarginEnd,
    z.MarginTop,
    z.MarginBottom
  );

  if (props.fields) {
    return (
      <p
        id={id ? id : undefined}
        className={`component text-center ${headingClassNames} ${
          props.params.Styles ? props.params.Styles : ''
        }`}
      >
        {z.CharacterAnimationConfiguration != undefined ? (
          <AnimatedLetters
            text={props.fields.Title?.value as string}
            characterAnimationConfiguration={z.CharacterAnimationConfiguration}
          />
        ) : (
          <Text field={props.fields.Title} />
        )}
      </p>
    );
  }
  return <AnimatedLettersParagraphDefaultComponent {...props} />;
};
