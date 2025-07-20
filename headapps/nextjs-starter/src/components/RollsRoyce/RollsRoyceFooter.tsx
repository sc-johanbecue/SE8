import React from 'react';
import { ImageField, TextField, RichTextField } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Number: TextField;
  Label: TextField;
  Name: TextField;
  Category: TextField;
  Family: TextField;
  ShortDescription: RichTextField;
  LongDescription: RichTextField;
  MasterAsset: ImageField;
}

type RollsRoyceFooterProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const RollsRoyceFooterDefaultComponent = (props: RollsRoyceFooterProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: RollsRoyceFooterProps): JSX.Element => {
  if (props.fields) {
    return (
      <div className="fw-footer-outer">
        <div className="fw-footer-inner">
          <div className="fw-footer-top clearfix">
            <div className="fw-box1">
              <p></p>
              <p style={{ paddingTop: '0px' }}>
                Rolls-Royce develops and delivers complex power and propulsion solutions for
                safety-critical applications in the air, at sea and on land.
              </p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <p>
                © Rolls-Royce plc <span id="dynyear"></span>. All rights reserved.
              </p>
              <script>
                {`
                  document.getElementById('dynyear').innerHTML = new Date().getFullYear();
                `}
              </script>
            </div>
            <div className="fw-box2">
              <ul id="ftr-section-Homepage-level1">
                <li id="ftr-nav-Homepage-level1" className="level1 first">
                  <a href="https://www.rolls-royce.com/">
                    <span>Home</span>
                  </a>
                </li>
                <li id="ftr-nav-innovation-level1" className="level1 haschildren">
                  <a href="https://www.rolls-royce.com/innovation.aspx">
                    <span>Innovation</span>
                  </a>
                </li>
                <li
                  id="ftr-nav-products-and-services-level1"
                  className="level1 selected haschildren"
                >
                  <a href="https://www.rolls-royce.com/products-and-services.aspx">
                    <span>Products & Services</span>
                  </a>
                </li>
                <li id="ftr-nav-about-level1" className="level1 haschildren">
                  <a href="https://www.rolls-royce.com/about.aspx">
                    <span>About</span>
                  </a>
                </li>
                <li id="ftr-nav-contact-us-level1" className="level1 haschildren">
                  <a href="https://www.rolls-royce.com/contact-us.aspx">
                    <span>Contact us</span>
                  </a>
                </li>
                <li id="ftr-nav-country-sites-level1" className="level1 haschildren">
                  <a href="https://www.rolls-royce.com/country-sites/china-old-site.aspx">
                    <span>Country sites</span>
                  </a>
                </li>
                <li id="ftr-nav-sustainability-level1" className="level1 haschildren">
                  <a href="https://www.rolls-royce.com/sustainability.aspx">
                    <span>Sustainability</span>
                  </a>
                </li>
                <li id="ftr-nav-investors-level1" className="level1 haschildren">
                  <a href="https://www.rolls-royce.com/investors.aspx">
                    <span>Investors</span>
                  </a>
                </li>
                <li id="ftr-nav-media-level1" className="level1 haschildren">
                  <a href="https://www.rolls-royce.com/media.aspx">
                    <span>Media</span>
                  </a>
                </li>
                <li id="ftr-nav-careers-direct-level1" className="level1 last">
                  <a target="_blank" href="https://careers.rolls-royce.com">
                    <span>Careers</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="fw-box3">
              <ul>
                <li>
                  <a href="https://www.rolls-royce.com/products-and-services.aspx">
                    Products & Services
                  </a>
                </li>
                <li>
                  <a href="https://www.rolls-royce.com/products-and-services/civil-aerospace.aspx">
                    Civil Aerospace
                  </a>
                </li>
                <li>
                  <a href="https://www.rolls-royce.com/products-and-services/defence.aspx">
                    Defence
                  </a>
                </li>
                <li>
                  <a href="https://www.rolls-royce.com/products-and-services/power-systems.aspx">
                    Power Systems
                  </a>
                </li>
                <li>
                  <a href="https://www.rolls-royce.com/products-and-services/electrical.aspx">
                    Electrical Aviation
                  </a>
                </li>
              </ul>
            </div>
            <div className="fw-box4">
              <span className="ftr-ttl">Follow Us</span>
              <div className="ftr-social">
                <ul>
                  <li className="new-fb">
                    <a
                      href="https://www.facebook.com/RollsRoyceGroup"
                      target="_blank"
                      title="Facebook – link to website (opens in a new window)"
                    >
                      <span className="icon-facebook"></span>
                    </a>
                  </li>
                  <li className="new-twitter">
                    <a
                      href="https://twitter.com/rollsroyce"
                      target="_blank"
                      title="X – link to website (opens in a new window)"
                    >
                      <span className="icon-x-twitter"></span>
                    </a>
                  </li>
                  <li className="new-youtube">
                    <a
                      href="https://www.youtube.com/user/RollsRoyceplc"
                      target="_blank"
                      title="YouTube – link to website (opens in a new window)"
                    >
                      <span className="icon-youtube"></span>
                    </a>
                  </li>
                  <li className="new-linkedin">
                    <a
                      href="https://www.linkedin.com/company/rolls-royce"
                      target="_blank"
                      title="Linkedin – link to website (opens in a new window)"
                    >
                      <span className="icon-linkedin2"></span>
                    </a>
                  </li>
                  <li className="new-instagram">
                    <a
                      href="https://www.instagram.com/rollsroycegroup"
                      target="_blank"
                      title="Instagram – link to website (opens in a new window)"
                    >
                      <span className="icon-instagram"></span>
                    </a>
                  </li>
                  <li className="new-flickr">
                    <a
                      href="https://www.flickr.com/photos/rolls-royceplc"
                      target="_blank"
                      title="Flickr – link to website (opens in a new window)"
                    >
                      <span className="icon-flickr"></span>
                    </a>
                  </li>
                </ul>
              </div>
              <span className="ftr-ttl">Stay in Touch</span>
              <div className="ftr-stay-in-touch">
                <p>
                  <a href="https://www.rolls-royce.com/investors/investor-contacts/alert-service.aspx">
                    <span className="icon-rss"></span>
                    <span>Sign up to get the latest news</span>
                  </a>
                </p>
                <p>
                  <a href="https://www.rolls-royce.com/contact-us.aspx">
                    <span className="icon-icon-mail-cc"></span>
                    <span>Contact us</span>
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.rolls-royce.com/~/media/Files/R/Rolls-Royce/documents/contact-us/2023/vulnerability-disclosure-policy-2023.pdf"
                    target="_blank"
                    title="PDF, 91KB, opens in a new window"
                  >
                    <span className="icon-file-pdf"></span>
                    <span>Vulnerability Reporting</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="fw-footer-bottom clearfix">
            <div className="fw-ftr-logo-copy">
              <img
                className="footer-logo"
                src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/css/rr-monogram-large-registration-mark-reversed.svg"
                width="40"
                height="46"
                alt="Rolls-Royce"
              />
              <div className="copy-text" style={{}}>
                <p style={{ height: '46px', width: '150px' }}>
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 1260.87 414.13"
                    style={{ background: 'new 0 0 1260.87 414.13' }}
                    xmlSpace="preserve"
                  >
                    <style type="text/css">
                      {`
                          .st0 {
                            fill: #ffffff;
                          }
                        `}
                    </style>
                    <path
                      className="st0"
                      d="M94.22,151.14h59.8c12.8,0,23,3.43,30.6,10.3c7.6,6.87,11.4,15.83,11.4,26.9c0,8.8-2.57,16.07-7.7,21.8
                                    c-5.13,5.73-11.3,9.53-18.5,11.4c6.13,2,10.73,7.93,13.8,17.8l11.6,37.2c1.6,5.73,4.13,10.6,7.6,14.6h-24.2
                                    c-2.54-2.53-4.73-6.67-6.6-12.4l-11.4-35.4c-1.6-4.93-3.57-8.43-5.9-10.5c-2.33-2.07-6.03-3.1-11.1-3.1h-25.8v61.4h-23.6V151.14z
                                    M151.62,210.74c14.53,0,21.8-6.8,21.8-20.4c0-13.47-7.27-20.2-21.8-20.2h-33.8v40.6H151.62z"
                    />
                    <path
                      className="st0"
                      d="M238.33,287.44c-7.67-4.33-13.57-10.43-17.7-18.3c-4.13-7.87-6.2-16.87-6.2-27c0-10.27,2.07-19.3,6.2-27.1
                                    c4.13-7.8,10.03-13.87,17.7-18.2c7.67-4.33,16.57-6.5,26.7-6.5c10.13,0,19,2.17,26.6,6.5c7.6,4.33,13.47,10.4,17.6,18.2
                                    c4.13,7.8,6.2,16.83,6.2,27.1c0,10.13-2.07,19.13-6.2,27c-4.13,7.87-10,13.97-17.6,18.3c-7.6,4.33-16.47,6.5-26.6,6.5
                                    C254.89,293.94,245.99,291.77,238.33,287.44z M284.83,265.44c5.07-6.07,7.6-13.83,7.6-23.3c0-9.47-2.54-17.23-7.6-23.3
                                    c-5.07-6.07-11.67-9.1-19.8-9.1c-8.27,0-14.93,3.03-20,9.1c-5.07,6.07-7.6,13.83-7.6,23.3c0,9.47,2.53,17.23,7.6,23.3
                                    c5.07,6.07,11.73,9.1,20,9.1C273.16,274.54,279.76,271.51,284.83,265.44z"
                    />
                    <path
                      className="st0"
                      d="M342.62,287.18c-3.6-4.51-5.4-10.67-5.4-18.48V151.14h22.6v115.52c0,2.43,0.53,4.25,1.6,5.47
                                    c1.07,1.21,2.6,1.82,4.6,1.82c1.73,0,3.6-0.4,5.6-1.2v18.2c-3.07,2-7.2,3-12.4,3C351.76,293.94,346.22,291.69,342.62,287.18z"
                    />
                    <path
                      className="st0"
                      d="M396.82,287.18c-3.6-4.51-5.4-10.67-5.4-18.48V151.14h22.6v115.52c0,2.43,0.53,4.25,1.6,5.47
                                    c1.07,1.21,2.6,1.82,4.6,1.82c1.73,0,3.6-0.4,5.6-1.2v18.2c-3.07,2-7.2,3-12.4,3C405.96,293.94,400.42,291.69,396.82,287.18z"
                    />
                    <path
                      className="st0"
                      d="M439.82,280.94l9.4-18.6c3.33,4.13,7.33,7.4,12,9.8c4.67,2.4,9.4,3.6,14.2,3.6c9.6,0,14.4-3.93,14.4-11.8
                                    c0-3.47-1.63-6.4-4.9-8.8c-3.27-2.4-8.43-4.6-15.5-6.6c-8.54-2.53-14.97-6.33-19.3-11.4c-4.33-5.07-6.5-11.33-6.5-18.8
                                    c0-8.4,3.3-15.17,9.9-20.3c6.6-5.13,14.83-7.7,24.7-7.7c6,0,11.5,0.73,16.5,2.2c5,1.47,9.23,3.4,12.7,5.8l-6.6,17.8
                                    c-3.87-2.8-7.6-4.9-11.2-6.3c-3.6-1.4-7.4-2.1-11.4-2.1c-4.13,0-7.47,0.93-10,2.8c-2.53,1.87-3.8,4.4-3.8,7.6
                                    c0,3.33,1.6,6.23,4.8,8.7c3.2,2.47,8.27,4.57,15.2,6.3c9.07,2.4,15.73,5.97,20,10.7c4.27,4.73,6.4,11.43,6.4,20.1
                                    c0,5.6-1.43,10.67-4.3,15.2c-2.87,4.53-6.93,8.13-12.2,10.8c-5.27,2.67-11.5,4-18.7,4C460.42,293.94,448.49,289.61,439.82,280.94z"
                    />
                    <path className="st0" d="M527.82,223.94h59.8v18.8h-59.8V223.94z" />
                    <path
                      className="st0"
                      d="M610.82,151.14h59.8c12.8,0,23,3.43,30.6,10.3c7.6,6.87,11.4,15.83,11.4,26.9c0,8.8-2.57,16.07-7.7,21.8
                                    c-5.13,5.73-11.3,9.53-18.5,11.4c6.13,2,10.73,7.93,13.8,17.8l11.6,37.2c1.6,5.73,4.13,10.6,7.6,14.6h-24.2
                                    c-2.54-2.53-4.73-6.67-6.6-12.4l-11.4-35.4c-1.6-4.93-3.57-8.43-5.9-10.5c-2.33-2.07-6.03-3.1-11.1-3.1h-25.8v61.4h-23.6V151.14z
                                    M668.22,210.74c14.53,0,21.8-6.8,21.8-20.4c0-13.47-7.27-20.2-21.8-20.2h-33.8v40.6H668.22z"
                    />
                    <path
                      className="st0"
                      d="M754.92,287.44c-7.67-4.33-13.57-10.43-17.7-18.3c-4.13-7.87-6.2-16.87-6.2-27c0-10.27,2.07-19.3,6.2-27.1
                                    c4.13-7.8,10.03-13.87,17.7-18.2c7.67-4.33,16.57-6.5,26.7-6.5c10.13,0,19,2.17,26.6,6.5c7.6,4.33,13.47,10.4,17.6,18.2
                                    c4.13,7.8,6.2,16.83,6.2,27.1c0,10.13-2.07,19.13-6.2,27c-4.13,7.87-10,13.97-17.6,18.3c-7.6,4.33-16.47,6.5-26.6,6.5
                                    C771.49,293.94,762.59,291.77,754.92,287.44z M801.42,265.44c5.07-6.07,7.6-13.83,7.6-23.3c0-9.47-2.54-17.23-7.6-23.3
                                    c-5.07-6.07-11.67-9.1-19.8-9.1c-8.27,0-14.93,3.03-20,9.1c-5.07,6.07-7.6,13.83-7.6,23.3c0,9.47,2.53,17.23,7.6,23.3
                                    c5.07,6.07,11.73,9.1,20,9.1C789.75,274.54,796.35,271.51,801.42,265.44z"
                    />
                    <path
                      className="st0"
                      d="M944.02,193.14l-50,121.4c-3.33,8-7.1,13.57-11.3,16.7c-4.2,3.13-9.63,4.7-16.3,4.7c-2.4,0-5.1-0.27-8.1-0.8
                                    c-3-0.53-5.37-1.2-7.1-2l3.6-20c2.93,1.87,6.07,2.8,9.4,2.8c4.53,0,8-2.89,10.4-8.67l6.4-16.13l-40.6-98h24.8l27.2,69.4l27.6-69.4
                                    H944.02z"
                    />
                    <path
                      className="st0"
                      d="M975.72,287.34c-7.67-4.4-13.57-10.53-17.7-18.4c-4.13-7.87-6.2-16.8-6.2-26.8s2.07-18.93,6.2-26.8
                                    c4.13-7.87,10.03-14,17.7-18.4c7.67-4.4,16.57-6.6,26.7-6.6c19.07,0,32.8,7.47,41.2,22.4l-16.8,12.2c-2.54-4.93-5.87-8.7-10-11.3
                                    c-4.13-2.6-8.93-3.9-14.4-3.9c-8.13,0-14.77,2.93-19.9,8.8c-5.13,5.87-7.7,13.73-7.7,23.6c0,9.87,2.57,17.73,7.7,23.6
                                    c5.13,5.87,11.77,8.8,19.9,8.8c11.07,0,19.2-4.87,24.4-14.6l16.8,11.2c-8.93,15.2-22.67,22.8-41.2,22.8
                                    C992.28,293.94,983.38,291.74,975.72,287.34z"
                    />
                    <path
                      className="st0"
                      d="M1150.62,247.34h-70.6c0.8,8.67,3.57,15.53,8.3,20.6c4.73,5.07,10.97,7.6,18.7,7.6c10.8,0,18.73-4.87,23.8-14.6
                                    l17.6,10c-4.13,7.33-9.67,13-16.6,17c-6.93,4-15.33,6-25.2,6c-9.87,0-18.5-2.23-25.9-6.7s-13.1-10.6-17.1-18.4c-4-7.8-6-16.7-6-26.7
                                    c0-9.87,2.07-18.73,6.2-26.6c4.13-7.87,9.97-14.03,17.5-18.5c7.53-4.47,16.17-6.7,25.9-6.7c8.8,0,16.63,1.87,23.5,5.6
                                    c6.87,3.73,12.2,8.83,16,15.3c3.8,6.47,5.7,13.57,5.7,21.3C1152.42,238.14,1151.82,243.08,1150.62,247.34z M1131.22,231.14
                                    c-0.67-6.8-3.1-12.3-7.3-16.5s-9.77-6.3-16.7-6.3c-6.67,0-12.3,2.03-16.9,6.1c-4.6,4.07-7.7,9.63-9.3,16.7H1131.22z"
                    />
                    <path
                      className="st0"
                      d="M1148.76,143.09c-17.65,0-32.01-14.36-32.01-32.01s14.36-32.01,32.01-32.01c17.65,0,32.01,14.36,32.01,32.01
                                    S1166.42,143.09,1148.76,143.09z M1148.76,85.67c-14.01,0-25.41,11.4-25.41,25.41s11.4,25.41,25.41,25.41
                                    c14.01,0,25.41-11.4,25.41-25.41S1162.78,85.67,1148.76,85.67z"
                    />
                    <path
                      className="st0"
                      d="M1136.59,93.67h14.8c3.17,0,5.69,0.85,7.57,2.55c1.88,1.7,2.82,3.92,2.82,6.66c0,2.18-0.64,3.98-1.91,5.4
                                    c-1.27,1.42-2.8,2.36-4.58,2.82c1.52,0.49,2.66,1.96,3.42,4.41l2.87,9.21c0.4,1.42,1.02,2.62,1.88,3.61h-5.99
                                    c-0.63-0.63-1.17-1.65-1.63-3.07l-2.82-8.76c-0.4-1.22-0.88-2.09-1.46-2.6c-0.58-0.51-1.49-0.77-2.75-0.77h-6.39v15.2h-5.84V93.67z
                                    M1150.8,108.43c3.6,0,5.4-1.68,5.4-5.05c0-3.33-1.8-5-5.4-5h-8.37v10.05H1150.8z"
                    />
                  </svg>
                </p>
              </div>
            </div>
            <div className="fw-ftr-links">
              <ul>
                <li>
                  <a href="https://www.rolls-royce.com/site-services/site-map.aspx">Site map</a>
                </li>
                <li>
                  <a href="https://www.rolls-royce.com/site-services/use-of-cookies.aspx">
                    Use of cookies
                  </a>
                </li>
                <li>
                  <a id="cc-CookieSetting" href="javascript:;">
                    Cookie Settings
                  </a>
                </li>
                <li>
                  <a href="https://www.rolls-royce.com/site-services/legal-information.aspx">
                    Legal information
                  </a>
                </li>
                <li>
                  <a href="https://www.rolls-royce.com/site-services/data-privacy.aspx">
                    Data privacy
                  </a>
                </li>
                <li className="last">
                  <a href="https://www.rolls-royce.com/site-services/anti-slavery-and-human-trafficking-statement.aspx">
                    Anti-slavery statement
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <RollsRoyceFooterDefaultComponent {...props} />;
};
