import React from 'react';
import {
  LinkField,
  ImageField,
  Placeholder,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

interface Fields {
  CollapsedImage: ImageField;
  ExpandedImage: ImageField;
  MobileImage: ImageField;
  Link: LinkField;
}

type EuroConsumersTopNavigationProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const EuroConsumersTopNavigationDefaultComponent = (
  props: EuroConsumersTopNavigationProps
): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">EuroConsumers Top Navigation</span>
    </div>
  </div>
);

export const Default = (props: EuroConsumersTopNavigationProps): JSX.Element => {
  const phKeyTopNavigation = `topNavigation-${props.params.DynamicPlaceholderId}`;

  if (props.fields) {
    return (
      <nav
        className="web4 hide-on-mobile relative no-margin"
        data-selector="web4"
        data-type="ALineHeaderWeb4Controller"
        data-rendering="ALineHeaderWeb4"
        data-datasource="{D1DECBA0-0937-4035-851F-57218DF40F11}"
      >
        <div className="constrained">
          <div className="flex__row web4__links">
            <Placeholder name={phKeyTopNavigation} rendering={props.rendering} />
            <ul className="mainLinks">
              <li className="align-left">
                <Link
                  href="/contact/contacteer-ons"
                  className="contact"
                  data-selector="web4-phone-icon"
                >
                  Contacteer ons
                </Link>
              </li>
              <li>
                <Link
                  href="https://login.test-aankoop.be/?wtrealm=eur%3a%2f%2fobiz.pro.obizpromo.nl-be%2f&wa=wsignin1.0&_gl=1*x387ll*_ga*ODg5NzU2ODU4LjE1OTcyMzE2MjQ.*_ga_9K2NF23KQW*MTY2ODUwNjAwMS4xMDIuMC4xNjY4NTA2MDAxLjAuMC4w&_gac=1.228120047.1666081277.Cj0KCQjwnbmaBhD-ARIsAGTPcfWK5Hv3BVLmGEgsOme9v6mPu-kaZ8cda3vr3kfajC9kpF7kzOWVbu4aAsUOEALw_wcB&_ga=2.22805883.1315290994.1668506002-821044984.1597672129"
                  data-selector="web4-links"
                  target="_blank"
                >
                  Members Club
                </Link>
              </li>
              <li>
                <Link href="/energyguide" data-selector="web4-links">
                  Energy-guide
                </Link>
              </li>
              <li>
                <Link href="/acties/ratemydeal" data-selector="web4-links" target="_blank">
                  Rate my deal
                </Link>
              </li>
              <input type="checkbox" className="hidden" id="checkbox-allWebsites" />
              <li className="dropdown">
                <label htmlFor="checkbox-allWebsites">
                  <span>Zie meer</span>
                </label>
                <ul className="align-left padding-medium">
                  <li>
                    <Link href="/repairguide" data-selector="web4-flyout-links">
                      Repairguide
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.test-aankoop.be/pers" data-selector="web4-flyout-links">
                      Pers &amp; Institutioneel
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.test-aankoop.be/invest"
                      data-selector="web4-flyout-links"
                      target="_blank"
                    >
                      Testaankoop invest
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/werken-bij-test-aankoop"
                      data-selector="web4-flyout-links"
                      target="_blank"
                    >
                      Jobs
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  return <EuroConsumersTopNavigationDefaultComponent {...props} />;
};
