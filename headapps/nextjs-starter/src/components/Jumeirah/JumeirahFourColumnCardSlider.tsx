import React from 'react';

import {
  TextField,
  Text,
  ComponentParams,
  ComponentRendering,
  Placeholder,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  HeaderTitle: TextField;
  Button: TextField;
}

type Props = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const JumeirahFourColumnCardSlider = (props: Props): JSX.Element => {
  const cardSliderPlaceholderKey = `cardSlider-${props.params.DynamicPlaceholderId}`;
  return (
    <div className="full-bleed-rd FourColumnCardSlider  container-fluid">
      <div className="header-title">
        <p className="header-title">
          <Text field={props.fields.HeaderTitle} />
        </p>
        <div className="header-title-line"></div>
      </div>
      <div className="d-flex flex-row justify-content-center 3">
        <div className=" card-deck">
          <Placeholder name={cardSliderPlaceholderKey} rendering={props.rendering} />
        </div>
      </div>
      <div className="more text-center">
        <button type="button" className="stories-button btn btn-secondary">
          <Text field={props.fields.Button} />
        </button>
      </div>
    </div>
  );
};

export default JumeirahFourColumnCardSlider;
