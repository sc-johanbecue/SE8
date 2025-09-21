import React, { JSX } from 'react';
import {
  ComponentParams,
  ComponentRendering,
  RichTextField,
  RichText,
} from '@sitecore-content-sdk/nextjs';

type ItemFields = {
  Title: RichTextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: ItemFields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  console.log(props);
  return (
    <li className="usps__item">
      <span className="usps__icon">
        <svg
          className="svg--icons-checkmark"
          width="18"
          height="14"
          viewBox="0 0 18 14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#212121"
            d="M5.59 10.58L1.42 6.41 0 7.82l5.59 5.59 12-12L16.18 0z"
            stroke="none"
            stroke-width="1"
            fill-rule="evenodd"
          ></path>
        </svg>
      </span>
      <div className="usps__content">
        <h3 className="usps__title">
          <RichText field={props.fields.Title} />
        </h3>
      </div>
    </li>
  );
};
