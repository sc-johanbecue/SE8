import React from 'react';
import { TextField, LinkField, RichTextField } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: TextField;
  Text: RichTextField;
  Link: LinkField;
}

type TheRigFormCTA = {
  params: { [key: string]: string };
  fields: Fields;
};

const TheRigFormCTADefaultComponent = (props: TheRigFormCTA): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: TheRigFormCTA): JSX.Element => {
  if (props.fields) {
    return (
      <section className="css-s9k4ev">
        <div
          className="MuiContainer-root MuiContainer-maxWidthLg css-1afftjp"
          style={{ maxWidth: '1440px', margin: 'auto' }}
        >
          <div className="MuiGrid-root MuiGrid-container MuiGrid-direction-xs-row css-18ua6wv">
            <div className="MuiGrid-root MuiGrid-container MuiGrid-direction-xs-row MuiGrid-grid-md-12 MuiGrid-grid-sm-12 MuiGrid-grid-xs-12 css-1ddtvp">
              <div className="MuiGrid-root MuiGrid-direction-xs-row MuiGrid-grid-md-12 MuiGrid-grid-sm-12 css-1u87g9e">
                <div className="css-gwujtp">BE THE FIRST TO KNOW</div>
                <div className="css-1szq56c">
                  To receive the latest news and updates on THE RIG.
                </div>
                <form className="css-qrtf8u">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Your E-mail"
                    aria-describedby=""
                    className="css-f70s96"
                    value=""
                  />
                  <button type="submit" className="css-ilix0n">
                    SUBSCRIBE
                    <svg
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge en-svg css-6flbmm"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="KeyboardDoubleArrowRightIcon"
                    >
                      <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path>
                      <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path>
                    </svg>
                  </button>
                </form>
                <div className="css-hd3g63"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return <TheRigFormCTADefaultComponent {...props} />;
};
