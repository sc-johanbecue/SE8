import React from 'react';

const JumeirahHeroBanner = (): JSX.Element => {
  return (
    <div className="full-bleed-rd HeroBannerWithVideo" id="HeroBannerWithVideo">
      <div
        className="video-background"
        style={{
          background:
            'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 45.17%, rgba(0, 0, 0, 0.32) 100%), url("https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/home/banner/burj-al-arab-jumeirah--aerial-at-sunset.jpg?h=1080&amp;w=1920&amp;modified=20240306114614")',
          backgroundBlendMode: 'darken',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="video-foreground  ">
          <iframe
            id="vimeo-player"
            className="false  not-a-reskin"
            src="https://player.vimeo.com/video/941512408?autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;muted=true&amp;dnt=true&amp;background=1"
            frameBorder={0}
            allowFullScreen
            title=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="scroll-line">
        <img
          src="https://cdn.jumeirah.com/-/media/DH/Hospitality/Jumeirah/Common/Generic/scrollAnimation"
          alt=""
        />
      </div>
    </div>
  );
};

export default JumeirahHeroBanner;
