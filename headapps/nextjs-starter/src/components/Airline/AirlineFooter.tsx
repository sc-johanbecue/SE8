import React from 'react';

type AirlineFooterProps = {
  params: { [key: string]: string };
};

const AirlineFooterDefaultComponent = (props: AirlineFooterProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: AirlineFooterProps): JSX.Element => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <div className="footer_heading_area">
            <h5>Need any help?</h5>
          </div>
          <div className="footer_first_area">
            <div className="footer_inquery_area">
              <h5>Call 24/7 for any help</h5>
              <h3>
                <a href="tel:+00-123-456-789">+00 123 456 789</a>
              </h3>
            </div>
            <div className="footer_inquery_area">
              <h5>Mail to our support team</h5>
              <h3>
                <a href="mailto:support@domain.com">support@domain.com</a>
              </h3>
            </div>
            <div className="footer_inquery_area">
              <h5>Follow us on</h5>
              <ul className="soical_icon_footer">
                <li>
                  <a href="#!">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i className="fab fa-twitter-square"></i>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-2  col-md-6 col-sm-6 col-12 offset-lg-1">
          <div className="footer_heading_area">
            <h5>Company</h5>
          </div>
          <div className="footer_link_area">
            <ul>
              <li>
                <a href="https://www.sportingkampenhout.be/Sitecore/airline/about">About Us</a>
              </li>
              <li>
                <a href="https://www.sportingkampenhout.be/Sitecore/airline/testimonials">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="https://www.sportingkampenhout.be/Sitecore/airline/faqs">Rewards</a>
              </li>
              <li>
                <a href="https://www.sportingkampenhout.be/Sitecore/airline/about">Work with Us</a>
              </li>
              <li>
                <a href="https://www.sportingkampenhout.be/Sitecore/airline/tour-guids">
                  Meet the Team
                </a>
              </li>
              <li>
                <a href="https://www.sportingkampenhout.be/Sitecore/airline/news">Blog</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2  col-md-6 col-sm-6 col-12">
          <div className="footer_heading_area">
            <h5>Support</h5>
          </div>
          <div className="footer_link_area">
            <ul>
              <li>
                <a href="https://www.sportingkampenhout.be/Sitecore/airline/about">Account</a>
              </li>
              <li>
                <a href="https://www.sportingkampenhout.be/Sitecore/airline/faqs">Faq</a>
              </li>
              <li>
                <a href="https://www.sportingkampenhout.be/Sitecore/airline/testimonials">Legal</a>
              </li>
              <li>
                <a href="https://www.sportingkampenhout.be/Sitecore/airline/contact">Contact</a>
              </li>
              <li>
                <a href="https://www.sportingkampenhout.be/Sitecore/airline/top-destinations">
                  Affiliate Program
                </a>
              </li>
              <li>
                <a href="https://www.sportingkampenhout.be/Sitecore/airline/privacy-policy">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2  col-md-6 col-sm-6 col-12">
          <div className="footer_heading_area">
            <h5>Other Services</h5>
          </div>
          <div className="footer_link_area">
            <ul>
              <li>
                <a href="https://www.sportingkampenhout.be/Sitecore/airline/about">
                  Community program
                </a>
              </li>
              <li>
                <a href="https://www.sportingkampenhout.be/Sitecore/airline/faqs">
                  Investor Relations
                </a>
              </li>
              <li>
                <a href="https://www.sportingkampenhout.be/Sitecore/airline/testimonials">
                  Rewards Program
                </a>
              </li>
              <li>
                <a href="https://www.sportingkampenhout.be/Sitecore/airline/contact">PointsPLUS</a>
              </li>
              <li>
                <a href="https://www.sportingkampenhout.be/Sitecore/airline/top-destinations">
                  Partners
                </a>
              </li>
              <li>
                <a href="https://www.sportingkampenhout.be/Sitecore/airline/privacy-policy">
                  List My Hotel
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2  col-md-6 col-sm-6 col-12">
          <div className="footer_heading_area">
            <h5>Top cities</h5>
          </div>
          <div className="footer_link_area">
            <ul>
              <li>
                <a href="https://www.sportingkampenhout.be/Sitecore/airline/about">Chicago</a>
              </li>
              <li>
                <a href="https://www.sportingkampenhout.be/Sitecore/airline/faqs">New York</a>
              </li>
              <li>
                <a href="https://www.sportingkampenhout.be/Sitecore/airline/testimonials">
                  San Francisco
                </a>
              </li>
              <li>
                <a href="https://www.sportingkampenhout.be/Sitecore/airline/contact">California</a>
              </li>
              <li>
                <a href="https://www.sportingkampenhout.be/Sitecore/airline/top-destinations">
                  Ohio
                </a>
              </li>
              <li>
                <a href="https://www.sportingkampenhout.be/Sitecore/airline/privacy-policy">
                  Alaska
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  return <AirlineFooterDefaultComponent {...props} />;
};
