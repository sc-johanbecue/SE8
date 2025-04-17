/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {
  Text,
  TextField,
  ImageField,
  LinkField,
  Image as JssImage,
  Link as JssLink,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  SmallText: TextField;
  LargeText: TextField;
  Description: TextField;
  Image: ImageField;
  Link: LinkField;
}

type ExploreProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const ExploreDefaultComponent = (props: ExploreProps): JSX.Element => (
  <div className={`component Explore ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Explore</span>
    </div>
  </div>
);

const InnerComponent = (props: ExploreProps): JSX.Element => (
  <>
    <JssImage field={props.fields.Image} />
    <div className="wrapper-text">
      <div className="small-text">
        <Text field={props.fields.SmallText} />
      </div>
      <div className="large-text">
        <Text field={props.fields.LargeText} />
      </div>
      <div className="description">
        <Text field={props.fields.Description} />
      </div>
    </div>
  </>
);

export const Default = (props: ExploreProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const { sitecoreContext } = useSitecoreContext();

  if (props.fields) {
    return (
      <div className="img-item img-item-0" id={id ? id : undefined}>
        {!sitecoreContext.pageEditing ? (
          <JssLink field={props.fields.Link}>
            <InnerComponent {...props} />
          </JssLink>
        ) : (
          <InnerComponent {...props} />
        )}
      </div>
    );
  }
  return <ExploreDefaultComponent {...props} />;
};
