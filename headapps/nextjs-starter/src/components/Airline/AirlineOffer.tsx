import {
  TextField,
  Text,
  LinkField,
  Link as JssLink,
  ImageField,
  Image as JssImage,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Link: LinkField;
  Image: ImageField;
  Title: TextField;
  Text: TextField;
}

type AirlineOfferProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const AirlineOfferDefaultComponent = (props: AirlineOfferProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: AirlineOfferProps): JSX.Element => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
      <div className="offer_area_box img_animation">
        <JssImage field={props.fields.Image} />
        <div className="offer_area_content">
          <h2>
            <Text field={props.fields.Title} />
          </h2>
          <p>
            <Text field={props.fields.Text} />
          </p>
          <JssLink field={props.fields.Link} className="btn btn_theme btn_md" />
        </div>
      </div>
    </div>
  );

  return <AirlineOfferDefaultComponent {...props} />;
};

export const SixColumns = (props: AirlineOfferProps): JSX.Element => {
  return (
    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
      <div className="offer_area_box d-none-phone img_animation">
        <JssImage field={props.fields.Image} />
        <div className="offer_area_content">
          <h2>
            <Text field={props.fields.Title} />
          </h2>
          <p>
            <Text field={props.fields.Text} />
          </p>
          <JssLink field={props.fields.Link} className="btn btn_theme btn_md" />
        </div>
      </div>
    </div>
  );

  return <AirlineOfferDefaultComponent {...props} />;
};
