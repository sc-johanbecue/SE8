import React from 'react';
import {
  TextField,
  Text,
  // Link as JssLink,
  LinkField,
  // Image as JssImage,
  ImageField,
  // useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  SocialMediaTitle: TextField;
  SocialMediaLink1: LinkField;
  SocialMediaLink2: LinkField;
  SocialMediaImage1: ImageField;
  SocialMediaImage2: ImageField;
}

type FooterProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const FooterDefaultComponent = (props: FooterProps): JSX.Element => (
  <div className={`component Footer ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Footer</span>
    </div>
  </div>
);

export const Default = (props: FooterProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  // const { sitecoreContext } = useSitecoreContext();

  return (
    <>
      <div
        key={id ? id : undefined}
        id={id ? id : undefined}
        className={`component row row--trans expanded ${props.params.styles}`}
      >
        <div className="row footer--top" data-equalizer data-equalize-on="medium">
          <div className="columns small-12 medium-6 large-3" data-equalizer-watch>
            <p>
              <strong>
                <span style={{ fontSize: '13px' }}>Contact</span>
              </strong>
              <br />
              <span style={{ fontSize: '13px' }}>
                <a href="mailto:info@gdanimalhealth.com">info@gdanimalhealth.com</a>
              </span>
              <br />
              <span>
                <span style={{ fontSize: '13px' }}>
                  +31 (0)88 20 25 575
                  <img
                    alt=""
                    className="stwebdialer"
                    title="Call via Mitel "
                    data-stnumber="+310882025575"
                    src="chrome-extension://dnnmgcbgmfoeifpcmlligbagoiijmepj/images/icons/icon12.png"
                    style={{ width: '12px', height: '12px' }}
                  />
                </span>
                <a href="Tel:+31882025575">
                  <img
                    alt=""
                    className="stwebdialer"
                    title="Call via Mitel "
                    data-stnumber="+310882025575"
                    src="chrome-extension://dnnmgcbgmfoeifpcmlligbagoiijmepj/images/icons/icon12.png"
                    style={{ width: '12px', height: '12px' }}
                  />
                </a>
              </span>
            </p>
          </div>
          <div className="columns small-12 medium-6 large-3" data-equalizer-watch>
            <p>
              <strong>
                <span style={{ fontSize: '14px' }}>Visiting address</span>
              </strong>
              <br />
              <span style={{ fontSize: '14px' }}>Arnsbergstraat 7, 7418 EZ, Deventer</span>
            </p>
          </div>
          <div className="columns small-12 medium-6 large-3" data-equalizer-watch>
            <p>
              <strong>
                <span style={{ fontSize: '14px' }}>Support</span>
              </strong>
              <br />
              <span style={{ fontSize: '14px' }}>
                <a href="https://www.gdanimalhealth.com/-/media/Files/GDQuickSupport_exe.exe">
                  Teamviewer
                </a>
              </span>
            </p>
          </div>
          <div className="columns small-12 medium-6 large-3" data-equalizer-watch>
            <p>
              <span style={{ fontSize: '14px' }}>
                <strong>
                  <Text field={props.fields.SocialMediaTitle} />
                </strong>
                <br />
              </span>
              &nbsp;
              {/* {!sitecoreContext.pageEditing ? (
                <>
                  <JssLink field={props.fields.SocialMediaLink1}>
                    <JssImage field={props.fields.SocialMediaImage1} />
                  </JssLink>
                  <JssLink field={props.fields.SocialMediaLink2}>
                    <JssImage field={props.fields.SocialMediaImage2} />
                  </JssLink>
                </>
              ) : (
                <>
                  <JssImage field={props.fields.SocialMediaImage1} />{' '}
                  <JssImage field={props.fields.SocialMediaImage2} />
                </>
              )} */}
            </p>
          </div>
        </div>
      </div>
      <div className="row row--primary expanded">
        <div className="row footer--bottom">
          <div className="columns small-12">
            <p>
              <span style={{ fontSize: '13px' }}>
                <a href="https://www.gdanimalhealth.com/copyright">&copy; 2023 GD</a>
              </span>{' '}
              |{' '}
              <span style={{ fontSize: '13px' }}>
                <a href="https://www.gdanimalhealth.com/privacy-statement">Privacy statement</a> |{' '}
                <a href="https://www.gdanimalhealth.com/cookie-policy">Cookie policy</a>
                &nbsp;|&nbsp;
                <span style={{ fontSize: '13px' }}>
                  <a href="https://www.gdanimalhealth.com/disclaimer">Disclaimer</a> |{' '}
                  <span style={{ fontSize: '13px' }}>
                    <a href="https://www.gdanimalhealth.com/terms-and-conditions">
                      Terms and conditions
                    </a>{' '}
                  </span>
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );

  return <FooterDefaultComponent {...props} />;
};
