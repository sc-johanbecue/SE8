/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from 'react'; //{ useState }
import {
  ComponentRendering,
  ComponentParams,
  TextField,
  LinkField,
  Placeholder,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Copyright: TextField;
  CurrentCountryLabel: TextField;
  Country: TextField;
  CountryLink: LinkField;
}

type HeaderProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const HeaderDefaultComponent = (props: HeaderProps): JSX.Element => (
  <div className={`component Header ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Header</span>
    </div>
  </div>
);

export const Default = (props: HeaderProps): JSX.Element => {
  const phNavigation = `FrieslandCampinaNavigation-${props.params.DynamicPlaceholderId}`;

  if (props.fields) {
    return (
      <div className="header__container ls-container--m ls-gutter">
        <nav className="header__top-bar">
          <a
            href="https://careers.frieslandcampina.com/nl"
            className="header__button badge badge--clickable badge--careers"
          >
            <svg className="badge__icon" width="20" height="20" aria-hidden="true">
              <use xlinkHref="#icon--user"></use>
            </svg>
            <span>Careers</span>
          </a>
          <a
            href="https://www.frieslandcampina.com/nl/eigendom-van-boeren/garantieprijs/"
            className="header__milk-prices badge badge--clickable badge--milkprice "
          >
            <svg className="badge__icon" width="24" height="24" aria-hidden="true">
              <use xlinkHref="#icon--milk-carton"></use>
            </svg>
            <p className="header__milk-label">Garantieprijs</p>
          </a>
          <div className="header__languages languages">
            <div className="app__overlay app__overlay--language"></div>
            <button className="languages__toggler badge badge--clickable">
              <svg className="badge__icon" width="20" height="20" aria-hidden="true">
                <use xlinkHref="#icon--globe"></use>
              </svg>
              Nederland
            </button>
            <div className="languages__nav">
              <div className="languages__columns">
                <div className="languages__column languages__column--aside">
                  <aside className="languages__aside">
                    <h3 className="title--s">Welkom bij FrieslandCampina</h3>
                    <a
                      className="languages__cta button button--primary"
                      href="https://www.frieslandcampina.com/nl/"
                    >
                      Ga terug naar de website
                    </a>
                  </aside>
                </div>
                <div className="languages__column languages__column--list">
                  <h3 className="languages__title title--s">Onze FrieslandCampina websites</h3>
                  <ul className="languages__list">
                    <li className="languages__language">
                      <h4 className="languages__subtitle title--xs">Global</h4>
                      <a className="languages__link link " href="http://www.frieslandcampina.com">
                        Engels
                      </a>
                    </li>
                    <li className="languages__language">
                      <h4 className="languages__subtitle title--xs">Duitsland</h4>
                      <a className="languages__link link " href="http://www.frieslandcampina.de/de">
                        Duits
                      </a>
                    </li>
                    <li className="languages__language">
                      <h4 className="languages__subtitle title--xs">Griekenland</h4>
                      <a
                        className="languages__link link "
                        href="https://www.frieslandcampina.com/gr"
                      >
                        Grieks
                      </a>
                    </li>
                    <li className="languages__language">
                      <h4 className="languages__subtitle title--xs">Nigeria</h4>
                      <a
                        className="languages__link link "
                        href="https://www.frieslandcampina.com.ng/ng/"
                      >
                        Engels
                      </a>
                    </li>
                    <li className="languages__language">
                      <h4 className="languages__subtitle title--xs">Pakistan</h4>
                      <a className="languages__link link " href="https://frieslandcampina.com.pk/">
                        Engels
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <nav className="header__nav nav" aria-label="Main">
          <a title="Ga naar de startpagina" className="logo nav__logo" href="/nl/">
            <span className="sr-text logo__logotype">Ga naar de startpagina</span>
            <img
              src="https://www.frieslandcampina.com/images/spa/logo-fc-full.svg"
              className="logo__logomark logo__logomark--full"
              width="256"
              height="136"
              alt="Friesland Campina - nourishing by nature"
              aria-hidden="true"
            />
            <img
              src="https://www.frieslandcampina.com/images/spa/logo-fc-compact.svg"
              className="logo__logomark logo__logomark--compact"
              width="146"
              height="46"
              alt="Friesland Campina"
              aria-hidden="true"
            />
          </a>
          <button
            className="nav__hamburger hamburger hamburger--pristine"
            aria-controls="a11y-nav"
            aria-expanded="false"
          >
            <span className="hamburger__text sr-text">Het menu openen</span>
            <span className="hamburger__divider" aria-hidden="true"></span>
          </button>
          <div id="a11y-nav" className="nav__inner app__nav" aria-hidden="true">
            <Placeholder name={phNavigation} rendering={props.rendering} />
          </div>
          <button className="nav__search-toggler nav__search-toggler--mobile">
            <span className="sr-text">Zoeken</span>
            <svg width="32" height="22" className="nav__icon" aria-hidden="true">
              <use xlinkHref="#icon--magnify"></use>
            </svg>
          </button>
          <button className="nav__search-toggler nav__search-toggler--desktop">
            <span className="sr-text">Zoeken</span>
            <svg width="32" height="22" className="nav__icon" aria-hidden="true">
              <use xlinkHref="#icon--magnify"></use>
            </svg>
          </button>
        </nav>
      </div>
    );
  }
  return <HeaderDefaultComponent {...props} />;
};
