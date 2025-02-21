import React from 'react';
import { RichTextField, RichText as JssRichText } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: RichTextField;
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
  if (props.fields) {
    return (
      <section className={`page-header page-header-modern bg-color-grey ${props.params.styles}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 order-2 order-md-1 align-self-center p-static">
              <h1 className="text-dark">
                <JssRichText field={props.fields.Title} />
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
  }

  return <PageHeaderDefaultComponent {...props} />;
};

export const Classic = (props: PageHeaderProps): JSX.Element => {
  // const id = props.params.RenderingIdentifier;
  if (props.fields) {
    return (
      <section className="page-header page-header-classic ${props.params.styles}">
        <div className="container">
          <div className="row">
            <div className="col-md-8 order-2 order-md-1 align-self-center p-static">
              <span
                className="page-header-title-border visible"
                style={{ width: '117.725px' }}
              ></span>
              <h1 data-title-border="">
                <JssRichText field={props.fields.Title} />
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
  }

  return <PageHeaderDefaultComponent {...props} />;
};

export const ClassicLarge = (props: PageHeaderProps): JSX.Element => {
  // const id = props.params.RenderingIdentifier;
  if (props.fields) {
    return (
      <section className="page-header page-header-classic page-header-lg">
        <div className="container">
          <div className="row">
            <div className="col">
              <ul className="breadcrumb">
                <li>
                  <a href="#">Home</a>
                </li>
                <li className="active">Features</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col p-static">
              <span
                className="page-header-title-border visible"
                style={{ width: '216.325px' }}
              ></span>
              <h1 data-title-border="">
                <JssRichText field={props.fields.Title} />
              </h1>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return <PageHeaderDefaultComponent {...props} />;
};
