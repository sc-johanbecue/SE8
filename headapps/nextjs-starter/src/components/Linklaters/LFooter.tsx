import React from 'react';
import { TextField } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: TextField;
}
type LFooterProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const LFooterDefaultComponent = (props: LFooterProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);
export const Default = (props: LFooterProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  if (props.fields) {
    return (
      <div className={`${props.params.styles}`} id={id ? id : undefined}>
        <div className="footerTop">
          <div className="container">
            <p className="footerTop__text">© Copyright Linklaters LLP</p>

            <div className="footerTop__social">
              <a
                href="https://www.Linkedin.com/company/Linklaters"
                target="_blank"
                rel="noopener"
                className="footerTop__Links"
              >
                <span className="icon-social-Linked">&nbsp;</span>
              </a>
              <a
                href="https://twitter.com/LinklatersLLP"
                target="_blank"
                rel="noopener"
                className="footerTop__Links"
              >
                <span className="icon-social-twitter">&nbsp;</span>
              </a>
              <a
                href="https://www.youtube.com/user/LinklatersLLP"
                target="_blank"
                rel="noopener"
                className="footerTop__Links"
              >
                <span className="icon-social-youtube">&nbsp;</span>
              </a>
              <a
                href="https://www.Linklaters.com/en/locations/mainland-china/wechat"
                target="_blank"
                rel="noopener"
                className="footerTop__Links"
              >
                <span className="icon-social-wechat">&nbsp;</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footerBottom">
          <div className="container">
            <div className="footerBottom__left">
              <a href="https://www.linklaters.com/en/legal-notices">Legal notices</a>
              <a href="https://www.linklaters.com/en/legal-notices/privacy-portal">Privacy</a>
              <a href="https://www.linklaters.com/en/legal-notices/privacy-portal/cookie-notice">
                Cookie Notice
              </a>
              &nbsp;
              <a href="#" className="cookiebot-custom-manage-cookies">
                Manage Cookies
              </a>
              <a href="https://www.linklaters.com/en/legal-notices/fraudulent-emails">
                Fraud and Scams
              </a>
              &nbsp;
              <a href="https://www.linklaters.com/en/legal-notices/attorney-advertising">
                Attorney Advertising
              </a>
            </div>
            <div className="footerBottom__right">
              <a href="https://www.linklaters.com/en/legal-notices/accessibility">Accessibility</a>
              <a
                href="https://lpscdn.Linklaters.com/-/media/digital-marketing-image-library/files/02_about-us/responsibility/2023/modern-slavery-and-human-trafficking-2023.ashx?rev=cee36e51-ecce-41a7-a1d2-b7bdd863ff06&amp;extension=pdf&amp;hash=473F8F3ED3F75525196CCB1EBDB49CEF"
                target="_blank"
              >
                Modern Slavery
              </a>
              &nbsp;<a href="https://www.linklaters.com/en/about-us/contact-us">Contact us</a>
              <a href="https://www.linklaters.com/en/remote-working">Remote Working</a>
              <a href="https://www.linklaters.com/en/sitemap">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <LFooterDefaultComponent {...props} />;
};
