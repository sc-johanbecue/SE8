import React from 'react';
import { TextField } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: TextField;
}
type LHeader2Props = {
  params: { [key: string]: string };
  fields: Fields;
};

const LHeader2DefaultComponent = (props: LHeader2Props): JSX.Element => (
  <div className={`${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);
export const Default = (props: LHeader2Props): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  if (props.fields) {
    return (
      <div className={`${props.params.styles}`} id={id ? id : undefined}>
        <header className="ckp-header">
          <div className="accessibility-bar">
            <div className="container">
              <div className="reciteme">Accessibility tools</div>
            </div>
          </div>
          <div className="container nav-count-7">
            <a className="header__skipToContent" href="#main" data-scroll-ignore="true">
              Skip to main content
            </a>
            <div className="row">
              <a className="header__brand" href="/">
                <img
                  src="https://lpscdn.linklaters.com/-/media/images/linklaters/logo/linklaters_plum_svg.ashx?rev=7e80f484-362d-4f66-bfa9-f998d16a5494"
                  alt="Linklaters"
                />
              </a>
              <div className="header__navDesktop">
                <ul>
                  <li className="">
                    <a href="https://www.linklaters.com/en/about-us">About Us</a>
                  </li>
                  <li className="">
                    <a href="https://www.linklaters.com/en/client-services">Client Services</a>
                  </li>
                  <li className="">
                    <a href="https://www.linklaters.com/en/sectors">Sectors</a>
                  </li>
                  <li className="">
                    <a href="https://www.linklaters.com/en/find-a-lawyers">Find People</a>
                  </li>
                  <li className="">
                    <a href="https://www.linklaters.com/en/locations">Locations</a>
                  </li>
                  <li className="no-active nav__mobileToggle--knowledge">
                    <a href="https://www.linklaters.com/en/knowledge" className="">
                      Knowledge
                    </a>
                  </li>
                  <li className="no-active">
                    <a href="https://www.linklaters.com/en/careers">Careers</a>
                  </li>
                  <li className="no-sub-nav header__lang-picker">
                    <button className="header__geoToggle">
                      <span className="selectedValue cta-default">
                        <span>&gt;</span>Global
                      </span>
                    </button>
                    <ul className="header__geoToggle-list header__lang-picker-list">
                      <li>
                        <a href="https://linklaters.de" title="Germany">
                          <span>&gt;</span>&nbsp;Germany
                        </a>
                      </li>
                    </ul>
                  </li>{' '}
                  <li
                    className="header__login-register"
                    data-toggle="modal"
                    data-target="#loginRegisterModal"
                  >
                    <a href="javascript:void(0)">Log in / Register</a>
                  </li>
                </ul>
              </div>

              <button className="header__searchToggle ">
                <span className="icon-search"></span>
              </button>
              <button className="header__burgerToggle">
                <span className="icon-burger"></span>
              </button>
            </div>
          </div>
        </header>
      </div>
    );
  }

  return <LHeader2DefaultComponent {...props} />;
};
