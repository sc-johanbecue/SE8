import React, { JSX } from 'react';
import {
  ComponentParams,
  ComponentRendering,
  Placeholder,
  useSitecoreContext,
} from '@sitecore-content-sdk/nextjs';

type SocialContainerProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
};

export const Default = (props: SocialContainerProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const phKey = `socialContainer-${props.params.DynamicPlaceholderId}`;
  const editingPhKey = `socialContainer-{*}`;
  const { sitecoreContext } = useSitecoreContext();
  const hasChildren = sitecoreContext.pageEditing
    ? props.rendering.placeholders?.[editingPhKey]?.length
    : props.rendering.placeholders?.[phKey]?.length;

  return (
    <div className={`component ${props.params.styles}`} id={id ? id : undefined}>
      <div className={hasChildren === 0 ? 'contents' : 'flex flex-row gap-2'}>
        <Placeholder name={phKey} rendering={props.rendering} />
      </div>
    </div>
  );
};
