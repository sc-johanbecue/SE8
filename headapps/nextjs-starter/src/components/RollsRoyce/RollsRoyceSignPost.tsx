import React from 'react';
import {
  ImageField,
  TextField,
  LinkField,
  Link as JssLink,
  Image as JssImage,
  Text,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: TextField;
  Text: TextField;
  Cta: LinkField;
  Image: ImageField;
}
type RollsRoyceSignPostProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const RollsRoyceSignPostDefaultComponent = (props: RollsRoyceSignPostProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: RollsRoyceSignPostProps): JSX.Element => {
  if (props.fields) {
    return (
      <>
        <div className="ts-image">
          <JssImage width="570" height="375" field={props.fields.Image} />
        </div>
        <div className="ts-content">
          <div className="tsVcenter">
            <div className="tsHover">
              <div className="three-sp-title">
                <h4 className="mixbold font21">
                  <Text field={props.fields.Title} />
                </h4>
              </div>
              <div className="font18 mixlight">
                <p>
                  <Text field={props.fields.Text} />
                </p>
              </div>
              <div className="in-signpost">
                <span className="rad-link">
                  <JssLink field={props.fields.Cta} className="attachment-link" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return <RollsRoyceSignPostDefaultComponent {...props} />;
};
