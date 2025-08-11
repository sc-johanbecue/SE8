// components/blocks/TextBlock.tsx
import React from 'react';
import {
  ComponentRendering,
  ComponentParams,
  Text as JssText,
  RichText as JssRichText,
  TextField,
  RichTextField,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title?: TextField; // optional (text-3 had no header)
  Body?: RichTextField; // rich text content
}

type Props = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export default function TextBlock(props: Props): JSX.Element {
  // If you want to set the <section id="..."> from params, use a param like "AnchorId"
  const idAttr = props.params?.AnchorId ?? props.rendering?.params?.Id ?? props.rendering?.uid;

  const hasTitle = !!props.fields?.Title?.value;
  return (
    <section id={idAttr} className="block block--text block--adjoins text inview">
      <div className="ls-container ls-gutter">
        <div className="text__inner">
          {hasTitle && (
            <header className="text__header">
              <h2 className="text__title title--m">
                <JssText field={props.fields.Title!} />
              </h2>
            </header>
          )}
          <div className="text__content">
            <div className="text__text text--styled">
              <JssRichText field={props.fields.Body} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
