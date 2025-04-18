/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {
  Text,
  TextField,
  RichTextField,
  ImageField,
  LinkField,
  Image as JssImage,
  Link as JssLink,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import 'animate.css';

interface Fields {
  Name: TextField;
  Description: RichTextField;
  Image: ImageField;
  Link: LinkField;
  LogoImage: ImageField;
}

type CruiseLineProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const CruiseLineDefaultComponent = (props: CruiseLineProps): JSX.Element => (
  <div className={`component CruiseLine ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">CruiseLine</span>
    </div>
  </div>
);

export const Default = (props: CruiseLineProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const { sitecoreContext } = useSitecoreContext();

  if (props.fields) {
    return (
      <div
        className={`component item-grid item-cruise-line ${props.params.styles}`}
        key={id ? id : undefined}
        id={id ? id : undefined}
      >
        <div
          style={{
            backgroundImage: `url(${props.fields.Image.value?.src})`,
          }}
          className="img-block background"
        ></div>
        <div className="meta-data-flex flex flex-direction-column">
          <div className="meta-data">
            <div className="cruise-line-name">
              <Text field={props.fields.Name} />
            </div>
            <div className="cruise-line-description">
              <Text field={props.fields.Description} />
            </div>
          </div>
          <div className="cruise-line-logo">
            {!sitecoreContext.pageEditing ? (
              <JssLink field={props.fields.Link}>
                <JssImage field={props.fields.LogoImage} />
              </JssLink>
            ) : (
              <JssImage field={props.fields.LogoImage} />
            )}
          </div>
          <div className="button-block">
            <JssLink field={props.fields.Link} className="button default-cta cruise-line-detail" />
          </div>
        </div>
      </div>
    );
  }
  return <CruiseLineDefaultComponent {...props} />;
};
