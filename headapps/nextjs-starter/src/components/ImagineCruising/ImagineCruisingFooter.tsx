import React from 'react'; //{ useState }
import { TextField } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

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
      <>
        <div id="subscribe-toolbar" className="subscribe-toolbar-disrupter">
          <div className="content-margin">
            <p className="toolbar-header">Latest Offers from Imagine Cruising</p>
            <p>
              The world is your oyster. Subscribe to our newsletter to uncover hidden gems,
              inspiring destinations, and insider tips from our knowledgeable team
            </p>
            <div className="signup-row flex">
              <input
                onChange={(e) => console.log(e.target.value)}
                type="email"
                id="form-first-email"
                placeholder="Enter Email Address"
              />
              <button className="footer-newsletter aqua-button">Subscribe</button>
            </div>
          </div>
        </div>
        <div id="footer-lower">
          <div id="footer-sticky-number" className="mobile-only fixed">
            <div className="flex">
              <Link className="absolute-zero fsource__tel no-text" href="tel:0800 840 5801"></Link>
              <p>
                Speak to a cruise expert <span style={{ color: '#0CC0CC' }}>We&#8217;re open</span>
              </p>
              <Link href="tel:0800 840 5801" className="phone__number fsource__tel">
                0800 840 5801
              </Link>
            </div>
          </div>
          <div className="content-margin center">
            <div className="flex flex-wrap flex-direction-column">
              <div id="footer-links" className="flex flex-align-start flex-justify-center desktop">
                <div className="links-column   links-column-1">
                  <p className="links-title">Useful Links</p>
                  <div className="footer-link-holder">
                    <Link
                      className="footer-link "
                      aria-label="Home"
                      href="https://www.imaginecruising.co.uk/"
                    >
                      Home
                    </Link>
                    <Link
                      className="footer-link "
                      aria-label="About us"
                      href="https://www.imaginecruising.co.uk/about/"
                    >
                      About us
                    </Link>
                    <Link
                      className="footer-link "
                      aria-label="Holiday Extras"
                      href="https://www.holidayextras.com/imaginecruising/hotels.html#"
                    >
                      Holiday Extras
                    </Link>
                    <Link
                      className="footer-link "
                      aria-label="FAQs"
                      href="https://www.imaginecruising.co.uk/faqs/"
                    >
                      FAQs
                    </Link>
                    <Link
                      className="footer-link "
                      aria-label="Contact us"
                      href="https://www.imaginecruising.co.uk/contact-us/"
                    >
                      Contact us
                    </Link>
                    <Link
                      className="footer-link "
                      aria-label="Careers"
                      href="https://www.imaginecruising.co.uk/career-opportunities/"
                    >
                      Careers
                    </Link>
                  </div>
                </div>
                <div className="links-column   links-column-2">
                  <p className="links-title">Legal</p>
                  <div className="footer-link-holder">
                    <Link
                      className="footer-link "
                      aria-label="Cookie Policy"
                      href="https://www.imaginecruising.co.uk/cookie-policy/"
                    >
                      Cookie Policy
                    </Link>
                    <Link
                      className="footer-link "
                      aria-label="Group Tax Strategy"
                      href="https://res.cloudinary.com/deh6eqgn0/image/upload/v1739896521/dnata-Emirates-UK-tax-strategy-_2024-25.pdf"
                    >
                      Group Tax Strategy
                    </Link>
                    <Link
                      className="footer-link "
                      aria-label="Modern Slavery Transparency Statement"
                      href="https://res.cloudinary.com/deh6eqgn0/image/upload/v1734018241/Imagine-Modern-Slavery-Statement-FY23-24-SS_Rebrand_1.pdf"
                    >
                      Modern Slavery Transparency Statement
                    </Link>
                    <Link
                      className="footer-link "
                      aria-label="Anti-Slavery and Human Trafficking Policy"
                      href="https://res.cloudinary.com/deh6eqgn0/images/v1689758498/Anti-Slavery_and_Human_Trafficking_Policy/Anti-Slavery_and_Human_Trafficking_Policy.pdf?_i=AA"
                    >
                      Anti-Slavery and Human Trafficking Policy
                    </Link>
                    <Link
                      className="footer-link "
                      aria-label="Privacy Notice"
                      href="https://www.imaginecruising.co.uk/privacy-policy/"
                    >
                      Privacy Notice
                    </Link>
                    <Link
                      className="footer-link "
                      aria-label="Terms and Conditions"
                      href="https://www.imaginecruising.co.uk/terms-conditions/"
                    >
                      Terms and Conditions
                    </Link>
                  </div>
                </div>
                <div className="links-column   links-column-3">
                  <p className="links-title">Holiday Types</p>
                  <div className="footer-link-holder">
                    <Link
                      className="footer-link "
                      aria-label="Cruise & Touring"
                      href="https://www.imaginecruising.co.uk/holiday-types/cruise-touring/"
                    >
                      Cruise & Touring
                    </Link>
                    <Link
                      className="footer-link "
                      aria-label="Cruise & Rail"
                      href="https://www.imaginecruising.co.uk/holiday-types/cruise-rail/"
                    >
                      Cruise & Rail
                    </Link>
                    <Link
                      className="footer-link "
                      aria-label="Cruise & Stay"
                      href="https://www.imaginecruising.co.uk/holiday-types/cruise-stay/"
                    >
                      Cruise & Stay
                    </Link>
                    <Link
                      className="footer-link "
                      aria-label="Cruise & Event"
                      href="https://www.imaginecruising.co.uk/holiday-types/cruise-event/"
                    >
                      Cruise & Event
                    </Link>
                    <Link
                      className="footer-link "
                      aria-label="River Cruising"
                      href="https://www.imaginecruising.co.uk/river-cruise-collection/"
                    >
                      River Cruising
                    </Link>
                  </div>
                </div>
                <div className="links-column links-column-4">
                  <div
                    className="trustpilot-widget ml-2 mt-2 first-wiget"
                    data-locale="en-GB"
                    data-template-id="5406e65db0d04a09e042d5fc"
                    data-businessunit-id="58b690190000ff00059d93e2"
                    data-style-height="20px"
                    data-style-width="100px"
                    data-theme="dark"
                  >
                    <Link
                      href="https://uk.trustpilot.com/review/imaginecruising.co.uk"
                      target="_blank"
                      rel="noopener"
                    ></Link>
                  </div>
                  <div
                    className="trustpilot-widget"
                    data-locale="en-GB"
                    data-template-id="5419b637fa0340045cd0c936"
                    data-businessunit-id="58b690190000ff00059d93e2"
                    data-style-height="28px"
                    data-style-width="230px"
                    data-theme="dark"
                  >
                    <Link
                      href="https://uk.trustpilot.com/review/imaginecruising.co.uk"
                      target="_blank"
                      rel="noopener"
                    ></Link>
                  </div>
                  <div className="footer-socials flex flex-justify-end flex-align-center">
                    <Link href="https://www.facebook.com/imaginecruising">
                      <i className="fa-classic fa-brands fa-square-facebook" aria-hidden="true"></i>
                    </Link>
                    <Link href="https://www.instagram.com/imaginecruising/">
                      <i
                        className="fa-classic fa-brands fa-square-instagram"
                        aria-hidden="true"
                      ></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div id="footer-copyright">
                <p>
                  Portland House, Bincknoll Lane, Interface Business Park, Royal Wootton Bassett,
                  Wiltshire, SN4 8SY. Copyright © 2025 Imagine Cruising Ltd. All rights reserved.
                  <br />
                  Please check
                  <Link href="https://travelaware.campaign.gov.uk/" target="_blank" rel="noopener">
                    travelaware.campaign.gov.uk
                  </Link>
                  regularly for updates ahead of travel, as the advice can change.
                </p>
                <p>
                  <img
                    decoding="async"
                    alt="Abta Logo"
                    src="https://res.cloudinary.com/deh6eqgn0/images/v1686302092/abta-logo_254747d9e1a/abta-logo_254747d9e1a.png?_i=AA"
                  />
                  <img
                    decoding="async"
                    alt="ATOL Logo"
                    width="77"
                    height="75"
                    src="https://res.cloudinary.com/deh6eqgn0/images/v1686302084/atol-logo/atol-logo.png?_i=AA"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return <FooterDefaultComponent {...props} />;
};
