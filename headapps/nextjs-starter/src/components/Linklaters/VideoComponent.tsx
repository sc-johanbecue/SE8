import React from 'react';

/*
import {
  Image as JssImage,
  ImageField,
  /*Link as JssLink,
  LinkField,
  TextField,
  Text,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: TextField;
  BackgroundImage: ImageField;
}

import React from 'react';
 import {
  ComponentParams,
  ComponentRendering,
  Placeholder,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface ComponentProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
}
 */

type VideoComponentProps = {
  params: { [key: string]: string };
};

const VideoComponentDefaultComponent = (props: VideoComponentProps): JSX.Element => (
  <div className={`col-md-6 ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: VideoComponentProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <div id={id ? id : undefined}>
      <div className="language-wrap" id="language-selector"></div>
      <div id="videoPlayerViewContainer">
        <div id="videoPlayerView">
          <iframe
            id="videoFrame"
            src="https://linklaters.mediaplatform.com//video/10770/us-offshore-wind/embed?autoplay=false&amp;hideTrans=true&amp;seek=0"
            width="100%"
            height="369"
            frameBorder="0"
            data-smd-id="s5"
          ></iframe>
        </div>
      </div>
    </div>
  );

  return <VideoComponentDefaultComponent {...props} />;
};
