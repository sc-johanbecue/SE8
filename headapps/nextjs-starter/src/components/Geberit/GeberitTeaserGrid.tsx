import React from 'react';
import {
  TextField,
  ComponentRendering,
  ComponentParams,
  Placeholder,
} from '@sitecore-jss/sitecore-jss-nextjs';

import 'animate.css';

interface Fields {
  Title: TextField;
}

interface MainHeroProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
}

const MainHeroDefaultComponent = (props: MainHeroProps): JSX.Element => (
  <div className={`component MainHero ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">MainHero</span>
    </div>
  </div>
);

export const Default = (props: MainHeroProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const phKeyTeaserGrid = `GeberitTeaserGrid-${props.params.DynamicPlaceholderId}`;

  return (
    <div
      className={`component xmc-teaser-grid ${props.params.styles}`}
      key={id ? id : undefined}
      id={id ? id : undefined}
    >
      <Placeholder name={phKeyTeaserGrid} rendering={props.rendering} />
    </div>
  );

  return <MainHeroDefaultComponent {...props} />;
};
