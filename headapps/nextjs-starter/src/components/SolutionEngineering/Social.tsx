import React, { JSX, useState } from 'react';
import { TextField, LinkField, GetStaticComponentProps } from '@sitecore-content-sdk/nextjs';
import * as FaIcons6 from 'react-icons/fa6';
import { IconType } from 'react-icons';
import { getColorCssVars } from '../../lib/SolutionEngineering/XMC-ColorPalette';

type ColorCssVars = {
  cssVar: string;
  contrastCssVar: string;
};

interface Fields {
  Icon: TextField;
  Link: LinkField;
}

type SocialProps = {
  params: { [key: string]: string };
  fields: Fields;
  color: ColorCssVars;
  hoverColor: ColorCssVars;
};

const DefaultContent = (props: SocialProps): JSX.Element => (
  <div
    className={`component Social ${props.params.styles}`}
    id={props.params.RenderingIdentifier || undefined}
  >
    <div className="component-content">
      <span className="is-empty-hint">Social Component</span>
    </div>
  </div>
);

export const Default = (props: SocialProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const iconName = typeof props.fields.Icon.value === 'string' ? props.fields.Icon.value : '';

  const iconMap: Record<string, IconType> = {
    ...FaIcons6,
  };
  const Icon = iconMap[iconName];

  const [hovered, setHovered] = useState(false);

  if (props.fields) {
    return (
      <div className={`component social ${props.params.styles}`} id={id || undefined}>
        <div className="component-content">
          <a
            href={props.fields.Link.value.url as string}
            target={props.fields.Link.value.target || '_self'}
            className="group"
            aria-label={props.fields.Link.value.text}
          >
            <span
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="inline-flex items-center justify-center w-8 h-8 rounded transition-all duration-200 transform hover:scale-110"
              style={{
                backgroundColor: hovered
                  ? `var(${props.color.cssVar})`
                  : `var(${props.hoverColor.cssVar})`,
              }}
            >
              <Icon
                size={16}
                style={{
                  color: hovered
                    ? `var(${props.hoverColor.contrastCssVar})`
                    : `var(${props.color.cssVar})`,
                  transition: 'color 0.2s ease',
                }}
              />
            </span>
          </a>
        </div>
      </div>
    );
  }

  return <DefaultContent {...props} />;
};

export const getStaticProps: GetStaticComponentProps = async (_rendering, _layoutData, context) => {
  const language = context?.locale as string;

  const color = await getColorCssVars(_rendering.params?.['Color'], language);
  const hoverColor = await getColorCssVars(_rendering.params?.['Hover Color'], language);

  return {
    color,
    hoverColor,
  };
};
