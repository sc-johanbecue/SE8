import Link from 'next/link';
import { IconUser, IconMilkCarton, IconGlobe, IconMagnify } from './icons/svg-icons';
import React from 'react'; //{ useState }
import {
  ComponentRendering,
  ComponentParams,
  TextField,
  LinkField,
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
  if (props.fields) {
    return (
      <header className="header app__header">
        <div className="header__inner">
          <div className="header__container ls-container--m ls-gutter">
            <nav className="header__top-bar">
              <Link
                href="https://careers.frieslandcampina.com/nl"
                className="header__button badge badge--clickable badge--careers"
              >
                <IconUser className="badge__icon" width="20" height="20" aria-hidden="true" />
                <span>Careers</span>
              </Link>
              <Link
                href="https://www.frieslandcampina.com/nl/eigendom-van-boeren/garantieprijs/"
                className="header__milk-prices badge badge--clickable badge--milkprice "
              >
                <IconMilkCarton className="badge__icon" width="24" height="24" aria-hidden="true" />
                <p className="header__milk-label">Garantieprijs</p>
              </Link>
              <div className="header__languages languages">
                <div className="app__overlay app__overlay--language"></div>
                <button className="languages__toggler badge badge--clickable">
                  <IconGlobe className="badge__icon" width="20" height="20" aria-hidden="true" />
                  Nederland
                </button>
                <div className="languages__nav">
                  <div className="languages__columns">
                    <div className="languages__column languages__column--aside">
                      <aside className="languages__aside">
                        <h3 className="title--s">Welkom bij FrieslandCampina</h3>
                        <Link
                          className="languages__cta button button--primary"
                          href="https://www.frieslandcampina.com/nl/"
                        >
                          Ga terug naar de website
                        </Link>
                      </aside>
                    </div>
                    <div className="languages__column languages__column--list">
                      <h3 className="languages__title title--s">Onze FrieslandCampina websites</h3>
                      <ul className="languages__list">
                        <li className="languages__language">
                          <h4 className="languages__subtitle title--xs">Global</h4>
                          <Link
                            className="languages__link link "
                            href="http://www.frieslandcampina.com"
                          >
                            Engels
                          </Link>
                        </li>
                        <li className="languages__language">
                          <h4 className="languages__subtitle title--xs">Duitsland</h4>
                          <Link
                            className="languages__link link "
                            href="http://www.frieslandcampina.de/de"
                          >
                            Duits
                          </Link>
                        </li>
                        <li className="languages__language">
                          <h4 className="languages__subtitle title--xs">Griekenland</h4>
                          <Link
                            className="languages__link link "
                            href="https://www.frieslandcampina.com/gr"
                          >
                            Grieks
                          </Link>
                        </li>
                        <li className="languages__language">
                          <h4 className="languages__subtitle title--xs">Nigeria</h4>
                          <Link
                            className="languages__link link "
                            href="https://www.frieslandcampina.com.ng/ng/"
                          >
                            Engels
                          </Link>
                        </li>
                        <li className="languages__language">
                          <h4 className="languages__subtitle title--xs">Pakistan</h4>
                          <Link
                            className="languages__link link "
                            href="https://frieslandcampina.com.pk/"
                          >
                            Engels
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <nav className="header__nav nav" aria-label="Main">
              <Link title="Ga naar de startpagina" className="logo nav__logo" href="/nl/">
                <span className="sr-text logo__logotype">Ga naar de startpagina</span>
                <img
                  src="/images/spa/logo-fc-full.svg"
                  className="logo__logomark logo__logomark--full"
                  width="256"
                  height="136"
                  alt="Friesland Campina - nourishing by nature"
                  aria-hidden="true"
                />
                <img
                  src="/images/spa/logo-fc-compact.svg"
                  className="logo__logomark logo__logomark--compact"
                  width="146"
                  height="46"
                  alt="Friesland Campina"
                  aria-hidden="true"
                />
              </Link>
              <button
                className="nav__hamburger hamburger hamburger--pristine"
                aria-controls="a11y-nav"
                aria-expanded="false"
              >
                <span className="hamburger__text sr-text">Het menu openen</span>
                <span className="hamburger__divider" aria-hidden="true"></span>
              </button>
              <div id="a11y-nav" className="nav__inner app__nav" aria-hidden="true">
                <ul className="nav__list nav__list--level-0">
                  <li className="nav__list-item nav__list-item--level-0 ">
                    <Link className="nav__link nav__link--level-0" href="/nl/melk/">
                      <span className="nav__text-label">Melk</span>
                    </Link>
                    <button className="nav__toggler nav__toggler">
                      <svg width="12" height="6" className="nav__chevron" aria-hidden="true">
                        <use xlinkHref="#icon--chevron"></use>
                      </svg>
                    </button>
                    <ul className="nav__list nav__list--level-1" aria-expanded="false">
                      <li className="nav__list-item nav__list-item--level-0">
                        <Link
                          className="nav__link nav__link--level-1"
                          href="/nl/melk/story-of-milk/"
                        >
                          <span className="nav__text-label">Story of milk</span>
                        </Link>
                      </li>
                      <li className="nav__list-item nav__list-item--level-0">
                        <Link
                          className="nav__link nav__link--level-1"
                          href="/nl/melk/waardevolle-voedingsstoffen/"
                        >
                          <span className="nav__text-label">
                            Waardevolle voedingsstoffen in melk
                          </span>
                        </Link>
                      </li>
                      <li className="nav__list-item nav__list-item--level-0">
                        <Link
                          className="nav__link nav__link--level-1"
                          href="/nl/melk/gemaakt-van-melk/"
                        >
                          <span className="nav__text-label">Van melk tot zuivelproduct</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav__list-item nav__list-item--level-0 ">
                    <Link className="nav__link nav__link--level-0" href="/nl/duurzaamheid/">
                      <span className="nav__text-label">Duurzaamheid</span>
                    </Link>
                    <button className="nav__toggler nav__toggler">
                      <svg width="12" height="6" className="nav__chevron" aria-hidden="true">
                        <use xlinkHref="#icon--chevron"></use>
                      </svg>
                    </button>
                    <ul className="nav__list nav__list--level-1" aria-expanded="false">
                      <li className="nav__list-item nav__list-item--level-0">
                        <Link
                          className="nav__link nav__link--level-1"
                          href="/nl/duurzaamheid/voeding/"
                        >
                          <span className="nav__text-label">Voeding</span>
                        </Link>
                      </li>
                      <li className="nav__list-item nav__list-item--level-0">
                        <Link
                          className="nav__link nav__link--level-1"
                          href="/nl/duurzaamheid/mensen/"
                        >
                          <span className="nav__text-label">Mensen</span>
                        </Link>
                      </li>
                      <li className="nav__list-item nav__list-item--level-0">
                        <Link
                          className="nav__link nav__link--level-1"
                          href="/nl/duurzaamheid/planeet/"
                        >
                          <span className="nav__text-label">Planeet</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav__list-item nav__list-item--level-0">
                    <Link className="nav__link nav__link--level-0" href="/nl/brands/">
                      <span className="nav__text-label">Onze merken</span>
                    </Link>
                  </li>
                  <li className="nav__list-item nav__list-item--level-0 ">
                    <Link className="nav__link nav__link--level-0" href="/nl/eigendom-van-boeren/">
                      <span className="nav__text-label">Eigendom van boeren</span>
                    </Link>
                    <button className="nav__toggler nav__toggler">
                      <svg width="12" height="6" className="nav__chevron" aria-hidden="true">
                        <use xlinkHref="#icon--chevron"></use>
                      </svg>
                    </button>
                    <ul className="nav__list nav__list--level-1" aria-expanded="false">
                      <li className="nav__list-item nav__list-item--level-0">
                        <Link
                          className="nav__link nav__link--level-1"
                          href="/nl/eigendom-van-boeren/de-cooperatie/"
                        >
                          <span className="nav__text-label">De coöperatie</span>
                        </Link>
                      </li>
                      <li className="nav__list-item nav__list-item--level-0">
                        <Link className="nav__link nav__link--level-1" href="/nl/melk-leveren/">
                          <span className="nav__text-label">Melk leveren aan FrieslandCampina</span>
                        </Link>
                      </li>
                      <li className="nav__list-item nav__list-item--level-0">
                        <Link
                          className="nav__link nav__link--level-1"
                          href="/nl/eigendom-van-boeren/foqus-planet/"
                        >
                          <span className="nav__text-label">Foqus planet</span>
                        </Link>
                      </li>
                      <li className="nav__list-item nav__list-item--level-0">
                        <Link
                          className="nav__link nav__link--level-1"
                          href="/nl/eigendom-van-boeren/weigevoel/"
                        >
                          <span className="nav__text-label">Ambassadeurs van het Platteland</span>
                        </Link>
                      </li>
                      <li className="nav__list-item nav__list-item--level-0">
                        <Link
                          className="nav__link nav__link--level-1"
                          href="/nl/eigendom-van-boeren/frieslandcampina-jongeren/"
                        >
                          <span className="nav__text-label">FrieslandCampina Jongeren</span>
                        </Link>
                      </li>
                      <li className="nav__list-item nav__list-item--level-0">
                        <Link
                          className="nav__link nav__link--level-1"
                          href="/nl/eigendom-van-boeren/nederlands-erfgoed/"
                        >
                          <span className="nav__text-label">Nederlands erfgoed</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav__list-item nav__list-item--level-0 ">
                    <Link className="nav__link nav__link--level-0" href="/nl/over-ons/">
                      <span className="nav__text-label">Over ons</span>
                    </Link>
                    <button className="nav__toggler nav__toggler">
                      <svg width="12" height="6" className="nav__chevron" aria-hidden="true">
                        <use xlinkHref="#icon--chevron"></use>
                      </svg>
                    </button>
                    <ul className="nav__list nav__list--level-1" aria-expanded="false">
                      <li className="nav__list-item nav__list-item--level-0">
                        <Link
                          className="nav__link nav__link--level-1"
                          href="/nl/over-ons/wie-wij-zijn/"
                        >
                          <span className="nav__text-label">Wie wij zijn</span>
                        </Link>
                      </li>
                      <li className="nav__list-item nav__list-item--level-0">
                        <Link className="nav__link nav__link--level-1" href="/nl/over-ons/purpose/">
                          <span className="nav__text-label">Onze purpose</span>
                        </Link>
                      </li>
                      <li className="nav__list-item nav__list-item--level-0">
                        <Link
                          className="nav__link nav__link--level-1"
                          href="/nl/over-ons/strategie/"
                        >
                          <span className="nav__text-label">Onze strategie</span>
                        </Link>
                      </li>
                      <li className="nav__list-item nav__list-item--level-0">
                        <Link
                          className="nav__link nav__link--level-1"
                          href="/nl/over-ons/onze-waarden/"
                        >
                          <span className="nav__text-label">Onze waarden</span>
                        </Link>
                      </li>
                      <li className="nav__list-item nav__list-item--level-0">
                        <Link
                          className="nav__link nav__link--level-1"
                          href="/nl/over-ons/inclusieve-cultuur/"
                        >
                          <span className="nav__text-label">Inclusieve cultuur</span>
                        </Link>
                      </li>
                      <li className="nav__list-item nav__list-item--level-0">
                        <Link
                          className="nav__link nav__link--level-1"
                          href="/nl/over-ons/leiderschap/"
                        >
                          <span className="nav__text-label">Leiderschap</span>
                        </Link>
                      </li>
                      <li className="nav__list-item nav__list-item--level-0">
                        <Link
                          className="nav__link nav__link--level-1"
                          href="/nl/over-ons/financiele-resultaten/"
                        >
                          <span className="nav__text-label">Financiële resultaten</span>
                        </Link>
                      </li>
                      <li className="nav__list-item nav__list-item--level-0">
                        <Link
                          className="nav__link nav__link--level-1"
                          href="/nl/over-ons/innovatie/"
                        >
                          <span className="nav__text-label">Innovatie</span>
                        </Link>
                      </li>
                      <li className="nav__list-item nav__list-item--level-0">
                        <Link
                          className="nav__link nav__link--level-1"
                          href="/nl/over-ons/kwaliteit-en-veiligheid/"
                        >
                          <span className="nav__text-label">Kwaliteit en veiligheid</span>
                        </Link>
                      </li>
                      <li className="nav__list-item nav__list-item--level-0">
                        <Link
                          className="nav__link nav__link--level-1"
                          href="/nl/over-ons/beleid-en-commitments/"
                        >
                          <span className="nav__text-label">Beleid en commitments</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <button className="nav__search-toggler nav__search-toggler--mobile">
                <span className="sr-text">Zoeken</span>
                <IconMagnify className="nav__icon" width="32" height="22" aria-hidden="true" />
              </button>
              <button className="nav__search-toggler nav__search-toggler--desktop">
                <span className="sr-text">Zoeken</span>
                <IconMagnify className="nav__icon" width="32" height="22" aria-hidden="true" />
              </button>
            </nav>
          </div>
        </div>
      </header>
    );
  }
  return <HeaderDefaultComponent {...props} />;
};
