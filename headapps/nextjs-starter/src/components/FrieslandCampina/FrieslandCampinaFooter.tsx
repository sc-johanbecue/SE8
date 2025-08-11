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

type FooterProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const FooterDefaultComponent = (props: FooterProps): JSX.Element => (
  <div className={`component Footer ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Footer</span>
    </div>
  </div>
);

export const Default = (props: FooterProps): JSX.Element => {
  if (props.fields) {
    return (
      <footer className="footer app__footer" id="a11y-footer">
        <div className="footer__container ls-container--m ls-gutter">
          <div className="footer__top">
            <div className="footer__menu">
              <h3 className="footer__title">Follow us</h3>
              <ul className="footer__socials socials">
                <li className="socials__item">
                  <a
                    className="socials__link"
                    href="https://www.linkedin.com/company/frieslandcampina/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="socials__text sr-text">LinkedIn</span>
                    <svg width="22" height="22" className="socials__icon" aria-hidden="true">
                      <use xlinkHref="#icon--linkedin"></use>
                    </svg>
                  </a>
                </li>
                <li className="socials__item">
                  <a
                    className="socials__link"
                    href="https://www.facebook.com/FrieslandCampina/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="socials__text sr-text">Facebook</span>
                    <svg width="22" height="22" className="socials__icon" aria-hidden="true">
                      <use xlinkHref="#icon--facebook"></use>
                    </svg>
                  </a>
                </li>
                <li className="socials__item">
                  <a
                    className="socials__link"
                    href="https://twitter.com/FrieslndCampina"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="socials__text sr-text">Twitter</span>
                    <svg width="22" height="22" className="socials__icon" aria-hidden="true">
                      <use xlinkHref="#icon--x"></use>
                    </svg>
                  </a>
                </li>
                <li className="socials__item">
                  <a
                    className="socials__link"
                    href="https://www.instagram.com/frieslandcampina/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="socials__text sr-text">Instagram</span>
                    <svg width="22" height="22" className="socials__icon" aria-hidden="true">
                      <use xlinkHref="#icon--instagram"></use>
                    </svg>
                  </a>
                </li>
                <li className="socials__item">
                  <a
                    className="socials__link"
                    href="https://www.youtube.com/@frieslandcampina"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="socials__text sr-text">YouTube</span>
                    <svg width="22" height="22" className="socials__icon" aria-hidden="true">
                      <use xlinkHref="#icon--youtube"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__fat text--s">
            <div className="footer__columns">
              <div className="footer__column">
                <a title="Ga naar de startpagina" className="logo footer__logo" href="/nl/">
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
              </div>
              <div className="footer__column">
                <div className="footer__menu">
                  <h3 className="footer__title">Over FrieslandCampina</h3>
                  <ul className="footer__list">
                    <li className="footer__item">
                      <a className="footer__link" href="/nl/over-ons/wie-wij-zijn/">
                        <span className="footer__text-label">Wie wij zijn</span>
                      </a>
                    </li>
                    <li className="footer__item">
                      <a className="footer__link" href="/nl/brands/">
                        <span className="footer__text-label">Onze merken</span>
                      </a>
                    </li>
                    <li className="footer__item">
                      <a className="footer__link" href="/nl/duurzaamheid/voeding/">
                        <span className="footer__text-label">Voeding</span>
                      </a>
                    </li>
                    <li className="footer__item">
                      <a className="footer__link" href="/nl/duurzaamheid/">
                        <span className="footer__text-label">Duurzaamheid</span>
                      </a>
                    </li>
                    <li className="footer__item">
                      <a
                        className="footer__link"
                        href="/nl/over-ons/financiele-resultaten/financiele-verslagen-en-duurzaamheidsontwikkelingen/"
                      >
                        <span className="footer__text-label">Jaarverslagen</span>
                      </a>
                    </li>
                    <li className="footer__item">
                      <a className="footer__link" href="/nl/contact/">
                        <span className="footer__text-label">Contact opnemen</span>
                      </a>
                    </li>
                    <li className="footer__item">
                      <a className="footer__link" href="/nl/speak-up/">
                        <span className="footer__text-label">Speak Up</span>
                      </a>
                    </li>
                    <li className="footer__item">
                      <a className="footer__link" href="/nl/veelgestelde-vragen/">
                        <span className="footer__text-label">Veelgestelde vragen</span>
                      </a>
                    </li>
                    <li className="footer__item">
                      <a
                        className="footer__link"
                        href="https://careers.frieslandcampina.com/nl"
                        target="_blank"
                      >
                        <span className="footer__text-label">Careers</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer__column">
                <div className="footer__menu">
                  <h3 className="footer__title">Eigendom van boeren</h3>
                  <ul className="footer__list">
                    <li className="footer__item">
                      <a className="footer__link" href="/nl/eigendom-van-boeren/">
                        <span className="footer__text-label">Eigendom van boeren</span>
                      </a>
                    </li>
                    <li className="footer__item">
                      <a className="footer__link" href="/nl/melk-leveren/">
                        <span className="footer__text-label">
                          Melk leveren aan FrieslandCampina
                        </span>
                      </a>
                    </li>
                    <li className="footer__item">
                      <a
                        className="footer__link"
                        href="/nl/eigendom-van-boeren/nederlands-erfgoed/"
                      >
                        <span className="footer__text-label">Nederlands erfgoed</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer__column">
                <div className="footer__menu">
                  <h3 className="footer__title">Media</h3>
                  <ul className="footer__list">
                    <li className="footer__item">
                      <a className="footer__link" href="/nl/nieuws/">
                        <span className="footer__text-label">Nieuws</span>
                      </a>
                    </li>
                    <li className="footer__item">
                      <a className="footer__link" href="/nl/stories/">
                        <span className="footer__text-label">Stories</span>
                      </a>
                    </li>
                    <li className="footer__item">
                      <a className="footer__link" href="/nl/media/">
                        <span className="footer__text-label">Mediarelaties</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer__menu"></div>
              </div>
            </div>
          </div>
          <div className="footer__skinny text--xs">
            <ul className="footer__disclaimer disclaimer">
              <li className="disclaimer__item">
                <a className="disclaimer__link" href="/nl/disclaimer/">
                  <span className="disclaimer__text-label">Disclaimer</span>
                </a>
              </li>
              <li className="disclaimer__item">
                <a className="disclaimer__link" href="/nl/algemene-voorwaarden/">
                  <span className="disclaimer__text-label">Algemene voorwaarden</span>
                </a>
              </li>
              <li className="disclaimer__item">
                <a
                  className="disclaimer__link"
                  href="https://privacy.frieslandcampina.com/nl"
                  target="_blank"
                >
                  <span className="disclaimer__text-label">Privacy verklaring</span>
                </a>
              </li>
              <li className="disclaimer__item">
                <a
                  className="disclaimer__link"
                  href="https://privacy.frieslandcampina.com/nl/cookie/"
                  target="_blank"
                >
                  <span className="disclaimer__text-label">Cookie verklaring</span>
                </a>
              </li>
              <li className="disclaimer__item">
                <a
                  className="disclaimer__link"
                  href="https://melkweb.frieslandcampina.com/inloggen"
                  target="_blank"
                >
                  <span className="disclaimer__text-label">Melkweb</span>
                </a>
              </li>
              <li className="disclaimer__item">
                <a
                  className="disclaimer__link"
                  href="https://performancemanager.successfactors.eu/"
                  target="_blank"
                >
                  <span className="disclaimer__text-label">Horizon</span>
                </a>
              </li>
              <li className="disclaimer__item">
                <a
                  className="disclaimer__link"
                  href="https://frieslandcampina.service-now.com/finder"
                  target="_blank"
                >
                  <span className="disclaimer__text-label">Finder</span>
                </a>
              </li>
              <li className="disclaimer__item">
                <a className="optanon-toggle-display disclaimer__link">
                  <span className="disclaimer__text-label">Cookie settings</span>
                </a>
              </li>
            </ul>
            <p className="footer__copyright">© FrieslandCampina 2025</p>
          </div>
        </div>
      </footer>
    );
  }
  return <FooterDefaultComponent {...props} />;
};
