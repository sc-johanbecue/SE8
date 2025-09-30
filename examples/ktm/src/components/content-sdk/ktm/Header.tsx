import {
  ComponentParams,
  ComponentRendering,
  TextField,
  LinkField,
  RichTextField,
  ImageField,
} from '@sitecore-content-sdk/nextjs';
import Link from 'next/link';
import Image from 'next/image';
import React, { JSX } from 'react';

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
  return (
    <>
      <div className="container">
        <div className="nav">
          <nav
            className="nav__items js-nav-items js-calcviewheight"
            data-offset-sm="185"
            data-offset-md="115"
            data-height-auto-lg="true"
            data-height-auto-xl="true"
            style={{ height: 'auto' }}
          >
            <ul>
              <li className="js-has-items accordion" data-opened="false">
                <span className="heading">Models</span>
                <div className="content">
                  <ul className="nav__models js-nav-models">
                    <li className="range-list js-range-list accordion">
                      <span className="heading d-lg-none">Select range</span>
                      <div className="content">
                        <ul>
                          <li data-segment-id="d82d7930-0f94-4a8b-b4c6-a1b566d05432">MOTOCROSS</li>
                          <li data-segment-id="95d4b6f8-2d1c-40f7-9b83-bfbbd75909f1">ENDURO</li>
                          <li data-segment-id="ec0599e9-b40a-4bb9-bf26-46afcdcf46c9">Electric</li>
                          <li data-segment-id="abb3e7a0-a780-4f71-8eae-02b9729ba89b">Dual Sport</li>
                          <li data-segment-id="6f4e2c1b-2d4e-4c69-9bcc-4c53a63ed15f">Adventure</li>
                          <li data-segment-id="19708f84-2503-40c5-ac82-73ac44970597">
                            SPORTS TOURER
                          </li>
                          <li data-segment-id="03778f93-33cf-4d7d-9e1a-f1f289b3e1aa">Supermoto</li>
                          <li data-segment-id="02b7a25c-5ef1-4566-9823-2f25838d79ce">Naked Bike</li>
                          <li data-segment-id="f0ec3513-8bf1-453e-b68f-ba53e4087495">Supersport</li>
                          <li data-segment-id="e1a8a633-bb16-42a8-b833-c279fe6b338f">X-BOW</li>
                          <li data-segment-id="a69dfa94-c6dc-4034-a266-e41d8ca6de8e">BRABUS</li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <ul className="segments-list js-segment-list">
                        <li data-segment-id="d82d7930-0f94-4a8b-b4c6-a1b566d05432">
                          <div className="container active-element">
                            <aside>
                              <p className="heading-h3">
                                <Link href="https://www.ktm.com/en-be/models/motocross.html">
                                  MOTOCROSS
                                </Link>
                              </p>
                              <p className="d-none d-md-block heading-h5"></p>
                              <div className="c-btn d-none d-md-flex">
                                <Link
                                  href="https://www.ktm.com/en-be/models/motocross.html"
                                  className="c-btn__link c-btn__link--primary-dark"
                                >
                                  DISCOVER
                                </Link>
                              </div>
                            </aside>
                            <section>
                              <ul className="engine-list-wrapper">
                                <li className="js-engine-list accordion engine-list">
                                  <div className="heading engineGroup">4-stroke</div>
                                  <div className="content">
                                    <ul className="bike-list">
                                      <li>
                                        <Link href="https://www.ktm.com/en-be/models/motocross/4-stroke/2026-ktm-450-sx-f.html">
                                          2026 KTM 450 SX-F
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="https://www.ktm.com/en-be/models/motocross/4-stroke/2026-ktm-350-sx-f.html">
                                          2026 KTM 350 SX-F
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="https://www.ktm.com/en-be/models/motocross/4-stroke/2026-ktm-250-sx-f.html">
                                          2026 KTM 250 SX-F
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="https://www.ktm.com/en-be/models/motocross/4-stroke/2025-ktm-250-sx-fadamoedition.html">
                                          2025 KTM 250 SX-F ADAMO EDITION
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="https://www.ktm.com/en-be/models/motocross/4-stroke/2025-ktm-450-sx-ffactoryedition.html">
                                          2025 KTM 450 SX-F FACTORY EDITION
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li className="js-engine-list accordion engine-list">
                                  <div className="heading engineGroup">2-stroke</div>
                                  <div className="content">
                                    <ul className="bike-list">
                                      <li>
                                        <Link href="https://www.ktm.com/en-be/models/motocross/2-stroke/2026-ktm-300-sx.html">
                                          2026 KTM 300 SX
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="https://www.ktm.com/en-be/models/motocross/2-stroke/2026-ktm-250-sx.html">
                                          2026 KTM 250 SX
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="https://www.ktm.com/en-be/models/motocross/2-stroke/2026-ktm-125-sx.html">
                                          2026 KTM 125 SX
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="https://www.ktm.com/en-be/models/motocross/2-stroke/2026-ktm-sx-85-1916.html">
                                          2026 KTM SX 85 19/16
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="https://www.ktm.com/en-be/models/motocross/2-stroke/2026-ktm-sx-85-1714.html">
                                          2026 KTM SX 85 17/14
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="https://www.ktm.com/en-be/models/motocross/2-stroke/2026-ktm-65-sx.html">
                                          2026 KTM 65 SX
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="https://www.ktm.com/en-be/models/motocross/2-stroke/2026-ktm-50-sx-factoryedition.html">
                                          2026 KTM 50 SX FACTORY EDITION
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="https://www.ktm.com/en-be/models/motocross/2-stroke/2026-ktm-50-sx.html">
                                          2026 KTM 50 SX
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li className="js-engine-list accordion engine-list">
                                  <div className="heading engineGroup">Electric</div>
                                  <div className="content">
                                    <ul className="bike-list">
                                      <li>
                                        <Link href="https://www.ktm.com/en-be/models/motocross/electric/2025-ktm-sx-e-5.html">
                                          2025 KTM SX-E 5
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="https://www.ktm.com/en-be/models/motocross/electric/2025-ktm-sx-e-3.html">
                                          2025 KTM SX-E 3
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="https://www.ktm.com/en-be/models/motocross/electric/2025-ktm-sx-e-2.html">
                                          2025 KTM SX-E 2
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                              </ul>
                            </section>
                          </div>
                        </li>
                        <li data-segment-id="95d4b6f8-2d1c-40f7-9b83-bfbbd75909f1">
                          <div className="container active-element">
                            <aside>
                              <p className="heading-h3">
                                <Link href="https://www.ktm.com/en-be/models/enduro.html">
                                  ENDURO
                                </Link>
                              </p>
                              <p className="d-none d-md-block heading-h5"></p>
                              <div className="c-btn d-none d-md-flex">
                                <Link
                                  href="https://www.ktm.com/en-be/models/enduro.html"
                                  className="c-btn__link c-btn__link--primary-dark"
                                >
                                  DISCOVER
                                </Link>
                              </div>
                            </aside>
                            <section>
                              <ul className="engine-list-wrapper">
                                <li className="js-engine-list accordion engine-list">
                                  <div className="heading engineGroup">4-stroke</div>
                                  <div className="content">
                                    <ul className="bike-list">
                                      <li>
                                        <Link href="https://www.ktm.com/en-be/models/enduro/4-stroke/2026-ktm-500-excf6days.html">
                                          2026 KTM 500 EXC-F 6DAYS
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="https://www.ktm.com/en-be/models/enduro/4-stroke/2026-ktm-450-excf6days.html">
                                          2026 KTM 450 EXC-F 6DAYS
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="https://www.ktm.com/en-be/models/enduro/4-stroke/2026-ktm-350-excf6days.html">
                                          2026 KTM 350 EXC-F 6DAYS
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="https://www.ktm.com/en-be/models/enduro/4-stroke/2026-ktm-250-excf6days.html">
                                          2026 KTM 250 EXC-F 6DAYS
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="https://www.ktm.com/en-be/models/enduro/4-stroke/2026-ktm-500-excf.html">
                                          2026 KTM 500 EXC-F
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="https://www.ktm.com/en-be/models/enduro/4-stroke/2026-ktm-450-excf.html">
                                          2026 KTM 450 EXC-F
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="https://www.ktm.com/en-be/models/enduro/4-stroke/2026-ktm-350-excf.html">
                                          2026 KTM 350 EXC-F
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="https://www.ktm.com/en-be/models/enduro/4-stroke/2026-ktm-250-excf.html">
                                          2026 KTM 250 EXC-F
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="https://www.ktm.com/en-be/models/enduro/4-stroke/2025-ktm-500-excfchampionedition.html">
                                          2025 KTM 500 EXC-F CHAMPION EDITION
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="https://www.ktm.com/en-be/models/enduro/4-stroke/2025-ktm-450-excfchampionedition.html">
                                          2025 KTM 450 EXC-F CHAMPION EDITION
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="https://www.ktm.com/en-be/models/enduro/4-stroke/2025-ktm-350-excfchampionedition.html">
                                          2025 KTM 350 EXC-F CHAMPION EDITION
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="https://www.ktm.com/en-be/models/enduro/4-stroke/2025-ktm-250-excfchampionedition.html">
                                          2025 KTM 250 EXC-F CHAMPION EDITION
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li className="js-engine-list accordion engine-list">
                                  <div className="heading engineGroup">2-stroke</div>
                                  <div className="content">
                                    <ul className="bike-list">
                                      <li>
                                        <Link href="https://www.ktm.com/en-be/models/enduro/2-stroke/2026-ktm-300-exc6days.html">
                                          2026 KTM 300 EXC 6DAYS
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="https://www.ktm.com/en-be/models/enduro/2-stroke/2026-ktm-300-exchardenduro.html">
                                          2026 KTM 300 EXC HARDENDURO
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="https://www.ktm.com/en-be/models/enduro/2-stroke/2026-ktm-300-exc.html">
                                          2026 KTM 300 EXC
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="https://www.ktm.com/en-be/models/enduro/2-stroke/2026-ktm-125-xc-w.html">
                                          2026 KTM 125 XC-W
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="https://www.ktm.com/en-be/models/enduro/2-stroke/2025-ktm-300-excchampionedition.html">
                                          2025 KTM 300 EXC CHAMPION EDITION
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="https://www.ktm.com/en-be/models/enduro/2-stroke/2025-ktm-250-excchampionedition.html">
                                          2025 KTM 250 EXC CHAMPION EDITION
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                              </ul>
                            </section>
                          </div>
                        </li>
                        <li data-segment-id="ec0599e9-b40a-4bb9-bf26-46afcdcf46c9">
                          <div className="container active-element">
                            <aside>
                              <p className="heading-h3">
                                <Link href="https://www.ktm.com/en-be/models/electric.html">
                                  Electric
                                </Link>
                              </p>
                              <p className="d-none d-md-block heading-h5"></p>
                              <div className="c-btn d-none d-md-flex">
                                <Link
                                  href="https://www.ktm.com/en-be/models/electric.html"
                                  className="c-btn__link c-btn__link--primary-dark"
                                >
                                  DISCOVER
                                </Link>
                              </div>
                            </aside>
                            <section>
                              <ul className="engine-list-wrapper">
                                <li className="js-engine-list accordion engine-list">
                                  <div className="heading engineGroup">FREERIDE</div>
                                  <div className="content">
                                    <ul className="bike-list">
                                      <li>
                                        <Link href="https://www.ktm.com/en-be/models/electric/freeride/2023-ktm-freerideexc.html">
                                          2023 KTM Freeride E-XC
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li className="js-engine-list accordion engine-list">
                                  <div className="heading engineGroup">KIDS ELECTRIC MOTOCROSS</div>
                                  <div className="content">
                                    <ul className="bike-list">
                                      <li>
                                        <Link href="https://www.ktm.com/en-be/models/electric/kids-motocross/2025-ktm-sx-e-5.html">
                                          2025 KTM SX-E 5
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="https://www.ktm.com/en-be/models/electric/kids-motocross/2025-ktm-sx-e-3.html">
                                          2025 KTM SX-E 3
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="https://www.ktm.com/en-be/models/electric/kids-motocross/2025-ktm-sx-e-2.html">
                                          2025 KTM SX-E 2
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li className="js-engine-list accordion engine-list">
                                  <div className="heading engineGroup">
                                    KIDS ELECTRIC BALANCE BIKES
                                  </div>
                                  <div className="content">
                                    <ul className="bike-list">
                                      <li>
                                        <Link href="https://www.ktm.com/en-be/models/electric/kids-balance-bikes/2023-ktm-sx-e-1-20.html">
                                          2023 KTM SX-E 1.20
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="https://www.ktm.com/en-be/models/electric/kids-balance-bikes/2023-ktm-sx-e-1-16.html">
                                          2023 KTM SX-E 1.16
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="https://www.ktm.com/en-be/models/electric/kids-balance-bikes/2023-ktm-sx-e-1-12.html">
                                          2023 KTM SX-E 1.12
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                              </ul>
                            </section>
                          </div>
                        </li>
                        <li data-segment-id="abb3e7a0-a780-4f71-8eae-02b9729ba89b">
                          <div className="container active-element">
                            <aside>
                              <p className="heading-h3">
                                <Link href="https://www.ktm.com/en-be/models/dual-sport.html">
                                  Dual Sport
                                </Link>
                              </p>
                              <p className="d-none d-md-block heading-h5"></p>
                              <div className="c-btn d-none d-md-flex">
                                <Link
                                  href="https://www.ktm.com/en-be/models/dual-sport.html"
                                  className="c-btn__link c-btn__link--primary-dark"
                                >
                                  DISCOVER
                                </Link>
                              </div>
                            </aside>
                            <section>
                              <ul className="bike-list">
                                <li>
                                  <Link href="https://www.ktm.com/en-be/models/dual-sport/2026-ktm-690-enduror.html">
                                    2026 KTM 690 Enduro R
                                  </Link>
                                </li>
                                <li>
                                  <Link href="https://www.ktm.com/en-be/models/dual-sport/2025-ktm-125-enduror.html">
                                    2025 KTM 125 Enduro R
                                  </Link>
                                </li>
                                <li>
                                  <Link href="https://www.ktm.com/en-be/models/dual-sport/2025-ktm-390-enduror.html">
                                    2025 KTM 390 Enduro R
                                  </Link>
                                </li>
                              </ul>
                            </section>
                          </div>
                        </li>
                        <li data-segment-id="6f4e2c1b-2d4e-4c69-9bcc-4c53a63ed15f">
                          <div className="container active-element">
                            <aside>
                              <p className="heading-h3">
                                <Link href="https://www.ktm.com/en-be/models/adventure.html">
                                  Adventure
                                </Link>
                              </p>
                              <p className="d-none d-md-block heading-h5"></p>
                              <div className="c-btn d-none d-md-flex">
                                <Link
                                  href="https://www.ktm.com/en-be/models/adventure.html"
                                  className="c-btn__link c-btn__link--primary-dark"
                                >
                                  DISCOVER
                                </Link>
                              </div>
                            </aside>
                            <section>
                              <ul className="bike-list">
                                <li>
                                  <Link href="https://www.ktm.com/en-be/models/adventure/2026-ktm-1390-superadventurer.html">
                                    2026 KTM 1390 Super Adventure R
                                  </Link>
                                </li>
                                <li>
                                  <Link href="https://www.ktm.com/en-be/models/adventure/2026-ktm-450-rallyreplica.html">
                                    2026 KTM 450 RALLY REPLICA
                                  </Link>
                                </li>
                                <li>
                                  <Link href="https://www.ktm.com/en-be/models/adventure/2025-ktm-890-adventurer.html">
                                    2025 KTM 890 Adventure R
                                  </Link>
                                </li>
                                <li>
                                  <Link href="https://www.ktm.com/en-be/models/adventure/2025-ktm-790-adventure.html">
                                    2025 KTM 790 Adventure
                                  </Link>
                                </li>
                                <li>
                                  <Link href="https://www.ktm.com/en-be/models/adventure/2025-ktm-390-adventurer.html">
                                    2025 KTM 390 Adventure R
                                  </Link>
                                </li>
                                <li>
                                  <Link href="https://www.ktm.com/en-be/models/adventure/2025-ktm-390-adventurex.html">
                                    2025 KTM 390 Adventure X
                                  </Link>
                                </li>
                                <li>
                                  <Link href="https://www.ktm.com/en-be/models/adventure/2024-ktm-1290-superadventurer.html">
                                    2024 KTM 1290 Super Adventure R
                                  </Link>
                                </li>
                                <li>
                                  <Link href="https://www.ktm.com/en-be/models/adventure/2024-ktm-1290-superadventures.html">
                                    2024 KTM 1290 Super Adventure S
                                  </Link>
                                </li>
                                <li>
                                  <Link href="https://www.ktm.com/en-be/models/adventure/2024-ktm-890-adventurerrally.html">
                                    2024 KTM 890 ADVENTURE R RALLY
                                  </Link>
                                </li>
                                <li>
                                  <Link href="https://www.ktm.com/en-be/models/adventure/2024-ktm-890-adventure.html">
                                    2024 KTM 890 Adventure
                                  </Link>
                                </li>
                                <li>
                                  <Link href="https://www.ktm.com/en-be/models/adventure/2024-ktm-390-adventuresw.html">
                                    2024 KTM 390 ADVENTURE SW
                                  </Link>
                                </li>
                                <li>
                                  <Link href="https://www.ktm.com/en-be/models/adventure/2024-ktm-390-adventure.html">
                                    2024 KTM 390 Adventure
                                  </Link>
                                </li>
                              </ul>
                            </section>
                          </div>
                        </li>
                        <li data-segment-id="19708f84-2503-40c5-ac82-73ac44970597">
                          <div className="container active-element">
                            <aside>
                              <p className="heading-h3">
                                <Link href="https://www.ktm.com/en-be/models/sports-tourer.html">
                                  SPORTS TOURER
                                </Link>
                              </p>
                              <p className="d-none d-md-block heading-h5"></p>
                              <div className="c-btn d-none d-md-flex">
                                <Link
                                  href="https://www.ktm.com/en-be/models/sports-tourer.html"
                                  className="c-btn__link c-btn__link--primary-dark"
                                >
                                  DISCOVER
                                </Link>
                              </div>
                            </aside>
                            <section>
                              <ul className="bike-list">
                                <li>
                                  <Link href="https://www.ktm.com/en-be/models/sports-tourer/2024-ktm-1290-superdukegt.html">
                                    2024 KTM 1290 Super Duke GT
                                  </Link>
                                </li>
                                <li>
                                  <Link href="https://www.ktm.com/en-be/models/sports-tourer/2024-ktm-890-smt.html">
                                    2024 KTM 890 SMT
                                  </Link>
                                </li>
                              </ul>
                            </section>
                          </div>
                        </li>
                        <li data-segment-id="03778f93-33cf-4d7d-9e1a-f1f289b3e1aa">
                          <div className="container active-element">
                            <aside>
                              <p className="heading-h3">
                                <Link href="https://www.ktm.com/en-be/models/supermoto.html">
                                  Supermoto
                                </Link>
                              </p>
                              <p className="d-none d-md-block heading-h5"></p>
                              <div className="c-btn d-none d-md-flex">
                                <Link
                                  href="https://www.ktm.com/en-be/models/supermoto.html"
                                  className="c-btn__link c-btn__link--primary-dark"
                                >
                                  DISCOVER
                                </Link>
                              </div>
                            </aside>
                            <section>
                              <ul className="bike-list">
                                <li>
                                  <Link href="https://www.ktm.com/en-be/models/supermoto/2026-ktm-690-smcr.html">
                                    2026 KTM 690 SMC R
                                  </Link>
                                </li>
                                <li>
                                  <Link href="https://www.ktm.com/en-be/models/supermoto/2025-ktm-450-smr.html">
                                    2025 KTM 450 SMR
                                  </Link>
                                </li>
                                <li>
                                  <Link href="https://www.ktm.com/en-be/models/supermoto/2025-ktm-390-smcr.html">
                                    2025 KTM 390 SMC R
                                  </Link>
                                </li>
                                <li>
                                  <Link href="https://www.ktm.com/en-be/models/supermoto/2025-ktm-125-smcr.html">
                                    2025 KTM 125 SMC R
                                  </Link>
                                </li>
                              </ul>
                            </section>
                          </div>
                        </li>
                        <li data-segment-id="02b7a25c-5ef1-4566-9823-2f25838d79ce">
                          <div className="container active-element">
                            <aside>
                              <p className="heading-h3">
                                <Link href="https://www.ktm.com/en-be/models/naked-bike.html">
                                  Naked Bike
                                </Link>
                              </p>
                              <p className="d-none d-md-block heading-h5"></p>
                              <div className="c-btn d-none d-md-flex">
                                <Link
                                  href="https://www.ktm.com/en-be/models/naked-bike.html"
                                  className="c-btn__link c-btn__link--primary-dark"
                                >
                                  DISCOVER
                                </Link>
                              </div>
                            </aside>
                            <section>
                              <ul className="bike-list">
                                <li>
                                  <Link href="https://www.ktm.com/en-be/models/naked-bike/2025-ktm-1390-superdukerevo.html">
                                    2025 KTM 1390 Super Duke R EVO
                                  </Link>
                                </li>
                                <li>
                                  <Link href="https://www.ktm.com/en-be/models/naked-bike/2025-ktm-1390-superduker.html">
                                    2025 KTM 1390 Super Duke R
                                  </Link>
                                </li>
                                <li>
                                  <Link href="https://www.ktm.com/en-be/models/naked-bike/2025-ktm-790-duke.html">
                                    2025 KTM 790 Duke
                                  </Link>
                                </li>
                                <li>
                                  <Link href="https://www.ktm.com/en-be/models/naked-bike/2025-ktm-390-duke.html">
                                    2025 KTM 390 Duke
                                  </Link>
                                </li>
                                <li>
                                  <Link href="https://www.ktm.com/en-be/models/naked-bike/2025-ktm-125-duke.html">
                                    2025 KTM 125 Duke
                                  </Link>
                                </li>
                                <li>
                                  <Link href="https://www.ktm.com/en-be/models/naked-bike/2024-ktm-990-duke.html">
                                    2024 KTM 990 DUKE
                                  </Link>
                                </li>
                              </ul>
                            </section>
                          </div>
                        </li>
                        <li data-segment-id="f0ec3513-8bf1-453e-b68f-ba53e4087495">
                          <div className="container active-element">
                            <aside>
                              <p className="heading-h3">
                                <Link href="https://www.ktm.com/en-be/models/supersport.html">
                                  Supersport
                                </Link>
                              </p>
                              <p className="d-none d-md-block heading-h5"></p>
                              <div className="c-btn d-none d-md-flex">
                                <Link
                                  href="https://www.ktm.com/en-be/models/supersport.html"
                                  className="c-btn__link c-btn__link--primary-dark"
                                >
                                  DISCOVER
                                </Link>
                              </div>
                            </aside>
                            <section>
                              <ul className="bike-list">
                                <li>
                                  <Link href="https://www.ktm.com/en-be/models/supersport/2024-ktm-rc-8c.html">
                                    2024 KTM RC 8C
                                  </Link>
                                </li>
                                <li>
                                  <Link href="https://www.ktm.com/en-be/models/supersport/2024-ktm-rc-390.html">
                                    2024 KTM RC 390
                                  </Link>
                                </li>
                                <li>
                                  <Link href="https://www.ktm.com/en-be/models/supersport/2024-ktm-rc-125.html">
                                    2024 KTM RC 125
                                  </Link>
                                </li>
                              </ul>
                            </section>
                          </div>
                        </li>
                        <li data-segment-id="e1a8a633-bb16-42a8-b833-c279fe6b338f">
                          <div className="container active-element">
                            <aside>
                              <p className="heading-h3">
                                <Link href="https://www.ktm.com/en-be/models/x-bow.html">
                                  X-BOW
                                </Link>
                              </p>
                              <p className="d-none d-md-block heading-h5">
                                REVOLUTIONARY. PURISTIC. RADICAL.
                              </p>
                              <div className="c-btn d-none d-md-flex">
                                <Link
                                  href="https://www.ktm.com/en-be/models/x-bow.html"
                                  className="c-btn__link c-btn__link--primary-dark"
                                >
                                  DISCOVER
                                </Link>
                              </div>
                            </aside>
                            <section>
                              <ul className="bike-list">
                                <li>
                                  <Link href="https://www.ktm.com/en-be/models/x-bow/x-bow-gt-xr-2023.html">
                                    X-BOW GT-XR 2023
                                  </Link>
                                </li>
                                <li>
                                  <Link href="https://www.ktm.com/en-be/models/x-bow/x-bow-gtx-2020.html">
                                    X-Bow GTX 2020
                                  </Link>
                                </li>
                                <li>
                                  <Link href="https://www.ktm.com/en-be/models/x-bow/ktm-x-bow-gt4.html">
                                    X-Bow GT4
                                  </Link>
                                </li>
                              </ul>
                            </section>
                          </div>
                        </li>
                        <li data-segment-id="a69dfa94-c6dc-4034-a266-e41d8ca6de8e">
                          <div className="container active-element">
                            <aside>
                              <p className="heading-h3">
                                <Link href="https://www.ktm.com/en-be/models/brabus.html">
                                  BRABUS
                                </Link>
                              </p>
                              <p className="d-none d-md-block heading-h5"></p>
                              <div className="c-btn d-none d-md-flex">
                                <Link
                                  href="https://www.ktm.com/en-be/models/brabus.html"
                                  className="c-btn__link c-btn__link--primary-dark"
                                >
                                  DISCOVER
                                </Link>
                              </div>
                            </aside>
                            <section>
                              <ul className="bike-list">
                                <li>
                                  <Link href="https://www.ktm.com/en-be/models/brabus/brabus-1300-r-masterpieceedition.html">
                                    BRABUS 1300 R Masterpiece Edition
                                  </Link>
                                </li>
                                <li>
                                  <Link href="https://www.ktm.com/en-be/models/brabus/2023-brabus-1300redition.html">
                                    2023 BRABUS 1300 R Edition
                                  </Link>
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
              <li className="js-has-items accordion" data-opened="false">
                <span className="heading">X-BOW</span>
                <div className="content">
                  <ul className="submenu">
                    <li>
                      <Link
                        href="https://www.ktm.com/en-be/models/x-bow.html"
                        className="headerNavLink headerNavLink--lvl2"
                        target="_self"
                      >
                        Explore
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.ktm.com/en-be/X-BOW/models.html"
                        className="headerNavLink headerNavLink--lvl2"
                        target="_self"
                      >
                        Models
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.ktm.com/en-be/news.html#x-bow"
                        className="headerNavLink headerNavLink--lvl2"
                        target="_self"
                      >
                        X-BOW News
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.ktm.com/en-be/X-BOW/motorsport.html"
                        className="headerNavLink headerNavLink--lvl2"
                        target="_self"
                      >
                        Racing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.ktm.com/en-be/X-BOW/racing-school---fleet-cars.html"
                        className="headerNavLink headerNavLink--lvl2"
                        target="_self"
                      >
                        Racing Schools
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.ktm.com/en-be/X-BOW/e-sports---gaming.html"
                        className="headerNavLink headerNavLink--lvl2"
                        target="_self"
                      >
                        E-SPORTS & GAMING
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.ktm.com/en-be/X-BOW/locations.html"
                        className="headerNavLink headerNavLink--lvl2"
                        target="_self"
                      >
                        Locations
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.ktm.com/en-be/find-a-dealer.html"
                        className="headerNavLink headerNavLink--lvl2"
                        target="_self"
                      >
                        Dealer Search
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.ktm.com/en-be/X-BOW/contact.html"
                        className="headerNavLink headerNavLink--lvl2"
                        target="_self"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="js-has-items accordion" data-opened="false">
                <span className="heading">PowerParts & PowerWear</span>
                <div className="content">
                  <ul className="submenu">
                    <li>
                      <Link
                        href="https://www.ktm.com/en-be/parts---wear/powerparts/products.html"
                        className="headerNavLink headerNavLink--lvl2"
                        target="_self"
                      >
                        PowerParts
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.ktm.com/en-be/parts---wear/powerwear/products.html"
                        className="headerNavLink headerNavLink--lvl2"
                        target="_self"
                      >
                        PowerWear
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.ktm.com/en-be/parts---wear/powerwear-collections.html"
                        className="headerNavLink headerNavLink--lvl2"
                        target="_self"
                      >
                        PowerWear Collections
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.ktm.com/en-be/service/spare-parts-finder.html"
                        className="headerNavLink headerNavLink--lvl2"
                        target="_self"
                      >
                        SPARE PARTS FINDER
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://configurator.ktm.com/models/"
                        className="headerNavLink headerNavLink--lvl2"
                        target="_self"
                      >
                        Online Configurator
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.ktm.com/en-be/parts---wear/ktm-exc-plastic-part-kits.html"
                        className="headerNavLink headerNavLink--lvl2"
                        target="_self"
                      >
                        KTM EXC PLASTIC PART KITS
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="js-has-items accordion" data-opened="false">
                <span className="heading">Racing</span>
                <div className="content">
                  <ul className="submenu">
                    <li>
                      <Link
                        href="https://www.ktm.com/en-be/news.html#racing"
                        className="headerNavLink headerNavLink--lvl2"
                        target="_self"
                      >
                        Racing News
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.ktm.com/en-be/racing/road-racing.html"
                        className="headerNavLink headerNavLink--lvl2"
                        target="_self"
                      >
                        MOTOGP™
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.ktm.com/en-be/racing/mx-sx.html"
                        className="headerNavLink headerNavLink--lvl2"
                        target="_self"
                      >
                        Motocross/Supercross
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.ktm.com/en-be/racing/offroad.html"
                        className="headerNavLink headerNavLink--lvl2"
                        target="_self"
                      >
                        Enduro / Offroad US
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.ktm.com/en-be/racing/rally.html"
                        className="headerNavLink headerNavLink--lvl2"
                        target="_self"
                      >
                        Rally
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="js-has-items accordion" data-opened="false">
                <span className="heading">KTM World</span>
                <div className="content">
                  <ul className="submenu">
                    <li>
                      <Link
                        href="https://www.ktm.com/en-be/news.html#promotions"
                        className="headerNavLink headerNavLink--lvl2"
                        target="_self"
                      >
                        Power Deals
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.ktm.com/en-be/news.html"
                        className="headerNavLink headerNavLink--lvl2"
                        target="_self"
                      >
                        News
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.ktm.com/en-be/news.html#events"
                        className="headerNavLink headerNavLink--lvl2"
                        target="_self"
                      >
                        Events
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.ktm.com/en-be/news.html#stories"
                        className="headerNavLink headerNavLink--lvl2"
                        target="_self"
                      >
                        Stories
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.ktm.com/en-be/ktm-world/ride-ktm.html"
                        className="headerNavLink headerNavLink--lvl2"
                        target="_self"
                      >
                        Ride KTM
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.ktm.com/en-be/ktm-world/ktm-adventure-rally.html"
                        className="headerNavLink headerNavLink--lvl2"
                        target="_self"
                      >
                        KTM Adventure Rally
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.ktm.com/en-be/tech-guide.html"
                        className="headerNavLink headerNavLink--lvl2"
                        target="_self"
                      >
                        KTM Tech Guide
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.ktm.com/en-be/ktm-world/ktm-magazine.html"
                        className="headerNavLink headerNavLink--lvl2"
                        target="_self"
                      >
                        KTM MAGAZINE
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.ktm.com/en-be/ktm-world/news/ktm-orange-board.html"
                        className="headerNavLink headerNavLink--lvl2"
                        target="_self"
                      >
                        ORANGE BOARD
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="js-has-items accordion" data-opened="false">
                <span className="heading">Service</span>
                <div className="content">
                  <ul className="submenu">
                    <li>
                      <Link
                        href="https://www.ktm.com/en-be/service/warranty.html"
                        className="headerNavLink headerNavLink--lvl2"
                        target="_self"
                      >
                        Warranty
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.ktm.com/en-be/service/manuals.html"
                        className="headerNavLink headerNavLink--lvl2"
                        target="_self"
                      >
                        Manuals & Maintenance
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.ktm.com/en-be/service/spare-parts-finder.html"
                        className="headerNavLink headerNavLink--lvl2"
                        target="_self"
                      >
                        Spare Parts Finder
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.ktm.com/en-be/service/tire-recommendation.html"
                        className="headerNavLink headerNavLink--lvl2"
                        target="_self"
                      >
                        Tire recommendation
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.ktm.com/en-be/service/Service-and-safety-check.html"
                        className="headerNavLink headerNavLink--lvl2"
                        target="_self"
                      >
                        Service & Safety Check
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.ktm.com/en-be/service/finance.html"
                        className="headerNavLink headerNavLink--lvl2"
                        target="_self"
                      >
                        Finance
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.ktm.com/en-be/service/mobility-service.html"
                        className="headerNavLink headerNavLink--lvl2"
                        target="_self"
                      >
                        Roadside Assistance
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.ktm.com/en-be/service/Safety.html"
                        className="headerNavLink headerNavLink--lvl2"
                        target="_self"
                      >
                        Safety
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.ktm.com/en-be/service/Freeride-e-hotline.html"
                        className="headerNavLink headerNavLink--lvl2"
                        target="_self"
                      >
                        Freeride E Hotline
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li data-opened="false">
                <Link
                  href="https://www.ktm.com/en-be/news.html#promotions"
                  className="heading headerNavLink headerNavLink--lvl1"
                  target="_self"
                >
                  Power Deals
                </Link>
                <div className="content"></div>
              </li>
            </ul>
          </nav>
          <aside className="nav__aside nav__aside--hidden-text">
            <nav className="nav__aside-links js-lang-nav">
              <Link
                href="https://www.ktm.com/en-be/find-a-dealer.html"
                className="nav__aside-links--dealer-search"
                target="_self"
                data-label="Find a dealer"
              >
                <span>Find a dealer</span>
              </Link>{' '}
              <Link
                href="#"
                className="c-culture-switch__toggle js-lang-toggle nav__aside-links--culture-switch"
                data-label="Belgium"
              >
                <span>Belgium</span>
              </Link>
              <section className="nav__aside-items">
                <div className="c-culture-switch js-lang-items">
                  <div className="c-culture-switch__container container component-fullwidth--padded-lg">
                    <article className="c-culture-switch__column">
                      <section className="c-culture-switch__area">
                        <ul className="c-culture-switch__list js-lang-list">
                          <li>
                            <Link href="https://www.ktm.com/en-int.languageswitch.html">
                              International
                            </Link>
                          </li>
                        </ul>
                      </section>
                      <section className="c-culture-switch__area">
                        <div className="c-culture-switch__region-name">Europe</div>
                        <ul className="c-culture-switch__list js-lang-list c-culture-switch__list--two-cols">
                          <li>
                            <Link href="https://www.ktm.com/de-at.languageswitch.html">
                              Austria
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-be.languageswitch.html">
                              Belgium (en)
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/fr-be.languageswitch.html">
                              Belgium (fr)
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-hr.languageswitch.html">
                              Croatia
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-cy.languageswitch.html">Cyprus</Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-cz.languageswitch.html">
                              Czech Republic
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-dk.languageswitch.html">
                              Denmark
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-ee.languageswitch.html">
                              Estonia
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-fi.languageswitch.html">
                              Finland
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/fr-fr.languageswitch.html">France</Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/de-de.languageswitch.html">
                              Germany
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-gr.languageswitch.html">Greece</Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-hu.languageswitch.html">
                              Hungary
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-ie.languageswitch.html">
                              Ireland
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/it-it.languageswitch.html">Italy</Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-lv.languageswitch.html">Latvia</Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-lt.languageswitch.html">
                              Lithuania
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/fr-lu.languageswitch.html">
                              Luxembourg
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-nl.languageswitch.html">
                              Netherlands
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-no.languageswitch.html">Norway</Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-pl.languageswitch.html">Poland</Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-pt.languageswitch.html">
                              Portugal
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-ro.languageswitch.html">
                              Romania
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-ru.languageswitch.html">Russia</Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-rs.languageswitch.html">Serbia</Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-si.languageswitch.html">
                              Slovenia
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-sk.languageswitch.html">
                              Slovakia
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/es-es.languageswitch.html">Spain</Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-se.languageswitch.html">Sweden</Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/de-ch.languageswitch.html">
                              Switzerland (de)
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/fr-ch.languageswitch.html">
                              Switzerland (fr)
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/it-ch.languageswitch.html">
                              Switzerland (it)
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-tr.languageswitch.html">Turkey</Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-gb.languageswitch.html">
                              United Kingdom
                            </Link>
                          </li>
                        </ul>
                      </section>
                    </article>
                    <article className="c-culture-switch__column">
                      <section className="c-culture-switch__area">
                        <div className="c-culture-switch__region-name">North America</div>
                        <ul className="c-culture-switch__list js-lang-list">
                          <li>
                            <Link href="https://www.ktm.com/en-ca.languageswitch.html">
                              Canada (en)
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/fr-ca.languageswitch.html">
                              Canada (fr)
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/es-mx.languageswitch.html">Mexico</Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-us.languageswitch.html">
                              United States
                            </Link>
                          </li>
                        </ul>
                      </section>
                      <section className="c-culture-switch__area">
                        <div className="c-culture-switch__region-name">Middle East</div>
                        <ul className="c-culture-switch__list js-lang-list c-culture-switch__list--two-cols">
                          <li>
                            <Link href="https://www.ktm.com/en-bh.languageswitch.html">
                              Bahrain
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-jo.languageswitch.html">Jordan</Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-kw.languageswitch.html">Kuwait</Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-lb.languageswitch.html">
                              Lebanon
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-qa.languageswitch.html">Qatar</Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-sa.languageswitch.html">
                              Saudi Arabia
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-ae.languageswitch.html">
                              United Arab Emirates
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-iq.languageswitch.html">Iraq</Link>
                          </li>
                        </ul>
                      </section>
                    </article>
                    <article className="c-culture-switch__column">
                      <section className="c-culture-switch__area">
                        <div className="c-culture-switch__region-name">Latin America</div>
                        <ul className="c-culture-switch__list js-lang-list c-culture-switch__list--two-cols">
                          <li>
                            <Link href="https://www.ktm.com/es-ar.languageswitch.html">
                              Argentina
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/es-bo.languageswitch.html">
                              Bolivia
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/pt-br.languageswitch.html">Brazil</Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/es-cl.languageswitch.html">Chile</Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/es-co.languageswitch.html">
                              Colombia
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/es-cr.languageswitch.html">
                              Costa Rica
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-do.languageswitch.html">
                              Dominican Republic
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/es-ec.languageswitch.html">
                              Ecuador
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/es-gt.languageswitch.html">
                              Guatemala
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/es-ni.languageswitch.html">
                              Nicaragua
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/es-pa.languageswitch.html">Panama</Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/es-py.languageswitch.html">
                              Paraguay
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/es-pe.languageswitch.html">Peru</Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/es-uy.languageswitch.html">
                              Uruguay
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/es-ve.languageswitch.html">
                              Venezuela
                            </Link>
                          </li>
                        </ul>
                      </section>
                      <section className="c-culture-switch__area">
                        <div className="c-culture-switch__region-name">Asia</div>
                        <ul className="c-culture-switch__list js-lang-list c-culture-switch__list--two-cols">
                          <li>
                            <Link href="https://www.ktm.com/en-bd.languageswitch.html">
                              Bangladesh
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-kh.languageswitch.html">
                              Cambodia
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/zh-cn.languageswitch.html">China</Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/fr-pf.languageswitch.html">
                              French Polynesia (FR)
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-hk.languageswitch.html">
                              Hong Kong (CN)
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-in.languageswitch.html">India</Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-id.languageswitch.html">
                              Indonesia
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/ja-jp.languageswitch.html">Japan</Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-my.languageswitch.html">
                              Malaysia
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-mm.languageswitch.html">
                              Myanmar
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-np.languageswitch.html">Nepal</Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/fr-nc.languageswitch.html">
                              New Caledonia (FR)
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-ph.languageswitch.html">
                              Philippines
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-sg.languageswitch.html">
                              Singapore
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-kr.languageswitch.html">
                              South Korea
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-lk.languageswitch.html">
                              Sri Lanka
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-tw.languageswitch.html">
                              Taiwan Region (en)
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/zh-tw.languageswitch.html">
                              Taiwan Region (zh)
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-th.languageswitch.html">
                              Thailand
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-vn.languageswitch.html">
                              Vietnam
                            </Link>
                          </li>
                        </ul>
                      </section>
                    </article>
                    <article className="c-culture-switch__column">
                      <section className="c-culture-switch__area">
                        <div className="c-culture-switch__region-name">Oceania</div>
                        <ul className="c-culture-switch__list js-lang-list">
                          <li>
                            <Link href="https://www.ktm.com/en-au.languageswitch.html">
                              Australia
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-nz.languageswitch.html">
                              New Zealand
                            </Link>
                          </li>
                        </ul>
                      </section>
                      <section className="c-culture-switch__area">
                        <div className="c-culture-switch__region-name">Africa</div>
                        <ul className="c-culture-switch__list js-lang-list c-culture-switch__list--two-cols">
                          <li>
                            <Link href="https://www.ktm.com/fr-bj.languageswitch.html">Benin</Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-eg.languageswitch.html">Egypt</Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-ke.languageswitch.html">Kenya</Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/fr-mg.languageswitch.html">
                              Madagascar
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/fr-mu.languageswitch.html">
                              Mauritius
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/fr-ma.languageswitch.html">
                              Morocco
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-ng.languageswitch.html">
                              Nigeria
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-sc.languageswitch.html">
                              Seychelles
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/en-za.languageswitch.html">
                              South Africa
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.ktm.com/fr-tg.languageswitch.html">Togo</Link>
                          </li>
                        </ul>
                      </section>
                    </article>
                  </div>
                </div>
              </section>
              <Link
                href="http://my.ktm.com/be/en/login"
                className="nav__aside-links--myhub"
                target="_blank"
                rel="noopener noreferrer"
                data-label="My.KTM"
              >
                <span>My.KTM</span>
              </Link>
            </nav>
            <Link href="https://www.ktm.com/en-be.html" className="nav__logo">
              <Image
                src="https://www.ktm.com/content/dam/websites/ktm-com/language-masters/en/logo/37860_KTM_LogoPodium_orange_RGB.jpg"
                alt="KTM Main Page"
                sizes="100vw"
                width={0}
                height={0}
                style={{ width: '100%', height: 'auto' }}
                unoptimized
              />
            </Link>
          </aside>
        </div>
      </div>
    </>
  );
};
