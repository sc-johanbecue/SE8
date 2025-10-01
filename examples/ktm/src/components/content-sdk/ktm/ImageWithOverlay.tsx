import {
  ComponentParams,
  ComponentRendering,
  TextField,
  LinkField,
  RichTextField,
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
  Text: RichTextField;
  ButtonLabel: TextField;
  Link: LinkField;
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
  rel,
  target,
  children,
}: {
  isEditing: boolean;
  field?: LinkField;
  className?: string;
  id?: string;
  rel?: string;
  target?: string;
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
    <JssLink field={field!} className={className} id={id} rel={rel} target={target}>
      {children}
    </JssLink>
  );
}

export const Default = (props: ComponentProps): JSX.Element => {
  console.log('ktm footer props:', JSON.stringify(props));

  const { page } = useSitecore();
  const isPageEditing = Boolean(page?.mode?.isEditing);

  return (
    <div className="image dynamicmedia parbase aem-GridColumn aem-GridColumn--default--12">
      <div className="cq-dd-image">
        <figure className="c-image js-counter-authentication-image component" data-special="1">
          <div className="c-image__content">
            <div className="s7dm-dynamic-media-ktm">
              <div className="s7responsiveContainer">
                <JssImage
                  field={props.fields.Image}
                  className="fluidimage"
                  sizes="100vw"
                  width={0}
                  height={0}
                  data-mode="smartcrop"
                  data-enablehd="always"
                  data-aspectratio="true"
                  style={{ width: '100%', height: 'auto' }}
                  unoptimized
                />
              </div>
            </div>
          </div>

          <div className="c-image__overlay c-image__overlay--right">
            <div className="content">
              <p className="subheading">
                <Text field={props.fields.SubHeading} />
              </p>
              <p className="heading">
                <Text field={props.fields.Heading} />
              </p>

              <div
                id="authenticateBeforeRedirect"
                data-authenticate="false"
                style={{ display: 'none' }}
              ></div>

              <MaybeJssLink
                isEditing={isPageEditing}
                field={props.fields.Link}
                className="c-btn__link js-authenticate-btn"
                id="authenticate-btn"
              >
                <Text field={props.fields.ButtonLabel} />
              </MaybeJssLink>
            </div>
          </div>
        </figure>
      </div>
    </div>
  );
};

export const Small = (props: ComponentProps): JSX.Element => {
  console.log('ktm footer props:', JSON.stringify(props));

  const { page } = useSitecore();
  const isPageEditing = Boolean(page?.mode?.isEditing);

  return (
    <div className="image dynamicmedia parbase aem-GridColumn--default--none aem-GridColumn--phone--none aem-GridColumn--phone--12 aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--offset--phone--0 aem-GridColumn--offset--default--0">
      <div className="cq-dd-image showOriginalImage">
        <figure className="c-image js-counter-authentication-image component" data-special="1">
          <MaybeJssLink
            isEditing={isPageEditing}
            field={props.fields.Link}
            className="c-image__link"
            rel="noopener noreferrer"
          >
            <div className="c-image__content">
              <div id="dynamicmedia_99848000" className="s7dm-dynamic-media-ktm">
                <div className="s7responsiveContainer">
                  <JssImage
                    field={props.fields.Image}
                    className="fluidimage"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </MaybeJssLink>

          <div className="c-image__overlay c-image__overlay--center c-image__overlay--background">
            <div className="content">
              <p className="subheading">
                <Text field={props.fields.SubHeading} />
              </p>
              <p className="heading">
                <Text field={props.fields.Heading} />
              </p>
              <div
                id="authenticateBeforeRedirect"
                data-authenticate="false"
                style={{ display: 'none' }}
              ></div>
            </div>
          </div>
        </figure>
      </div>

      {/* Viewport-based font-size tweak for tablet-ish widths */}
      <style jsx>{`
        @media (min-width: 450px) and (max-width: 1024px) {
          .subheading{
            font-size: 1.5em !important;
            line-height: 1.15 !important;
          }

          .heading {
            font-size: 3em !important;
            line-height: 1.15 !important;
          }

          div.c-image__content,
          div.c-image__overlay {
            padding: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};
