import React from 'react';
import {
  RichTextField,
  ImageField,
  Image as JssImage,
  RichText as JssRichText,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: RichTextField;
  Ambition1Text: RichTextField;
  Ambition1Image: ImageField;
  Ambition2Text: RichTextField;
  Ambition2Image: ImageField;
  Ambition3Text: RichTextField;
  Ambition3Image: ImageField;
  Ambition4Text: RichTextField;
  Ambition4Image: ImageField;
}

type TheRigESG = {
  params: { [key: string]: string };
  fields: Fields;
};

const TheRigAmbitionsDefaultComponent = (props: TheRigESG): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: TheRigESG): JSX.Element => {
  if (props.fields) {
    return (
      <div data-testid="egs-block-wrapper" className="css-i9vblt">
        <div className="css-8hvgb2">
          <div typeof="video/mp4" className="css-ly8dp0">
            <div style={{ width: '100%', height: '100%;' }}>
              <video
                src="https://therig.sa/bg/egs.mp4"
                preload="auto"
                autoPlay={true}
                loop={true}
                playsInline={true}
                webkit-playsinline={true}
                x5-playsinline={true}
                style={{ width: '100%', height: '100%;' }}
              ></video>
            </div>
          </div>
        </div>
        <div className="MuiContainer-root MuiContainer-maxWidthLg css-18czceh">
          <div className="MuiGrid-root MuiGrid-direction-xs-row MuiGrid-grid-md-12 MuiGrid-grid-sm-12 MuiGrid-grid-xs-12 MuiGrid-grid-lg-12 egs-grid css-48vdzh">
            <div className="css-108vj9e">
              <JssRichText field={props.fields.Title} className="css-108vj9e" />
            </div>
            <div className="MuiGrid-root MuiGrid-container MuiGrid-direction-xs-row MuiGrid-spacing-xs-3 en-grid-item css-v57kt1">
              <div className="MuiGrid-root MuiGrid-direction-xs-row MuiGrid-grid-sm-12 MuiGrid-grid-xs-12 MuiGrid-grid-md-3 MuiGrid-grid-lg-3 egsGrid css-b3tb0r">
                <div className="css-1yjs7k1">
                  <div className="css-1hikysy">
                    <JssImage
                      field={props.fields.Ambition1Image}
                      loading="lazy"
                      width="80"
                      height="80"
                      decoding="async"
                      data-nimg="1"
                      className="css-12mq798"
                      style={{ color: 'transparent' }}
                    />
                    <div className="css-mxs5mc">
                      <JssRichText field={props.fields.Ambition1Text} />
                    </div>
                  </div>
                  <hr
                    style={{
                      height: '0.2px',
                      borderWidth: '0',
                      color: '#003B5C',
                      backgroundColor: '#003B5C',
                    }}
                    className="breakLine "
                  />
                </div>
              </div>
              <div className="MuiGrid-root MuiGrid-direction-xs-row MuiGrid-grid-sm-12 MuiGrid-grid-xs-12 MuiGrid-grid-md-3 MuiGrid-grid-lg-3 egsGrid css-b3tb0r">
                <div className="css-1yjs7k1">
                  <div className="css-1hikysy">
                    <JssImage
                      field={props.fields.Ambition2Image}
                      loading="lazy"
                      width="80"
                      height="80"
                      decoding="async"
                      data-nimg="1"
                      className="css-12mq798"
                      style={{ color: 'transparent' }}
                    />
                    <div className="css-mxs5mc">
                      <JssRichText field={props.fields.Ambition2Text} />
                    </div>
                  </div>
                  <hr
                    style={{
                      height: '0.2px',
                      borderWidth: '0',
                      color: '#003B5C',
                      backgroundColor: '#003B5C',
                    }}
                    className="breakLine "
                  />
                </div>
              </div>
              <div className="MuiGrid-root MuiGrid-direction-xs-row MuiGrid-grid-sm-12 MuiGrid-grid-xs-12 MuiGrid-grid-md-3 MuiGrid-grid-lg-3 egsGrid css-b3tb0r">
                <div className="css-1yjs7k1">
                  <div className="css-1hikysy">
                    <JssImage
                      field={props.fields.Ambition3Image}
                      loading="lazy"
                      width="80"
                      height="80"
                      decoding="async"
                      data-nimg="1"
                      className="css-12mq798"
                      style={{ color: 'transparent' }}
                    />
                    <div className="css-mxs5mc">
                      <JssRichText field={props.fields.Ambition3Text} />
                    </div>
                  </div>
                  <hr
                    style={{
                      height: '0.2px',
                      borderWidth: '0',
                      color: '#003B5C',
                      backgroundColor: '#003B5C',
                    }}
                    className="breakLine "
                  />
                </div>
              </div>
              <div className="MuiGrid-root MuiGrid-direction-xs-row MuiGrid-grid-sm-12 MuiGrid-grid-xs-12 MuiGrid-grid-md-3 MuiGrid-grid-lg-3 egsGrid css-b3tb0r">
                <div className="css-1yjs7k1">
                  <div className="css-1hikysy">
                    <JssImage
                      field={props.fields.Ambition4Image}
                      loading="lazy"
                      width="80"
                      height="80"
                      decoding="async"
                      data-nimg="1"
                      className="css-12mq798"
                      style={{ color: 'transparent' }}
                    />
                    <div className="css-mxs5mc">
                      <JssRichText field={props.fields.Ambition4Text} />
                    </div>
                  </div>
                  <hr
                    style={{
                      height: '0.2px',
                      borderWidth: '0',
                      color: '#003B5C',
                      backgroundColor: '#003B5C',
                    }}
                    className="breakLine last"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="css-13wifey"></div>
        <div></div>
        <div></div>
      </div>
    );
  }

  return <TheRigAmbitionsDefaultComponent {...props} />;
};
