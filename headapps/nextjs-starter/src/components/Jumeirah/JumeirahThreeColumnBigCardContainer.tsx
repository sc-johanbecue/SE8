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

const JumeirahThreeColumnBigCardContainer = (props: Props): JSX.Element => {
  const cardContainerPlaceholderKey = `cardContainer-${props.params.DynamicPlaceholderId}`;
  return (
    <div className="full-bleed-rd three-column-big-card container-fluid">
      <p className="header-title">
        <Text field={props.fields.HeaderTitle} />
      </p>
      <div className="header-title-line "></div>
      <div className="d-flex flex-row ">
        <div className=" card-deck">
          <Placeholder name={cardContainerPlaceholderKey} rendering={props.rendering} />
        </div>
      </div>
      <div className="three-column-card-cta d-flex  align-items-center justify-content-center w-100"></div>
    </div>
  );
};

export default JumeirahThreeColumnBigCardContainer;
