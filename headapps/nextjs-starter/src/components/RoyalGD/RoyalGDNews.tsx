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
        className={`component columns small-12 ${props.params.styles}`}
      >
        <div className="row">
          <div className="columns small-12"></div>
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
    </>
  );

  return <HeaderDefaultComponent {...props} />;
};
