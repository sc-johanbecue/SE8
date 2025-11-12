import {
  ComponentParams,
  ComponentRendering,
  TextField,
  Text,
  Placeholder,
} from '@sitecore-content-sdk/nextjs';
import React, { JSX } from 'react';

type ItemFields = {
  Title: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: ItemFields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const phCardContainer = `EngieCardContainer-${props.params.DynamicPlaceholderId}`;

  return (
    <section
      className="c-content-slot content-slot--background content-slot--background-color content-slot--background-half content-slot--background-gradient"
      js-hook-inview
      style={{ marginTop: '0px' }}
    >
      <div className="o-container">
        <div className="o-grid">
          <div className="o-col-12 content-slot__header">
            <h2 className="content-slot__title">
              <Text field={props.fields.Title} />
            </h2>
          </div>
        </div>

        <div className="o-grid">
          <div className="o-col-12">
            {/* <!-- begin tiles --> */}
            <div className="c-slider-card" js-hook-slider-card>
              <div className="slider-card__wrapper o-grid" js-hook-slider-slides>
                <Placeholder name={phCardContainer} rendering={props.rendering} />
              </div>
              <div className="slider-card__footer ">
                <div className="c-scroll-indicator u-hidden slider-card__scroll-indicator">
                  <div className="scroll-indicator__wrapper" js-hook-scroll-indicator>
                    <span className="scroll-indicator__knob" js-hook-scroll-indicator-knob></span>
                  </div>
                </div>

                <div className="slider-card__controls u-hidden" js-hook-slider-controls>
                  <button className="slider-card__control" js-hook-slider-prev>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="svg--icons-arrow-left"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#212121"
                        d="M16 7H3.83l5.59-5.59L8 0 0 8l8 8 1.41-1.41L3.83 9H16z"
                      />
                    </svg>
                  </button>

                  <button className="slider-card__control" js-hook-slider-next>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="svg--icons-arrow-right"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#212121"
                        d="M8 0 6.59 1.41 12.17 7H0v2h12.17l-5.58 5.59L8 16l8-8z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- end tiles --> */}
          </div>
        </div>
      </div>
    </section>
  );
};
