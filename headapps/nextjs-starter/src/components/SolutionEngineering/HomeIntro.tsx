import React from 'react';
import {
  Link as JssLink,
  RichText as JssRichText,
  RichTextField,
  LinkField,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Text: RichTextField;
  Link: LinkField;
  LearnMoreLink: LinkField;
}

type HomeIntroProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const HomeIntroDefaultComponent = (props: HomeIntroProps): JSX.Element => (
  <div className={`component HomeIntro ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">HomeIntro</span>
    </div>
  </div>
);

export const Default = (props: HomeIntroProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  if (props.fields) {
    return (
      <div className="home-intro mb-0" id="home-intro" key={id ? id : undefined}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <p>
                <JssRichText field={props.fields.Text} />
              </p>
            </div>
            <div className="col-lg-4">
              <div className="get-started text-start text-lg-end">
                <JssLink
                  field={props.fields.Link}
                  className="btn btn-primary btn-lg text-3 font-weight-semibold px-4 py-3"
                />
                <div className="learn-more">
                  or <JssLink field={props.fields.LearnMoreLink} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <HomeIntroDefaultComponent {...props} />;
};
