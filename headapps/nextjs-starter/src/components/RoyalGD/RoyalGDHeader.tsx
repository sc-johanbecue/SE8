import React from 'react';
import { TextField } from '@sitecore-jss/sitecore-jss-nextjs';

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
  const id = props.params.RenderingIdentifier;

  return (
    <>
      <div
        key={id ? id : undefined}
        id={id ? id : undefined}
        className={`component row row--trans expanded ${props.params.styles}`}
      >
        <div className="row">
          <div className="columns small-12">
            <div className="float-left">
              <div id="phsearch_0_pZoeken" className="search">
                <i className="icon icon-search"></i>
                <input
                  name="phsearch_0$search_keyword"
                  type="text"
                  id="phsearch_0_search_keyword"
                  className="searchBox"
                  autoComplete="off"
                  placeholder="Search..."
                />
                <input
                  type="submit"
                  name="phsearch_0$lbZoek"
                  value=""
                  id="phsearch_0_lbZoek"
                  className="searchButton"
                />
              </div>
            </div>
            <div className="float-right">
              <ul className="list-inline social-media">
                <li>
                  <a
                    href="https://www.facebook.com/GDDeventer"
                    className="icon icon-inverted icon-facebook"
                    target="_blank"
                  >
                    &nbsp;
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/397905?trk=companies_home_ycp_logo_gd-de-gezondheidsdienst-voor-dieren-"
                    className="icon icon-inverted icon-linkedin"
                    target="_blank"
                  >
                    &nbsp;
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/GD_Deventer"
                    className="icon icon-inverted icon-twitter"
                    target="_blank"
                  >
                    &nbsp;
                  </a>
                </li>
              </ul>
              <ul className="list-inline language-switch">
                <li id="phlanguage_0_languageRepeater_LanguageLi_0" className="EN active">
                  <a id="phlanguage_0_languageRepeater_btnLang_0" href="#">
                    en
                  </a>
                </li>
                <li id="phlanguage_0_languageRepeater_LanguageLi_1" className="NL">
                  <a id="phlanguage_0_languageRepeater_btnLang_1" href="#">
                    nl
                  </a>
                </li>
              </ul>
              <div className="fontsize-switch show-for-large">
                <a data-open="fontSizeModal">
                  <i className="icon icon-resize"></i>
                </a>
              </div>
              <div className="reveal reveal--zoom" id="fontSizeModal" data-reveal>
                <h3>Zoomfunction</h3>
                <p>
                  Trouble reading the text? Almost all popular browsers allow you to control how big
                  websites are displayed.
                </p>
                <ul className="list zoom-descriptions">
                  <li>
                    <div className="zoom--win">Windows</div>
                    <div className="zoom--mac">Mac OS</div>
                    <div className="description"></div>
                  </li>
                  <li>
                    <div className="zoom--win">
                      <img src="https://www.gdanimalhealth.com/assets/images/zoomInWin.png" />
                    </div>
                    <div className="zoom--mac">
                      <img src="https://www.gdanimalhealth.com/assets/images/zoomInMac.png" />
                    </div>
                    <div className="description">Zoom in</div>
                  </li>
                  <li>
                    <div className="zoom--win">
                      <img src="https://www.gdanimalhealth.com/assets/images/zoomOutWin.png" />
                    </div>
                    <div className="zoom--mac">
                      <img src="https://www.gdanimalhealth.com/assets/images/zoomOutMac.png" />
                    </div>
                    <div className="description">Zoom out</div>
                  </li>
                  <li>
                    <div className="zoom--win">
                      <img src="https://www.gdanimalhealth.com/assets/images/zoom100Win.png" />
                    </div>
                    <div className="zoom--mac">
                      <img src="https://www.gdanimalhealth.com/assets/images/zoom100Mac.png" />
                    </div>
                    <div className="description">Zoom 100%</div>
                  </li>
                  <li className="zoom--scroll">
                    <div className="zoom--win">
                      <img src="https://www.gdanimalhealth.com/assets/images/zoomScrollWin.png" />
                    </div>
                    <div className="zoom--mac">
                      <img src="https://www.gdanimalhealth.com/assets/images/zoomScrollMac.png" />
                    </div>
                    <div className="description">Mouse wheel up / down</div>
                  </li>
                </ul>
                <button className="close-button" data-close aria-label="Close modal" type="button">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="columns small-12 large-6 slogan"></div>
        <div className="columns small-12 large-6 text-right share-this"></div>
      </div>
      <div className="row row--menu expanded">
        <div className="columns small-12">
          <button className="action action--open" aria-label="Open Menu">
            Menu
          </button>
          <nav id="ml-menu" className="main-menu" data-module="mainmenu">
            <button className="action action--close" aria-label="Close Menu">
              Sluiten
            </button>
            <div className="menu__wrap">
              <ul data-menu="main" className="menu__level level_0">
                <li className="menu__item menu__item--home">
                  <a id="HomeLink" className="menu__link" href="https://www.gdanimalhealth.com/">
                    <i className="icon icon-home"></i>
                    <span>Home</span>
                  </a>
                </li>
                <li className="menu__item">
                  <a
                    className="menu__link"
                    data-submenu="submenu-1"
                    href="https://www.gdanimalhealth.com/contract-research-organisation"
                  >
                    CRO
                  </a>
                </li>
                <li className="menu__item">
                  <a
                    className="menu__link"
                    data-submenu="submenu-2"
                    href="https://www.gdanimalhealth.com/GD-Diagnostics"
                  >
                    Diagnostics
                  </a>
                </li>
                <li className="menu__item">
                  <a className="menu__link" href="https://www.gdanimalhealth.com/PTS">
                    PTS
                  </a>
                </li>
                <li className="menu__item">
                  <a
                    className="menu__link"
                    data-submenu="submenu-3"
                    href="https://www.gdanimalhealth.com/Lab-services"
                  >
                    Lab services
                  </a>
                </li>
                <li className="menu__item">
                  <a
                    className="menu__link"
                    data-submenu="submenu-4"
                    href="https://www.gdanimalhealth.com/GD-Academy"
                  >
                    Academy
                  </a>
                </li>
                <li className="menu__item">
                  <a
                    className="menu__link"
                    data-submenu="submenu-6"
                    href="https://www.gdanimalhealth.com/About-us"
                  >
                    About us
                  </a>
                </li>
                <li className="menu__item">
                  <a
                    className="menu__link"
                    data-submenu="submenu-8"
                    href="https://www.gdanimalhealth.com/Forms"
                  >
                    Forms
                  </a>
                </li>
                <li className="menu__item">
                  <a
                    className="menu__link"
                    data-submenu="submenu-9"
                    href="https://www.gdanimalhealth.com/Contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <ul data-menu="submenu-1" className="menu__level level_1">
                <li className="menu__item">
                  <h3>
                    <a
                      className="menu__title"
                      href="https://www.gdanimalhealth.com/contract-research-organisation"
                    >
                      CRO
                    </a>
                  </h3>
                </li>
                <li className="menu__item"></li>
                <li className="menu__item">
                  <a
                    className="menu__link"
                    href="https://www.gdanimalhealth.com/contract-research-organisation/studies-poultry"
                  >
                    Studies poultry
                  </a>
                </li>
                <li className="menu__item">
                  <a
                    className="menu__link"
                    data-submenu="submenu-1-2"
                    href="https://www.gdanimalhealth.com/contract-research-organisation/studies-pigs"
                  >
                    Studies pigs
                  </a>
                </li>
                <li className="menu__item">
                  <a
                    className="menu__link"
                    data-submenu="submenu-1-3"
                    href="https://www.gdanimalhealth.com/contract-research-organisation/Research-into-animal-health"
                  >
                    Research
                  </a>
                </li>
                <li className="menu__item">
                  <a
                    className="menu__link"
                    data-submenu="submenu-1-4"
                    href="https://www.gdanimalhealth.com/contract-research-organisation/facilities"
                  >
                    Facilities
                  </a>
                </li>
              </ul>
              <ul data-menu="submenu-1-1" className="menu__level level_2">
                <li className="menu__item"></li>
                <li className="menu__item">Contract Research Organisation</li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item">Cattle studies</li>
                <li className="menu__item">Pig studies</li>
                <li className="menu__item">Poultry studies</li>
                <li className="menu__item">Our animal models</li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item">Research and Development</li>
                <li className="menu__item">Our studies and trials</li>
                <li className="menu__item">Stay Informed with our Update magazine & newsletter</li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item">Our areas of expertise</li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item">Contract research by our experts</li>
                <li className="menu__item">Discover our expertise</li>
              </ul>
              <ul data-menu="submenu-1-2" className="menu__level level_3">
                <li className="menu__item">
                  <h3>
                    <a
                      className="menu__title"
                      href="https://www.gdanimalhealth.com/contract-research-organisation/studies-pigs"
                    >
                      Studies pigs
                    </a>
                  </h3>
                </li>
                <li className="menu__item"></li>
              </ul>
              <ul data-menu="submenu-1-3" className="menu__level level_4">
                <li className="menu__item">
                  <h3>
                    <a
                      className="menu__title"
                      href="https://www.gdanimalhealth.com/contract-research-organisation/Research-into-animal-health"
                    >
                      Research
                    </a>
                  </h3>
                </li>
                <li className="menu__item"></li>
              </ul>
              <ul data-menu="submenu-1-4" className="menu__level level_5">
                <li className="menu__item">
                  <h3>
                    <a
                      className="menu__title"
                      href="https://www.gdanimalhealth.com/contract-research-organisation/facilities"
                    >
                      Facilities
                    </a>
                  </h3>
                </li>
                <li className="menu__item"></li>
              </ul>
              <ul data-menu="submenu-2" className="menu__level level_1">
                <li className="menu__item">
                  <h3>
                    <a className="menu__title" href="https://www.gdanimalhealth.com/GD-Diagnostics">
                      Diagnostics
                    </a>
                  </h3>
                </li>
                <li className="menu__item">
                  <a
                    className="menu__link"
                    data-submenu="submenu-2-1"
                    href="https://www.gdanimalhealth.com/GD-Diagnostics/Distributors"
                  >
                    Distributors
                  </a>
                </li>
              </ul>
              <ul data-menu="submenu-2-1" className="menu__level level_2">
                <li className="menu__item">
                  <h3>
                    <a
                      className="menu__title"
                      href="https://www.gdanimalhealth.com/GD-Diagnostics/Distributors"
                    >
                      Distributors
                    </a>
                  </h3>
                </li>
                <li className="menu__item"></li>
              </ul>
              <ul data-menu="submenu-3" className="menu__level level_1">
                <li className="menu__item">
                  <h3>
                    <a className="menu__title" href="https://www.gdanimalhealth.com/Lab-services">
                      Lab services
                    </a>
                  </h3>
                </li>
                <li className="menu__item"></li>
                <li className="menu__item">
                  <a
                    className="menu__link"
                    data-submenu="submenu-3-2"
                    href="https://www.gdanimalhealth.com/Lab-services/Lab-disciplines"
                  >
                    Lab disciplines
                  </a>
                </li>
                <li className="menu__item">
                  <a
                    className="menu__link"
                    data-submenu="submenu-3-3"
                    href="https://www.gdanimalhealth.com/Lab-services/Tests"
                  >
                    Tests
                  </a>
                </li>
                <li className="menu__item">
                  <a
                    className="menu__link"
                    data-submenu="submenu-3-4"
                    href="https://www.gdanimalhealth.com/Lab-services/Featured-tests-and-tools"
                  >
                    Featured tests & tools
                  </a>
                </li>
              </ul>
              <ul data-menu="submenu-3-1" className="menu__level level_2">
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item">More information</li>
              </ul>
              <ul data-menu="submenu-3-2" className="menu__level level_3">
                <li className="menu__item">
                  <h3>
                    <a
                      className="menu__title"
                      href="https://www.gdanimalhealth.com/Lab-services/Lab-disciplines"
                    >
                      Lab disciplines
                    </a>
                  </h3>
                </li>
                <li className="menu__item"></li>
              </ul>
              <ul data-menu="submenu-3-3" className="menu__level level_4">
                <li className="menu__item">
                  <h3>
                    <a
                      className="menu__title"
                      href="https://www.gdanimalhealth.com/Lab-services/Tests"
                    >
                      Tests
                    </a>
                  </h3>
                </li>
                <li className="menu__item"></li>
              </ul>
              <ul data-menu="submenu-3-4" className="menu__level level_5">
                <li className="menu__item">
                  <h3>
                    <a
                      className="menu__title"
                      href="https://www.gdanimalhealth.com/Lab-services/Featured-tests-and-tools"
                    >
                      Featured tests & tools
                    </a>
                  </h3>
                </li>
                <li className="menu__item"></li>
                <li className="menu__item">
                  <a
                    className="menu__link"
                    href="https://www.gdanimalhealth.com/Lab-services/Featured-tests-and-tools/Gumboro-rapid-test"
                  >
                    Gumboro rapid test
                  </a>
                </li>
              </ul>
              <ul data-menu="submenu-4" className="menu__level level_1">
                <li className="menu__item">
                  <h3>
                    <a className="menu__title" href="https://www.gdanimalhealth.com/GD-Academy">
                      Academy
                    </a>
                  </h3>
                </li>
                <li className="menu__item"></li>
              </ul>
              <ul data-menu="submenu-4-1" className="menu__level level_2">
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item">Get in touch</li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item">More information</li>
              </ul>
              <ul data-menu="submenu-5" className="menu__level level_1">
                <li className="menu__item">
                  <h3>
                    <a
                      className="menu__title"
                      href="https://www.gdanimalhealth.com/Disease-control"
                    >
                      Animal health
                    </a>
                  </h3>
                </li>
                <li className="menu__item"></li>
                <li className="menu__item">
                  <a
                    className="menu__link"
                    data-submenu="submenu-5-2"
                    href="https://www.gdanimalhealth.com/Disease-control/Animal-diseases"
                  >
                    Animal diseases
                  </a>
                </li>
                <li className="menu__item">
                  <a
                    className="menu__link"
                    data-submenu="submenu-5-3"
                    href="https://www.gdanimalhealth.com/Disease-control/MonitoringSurveillance"
                  >
                    Monitoring and surveillance
                  </a>
                </li>
              </ul>
              <ul data-menu="submenu-5-1" className="menu__level level_2">
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item">Disease control</li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
              </ul>
              <ul data-menu="submenu-5-2" className="menu__level level_3">
                <li className="menu__item">
                  <h3>
                    <a
                      className="menu__title"
                      href="https://www.gdanimalhealth.com/Disease-control/Animal-diseases"
                    >
                      Animal diseases
                    </a>
                  </h3>
                </li>
                <li className="menu__item"></li>
                <li className="menu__item">
                  <a
                    className="menu__link"
                    href="https://www.gdanimalhealth.com/Disease-control/Animal-diseases/Avian-Influenza"
                  >
                    Avian Influenza
                  </a>
                </li>
                <li className="menu__item">
                  <a
                    className="menu__link"
                    href="https://www.gdanimalhealth.com/Disease-control/Animal-diseases/IBR"
                  >
                    IBR
                  </a>
                </li>
              </ul>
              <ul data-menu="submenu-5-3" className="menu__level level_4">
                <li className="menu__item">
                  <h3>
                    <a
                      className="menu__title"
                      href="https://www.gdanimalhealth.com/Disease-control/MonitoringSurveillance"
                    >
                      Monitoring and surveillance
                    </a>
                  </h3>
                </li>
                <li className="menu__item"></li>
              </ul>
              <ul data-menu="submenu-6" className="menu__level level_1">
                <li className="menu__item">
                  <h3>
                    <a className="menu__title" href="https://www.gdanimalhealth.com/About-us">
                      About us
                    </a>
                  </h3>
                </li>
                <li className="menu__item"></li>
                <li className="menu__item">
                  <a
                    className="menu__link"
                    href="https://www.gdanimalhealth.com/About-us/What-we-do"
                  >
                    What we do
                  </a>
                </li>
                <li className="menu__item">
                  <a
                    className="menu__link"
                    data-submenu="submenu-6-3"
                    href="https://www.gdanimalhealth.com/About-us/Products-and-services"
                  >
                    Products & services
                  </a>
                </li>
                <li className="menu__item">
                  <a
                    className="menu__link"
                    data-submenu="submenu-6-4"
                    href="https://www.gdanimalhealth.com/About-us/Research-and-development"
                  >
                    Research and Development
                  </a>
                </li>
                <li className="menu__item">
                  <a
                    className="menu__link"
                    href="https://www.gdanimalhealth.com/About-us/Governance-Organisational-Structure"
                  >
                    Board
                  </a>
                </li>
                <li className="menu__item">
                  <a
                    className="menu__link"
                    href="https://www.gdanimalhealth.com/About-us/animal-health-experts"
                  >
                    Experts
                  </a>
                </li>
                <li className="menu__item">
                  <a
                    className="menu__link"
                    href="https://www.gdanimalhealth.com/About-us/Quality-standards"
                  >
                    Quality standards
                  </a>
                </li>
                <li className="menu__item">
                  <a className="menu__link" href="https://www.gdanimalhealth.com/About-us/Careers">
                    Careers
                  </a>
                </li>
              </ul>
              <ul data-menu="submenu-6-1" className="menu__level level_2">
                <li className="menu__item"></li>
                <li className="menu__item">What we do</li>
                <li className="menu__item">Corporate movie Royal GD</li>
                <li className="menu__item"></li>
                <li className="menu__item">More information</li>
              </ul>
              <ul data-menu="submenu-6-2" className="menu__level level_3">
                <li className="menu__item">
                  <h3>
                    <a
                      className="menu__title"
                      href="https://www.gdanimalhealth.com/About-us/What-we-do"
                    >
                      What we do
                    </a>
                  </h3>
                </li>
                <li className="menu__item"></li>
              </ul>
              <ul data-menu="submenu-6-3" className="menu__level level_4">
                <li className="menu__item">
                  <h3>
                    <a
                      className="menu__title"
                      href="https://www.gdanimalhealth.com/About-us/Products-and-services"
                    >
                      Products & services
                    </a>
                  </h3>
                </li>
                <li className="menu__item"></li>
              </ul>
              <ul data-menu="submenu-6-4" className="menu__level level_5">
                <li className="menu__item">
                  <h3>
                    <a
                      className="menu__title"
                      href="https://www.gdanimalhealth.com/About-us/Research-and-development"
                    >
                      Research and Development
                    </a>
                  </h3>
                </li>
                <li className="menu__item"></li>
              </ul>
              <ul data-menu="submenu-6-5" className="menu__level level_6">
                <li className="menu__item">
                  <h3>
                    <a
                      className="menu__title"
                      href="https://www.gdanimalhealth.com/About-us/Governance-Organisational-Structure"
                    >
                      Board
                    </a>
                  </h3>
                </li>
                <li className="menu__item"></li>
              </ul>
              <ul data-menu="submenu-6-6" className="menu__level level_7">
                <li className="menu__item">
                  <h3>
                    <a
                      className="menu__title"
                      href="https://www.gdanimalhealth.com/About-us/Quality-standards"
                    >
                      Quality standards
                    </a>
                  </h3>
                </li>
                <li className="menu__item"></li>
              </ul>
              <ul data-menu="submenu-7" className="menu__level level_1">
                <li className="menu__item">
                  <h3>
                    <a className="menu__title" href="https://www.gdanimalhealth.com/News-landing">
                      News
                    </a>
                  </h3>
                </li>
                <li className="menu__item"></li>
                <li className="menu__item">
                  <a
                    className="menu__link"
                    href="https://www.gdanimalhealth.com/News-landing/Upcoming-events"
                  >
                    Upcoming events
                  </a>
                </li>
                <li className="menu__item">
                  <a
                    className="menu__link"
                    data-submenu="submenu-7-3"
                    href="https://www.gdanimalhealth.com/News-landing/Update"
                  >
                    Update Online
                  </a>
                </li>
                <li className="menu__item">
                  <a
                    className="menu__link"
                    data-submenu="submenu-7-4"
                    href="https://www.gdanimalhealth.com/News-landing/IAHJ-magazine"
                  >
                    {' '}
                    IAHJ magazine
                  </a>
                </li>
                <li className="menu__item">
                  <a
                    className="menu__link"
                    href="https://www.gdanimalhealth.com/News-landing/Webinars"
                  >
                    Webinars
                  </a>
                </li>
                <li className="menu__item">
                  <a
                    className="menu__link"
                    data-submenu="submenu-7-6"
                    href="https://www.gdanimalhealth.com/News-landing/Scientific-posters"
                  >
                    Scientific posters
                  </a>
                </li>
              </ul>
              <ul data-menu="submenu-7-1" className="menu__level level_2">
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item">More information,</li>
              </ul>
              <ul data-menu="submenu-7-2" className="menu__level level_3">
                <li className="menu__item">
                  <h3>
                    <a
                      className="menu__title"
                      href="https://www.gdanimalhealth.com/News-landing/Upcoming-events"
                    >
                      Upcoming events
                    </a>
                  </h3>
                </li>
                <li className="menu__item"></li>
              </ul>
              <ul data-menu="submenu-7-3" className="menu__level level_4">
                <li className="menu__item">
                  <h3>
                    <a
                      className="menu__title"
                      href="https://www.gdanimalhealth.com/News-landing/Update"
                    >
                      Update Online
                    </a>
                  </h3>
                </li>
                <li className="menu__item"></li>
              </ul>
              <ul data-menu="submenu-7-4" className="menu__level level_5">
                <li className="menu__item">
                  <h3>
                    <a
                      className="menu__title"
                      href="https://www.gdanimalhealth.com/News-landing/IAHJ-magazine"
                    >
                      {' '}
                      IAHJ magazine
                    </a>
                  </h3>
                </li>
                <li className="menu__item"></li>
              </ul>
              <ul data-menu="submenu-7-5" className="menu__level level_6">
                <li className="menu__item">
                  <h3>
                    <a
                      className="menu__title"
                      href="https://www.gdanimalhealth.com/News-landing/Webinars"
                    >
                      Webinars
                    </a>
                  </h3>
                </li>
                <li className="menu__item"></li>
              </ul>
              <ul data-menu="submenu-7-6" className="menu__level level_7">
                <li className="menu__item">
                  <h3>
                    <a
                      className="menu__title"
                      href="https://www.gdanimalhealth.com/News-landing/Scientific-posters"
                    >
                      Scientific posters
                    </a>
                  </h3>
                </li>
                <li className="menu__item"></li>
              </ul>
              <ul data-menu="submenu-8" className="menu__level level_1">
                <li className="menu__item">
                  <h3>
                    <a className="menu__title" href="https://www.gdanimalhealth.com/Forms">
                      Forms
                    </a>
                  </h3>
                </li>
                <li className="menu__item"></li>
              </ul>
              <ul data-menu="submenu-8-1" className="menu__level level_2">
                <li className="menu__item"></li>
                <li className="menu__item">Submitting samples</li>
              </ul>
              <ul data-menu="submenu-9" className="menu__level level_1">
                <li className="menu__item">
                  <h3>
                    <a className="menu__title" href="https://www.gdanimalhealth.com/Contact">
                      Contact
                    </a>
                  </h3>
                </li>
                <li className="menu__item"></li>
              </ul>
              <ul data-menu="submenu-9-1" className="menu__level level_2">
                <li className="menu__item"></li>
                <li className="menu__item"></li>
                <li className="menu__item"></li>
              </ul>
            </div>
          </nav>
          <a id="hlLogo" className="logo" href="https://www.gdanimalhealth.com/">
            <img
              src="https://www.gdanimalhealth.com/assets/images/logo.png"
              width="120"
              alt="GD"
              title="GD"
            />
          </a>
        </div>
      </div>
    </>
  );

  return <HeaderDefaultComponent {...props} />;
};
