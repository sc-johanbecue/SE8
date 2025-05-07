/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Link from 'next/link';
import { TextField } from '@sitecore-jss/sitecore-jss-nextjs';
import 'animate.css';

interface Fields {
  Title: TextField;
  Text: TextField;
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
  if (props.fields) {
    return (
      <div className="footer-data">
        <div className="section-container row">
          <div className="footer-content">
            <div
              id="Footer_TE21B85AC013_Col00"
              className="footer-logo sf_colsIn"
              data-sf-element="logo"
              data-placeholder-label="logo"
            >
              <Link
                href="https://www.majidalfuttaim.com/en/home"
                title="Open image in original size"
              >
                <img
                  loading="lazy"
                  className="mw-100 h-auto"
                  src="https://www.majidalfuttaim.com/images/default-source/logos/footer/footer-logo.png?sfvrsn=a2a15cdc_5"
                  title="footer logo"
                  alt="Footer logo"
                />
              </Link>
            </div>
            <div className="social-icons">
              <div
                id="Footer_TE21B85AC013_Col01"
                className="sf_colsIn"
                data-sf-element="social-icons-title"
                data-placeholder-label="social-icons-titles"
              >
                <h6>Stay in touch with us</h6>
              </div>
              <ul
                id="Footer_TE21B85AC013_Col02"
                className="sf_colsIn"
                data-sf-element="social-icons-icons"
                data-placeholder-label="social-icons-icons"
              >
                <li>
                  <Link
                    className="svg-image"
                    href="https://www.majidalfuttaim.com/en/redirects/social-links/facebook"
                    target="_blank"
                    data-channel="ficon"
                  >
                    <img
                      loading="lazy"
                      src="https://www.majidalfuttaim.com/images/default-source/icons/footer-social/ficon.svg?sfvrsn=eeb57ccc_2"
                      title="ficon"
                      alt="ficon"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    className="svg-image"
                    href="https://www.majidalfuttaim.com/en/redirects/social-links/instagram"
                    target="_blank"
                    data-channel="instaicon"
                  >
                    <img
                      loading="lazy"
                      src="https://www.majidalfuttaim.com/images/default-source/icons/footer-social/instaicon.svg?sfvrsn=e6ff850e_2"
                      title="instaicon"
                      alt="instagram icon"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    className="svg-image"
                    href="https://www.majidalfuttaim.com/en/redirects/social-links/tiktok"
                    target="_blank"
                    data-channel="Tiktok_MAF"
                  >
                    <img
                      loading="lazy"
                      src="https://www.majidalfuttaim.com/images/default-source/icons/footer-social/tiktok_maf.svg?sfvrsn=46cbb51d_2"
                      title="Tiktok_MAF"
                      alt="tictok icon"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    className="svg-image"
                    href="https://www.majidalfuttaim.com/en/redirects/social-links/youtube"
                    target="_blank"
                    data-channel="youtubeicon"
                  >
                    <img
                      loading="lazy"
                      src="https://www.majidalfuttaim.com/images/default-source/icons/footer-social/youtubeicon.svg?sfvrsn=5b20ab0d_2"
                      title="youtubeicon"
                      alt="youtube icon"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    className="svg-image"
                    href="https://www.majidalfuttaim.com/en/redirects/social-links/twitter"
                    target="_blank"
                    data-channel="twittericon"
                  >
                    <img
                      loading="lazy"
                      src="https://www.majidalfuttaim.com/images/default-source/icons/footer-social/twittericon.svg?sfvrsn=6ae9bd55_12"
                      title="twittericon"
                      alt="twitter icon"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    className="svg-image"
                    href="https://www.majidalfuttaim.com/en/redirects/social-links/linkedin"
                    target="_blank"
                    data-channel="linkedin"
                  >
                    <img
                      loading="lazy"
                      src="https://www.majidalfuttaim.com/images/default-source/icons/footer-social/linkedin.svg?sfvrsn=253d7769_2"
                      title="linkedin"
                      alt="linkedin icon"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    className="svg-image"
                    href="https://www.majidalfuttaim.com/en/redirects/social-links/medium"
                    target="_blank"
                    data-channel="mediumicon"
                  >
                    <img
                      loading="lazy"
                      src="https://www.majidalfuttaim.com/images/default-source/icons/footer-social/mediumicon.svg?sfvrsn=f6747d40_2"
                      title="mediumicon"
                      alt="medium icon"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            id="Footer_TE21B85AC013_Col03"
            className="footer-links sf_colsIn"
            data-sf-element="footer-links"
            data-placeholder-label="footer-links"
          >
            <div className="links">
              <div
                id="Footer_TE21B85AC017_Col00"
                className="links-heading sf_colsIn"
                data-sf-element="footer-links-heading"
                data-placeholder-label="footer-links-heading"
              ></div>
              <ul
                id="Footer_TE21B85AC017_Col01"
                className="sf_colsIn"
                data-sf-element="footer-link-items"
                data-placeholder-label="footer-link-items"
              ></ul>
            </div>
            <div className="links">
              <div
                id="Footer_TE21B85AC020_Col00"
                className="links-heading sf_colsIn"
                data-sf-element="footer-links-heading"
                data-placeholder-label="footer-links-heading"
              >
                <h6>Who We Are</h6>
              </div>
              <ul
                id="Footer_TE21B85AC020_Col01"
                className="sf_colsIn"
                data-sf-element="footer-link-items"
                data-placeholder-label="footer-link-items"
              >
                <li>
                  <Link
                    href="https://www.majidalfuttaim.com/who-we-are/vision-values"
                    target="_self"
                  >
                    Vision &amp; Values
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.majidalfuttaim.com/en/who-we-are/our-journey"
                    target="_self"
                  >
                    Our Journey
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.majidalfuttaim.com/en/who-we-are/sustainability-and-esg"
                    target="_self"
                  >
                    Sustainability &amp; ESG
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.majidalfuttaim.com/en/who-we-are/corporate-compliance"
                    target="_self"
                  >
                    Corporate Compliance
                  </Link>
                </li>
              </ul>
            </div>
            <div className="links">
              <div
                id="Footer_TE21B85AC021_Col00"
                className="links-heading sf_colsIn"
                data-sf-element="footer-links-heading"
                data-placeholder-label="footer-links-heading"
              >
                <h6>What We Do</h6>
              </div>
              <ul
                id="Footer_TE21B85AC021_Col01"
                className="sf_colsIn"
                data-sf-element="footer-link-items"
                data-placeholder-label="footer-link-items"
              >
                <li>
                  <Link
                    href="https://www.majidalfuttaim.com/en/what-we-do/unique-experiences"
                    target="_self"
                  >
                    Unique Experiences
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.majidalfuttaim.com/en/what-we-do/our-industries"
                    target="_self"
                  >
                    Our Industries
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.majidalfuttaim.com/en/what-we-do/brand-family"
                    target="_self"
                  >
                    Our Brand Family
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.majidalfuttaim.com/en/what-we-do/partner-with-us"
                    target="_self"
                  >
                    Partner with us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="links">
              <div
                id="Footer_TE21B85AC022_Col00"
                className="links-heading sf_colsIn"
                data-sf-element="footer-links-heading"
                data-placeholder-label="footer-links-heading"
              >
                <h6>Quick Links</h6>
              </div>
              <ul
                id="Footer_TE21B85AC022_Col01"
                className="sf_colsIn"
                data-sf-element="footer-link-items"
                data-placeholder-label="footer-link-items"
              >
                <li>
                  <Link href="https://www.majidalfuttaim.com/en/contact-us" target="_self">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="https://www.majidalfuttaim.com/en/media-centre" target="_self">
                    Media Centre
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://careers.majidalfuttaim.com/global/en/home?utm_campaign=Careers&amp;utm_medium=referal&amp;utm_source=corporate_website"
                    target="_blank"
                  >
                    People &amp; Careers
                  </Link>
                </li>
                <li>
                  <Link href="https://www.majidalfuttaim.com/en/investor-relations" target="_self">
                    Investor Relations
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.majidalfuttaim.com/en/redirects/footer/privacy-center"
                    target="_self"
                  >
                    PRIVACY CENTER
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.majidalfuttaim.com/en/anti-fraud-disclaimer"
                    target="_self"
                  >
                    Anti Fraud Disclaimer
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.majidalfuttaim.com/en/responsible-disclosure-policy"
                    target="_self"
                  >
                    Responsible Disclosure Policy
                  </Link>
                </li>
                <li>
                  <Link href="https://www.majidalfuttaim.com/en/sitemap" target="_self">
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <FooterDefaultComponent {...props} />;
};
