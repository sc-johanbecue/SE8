import {
  ComponentParams,
  ComponentRendering,
  TextField,
  LinkField,
  RichTextField,
  ImageField,
  Text,
  Image as JssImage,
  RichText,
} from '@sitecore-content-sdk/nextjs';
import React, { JSX } from 'react';

type ItemFields = {
  Heading: TextField;
  Image: ImageField;
  Text: RichTextField;
  Link: LinkField;
  Time: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: ItemFields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  console.log('ktm newarticleteaser props:', JSON.stringify(props));
  const iso = (props.fields.Time.value as string) || '';
  const dateOnly = iso.includes('T') ? iso.slice(0, iso.indexOf('T')) : iso;

  return (
    <>
      <div className="date aem-GridColumn aem-GridColumn--default--12">
        <div className="component c-date">
          <time dateTime={dateOnly} className="c-date__datetime">
            {dateOnly}
          </time>
        </div>
      </div>
      <div className="title aem-GridColumn aem-GridColumn--default--12">
        <div>
          <div className="component title-component news">
            <h1 className=" title--primary">
              <Text field={props.fields.Heading} />
            </h1>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: '100%', maxHeight: 'fit-content' }}>
        <JssImage
          field={props.fields.Image}
          style={{ maxWidth: '100%', maxHeight: 'fit-content' }}
        />
      </div>
      <div className="text aem-GridColumn aem-GridColumn--default--12">
        <RichText field={props.fields.Text} style={{ maxWidth: '100%' }}/>
      </div>
    </>
  );
};
