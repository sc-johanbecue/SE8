/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Link from 'next/link';
import { TextField, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import 'animate.css';

interface Fields {
  Header: TextField;
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
      <div className="">
        <div className="hero-banner">
          <div id="main" className="home-main">
            <div
              id="MainTop_T05BBE69B001_Col00"
              className="sub-main-banner sf_colsIn"
              data-sf-element="Content"
              data-placeholder-label="Content"
            >
              <div className="shadow">
                <div className="mobile-gradient"></div>
              </div>
              <div className="section-container breadcrumb-main">
                <div className="breadcrumbs">
                  <ul>
                    <li>
                      <Link href="https://www.majidalfuttaim.com/en">Home</Link>
                      <span>&nbsp;|&nbsp;</span>
                    </li>
                    <li>
                      <Link href="https://www.majidalfuttaim.com/en/what-we-do">What We Do</Link>
                      <span>&nbsp;|&nbsp;</span>
                    </li>
                    <li>
                      <Link href="https://www.majidalfuttaim.com/en/what-we-do/our-industries">
                        Our Industries
                      </Link>
                      <span>&nbsp;|&nbsp;</span>
                    </li>
                    <li>
                      <span className="active">
                        <strong>Lifestyle</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <script type="application/ld+json">
                    {`
                        {
                        "@context": "https://schema.org",
                          "@type": "BreadcrumbList",
                          "itemListElement": [
                                     [{"@type":"ListItem","position":"1","name":"Home","item":"https://www.majidalfuttaim.com/en"},{"@type":"ListItem","position":"2","name":"\r\nWhat We Do","item":"https://www.majidalfuttaim.com/en/what-we-do"},{"@type":"ListItem","position":"3","name":"\r\nOur Industries","item":"https://www.majidalfuttaim.com/en/what-we-do/our-industries"},{"@type":"ListItem","position":"4","name":"Lifestyle","item":"https://www.majidalfuttaim.com/en/what-we-do/our-industries/industry/lifestyle"}]
                          ]
                        }
                          `}
                  </script> */}
              <div
                role="banner"
                className="main-slide
                        section-to-scroll
                        sub-inner-banner"
                data-color="dark"
                id=""
                data-section-name=""
              >
                <div
                  className="banner-image image pick-radial-gradient-banner "
                  data-cinemagraphvid=""
                  data-cinemagraphimg=""
                  data-gradient-desktop-top="70%"
                  data-gradient-desktop-bottom="50%"
                  data-gradient-mobile-top="60%"
                  data-gradient-mobile-bottom="60%"
                  data-gradient-mobile-center="50%"
                >
                  <div className="b-img pick-hero-gradient">
                    <picture>
                      <source
                        media="(max-width: 767px)"
                        srcSet="https://www.majidalfuttaim.com/images/default-source/banners/whowearecreatingimpactcopy-(1).jpg?sfvrsn=229e4c2f_4"
                      />
                      <img
                        loading="lazy"
                        src="https://www.majidalfuttaim.com/images/default-source/banners/brandfashion.jpg?sfvrsn=521d5b41_4"
                        alt="brandfashion"
                      />
                    </picture>
                  </div>
                  <div className="banner-content row">
                    <div className="col-md-7 col-xs-12 padding0 ">
                      <h1>
                        <Text field={props.fields.Header} />
                      </h1>
                      <p className="sub-content">
                        <Text field={props.fields.Text} />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="scroll-indicator">
            <span className="arrow"></span>
          </div>
        </div>
      </div>
    );
  }
  return <HeaderDefaultComponent {...props} />;
};
