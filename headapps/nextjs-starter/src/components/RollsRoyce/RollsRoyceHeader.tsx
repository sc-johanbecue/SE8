import React from 'react';
import { ImageField, TextField, RichTextField } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

interface Fields {
  Number: TextField;
  Label: TextField;
  Name: TextField;
  Category: TextField;
  Family: TextField;
  ShortDescription: RichTextField;
  LongDescription: RichTextField;
  MasterAsset: ImageField;
}

type RollsRoyceHeaderProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const RollsRoyceHeaderDefaultComponent = (props: RollsRoyceHeaderProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: RollsRoyceHeaderProps): JSX.Element => {
  if (props.fields) {
    return (
      <>
        <section className="module__header-popup module-wrapper d-none-tooltip">
          <Link href="javascript:;" className="close-btn-link">
            <div id="cr" className="cross-close"></div>
          </Link>
          <div className="container-fluid">
            <div className="row-header justify-content-between">
              <div className="first-row">
                <img
                  src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/svg-icons/alert-icon.svg"
                  alt=""
                />
                <div className="col-sm-12 col-md-7">
                  <div className="content__title">
                    <h4></h4>
                  </div>
                  <div className="content__description"></div>
                </div>
                <div className="col-sm-12 col-md-3">
                  <div className="popup__cta"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="hide-content"></div>
        <div className="header-outer-dummy"></div>
        <div className="header-outer">
          <div id="header" className="MainWrapperInner container-fluid">
            <div className="padding-container">
              <div className="white-overlay"></div>
              <div id="headerwrapper" className="row">
                <div id="logo" className="col-md-1 col-xs-8">
                  <div className="logo-inner">
                    <Link
                      href="https://www.rolls-royce.com/"
                      title="Rolls-Royce – link to home page"
                    >
                      <img
                        src="https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/logo/rr-logo-svg.svg?h=96&amp;iar=0&amp;w=59"
                        alt="Rolls-Royce – link to home page"
                        width="59"
                        height="96"
                      />
                    </Link>
                  </div>
                </div>
                <div className="ce-lg-switcher-mobi-main"></div>
                <div id="toplinks" className="pull-right">
                  <div className="share-ticker-container">
                    <Link
                      className="share-link-header"
                      href="https://www.rolls-royce.com/investors/share-price.aspx"
                    ></Link>
                    <iframe
                      title="Ticker for global index"
                      src="https://irs.tools.investis.com/Clients/uk/rolls_royce2/Ticker/Ticker.aspx?culture=en-GB"
                      className="externalwebIFrame"
                      id="ExternalWebContentExternalIFrameHeadTicker"
                      allowTransparency={true}
                      frameBorder={0}
                      scrolling="no"
                    ></iframe>
                  </div>
                  <div id="headerlinks">
                    <ul>
                      <li>
                        <Link href="javascript:;">
                          <span className="icon-globe">Global</span>
                        </Link>
                        <ul>
                          <li>
                            <Link href="https://www.rolls-royce.com/country-sites/china.aspx">
                              China
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.rolls-royce.com/country-sites/japan.aspx">
                              Japan
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.rolls-royce.com/country-sites/deutschland.aspx">
                              Germany
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.rolls-royce.com/country-sites/northamerica.aspx">
                              North America
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.rolls-royce.com/country-sites/sea.aspx">
                              South East Asia
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.rolls-royce.com/country-sites/uk.aspx">
                              United Kingdom
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.rolls-royce.com/country-sites/india.aspx">
                              India
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.rolls-royce.com/country-sites/korea.aspx">
                              Korea
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.rolls-royce.com/country-sites/hungary-en.aspx">
                              Hungary
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.rolls-royce.com/country-sites/arabic.aspx">
                              Arabic
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.rolls-royce.com/country-sites/brasil.aspx">
                              Brazil
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.rolls-royce.com/about/where-we-operate.aspx">
                              Global contacts
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="top-left" className="col-md-11 col-xs-4">
                  <Link
                    title="Click to Open Mobile Menu"
                    className="mob-menu"
                    href="#mob-menu-wrap"
                  >
                    Menu <span></span>
                    <span></span>
                    <span></span>
                  </Link>
                  <div className="mob-menu-wrap" id="mob-menu-wrap">
                    <ul>
                      <li className="level1 haschildren first">
                        <Link href="https://www.rolls-royce.com/innovation.aspx">
                          <span>Innovation</span>
                        </Link>
                        <ul>
                          <li className="level2 haschildren first">
                            <Link href="https://www.rolls-royce.com/innovation/alternative-fuels.aspx">
                              <span>Alternative fuels</span>
                            </Link>
                            <ul>
                              <li className="level3 first last">
                                <Link href="https://www.rolls-royce.com/innovation/alternative-fuels/hydrogen.aspx">
                                  <span>Hydrogen</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="level2">
                            <Link href="https://www.rolls-royce.com/innovation/climate-tech-centre.aspx">
                              <span>Climate-tech centre</span>
                            </Link>
                          </li>
                          <li className="level2">
                            <Link href="https://www.rolls-royce.com/innovation/small-modular-reactors.aspx">
                              <span>Small modular reactors</span>
                            </Link>
                          </li>
                          <li className="level2 haschildren">
                            <Link href="https://www.rolls-royce.com/innovation/novel-nuclear.aspx">
                              <span>Novel Nuclear</span>
                            </Link>
                            <ul>
                              <li className="level3 first last">
                                <Link href="https://www.rolls-royce.com/innovation/novel-nuclear/micro-reactor.aspx">
                                  <span>Micro-Reactor</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="level2">
                            <Link href="https://www.rolls-royce.com/innovation/ultrafan.aspx">
                              <span>UltraFan</span>
                            </Link>
                          </li>
                          <li className="level2 haschildren">
                            <Link href="https://www.rolls-royce.com/innovation/digital.aspx">
                              <span>Digital</span>
                            </Link>
                            <ul>
                              <li className="level3 first">
                                <Link href="https://www.rolls-royce.com/innovation/digital/digital-platforms.aspx">
                                  <span>Digital Platforms </span>
                                </Link>
                              </li>
                              <li className="level3 last">
                                <Link href="https://www.rolls-royce.com/innovation/digital/digital-twin.aspx">
                                  <span>Digital Twin</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="level2">
                            <Link href="https://www.rolls-royce.com/innovation/the-aletheia-framework.aspx">
                              <span>
                                The Aletheia Framework<sup>®</sup>
                              </span>
                            </Link>
                          </li>
                          <li className="level2 last">
                            <Link href="https://www.rolls-royce.com/innovation/accel.aspx">
                              <span>ACCEL</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="level1 selected haschildren">
                        <Link href="https://www.rolls-royce.com/products-and-services.aspx">
                          <span>Products & Services</span>
                        </Link>
                        <ul>
                          <li className="level2 current haschildren first">
                            <span>Civil Aerospace</span>
                            <ul>
                              <li className="level3 first">
                                <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/sustainability.aspx">
                                  <span>Sustainability</span>
                                </Link>
                              </li>
                              <li className="level3">
                                <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/marketplace.aspx">
                                  <span>Purchase Parts & Services</span>
                                </Link>
                              </li>
                              <li className="level3 haschildren">
                                <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/services.aspx">
                                  <span>Services</span>
                                </Link>
                                <ul>
                                  <li className="level4 first">
                                    <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/services/passenger.aspx">
                                      <span>Passenger</span>
                                    </Link>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/services/freighter.aspx">
                                      <span>Freighter</span>
                                    </Link>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/services/lessors.aspx">
                                      <span>Lessors</span>
                                    </Link>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/services/business.aspx">
                                      <span>Business</span>
                                    </Link>
                                  </li>
                                  <li className="level4 last">
                                    <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/services/other-customers.aspx">
                                      <span>Other Customers</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="level3">
                                <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/aircraft-transitions.aspx">
                                  <span>Aircraft Transitions</span>
                                </Link>
                              </li>
                              <li className="level3 haschildren">
                                <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/widebody/power-of-trent.aspx">
                                  <span>Widebody</span>
                                </Link>
                                <ul>
                                  <li className="level4 haschildren first">
                                    <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/widebody/power-of-trent.aspx">
                                      <span>Power of Trent</span>
                                    </Link>
                                    <ul>
                                      <li className="level5 first last">
                                        <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/widebody/power-of-trent/versatile-and-capable.aspx">
                                          <span>Capable & Versatile</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/widebody/trent-7000.aspx">
                                      <span>Trent 7000</span>
                                    </Link>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/widebody/trent-xwb.aspx">
                                      <span>Trent XWB</span>
                                    </Link>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/widebody/trent-1000.aspx">
                                      <span>Trent 1000</span>
                                    </Link>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/widebody/trent-900.aspx">
                                      <span>Trent 900</span>
                                    </Link>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/widebody/trent-500.aspx">
                                      <span>Trent 500</span>
                                    </Link>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/widebody/trent-800.aspx">
                                      <span>Trent 800</span>
                                    </Link>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/widebody/trent-700.aspx">
                                      <span>Trent 700</span>
                                    </Link>
                                  </li>
                                  <li className="level4 last">
                                    <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/widebody/rb211-524gh-and-t.aspx">
                                      <span>RB211-524G/H & -T</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="level3 haschildren">
                                <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/narrowbody-and-regional/ae3007.aspx">
                                  <span>Narrowbody & Regional</span>
                                </Link>
                                <ul>
                                  <li className="level4 first">
                                    <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/narrowbody-and-regional/ae3007.aspx">
                                      <span>AE3007</span>
                                    </Link>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/narrowbody-and-regional/br715.aspx">
                                      <span>BR715</span>
                                    </Link>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/narrowbody-and-regional/rb211-535e4.aspx">
                                      <span>RB211-535E4</span>
                                    </Link>
                                  </li>
                                  <li className="level4 last">
                                    <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/narrowbody-and-regional/tay.aspx">
                                      <span>Tay 620 / 650</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="level3 haschildren">
                                <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/business-aviation.aspx">
                                  <span>Business Aviation</span>
                                </Link>
                                <ul>
                                  <li className="level4 first">
                                    <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/business-aviation/pearl-10x.aspx">
                                      <span>Pearl 10X</span>
                                    </Link>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/business-aviation/pearl-700.aspx">
                                      <span>Pearl 700</span>
                                    </Link>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/business-aviation/pearl-15.aspx">
                                      <span>Pearl 15</span>
                                    </Link>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/business-aviation/ae-3007.aspx">
                                      <span>AE 3007</span>
                                    </Link>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/business-aviation/br710.aspx">
                                      <span>BR710</span>
                                    </Link>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/business-aviation/br725.aspx">
                                      <span>BR725</span>
                                    </Link>
                                  </li>
                                  <li className="level4 last">
                                    <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/business-aviation/tay.aspx">
                                      <span>Tay</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="level3 haschildren">
                                <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/helicopters/m250-turboshaft.aspx">
                                  <span>Helicopters</span>
                                </Link>
                                <ul>
                                  <li className="level4 first">
                                    <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/helicopters/m250-turboshaft.aspx">
                                      <span>M250 turboshaft</span>
                                    </Link>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/helicopters/rr300.aspx">
                                      <span>RR300</span>
                                    </Link>
                                  </li>
                                  <li className="level4 last">
                                    <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/helicopters/m250-turboprop.aspx">
                                      <span>M250 turboprop</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="level3">
                                <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/future-products.aspx">
                                  <span>Future products</span>
                                </Link>
                              </li>
                              <li className="level3 haschildren last">
                                <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/testing-capabilities.aspx">
                                  <span>Testing capabilities</span>
                                </Link>
                                <ul>
                                  <li className="level4 first">
                                    <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/testing-capabilities/access-our-testing-capabilities.aspx">
                                      <span>Access our testing capabilities</span>
                                    </Link>
                                  </li>
                                  <li className="level4 last">
                                    <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/testing-capabilities/testbed-facilities.aspx">
                                      <span>Testbed facilities</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li className="level2 haschildren">
                            <Link href="https://www.rolls-royce.com/products-and-services/defence.aspx">
                              <span>Defence</span>
                            </Link>
                            <ul>
                              <li className="level3 haschildren first">
                                <Link href="https://www.rolls-royce.com/products-and-services/defence/future_combat_air_capability.aspx">
                                  <span>Power for Future Combat Air </span>
                                </Link>
                                <ul>
                                  <li className="level4 first">
                                    <Link href="https://www.rolls-royce.com/products-and-services/defence/future_combat_air_capability/achieving_net_zero_for_future_combat_air_systems_fcas.aspx">
                                      <span>Net Zero for Future Combat Air Systems </span>
                                    </Link>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/products-and-services/defence/future_combat_air_capability/tempest.aspx">
                                      <span>Tempest</span>
                                    </Link>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/products-and-services/defence/future_combat_air_capability/orpheus.aspx">
                                      <span>Orpheus</span>
                                    </Link>
                                  </li>
                                  <li className="level4 last">
                                    <Link href="https://www.rolls-royce.com/products-and-services/defence/future_combat_air_capability/careers.aspx">
                                      <span>Developing the Next Generation</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="level3">
                                <Link href="https://www.rolls-royce.com/products-and-services/defence/digital-innovation.aspx">
                                  <span>Digital FIRST</span>
                                </Link>
                              </li>
                              <li className="level3">
                                <Link href="https://www.rolls-royce.com/products-and-services/defence/sustainable-power.aspx">
                                  <span>Energy Transition for Defence</span>
                                </Link>
                              </li>
                              <li className="level3 haschildren">
                                <Link href="https://www.rolls-royce.com/products-and-services/defence/advanced-technology-defence.aspx">
                                  <span>Advanced Technology</span>
                                </Link>
                                <ul>
                                  <li className="level4 first">
                                    <Link href="https://www.rolls-royce.com/products-and-services/defence/advanced-technology-defence/libertyworks.aspx">
                                      <span>LibertyWorks</span>
                                    </Link>
                                  </li>
                                  <li className="level4 last">
                                    <Link href="https://www.rolls-royce.com/products-and-services/defence/advanced-technology-defence/valor.aspx">
                                      <span>FLRAA</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="level3 haschildren">
                                <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace.aspx">
                                  <span>Aerospace</span>
                                </Link>
                                <ul>
                                  <li className="level4 haschildren first">
                                    <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/combat-jets/f130.aspx">
                                      <span>Combat Jets</span>
                                    </Link>
                                    <ul>
                                      <li className="level5 first">
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/combat-jets/f130.aspx">
                                          <span>F130</span>
                                        </Link>
                                      </li>
                                      <li className="level5">
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/combat-jets/rolls-royce-liftsystem.aspx">
                                          <span>Rolls-Royce LiftSystem®</span>
                                        </Link>
                                      </li>
                                      <li className="level5">
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/combat-jets/ej200.aspx">
                                          <span>EJ200</span>
                                        </Link>
                                      </li>
                                      <li className="level5">
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/combat-jets/adour.aspx">
                                          <span>Adour</span>
                                        </Link>
                                      </li>
                                      <li className="level5">
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/combat-jets/rb199.aspx">
                                          <span>RB199</span>
                                        </Link>
                                      </li>
                                      <li className="level5 last">
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/combat-jets/pegasus.aspx">
                                          <span>Pegasus</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li className="level4 haschildren">
                                    <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/rotary/ae-1107c.aspx">
                                      <span>Rotary</span>
                                    </Link>
                                    <ul>
                                      <li className="level5 first">
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/rotary/ae-1107c.aspx">
                                          <span>AE 1107C</span>
                                        </Link>
                                      </li>
                                      <li className="level5">
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/rotary/cts800.aspx">
                                          <span>CTS800</span>
                                        </Link>
                                      </li>
                                      <li className="level5">
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/rotary/mtr390.aspx">
                                          <span>MTR390</span>
                                        </Link>
                                      </li>
                                      <li className="level5 last">
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/rotary/m250-turboshaft.aspx">
                                          <span>M250 Turboshaft</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li className="level4 haschildren">
                                    <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/transport-tanker-patrol-and-tactical/ae-2100.aspx">
                                      <span>Transport, Tanker, Patrol & Tactical</span>
                                    </Link>
                                    <ul>
                                      <li className="level5 first">
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/transport-tanker-patrol-and-tactical/ae-2100.aspx">
                                          <span>AE 2100</span>
                                        </Link>
                                      </li>
                                      <li className="level5">
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/transport-tanker-patrol-and-tactical/ae-1107c.aspx">
                                          <span>AE 1107C</span>
                                        </Link>
                                      </li>
                                      <li className="level5">
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/transport-tanker-patrol-and-tactical/ae-3007.aspx">
                                          <span>AE 3007</span>
                                        </Link>
                                      </li>
                                      <li className="level5">
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/transport-tanker-patrol-and-tactical/trent-700-mrtt.aspx">
                                          <span>Trent 700 MRTT</span>
                                        </Link>
                                      </li>
                                      <li className="level5">
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/transport-tanker-patrol-and-tactical/tp400-d6.aspx">
                                          <span>TP400-D6</span>
                                        </Link>
                                      </li>
                                      <li className="level5">
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/transport-tanker-patrol-and-tactical/br710.aspx">
                                          <span>BR710</span>
                                        </Link>
                                      </li>
                                      <li className="level5">
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/transport-tanker-patrol-and-tactical/t56.aspx">
                                          <span>T56</span>
                                        </Link>
                                      </li>
                                      <li className="level5">
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/transport-tanker-patrol-and-tactical/cts800.aspx">
                                          <span>CTS800</span>
                                        </Link>
                                      </li>
                                      <li className="level5">
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/transport-tanker-patrol-and-tactical/m250-turboprop.aspx">
                                          <span>M250 Turboprop</span>
                                        </Link>
                                      </li>
                                      <li className="level5 last">
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/transport-tanker-patrol-and-tactical/t56-3-5-enhancement.aspx">
                                          <span>T56 3.5 Enhancement</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li className="level4 haschildren">
                                    <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/trainers/adour.aspx">
                                      <span>Trainers</span>
                                    </Link>
                                    <ul>
                                      <li className="level5 first">
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/trainers/adour.aspx">
                                          <span>Adour</span>
                                        </Link>
                                      </li>
                                      <li className="level5 last">
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/trainers/m250-turboprop.aspx">
                                          <span>M250 Turboprop</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li className="level4 haschildren">
                                    <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/uavs/ae-3007.aspx">
                                      <span>UAVs</span>
                                    </Link>
                                    <ul>
                                      <li className="level5 first">
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/uavs/ae-3007.aspx">
                                          <span>AE 3007</span>
                                        </Link>
                                      </li>
                                      <li className="level5">
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/uavs/m250-turboshaft.aspx">
                                          <span>M250 Turboshaft</span>
                                        </Link>
                                      </li>
                                      <li className="level5 last">
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/uavs/adour.aspx">
                                          <span>Adour</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li className="level4 last">
                                    <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/distributed-generation-systems-aero.aspx">
                                      <span>Distributed Generation Systems</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="level3 haschildren">
                                <Link href="https://www.rolls-royce.com/products-and-services/defence/naval.aspx">
                                  <span>Naval</span>
                                </Link>
                                <ul>
                                  <li className="level4 haschildren first">
                                    <Link href="https://www.rolls-royce.com/products-and-services/defence/naval/gas-turbines.aspx">
                                      <span>Gas Turbines</span>
                                    </Link>
                                    <ul>
                                      <li className="level5 first">
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/naval/gas-turbines/mt30-marine-gas-turbine.aspx">
                                          <span>MT30 Marine Gas Turbine</span>
                                        </Link>
                                      </li>
                                      <li className="level5">
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/naval/gas-turbines/ag9160-generator-set.aspx">
                                          <span>AG9160 Generator Set</span>
                                        </Link>
                                      </li>
                                      <li className="level5">
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/naval/gas-turbines/ag9140-generator-set.aspx">
                                          <span>AG9140 Generator Set</span>
                                        </Link>
                                      </li>
                                      <li className="level5 last">
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/naval/gas-turbines/mt7-marine-gas-turbine.aspx">
                                          <span>MT7 Marine Gas Turbine</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li className="level4 haschildren">
                                    <Link href="https://www.rolls-royce.com/products-and-services/defence/naval/diesel-engines/power-systems.aspx">
                                      <span>Diesel Engines</span>
                                    </Link>
                                    <ul>
                                      <li className="level5 first last">
                                        <Link href="https://www.rolls-royce.com/products-and-services/power-systems.aspx">
                                          <span>Power Systems</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/products-and-services/defence/naval/propulsion.aspx">
                                      <span>Propulsion</span>
                                    </Link>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/products-and-services/defence/naval/naval-handling-systems/mission-bay-handling-system.aspx">
                                      <span>Naval Handling Systems</span>
                                    </Link>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/products-and-services/defence/naval/naval-support-and-services.aspx">
                                      <span>Naval Support &amp; Services</span>
                                    </Link>
                                  </li>
                                  <li className="level4 last">
                                    <Link href="https://www.rolls-royce.com/products-and-services/defence/naval/distributed-generation-systems-naval.aspx">
                                      <span>Distributed Generation Systems</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="level3">
                                <Link href="https://www.rolls-royce.com/products-and-services/defence/submarines.aspx">
                                  <span>Submarines</span>
                                </Link>
                              </li>
                              <li className="level3 haschildren">
                                <Link href="https://www.rolls-royce.com/products-and-services/defence/land/distributed-generation-systems-land.aspx">
                                  <span>Land</span>
                                </Link>
                                <ul>
                                  <li className="level4 first last">
                                    <Link href="https://www.rolls-royce.com/products-and-services/defence/land/distributed-generation-systems-land.aspx">
                                      <span>Distributed Generation Systems</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="level3 haschildren last">
                                <Link href="https://www.rolls-royce.com/products-and-services/defence/services.aspx">
                                  <span>Services</span>
                                </Link>
                                <ul>
                                  <li className="level4 first">
                                    <Link href="https://www.rolls-royce.com/products-and-services/defence/services/ace.aspx">
                                      <span>ACE</span>
                                    </Link>
                                  </li>
                                  <li className="level4 last">
                                    <Link href="https://www.rolls-royce.com/products-and-services/defence/services/twinalytix.aspx">
                                      <span>TwinAlytix®</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li className="level2 haschildren">
                            <Link href="https://www.rolls-royce.com/products-and-services/power-systems.aspx">
                              <span>Power Systems</span>
                            </Link>
                            <ul>
                              <li className="level3 first">
                                <Link href="https://www.rolls-royce.com/products-and-services/power-systems/power-generation-solutions.aspx">
                                  <span>Power Generation Solutions</span>
                                </Link>
                              </li>
                              <li className="level3">
                                <Link href="https://www.rolls-royce.com/products-and-services/power-systems/marine.aspx">
                                  <span>Marine</span>
                                </Link>
                              </li>
                              <li className="level3">
                                <Link href="https://www.rolls-royce.com/products-and-services/power-systems/governmental.aspx">
                                  <span>Governmental</span>
                                </Link>
                              </li>
                              <li className="level3 last">
                                <Link href="https://www.rolls-royce.com/products-and-services/power-systems/power-systems-sustainability.aspx">
                                  <span>Power Systems Sustainability</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="level2 haschildren last">
                            <Link href="https://www.rolls-royce.com/products-and-services/electrical.aspx">
                              <span>Electrical Aviation</span>
                            </Link>
                            <ul>
                              <li className="level3 first">
                                <Link href="https://www.rolls-royce.com/products-and-services/electrical/our-electrical-power-and-propulsion-portfolio.aspx">
                                  <span>Our Electrical power & propulsion portfolio</span>
                                </Link>
                              </li>
                              <li className="level3 last">
                                <Link href="https://www.rolls-royce.com/products-and-services/electrical/our-capability.aspx">
                                  <span>Our Capability</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="level1 haschildren">
                        <Link href="https://www.rolls-royce.com/about.aspx">
                          <span>About</span>
                        </Link>
                        <ul>
                          <li className="level2 first">
                            <Link href="https://www.rolls-royce.com/about/our-strategy.aspx">
                              <span>Our Strategy</span>
                            </Link>
                          </li>
                          <li className="level2 haschildren">
                            <Link href="https://www.rolls-royce.com/about/leadership/board.aspx">
                              <span>Leadership</span>
                            </Link>
                            <ul>
                              <li className="level3 first">
                                <Link href="https://www.rolls-royce.com/about/leadership/board.aspx">
                                  <span>Board</span>
                                </Link>
                              </li>
                              <li className="level3">
                                <Link href="https://www.rolls-royce.com/about/leadership/executive-leadership-team.aspx">
                                  <span>Executive Team</span>
                                </Link>
                              </li>
                              <li className="level3 last">
                                <Link href="https://www.rolls-royce.com/about/leadership/corporate-governance.aspx">
                                  <span>Corporate governance</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="level2">
                            <Link href="https://www.rolls-royce.com/about/where-we-operate.aspx">
                              <span>Where We Operate</span>
                            </Link>
                          </li>
                          <li className="level2 haschildren">
                            <Link href="https://www.rolls-royce.com/about/our-research.aspx">
                              <span>Our Research</span>
                            </Link>
                            <ul>
                              <li className="level3 first">
                                <Link href="https://www.rolls-royce.com/about/our-research/advanced-manufacturing-research-centres.aspx">
                                  <span>Advanced Manufacturing Research Centres</span>
                                </Link>
                              </li>
                              <li className="level3">
                                <Link href="https://www.rolls-royce.com/about/our-research/research-and-university.aspx">
                                  <span>Research and University Technology Centres</span>
                                </Link>
                              </li>
                              <li className="level3 last">
                                <Link href="https://www.rolls-royce.com/about/our-research/cybertech-research-network.aspx">
                                  <span>Rolls-Royce Cybersecurity Technology Research Network</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="level2">
                            <Link href="https://www.rolls-royce.com/about/our-businesses.aspx">
                              <span>Our Businesses</span>
                            </Link>
                          </li>
                          <li className="level2">
                            <Link href="https://www.rolls-royce.com/about/our-history.aspx">
                              <span>Our History</span>
                            </Link>
                          </li>
                          <li className="level2 haschildren last">
                            <Link href="https://www.rolls-royce.com/about/heritage-trust.aspx">
                              <span>Heritage Trust</span>
                            </Link>
                            <ul>
                              <li className="level3 haschildren first">
                                <Link href="https://www.rolls-royce.com/about/heritage-trust/visit.aspx">
                                  <span>Visit</span>
                                </Link>
                                <ul>
                                  <li className="level4 first">
                                    <Link href="https://www.rolls-royce.com/about/heritage-trust/visit/our-heritage-centres.aspx">
                                      <span>Our Heritage Centres</span>
                                    </Link>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/about/heritage-trust/visit/bristol-branch.aspx">
                                      <span>Heritage Trust – Bristol</span>
                                    </Link>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/about/heritage-trust/visit/coventry-and-ansty.aspx">
                                      <span>Heritage Trust – Coventry and Ansty</span>
                                    </Link>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/about/heritage-trust/visit/derby-and-hucknall-branch.aspx">
                                      <span>Heritage Trust – Derby and Hucknall</span>
                                    </Link>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/about/heritage-trust/visit/indianapolis-branch.aspx">
                                      <span>Heritage Trust – Indianapolis</span>
                                    </Link>
                                  </li>
                                  <li className="level4 last">
                                    <Link href="https://www.rolls-royce.com/about/heritage-trust/visit/scottish-branch.aspx">
                                      <span>Heritage Trust – Scottish branch</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="level3">
                                <Link href="https://www.rolls-royce.com/about/heritage-trust/become-a-member.aspx">
                                  <span>Become a member</span>
                                </Link>
                              </li>
                              <li className="level3">
                                <Link href="https://www.rolls-royce.com/about/heritage-trust/volunteer.aspx">
                                  <span>Volunteer</span>
                                </Link>
                              </li>
                              <li className="level3">
                                <Link href="https://www.rolls-royce.com/about/heritage-trust/learn-and-explore.aspx">
                                  <span>Learn and explore</span>
                                </Link>
                              </li>
                              <li className="level3">
                                <Link href="https://www.rolls-royce.com/about/heritage-trust/whats-on.aspx">
                                  <span>What’s on</span>
                                </Link>
                              </li>
                              <li className="level3">
                                <Link href="https://www.rolls-royce.com/about/heritage-trust/contact-the-trust.aspx">
                                  <span>Contact the Trust</span>
                                </Link>
                              </li>
                              <li className="level3 haschildren last">
                                <Link href="https://www.rolls-royce.com/about/heritage-trust/members-section.aspx">
                                  <span>Member&quot;s Section</span>
                                </Link>
                                <ul>
                                  <li className="level4 first">
                                    <Link href="https://www.rolls-royce.com/about/heritage-trust/members-section/the-magazine.aspx">
                                      <span>The Magazine</span>
                                    </Link>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/about/heritage-trust/members-section/news-and-insights.aspx">
                                      <span>News & Insights</span>
                                    </Link>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/about/heritage-trust/members-section/members-events.aspx">
                                      <span>Members’ events</span>
                                    </Link>
                                  </li>
                                  <li className="level4 last">
                                    <Link href="https://www.rolls-royce.com/about/heritage-trust/members-section/r-rht-documents.aspx">
                                      <span>R-RHT Documents</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="level1 haschildren">
                        <Link href="https://www.rolls-royce.com/contact-us.aspx">
                          <span>Contact us</span>
                        </Link>
                        <ul>
                          <li className="level2 first">
                            <Link href="https://www.rolls-royce.com/contact-us/inventors-and-technology-licensing.aspx">
                              <span>Inventors & technology licensing</span>
                            </Link>
                          </li>
                          <li className="level2">
                            <Link href="https://www.rolls-royce.com/contact-us/defence-aerospace.aspx">
                              <span>Defence aerospace business team</span>
                            </Link>
                          </li>
                          <li className="level2">
                            <Link href="https://www.rolls-royce.com/contact-us/defence-parts-enquiries.aspx">
                              <span>Defence team</span>
                            </Link>
                          </li>
                          <li className="level2">
                            <Link href="https://www.rolls-royce.com/contact-us/corporate-sustainability-team.aspx">
                              <span>Corporate sustainability team</span>
                            </Link>
                          </li>
                          <li className="level2">
                            <Link href="https://www.rolls-royce.com/contact-us/heritage-team.aspx">
                              <span>Heritage team</span>
                            </Link>
                          </li>
                          <li className="level2">
                            <Link href="https://www.rolls-royce.com/contact-us/helicopters-team.aspx">
                              <span>Helicopters team</span>
                            </Link>
                          </li>
                          <li className="level2 last">
                            <Link href="https://www.rolls-royce.com/contact-us/pensions-team.aspx">
                              <span>Pensions team</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="level1 haschildren">
                        <Link href="https://www.rolls-royce.com/country-sites/china-old-site.aspx">
                          <span>Country sites</span>
                        </Link>
                        <ul>
                          <li className="level2 haschildren first">
                            <Link href="https://www.rolls-royce.com/country-sites/brasil.aspx">
                              <span>Como nos comportamos importa</span>
                            </Link>
                            <ul>
                              <li className="level3 first">
                                <Link href="https://www.rolls-royce.com/country-sites/brasil.aspx">
                                  <span>Home</span>
                                </Link>
                              </li>
                              <li className="level3 last">
                                <Link href="https://www.rolls-royce.com/country-sites/brasil/rolls-royce-no-brasil.aspx">
                                  <span>Rolls-Royce no Brasil</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="level2">
                            <Link href="https://www.rolls-royce.com/country-sites/brazil-en.aspx">
                              <span>Rolls-Royce no Brasil</span>
                            </Link>
                          </li>
                          <li className="level2 haschildren">
                            <Link href="https://www.rolls-royce.com/country-sites/japan.aspx">
                              <span>日本</span>
                            </Link>
                            <ul>
                              <li className="level3 first">
                                <Link href="https://www.rolls-royce.com/country-sites/japan.aspx">
                                  <span>ホーム</span>
                                </Link>
                              </li>
                              <li className="level3 haschildren">
                                <Link href="https://www.rolls-royce.com/country-sites/japan/about.aspx">
                                  <span>ロールス･ロイスについて</span>
                                </Link>
                                <ul>
                                  <li className="level4 first">
                                    <Link href="https://www.rolls-royce.com/country-sites/japan/about.aspx">
                                      <span>ロールス・ロイスについて</span>
                                    </Link>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/country-sites/japan/about/sustainability.aspx">
                                      <span>サステナビリティ</span>
                                    </Link>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/country-sites/japan/about/business-strategy.aspx">
                                      <span>ビジネス戦略</span>
                                    </Link>
                                  </li>
                                  <li className="level4 last">
                                    <Link href="https://www.rolls-royce.com/country-sites/japan/about/60-years-in-japan.aspx">
                                      <span>日本で60周年</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="level3 haschildren">
                                <Link href="https://www.rolls-royce.com/country-sites/japan/partners-in-success/made-in-japan.aspx">
                                  <span>日本のパートナー</span>
                                </Link>
                                <ul>
                                  <li className="level4 first">
                                    <Link href="https://www.rolls-royce.com/country-sites/japan/partners-in-success/made-in-japan.aspx">
                                      <span>日本企業との協業</span>
                                    </Link>
                                  </li>
                                  <li className="level4 last">
                                    <Link href="https://www.rolls-royce.com/country-sites/japan/partners-in-success/research-and-development.aspx">
                                      <span>研究開発</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="level3 haschildren">
                                <Link href="https://www.rolls-royce.com/country-sites/japan/products-and-services/civil-aerospace.aspx">
                                  <span>製品とサービス</span>
                                </Link>
                                <ul>
                                  <li className="level4 first">
                                    <Link href="https://www.rolls-royce.com/country-sites/japan/products-and-services/civil-aerospace.aspx">
                                      <span>民間航空</span>
                                    </Link>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/country-sites/japan/products-and-services/defense-aerospace.aspx">
                                      <span>防衛</span>
                                    </Link>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/country-sites/japan/products-and-services/power-systems.aspx">
                                      <span>パワーシステムズ</span>
                                    </Link>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/country-sites/japan/products-and-services/electrical.aspx">
                                      <span>エレクトリカル</span>
                                    </Link>
                                  </li>
                                  <li className="level4 last">
                                    <Link href="https://www.rolls-royce.com/country-sites/japan/products-and-services/smr.aspx">
                                      <span>SMR</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="level3">
                                <Link href="https://www.rolls-royce.com/country-sites/japan/discover.aspx">
                                  <span>ディスカバー</span>
                                </Link>
                              </li>
                              <li className="level3">
                                <Link href="https://www.rolls-royce.com/country-sites/japan/contacts.aspx">
                                  <span>お問い合わせ</span>
                                </Link>
                              </li>
                              <li className="level3 last">
                                <Link
                                  target="_blank"
                                  href="https://careers.rolls-royce.com/rest-of-the-world#/"
                                >
                                  <span>採用情報</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="level2 haschildren">
                            <Link href="https://www.rolls-royce.com/country-sites/china-exhibition-chinese.aspx">
                              <span>罗尔斯-罗伊斯 – 推进飞行新方式</span>
                            </Link>
                            <ul>
                              <li className="level3 first last">
                                <Link href="https://www.rolls-royce.com/country-sites/china-exhibition-chinese/home/modules.aspx">
                                  <span>country-landing-navigation</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="level2 haschildren">
                            <Link href="https://www.rolls-royce.com/country-sites/china-exhibition-english.aspx">
                              <span>Rolls-Royce - Powering New Ways to Fly</span>
                            </Link>
                            <ul>
                              <li className="level3 first last">
                                <Link href="https://www.rolls-royce.com/country-sites/china-exhibition-english/home/modules.aspx">
                                  <span>country-landing-navigation</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="level2 haschildren">
                            <Link href="https://www.rolls-royce.com/country-sites/hungary-en.aspx">
                              <span>Rolls-Royce Hungary</span>
                            </Link>
                            <ul>
                              <li className="level3 first">
                                <Link href="https://www.rolls-royce.com/country-sites/hungary-en.aspx">
                                  <span>Home</span>
                                </Link>
                              </li>
                              <li className="level3">
                                <Link href="https://www.rolls-royce.com/country-sites/hungary-en/careers.aspx">
                                  <span>Careers</span>
                                </Link>
                              </li>
                              <li className="level3 last">
                                <Link href="https://www.rolls-royce.com/country-sites/hungary-en/discover.aspx">
                                  <span>Discover</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="level2 haschildren">
                            <Link href="https://www.rolls-royce.com/country-sites/hungary-hu.aspx">
                              <span>Rolls-Royce Magyarország</span>
                            </Link>
                            <ul>
                              <li className="level3 first">
                                <Link href="https://www.rolls-royce.com/country-sites/hungary-hu.aspx">
                                  <span>Főoldal</span>
                                </Link>
                              </li>
                              <li className="level3">
                                <Link href="https://www.rolls-royce.com/country-sites/hungary-hu/karrier.aspx">
                                  <span>Karrier</span>
                                </Link>
                              </li>
                              <li className="level3">
                                <Link href="https://www.rolls-royce.com/country-sites/hungary-hu/torteneteink.aspx">
                                  <span>Történeteink</span>
                                </Link>
                              </li>
                              <li className="level3 last">
                                <Link href="https://www.rolls-royce.com/country-sites/hungary-hu/tamogatott-kezdemenyezeseka.aspx">
                                  <span>Támogatott kezdeményezések</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="level2 haschildren">
                            <Link href="https://www.rolls-royce.com/country-sites/northamerica.aspx">
                              <span>Rolls-Royce North America</span>
                            </Link>
                            <ul>
                              <li className="level3 first last">
                                <Link href="https://www.rolls-royce.com/country-sites/northamerica.aspx">
                                  <span>Home</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="level2 haschildren">
                            <Link href="https://www.rolls-royce.com/country-sites/deutschland.aspx">
                              <span>Deutschland</span>
                            </Link>
                            <ul>
                              <li className="level3 first">
                                <Link href="https://www.rolls-royce.com/country-sites/deutschland.aspx">
                                  <span>Home</span>
                                </Link>
                              </li>
                              <li className="level3">
                                <Link href="https://www.rolls-royce.com/country-sites/deutschland/uberblick.aspx">
                                  <span>Überblick</span>
                                </Link>
                              </li>
                              <li className="level3 haschildren">
                                <Link href="https://www.rolls-royce.com/country-sites/deutschland/nachrichten-und-geschichten/nachrichten.aspx">
                                  <span>Nachrichten und Geschichten</span>
                                </Link>
                                <ul>
                                  <li className="level4 first">
                                    <Link href="https://www.rolls-royce.com/country-sites/deutschland/nachrichten-und-geschichten/nachrichten.aspx">
                                      <span>Nachrichten</span>
                                    </Link>
                                  </li>
                                  <li className="level4 last">
                                    <Link href="https://www.rolls-royce.com/country-sites/deutschland/nachrichten-und-geschichten/geschichten.aspx">
                                      <span>Geschichten</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="level3 haschildren">
                                <Link href="https://www.rolls-royce.com/country-sites/deutschland/karriere.aspx">
                                  <span>Karriere</span>
                                </Link>
                                <ul>
                                  <li className="level4 first">
                                    <Link href="https://www.rolls-royce.com/country-sites/deutschland/karriere/werde-teil-des-teams-in-dahlewitz-bei-berlin.aspx">
                                      <span>Werde Teil des Teams in Dahlewitz bei Berlin</span>
                                    </Link>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/country-sites/deutschland/karriere/talent-community.aspx">
                                      <span>Talent Community</span>
                                    </Link>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/country-sites/deutschland/karriere/ausbildung.aspx">
                                      <span>Ausbildung</span>
                                    </Link>
                                  </li>
                                  <li className="level4 haschildren">
                                    <Link href="https://www.rolls-royce.com/country-sites/deutschland/karriere/direkteinstieg.aspx">
                                      <span>Direkteinstieg </span>
                                    </Link>
                                    <ul>
                                      <li className="level5 first">
                                        <Link href="https://www.rolls-royce.com/country-sites/deutschland/karriere/direkteinstieg/direkteinstieg-oberursel.aspx">
                                          <span>Direkteinstieg </span>
                                        </Link>
                                      </li>
                                      <li className="level5 last">
                                        <Link href="https://www.rolls-royce.com/country-sites/deutschland/karriere/direkteinstieg/recruitment_campaign_oberursel.aspx">
                                          <span>Direkteinstieg </span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/country-sites/deutschland/karriere/praktikanten-und-werkstudenten.aspx">
                                      <span>Praktikanten und Werkstudenten</span>
                                    </Link>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/country-sites/deutschland/karriere/germany-karriere-electrical.aspx">
                                      <span>Karriere bei Rolls-Royce Electrical</span>
                                    </Link>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/country-sites/deutschland/karriere/schuelerpraktikum.aspx">
                                      <span>Schülerpraktika</span>
                                    </Link>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/country-sites/deutschland/karriere/germany-tag-der-ausbildung.aspx">
                                      <span>Tag der Ausbildung</span>
                                    </Link>
                                  </li>
                                  <li className="level4 last">
                                    <Link href="https://www.rolls-royce.com/country-sites/deutschland/karriere/termine.aspx">
                                      <span>Termine</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="level3 last">
                                <Link href="https://www.rolls-royce.com/country-sites/deutschland/kontakt.aspx">
                                  <span>Kontakt </span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="level2 haschildren">
                            <Link href="https://www.rolls-royce.com/country-sites/india.aspx">
                              <span>India</span>
                            </Link>
                            <ul>
                              <li className="level3 first">
                                <Link href="https://www.rolls-royce.com/country-sites/india.aspx">
                                  <span>Home</span>
                                </Link>
                              </li>
                              <li className="level3 haschildren">
                                <Link href="https://www.rolls-royce.com/country-sites/india/partners-in-progress.aspx">
                                  <span>Partners in progress</span>
                                </Link>
                                <ul>
                                  <li className="level4 first">
                                    <Link href="https://www.rolls-royce.com/country-sites/india/partners-in-progress/our-people.aspx">
                                      <span>Our people</span>
                                    </Link>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/country-sites/india/partners-in-progress/engineering.aspx">
                                      <span>Engineering</span>
                                    </Link>
                                  </li>
                                  <li className="level4 last">
                                    <Link href="https://www.rolls-royce.com/country-sites/india/partners-in-progress/manufacturing-and-supply-chain.aspx">
                                      <span>Manufacturing & supply chain</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="level3 haschildren">
                                <Link href="https://www.rolls-royce.com/country-sites/india/products-and-services/civil-aerospace.aspx">
                                  <span>Products & Services</span>
                                </Link>
                                <ul>
                                  <li className="level4 first">
                                    <Link href="https://www.rolls-royce.com/country-sites/india/products-and-services/civil-aerospace.aspx">
                                      <span>Civil Aerospace</span>
                                    </Link>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/country-sites/india/products-and-services/defence.aspx">
                                      <span>Defence</span>
                                    </Link>
                                  </li>
                                  <li className="level4 last">
                                    <Link href="https://www.rolls-royce.com/country-sites/india/products-and-services/power-systems.aspx">
                                      <span>Power Systems</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="level3 haschildren">
                                <Link href="https://www.rolls-royce.com/country-sites/india/sustainability/our-approach.aspx">
                                  <span>Sustainability</span>
                                </Link>
                                <ul>
                                  <li className="level4 first">
                                    <Link href="https://www.rolls-royce.com/country-sites/india/sustainability/our-approach.aspx">
                                      <span>Our approach</span>
                                    </Link>
                                  </li>
                                  <li className="level4 last">
                                    <Link href="https://www.rolls-royce.com/country-sites/india/sustainability/our-community-programmes.aspx">
                                      <span>Our community programmes</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="level3">
                                <Link href="https://www.rolls-royce.com/country-sites/india/contacts.aspx">
                                  <span>Contacts</span>
                                </Link>
                              </li>
                              <li className="level3 last">
                                <Link
                                  target="_blank"
                                  href="https://careers.rolls-royce.com/rest-of-the-world?country=india#/"
                                >
                                  <span>Careers</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="level2 haschildren">
                            <Link href="https://www.rolls-royce.com/country-sites/china.aspx">
                              <span>首页</span>
                            </Link>
                            <ul>
                              <li className="level3 first">
                                <Link href="https://www.rolls-royce.com/country-sites/china.aspx">
                                  <span>首页</span>
                                </Link>
                              </li>
                              <li className="level3">
                                <Link href="https://www.rolls-royce.com/country-sites/china/rolls-royce-in-china.aspx">
                                  <span>罗罗在中国​</span>
                                </Link>
                              </li>
                              <li className="level3">
                                <Link href="https://www.rolls-royce.com/country-sites/china/civil.aspx">
                                  <span>民用航空​</span>
                                </Link>
                              </li>
                              <li className="level3">
                                <Link target="_blank" href="https://mtu-solutions.com/">
                                  <span>动力系统</span>
                                </Link>
                              </li>
                              <li className="level3">
                                <Link href="https://www.rolls-royce.com/country-sites/china-exhibition-chinese.aspx">
                                  <span>电动飞行</span>
                                </Link>
                              </li>
                              <li className="level3 last">
                                <Link href="https://www.rolls-royce.com/country-sites/china/careers.aspx">
                                  <span>加入我们</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="level2 haschildren">
                            <Link href="https://www.rolls-royce.com/country-sites/korea.aspx">
                              <span>대한민국 </span>
                            </Link>
                            <ul>
                              <li className="level3 first">
                                <Link href="https://www.rolls-royce.com/country-sites/korea.aspx">
                                  <span>홈</span>
                                </Link>
                              </li>
                              <li className="level3 haschildren">
                                <Link href="https://www.rolls-royce.com/country-sites/korea/about-us.aspx">
                                  <span>롤스로이스 소개</span>
                                </Link>
                                <ul>
                                  <li className="level4 first">
                                    <Link href="https://www.rolls-royce.com/country-sites/korea/about-us/our-research.aspx">
                                      <span>연구개발</span>
                                    </Link>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/country-sites/korea/about-us/our-history.aspx">
                                      <span>롤스로이스 역사</span>
                                    </Link>
                                  </li>
                                  <li className="level4 last">
                                    <Link href="https://www.rolls-royce.com/country-sites/korea/about-us/where-we-operate.aspx">
                                      <span>세계속의 롤스로이스</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="level3">
                                <Link href="https://www.rolls-royce.com/country-sites/korea/about-rolls-royce-korea.aspx">
                                  <span>롤스로이스 코리아</span>
                                </Link>
                              </li>
                              <li className="level3">
                                <Link href="https://www.rolls-royce.com/country-sites/korea/innovation.aspx">
                                  <span>이노베이션</span>
                                </Link>
                              </li>
                              <li className="level3 haschildren">
                                <Link href="https://www.rolls-royce.com/country-sites/korea/naval.aspx">
                                  <span>해군 분야</span>
                                </Link>
                                <ul>
                                  <li className="level4 haschildren first">
                                    <Link href="https://www.rolls-royce.com/country-sites/korea/naval/gas-turbines.aspx">
                                      <span>함정용가스터빈</span>
                                    </Link>
                                    <ul>
                                      <li className="level5 first">
                                        <Link href="https://www.rolls-royce.com/country-sites/korea/naval/gas-turbines/mt30-marine-gas-turbine.aspx">
                                          <span>MT30 함정용 가스터빈</span>
                                        </Link>
                                      </li>
                                      <li className="level5">
                                        <Link href="https://www.rolls-royce.com/country-sites/korea/naval/gas-turbines/mt7-marine-gas-turbine.aspx">
                                          <span>MT7 함정용 가스터빈</span>
                                        </Link>
                                      </li>
                                      <li className="level5">
                                        <Link href="https://www.rolls-royce.com/country-sites/korea/naval/gas-turbines/ag9160-generator-set.aspx">
                                          <span>AG9160 발전기</span>
                                        </Link>
                                      </li>
                                      <li className="level5 last">
                                        <Link href="https://www.rolls-royce.com/country-sites/korea/naval/gas-turbines/ag9140-generator-set.aspx">
                                          <span>AG9140 발전기</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/products-and-services/power-systems.aspx">
                                      <span>파워시스템</span>
                                    </Link>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/country-sites/korea/naval/propulsion.aspx">
                                      <span>추진시스템</span>
                                    </Link>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/country-sites/korea/naval/naval-handling-systems.aspx">
                                      <span>함정 진회수 시스템</span>
                                    </Link>
                                  </li>
                                  <li className="level4 last">
                                    <Link href="https://www.rolls-royce.com/country-sites/korea/naval/electrical-automation-and-control.aspx">
                                      <span>전기, 자동화 및 제어</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="level3">
                                <Link href="https://www.rolls-royce.com/country-sites/korea/electrification.aspx">
                                  <span>전기화 분야</span>
                                </Link>
                              </li>
                              <li className="level3">
                                <Link href="https://www.rolls-royce.com/country-sites/korea/our-stories.aspx">
                                  <span>미디어</span>
                                </Link>
                              </li>
                              <li className="level3 last">
                                <Link href="https://www.rolls-royce.com/country-sites/korea/contacts.aspx">
                                  <span>연락처</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="level2 haschildren">
                            <Link href="https://www.rolls-royce.com/country-sites/sea.aspx">
                              <span>South East Asia</span>
                            </Link>
                            <ul>
                              <li className="level3 first">
                                <Link href="https://www.rolls-royce.com/country-sites/sea/our-stories.aspx">
                                  <span>Our stories</span>
                                </Link>
                              </li>
                              <li className="level3 haschildren">
                                <Link href="https://www.rolls-royce.com/country-sites/sea/our-locations/singapore.aspx">
                                  <span>Our locations</span>
                                </Link>
                                <ul>
                                  <li className="level4 first">
                                    <Link href="https://www.rolls-royce.com/country-sites/sea/our-locations/singapore.aspx">
                                      <span>Singapore</span>
                                    </Link>
                                  </li>
                                  <li className="level4 last">
                                    <Link href="https://www.rolls-royce.com/country-sites/sea/our-locations/south-east-asia.aspx">
                                      <span>The wider South East Asia</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="level3">
                                <Link href="https://www.rolls-royce.com/country-sites/sea/community.aspx">
                                  <span>Community</span>
                                </Link>
                              </li>
                              <li className="level3 last">
                                <Link
                                  target="_blank"
                                  href="https://careers.rolls-royce.com/rest-of-the-world#/"
                                >
                                  <span>Careers</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="level2 haschildren last">
                            <Link href="https://www.rolls-royce.com/country-sites/arabic.aspx">
                              <span>Arabic</span>
                            </Link>
                            <ul>
                              <li className="level3 first">
                                <Link href="https://www.rolls-royce.com/country-sites/arabic.aspx">
                                  <span>عن الشركة</span>
                                </Link>
                              </li>
                              <li className="level3 haschildren">
                                <Link href="https://www.rolls-royce.com/country-sites/arabic/products-and-services.aspx">
                                  <span>الحلول والخدمات</span>
                                </Link>
                                <ul>
                                  <li className="level4 first">
                                    <Link href="https://www.rolls-royce.com/country-sites/arabic/products-and-services/civil-aviation-sector.aspx">
                                      <span>قطاع الطيران المدني</span>
                                    </Link>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/country-sites/arabic/products-and-services/defense.aspx">
                                      <span>الدفاع</span>
                                    </Link>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/country-sites/arabic/products-and-services/energy-systems.aspx">
                                      <span>أنظمة الطاقة</span>
                                    </Link>
                                  </li>
                                  <li className="level4 last">
                                    <Link href="https://www.rolls-royce.com/country-sites/arabic/products-and-services/electricity.aspx">
                                      <span>الكهرباء</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="level3 haschildren">
                                <Link href="https://www.rolls-royce.com/country-sites/arabic/innovation.aspx">
                                  <span>الابتكارات</span>
                                </Link>
                                <ul>
                                  <li className="level4 first">
                                    <Link href="https://www.rolls-royce.com/country-sites/arabic/innovation/rr-space-technology.aspx">
                                      <span>رولز-رويس التكنولوجيا والفضاء</span>
                                    </Link>
                                  </li>
                                  <li className="level4">
                                    <Link href="https://www.rolls-royce.com/country-sites/arabic/innovation/rr-smr-ltd.aspx">
                                      <span>رولز-رويس إس إم آر</span>
                                    </Link>
                                  </li>
                                  <li className="level4 last">
                                    <Link href="https://www.rolls-royce.com/country-sites/arabic/innovation/r2-data-labs.aspx">
                                      <span>معامل بيانات آر2</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="level3">
                                <Link href="https://www.rolls-royce.com/country-sites/arabic/net-zero.aspx">
                                  <span>الاستدامة</span>
                                </Link>
                              </li>
                              <li className="level3 last">
                                <Link href="https://www.rolls-royce.com/country-sites/arabic/contact-us.aspx">
                                  <span>تواصلو معنا</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="level1 haschildren">
                        <Link href="https://www.rolls-royce.com/sustainability.aspx">
                          <span>Sustainability</span>
                        </Link>
                        <ul>
                          <li className="level2 haschildren first">
                            <Link href="https://www.rolls-royce.com/sustainability/our-approach-to-decarbonisation.aspx">
                              <span>Our approach to decarbonisation</span>
                            </Link>
                            <ul>
                              <li className="level3 haschildren first">
                                <Link href="https://www.rolls-royce.com/sustainability/our-approach-to-decarbonisation/making-rolls-royce-a-net-zero-carbon-company.aspx">
                                  <span>Becoming a net zero carbon company</span>
                                </Link>
                                <ul>
                                  <li className="level4 first last">
                                    <Link href="https://www.rolls-royce.com/sustainability/our-approach-to-decarbonisation/making-rolls-royce-a-net-zero-carbon-company/our-emission-footprint.aspx">
                                      <span>Our emissions footprint</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="level3">
                                <Link href="https://www.rolls-royce.com/sustainability/our-approach-to-decarbonisation/decarbonising-complex-critical-systems.aspx">
                                  <span>Decarbonising complex and critical systems</span>
                                </Link>
                              </li>
                              <li className="level3">
                                <Link href="https://www.rolls-royce.com/sustainability/our-approach-to-decarbonisation/creating-an-enabling-environment.aspx">
                                  <span>Creating an enabling environment</span>
                                </Link>
                              </li>
                              <li className="level3 last">
                                <Link href="https://www.rolls-royce.com/sustainability/our-approach-to-decarbonisation/materiality.aspx">
                                  <span>Materiality</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="level2">
                            <Link href="https://www.rolls-royce.com/sustainability/ethics-and-compliance.aspx">
                              <span>Ethics and compliance</span>
                            </Link>
                          </li>
                          <li className="level2">
                            <Link href="https://www.rolls-royce.com/sustainability/our-people.aspx">
                              <span>Our people</span>
                            </Link>
                          </li>
                          <li className="level2">
                            <Link href="https://www.rolls-royce.com/sustainability/engineering-and-innovation.aspx">
                              <span>Engineering and innovation</span>
                            </Link>
                          </li>
                          <li className="level2">
                            <Link href="https://www.rolls-royce.com/sustainability/operations-and-facilities.aspx">
                              <span>Operations and facilities</span>
                            </Link>
                          </li>
                          <li className="level2">
                            <Link href="https://www.rolls-royce.com/sustainability/customers-and-suppliers.aspx">
                              <span>Our Stakeholders </span>
                            </Link>
                          </li>
                          <li className="level2">
                            <Link href="https://www.rolls-royce.com/sustainability/cyber-security.aspx">
                              <span>Cyber Security</span>
                            </Link>
                          </li>
                          <li className="level2 haschildren last">
                            <Link href="https://www.rolls-royce.com/sustainability/performance.aspx">
                              <span>Performance</span>
                            </Link>
                            <ul>
                              <li className="level3 first">
                                <Link href="https://www.rolls-royce.com/sustainability/performance/reporting-approach.aspx">
                                  <span>Reporting approach</span>
                                </Link>
                              </li>
                              <li className="level3">
                                <Link href="https://www.rolls-royce.com/sustainability/performance/target-progress.aspx">
                                  <span>Target progress</span>
                                </Link>
                              </li>
                              <li className="level3 last">
                                <Link href="https://www.rolls-royce.com/sustainability/performance/data-charts.aspx">
                                  <span>Data charts</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="level1 haschildren">
                        <Link href="https://www.rolls-royce.com/investors.aspx">
                          <span>Investors</span>
                        </Link>
                        <ul>
                          <li className="level2 haschildren first">
                            <Link href="https://www.rolls-royce.com/investors/investor-centre/share-price.aspx">
                              <span>Investor Centre</span>
                            </Link>
                            <ul>
                              <li className="level3 first">
                                <Link href="https://www.rolls-royce.com/investors/investor-centre/share-price.aspx">
                                  <span>Share price</span>
                                </Link>
                              </li>
                              <li className="level3 last">
                                <Link href="https://www.rolls-royce.com/investors/investor-centre/analyst-consensus.aspx">
                                  <span>Analyst consensus</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="level2 haschildren">
                            <Link href="https://www.rolls-royce.com/investors/capital-markets-day.aspx">
                              <span>Capital Markets Day</span>
                            </Link>
                            <ul>
                              <li className="level3 first">
                                <Link href="https://www.rolls-royce.com/investors/capital-markets-day/civil-aerospace.aspx">
                                  <span>Civil Aerospace</span>
                                </Link>
                              </li>
                              <li className="level3">
                                <Link href="https://www.rolls-royce.com/investors/capital-markets-day/defence.aspx">
                                  <span>Defence</span>
                                </Link>
                              </li>
                              <li className="level3">
                                <Link href="https://www.rolls-royce.com/investors/capital-markets-day/power-systems.aspx">
                                  <span>Power Systems</span>
                                </Link>
                              </li>
                              <li className="level3 last">
                                <Link href="https://www.rolls-royce.com/investors/capital-markets-day/small-modular-reactors.aspx">
                                  <span>Small Modular Reactors</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="level2">
                            <Link href="https://www.rolls-royce.com/investors/why-rolls-royce.aspx">
                              <span>Why Rolls-Royce?</span>
                            </Link>
                          </li>
                          <li className="level2">
                            <Link href="https://www.rolls-royce.com/investors/2023-full-year-results.aspx">
                              <span>2023 Full Year Results</span>
                            </Link>
                          </li>
                          <li className="level2">
                            <Link href="https://www.rolls-royce.com/investors/regulatory-news.aspx">
                              <span>Regulatory news</span>
                            </Link>
                          </li>
                          <li className="level2 haschildren">
                            <Link href="https://www.rolls-royce.com/investors/results-reports-and-presentations/financial-results.aspx">
                              <span>Results, reports and presentations</span>
                            </Link>
                            <ul>
                              <li className="level3 first">
                                <Link href="https://www.rolls-royce.com/investors/results-reports-and-presentations/financial-results.aspx">
                                  <span>Financial Results</span>
                                </Link>
                              </li>
                              <li className="level3">
                                <Link href="https://www.rolls-royce.com/investors/results-reports-and-presentations/annual-report-2023.aspx">
                                  <span>Annual Report 2023</span>
                                </Link>
                              </li>
                              <li className="level3 last">
                                <Link href="https://www.rolls-royce.com/investors/results-reports-and-presentations/ar-annual-report-archive/ar-annual-reports.aspx">
                                  <span>Annual Reports archive</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="level2">
                            <Link href="https://www.rolls-royce.com/investors/financial-calendar.aspx">
                              <span>Financial calendar</span>
                            </Link>
                          </li>
                          <li className="level2">
                            <Link href="https://www.rolls-royce.com/about/leadership/corporate-governance.aspx">
                              <span>Corporate governance</span>
                            </Link>
                          </li>
                          <li className="level2 haschildren">
                            <Link href="https://www.rolls-royce.com/investors/shareholder-information.aspx">
                              <span>Shareholder information</span>
                            </Link>
                            <ul>
                              <li className="level3 first">
                                <Link href="https://www.rolls-royce.com/investors/shareholder-information/general-meetings.aspx">
                                  <span>
                                    General Meetings <br />
                                    23 May 2024{' '}
                                  </span>
                                </Link>
                              </li>
                              <li className="level3">
                                <Link href="https://www.rolls-royce.com/investors/shareholder-information/annual-general-meeting-archive/yr-2023.aspx">
                                  <span>General Meeting archive</span>
                                </Link>
                              </li>
                              <li className="level3">
                                <Link href="https://www.rolls-royce.com/investors/shareholder-information/payments-to-shareholders.aspx">
                                  <span>Payments to shareholders</span>
                                </Link>
                              </li>
                              <li className="level3">
                                <Link href="https://www.rolls-royce.com/investors/shareholder-information/manage-your-shareholding.aspx">
                                  <span>Manage your shareholding</span>
                                </Link>
                              </li>
                              <li className="level3">
                                <Link href="https://www.rolls-royce.com/investors/shareholder-information/registrar.aspx">
                                  <span>Registrar</span>
                                </Link>
                              </li>
                              <li className="level3">
                                <Link href="https://www.rolls-royce.com/investors/shareholder-information/shareholder-fraud-warning.aspx">
                                  <span>Shareholder fraud warning</span>
                                </Link>
                              </li>
                              <li className="level3 last">
                                <Link href="https://www.rolls-royce.com/investors/shareholder-information/faqs.aspx">
                                  <span>FAQs</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="level2">
                            <Link href="https://www.rolls-royce.com/investors/debt-securities.aspx">
                              <span>Debt Securities</span>
                            </Link>
                          </li>
                          <li className="level2">
                            <Link href="https://www.rolls-royce.com/investors/rights-issue.aspx">
                              <span>Rights issue</span>
                            </Link>
                          </li>
                          <li className="level2 last">
                            <Link href="https://www.rolls-royce.com/investors/investor-contacts.aspx">
                              <span>Investor contacts</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="level1 haschildren">
                        <Link href="https://www.rolls-royce.com/media.aspx">
                          <span>Media</span>
                        </Link>
                        <ul>
                          <li className="level2 first">
                            <Link href="https://www.rolls-royce.com/media/press-releases#company-announcements">
                              <span>Company announcements</span>
                            </Link>
                          </li>
                          <li className="level2">
                            <Link href="https://www.rolls-royce.com/media/press-releases#trade-press-releases">
                              <span>Trade press releases</span>
                            </Link>
                          </li>
                          <li className="level2">
                            <Link href="https://www.rolls-royce.com/media/our-stories.aspx">
                              <span>Our stories</span>
                            </Link>
                          </li>
                          <li className="level2">
                            <Link href="https://www.rolls-royce.com/media/press-releases.aspx">
                              <span>Press releases</span>
                            </Link>
                          </li>
                          <li className="level2">
                            <Link href="https://www.rolls-royce.com/media/social.aspx">
                              <span>Social</span>
                            </Link>
                          </li>
                          <li className="level2 last">
                            <Link href="https://www.rolls-royce.com/media/contacts.aspx">
                              <span>Contacts</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="level1 last">
                        <Link target="_blank" href="https://careers.rolls-royce.com">
                          <span>Careers</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div id="menu-links">
                    <div id="msearchbox" className="clearfix">
                      <div id="msearchTextboxContainer">
                        <script type="text/javascript">
                          {`//<![CDATA[
                                       function FilterIP3SearchInput(event) {
                                                   var keyCode = ('which' in event) ? event.which : event.keyCode;
                                                   isNumericOrWithShift = (keyCode == 48 || keyCode == 57 || keyCode == 56 || keyCode == 188 || keyCode == 190) || (keyCode >= 96 && keyCode <= 105 );
                                                   isSymbol = (keyCode == 219 || keyCode == 221 || keyCode == 220 );
                                          isWithoutShift = (keyCode == 191);
                                                   modifiers = (event.shiftKey);
                                                   if ((isNumericOrWithShift && modifiers) || isSymbol || (!modifiers && isWithoutShift)) {
                                                       return false;
                                                   }
                                                   else {
                                                       return true;
                                                   }
                                               }
                                       //]]>`}
                        </script>
                        <input
                          name="body_0$main_0$ctl05$ctl01$msearchTextbox"
                          type="text"
                          value="Search"
                          id="msearchTextbox"
                        />
                      </div>
                      <div id="mSearchButtonContainer">
                        <input
                          type="submit"
                          name="body_0$main_0$ctl05$ctl02$ctl00"
                          value="GO"
                          id="msearchButton"
                        />
                      </div>
                    </div>
                    <div id="mheaderlinks" className="clearfix">
                      <div id="headerlinksmobi">
                        <ul>
                          <li>
                            <Link title="Visit Other Global Sites Drop Down" href="javascript:;">
                              <span className="icon-globe">Global</span>
                            </Link>
                            <ul>
                              <li>
                                <Link href="https://www.rolls-royce.com/country-sites/china.aspx">
                                  China
                                </Link>
                              </li>
                              <li>
                                <Link href="https://www.rolls-royce.com/country-sites/japan.aspx">
                                  Japan
                                </Link>
                              </li>
                              <li>
                                <Link href="https://www.rolls-royce.com/country-sites/deutschland.aspx">
                                  Germany
                                </Link>
                              </li>
                              <li>
                                <Link href="https://www.rolls-royce.com/country-sites/northamerica.aspx">
                                  North America
                                </Link>
                              </li>
                              <li>
                                <Link href="https://www.rolls-royce.com/country-sites/sea.aspx">
                                  South East Asia
                                </Link>
                              </li>
                              <li>
                                <Link href="https://www.rolls-royce.com/country-sites/uk.aspx">
                                  United Kingdom
                                </Link>
                              </li>
                              <li>
                                <Link href="https://www.rolls-royce.com/country-sites/india.aspx">
                                  India
                                </Link>
                              </li>
                              <li>
                                <Link href="https://www.rolls-royce.com/country-sites/korea.aspx">
                                  Korea
                                </Link>
                              </li>
                              <li>
                                <Link href="https://www.rolls-royce.com/country-sites/hungary-en.aspx">
                                  Hungary
                                </Link>
                              </li>
                              <li>
                                <Link href="https://www.rolls-royce.com/country-sites/arabic.aspx">
                                  Arabic
                                </Link>
                              </li>
                              <li>
                                <Link href="https://www.rolls-royce.com/country-sites/brasil.aspx">
                                  Brazil
                                </Link>
                              </li>
                              <li>
                                <Link href="https://www.rolls-royce.com/about/where-we-operate.aspx">
                                  Global contacts
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="share-ticker-container">
                      <Link
                        className="share-link-header"
                        href="https://www.rolls-royce.com/investors/share-price.aspx"
                      ></Link>
                      <iframe
                        title="Ticker On the Header"
                        src="https://irs.tools.investis.com/Clients/uk/rolls_royce2/Ticker/Ticker.aspx?culture=en-GB"
                        className="externalwebIFrame responsive-frame"
                        id="ExternalWebContentExternalIFrameHeadTicker2"
                        allowTransparency
                      ></iframe>
                    </div>
                  </div>
                  <div id="topnavigation" className="topnavigation">
                    <div className="fw-Menu" id="fwMenu">
                      <div className="fwMenuwrapper">
                        <ul id="section-Homepage-level1">
                          <li id="nav-innovation-level1" className="level1 haschildren first">
                            <Link href="https://www.rolls-royce.com/innovation.aspx">
                              <span>Innovation</span>
                            </Link>
                            <ul id="section-innovation-level2">
                              <li
                                id="nav-alternative-fuels-level2"
                                className="level2 haschildren first"
                              >
                                <Link href="https://www.rolls-royce.com/innovation/alternative-fuels.aspx">
                                  <span>Alternative fuels</span>
                                </Link>
                                <ul id="section-alternative-fuels-level3">
                                  <li id="nav-hydrogen-level3" className="level3 first last">
                                    <Link href="https://www.rolls-royce.com/innovation/alternative-fuels/hydrogen.aspx">
                                      <span>Hydrogen</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li id="nav-climate-tech-centre-level2" className="level2">
                                <Link href="https://www.rolls-royce.com/innovation/climate-tech-centre.aspx">
                                  <span>Climate-tech centre</span>
                                </Link>
                              </li>
                              <li id="nav-small-modular-reactors-level2" className="level2">
                                <Link href="https://www.rolls-royce.com/innovation/small-modular-reactors.aspx">
                                  <span>Small modular reactors</span>
                                </Link>
                              </li>
                              <li id="nav-novel-nuclear-level2" className="level2 haschildren">
                                <Link href="https://www.rolls-royce.com/innovation/novel-nuclear.aspx">
                                  <span>Novel Nuclear</span>
                                </Link>
                                <ul id="section-novel-nuclear-level3">
                                  <li id="nav-micro-reactor-level3" className="level3 first last">
                                    <Link href="https://www.rolls-royce.com/innovation/novel-nuclear/micro-reactor.aspx">
                                      <span>Micro-Reactor</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li id="nav-ultrafan-level2" className="level2">
                                <Link href="https://www.rolls-royce.com/innovation/ultrafan.aspx">
                                  <span>UltraFan</span>
                                </Link>
                              </li>
                              <li id="nav-digital-level2" className="level2 haschildren">
                                <Link href="https://www.rolls-royce.com/innovation/digital.aspx">
                                  <span>Digital</span>
                                </Link>
                                <ul id="section-digital-level3">
                                  <li id="nav-digital-platforms-level3" className="level3 first">
                                    <Link href="https://www.rolls-royce.com/innovation/digital/digital-platforms.aspx">
                                      <span>Digital Platforms </span>
                                    </Link>
                                  </li>
                                  <li id="nav-digital-twin-level3" className="level3 last">
                                    <Link href="https://www.rolls-royce.com/innovation/digital/digital-twin.aspx">
                                      <span>Digital Twin</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li id="nav-the-aletheia-framework-level2" className="level2">
                                <Link href="https://www.rolls-royce.com/innovation/the-aletheia-framework.aspx">
                                  <span>
                                    The Aletheia Framework<sup>®</sup>
                                  </span>
                                </Link>
                              </li>
                              <li id="nav-accel-level2" className="level2 last">
                                <Link href="https://www.rolls-royce.com/innovation/accel.aspx">
                                  <span>ACCEL</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="nav-products-and-services-level1"
                            className="level1 selected haschildren"
                          >
                            <Link href="https://www.rolls-royce.com/products-and-services.aspx">
                              <span>Products & Services</span>
                            </Link>
                            <ul id="section-products-and-services-level2">
                              <li
                                id="nav-civil-aerospace-level2"
                                className="level2 current haschildren first"
                              >
                                <span>Civil Aerospace</span>
                                <ul id="section-civil-aerospace-level3">
                                  <li id="nav-sustainability-level3" className="level3 first">
                                    <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/sustainability.aspx">
                                      <span>Sustainability</span>
                                    </Link>
                                  </li>
                                  <li id="nav-purchase-parts-services-level3" className="level3">
                                    <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/marketplace.aspx">
                                      <span>Purchase Parts & Services</span>
                                    </Link>
                                  </li>
                                  <li id="nav-services-level3" className="level3 haschildren">
                                    <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/services.aspx">
                                      <span>Services</span>
                                    </Link>
                                    <ul id="section-services-level4">
                                      <li id="nav-passenger-level4" className="level4 first">
                                        <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/services/passenger.aspx">
                                          <span>Passenger</span>
                                        </Link>
                                      </li>
                                      <li id="nav-Freighter-level4" className="level4">
                                        <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/services/freighter.aspx">
                                          <span>Freighter</span>
                                        </Link>
                                      </li>
                                      <li id="nav-lessors-level4" className="level4">
                                        <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/services/lessors.aspx">
                                          <span>Lessors</span>
                                        </Link>
                                      </li>
                                      <li id="nav-business-level4" className="level4">
                                        <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/services/business.aspx">
                                          <span>Business</span>
                                        </Link>
                                      </li>
                                      <li id="nav-other-customers-level4" className="level4 last">
                                        <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/services/other-customers.aspx">
                                          <span>Other Customers</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li id="nav-aircraft-transitions-level3" className="level3">
                                    <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/aircraft-transitions.aspx">
                                      <span>Aircraft Transitions</span>
                                    </Link>
                                  </li>
                                  <li id="nav-widebody-level3" className="level3 haschildren">
                                    <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/widebody/power-of-trent.aspx">
                                      <span>Widebody</span>
                                    </Link>
                                    <ul id="section-widebody-level4">
                                      <li
                                        id="nav-power-of-trent-level4"
                                        className="level4 haschildren first"
                                      >
                                        <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/widebody/power-of-trent.aspx">
                                          <span>Power of Trent</span>
                                        </Link>
                                        <ul id="section-power-of-trent-level5">
                                          <li
                                            id="nav-versatile-and-capable-level5"
                                            className="level5 first last"
                                          >
                                            <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/widebody/power-of-trent/versatile-and-capable.aspx">
                                              <span>Capable & Versatile</span>
                                            </Link>
                                          </li>
                                        </ul>
                                      </li>
                                      <li id="nav-trent-7000-level4" className="level4">
                                        <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/widebody/trent-7000.aspx">
                                          <span>Trent 7000</span>
                                        </Link>
                                      </li>
                                      <li id="nav-trent-xwb-level4" className="level4">
                                        <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/widebody/trent-xwb.aspx">
                                          <span>Trent XWB</span>
                                        </Link>
                                      </li>
                                      <li id="nav-trent-1000-level4" className="level4">
                                        <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/widebody/trent-1000.aspx">
                                          <span>Trent 1000</span>
                                        </Link>
                                      </li>
                                      <li id="nav-trent-900-level4" className="level4">
                                        <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/widebody/trent-900.aspx">
                                          <span>Trent 900</span>
                                        </Link>
                                      </li>
                                      <li id="nav-trent-500-level4" className="level4">
                                        <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/widebody/trent-500.aspx">
                                          <span>Trent 500</span>
                                        </Link>
                                      </li>
                                      <li id="nav-trent-800-level4" className="level4">
                                        <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/widebody/trent-800.aspx">
                                          <span>Trent 800</span>
                                        </Link>
                                      </li>
                                      <li id="nav-trent-700-level4" className="level4">
                                        <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/widebody/trent-700.aspx">
                                          <span>Trent 700</span>
                                        </Link>
                                      </li>
                                      <li id="nav-rb211-524gh-and-t-level4" className="level4 last">
                                        <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/widebody/rb211-524gh-and-t.aspx">
                                          <span>RB211-524G/H & -T</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li
                                    id="nav-narrowbody-and-regional-level3"
                                    className="level3 haschildren"
                                  >
                                    <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/narrowbody-and-regional/ae3007.aspx">
                                      <span>Narrowbody & Regional</span>
                                    </Link>
                                    <ul id="section-narrowbody-and-regional-level4">
                                      <li id="nav-ae3007-level4" className="level4 first">
                                        <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/narrowbody-and-regional/ae3007.aspx">
                                          <span>AE3007</span>
                                        </Link>
                                      </li>
                                      <li id="nav-br715-level4" className="level4">
                                        <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/narrowbody-and-regional/br715.aspx">
                                          <span>BR715</span>
                                        </Link>
                                      </li>
                                      <li id="nav-rb211-535e4-level4" className="level4">
                                        <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/narrowbody-and-regional/rb211-535e4.aspx">
                                          <span>RB211-535E4</span>
                                        </Link>
                                      </li>
                                      <li id="nav-tay-level4" className="level4 last">
                                        <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/narrowbody-and-regional/tay.aspx">
                                          <span>Tay 620 / 650</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li
                                    id="nav-business-aviation-level3"
                                    className="level3 haschildren"
                                  >
                                    <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/business-aviation.aspx">
                                      <span>Business Aviation</span>
                                    </Link>
                                    <ul id="section-business-aviation-level4">
                                      <li id="nav-pearl-10x-level4" className="level4 first">
                                        <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/business-aviation/pearl-10x.aspx">
                                          <span>Pearl 10X</span>
                                        </Link>
                                      </li>
                                      <li id="nav-pearl-700-level4" className="level4">
                                        <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/business-aviation/pearl-700.aspx">
                                          <span>Pearl 700</span>
                                        </Link>
                                      </li>
                                      <li id="nav-pearl-15-level4" className="level4">
                                        <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/business-aviation/pearl-15.aspx">
                                          <span>Pearl 15</span>
                                        </Link>
                                      </li>
                                      <li id="nav-ae-3007-level4" className="level4">
                                        <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/business-aviation/ae-3007.aspx">
                                          <span>AE 3007</span>
                                        </Link>
                                      </li>
                                      <li id="nav-br710-level4" className="level4">
                                        <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/business-aviation/br710.aspx">
                                          <span>BR710</span>
                                        </Link>
                                      </li>
                                      <li id="nav-br725-level4" className="level4">
                                        <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/business-aviation/br725.aspx">
                                          <span>BR725</span>
                                        </Link>
                                      </li>
                                      <li id="nav-tay-level4" className="level4 last">
                                        <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/business-aviation/tay.aspx">
                                          <span>Tay</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li id="nav-helicopters-level3" className="level3 haschildren">
                                    <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/helicopters/m250-turboshaft.aspx">
                                      <span>Helicopters</span>
                                    </Link>
                                    <ul id="section-helicopters-level4">
                                      <li id="nav-m250-turboshaft-level4" className="level4 first">
                                        <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/helicopters/m250-turboshaft.aspx">
                                          <span>M250 turboshaft</span>
                                        </Link>
                                      </li>
                                      <li id="nav-rr300-level4" className="level4">
                                        <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/helicopters/rr300.aspx">
                                          <span>RR300</span>
                                        </Link>
                                      </li>
                                      <li id="nav-m250-turboprop-level4" className="level4 last">
                                        <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/helicopters/m250-turboprop.aspx">
                                          <span>M250 turboprop</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li id="nav-future-products-level3" className="level3">
                                    <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/future-products.aspx">
                                      <span>Future products</span>
                                    </Link>
                                  </li>
                                  <li
                                    id="nav-testing-capabilities-level3"
                                    className="level3 haschildren last"
                                  >
                                    <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/testing-capabilities.aspx">
                                      <span>Testing capabilities</span>
                                    </Link>
                                    <ul id="section-testing-capabilities-level4">
                                      <li
                                        id="nav-access-our-testing-capabilities-level4"
                                        className="level4 first"
                                      >
                                        <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/testing-capabilities/access-our-testing-capabilities.aspx">
                                          <span>Access our testing capabilities</span>
                                        </Link>
                                      </li>
                                      <li
                                        id="nav-testbed-facilities-level4"
                                        className="level4 last"
                                      >
                                        <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/testing-capabilities/testbed-facilities.aspx">
                                          <span>Testbed facilities</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li id="nav-defence-level2" className="level2 haschildren">
                                <Link href="https://www.rolls-royce.com/products-and-services/defence.aspx">
                                  <span>Defence</span>
                                </Link>
                                <ul id="section-defence-level3">
                                  <li
                                    id="nav-future_combat_air_capability-level3"
                                    className="level3 haschildren first"
                                  >
                                    <Link href="https://www.rolls-royce.com/products-and-services/defence/future_combat_air_capability.aspx">
                                      <span>Power for Future Combat Air </span>
                                    </Link>
                                    <ul id="section-future_combat_air_capability-level4">
                                      <li
                                        id="nav-achieving_net_zero_for_future_combat_air_systems_fcas-level4"
                                        className="level4 first"
                                      >
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/future_combat_air_capability/achieving_net_zero_for_future_combat_air_systems_fcas.aspx">
                                          <span>Net Zero for Future Combat Air Systems </span>
                                        </Link>
                                      </li>
                                      <li id="nav-tempest-level4" className="level4">
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/future_combat_air_capability/tempest.aspx">
                                          <span>Tempest</span>
                                        </Link>
                                      </li>
                                      <li id="nav-orpheus-level4" className="level4">
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/future_combat_air_capability/orpheus.aspx">
                                          <span>Orpheus</span>
                                        </Link>
                                      </li>
                                      <li id="nav-careers-level4" className="level4 last">
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/future_combat_air_capability/careers.aspx">
                                          <span>Developing the Next Generation</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li id="nav-digital-innovation-level3" className="level3">
                                    <Link href="https://www.rolls-royce.com/products-and-services/defence/digital-innovation.aspx">
                                      <span>Digital FIRST</span>
                                    </Link>
                                  </li>
                                  <li id="nav-sustainable-power-level3" className="level3">
                                    <Link href="https://www.rolls-royce.com/products-and-services/defence/sustainable-power.aspx">
                                      <span>Energy Transition for Defence</span>
                                    </Link>
                                  </li>
                                  <li
                                    id="nav-advanced-technology-defence-level3"
                                    className="level3 haschildren"
                                  >
                                    <Link href="https://www.rolls-royce.com/products-and-services/defence/advanced-technology-defence.aspx">
                                      <span>Advanced Technology</span>
                                    </Link>
                                    <ul id="section-advanced-technology-defence-level4">
                                      <li id="nav-libertyworks-level4" className="level4 first">
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/advanced-technology-defence/libertyworks.aspx">
                                          <span>LibertyWorks</span>
                                        </Link>
                                      </li>
                                      <li id="nav-valor-level4" className="level4 last">
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/advanced-technology-defence/valor.aspx">
                                          <span>FLRAA</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li id="nav-aerospace-level3" className="level3 haschildren">
                                    <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace.aspx">
                                      <span>Aerospace</span>
                                    </Link>
                                    <ul id="section-aerospace-level4">
                                      <li
                                        id="nav-combat-jets-level4"
                                        className="level4 haschildren first"
                                      >
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/combat-jets/f130.aspx">
                                          <span>Combat Jets</span>
                                        </Link>
                                        <ul id="section-combat-jets-level5">
                                          <li id="nav-f130-level5" className="level5 first">
                                            <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/combat-jets/f130.aspx">
                                              <span>F130</span>
                                            </Link>
                                          </li>
                                          <li
                                            id="nav-rolls-royce-liftsystem-level5"
                                            className="level5"
                                          >
                                            <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/combat-jets/rolls-royce-liftsystem.aspx">
                                              <span>Rolls-Royce LiftSystem®</span>
                                            </Link>
                                          </li>
                                          <li id="nav-ej200-level5" className="level5">
                                            <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/combat-jets/ej200.aspx">
                                              <span>EJ200</span>
                                            </Link>
                                          </li>
                                          <li id="nav-adour-level5" className="level5">
                                            <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/combat-jets/adour.aspx">
                                              <span>Adour</span>
                                            </Link>
                                          </li>
                                          <li id="nav-rb199-level5" className="level5">
                                            <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/combat-jets/rb199.aspx">
                                              <span>RB199</span>
                                            </Link>
                                          </li>
                                          <li id="nav-pegasus-level5" className="level5 last">
                                            <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/combat-jets/pegasus.aspx">
                                              <span>Pegasus</span>
                                            </Link>
                                          </li>
                                        </ul>
                                      </li>
                                      <li id="nav-rotary-level4" className="level4 haschildren">
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/rotary/ae-1107c.aspx">
                                          <span>Rotary</span>
                                        </Link>
                                        <ul id="section-rotary-level5">
                                          <li id="nav-ae-1107c-level5" className="level5 first">
                                            <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/rotary/ae-1107c.aspx">
                                              <span>AE 1107C</span>
                                            </Link>
                                          </li>
                                          <li id="nav-cts800-level5" className="level5">
                                            <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/rotary/cts800.aspx">
                                              <span>CTS800</span>
                                            </Link>
                                          </li>
                                          <li id="nav-mtr390-level5" className="level5">
                                            <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/rotary/mtr390.aspx">
                                              <span>MTR390</span>
                                            </Link>
                                          </li>
                                          <li
                                            id="nav-m250-turboshaft-level5"
                                            className="level5 last"
                                          >
                                            <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/rotary/m250-turboshaft.aspx">
                                              <span>M250 Turboshaft</span>
                                            </Link>
                                          </li>
                                        </ul>
                                      </li>
                                      <li
                                        id="nav-transport-tanker-patrol-and-tactical-level4"
                                        className="level4 haschildren"
                                      >
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/transport-tanker-patrol-and-tactical/ae-2100.aspx">
                                          <span>Transport, Tanker, Patrol & Tactical</span>
                                        </Link>
                                        <ul id="section-transport-tanker-patrol-and-tactical-level5">
                                          <li id="nav-ae-2100-level5" className="level5 first">
                                            <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/transport-tanker-patrol-and-tactical/ae-2100.aspx">
                                              <span>AE 2100</span>
                                            </Link>
                                          </li>
                                          <li id="nav-ae-1107c-level5" className="level5">
                                            <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/transport-tanker-patrol-and-tactical/ae-1107c.aspx">
                                              <span>AE 1107C</span>
                                            </Link>
                                          </li>
                                          <li id="nav-ae-3007-level5" className="level5">
                                            <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/transport-tanker-patrol-and-tactical/ae-3007.aspx">
                                              <span>AE 3007</span>
                                            </Link>
                                          </li>
                                          <li id="nav-trent-700-mrtt-level5" className="level5">
                                            <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/transport-tanker-patrol-and-tactical/trent-700-mrtt.aspx">
                                              <span>Trent 700 MRTT</span>
                                            </Link>
                                          </li>
                                          <li id="nav-tp400-d6-level5" className="level5">
                                            <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/transport-tanker-patrol-and-tactical/tp400-d6.aspx">
                                              <span>TP400-D6</span>
                                            </Link>
                                          </li>
                                          <li id="nav-br710-level5" className="level5">
                                            <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/transport-tanker-patrol-and-tactical/br710.aspx">
                                              <span>BR710</span>
                                            </Link>
                                          </li>
                                          <li id="nav-t56-level5" className="level5">
                                            <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/transport-tanker-patrol-and-tactical/t56.aspx">
                                              <span>T56</span>
                                            </Link>
                                          </li>
                                          <li id="nav-cts800-level5" className="level5">
                                            <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/transport-tanker-patrol-and-tactical/cts800.aspx">
                                              <span>CTS800</span>
                                            </Link>
                                          </li>
                                          <li id="nav-m250-turboprop-level5" className="level5">
                                            <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/transport-tanker-patrol-and-tactical/m250-turboprop.aspx">
                                              <span>M250 Turboprop</span>
                                            </Link>
                                          </li>
                                          <li
                                            id="nav-t56-3-5-enhancement-level5"
                                            className="level5 last"
                                          >
                                            <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/transport-tanker-patrol-and-tactical/t56-3-5-enhancement.aspx">
                                              <span>T56 3.5 Enhancement</span>
                                            </Link>
                                          </li>
                                        </ul>
                                      </li>
                                      <li id="nav-trainers-level4" className="level4 haschildren">
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/trainers/adour.aspx">
                                          <span>Trainers</span>
                                        </Link>
                                        <ul id="section-trainers-level5">
                                          <li id="nav-adour-level5" className="level5 first">
                                            <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/trainers/adour.aspx">
                                              <span>Adour</span>
                                            </Link>
                                          </li>
                                          <li
                                            id="nav-m250-turboprop-level5"
                                            className="level5 last"
                                          >
                                            <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/trainers/m250-turboprop.aspx">
                                              <span>M250 Turboprop</span>
                                            </Link>
                                          </li>
                                        </ul>
                                      </li>
                                      <li id="nav-uavs-level4" className="level4 haschildren">
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/uavs/ae-3007.aspx">
                                          <span>UAVs</span>
                                        </Link>
                                        <ul id="section-uavs-level5">
                                          <li id="nav-ae-3007-level5" className="level5 first">
                                            <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/uavs/ae-3007.aspx">
                                              <span>AE 3007</span>
                                            </Link>
                                          </li>
                                          <li id="nav-m250-turboshaft-level5" className="level5">
                                            <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/uavs/m250-turboshaft.aspx">
                                              <span>M250 Turboshaft</span>
                                            </Link>
                                          </li>
                                          <li id="nav-adour-level5" className="level5 last">
                                            <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/uavs/adour.aspx">
                                              <span>Adour</span>
                                            </Link>
                                          </li>
                                        </ul>
                                      </li>
                                      <li
                                        id="nav-distributed-generation-systems-aero-level4"
                                        className="level4 last"
                                      >
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/distributed-generation-systems-aero.aspx">
                                          <span>Distributed Generation Systems</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li id="nav-naval-level3" className="level3 haschildren">
                                    <Link href="https://www.rolls-royce.com/products-and-services/defence/naval.aspx">
                                      <span>Naval</span>
                                    </Link>
                                    <ul id="section-naval-level4">
                                      <li
                                        id="nav-gas-turbines-level4"
                                        className="level4 haschildren first"
                                      >
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/naval/gas-turbines.aspx">
                                          <span>Gas Turbines</span>
                                        </Link>
                                        <ul id="section-gas-turbines-level5">
                                          <li
                                            id="nav-mt30-marine-gas-turbine-level5"
                                            className="level5 first"
                                          >
                                            <Link href="https://www.rolls-royce.com/products-and-services/defence/naval/gas-turbines/mt30-marine-gas-turbine.aspx">
                                              <span>MT30 Marine Gas Turbine</span>
                                            </Link>
                                          </li>
                                          <li
                                            id="nav-ag9160-generator-set-level5"
                                            className="level5"
                                          >
                                            <Link href="https://www.rolls-royce.com/products-and-services/defence/naval/gas-turbines/ag9160-generator-set.aspx">
                                              <span>AG9160 Generator Set</span>
                                            </Link>
                                          </li>
                                          <li
                                            id="nav-ag9140-generator-set-level5"
                                            className="level5"
                                          >
                                            <Link href="https://www.rolls-royce.com/products-and-services/defence/naval/gas-turbines/ag9140-generator-set.aspx">
                                              <span>AG9140 Generator Set</span>
                                            </Link>
                                          </li>
                                          <li
                                            id="nav-mt7-marine-gas-turbine-level5"
                                            className="level5 last"
                                          >
                                            <Link href="https://www.rolls-royce.com/products-and-services/defence/naval/gas-turbines/mt7-marine-gas-turbine.aspx">
                                              <span>MT7 Marine Gas Turbine</span>
                                            </Link>
                                          </li>
                                        </ul>
                                      </li>
                                      <li
                                        id="nav-diesel-engines-level4"
                                        className="level4 haschildren"
                                      >
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/naval/diesel-engines/power-systems.aspx">
                                          <span>Diesel Engines</span>
                                        </Link>
                                        <ul id="section-diesel-engines-level5">
                                          <li
                                            id="nav-power-systems-level5"
                                            className="level5 first last"
                                          >
                                            <Link href="https://www.rolls-royce.com/products-and-services/power-systems.aspx">
                                              <span>Power Systems</span>
                                            </Link>
                                          </li>
                                        </ul>
                                      </li>
                                      <li id="nav-propulsion-level4" className="level4">
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/naval/propulsion.aspx">
                                          <span>Propulsion</span>
                                        </Link>
                                      </li>
                                      <li id="nav-naval-handling-systems-level4" className="level4">
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/naval/naval-handling-systems/mission-bay-handling-system.aspx">
                                          <span>Naval Handling Systems</span>
                                        </Link>
                                      </li>
                                      <li
                                        id="nav-naval-support-and-services-level4"
                                        className="level4"
                                      >
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/naval/naval-support-and-services.aspx">
                                          <span>Naval Support &amp; Services</span>
                                        </Link>
                                      </li>
                                      <li
                                        id="nav-distributed-generation-systems-naval-level4"
                                        className="level4 last"
                                      >
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/naval/distributed-generation-systems-naval.aspx">
                                          <span>Distributed Generation Systems</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li id="nav-submarines-level3" className="level3">
                                    <Link href="https://www.rolls-royce.com/products-and-services/defence/submarines.aspx">
                                      <span>Submarines</span>
                                    </Link>
                                  </li>
                                  <li id="nav-land-level3" className="level3 haschildren">
                                    <Link href="https://www.rolls-royce.com/products-and-services/defence/land/distributed-generation-systems-land.aspx">
                                      <span>Land</span>
                                    </Link>
                                    <ul id="section-land-level4">
                                      <li
                                        id="nav-distributed-generation-systems-land-level4"
                                        className="level4 first last"
                                      >
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/land/distributed-generation-systems-land.aspx">
                                          <span>Distributed Generation Systems</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li id="nav-services-level3" className="level3 haschildren last">
                                    <Link href="https://www.rolls-royce.com/products-and-services/defence/services.aspx">
                                      <span>Services</span>
                                    </Link>
                                    <ul id="section-services-level4">
                                      <li id="nav-ace-level4" className="level4 first">
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/services/ace.aspx">
                                          <span>ACE</span>
                                        </Link>
                                      </li>
                                      <li id="nav-twinalytix-level4" className="level4 last">
                                        <Link href="https://www.rolls-royce.com/products-and-services/defence/services/twinalytix.aspx">
                                          <span>TwinAlytix®</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li id="nav-power-systems-level2" className="level2 haschildren">
                                <Link href="https://www.rolls-royce.com/products-and-services/power-systems.aspx">
                                  <span>Power Systems</span>
                                </Link>
                                <ul id="section-power-systems-level3">
                                  <li
                                    id="nav-power-generation-solutions-level3"
                                    className="level3 first"
                                  >
                                    <Link href="https://www.rolls-royce.com/products-and-services/power-systems/power-generation-solutions.aspx">
                                      <span>Power Generation Solutions</span>
                                    </Link>
                                  </li>
                                  <li id="nav-marine-level3" className="level3">
                                    <Link href="https://www.rolls-royce.com/products-and-services/power-systems/marine.aspx">
                                      <span>Marine</span>
                                    </Link>
                                  </li>
                                  <li id="nav-governmental-level3" className="level3">
                                    <Link href="https://www.rolls-royce.com/products-and-services/power-systems/governmental.aspx">
                                      <span>Governmental</span>
                                    </Link>
                                  </li>
                                  <li
                                    id="nav-power-systems-sustainability-level3"
                                    className="level3 last"
                                  >
                                    <Link href="https://www.rolls-royce.com/products-and-services/power-systems/power-systems-sustainability.aspx">
                                      <span>Power Systems Sustainability</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li id="nav-electrical-level2" className="level2 haschildren last">
                                <Link href="https://www.rolls-royce.com/products-and-services/electrical.aspx">
                                  <span>Electrical Aviation</span>
                                </Link>
                                <ul id="section-electrical-level3">
                                  <li
                                    id="nav-our-electrical-power-and-propulsion-portfolio-level3"
                                    className="level3 first"
                                  >
                                    <Link href="https://www.rolls-royce.com/products-and-services/electrical/our-electrical-power-and-propulsion-portfolio.aspx">
                                      <span>Our Electrical power & propulsion portfolio</span>
                                    </Link>
                                  </li>
                                  <li id="nav-our-capability-level3" className="level3 last">
                                    <Link href="https://www.rolls-royce.com/products-and-services/electrical/our-capability.aspx">
                                      <span>Our Capability</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li id="nav-about-level1" className="level1 haschildren">
                            <Link href="https://www.rolls-royce.com/about.aspx">
                              <span>About</span>
                            </Link>
                            <ul id="section-about-level2">
                              <li id="nav-our-strategy-level2" className="level2 first">
                                <Link href="https://www.rolls-royce.com/about/our-strategy.aspx">
                                  <span>Our Strategy</span>
                                </Link>
                              </li>
                              <li id="nav-leadership-level2" className="level2 haschildren">
                                <Link href="https://www.rolls-royce.com/about/leadership/board.aspx">
                                  <span>Leadership</span>
                                </Link>
                                <ul id="section-leadership-level3">
                                  <li id="nav-board-level3" className="level3 first">
                                    <Link href="https://www.rolls-royce.com/about/leadership/board.aspx">
                                      <span>Board</span>
                                    </Link>
                                  </li>
                                  <li id="nav-executive-leadership-team-level3" className="level3">
                                    <Link href="https://www.rolls-royce.com/about/leadership/executive-leadership-team.aspx">
                                      <span>Executive Team</span>
                                    </Link>
                                  </li>
                                  <li id="nav-corporate-governance-level3" className="level3 last">
                                    <Link href="https://www.rolls-royce.com/about/leadership/corporate-governance.aspx">
                                      <span>Corporate governance</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li id="nav-where-we-operate-level2" className="level2">
                                <Link href="https://www.rolls-royce.com/about/where-we-operate.aspx">
                                  <span>Where We Operate</span>
                                </Link>
                              </li>
                              <li id="nav-our-research-level2" className="level2 haschildren">
                                <Link href="https://www.rolls-royce.com/about/our-research.aspx">
                                  <span>Our Research</span>
                                </Link>
                                <ul id="section-our-research-level3">
                                  <li
                                    id="nav-advanced-manufacturing-research-centres-level3"
                                    className="level3 first"
                                  >
                                    <Link href="https://www.rolls-royce.com/about/our-research/advanced-manufacturing-research-centres.aspx">
                                      <span>Advanced Manufacturing Research Centres</span>
                                    </Link>
                                  </li>
                                  <li id="nav-research-and-university-level3" className="level3">
                                    <Link href="https://www.rolls-royce.com/about/our-research/research-and-university.aspx">
                                      <span>Research and University Technology Centres</span>
                                    </Link>
                                  </li>
                                  <li
                                    id="nav-cybertech-research-network-level3"
                                    className="level3 last"
                                  >
                                    <Link href="https://www.rolls-royce.com/about/our-research/cybertech-research-network.aspx">
                                      <span>
                                        Rolls-Royce Cybersecurity Technology Research Network
                                      </span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li id="nav-our-businesses-level2" className="level2">
                                <Link href="https://www.rolls-royce.com/about/our-businesses.aspx">
                                  <span>Our Businesses</span>
                                </Link>
                              </li>
                              <li id="nav-our-history-level2" className="level2">
                                <Link href="https://www.rolls-royce.com/about/our-history.aspx">
                                  <span>Our History</span>
                                </Link>
                              </li>
                              <li
                                id="nav-heritage-trust-level2"
                                className="level2 haschildren last"
                              >
                                <Link href="https://www.rolls-royce.com/about/heritage-trust.aspx">
                                  <span>Heritage Trust</span>
                                </Link>
                                <ul id="section-heritage-trust-level3">
                                  <li id="nav-visit-level3" className="level3 haschildren first">
                                    <Link href="https://www.rolls-royce.com/about/heritage-trust/visit.aspx">
                                      <span>Visit</span>
                                    </Link>
                                    <ul id="section-visit-level4">
                                      <li
                                        id="nav-our-heritage-centres-level4"
                                        className="level4 first"
                                      >
                                        <Link href="https://www.rolls-royce.com/about/heritage-trust/visit/our-heritage-centres.aspx">
                                          <span>Our Heritage Centres</span>
                                        </Link>
                                      </li>
                                      <li id="nav-bristol-branch-level4" className="level4">
                                        <Link href="https://www.rolls-royce.com/about/heritage-trust/visit/bristol-branch.aspx">
                                          <span>Heritage Trust – Bristol</span>
                                        </Link>
                                      </li>
                                      <li id="nav-coventry-and-ansty-level4" className="level4">
                                        <Link href="https://www.rolls-royce.com/about/heritage-trust/visit/coventry-and-ansty.aspx">
                                          <span>Heritage Trust – Coventry and Ansty</span>
                                        </Link>
                                      </li>
                                      <li
                                        id="nav-derby-and-hucknall-branch-level4"
                                        className="level4"
                                      >
                                        <Link href="https://www.rolls-royce.com/about/heritage-trust/visit/derby-and-hucknall-branch.aspx">
                                          <span>Heritage Trust – Derby and Hucknall</span>
                                        </Link>
                                      </li>
                                      <li id="nav-indianapolis-branch-level4" className="level4">
                                        <Link href="https://www.rolls-royce.com/about/heritage-trust/visit/indianapolis-branch.aspx">
                                          <span>Heritage Trust – Indianapolis</span>
                                        </Link>
                                      </li>
                                      <li id="nav-scottish-branch-level4" className="level4 last">
                                        <Link href="https://www.rolls-royce.com/about/heritage-trust/visit/scottish-branch.aspx">
                                          <span>Heritage Trust – Scottish branch</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li id="nav-become-a-member-level3" className="level3">
                                    <Link href="https://www.rolls-royce.com/about/heritage-trust/become-a-member.aspx">
                                      <span>Become a member</span>
                                    </Link>
                                  </li>
                                  <li id="nav-volunteer-level3" className="level3">
                                    <Link href="https://www.rolls-royce.com/about/heritage-trust/volunteer.aspx">
                                      <span>Volunteer</span>
                                    </Link>
                                  </li>
                                  <li id="nav-learn-and-explore-level3" className="level3">
                                    <Link href="https://www.rolls-royce.com/about/heritage-trust/learn-and-explore.aspx">
                                      <span>Learn and explore</span>
                                    </Link>
                                  </li>
                                  <li id="nav-whats-on-level3" className="level3">
                                    <Link href="https://www.rolls-royce.com/about/heritage-trust/whats-on.aspx">
                                      <span>What’s on</span>
                                    </Link>
                                  </li>
                                  <li id="nav-contact-the-trust-level3" className="level3">
                                    <Link href="https://www.rolls-royce.com/about/heritage-trust/contact-the-trust.aspx">
                                      <span>Contact the Trust</span>
                                    </Link>
                                  </li>
                                  <li
                                    id="nav-members-section-level3"
                                    className="level3 haschildren last"
                                  >
                                    <Link href="https://www.rolls-royce.com/about/heritage-trust/members-section.aspx">
                                      <span>Member&quot;s Section</span>
                                    </Link>
                                    <ul id="section-members-section-level4">
                                      <li id="nav-the-magazine-level4" className="level4 first">
                                        <Link href="https://www.rolls-royce.com/about/heritage-trust/members-section/the-magazine.aspx">
                                          <span>The Magazine</span>
                                        </Link>
                                      </li>
                                      <li id="nav-news-and-insights-level4" className="level4">
                                        <Link href="https://www.rolls-royce.com/about/heritage-trust/members-section/news-and-insights.aspx">
                                          <span>News & Insights</span>
                                        </Link>
                                      </li>
                                      <li id="nav-members-events-level4" className="level4">
                                        <Link href="https://www.rolls-royce.com/about/heritage-trust/members-section/members-events.aspx">
                                          <span>Members’ events</span>
                                        </Link>
                                      </li>
                                      <li id="nav-r-rht-documents-level4" className="level4 last">
                                        <Link href="https://www.rolls-royce.com/about/heritage-trust/members-section/r-rht-documents.aspx">
                                          <span>R-RHT Documents</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li id="nav-contact-us-level1" className="level1 haschildren">
                            <Link href="https://www.rolls-royce.com/contact-us.aspx">
                              <span>Contact us</span>
                            </Link>
                            <ul id="section-contact-us-level2">
                              <li
                                id="nav-inventors-and-technology-licensing-level2"
                                className="level2 first"
                              >
                                <Link href="https://www.rolls-royce.com/contact-us/inventors-and-technology-licensing.aspx">
                                  <span>Inventors & technology licensing</span>
                                </Link>
                              </li>
                              <li id="nav-defence-aerospace-level2" className="level2">
                                <Link href="https://www.rolls-royce.com/contact-us/defence-aerospace.aspx">
                                  <span>Defence aerospace business team</span>
                                </Link>
                              </li>
                              <li id="nav-defence-parts-enquiries-level2" className="level2">
                                <Link href="https://www.rolls-royce.com/contact-us/defence-parts-enquiries.aspx">
                                  <span>Defence team</span>
                                </Link>
                              </li>
                              <li id="nav-corporate-sustainability-team-level2" className="level2">
                                <Link href="https://www.rolls-royce.com/contact-us/corporate-sustainability-team.aspx">
                                  <span>Corporate sustainability team</span>
                                </Link>
                              </li>
                              <li id="nav-heritage-team-level2" className="level2">
                                <Link href="https://www.rolls-royce.com/contact-us/heritage-team.aspx">
                                  <span>Heritage team</span>
                                </Link>
                              </li>
                              <li id="nav-helicopters-team-level2" className="level2">
                                <Link href="https://www.rolls-royce.com/contact-us/helicopters-team.aspx">
                                  <span>Helicopters team</span>
                                </Link>
                              </li>
                              <li id="nav-pensions-team-level2" className="level2 last">
                                <Link href="https://www.rolls-royce.com/contact-us/pensions-team.aspx">
                                  <span>Pensions team</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li id="nav-country-sites-level1" className="level1 haschildren">
                            <Link href="https://www.rolls-royce.com/country-sites/china-old-site.aspx">
                              <span>Country sites</span>
                            </Link>
                            <ul id="section-country-sites-level2">
                              <li id="nav-brasil-level2" className="level2 haschildren first">
                                <Link href="https://www.rolls-royce.com/country-sites/brasil.aspx">
                                  <span>Como nos comportamos importa</span>
                                </Link>
                                <ul id="section-brasil-level3">
                                  <li id="nav-home-level3" className="level3 first">
                                    <Link href="https://www.rolls-royce.com/country-sites/brasil.aspx">
                                      <span>Home</span>
                                    </Link>
                                  </li>
                                  <li id="nav-rolls-royce-no-brasil-level3" className="level3 last">
                                    <Link href="https://www.rolls-royce.com/country-sites/brasil/rolls-royce-no-brasil.aspx">
                                      <span>Rolls-Royce no Brasil</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li id="nav-brazil-en-level2" className="level2">
                                <Link href="https://www.rolls-royce.com/country-sites/brazil-en.aspx">
                                  <span>Rolls-Royce no Brasil</span>
                                </Link>
                              </li>
                              <li id="nav-japan-level2" className="level2 haschildren">
                                <Link href="https://www.rolls-royce.com/country-sites/japan.aspx">
                                  <span>日本</span>
                                </Link>
                                <ul id="section-japan-level3">
                                  <li id="nav-home-level3" className="level3 first">
                                    <Link href="https://www.rolls-royce.com/country-sites/japan.aspx">
                                      <span>ホーム</span>
                                    </Link>
                                  </li>
                                  <li id="nav-about-level3" className="level3 haschildren">
                                    <Link href="https://www.rolls-royce.com/country-sites/japan/about.aspx">
                                      <span>ロールス･ロイスについて</span>
                                    </Link>
                                    <ul id="section-about-level4">
                                      <li id="nav-about-level4" className="level4 first">
                                        <Link href="https://www.rolls-royce.com/country-sites/japan/about.aspx">
                                          <span>ロールス・ロイスについて</span>
                                        </Link>
                                      </li>
                                      <li id="nav-sustainability-level4" className="level4">
                                        <Link href="https://www.rolls-royce.com/country-sites/japan/about/sustainability.aspx">
                                          <span>サステナビリティ</span>
                                        </Link>
                                      </li>
                                      <li id="nav-business-strategy-level4" className="level4">
                                        <Link href="https://www.rolls-royce.com/country-sites/japan/about/business-strategy.aspx">
                                          <span>ビジネス戦略</span>
                                        </Link>
                                      </li>
                                      <li id="nav-60-years-in-japan-level4" className="level4 last">
                                        <Link href="https://www.rolls-royce.com/country-sites/japan/about/60-years-in-japan.aspx">
                                          <span>日本で60周年</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li
                                    id="nav-partners-in-success-level3"
                                    className="level3 haschildren"
                                  >
                                    <Link href="https://www.rolls-royce.com/country-sites/japan/partners-in-success/made-in-japan.aspx">
                                      <span>日本のパートナー</span>
                                    </Link>
                                    <ul id="section-partners-in-success-level4">
                                      <li id="nav-made-in-japan-level4" className="level4 first">
                                        <Link href="https://www.rolls-royce.com/country-sites/japan/partners-in-success/made-in-japan.aspx">
                                          <span>日本企業との協業</span>
                                        </Link>
                                      </li>
                                      <li
                                        id="nav-research-and-development-level4"
                                        className="level4 last"
                                      >
                                        <Link href="https://www.rolls-royce.com/country-sites/japan/partners-in-success/research-and-development.aspx">
                                          <span>研究開発</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li
                                    id="nav-products-and-services-level3"
                                    className="level3 haschildren"
                                  >
                                    <Link href="https://www.rolls-royce.com/country-sites/japan/products-and-services/civil-aerospace.aspx">
                                      <span>製品とサービス</span>
                                    </Link>
                                    <ul id="section-products-and-services-level4">
                                      <li id="nav-civil-aerospace-level4" className="level4 first">
                                        <Link href="https://www.rolls-royce.com/country-sites/japan/products-and-services/civil-aerospace.aspx">
                                          <span>民間航空</span>
                                        </Link>
                                      </li>
                                      <li id="nav-defense-aerospace-level4" className="level4">
                                        <Link href="https://www.rolls-royce.com/country-sites/japan/products-and-services/defense-aerospace.aspx">
                                          <span>防衛</span>
                                        </Link>
                                      </li>
                                      <li id="nav-power-systems-level4" className="level4">
                                        <Link href="https://www.rolls-royce.com/country-sites/japan/products-and-services/power-systems.aspx">
                                          <span>パワーシステムズ</span>
                                        </Link>
                                      </li>
                                      <li id="nav-electrical-level4" className="level4">
                                        <Link href="https://www.rolls-royce.com/country-sites/japan/products-and-services/electrical.aspx">
                                          <span>エレクトリカル</span>
                                        </Link>
                                      </li>
                                      <li id="nav-smr-level4" className="level4 last">
                                        <Link href="https://www.rolls-royce.com/country-sites/japan/products-and-services/smr.aspx">
                                          <span>SMR</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li id="nav-discover-level3" className="level3">
                                    <Link href="https://www.rolls-royce.com/country-sites/japan/discover.aspx">
                                      <span>ディスカバー</span>
                                    </Link>
                                  </li>
                                  <li id="nav-contacts-level3" className="level3">
                                    <Link href="https://www.rolls-royce.com/country-sites/japan/contacts.aspx">
                                      <span>お問い合わせ</span>
                                    </Link>
                                  </li>
                                  <li id="nav-careers-level3" className="level3 last">
                                    <Link
                                      target="_blank"
                                      href="https://careers.rolls-royce.com/rest-of-the-world#/"
                                    >
                                      <span>採用情報</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li
                                id="nav-china-exhibition-chinese-level2"
                                className="level2 haschildren"
                              >
                                <Link href="https://www.rolls-royce.com/country-sites/china-exhibition-chinese.aspx">
                                  <span>罗尔斯-罗伊斯 – 推进飞行新方式</span>
                                </Link>
                                <ul id="section-china-exhibition-chinese-level3">
                                  <li id="nav-home-level3" className="level3 first last">
                                    <Link href="https://www.rolls-royce.com/country-sites/china-exhibition-chinese/home/modules.aspx">
                                      <span>country-landing-navigation</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li
                                id="nav-china-exhibition-english-level2"
                                className="level2 haschildren"
                              >
                                <Link href="https://www.rolls-royce.com/country-sites/china-exhibition-english.aspx">
                                  <span>Rolls-Royce - Powering New Ways to Fly</span>
                                </Link>
                                <ul id="section-china-exhibition-english-level3">
                                  <li id="nav-home-level3" className="level3 first last">
                                    <Link href="https://www.rolls-royce.com/country-sites/china-exhibition-english/home/modules.aspx">
                                      <span>country-landing-navigation</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li id="nav-hungary-en-level2" className="level2 haschildren">
                                <Link href="https://www.rolls-royce.com/country-sites/hungary-en.aspx">
                                  <span>Rolls-Royce Hungary</span>
                                </Link>
                                <ul id="section-hungary-en-level3">
                                  <li id="nav-home-level3" className="level3 first">
                                    <Link href="https://www.rolls-royce.com/country-sites/hungary-en.aspx">
                                      <span>Home</span>
                                    </Link>
                                  </li>
                                  <li id="nav-careers-level3" className="level3">
                                    <Link href="https://www.rolls-royce.com/country-sites/hungary-en/careers.aspx">
                                      <span>Careers</span>
                                    </Link>
                                  </li>
                                  <li id="nav-discover-level3" className="level3 last">
                                    <Link href="https://www.rolls-royce.com/country-sites/hungary-en/discover.aspx">
                                      <span>Discover</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li id="nav-hungary-hu-level2" className="level2 haschildren">
                                <Link href="https://www.rolls-royce.com/country-sites/hungary-hu.aspx">
                                  <span>Rolls-Royce Magyarország</span>
                                </Link>
                                <ul id="section-hungary-hu-level3">
                                  <li id="nav-home-level3" className="level3 first">
                                    <Link href="https://www.rolls-royce.com/country-sites/hungary-hu.aspx">
                                      <span>Főoldal</span>
                                    </Link>
                                  </li>
                                  <li id="nav-karrier-level3" className="level3">
                                    <Link href="https://www.rolls-royce.com/country-sites/hungary-hu/karrier.aspx">
                                      <span>Karrier</span>
                                    </Link>
                                  </li>
                                  <li id="nav-torteneteink-level3" className="level3">
                                    <Link href="https://www.rolls-royce.com/country-sites/hungary-hu/torteneteink.aspx">
                                      <span>Történeteink</span>
                                    </Link>
                                  </li>
                                  <li
                                    id="nav-tamogatott-kezdemenyezeseka-level3"
                                    className="level3 last"
                                  >
                                    <Link href="https://www.rolls-royce.com/country-sites/hungary-hu/tamogatott-kezdemenyezeseka.aspx">
                                      <span>Támogatott kezdeményezések</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li id="nav-northamerica-level2" className="level2 haschildren">
                                <Link href="https://www.rolls-royce.com/country-sites/northamerica.aspx">
                                  <span>Rolls-Royce North America</span>
                                </Link>
                                <ul id="section-northamerica-level3">
                                  <li id="nav-home-level3" className="level3 first last">
                                    <Link href="https://www.rolls-royce.com/country-sites/northamerica.aspx">
                                      <span>Home</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li id="nav-deutschland-level2" className="level2 haschildren">
                                <Link href="https://www.rolls-royce.com/country-sites/deutschland.aspx">
                                  <span>Deutschland</span>
                                </Link>
                                <ul id="section-deutschland-level3">
                                  <li id="nav-home-level3" className="level3 first">
                                    <Link href="https://www.rolls-royce.com/country-sites/deutschland.aspx">
                                      <span>Home</span>
                                    </Link>
                                  </li>
                                  <li id="nav-uberblick-level3" className="level3">
                                    <Link href="https://www.rolls-royce.com/country-sites/deutschland/uberblick.aspx">
                                      <span>Überblick</span>
                                    </Link>
                                  </li>
                                  <li
                                    id="nav-nachrichten-und-geschichten-level3"
                                    className="level3 haschildren"
                                  >
                                    <Link href="https://www.rolls-royce.com/country-sites/deutschland/nachrichten-und-geschichten/nachrichten.aspx">
                                      <span>Nachrichten und Geschichten</span>
                                    </Link>
                                    <ul id="section-nachrichten-und-geschichten-level4">
                                      <li id="nav-nachrichten-level4" className="level4 first">
                                        <Link href="https://www.rolls-royce.com/country-sites/deutschland/nachrichten-und-geschichten/nachrichten.aspx">
                                          <span>Nachrichten</span>
                                        </Link>
                                      </li>
                                      <li id="nav-geschichten-level4" className="level4 last">
                                        <Link href="https://www.rolls-royce.com/country-sites/deutschland/nachrichten-und-geschichten/geschichten.aspx">
                                          <span>Geschichten</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li id="nav-karriere-level3" className="level3 haschildren">
                                    <Link href="https://www.rolls-royce.com/country-sites/deutschland/karriere.aspx">
                                      <span>Karriere</span>
                                    </Link>
                                    <ul id="section-karriere-level4">
                                      <li
                                        id="nav-werde-teil-des-teams-in-dahlewitz-bei-berlin-level4"
                                        className="level4 first"
                                      >
                                        <Link href="https://www.rolls-royce.com/country-sites/deutschland/karriere/werde-teil-des-teams-in-dahlewitz-bei-berlin.aspx">
                                          <span>Werde Teil des Teams in Dahlewitz bei Berlin</span>
                                        </Link>
                                      </li>
                                      <li id="nav-talent-community-level4" className="level4">
                                        <Link href="https://www.rolls-royce.com/country-sites/deutschland/karriere/talent-community.aspx">
                                          <span>Talent Community</span>
                                        </Link>
                                      </li>
                                      <li id="nav-ausbildung-level4" className="level4">
                                        <Link href="https://www.rolls-royce.com/country-sites/deutschland/karriere/ausbildung.aspx">
                                          <span>Ausbildung</span>
                                        </Link>
                                      </li>
                                      <li
                                        id="nav-direkteinstieg-level4"
                                        className="level4 haschildren"
                                      >
                                        <Link href="https://www.rolls-royce.com/country-sites/deutschland/karriere/direkteinstieg.aspx">
                                          <span>Direkteinstieg </span>
                                        </Link>
                                        <ul id="section-direkteinstieg-level5">
                                          <li
                                            id="nav-direkteinstieg-oberursel-level5"
                                            className="level5 first"
                                          >
                                            <Link href="https://www.rolls-royce.com/country-sites/deutschland/karriere/direkteinstieg/direkteinstieg-oberursel.aspx">
                                              <span>Direkteinstieg </span>
                                            </Link>
                                          </li>
                                          <li
                                            id="nav-recruitment_campaign_oberursel-level5"
                                            className="level5 last"
                                          >
                                            <Link href="https://www.rolls-royce.com/country-sites/deutschland/karriere/direkteinstieg/recruitment_campaign_oberursel.aspx">
                                              <span>Direkteinstieg </span>
                                            </Link>
                                          </li>
                                        </ul>
                                      </li>
                                      <li
                                        id="nav-praktikanten-und-werkstudenten-level4"
                                        className="level4"
                                      >
                                        <Link href="https://www.rolls-royce.com/country-sites/deutschland/karriere/praktikanten-und-werkstudenten.aspx">
                                          <span>Praktikanten und Werkstudenten</span>
                                        </Link>
                                      </li>
                                      <li
                                        id="nav-germany-karriere-electrical-level4"
                                        className="level4"
                                      >
                                        <Link href="https://www.rolls-royce.com/country-sites/deutschland/karriere/germany-karriere-electrical.aspx">
                                          <span>Karriere bei Rolls-Royce Electrical</span>
                                        </Link>
                                      </li>
                                      <li id="nav-schuelerpraktikum-level4" className="level4">
                                        <Link href="https://www.rolls-royce.com/country-sites/deutschland/karriere/schuelerpraktikum.aspx">
                                          <span>Schülerpraktika</span>
                                        </Link>
                                      </li>
                                      <li
                                        id="nav-germany-tag-der-ausbildung-level4"
                                        className="level4"
                                      >
                                        <Link href="https://www.rolls-royce.com/country-sites/deutschland/karriere/germany-tag-der-ausbildung.aspx">
                                          <span>Tag der Ausbildung</span>
                                        </Link>
                                      </li>
                                      <li id="nav-termine-level4" className="level4 last">
                                        <Link href="https://www.rolls-royce.com/country-sites/deutschland/karriere/termine.aspx">
                                          <span>Termine</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li id="nav-kontakt-level3" className="level3 last">
                                    <Link href="https://www.rolls-royce.com/country-sites/deutschland/kontakt.aspx">
                                      <span>Kontakt </span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li id="nav-india-level2" className="level2 haschildren">
                                <Link href="https://www.rolls-royce.com/country-sites/india.aspx">
                                  <span>India</span>
                                </Link>
                                <ul id="section-india-level3">
                                  <li id="nav-home-level3" className="level3 first">
                                    <Link href="https://www.rolls-royce.com/country-sites/india.aspx">
                                      <span>Home</span>
                                    </Link>
                                  </li>
                                  <li
                                    id="nav-partners-in-progress-level3"
                                    className="level3 haschildren"
                                  >
                                    <Link href="https://www.rolls-royce.com/country-sites/india/partners-in-progress.aspx">
                                      <span>Partners in progress</span>
                                    </Link>
                                    <ul id="section-partners-in-progress-level4">
                                      <li id="nav-our-people-level4" className="level4 first">
                                        <Link href="https://www.rolls-royce.com/country-sites/india/partners-in-progress/our-people.aspx">
                                          <span>Our people</span>
                                        </Link>
                                      </li>
                                      <li id="nav-engineering-level4" className="level4">
                                        <Link href="https://www.rolls-royce.com/country-sites/india/partners-in-progress/engineering.aspx">
                                          <span>Engineering</span>
                                        </Link>
                                      </li>
                                      <li
                                        id="nav-manufacturing-and-supply-chain-level4"
                                        className="level4 last"
                                      >
                                        <Link href="https://www.rolls-royce.com/country-sites/india/partners-in-progress/manufacturing-and-supply-chain.aspx">
                                          <span>Manufacturing & supply chain</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li
                                    id="nav-products-and-services-level3"
                                    className="level3 haschildren"
                                  >
                                    <Link href="https://www.rolls-royce.com/country-sites/india/products-and-services/civil-aerospace.aspx">
                                      <span>Products & Services</span>
                                    </Link>
                                    <ul id="section-products-and-services-level4">
                                      <li id="nav-civil-aerospace-level4" className="level4 first">
                                        <Link href="https://www.rolls-royce.com/country-sites/india/products-and-services/civil-aerospace.aspx">
                                          <span>Civil Aerospace</span>
                                        </Link>
                                      </li>
                                      <li id="nav-defence-level4" className="level4">
                                        <Link href="https://www.rolls-royce.com/country-sites/india/products-and-services/defence.aspx">
                                          <span>Defence</span>
                                        </Link>
                                      </li>
                                      <li id="nav-power-systems-level4" className="level4 last">
                                        <Link href="https://www.rolls-royce.com/country-sites/india/products-and-services/power-systems.aspx">
                                          <span>Power Systems</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li id="nav-sustainability-level3" className="level3 haschildren">
                                    <Link href="https://www.rolls-royce.com/country-sites/india/sustainability/our-approach.aspx">
                                      <span>Sustainability</span>
                                    </Link>
                                    <ul id="section-sustainability-level4">
                                      <li id="nav-our-approach-level4" className="level4 first">
                                        <Link href="https://www.rolls-royce.com/country-sites/india/sustainability/our-approach.aspx">
                                          <span>Our approach</span>
                                        </Link>
                                      </li>
                                      <li
                                        id="nav-our-community-programmes-level4"
                                        className="level4 last"
                                      >
                                        <Link href="https://www.rolls-royce.com/country-sites/india/sustainability/our-community-programmes.aspx">
                                          <span>Our community programmes</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li id="nav-contacts-level3" className="level3">
                                    <Link href="https://www.rolls-royce.com/country-sites/india/contacts.aspx">
                                      <span>Contacts</span>
                                    </Link>
                                  </li>
                                  <li id="nav-careers-level3" className="level3 last">
                                    <Link
                                      target="_blank"
                                      href="https://careers.rolls-royce.com/rest-of-the-world?country=india#/"
                                    >
                                      <span>Careers</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li id="nav-china-level2" className="level2 haschildren">
                                <Link href="https://www.rolls-royce.com/country-sites/china.aspx">
                                  <span>首页</span>
                                </Link>
                                <ul id="section-china-level3">
                                  <li id="nav-home-level3" className="level3 first">
                                    <Link href="https://www.rolls-royce.com/country-sites/china.aspx">
                                      <span>首页</span>
                                    </Link>
                                  </li>
                                  <li id="nav-rolls-royce-in-china-level3" className="level3">
                                    <Link href="https://www.rolls-royce.com/country-sites/china/rolls-royce-in-china.aspx">
                                      <span>罗罗在中国​</span>
                                    </Link>
                                  </li>
                                  <li id="nav-civil-level3" className="level3">
                                    <Link href="https://www.rolls-royce.com/country-sites/china/civil.aspx">
                                      <span>民用航空​</span>
                                    </Link>
                                  </li>
                                  <li id="nav-power-system-level3" className="level3">
                                    <Link target="_blank" href="https://mtu-solutions.com/">
                                      <span>动力系统</span>
                                    </Link>
                                  </li>
                                  <li id="nav-electric-flight-level3" className="level3">
                                    <Link href="https://www.rolls-royce.com/country-sites/china-exhibition-chinese.aspx">
                                      <span>电动飞行</span>
                                    </Link>
                                  </li>
                                  <li id="nav-careers-level3" className="level3 last">
                                    <Link href="https://www.rolls-royce.com/country-sites/china/careers.aspx">
                                      <span>加入我们</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li id="nav-korea-level2" className="level2 haschildren">
                                <Link href="https://www.rolls-royce.com/country-sites/korea.aspx">
                                  <span>대한민국 </span>
                                </Link>
                                <ul id="section-korea-level3">
                                  <li id="nav-home-level3" className="level3 first">
                                    <Link href="https://www.rolls-royce.com/country-sites/korea.aspx">
                                      <span>홈</span>
                                    </Link>
                                  </li>
                                  <li id="nav-about-us-level3" className="level3 haschildren">
                                    <Link href="https://www.rolls-royce.com/country-sites/korea/about-us.aspx">
                                      <span>롤스로이스 소개</span>
                                    </Link>
                                    <ul id="section-about-us-level4">
                                      <li id="nav-our-research-level4" className="level4 first">
                                        <Link href="https://www.rolls-royce.com/country-sites/korea/about-us/our-research.aspx">
                                          <span>연구개발</span>
                                        </Link>
                                      </li>
                                      <li id="nav-our-history-level4" className="level4">
                                        <Link href="https://www.rolls-royce.com/country-sites/korea/about-us/our-history.aspx">
                                          <span>롤스로이스 역사</span>
                                        </Link>
                                      </li>
                                      <li id="nav-where-we-operate-level4" className="level4 last">
                                        <Link href="https://www.rolls-royce.com/country-sites/korea/about-us/where-we-operate.aspx">
                                          <span>세계속의 롤스로이스</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li id="nav-about-rolls-royce-korea-level3" className="level3">
                                    <Link href="https://www.rolls-royce.com/country-sites/korea/about-rolls-royce-korea.aspx">
                                      <span>롤스로이스 코리아</span>
                                    </Link>
                                  </li>
                                  <li id="nav-innovation-level3" className="level3">
                                    <Link href="https://www.rolls-royce.com/country-sites/korea/innovation.aspx">
                                      <span>이노베이션</span>
                                    </Link>
                                  </li>
                                  <li id="nav-naval-level3" className="level3 haschildren">
                                    <Link href="https://www.rolls-royce.com/country-sites/korea/naval.aspx">
                                      <span>해군 분야</span>
                                    </Link>
                                    <ul id="section-naval-level4">
                                      <li
                                        id="nav-gas-turbines-level4"
                                        className="level4 haschildren first"
                                      >
                                        <Link href="https://www.rolls-royce.com/country-sites/korea/naval/gas-turbines.aspx">
                                          <span>함정용가스터빈</span>
                                        </Link>
                                        <ul id="section-gas-turbines-level5">
                                          <li
                                            id="nav-mt30-marine-gas-turbine-level5"
                                            className="level5 first"
                                          >
                                            <Link href="https://www.rolls-royce.com/country-sites/korea/naval/gas-turbines/mt30-marine-gas-turbine.aspx">
                                              <span>MT30 함정용 가스터빈</span>
                                            </Link>
                                          </li>
                                          <li
                                            id="nav-mt7-marine-gas-turbine-level5"
                                            className="level5"
                                          >
                                            <Link href="https://www.rolls-royce.com/country-sites/korea/naval/gas-turbines/mt7-marine-gas-turbine.aspx">
                                              <span>MT7 함정용 가스터빈</span>
                                            </Link>
                                          </li>
                                          <li
                                            id="nav-ag9160-generator-set-level5"
                                            className="level5"
                                          >
                                            <Link href="https://www.rolls-royce.com/country-sites/korea/naval/gas-turbines/ag9160-generator-set.aspx">
                                              <span>AG9160 발전기</span>
                                            </Link>
                                          </li>
                                          <li
                                            id="nav-ag9140-generator-set-level5"
                                            className="level5 last"
                                          >
                                            <Link href="https://www.rolls-royce.com/country-sites/korea/naval/gas-turbines/ag9140-generator-set.aspx">
                                              <span>AG9140 발전기</span>
                                            </Link>
                                          </li>
                                        </ul>
                                      </li>
                                      <li id="nav-power-systems-level4" className="level4">
                                        <Link href="https://www.rolls-royce.com/products-and-services/power-systems.aspx">
                                          <span>파워시스템</span>
                                        </Link>
                                      </li>
                                      <li id="nav-propulsion-level4" className="level4">
                                        <Link href="https://www.rolls-royce.com/country-sites/korea/naval/propulsion.aspx">
                                          <span>추진시스템</span>
                                        </Link>
                                      </li>
                                      <li id="nav-naval-handling-systems-level4" className="level4">
                                        <Link href="https://www.rolls-royce.com/country-sites/korea/naval/naval-handling-systems.aspx">
                                          <span>함정 진회수 시스템</span>
                                        </Link>
                                      </li>
                                      <li
                                        id="nav-electrical-automation-and-control-level4"
                                        className="level4 last"
                                      >
                                        <Link href="https://www.rolls-royce.com/country-sites/korea/naval/electrical-automation-and-control.aspx">
                                          <span>전기, 자동화 및 제어</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li id="nav-electrification-level3" className="level3">
                                    <Link href="https://www.rolls-royce.com/country-sites/korea/electrification.aspx">
                                      <span>전기화 분야</span>
                                    </Link>
                                  </li>
                                  <li id="nav-our-stories-level3" className="level3">
                                    <Link href="https://www.rolls-royce.com/country-sites/korea/our-stories.aspx">
                                      <span>미디어</span>
                                    </Link>
                                  </li>
                                  <li id="nav-contacts-level3" className="level3 last">
                                    <Link href="https://www.rolls-royce.com/country-sites/korea/contacts.aspx">
                                      <span>연락처</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li id="nav-sea-level2" className="level2 haschildren">
                                <Link href="https://www.rolls-royce.com/country-sites/sea.aspx">
                                  <span>South East Asia</span>
                                </Link>
                                <ul id="section-sea-level3">
                                  <li id="nav-our-stories-level3" className="level3 first">
                                    <Link href="https://www.rolls-royce.com/country-sites/sea/our-stories.aspx">
                                      <span>Our stories</span>
                                    </Link>
                                  </li>
                                  <li id="nav-our-locations-level3" className="level3 haschildren">
                                    <Link href="https://www.rolls-royce.com/country-sites/sea/our-locations/singapore.aspx">
                                      <span>Our locations</span>
                                    </Link>
                                    <ul id="section-our-locations-level4">
                                      <li id="nav-singapore-level4" className="level4 first">
                                        <Link href="https://www.rolls-royce.com/country-sites/sea/our-locations/singapore.aspx">
                                          <span>Singapore</span>
                                        </Link>
                                      </li>
                                      <li id="nav-south-east-asia-level4" className="level4 last">
                                        <Link href="https://www.rolls-royce.com/country-sites/sea/our-locations/south-east-asia.aspx">
                                          <span>The wider South East Asia</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li id="nav-community-level3" className="level3">
                                    <Link href="https://www.rolls-royce.com/country-sites/sea/community.aspx">
                                      <span>Community</span>
                                    </Link>
                                  </li>
                                  <li id="nav-careers-level3" className="level3 last">
                                    <Link
                                      target="_blank"
                                      href="https://careers.rolls-royce.com/rest-of-the-world#/"
                                    >
                                      <span>Careers</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li id="nav-arabic-level2" className="level2 haschildren last">
                                <Link href="https://www.rolls-royce.com/country-sites/arabic.aspx">
                                  <span>Arabic</span>
                                </Link>
                                <ul id="section-arabic-level3">
                                  <li id="nav-home-level3" className="level3 first">
                                    <Link href="https://www.rolls-royce.com/country-sites/arabic.aspx">
                                      <span>عن الشركة</span>
                                    </Link>
                                  </li>
                                  <li
                                    id="nav-products-and-services-level3"
                                    className="level3 haschildren"
                                  >
                                    <Link href="https://www.rolls-royce.com/country-sites/arabic/products-and-services.aspx">
                                      <span>الحلول والخدمات</span>
                                    </Link>
                                    <ul id="section-products-and-services-level4">
                                      <li
                                        id="nav-civil-aviation-sector-level4"
                                        className="level4 first"
                                      >
                                        <Link href="https://www.rolls-royce.com/country-sites/arabic/products-and-services/civil-aviation-sector.aspx">
                                          <span>قطاع الطيران المدني</span>
                                        </Link>
                                      </li>
                                      <li id="nav-defense-level4" className="level4">
                                        <Link href="https://www.rolls-royce.com/country-sites/arabic/products-and-services/defense.aspx">
                                          <span>الدفاع</span>
                                        </Link>
                                      </li>
                                      <li id="nav-energy-systems-level4" className="level4">
                                        <Link href="https://www.rolls-royce.com/country-sites/arabic/products-and-services/energy-systems.aspx">
                                          <span>أنظمة الطاقة</span>
                                        </Link>
                                      </li>
                                      <li id="nav-electricity-level4" className="level4 last">
                                        <Link href="https://www.rolls-royce.com/country-sites/arabic/products-and-services/electricity.aspx">
                                          <span>الكهرباء</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li id="nav-innovation-level3" className="level3 haschildren">
                                    <Link href="https://www.rolls-royce.com/country-sites/arabic/innovation.aspx">
                                      <span>الابتكارات</span>
                                    </Link>
                                    <ul id="section-innovation-level4">
                                      <li
                                        id="nav-rr-space-technology-level4"
                                        className="level4 first"
                                      >
                                        <Link href="https://www.rolls-royce.com/country-sites/arabic/innovation/rr-space-technology.aspx">
                                          <span>رولز-رويس التكنولوجيا والفضاء</span>
                                        </Link>
                                      </li>
                                      <li id="nav-rr-smr-ltd-level4" className="level4">
                                        <Link href="https://www.rolls-royce.com/country-sites/arabic/innovation/rr-smr-ltd.aspx">
                                          <span>رولز-رويس إس إم آر</span>
                                        </Link>
                                      </li>
                                      <li id="nav-r2-data-labs-level4" className="level4 last">
                                        <Link href="https://www.rolls-royce.com/country-sites/arabic/innovation/r2-data-labs.aspx">
                                          <span>معامل بيانات آر2</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li id="nav-net-zero-level3" className="level3">
                                    <Link href="https://www.rolls-royce.com/country-sites/arabic/net-zero.aspx">
                                      <span>الاستدامة</span>
                                    </Link>
                                  </li>
                                  <li id="nav-contact-us-level3" className="level3 last">
                                    <Link href="https://www.rolls-royce.com/country-sites/arabic/contact-us.aspx">
                                      <span>تواصلو معنا</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li id="nav-sustainability-level1" className="level1 haschildren">
                            <Link href="https://www.rolls-royce.com/sustainability.aspx">
                              <span>Sustainability</span>
                            </Link>
                            <ul id="section-sustainability-level2">
                              <li
                                id="nav-our-approach-to-decarbonisation-level2"
                                className="level2 haschildren first"
                              >
                                <Link href="https://www.rolls-royce.com/sustainability/our-approach-to-decarbonisation.aspx">
                                  <span>Our approach to decarbonisation</span>
                                </Link>
                                <ul id="section-our-approach-to-decarbonisation-level3">
                                  <li
                                    id="nav-making-rolls-royce-a-net-zero-carbon-company-level3"
                                    className="level3 haschildren first"
                                  >
                                    <Link href="https://www.rolls-royce.com/sustainability/our-approach-to-decarbonisation/making-rolls-royce-a-net-zero-carbon-company.aspx">
                                      <span>Becoming a net zero carbon company</span>
                                    </Link>
                                    <ul id="section-making-rolls-royce-a-net-zero-carbon-company-level4">
                                      <li
                                        id="nav-our-emission-footprint-level4"
                                        className="level4 first last"
                                      >
                                        <Link href="https://www.rolls-royce.com/sustainability/our-approach-to-decarbonisation/making-rolls-royce-a-net-zero-carbon-company/our-emission-footprint.aspx">
                                          <span>Our emissions footprint</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li
                                    id="nav-decarbonising-complex-critical-systems-level3"
                                    className="level3"
                                  >
                                    <Link href="https://www.rolls-royce.com/sustainability/our-approach-to-decarbonisation/decarbonising-complex-critical-systems.aspx">
                                      <span>Decarbonising complex and critical systems</span>
                                    </Link>
                                  </li>
                                  <li
                                    id="nav-creating-an-enabling-environment-level3"
                                    className="level3"
                                  >
                                    <Link href="https://www.rolls-royce.com/sustainability/our-approach-to-decarbonisation/creating-an-enabling-environment.aspx">
                                      <span>Creating an enabling environment</span>
                                    </Link>
                                  </li>
                                  <li id="nav-materiality-level3" className="level3 last">
                                    <Link href="https://www.rolls-royce.com/sustainability/our-approach-to-decarbonisation/materiality.aspx">
                                      <span>Materiality</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li id="nav-ethics-and-compliance-level2" className="level2">
                                <Link href="https://www.rolls-royce.com/sustainability/ethics-and-compliance.aspx">
                                  <span>Ethics and compliance</span>
                                </Link>
                              </li>
                              <li id="nav-our-people-level2" className="level2">
                                <Link href="https://www.rolls-royce.com/sustainability/our-people.aspx">
                                  <span>Our people</span>
                                </Link>
                              </li>
                              <li id="nav-engineering-and-innovation-level2" className="level2">
                                <Link href="https://www.rolls-royce.com/sustainability/engineering-and-innovation.aspx">
                                  <span>Engineering and innovation</span>
                                </Link>
                              </li>
                              <li id="nav-operations-and-facilities-level2" className="level2">
                                <Link href="https://www.rolls-royce.com/sustainability/operations-and-facilities.aspx">
                                  <span>Operations and facilities</span>
                                </Link>
                              </li>
                              <li id="nav-customers-and-suppliers-level2" className="level2">
                                <Link href="https://www.rolls-royce.com/sustainability/customers-and-suppliers.aspx">
                                  <span>Our Stakeholders </span>
                                </Link>
                              </li>
                              <li id="nav-cyber-security-level2" className="level2">
                                <Link href="https://www.rolls-royce.com/sustainability/cyber-security.aspx">
                                  <span>Cyber Security</span>
                                </Link>
                              </li>
                              <li id="nav-performance-level2" className="level2 haschildren last">
                                <Link href="https://www.rolls-royce.com/sustainability/performance.aspx">
                                  <span>Performance</span>
                                </Link>
                                <ul id="section-performance-level3">
                                  <li id="nav-reporting-approach-level3" className="level3 first">
                                    <Link href="https://www.rolls-royce.com/sustainability/performance/reporting-approach.aspx">
                                      <span>Reporting approach</span>
                                    </Link>
                                  </li>
                                  <li id="nav-target-progress-level3" className="level3">
                                    <Link href="https://www.rolls-royce.com/sustainability/performance/target-progress.aspx">
                                      <span>Target progress</span>
                                    </Link>
                                  </li>
                                  <li id="nav-data-charts-level3" className="level3 last">
                                    <Link href="https://www.rolls-royce.com/sustainability/performance/data-charts.aspx">
                                      <span>Data charts</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li id="nav-investors-level1" className="level1 haschildren">
                            <Link href="https://www.rolls-royce.com/investors.aspx">
                              <span>Investors</span>
                            </Link>
                            <ul id="section-investors-level2">
                              <li
                                id="nav-investor-centre-level2"
                                className="level2 haschildren first"
                              >
                                <Link href="https://www.rolls-royce.com/investors/investor-centre/share-price.aspx">
                                  <span>Investor Centre</span>
                                </Link>
                                <ul id="section-investor-centre-level3">
                                  <li id="nav-share-price-level3" className="level3 first">
                                    <Link href="https://www.rolls-royce.com/investors/investor-centre/share-price.aspx">
                                      <span>Share price</span>
                                    </Link>
                                  </li>
                                  <li id="nav-analyst-consensus-level3" className="level3 last">
                                    <Link href="https://www.rolls-royce.com/investors/investor-centre/analyst-consensus.aspx">
                                      <span>Analyst consensus</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li
                                id="nav-capital-markets-day-level2"
                                className="level2 haschildren"
                              >
                                <Link href="https://www.rolls-royce.com/investors/capital-markets-day.aspx">
                                  <span>Capital Markets Day</span>
                                </Link>
                                <ul id="section-capital-markets-day-level3">
                                  <li id="nav-civil-aerospace-level3" className="level3 first">
                                    <Link href="https://www.rolls-royce.com/investors/capital-markets-day/civil-aerospace.aspx">
                                      <span>Civil Aerospace</span>
                                    </Link>
                                  </li>
                                  <li id="nav-defence-level3" className="level3">
                                    <Link href="https://www.rolls-royce.com/investors/capital-markets-day/defence.aspx">
                                      <span>Defence</span>
                                    </Link>
                                  </li>
                                  <li id="nav-power-systems-level3" className="level3">
                                    <Link href="https://www.rolls-royce.com/investors/capital-markets-day/power-systems.aspx">
                                      <span>Power Systems</span>
                                    </Link>
                                  </li>
                                  <li
                                    id="nav-small-modular-reactors-level3"
                                    className="level3 last"
                                  >
                                    <Link href="https://www.rolls-royce.com/investors/capital-markets-day/small-modular-reactors.aspx">
                                      <span>Small Modular Reactors</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li id="nav-why-rolls-royce-level2" className="level2">
                                <Link href="https://www.rolls-royce.com/investors/why-rolls-royce.aspx">
                                  <span>Why Rolls-Royce?</span>
                                </Link>
                              </li>
                              <li id="nav-2023-full-year-results-level2" className="level2">
                                <Link href="https://www.rolls-royce.com/investors/2023-full-year-results.aspx">
                                  <span>2023 Full Year Results</span>
                                </Link>
                              </li>
                              <li id="nav-regulatory-news-level2" className="level2">
                                <Link href="https://www.rolls-royce.com/investors/regulatory-news.aspx">
                                  <span>Regulatory news</span>
                                </Link>
                              </li>
                              <li
                                id="nav-results-reports-and-presentations-level2"
                                className="level2 haschildren"
                              >
                                <Link href="https://www.rolls-royce.com/investors/results-reports-and-presentations/financial-results.aspx">
                                  <span>Results, reports and presentations</span>
                                </Link>
                                <ul id="section-results-reports-and-presentations-level3">
                                  <li id="nav-financial-results-level3" className="level3 first">
                                    <Link href="https://www.rolls-royce.com/investors/results-reports-and-presentations/financial-results.aspx">
                                      <span>Financial Results</span>
                                    </Link>
                                  </li>
                                  <li id="nav-annual-report-2023-level3" className="level3">
                                    <Link href="https://www.rolls-royce.com/investors/results-reports-and-presentations/annual-report-2023.aspx">
                                      <span>Annual Report 2023</span>
                                    </Link>
                                  </li>
                                  <li
                                    id="nav-ar-annual-report-archive-level3"
                                    className="level3 last"
                                  >
                                    <Link href="https://www.rolls-royce.com/investors/results-reports-and-presentations/ar-annual-report-archive/ar-annual-reports.aspx">
                                      <span>Annual Reports archive</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li id="nav-financial-calendar-level2" className="level2">
                                <Link href="https://www.rolls-royce.com/investors/financial-calendar.aspx">
                                  <span>Financial calendar</span>
                                </Link>
                              </li>
                              <li id="nav-corporate-governance-level2" className="level2">
                                <Link href="https://www.rolls-royce.com/about/leadership/corporate-governance.aspx">
                                  <span>Corporate governance</span>
                                </Link>
                              </li>
                              <li
                                id="nav-shareholder-information-level2"
                                className="level2 haschildren"
                              >
                                <Link href="https://www.rolls-royce.com/investors/shareholder-information.aspx">
                                  <span>Shareholder information</span>
                                </Link>
                                <ul id="section-shareholder-information-level3">
                                  <li id="nav-general-meetings-level3" className="level3 first">
                                    <Link href="https://www.rolls-royce.com/investors/shareholder-information/general-meetings.aspx">
                                      <span>
                                        General Meetings <br />
                                        23 May 2024{' '}
                                      </span>
                                    </Link>
                                  </li>
                                  <li
                                    id="nav-annual-general-meeting-archive-level3"
                                    className="level3"
                                  >
                                    <Link href="https://www.rolls-royce.com/investors/shareholder-information/annual-general-meeting-archive/yr-2023.aspx">
                                      <span>General Meeting archive</span>
                                    </Link>
                                  </li>
                                  <li id="nav-payments-to-shareholders-level3" className="level3">
                                    <Link href="https://www.rolls-royce.com/investors/shareholder-information/payments-to-shareholders.aspx">
                                      <span>Payments to shareholders</span>
                                    </Link>
                                  </li>
                                  <li id="nav-manage-your-shareholding-level3" className="level3">
                                    <Link href="https://www.rolls-royce.com/investors/shareholder-information/manage-your-shareholding.aspx">
                                      <span>Manage your shareholding</span>
                                    </Link>
                                  </li>
                                  <li id="nav-registrar-level3" className="level3">
                                    <Link href="https://www.rolls-royce.com/investors/shareholder-information/registrar.aspx">
                                      <span>Registrar</span>
                                    </Link>
                                  </li>
                                  <li id="nav-shareholder-fraud-warning-level3" className="level3">
                                    <Link href="https://www.rolls-royce.com/investors/shareholder-information/shareholder-fraud-warning.aspx">
                                      <span>Shareholder fraud warning</span>
                                    </Link>
                                  </li>
                                  <li id="nav-faqs-level3" className="level3 last">
                                    <Link href="https://www.rolls-royce.com/investors/shareholder-information/faqs.aspx">
                                      <span>FAQs</span>
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li id="nav-debt-securities-level2" className="level2">
                                <Link href="https://www.rolls-royce.com/investors/debt-securities.aspx">
                                  <span>Debt Securities</span>
                                </Link>
                              </li>
                              <li id="nav-rights-issue-level2" className="level2">
                                <Link href="https://www.rolls-royce.com/investors/rights-issue.aspx">
                                  <span>Rights issue</span>
                                </Link>
                              </li>
                              <li id="nav-investor-contacts-level2" className="level2 last">
                                <Link href="https://www.rolls-royce.com/investors/investor-contacts.aspx">
                                  <span>Investor contacts</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li id="nav-media-level1" className="level1 haschildren">
                            <Link href="https://www.rolls-royce.com/media.aspx">
                              <span>Media</span>
                            </Link>
                            <ul id="section-media-level2">
                              <li id="nav-company-announcement-level2" className="level2 first">
                                <Link href="https://www.rolls-royce.com/media/press-releases#company-announcements">
                                  <span>Company announcements</span>
                                </Link>
                              </li>
                              <li id="nav-trade-press-releases-level2" className="level2">
                                <Link href="https://www.rolls-royce.com/media/press-releases#trade-press-releases">
                                  <span>Trade press releases</span>
                                </Link>
                              </li>
                              <li id="nav-our-stories-level2" className="level2">
                                <Link href="https://www.rolls-royce.com/media/our-stories.aspx">
                                  <span>Our stories</span>
                                </Link>
                              </li>
                              <li id="nav-press-releases-level2" className="level2">
                                <Link href="https://www.rolls-royce.com/media/press-releases.aspx">
                                  <span>Press releases</span>
                                </Link>
                              </li>
                              <li id="nav-social-level2" className="level2">
                                <Link href="https://www.rolls-royce.com/media/social.aspx">
                                  <span>Social</span>
                                </Link>
                              </li>
                              <li id="nav-contacts-level2" className="level2 last">
                                <Link href="https://www.rolls-royce.com/media/contacts.aspx">
                                  <span>Contacts</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li id="nav-careers-direct-level1" className="level1 last">
                            <Link target="_blank" href="https://careers.rolls-royce.com">
                              <span>Careers</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div id="fwSubNavSignPost">
                      <div className="fw-nav-products-and-services-level1 mobi-fw-nav-products-and-services-level1 fwNavSignpost">
                        <p>
                          We develop and deliver complex power and propulsion solutions for
                          safety-critical applications in the air, at sea and on land.
                        </p>
                        <p>
                          Our products and service packages enable our customers to connect people,
                          societies, cultures and economies together.
                        </p>
                        <p>
                          <Link
                            href="https://www.rolls-royce.com/products-and-services.aspx"
                            className="rad-link-1"
                          >
                            Products &amp; Services
                          </Link>
                        </p>
                      </div>
                      <div className="fw-nav-about-level1 mobi-fw-nav-about-level1 fwNavSignpost">
                        <p className="rad-highlight">
                          We develop and deliver complex power and propulsion solutions.
                        </p>
                        <p>
                          For more than 100 years we have been at the forefront of innovation.
                          Helping to power, protect and connect the modern world.
                        </p>
                        <p>
                          <Link
                            href="https://www.rolls-royce.com/about.aspx"
                            className="rad-link-1"
                          >
                            About
                          </Link>
                        </p>
                      </div>
                      <div className="fw-nav-careers-level1 mobi-fw-nav-careers-level1 fwNavSignpost">
                        <p className="rad-highlight">Create your future with us</p>
                        <p>Help us deliver better power for our changing world.</p>
                      </div>
                      <div className="fw-nav-sustainability-level1 mobi-fw-nav-sustainability-level1 fwNavSignpost">
                        <p className="rad-highlight">Doing more with less</p>
                        <p>
                          We have a fundamental role in meeting the environmental and societal
                          opportunities and challenges that the world faces.
                        </p>
                        <p>
                          <Link
                            href="https://www.rolls-royce.com/sustainability.aspx"
                            className="rad-link-1"
                          >
                            Sustainability
                          </Link>
                        </p>
                      </div>
                      <div className="fw-nav-investors-level1 mobi-fw-nav-investors-level1 fwNavSignpost">
                        <p className="rad-highlight">2023 Full Year Results</p>
                        <p>Rolls-Royce announced Full Year Results on 22 February 2024.</p>
                        <p>
                          <Link
                            href="https://www.rolls-royce.com/investors/2023-full-year-results.aspx"
                            className="rad-link-1"
                          >
                            View results
                          </Link>
                        </p>
                      </div>
                      <div className="fw-nav-media-level1 mobi-fw-nav-media-level1 fwNavSignpost">
                        <p className="rad-highlight">News centre</p>
                        <p>Updates and news from around the Rolls-Royce businesses.</p>
                        <p>
                          <Link
                            href="https://www.rolls-royce.com/investors/investor-contacts/alert-service.aspx"
                            className="rad-link-1"
                          >
                            Sign up to get the latest news
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="Nav-search">
                      <Link
                        title="Navigation Search"
                        className="Nav-search__button icon-Icon_Search"
                        href={''}
                      >
                        <span className="u-visuallyhidden">search</span>
                      </Link>
                      <div className="Nav-search__wrapper">
                        <div className="maxwidth-wrapper">
                          <div id="global-search-form" className="Nav-search__form">
                            <div className="BorderWrap">
                              <div id="searchTextboxContainer">
                                <label htmlFor="searchTextbox" className="u-visuallyhidden">
                                  Search Box
                                </label>
                                <input
                                  type="text"
                                  value="Search"
                                  className="search-query search-txt Nav-search__input"
                                  id="searchTextbox"
                                  name="q"
                                  placeholder="Search"
                                  autoComplete="off"
                                  aria-label="Click to Search"
                                />
                              </div>
                              <div id="SearchButtonContainer">
                                <label htmlFor="searchButton" className="u-visuallyhidden">
                                  Search button
                                </label>
                                <input
                                  aria-label="Click to Search"
                                  type="submit"
                                  name="body_0$main_0$ctl00$ctl62$ctl02$ctl00"
                                  value="GO"
                                  id="searchButton"
                                />
                              </div>
                            </div>
                            <div className="searchText">Press ENTER to search or ESC to close</div>
                          </div>
                          <button
                            aria-label="Click to Close Search Box"
                            className="Nav-search__close"
                            type="button"
                          >
                            <div className="icon-Icon_Close">&nbsp;</div>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div id="searchbox" className="hide">
                      <div id="searchTextboxContainer">
                        <label htmlFor="searchTextbox" className="u-visuallyhidden">
                          Search Box
                        </label>
                        <input
                          type="text"
                          value="Search"
                          className="search-query search-txt Nav-search__input"
                          id="searchTextbox"
                          name="q"
                          placeholder="Search"
                          autoComplete="off"
                        />
                      </div>
                      <div id="SearchButtonContainer">
                        <label htmlFor="searchButton" className="u-visuallyhidden">
                          Search
                        </label>
                        <input
                          aria-label="Click to Search"
                          type="submit"
                          name="body_0$main_0$ctl00$ctl62$ctl02$ctl00"
                          value="GO"
                          id="searchButton"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="show-ul-outer">
            <div className="show-ul clearfix">
              <Link title="Click To CLose" className="megamenu-close" href="javascript:;">
                <span className="icon-cross"></span>
                <span className="close-txt">Close</span>
              </Link>
              <div className="show-menu"></div>
              <div className="show-desc"></div>
            </div>
          </div>
        </div>
        <div className="new-second-level-navigation hide">
          <div className="used-for-clone">
            <ul id="new-secondnav-section-Homepage-level1">
              <li id="new-secondnav-nav-innovation-level1" className="level1 haschildren first">
                <Link href="https://www.rolls-royce.com/innovation.aspx">
                  <span>Innovation</span>
                </Link>
                <ul id="new-secondnav-section-innovation-level2">
                  <li
                    id="new-secondnav-nav-alternative-fuels-level2"
                    className="level2 haschildren first"
                  >
                    <Link href="https://www.rolls-royce.com/innovation/alternative-fuels.aspx">
                      <span>Alternative fuels</span>
                    </Link>
                    <ul id="new-secondnav-section-alternative-fuels-level3">
                      <li id="new-secondnav-nav-hydrogen-level3" className="level3 first last">
                        <Link href="https://www.rolls-royce.com/innovation/alternative-fuels/hydrogen.aspx">
                          <span>Hydrogen</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li id="new-secondnav-nav-climate-tech-centre-level2" className="level2">
                    <Link href="https://www.rolls-royce.com/innovation/climate-tech-centre.aspx">
                      <span>Climate-tech centre</span>
                    </Link>
                  </li>
                  <li id="new-secondnav-nav-small-modular-reactors-level2" className="level2">
                    <Link href="https://www.rolls-royce.com/innovation/small-modular-reactors.aspx">
                      <span>Small modular reactors</span>
                    </Link>
                  </li>
                  <li id="new-secondnav-nav-novel-nuclear-level2" className="level2 haschildren">
                    <Link href="https://www.rolls-royce.com/innovation/novel-nuclear.aspx">
                      <span>Novel Nuclear</span>
                    </Link>
                    <ul id="new-secondnav-section-novel-nuclear-level3">
                      <li id="new-secondnav-nav-micro-reactor-level3" className="level3 first last">
                        <Link href="https://www.rolls-royce.com/innovation/novel-nuclear/micro-reactor.aspx">
                          <span>Micro-Reactor</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li id="new-secondnav-nav-ultrafan-level2" className="level2">
                    <Link href="https://www.rolls-royce.com/innovation/ultrafan.aspx">
                      <span>UltraFan</span>
                    </Link>
                  </li>
                  <li id="new-secondnav-nav-digital-level2" className="level2 haschildren">
                    <Link href="https://www.rolls-royce.com/innovation/digital.aspx">
                      <span>Digital</span>
                    </Link>
                    <ul id="new-secondnav-section-digital-level3">
                      <li id="new-secondnav-nav-digital-platforms-level3" className="level3 first">
                        <Link href="https://www.rolls-royce.com/innovation/digital/digital-platforms.aspx">
                          <span>Digital Platforms </span>
                        </Link>
                      </li>
                      <li id="new-secondnav-nav-digital-twin-level3" className="level3 last">
                        <Link href="https://www.rolls-royce.com/innovation/digital/digital-twin.aspx">
                          <span>Digital Twin</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li id="new-secondnav-nav-the-aletheia-framework-level2" className="level2">
                    <Link href="https://www.rolls-royce.com/innovation/the-aletheia-framework.aspx">
                      <span>
                        The Aletheia Framework<sup>®</sup>
                      </span>
                    </Link>
                  </li>
                  <li id="new-secondnav-nav-accel-level2" className="level2 last">
                    <Link href="https://www.rolls-royce.com/innovation/accel.aspx">
                      <span>ACCEL</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                id="new-secondnav-nav-products-and-services-level1"
                className="level1 selected haschildren"
              >
                <Link href="https://www.rolls-royce.com/products-and-services.aspx">
                  <span>Products & Services</span>
                </Link>
                <ul id="new-secondnav-section-products-and-services-level2">
                  <li
                    id="new-secondnav-nav-civil-aerospace-level2"
                    className="level2 current haschildren first"
                  >
                    <span>Civil Aerospace</span>
                    <ul id="new-secondnav-section-civil-aerospace-level3">
                      <li id="new-secondnav-nav-sustainability-level3" className="level3 first">
                        <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/sustainability.aspx">
                          <span>Sustainability</span>
                        </Link>
                      </li>
                      <li id="new-secondnav-nav-purchase-parts-services-level3" className="level3">
                        <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/marketplace.aspx">
                          <span>Purchase Parts & Services</span>
                        </Link>
                      </li>
                      <li id="new-secondnav-nav-services-level3" className="level3 haschildren">
                        <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/services.aspx">
                          <span>Services</span>
                        </Link>
                        <ul id="new-secondnav-section-services-level4">
                          <li id="new-secondnav-nav-passenger-level4" className="level4 first">
                            <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/services/passenger.aspx">
                              <span>Passenger</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-Freighter-level4" className="level4">
                            <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/services/freighter.aspx">
                              <span>Freighter</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-lessors-level4" className="level4">
                            <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/services/lessors.aspx">
                              <span>Lessors</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-business-level4" className="level4">
                            <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/services/business.aspx">
                              <span>Business</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-other-customers-level4" className="level4 last">
                            <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/services/other-customers.aspx">
                              <span>Other Customers</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li id="new-secondnav-nav-aircraft-transitions-level3" className="level3">
                        <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/aircraft-transitions.aspx">
                          <span>Aircraft Transitions</span>
                        </Link>
                      </li>
                      <li id="new-secondnav-nav-widebody-level3" className="level3 haschildren">
                        <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/widebody/power-of-trent.aspx">
                          <span>Widebody</span>
                        </Link>
                        <ul id="new-secondnav-section-widebody-level4">
                          <li
                            id="new-secondnav-nav-power-of-trent-level4"
                            className="level4 haschildren first"
                          >
                            <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/widebody/power-of-trent.aspx">
                              <span>Power of Trent</span>
                            </Link>
                            <ul id="new-secondnav-section-power-of-trent-level5">
                              <li
                                id="new-secondnav-nav-versatile-and-capable-level5"
                                className="level5 first last"
                              >
                                <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/widebody/power-of-trent/versatile-and-capable.aspx">
                                  <span>Capable & Versatile</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li id="new-secondnav-nav-trent-7000-level4" className="level4">
                            <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/widebody/trent-7000.aspx">
                              <span>Trent 7000</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-trent-xwb-level4" className="level4">
                            <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/widebody/trent-xwb.aspx">
                              <span>Trent XWB</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-trent-1000-level4" className="level4">
                            <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/widebody/trent-1000.aspx">
                              <span>Trent 1000</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-trent-900-level4" className="level4">
                            <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/widebody/trent-900.aspx">
                              <span>Trent 900</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-trent-500-level4" className="level4">
                            <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/widebody/trent-500.aspx">
                              <span>Trent 500</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-trent-800-level4" className="level4">
                            <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/widebody/trent-800.aspx">
                              <span>Trent 800</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-trent-700-level4" className="level4">
                            <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/widebody/trent-700.aspx">
                              <span>Trent 700</span>
                            </Link>
                          </li>
                          <li
                            id="new-secondnav-nav-rb211-524gh-and-t-level4"
                            className="level4 last"
                          >
                            <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/widebody/rb211-524gh-and-t.aspx">
                              <span>RB211-524G/H & -T</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="new-secondnav-nav-narrowbody-and-regional-level3"
                        className="level3 haschildren"
                      >
                        <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/narrowbody-and-regional/ae3007.aspx">
                          <span>Narrowbody & Regional</span>
                        </Link>
                        <ul id="new-secondnav-section-narrowbody-and-regional-level4">
                          <li id="new-secondnav-nav-ae3007-level4" className="level4 first">
                            <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/narrowbody-and-regional/ae3007.aspx">
                              <span>AE3007</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-br715-level4" className="level4">
                            <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/narrowbody-and-regional/br715.aspx">
                              <span>BR715</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-rb211-535e4-level4" className="level4">
                            <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/narrowbody-and-regional/rb211-535e4.aspx">
                              <span>RB211-535E4</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-tay-level4" className="level4 last">
                            <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/narrowbody-and-regional/tay.aspx">
                              <span>Tay 620 / 650</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="new-secondnav-nav-business-aviation-level3"
                        className="level3 haschildren"
                      >
                        <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/business-aviation.aspx">
                          <span>Business Aviation</span>
                        </Link>
                        <ul id="new-secondnav-section-business-aviation-level4">
                          <li id="new-secondnav-nav-pearl-10x-level4" className="level4 first">
                            <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/business-aviation/pearl-10x.aspx">
                              <span>Pearl 10X</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-pearl-700-level4" className="level4">
                            <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/business-aviation/pearl-700.aspx">
                              <span>Pearl 700</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-pearl-15-level4" className="level4">
                            <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/business-aviation/pearl-15.aspx">
                              <span>Pearl 15</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-ae-3007-level4" className="level4">
                            <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/business-aviation/ae-3007.aspx">
                              <span>AE 3007</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-br710-level4" className="level4">
                            <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/business-aviation/br710.aspx">
                              <span>BR710</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-br725-level4" className="level4">
                            <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/business-aviation/br725.aspx">
                              <span>BR725</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-tay-level4" className="level4 last">
                            <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/business-aviation/tay.aspx">
                              <span>Tay</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li id="new-secondnav-nav-helicopters-level3" className="level3 haschildren">
                        <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/helicopters/m250-turboshaft.aspx">
                          <span>Helicopters</span>
                        </Link>
                        <ul id="new-secondnav-section-helicopters-level4">
                          <li
                            id="new-secondnav-nav-m250-turboshaft-level4"
                            className="level4 first"
                          >
                            <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/helicopters/m250-turboshaft.aspx">
                              <span>M250 turboshaft</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-rr300-level4" className="level4">
                            <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/helicopters/rr300.aspx">
                              <span>RR300</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-m250-turboprop-level4" className="level4 last">
                            <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/helicopters/m250-turboprop.aspx">
                              <span>M250 turboprop</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li id="new-secondnav-nav-future-products-level3" className="level3">
                        <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/future-products.aspx">
                          <span>Future products</span>
                        </Link>
                      </li>
                      <li
                        id="new-secondnav-nav-testing-capabilities-level3"
                        className="level3 haschildren last"
                      >
                        <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/testing-capabilities.aspx">
                          <span>Testing capabilities</span>
                        </Link>
                        <ul id="new-secondnav-section-testing-capabilities-level4">
                          <li
                            id="new-secondnav-nav-access-our-testing-capabilities-level4"
                            className="level4 first"
                          >
                            <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/testing-capabilities/access-our-testing-capabilities.aspx">
                              <span>Access our testing capabilities</span>
                            </Link>
                          </li>
                          <li
                            id="new-secondnav-nav-testbed-facilities-level4"
                            className="level4 last"
                          >
                            <Link href="https://www.rolls-royce.com/products-and-services/civil-aerospace/testing-capabilities/testbed-facilities.aspx">
                              <span>Testbed facilities</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li id="new-secondnav-nav-defence-level2" className="level2 haschildren">
                    <Link href="https://www.rolls-royce.com/products-and-services/defence.aspx">
                      <span>Defence</span>
                    </Link>
                    <ul id="new-secondnav-section-defence-level3">
                      <li
                        id="new-secondnav-nav-future_combat_air_capability-level3"
                        className="level3 haschildren first"
                      >
                        <Link href="https://www.rolls-royce.com/products-and-services/defence/future_combat_air_capability.aspx">
                          <span>Power for Future Combat Air </span>
                        </Link>
                        <ul id="new-secondnav-section-future_combat_air_capability-level4">
                          <li
                            id="new-secondnav-nav-achieving_net_zero_for_future_combat_air_systems_fcas-level4"
                            className="level4 first"
                          >
                            <Link href="https://www.rolls-royce.com/products-and-services/defence/future_combat_air_capability/achieving_net_zero_for_future_combat_air_systems_fcas.aspx">
                              <span>Net Zero for Future Combat Air Systems </span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-tempest-level4" className="level4">
                            <Link href="https://www.rolls-royce.com/products-and-services/defence/future_combat_air_capability/tempest.aspx">
                              <span>Tempest</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-orpheus-level4" className="level4">
                            <Link href="https://www.rolls-royce.com/products-and-services/defence/future_combat_air_capability/orpheus.aspx">
                              <span>Orpheus</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-careers-level4" className="level4 last">
                            <Link href="https://www.rolls-royce.com/products-and-services/defence/future_combat_air_capability/careers.aspx">
                              <span>Developing the Next Generation</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li id="new-secondnav-nav-digital-innovation-level3" className="level3">
                        <Link href="https://www.rolls-royce.com/products-and-services/defence/digital-innovation.aspx">
                          <span>Digital FIRST</span>
                        </Link>
                      </li>
                      <li id="new-secondnav-nav-sustainable-power-level3" className="level3">
                        <Link href="https://www.rolls-royce.com/products-and-services/defence/sustainable-power.aspx">
                          <span>Energy Transition for Defence</span>
                        </Link>
                      </li>
                      <li
                        id="new-secondnav-nav-advanced-technology-defence-level3"
                        className="level3 haschildren"
                      >
                        <Link href="https://www.rolls-royce.com/products-and-services/defence/advanced-technology-defence.aspx">
                          <span>Advanced Technology</span>
                        </Link>
                        <ul id="new-secondnav-section-advanced-technology-defence-level4">
                          <li id="new-secondnav-nav-libertyworks-level4" className="level4 first">
                            <Link href="https://www.rolls-royce.com/products-and-services/defence/advanced-technology-defence/libertyworks.aspx">
                              <span>LibertyWorks</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-valor-level4" className="level4 last">
                            <Link href="https://www.rolls-royce.com/products-and-services/defence/advanced-technology-defence/valor.aspx">
                              <span>FLRAA</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li id="new-secondnav-nav-aerospace-level3" className="level3 haschildren">
                        <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace.aspx">
                          <span>Aerospace</span>
                        </Link>
                        <ul id="new-secondnav-section-aerospace-level4">
                          <li
                            id="new-secondnav-nav-combat-jets-level4"
                            className="level4 haschildren first"
                          >
                            <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/combat-jets/f130.aspx">
                              <span>Combat Jets</span>
                            </Link>
                            <ul id="new-secondnav-section-combat-jets-level5">
                              <li id="new-secondnav-nav-f130-level5" className="level5 first">
                                <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/combat-jets/f130.aspx">
                                  <span>F130</span>
                                </Link>
                              </li>
                              <li
                                id="new-secondnav-nav-rolls-royce-liftsystem-level5"
                                className="level5"
                              >
                                <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/combat-jets/rolls-royce-liftsystem.aspx">
                                  <span>Rolls-Royce LiftSystem®</span>
                                </Link>
                              </li>
                              <li id="new-secondnav-nav-ej200-level5" className="level5">
                                <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/combat-jets/ej200.aspx">
                                  <span>EJ200</span>
                                </Link>
                              </li>
                              <li id="new-secondnav-nav-adour-level5" className="level5">
                                <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/combat-jets/adour.aspx">
                                  <span>Adour</span>
                                </Link>
                              </li>
                              <li id="new-secondnav-nav-rb199-level5" className="level5">
                                <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/combat-jets/rb199.aspx">
                                  <span>RB199</span>
                                </Link>
                              </li>
                              <li id="new-secondnav-nav-pegasus-level5" className="level5 last">
                                <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/combat-jets/pegasus.aspx">
                                  <span>Pegasus</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li id="new-secondnav-nav-rotary-level4" className="level4 haschildren">
                            <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/rotary/ae-1107c.aspx">
                              <span>Rotary</span>
                            </Link>
                            <ul id="new-secondnav-section-rotary-level5">
                              <li id="new-secondnav-nav-ae-1107c-level5" className="level5 first">
                                <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/rotary/ae-1107c.aspx">
                                  <span>AE 1107C</span>
                                </Link>
                              </li>
                              <li id="new-secondnav-nav-cts800-level5" className="level5">
                                <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/rotary/cts800.aspx">
                                  <span>CTS800</span>
                                </Link>
                              </li>
                              <li id="new-secondnav-nav-mtr390-level5" className="level5">
                                <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/rotary/mtr390.aspx">
                                  <span>MTR390</span>
                                </Link>
                              </li>
                              <li
                                id="new-secondnav-nav-m250-turboshaft-level5"
                                className="level5 last"
                              >
                                <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/rotary/m250-turboshaft.aspx">
                                  <span>M250 Turboshaft</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="new-secondnav-nav-transport-tanker-patrol-and-tactical-level4"
                            className="level4 haschildren"
                          >
                            <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/transport-tanker-patrol-and-tactical/ae-2100.aspx">
                              <span>Transport, Tanker, Patrol & Tactical</span>
                            </Link>
                            <ul id="new-secondnav-section-transport-tanker-patrol-and-tactical-level5">
                              <li id="new-secondnav-nav-ae-2100-level5" className="level5 first">
                                <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/transport-tanker-patrol-and-tactical/ae-2100.aspx">
                                  <span>AE 2100</span>
                                </Link>
                              </li>
                              <li id="new-secondnav-nav-ae-1107c-level5" className="level5">
                                <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/transport-tanker-patrol-and-tactical/ae-1107c.aspx">
                                  <span>AE 1107C</span>
                                </Link>
                              </li>
                              <li id="new-secondnav-nav-ae-3007-level5" className="level5">
                                <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/transport-tanker-patrol-and-tactical/ae-3007.aspx">
                                  <span>AE 3007</span>
                                </Link>
                              </li>
                              <li id="new-secondnav-nav-trent-700-mrtt-level5" className="level5">
                                <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/transport-tanker-patrol-and-tactical/trent-700-mrtt.aspx">
                                  <span>Trent 700 MRTT</span>
                                </Link>
                              </li>
                              <li id="new-secondnav-nav-tp400-d6-level5" className="level5">
                                <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/transport-tanker-patrol-and-tactical/tp400-d6.aspx">
                                  <span>TP400-D6</span>
                                </Link>
                              </li>
                              <li id="new-secondnav-nav-br710-level5" className="level5">
                                <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/transport-tanker-patrol-and-tactical/br710.aspx">
                                  <span>BR710</span>
                                </Link>
                              </li>
                              <li id="new-secondnav-nav-t56-level5" className="level5">
                                <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/transport-tanker-patrol-and-tactical/t56.aspx">
                                  <span>T56</span>
                                </Link>
                              </li>
                              <li id="new-secondnav-nav-cts800-level5" className="level5">
                                <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/transport-tanker-patrol-and-tactical/cts800.aspx">
                                  <span>CTS800</span>
                                </Link>
                              </li>
                              <li id="new-secondnav-nav-m250-turboprop-level5" className="level5">
                                <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/transport-tanker-patrol-and-tactical/m250-turboprop.aspx">
                                  <span>M250 Turboprop</span>
                                </Link>
                              </li>
                              <li
                                id="new-secondnav-nav-t56-3-5-enhancement-level5"
                                className="level5 last"
                              >
                                <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/transport-tanker-patrol-and-tactical/t56-3-5-enhancement.aspx">
                                  <span>T56 3.5 Enhancement</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li id="new-secondnav-nav-trainers-level4" className="level4 haschildren">
                            <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/trainers/adour.aspx">
                              <span>Trainers</span>
                            </Link>
                            <ul id="new-secondnav-section-trainers-level5">
                              <li id="new-secondnav-nav-adour-level5" className="level5 first">
                                <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/trainers/adour.aspx">
                                  <span>Adour</span>
                                </Link>
                              </li>
                              <li
                                id="new-secondnav-nav-m250-turboprop-level5"
                                className="level5 last"
                              >
                                <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/trainers/m250-turboprop.aspx">
                                  <span>M250 Turboprop</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li id="new-secondnav-nav-uavs-level4" className="level4 haschildren">
                            <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/uavs/ae-3007.aspx">
                              <span>UAVs</span>
                            </Link>
                            <ul id="new-secondnav-section-uavs-level5">
                              <li id="new-secondnav-nav-ae-3007-level5" className="level5 first">
                                <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/uavs/ae-3007.aspx">
                                  <span>AE 3007</span>
                                </Link>
                              </li>
                              <li id="new-secondnav-nav-m250-turboshaft-level5" className="level5">
                                <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/uavs/m250-turboshaft.aspx">
                                  <span>M250 Turboshaft</span>
                                </Link>
                              </li>
                              <li id="new-secondnav-nav-adour-level5" className="level5 last">
                                <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/uavs/adour.aspx">
                                  <span>Adour</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="new-secondnav-nav-distributed-generation-systems-aero-level4"
                            className="level4 last"
                          >
                            <Link href="https://www.rolls-royce.com/products-and-services/defence/aerospace/distributed-generation-systems-aero.aspx">
                              <span>Distributed Generation Systems</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li id="new-secondnav-nav-naval-level3" className="level3 haschildren">
                        <Link href="https://www.rolls-royce.com/products-and-services/defence/naval.aspx">
                          <span>Naval</span>
                        </Link>
                        <ul id="new-secondnav-section-naval-level4">
                          <li
                            id="new-secondnav-nav-gas-turbines-level4"
                            className="level4 haschildren first"
                          >
                            <Link href="https://www.rolls-royce.com/products-and-services/defence/naval/gas-turbines.aspx">
                              <span>Gas Turbines</span>
                            </Link>
                            <ul id="new-secondnav-section-gas-turbines-level5">
                              <li
                                id="new-secondnav-nav-mt30-marine-gas-turbine-level5"
                                className="level5 first"
                              >
                                <Link href="https://www.rolls-royce.com/products-and-services/defence/naval/gas-turbines/mt30-marine-gas-turbine.aspx">
                                  <span>MT30 Marine Gas Turbine</span>
                                </Link>
                              </li>
                              <li
                                id="new-secondnav-nav-ag9160-generator-set-level5"
                                className="level5"
                              >
                                <Link href="https://www.rolls-royce.com/products-and-services/defence/naval/gas-turbines/ag9160-generator-set.aspx">
                                  <span>AG9160 Generator Set</span>
                                </Link>
                              </li>
                              <li
                                id="new-secondnav-nav-ag9140-generator-set-level5"
                                className="level5"
                              >
                                <Link href="https://www.rolls-royce.com/products-and-services/defence/naval/gas-turbines/ag9140-generator-set.aspx">
                                  <span>AG9140 Generator Set</span>
                                </Link>
                              </li>
                              <li
                                id="new-secondnav-nav-mt7-marine-gas-turbine-level5"
                                className="level5 last"
                              >
                                <Link href="https://www.rolls-royce.com/products-and-services/defence/naval/gas-turbines/mt7-marine-gas-turbine.aspx">
                                  <span>MT7 Marine Gas Turbine</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="new-secondnav-nav-diesel-engines-level4"
                            className="level4 haschildren"
                          >
                            <Link href="https://www.rolls-royce.com/products-and-services/defence/naval/diesel-engines/power-systems.aspx">
                              <span>Diesel Engines</span>
                            </Link>
                            <ul id="new-secondnav-section-diesel-engines-level5">
                              <li
                                id="new-secondnav-nav-power-systems-level5"
                                className="level5 first last"
                              >
                                <Link href="https://www.rolls-royce.com/products-and-services/power-systems.aspx">
                                  <span>Power Systems</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li id="new-secondnav-nav-propulsion-level4" className="level4">
                            <Link href="https://www.rolls-royce.com/products-and-services/defence/naval/propulsion.aspx">
                              <span>Propulsion</span>
                            </Link>
                          </li>
                          <li
                            id="new-secondnav-nav-naval-handling-systems-level4"
                            className="level4"
                          >
                            <Link href="https://www.rolls-royce.com/products-and-services/defence/naval/naval-handling-systems/mission-bay-handling-system.aspx">
                              <span>Naval Handling Systems</span>
                            </Link>
                          </li>
                          <li
                            id="new-secondnav-nav-naval-support-and-services-level4"
                            className="level4"
                          >
                            <Link href="https://www.rolls-royce.com/products-and-services/defence/naval/naval-support-and-services.aspx">
                              <span>Naval Support &amp; Services</span>
                            </Link>
                          </li>
                          <li
                            id="new-secondnav-nav-distributed-generation-systems-naval-level4"
                            className="level4 last"
                          >
                            <Link href="https://www.rolls-royce.com/products-and-services/defence/naval/distributed-generation-systems-naval.aspx">
                              <span>Distributed Generation Systems</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li id="new-secondnav-nav-submarines-level3" className="level3">
                        <Link href="https://www.rolls-royce.com/products-and-services/defence/submarines.aspx">
                          <span>Submarines</span>
                        </Link>
                      </li>
                      <li id="new-secondnav-nav-land-level3" className="level3 haschildren">
                        <Link href="https://www.rolls-royce.com/products-and-services/defence/land/distributed-generation-systems-land.aspx">
                          <span>Land</span>
                        </Link>
                        <ul id="new-secondnav-section-land-level4">
                          <li
                            id="new-secondnav-nav-distributed-generation-systems-land-level4"
                            className="level4 first last"
                          >
                            <Link href="https://www.rolls-royce.com/products-and-services/defence/land/distributed-generation-systems-land.aspx">
                              <span>Distributed Generation Systems</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="new-secondnav-nav-services-level3"
                        className="level3 haschildren last"
                      >
                        <Link href="https://www.rolls-royce.com/products-and-services/defence/services.aspx">
                          <span>Services</span>
                        </Link>
                        <ul id="new-secondnav-section-services-level4">
                          <li id="new-secondnav-nav-ace-level4" className="level4 first">
                            <Link href="https://www.rolls-royce.com/products-and-services/defence/services/ace.aspx">
                              <span>ACE</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-twinalytix-level4" className="level4 last">
                            <Link href="https://www.rolls-royce.com/products-and-services/defence/services/twinalytix.aspx">
                              <span>TwinAlytix®</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li id="new-secondnav-nav-power-systems-level2" className="level2 haschildren">
                    <Link href="https://www.rolls-royce.com/products-and-services/power-systems.aspx">
                      <span>Power Systems</span>
                    </Link>
                    <ul id="new-secondnav-section-power-systems-level3">
                      <li
                        id="new-secondnav-nav-power-generation-solutions-level3"
                        className="level3 first"
                      >
                        <Link href="https://www.rolls-royce.com/products-and-services/power-systems/power-generation-solutions.aspx">
                          <span>Power Generation Solutions</span>
                        </Link>
                      </li>
                      <li id="new-secondnav-nav-marine-level3" className="level3">
                        <Link href="https://www.rolls-royce.com/products-and-services/power-systems/marine.aspx">
                          <span>Marine</span>
                        </Link>
                      </li>
                      <li id="new-secondnav-nav-governmental-level3" className="level3">
                        <Link href="https://www.rolls-royce.com/products-and-services/power-systems/governmental.aspx">
                          <span>Governmental</span>
                        </Link>
                      </li>
                      <li
                        id="new-secondnav-nav-power-systems-sustainability-level3"
                        className="level3 last"
                      >
                        <Link href="https://www.rolls-royce.com/products-and-services/power-systems/power-systems-sustainability.aspx">
                          <span>Power Systems Sustainability</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li id="new-secondnav-nav-electrical-level2" className="level2 haschildren last">
                    <Link href="https://www.rolls-royce.com/products-and-services/electrical.aspx">
                      <span>Electrical Aviation</span>
                    </Link>
                    <ul id="new-secondnav-section-electrical-level3">
                      <li
                        id="new-secondnav-nav-our-electrical-power-and-propulsion-portfolio-level3"
                        className="level3 first"
                      >
                        <Link href="https://www.rolls-royce.com/products-and-services/electrical/our-electrical-power-and-propulsion-portfolio.aspx">
                          <span>Our Electrical power & propulsion portfolio</span>
                        </Link>
                      </li>
                      <li id="new-secondnav-nav-our-capability-level3" className="level3 last">
                        <Link href="https://www.rolls-royce.com/products-and-services/electrical/our-capability.aspx">
                          <span>Our Capability</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li id="new-secondnav-nav-about-level1" className="level1 haschildren">
                <Link href="https://www.rolls-royce.com/about.aspx">
                  <span>About</span>
                </Link>
                <ul id="new-secondnav-section-about-level2">
                  <li id="new-secondnav-nav-our-strategy-level2" className="level2 first">
                    <Link href="https://www.rolls-royce.com/about/our-strategy.aspx">
                      <span>Our Strategy</span>
                    </Link>
                  </li>
                  <li id="new-secondnav-nav-leadership-level2" className="level2 haschildren">
                    <Link href="https://www.rolls-royce.com/about/leadership/board.aspx">
                      <span>Leadership</span>
                    </Link>
                    <ul id="new-secondnav-section-leadership-level3">
                      <li id="new-secondnav-nav-board-level3" className="level3 first">
                        <Link href="https://www.rolls-royce.com/about/leadership/board.aspx">
                          <span>Board</span>
                        </Link>
                      </li>
                      <li
                        id="new-secondnav-nav-executive-leadership-team-level3"
                        className="level3"
                      >
                        <Link href="https://www.rolls-royce.com/about/leadership/executive-leadership-team.aspx">
                          <span>Executive Team</span>
                        </Link>
                      </li>
                      <li
                        id="new-secondnav-nav-corporate-governance-level3"
                        className="level3 last"
                      >
                        <Link href="https://www.rolls-royce.com/about/leadership/corporate-governance.aspx">
                          <span>Corporate governance</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li id="new-secondnav-nav-where-we-operate-level2" className="level2">
                    <Link href="https://www.rolls-royce.com/about/where-we-operate.aspx">
                      <span>Where We Operate</span>
                    </Link>
                  </li>
                  <li id="new-secondnav-nav-our-research-level2" className="level2 haschildren">
                    <Link href="https://www.rolls-royce.com/about/our-research.aspx">
                      <span>Our Research</span>
                    </Link>
                    <ul id="new-secondnav-section-our-research-level3">
                      <li
                        id="new-secondnav-nav-advanced-manufacturing-research-centres-level3"
                        className="level3 first"
                      >
                        <Link href="https://www.rolls-royce.com/about/our-research/advanced-manufacturing-research-centres.aspx">
                          <span>Advanced Manufacturing Research Centres</span>
                        </Link>
                      </li>
                      <li id="new-secondnav-nav-research-and-university-level3" className="level3">
                        <Link href="https://www.rolls-royce.com/about/our-research/research-and-university.aspx">
                          <span>Research and University Technology Centres</span>
                        </Link>
                      </li>
                      <li
                        id="new-secondnav-nav-cybertech-research-network-level3"
                        className="level3 last"
                      >
                        <Link href="https://www.rolls-royce.com/about/our-research/cybertech-research-network.aspx">
                          <span>Rolls-Royce Cybersecurity Technology Research Network</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li id="new-secondnav-nav-our-businesses-level2" className="level2">
                    <Link href="https://www.rolls-royce.com/about/our-businesses.aspx">
                      <span>Our Businesses</span>
                    </Link>
                  </li>
                  <li id="new-secondnav-nav-our-history-level2" className="level2">
                    <Link href="https://www.rolls-royce.com/about/our-history.aspx">
                      <span>Our History</span>
                    </Link>
                  </li>
                  <li
                    id="new-secondnav-nav-heritage-trust-level2"
                    className="level2 haschildren last"
                  >
                    <Link href="https://www.rolls-royce.com/about/heritage-trust.aspx">
                      <span>Heritage Trust</span>
                    </Link>
                    <ul id="new-secondnav-section-heritage-trust-level3">
                      <li id="new-secondnav-nav-visit-level3" className="level3 haschildren first">
                        <Link href="https://www.rolls-royce.com/about/heritage-trust/visit.aspx">
                          <span>Visit</span>
                        </Link>
                        <ul id="new-secondnav-section-visit-level4">
                          <li
                            id="new-secondnav-nav-our-heritage-centres-level4"
                            className="level4 first"
                          >
                            <Link href="https://www.rolls-royce.com/about/heritage-trust/visit/our-heritage-centres.aspx">
                              <span>Our Heritage Centres</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-bristol-branch-level4" className="level4">
                            <Link href="https://www.rolls-royce.com/about/heritage-trust/visit/bristol-branch.aspx">
                              <span>Heritage Trust – Bristol</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-coventry-and-ansty-level4" className="level4">
                            <Link href="https://www.rolls-royce.com/about/heritage-trust/visit/coventry-and-ansty.aspx">
                              <span>Heritage Trust – Coventry and Ansty</span>
                            </Link>
                          </li>
                          <li
                            id="new-secondnav-nav-derby-and-hucknall-branch-level4"
                            className="level4"
                          >
                            <Link href="https://www.rolls-royce.com/about/heritage-trust/visit/derby-and-hucknall-branch.aspx">
                              <span>Heritage Trust – Derby and Hucknall</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-indianapolis-branch-level4" className="level4">
                            <Link href="https://www.rolls-royce.com/about/heritage-trust/visit/indianapolis-branch.aspx">
                              <span>Heritage Trust – Indianapolis</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-scottish-branch-level4" className="level4 last">
                            <Link href="https://www.rolls-royce.com/about/heritage-trust/visit/scottish-branch.aspx">
                              <span>Heritage Trust – Scottish branch</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li id="new-secondnav-nav-become-a-member-level3" className="level3">
                        <Link href="https://www.rolls-royce.com/about/heritage-trust/become-a-member.aspx">
                          <span>Become a member</span>
                        </Link>
                      </li>
                      <li id="new-secondnav-nav-volunteer-level3" className="level3">
                        <Link href="https://www.rolls-royce.com/about/heritage-trust/volunteer.aspx">
                          <span>Volunteer</span>
                        </Link>
                      </li>
                      <li id="new-secondnav-nav-learn-and-explore-level3" className="level3">
                        <Link href="https://www.rolls-royce.com/about/heritage-trust/learn-and-explore.aspx">
                          <span>Learn and explore</span>
                        </Link>
                      </li>
                      <li id="new-secondnav-nav-whats-on-level3" className="level3">
                        <Link href="https://www.rolls-royce.com/about/heritage-trust/whats-on.aspx">
                          <span>What’s on</span>
                        </Link>
                      </li>
                      <li id="new-secondnav-nav-contact-the-trust-level3" className="level3">
                        <Link href="https://www.rolls-royce.com/about/heritage-trust/contact-the-trust.aspx">
                          <span>Contact the Trust</span>
                        </Link>
                      </li>
                      <li
                        id="new-secondnav-nav-members-section-level3"
                        className="level3 haschildren last"
                      >
                        <Link href="https://www.rolls-royce.com/about/heritage-trust/members-section.aspx">
                          <span>Member&quot;s Section</span>
                        </Link>
                        <ul id="new-secondnav-section-members-section-level4">
                          <li id="new-secondnav-nav-the-magazine-level4" className="level4 first">
                            <Link href="https://www.rolls-royce.com/about/heritage-trust/members-section/the-magazine.aspx">
                              <span>The Magazine</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-news-and-insights-level4" className="level4">
                            <Link href="https://www.rolls-royce.com/about/heritage-trust/members-section/news-and-insights.aspx">
                              <span>News & Insights</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-members-events-level4" className="level4">
                            <Link href="https://www.rolls-royce.com/about/heritage-trust/members-section/members-events.aspx">
                              <span>Members’ events</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-r-rht-documents-level4" className="level4 last">
                            <Link href="https://www.rolls-royce.com/about/heritage-trust/members-section/r-rht-documents.aspx">
                              <span>R-RHT Documents</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li id="new-secondnav-nav-contact-us-level1" className="level1 haschildren">
                <Link href="https://www.rolls-royce.com/contact-us.aspx">
                  <span>Contact us</span>
                </Link>
                <ul id="new-secondnav-section-contact-us-level2">
                  <li
                    id="new-secondnav-nav-inventors-and-technology-licensing-level2"
                    className="level2 first"
                  >
                    <Link href="https://www.rolls-royce.com/contact-us/inventors-and-technology-licensing.aspx">
                      <span>Inventors & technology licensing</span>
                    </Link>
                  </li>
                  <li id="new-secondnav-nav-defence-aerospace-level2" className="level2">
                    <Link href="https://www.rolls-royce.com/contact-us/defence-aerospace.aspx">
                      <span>Defence aerospace business team</span>
                    </Link>
                  </li>
                  <li id="new-secondnav-nav-defence-parts-enquiries-level2" className="level2">
                    <Link href="https://www.rolls-royce.com/contact-us/defence-parts-enquiries.aspx">
                      <span>Defence team</span>
                    </Link>
                  </li>
                  <li
                    id="new-secondnav-nav-corporate-sustainability-team-level2"
                    className="level2"
                  >
                    <Link href="https://www.rolls-royce.com/contact-us/corporate-sustainability-team.aspx">
                      <span>Corporate sustainability team</span>
                    </Link>
                  </li>
                  <li id="new-secondnav-nav-heritage-team-level2" className="level2">
                    <Link href="https://www.rolls-royce.com/contact-us/heritage-team.aspx">
                      <span>Heritage team</span>
                    </Link>
                  </li>
                  <li id="new-secondnav-nav-helicopters-team-level2" className="level2">
                    <Link href="https://www.rolls-royce.com/contact-us/helicopters-team.aspx">
                      <span>Helicopters team</span>
                    </Link>
                  </li>
                  <li id="new-secondnav-nav-pensions-team-level2" className="level2 last">
                    <Link href="https://www.rolls-royce.com/contact-us/pensions-team.aspx">
                      <span>Pensions team</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li id="new-secondnav-nav-country-sites-level1" className="level1 haschildren">
                <Link href="https://www.rolls-royce.com/country-sites/china-old-site.aspx">
                  <span>Country sites</span>
                </Link>
                <ul id="new-secondnav-section-country-sites-level2">
                  <li id="new-secondnav-nav-brasil-level2" className="level2 haschildren first">
                    <Link href="https://www.rolls-royce.com/country-sites/brasil.aspx">
                      <span>Como nos comportamos importa</span>
                    </Link>
                    <ul id="new-secondnav-section-brasil-level3">
                      <li id="new-secondnav-nav-home-level3" className="level3 first">
                        <Link href="https://www.rolls-royce.com/country-sites/brasil.aspx">
                          <span>Home</span>
                        </Link>
                      </li>
                      <li
                        id="new-secondnav-nav-rolls-royce-no-brasil-level3"
                        className="level3 last"
                      >
                        <Link href="https://www.rolls-royce.com/country-sites/brasil/rolls-royce-no-brasil.aspx">
                          <span>Rolls-Royce no Brasil</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li id="new-secondnav-nav-brazil-en-level2" className="level2">
                    <Link href="https://www.rolls-royce.com/country-sites/brazil-en.aspx">
                      <span>Rolls-Royce no Brasil</span>
                    </Link>
                  </li>
                  <li id="new-secondnav-nav-japan-level2" className="level2 haschildren">
                    <Link href="https://www.rolls-royce.com/country-sites/japan.aspx">
                      <span>日本</span>
                    </Link>
                    <ul id="new-secondnav-section-japan-level3">
                      <li id="new-secondnav-nav-home-level3" className="level3 first">
                        <Link href="https://www.rolls-royce.com/country-sites/japan.aspx">
                          <span>ホーム</span>
                        </Link>
                      </li>
                      <li id="new-secondnav-nav-about-level3" className="level3 haschildren">
                        <Link href="https://www.rolls-royce.com/country-sites/japan/about.aspx">
                          <span>ロールス･ロイスについて</span>
                        </Link>
                        <ul id="new-secondnav-section-about-level4">
                          <li id="new-secondnav-nav-about-level4" className="level4 first">
                            <Link href="https://www.rolls-royce.com/country-sites/japan/about.aspx">
                              <span>ロールス・ロイスについて</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-sustainability-level4" className="level4">
                            <Link href="https://www.rolls-royce.com/country-sites/japan/about/sustainability.aspx">
                              <span>サステナビリティ</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-business-strategy-level4" className="level4">
                            <Link href="https://www.rolls-royce.com/country-sites/japan/about/business-strategy.aspx">
                              <span>ビジネス戦略</span>
                            </Link>
                          </li>
                          <li
                            id="new-secondnav-nav-60-years-in-japan-level4"
                            className="level4 last"
                          >
                            <Link href="https://www.rolls-royce.com/country-sites/japan/about/60-years-in-japan.aspx">
                              <span>日本で60周年</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="new-secondnav-nav-partners-in-success-level3"
                        className="level3 haschildren"
                      >
                        <Link href="https://www.rolls-royce.com/country-sites/japan/partners-in-success/made-in-japan.aspx">
                          <span>日本のパートナー</span>
                        </Link>
                        <ul id="new-secondnav-section-partners-in-success-level4">
                          <li id="new-secondnav-nav-made-in-japan-level4" className="level4 first">
                            <Link href="https://www.rolls-royce.com/country-sites/japan/partners-in-success/made-in-japan.aspx">
                              <span>日本企業との協業</span>
                            </Link>
                          </li>
                          <li
                            id="new-secondnav-nav-research-and-development-level4"
                            className="level4 last"
                          >
                            <Link href="https://www.rolls-royce.com/country-sites/japan/partners-in-success/research-and-development.aspx">
                              <span>研究開発</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="new-secondnav-nav-products-and-services-level3"
                        className="level3 haschildren"
                      >
                        <Link href="https://www.rolls-royce.com/country-sites/japan/products-and-services/civil-aerospace.aspx">
                          <span>製品とサービス</span>
                        </Link>
                        <ul id="new-secondnav-section-products-and-services-level4">
                          <li
                            id="new-secondnav-nav-civil-aerospace-level4"
                            className="level4 first"
                          >
                            <Link href="https://www.rolls-royce.com/country-sites/japan/products-and-services/civil-aerospace.aspx">
                              <span>民間航空</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-defense-aerospace-level4" className="level4">
                            <Link href="https://www.rolls-royce.com/country-sites/japan/products-and-services/defense-aerospace.aspx">
                              <span>防衛</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-power-systems-level4" className="level4">
                            <Link href="https://www.rolls-royce.com/country-sites/japan/products-and-services/power-systems.aspx">
                              <span>パワーシステムズ</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-electrical-level4" className="level4">
                            <Link href="https://www.rolls-royce.com/country-sites/japan/products-and-services/electrical.aspx">
                              <span>エレクトリカル</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-smr-level4" className="level4 last">
                            <Link href="https://www.rolls-royce.com/country-sites/japan/products-and-services/smr.aspx">
                              <span>SMR</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li id="new-secondnav-nav-discover-level3" className="level3">
                        <Link href="https://www.rolls-royce.com/country-sites/japan/discover.aspx">
                          <span>ディスカバー</span>
                        </Link>
                      </li>
                      <li id="new-secondnav-nav-contacts-level3" className="level3">
                        <Link href="https://www.rolls-royce.com/country-sites/japan/contacts.aspx">
                          <span>お問い合わせ</span>
                        </Link>
                      </li>
                      <li id="new-secondnav-nav-careers-level3" className="level3 last">
                        <Link
                          target="_blank"
                          href="https://careers.rolls-royce.com/rest-of-the-world#/"
                        >
                          <span>採用情報</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="new-secondnav-nav-china-exhibition-chinese-level2"
                    className="level2 haschildren"
                  >
                    <Link href="https://www.rolls-royce.com/country-sites/china-exhibition-chinese.aspx">
                      <span>罗尔斯-罗伊斯 – 推进飞行新方式</span>
                    </Link>
                    <ul id="new-secondnav-section-china-exhibition-chinese-level3">
                      <li id="new-secondnav-nav-home-level3" className="level3 first last">
                        <Link href="https://www.rolls-royce.com/country-sites/china-exhibition-chinese/home/modules.aspx">
                          <span>country-landing-navigation</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="new-secondnav-nav-china-exhibition-english-level2"
                    className="level2 haschildren"
                  >
                    <Link href="https://www.rolls-royce.com/country-sites/china-exhibition-english.aspx">
                      <span>Rolls-Royce - Powering New Ways to Fly</span>
                    </Link>
                    <ul id="new-secondnav-section-china-exhibition-english-level3">
                      <li id="new-secondnav-nav-home-level3" className="level3 first last">
                        <Link href="https://www.rolls-royce.com/country-sites/china-exhibition-english/home/modules.aspx">
                          <span>country-landing-navigation</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li id="new-secondnav-nav-hungary-en-level2" className="level2 haschildren">
                    <Link href="https://www.rolls-royce.com/country-sites/hungary-en.aspx">
                      <span>Rolls-Royce Hungary</span>
                    </Link>
                    <ul id="new-secondnav-section-hungary-en-level3">
                      <li id="new-secondnav-nav-home-level3" className="level3 first">
                        <Link href="https://www.rolls-royce.com/country-sites/hungary-en.aspx">
                          <span>Home</span>
                        </Link>
                      </li>
                      <li id="new-secondnav-nav-careers-level3" className="level3">
                        <Link href="https://www.rolls-royce.com/country-sites/hungary-en/careers.aspx">
                          <span>Careers</span>
                        </Link>
                      </li>
                      <li id="new-secondnav-nav-discover-level3" className="level3 last">
                        <Link href="https://www.rolls-royce.com/country-sites/hungary-en/discover.aspx">
                          <span>Discover</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li id="new-secondnav-nav-hungary-hu-level2" className="level2 haschildren">
                    <Link href="https://www.rolls-royce.com/country-sites/hungary-hu.aspx">
                      <span>Rolls-Royce Magyarország</span>
                    </Link>
                    <ul id="new-secondnav-section-hungary-hu-level3">
                      <li id="new-secondnav-nav-home-level3" className="level3 first">
                        <Link href="https://www.rolls-royce.com/country-sites/hungary-hu.aspx">
                          <span>Főoldal</span>
                        </Link>
                      </li>
                      <li id="new-secondnav-nav-karrier-level3" className="level3">
                        <Link href="https://www.rolls-royce.com/country-sites/hungary-hu/karrier.aspx">
                          <span>Karrier</span>
                        </Link>
                      </li>
                      <li id="new-secondnav-nav-torteneteink-level3" className="level3">
                        <Link href="https://www.rolls-royce.com/country-sites/hungary-hu/torteneteink.aspx">
                          <span>Történeteink</span>
                        </Link>
                      </li>
                      <li
                        id="new-secondnav-nav-tamogatott-kezdemenyezeseka-level3"
                        className="level3 last"
                      >
                        <Link href="https://www.rolls-royce.com/country-sites/hungary-hu/tamogatott-kezdemenyezeseka.aspx">
                          <span>Támogatott kezdeményezések</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li id="new-secondnav-nav-northamerica-level2" className="level2 haschildren">
                    <Link href="https://www.rolls-royce.com/country-sites/northamerica.aspx">
                      <span>Rolls-Royce North America</span>
                    </Link>
                    <ul id="new-secondnav-section-northamerica-level3">
                      <li id="new-secondnav-nav-home-level3" className="level3 first last">
                        <Link href="https://www.rolls-royce.com/country-sites/northamerica.aspx">
                          <span>Home</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li id="new-secondnav-nav-deutschland-level2" className="level2 haschildren">
                    <Link href="https://www.rolls-royce.com/country-sites/deutschland.aspx">
                      <span>Deutschland</span>
                    </Link>
                    <ul id="new-secondnav-section-deutschland-level3">
                      <li id="new-secondnav-nav-home-level3" className="level3 first">
                        <Link href="https://www.rolls-royce.com/country-sites/deutschland.aspx">
                          <span>Home</span>
                        </Link>
                      </li>
                      <li id="new-secondnav-nav-uberblick-level3" className="level3">
                        <Link href="https://www.rolls-royce.com/country-sites/deutschland/uberblick.aspx">
                          <span>Überblick</span>
                        </Link>
                      </li>
                      <li
                        id="new-secondnav-nav-nachrichten-und-geschichten-level3"
                        className="level3 haschildren"
                      >
                        <Link href="https://www.rolls-royce.com/country-sites/deutschland/nachrichten-und-geschichten/nachrichten.aspx">
                          <span>Nachrichten und Geschichten</span>
                        </Link>
                        <ul id="new-secondnav-section-nachrichten-und-geschichten-level4">
                          <li id="new-secondnav-nav-nachrichten-level4" className="level4 first">
                            <Link href="https://www.rolls-royce.com/country-sites/deutschland/nachrichten-und-geschichten/nachrichten.aspx">
                              <span>Nachrichten</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-geschichten-level4" className="level4 last">
                            <Link href="https://www.rolls-royce.com/country-sites/deutschland/nachrichten-und-geschichten/geschichten.aspx">
                              <span>Geschichten</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li id="new-secondnav-nav-karriere-level3" className="level3 haschildren">
                        <Link href="https://www.rolls-royce.com/country-sites/deutschland/karriere.aspx">
                          <span>Karriere</span>
                        </Link>
                        <ul id="new-secondnav-section-karriere-level4">
                          <li
                            id="new-secondnav-nav-werde-teil-des-teams-in-dahlewitz-bei-berlin-level4"
                            className="level4 first"
                          >
                            <Link href="https://www.rolls-royce.com/country-sites/deutschland/karriere/werde-teil-des-teams-in-dahlewitz-bei-berlin.aspx">
                              <span>Werde Teil des Teams in Dahlewitz bei Berlin</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-talent-community-level4" className="level4">
                            <Link href="https://www.rolls-royce.com/country-sites/deutschland/karriere/talent-community.aspx">
                              <span>Talent Community</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-ausbildung-level4" className="level4">
                            <Link href="https://www.rolls-royce.com/country-sites/deutschland/karriere/ausbildung.aspx">
                              <span>Ausbildung</span>
                            </Link>
                          </li>
                          <li
                            id="new-secondnav-nav-direkteinstieg-level4"
                            className="level4 haschildren"
                          >
                            <Link href="https://www.rolls-royce.com/country-sites/deutschland/karriere/direkteinstieg.aspx">
                              <span>Direkteinstieg </span>
                            </Link>
                            <ul id="new-secondnav-section-direkteinstieg-level5">
                              <li
                                id="new-secondnav-nav-direkteinstieg-oberursel-level5"
                                className="level5 first"
                              >
                                <Link href="https://www.rolls-royce.com/country-sites/deutschland/karriere/direkteinstieg/direkteinstieg-oberursel.aspx">
                                  <span>Direkteinstieg </span>
                                </Link>
                              </li>
                              <li
                                id="new-secondnav-nav-recruitment_campaign_oberursel-level5"
                                className="level5 last"
                              >
                                <Link href="https://www.rolls-royce.com/country-sites/deutschland/karriere/direkteinstieg/recruitment_campaign_oberursel.aspx">
                                  <span>Direkteinstieg </span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="new-secondnav-nav-praktikanten-und-werkstudenten-level4"
                            className="level4"
                          >
                            <Link href="https://www.rolls-royce.com/country-sites/deutschland/karriere/praktikanten-und-werkstudenten.aspx">
                              <span>Praktikanten und Werkstudenten</span>
                            </Link>
                          </li>
                          <li
                            id="new-secondnav-nav-germany-karriere-electrical-level4"
                            className="level4"
                          >
                            <Link href="https://www.rolls-royce.com/country-sites/deutschland/karriere/germany-karriere-electrical.aspx">
                              <span>Karriere bei Rolls-Royce Electrical</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-schuelerpraktikum-level4" className="level4">
                            <Link href="https://www.rolls-royce.com/country-sites/deutschland/karriere/schuelerpraktikum.aspx">
                              <span>Schülerpraktika</span>
                            </Link>
                          </li>
                          <li
                            id="new-secondnav-nav-germany-tag-der-ausbildung-level4"
                            className="level4"
                          >
                            <Link href="https://www.rolls-royce.com/country-sites/deutschland/karriere/germany-tag-der-ausbildung.aspx">
                              <span>Tag der Ausbildung</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-termine-level4" className="level4 last">
                            <Link href="https://www.rolls-royce.com/country-sites/deutschland/karriere/termine.aspx">
                              <span>Termine</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li id="new-secondnav-nav-kontakt-level3" className="level3 last">
                        <Link href="https://www.rolls-royce.com/country-sites/deutschland/kontakt.aspx">
                          <span>Kontakt </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li id="new-secondnav-nav-india-level2" className="level2 haschildren">
                    <Link href="https://www.rolls-royce.com/country-sites/india.aspx">
                      <span>India</span>
                    </Link>
                    <ul id="new-secondnav-section-india-level3">
                      <li id="new-secondnav-nav-home-level3" className="level3 first">
                        <Link href="https://www.rolls-royce.com/country-sites/india.aspx">
                          <span>Home</span>
                        </Link>
                      </li>
                      <li
                        id="new-secondnav-nav-partners-in-progress-level3"
                        className="level3 haschildren"
                      >
                        <Link href="https://www.rolls-royce.com/country-sites/india/partners-in-progress.aspx">
                          <span>Partners in progress</span>
                        </Link>
                        <ul id="new-secondnav-section-partners-in-progress-level4">
                          <li id="new-secondnav-nav-our-people-level4" className="level4 first">
                            <Link href="https://www.rolls-royce.com/country-sites/india/partners-in-progress/our-people.aspx">
                              <span>Our people</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-engineering-level4" className="level4">
                            <Link href="https://www.rolls-royce.com/country-sites/india/partners-in-progress/engineering.aspx">
                              <span>Engineering</span>
                            </Link>
                          </li>
                          <li
                            id="new-secondnav-nav-manufacturing-and-supply-chain-level4"
                            className="level4 last"
                          >
                            <Link href="https://www.rolls-royce.com/country-sites/india/partners-in-progress/manufacturing-and-supply-chain.aspx">
                              <span>Manufacturing & supply chain</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="new-secondnav-nav-products-and-services-level3"
                        className="level3 haschildren"
                      >
                        <Link href="https://www.rolls-royce.com/country-sites/india/products-and-services/civil-aerospace.aspx">
                          <span>Products & Services</span>
                        </Link>
                        <ul id="new-secondnav-section-products-and-services-level4">
                          <li
                            id="new-secondnav-nav-civil-aerospace-level4"
                            className="level4 first"
                          >
                            <Link href="https://www.rolls-royce.com/country-sites/india/products-and-services/civil-aerospace.aspx">
                              <span>Civil Aerospace</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-defence-level4" className="level4">
                            <Link href="https://www.rolls-royce.com/country-sites/india/products-and-services/defence.aspx">
                              <span>Defence</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-power-systems-level4" className="level4 last">
                            <Link href="https://www.rolls-royce.com/country-sites/india/products-and-services/power-systems.aspx">
                              <span>Power Systems</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="new-secondnav-nav-sustainability-level3"
                        className="level3 haschildren"
                      >
                        <Link href="https://www.rolls-royce.com/country-sites/india/sustainability/our-approach.aspx">
                          <span>Sustainability</span>
                        </Link>
                        <ul id="new-secondnav-section-sustainability-level4">
                          <li id="new-secondnav-nav-our-approach-level4" className="level4 first">
                            <Link href="https://www.rolls-royce.com/country-sites/india/sustainability/our-approach.aspx">
                              <span>Our approach</span>
                            </Link>
                          </li>
                          <li
                            id="new-secondnav-nav-our-community-programmes-level4"
                            className="level4 last"
                          >
                            <Link href="https://www.rolls-royce.com/country-sites/india/sustainability/our-community-programmes.aspx">
                              <span>Our community programmes</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li id="new-secondnav-nav-contacts-level3" className="level3">
                        <Link href="https://www.rolls-royce.com/country-sites/india/contacts.aspx">
                          <span>Contacts</span>
                        </Link>
                      </li>
                      <li id="new-secondnav-nav-careers-level3" className="level3 last">
                        <Link
                          target="_blank"
                          href="https://careers.rolls-royce.com/rest-of-the-world?country=india#/"
                        >
                          <span>Careers</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li id="new-secondnav-nav-china-level2" className="level2 haschildren">
                    <Link href="https://www.rolls-royce.com/country-sites/china.aspx">
                      <span>首页</span>
                    </Link>
                    <ul id="new-secondnav-section-china-level3">
                      <li id="new-secondnav-nav-home-level3" className="level3 first">
                        <Link href="https://www.rolls-royce.com/country-sites/china.aspx">
                          <span>首页</span>
                        </Link>
                      </li>
                      <li id="new-secondnav-nav-rolls-royce-in-china-level3" className="level3">
                        <Link href="https://www.rolls-royce.com/country-sites/china/rolls-royce-in-china.aspx">
                          <span>罗罗在中国​</span>
                        </Link>
                      </li>
                      <li id="new-secondnav-nav-civil-level3" className="level3">
                        <Link href="https://www.rolls-royce.com/country-sites/china/civil.aspx">
                          <span>民用航空​</span>
                        </Link>
                      </li>
                      <li id="new-secondnav-nav-power-system-level3" className="level3">
                        <Link target="_blank" href="https://mtu-solutions.com/">
                          <span>动力系统</span>
                        </Link>
                      </li>
                      <li id="new-secondnav-nav-electric-flight-level3" className="level3">
                        <Link href="https://www.rolls-royce.com/country-sites/china-exhibition-chinese.aspx">
                          <span>电动飞行</span>
                        </Link>
                      </li>
                      <li id="new-secondnav-nav-careers-level3" className="level3 last">
                        <Link href="https://www.rolls-royce.com/country-sites/china/careers.aspx">
                          <span>加入我们</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li id="new-secondnav-nav-korea-level2" className="level2 haschildren">
                    <Link href="https://www.rolls-royce.com/country-sites/korea.aspx">
                      <span>대한민국 </span>
                    </Link>
                    <ul id="new-secondnav-section-korea-level3">
                      <li id="new-secondnav-nav-home-level3" className="level3 first">
                        <Link href="https://www.rolls-royce.com/country-sites/korea.aspx">
                          <span>홈</span>
                        </Link>
                      </li>
                      <li id="new-secondnav-nav-about-us-level3" className="level3 haschildren">
                        <Link href="https://www.rolls-royce.com/country-sites/korea/about-us.aspx">
                          <span>롤스로이스 소개</span>
                        </Link>
                        <ul id="new-secondnav-section-about-us-level4">
                          <li id="new-secondnav-nav-our-research-level4" className="level4 first">
                            <Link href="https://www.rolls-royce.com/country-sites/korea/about-us/our-research.aspx">
                              <span>연구개발</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-our-history-level4" className="level4">
                            <Link href="https://www.rolls-royce.com/country-sites/korea/about-us/our-history.aspx">
                              <span>롤스로이스 역사</span>
                            </Link>
                          </li>
                          <li
                            id="new-secondnav-nav-where-we-operate-level4"
                            className="level4 last"
                          >
                            <Link href="https://www.rolls-royce.com/country-sites/korea/about-us/where-we-operate.aspx">
                              <span>세계속의 롤스로이스</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li id="new-secondnav-nav-about-rolls-royce-korea-level3" className="level3">
                        <Link href="https://www.rolls-royce.com/country-sites/korea/about-rolls-royce-korea.aspx">
                          <span>롤스로이스 코리아</span>
                        </Link>
                      </li>
                      <li id="new-secondnav-nav-innovation-level3" className="level3">
                        <Link href="https://www.rolls-royce.com/country-sites/korea/innovation.aspx">
                          <span>이노베이션</span>
                        </Link>
                      </li>
                      <li id="new-secondnav-nav-naval-level3" className="level3 haschildren">
                        <Link href="https://www.rolls-royce.com/country-sites/korea/naval.aspx">
                          <span>해군 분야</span>
                        </Link>
                        <ul id="new-secondnav-section-naval-level4">
                          <li
                            id="new-secondnav-nav-gas-turbines-level4"
                            className="level4 haschildren first"
                          >
                            <Link href="https://www.rolls-royce.com/country-sites/korea/naval/gas-turbines.aspx">
                              <span>함정용가스터빈</span>
                            </Link>
                            <ul id="new-secondnav-section-gas-turbines-level5">
                              <li
                                id="new-secondnav-nav-mt30-marine-gas-turbine-level5"
                                className="level5 first"
                              >
                                <Link href="https://www.rolls-royce.com/country-sites/korea/naval/gas-turbines/mt30-marine-gas-turbine.aspx">
                                  <span>MT30 함정용 가스터빈</span>
                                </Link>
                              </li>
                              <li
                                id="new-secondnav-nav-mt7-marine-gas-turbine-level5"
                                className="level5"
                              >
                                <Link href="https://www.rolls-royce.com/country-sites/korea/naval/gas-turbines/mt7-marine-gas-turbine.aspx">
                                  <span>MT7 함정용 가스터빈</span>
                                </Link>
                              </li>
                              <li
                                id="new-secondnav-nav-ag9160-generator-set-level5"
                                className="level5"
                              >
                                <Link href="https://www.rolls-royce.com/country-sites/korea/naval/gas-turbines/ag9160-generator-set.aspx">
                                  <span>AG9160 발전기</span>
                                </Link>
                              </li>
                              <li
                                id="new-secondnav-nav-ag9140-generator-set-level5"
                                className="level5 last"
                              >
                                <Link href="https://www.rolls-royce.com/country-sites/korea/naval/gas-turbines/ag9140-generator-set.aspx">
                                  <span>AG9140 발전기</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li id="new-secondnav-nav-power-systems-level4" className="level4">
                            <Link href="https://www.rolls-royce.com/products-and-services/power-systems.aspx">
                              <span>파워시스템</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-propulsion-level4" className="level4">
                            <Link href="https://www.rolls-royce.com/country-sites/korea/naval/propulsion.aspx">
                              <span>추진시스템</span>
                            </Link>
                          </li>
                          <li
                            id="new-secondnav-nav-naval-handling-systems-level4"
                            className="level4"
                          >
                            <Link href="https://www.rolls-royce.com/country-sites/korea/naval/naval-handling-systems.aspx">
                              <span>함정 진회수 시스템</span>
                            </Link>
                          </li>
                          <li
                            id="new-secondnav-nav-electrical-automation-and-control-level4"
                            className="level4 last"
                          >
                            <Link href="https://www.rolls-royce.com/country-sites/korea/naval/electrical-automation-and-control.aspx">
                              <span>전기, 자동화 및 제어</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li id="new-secondnav-nav-electrification-level3" className="level3">
                        <Link href="https://www.rolls-royce.com/country-sites/korea/electrification.aspx">
                          <span>전기화 분야</span>
                        </Link>
                      </li>
                      <li id="new-secondnav-nav-our-stories-level3" className="level3">
                        <Link href="https://www.rolls-royce.com/country-sites/korea/our-stories.aspx">
                          <span>미디어</span>
                        </Link>
                      </li>
                      <li id="new-secondnav-nav-contacts-level3" className="level3 last">
                        <Link href="https://www.rolls-royce.com/country-sites/korea/contacts.aspx">
                          <span>연락처</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li id="new-secondnav-nav-sea-level2" className="level2 haschildren">
                    <Link href="https://www.rolls-royce.com/country-sites/sea.aspx">
                      <span>South East Asia</span>
                    </Link>
                    <ul id="new-secondnav-section-sea-level3">
                      <li id="new-secondnav-nav-our-stories-level3" className="level3 first">
                        <Link href="https://www.rolls-royce.com/country-sites/sea/our-stories.aspx">
                          <span>Our stories</span>
                        </Link>
                      </li>
                      <li
                        id="new-secondnav-nav-our-locations-level3"
                        className="level3 haschildren"
                      >
                        <Link href="https://www.rolls-royce.com/country-sites/sea/our-locations/singapore.aspx">
                          <span>Our locations</span>
                        </Link>
                        <ul id="new-secondnav-section-our-locations-level4">
                          <li id="new-secondnav-nav-singapore-level4" className="level4 first">
                            <Link href="https://www.rolls-royce.com/country-sites/sea/our-locations/singapore.aspx">
                              <span>Singapore</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-south-east-asia-level4" className="level4 last">
                            <Link href="https://www.rolls-royce.com/country-sites/sea/our-locations/south-east-asia.aspx">
                              <span>The wider South East Asia</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li id="new-secondnav-nav-community-level3" className="level3">
                        <Link href="https://www.rolls-royce.com/country-sites/sea/community.aspx">
                          <span>Community</span>
                        </Link>
                      </li>
                      <li id="new-secondnav-nav-careers-level3" className="level3 last">
                        <Link
                          target="_blank"
                          href="https://careers.rolls-royce.com/rest-of-the-world#/"
                        >
                          <span>Careers</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li id="new-secondnav-nav-arabic-level2" className="level2 haschildren last">
                    <Link href="https://www.rolls-royce.com/country-sites/arabic.aspx">
                      <span>Arabic</span>
                    </Link>
                    <ul id="new-secondnav-section-arabic-level3">
                      <li id="new-secondnav-nav-home-level3" className="level3 first">
                        <Link href="https://www.rolls-royce.com/country-sites/arabic.aspx">
                          <span>عن الشركة</span>
                        </Link>
                      </li>
                      <li
                        id="new-secondnav-nav-products-and-services-level3"
                        className="level3 haschildren"
                      >
                        <Link href="https://www.rolls-royce.com/country-sites/arabic/products-and-services.aspx">
                          <span>الحلول والخدمات</span>
                        </Link>
                        <ul id="new-secondnav-section-products-and-services-level4">
                          <li
                            id="new-secondnav-nav-civil-aviation-sector-level4"
                            className="level4 first"
                          >
                            <Link href="https://www.rolls-royce.com/country-sites/arabic/products-and-services/civil-aviation-sector.aspx">
                              <span>قطاع الطيران المدني</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-defense-level4" className="level4">
                            <Link href="https://www.rolls-royce.com/country-sites/arabic/products-and-services/defense.aspx">
                              <span>الدفاع</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-energy-systems-level4" className="level4">
                            <Link href="https://www.rolls-royce.com/country-sites/arabic/products-and-services/energy-systems.aspx">
                              <span>أنظمة الطاقة</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-electricity-level4" className="level4 last">
                            <Link href="https://www.rolls-royce.com/country-sites/arabic/products-and-services/electricity.aspx">
                              <span>الكهرباء</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li id="new-secondnav-nav-innovation-level3" className="level3 haschildren">
                        <Link href="https://www.rolls-royce.com/country-sites/arabic/innovation.aspx">
                          <span>الابتكارات</span>
                        </Link>
                        <ul id="new-secondnav-section-innovation-level4">
                          <li
                            id="new-secondnav-nav-rr-space-technology-level4"
                            className="level4 first"
                          >
                            <Link href="https://www.rolls-royce.com/country-sites/arabic/innovation/rr-space-technology.aspx">
                              <span>رولز-رويس التكنولوجيا والفضاء</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-rr-smr-ltd-level4" className="level4">
                            <Link href="https://www.rolls-royce.com/country-sites/arabic/innovation/rr-smr-ltd.aspx">
                              <span>رولز-رويس إس إم آر</span>
                            </Link>
                          </li>
                          <li id="new-secondnav-nav-r2-data-labs-level4" className="level4 last">
                            <Link href="https://www.rolls-royce.com/country-sites/arabic/innovation/r2-data-labs.aspx">
                              <span>معامل بيانات آر2</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li id="new-secondnav-nav-net-zero-level3" className="level3">
                        <Link href="https://www.rolls-royce.com/country-sites/arabic/net-zero.aspx">
                          <span>الاستدامة</span>
                        </Link>
                      </li>
                      <li id="new-secondnav-nav-contact-us-level3" className="level3 last">
                        <Link href="https://www.rolls-royce.com/country-sites/arabic/contact-us.aspx">
                          <span>تواصلو معنا</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li id="new-secondnav-nav-sustainability-level1" className="level1 haschildren">
                <Link href="https://www.rolls-royce.com/sustainability.aspx">
                  <span>Sustainability</span>
                </Link>
                <ul id="new-secondnav-section-sustainability-level2">
                  <li
                    id="new-secondnav-nav-our-approach-to-decarbonisation-level2"
                    className="level2 haschildren first"
                  >
                    <Link href="https://www.rolls-royce.com/sustainability/our-approach-to-decarbonisation.aspx">
                      <span>Our approach to decarbonisation</span>
                    </Link>
                    <ul id="new-secondnav-section-our-approach-to-decarbonisation-level3">
                      <li
                        id="new-secondnav-nav-making-rolls-royce-a-net-zero-carbon-company-level3"
                        className="level3 haschildren first"
                      >
                        <Link href="https://www.rolls-royce.com/sustainability/our-approach-to-decarbonisation/making-rolls-royce-a-net-zero-carbon-company.aspx">
                          <span>Becoming a net zero carbon company</span>
                        </Link>
                        <ul id="new-secondnav-section-making-rolls-royce-a-net-zero-carbon-company-level4">
                          <li
                            id="new-secondnav-nav-our-emission-footprint-level4"
                            className="level4 first last"
                          >
                            <Link href="https://www.rolls-royce.com/sustainability/our-approach-to-decarbonisation/making-rolls-royce-a-net-zero-carbon-company/our-emission-footprint.aspx">
                              <span>Our emissions footprint</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="new-secondnav-nav-decarbonising-complex-critical-systems-level3"
                        className="level3"
                      >
                        <Link href="https://www.rolls-royce.com/sustainability/our-approach-to-decarbonisation/decarbonising-complex-critical-systems.aspx">
                          <span>Decarbonising complex and critical systems</span>
                        </Link>
                      </li>
                      <li
                        id="new-secondnav-nav-creating-an-enabling-environment-level3"
                        className="level3"
                      >
                        <Link href="https://www.rolls-royce.com/sustainability/our-approach-to-decarbonisation/creating-an-enabling-environment.aspx">
                          <span>Creating an enabling environment</span>
                        </Link>
                      </li>
                      <li id="new-secondnav-nav-materiality-level3" className="level3 last">
                        <Link href="https://www.rolls-royce.com/sustainability/our-approach-to-decarbonisation/materiality.aspx">
                          <span>Materiality</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li id="new-secondnav-nav-ethics-and-compliance-level2" className="level2">
                    <Link href="https://www.rolls-royce.com/sustainability/ethics-and-compliance.aspx">
                      <span>Ethics and compliance</span>
                    </Link>
                  </li>
                  <li id="new-secondnav-nav-our-people-level2" className="level2">
                    <Link href="https://www.rolls-royce.com/sustainability/our-people.aspx">
                      <span>Our people</span>
                    </Link>
                  </li>
                  <li id="new-secondnav-nav-engineering-and-innovation-level2" className="level2">
                    <Link href="https://www.rolls-royce.com/sustainability/engineering-and-innovation.aspx">
                      <span>Engineering and innovation</span>
                    </Link>
                  </li>
                  <li id="new-secondnav-nav-operations-and-facilities-level2" className="level2">
                    <Link href="https://www.rolls-royce.com/sustainability/operations-and-facilities.aspx">
                      <span>Operations and facilities</span>
                    </Link>
                  </li>
                  <li id="new-secondnav-nav-customers-and-suppliers-level2" className="level2">
                    <Link href="https://www.rolls-royce.com/sustainability/customers-and-suppliers.aspx">
                      <span>Our Stakeholders </span>
                    </Link>
                  </li>
                  <li id="new-secondnav-nav-cyber-security-level2" className="level2">
                    <Link href="https://www.rolls-royce.com/sustainability/cyber-security.aspx">
                      <span>Cyber Security</span>
                    </Link>
                  </li>
                  <li id="new-secondnav-nav-performance-level2" className="level2 haschildren last">
                    <Link href="https://www.rolls-royce.com/sustainability/performance.aspx">
                      <span>Performance</span>
                    </Link>
                    <ul id="new-secondnav-section-performance-level3">
                      <li id="new-secondnav-nav-reporting-approach-level3" className="level3 first">
                        <Link href="https://www.rolls-royce.com/sustainability/performance/reporting-approach.aspx">
                          <span>Reporting approach</span>
                        </Link>
                      </li>
                      <li id="new-secondnav-nav-target-progress-level3" className="level3">
                        <Link href="https://www.rolls-royce.com/sustainability/performance/target-progress.aspx">
                          <span>Target progress</span>
                        </Link>
                      </li>
                      <li id="new-secondnav-nav-data-charts-level3" className="level3 last">
                        <Link href="https://www.rolls-royce.com/sustainability/performance/data-charts.aspx">
                          <span>Data charts</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li id="new-secondnav-nav-investors-level1" className="level1 haschildren">
                <Link href="https://www.rolls-royce.com/investors.aspx">
                  <span>Investors</span>
                </Link>
                <ul id="new-secondnav-section-investors-level2">
                  <li
                    id="new-secondnav-nav-investor-centre-level2"
                    className="level2 haschildren first"
                  >
                    <Link href="https://www.rolls-royce.com/investors/investor-centre/share-price.aspx">
                      <span>Investor Centre</span>
                    </Link>
                    <ul id="new-secondnav-section-investor-centre-level3">
                      <li id="new-secondnav-nav-share-price-level3" className="level3 first">
                        <Link href="https://www.rolls-royce.com/investors/investor-centre/share-price.aspx">
                          <span>Share price</span>
                        </Link>
                      </li>
                      <li id="new-secondnav-nav-analyst-consensus-level3" className="level3 last">
                        <Link href="https://www.rolls-royce.com/investors/investor-centre/analyst-consensus.aspx">
                          <span>Analyst consensus</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="new-secondnav-nav-capital-markets-day-level2"
                    className="level2 haschildren"
                  >
                    <Link href="https://www.rolls-royce.com/investors/capital-markets-day.aspx">
                      <span>Capital Markets Day</span>
                    </Link>
                    <ul id="new-secondnav-section-capital-markets-day-level3">
                      <li id="new-secondnav-nav-civil-aerospace-level3" className="level3 first">
                        <Link href="https://www.rolls-royce.com/investors/capital-markets-day/civil-aerospace.aspx">
                          <span>Civil Aerospace</span>
                        </Link>
                      </li>
                      <li id="new-secondnav-nav-defence-level3" className="level3">
                        <Link href="https://www.rolls-royce.com/investors/capital-markets-day/defence.aspx">
                          <span>Defence</span>
                        </Link>
                      </li>
                      <li id="new-secondnav-nav-power-systems-level3" className="level3">
                        <Link href="https://www.rolls-royce.com/investors/capital-markets-day/power-systems.aspx">
                          <span>Power Systems</span>
                        </Link>
                      </li>
                      <li
                        id="new-secondnav-nav-small-modular-reactors-level3"
                        className="level3 last"
                      >
                        <Link href="https://www.rolls-royce.com/investors/capital-markets-day/small-modular-reactors.aspx">
                          <span>Small Modular Reactors</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li id="new-secondnav-nav-why-rolls-royce-level2" className="level2">
                    <Link href="https://www.rolls-royce.com/investors/why-rolls-royce.aspx">
                      <span>Why Rolls-Royce?</span>
                    </Link>
                  </li>
                  <li id="new-secondnav-nav-2023-full-year-results-level2" className="level2">
                    <Link href="https://www.rolls-royce.com/investors/2023-full-year-results.aspx">
                      <span>2023 Full Year Results</span>
                    </Link>
                  </li>
                  <li id="new-secondnav-nav-regulatory-news-level2" className="level2">
                    <Link href="https://www.rolls-royce.com/investors/regulatory-news.aspx">
                      <span>Regulatory news</span>
                    </Link>
                  </li>
                  <li
                    id="new-secondnav-nav-results-reports-and-presentations-level2"
                    className="level2 haschildren"
                  >
                    <Link href="https://www.rolls-royce.com/investors/results-reports-and-presentations/financial-results.aspx">
                      <span>Results, reports and presentations</span>
                    </Link>
                    <ul id="new-secondnav-section-results-reports-and-presentations-level3">
                      <li id="new-secondnav-nav-financial-results-level3" className="level3 first">
                        <Link href="https://www.rolls-royce.com/investors/results-reports-and-presentations/financial-results.aspx">
                          <span>Financial Results</span>
                        </Link>
                      </li>
                      <li id="new-secondnav-nav-annual-report-2023-level3" className="level3">
                        <Link href="https://www.rolls-royce.com/investors/results-reports-and-presentations/annual-report-2023.aspx">
                          <span>Annual Report 2023</span>
                        </Link>
                      </li>
                      <li
                        id="new-secondnav-nav-ar-annual-report-archive-level3"
                        className="level3 last"
                      >
                        <Link href="https://www.rolls-royce.com/investors/results-reports-and-presentations/ar-annual-report-archive/ar-annual-reports.aspx">
                          <span>Annual Reports archive</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li id="new-secondnav-nav-financial-calendar-level2" className="level2">
                    <Link href="https://www.rolls-royce.com/investors/financial-calendar.aspx">
                      <span>Financial calendar</span>
                    </Link>
                  </li>
                  <li id="new-secondnav-nav-corporate-governance-level2" className="level2">
                    <Link href="https://www.rolls-royce.com/about/leadership/corporate-governance.aspx">
                      <span>Corporate governance</span>
                    </Link>
                  </li>
                  <li
                    id="new-secondnav-nav-shareholder-information-level2"
                    className="level2 haschildren"
                  >
                    <Link href="https://www.rolls-royce.com/investors/shareholder-information.aspx">
                      <span>Shareholder information</span>
                    </Link>
                    <ul id="new-secondnav-section-shareholder-information-level3">
                      <li id="new-secondnav-nav-general-meetings-level3" className="level3 first">
                        <Link href="https://www.rolls-royce.com/investors/shareholder-information/general-meetings.aspx">
                          <span>
                            General Meetings <br />
                            23 May 2024{' '}
                          </span>
                        </Link>
                      </li>
                      <li
                        id="new-secondnav-nav-annual-general-meeting-archive-level3"
                        className="level3"
                      >
                        <Link href="https://www.rolls-royce.com/investors/shareholder-information/annual-general-meeting-archive/yr-2023.aspx">
                          <span>General Meeting archive</span>
                        </Link>
                      </li>
                      <li id="new-secondnav-nav-payments-to-shareholders-level3" className="level3">
                        <Link href="https://www.rolls-royce.com/investors/shareholder-information/payments-to-shareholders.aspx">
                          <span>Payments to shareholders</span>
                        </Link>
                      </li>
                      <li id="new-secondnav-nav-manage-your-shareholding-level3" className="level3">
                        <Link href="https://www.rolls-royce.com/investors/shareholder-information/manage-your-shareholding.aspx">
                          <span>Manage your shareholding</span>
                        </Link>
                      </li>
                      <li id="new-secondnav-nav-registrar-level3" className="level3">
                        <Link href="https://www.rolls-royce.com/investors/shareholder-information/registrar.aspx">
                          <span>Registrar</span>
                        </Link>
                      </li>
                      <li
                        id="new-secondnav-nav-shareholder-fraud-warning-level3"
                        className="level3"
                      >
                        <Link href="https://www.rolls-royce.com/investors/shareholder-information/shareholder-fraud-warning.aspx">
                          <span>Shareholder fraud warning</span>
                        </Link>
                      </li>
                      <li id="new-secondnav-nav-faqs-level3" className="level3 last">
                        <Link href="https://www.rolls-royce.com/investors/shareholder-information/faqs.aspx">
                          <span>FAQs</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li id="new-secondnav-nav-debt-securities-level2" className="level2">
                    <Link href="https://www.rolls-royce.com/investors/debt-securities.aspx">
                      <span>Debt Securities</span>
                    </Link>
                  </li>
                  <li id="new-secondnav-nav-rights-issue-level2" className="level2">
                    <Link href="https://www.rolls-royce.com/investors/rights-issue.aspx">
                      <span>Rights issue</span>
                    </Link>
                  </li>
                  <li id="new-secondnav-nav-investor-contacts-level2" className="level2 last">
                    <Link href="https://www.rolls-royce.com/investors/investor-contacts.aspx">
                      <span>Investor contacts</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li id="new-secondnav-nav-media-level1" className="level1 haschildren">
                <Link href="https://www.rolls-royce.com/media.aspx">
                  <span>Media</span>
                </Link>
                <ul id="new-secondnav-section-media-level2">
                  <li id="new-secondnav-nav-company-announcement-level2" className="level2 first">
                    <Link href="https://www.rolls-royce.com/media/press-releases#company-announcements">
                      <span>Company announcements</span>
                    </Link>
                  </li>
                  <li id="new-secondnav-nav-trade-press-releases-level2" className="level2">
                    <Link href="https://www.rolls-royce.com/media/press-releases#trade-press-releases">
                      <span>Trade press releases</span>
                    </Link>
                  </li>
                  <li id="new-secondnav-nav-our-stories-level2" className="level2">
                    <Link href="https://www.rolls-royce.com/media/our-stories.aspx">
                      <span>Our stories</span>
                    </Link>
                  </li>
                  <li id="new-secondnav-nav-press-releases-level2" className="level2">
                    <Link href="https://www.rolls-royce.com/media/press-releases.aspx">
                      <span>Press releases</span>
                    </Link>
                  </li>
                  <li id="new-secondnav-nav-social-level2" className="level2">
                    <Link href="https://www.rolls-royce.com/media/social.aspx">
                      <span>Social</span>
                    </Link>
                  </li>
                  <li id="new-secondnav-nav-contacts-level2" className="level2 last">
                    <Link href="https://www.rolls-royce.com/media/contacts.aspx">
                      <span>Contacts</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li id="new-secondnav-nav-careers-direct-level1" className="level1 last">
                <Link target="_blank" href="https://careers.rolls-royce.com">
                  <span>Careers</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="breadcrumbWrap">
          <div className="BreadcrumbInnerWrap">
            <div className="new-second-level-navigation-outer">
              <div className="new-second-level-navigation togetwidth">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-xs-12">
                      <div className="view-more-nav-container">
                        <div className="new-bread-div">
                          <Link href="https://www.rolls-royce.com/">
                            Home
                            <span className="separator">
                              <i className="fa fa-angle-right"></i>
                            </span>
                          </Link>
                        </div>
                        <div className="new-bread-div">
                          <Link href="https://www.rolls-royce.com/products-and-services.aspx">
                            Products & Services
                            <span className="separator">
                              <i className="fa fa-angle-right"></i>
                            </span>
                          </Link>
                        </div>
                        <div className="new-bread-div lastbread">Civil Aerospace</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return <RollsRoyceHeaderDefaultComponent {...props} />;
};
