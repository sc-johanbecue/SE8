import {
  ComponentParams,
  ComponentRendering,
  TextField,
  LinkField,
  Link as JssLink,
  Text,
  useSitecore,
} from '@sitecore-content-sdk/nextjs';
import React, { JSX, ReactNode } from 'react';

type ItemFields = {
  Title: TextField;
  Link: LinkField;
  SvgPaths: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: ItemFields;
};

// Reusable: unwrap JssLink in editing mode but keep classes/ids/children.
function MaybeJssLink({
  isEditing,
  field,
  className,
  id,
  target,
  rel,
  children,
}: {
  isEditing: boolean;
  field?: LinkField;
  className?: string;
  id?: string;
  target?: string;
  rel?: string;
  children: ReactNode;
}) {
  const hasHref = Boolean(field?.value && field.value.href);

  if (isEditing || !hasHref) {
    return (
      <div className={className} id={id} data-editing-unlinked>
        {children}
      </div>
    );
  }

  return (
    <JssLink field={field!} className={className} id={id} target={target} rel={rel}>
      {children}
    </JssLink>
  );
}

export const Default = (props: ComponentProps): JSX.Element => {
  console.log('ktm footer props:', JSON.stringify(props));

  const { page } = useSitecore();
  const isPageEditing = Boolean(page?.mode?.isEditing);

  const svgHtml = (props.fields.SvgPaths?.value as string) || '';

  return (
    <div className="c-icon-list__item">
      <MaybeJssLink
        isEditing={isPageEditing}
        field={props.fields.Link}
        className="c-icon-list-item__content"
        target="_self"
      >
        <div dangerouslySetInnerHTML={{ __html: svgHtml }} />
        <h6 className="c-icon-list-item__title">
          <Text field={props.fields.Title} />
        </h6>
      </MaybeJssLink>
    </div>
  );
};
