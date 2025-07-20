import React from 'react';
import { TextField, Text, LinkField, Link as JssLink } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

interface Fields {
  Heading: TextField;
  Text: TextField;
  SmallText: TextField;
  Link: LinkField;
}

type AldarContentWithLinkListProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const AldarContentWithLinkListDefaultComponent = (
  props: AldarContentWithLinkListProps
): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: AldarContentWithLinkListProps): JSX.Element => {
  if (props.fields) {
    return (
      <div className="component summary">
        <div className="tdb__with-list-link margin-bottom-80">
          <section className="tdb tdb__with-list-links ">
            <div className="container tdb__title">
              <div className="row">
                <div className="col-1 col-md-2"></div>
                <div className="col-11 col-md-8">
                  <h2 className="h2 h2--box">
                    <Text field={props.fields.Heading} />
                  </h2>
                </div>
              </div>
            </div>
            <div className="tdb__content">
              <div className="container tdb__content-container">
                <div className="row">
                  <div className="col-lg-2"></div>
                  <div className="col-12 col-lg-5 tdb__content-col">
                    <p className="d-none d-md-block">
                      <p className="d-none d-md-block">
                        <span>
                          <Text field={props.fields.Text} />
                        </span>
                      </p>
                    </p>
                    <small className="d-none d-md-block">
                      <span>
                        <Text field={props.fields.SmallText} />
                      </span>
                    </small>
                    <JssLink field={props.fields.Link} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-8"></div>
                  <div className="col-12 col-lg-3 ">
                    <div className="tdb__content-links">
                      <ul>
                        <li>
                          <Link
                            className="link "
                            href="https://www.aldar.com/en/explore-aldar/sustainability/strategy"
                          >
                            Sustainability Strategy
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="link "
                            href="https://www.aldar.com/en/explore-aldar/sustainability/reporting"
                          >
                            Reporting &amp; Performance
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="link "
                            href="https://www.aldar.com/en/explore-aldar/sustainability/governance-and-policies"
                          >
                            Governance &amp; Policies
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="link "
                            href="https://www.aldar.com/en/explore-aldar/sustainability/corporate-social-responsibility"
                          >
                            CSR
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }

  return <AldarContentWithLinkListDefaultComponent {...props} />;
};
