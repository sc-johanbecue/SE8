import React from 'react';
import {
  RichTextField,
  RichText as JssRichText,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: RichTextField;
  SubTitle: RichTextField;
}

type PageHeaderProps = {
  params: { [key: string]: string };
  fields: Fields;
  size: 'sm' | 'md' | 'lg';
};

const Breadcrumbs = () => (
  <ul className="breadcrumb d-block text-md-end">
    <li>
      <a href="#">Home</a>
    </li>
    <li className="active">Features</li>
  </ul>
);

const PageHeaderDefaultComponent = (props: PageHeaderProps): JSX.Element => (
  <div className={`component PageHeader ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">PageHeader</span>
    </div>
  </div>
);

const ModernPageHeader = (props: PageHeaderProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const { sitecoreContext } = useSitecoreContext();

  let titleClassNames = 'align-self-center p-static';
  let breadcrumbClassNames = 'align-self-center';

  const backgroundColors = [
    'bg-color-dark',
    'bg-color-grey',
    'bg-color-primary',
    'bg-color-secondary',
    'bg-color-tertiary',
    'bg-color-quaternary',
  ];
  const backgroundColor = backgroundColors.find((color) => props.params.styles.includes(color)) || '';

  // Adjust classes based on detected styles
  if (props.params.styles.includes('position-left')) {
    titleClassNames += ' col-md-8 order-2 order-md-1';
    breadcrumbClassNames += ' col-md-4 order-1 order-md-2';
  } else if (props.params.styles.includes('position-right')) {
    titleClassNames += 'col-md-8 order-1 order-md-2';
    breadcrumbClassNames += ' col-md-4 order-2 order-md-1';
  } else if (props.params.styles.includes('position-center')) {
    titleClassNames = 'col-md-12 p-static order-2 text-center';
    breadcrumbClassNames = 'col-md-12 order-1';
  }

  if (props.fields) {
    return (
      <section
        className={`page-header page-header-modern ${backgroundColor} page-header-${props.size}`}
        id={id || undefined}
      >
        <div className="container">
          <div className="row">
            <div className={titleClassNames}>
              <h1 className="text-dark">
                <JssRichText field={props.fields.Title} />
              </h1>
              {sitecoreContext.pageEditing || props.fields.SubTitle.value != '' ? (
                <span className="sub-title">
                  <JssRichText field={props.fields.SubTitle} />
                </span>
              ) : null}
            </div>
            <div className={breadcrumbClassNames}>
              <Breadcrumbs />
            </div>
          </div>
        </div>
      </section>
    );
  } else return <PageHeaderDefaultComponent {...props} />;
};

export const ModernSmall = (props: PageHeaderProps) => <ModernPageHeader {...props} size="sm" />;
export const Modern = (props: PageHeaderProps) => <ModernPageHeader {...props} size="md" />;
export const ModernLarge = (props: PageHeaderProps) => <ModernPageHeader {...props} size="lg" />;

export const OldModernSmall = (props: PageHeaderProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const { sitecoreContext } = useSitecoreContext();

  if (props.fields) {
    return (
      <section
        className={`page-header page-header-modern ${props.params.styles} page-header-sm`}
        id={id ? id : undefined}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8 order-2 order-md-1 align-self-center p-static">
              <h1 className="text-dark">
                <JssRichText field={props.fields.Title} />
              </h1>
              {sitecoreContext.pageEditing || props.fields.SubTitle.value != '' ? (
                <span className="sub-title">
                  <JssRichText field={props.fields.SubTitle} />
                </span>
              ) : (
                <></>
              )}
            </div>
            <div className="col-md-4 order-1 order-md-2 align-self-center">
              <Breadcrumbs />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return <PageHeaderDefaultComponent {...props} />;
};
export const OldModern = (props: PageHeaderProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const { sitecoreContext } = useSitecoreContext();

  if (props.fields) {
    return (
      <section
        className={`page-header page-header-modern ${props.params.styles} page-header-md`}
        id={id ? id : undefined}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8 order-2 order-md-1 align-self-center p-static">
              <h1 className="text-dark">
                <JssRichText field={props.fields.Title} />
              </h1>
              {sitecoreContext.pageEditing || props.fields.SubTitle.value != '' ? (
                <span className="sub-title">
                  <JssRichText field={props.fields.SubTitle} />
                </span>
              ) : (
                <></>
              )}
            </div>
            <div className="col-md-4 order-1 order-md-2 align-self-center">
              <Breadcrumbs />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return <PageHeaderDefaultComponent {...props} />;
};
export const OldModernLarge = (props: PageHeaderProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const { sitecoreContext } = useSitecoreContext();
  if (props.fields) {
    return (
      <section
        className={`page-header page-header-modern ${props.params.styles} page-header-lg`}
        id={id ? id : undefined}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8 order-2 order-md-1 align-self-center p-static">
              <h1 className="text-dark">
                <JssRichText field={props.fields.Title} />
              </h1>
              {sitecoreContext.pageEditing || props.fields.SubTitle.value != '' ? (
                <span className="sub-title">
                  <JssRichText field={props.fields.SubTitle} />
                </span>
              ) : (
                <></>
              )}
            </div>
            <div className="col-md-4 order-1 order-md-2 align-self-center">
              <Breadcrumbs />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return <PageHeaderDefaultComponent {...props} />;
};

export const ClassicSmall = (props: PageHeaderProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const { sitecoreContext } = useSitecoreContext();

  if (props.fields) {
    return (
      <section
        className={`page-header page-header-classic ${props.params.styles}`}
        id={id ? id : undefined}
      >
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
              {sitecoreContext.pageEditing || props.fields.SubTitle.value != '' ? (
                <span className="sub-title">
                  <JssRichText field={props.fields.SubTitle} />
                </span>
              ) : (
                <></>
              )}
            </div>
            <div className="col-md-4 order-1 order-md-2 align-self-center">
              <Breadcrumbs />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return <PageHeaderDefaultComponent {...props} />;
};

export const Classic = (props: PageHeaderProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const { sitecoreContext } = useSitecoreContext();

  if (props.fields) {
    return (
      <section
        className={`page-header page-header-classic ${props.params.styles}`}
        id={id ? id : undefined}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <Breadcrumbs />
            </div>
          </div>
          <div className="row">
            <div className="col p-static">
              <span
                className="page-header-title-border visible"
                style={{ width: '216.938px' }}
              ></span>
              <h1 data-title-border="">
                <JssRichText field={props.fields.Title} />
              </h1>
              {sitecoreContext.pageEditing || props.fields.SubTitle.value != '' ? (
                <span className="sub-title">
                  <JssRichText field={props.fields.SubTitle} />
                </span>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return <PageHeaderDefaultComponent {...props} />;
};

export const ClassicLarge = (props: PageHeaderProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const { sitecoreContext } = useSitecoreContext();

  if (props.fields) {
    return (
      <section
        className={`page-header page-header-classic ${props.params.styles}`}
        id={id ? id : undefined}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <Breadcrumbs />
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
              {sitecoreContext.pageEditing || props.fields.SubTitle.value != '' ? (
                <span className="sub-title">
                  <JssRichText field={props.fields.SubTitle} />
                </span>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return <PageHeaderDefaultComponent {...props} />;
};
