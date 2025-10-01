import {
  ComponentParams,
  ComponentRendering,
  TextField,
  LinkField,
  ImageField,
  Image as JssImage,
  Link as JssLink,
  Text,
  useSitecore,
} from '@sitecore-content-sdk/nextjs';
import React, { JSX, ReactNode } from 'react';

type ItemFields = {
  Heading: TextField;
  SubHeading: TextField;
  Image: ImageField;
  Slogan: TextField;
  ButtonLabel: TextField;
  Link: LinkField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: ItemFields;
};

// Helper: render a JssLink in normal mode,
// but replace it with a non-link wrapper in editing mode.
// If link is missing, just render children with the className.
function MaybeJssLink({
  isEditing,
  field,
  className,
  children,
}: {
  isEditing: boolean;
  field?: LinkField;
  className?: string;
  children: ReactNode;
}) {
  const hasHref = Boolean(field?.value && field.value.href);

  if (isEditing || !hasHref) {
    // preserve layout/styles when editing or when link is empty
    return (
      <div className={className} data-editing-unlinked>
        {children}
      </div>
    );
  }

  return (
    <JssLink field={field!} className={className}>
      {children}
    </JssLink>
  );
}

export const Default = (props: ComponentProps): JSX.Element => {
  const { page } = useSitecore();
  const isPageEditing = Boolean(page?.mode?.isEditing);

  return (
    <article className="c-model-list__item">
      <MaybeJssLink
        isEditing={isPageEditing}
        field={props.fields.Link}
        className="c-model-list__item__info"
      >
        <figure className="c-model-list__image">
          <JssImage
            field={props.fields.Image}
            sizes="100vw"
            width={0}
            height={0}
            style={{ width: '100%', height: 'auto' }}
            unoptimized
          />
        </figure>

        <h3 className="c-model-list__item-heading">
          <Text field={props.fields.Heading} />
        </h3>
        <h4 className="c-model-list__item-slogan">
          <Text field={props.fields.Slogan} />
        </h4>

        <div className="c-model-list__item-details">
          <div className="c-model-list__item-availibity"></div>
        </div>
      </MaybeJssLink>

      <div className="c-model-list__buttons">
        <MaybeJssLink
          isEditing={isPageEditing}
          field={props.fields.Link}
          className="c-btn__link c-model-list__button c-model-list__button--model-page c-btn__link--primary-dark"
        >
          <Text field={props.fields.ButtonLabel} />
        </MaybeJssLink>
      </div>
    </article>
  );
};
