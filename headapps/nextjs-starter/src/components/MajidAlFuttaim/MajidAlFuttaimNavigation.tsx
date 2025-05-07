/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Link from 'next/link';
import { TextField } from '@sitecore-jss/sitecore-jss-nextjs';
import 'animate.css';

interface Fields {
  Title: TextField;
  Text: TextField;
}

type HeaderProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const HeaderDefaultComponent = (props: HeaderProps): JSX.Element => (
  <div className={`component Header ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Header</span>
    </div>
  </div>
);

export const Default = (props: HeaderProps): JSX.Element => {
  if (props.fields) {
    return (
      <>
        <div className="mobile-navigation main-mobile-navigation mobile">
          <div className="main-navigation-menu">
            <div className="section-container">
              <div className="mobile-menu-header">
                <div className="menu-text">
                  <span>Menu</span>
                </div>
                <div className="close-menu" id="close-menu">
                  <Link href="" className="closebtn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="22"
                      viewBox="0 0 23 22"
                      className="svg-image close-btn-black replaced-svg"
                    >
                      <path
                        fill="#8A1538"
                        fillRule="evenodd"
                        d="M12.207 10.96L22.46 21.213l-.707.707L11.5 11.667 1.247 21.92l-.707-.707L10.793 10.96.54.707 1.247 0 11.5 10.253 21.753 0l.707.707L12.207 10.96z"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="navigation">
                <ul>
                  <li>
                    <div className="main-menu-item has-sub-nav">
                      <Link
                        href="https://www.majidalfuttaim.com/en/who-we-are"
                        target="_self"
                        data-target="second-level-nav-target-1"
                      >
                        Who we are
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="main-menu-item has-sub-nav">
                      <Link
                        href="https://www.majidalfuttaim.com/en/what-we-do"
                        target="_self"
                        data-target="second-level-nav-target-2"
                      >
                        What We Do
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="main-menu-item has-sub-nav">
                      <Link
                        href="https://www.majidalfuttaim.com/en/people-and-careers"
                        target="_self"
                        data-target="second-level-nav-target-3"
                      >
                        People &amp; Careers
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="main-menu-item has-sub-nav">
                      <Link
                        href="https://www.majidalfuttaim.com/en/investor-relations"
                        target="_self"
                        data-target="second-level-nav-target-4"
                      >
                        Investor Relations
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="main-menu-item ">
                      <Link
                        href="https://www.majidalfuttaim.com/en/the-leadership-institute"
                        target="_self"
                        data-target="second-level-nav-target-5"
                      >
                        The Leadership Institute
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="main-menu-item has-sub-nav">
                      <Link
                        href="https://www.majidalfuttaim.com/en/media-centre"
                        target="_self"
                        data-target="second-level-nav-target-6"
                      >
                        Media Centre
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
              <div id="mobile-links"></div>
            </div>
            <div className="bottom-mobile-navigation">
              <div className="mobile-bottom-menu">
                <div className="section-container">
                  <div className="text-resizer">
                    <span className="rectangle"></span>
                  </div>
                  <div className="language language-switcher mobile-language-wrapper"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="second-mobile-navigation mobile-navigation mobile">
          <div className="second-level-navigation" id="second-level-nav-target-1">
            <div className="section-container">
              <div className="mobile-menu-header">
                <div className="back-menu" data-level="main-level-navigation">
                  <span>Back</span>
                </div>
                <div className="close-menu">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    className="svg-image close-btn-black replaced-svg"
                  >
                    <path
                      fill="#8A1538"
                      fillRule="evenodd"
                      d="M12.207 10.96L22.46 21.213l-.707.707L11.5 11.667 1.247 21.92l-.707-.707L10.793 10.96.54.707 1.247 0 11.5 10.253 21.753 0l.707.707L12.207 10.96z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="category-name">
                <h3>Who we are</h3>
              </div>
              <div className="navigation">
                <ul>
                  <li>
                    <div className="main-menu-item">
                      <Link
                        href="https://www.majidalfuttaim.com/en/who-we-are/overview"
                        aria-label="Who we are Overview"
                        target="_self"
                      >
                        Overview
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="main-menu-item">
                      <Link
                        href="https://www.majidalfuttaim.com/en/who-we-are#visionvalues"
                        aria-label="Who we are Vision &amp; Values"
                        target="_self"
                      >
                        Vision &amp; Values
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="main-menu-item">
                      <Link
                        href="https://www.majidalfuttaim.com/en/who-we-are/our-journey"
                        aria-label="Who we are Our Journey"
                        target="_self"
                      >
                        Our Journey
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="main-menu-item has-sub-nav">
                      <Link
                        href="https://www.majidalfuttaim.com/en/who-we-are/sustainability-and-esg"
                        target="_self"
                        data-target="third-level-nav-target-1-1"
                      >
                        Sustainability &amp; ESG
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="main-menu-item">
                      <Link
                        href="https://www.majidalfuttaim.com/en/who-we-are/corporate-compliance"
                        aria-label="Who we are Corporate Compliance"
                        target="_self"
                      >
                        Corporate Compliance
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="main-menu-item">
                      <Link
                        href="https://www.majidalfuttaim.com/en/who-we-are/board-of-directors"
                        aria-label="Who we are Board of Directors"
                        target="_self"
                      >
                        Board of Directors
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="main-menu-item">
                      <Link
                        href="https://www.majidalfuttaim.com/en/who-we-are/management"
                        aria-label="Who we are Management"
                        target="_self"
                      >
                        Management
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bottom-mobile-navigation">
              <div className="mobile-bottom-menu">
                <div className="section-container">
                  <div className="text-resizer">
                    <span className="rectangle"></span>
                  </div>
                  <div className="language language-switcher mobile-language-wrapper"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="second-mobile-navigation mobile-navigation mobile">
          <div className="second-level-navigation" id="second-level-nav-target-2">
            <div className="section-container">
              <div className="mobile-menu-header">
                <div className="back-menu" data-level="main-level-navigation">
                  <span>Back</span>
                </div>
                <div className="close-menu">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    className="svg-image close-btn-black replaced-svg"
                  >
                    <path
                      fill="#8A1538"
                      fillRule="evenodd"
                      d="M12.207 10.96L22.46 21.213l-.707.707L11.5 11.667 1.247 21.92l-.707-.707L10.793 10.96.54.707 1.247 0 11.5 10.253 21.753 0l.707.707L12.207 10.96z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="category-name">
                <h3>What We Do</h3>
              </div>
              <div className="navigation">
                <ul>
                  <li>
                    <div className="main-menu-item">
                      <Link
                        href="https://www.majidalfuttaim.com/en/what-we-do/overview"
                        aria-label="
                                 What We Do 
                                 Overview"
                        target="_self"
                      >
                        Overview
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="main-menu-item">
                      <Link
                        href="https://www.majidalfuttaim.com/en/what-we-do/unique-experiences"
                        aria-label="
                                 What We Do Unique Experiences"
                        target="_self"
                      >
                        Unique Experiences
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="main-menu-item has-sub-nav">
                      <Link
                        href="https://www.majidalfuttaim.com/en/what-we-do/our-industries"
                        target="_self"
                        data-target="third-level-nav-target-2-1"
                      >
                        Our Industries
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="main-menu-item">
                      <Link
                        href="https://www.majidalfuttaim.com/en/what-we-do/brand-family"
                        aria-label="
                                 What We Do 
                                 Our Brand Family"
                        target="_self"
                      >
                        Our Brand Family
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="main-menu-item">
                      <Link
                        href="https://www.majidalfuttaim.com/en/what-we-do/partner-with-us"
                        aria-label="
                                 What We Do Partner with us"
                        target="_self"
                      >
                        Partner with us
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bottom-mobile-navigation">
              <div className="mobile-bottom-menu">
                <div className="section-container">
                  <div className="text-resizer">
                    <span className="rectangle"></span>
                  </div>
                  <div className="language language-switcher mobile-language-wrapper"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="second-mobile-navigation mobile-navigation mobile">
          <div className="second-level-navigation" id="second-level-nav-target-3">
            <div className="section-container">
              <div className="mobile-menu-header">
                <div className="back-menu" data-level="main-level-navigation">
                  <span>Back</span>
                </div>
                <div className="close-menu">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    className="svg-image close-btn-black replaced-svg"
                  >
                    <path
                      fill="#8A1538"
                      fillRule="evenodd"
                      d="M12.207 10.96L22.46 21.213l-.707.707L11.5 11.667 1.247 21.92l-.707-.707L10.793 10.96.54.707 1.247 0 11.5 10.253 21.753 0l.707.707L12.207 10.96z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="category-name">
                <h3>People &amp; Careers</h3>
              </div>
              <div className="navigation">
                <ul>
                  <li>
                    <div className="main-menu-item">
                      <Link
                        href="https://careers.majidalfuttaim.com/global/en/home?utm_campaign=Careers&amp;utm_medium=referal&amp;utm_source=corporate_website"
                        aria-label="
                                 People &amp; Careers Careers Portal"
                        target="_blank"
                      >
                        Careers Portal
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bottom-mobile-navigation">
              <div className="mobile-bottom-menu">
                <div className="section-container">
                  <div className="text-resizer">
                    <span className="rectangle"></span>
                  </div>
                  <div className="language language-switcher mobile-language-wrapper"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="second-mobile-navigation mobile-navigation mobile">
          <div className="second-level-navigation" id="second-level-nav-target-4">
            <div className="section-container">
              <div className="mobile-menu-header">
                <div className="back-menu" data-level="main-level-navigation">
                  <span>Back</span>
                </div>
                <div className="close-menu">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    className="svg-image close-btn-black replaced-svg"
                  >
                    <path
                      fill="#8A1538"
                      fillRule="evenodd"
                      d="M12.207 10.96L22.46 21.213l-.707.707L11.5 11.667 1.247 21.92l-.707-.707L10.793 10.96.54.707 1.247 0 11.5 10.253 21.753 0l.707.707L12.207 10.96z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="category-name">
                <h3>Investor Relations</h3>
              </div>
              <div className="navigation">
                <ul>
                  <li>
                    <div className="main-menu-item">
                      <Link
                        href="https://www.majidalfuttaim.com/en/investor-relations/overview"
                        aria-label="
                                 Investor Relations
                                 Overview"
                        target="_self"
                      >
                        Overview
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="main-menu-item">
                      <Link
                        href="https://www.majidalfuttaim.com/en/investor-relations/bond-and-credit-rating"
                        aria-label="
                                 Investor Relations Bonds &amp; Credit Rating"
                        target="_self"
                      >
                        Bonds &amp; Credit Rating
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="main-menu-item">
                      <Link
                        href="https://www.majidalfuttaim.com/en/investor-relations/funding-strategy"
                        aria-label="
                                 Investor Relations Funding Strategy"
                        target="_self"
                      >
                        Funding Strategy
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="main-menu-item">
                      <Link
                        href="https://www.majidalfuttaim.com/en/investor-relations/financial-summary"
                        aria-label="
                                 Investor Relations Financial Summary"
                        target="_self"
                      >
                        Financial Summary
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="main-menu-item">
                      <Link
                        href="https://www.majidalfuttaim.com/en/investor-relations#pressreleases"
                        aria-label="
                                 Investor Relations Announcements &amp; Updates"
                        target="_self"
                      >
                        Announcements &amp; Updates
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="main-menu-item">
                      <Link
                        href="https://www.majidalfuttaim.com/en/investor-relations#investor-relations-contacts"
                        aria-label="
                                 Investor Relations 
                                 Investor Relations Contacts"
                        target="_self"
                      >
                        Investor Relations Contacts
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="main-menu-item">
                      <Link
                        href="https://www.majidalfuttaim.com/en/investor-relations/tax-strategy"
                        aria-label="
                                 Investor Relations Tax Strategy"
                        target="_self"
                      >
                        Tax Strategy
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bottom-mobile-navigation">
              <div className="mobile-bottom-menu">
                <div className="section-container">
                  <div className="text-resizer">
                    <span className="rectangle"></span>
                  </div>
                  <div className="language language-switcher mobile-language-wrapper"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="second-mobile-navigation mobile-navigation mobile">
          <div className="second-level-navigation" id="second-level-nav-target-5">
            <div className="section-container">
              <div className="mobile-menu-header">
                <div className="back-menu" data-level="main-level-navigation">
                  <span>Back</span>
                </div>
                <div className="close-menu">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    className="svg-image close-btn-black replaced-svg"
                  >
                    <path
                      fill="#8A1538"
                      fillRule="evenodd"
                      d="M12.207 10.96L22.46 21.213l-.707.707L11.5 11.667 1.247 21.92l-.707-.707L10.793 10.96.54.707 1.247 0 11.5 10.253 21.753 0l.707.707L12.207 10.96z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="category-name">
                <h3>The Leadership Institute</h3>
              </div>
              <div className="navigation">
                <ul></ul>
              </div>
            </div>
            <div className="bottom-mobile-navigation">
              <div className="mobile-bottom-menu">
                <div className="section-container">
                  <div className="text-resizer">
                    <span className="rectangle"></span>
                  </div>
                  <div className="language language-switcher mobile-language-wrapper"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="second-mobile-navigation mobile-navigation mobile">
          <div className="second-level-navigation" id="second-level-nav-target-6">
            <div className="section-container">
              <div className="mobile-menu-header">
                <div className="back-menu" data-level="main-level-navigation">
                  <span>Back</span>
                </div>
                <div className="close-menu">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    className="svg-image close-btn-black replaced-svg"
                  >
                    <path
                      fill="#8A1538"
                      fillRule="evenodd"
                      d="M12.207 10.96L22.46 21.213l-.707.707L11.5 11.667 1.247 21.92l-.707-.707L10.793 10.96.54.707 1.247 0 11.5 10.253 21.753 0l.707.707L12.207 10.96z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="category-name">
                <h3>Media Centre</h3>
              </div>
              <div className="navigation">
                <ul>
                  <li>
                    <div className="main-menu-item">
                      <Link
                        href="https://www.majidalfuttaim.com/en/media-centre/overview"
                        aria-label="
                                 Media Centre 
                                 Overview"
                        target="_self"
                      >
                        Overview
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="main-menu-item">
                      <Link
                        href="https://www.majidalfuttaim.com/en/media-centre/press-releases"
                        aria-label="
                                 Media Centre Press Releases"
                        target="_self"
                      >
                        Press Releases
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="main-menu-item">
                      <Link
                        href="https://www.majidalfuttaim.com/en/media-centre/blog-posts"
                        aria-label="
                                 Media Centre Blog Posts"
                        target="_self"
                      >
                        Blog Posts
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="main-menu-item">
                      <Link
                        href="https://www.majidalfuttaim.com/en/media-centre/media-kits-downloads"
                        aria-label="
                                 Media Centre Media Kits &amp; Downloads"
                        target="_self"
                      >
                        Media Kits &amp; Downloads
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="main-menu-item">
                      <Link
                        href="https://www.majidalfuttaim.com/en/media-centre#media-contacts"
                        aria-label="
                                 Media Centre 
                                 Media Relations Contact"
                        target="_self"
                      >
                        Media Relations Contact
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="main-menu-item">
                      <Link
                        href="https://www.majidalfuttaim.com/en/media-centre/trends-and-insights"
                        aria-label="
                                 Media Centre Reports"
                        target="_self"
                      >
                        Reports
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bottom-mobile-navigation">
              <div className="mobile-bottom-menu">
                <div className="section-container">
                  <div className="text-resizer">
                    <span className="rectangle"></span>
                  </div>
                  <div className="language language-switcher mobile-language-wrapper"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="third-mobile-navigation mobile-navigation mobile">
          <div className="third-level-navigation" id="third-level-nav-target-1-1">
            <div className="section-container">
              <div className="mobile-menu-header">
                <div className="back-menu">
                  <span>Back</span>
                </div>
                <div className="close-menu">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    className="svg-image close-btn-black replaced-svg"
                  >
                    <path
                      fill="#8A1538"
                      fillRule="evenodd"
                      d="M12.207 10.96L22.46 21.213l-.707.707L11.5 11.667 1.247 21.92l-.707-.707L10.793 10.96.54.707 1.247 0 11.5 10.253 21.753 0l.707.707L12.207 10.96z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="category-name">
                <h3>Sustainability &amp; ESG</h3>
              </div>
              <div className="navigation">
                <ul>
                  <li>
                    <div className="main-menu-item">
                      <Link
                        href="https://www.majidalfuttaim.com/en/who-we-are/sustainability-and-esg/esg-overview"
                        aria-label="
                                 Sustainability &amp; ESG ESG Overview"
                        target="_self"
                      >
                        ESG Overview
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="main-menu-item">
                      <Link
                        href="https://www.majidalfuttaim.com/en/who-we-are/sustainability-and-esg/sustainability"
                        aria-label="
                                 Sustainability &amp; ESG Sustainability"
                        target="_self"
                      >
                        Sustainability
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="main-menu-item">
                      <Link
                        href="https://www.majidalfuttaim.com/en/who-we-are/sustainability-and-esg/impact-stories"
                        aria-label="
                                 Sustainability &amp; ESG Impact Stories"
                        target="_self"
                      >
                        Impact Stories
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="main-menu-item">
                      <Link
                        href="https://www.majidalfuttaim.com/en/who-we-are/sustainability-and-esg/reports"
                        aria-label="
                                 Sustainability &amp; ESG Reports"
                        target="_self"
                      >
                        Reports
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bottom-mobile-navigation">
              <div className="mobile-bottom-menu">
                <div className="section-container">
                  <div className="text-resizer">
                    <span className="rectangle"></span>
                  </div>
                  <div className="language language-switcher mobile-language-wrapper"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="third-mobile-navigation mobile-navigation mobile">
          <div className="third-level-navigation" id="third-level-nav-target-2-1">
            <div className="section-container">
              <div className="mobile-menu-header">
                <div className="back-menu">
                  <span>Back</span>
                </div>
                <div className="close-menu">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    className="svg-image close-btn-black replaced-svg"
                  >
                    <path
                      fill="#8A1538"
                      fillRule="evenodd"
                      d="M12.207 10.96L22.46 21.213l-.707.707L11.5 11.667 1.247 21.92l-.707-.707L10.793 10.96.54.707 1.247 0 11.5 10.253 21.753 0l.707.707L12.207 10.96z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="category-name">
                <h3>Our Industries</h3>
              </div>
              <div className="navigation">
                <ul>
                  <li>
                    <div className="main-menu-item">
                      <Link
                        href="https://www.majidalfuttaim.com/en/what-we-do/our-industries/overview"
                        aria-label="
                                 Our Industries Overview"
                        target="_self"
                      >
                        Overview
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="main-menu-item">
                      <Link
                        href="https://www.majidalfuttaim.com/en/what-we-do/our-industries/industry/shopping-malls"
                        aria-label="
                                 Our Industries Shopping Malls"
                        target="_self"
                      >
                        Shopping Malls
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="main-menu-item">
                      <Link
                        href="https://communities.majidalfuttaim.com/en/index.html"
                        aria-label="
                                 Our Industries Communities"
                        target="_self"
                      >
                        Communities
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="main-menu-item">
                      <Link
                        href="https://www.majidalfuttaim.com/en/what-we-do/our-industries/industry/hotels"
                        aria-label="
                                 Our Industries Hotels"
                        target="_self"
                      >
                        Hotels
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="main-menu-item">
                      <Link
                        href="https://www.majidalfuttaim.com/en/what-we-do/our-industries/industry/leisure-entertainment-and-cinemas"
                        aria-label="
                                 Our Industries Entertainment"
                        target="_self"
                      >
                        Entertainment
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="main-menu-item">
                      <Link
                        href="https://www.majidalfuttaim.com/en/what-we-do/our-industries/industry/lifestyle"
                        aria-label="
                                 Our Industries Lifestyle"
                        target="_self"
                      >
                        Lifestyle
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="main-menu-item">
                      <Link
                        href="https://www.majidalfuttaim.com/en/what-we-do/our-industries/industry/retail"
                        aria-label="
                                 Our Industries Retail"
                        target="_self"
                      >
                        Retail
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="main-menu-item">
                      <Link
                        href="https://www.majidalfuttaim.com/en/what-we-do/our-industries/industry/project-management"
                        aria-label="
                                 Our Industries Project Management"
                        target="_self"
                      >
                        Project Management
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="main-menu-item">
                      <Link
                        href="https://www.majidalfuttaim.com/en/what-we-do/our-industries/industry/energy-and-facilities-management"
                        aria-label="
                                 Our Industries Energy &amp; Facilities Management"
                        target="_self"
                      >
                        Energy &amp; Facilities Management
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bottom-mobile-navigation">
              <div className="mobile-bottom-menu">
                <div className="section-container">
                  <div className="text-resizer">
                    <span className="rectangle"></span>
                  </div>
                  <div className="language language-switcher mobile-language-wrapper"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav role="navigation">
          <div className="top-header-menu">
            <div className="section-container">
              <div className="top-header-links">
                <ul
                  id="MainTop_TE21B85AC002_Col00"
                  className="sf_colsIn"
                  data-sf-element="top-header-links"
                  data-placeholder-label="top-header-links"
                >
                  <li
                    id="MainTop_TE21B85AC003_Col00"
                    className="sf_colsIn"
                    data-sf-element="Li"
                    data-placeholder-label="Li"
                  >
                    <img
                      loading="lazy"
                      className="mw-100 h-auto header-search top-bar"
                      src="https://www.majidalfuttaim.com/images/default-source/icons/mafsearch.svg?sfvrsn=9bde758e_1"
                      title="MAFsearch"
                      alt="MAFsearch"
                    />
                  </li>
                  <li>
                    <Link
                      href="https://www.majidalfuttaim.com/en/contact-us"
                      target="_self"
                      className="menu-item "
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <span id="increaseFont" className="large-text">
                      A
                    </span>
                    <span id="decreaseFont" className="small-text">
                      A
                    </span>
                    <span id="contrast" className="rectangle"></span>
                  </li>
                  <li>
                    <Link
                      href=""
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = '/ar';
                      }}
                      className="switcher-anchor"
                    >
                      <span>العربية</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="section-container">
            <div className="row">
              <div className="hamburger">
                <div className="menu-icon">
                  <span></span>
                </div>
              </div>
              <div
                id="MainTop_TE21B85AC002_Col01"
                className="logo sf_colsIn"
                data-sf-element="logo"
                data-placeholder-label="logo"
              >
                <Link href="https://www.majidalfuttaim.com/en" title="Open image in original size">
                  <img
                    loading="lazy"
                    className="mw-100 h-auto"
                    src="https://www.majidalfuttaim.com/images/default-source/logos/logo.png?sfvrsn=dcbb0c0d_5"
                    title="logo"
                    alt="Logo"
                  />
                </Link>
              </div>
              <div
                id="MainTop_TE21B85AC002_Col02"
                className="header-nav-menu sf_colsIn"
                data-sf-element="header-nav-menu"
                data-placeholder-label="header-nav-menu"
              >
                <nav>
                  <ul className="nav-list">
                    <li>
                      <div className="header-menu">
                        <Link
                          href="https://www.majidalfuttaim.com/en/who-we-are"
                          target="_self"
                          className="menu-item "
                        >
                          Who we are
                        </Link>
                        <div className="menu-sublist-dropdown">
                          <div className="sub-nav-level-2">
                            <ul className="menu-list-level-2">
                              <li className="">
                                <div className="menu-item ">
                                  <Link
                                    href="https://www.majidalfuttaim.com/en/who-we-are/overview"
                                    target="_self"
                                    className="sub-category"
                                    aria-label="Overview of Who we are"
                                  >
                                    Overview
                                  </Link>
                                </div>
                              </li>
                              <li className="">
                                <div className="menu-item ">
                                  <Link
                                    href="https://www.majidalfuttaim.com/en/who-we-are#visionvalues"
                                    target="_self"
                                    className="sub-category"
                                  >
                                    Vision &amp; Values
                                  </Link>
                                </div>
                              </li>
                              <li className="">
                                <div className="menu-item ">
                                  <Link
                                    href="https://www.majidalfuttaim.com/en/who-we-are/our-journey"
                                    target="_self"
                                    className="sub-category"
                                  >
                                    Our Journey
                                  </Link>
                                </div>
                              </li>
                              <li className="">
                                <div className="menu-item has-sub-menu">
                                  <Link
                                    href="https://www.majidalfuttaim.com/en/who-we-are/sustainability-and-esg"
                                    target="_self"
                                    className="sub-category"
                                  >
                                    Sustainability &amp; ESG
                                  </Link>
                                  <div className="menu-level-3">
                                    <ul>
                                      <li>
                                        <Link
                                          href="https://www.majidalfuttaim.com/en/who-we-are/sustainability-and-esg/esg-overview"
                                          target="_self"
                                          className="third-level-menu-item"
                                        >
                                          ESG Overview
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          href="https://www.majidalfuttaim.com/en/who-we-are/sustainability-and-esg/sustainability"
                                          target="_self"
                                          className="third-level-menu-item"
                                        >
                                          Sustainability
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          href="https://www.majidalfuttaim.com/en/who-we-are/sustainability-and-esg/impact-stories"
                                          target="_self"
                                          className="third-level-menu-item"
                                        >
                                          Impact Stories
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          href="https://www.majidalfuttaim.com/en/who-we-are/sustainability-and-esg/reports"
                                          target="_self"
                                          className="third-level-menu-item"
                                        >
                                          Reports
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              <li className="">
                                <div className="menu-item ">
                                  <Link
                                    href="https://www.majidalfuttaim.com/en/who-we-are/corporate-compliance"
                                    target="_self"
                                    className="sub-category"
                                  >
                                    Corporate Compliance
                                  </Link>
                                </div>
                              </li>
                              <li className="">
                                <div className="menu-item ">
                                  <Link
                                    href="https://www.majidalfuttaim.com/en/who-we-are/board-of-directors"
                                    target="_self"
                                    className="sub-category"
                                  >
                                    Board of Directors
                                  </Link>
                                </div>
                              </li>
                              <li className="">
                                <div className="menu-item ">
                                  <Link
                                    href="https://www.majidalfuttaim.com/en/who-we-are/management"
                                    target="_self"
                                    className="sub-category"
                                  >
                                    Management
                                  </Link>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="header-menu">
                        <Link
                          href="https://www.majidalfuttaim.com/en/what-we-do"
                          target="_self"
                          className="menu-item active"
                        >
                          What We Do
                        </Link>
                        <div className="menu-sublist-dropdown">
                          <div className="sub-nav-level-2">
                            <ul className="menu-list-level-2">
                              <li className="">
                                <div className="menu-item ">
                                  <Link
                                    href="https://www.majidalfuttaim.com/en/what-we-do/overview"
                                    target="_self"
                                    className="sub-category"
                                    aria-label="Overview of 
                                                      What We Do"
                                  >
                                    Overview
                                  </Link>
                                </div>
                              </li>
                              <li className="">
                                <div className="menu-item ">
                                  <Link
                                    href="https://www.majidalfuttaim.com/en/what-we-do/unique-experiences"
                                    target="_self"
                                    className="sub-category"
                                  >
                                    Unique Experiences
                                  </Link>
                                </div>
                              </li>
                              <li className="">
                                <div className="menu-item has-sub-menu">
                                  <Link
                                    href="https://www.majidalfuttaim.com/en/what-we-do/our-industries"
                                    target="_self"
                                    className="sub-category"
                                  >
                                    Our Industries
                                  </Link>
                                  <div className="menu-level-3">
                                    <ul>
                                      <li>
                                        <Link
                                          href="https://www.majidalfuttaim.com/en/what-we-do/our-industries/overview"
                                          target="_self"
                                          className="third-level-menu-item"
                                        >
                                          Overview
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          href="https://www.majidalfuttaim.com/en/what-we-do/our-industries/industry/shopping-malls"
                                          target="_self"
                                          className="third-level-menu-item"
                                        >
                                          Shopping Malls
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          href="https://communities.majidalfuttaim.com/en/index.html"
                                          target="_self"
                                          className="third-level-menu-item"
                                        >
                                          Communities
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          href="https://www.majidalfuttaim.com/en/what-we-do/our-industries/industry/hotels"
                                          target="_self"
                                          className="third-level-menu-item"
                                        >
                                          Hotels
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          href="https://www.majidalfuttaim.com/en/what-we-do/our-industries/industry/leisure-entertainment-and-cinemas"
                                          target="_self"
                                          className="third-level-menu-item"
                                        >
                                          Entertainment
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          href="https://www.majidalfuttaim.com/en/what-we-do/our-industries/industry/lifestyle"
                                          target="_self"
                                          className="third-level-menu-item"
                                        >
                                          Lifestyle
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          href="https://www.majidalfuttaim.com/en/what-we-do/our-industries/industry/retail"
                                          target="_self"
                                          className="third-level-menu-item"
                                        >
                                          Retail
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          href="https://www.majidalfuttaim.com/en/what-we-do/our-industries/industry/project-management"
                                          target="_self"
                                          className="third-level-menu-item"
                                        >
                                          Project Management
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          href="https://www.majidalfuttaim.com/en/what-we-do/our-industries/industry/energy-and-facilities-management"
                                          target="_self"
                                          className="third-level-menu-item"
                                        >
                                          Energy &amp; Facilities Management
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              <li className="">
                                <div className="menu-item ">
                                  <Link
                                    href="https://www.majidalfuttaim.com/en/what-we-do/brand-family"
                                    target="_self"
                                    className="sub-category"
                                  >
                                    Our Brand Family
                                  </Link>
                                </div>
                              </li>
                              <li className="">
                                <div className="menu-item ">
                                  <Link
                                    href="https://www.majidalfuttaim.com/en/what-we-do/partner-with-us"
                                    target="_self"
                                    className="sub-category"
                                  >
                                    Partner with us
                                  </Link>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="header-menu">
                        <Link
                          href="https://www.majidalfuttaim.com/en/people-and-careers"
                          target="_self"
                          className="menu-item "
                        >
                          People &amp; Careers
                        </Link>
                        <div className="menu-sublist-dropdown">
                          <div className="sub-nav-level-2">
                            <ul className="menu-list-level-2">
                              <li className="">
                                <div className="menu-item ">
                                  <Link
                                    href="https://careers.majidalfuttaim.com/global/en/home?utm_campaign=Careers&amp;utm_medium=referal&amp;utm_source=corporate_website"
                                    target="_blank"
                                    className="sub-category"
                                    aria-label="Overview of 
                                                      People &amp; Careers"
                                  >
                                    Careers Portal
                                  </Link>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="header-menu">
                        <Link
                          href="https://www.majidalfuttaim.com/en/investor-relations"
                          target="_self"
                          className="menu-item "
                        >
                          Investor Relations
                        </Link>
                        <div className="menu-sublist-dropdown">
                          <div className="sub-nav-level-2">
                            <ul className="menu-list-level-2">
                              <li className="">
                                <div className="menu-item ">
                                  <Link
                                    href="https://www.majidalfuttaim.com/en/investor-relations/overview"
                                    target="_self"
                                    className="sub-category"
                                    aria-label="Overview of 
                                                      Investor Relations"
                                  >
                                    Overview
                                  </Link>
                                </div>
                              </li>
                              <li className="">
                                <div className="menu-item ">
                                  <Link
                                    href="https://www.majidalfuttaim.com/en/investor-relations/bond-and-credit-rating"
                                    target="_self"
                                    className="sub-category"
                                  >
                                    Bonds &amp; Credit Rating
                                  </Link>
                                </div>
                              </li>
                              <li className="">
                                <div className="menu-item ">
                                  <Link
                                    href="https://www.majidalfuttaim.com/en/investor-relations/funding-strategy"
                                    target="_self"
                                    className="sub-category"
                                  >
                                    Funding Strategy
                                  </Link>
                                </div>
                              </li>
                              <li className="">
                                <div className="menu-item ">
                                  <Link
                                    href="https://www.majidalfuttaim.com/en/investor-relations/financial-summary"
                                    target="_self"
                                    className="sub-category"
                                  >
                                    Financial Summary
                                  </Link>
                                </div>
                              </li>
                              <li className="">
                                <div className="menu-item ">
                                  <Link
                                    href="https://www.majidalfuttaim.com/en/investor-relations#pressreleases"
                                    target="_self"
                                    className="sub-category"
                                  >
                                    Announcements &amp; Updates
                                  </Link>
                                </div>
                              </li>
                              <li className="">
                                <div className="menu-item ">
                                  <Link
                                    href="https://www.majidalfuttaim.com/en/investor-relations#investor-relations-contacts"
                                    target="_self"
                                    className="sub-category"
                                  >
                                    Investor Relations Contacts
                                  </Link>
                                </div>
                              </li>
                              <li className="">
                                <div className="menu-item ">
                                  <Link
                                    href="https://www.majidalfuttaim.com/en/investor-relations/tax-strategy"
                                    target="_self"
                                    className="sub-category"
                                  >
                                    Tax Strategy
                                  </Link>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="header-menu">
                        <Link
                          href="https://www.majidalfuttaim.com/en/the-leadership-institute"
                          target="_self"
                          className="menu-item "
                        >
                          The Leadership Institute
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="header-menu">
                        <Link
                          href="https://www.majidalfuttaim.com/en/media-centre"
                          target="_self"
                          className="menu-item "
                        >
                          Media Centre
                        </Link>
                        <div className="menu-sublist-dropdown">
                          <div className="sub-nav-level-2">
                            <ul className="menu-list-level-2">
                              <li className="">
                                <div className="menu-item ">
                                  <Link
                                    href="https://www.majidalfuttaim.com/en/media-centre/overview"
                                    target="_self"
                                    className="sub-category"
                                    aria-label="Overview of 
                                                      Media Centre"
                                  >
                                    Overview
                                  </Link>
                                </div>
                              </li>
                              <li className="">
                                <div className="menu-item ">
                                  <Link
                                    href="https://www.majidalfuttaim.com/en/media-centre/press-releases"
                                    target="_self"
                                    className="sub-category"
                                  >
                                    Press Releases
                                  </Link>
                                </div>
                              </li>
                              <li className="">
                                <div className="menu-item ">
                                  <Link
                                    href="https://www.majidalfuttaim.com/en/media-centre/blog-posts"
                                    target="_self"
                                    className="sub-category"
                                  >
                                    Blog Posts
                                  </Link>
                                </div>
                              </li>
                              <li className="">
                                <div className="menu-item ">
                                  <Link
                                    href="https://www.majidalfuttaim.com/en/media-centre/media-kits-downloads"
                                    target="_self"
                                    className="sub-category"
                                  >
                                    Media Kits &amp; Downloads
                                  </Link>
                                </div>
                              </li>
                              <li className="">
                                <div className="menu-item ">
                                  <Link
                                    href="https://www.majidalfuttaim.com/en/media-centre#media-contacts"
                                    target="_self"
                                    className="sub-category"
                                  >
                                    Media Relations Contact
                                  </Link>
                                </div>
                              </li>
                              <li className="">
                                <div className="menu-item ">
                                  <Link
                                    href="https://www.majidalfuttaim.com/en/media-centre/trends-and-insights"
                                    target="_self"
                                    className="sub-category"
                                  >
                                    Reports
                                  </Link>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header-search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="14px"
                  height="14px"
                  viewBox="0 0 14 14"
                  version="1.1"
                  className="svg-image replaced-svg"
                >
                  <title>06A6CC11-1010-4A1F-B4D5-BD351DD48199</title>
                  <desc>Created with sketchtool.</desc>
                  <defs></defs>
                  <g id="symbol" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="menu" transform="translate(-1096.000000, -8.000000)" fill="#FFFFFF">
                      <g id="search" transform="translate(1096.000000, 8.000000)">
                        <path
                          d="M11.8904944,8.1450934 L10.5717647,7.01325607 C10.6305956,6.72116629 10.6614749,6.41908973 10.6614749,6.10995795 C10.6614749,3.59093091 8.61519786,1.54454079 6.10200227,1.54454079 C3.58880668,1.54454079 1.54252967,3.5934857 1.54252967,6.10995795 C1.54252967,8.62643019 3.58880668,10.6753751 6.10200227,10.6753751 C7.62470653,10.6753751 8.97600729,9.92321753 9.8046285,8.77063642 L11.0385437,9.82967932 L11.2800295,9.53012648 L13.8989421,11.787321 L13.0780599,13.261263 L10.1469811,10.6803989 C9.0689207,11.6365833 7.65152647,12.2199159 6.10200227,12.2199159 C2.73869393,12.2199159 0,9.48065817 0,6.10995795 C0,2.73925772 2.73869393,0 6.10200227,0 C9.46531061,0 12.2040045,2.73925772 12.2040045,6.10995795 C12.2040045,6.9687137 12.0914861,7.58486 11.8904944,8.1450934 Z"
                          id="Combined-Shape"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
  return <HeaderDefaultComponent {...props} />;
};
