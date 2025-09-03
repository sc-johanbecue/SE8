/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from 'react'; //{ useState }
import {
  ComponentRendering,
  ComponentParams,
  TextField,
  Image as JssImage,
  ImageField,
  LinkField,
  Link as JssLink,
  Placeholder,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: TextField;
  Text: TextField;
  Link: LinkField;
  Image: ImageField;
}

type ThreeCardsProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const ThreeCardsDefaultComponent = (props: ThreeCardsProps): JSX.Element => (
  <div className={`component ThreeCards ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">ThreeCards</span>
    </div>
  </div>
);

export const Default = (props: ThreeCardsProps): JSX.Element => {
  const phCard1 = `FloraFoodsCard1-${props.params.DynamicPlaceholderId}`;
  const phCard2 = `FloraFoodsCard2-${props.params.DynamicPlaceholderId}`;
  const phCard3 = `FloraFoodsCard3-${props.params.DynamicPlaceholderId}`;

  if (props.fields) {
    const handleItemMouseEnter = (e: React.MouseEvent<HTMLLIElement>) => {
      e.currentTarget.classList.add('active');
    };
    const handleItemMouseLeave = (e: React.MouseEvent<HTMLLIElement>) => {
      e.currentTarget.classList.remove('active');
    };
    return (
      <div className="component container layout--fluid container--no-padding padding-bottom-m">
        <div className="component-content">
          <div className="component container layout--fluid container--no-padding padding-bottom-m">
            <div className="component-content">
              <div className="component container layout--fluid">
                <div className="component-content">
                  <div className="component content">
                    <div className="component-content">
                      <div className="component page-list packshot-3-card-component 3-card-packshot">
                        <ul className="items" role="list">
                          <li
                            className="item"
                            role="listitem"
                            onMouseEnter={handleItemMouseEnter}
                            onMouseLeave={handleItemMouseLeave}
                          >
                            <Placeholder name={phCard1} rendering={props.rendering} />
                          </li>
                          <li
                            className="item"
                            role="listitem"
                            onMouseEnter={handleItemMouseEnter}
                            onMouseLeave={handleItemMouseLeave}
                          >
                            <Placeholder name={phCard2} rendering={props.rendering} />
                          </li>
                          <li
                            className="item"
                            role="listitem"
                            onMouseEnter={handleItemMouseEnter}
                            onMouseLeave={handleItemMouseLeave}
                          >
                            <Placeholder name={phCard3} rendering={props.rendering} />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="component link text-align-center">
                    <div className="component-content">
                      <div className="field-link">
                        <JssLink
                          field={props.fields.Link}
                          className="btn btn-primary"
                          role="button"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="component container padding-bottom-l padding-top-l">
                <div className="component-content">
                  <div className="row component column-splitter">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 padding-bottom-m padding-top-m"></div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3"></div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3"></div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                      <div className="component image">
                        <div className="component-content">
                          <JssImage field={props.fields.Image} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <ThreeCardsDefaultComponent {...props} />;
};
