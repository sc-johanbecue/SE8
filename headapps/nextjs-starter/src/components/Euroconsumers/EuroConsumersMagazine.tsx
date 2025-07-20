/* eslint-disable jsx-a11y/role-has-required-aria-props */
import React from 'react';
import {
  TextField,
  ImageField,
  Text,
  Image as JssImage,
  LinkField,
} from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

interface Fields {
  Image: ImageField;
  Title: TextField;
  DateAndNumber: TextField;
  Link: LinkField;
}

type EuroConsumersMagazine = {
  params: { [key: string]: string };
  fields: Fields;
};

const EuroConsumersMagazineDefaultComponent = (props: EuroConsumersMagazine): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">EuroConsumers Header</span>
    </div>
  </div>
);

export const Default = (props: EuroConsumersMagazine): JSX.Element => {
  if (props.fields) {
    return (
      <div
        className="flex__col-xs-10 flex__col-lg-4 box js-equal-heights-parent"
        data-selector="magazines-panel-cards-div"
      >
        <style jsx>{`
          .magazines-panel-card-item__image {
            max-width: 120px;
            width: 120px;
          }
        `}</style>
        <div
          className="magazines-panel-card-item js-equal-heights-parent"
          data-selector="magazines-panel-card-item"
        >
          <Link
            href={`${props.fields.Link.value.href}`}
            className="magazines-panel-card-item__clickable-zone"
          >
            <div style={{ maxWidth: '120px', width: '120px' }}>
              <JssImage
                field={props.fields.Image}
                className="magazines-panel-card-item__image"
                width="120px"
              />
            </div>
            <div className="magazines-panel-card-item__infos">
              <h3 className="magazines-panel-card-item__infos__title stronger">
                <Text field={props.fields.Title} />
              </h3>
              <span className="magazines-panel-card-item__infos__date-number">
                <Text field={props.fields.DateAndNumber} />
              </span>
              <span
                className="magazines-panel-card-item__infos__description"
                data-selector="magazines-panel-card-item-description"
              />
            </div>
          </Link>
        </div>
      </div>
    );
  }

  return <EuroConsumersMagazineDefaultComponent {...props} />;
};
