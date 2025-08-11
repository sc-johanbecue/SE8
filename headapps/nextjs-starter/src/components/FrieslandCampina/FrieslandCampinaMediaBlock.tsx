// components/blocks/MediaBlock.tsx
import React from 'react';
import {
  ComponentRendering,
  ComponentParams,
  Image as JssImage,
  RichText as JssRichText,
  ImageField,
  RichTextField,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Image: ImageField; // required image
  Caption?: RichTextField; // optional figcaption (present in media-5)
}

type Props = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export default function MediaBlock(props: Props): JSX.Element {
  const idAttr = props.params?.AnchorId ?? props.rendering?.params?.Id ?? props.rendering?.uid;

  return (
    <section id={idAttr} className="block block--media block--adjoins media inview">
      <div className="ls-container--m ls-gutter ls-spacing">
        <div className="media__inner media__inner--content-width">
          <header className="media__header">
            <div className="media__wrap"></div>
          </header>
          <figure className="media__visual">
            {/* Keep classes identical; JssImage will output <img> with your className */}
            <JssImage
              field={props.fields.Image}
              className="media__image border-radius lazyautosizes lazyloaded"
            />
            <figcaption className="media__meta ls-inner-container">
              <span className="media__caption text--l">
                <JssRichText field={props.fields.Caption!} />
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
