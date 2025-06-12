import React from 'react';
import {
  TextField,
  ImageField,
  RichTextField,
  Text,
  RichText,
  Image as JssImage,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Image: ImageField;
  Title: TextField;
  ShortText: TextField;
  Text: RichTextField;
}

type HeaderProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: HeaderProps): JSX.Element => {
  return (
    <div>
      <h1>
        <Text field={props.fields.Title} />
      </h1>
      <JssImage field={props.fields.Image} />
      <br />
      <div>
        <Text field={props.fields.ShortText} />
      </div>
      <br />
      <br />
      <br />
      <div>
        <RichText field={props.fields.Text} />
      </div>
    </div>
  );
};
