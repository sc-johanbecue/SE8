import React from 'react';
import {
  LinkField,
  Link as JssLink,
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

import { useAppearAnimation } from './Utility/useAppearAnimation';
import 'animate.css';

interface Fields {
  Link: LinkField;
}

type ButtonProps = {
  fields: Fields;
  rendering: ComponentRendering;
  params: ComponentParams;
};

export const getStaticProps: GetStaticComponentProps = async (context) => {
  const renderingConfigurationGuid = context?.params?.RenderingConfiguration as string;

  const staticProps = await fetchRenderingConfiguration(renderingConfigurationGuid, [
    'ButtonType',
    'ButtonColor',
    'ButtonHorizontalPadding',
    'ButtonVerticalPadding',
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
    'AppearAnimation',
    'AppearAnimationSpeed',
    'AppearAnimationIteration',
    'AppearAnimationDelay',
  ]);

  return staticProps;
};

const ButtonDefaultComponent = (props: ButtonProps): JSX.Element => (
  <div className={`component Main ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Main</span>
    </div>
  </div>
);

export const Default = (props: ButtonProps): JSX.Element => {
  const staticProps = useComponentProps<RenderingConfigurationFields>(props.rendering.uid);
  const id = props.params.RenderingIdentifier;

  const animationRef = useAppearAnimation<HTMLAnchorElement>({
    params: props.params,
  });

  const baseClassNames = concatenateClassNames(
    staticProps?.RenderingConfigurationFields.ButtonType,
    staticProps?.RenderingConfigurationFields.ButtonColor,
    staticProps?.RenderingConfigurationFields.ButtonHorizontalPadding,
    staticProps?.RenderingConfigurationFields.ButtonVerticalPadding,
    staticProps?.RenderingConfigurationFields.FontWeight,
    staticProps?.RenderingConfigurationFields.FontSize,
    staticProps?.RenderingConfigurationFields.PaddingStart,
    staticProps?.RenderingConfigurationFields.PaddingEnd,
    staticProps?.RenderingConfigurationFields.PaddingTop,
    staticProps?.RenderingConfigurationFields.PaddingBottom,
    staticProps?.RenderingConfigurationFields.MarginStart,
    staticProps?.RenderingConfigurationFields.MarginEnd,
    staticProps?.RenderingConfigurationFields.MarginTop,
    staticProps?.RenderingConfigurationFields.MarginBottom
  );

  if (props.fields?.Link) {
    return (
      <JssLink
        ref={animationRef}
        key={id || undefined}
        id={id || undefined}
        field={props.fields.Link}
        className={`component btn ${baseClassNames} ${props.params.styles}`}
      />
    );
  }

  return <ButtonDefaultComponent {...props} />;
};
