import React from 'react';
import { RichTextField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Text: RichTextField;
  Link: LinkField;
  LearnMoreLink: LinkField;
}

type PageHeaderProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const PageHeaderDefaultComponent = (props: PageHeaderProps): JSX.Element => (
  <div className={`component PageHeader ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">PageHeader</span>
    </div>
  </div>
);

export const Default = (props: PageHeaderProps): JSX.Element => {
  // const id = props.params.RenderingIdentifier;
  //if (props.fields) {
  return (
    <section className={`page-header page-header-modern bg-color-grey ${props.params.styles}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-8 order-2 order-md-1 align-self-center p-static">
            <h1 className="text-dark">
              Modern <strong>Small2</strong>
            </h1>
          </div>
          <div className="col-md-4 order-1 order-md-2 align-self-center">
            <ul className="breadcrumb d-block text-md-end">
              <li>
                <a href="#">Home</a>
              </li>
              <li className="active">Features</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
  //}

  return <PageHeaderDefaultComponent {...props} />;
};
