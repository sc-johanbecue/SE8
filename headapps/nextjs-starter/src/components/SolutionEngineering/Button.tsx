import React from 'react';
import { Link as JssLink, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Link: LinkField;
}

type ButtonProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const ButtonDefaultComponent = (props: ButtonProps): JSX.Element => (
  <div className={`component Button ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Button</span>
    </div>
  </div>
);

export const Default = (props: ButtonProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  if (props.fields) {
    return (
      //surrounding div added as  workaround for a bug, because classNames are not rendered on the <a> tag.
      <div className="btn btn-primary btn-modern font-weight-bold text-3 py-3 btn-px-5 mt-1 appear-animation animated fadeInUpShorter appear-animation-visible">
        <JssLink
          id={id ? id : undefined}
          defaultValue="GET STARTED NOW!"
          field={props.fields.Link}
          style={{ animationDelay: '1800ms' }}
        />
      </div>
    );
  }

  return <ButtonDefaultComponent {...props} />;
};
