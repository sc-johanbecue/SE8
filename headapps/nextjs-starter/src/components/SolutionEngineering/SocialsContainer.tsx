import React, { JSX } from 'react';
import {
  TextField,
  LinkField,
  ComponentParams,
  ComponentRendering,
  GetStaticComponentProps,
  Placeholder,
  useSitecoreContext,
} from '@sitecore-content-sdk/nextjs';
import { Guid } from '../../lib/SolutionEngineering/Types';
import { getSocialChildren } from '../../lib/SolutionEngineering/XMC-Content';
import { getColorCssVars } from '../../lib/SolutionEngineering/XMC-ColorPalette';

import * as SocialComponent from './Social';
const Social = SocialComponent.Default;

type SocialsContainerProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  children?: { id: Guid; icon: TextField; link: { jsonValue: LinkField } }[];
};

export const Default = (props: SocialsContainerProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const phKey = `socialsContainer-${props.params.DynamicPlaceholderId}`;
  const editingPhKey = `socialsContainer-{*}`;
  const { sitecoreContext } = useSitecoreContext();
  const hasChildren = sitecoreContext.pageEditing
    ? props.rendering.placeholders?.[editingPhKey]?.length
    : props.rendering.placeholders?.[phKey]?.length;

  return (
    <div
      className={`component socialsContainer ${props.params.styles} mx-auto px-4 py-2 flex flex-col md:flex-row items-center gap-2`}
      id={id ? id : undefined}
    >
      <div
        className={
          hasChildren === 0
            ? 'contents'
            : 'flex flex-col md:flex-row items-center gap-2 md:gap-4 text-xs md:text-sm'
        }
      >
        <Placeholder name={phKey} rendering={props.rendering} />
      </div>
    </div>
  );
};

export const All = (props: SocialsContainerProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  return (
    <div
      className={`component socialsContainer ${props.params.styles} mx-auto px-4 py-2 flex flex-col md:flex-row items-center gap-2`}
      id={id ? id : undefined}
    >
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-xs md:text-sm">
        {props.children?.length
          ? props.children.map((child, index) => (
              <Social
                key={index}
                rendering={{ ...props.rendering, dataSource: child.id }}
                params={{
                  ...props.params,
                  RenderingIdentifier: `social-${index}`,
                  styles: '',
                }}
                fields={{
                  Icon: child.icon,
                  Link: child.link.jsonValue,
                }}
                color={{ cssVar: 'var(--primary-color)', contrastCssVar: 'var(--white)' }}
                hoverColor={{ cssVar: 'var(--secondary-color)', contrastCssVar: 'var(--white)' }}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticComponentProps = async (_rendering, _layoutData, context) => {
  const language = context?.locale as string;

  const color = await getColorCssVars(_rendering.params?.['Color'], language);
  const hoverColor = await getColorCssVars(_rendering.params?.['Hover Color'], language);
  const children = await getSocialChildren(_rendering.dataSource, language); // returns list of { id: string }

  return {
    color,
    hoverColor,
    children,
  };
};
