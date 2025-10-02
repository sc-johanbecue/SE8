'use client';

import {
  ComponentParams,
  ComponentRendering,
  TextField,
  LinkField,
  RichTextField,
  ImageField,
} from '@sitecore-content-sdk/nextjs';
import React, { JSX, useEffect, useState } from 'react';

type ItemFields = {
  Title: TextField;
  Image: ImageField;
  Text: RichTextField;
  ButtonLabel: TextField;
  Link: LinkField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: ItemFields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  console.log('ktm header props:', JSON.stringify(props));
  const [menuOpen, setMenuOpen] = useState(false)
  const [languageSelectorOpen, setLanguageSelectorOpen] = useState(false)
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const htmlElement = document.documentElement

    if (menuOpen) {
      htmlElement.classList.remove("nav--hidden")
      htmlElement.classList.add("nav--open")
    } else {
      htmlElement.classList.remove("nav--open")
      htmlElement.classList.add("nav--hidden")
    }

    // Cleanup on unmount
    return () => {
      htmlElement.classList.remove("nav--open", "nav--hidden")
    }
  }, [menuOpen, openAccordions])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const toggleLanguageSelector = () => {
    setLanguageSelectorOpen(!languageSelectorOpen)
  }

  const toggleAccordion = (key: string) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
      <div className="container">
        <div className="nav">
          {/* Mobile menu toggle */}
          <button className="nav__menu-toggle js-menu-toggle" onClick={toggleMenu}>
            <i className="icon icon-menu"></i>
            <i className="icon icon-delete"></i>
          </button>

          {/* Desktop menu toggle */}
          <button className="nav__menu-toggle nav__menu-toggle-desktop js-menu-toggle-desktop" onClick={toggleMenu}>
            <i className="icon icon-delete"></i>
          </button>

          {/* Main navigation */}
          <nav
            className="nav__items js-nav-items js-calcviewheight"
            data-offset-sm="185"
            data-offset-md="115"
            data-height-auto-lg="true"
            data-height-auto-xl="true"
            style={{
              height: "auto",
              display: "block"
            }}
          >
            <ul>
              {/* Models Menu Item */}
              <li className="js-has-items accordion" data-opened={openAccordions["models"] ? "true" : "false"}>
                <span className="heading" onClick={() => toggleAccordion("models")}>
                  Models
                </span>
                <div className="content" style={{ display: openAccordions["models"] ? "block" : "none" }}>
                  <ul className="nav__models js-nav-models">
                    {/* Range selector for mobile */}
                    <li
                      className="range-list js-range-list accordion"
                      data-opened={openAccordions["range-list"] ? "true" : "false"}
                    >
                      <span className="heading d-lg-none" onClick={() => toggleAccordion("range-list")}>
                        Select range
                      </span>
                      <div className="content" style={{ display: openAccordions["range-list"] ? "block" : "none" }}>
                        <ul>
                          <li data-segment-id="d82d7930-0f94-4a8b-b4c6-a1b566d05432">MOTOCROSS</li>
                          <li data-segment-id="95d4b6f8-2d1c-40f7-9b83-bfbbd75909f1">ENDURO</li>
                          <li data-segment-id="ec0599e9-b40a-4bb9-bf26-46afcdcf46c9">Electric</li>
                          <li data-segment-id="abb3e7a0-a780-4f71-8eae-02b9729ba89b">Dual Sport</li>
                          <li data-segment-id="6f4e2c1b-2d4e-4c69-9bcc-4c53a63ed15f">Adventure</li>
                          <li data-segment-id="19708f84-2503-40c5-ac82-73ac44970597">SPORTS TOURER</li>
                          <li data-segment-id="03778f93-33cf-4d7d-9e1a-f1f289b3e1aa">Supermoto</li>
                          <li data-segment-id="02b7a25c-5ef1-4566-9823-2f25838d79ce">Naked Bike</li>
                          <li data-segment-id="f0ec3513-8bf1-453e-b68f-ba53e4087495">Supersport</li>
                          <li data-segment-id="e1a8a633-bb16-42a8-b833-c279fe6b338f">X-BOW</li>
                          <li data-segment-id="a69dfa94-c6dc-4034-a266-e41d8ca6de8e">BRABUS</li>
                        </ul>
                      </div>
                    </li>

                    {/* Segments list */}
                    <li>
                      <ul className="segments-list js-segment-list">
                        {/* MOTOCROSS segment */}
                        <li data-segment-id="d82d7930-0f94-4a8b-b4c6-a1b566d05432">
                          <div className="container active-element">
                            <aside>
                              <p className="heading-h3">
                                <a href="https://www.ktm.com/en-be/models/motocross.html">
                                  MOTOCROSS
                                  <i className="icon icon-arrow_right"></i>
                                </a>
                              </p>
                              <p className="d-none d-md-block heading-h5"></p>
                              <div className="c-btn d-none d-md-flex">
                                <a
                                  href="https://www.ktm.com/en-be/models/motocross.html"
                                  className="c-btn__link c-btn__link--primary-dark"
                                >
                                  DISCOVER
                                </a>
                              </div>
                            </aside>
                            <section>
                              <ul className="engine-list-wrapper">
                                {/* 4-stroke engine list */}
                                <li
                                  className="js-engine-list accordion engine-list"
                                  data-opened={openAccordions["motocross-4stroke"] ? "true" : "false"}
                                >
                                  <div
                                    className="heading engineGroup"
                                    onClick={() => toggleAccordion("motocross-4stroke")}
                                  >
                                    4-stroke
                                  </div>
                                  <div
                                    className="content"
                                    style={{ display: openAccordions["motocross-4stroke"] ? "block" : "none" }}
                                  >
                                    <ul className="bike-list">
                                      <li>
                                        <a href="https://www.ktm.com/en-be/models/motocross/4-stroke/2026-ktm-450-sx-f.html">
                                          2026 KTM 450 SX-F
                                        </a>
                                      </li>
                                      <li>
                                        <a href="https://www.ktm.com/en-be/models/motocross/4-stroke/2026-ktm-350-sx-f.html">
                                          2026 KTM 350 SX-F
                                        </a>
                                      </li>
                                      <li>
                                        <a href="https://www.ktm.com/en-be/models/motocross/4-stroke/2026-ktm-250-sx-f.html">
                                          2026 KTM 250 SX-F
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </li>

                                {/* 2-stroke engine list */}
                                <li
                                  className="js-engine-list accordion engine-list"
                                  data-opened={openAccordions["motocross-2stroke"] ? "true" : "false"}
                                >
                                  <div
                                    className="heading engineGroup"
                                    onClick={() => toggleAccordion("motocross-2stroke")}
                                  >
                                    2-stroke
                                  </div>
                                  <div
                                    className="content"
                                    style={{ display: openAccordions["motocross-2stroke"] ? "block" : "none" }}
                                  >
                                    <ul className="bike-list">
                                      <li>
                                        <a href="https://www.ktm.com/en-be/models/motocross/2-stroke/2026-ktm-300-sx.html">
                                          2026 KTM 300 SX
                                        </a>
                                      </li>
                                      <li>
                                        <a href="https://www.ktm.com/en-be/models/motocross/2-stroke/2026-ktm-250-sx.html">
                                          2026 KTM 250 SX
                                        </a>
                                      </li>
                                      <li>
                                        <a href="https://www.ktm.com/en-be/models/motocross/2-stroke/2026-ktm-125-sx.html">
                                          2026 KTM 125 SX
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                              </ul>
                            </section>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>

              {/* X-BOW Menu Item */}
              <li className="js-has-items accordion" data-opened={openAccordions["xbow"] ? "true" : "false"}>
                <span className="heading" onClick={() => toggleAccordion("xbow")}>
                  X-BOW
                </span>
                <div className="content" style={{ display: openAccordions["xbow"] ? "block" : "none" }}>
                  <ul className="submenu">
                    <li>
                      <a
                        className="headerNavLink headerNavLink--lvl2"
                        href="https://www.ktm.com/en-be/models/x-bow.html"
                      >
                        Explore
                      </a>
                    </li>
                    <li>
                      <a
                        className="headerNavLink headerNavLink--lvl2"
                        href="https://www.ktm.com/en-be/X-BOW/models.html"
                      >
                        Models
                      </a>
                    </li>
                    <li>
                      <a className="headerNavLink headerNavLink--lvl2" href="https://www.ktm.com/en-be/news.html#x-bow">
                        X-BOW News
                      </a>
                    </li>
                    <li>
                      <a
                        className="headerNavLink headerNavLink--lvl2"
                        href="https://www.ktm.com/en-be/X-BOW/motorsport.html"
                      >
                        Racing
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              {/* PowerParts & PowerWear Menu Item */}
              <li className="js-has-items accordion" data-opened={openAccordions["parts"] ? "true" : "false"}>
                <span className="heading" onClick={() => toggleAccordion("parts")}>
                  PowerParts & PowerWear
                </span>
                <div className="content" style={{ display: openAccordions["parts"] ? "block" : "none" }}>
                  <ul className="submenu">
                    <li>
                      <a
                        className="headerNavLink headerNavLink--lvl2"
                        href="https://www.ktm.com/en-be/parts---wear/powerparts/products.html"
                      >
                        PowerParts
                      </a>
                    </li>
                    <li>
                      <a
                        className="headerNavLink headerNavLink--lvl2"
                        href="https://www.ktm.com/en-be/parts---wear/powerwear/products.html"
                      >
                        PowerWear
                      </a>
                    </li>
                    <li>
                      <a
                        className="headerNavLink headerNavLink--lvl2"
                        href="https://www.ktm.com/en-be/parts---wear/powerwear-collections.html"
                      >
                        PowerWear Collections
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Racing Menu Item */}
              <li className="js-has-items accordion" data-opened={openAccordions["racing"] ? "true" : "false"}>
                <span className="heading" onClick={() => toggleAccordion("racing")}>
                  Racing
                </span>
                <div className="content" style={{ display: openAccordions["racing"] ? "block" : "none" }}>
                  <ul className="submenu">
                    <li>
                      <a
                        className="headerNavLink headerNavLink--lvl2"
                        href="https://www.ktm.com/en-be/news.html#racing"
                      >
                        Racing News
                      </a>
                    </li>
                    <li>
                      <a
                        className="headerNavLink headerNavLink--lvl2"
                        href="https://www.ktm.com/en-be/racing/road-racing.html"
                      >
                        MOTOGP™
                      </a>
                    </li>
                    <li>
                      <a
                        className="headerNavLink headerNavLink--lvl2"
                        href="https://www.ktm.com/en-be/racing/mx-sx.html"
                      >
                        Motocross/Supercross
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              {/* KTM World Menu Item */}
              <li className="js-has-items accordion" data-opened={openAccordions["world"] ? "true" : "false"}>
                <span className="heading" onClick={() => toggleAccordion("world")}>
                  KTM World
                </span>
                <div className="content" style={{ display: openAccordions["world"] ? "block" : "none" }}>
                  <ul className="submenu">
                    <li>
                      <a
                        className="headerNavLink headerNavLink--lvl2"
                        href="https://www.ktm.com/en-be/news.html#promotions"
                      >
                        Power Deals
                      </a>
                    </li>
                    <li>
                      <a className="headerNavLink headerNavLink--lvl2" href="https://www.ktm.com/en-be/news.html">
                        News
                      </a>
                    </li>
                    <li>
                      <a
                        className="headerNavLink headerNavLink--lvl2"
                        href="https://www.ktm.com/en-be/news.html#events"
                      >
                        Events
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Service Menu Item */}
              <li className="js-has-items accordion" data-opened={openAccordions["service"] ? "true" : "false"}>
                <span className="heading" onClick={() => toggleAccordion("service")}>
                  Service
                </span>
                <div className="content" style={{ display: openAccordions["service"] ? "block" : "none" }}>
                  <ul className="submenu">
                    <li>
                      <a
                        className="headerNavLink headerNavLink--lvl2"
                        href="https://www.ktm.com/en-be/service/warranty.html"
                      >
                        Warranty
                      </a>
                    </li>
                    <li>
                      <a
                        className="headerNavLink headerNavLink--lvl2"
                        href="https://www.ktm.com/en-be/service/manuals.html"
                      >
                        Manuals & Maintenance
                      </a>
                    </li>
                    <li>
                      <a
                        className="headerNavLink headerNavLink--lvl2"
                        href="https://www.ktm.com/en-be/service/spare-parts-finder.html"
                      >
                        Spare Parts Finder
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Power Deals - Direct Link */}
              <li data-opened="false">
                <a
                  className="heading headerNavLink headerNavLink--lvl1"
                  href="https://www.ktm.com/en-be/news.html#promotions"
                >
                  Power Deals
                </a>
              </li>
            </ul>
          </nav>

          {/* Aside navigation (language selector, dealer search, etc.) */}
          <aside className="nav__aside nav__aside--hidden-text">
            <nav className="nav__aside-links js-lang-nav">
              {/* Dealer Search */}
              <a
                className="nav__aside-links--dealer-search"
                data-label="Find a dealer"
                href="https://www.ktm.com/en-be/find-a-dealer.html"
              >
                <i className="icon icon-location"></i>
                <span>Find a dealer</span>
              </a>

              {/* Language/Country Selector */}
              <a
                className="c-culture-switch__toggle js-lang-toggle nav__aside-links--culture-switch"
                data-label="Belgium"
                onClick={(e) => {
                  e.preventDefault()
                  toggleLanguageSelector()
                }}
              >
                <i className="icon icon-country"></i>
                <span>Belgium</span>
              </a>

              {/* Language selector dropdown */}
              <section className="nav__aside-items" style={{ display: languageSelectorOpen ? "block" : "none" }}>
                <div className="c-culture-switch js-lang-items">
                  <div className="c-culture-switch__container container component-fullwidth--padded-lg">
                    <article className="c-culture-switch__column">
                      <section className="c-culture-switch__area">
                        <ul className="c-culture-switch__list js-lang-list">
                          <li>
                            <a href="https://www.ktm.com/en-int.languageswitch.html">International</a>
                          </li>
                        </ul>
                      </section>

                      <section className="c-culture-switch__area">
                        <div className="c-culture-switch__region-name">Europe</div>
                        <ul className="c-culture-switch__list js-lang-list c-culture-switch__list--two-cols">
                          <li>
                            <a href="https://www.ktm.com/de-at.languageswitch.html">Austria</a>
                          </li>
                          <li>
                            <a href="https://www.ktm.com/en-be.languageswitch.html">Belgium (en)</a>
                          </li>
                          <li>
                            <a href="https://www.ktm.com/fr-be.languageswitch.html">Belgium (fr)</a>
                          </li>
                          <li>
                            <a href="https://www.ktm.com/en-hr.languageswitch.html">Croatia</a>
                          </li>
                          <li>
                            <a href="https://www.ktm.com/de-de.languageswitch.html">Germany</a>
                          </li>
                          <li>
                            <a href="https://www.ktm.com/fr-fr.languageswitch.html">France</a>
                          </li>
                          <li>
                            <a href="https://www.ktm.com/it-it.languageswitch.html">Italy</a>
                          </li>
                          <li>
                            <a href="https://www.ktm.com/es-es.languageswitch.html">Spain</a>
                          </li>
                          <li>
                            <a href="https://www.ktm.com/en-gb.languageswitch.html">United Kingdom</a>
                          </li>
                        </ul>
                      </section>
                    </article>

                    <article className="c-culture-switch__column">
                      <section className="c-culture-switch__area">
                        <div className="c-culture-switch__region-name">North America</div>
                        <ul className="c-culture-switch__list js-lang-list">
                          <li>
                            <a href="https://www.ktm.com/en-ca.languageswitch.html">Canada (en)</a>
                          </li>
                          <li>
                            <a href="https://www.ktm.com/fr-ca.languageswitch.html">Canada (fr)</a>
                          </li>
                          <li>
                            <a href="https://www.ktm.com/es-mx.languageswitch.html">Mexico</a>
                          </li>
                          <li>
                            <a href="https://www.ktm.com/en-us.languageswitch.html">United States</a>
                          </li>
                        </ul>
                      </section>

                      <section className="c-culture-switch__area">
                        <div className="c-culture-switch__region-name">Asia</div>
                        <ul className="c-culture-switch__list js-lang-list c-culture-switch__list--two-cols">
                          <li>
                            <a href="https://www.ktm.com/zh-cn.languageswitch.html">China</a>
                          </li>
                          <li>
                            <a href="https://www.ktm.com/en-in.languageswitch.html">India</a>
                          </li>
                          <li>
                            <a href="https://www.ktm.com/ja-jp.languageswitch.html">Japan</a>
                          </li>
                          <li>
                            <a href="https://www.ktm.com/en-kr.languageswitch.html">South Korea</a>
                          </li>
                        </ul>
                      </section>
                    </article>
                  </div>
                </div>
              </section>

              {/* My.KTM Link */}
              <a
                className="nav__aside-links--myhub"
                data-label="My.KTM"
                href="http://my.ktm.com/be/en/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon icon-user"></i>
                <span>My.KTM</span>
              </a>
            </nav>

            {/* KTM Logo */}
            <a href="https://www.ktm.com/en-be.html" className="nav__logo">
              <img
                src="https://www.ktm.com/content/dam/websites/ktm-com/language-masters/en/logo/37860_KTM_LogoPodium_orange_RGB.jpg"
                alt="KTM Main Page"
              />
            </a>
          </aside>
        </div>
      </div>
  )
};
