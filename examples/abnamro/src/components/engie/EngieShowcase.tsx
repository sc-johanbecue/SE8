'use client';

import {
  ComponentParams,
  ComponentRendering,
  TextField,
  Text,
  LinkField,
  RichTextField,
  ImageField,
  RichText,
  Image as JssImage,
  Item,
} from '@sitecore-content-sdk/nextjs';
import Link from 'next/link';
import React, { JSX, useEffect, useState, useRef } from 'react';

type ItemRef = Item & {
  fields: {
    Text: TextField;
    Image: ImageField;
  };
};

type ItemFields = {
  Heading: TextField;
  Image: ImageField;
  Description: RichTextField;
  Button1Link: LinkField;
  Button1Image: ImageField;
  Button2Link: LinkField;
  Button2Image: ImageField;
  Items: ItemRef[];
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: ItemFields;
};

const SLIDE_DURATION = 4800;

export const Default = (props: ComponentProps): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % props.fields.Items.length);
    }, SLIDE_DURATION);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [props.fields.Items.length]);

  return (
    <>
      <section
        className="c-content-slot c-app-showcase app-showcase--ltr"
        data-speed="5000"
        js-hook-app-showcase
        js-hook-inview
      >
        <div className="o-container">
          <div className="o-grid">
            <div className="app-showcase__container o-col-12 o-col-6--lg ">
              <h2 className="u-h3 u-margin-bottom--md">
                <Text field={props.fields.Heading} />
              </h2>

              <div className="app-show-case__list-container swiper">
                <ul className="app-showcase__list swiper-wrapper" js-hook-app-showcase-list>
                  {props.fields.Items.map((slide, index) => (
                    <li
                      key={index}
                      className={`app-showcase__list-item swiper-slide ${
                        index === activeIndex ? 'app-showcase__list-item--active' : ''
                      }`}
                      js-hook-app-showcase-item
                    >
                      <figure
                        className="c-image app-showcase__list-image"
                        js-hook-objectfit-container
                      >
                        <img
                          className="image__default"
                          src={slide.fields.Image.value?.src}
                          style={{ opacity: 1 }}
                          alt=""
                          js-hook-objectfit-img
                        />
                      </figure>
                      <div className="app-showcase__indicator">
                        <div className="app-showcase__indicator-line">
                          <div
                            className="app-showcase__indicator-progress"
                            style={{
                              transition: `height ${SLIDE_DURATION}ms linear`,
                              height: index === activeIndex ? '100%' : '0%',
                            }}
                          />
                        </div>
                      </div>
                      <button className="app-showcase__list-button" js-hook-app-showcase-button>
                        {slide.fields.Text.value}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="TextAndTitle-4e9fead6-9136-41ee-84f6-bc62d82967fd"
        className="c-content-slot"
        js-hook-inview=""
      >
        <div className="o-container">
          <div className="o-grid">
            <div className="o-col-12 o-col-7--md">
              <div className="c-title-text s-rich-text">
                <RichText field={props.fields.Description} />
                <div className="c-app-store-buttons" js-hook-app-store-buttons>
                  <Link
                    href={props.fields.Button1Link.value.href || ''}
                    className="app-store-buttons__button"
                    js-hook-apple-store
                  >
                    <JssImage field={props.fields.Button1Image} />
                  </Link>
                  <Link
                    href={props.fields.Button2Link.value.href || ''}
                    className="app-store-buttons__button"
                    js-hook-google-play
                  >
                    <JssImage field={props.fields.Button2Image} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="o-col-12 s-rich-text">
              <div className="o-grid"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
