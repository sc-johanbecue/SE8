import React from 'react';
import { TextField, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

interface Fields {
  Title: TextField;
  Subtitle: TextField;
  Image: ImageField;
}

type SodexoBannerProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const SodexoBannerDefaultComponent = (props: SodexoBannerProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: SodexoBannerProps): JSX.Element => {
  if (props.fields) {
    return (
      <>
        <div className="Footer_footer__container__9eH4G">
          <div className="Footer_footer__head__mIP7D Footer_footer__head--with-share-price__jtoxJ">
            <div className="Footer_footer__head__logo__OaDzG">
              <Link href="/">
                <img
                  alt="Sodoxo Logo"
                  width="134"
                  height="45"
                  src="https://edge.sitecorecloud.io/sodexofrance1-sodexocorpsites-prod-e74c/media/Project/Sodexo-Corp/Global/Media-prod/Images/Logos/Sodexo_Logotype_White.png?h=45&amp;iar=0&amp;w=134"
                />
              </Link>
            </div>
            <div className="Footer_footer__head__socials__msT4u Footer_footer__head__socials--with-share-price__D93x_">
              <ul className="Footer_footer__head__socials__list__QTegF">
                <li>
                  <Link href="https://twitter.com/sodexogroup" target="_blank">
                    <span className="Icon_icon__qNAb6" style={{ height: '48px', width: '48px' }}>
                      <svg aria-hidden="true" viewBox="0 0 48 48">
                        <use xlinkHref="#icons_twitter"></use>
                      </svg>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/company/sodexo/" target="_blank">
                    <span className="Icon_icon__qNAb6" style={{ height: '48px', width: '48px' }}>
                      <svg aria-hidden="true" viewBox="0 0 48 48">
                        <use xlinkHref="#icons_linkedin"></use>
                      </svg>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/sodexogroup/" target="_blank">
                    <span className="Icon_icon__qNAb6" style={{ height: '48px', width: '48px' }}>
                      <svg aria-hidden="true" viewBox="0 0 48 48">
                        <use xlinkHref="#icons_instagram"></use>
                      </svg>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.youtube.com/user/SodexoGroup" target="_blank">
                    <span className="Icon_icon__qNAb6" style={{ height: '48px', width: '48px' }}>
                      <svg aria-hidden="true" viewBox="0 0 48 48">
                        <use xlinkHref="#icons_youtube"></use>
                      </svg>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="Footer_footer__internal__uzXh9">
            <nav
              aria-label=""
              aria-labelledby="footer-links-1-title-desktop"
              className="FooterNavigationDesktop_root__7QEtS"
            >
              <p
                className="FooterNavigationDesktop_navTitle___Glwe"
                id="footer-links-1-title-desktop"
              >
                Who we are ?
              </p>
              <ul>
                <li className="FooterNavigation_navItem__v16e9">
                  <Link
                    target=""
                    className="FooterLink_footer-link__V8b7V"
                    href="/about-us/sodexo-in-brief"
                  >
                    Sodexo in Brief
                  </Link>
                </li>
                <li className="FooterNavigation_navItem__v16e9">
                  <Link
                    title="Opens web page (same window)"
                    target=""
                    className="FooterLink_footer-link__V8b7V"
                    href="/about-us/our-history"
                  >
                    Our History
                  </Link>
                </li>
                <li className="FooterNavigation_navItem__v16e9">
                  <Link
                    title="Opens web page (same window)"
                    target=""
                    className="FooterLink_footer-link__V8b7V"
                    href="/working-at-sodexo/more-than-a-job"
                  >
                    Working at Sodexo
                  </Link>
                </li>
              </ul>
            </nav>
            <nav
              aria-label=""
              aria-labelledby="footer-links-1-title-mobile"
              className="FooterNavigationMobile_root__g6X6B"
            >
              <div className="Accordion_accordion__p5_s4 Accordion_accordion--no-border-bottom__rbmqT Accordion_accordion__container--footer__rGnvi">
                <h4 className="Accordion_font-h4__CUD41 FooterNavigationMobile_accordionTrigger__C5eCl">
                  <button
                    aria-controls="accordion-content-Who we are ?"
                    aria-expanded="false"
                    className="Accordion_accordion__trigger__T_PXV"
                    id="footer-links-1-title-mobile"
                    type="button"
                  >
                    <span className="Accordion_accordion__trigger-text__UHIcW">Who we are ?</span>
                    <span
                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5 Icon_icon--rotate-90___Kml5"
                      style={{ height: '24px', width: '24px' }}
                    >
                      <svg aria-hidden="true" viewBox="0 0 24 24">
                        <use xlinkHref="#icons_chevron"></use>
                      </svg>
                    </span>
                  </button>
                </h4>
                <div
                  aria-labelledby="footer-links-1-title-mobile"
                  className="Accordion_accordion__panel__Ud_8G"
                  role="region"
                >
                  <div
                    aria-hidden="true"
                    className="Accordion_accordion__panel__content__JtKyH"
                    //inert="true"
                  >
                    <ul>
                      <li className="FooterNavigation_navItem__v16e9">
                        <Link
                          target=""
                          className="FooterLink_footer-link__V8b7V"
                          href="/about-us/sodexo-in-brief"
                        >
                          Sodexo in Brief
                        </Link>
                      </li>
                      <li className="FooterNavigation_navItem__v16e9">
                        <Link
                          title="Opens web page (same window)"
                          target=""
                          className="FooterLink_footer-link__V8b7V"
                          href="/about-us/our-history"
                        >
                          Our History
                        </Link>
                      </li>
                      <li className="FooterNavigation_navItem__v16e9">
                        <Link
                          title="Opens web page (same window)"
                          target=""
                          className="FooterLink_footer-link__V8b7V"
                          href="/working-at-sodexo/more-than-a-job"
                        >
                          Working at Sodexo
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
            <nav
              aria-label=""
              aria-labelledby="footer-links-2-title-desktop"
              className="FooterNavigationDesktop_root__7QEtS"
            >
              <p
                className="FooterNavigationDesktop_navTitle___Glwe"
                id="footer-links-2-title-desktop"
              >
                What we love
              </p>
              <ul>
                <li className="FooterNavigation_navItem__v16e9">
                  <Link
                    title="Opens web page (same window)"
                    target=""
                    className="FooterLink_footer-link__V8b7V"
                    href="/brands-services/food/services"
                  >
                    Food
                  </Link>
                </li>
                <li className="FooterNavigation_navItem__v16e9">
                  <Link
                    title="Opens web page (same window)"
                    target=""
                    className="FooterLink_footer-link__V8b7V"
                    href="/corporate-responsibility/impact-on-communities/responsible-sourcing"
                  >
                    Responsible Sourcing
                  </Link>
                </li>
                <li className="FooterNavigation_navItem__v16e9">
                  <Link
                    title="Opens web page (same window)"
                    target=""
                    className="FooterLink_footer-link__V8b7V"
                    href="/corporate-responsibility/impact-on-environment/saving-resources-reducing-waste"
                  >
                    Reducing Food Waste
                  </Link>
                </li>
              </ul>
            </nav>
            <nav
              aria-label=""
              aria-labelledby="footer-links-2-title-mobile"
              className="FooterNavigationMobile_root__g6X6B"
            >
              <div className="Accordion_accordion__p5_s4 Accordion_accordion--no-border-bottom__rbmqT Accordion_accordion__container--footer__rGnvi">
                <h4 className="Accordion_font-h4__CUD41 FooterNavigationMobile_accordionTrigger__C5eCl">
                  <button
                    aria-controls="accordion-content-What we love"
                    aria-expanded="false"
                    className="Accordion_accordion__trigger__T_PXV"
                    id="footer-links-2-title-mobile"
                    type="button"
                  >
                    <span className="Accordion_accordion__trigger-text__UHIcW">What we love</span>
                    <span
                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5 Icon_icon--rotate-90___Kml5"
                      style={{ height: '24px', width: '24px' }}
                    >
                      <svg aria-hidden="true" viewBox="0 0 24 24">
                        <use xlinkHref="#icons_chevron"></use>
                      </svg>
                    </span>
                  </button>
                </h4>
                <div
                  aria-labelledby="footer-links-2-title-mobile"
                  className="Accordion_accordion__panel__Ud_8G"
                  role="region"
                >
                  <div
                    aria-hidden="true"
                    className="Accordion_accordion__panel__content__JtKyH"
                    //inert="true"
                  >
                    <ul>
                      <li className="FooterNavigation_navItem__v16e9">
                        <Link
                          title="Opens web page (same window)"
                          target=""
                          className="FooterLink_footer-link__V8b7V"
                          href="/brands-services/food/services"
                        >
                          Food
                        </Link>
                      </li>
                      <li className="FooterNavigation_navItem__v16e9">
                        <Link
                          title="Opens web page (same window)"
                          target=""
                          className="FooterLink_footer-link__V8b7V"
                          href="/corporate-responsibility/impact-on-communities/responsible-sourcing"
                        >
                          Responsible Sourcing
                        </Link>
                      </li>
                      <li className="FooterNavigation_navItem__v16e9">
                        <Link
                          title="Opens web page (same window)"
                          target=""
                          className="FooterLink_footer-link__V8b7V"
                          href="/corporate-responsibility/impact-on-environment/saving-resources-reducing-waste"
                        >
                          Reducing Food Waste
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
            <nav
              aria-label=""
              aria-labelledby="footer-links-3-title-desktop"
              className="FooterNavigationDesktop_root__7QEtS"
            >
              <p
                className="FooterNavigationDesktop_navTitle___Glwe"
                id="footer-links-3-title-desktop"
              >
                Your space
              </p>
              <ul>
                <li className="FooterNavigation_navItem__v16e9">
                  <Link
                    title="Opens web page (same window)"
                    target=""
                    className="FooterLink_footer-link__V8b7V"
                    href="/investors/shareholders/benefits-registered-shareholder"
                  >
                    Investors
                  </Link>
                </li>
                <li className="FooterNavigation_navItem__v16e9">
                  <Link
                    title="Opens web page (same window)"
                    target=""
                    className="FooterLink_footer-link__V8b7V"
                    href="/working-at-sodexo/more-than-a-job"
                  >
                    Career Seekers
                  </Link>
                </li>
                <li className="FooterNavigation_navItem__v16e9">
                  <Link
                    title="Opens web page (same window)"
                    target=""
                    className="FooterLink_footer-link__V8b7V"
                    href="/news/newsroom"
                  >
                    Newsroom
                  </Link>
                </li>
                <li className="FooterNavigation_navItem__v16e9">
                  <Link
                    title="Opens web page (same window)"
                    target=""
                    className="FooterLink_footer-link__V8b7V"
                    href="/contact-us"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
            <nav
              aria-label=""
              aria-labelledby="footer-links-3-title-mobile"
              className="FooterNavigationMobile_root__g6X6B"
            >
              <div className="Accordion_accordion__p5_s4 Accordion_accordion--no-border-bottom__rbmqT Accordion_accordion__container--footer__rGnvi">
                <h4 className="Accordion_font-h4__CUD41 FooterNavigationMobile_accordionTrigger__C5eCl">
                  <button
                    aria-controls="accordion-content-Your space"
                    aria-expanded="false"
                    className="Accordion_accordion__trigger__T_PXV"
                    id="footer-links-3-title-mobile"
                    type="button"
                  >
                    <span className="Accordion_accordion__trigger-text__UHIcW">Your space</span>
                    <span
                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5 Icon_icon--rotate-90___Kml5"
                      style={{ height: '24px', width: '24px' }}
                    >
                      <svg aria-hidden="true" viewBox="0 0 24 24">
                        <use xlinkHref="#icons_chevron"></use>
                      </svg>
                    </span>
                  </button>
                </h4>
                <div
                  aria-labelledby="footer-links-3-title-mobile"
                  className="Accordion_accordion__panel__Ud_8G"
                  role="region"
                >
                  <div
                    aria-hidden="true"
                    className="Accordion_accordion__panel__content__JtKyH"
                    //inert="true"
                  >
                    <ul>
                      <li className="FooterNavigation_navItem__v16e9">
                        <Link
                          title="Opens web page (same window)"
                          target=""
                          className="FooterLink_footer-link__V8b7V"
                          href="/investors/shareholders/benefits-registered-shareholder"
                        >
                          Investors
                        </Link>
                      </li>
                      <li className="FooterNavigation_navItem__v16e9">
                        <Link
                          title="Opens web page (same window)"
                          target=""
                          className="FooterLink_footer-link__V8b7V"
                          href="/working-at-sodexo/more-than-a-job"
                        >
                          Career Seekers
                        </Link>
                      </li>
                      <li className="FooterNavigation_navItem__v16e9">
                        <Link
                          title="Opens web page (same window)"
                          target=""
                          className="FooterLink_footer-link__V8b7V"
                          href="/news/newsroom"
                        >
                          Newsroom
                        </Link>
                      </li>
                      <li className="FooterNavigation_navItem__v16e9">
                        <Link
                          title="Opens web page (same window)"
                          target=""
                          className="FooterLink_footer-link__V8b7V"
                          href="/contact-us"
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
            <nav
              aria-label=""
              aria-labelledby="footer-links-4-title-desktop"
              className="FooterNavigationDesktop_root__7QEtS"
            >
              <p
                className="FooterNavigationDesktop_navTitle___Glwe"
                id="footer-links-4-title-desktop"
              >
                Contact Us
              </p>
              <ul>
                <li className="FooterNavigation_navItem__v16e9">
                  <Link
                    title="Opens web page (same window)"
                    target=""
                    className="FooterLink_footer-link__V8b7V"
                    href="/contact-us"
                  >
                    Frequently Asked Questions
                  </Link>
                </li>
              </ul>
            </nav>
            <nav
              aria-label=""
              aria-labelledby="footer-links-4-title-mobile"
              className="FooterNavigationMobile_root__g6X6B"
            >
              <div className="Accordion_accordion__p5_s4 Accordion_accordion--no-border-bottom__rbmqT Accordion_accordion__container--footer__rGnvi">
                <h4 className="Accordion_font-h4__CUD41 FooterNavigationMobile_accordionTrigger__C5eCl">
                  <button
                    aria-controls="accordion-content-Contact Us"
                    aria-expanded="false"
                    className="Accordion_accordion__trigger__T_PXV"
                    id="footer-links-4-title-mobile"
                    type="button"
                  >
                    <span className="Accordion_accordion__trigger-text__UHIcW">Contact Us</span>
                    <span
                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5 Icon_icon--rotate-90___Kml5"
                      style={{ height: '24px', width: '24px' }}
                    >
                      <svg aria-hidden="true" viewBox="0 0 24 24">
                        <use xlinkHref="#icons_chevron"></use>
                      </svg>
                    </span>
                  </button>
                </h4>
                <div
                  aria-labelledby="footer-links-4-title-mobile"
                  className="Accordion_accordion__panel__Ud_8G"
                  role="region"
                >
                  <div
                    aria-hidden="true"
                    className="Accordion_accordion__panel__content__JtKyH"
                    //inert="true"
                  >
                    <ul>
                      <li className="FooterNavigation_navItem__v16e9">
                        <Link
                          title="Opens web page (same window)"
                          target=""
                          className="FooterLink_footer-link__V8b7V"
                          href="/contact-us"
                        >
                          Frequently Asked Questions
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <ul className="Footer_footer__legal__kX_g7">
            <li className="Footer_footer__legal__copyright__J2jTQ">
              <p>© 2025 Sodexo. All rights reserved</p>
            </li>
            <li className="Footer_footer-placeholder__item__Ygn2f Footer_footer__legal__item__XHCzb">
              <Link
                title="Opens page (same window)"
                target=""
                className="FooterLink_footer-link__V8b7V"
                href="/legal/legal-privacy"
              >
                Terms &amp; Conditions
              </Link>
            </li>
            <li className="Footer_footer-placeholder__item__Ygn2f Footer_footer__legal__item__XHCzb">
              <Link
                title="Opens page (new window)"
                target=""
                className="FooterLink_footer-link__V8b7V"
                href="/legal/cookie-policy"
              >
                Cookie Policy
              </Link>
            </li>
            <li className="Footer_footer-placeholder__item__Ygn2f Footer_footer__legal__item__XHCzb">
              <Link
                href="javascript:;return false;"
                className="FooterLink_footer-link__V8b7V ot-sdk-show-settings"
              >
                Cookie Preferences
              </Link>
            </li>
            <li className="Footer_footer-placeholder__item__Ygn2f Footer_footer__legal__item__XHCzb">
              <Link
                title="Opens page (same window)"
                target=""
                className="FooterLink_footer-link__V8b7V"
                href="/legal/online-data-protection-policy"
              >
                Online Privacy Policy
              </Link>
            </li>
            <li className="Footer_footer-placeholder__item__Ygn2f Footer_footer__legal__item__XHCzb">
              <Link
                title="Opens page (new window)"
                target=""
                className="FooterLink_footer-link__V8b7V"
                href="/legal/global-data-protection-policy"
              >
                Data Protection Policy
              </Link>
            </li>
            <li className="Footer_footer-placeholder__item__Ygn2f Footer_footer__legal__item__XHCzb">
              <Link
                href="https://vdp.sodexo.com"
                className="FooterLink_footer-link__V8b7V"
                title="Opens website (new window)"
                target=""
              >
                Vulnerability Disclosure Policy{' '}
              </Link>
            </li>
          </ul>
        </div>
        <div
          data-testid="footer-bottom-container"
          className="Surface_surface__Y0_rx Footer_footer__external__3urWR"
        >
          <ul
            className="Footer_footer__external__container__6nINM"
            data-testid="footer-external-id"
          >
            <li className="Footer_footer__external-item_mobile__YAk_l">
              <div className="Accordion_accordion__p5_s4 Accordion_accordion--no-border-bottom__rbmqT Accordion_accordion__container--footer__rGnvi">
                <h4 className="Accordion_font-h4__CUD41 Footer_footer__external--active__wrgzG">
                  <button
                    aria-controls="accordion-content-Sodexo other websites"
                    aria-expanded="false"
                    className="Accordion_accordion__trigger__T_PXV Accordion_accordion__trigger--no-padding__mai45"
                    id="accordion-button-Sodexo other websites"
                    type="button"
                  >
                    <span className="Accordion_accordion__trigger-text__UHIcW">
                      Sodexo other websites
                    </span>
                    <span
                      className="Icon_icon__qNAb6 Icon_icon--arrow-rtl__xN7T5 Icon_icon--rotate-90___Kml5"
                      style={{ height: '24px', width: '24px' }}
                    >
                      <svg aria-hidden="true" viewBox="0 0 24 24">
                        <use xlinkHref="#icons_chevron"></use>
                      </svg>
                    </span>
                  </button>
                </h4>
                <div
                  aria-labelledby="accordion-button-Sodexo other websites"
                  className="Accordion_accordion__panel__Ud_8G"
                  role="region"
                >
                  <div
                    aria-hidden="true"
                    className="Accordion_accordion__panel__content__JtKyH"
                    //inert="true"
                  >
                    <ul>
                      <li className="Footer_footer-placeholder__item__Ygn2f Footer_footer__external__placeholder__oLAAZ">
                        <Link href="undefined" className="FooterLink_footer-link__V8b7V"></Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="Footer_footer__external__heading__cWKQf Footer_footer__external-item_desktop__2n0NP">
              <p>Sodexo other websites</p>
            </li>
            <li className="Footer_footer-placeholder__item__Ygn2f Footer_footer__external__item__qc_so Footer_footer__external-item_desktop__2n0NP">
              <Link href="undefined" className="FooterLink_footer-link__V8b7V"></Link>
            </li>
          </ul>
        </div>
      </>
    );
  }

  return <SodexoBannerDefaultComponent {...props} />;
};
