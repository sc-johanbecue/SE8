/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { RichTextField, RichText, TextField, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import 'animate.css';

interface Fields {
  Title: TextField;
  Text: RichTextField;
}

type ContentWithTitleProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const ContentWithTitleDefaultComponent = (props: ContentWithTitleProps): JSX.Element => (
  <div className={`component ContentWithTitle ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">ContentWithTitle</span>
    </div>
  </div>
);

export const Default = (props: ContentWithTitleProps): JSX.Element => {
  const id = 'ContentWithTitle-content'; //props.params.RenderingIdentifier;

  if (props.fields) {
    return (
      <div id="home-video-lower" className={`component ${props.params.styles}`}>
        <div className="content-margin" id={id ? id : undefined}>
          <h2>
            <Text field={props.fields.Title} />
          </h2>
          <RichText field={props.fields.Text} />
        </div>
      </div>
    );
  }
  return <ContentWithTitleDefaultComponent {...props} />;
};
