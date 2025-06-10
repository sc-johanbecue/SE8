import React from 'react';
import { TextField } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: TextField;
  Text: TextField;
}

type MenuProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const MenuDefaultComponent = (props: MenuProps): JSX.Element => (
  <div className={`component Menu ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Menu</span>
    </div>
  </div>
);

export const Default = (props: MenuProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <>
      <div
        key={id ? id : undefined}
        id={id ? id : undefined}
        className={`component row ${props.params.styles}`}
      >
        <div className="columns small-12">
          <nav className="sub-menu hide-for-large">
            <ul className="dropdown menu" data-dropdown-menu>
              <li className="">
                <a id="Submenu_CurrentLink" href="https://www.gdanimalhealth.com/"></a>
                <ul className="menu">
                  <li>
                    <a
                      id="Submenu_MenuItems_ChildLink_0"
                      href="https://www.gdanimalhealth.com/contract-research-organisation"
                    >
                      CRO
                    </a>
                  </li>
                  <li>
                    <a
                      id="Submenu_MenuItems_ChildLink_1"
                      href="https://www.gdanimalhealth.com/GD-Diagnostics"
                    >
                      Diagnostics
                    </a>
                  </li>
                  <li>
                    <a id="Submenu_MenuItems_ChildLink_2" href="https://www.gdanimalhealth.com/PTS">
                      PTS
                    </a>
                  </li>
                  <li>
                    <a
                      id="Submenu_MenuItems_ChildLink_3"
                      href="https://www.gdanimalhealth.com/Lab-services"
                    >
                      Lab services
                    </a>
                  </li>
                  <li>
                    <a
                      id="Submenu_MenuItems_ChildLink_4"
                      href="https://www.gdanimalhealth.com/GD-Academy"
                    >
                      Academy
                    </a>
                  </li>
                  <li>
                    <a
                      id="Submenu_MenuItems_ChildLink_5"
                      href="https://www.gdanimalhealth.com/Disease-control"
                    >
                      Animal health
                    </a>
                  </li>
                  <li>
                    <a
                      id="Submenu_MenuItems_ChildLink_6"
                      href="https://www.gdanimalhealth.com/About-us"
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a
                      id="Submenu_MenuItems_ChildLink_7"
                      href="https://www.gdanimalhealth.com/News-landing"
                    >
                      News
                    </a>
                  </li>
                  <li>
                    <a
                      id="Submenu_MenuItems_ChildLink_8"
                      href="https://www.gdanimalhealth.com/Forms"
                    >
                      Forms
                    </a>
                  </li>
                  <li>
                    <a
                      id="Submenu_MenuItems_ChildLink_9"
                      href="https://www.gdanimalhealth.com/Contact"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );

  return <MenuDefaultComponent {...props} />;
};
