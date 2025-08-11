import React from 'react'; //{ useState }
import {
  ComponentRendering,
  ComponentParams,
  TextField,
  Text,
  LinkField,
  Link as JssLink,
  ImageField,
  Image as JssImage,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: TextField;
  Intro: TextField;
  Image: ImageField;
  Link: LinkField;
  LinkText: TextField;
}

type FooterProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const FooterDefaultComponent = (props: FooterProps): JSX.Element => (
  <div className={`component Footer ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Footer</span>
    </div>
  </div>
);

const renderCardContent = (fields: Fields): JSX.Element => (
  <>
    <div className="card__visual  border-radius">
      <JssImage field={fields.Image} />
    </div>
    <div className="card__content">
      <h3 className="card__title title--xs">
        <Text field={fields.Title} />
      </h3>
      <div className="card__intro">
        <Text field={fields.Intro} />
      </div>
      <footer className="card__fauxlink">
        <span className="card__fauxlabel link">
          <Text field={fields.LinkText} />
        </span>
      </footer>
    </div>
  </>
);

export const Default = (props: FooterProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();

  if (props.fields) {
    return (
      <li className="cards__card card card--has-image">
        <article className="card__inner">
          {!sitecoreContext.pageEditing && props.fields.Link?.value.href != '' ? (
            <JssLink
              id="0-melk-leveren-aan-frieslandcampina"
              field={props.fields.Link}
              className="card__link"
            >
              {renderCardContent(props.fields)}
            </JssLink>
          ) : (
            <div className="card__link">{renderCardContent(props.fields)}</div>
          )}
        </article>
      </li>
    );
  }
  return <FooterDefaultComponent {...props} />;
};
