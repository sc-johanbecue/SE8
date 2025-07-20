import React from 'react';
import {
  /* Image as JssImage,
  ImageField,
  Link as JssLink,
  LinkField,*/
  TextField,
  Text,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: TextField;
  //   VideoLink: LinkField;
}

type VideoHeroProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const VideoHeroDefaultComponent = (props: VideoHeroProps): JSX.Element => (
  <div className={`col-md-6 ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);
export const Default = (props: VideoHeroProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  if (props.fields) {
    return (
      //   <div className={`${props.params.styles}`} id={id ? id : undefined}>
      // <div className="video-hero-container" >
      <div className="video-overlay" id={id ? id : undefined}>
        {/* <video muted autoplay loop> */}
        <video className="video-layer" muted autoPlay loop>
          <source
            src="https://lpscdn.linklaters.com/-/media/digital-marketing-image-library/images/05_insights/publications/hero_2560x1440/2023/october/gettyimages-1389763510.ashx rev=052e54a4-e00f-4561-a64b-eff7d95d5bb1"
            type="video/mp4"
          />
        </video>
        <div className="text-overlay">
          <div className="subheader color-brand-white">
            <Text field={props.fields.Title} className="header color-brand-white" />
          </div>
          <div className="overlay-footer">
            <div className="seperator-container">
              <div className="overlay-seperator"></div>
            </div>
            <a href="#" className="explore">
              Explore
            </a>
          </div>
        </div>
        {/* </div> */}
      </div>
    );
  }
  return <VideoHeroDefaultComponent {...props} />;
};
