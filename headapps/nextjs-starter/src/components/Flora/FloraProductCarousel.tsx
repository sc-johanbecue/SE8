/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from 'react'; //{ useState }
import {
  ComponentRendering,
  ComponentParams,
  TextField,
  Text,
  RichTextField,
  LinkField,
  Link as JssLink,
  Placeholder,
  RichText,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  ListName: TextField;
  Description: RichTextField;
  Link: LinkField;
}

type ThreeCardsProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const ThreeCardsDefaultComponent = (props: ThreeCardsProps): JSX.Element => (
  <div className={`component ThreeCards ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">ThreeCards</span>
    </div>
  </div>
);

export const Default = (props: ThreeCardsProps): JSX.Element => {
  const phProductCarousel = `FloraFoodsProductCarousel-${props.params.DynamicPlaceholderId}`;

  if (props.fields) {
    return (
      <section className="component container-fullwidth-padding">
        <div className="component-content">
          <div className="component content component-content animate-section layout--fluid padding-bottom-xl padding-top-m">
            <div className="component-content">
              <div className="container play-video-on-hover" id="carousel-on-right">
                <div className="left">
                  <h2 className="field-list-name">
                    <Text field={props.fields.ListName} />
                  </h2>
                  <p className="field-list-description"></p>
                  <RichText field={props.fields.Description} />
                  <p></p>
                  <div className="btn btn-primary field-list-url">
                    <JssLink field={props.fields.Link} />
                  </div>
                </div>
                <div className="right">
                  <div
                    className="component page-list global-product-category recipe-v3 has-bullets-and-arrows toggle-arrows hide-bullets-on-mobile has-slider"
                    dir="ltr"
                  >
                    <div className="component-content">
                      <div
                        className="arrow-left d-none"
                        tabIndex={0}
                        role="button"
                        aria-labelledby="previous-arrow-label"
                        style={{ bottom: '195.5px' }}
                      ></div>
                      <div
                        className="arrow-right"
                        tabIndex={0}
                        role="button"
                        aria-labelledby="next-arrow-label"
                        style={{ bottom: '195.5px' }}
                      ></div>
                      <ul className="items" role="list">
                        <Placeholder name={phProductCarousel} rendering={props.rendering} />
                      </ul>
                      <div className="bullets">
                        <div
                          className="dot active"
                          data-item={0}
                          tabIndex={0}
                          role="button"
                          aria-label="Carousel slide 1"
                        ></div>
                        <div
                          className="dot"
                          data-item="1"
                          tabIndex={0}
                          role="button"
                          aria-label="Carousel slide 2"
                        ></div>
                        <div
                          className="dot"
                          data-item="2"
                          tabIndex={0}
                          role="button"
                          aria-label="Carousel slide 3"
                        ></div>
                      </div>
                      <div className="scrollbar">
                        <span
                          className="thumb"
                          style={{
                            width: '524.203px',
                            transform: 'translate3d(0px, 0px, 0px)',
                            cursor: 'default',
                            touchAction: 'pan-y',
                            userSelect: 'none',
                          }}
                        ></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return <ThreeCardsDefaultComponent {...props} />;
};
