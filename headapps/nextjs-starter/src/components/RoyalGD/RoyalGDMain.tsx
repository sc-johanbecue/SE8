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
        className={`component row ${props.params.styles}`}
      >
        <div className="columns small-12">
          <nav className="sub-menu hide-for-large">
            <ul className="dropdown menu" data-dropdown-menu>
              <li className="">
                <a id="Submenu_CurrentLink" href="https://www.gdanimalhealth.com/"></a>
                <ul className="menu">
                  <li>
                    <a
                      id="Submenu_MenuItems_ChildLink_0"
                      href="https://www.gdanimalhealth.com/contract-research-organisation"
                    >
                      CRO
                    </a>
                  </li>
                  <li>
                    <a
                      id="Submenu_MenuItems_ChildLink_1"
                      href="https://www.gdanimalhealth.com/GD-Diagnostics"
                    >
                      Diagnostics
                    </a>
                  </li>
                  <li>
                    <a id="Submenu_MenuItems_ChildLink_2" href="https://www.gdanimalhealth.com/PTS">
                      PTS
                    </a>
                  </li>
                  <li>
                    <a
                      id="Submenu_MenuItems_ChildLink_3"
                      href="https://www.gdanimalhealth.com/Lab-services"
                    >
                      Lab services
                    </a>
                  </li>
                  <li>
                    <a
                      id="Submenu_MenuItems_ChildLink_4"
                      href="https://www.gdanimalhealth.com/GD-Academy"
                    >
                      Academy
                    </a>
                  </li>
                  <li>
                    <a
                      id="Submenu_MenuItems_ChildLink_5"
                      href="https://www.gdanimalhealth.com/Disease-control"
                    >
                      Animal health
                    </a>
                  </li>
                  <li>
                    <a
                      id="Submenu_MenuItems_ChildLink_6"
                      href="https://www.gdanimalhealth.com/About-us"
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a
                      id="Submenu_MenuItems_ChildLink_7"
                      href="https://www.gdanimalhealth.com/News-landing"
                    >
                      News
                    </a>
                  </li>
                  <li>
                    <a
                      id="Submenu_MenuItems_ChildLink_8"
                      href="https://www.gdanimalhealth.com/Forms"
                    >
                      Forms
                    </a>
                  </li>
                  <li>
                    <a
                      id="Submenu_MenuItems_ChildLink_9"
                      href="https://www.gdanimalhealth.com/Contact"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="row">
        <div className="columns small-12">
          <div className="row">
            <div className="columns small-12">
              <ul
                className="list list-slider"
                data-module="slider"
                data-module-options='{"lazyLoad":"ondemand"}'
              >
                <li
                  id="phcolumn_0_phcontent_0_phspotlightslides_0_Slide"
                  className="slide"
                  style={{
                    backgroundImage:
                      'linear-gradient(to bottom,transparent 0,rgba(0,0,0,.35) 100%), url(https://www.gdanimalhealth.com/-/media/Images/GDDiergezondheid/Home/spotlight/royal-gd-spotlight.jpg?mw=1200)',
                  }}
                  data-title="About Royal GD"
                >
                  <a className="slide-link" href="https://www.gdanimalhealth.com/About-us">
                    About-us
                  </a>
                  <div className="slide-caption">
                    <p></p>
                    <h2>About Royal GD</h2>
                  </div>
                  <div className="slide-overlay"></div>
                </li>
                <li
                  id="phcolumn_0_phcontent_0_phspotlightslides_1_Slide"
                  className="slide"
                  style={{
                    backgroundImage:
                      'linear-gradient(to bottom,transparent 0,rgba(0,0,0,.35) 100%), url(https://www.gdanimalhealth.com/-/media/Images/GD-Academy/headers/gd-academy-header.png?mw=1200)',
                  }}
                  data-title="GD Academy"
                >
                  <a className="slide-link" href="https://www.gdanimalhealth.com/GD-Academy">
                    GD-Academy
                  </a>
                  <div className="slide-caption">
                    <p>Learn from our experts</p>
                    <h2>GD Academy</h2>
                  </div>
                  <div className="slide-overlay"></div>
                </li>
                <li
                  id="phcolumn_0_phcontent_0_phspotlightslides_2_Slide"
                  className="slide"
                  style={{
                    backgroundImage:
                      'linear-gradient(to bottom,transparent 0,rgba(0,0,0,.35) 100%), url(https://www.gdanimalhealth.com/-/media/Images/GDDiergezondheid/Spotlight-slides/Large/SchaapGeit/schaap-jpg.jpg?mw=1200)',
                  }}
                  data-title="Monitoring &amp; surveillance"
                >
                  <a
                    className="slide-link"
                    href="https://www.gdanimalhealth.com/Disease-control/MonitoringSurveillance"
                  >
                    MonitoringSurveillance
                  </a>
                  <div className="slide-caption">
                    <p>Country-wide surveillance in the Netherlands</p>
                    <h2>Monitoring &amp; surveillance</h2>
                  </div>
                  <div className="slide-overlay"></div>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="columns small-12"></div>
          </div>
          <div className="row" data-equalizer data-equalize-by-row="true">
            <div
              id="phcolumn_0_phcontent_2_phcalltoaction716423599c9a439da6f0317d517a67c0_0_CtaBlock"
              className="columns large-4 medium-12 small-12"
            >
              <div className="card card--image" data-equalizer-watch>
                <a href="https://www.gdanimalhealth.com/contract-research-organisation">
                  <div className="card-image">
                    <img
                      src="https://www.gdanimalhealth.com/-/media/Images/GDDiergezondheid/CallToAction/CRO/cro-home-cta.png?h=221&amp;iar=0&amp;w=372&amp;hash=B2C07186D9372A3602724992DD8F6B97"
                      alt=""
                      width="372"
                      height="221"
                    />
                  </div>
                  <div className="card-divider">
                    <span>CRO</span>
                  </div>
                </a>
              </div>
            </div>
            <div
              id="phcolumn_0_phcontent_2_phcalltoaction716423599c9a439da6f0317d517a67c0_1_CtaBlock"
              className="columns large-4 medium-12 small-12"
            >
              <div className="card card--image" data-equalizer-watch>
                <a href="https://www.gdanimalhealth.com/GD-Diagnostics">
                  <div className="card-image">
                    <img
                      src="https://www.gdanimalhealth.com/-/media/Images/GDDiergezondheid/CallToAction/Diagnostica2-home-cta.png?h=221&amp;iar=0&amp;w=372&amp;hash=2FEC97815F612E2A2F7D5B3462F8BE47"
                      alt=""
                      width="372"
                      height="221"
                    />
                  </div>
                  <div className="card-divider">
                    <span>Diagnostics</span>
                  </div>
                </a>
              </div>
            </div>
            <div
              id="phcolumn_0_phcontent_2_phcalltoaction716423599c9a439da6f0317d517a67c0_2_CtaBlock"
              className="columns large-4 medium-12 small-12"
            >
              <div className="card card--image" data-equalizer-watch>
                <a href="https://www.gdanimalhealth.com/PTS">
                  <div className="card-image">
                    <img
                      src="https://www.gdanimalhealth.com/-/media/Images/GDDiergezondheid/CallToAction/PTS-home-cta.png?h=222&amp;iar=0&amp;w=372&amp;hash=57A64DE4E36B31A904DCC66C5B9CB4FF"
                      alt=""
                      width="372"
                      height="222"
                    />
                  </div>
                  <div className="card-divider">
                    <span>PTS</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="row" data-equalizer data-equalize-by-row="true">
            <div
              id="phcolumn_0_phcontent_3_phcalltoaction5de72e99dce74622915666d37149e856_0_CtaBlock"
              className="columns large-4 medium-12 small-12"
            >
              <div className="card card--image" data-equalizer-watch>
                <a href="https://www.gdanimalhealth.com/Lab-services">
                  <div className="card-image">
                    <img
                      src="https://www.gdanimalhealth.com/-/media/Images/GDDiergezondheid/CallToAction/royal-gd-laboratorium-home-cta.png?h=220&amp;iar=0&amp;w=372&amp;hash=4F643EB9610D80AEECC13CA57EA9AD56"
                      alt=""
                      width="372"
                      height="220"
                    />
                  </div>
                  <div className="card-divider">
                    <span>Lab services</span>
                  </div>
                </a>
              </div>
            </div>
            <div
              id="phcolumn_0_phcontent_3_phcalltoaction5de72e99dce74622915666d37149e856_1_CtaBlock"
              className="columns large-4 medium-12 small-12"
            >
              <div className="card card--image" data-equalizer-watch>
                <a href="https://www.gdanimalhealth.com/GD-Academy">
                  <div className="card-image">
                    <img
                      src="https://www.gdanimalhealth.com/-/media/Images/GDDiergezondheid/CallToAction/royal-gd-academy-cursisten-home-cta.png?h=221&amp;iar=0&amp;w=372&amp;hash=471F5598E32EE1DC90477829E0AD6FB8"
                      alt=""
                      width="372"
                      height="221"
                    />
                  </div>
                  <div className="card-divider">
                    <span>Academy</span>
                  </div>
                </a>
              </div>
            </div>
            <div
              id="phcolumn_0_phcontent_3_phcalltoaction5de72e99dce74622915666d37149e856_2_CtaBlock"
              className="columns large-4 medium-12 small-12"
            >
              <div className="card card--image" data-equalizer-watch>
                <a href="https://www.gdanimalhealth.com/Disease-control">
                  <div className="card-image">
                    <img
                      src="https://www.gdanimalhealth.com/-/media/Images/GDDiergezondheid/CallToAction/AdobeStock_449849315_home_CTA.png?h=220&amp;iar=0&amp;w=372&amp;hash=263E28A8BC50B7A24F60C9EA06B3071B"
                      alt=""
                      width="372"
                      height="220"
                    />
                  </div>
                  <div className="card-divider">
                    <span>Animal health</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="row current-news">
            <div className="columns small-12">
              <h3>News</h3>
              <hr />
            </div>
            <div className="columns small-12 medium-6">
              <div className="highlighted-item">
                <h3>
                  <a
                    id="phcolumn_0_phcontent_4_NieuwsTitelLink"
                    href="https://www.gdanimalhealth.com/News/2025/06/Out-now-Update-magazine-May2025"
                  >
                    Out now: Update magazine May 2025
                  </a>
                </h3>
                <div>
                  <div id="phcolumn_0_phcontent_4_thumbnailDiv" className="thumbnail">
                    <img
                      src="https://www.gdanimalhealth.com/-/media/Images/GDDiergezondheid/UpdateMay2025304x196.png?h=120&amp;iar=0&amp;w=120&amp;hash=1762BB8843103B81C6DB768DEB22A784"
                      alt=""
                      width="120"
                      height="120"
                    />
                  </div>
                  <p>
                    The latest issue of our international magazine Update, has just been published.
                    This issue focuses on our new diagnostic test for avian influenza, the use of
                    organoids to study poultry gut health, and the opening of our new facility.
                    <a
                      id="phcolumn_0_phcontent_4_NieuwsDetailLink"
                      className="readMore"
                      href="https://www.gdanimalhealth.com/News/2025/06/Out-now-Update-magazine-May2025"
                    >
                      Read more
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="columns small-12 medium-6">
              <ul className="list newsItemList list-table">
                <li id="phcolumn_0_phcontent_4_NieuwsRepeater_ItemLi_0">
                  <h4>
                    <a
                      id="phcolumn_0_phcontent_4_NieuwsRepeater_NieuwsDetailLink_0"
                      href="https://www.gdanimalhealth.com/News/2025/05/Royal-GD-and-LeeO-announce-collaboration"
                    >
                      Royal GD and LeeO announce collaboration: Innovative growth algorithm for pigs
                      developed
                    </a>
                  </h4>
                  <span className="categorie" style={{ fontWeight: 'bold' }}></span>
                </li>
                <li id="phcolumn_0_phcontent_4_NieuwsRepeater_ItemLi_1">
                  <h4>
                    <a
                      id="phcolumn_0_phcontent_4_NieuwsRepeater_NieuwsDetailLink_1"
                      href="https://www.gdanimalhealth.com/News/2025/05/Webinar-Streptococcus-suis-in-the-field-in-the-lab-and-as-animalmodel"
                    >
                      Webinar: Streptococcus suis in the field, in the lab and as animal model
                    </a>
                  </h4>
                  <span className="categorie" style={{ fontWeight: 'bold' }}></span>
                </li>
                <li id="phcolumn_0_phcontent_4_NieuwsRepeater_ItemLi_2">
                  <h4>
                    <a
                      id="phcolumn_0_phcontent_4_NieuwsRepeater_NieuwsDetailLink_2"
                      href="https://www.gdanimalhealth.com/News/2025/05/Webinar-Avian-Influenza-at-the-Point-of-Need---Innovations-and-Implications-for-Field-Control"
                    >
                      Webinar Avian Influenza at the Point of Need: Innovations and Implications for
                      Field Control
                    </a>
                  </h4>
                  <span className="categorie" style={{ fontWeight: 'bold' }}></span>
                </li>
                <li id="phcolumn_0_phcontent_4_NieuwsRepeater_ItemLi_3">
                  <h4>
                    <a
                      id="phcolumn_0_phcontent_4_NieuwsRepeater_NieuwsDetailLink_3"
                      href="https://www.gdanimalhealth.com/News/2025/05/Highlights-report-poultry-cases-of-REV-detected-in-commercial-poultry-in-the-Netherlands"
                    >
                      Highlights report poultry: cases of REV detected in commercial poultry in the
                      Netherlands
                    </a>
                  </h4>
                  <span className="categorie" style={{ fontWeight: 'bold' }}></span>
                </li>
                <li id="phcolumn_0_phcontent_4_NieuwsRepeater_ItemLi_4">
                  <h4>
                    <a
                      id="phcolumn_0_phcontent_4_NieuwsRepeater_NieuwsDetailLink_4"
                      href="https://www.gdanimalhealth.com/News/2025/04/Highlights-report-cattle-In-depth-data-analysis-the-health-of-older-cows"
                    >
                      In-depth data analysis: the health of older cows
                    </a>
                  </h4>
                  <span className="categorie" style={{ fontWeight: 'bold' }}></span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="columns small-12 text-right">
              <p>
                <a
                  id="phcolumn_0_phcontent_5_Link"
                  className="button button-link large"
                  href="https://www.gdanimalhealth.com/News"
                >
                  All news
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return <HeaderDefaultComponent {...props} />;
};
