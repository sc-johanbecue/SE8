import React, { JSX } from 'react';
import { TextField, Text, GetStaticComponentProps } from '@sitecore-content-sdk/nextjs';
import { getFontCssVars, FontCssVars } from 'lib/SolutionEngineering/XMC-Fonts';

interface Fields {
  'Copyright Text': TextField;
}

/**
 * Presentation-related props resolved from getStaticProps.
 */
type CopyrightPresentationProps = {
  fontFamily?: FontCssVars;
};

type CopyrightProps = {
  params: { [key: string]: string };
  fields: Fields;
} & CopyrightPresentationProps;

const DefaultContent = (props: CopyrightProps): JSX.Element => (
  <div
    className={`component copyright ${props.params.styles}`}
    id={props.params.RenderingIdentifier || undefined}
  >
    <div className="component-content">
      <span className="is-empty-hint">Copyright Component</span>
    </div>
  </div>
);

export const Default = (props: CopyrightProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  if (props.fields) {
    return (
      <div
        className={`component ${props.params.styles}`}
        id={id || undefined}
        style={props.fontFamily ? { fontFamily: `var(${props.fontFamily.cssVar})` } : {}}
      >
        <Text field={props.fields['Copyright Text']} />
      </div>
    );
  }

  return <DefaultContent {...props} />;
};

/**
 * Static props function for the Social component.
 * Resolves icon size, styles, and color variables from Sitecore rendering params.
 */
export const getStaticProps: GetStaticComponentProps = async (rendering, _layoutData, context) => {
  const language = context?.locale as string;

  // Resolve all presentation-related values
  const [fontFamily] = await Promise.all([
    getFontCssVars(rendering.params?.['Font Family'], language),
  ]);

  console.log('[Copyright getStaticProps] Font Family:', { fontFamily });

  return {
    fontFamily,
  };
};
