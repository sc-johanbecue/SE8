import React from 'react';
import {
  LinkField,
  Link as JssLink,
  ImageField,
  Image as JssImage,
} from '@sitecore-jss/sitecore-jss-nextjs';

import { useState } from 'react';

interface Fields {
  CollapsedImage: ImageField;
  ExpandedImage: ImageField;
  MobileImage: ImageField;
  Link: LinkField;
}

type EuroConsumersSkinProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const EuroConsumersSkinDefaultComponent = (props: EuroConsumersSkinProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">EuroConsumers Skin</span>
    </div>
  </div>
);

export const Default = (props: EuroConsumersSkinProps): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prevState) => !prevState);
  };

  if (props.fields) {
    return (
      <>
        <style
          dangerouslySetInnerHTML={{
            __html: '\n    .skin .skin__wrapper div.mobile-only {\n        height: 7rem;\n    }\n',
          }}
        />
        <input type="checkbox" className="hidden skinCheckboxDesktop" id="checkbox-skin-desktop" />
        <input type="checkbox" className="hidden skinCheckboxMobile" id="checkbox-skin-mobile" />
        <div
          className="skin"
          data-selector="skin"
          data-type="ALineHeaderSkinController"
          data-rendering="ALineHeaderSkin"
          data-datasource="{96A75B54-3CF1-403D-A914-FF55B0C01AAF}"
          style={{ background: '#BE006E' }}
        >
          <div className="skin__wrapper constrained">
            {/* desktop */}
            <div className="hide-on-mobile relative">
              <label htmlFor="checkbox-skin-desktop" className="toggler">
                <JssImage
                  field={props.fields.CollapsedImage}
                  className="collapsed"
                  style={isExpanded ? { display: 'none' } : { display: 'block' }}
                  height={70}
                  width={1050}
                />
                <JssImage
                  field={props.fields.ExpandedImage}
                  className="expanded"
                  style={isExpanded ? { display: 'block' } : { display: 'none' }}
                />
              </label>
              <div>
                <JssLink field={props.fields.Link} className="btn btn--pill" />
                <label
                  htmlFor="checkbox-skin-desktop"
                  className="icon-chevron-down"
                  style={{ color: 'White' }}
                  onClick={handleToggle}
                />
              </div>
            </div>
            {/* mobile */}
            <div className="flex__row no-margin mobile-only">
              <div className="flex__col flex__col-xs-1" />
              <div className="flex__col no-padding">
                <JssLink field={props.fields.Link} className="" data-selector="skin-mobile-link">
                  <JssImage
                    field={props.fields.MobileImage}
                    height={70}
                    data-selector="skin-mobile-image"
                    alt="Skin"
                    width={320}
                    fetchPriority="high"
                  />
                </JssLink>
              </div>
              <label
                htmlFor="checkbox-skin-mobile"
                className="flex__col flex__col-xs-1 icon-x-2 no-padding"
                style={{ color: 'White' }}
              />
            </div>
          </div>
        </div>
      </>
    );
  }

  return <EuroConsumersSkinDefaultComponent {...props} />;
};
