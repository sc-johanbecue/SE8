import React, { JSX } from 'react';
import { TextField, GetStaticComponentProps } from '@sitecore-content-sdk/nextjs';
import { getFontCssVars, FontCssVars } from 'lib/SolutionEngineering/XMC-Fonts';

interface Fields {
  'Link Text': TextField;
}

/**
 * Presentation-related props resolved from getStaticProps.
 */
type LinkPresentationProps = {
  fontFamily?: FontCssVars;
};

type LinkProps = {
  params: { [key: string]: string };
  fields: Fields;
} & LinkPresentationProps;

const DefaultContent = (props: LinkProps): JSX.Element => (
  <div
    className={`component link ${props.params.styles}`}
    id={props.params.RenderingIdentifier || undefined}
  >
    <div className="component-content">
      <span className="is-empty-hint">Link Component</span>
    </div>
  </div>
);

export const Default = (props: LinkProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  if (props.fields) {
    return (
      <>
        <a
          className="component basis-auto group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600 no-underline hover:underline"
          color="blue"
          href="/register"
          id={id || undefined}
        >
          <span>
            Get started <span className="hidden lg:inline">today</span>
          </span>
        </a>
        <a href="/register" className="no-underline hover:underline text-blue-600">
          Get started
        </a>
      </>
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

  console.log('[Link getStaticProps] Font Family:', { fontFamily });

  return {
    fontFamily,
  };
};
