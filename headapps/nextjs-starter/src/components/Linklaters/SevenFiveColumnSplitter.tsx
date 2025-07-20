import React from 'react';
import {
  Placeholder,
  ComponentRendering,
  ComponentParams,
} from '@sitecore-jss/sitecore-jss-nextjs';

type LinkLatersArticleProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
};

const LinkLatersArticleDefaultComponent = (props: LinkLatersArticleProps): JSX.Element => (
  <div className={`component ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: LinkLatersArticleProps): JSX.Element => {
  const phMainLeft = `mainLeft-${props.params.DynamicPlaceholderId}`;
  const phSideBar = `sideBar-${props.params.DynamicPlaceholderId}`;

  return (
    <div className="containerOuter">
      <div className="container padding-top-30 padding-bottom-30 padding-bottom-md-80">
        <div className="row">
          <div className="col-md-7" role="main">
            <Placeholder name={phMainLeft} rendering={props.rendering} />
          </div>
          <div className="col-md-1" role="complementary" aria-label="Social Sharing">
            <div className="addthis hidden">
              <p className="addthis__title">Share &amp; Connect</p>
              <div className="addthis_inline_share_toolbox"></div>
            </div>
          </div>
          <div className="col-md-4" role="complementary" aria-label="Side Bar">
            <Placeholder name={phSideBar} rendering={props.rendering} />
          </div>
        </div>
      </div>
    </div>
  );

  return <LinkLatersArticleDefaultComponent {...props} />;
};
