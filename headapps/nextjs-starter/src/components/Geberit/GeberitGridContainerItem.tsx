import React from 'react'; //{ useState }
import {
  ComponentRendering,
  ComponentParams,
  RichTextField,
  TextField,
  ImageField,
  Text,
  Image,
  RichText,
  Link as JssLink,
  LinkField,
} from '@sitecore-jss/sitecore-jss-nextjs';
import 'animate.css';

interface Fields {
  Title: TextField;
  Text: RichTextField;
  Image: ImageField;
  Link: LinkField;
}

type GridContainerProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const GridContainerDefaultComponent = (props: GridContainerProps): JSX.Element => (
  <div className={`component GridContainer ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">GridContainer</span>
    </div>
  </div>
);

export const Default = (props: GridContainerProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  if (props.fields) {
    return (
      <div
        className={`component col-md-4 mb-4 ${props.params.styles}`}
        key={id ? id : undefined}
        id={id ? id : undefined}
      >
        <Image field={props.fields.Image} className="img-img-fluid constrained-img" />
        <h5 className="fw-bold mt-3">
          <Text field={props.fields.Title} />
        </h5>
        <RichText field={props.fields.Text} />
        <span className="link">
          <JssLink field={props.fields.Link} />
        </span>
      </div>
    );
  }
  return <GridContainerDefaultComponent {...props} />;
};
