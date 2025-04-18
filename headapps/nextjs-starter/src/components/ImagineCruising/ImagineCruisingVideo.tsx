import React from 'react';
import {
  ImageField,
  TextField,
  Text,
  LinkField,
  useComponentProps,
  ComponentRendering,
  ComponentParams,
  GetStaticComponentProps,
} from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';
import 'animate.css';
import AnimatedLetters from 'components/SolutionEngineering/Utility/AnimatedLetters';
import {
  fetchRenderingConfiguration,
  RenderingConfigurationFields,
} from 'components/SolutionEngineering/Utility/RenderingConfigurationUtils';

interface Fields {
  Poster: ImageField;
  VideoLink: LinkField;
  Video: TextField;
  Title: TextField;
}

type VideoProps = {
  fields: Fields;
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
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
            <h1 style={{ textAlign: 'center' }}>
              <Text field={props.fields.Title} style={{ textAlign: 'center' }} />
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

export const Animated = (props: VideoProps): JSX.Element => {
  //const id = props.params.RenderingIdentifier;
  const staticProps = useComponentProps<RenderingConfigurationFields>(props.rendering.uid);

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
              <AnimatedLetters
                text={props.fields.Title?.value as string}
                characterAnimationConfiguration={
                  staticProps?.RenderingConfigurationFields.CharacterAnimationConfiguration
                }
              />
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

export const getStaticProps: GetStaticComponentProps = async (context) => {
  console.log('Imagine Cruising Video - Starting getStaticProps');

  // Extract the renderingConfiguration GUID from the context params.
  // Note: if the field is nested differently, adjust accordingly.
  const renderingConfigurationGuid = context?.params?.RenderingConfiguration as string;

  const staticProps = await fetchRenderingConfiguration(renderingConfigurationGuid, [
    'LineHeight',
    'TextColor',
    'CharacterSpacing',
    'CharacterAnimationConfiguration',
    'FontWeight',
    'FontSize',
    'PaddingStart',
    'PaddingEnd',
    'PaddingTop',
    'PaddingBottom',
    'MarginStart',
    'MarginEnd',
    'MarginTop',
    'MarginBottom',
    'WrapText',
  ]);

  console.log('Imagine Cruising Video - Ended getStaticProps');
  return staticProps;
};
