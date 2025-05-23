import React from 'react'; //{ useState }
import {
  ComponentRendering,
  ComponentParams,
  TextField,
  Text,
  LinkField,
  Link as JssLink,
  ImageField,
  Image,
  RichTextField,
  RichText,
} from '@sitecore-jss/sitecore-jss-nextjs';
import 'animate.css';

interface Fields {
  Title: TextField;
  TitleTag: TextField;
  SubTitle: TextField;
  Image: ImageField;
  Link: LinkField;
  Text: RichTextField;
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
        className={`component bg-light-grey-teaser ${props.params.styles}`}
        key={id ? id : undefined}
        id={id ? id : undefined}
      >
        <div className="container py-5">
          <h1 className="fw-bold">
            <Text field={props.fields.Title} />
          </h1>
          <h2 className="mb-4">
            <Text field={props.fields.TitleTag} />
          </h2>

          <h3 className="fw-bold mb-4">
            <Text field={props.fields.SubTitle} />
          </h3>

          <div className="row align-items-center">
            {/* Image Column on right for desktop, on top for mobile */}
            <div className="col-md-6 order-md-2 mb-4 mb-md-0">
              <Image field={props.fields.Image} className="img-img-fluid constrained-img" />
            </div>

            {/* Text Column */}
            <div className="col-md-6 order-md-1">
              <RichText field={props.fields.Text} />
              <JssLink field={props.fields.Link} className={`btn btn-primary cta`} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <GridContainerDefaultComponent {...props} />;
};
