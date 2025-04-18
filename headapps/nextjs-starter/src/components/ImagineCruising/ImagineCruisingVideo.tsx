import React from 'react';
import { ImageField, TextField, Text, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';
import 'animate.css';

interface Fields {
  Poster: ImageField;
  VideoLink: LinkField;
  Video: TextField;
  Title: TextField;
}

type VideoProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const VideoDefaultComponent = (props: VideoProps): JSX.Element => (
  <div className={`component Video ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Video</span>
    </div>
  </div>
);

export const Default = (props: VideoProps): JSX.Element => {
  //const id = props.params.RenderingIdentifier;
  if (props.fields) {
    return (
      <div id="home-video" className={`component video-background ${props.params.styles}`}>
        <video
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          preload="auto"
          id="background-video"
        >
          <source src={props.fields.Video.value as string} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay">
          <div className="video-content">
            <h1>
              <Text field={props.fields.Title} />
            </h1>
          </div>
          <div className="video-scroll">
            <Link
              href="#home-video-lower"
              data-ga-element="home-video-scroll"
              className="scroll-down"
            >
              <span>SCROLL</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <VideoDefaultComponent {...props} />;
};
