import React from 'react';
import {
  ComponentRendering,
  ComponentParams,
  TextField,
  LinkField,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Link: LinkField;
  Title: TextField;
}

type LinkLatersPodCastProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const LinkLatersPodCastDefaultComponent = (props: LinkLatersPodCastProps): JSX.Element => (
  <div className={`component ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: LinkLatersPodCastProps): JSX.Element => {
  if (props.fields) {
    return (
      <iframe
        title={props.fields.Title.value?.toString()}
        allowTransparency
        height="150"
        width="100%"
        style={{ border: 'none', minWidth: 'min(100%, 430px)', height: '150px;', padding: '5px' }}
        scrolling="no"
        data-name="pb-iframe-player"
        src={props.fields.Link.value.href}
        loading="lazy"
      ></iframe>
    );
  }
  return <LinkLatersPodCastDefaultComponent {...props} />;
};
