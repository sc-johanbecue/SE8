import React from 'react'; //{ useState }
import {
  ComponentRendering,
  ComponentParams,
  TextField,
  Placeholder,
  Text,
  RichTextField,
  RichText,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: TextField;
  Intro: RichTextField;
}

type FooterProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: FooterProps): JSX.Element => {
  const phCards = `FrieslandCampinaCards-${props.params.DynamicPlaceholderId}`;

  return (
    <section className="block block--cards cards cards--image inview" id={props.rendering.uid}>
      <div className="block__inner ls-container ls-gutter ls-spacing">
        <header className="block__header cards__header ls-inner-container ls-row">
          <div className="ls-first-item">
            <h2 className="block__title title--m">
              <Text field={props.fields.Title} />
            </h2>
          </div>
          <div className="cards__intro ls-second-item text--styled">
            <RichText field={props.fields.Intro} />
          </div>
        </header>
        <div className="block__content">
          <ul className="cards__list">
            <Placeholder name={phCards} rendering={props.rendering} />
          </ul>
        </div>
      </div>
    </section>
  );
};

export const CardsOnly = (props: FooterProps): JSX.Element => {
  const phCards = `FrieslandCampinaCards-${props.params.DynamicPlaceholderId}`;

  return (
    <section className="block block--cards cards cards--image inview" id={props.rendering.uid}>
      <div className="block__inner ls-container ls-gutter ls-spacing">
        <div className="block__content">
          <ul className="cards__list">
            <Placeholder name={phCards} rendering={props.rendering} />
          </ul>
        </div>
      </div>
    </section>
  );
};
