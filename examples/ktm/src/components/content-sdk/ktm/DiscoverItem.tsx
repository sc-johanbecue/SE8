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

// Helper: render a JssLink in normal mode,
// but replace it with a non-link wrapper in editing mode (preserving className).
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
  console.log('ktm footer props:', JSON.stringify(props));

  const { page } = useSitecore();
  const isPageEditing = Boolean(page?.mode?.isEditing);

  return (
    <div className="image dynamicmedia parbase aem-GridColumn--tablet--12 aem-GridColumn--offset--tablet--0 aem-GridColumn--default--none aem-GridColumn--phone--none aem-GridColumn--phone--12 aem-GridColumn--tablet--none aem-GridColumn aem-GridColumn--offset--phone--0 aem-GridColumn--default--3 aem-GridColumn--offset--default--0">
      <div className="cq-dd-image">
        <figure
          className="c-image js-counter-authentication-image component"
          data-special="1"
          data-link="https://azweapppreorderserviceprod.azurewebsites.net/preorderservice/"
        >
          <MaybeJssLink
            isEditing={isPageEditing}
            field={props.fields.Link}
            className="c-image__link"
          >
            <div className="c-image__content">
              <div
                id="dynamicmedia_65130352"
                data-current-page="/content/websites/ktm-com/europe/be/en"
                data-page-locale="en_be"
                data-asset-path="ktm/KTM-dual-sport-690-enduror-segment-page-action-image"
                data-asset-name="KTM-dual-sport-690-enduror-segment-page-action-image.jpg"
                data-asset-type="image"
                data-viewer-path="https://s7g10.scene7.com/s7viewers/"
                data-imageserver="https://s7g10.scene7.com/is/image/"
                data-videoserver="https://s7g10.scene7.com/is/content/"
                data-contenturl="https://s7g10.scene7.com/is/content/"
                data-config="||"
                data-wcmdisabled=""
                data-dms7=""
                data-mode="smartcrop"
                data-aspectratio="true"
                data-linktarget="_self"
                data-alt="Rider drives an KTM Electric Bike along a rugged, rocky trail surrounded by natural terrain."
                className="s7dm-dynamic-media-ktm"
              >
                <div className="s7responsiveContainer">
                  <JssImage
                    field={props.fields.Image}
                    alt="Rider drives an KTM Electric Bike along a rugged, rocky trail surrounded by natural terrain."
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
          </MaybeJssLink>

          <div className="c-image__overlay c-image__overlay--center">
            <div className="content">
              <p className="subheading"><Text field={props.fields.SubHeading} /></p>
              <p className="heading"><Text field={props.fields.Heading} /></p>
              <div
                id="authenticateBeforeRedirect"
                data-authenticate="false"
                style={{ display: 'none' }}
              ></div>
            </div>
          </div>
        </figure>
      </div>
    </div>
  );
};
