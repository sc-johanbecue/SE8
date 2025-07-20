import React from 'react';
import { TextField, Text, ImageField, Image as JssImage } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Heading: TextField;
  Description: TextField;
  Image: ImageField;
  Fact1Value: TextField;
  Fact1Text: TextField;
  Fact1Unit: TextField;
  Fact1Image: ImageField;
  Fact2Value: TextField;
  Fact2Text: TextField;
  Fact2Unit: TextField;
  Fact2Image: ImageField;
  Fact3Value: TextField;
  Fact3Text: TextField;
  Fact3Unit: TextField;
  Fact3Image: ImageField;
  Fact4Value: TextField;
  Fact4Text: TextField;
  Fact4Unit: TextField;
  Fact4Image: ImageField;
}

type AldarFactsProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const AldarFactsDefaultComponent = (props: AldarFactsProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: AldarFactsProps): JSX.Element => {
  if (props.fields) {
    return (
      <div className="component summary margin-bottom-80">
        <section className="facts padding-bottom-80" data-animation="">
          <div className="container typos --box-shadow margin-bottom-40" data-animation="">
            <div className="row">
              <div className="col-2"></div>
              <div className="col-10">
                <p className="typos-lower-header-description">
                  <Text field={props.fields.Description} />
                </p>
                <h2 className="h2 h2--box typos__heading">
                  <Text field={props.fields.Heading} />
                </h2>
              </div>
              <div className="w-100 d-lg-none"></div>
              <div className="col-1 d-lg-none"></div>
              <div className="col-10 col-md-7">
                <div className="typos__holder"></div>
              </div>
            </div>
          </div>
          <div className="container facts__item-container">
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-12 col-lg-8">
                <div className="contaier">
                  <div className="row no-gutters facts__item-row">
                    <div className="col-12 col-lg-3 ">
                      <div className="facts__item with-border">
                        <JssImage field={props.fields.Fact1Image} width="80" height="80" />
                        <small>
                          <Text field={props.fields.Fact1Unit} />
                        </small>
                        <h3 className="h3">
                          <Text field={props.fields.Fact1Value} />
                        </h3>
                        <p className="body-text-14--medium">
                          <Text field={props.fields.Fact1Text} />
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-3 ">
                      <div className="facts__item with-border">
                        <JssImage field={props.fields.Fact2Image} width="80" height="80" />
                        <small>
                          <Text field={props.fields.Fact2Unit} />
                        </small>
                        <h3 className="h3">
                          <Text field={props.fields.Fact2Value} />
                        </h3>
                        <p className="body-text-14--medium">
                          <Text field={props.fields.Fact2Text} />
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-3 ">
                      <div className="facts__item with-border">
                        <JssImage field={props.fields.Fact3Image} width="80" height="80" />
                        <small>
                          <Text field={props.fields.Fact3Unit} />
                        </small>
                        <h3 className="h3">
                          <Text field={props.fields.Fact3Value} />
                        </h3>
                        <p className="body-text-14--medium">
                          <Text field={props.fields.Fact3Text} />
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-3 ">
                      <div className="facts__item with-border">
                        <JssImage field={props.fields.Fact4Image} width="80" height="80" />
                        <small>
                          <Text field={props.fields.Fact4Unit} />
                        </small>
                        <h3 className="h3">
                          <Text field={props.fields.Fact4Value} />
                        </h3>
                        <p className="body-text-14--medium">
                          <Text field={props.fields.Fact4Text} />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-100 d-lg-none"></div>
              <div className="col-2 d-lg-none"></div>
              <div className="col-10 col-lg-3">
                <figure className="facts__image-container">
                  <JssImage field={props.fields.Image} width="372" height="436" />
                </figure>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return <AldarFactsDefaultComponent {...props} />;
};
