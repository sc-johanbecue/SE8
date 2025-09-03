/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from 'react'; //{ useState }
import {
  ComponentRendering,
  ComponentParams,
  ImageField,
  LinkField,
  TextField,
  Image as JssImage,
  Link as JssLink,
  Text,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  BottomImage: ImageField;
  Image: ImageField;
  Title: TextField;
  SmallTitle: TextField;
  Link: LinkField;
  Video: LinkField;
}

type VideoHeroProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const VideoHeroDefaultComponent = (props: VideoHeroProps): JSX.Element => (
  <div className={`component VideoHero ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">VideoHero</span>
    </div>
  </div>
);

export const Default = (props: VideoHeroProps): JSX.Element => {
  if (props.fields) {
    return (
      <div className="component container layout--fluid container--no-padding">
        <div className="component-content">
          <div className="component promo component-content combined-mask-layer animate-section layout--fluid already-visible">
            <div className="component-content">
              <div className="pattern-img">
                <JssImage fetchPriority="high" field={props.fields.BottomImage} />
              </div>
              <div className="component-content mask-element" style={{ maskImage: 'url()' }}>
                <div className="component-content mask-element">
                  <div className="component hero hero--outset">
                    <div className="component-content">
                      <div id="video-full-width">
                        <section className="hero-section">
                          <div className="custom-video">
                            <div className="custom-video">
                              <video
                                id="cor-home-video"
                                className="lazy-bg-video"
                                autoPlay
                                muted
                                loop
                                controlsList="nodownload"
                                playsInline
                                height="100%"
                                width="100%"
                              >
                                <source
                                  type="video/mp4"
                                  src={props.fields.Video?.value?.href || ''}
                                />
                              </video>
                            </div>
                          </div>
                          <div className="hero-content">
                            <div>
                              {props.params['Hide Small Title'] != '1' ? (
                                <span className="heading-text-small field-text1">
                                  <Text field={props.fields.SmallTitle} />
                                </span>
                              ) : null}
                            </div>
                            <h1 className="field-title field-title">
                              <Text field={props.fields.Title} />
                            </h1>
                            <div className="cta-section">
                              <div className="btn btn-primary field-link1">
                                {props.params['Hide Link'] != '1' ? (
                                  <JssLink field={props.fields.Link} className="bt bt-primary" />
                                ) : null}
                                {/* <a
                                  className="bt bt-primary"
                                  data-variantfieldname="Link1"
                                  title="Savor now"
                                  href="https://www.violife.com/en-us/products"
                                  data-variantitemid="{7EFB37C5-72DD-48EF-9A07-4D851824BC10}"
                                >
                                  Savor now
                                </a> */}
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <VideoHeroDefaultComponent {...props} />;
};

export const Image = (props: VideoHeroProps): JSX.Element => {
  if (props.fields) {
    return (
      <div className="component container layout--fluid container--no-padding">
        <div className="component-content">
          <div className="component promo component-content combined-mask-layer animate-section layout--fluid already-visible">
            <div className="component-content">
              <div className="pattern-img">
                <JssImage fetchPriority="high" field={props.fields.BottomImage} />
              </div>
              <div className="component-content mask-element" style={{ maskImage: 'url()' }}>
                <div className="component-content mask-element">
                  <div className="component hero hero--outset">
                    <div className="component-content">
                      <div id="video-full-width">
                        <section className="hero-section">
                          <div className="custom-video">
                            <div className="custom-video">
                              <JssImage fetchPriority="high" field={props.fields.Image} />
                            </div>
                          </div>
                          <div className="hero-content">
                            <div>
                              {props.params['Hide Small Title'] != '1' ? (
                                <span className="heading-text-small field-text1">
                                  <Text field={props.fields.SmallTitle} />
                                </span>
                              ) : null}
                            </div>
                            <h1 className="field-title field-title">
                              <Text field={props.fields.Title} />
                            </h1>
                            <div className="cta-section">
                              <div className="btn btn-primary field-link1">
                                {props.params['Hide Link'] != '1' ? (
                                  <JssLink field={props.fields.Link} className="bt bt-primary" />
                                ) : null}
                                {/* <a
                                  className="bt bt-primary"
                                  data-variantfieldname="Link1"
                                  title="Savor now"
                                  href="https://www.violife.com/en-us/products"
                                  data-variantitemid="{7EFB37C5-72DD-48EF-9A07-4D851824BC10}"
                                >
                                  Savor now
                                </a> */}
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <VideoHeroDefaultComponent {...props} />;
};
