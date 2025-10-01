import {
  ComponentParams,
  ComponentRendering,
  TextField,
  LinkField,
  RichTextField,
  ImageField,
  Text,
  Link as JssLink,
  Image as JssImage,
  RichText,
} from '@sitecore-content-sdk/nextjs';
import React, { JSX } from 'react';

type ItemFields = {
  Heading: TextField;
  Image: ImageField;
  Text: RichTextField;
  Link: LinkField;
  Time: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: ItemFields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  console.log('ktm newarticleteaser props:', JSON.stringify(props));

  return (
    <article className="c-teaser-list__item c-teaser-list__item--three-items-per-row">
      <JssLink field={props.fields.Link} className="c-teaser-list__link--block">
        <div className="image dynamicmedia parbase aem-GridColumn aem-GridColumn--default--12">
          <figure className="c-teaser-list__figure c-teaser-list__figure--three-items-per-row">
            <div className="cq-dd-image">
              <div className="c-image__content">
                <div id="38562452" className="s7dm-dynamic-media-ktm">
                  <div className="s7responsiveContainer">
                    <JssImage
                      field={props.fields.Image}
                      className="fluidimage"
                      sizes="100vw"
                      width={0}
                      height={0}
                      data-enablehd="always"
                      style={{ width: '100%', height: 'auto' }}
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </div>
          </figure>
        </div>
      </JssLink>
      <div className="c-teaser-list__content c-teaser-list__content--three-items-per-row">
        <time
          className="c-teaser-list__date c-teaser-list__date--three-items-per-row"
          dateTime={props.fields.Time.value as string}
        >
          <Text field={props.fields.Time} />
        </time>{' '}
        <JssLink
          field={props.fields.Link}
          className="c-teaser-list__link c-teaser-list__link--three-items-per-row"
        >
          <h2 className="c-teaser-list__title c-teaser-list__title--three-items-per-row line-clamp-3">
            <Text field={props.fields.Heading} />
          </h2>
          <span className="c-teaser-list__cta c-teaser-list__cta--three-items-per-row">
            View Profile
          </span>
        </JssLink>
        <div className="c-teaser-list__teaser c-teaser-list__teaser--three-items-per-row line-clamp-4">
          <RichText field={props.fields.Text} />
        </div>
      </div>
    </article>
  );
};
