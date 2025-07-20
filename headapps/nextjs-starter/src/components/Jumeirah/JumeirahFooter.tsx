import Link from 'next/link';
import React from 'react';

import { TextField, Text } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  CopyrightText: TextField;
}

type Props = {
  params: { [key: string]: string };
  fields: Fields;
};

const JumeirahFooter = (props: Props): JSX.Element => {
  return (
    <footer className="full-bleed-rd FooterSection">
      <div className="footer-section-wrap">
        <div className="contents-wrap">
          <div className="social-wrapper">
            <div className="newsletter-message">
              <Link className="connect-text" href="">
                Let&#x27;s stay in touch
              </Link>
              <div className="connect-newsletter-cta">
                <Link href="/en/newsletter/signup">
                  <button>Newsletter sign-up</button>
                </Link>
              </div>
            </div>
            <div className="email-box">
              <input
                name="email"
                placeholder="YOUR EMAIL ADDRESS"
                type="email"
                className="form-control"
              />
            </div>
            <Link
              href="javascript:void(0)"
              target="_self"
              title="SUBSCRIBE"
              className="arrow-link-molecule"
            >
              SUBSCRIBE
            </Link>
            <div className="social-icons">
              <Link
                href="https://www.facebook.com/Jumeirah"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/social-media/redesign2024/facebook.svg?modified=20240326070902"
                  alt=""
                />
              </Link>
              <Link
                href="https://www.instagram.com/jumeirah/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/social-media/redesign2024/instagram.svg?modified=20240326070904"
                  alt=""
                />
              </Link>
              <Link href="https://twitter.com/jumeirah" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/social-media/redesign2024/social.svg?modified=20240326070931"
                  alt=""
                />
              </Link>
              <Link
                href="https://www.youtube.com/@Jumeirah"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/social-media/redesign2024/youtube.svg?modified=20240326070905"
                  alt=""
                />
              </Link>
              <Link
                href="https://www.linkedin.com/company/jumeirah/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/social-media/redesign2024/footer/footer/social-media.svg?modified=20240508124452"
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="footer-links-wrapper">
            <div className="footer-links">
              <div className="left-sided">
                <ul className="link-area">
                  <li className="f-link">
                    <Link href="/en/jumeirah-group/about-jumeirah">About Jumeirah</Link>
                  </li>
                  <li className="f-link">
                    <Link href="/en/jumeirah-group/contact-us">Contact Us</Link>
                  </li>
                  <li className="f-link">
                    <Link href="/en/careers">Careers</Link>
                  </li>
                  <li className="f-link">
                    <Link href="/en/jumeirah-group/development">Hotel Development</Link>
                  </li>
                </ul>
              </div>
              <div className="right-sided">
                <ul className="link-area">
                  <li className="f-link">
                    <Link href="/en/jumeirah-residences">Residences</Link>
                  </li>
                  <li className="f-link">
                    <Link href="/en/jumeirah-group/faq">FAQs</Link>
                  </li>
                  <li className="f-link">
                    <Link href="/en/jumeirah-group/press-centre">Press Centre</Link>
                  </li>
                  <li className="f-link">
                    <Link href="/en/jumeirah-group/terms-and-conditions/jumeirah-privacy-notice">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="f-link">
                    <Link href="/en/jumeirah-group/terms-and-conditions/cookies-notice">
                      Cookies Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-text">
          <Text field={props.fields.CopyrightText} />
        </div>
      </div>
    </footer>
  );
};

export default JumeirahFooter;
