import React from 'react';
import {
  ImageField,
  Image as JssImage,
  LinkField,
  Link as JssLink,
  Text,
  TextField,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Text: TextField;
  SpanText: TextField;
  Link: LinkField;
  Image: ImageField;
}

type AirlineDiscoverItemProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const AirlineDiscoverItemDefaultComponent = (props: AirlineDiscoverItemProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: AirlineDiscoverItemProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const isPageEditing = sitecoreContext.pageEditing;

  if (props.fields) {
    return (
      <div className="col-lg-3 col-md-6 col-sm-6 col-12">
        <div className="imagination_boxed">
          {isPageEditing ? (
            <>
              <JssImage field={props.fields.Image} />
              <JssLink field={props.fields.Link} />
            </>
          ) : (
            <JssLink field={props.fields.Link}>
              <JssImage field={props.fields.Image} />
            </JssLink>
          )}

          <h3>
            <JssLink field={props.fields.Link}>
              <Text field={props.fields.Text} />
              {!isPageEditing ? <br /> : <></>}
              <Text field={props.fields.SpanText} />
            </JssLink>
          </h3>
        </div>
      </div>
    );
  }

  return <AirlineDiscoverItemDefaultComponent {...props} />;
};
