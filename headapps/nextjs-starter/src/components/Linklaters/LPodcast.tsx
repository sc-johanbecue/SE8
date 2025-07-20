import React from 'react';
// import { TextField, Text } from '@sitecore-jss/sitecore-jss-nextjs';

/* interface Fields {
  PodcastTitle: TextField;
} */
type LPodcastProps = {
  // rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
};

const LPodcastDefaultComponent = (props: LPodcastProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);
export const Default = (props: LPodcastProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <div className={`${props.params.styles}`} id={id ? id : undefined}>
      <img
        src="https://fruitful-23.sitecoresandbox.cloud/api/public/content/afd65d0c102941458c1b6da6dee49da2?v=21035897"
        alt="Episode logo"
      ></img>
    </div>
  );

  return <LPodcastDefaultComponent {...props} />;
};
