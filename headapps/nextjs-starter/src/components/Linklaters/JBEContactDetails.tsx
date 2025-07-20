import React from 'react';
import { useState } from 'react';
import {
  Text,
  Image as JssImage,
  RichText,
  TextField,
  ImageField,
  RichTextField,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  data: {
    datasource: {
      Image: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
      Name: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
      Title: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
      Quote: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
      Overview: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
      WorkHighlights: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
      Activities: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
      Experience: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
      GovernmentExperience: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
      EducationAndQualifications: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
      Articles: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
      News: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
    };
    contextItem: {
      Image: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
      Name: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
      Title: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
      Quote: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
      Overview: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
      WorkHighlights: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
      Activities: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
      Experience: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
      GovernmentExperience: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
      EducationAndQualifications: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
      Articles: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
      News: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
    };
  };
}

type LinkLatersContactDetailsProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const LinkLatersContactDetailsDefaultComponent = (
  props: LinkLatersContactDetailsProps
): JSX.Element => (
  <div className={`component ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: LinkLatersContactDetailsProps): JSX.Element => {
  const datasource = props.fields?.data?.datasource;
  const contextItem = props.fields?.data?.contextItem;

  const name = datasource?.Name || contextItem?.Name;
  const title = datasource?.Title || contextItem?.Title;
  const quote = datasource?.Quote || contextItem?.Quote;
  const image = datasource?.Image || contextItem?.Image;
  const overview = datasource?.Overview || contextItem?.Overview;
  const workHighlights = datasource?.WorkHighlights || contextItem?.WorkHighlights;
  const activities = datasource?.Activities || contextItem?.Activities;
  const experience = datasource?.Experience || contextItem?.Experience;
  const governmentExperience =
    datasource?.GovernmentExperience || contextItem?.GovernmentExperience;
  const educationAndQualifications =
    datasource?.EducationAndQualifications || contextItem?.EducationAndQualifications;
  const articles = datasource?.Articles || contextItem?.Articles;
  const news = datasource?.News || contextItem?.News;

  const nameField: TextField = {
    value: name?.jsonValue?.value,
    editable: name?.jsonValue?.editable,
  };

  const titleField: TextField = {
    value: title?.jsonValue?.value,
    editable: title?.jsonValue?.editable,
  };

  const quoteField: TextField = {
    value: quote?.jsonValue?.value,
    editable: quote?.jsonValue?.editable,
  };

  const imageField: ImageField = {
    value: image?.jsonValue,
    editable: image?.jsonValue?.editable,
  };

  const overviewField: RichTextField = {
    value: overview?.jsonValue?.value,
    editable: overview?.jsonValue?.editable,
  };

  const workHighlightsField: RichTextField = {
    value: workHighlights?.jsonValue?.value,
    editable: workHighlights?.jsonValue?.editable,
  };

  const activitiesField: RichTextField = {
    value: activities?.jsonValue?.value,
    editable: activities?.jsonValue?.editable,
  };

  const experienceField: RichTextField = {
    value: experience?.jsonValue?.value,
    editable: experience?.jsonValue?.editable,
  };

  const governmentExperienceField: RichTextField = {
    value: governmentExperience?.jsonValue?.value,
    editable: governmentExperience?.jsonValue?.editable,
  };

  const educationAndQualificationsField: RichTextField = {
    value: educationAndQualifications?.jsonValue?.value,
    editable: educationAndQualifications?.jsonValue?.editable,
  };

  const articlesField: RichTextField = {
    value: articles?.jsonValue?.value,
    editable: articles?.jsonValue?.editable,
  };

  const newsField: RichTextField = {
    value: news?.jsonValue?.value,
    editable: news?.jsonValue?.editable,
  };

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  if (props.fields) {
    return (
      <>
        <div className="lawyer__intro">
          <div className="row">
            <div className="col-md-3 col-xs-12" style={{ width: 'initial' }}>
              <JssImage
                field={imageField}
                class="listCta__img listCta__img--round listCta__img--profile"
                style={{ width: '62px !important' }}
              />
            </div>
            <div className="col-md-9 col-xs-12" style={{ width: 'initial' }}>
              <h1>
                <Text field={nameField} />
              </h1>
              <h2>
                <Text field={titleField} />
              </h2>
            </div>
            <div className="col-sm-12">
              <h4>
                <em>
                  <Text field={quoteField} />
                </em>
              </h4>
            </div>
          </div>
        </div>
        <div>
          <div className="tabs">
            <button onClick={() => handleTabClick(0)} className={activeTab === 0 ? 'active' : ''}>
              Overview
            </button>
            <button onClick={() => handleTabClick(1)} className={activeTab === 1 ? 'active' : ''}>
              Professional experience
            </button>
            <button onClick={() => handleTabClick(2)} className={activeTab === 2 ? 'active' : ''}>
              Education and qualifications
            </button>
            <button onClick={() => handleTabClick(3)} className={activeTab === 3 ? 'active' : ''}>
              Published works
            </button>
          </div>
          <div className="content">
            {activeTab === 0 && (
              <div className="tab-content active">
                <h2 className="tabAccordion__title">Overview</h2>
                <div>
                  <p>
                    <RichText field={overviewField} />
                  </p>
                  <h5>Work highlights</h5>
                  <RichText field={workHighlightsField} />
                </div>
              </div>
            )}
            {activeTab === 1 && (
              <div className="tab-content active">
                <h2 className="tabAccordion__title">Professional experience</h2>
                <div>
                  <h5 style={{ marginBottom: '8.5pt' }}>Activities</h5>
                  <RichText field={activitiesField} />
                  <h5>Experience</h5>
                  <RichText field={experienceField} />
                  <h5>Government Experience</h5>
                  <RichText field={governmentExperienceField} />
                </div>
              </div>
            )}
            {activeTab === 2 && (
              <div className="tab-content active">
                <h2 className="tabAccordion__title">Education and qualifications</h2>
                <div>
                  <RichText field={educationAndQualificationsField} />
                </div>
              </div>
            )}
            {activeTab === 3 && (
              <div className="tab-content active">
                <h2 className="tabAccordion__title">Published works</h2>
                <div>
                  <h5 style={{ marginBottom: '8.5pt' }}>
                    <strong>
                      <span style={{ color: '#af005f' }}>Articles&nbsp;</span>
                    </strong>
                  </h5>
                  <RichText field={articlesField} />
                  <h5>
                    <strong>
                      <span style={{ color: '#af005f' }}>News</span>
                    </strong>
                  </h5>
                  <RichText field={newsField} />
                </div>
              </div>
            )}
          </div>
          <style jsx>{`
            .tabs {
              display: flex;
            }
            .tabs button {
              cursor: pointer;
              background: none;
              border: none;
              border-bottom: 1px solid transparent;
              margin-right: 20px;
              padding: 0 0px 10px;
            }
            .tabs button.active {
              border-bottom: 2px solid #000;
            }
            .content {
              margin-top: 20px;
            }
            .tab-content {
              display: none;
            }
            .tab-content.active {
              display: block;
            }
          `}</style>
        </div>
      </>
    );
  }

  return <LinkLatersContactDetailsDefaultComponent {...props} />;
};
