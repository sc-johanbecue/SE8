/* eslint-disable jsx-a11y/role-has-required-aria-props */
import React from 'react';
import {
  TextField,
  Text,
  Placeholder,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

interface Fields {
  Title: TextField;
  Text: TextField;
}

type EuroConsumersMagazines = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const EuroConsumersMagazinesDefaultComponent = (props: EuroConsumersMagazines): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">EuroConsumers Header</span>
    </div>
  </div>
);

export const Default = (props: EuroConsumersMagazines): JSX.Element => {
  const phMagazines = `magazines-${props.params.DynamicPlaceholderId}`;

  if (props.fields) {
    return (
      <>
        <style jsx>
          {`
            :root {
              --magazines-panel-card-background: #ffffff;
            }
            #magazines-panel-a76a2adb833d422dbc2b9632c285f942-id {
              background-color: #ffffff;
            }
          `}
        </style>
        <section
          className="section magazines-panel"
          id="magazines-panel-a76a2adb833d422dbc2b9632c285f942-id"
        >
          <div className="constrained">
            <div className="magazines-panel__header">
              <h2 className="stronger magazines-panel__header__title magazines-panel__header-text-color">
                <Text field={props.fields.Title} />
              </h2>
              <p className="magazines-panel__header__description magazines-panel__header-text-color">
                <Text field={props.fields.Text} />
              </p>
            </div>
            <div
              className="flex__row magazines-panel__cards js-equal-heights"
              data-plugin="flickityCarousel"
              data-plugin-settings="#magazinesPanelFlickityCards"
              data-selector="magazines-panel-cards"
              style={{ height: 160 }}
            >
              <Placeholder name={phMagazines} rendering={props.rendering} />
            </div>
            <div className="magazines-panel__footer">
              <Link href="/alle-inhoud/magazines" className="magazines-panel__footer__link">
                <span>Bekijk alle magazines</span>
                <i className="icon icon-chevron-right" />
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  return <EuroConsumersMagazinesDefaultComponent {...props} />;
};
