/* eslint-disable jsx-a11y/role-has-required-aria-props */
import React from 'react';
import { LinkField, Link as JssLink } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

interface Fields {
  Login: LinkField;
  Register: LinkField;
}

type EuroConsumersHeaderProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const EuroConsumersHeaderDefaultComponent = (props: EuroConsumersHeaderProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">EuroConsumers Header</span>
    </div>
  </div>
);

export const Default = (props: EuroConsumersHeaderProps): JSX.Element => {
  if (props.fields) {
    return (
      <>
        <input
          type="checkbox"
          className="hidden pillarCheckbox"
          id="checkbox-nav-pillar-1"
          name="pillar"
        />
        <input
          type="checkbox"
          className="hidden pillarCheckbox"
          id="checkbox-nav-pillar-2"
          name="pillar"
        />
        <input
          type="checkbox"
          className="hidden pillarCheckbox"
          id="checkbox-nav-pillar-3"
          name="pillar"
        />
        <input
          type="checkbox"
          className="hidden pillarCheckbox"
          id="checkbox-nav-pillar-4"
          name="pillar"
        />
        <input
          type="checkbox"
          className="hidden pillarCheckbox"
          id="checkbox-nav-pillar-5"
          name="pillar"
        />
        <input
          type="checkbox"
          className="hidden pillarCheckbox"
          id="checkbox-nav-desktop-hamburger"
        />
        <input type="checkbox" className="hidden" id="checkbox-nav-mobile-hamburger" />
        <input type="checkbox" className="hidden" id="checkbox-nav-mobile-search" />
        <div className="header">
          <div className="constrained">
            <div className="flex__row header__wrapper">
              <div className="flex__col-md-9 flex__col-xs-12 header__wrapper__common">
                <div className="header__wrapper__common__main flex__row no-margin">
                  <div className="flex__col flex__col-xs-narrow no-padding mobile-only hamburger-mobile">
                    <label htmlFor="checkbox-nav-mobile-hamburger">
                      <i className="icon-menu" />
                    </label>
                  </div>
                  <div className="flex__col flex__col-xs-narrow no-padding hide-on-mobile hamburger">
                    <label htmlFor="checkbox-nav-desktop-hamburger">
                      <i className="icon-menu" />
                    </label>
                  </div>
                  <div
                    className="flex__col-md-auto flex__col-xs-auto logo"
                    data-selector="header-logo"
                    data-type="ALineHeaderLogoController"
                    data-rendering="ALineHeaderLogo"
                    data-datasource="{F033F3B1-1B8E-41CC-858F-E5041E32B3A2}"
                    style={{ display: 'block' }}
                  >
                    <Link href="/">
                      <img
                        src="https://www.test-aankoop.be/-/media/ta/ta-logos-2022/main-nl/logo-nl-be.svg?rev=7b79558a-f851-4f92-a555-8b5f4a17bb67&la=nl-BE&h=55&mw=300&w=300&hash=7A9164EDEA31367261169C054E725BA1"
                        className="no-margin"
                        height={188}
                        data-selector="header-logo-image"
                        alt="logo"
                        width={1020}
                        fetchPriority="low"
                      />
                    </Link>
                  </div>
                  <div className="flex__col flex__col-xs-narrow no-padding mobile-only search-mobile">
                    <label htmlFor="checkbox-nav-mobile-search">
                      <i className="icon-search-2" />
                    </label>
                  </div>
                  <div
                    className="flex__col flex__col-xs-narrow no-padding mobile-only user"
                    data-selector="personal-area-menu-mobile"
                    data-type="ALineHeaderPersonalAreaMenuController"
                    data-rendering="ALineHeaderPersonalAreaMenuMobile"
                    data-datasource="{C931E70B-1217-4041-9DEF-28291B45C40F}"
                  >
                    <span data-plugin="iframeAuthentication">
                      <Link
                        data-plugin="modal"
                        data-popup-type="inline"
                        href="#aline-authentication-modal"
                        className="login"
                        data-login-url="https://login.test-aankoop.be/?wa=wsignin1.0&wtrealm=eur%3a%2f%2feuroconsumers.pro.alinesc.nl-be%2f&wreply=https%3a%2f%2fwww.test-aankoop.be%2fCommonAPI%2fCommonBeanTrigger%2fSendLoginOkMessage%3fReturnUrl%3dsec%253a%252f%252frealm%252feuroconsumers.pro.sitecorecd.nl-be%252fZEGv_ARupv0f7MHZOObxoBtWIsR7ct_PGNfVmTPkp0zT4ZQ23-5S0NFzJTtLRwlh5iTcbmnz7QT2CR90Qr0HvtTY7vDUrhekg25p90e8L-PPMi-ZmYFP5YCjFusdq3PCnZERqOz7bQd6yVfUCNCqwJueMGiwMGOe4F_mUyBonnPX1y1nCS9y7rGYSNjMeyxxtaP-fW-pjvn6OQ1B9APLLxYJ9nA1&ectx=Y3Q6YWxpbmVfbWVudV9sb2ctaW4ucGEtam91cm5leXM&customstyle=alineiframev3"
                        data-selector="aline-authentication-modal--btn-trigger"
                        data-aline-authentication-target="login"
                        aria-label="Mijn persoonlijke ruimte mobile"
                      >
                        {/*login mobile*/}
                      </Link>
                    </span>
                  </div>
                  <div className="flex__col flex__col-md-9 flex__col-xs-12 search">
                    <div id="algolia-search">
                      <div
                        id="searchAutocomplete"
                        className="aa-Autocomplete"
                        role="combobox"
                        aria-expanded="false"
                        aria-haspopup="listbox"
                        aria-labelledby="autocomplete-0-label"
                      >
                        <form
                          className="search-form aa-Form"
                          id="SearchForm"
                          method="post"
                          role="search"
                          action=""
                          noValidate
                        >
                          <div className="search-input">
                            <span className="search-input-clearable">
                              <input
                                id="autocomplete-0-input"
                                aria-label="cerca"
                                input-mode="search"
                                name="SearchedKeyword"
                                type="search"
                                className="search-input"
                                aria-autocomplete="both"
                                aria-labelledby="autocomplete-0-label"
                                autoComplete="off"
                                autoCorrect="off"
                                autoCapitalize="off"
                                enterKeyHint="search"
                                spellCheck="false"
                                placeholder="Je zoekterm"
                                maxLength={512}
                                data-selector="searchAutocomplete"
                                value=""
                              />
                              <span className="clearable">
                                <span className="icon-x-2"></span>
                              </span>
                            </span>
                            <i className="icon-search-2"></i>
                            <button type="submit" className="search-submit">
                              Zoek
                            </button>
                          </div>
                          <div className="search-panel"></div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="header__wrapper__common__navigation flex__row no-margin hide-on-mobile"
                  data-selector="header-navigation-desktop"
                  data-type="ALineHeaderNavigationController"
                  data-rendering="ALineHeaderNavigationPillarsDesktop"
                  data-datasource="{8DD1DA7A-77B6-4412-84D2-91703C150407}"
                >
                  <label className="flex__col flex__col-md-narrow" htmlFor="checkbox-nav-pillar-1">
                    <span>Producten en diensten</span>
                  </label>
                  <label className="flex__col flex__col-md-narrow" htmlFor="checkbox-nav-pillar-2">
                    <span> Voeding en gezondheid</span>
                  </label>
                  <label className="flex__col flex__col-md-narrow" htmlFor="checkbox-nav-pillar-3">
                    <span>Je rechten</span>
                  </label>
                  <label className="flex__col flex__col-md-narrow" htmlFor="checkbox-nav-pillar-4">
                    <span>Beleggen</span>
                  </label>
                  <Link
                    className="flex__col flex__col-md-narrow"
                    href="https://www.test-aankoop.be/voordelen"
                    itemProp="url"
                  >
                    <span itemProp="name">Ledenvoordelen</span>
                  </Link>
                </div>
              </div>
              <div className="flex__col-md-3 hide-on-mobile header__wrapper__desktop ">
                <div
                  className="header__wrapper__desktop__marketing flex__row no-margin"
                  data-selector="header-marketing-box-row"
                  data-type="ALineHeaderMarketingController"
                  data-rendering="ALineHeaderMarketingBoxRow"
                  data-datasource="{7C8417C8-2515-45DF-943E-BA1E37FE58A3}"
                  role="complementary"
                >
                  <Link
                    href="https://ontdek.test-aankoop.be/2023/newmarketplace?prm_id_c=MANFIX1N&par_id_c=manchette&cop_id_c=Newheader&server=flbk"
                    target="_blank"
                    className="hide-on-mobile manchette-link"
                    aria-label="Marketing box"
                  >
                    <div className="manchette row flex__row no-margin">
                      <div className="flex__col-12 text">Ontdek Testaankoop voor slechts €2 </div>
                      <div className="flex__col-12 status">
                        <span className="star">En kies je cadeau</span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div
                  className="header__wrapper__desktop__user-info flex__row no-margin"
                  data-selector="personal-area-menu"
                  data-type="ALineHeaderPersonalAreaMenuController"
                  data-rendering="ALineHeaderPersonalAreaMenuDesktop"
                  data-datasource="{C931E70B-1217-4041-9DEF-28291B45C40F}"
                >
                  <span data-plugin="iframeAuthentication">
                    <JssLink
                      field={props.fields.Login}
                      data-plugin="modal"
                      data-popup-type="inline"
                      href="#aline-authentication-modal"
                      className="login"
                      data-login-url="https://login.test-aankoop.be/?wa=wsignin1.0&wtrealm=eur%3a%2f%2feuroconsumers.pro.alinesc.nl-be%2f&wreply=https%3a%2f%2fwww.test-aankoop.be%2fCommonAPI%2fCommonBeanTrigger%2fSendLoginOkMessage%3fReturnUrl%3dsec%253a%252f%252frealm%252feuroconsumers.pro.sitecorecd.nl-be%252fy3frn5CjWlh94_5VtDKtKBSoe6b6UkAr5ZlwFRo5H4-iS2LhpzswEfjBFBOpXbpEMVL6XaJ_oojxLanEnpI2_StwqlCW1a2Jv5f5GQFqp0qcb3UEAc6E7DYVg1l0lCpzxpJmwBSRmd8_1riW9dKKVOoXFNGxEAIhLH0mMzydwqZZrx1YQQR27ROSZ9cV8M8tIxmK1eYKkwbsVCKX005HOIL2I6U1&ectx=Y3Q6YWxpbmVfbWVudV9sb2ctaW4ucGEtam91cm5leXM&customstyle=alineiframev3"
                      data-selector="aline-authentication-modal--btn-trigger"
                      data-aline-authentication-target="login"
                    />
                  </span>
                  <strong className="separator">|</strong>
                  <JssLink
                    field={props.fields.Register}
                    className="register"
                    href="/word-supporter?ectx=Y3Q6YWxpbmVfbWVudV9yZWdpc3Rlci5wYS1qb3VybmV5cw&wreply=https%3a%2f%2fwww.test-aankoop.be%2f%3fint_campaign%3dpa-journeys%26int_source%3daline%26int_medium%3dmenu%26int_content%3dnone%26int_term%3dregister"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav
          className="menu"
          data-selector="header-navigation"
          data-type="ALineHeaderNavigationController"
          data-rendering="ALineHeaderNavigation"
          data-datasource="{8DD1DA7A-77B6-4412-84D2-91703C150407}"
          itemScope
          itemType="https://www.schema.org/SiteNavigationElement"
        >
          <div className="constrained">
            <div className="flex__row relative menu-container">
              <ul className="level1">
                <div id="backButton" className="mobile-only" data-level={1}>
                  Terug
                </div>
                <li className="level1__item pillar-1">
                  <input type="checkbox" className="hidden level2Checkbox" id="menu-pillar-1" />
                  <label htmlFor="menu-pillar-1" className="main">
                    <span>Producten en diensten</span>
                  </label>
                  <ul className="level2">
                    <li className="level2__item">
                      <input
                        type="checkbox"
                        className="hidden level3Checkbox"
                        id="menu-level2-36a91689af704ebeabf3ad444a0a367c"
                      />
                      <label htmlFor="menu-level2-36a91689af704ebeabf3ad444a0a367c">
                        <span>Woning &amp; energie</span>
                      </label>
                      <ul className="level3">
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-840d6220dc3642a4aa003a6e62aa1bd5"
                          />
                          <label htmlFor="menu-level3-840d6220dc3642a4aa003a6e62aa1bd5">
                            <span>Energie</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link href="/energyguide" target="_blank" itemProp="url">
                                Energy-guide
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="/woning-energie/gas-elektriciteit-mazout-pellets"
                                itemProp="url"
                              >
                                Gas, elektriciteit en mazout
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="/woning-energie/hernieuwbare-energie"
                                target="_blank"
                                itemProp="url"
                              >
                                Zonnepanelen
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/woning-energie/huis-water-verwarmen" itemProp="url">
                                Verwarming
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/woning-energie/pellets" itemProp="url">
                                Pellets
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/woning-energie/ledlampen" itemProp="url">
                                Ledlampen
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="https://www.test-aankoop.be/woning-energie/huis-water-verwarmen/dossier/periodiek-nazicht-verwarmingsketel"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">DOSSIER</div>
                                  <div className="extra__topic__title">
                                    Onderhoud van jouw verwarmingsketel
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-62f3c86b462441ff8003ed083fc45cbb"
                          />
                          <label htmlFor="menu-level3-62f3c86b462441ff8003ed083fc45cbb">
                            <span>Wonen &amp; verbouwen</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link href="/geld/renovatieleningen" itemProp="url">
                                Renovatieleningen
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/woning-energie/isolatie" itemProp="url">
                                Isolatie
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="https://www.test-aankoop.be/woning-energie/kopen/dossier/modelovereenkomsten"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">DOSSIER</div>
                                  <div className="extra__topic__title">
                                    Op zoek naar een billijke overeenkomst?
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-040cfa514a4c45c0a5cdef412f2db39c"
                          />
                          <label htmlFor="menu-level3-040cfa514a4c45c0a5cdef412f2db39c">
                            <span>Verwarming, airco &amp; luchtbehandeling</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link href="/woning-energie/huis-water-verwarmen" itemProp="url">
                                Verwarming
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/woning-energie/vaste-airco" itemProp="url">
                                Vaste airco
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/woning-energie/mobiele-airco" itemProp="url">
                                Mobiele airco
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/woning-energie/luchtontvochtiger" itemProp="url">
                                Luchtontvochtigers
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/dagelijkse-verzorging/luchtreiniger"
                                itemProp="url"
                              >
                                Luchtreinigers
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="https://www.test-aankoop.be/woning-energie/huis-koelen/dossier/oververhitting-voorkomen"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">DOSSIER</div>
                                  <div className="extra__topic__title">
                                    10 tips om je huis koel te houden
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-df3c825b8bf44cf7b1b267009a7fc1ec"
                          />
                          <label htmlFor="menu-level3-df3c825b8bf44cf7b1b267009a7fc1ec">
                            <span>Slaapkamer</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link href="/woning-energie/hoofdkussens" itemProp="url">
                                Hoofdkussens
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/woning-energie/matrassen" itemProp="url">
                                Matrassen
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/woning-energie/matrastoppers" itemProp="url">
                                Matrastoppers
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-3f7807e07f444b18845264f38c5c34eb"
                          />
                          <label htmlFor="menu-level3-3f7807e07f444b18845264f38c5c34eb">
                            <span>Keukenaccessoires</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link href="/woning-energie/keukenpapier" itemProp="url">
                                Keukenpapier
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/woning-energie/thermosflessen" itemProp="url">
                                Thermosflessen
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/woning-energie/wokpannen" itemProp="url">
                                Wokpannen
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="https://www.test-aankoop.be/woning-energie/allesreinigers/dossier/wondersponzen"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">DOSSIER</div>
                                  <div className="extra__topic__title">
                                    Wat je moet weten voor je een wonderspons gaat gebruiken
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-8c301cf434704ec198fd3fe07e4e1d17"
                          />
                          <label htmlFor="menu-level3-8c301cf434704ec198fd3fe07e4e1d17">
                            <span>Doe-het-zelf</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link href="/woning-energie/lakken" itemProp="url">
                                Lakken
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/woning-energie/muurverven" itemProp="url">
                                Muurverven
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/woning-energie/hogedrukreinigers" itemProp="url">
                                Hogedrukreinigers
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/woning-energie/doe-het-zelf" itemProp="url">
                                Alles over doe-het-zelf
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="/gezond/dagelijkse-verzorging/vervuiling/dossier/vervuiling-huis"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">DOSSIER</div>
                                  <div className="extra__topic__title">
                                    Ongezonde lucht in huis: zo pak je het aan
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-c9760a289c504016818662385fd16aea"
                          />
                          <label htmlFor="menu-level3-c9760a289c504016818662385fd16aea">
                            <span>Tuin</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link href="/woning-energie/grasmaaiers" itemProp="url">
                                Grasmaaiers
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/woning-energie/robotmaaiers" itemProp="url">
                                Robotmaaiers
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/woning-energie/kantenmaaiers" itemProp="url">
                                Kantenmaaiers
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/woning-energie/accu-heggenscharen" itemProp="url">
                                Accu-heggenscharen
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/woning-energie/takkenscharen" itemProp="url">
                                Takkenscharen
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/woning-energie/snoeischaren" itemProp="url">
                                Snoeischaren
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/woning-energie/barbecues" itemProp="url">
                                Barbecues
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/woning-energie/hogedrukreinigers" itemProp="url">
                                Hogedrukreinigers
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="https://www.test-aankoop.be/woning-energie/tuin/dossier/onderhoud-gazon"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">DOSSIER</div>
                                  <div className="extra__topic__title">Onderhoud van je gazon</div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-d4dd000658d24bc69d909ad09392bd2a"
                          />
                          <label htmlFor="menu-level3-d4dd000658d24bc69d909ad09392bd2a">
                            <span>Onderhoud en huishouden</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link href="/woning-energie/allesreinigers" itemProp="url">
                                Allesreinigers
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/woning-energie/badkamerreinigers" itemProp="url">
                                Badkamerreinigers
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/woning-energie/wc-reinigers" itemProp="url">
                                Wc-reinigers
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/woning-energie/wc-papier" itemProp="url">
                                Wc-papier
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/woning-energie/wasmiddelen" itemProp="url">
                                Wasmiddelen
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/woning-energie/afwasmiddelen" itemProp="url">
                                Afwasmiddelen
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/woning-energie/vaatwasmiddelen" itemProp="url">
                                Vaatwasmiddelen
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="https://www.test-aankoop.be/woning-energie/allesreinigers/dossier/wondersponzen"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">DOSSIER</div>
                                  <div className="extra__topic__title">
                                    Wat je moet weten voor je een wonderspons gaat gebruiken
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level__seeAllLink" itemProp="name">
                          <Link
                            href="https://www.test-aankoop.be/overzichtspagina?cat=woning-energie"
                            itemProp="url"
                          >
                            Zie meer
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="level2__item">
                      <input
                        type="checkbox"
                        className="hidden level3Checkbox"
                        id="menu-level2-da8ab27ca1344cc3b7e9c7f22ae2e1c4"
                      />
                      <label htmlFor="menu-level2-da8ab27ca1344cc3b7e9c7f22ae2e1c4">
                        <span>Huishoudelektro</span>
                      </label>
                      <ul className="level3">
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-417d5fcb449e427da632e1d3f72bf6ec"
                          />
                          <label htmlFor="menu-level3-417d5fcb449e427da632e1d3f72bf6ec">
                            <span>Groot elektro</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link href="/huishoudelektro/diepvriezers" itemProp="url">
                                Diepvriezers
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/huishoudelektro/koelkasten" itemProp="url">
                                Koelkasten
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/huishoudelektro/ovens" itemProp="url">
                                Ovens
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/huishoudelektro/vaatwassers" itemProp="url">
                                Vaatwassers
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="/huishoudelektro/wasmachines"
                                className="red"
                                itemProp="url"
                              >
                                Wasmachines
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/huishoudelektro/droogkasten" itemProp="url">
                                Droogkasten
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/huishoudelektro/betrouwbaarheid" itemProp="url">
                                Betrouwbare merken
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="https://www.test-aankoop.be/huishoudelektro/wasmachines/dossier/dossierwasdrogers"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">DOSSIER</div>
                                  <div className="extra__topic__title">
                                    Wassen en drogen in 1 toestel: voor- en nadelen
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-7446f91f41754362986e20cd0e2325b3"
                          />
                          <label htmlFor="menu-level3-7446f91f41754362986e20cd0e2325b3">
                            <span>Koken</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link href="/huishoudelektro/ovens" itemProp="url">
                                Ovens
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/huishoudelektro/microgolfovens" itemProp="url">
                                Microgolfovens
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/huishoudelektro/airfryers" itemProp="url">
                                Airfryers
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/huishoudelektro/friteuses" itemProp="url">
                                Friteuses
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/huishoudelektro/keukenrobots" itemProp="url">
                                Keukenrobots
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/huishoudelektro/multicookers" itemProp="url">
                                Multicookers
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/huishoudelektro/blenders" itemProp="url">
                                Blenders
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/huishoudelektro/broodmachines" itemProp="url">
                                Broodmachines
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/huishoudelektro/soepmakers" itemProp="url">
                                Soepmakers
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="https://www.test-aankoop.be/huishoudelektro/keukenweegschalen/dossier/nauwkeurig-wegen-met-digitale-keukenweegschaal"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">DOSSIER</div>
                                  <div className="extra__topic__title">
                                    Zo weeg je nauwkeurig met een digitale keukenweegschaal
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-2539a053f8244e8f89500a51ecc45a39"
                          />
                          <label htmlFor="menu-level3-2539a053f8244e8f89500a51ecc45a39">
                            <span>Koffiemachines</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link href="/huishoudelektro/espressomachines" itemProp="url">
                                Koffiemachines
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/huishoudelektro/koffiemachines-filter" itemProp="url">
                                Koffiezetapparaten met filter
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="https://www.test-aankoop.be/huishoudelektro/espressomachines/dossier/koffiemachine-schoonmaken"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">DOSSIER</div>
                                  <div className="extra__topic__title">
                                    Hoe moet ik mijn koffiemachine schoonmaken?{' '}
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-01fc248545564c9bb51dbfadafddec62"
                          />
                          <label htmlFor="menu-level3-01fc248545564c9bb51dbfadafddec62">
                            <span>Lichaamsverzorging</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/dagelijkse-verzorging/elektrische-tandenborstels"
                                itemProp="url"
                              >
                                Elektrische tandenborstels
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="https://www.test-aankoop.be/huishoudelektro/haardrogers/tip/veilig-drogen"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">TIPS</div>
                                  <div className="extra__topic__title">Je haar veilig föhnen</div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-5439f382c35e450c8b7e1d4b3711a793"
                          />
                          <label htmlFor="menu-level3-5439f382c35e450c8b7e1d4b3711a793">
                            <span>Huishoudtoestellen</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="/huishoudelektro/strijkijzers-en-stoomcentrales"
                                itemProp="url"
                              >
                                Strijkijzers &amp; stoomcentrales
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/huishoudelektro/robotstofzuigers" itemProp="url">
                                Robotstofzuigers
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/huishoudelektro/steelstofzuigers" itemProp="url">
                                Steelstofzuigers
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/huishoudelektro/stofzuigers" itemProp="url">
                                Sledestofzuigers
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/huishoudelektro/stoomreinigers" itemProp="url">
                                Stoomreinigers
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/woning-energie/hogedrukreinigers" itemProp="url">
                                Hogedrukreinigers
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="level__seeAllLink" itemProp="name">
                          <Link
                            href="https://www.test-aankoop.be/overzichtspagina?cat=huishoudelektro"
                            itemProp="url"
                          >
                            Zie meer
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="level2__item">
                      <input
                        type="checkbox"
                        className="hidden level3Checkbox"
                        id="menu-level2-99dc05825a0e4a10b242c2d686bfde09"
                      />
                      <label htmlFor="menu-level2-99dc05825a0e4a10b242c2d686bfde09">
                        <span>Hightech</span>
                      </label>
                      <ul className="level3">
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-fee21a80d407453b81412450085006dc"
                          />
                          <label htmlFor="menu-level3-fee21a80d407453b81412450085006dc">
                            <span>Internet &amp; telecom</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link href="/hightech/telecom" itemProp="url">
                                Telecomabonnementen
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/hightech/internet" itemProp="url">
                                Internet
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/hightech/wifi-versterkers" itemProp="url">
                                Wifi-versterkers
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/familie-prive/webshops" itemProp="url">
                                Online kopen
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="https://www.test-aankoop.be/hightech/internet/dossier/downloaden-of-streamen"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">DOSSIER</div>
                                  <div className="extra__topic__title">
                                    Wat is het verschil tussen downloaden en streamen?
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-84e5be74952949e988e0c850a59ae630"
                          />
                          <label htmlFor="menu-level3-84e5be74952949e988e0c850a59ae630">
                            <span>Smartphones, tablets &amp; accessoires</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link href="/hightech/gsms-en-smartphones" itemProp="url">
                                Smartphones
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/hightech/telecom" itemProp="url">
                                Mobiele abonnementen
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="/hightech/telecom/tip/becover"
                                target="_blank"
                                itemProp="url"
                              >
                                Netwerkdekking
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/hightech/tablets" itemProp="url">
                                Tablets
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/hightech/e-readers" itemProp="url">
                                E-readers
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/hightech/wearables" itemProp="url">
                                Smartwatches &amp; activity trackers
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/hightech/universele-usb-c-oplader" itemProp="url">
                                Universele USB-C Opladers
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/hightech/powerbanks" itemProp="url">
                                Powerbanks
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="https://www.test-aankoop.be/hightech/telecom/dossier/juiste-internetproviders"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">DOSSIER</div>
                                  <div className="extra__topic__title">
                                    Hoe kies je een internetprovider?
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-998b45389bd74ea696dfe7d7955eeb74"
                          />
                          <label htmlFor="menu-level3-998b45389bd74ea696dfe7d7955eeb74">
                            <span>Computers, accessoires &amp; gaming</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link href="/hightech/laptops" itemProp="url">
                                Laptops
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/hightech/computerschermen" itemProp="url">
                                Computerschermen
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/hightech/printers" itemProp="url">
                                Printers
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/hightech/inktpatronen" itemProp="url">
                                Inktpatronen
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/hightech/externe-ssd-schijven" itemProp="url">
                                Externe SSD-schijven
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/hightech/gaming" itemProp="url">
                                Gaming
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/hightech/gaming-headset" itemProp="url">
                                Gaming headsets
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/hightech/game-consoles" itemProp="url">
                                Gameconsoles
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/hightech/controllers-spelconsole" itemProp="url">
                                Game controllers
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="https://www.test-aankoop.be/hightech/laptops/dossier/een-back-up-maken"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">DOSSIER</div>
                                  <div className="extra__topic__title">
                                    Zo maak je de beste back-ups
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-7ca6bab2125c4f58aac187c7735f608b"
                          />
                          <label htmlFor="menu-level3-7ca6bab2125c4f58aac187c7735f608b">
                            <span>Televisie &amp; audio</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link href="/hightech/tv-s" itemProp="url">
                                Televisies
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/hightech/soundbars" itemProp="url">
                                Soundbars
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/hightech/koptelefoons-en-oortjes" itemProp="url">
                                Koptelefoons en oortjes
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/hightech/draadloze-speakers" itemProp="url">
                                Draadloze speakers
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/hightech/dab-plus-radio" itemProp="url">
                                DAB+ radio&quot;s
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/hightech/beamers" itemProp="url">
                                Beamers
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="https://www.test-aankoop.be/hightech/tv-s/dossier/hoe-het-beeld-van-uw-televisie-perfect-afstellen"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">DOSSIER</div>
                                  <div className="extra__topic__title">
                                    Zo stel je het beeld van je televisie perfect af
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-e681c69476ca4bbd9b995f61c1ef795a"
                          />
                          <label htmlFor="menu-level3-e681c69476ca4bbd9b995f61c1ef795a">
                            <span>Foto &amp; batterijen</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link href="/hightech/foto-video" itemProp="url">
                                Fototoestellen
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/hightech/fotodiensten" itemProp="url">
                                Online fotodiensten
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/hightech/batterijen" itemProp="url">
                                Batterijen
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="https://www.test-aankoop.be/hightech/fotodiensten/nieuws/beste-fotodiensten"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">NIEUWS</div>
                                  <div className="extra__topic__title">
                                    De beste diensten voor het maken van fotoalbums
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-0e2ea734cafe4418a8e9426a4bc4e6a5"
                          />
                          <label htmlFor="menu-level3-0e2ea734cafe4418a8e9426a4bc4e6a5">
                            <span>Software &amp; cyberbeveiliging</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link href="/hightech/cloudopslag" itemProp="url">
                                Cloudopslag
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/hightech/vpn-software" itemProp="url">
                                VPN-diensten
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/hightech/antivirus" itemProp="url">
                                Veiligheids- &amp; antivirussoftware
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/hightech/wachtwoordmanagers" itemProp="url">
                                Wachtwoordmanagers
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="https://www.test-aankoop.be/hightech/internet/dossier/downloaden-of-streamen"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">DOSSIER</div>
                                  <div className="extra__topic__title">
                                    Wat is het verschil tussen downloaden en streamen?
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-750999209ab84d638cce4574fdf87d83"
                          />
                          <label htmlFor="menu-level3-750999209ab84d638cce4574fdf87d83">
                            <span>Slimme woning &amp; toestellen</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link href="/hightech/bewakingscamera" itemProp="url">
                                IP camera&quot;s
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/hightech/slimme-video-deurbellen" itemProp="url">
                                Deurbellen met camera
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/woning-energie/slimme-thermostaten" itemProp="url">
                                Slimme thermostaten
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/woning-energie/slimme-radiatorknoppen" itemProp="url">
                                Slimme radiatorknoppen
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/huishoudelektro/robotstofzuigers" itemProp="url">
                                Robotstofzuigers
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/hightech/smart-locks" itemProp="url">
                                Smart locks
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/hightech/slimme-stekkers" itemProp="url">
                                Slimme stekkers
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/hightech/smart-home" itemProp="url">
                                Alles over slimme woning
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="https://www.test-aankoop.be/hightech/bewakingscamera/dossier/veiligheid-en-privacy"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">DOSSIER</div>
                                  <div className="extra__topic__title">
                                    Hoe bescherm ik mijn camera of deurbel tegen hackers?
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level__seeAllLink" itemProp="name">
                          <Link
                            href="https://www.test-aankoop.be/overzichtspagina?cat=hightech"
                            itemProp="url"
                          >
                            Zie meer
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="level2__item">
                      <input
                        type="checkbox"
                        className="hidden level3Checkbox"
                        id="menu-level2-4210a3fc0f1e40b5ad8b9dc53f52b770"
                      />
                      <label htmlFor="menu-level2-4210a3fc0f1e40b5ad8b9dc53f52b770">
                        <span>Mobiliteit</span>
                      </label>
                      <ul className="level3">
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-9dd7119216a344609f622219539efa2b"
                          />
                          <label htmlFor="menu-level3-9dd7119216a344609f622219539efa2b">
                            <span>Auto</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link href="/mobiliteit/auto-s" itemProp="url">
                                Auto&quot;s
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="/mobiliteit/auto-s/vergelijker-elektrische-auto-plug-in-hybride"
                                itemProp="url"
                              >
                                Elektrische auto&quot;s &amp; plug-in-hybrides
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="/mobiliteit/auto-s/vergelijker-tweedehandsautos"
                                itemProp="url"
                              >
                                Tweedehandsauto&quot;s
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/mobiliteit/banden" itemProp="url">
                                Banden
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/geld/autoleningen" itemProp="url">
                                Autoleningen
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/geld/autoverzekeringen" itemProp="url">
                                Autoverzekeringen
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="https://www.test-aankoop.be/mobiliteit/openbaar-vervoer-gedeelde-mobiliteit/dossier/autodelen-interessant-voor-jou"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">DOSSIER</div>
                                  <div className="extra__topic__title">
                                    Autodelen: interessant voor jou?
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-031005d477c24783abf603f04e66b1ef"
                          />
                          <label htmlFor="menu-level3-031005d477c24783abf603f04e66b1ef">
                            <span>Fietsen &amp; tweewielers</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link href="/mobiliteit/fietsen" itemProp="url">
                                Elektrische fietsen
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/mobiliteit/fietshelmen" itemProp="url">
                                Fietshelmen
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/hightech/fiets-gps" itemProp="url">
                                Fiets-gps
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="https://www.test-aankoop.be/mobiliteit/fietsen/dossier/urban-ebikes-2"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">DOSSIER</div>
                                  <div className="extra__topic__title">De beste urban e-bike</div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-03b3c6957a594d70b065daea7b5a9646"
                          />
                          <label htmlFor="menu-level3-03b3c6957a594d70b065daea7b5a9646">
                            <span>Openbaar vervoer &amp; gedeelde mobiliteit</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="/mobiliteit/openbaar-vervoer-gedeelde-mobiliteit"
                                itemProp="url"
                              >
                                Openbaar vervoer &amp; gedeelde mobiliteit
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="level__seeAllLink" itemProp="name">
                          <Link
                            href="https://www.test-aankoop.be/overzichtspagina?cat=mobiliteit"
                            itemProp="url"
                          >
                            Zie meer
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="level2__item">
                      <input
                        type="checkbox"
                        className="hidden level3Checkbox"
                        id="menu-level2-735cbc57b5cd4f599e9fb883759f6b7c"
                      />
                      <label htmlFor="menu-level2-735cbc57b5cd4f599e9fb883759f6b7c">
                        <span>Geld &amp; verzekeringen</span>
                      </label>
                      <ul className="level3">
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-049d4d22b041492e97c837673522c2f1"
                          />
                          <label htmlFor="menu-level3-049d4d22b041492e97c837673522c2f1">
                            <span>Betalen</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link href="/geld/zichtrekeningen" itemProp="url">
                                Zichtrekeningen
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/geld/kredietkaarten" itemProp="url">
                                Kredietkaarten
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="https://www.test-aankoop.be/geld/zichtrekeningen/dossier/betalen-met-uw-smartphone"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">DOSSIER</div>
                                  <div className="extra__topic__title">
                                    Hoe betalen met je smartphone?
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-0f5e718d909848239280e9e87438a022"
                          />
                          <label htmlFor="menu-level3-0f5e718d909848239280e9e87438a022">
                            <span>Lenen</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link href="/geld/hypotheekleningen" itemProp="url">
                                Hypotheekleningen
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/geld/autoleningen" itemProp="url">
                                Autoleningen
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/geld/persoonlijke-leningen" itemProp="url">
                                Persoonlijke leningen
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/geld/renovatieleningen" itemProp="url">
                                Renovatieleningen
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="https://www.test-aankoop.be/geld/persoonlijke-leningen/modelbrief/leningsovereenkomst"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">MODELDOCUMENT</div>
                                  <div className="extra__topic__title">Leningsovereenkomst</div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-7b82d2c16f094a48935059c7e86732cc"
                          />
                          <label htmlFor="menu-level3-7b82d2c16f094a48935059c7e86732cc">
                            <span>Verzekeren</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link href="/geld/autoverzekeringen" itemProp="url">
                                Autoverzekering
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/gezondheidszorg/hospitalisatieverzekering"
                                itemProp="url"
                              >
                                Hospitalisatieverzekeringen
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/geld/reisbijstandsverzekeringen" itemProp="url">
                                Reisbijstandsverzekeringen
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/geld/familiale-verzekeringen" itemProp="url">
                                Familiale verzekeringen
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/geld/verzekeringen" itemProp="url">
                                Alles over verzekeringen
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="https://www.test-aankoop.be/geld/autoverzekeringen/dossier/autoverzekering-voor-jongeren"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">DOSSIER</div>
                                  <div className="extra__topic__title">
                                    Autoverzekering voor jongeren
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-23663a3b8dcc404eac575904aadef536"
                          />
                          <label htmlFor="menu-level3-23663a3b8dcc404eac575904aadef536">
                            <span>Sparen &amp; beleggen</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link href="/geld/spaarrekeningen" itemProp="url">
                                Spaarrekeningen
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/geld/pensioensparen" itemProp="url">
                                Pensioen en pensioensparen
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/invest/beleggen"
                                itemProp="url"
                              >
                                Beleggen
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="https://www.test-aankoop.be/geld/spaarrekeningen/dossier/gunstige-fiscale-regeling-voor-spaarrekeningen"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">DOSSIER</div>
                                  <div className="extra__topic__title">
                                    Gunstige fiscale regeling voor spaarrekeningen
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-a5bdcc9382d6414fb2992effb6818847"
                          />
                          <label htmlFor="menu-level3-a5bdcc9382d6414fb2992effb6818847">
                            <span>Belastingen betalen</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link href="/geld/belastingen" itemProp="url">
                                Belastingen
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/familie-prive/erfenis" itemProp="url">
                                Overlijden en nalatenschap
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="https://www.test-aankoop.be/geld/belastingen/dossier/overhoop-met-de-fiscus"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">DOSSIER</div>
                                  <div className="extra__topic__title">
                                    Je rechten en plichten tegenover de fiscus
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level__seeAllLink" itemProp="name">
                          <Link
                            href="https://www.test-aankoop.be/overzichtspagina?cat=geld"
                            itemProp="url"
                          >
                            Zie meer
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="level2__item">
                      <input
                        type="checkbox"
                        className="hidden level3Checkbox"
                        id="menu-level2-c17797b8b5fb4fb6af4128c9babc44bf"
                      />
                      <label htmlFor="menu-level2-c17797b8b5fb4fb6af4128c9babc44bf">
                        <span>Familie &amp; privé</span>
                      </label>
                      <ul className="level3">
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-ada396850dd6465faff60bdc31015d62"
                          />
                          <label htmlFor="menu-level3-ada396850dd6465faff60bdc31015d62">
                            <span>Vakantie &amp; vrije tijd</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link href="/familie-prive/reizen" itemProp="url">
                                Reizen
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/familie-prive/vrije-tijd" itemProp="url">
                                Vrije tijd
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-96d642ff914a4fc4ab94ce4b0426a11a"
                          />
                          <label htmlFor="menu-level3-96d642ff914a4fc4ab94ce4b0426a11a">
                            <span>Verhuizen</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/verhuischecklist"
                                itemProp="url"
                              >
                                Verhuischecklist
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="https://www.test-aankoop.be/geld/verzekeringen/antwoord-van-expert/verhuizen-en-verzekeringen"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">ANTWOORD VAN EXPERT</div>
                                  <div className="extra__topic__title">
                                    Wat moet je doen met je verzekering bij verhuis?
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-e71752c186054a4d95e1d82cf9f9fdfa"
                          />
                          <label htmlFor="menu-level3-e71752c186054a4d95e1d82cf9f9fdfa">
                            <span>Baby&quot;s &amp; kinderen</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link href="/familie-prive/ouderschap" itemProp="url">
                                Luiers
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/dagelijkse-verzorging/babydoekjes"
                                itemProp="url"
                              >
                                Babydoekjes
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/dagelijkse-verzorging/anti-luisproducten"
                                itemProp="url"
                              >
                                Antimuggenmiddelen
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/baby-kinderen/jonge-ouder"
                                itemProp="url"
                              >
                                Jonge ouders
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/familie-prive/ouderschap" itemProp="url">
                                Ouderschap
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="https://www.test-aankoop.be/familie-prive/luiers/dossier/luiers-wegwerp-of-bio-afbreekbaar"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">DOSSIER</div>
                                  <div className="extra__topic__title">
                                    Kiezen tussen gewone wegwerpluiers of biologisch afbreekbare
                                    luiers?
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-c5fff908860146e281158d38dcd94dc0"
                          />
                          <label htmlFor="menu-level3-c5fff908860146e281158d38dcd94dc0">
                            <span>Huisdieren</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link href="/woning-energie/hondenvoer" itemProp="url">
                                Hondenvoer
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/woning-energie/kattenvoer" itemProp="url">
                                Kattenvoer
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/woning-energie/huisdieren" itemProp="url">
                                Alles over huisdieren
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="https://www.test-aankoop.be/woning-energie/huisdieren/dossier/kosten-hond-of-kat"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">DOSSIER</div>
                                  <div className="extra__topic__title">
                                    De kosten van een hond of een kat
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-3078967277484b6a808ce236ff2d6b90"
                          />
                          <label htmlFor="menu-level3-3078967277484b6a808ce236ff2d6b90">
                            <span>Shoppen en kopen</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link href="/familie-prive/webshops" itemProp="url">
                                Online kopen
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/acties/ratemydeal" itemProp="url">
                                Rate my deal
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/familie-prive/solden" itemProp="url">
                                Solden &amp; promoties
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/familie-prive/supermarkten" itemProp="url">
                                Supermarkten
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="https://www.test-aankoop.be/familie-prive/webshops/dossier/oplichterij-via-internet"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">DOSSIER</div>
                                  <div className="extra__topic__title">
                                    Oplichterij via internet
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-8bcb72028fb2428ebbec1955c77e3658"
                          />
                          <label htmlFor="menu-level3-8bcb72028fb2428ebbec1955c77e3658">
                            <span>Duurzaamheid</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link href="/familie-prive/duurzaamheid" itemProp="url">
                                Duurzaamheid
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="https://www.test-aankoop.be/familie-prive/duurzaamheid/dossier/greenwashing"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">DOSSIER</div>
                                  <div className="extra__topic__title">
                                    Laat je niet misleiden door greenwashing
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level__seeAllLink" itemProp="name">
                          <Link
                            href="https://www.test-aankoop.be/overzichtspagina?cat=familie-prive"
                            itemProp="url"
                          >
                            Zie meer
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="level__seeAllLink" itemProp="name">
                      <Link href="/alles-over-producten-en-diensten" itemProp="url">
                        Alles over producten en diensten
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="level1__item pillar-2">
                  <input type="checkbox" className="hidden level2Checkbox" id="menu-pillar-2" />
                  <label htmlFor="menu-pillar-2" className="main">
                    <span> Voeding en gezondheid</span>
                  </label>
                  <ul className="level2">
                    <li className="level2__item">
                      <input
                        type="checkbox"
                        className="hidden level3Checkbox"
                        id="menu-level2-9e168f7b96aa478f92b378513ba3604d"
                      />
                      <label htmlFor="menu-level2-9e168f7b96aa478f92b378513ba3604d">
                        <span>Voedingsmiddelen</span>
                      </label>
                      <ul className="level3">
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-bf4aaf24bd04447ba80d06aa5f0a7ce2"
                          />
                          <label htmlFor="menu-level3-bf4aaf24bd04447ba80d06aa5f0a7ce2">
                            <span>Kruidenierswaren</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/voeding/meel-mixen-volkorenbrood"
                                itemProp="url"
                              >
                                Meel en mixen voor volkorenbrood
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/voeding/olijfolie"
                                itemProp="url"
                              >
                                Olijfolie
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/voeding/bolognesesaus"
                                itemProp="url"
                              >
                                Bolognesesaus
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/voeding/chips"
                                itemProp="url"
                              >
                                Chips
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/voeding/granola"
                                itemProp="url"
                              >
                                Granola
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/voeding/mueslirepen"
                                itemProp="url"
                              >
                                Mueslirepen
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/voeding/ontbijtgranen"
                                itemProp="url"
                              >
                                Ontbijtgranen
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/voeding/beschuiten-crackers"
                                itemProp="url"
                              >
                                Beschuiten
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/voeding/pure-chocolade"
                                itemProp="url"
                              >
                                Chocolade
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="/gezond/voeding/bolognesesaus/antwoord-van-expert/recept-voor-tomatensaus-bolognese"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">ANTWOORD VAN EXPERT</div>
                                  <div className="extra__topic__title">
                                    Recept voor echte tomatensaus bolognese
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-6de9974ac1ed437bb5564544f2c3df66"
                          />
                          <label htmlFor="menu-level3-6de9974ac1ed437bb5564544f2c3df66">
                            <span>Verse hartige producten</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/voeding/fish-sticks"
                                itemProp="url"
                              >
                                Fishsticks
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/voeding/vegetarische-burgers"
                                itemProp="url"
                              >
                                Vegetarische burgers
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/voeding/vegetarische-balletjes-falafels"
                                itemProp="url"
                              >
                                Vegetarische balletjes en falafel
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/voeding/gekookte-ham" itemProp="url">
                                Gekookte hammen
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/voeding/gevulde-pasta"
                                itemProp="url"
                              >
                                Gevulde pasta&quot;s
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/voeding/pizza"
                                itemProp="url"
                              >
                                Pizza&quot;s
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/voeding/mozzarella"
                                itemProp="url"
                              >
                                Mozzarella&quot;s
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="/gezond/voeding/voeding/dossier/vis-alle-nuttige-info"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">DOSSIER</div>
                                  <div className="extra__topic__title">
                                    Alles wat je over vis moet weten
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-ba23b5b416ef4f28a68f6c6af47d8eac"
                          />
                          <label htmlFor="menu-level3-ba23b5b416ef4f28a68f6c6af47d8eac">
                            <span>Verse zoete producten</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/voeding/melkdesserts"
                                itemProp="url"
                              >
                                Melkdesserts
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/voeding/yoghurt"
                                itemProp="url"
                              >
                                Yoghurt
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/voeding/zuivel-kinderen"
                                itemProp="url"
                              >
                                Zuivelproducten voor kinderen
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/voeding/vanille-ijs"
                                itemProp="url"
                              >
                                Vanille-ijs
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="/gezond/voeding/yoghurt/nieuws/hoe-zelf-yoghurt-maken"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">NIEUWS</div>
                                  <div className="extra__topic__title">
                                    Hoe maak je zelf yoghurt? (met video)
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-e3ec85b5f04045b2baf734d4ecdb9615"
                          />
                          <label htmlFor="menu-level3-e3ec85b5f04045b2baf734d4ecdb9615">
                            <span>Dranken</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/voeding/koffie"
                                itemProp="url"
                              >
                                Koffie
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/voeding/wijn" itemProp="url">
                                Wijn
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/voeding/schuimwijnen" itemProp="url">
                                Schuimwijn
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/voeding/fruitsappen"
                                itemProp="url"
                              >
                                Sap
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="/gezond/voeding/koffie/dossier/cafeine"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">DOSSIER</div>
                                  <div className="extra__topic__title">
                                    Wat doet cafeïne met je lichaam?
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-f9d3b22e7593489bb66eadf5455be386"
                          />
                          <label htmlFor="menu-level3-f9d3b22e7593489bb66eadf5455be386">
                            <span>Voeding en voedingssupplementen</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/voeding/etikettering"
                                itemProp="url"
                              >
                                Etikettering
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/voeding/gezonde-voeding"
                                itemProp="url"
                              >
                                Gezonde voeding
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/voeding/voedingssupplementen"
                                itemProp="url"
                              >
                                Voedingssupplementen
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/voeding/vegetarische-voeding"
                                itemProp="url"
                              >
                                Vegetarische voeding
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/voeding/intoleranties-en-allergieen"
                                itemProp="url"
                              >
                                Allergieën en intoleranties
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="/gezond/voeding/gezonde-voeding/dossier/nutri-score"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">DOSSIER</div>
                                  <div className="extra__topic__title">
                                    Maak gezondere keuzes met de Nutri-Score
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-9b23b7f559a944b8b32f0ca5074620f6"
                          />
                          <label htmlFor="menu-level3-9b23b7f559a944b8b32f0ca5074620f6">
                            <span>Diëten en afvallen</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/voeding/afvallen"
                                itemProp="url"
                              >
                                Afvallen
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/voeding/gezonde-voeding/dossier/vergelijkdieten"
                                itemProp="url"
                              >
                                Diëten vergelijken
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/voeding/afvallen/bereken-zelf/body-mass-index"
                                itemProp="url"
                              >
                                Je BMI berekenen
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="/gezond/voeding/gezonde-voeding/dossier/nutri-score"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">DOSSIER</div>
                                  <div className="extra__topic__title">
                                    Maak gezondere keuzes met de Nutri-Score
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-812122eaaad94c8c896fc99c55f6a006"
                          />
                          <label htmlFor="menu-level3-812122eaaad94c8c896fc99c55f6a006">
                            <span> Voedselveiligheid &amp; additieven</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/voeding/voedselveiligheid-en-additieven"
                                itemProp="url"
                              >
                                Voedselveiligheid &amp; additieven
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/voeding/etikettering"
                                itemProp="url"
                              >
                                Etikettering
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/voeding/duurzaamheid-en-milieu-impact"
                                itemProp="url"
                              >
                                Duurzaamheid &amp; milieu-impact
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="/gezond/voeding/duurzaamheid-en-milieu-impact/dossier/duurzamevoeding"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">DOSSIER</div>
                                  <div className="extra__topic__title">
                                    Duurzame voeding: 10 voorbeelden{' '}
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-c30e304d37f04dfcb01457e1dc474bae"
                          />
                          <label htmlFor="menu-level3-c30e304d37f04dfcb01457e1dc474bae">
                            <span>Huisdieren</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link href="/woning-energie/hondenvoer" itemProp="url">
                                Hondenvoer
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/woning-energie/kattenvoer" itemProp="url">
                                Kattenvoer
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/woning-energie/huisdieren" itemProp="url">
                                Alles over huisdieren
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="https://www.test-aankoop.be/woning-energie/hondenvoer/antwoord-van-expert/hoeveelheid-voer-brokken-hond"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">ANTWOORD VAN EXPERT</div>
                                  <div className="extra__topic__title">
                                    Hoeveel gram brokken moet een hond eten per dag?
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level__seeAllLink" itemProp="name">
                          <Link
                            href="https://www.test-aankoop.be/gezond/overzichtspagina?cat=voeding"
                            itemProp="url"
                          >
                            Zie meer
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="level2__item">
                      <input
                        type="checkbox"
                        className="hidden level3Checkbox"
                        id="menu-level2-04cd0e6453c54d3582a17d33f02d259a"
                      />
                      <label htmlFor="menu-level2-04cd0e6453c54d3582a17d33f02d259a">
                        <span> Hygiëne, schoonheid en welzijn</span>
                      </label>
                      <ul className="level3">
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-14aef923453544eb82de8148743c6f47"
                          />
                          <label htmlFor="menu-level3-14aef923453544eb82de8148743c6f47">
                            <span>Zonneproducten</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/dagelijkse-verzorging/zonnecreme"
                                itemProp="url"
                              >
                                Zonnecrèmes
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/dagelijkse-verzorging/aftersuns"
                                itemProp="url"
                              >
                                Aftersuns
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/dagelijkse-verzorging/uv-werende-kleding"
                                itemProp="url"
                              >
                                UV-werende shirts voor kinderen
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="/gezond/dagelijkse-verzorging/zonneproducten/dossier/verstandig-in-de-zon"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">DOSSIER</div>
                                  <div className="extra__topic__title">
                                    Hoe kun je je huid optimaal beschermen?
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-70a831209e5b4f23ba4cdda3548bea76"
                          />
                          <label htmlFor="menu-level3-70a831209e5b4f23ba4cdda3548bea76">
                            <span>Lichaamsverzorging</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/dagelijkse-verzorging/haarconditioner"
                                itemProp="url"
                              >
                                Haarconditioners
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/dagelijkse-verzorging/shampoo-bars"
                                itemProp="url"
                              >
                                Shampoobars
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/dagelijkse-verzorging/douchegel"
                                itemProp="url"
                              >
                                Douchegels &amp; shower bars
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/dagelijkse-verzorging/antitranspirant-deodorant"
                                itemProp="url"
                              >
                                Deodorants
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/dagelijkse-verzorging/elektrische-tandenborstels"
                                itemProp="url"
                              >
                                Elektrische tandenborstels
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/dagelijkse-verzorging/tandpastas"
                                itemProp="url"
                              >
                                Tandpasta&quot;s
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/woning-energie/scheermessen" itemProp="url">
                                Scheermessen
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="/gezond/dagelijkse-verzorging/geteste-producten/dossier/cosmeticalabels"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">DOSSIER</div>
                                  <div className="extra__topic__title">Cosmeticalabels</div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-9964163b66da4a89846ba68ee29c2157"
                          />
                          <label htmlFor="menu-level3-9964163b66da4a89846ba68ee29c2157">
                            <span>Intieme hygiëne</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/dagelijkse-verzorging/tampons"
                                itemProp="url"
                              >
                                Tampons
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/dagelijkse-verzorging/maandverband"
                                itemProp="url"
                              >
                                Maandverbanden
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/dagelijkse-verzorging/babydoekjes"
                                itemProp="url"
                              >
                                Babydoekjes
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="/gezond/dagelijkse-verzorging/geteste-producten/dossier/intieme-hygiene"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">DOSSIER</div>
                                  <div className="extra__topic__title">
                                    Geen speciale wasproducten nodig, zo verzorg je je intieme zone
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-29341f0ddc94460a912b58bf4dac8040"
                          />
                          <label htmlFor="menu-level3-29341f0ddc94460a912b58bf4dac8040">
                            <span>Schoonheid</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/dagelijkse-verzorging/dagcreme"
                                itemProp="url"
                              >
                                Dagcrèmes
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/dagelijkse-verzorging/micellair-water"
                                itemProp="url"
                              >
                                Micellair water
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/dagelijkse-verzorging/lippenbalsems"
                                itemProp="url"
                              >
                                Lippenbalsems
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/dagelijkse-verzorging/mascara"
                                itemProp="url"
                              >
                                Mascara
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="/gezond/dagelijkse-verzorging/geteste-producten/nieuws/herbruikbare-make-up-doekjes"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">NIEUWS</div>
                                  <div className="extra__topic__title">
                                    Test van 11 herbruikbare make-up doekjes
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-239823f59f784c9cb426b74c7734b260"
                          />
                          <label htmlFor="menu-level3-239823f59f784c9cb426b74c7734b260">
                            <span> Preventie</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/dagelijkse-verzorging/antimuggenmiddelen"
                                itemProp="url"
                              >
                                Antimuggenmiddelen
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/dagelijkse-verzorging/anti-luisproducten"
                                itemProp="url"
                              >
                                Anti-luisproducten
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/dagelijkse-verzorging/condooms"
                                itemProp="url"
                              >
                                Condooms
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/dagelijkse-verzorging/oordoppen"
                                itemProp="url"
                              >
                                Oordoppen
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="/gezond/dagelijkse-verzorging/anti-luisproducten/dossier/luizen-en-hoe-ze-te-lijf-gaan"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">DOSSIER</div>
                                  <div className="extra__topic__title">
                                    Wat is het beste middel tegen luizen?
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-669890bae6fb41a8933de67ca972e549"
                          />
                          <label htmlFor="menu-level3-669890bae6fb41a8933de67ca972e549">
                            <span>Huisdieren</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/dagelijkse-verzorging/hondenshampoo"
                                itemProp="url"
                              >
                                Hondenshampoo
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/woning-energie/huisdieren" itemProp="url">
                                Alles over huisdieren
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="https://www.test-aankoop.be/woning-energie/hondenvoer/antwoord-van-expert/hoeveelheid-voer-brokken-hond"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">ANTWOORD VAN EXPERT</div>
                                  <div className="extra__topic__title">
                                    Hoeveel gram brokken moet een hond eten per dag?
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level__seeAllLink" itemProp="name">
                          <Link
                            href="https://www.test-aankoop.be/gezond/overzichtspagina?cat=dagelijkse-verzorging"
                            itemProp="url"
                          >
                            Zie meer
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="level2__item">
                      <input
                        type="checkbox"
                        className="hidden level3Checkbox"
                        id="menu-level2-8409c3418a13469daf56b7c83a3cf330"
                      />
                      <label htmlFor="menu-level2-8409c3418a13469daf56b7c83a3cf330">
                        <span>Gezondheid</span>
                      </label>
                      <ul className="level3">
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-f11d856b6d3a4dfb925798bc03f9c5c1"
                          />
                          <label htmlFor="menu-level3-f11d856b6d3a4dfb925798bc03f9c5c1">
                            <span>Gezondheidsuitgaven en verzekeringen</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/gezondheidszorg/mutualiteiten"
                                itemProp="url"
                              >
                                Ziekenfondsen
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/gezondheidszorg/hospitalisatieverzekering"
                                itemProp="url"
                              >
                                Hospitalisatieverzekering
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/gezondheidszorg/medische-tarieven"
                                itemProp="url"
                              >
                                Gezondheidsuitgaven
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="/gezond/gezondheidszorg/hospitalisatie/dossier/wat-met-uw-hospitalisatieverzekering-bij-uw-pensionering"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">DOSSIER</div>
                                  <div className="extra__topic__title">
                                    Wat met je hospitalisatieverzekering bij pensioen?
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-ec075521d79f44cfad3e9446e547c4c2"
                          />
                          <label htmlFor="menu-level3-ec075521d79f44cfad3e9446e547c4c2">
                            <span>Hospitalisatie</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/gezondheidszorg/hospitalisatieverzekering"
                                itemProp="url"
                              >
                                Hospitalisatieverzekering
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/gezondheidszorg/hospitalisatie"
                                itemProp="url"
                              >
                                Hospitalisatie
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="/gezond/gezondheidszorg/hospitalisatie/bereken-zelf/de-opnameverklaring-van-a-tot-z-bereken"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">MODULE</div>
                                  <div className="extra__topic__title">
                                    De opnameverklaring van a tot z
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-a887593107564abfb908d991d735a518"
                          />
                          <label htmlFor="menu-level3-a887593107564abfb908d991d735a518">
                            <span>Medische hulpmiddelen</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/gezondheidszorg/thermometers"
                                itemProp="url"
                              >
                                Thermometers
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/gezondheidszorg/bloeddrukmeters"
                                itemProp="url"
                              >
                                Bloeddrukmeters
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/dagelijkse-verzorging/e-health"
                                itemProp="url"
                              >
                                E-health
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="/gezond/ziekten-en-geneesmiddelen/ziekten-en-gezondheidsproblemen/dossier/alles-wat-je-moet-weten-over-hypertensie"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">DOSSIER</div>
                                  <div className="extra__topic__title">
                                    Alles wat je moet weten over hypertensie
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-cde3f24ec7914f0085cf54bad2f95be4"
                          />
                          <label htmlFor="menu-level3-cde3f24ec7914f0085cf54bad2f95be4">
                            <span>Ziekten &amp; geneesmiddelen</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/ziekten-en-geneesmiddelen/ziekten-en-gezondheidsproblemen"
                                itemProp="url"
                              >
                                Ziekten
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/ziekten-en-geneesmiddelen/geneesmiddelen"
                                itemProp="url"
                              >
                                Geneesmiddelen
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/gezondheidszorg/geestelijk-gezondheid"
                                itemProp="url"
                              >
                                Geestelijke gezondheid
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/gezondheidszorg/preventie"
                                itemProp="url"
                              >
                                Preventie
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/dagelijkse-verzorging/eerste-hulp"
                                itemProp="url"
                              >
                                Eerste hulp
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="/gezond/ziekten-en-geneesmiddelen/geneesmiddelen/nieuws/ozempic"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">NIEUWS</div>
                                  <div className="extra__topic__title">
                                    Ozempic (semaglutide) om te vermageren: dit moet je weten
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-ba98cab1b8e34f91b16c70fbbe58d88b"
                          />
                          <label htmlFor="menu-level3-ba98cab1b8e34f91b16c70fbbe58d88b">
                            <span>Gezondheidszorg</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/gezondheidszorg/patientenrechten"
                                itemProp="url"
                              >
                                Patiëntenrechten
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/dagelijkse-verzorging/e-health"
                                itemProp="url"
                              >
                                E-health
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="/gezond/dagelijkse-verzorging/welzijn/nieuws/gezondheids-en-inspanningsapps"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">NIEUWS</div>
                                  <div className="extra__topic__title">
                                    Gezondheids- en inspanningsapps zijn goeie coaches, maar geen
                                    dokters
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-72b6ca5147064cba8030897a11f5adae"
                          />
                          <label htmlFor="menu-level3-72b6ca5147064cba8030897a11f5adae">
                            <span>Vervuiling</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/dagelijkse-verzorging/luchtreiniger"
                                itemProp="url"
                              >
                                Luchtreinigers
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/dagelijkse-verzorging/vervuiling"
                                itemProp="url"
                              >
                                Milieu- en chemische vervuiling
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="/gezond/dagelijkse-verzorging/vervuiling/dossier/pfas-complete-gids"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">DOSSIER</div>
                                  <div className="extra__topic__title">
                                    Wat je moet weten over PFAS
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level__seeAllLink" itemProp="name">
                          <Link
                            href="https://www.test-aankoop.be/gezond/overzichtspagina?cat=gezondheidszorg"
                            itemProp="url"
                          >
                            Zie meer
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="level2__item">
                      <input
                        type="checkbox"
                        className="hidden level3Checkbox"
                        id="menu-level2-c1f2518853294545b1ac38cee9fd2b6d"
                      />
                      <label htmlFor="menu-level2-c1f2518853294545b1ac38cee9fd2b6d">
                        <span>Baby&quot;s en kinderen</span>
                      </label>
                      <ul className="level3">
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-aa7ea7cfd5524855ace127f157e0c769"
                          />
                          <label htmlFor="menu-level3-aa7ea7cfd5524855ace127f157e0c769">
                            <span>Ouder zijn of worden</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/baby-kinderen/zwangerschap"
                                itemProp="url"
                              >
                                Zwangerschap
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/baby-kinderen/jonge-ouder"
                                itemProp="url"
                              >
                                Jonge ouder
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="/gezond/baby-kinderen/zwangerschap/dossier/pijnbestrijding"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">DOSSIER</div>
                                  <div className="extra__topic__title">
                                    Pijn bestrijden tijdens en na je bevalling
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-efe9f4873005482a8b4049299172fb0d"
                          />
                          <label htmlFor="menu-level3-efe9f4873005482a8b4049299172fb0d">
                            <span>Kinderproducten</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link href="/familie-prive/luiers" itemProp="url">
                                Luiers
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/dagelijkse-verzorging/babydoekjes"
                                itemProp="url"
                              >
                                Babydoekjes
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/dagelijkse-verzorging/anti-luisproducten"
                                itemProp="url"
                              >
                                Anti-luisproducten
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/voeding/zuivel-kinderen"
                                itemProp="url"
                              >
                                Zuivelproducten voor kinderen
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="https://www.test-aankoop.be/familie-prive/luiers/antwoord-van-expert/luiers-voor-gevoelige-huid"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">ANTWOORD VAN EXPERT</div>
                                  <div className="extra__topic__title">
                                    Welke luiers kiezen voor baby&quot;s met een gevoelige huid?
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="level__seeAllLink" itemProp="name">
                          <Link
                            href="https://www.test-aankoop.be/gezond/overzichtspagina?cat=baby-kinderen"
                            itemProp="url"
                          >
                            Zie meer
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="level__seeAllLink" itemProp="name">
                      <Link href="https://www.test-aankoop.be/gezondheid" itemProp="url">
                        Alles over voeding en gezondheid
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="level1__item pillar-3">
                  <input type="checkbox" className="hidden level2Checkbox" id="menu-pillar-3" />
                  <label htmlFor="menu-pillar-3" className="main">
                    <span>Je rechten</span>
                  </label>
                  <ul className="level2">
                    <li className="level2__item">
                      <input
                        type="checkbox"
                        className="hidden level3Checkbox"
                        id="menu-level2-bccdf9fe38b94dcf9e0c103eef2ab2cc"
                      />
                      <label htmlFor="menu-level2-bccdf9fe38b94dcf9e0c103eef2ab2cc">
                        <span>Een klacht bij een bedrijf indienen</span>
                      </label>
                      <ul className="level3">
                        <li className="level3__item" itemProp="name">
                          <Link href="/klagen" itemProp="url">
                            Dien online een klacht in
                          </Link>
                        </li>
                        <li className="level3__item" itemProp="name">
                          <Link href="/klagen/publieke-klachten" itemProp="url">
                            Alle klachten
                          </Link>
                        </li>
                        <li className="level3__item" itemProp="name">
                          <Link href="/klagen/mijn-klachten" itemProp="url">
                            Mijn klachten
                          </Link>
                        </li>
                        <li className="level3__item" itemProp="name">
                          <Link href="/klagen/scorebord" itemProp="url">
                            Ranglijst bedrijven
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="level2__item">
                      <input
                        type="checkbox"
                        className="hidden level3Checkbox"
                        id="menu-level2-a256cc08cb3f4151ac7dc3cb94e56830"
                      />
                      <label htmlFor="menu-level2-a256cc08cb3f4151ac7dc3cb94e56830">
                        <span>Juridische bijstand verkrijgen</span>
                      </label>
                      <ul className="level3">
                        <li className="level3__item" itemProp="name">
                          <Link href="/contact/contacteer-ons/juridisch-advies" itemProp="url">
                            Neem contact op met onze advocaten
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="level2__item">
                      <input
                        type="checkbox"
                        className="hidden level3Checkbox"
                        id="menu-level2-71f7bbaa8de64cc29f043c1512fd66dd"
                      />
                      <label htmlFor="menu-level2-71f7bbaa8de64cc29f043c1512fd66dd">
                        <span>Je rechten kennen</span>
                      </label>
                      <ul className="level3">
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-31922c8bda674fd9b36a74e4d07a2326"
                          />
                          <label htmlFor="menu-level3-31922c8bda674fd9b36a74e4d07a2326">
                            <span>Familie en privé</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link href="/familie-prive/privacy" itemProp="url">
                                Privacy
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/familie-prive/erfenis" itemProp="url">
                                Erfenis
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/familie-prive/trouwen-en-scheiden" itemProp="url">
                                Trouwen en scheiden
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link
                                href="https://www.test-aankoop.be/gezond/gezondheidszorg/patientenrechten"
                                itemProp="url"
                              >
                                Patiëntenrechten
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-ec6455f9a7d744d69920dac69207e70e"
                          />
                          <label htmlFor="menu-level3-ec6455f9a7d744d69920dac69207e70e">
                            <span>Geld en belastingen</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link href="/familie-prive/erfenis" itemProp="url">
                                Erfenis
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/geld/belastingen" itemProp="url">
                                Belastingen
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-0beba9e6d941451cad86a941d5632c42"
                          />
                          <label htmlFor="menu-level3-0beba9e6d941451cad86a941d5632c42">
                            <span>Vastgoed</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link href="/woning-energie/huren" itemProp="url">
                                Huren &amp; verhuren
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/woning-energie/kopen" itemProp="url">
                                Kopen, verkopen, bouwen &amp; verbouwen
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="level3__item">
                          <input
                            type="checkbox"
                            className="hidden level4Checkbox"
                            id="menu-level3-38fa8de77ea044d5ad0bc18677e94a52"
                          />
                          <label htmlFor="menu-level3-38fa8de77ea044d5ad0bc18677e94a52">
                            <span>Consumptie</span>
                          </label>
                          <ul className="level4">
                            <li className="level4__item" itemProp="name">
                              <Link href="/familie-prive/webshops" itemProp="url">
                                Online kopen
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/familie-prive/solden" itemProp="url">
                                Solden &amp; promoties
                              </Link>
                            </li>
                            <li className="level4__item" itemProp="name">
                              <Link href="/familie-prive/consumentenrechten" itemProp="url">
                                Consumentenrechten
                              </Link>
                            </li>
                            <li className="extra">
                              <div>
                                <div className="extra__info">
                                  Hier ben je misschien ook in geïnteresseerd :
                                </div>
                                <Link
                                  href="https://www.test-aankoop.be/familie-prive/webshops/dossier/oplichterij-via-internet"
                                  className="extra__topic"
                                >
                                  <div className="extra__topic__type">DOSSIER</div>
                                  <div className="extra__topic__title">
                                    Oplichterij via internet
                                  </div>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="level2__item">
                      <input
                        type="checkbox"
                        className="hidden level3Checkbox"
                        id="menu-level2-86bdce91751541bdb15b52693c159bae"
                      />
                      <label htmlFor="menu-level2-86bdce91751541bdb15b52693c159bae">
                        <span>Acties &amp; petities</span>
                      </label>
                      <ul className="level3">
                        <li className="level3__item" itemProp="name">
                          <Link href="/te-rap-kapot" itemProp="url">
                            Te rap kapot toestellen
                          </Link>
                        </li>
                        <li className="level3__item" itemProp="name">
                          <Link href="/mobiliteit/auto-s/nieuws/adblue" itemProp="url">
                            Defect AdBlue-systeem
                          </Link>
                        </li>
                        <li className="level3__item" itemProp="name">
                          <Link
                            href="/geld/zichtrekeningen/nieuws/petitie-bankautomaten-batopin"
                            itemProp="url"
                          >
                            Petitie toegankelijkheid bankautomaten
                          </Link>
                        </li>
                        <li className="level__seeAllLink" itemProp="name">
                          <Link href="/overzicht-acties" itemProp="url">
                            Al onze acties
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="level2__item">
                      <input
                        type="checkbox"
                        className="hidden level3Checkbox"
                        id="menu-level2-ee92e55fd7034189b8ef16b92b729810"
                      />
                      <label htmlFor="menu-level2-ee92e55fd7034189b8ef16b92b729810">
                        <span>Modeldocumenten</span>
                      </label>
                      <ul className="level3">
                        <li className="level3__item" itemProp="name">
                          <Link
                            href="https://www.test-aankoop.be/overzichtspagina?type=standard-letters&cat=woning-energie"
                            itemProp="url"
                          >
                            Woning &amp; energie
                          </Link>
                        </li>
                        <li className="level3__item" itemProp="name">
                          <Link
                            href="https://www.test-aankoop.be/overzichtspagina?type=standard-letters&cat=hightech"
                            itemProp="url"
                          >
                            Hightech
                          </Link>
                        </li>
                        <li className="level3__item" itemProp="name">
                          <Link
                            href="https://www.test-aankoop.be/overzichtspagina?type=standard-letters&cat=familie-prive"
                            itemProp="url"
                          >
                            Familie &amp; privé
                          </Link>
                        </li>
                        <li className="level3__item" itemProp="name">
                          <Link
                            href="https://www.test-aankoop.be/overzichtspagina?type=standard-letters&cat=geld"
                            itemProp="url"
                          >
                            Geld
                          </Link>
                        </li>
                        <li className="level3__item" itemProp="name">
                          <Link
                            href="https://www.test-aankoop.be/overzichtspagina?type=standard-letters&cat=mobiliteit"
                            itemProp="url"
                          >
                            Mobiliteit
                          </Link>
                        </li>
                        <li className="level3__item" itemProp="name">
                          <Link
                            href="https://www.test-aankoop.be/overzichtspagina?type=standard-letters&cat=dagelijkse-verzorging"
                            itemProp="url"
                          >
                            Dagelijkse verzorging
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="level__seeAllLink" itemProp="name">
                      <Link href="/alles-over-je-rechten" itemProp="url">
                        Alles over je rechten
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="level1__item pillar-4">
                  <input type="checkbox" className="hidden level2Checkbox" id="menu-pillar-4" />
                  <label htmlFor="menu-pillar-4" className="main">
                    <span>Beleggen</span>
                  </label>
                  <ul className="level2">
                    <li className="level2__item">
                      <input
                        type="checkbox"
                        className="hidden level3Checkbox"
                        id="menu-level2-75f1a75a7d284b799ea22e23f4b58d0f"
                      />
                      <label htmlFor="menu-level2-75f1a75a7d284b799ea22e23f4b58d0f">
                        <span>Mijn portefeuille</span>
                      </label>
                      <ul className="level3">
                        <li className="level3__item" itemProp="name">
                          <Link
                            href="https://www.test-aankoop.be/invest/mijn-portefeuille"
                            itemProp="url"
                          >
                            Creëer uw portefeuille
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="level2__item">
                      <input
                        type="checkbox"
                        className="hidden level3Checkbox"
                        id="menu-level2-6ec17863a0804d78b4af03da2311e56f"
                      />
                      <label htmlFor="menu-level2-6ec17863a0804d78b4af03da2311e56f">
                        <span>Beleggen</span>
                      </label>
                      <ul className="level3">
                        <li className="level3__item" itemProp="name">
                          <Link
                            href="https://www.test-aankoop.be/invest/onze-strategieen-en-typeportefeuilles/evenwichtige-belegger"
                            itemProp="url"
                          >
                            Onze strategieën en modelportefeuilles
                          </Link>
                        </li>
                        <li className="level3__item" itemProp="name">
                          <Link
                            href="https://www.test-aankoop.be/invest/beleggen/aandelen"
                            itemProp="url"
                          >
                            Aandelen
                          </Link>
                        </li>
                        <li className="level3__item" itemProp="name">
                          <Link
                            href="https://www.test-aankoop.be/invest/beleggen/fondsen"
                            itemProp="url"
                          >
                            Fondsen
                          </Link>
                        </li>
                        <li className="level3__item" itemProp="name">
                          <Link
                            href="https://www.test-aankoop.be/invest/beleggen/obligaties"
                            itemProp="url"
                          >
                            Obligaties
                          </Link>
                        </li>
                        <li className="level3__item" itemProp="name">
                          <Link
                            href="https://www.test-aankoop.be/invest/beleggen/goud"
                            itemProp="url"
                          >
                            Goud en goudmijnen
                          </Link>
                        </li>
                        <li className="level3__item" itemProp="name">
                          <Link
                            href="https://www.test-aankoop.be/invest/beleggen/vastgoed"
                            itemProp="url"
                          >
                            Vastgoedproducten
                          </Link>
                        </li>
                        <li className="level3__item" itemProp="name">
                          <Link
                            href="https://www.test-aankoop.be/invest/beleggen/markten-en-wisselkoersen"
                            itemProp="url"
                          >
                            Markten en Wisselkoersen
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="level2__item">
                      <input
                        type="checkbox"
                        className="hidden level3Checkbox"
                        id="menu-level2-37adaa659de844928cae1a612757394a"
                      />
                      <label htmlFor="menu-level2-37adaa659de844928cae1a612757394a">
                        <span>Sparen</span>
                      </label>
                      <ul className="level3">
                        <li className="level3__item" itemProp="name">
                          <Link
                            href="https://www.test-aankoop.be/invest/onze-strategieen-en-typeportefeuilles/spaarder"
                            itemProp="url"
                          >
                            Onze strategieën en modelportefeuilles
                          </Link>
                        </li>
                        <li className="level3__item" itemProp="name">
                          <Link
                            href="https://www.test-aankoop.be/invest/sparen/spaarrekeningen"
                            itemProp="url"
                          >
                            Spaarrekeningen
                          </Link>
                        </li>
                        <li className="level3__item" itemProp="name">
                          <Link
                            href="https://www.test-aankoop.be/invest/sparen/spaarverzekeringen"
                            itemProp="url"
                          >
                            Spaarverzekeringen
                          </Link>
                        </li>
                        <li className="level3__item" itemProp="name">
                          <Link
                            href="https://www.test-aankoop.be/invest/sparen/pensioensparen"
                            itemProp="url"
                          >
                            Pensioensparen
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="level2__item">
                      <input
                        type="checkbox"
                        className="hidden level3Checkbox"
                        id="menu-level2-537aed8e5fd4493ab1be30a0cae42912"
                      />
                      <label htmlFor="menu-level2-537aed8e5fd4493ab1be30a0cae42912">
                        <span>Fiscaliteit en rechten</span>
                      </label>
                      <ul className="level3">
                        <li className="level3__item" itemProp="name">
                          <Link
                            href="https://www.test-aankoop.be/invest/fiscaliteit-en-wetgeving/belastingheffing"
                            itemProp="url"
                          >
                            Belastingheffing
                          </Link>
                        </li>
                        <li className="level3__item" itemProp="name">
                          <Link
                            href="https://www.test-aankoop.be/invest/fiscaliteit-en-wetgeving/veiligheid-van-uw-beleggings-en-spaartegoeden"
                            itemProp="url"
                          >
                            Veiligheid van uw beleggings en spaartegoeden
                          </Link>
                        </li>
                        <li className="level3__item" itemProp="name">
                          <Link
                            href="https://www.test-aankoop.be/invest/sparen/pensioensparen"
                            itemProp="url"
                          >
                            Pensioen
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="level__seeAllLink" itemProp="name">
                      <Link href="https://www.test-aankoop.be/invest" itemProp="url">
                        Alles over investeren
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="level1__item pillar-5">
                  <Link
                    href="https://www.test-aankoop.be/voordelen"
                    className="main"
                    itemProp="url"
                  >
                    <span itemProp="name">Ledenvoordelen</span>
                  </Link>
                </li>
                <li className="level1__item">
                  <input type="checkbox" className="hidden level2Checkbox" id="menu-allWebsites" />
                  <label htmlFor="menu-allWebsites" className="websites">
                    <span>Zie meer</span>
                  </label>
                  <ul className="level2">
                    <li className="level2__item">
                      <Link href="/repairguide" data-selector="web4-navigation-l2link">
                        Repairguide
                      </Link>
                    </li>
                    <li className="level2__item">
                      <Link
                        href="https://www.test-aankoop.be/pers"
                        data-selector="web4-navigation-l2link"
                      >
                        Pers &amp; Institutioneel
                      </Link>
                    </li>
                    <li className="level2__item">
                      <Link
                        href="https://www.test-aankoop.be/invest"
                        data-selector="web4-navigation-l2link"
                        target="_blank"
                      >
                        Testaankoop invest
                      </Link>
                    </li>
                    <li className="level2__item">
                      <Link
                        href="/werken-bij-test-aankoop"
                        data-selector="web4-navigation-l2link"
                        target="_blank"
                      >
                        Jobs
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="level1__link">
                  <Link
                    href="https://login.test-aankoop.be/?wtrealm=eur%3a%2f%2fobiz.pro.obizpromo.nl-be%2f&wa=wsignin1.0&_gl=1*x387ll*_ga*ODg5NzU2ODU4LjE1OTcyMzE2MjQ.*_ga_9K2NF23KQW*MTY2ODUwNjAwMS4xMDIuMC4xNjY4NTA2MDAxLjAuMC4w&_gac=1.228120047.1666081277.Cj0KCQjwnbmaBhD-ARIsAGTPcfWK5Hv3BVLmGEgsOme9v6mPu-kaZ8cda3vr3kfajC9kpF7kzOWVbu4aAsUOEALw_wcB&_ga=2.22805883.1315290994.1668506002-821044984.1597672129"
                    data-selector="web4-navigation-l1link"
                    target="_blank"
                  >
                    Members Club
                  </Link>
                </li>
                <li className="level1__link">
                  <Link href="/energyguide" data-selector="web4-navigation-l1link">
                    Energy-guide
                  </Link>
                </li>
                <li className="level1__link">
                  <Link
                    href="/acties/ratemydeal"
                    data-selector="web4-navigation-l1link"
                    target="_blank"
                  >
                    Rate my deal
                  </Link>
                </li>
                <li className="level1__link">
                  <Link
                    href="/contact/contacteer-ons"
                    className="contact"
                    data-selector="web4-navigation-contact"
                  >
                    Contacteer ons
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }

  return <EuroConsumersHeaderDefaultComponent {...props} />;
};
