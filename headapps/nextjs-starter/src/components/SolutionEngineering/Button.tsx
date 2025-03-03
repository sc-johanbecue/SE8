'use server';

import React from 'react';
import {
  Link as JssLink,
  LinkField,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-jss/sitecore-jss-nextjs';

import 'animate.css';

interface Fields {
  Link: LinkField;
}

type ButtonProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
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
      <div
        className={`btn btn-modern font-weight-bold text-3 py-3 btn-px-5 mt-1 ${props.params.styles}`}
      >
        <JssLink
          id={id ? id : undefined}
          defaultValue="GET STARTED NOW!"
          field={props.fields.Link}
          style={{ animationDelay: '1800ms' }}
          {...(props.params.Disabled ? { disabled: true } : {})}
        />
      </div>
    );
  }

  return <ButtonDefaultComponent {...props} />;
};
