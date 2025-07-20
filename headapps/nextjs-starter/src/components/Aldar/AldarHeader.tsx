import React from 'react';
import Link from 'next/link';

const Header = (): JSX.Element => {
  return (
    <header>
      <div id="header" className="container-fluid">
        <div className="component promo">
          <div className="component-content"></div>
        </div>
        <div className="component aldar-header home">
          <header
            id="aldar-new-header"
            className="component aldar-header home"
            data-activeid="{A14E2BDD-F9F7-4E94-BBCA-43F8AD8BB69D}"
          >
            <div className="header__r1-container">
              <div className="container">
                <div className="header__r1-left">
                  <Link href="https://www.aldar.com/en" className="header__logo-container">
                    <img
                      src="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/logos/aldar-logo-frame-15px2x.png?h=160&amp;iar=0&amp;w=160&amp;rev=3f4a43d31fed43e1960f0c04dd0c3799"
                      alt="Aldar Logo frame 15px2x"
                      width="160"
                      height="160"
                    />
                  </Link>
                  <div className="header__mobile-active-item"></div>
                  <nav className="header__main-nav_container">
                    <ul className="header__mobile-tabs">
                      <li>
                        <Link href="https://www.aldar.com/en" className="header__mobile-tab_link">
                          <figure>
                            <img
                              src="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/icons/home.svg?h=22&amp;iar=0&amp;w=22&amp;rev=2f72649fef7e4b338b84ec432223dd7a"
                              alt="Home"
                              width="22"
                              height="22"
                            />
                          </figure>
                          <label>Home</label>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.aldar.com/en/contact-us"
                          className="header__mobile-tab_link"
                          target="|Custom"
                        >
                          <figure>
                            <img
                              src="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/icons/contact.svg?h=22&amp;iar=0&amp;w=22&amp;rev=7c9f5e689af741d0a55e7ed32e5c370c"
                              alt="Contact"
                              width="22"
                              height="22"
                            />
                          </figure>
                          <label>Contact us</label>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="header__mobile-tab_link button__language-mobile button__language"
                          href={''}
                        >
                          <figure>
                            <img
                              src="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/icons/globe.svg?h=22&amp;iar=0&amp;w=22&amp;rev=b8179a4a6a7c4786ae3103fc65570e1b"
                              alt="globe"
                              width="22"
                              height="22"
                            />
                          </figure>
                          <label>Language</label>
                        </Link>
                      </li>
                    </ul>
                    <div className="header__nav-group__wrapper">
                      <div
                        className="header__nav-group"
                        data-parentid="root"
                        data-animation="headerMain"
                      >
                        <ul className="header__commerce-nav_mobile">
                          <li>
                            <Link
                              href="https://www.aldar.com/en"
                              data-linkid="-{0}"
                              className="header__main-link"
                              data-id="{D9266420-1268-423E-AD67-0E47D399A1E3}"
                            >
                              Buy
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en"
                              data-linkid="-{1}"
                              className="header__main-link"
                              data-id="{A8BD7C70-2D70-41EC-A93A-D6A914E1892F}"
                            >
                              Rent
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__main-nav">
                          <li className="">
                            <Link
                              href="https://www.aldar.com/en/about-abu-dhabi"
                              className="header__main-link "
                              data-id="{290FE6B7-3606-4C78-BD08-EB9B58CBD76D}"
                            >
                              <span>Explore Abu Dhabi</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li className="">
                            <Link
                              href="https://www.aldar.com/en/explore-aldar"
                              className="header__main-link "
                              data-id="{C9DC014D-FE14-4A8D-990A-0D6C6FF93E58}"
                            >
                              <span>Explore Aldar</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li className="">
                            <Link
                              className="header__main-link "
                              data-id="{9A802E34-08B6-45BC-894B-CA399470BFBD}"
                              href={''}
                            >
                              <span>Media</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li className="">
                            <Link
                              className="header__main-link "
                              data-id="{7C182C04-0559-431D-9DD5-4543416E6FF1}"
                              href={''}
                            >
                              <span>Investor Relations</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li className="">
                            <Link
                              className="header__main-link "
                              data-id="{1683580F-32E0-4178-8A8B-617A801D6D81}"
                              href={''}
                            >
                              <span>Careers</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{290FE6B7-3606-4C78-BD08-EB9B58CBD76D}"
                        data-parentid="{21E4BA19-8295-40C3-A21E-4C1EF046610B}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/about-abu-dhabi">
                              <span className="all-title">All</span>
                              Explore Abu Dhabi
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/about-abu-dhabi/market-overview"
                              className="header__sub-link link-only"
                              data-id="{8279EB7A-C24F-41D5-B0EF-C5AF1F22E83A}"
                            >
                              <span>Market Overview</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/about-abu-dhabi/golden-visa"
                              className="header__sub-link link-only"
                              data-id="{EEBC96FD-28D6-4B0C-A9DC-64C511199FED}"
                            >
                              <span>Golden Visa</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/about-abu-dhabi/dari"
                              className="header__sub-link link-only"
                              data-id="{1FB15AF7-A639-46D7-BC66-96C67A7064D3}"
                            >
                              <span>Dari</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{C9DC014D-FE14-4A8D-990A-0D6C6FF93E58}"
                        data-parentid="{914E44EE-AA52-41DD-9B51-D4405C531446}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar">
                              <span className="all-title">All</span>
                              Explore Aldar
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="header__sub-link "
                              data-id="{3CD00255-E2EA-4EE9-BE9D-9A3D9D8AF526}"
                              href={''}
                            >
                              <span>About Aldar</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses"
                              className="header__sub-link "
                              data-id="{AEC9BD11-5F5F-489C-B543-637033FF7DAA}"
                            >
                              <span>Businesses</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/corporate-governance"
                              className="header__sub-link link-only"
                              data-id="{D62BACCF-B4EF-432A-8900-88FBB0441F0D}"
                            >
                              <span>Corporate Governance </span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/sustainability"
                              className="header__sub-link "
                              data-id="{7C8E74B8-A1DE-40F4-B76E-AF2A1E2A8838}"
                            >
                              <span>Sustainability</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/aldar-brand"
                              className="header__sub-link link-only"
                              data-id="{065FB7C1-945D-4BEE-9318-1ED6A63F73C8}"
                            >
                              <span>Aldar Brand</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/live-aldar"
                              className="header__sub-link "
                              data-id="{E1132B35-B5E2-47BC-8F4A-3170C279CAAC}"
                            >
                              <span>Live Aldar</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/art"
                              className="header__sub-link link-only"
                              data-id="{D01C59BB-FE5C-4F92-B877-41944156DF13}"
                            >
                              <span>Art</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/innovation"
                              className="header__sub-link "
                              data-id="{BCC2FA58-7881-4A0D-AE8E-036EA9EF0813}"
                            >
                              <span>Innovation</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{3CD00255-E2EA-4EE9-BE9D-9A3D9D8AF526}"
                        data-parentid=""
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href={''}>
                              <span className="all-title">All</span>
                              About Aldar
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/about-aldar/story"
                              className="header__sub-link link-only"
                              data-id="{FF0DB164-0BB2-448F-AC11-793181A264D2}"
                            >
                              <span>Story</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/about-aldar/leadership"
                              className="header__sub-link link-only"
                              data-id="{3F65314F-B4DE-4A4B-BCBA-6C0C20D96AD8}"
                            >
                              <span>Leadership</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/about-aldar/culture-and-values"
                              className="header__sub-link "
                              data-id="{BDA7F4C7-4AE0-4733-AA7B-4CACA48A7F21}"
                            >
                              <span>Culture and Values</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/about-aldar/strategy"
                              className="header__sub-link link-only"
                              data-id="{8DFCE321-804A-4249-952B-39EDB8C87DD5}"
                            >
                              <span>Strategy</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/about-aldar/sponsorships"
                              className="header__sub-link link-only"
                              data-id="{1DF11A3E-D3B7-45CB-8F7B-7B0B7785A062}"
                            >
                              <span>Sponsorships</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/about-aldar/procurement"
                              className="header__sub-link "
                              data-id="{EDF08168-B6AE-4B3F-98A7-D1244D75E32D}"
                            >
                              <span>Procurement</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="header__sub-link "
                              data-id="{7748673D-098E-4033-ADEA-0D92DED6E49C}"
                              href={''}
                            >
                              <span>E-Services</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/about-aldar/aldar-square"
                              className="header__sub-link link-only"
                              data-id="{5145E4B4-7B02-4271-BD5F-6134DC3843B2}"
                            >
                              <span>Aldar Square</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{BDA7F4C7-4AE0-4733-AA7B-4CACA48A7F21}"
                        data-parentid="{54F6F892-EAE3-478B-80B9-CEBDEFAA452D}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/about-aldar/culture-and-values">
                              <span className="all-title">All</span>
                              Culture and Values
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/about-aldar/culture-and-values/values"
                              className="header__sub-link link-only"
                              data-id="{2FAEBCD7-E441-4BDA-B895-FD1DF647EDA7}"
                            >
                              <span>Values</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/about-aldar/culture-and-values/talent"
                              className="header__sub-link link-only"
                              data-id="{D18A3757-9269-42F3-85BB-E38FE6A93EAA}"
                            >
                              <span>Talent</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{EDF08168-B6AE-4B3F-98A7-D1244D75E32D}"
                        data-parentid="{1C0319BD-5B69-4C80-AB07-D84E00833DE7}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/about-aldar/procurement">
                              <span className="all-title">All</span>
                              Procurement
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://aldar.supplier.mn1.ariba.com/register"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="header__sub-link link-only"
                              data-id="{80C2FDF0-A3C1-4A02-99ED-17F8AE8AC608}"
                            >
                              <span>E-sourcing Portal</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/procurement/po-terms-and-conditions/purchase-order--general-terms-and-conditions-legal-june-2023.pdf?rev=9c07b50856944b798569f36747375c45"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="header__sub-link link-only"
                              data-id="{15BAE04E-C79E-497E-97AB-B7B3696CE0FE}"
                            >
                              <span>PO Terms & Conditions</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/about-aldar/procurement/workers-welfare"
                              className="header__sub-link link-only"
                              data-id="{49B912CF-0A89-4A05-95CA-793E73E5DCA7}"
                            >
                              <span>Workers Welfare</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/about-aldar/procurement/sustainability"
                              className="header__sub-link link-only"
                              data-id="{AFE0FC4B-D2BA-44DA-83D7-5DD9F2D58D54}"
                            >
                              <span>Procurement Sustainability</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/about-aldar/procurement/icv-program"
                              className="header__sub-link link-only"
                              data-id="{38FB3212-4A4E-4143-83FD-18D71CEEEDF0}"
                            >
                              <span>ICV Program</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/about-aldar/procurement/certifying-bodies"
                              className="header__sub-link link-only"
                              data-id="{B9F339E2-A589-4CB6-AED4-E6C88A7D899F}"
                            >
                              <span>Certifying Bodies</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{7748673D-098E-4033-ADEA-0D92DED6E49C}"
                        data-parentid=""
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href={''}>
                              <span className="all-title">All</span>
                              E-Services
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/live/login"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="header__sub-link link-only"
                              data-id="{CF910452-4999-4C54-9C4A-0BF75BD8BB62}"
                            >
                              <span>Customer Portal</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.khidmah.com/en"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="header__sub-link link-only"
                              data-id="{EADED852-C2D5-473A-85CD-13770B7280BA}"
                            >
                              <span>Khidmah</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.provis.ae/en"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="header__sub-link link-only"
                              data-id="{164B2103-58AB-4D01-AB2E-70656A0015D0}"
                            >
                              <span>Provis</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://broker.aldar.com/_layouts/15/brokerportal/BrokerLogin.aspx?ReturnUrl=%2f_layouts%2f15%2fAuthenticate.aspx%3fSource%3d%252F&amp;Source=%2F&amp;_gl=1*11sd6ih*_gcl_au*MTM4ODQzNzk5LjE2ODcyNTAxMDc"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="header__sub-link link-only"
                              data-id="{6D244FBB-F236-49BB-AC2F-9D84069254F8}"
                            >
                              <span>Aldar Brokers</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://apps.apple.com/us/app/live-aldar/id6468037968"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="header__sub-link link-only"
                              data-id="{18A3A15A-5459-4FBA-A49B-295924408180}"
                            >
                              <span>Aldar IOS app</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://play.google.com/store/apps/details?id=app.aldar.live"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="header__sub-link link-only"
                              data-id="{F1EFBBF9-ACBE-4FD7-AE39-C87D582373F6}"
                            >
                              <span>Aldar Android App</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{AEC9BD11-5F5F-489C-B543-637033FF7DAA}"
                        data-parentid="{1E81DBF4-8ABD-4114-9923-AB9767BA4F0F}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/businesses">
                              <span className="all-title">All</span>
                              Businesses
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="header__sub-link "
                              data-id="{B3AC7E5B-33C4-42EC-AD46-B9C3D043ADEF}"
                              href={''}
                            >
                              <span>Development</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="header__sub-link "
                              data-id="{A9DAE922-B2F1-474B-B48A-99BC01AE1F72}"
                              href={''}
                            >
                              <span>Investment</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/education"
                              className="header__sub-link "
                              data-id="{646AB515-B8A5-4A75-BC05-38C2E0420897}"
                            >
                              <span>Education</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/hospitality"
                              className="header__sub-link "
                              data-id="{51B9DA07-0D73-4291-B7ED-9B1DB8531A07}"
                            >
                              <span>Hospitality</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/aldar-projects"
                              className="header__sub-link link-only"
                              data-id="{BA7DACBB-1A3A-486C-BA45-A71F6C9C06FF}"
                            >
                              <span>Projects</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{B3AC7E5B-33C4-42EC-AD46-B9C3D043ADEF}"
                        data-parentid=""
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href={''}>
                              <span className="all-title">All</span>
                              Development
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential"
                              className="header__sub-link "
                              data-id="{43044A61-26FF-473C-AEBE-AD18E440B907}"
                            >
                              <span>Residential</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/land"
                              className="header__sub-link link-only"
                              data-id="{182B80BC-F491-4079-9175-2F3DE902561B}"
                            >
                              <span>Land Portfolio</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/partnerships"
                              className="header__sub-link link-only"
                              data-id="{955A491D-7FB8-4357-B483-3A7F352F1A2D}"
                            >
                              <span>Partnerships</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{43044A61-26FF-473C-AEBE-AD18E440B907}"
                        data-parentid="{7369E957-FC78-4F1F-97B1-6F16677F70E3}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/businesses/development/residential">
                              <span className="all-title">All</span>
                              Residential
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island"
                              className="header__sub-link "
                              data-id="{5C0895F4-07C3-4B2C-BF1C-DF5903421BB1}"
                            >
                              <span>Yas Island</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island"
                              className="header__sub-link "
                              data-id="{8A4673AE-AEC4-4647-A162-58AC20BAA572}"
                            >
                              <span>Saadiyat Island</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island"
                              className="header__sub-link "
                              data-id="{2B6B4042-8B60-449E-9EB9-FF3292625768}"
                            >
                              <span>Reem Island</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/al-raha-beach"
                              className="header__sub-link "
                              data-id="{81D1982E-966A-46F3-9EAB-56ADAFAE5EE2}"
                            >
                              <span>Al Raha Beach</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations"
                              className="header__sub-link "
                              data-id="{65B08FF6-EECF-4F0C-8B28-81944214EF00}"
                            >
                              <span>Other Destinations</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{5C0895F4-07C3-4B2C-BF1C-DF5903421BB1}"
                        data-parentid="{E8728555-C500-4572-BB25-8069F40ADBEA}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island">
                              <span className="all-title">All</span>
                              Yas Island
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/yas-island-sustainable-city"
                              className="header__sub-link link-only"
                              data-id="{219BED00-434F-42BE-85F3-58ECEADCB9B0}"
                            >
                              <span>The Sustainable City</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/yas-park-views"
                              className="header__sub-link link-only"
                              data-id="{CA5CD003-C276-48EC-9EC5-280DEA92F218}"
                            >
                              <span>Yas Park Views</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/yas-acres-north-bay"
                              className="header__sub-link link-only"
                              data-id="{D45BF7CE-50D2-4A85-B815-93211C1D7FFF}"
                            >
                              <span>Yas Acres North Bay</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/yas-golf"
                              className="header__sub-link link-only"
                              data-id="{414B5807-4FA7-4005-A467-938BE4F713CA}"
                            >
                              <span>Yas Golf Collection</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/yas-golf-collection-views"
                              className="header__sub-link link-only"
                              data-id="{5296CD8B-B1CE-436C-BFA5-45C3FE8CE72B}"
                            >
                              <span>Yas Golf Collection Views</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/yas-park-gate"
                              className="header__sub-link link-only"
                              data-id="{17738A9C-5CDB-4887-8D73-E60867EB1696}"
                            >
                              <span>Yas Park Gate</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/lea-yas-island"
                              className="header__sub-link "
                              data-id="{19B94A19-6AB8-4E29-A247-74E2FE61B4ED}"
                            >
                              <span>Lea Yas Island</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/mayan"
                              className="header__sub-link "
                              data-id="{C695F154-E532-483F-B033-5FB289B2AD43}"
                            >
                              <span>Mayan</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/ansam"
                              className="header__sub-link "
                              data-id="{ACCA0539-5AC4-4D0C-8AEA-2C0741AAA09F}"
                            >
                              <span>Ansam</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/noya"
                              className="header__sub-link "
                              data-id="{D52C21BD-F70B-4D42-916E-AF6ED174EE0D}"
                            >
                              <span>Noya</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/noya-luma"
                              className="header__sub-link "
                              data-id="{6D613337-9BBD-4055-B7A0-722285C0E323}"
                            >
                              <span>Noya Luma</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/noya-viva"
                              className="header__sub-link "
                              data-id="{61C38DDA-2599-45C0-AD35-724C127D8DE7}"
                            >
                              <span>Noya Viva</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/yas-acres"
                              className="header__sub-link "
                              data-id="{587035B8-266B-485C-9CAD-2020F1765E11}"
                            >
                              <span>Yas Acres</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/waters-edge"
                              className="header__sub-link "
                              data-id="{3C970FC0-BA36-439E-AE69-77D45CD24D68}"
                            >
                              <span>Water&apos;s Edge</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/west-yas"
                              className="header__sub-link "
                              data-id="{E083243A-FC0D-4844-AE52-39A52811EA7F}"
                            >
                              <span>West Yas</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{19B94A19-6AB8-4E29-A247-74E2FE61B4ED}"
                        data-parentid="{D431F222-136A-40FB-8FC4-C594BEF5674C}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/lea-yas-island">
                              <span className="all-title">All</span>
                              Lea Yas Island
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/lea-yas-island"
                              className="header__sub-link link-only"
                              data-id="{3CEFEDE8-F617-481C-88F3-6C955836F1CE}"
                            >
                              <span>About the project</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/lea-yas-island/project-features"
                              className="header__sub-link link-only"
                              data-id="{43F6F372-A113-4F81-886D-05FA18C46941}"
                            >
                              <span>Features</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{C695F154-E532-483F-B033-5FB289B2AD43}"
                        data-parentid="{91D8D3C4-8CA3-43DD-93AC-643C06A8B7DA}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/mayan">
                              <span className="all-title">All</span>
                              Mayan
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/mayan"
                              className="header__sub-link link-only"
                              data-id="{3381DF01-1776-479D-B046-7F6515AC9246}"
                            >
                              <span>About the project</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/mayan/project-features"
                              className="header__sub-link link-only"
                              data-id="{5D15F9D5-437C-47A4-BC74-F3B482CBA143}"
                            >
                              <span>Features</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{ACCA0539-5AC4-4D0C-8AEA-2C0741AAA09F}"
                        data-parentid="{ACD71176-159F-479E-BF95-478564706BAF}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/ansam">
                              <span className="all-title">All</span>
                              Ansam
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/ansam"
                              className="header__sub-link link-only"
                              data-id="{74BD2660-2961-46FF-92EC-43AC71782B0F}"
                            >
                              <span>About the project</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/ansam/project-features"
                              className="header__sub-link link-only"
                              data-id="{A1A5A743-1822-43B2-87FE-433797240781}"
                            >
                              <span>Features</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{D52C21BD-F70B-4D42-916E-AF6ED174EE0D}"
                        data-parentid="{9EF48127-1FDC-4521-BA66-02024DF23CFB}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/noya">
                              <span className="all-title">All</span>
                              Noya
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/noya"
                              className="header__sub-link link-only"
                              data-id="{90542F9F-EF74-46F9-8330-06363D6B4859}"
                            >
                              <span>About the project</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/noya/project-features"
                              className="header__sub-link link-only"
                              data-id="{C786B3AD-2A12-4D57-A578-D236D2DDF2F8}"
                            >
                              <span>Features</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{6D613337-9BBD-4055-B7A0-722285C0E323}"
                        data-parentid="{5305A7C4-3EFB-4BBA-BC48-A26B282DDCA5}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/noya-luma">
                              <span className="all-title">All</span>
                              Noya Luma
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/noya-luma"
                              className="header__sub-link link-only"
                              data-id="{EBC8D70B-EA8A-4165-A5D6-85209626777B}"
                            >
                              <span>About the project</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/noya-luma/project-features"
                              className="header__sub-link link-only"
                              data-id="{AC2C9C65-90B8-49C0-87EB-79A268E646FB}"
                            >
                              <span>Features</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{61C38DDA-2599-45C0-AD35-724C127D8DE7}"
                        data-parentid="{1803D367-13C9-453A-A045-0F8657732395}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/noya-viva">
                              <span className="all-title">All</span>
                              Noya Viva
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/noya-viva"
                              className="header__sub-link link-only"
                              data-id="{9477C767-6FF2-4033-99E4-2D5CD2512091}"
                            >
                              <span>About the project</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/noya-viva/project-features"
                              className="header__sub-link link-only"
                              data-id="{2BD88445-3827-4EBD-BD2C-DCD704FB031B}"
                            >
                              <span>Features</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{587035B8-266B-485C-9CAD-2020F1765E11}"
                        data-parentid="{0989FBEE-DAD6-4AEB-A225-827E2CBE6B84}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/yas-acres">
                              <span className="all-title">All</span>
                              Yas Acres
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/yas-acres"
                              className="header__sub-link link-only"
                              data-id="{09922C21-7D5C-44AF-823D-BCC7BEAF13AA}"
                            >
                              <span>About the project</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/yas-acres/project-features"
                              className="header__sub-link link-only"
                              data-id="{59E2EC47-F085-4690-B203-F95F481B0219}"
                            >
                              <span>Features</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{3C970FC0-BA36-439E-AE69-77D45CD24D68}"
                        data-parentid="{CC20DA72-A421-466C-9049-434AFC85308A}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/waters-edge">
                              <span className="all-title">All</span>
                              Water&apos;s Edge
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/waters-edge/buy"
                              className="header__sub-link link-only"
                              data-id="{13083ED4-AA91-4BFE-BE8F-0A4A6C4DE7A2}"
                            >
                              <span>Buy</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/waters-edge"
                              className="header__sub-link link-only"
                              data-id="{35A76A88-7DF2-4318-BA44-38A1A122E09B}"
                            >
                              <span>About the project</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/waters-edge/project-features"
                              className="header__sub-link link-only"
                              data-id="{7A6C070D-765A-4739-B4DA-7175918B9DEB}"
                            >
                              <span>Features</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{E083243A-FC0D-4844-AE52-39A52811EA7F}"
                        data-parentid="{49CD8B3E-F6DB-45F8-9461-11B627F564D6}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/west-yas">
                              <span className="all-title">All</span>
                              West Yas
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/west-yas"
                              className="header__sub-link link-only"
                              data-id="{E5472269-53ED-4F27-87B3-F54C090DDD9C}"
                            >
                              <span>About the project</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/west-yas/project-features"
                              className="header__sub-link link-only"
                              data-id="{408766EE-42C3-493C-9ABB-8CE2F3ECCBBE}"
                            >
                              <span>Features</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{8A4673AE-AEC4-4647-A162-58AC20BAA572}"
                        data-parentid="{B978C3F5-CAF4-4FAB-8C21-73EAA06CBBDA}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island">
                              <span className="all-title">All</span>
                              Saadiyat Island
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/the-source"
                              className="header__sub-link link-only"
                              data-id="{9445FEAA-C7B8-414B-9D9C-97D10FF32738}"
                            >
                              <span>The Source</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/the-source-ii"
                              className="header__sub-link link-only"
                              data-id="{46456FBE-BC5B-4106-9E8D-E9D1D8154A72}"
                            >
                              <span>The Source II</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/grove-beach-views"
                              className="header__sub-link link-only"
                              data-id="{D06A62A9-3EEB-44B9-BFBD-9ECC0C7871BD}"
                            >
                              <span>Grove Beach Views</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/grove-museum-views"
                              className="header__sub-link link-only"
                              data-id="{344D2864-02BD-4299-A4DB-33CF8B75BA85}"
                            >
                              <span>Grove Museum Views</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/Aldar Tenant/Aldar2/Home/explore-aldar/businesses/development/residential/saadiyat-island/manarat-living"
                              className="header__sub-link link-only"
                              data-id="{54C3DDF6-CEC7-4A6A-8949-6A202F222D9B}"
                            >
                              <span>Manarat Living</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/saadiyat-lagoons"
                              className="header__sub-link link-only"
                              data-id="{FA699985-5BDA-4131-A51E-EB7D5954D25D}"
                            >
                              <span>Saadiyat Lagoons</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/jawaher-al-saadiyat"
                              className="header__sub-link "
                              data-id="{0CC4A77B-1973-473D-9D3F-5B875E15F0A2}"
                            >
                              <span>Jawaher Al Saadiyat</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/mamsha-al-saadiyat"
                              className="header__sub-link "
                              data-id="{5E1A5963-55D8-49DF-80D6-449201A45B1E}"
                            >
                              <span>Mamsha Al Saadiyat</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/saadiyat-reserve"
                              className="header__sub-link "
                              data-id="{716117E2-FAB3-414E-BE6F-E73688829072}"
                            >
                              <span>Saadiyat Reserve </span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/saadiyat-reserve-the-dunes"
                              className="header__sub-link "
                              data-id="{19E74DBE-88DE-44CE-A093-62DAE5D4BBDC}"
                            >
                              <span>Saadiyat Reserve The Dunes</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{0CC4A77B-1973-473D-9D3F-5B875E15F0A2}"
                        data-parentid="{2F0878AE-AECF-456F-9A11-E3DFDEF6466E}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/jawaher-al-saadiyat">
                              <span className="all-title">All</span>
                              Jawaher Al Saadiyat
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/jawaher-al-saadiyat"
                              className="header__sub-link link-only"
                              data-id="{A6817C4E-6B6C-4B31-8F27-D745DDCDCE58}"
                            >
                              <span>About the Project</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/jawaher-al-saadiyat/project-features"
                              className="header__sub-link link-only"
                              data-id="{8CD6E3A9-9869-4B59-BE70-BC62CDA575A1}"
                            >
                              <span>Features</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{5E1A5963-55D8-49DF-80D6-449201A45B1E}"
                        data-parentid="{5ED13E24-93AC-49FF-BB23-A81C24917FE0}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/mamsha-al-saadiyat">
                              <span className="all-title">All</span>
                              Mamsha Al Saadiyat
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/mamsha-al-saadiyat/buy"
                              className="header__sub-link link-only"
                              data-id="{78CE4B43-B394-4AF4-8D9C-70BED692244D}"
                            >
                              <span>Buy</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/mamsha-al-saadiyat"
                              className="header__sub-link link-only"
                              data-id="{6D82D8A5-42A7-4631-B80D-2BF8134C1F3C}"
                            >
                              <span>About the Project</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/mamsha-al-saadiyat/project-features"
                              className="header__sub-link link-only"
                              data-id="{D930468D-50DF-4CBC-A387-DBE30B1B0213}"
                            >
                              <span>Features</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{716117E2-FAB3-414E-BE6F-E73688829072}"
                        data-parentid="{5233D170-FE69-4804-A691-D01BDABC782D}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/saadiyat-reserve">
                              <span className="all-title">All</span>
                              Saadiyat Reserve
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/saadiyat-reserve"
                              className="header__sub-link link-only"
                              data-id="{87C9CF73-2257-4E19-9645-2FF440CE295A}"
                            >
                              <span>About the Project</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/saadiyat-reserve/project-features"
                              className="header__sub-link link-only"
                              data-id="{C5F4DB3D-7BA0-4734-A31A-B31B7A8F124D}"
                            >
                              <span>Features</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{19E74DBE-88DE-44CE-A093-62DAE5D4BBDC}"
                        data-parentid="{9D55F6A7-4521-4FFB-ABEE-FFDE5B29DEC5}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/saadiyat-reserve-the-dunes">
                              <span className="all-title">All</span>
                              Saadiyat Reserve The Dunes
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/saadiyat-reserve-the-dunes"
                              className="header__sub-link link-only"
                              data-id="{FDF06CEE-59B7-4D34-A482-2EB9036C5521}"
                            >
                              <span>About the Project</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/saadiyat-reserve-the-dunes/project-features"
                              className="header__sub-link link-only"
                              data-id="{98975D74-61B3-4515-85CF-EF16F63F29F9}"
                            >
                              <span>Features</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{2B6B4042-8B60-449E-9EB9-FF3292625768}"
                        data-parentid="{461EAB17-BF66-4962-A159-21DE2093144D}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island">
                              <span className="all-title">All</span>
                              Reem Island
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/reflection"
                              className="header__sub-link "
                              data-id="{396335A9-6A83-4A49-98CF-F7651BF46CA6}"
                            >
                              <span>Reflection</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/shams-meera"
                              className="header__sub-link "
                              data-id="{F3E7A1D1-E6DE-48E9-A01B-B12905802237}"
                            >
                              <span>Meera</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/arc-towers"
                              className="header__sub-link "
                              data-id="{CD3C4DC3-528F-49ED-A32E-1E87A14DC259}"
                            >
                              <span>Arc Towers</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/sun-and-sky-towers"
                              className="header__sub-link "
                              data-id="{B497B952-7B8C-404B-9591-6989DA475BF6}"
                            >
                              <span>Sun and Sky Towers </span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/the-gate-towers"
                              className="header__sub-link "
                              data-id="{6975077A-07FE-46EF-876E-35FC3BA56614}"
                            >
                              <span>The Gate Towers </span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/the-bridges"
                              className="header__sub-link "
                              data-id="{17605E68-1FA6-4339-9AAB-5EA1E9680C94}"
                            >
                              <span>The Bridges</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{396335A9-6A83-4A49-98CF-F7651BF46CA6}"
                        data-parentid="{CC3ABB34-1A9D-4347-9F2D-3D93605727F2}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/reflection">
                              <span className="all-title">All</span>
                              Reflection
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/reflection/buy"
                              className="header__sub-link link-only"
                              data-id="{EE5C8883-EB59-4A8C-A178-CD57FA1D5345}"
                            >
                              <span>Buy</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/reflection"
                              className="header__sub-link link-only"
                              data-id="{A58DA9A9-EC2B-414D-8ADE-610102C3D400}"
                            >
                              <span>About the project</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/reflection/project-features"
                              className="header__sub-link link-only"
                              data-id="{65A25586-3090-42D8-8660-9604F8FA96F9}"
                            >
                              <span>Features</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{F3E7A1D1-E6DE-48E9-A01B-B12905802237}"
                        data-parentid="{BC4EB050-12CE-49D3-B138-51C62AB6662F}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/shams-meera">
                              <span className="all-title">All</span>
                              Meera
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/shams-meera/buy"
                              className="header__sub-link link-only"
                              data-id="{6F35A373-9CBE-4FFF-88C3-0F7ABD5FC51D}"
                            >
                              <span>Buy</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/shams-meera"
                              className="header__sub-link link-only"
                              data-id="{1C6E6158-29CB-4760-B0A1-2CEE86A6BC0F}"
                            >
                              <span>About the project</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/shams-meera/project-features"
                              className="header__sub-link link-only"
                              data-id="{46AC8CA8-2A20-4961-893A-035E364365D6}"
                            >
                              <span>Features</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{CD3C4DC3-528F-49ED-A32E-1E87A14DC259}"
                        data-parentid="{13EB8064-4EEE-4E7F-B2DC-3C0251EEC4F4}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/arc-towers">
                              <span className="all-title">All</span>
                              Arc Towers
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/arc-towers/rent"
                              className="header__sub-link link-only"
                              data-id="{479F8C51-11B8-4F5D-B764-9310939B890A}"
                            >
                              <span>Rent</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/arc-towers"
                              className="header__sub-link link-only"
                              data-id="{168FD3A9-E851-47BC-BB19-54EAADAEAB81}"
                            >
                              <span>About the project</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/arc-towers/project-features"
                              className="header__sub-link link-only"
                              data-id="{4D889B4B-FCE5-4C68-9481-08675BD47F5E}"
                            >
                              <span>Features</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{B497B952-7B8C-404B-9591-6989DA475BF6}"
                        data-parentid="{F580DCEC-135F-416C-A5A0-5FB3B42BD87D}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/sun-and-sky-towers">
                              <span className="all-title">All</span>
                              Sun and Sky Towers
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/sun-and-sky-towers/rent"
                              className="header__sub-link link-only"
                              data-id="{A430D10D-E10F-4B8A-8B10-47B049928AB6}"
                            >
                              <span>Rent</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/sun-and-sky-towers"
                              className="header__sub-link link-only"
                              data-id="{BE9F11B9-8C62-41F0-8BEF-F3978C42656D}"
                            >
                              <span>About the project</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/sun-and-sky-towers/project-features"
                              className="header__sub-link link-only"
                              data-id="{CA0A9B35-4837-4318-982B-8B3FA503D927}"
                            >
                              <span>Features</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{6975077A-07FE-46EF-876E-35FC3BA56614}"
                        data-parentid="{40FF3E80-7D0B-458C-9FEC-6BD30E7EACEE}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/the-gate-towers">
                              <span className="all-title">All</span>
                              The Gate Towers
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/the-gate-towers/rent"
                              className="header__sub-link link-only"
                              data-id="{F67A64FB-13B2-48BE-B773-F7BBCCB3BADA}"
                            >
                              <span>Rent</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/the-gate-towers"
                              className="header__sub-link link-only"
                              data-id="{DA8DFF35-2AF7-497A-96ED-59033B741CEA}"
                            >
                              <span>About the project</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/the-gate-towers/project-features"
                              className="header__sub-link link-only"
                              data-id="{B7C6B6B1-0B24-4CCC-8502-0E113DA4F65D}"
                            >
                              <span>Features</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{17605E68-1FA6-4339-9AAB-5EA1E9680C94}"
                        data-parentid="{2B1512CB-2A64-4C19-A761-4E2D764A83FC}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/the-bridges">
                              <span className="all-title">All</span>
                              The Bridges
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/the-bridges/buy"
                              className="header__sub-link link-only"
                              data-id="{5B113795-13E3-49B3-BAC4-3FAECA30E750}"
                            >
                              <span>Buy</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/the-bridges/rent"
                              className="header__sub-link link-only"
                              data-id="{AE20C0E1-CD79-4764-9E3A-8BCD0DCC7E4E}"
                            >
                              <span>Rent</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/the-bridges"
                              className="header__sub-link link-only"
                              data-id="{5FDC1F1E-02CF-4B99-A135-51D0BC6CB3E5}"
                            >
                              <span>About the project</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/the-bridges/project-features"
                              className="header__sub-link link-only"
                              data-id="{444D2676-6D78-4801-A153-85CE07FF3FD7}"
                            >
                              <span>Features</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{81D1982E-966A-46F3-9EAB-56ADAFAE5EE2}"
                        data-parentid="{76FA5DCC-37D6-4644-80AA-61F96EF7E45F}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/al-raha-beach">
                              <span className="all-title">All</span>
                              Al Raha Beach
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/al-raha-beach/al-bandar"
                              className="header__sub-link "
                              data-id="{1F83A43C-88A8-46F1-A945-3BA4F246ABA4}"
                            >
                              <span>Al Bandar</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/al-raha-beach/al-hadeel"
                              className="header__sub-link "
                              data-id="{980518E6-64F0-4BDA-9F13-27C0B58D6150}"
                            >
                              <span>Al Hadeel</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/al-raha-beach/al-muneera"
                              className="header__sub-link "
                              data-id="{E4F6B981-910A-47B6-A092-923FF18EE8C1}"
                            >
                              <span>Al Muneera</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/al-raha-beach/al-zeina"
                              className="header__sub-link "
                              data-id="{71056207-DCB6-4CAA-901D-A78BF0D54195}"
                            >
                              <span>Al Zeina</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{1F83A43C-88A8-46F1-A945-3BA4F246ABA4}"
                        data-parentid="{130B5B9B-8E9C-4984-8459-AE180F8F4D19}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/al-raha-beach/al-bandar">
                              <span className="all-title">All</span>
                              Al Bandar
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/al-raha-beach/al-bandar"
                              className="header__sub-link link-only"
                              data-id="{A06F460C-4D7B-464F-8F48-B4E96F65D0BF}"
                            >
                              <span>About the project</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/al-raha-beach/al-bandar/project-features"
                              className="header__sub-link link-only"
                              data-id="{766DC3F7-DD0A-4514-B16E-19D4D390B177}"
                            >
                              <span>Features</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{980518E6-64F0-4BDA-9F13-27C0B58D6150}"
                        data-parentid="{1D373F97-FBF7-4B51-93EA-5109C9C27C3B}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/al-raha-beach/al-hadeel">
                              <span className="all-title">All</span>
                              Al Hadeel
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/al-raha-beach/al-hadeel/buy"
                              className="header__sub-link link-only"
                              data-id="{8CA2C15E-6A7B-45FA-8728-28E87C3AA96E}"
                            >
                              <span>Buy</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/al-raha-beach/al-hadeel"
                              className="header__sub-link link-only"
                              data-id="{75B564DF-7A8C-4598-86A9-8776FC22226A}"
                            >
                              <span>About the project</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/al-raha-beach/al-hadeel/project-features"
                              className="header__sub-link link-only"
                              data-id="{DE0A829B-9456-4A9B-AE6E-09A6AF3FD1F4}"
                            >
                              <span>Features</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{E4F6B981-910A-47B6-A092-923FF18EE8C1}"
                        data-parentid="{FE405FF6-02FB-488B-ADAB-58A2AAC6D735}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/al-raha-beach/al-muneera">
                              <span className="all-title">All</span>
                              Al Muneera
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/al-raha-beach/al-muneera"
                              className="header__sub-link link-only"
                              data-id="{900C314A-FAEB-453F-B368-5B2233F8786E}"
                            >
                              <span>About the project</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/al-raha-beach/al-muneera/project-features"
                              className="header__sub-link link-only"
                              data-id="{2AA7EE96-8CB2-4562-B4AF-2490B0B79776}"
                            >
                              <span>Features</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{71056207-DCB6-4CAA-901D-A78BF0D54195}"
                        data-parentid="{5C1F7856-6E7A-4C12-A3E7-2806C7776923}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/al-raha-beach/al-zeina">
                              <span className="all-title">All</span>
                              Al Zeina
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/al-raha-beach/al-zeina/rent"
                              className="header__sub-link link-only"
                              data-id="{B2F62060-A5CE-4C20-9F08-6DD70E741A9D}"
                            >
                              <span>Rent</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/al-raha-beach/al-zeina"
                              className="header__sub-link link-only"
                              data-id="{A55FD004-3F0C-4B11-B53C-86517E86988D}"
                            >
                              <span>About the project</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/al-raha-beach/al-zeina/project-features"
                              className="header__sub-link link-only"
                              data-id="{A828138B-FABC-4A06-A84C-2DD7FA670E45}"
                            >
                              <span>Features</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{65B08FF6-EECF-4F0C-8B28-81944214EF00}"
                        data-parentid="{7D1F2531-480E-4B51-8BAD-61479D3895A5}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations">
                              <span className="all-title">All</span>
                              Other Destinations
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/alghadeer"
                              className="header__sub-link "
                              data-id="{B523CA2D-1D14-4A08-A2D9-BA2F3209AD95}"
                            >
                              <span>Alghadeer</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/al-reeman-i"
                              className="header__sub-link "
                              data-id="{A2D670C8-3C9D-4EEF-8AF6-7293849B9593}"
                            >
                              <span>Alreeman </span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/fay-alreeman"
                              className="header__sub-link "
                              data-id="{65F6623B-B71F-47DE-94FE-401F6E6270FE}"
                            >
                              <span>Fay Alreeman</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/fay-alreeman-ii"
                              className="header__sub-link link-only"
                              data-id="{FFF66263-8BBC-41BE-9129-45BF91AE8CDF}"
                            >
                              <span>Fay Alreeman II</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/haven"
                              className="header__sub-link link-only"
                              data-id="{8ABBC01F-7EE8-44DF-B40D-2D8461584488}"
                            >
                              <span>Haven</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/reeman-living-phase-2"
                              className="header__sub-link link-only"
                              data-id="{74F1CCCF-9ECC-4A68-9E7D-8F0F64C434D2}"
                            >
                              <span>Reeman Living</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/al-reeman-ii"
                              className="header__sub-link "
                              data-id="{5CE39564-048D-4755-9FD1-57FEDECDD32E}"
                            >
                              <span>Alreeman II</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/the-burj-mohammed-bin-rashid"
                              className="header__sub-link "
                              data-id="{37E48DFC-0814-4DEC-A4FD-EB8E14FFB9BE}"
                            >
                              <span>The Burj Mohammed Bin Rashid </span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/al-oyoun-village"
                              className="header__sub-link "
                              data-id="{FA773F02-4C48-44B5-9FD0-EED89C7B1224}"
                            >
                              <span>Al Oyoun Village</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/al-rayyana"
                              className="header__sub-link "
                              data-id="{78DE6479-8EEC-452F-AFBF-A2891116350E}"
                            >
                              <span>Al Rayyana</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/eastern-mangroves"
                              className="header__sub-link "
                              data-id="{66443945-C160-4BFD-8B84-C4FD7D0267A7}"
                            >
                              <span>Eastern Mangroves</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/nareel-island"
                              className="header__sub-link "
                              data-id="{87FB50B5-35AA-444E-A848-4DB8254CAC1C}"
                            >
                              <span>Nareel Island</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/sas-al-nakhl-village"
                              className="header__sub-link "
                              data-id="{33C4F553-0DF5-4964-9025-21236A4595C2}"
                            >
                              <span>Sas Al Nakhl Village</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{B523CA2D-1D14-4A08-A2D9-BA2F3209AD95}"
                        data-parentid="{2D060F10-E07E-428D-8230-69E01341E8CD}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/alghadeer">
                              <span className="all-title">All</span>
                              Alghadeer
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/alghadeer/buy"
                              className="header__sub-link link-only"
                              data-id="{18EDA008-CEF9-439A-BC63-444F65954194}"
                            >
                              <span>Buy</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/alghadeer"
                              className="header__sub-link link-only"
                              data-id="{19181505-6987-420F-AD21-D5085124903A}"
                            >
                              <span>About the project</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/alghadeer/project-features"
                              className="header__sub-link link-only"
                              data-id="{7866EA9C-093B-42C8-A790-3A9325551666}"
                            >
                              <span>Features</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{A2D670C8-3C9D-4EEF-8AF6-7293849B9593}"
                        data-parentid="{E5B659A8-7ECC-49EA-B7FA-F8B3BAF69107}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/al-reeman-i">
                              <span className="all-title">All</span>
                              Alreeman
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/al-reeman-i/buy"
                              className="header__sub-link link-only"
                              data-id="{EC95B9BB-A0A6-4976-BC1A-8749360CE872}"
                            >
                              <span>Buy</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/al-reeman-i"
                              className="header__sub-link link-only"
                              data-id="{D5BE6F4A-1784-4BC1-8D86-E9867A155BD2}"
                            >
                              <span>About the project</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/al-reeman-i/project-features"
                              className="header__sub-link link-only"
                              data-id="{E25201FA-C758-4E9A-A0AB-5FE6CB495288}"
                            >
                              <span>Features</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{65F6623B-B71F-47DE-94FE-401F6E6270FE}"
                        data-parentid="{1A56DB9D-BA0C-4BDF-950E-8FB2EA0CEB70}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/fay-alreeman">
                              <span className="all-title">All</span>
                              Fay Alreeman
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/fay-alreeman"
                              className="header__sub-link link-only"
                              data-id="{21768820-5496-439C-8D75-05CCDAE43344}"
                            >
                              <span>About the project</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/fay-alreeman/project-features"
                              className="header__sub-link link-only"
                              data-id="{056FEDF9-ECAE-40E7-AE01-E9B8848A14ED}"
                            >
                              <span>Features</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{5CE39564-048D-4755-9FD1-57FEDECDD32E}"
                        data-parentid="{3945242A-9381-42A2-A7FC-E54948631DBB}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/al-reeman-ii">
                              <span className="all-title">All</span>
                              Alreeman II
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/al-reeman-ii"
                              className="header__sub-link link-only"
                              data-id="{40B7FFA7-FB72-4657-A3D4-ECF4F9BAA858}"
                            >
                              <span>About the project</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/al-reeman-ii/project-features"
                              className="header__sub-link link-only"
                              data-id="{5DD6BDCE-84BB-475D-813F-B90404C7BF73}"
                            >
                              <span>Features</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{37E48DFC-0814-4DEC-A4FD-EB8E14FFB9BE}"
                        data-parentid="{7921C517-BEB1-4E40-B223-EFE578CD0E53}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/the-burj-mohammed-bin-rashid">
                              <span className="all-title">All</span>
                              The Burj Mohammed Bin Rashid
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/the-burj-mohammed-bin-rashid/rent"
                              className="header__sub-link link-only"
                              data-id="{B360D13F-D655-4B43-ADA8-057D83FF8BD0}"
                            >
                              <span>Rent</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/the-burj-mohammed-bin-rashid"
                              className="header__sub-link link-only"
                              data-id="{C09CDAE1-C15A-4ACC-89F6-7FBE4396BCA3}"
                            >
                              <span>About the project</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/the-burj-mohammed-bin-rashid/project-features"
                              className="header__sub-link link-only"
                              data-id="{D410D016-790E-4603-8A2C-CD47FF4BAA43}"
                            >
                              <span>Features</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{FA773F02-4C48-44B5-9FD0-EED89C7B1224}"
                        data-parentid="{DDA45A9E-4CF3-4B24-B0C6-5F2BAB880618}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/al-oyoun-village">
                              <span className="all-title">All</span>
                              Al Oyoun Village
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/al-oyoun-village/rent"
                              className="header__sub-link link-only"
                              data-id="{740043E2-472F-4FB0-A354-2BC75580FB07}"
                            >
                              <span>Rent</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/al-oyoun-village"
                              className="header__sub-link link-only"
                              data-id="{8EC0BEEF-7E3C-4F17-8CFF-3909AD77DA70}"
                            >
                              <span>About the project</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/al-oyoun-village/project-features"
                              className="header__sub-link link-only"
                              data-id="{13284A22-30BD-4A8E-8E55-75557E44CB49}"
                            >
                              <span>Features</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{78DE6479-8EEC-452F-AFBF-A2891116350E}"
                        data-parentid="{4746CE39-5B30-46B7-A403-E2E036D1A364}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/al-rayyana">
                              <span className="all-title">All</span>
                              Al Rayyana
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/al-rayyana/rent"
                              className="header__sub-link link-only"
                              data-id="{B7940374-25CC-44D1-8FDC-2637C2A83763}"
                            >
                              <span>Rent</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/al-rayyana"
                              className="header__sub-link link-only"
                              data-id="{1ACD3476-62FF-4373-9816-8464816782E3}"
                            >
                              <span>About the project</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/al-rayyana/project-features"
                              className="header__sub-link link-only"
                              data-id="{FA20F481-3A0A-4106-8454-FF14846DE7A2}"
                            >
                              <span>Features</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{66443945-C160-4BFD-8B84-C4FD7D0267A7}"
                        data-parentid="{099BDBAB-E47C-46C9-A1F3-B50443E5CD49}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/eastern-mangroves">
                              <span className="all-title">All</span>
                              Eastern Mangroves
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/eastern-mangroves/rent"
                              className="header__sub-link link-only"
                              data-id="{0EFF00B2-36EA-4324-920F-9ABD6137FB3A}"
                            >
                              <span>Rent</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/eastern-mangroves"
                              className="header__sub-link link-only"
                              data-id="{9AB12800-E0A1-4968-B3B6-615159757C3C}"
                            >
                              <span>About the project</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/eastern-mangroves/project-features"
                              className="header__sub-link link-only"
                              data-id="{BAB9B051-7971-44A4-991F-8CA1060DA5A3}"
                            >
                              <span>Features</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{87FB50B5-35AA-444E-A848-4DB8254CAC1C}"
                        data-parentid="{C13BBDA7-221C-4963-BAD7-2DDC8702A597}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/nareel-island">
                              <span className="all-title">All</span>
                              Nareel Island
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/nareel-island"
                              className="header__sub-link link-only"
                              data-id="{A588FB5E-BE62-45BB-A6EE-A57C88F22F63}"
                            >
                              <span>About the project</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/nareel-island/project-features"
                              className="header__sub-link link-only"
                              data-id="{A39600BA-DC28-44E9-A5F8-20CEA0588134}"
                            >
                              <span>Features</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{33C4F553-0DF5-4964-9025-21236A4595C2}"
                        data-parentid="{76769AAC-8812-4751-9283-EBC45F165AD3}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/sas-al-nakhl-village">
                              <span className="all-title">All</span>
                              Sas Al Nakhl Village
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/sas-al-nakhl-village"
                              className="header__sub-link link-only"
                              data-id="{16F3A5AE-759B-41DD-87AD-538B798FB2DC}"
                            >
                              <span>About the project</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/sas-al-nakhl-village/project-features"
                              className="header__sub-link link-only"
                              data-id="{9A697402-AD00-4FFD-AC3D-EBE471834E81}"
                            >
                              <span>Features</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{A9DAE922-B2F1-474B-B48A-99BC01AE1F72}"
                        data-parentid=""
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href={''}>
                              <span className="all-title">All</span>
                              Investment
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/investment/commercial"
                              className="header__sub-link "
                              data-id="{5D5E561C-5907-41A9-AD36-42C290DA47C8}"
                            >
                              <span>Commercial</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/investment/retail"
                              className="header__sub-link "
                              data-id="{26539EF0-A460-4DD0-814C-3D95293A4241}"
                            >
                              <span>Retail</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{5D5E561C-5907-41A9-AD36-42C290DA47C8}"
                        data-parentid="{C883520C-3A67-4F24-A488-75580A327F4F}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/businesses/investment/commercial">
                              <span className="all-title">All</span>
                              Commercial
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/investment/commercial/offices"
                              className="header__sub-link link-only"
                              data-id="{30DCD8DE-491C-452A-BF4A-D2C30BB34045}"
                            >
                              <span>Offices</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{26539EF0-A460-4DD0-814C-3D95293A4241}"
                        data-parentid="{3F5AD744-B38C-4F6A-8F5C-1AD06D09CA1A}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/businesses/investment/retail">
                              <span className="all-title">All</span>
                              Retail
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/investment/retail/malls"
                              className="header__sub-link link-only"
                              data-id="{CE9DFD8D-7668-41F1-A97B-B9CC085F1848}"
                            >
                              <span>Our Malls</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/investment/retail/communities"
                              className="header__sub-link link-only"
                              data-id="{E5AC1E12-288C-46A3-8E4A-47AEBC861D73}"
                            >
                              <span>Retail Communities</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{646AB515-B8A5-4A75-BC05-38C2E0420897}"
                        data-parentid="{15008D17-99C3-483D-8857-F328FAF5CD8C}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/businesses/education">
                              <span className="all-title">All</span>
                              Education
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/education/academies"
                              className="header__sub-link link-only"
                              data-id="{4692C89B-3318-4982-BE6C-F364A792FA2B}"
                            >
                              <span>Our Academies</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/education/our-schools"
                              className="header__sub-link link-only"
                              data-id="{49345935-4AE4-4D0A-AF37-BF54C7B3EF4F}"
                            >
                              <span>Our Schools</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/education/aldar-training-academy"
                              className="header__sub-link link-only"
                              data-id="{DE6E09D8-554B-45FE-B53A-C9CAD3528DB5}"
                            >
                              <span>Training Academy</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{51B9DA07-0D73-4291-B7ED-9B1DB8531A07}"
                        data-parentid="{2EAF2F50-79C5-4B41-B7A2-996A5FD61E59}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/businesses/hospitality">
                              <span className="all-title">All</span>
                              Hospitality
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/hospitality/hotels"
                              className="header__sub-link link-only"
                              data-id="{FCDBCFCE-4CEE-41FA-961C-53C9DF45AE00}"
                            >
                              <span>Hotels</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/hospitality/golf-course"
                              className="header__sub-link link-only"
                              data-id="{D036E6EB-0A3E-4887-84F5-7130F59FA18D}"
                            >
                              <span>Golf Courses</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/hospitality/beach-clubs"
                              className="header__sub-link link-only"
                              data-id="{A1F99369-F49C-452D-9149-EC2365E0DB55}"
                            >
                              <span>Beach Clubs</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/hospitality/marinas"
                              className="header__sub-link link-only"
                              data-id="{E05CE5A0-1F06-4103-B8A0-774E546090B2}"
                            >
                              <span>Marinas</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/hospitality/parks"
                              className="header__sub-link link-only"
                              data-id="{73190DEC-E14C-408D-BD66-4FAB0D6BD7F9}"
                            >
                              <span>Parks</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{7C8E74B8-A1DE-40F4-B76E-AF2A1E2A8838}"
                        data-parentid="{EF9A4C16-D6D2-483C-8CA1-560D9FBECDB7}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/sustainability">
                              <span className="all-title">All</span>
                              Sustainability
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/sustainability/strategy"
                              className="header__sub-link link-only"
                              data-id="{B5EB0316-FB2D-48D2-B04A-A71EB98F108A}"
                            >
                              <span>Sustainability Strategy</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/sustainability/governance-and-policies"
                              className="header__sub-link link-only"
                              data-id="{D0429E8E-1137-495F-B944-185189735226}"
                            >
                              <span>Governance & Policies</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/sustainability/reporting"
                              className="header__sub-link link-only"
                              data-id="{155F87DD-395A-497E-A2D8-C493974DBDDD}"
                            >
                              <span>Reporting & Performance</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/sustainability/netzero"
                              className="header__sub-link link-only"
                              data-id="{784C5843-44A6-45F4-A50D-3744F1CA7C89}"
                            >
                              <span>Net Zero</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/sustainability/corporate-social-responsibility"
                              className="header__sub-link link-only"
                              data-id="{A22FC8BC-8906-44DD-9111-51FAB0CFDA98}"
                            >
                              <span>Community Outreach</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{E1132B35-B5E2-47BC-8F4A-3170C279CAAC}"
                        data-parentid="{648AAECE-944E-4462-90BD-CFA811BDFB9D}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/live-aldar">
                              <span className="all-title">All</span>
                              Live Aldar
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/live-aldar/year-of-sustainability"
                              className="header__sub-link link-only"
                              data-id="{D67003EC-D707-4F3F-8691-1ACAA3D8A833}"
                            >
                              <span>Year of Sustainability</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/live-aldar/emirati-womens-day"
                              className="header__sub-link link-only"
                              data-id="{5BED3181-2327-43A8-895A-DDCDFA69D8DD}"
                            >
                              <span>Emirati Women&apos;s Day</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/live-aldar/ahal-aldar"
                              className="header__sub-link link-only"
                              data-id="{0A999D4B-7AF3-4460-918B-9CE7A59E5B13}"
                            >
                              <span>Ahal Aldar</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/live-aldar/aldar-stories"
                              className="header__sub-link link-only"
                              data-id="{B0CD045F-75F7-42CD-A6D3-EDF4100BFD4C}"
                            >
                              <span>Aldar Stories</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/live-aldar/in-focus"
                              className="header__sub-link link-only"
                              data-id="{423FBF61-A413-4359-94C8-C7202FF8BDC3}"
                            >
                              <span>In Focus</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{BCC2FA58-7881-4A0D-AE8E-036EA9EF0813}"
                        data-parentid="{AC76620E-9A88-45A2-8170-0919B44A2888}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en/explore-aldar/innovation">
                              <span className="all-title">All</span>
                              Innovation
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/innovation/manassah3"
                              className="header__sub-link link-only"
                              data-id="{3C7FD7D4-7031-4088-A00A-AFEDE6B3AE53}"
                            >
                              <span>Manassah</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/innovation/scale-up"
                              className="header__sub-link link-only"
                              data-id="{479D9BCF-6B82-4765-B3C1-0AD47A535877}"
                            >
                              <span>Scale Up By Aldar</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{9A802E34-08B6-45BC-894B-CA399470BFBD}"
                        data-parentid=""
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href={''}>
                              <span className="all-title">All</span>
                              Media
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/news-and-media"
                              className="header__sub-link link-only"
                              data-id="{6EDDB5A5-1B3E-4DC8-94B9-3F2C057226D3}"
                            >
                              <span>News</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/media/gallery"
                              className="header__sub-link link-only"
                              data-id="{2D5AC7A9-BC36-42A2-A979-AE0F9F91A55C}"
                            >
                              <span>Gallery</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/blog"
                              className="header__sub-link link-only"
                              data-id="{3740875F-9D20-4E51-8492-DF8B8937FCED}"
                            >
                              <span>Blog</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{7C182C04-0559-431D-9DD5-4543416E6FF1}"
                        data-parentid=""
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href={''}>
                              <span className="all-title">All</span>
                              Investor Relations
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="header__sub-link "
                              data-id="{67A85B72-0B1A-43A7-9F07-08B81FEB47EE}"
                              href={''}
                            >
                              <span>Reports & Presentations</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="header__sub-link "
                              data-id="{42C189DB-9DFF-48E2-8F2B-CA47670F4DD7}"
                              href={''}
                            >
                              <span>Shareholder Center</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="header__sub-link "
                              data-id="{FED3BF9E-94FC-4B51-9BC9-4B26BF472E56}"
                              href={''}
                            >
                              <span>Debt Investors</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="header__sub-link "
                              data-id="{C1B428B7-043A-40DF-B179-513C9C14BEF4}"
                              href={''}
                            >
                              <span>Analyst Coverage</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/investors/financial-calendar"
                              className="header__sub-link link-only"
                              data-id="{ECEB7D6B-8BC0-416A-8C96-1F722788AE58}"
                            >
                              <span>Financial Calendar</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/investors/company-announcements"
                              className="header__sub-link link-only"
                              data-id="{CC96C208-2747-4766-98AB-FF980592A17F}"
                            >
                              <span>Company Announcements</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="header__sub-link "
                              data-id="{8E068EEB-3C6F-40FC-843F-0F151920D215}"
                              href={''}
                            >
                              <span>Contact Us</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{67A85B72-0B1A-43A7-9F07-08B81FEB47EE}"
                        data-parentid=""
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href={''}>
                              <span className="all-title">All</span>
                              Reports & Presentations
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/investors/reports/annual-reports"
                              className="header__sub-link link-only"
                              data-id="{A0F832BE-96D5-4499-B1D5-B164755C1A6F}"
                            >
                              <span>Annual Reports</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/investors/reports/financial-statements"
                              className="header__sub-link link-only"
                              data-id="{E220C1C9-08BB-4404-9B83-2DC2903D42B1}"
                            >
                              <span>Financial Statements</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/investors/reports/quarterly-results"
                              className="header__sub-link link-only"
                              data-id="{F424634B-9982-4F07-82FD-80C3ECBE2D90}"
                            >
                              <span>Quarterly Results</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/investors/reports/investor-presentations"
                              className="header__sub-link link-only"
                              data-id="{7294A2D5-21D6-45A6-85B9-80C4F60B9460}"
                            >
                              <span>Investor Presentations</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/investors/reports/sustainability-reports"
                              className="header__sub-link link-only"
                              data-id="{861870A4-2B6E-4AAD-988B-62F4A1DB4A31}"
                            >
                              <span>Sustainability Reports</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/investors/reports/capital-markets-day"
                              className="header__sub-link link-only"
                              data-id="{50C2BEAF-5762-4592-B3F5-CCECA1A528DD}"
                            >
                              <span>Capital Markets Day</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/investors/reports/factsheet"
                              className="header__sub-link link-only"
                              data-id="{37F84296-BF15-4F19-B66E-821ACF071C30}"
                            >
                              <span>Factsheet</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/investors/reports/key-figures"
                              className="header__sub-link link-only"
                              data-id="{2C59EFA3-CFE2-443E-B6E2-107AE0D8E39A}"
                            >
                              <span>Key Figures</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{42C189DB-9DFF-48E2-8F2B-CA47670F4DD7}"
                        data-parentid=""
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href={''}>
                              <span className="all-title">All</span>
                              Shareholder Center
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/investors/shareholders/share-information"
                              className="header__sub-link link-only"
                              data-id="{2226BFF2-7D85-4557-8428-B96C8E49B771}"
                            >
                              <span>Share Information</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/investors/shareholders/dividends"
                              className="header__sub-link link-only"
                              data-id="{490C743E-70DB-4C03-A02B-C7916BBB8782}"
                            >
                              <span>Dividends</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/corporate-governance#AGM"
                              className="header__sub-link link-only"
                              data-id="{5658F475-5E4A-44E2-9E65-716B93C03568}"
                            >
                              <span>AGM</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{FED3BF9E-94FC-4B51-9BC9-4B26BF472E56}"
                        data-parentid=""
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href={''}>
                              <span className="all-title">All</span>
                              Debt Investors
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/investors/debt/credit-ratings"
                              className="header__sub-link link-only"
                              data-id="{CF6B51EE-7B05-4E66-95E7-6F26FCA32431}"
                            >
                              <span>Credit Ratings</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/investors/debt/issuances"
                              className="header__sub-link link-only"
                              data-id="{F7137ACD-5195-4FBF-AF5F-33D215161C82}"
                            >
                              <span>Issuances</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/investors/debt/debt-investor-presentations"
                              className="header__sub-link link-only"
                              data-id="{9B9AE755-F4A0-4D3C-BF6F-AA1601906327}"
                            >
                              <span>Debt Investor Presentations</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{C1B428B7-043A-40DF-B179-513C9C14BEF4}"
                        data-parentid=""
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href={''}>
                              <span className="all-title">All</span>
                              Analyst Coverage
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/investors/coverage/analyst-list"
                              className="header__sub-link link-only"
                              data-id="{B9B7F8C1-CF6B-403C-92DB-E890072F970B}"
                            >
                              <span>Analyst List</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/investors/coverage/recommendation-overview"
                              className="header__sub-link link-only"
                              data-id="{D9044F29-F6BB-4958-800A-B52ACDA01079}"
                            >
                              <span>Recommendation Overview</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{8E068EEB-3C6F-40FC-843F-0F151920D215}"
                        data-parentid=""
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href={''}>
                              <span className="all-title">All</span>
                              Contact Us
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/investors/contact-us/contact-details"
                              className="header__sub-link link-only"
                              data-id="{91DD581A-84F5-4B60-BE29-926773438CDF}"
                            >
                              <span>Contact Details</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/investors/contact-us/subscription-center"
                              className="header__sub-link link-only"
                              data-id="{9AE68490-E06D-4D0D-9A16-6F46BC25E699}"
                            >
                              <span>Subscription Center</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{1683580F-32E0-4178-8A8B-617A801D6D81}"
                        data-parentid=""
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href={''}>
                              <span className="all-title">All</span>
                              Careers
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://fa-ewnp-saasfaprod1.fa.ocs.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="header__sub-link link-only"
                              data-id="{73C1DB6D-092B-4BF9-9F9A-E6D1B18A3637}"
                            >
                              <span>Work with us</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/careers/graduate-programme"
                              className="header__sub-link link-only"
                              data-id="{CA3257B0-AB3A-4779-98B0-88FE1CE06153}"
                            >
                              <span>Graduate Programme</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{D9266420-1268-423E-AD67-0E47D399A1E3}"
                        data-parentid="{A14E2BDD-F9F7-4E94-BBCA-43F8AD8BB69D}-{0}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en">
                              <span className="all-title">All</span>
                              Buy
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/properties"
                              className="header__sub-link link-only"
                              data-id="{A7244AD5-2654-43BC-BDDC-753A188FE253}"
                            >
                              <span>Residential</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/buying-lands"
                              className="header__sub-link link-only"
                              data-id="{F9060D7D-AA8E-4C61-9B8E-D443479320A9}"
                            >
                              <span>Building Plots</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                      <div
                        className="header__nav-group "
                        data-parentmobileid="{A8BD7C70-2D70-41EC-A93A-D6A914E1892F}"
                        data-parentid="{A14E2BDD-F9F7-4E94-BBCA-43F8AD8BB69D}-{1}"
                        data-animation="headerMain"
                      >
                        <button
                          onClick={() => {
                            return false;
                          }}
                          className="header__back-level"
                        >
                          Back
                        </button>
                        <ul className="header__main-nav">
                          <li className="h2--box header__parent-title">
                            <Link href="https://www.aldar.com/en">
                              <span className="all-title">All</span>
                              Rent
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/rent-residential"
                              className="header__sub-link link-only"
                              data-id="{9F43B032-373E-40B6-A571-CE2FEA369D1B}"
                            >
                              <span>Residential</span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/renting-commercial"
                              className="header__sub-link link-only"
                              data-id="{57C183B5-C6BF-4FDF-A346-54DC3244E1FC}"
                            >
                              <span>Commercial </span>
                              <sup></sup>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.aldar.com/en/retail-renting"
                              className="header__sub-link link-only"
                              data-id="{F6B4B6E2-16B2-4112-BE7E-97278204E21F}"
                            >
                              <span>Retail</span>
                              <sup></sup>
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__overflow-nav">
                          <li className="header__overflow-prev disabled"></li>
                          <li className="header__overflow-next"></li>
                        </ul>
                      </div>
                    </div>
                    <div className="header__mobile-member-popup">
                      <button
                        onClick={() => {
                          return false;
                        }}
                        className="header__back-level member"
                      >
                        Back
                      </button>
                      <div className="header__mobile-app">
                        <figure>
                          <img
                            src="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/news-landing/image-3.jpg?h=60&amp;iar=0&amp;w=60&amp;rev=864fe35c2ba64159a6c440aa9009493c"
                            alt="image 3"
                            width="60"
                            height="60"
                          />
                        </figure>
                        <label>
                          <span>Aldar Mobile app</span>
                          <Link
                            href="https://play.google.com/store/apps/details?id=com.aldar.mobileapp&amp;hl=en&amp;gl=US "
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            Download App
                          </Link>
                        </label>
                      </div>
                      <Link
                        href="https://customer.aldar.com/"
                        rel="noopener noreferrer"
                        className="header__mobile-member-link"
                        target="_blank"
                      >
                        Customer Portal Login
                      </Link>
                    </div>
                    <div className="header__mobile-language-selector-popup">
                      <button
                        onClick={() => {
                          return false;
                        }}
                        className="header__back-level language"
                      >
                        Back
                      </button>
                      <div className="component language-selector header__desktop-buttons-dd initialized">
                        <div className="component-content">
                          <div
                            className="language-selector-select-item"
                            data-language-code="en"
                            data-country-code="us"
                          >
                            <Link className="language-selector-select-link" href={''}>
                              English
                            </Link>
                          </div>
                          <ul className="language-selector-item-container">
                            <li
                              className="language-selector-item is-active"
                              data-language-code="en"
                              data-country-code="us"
                            >
                              <Link href="https://www.aldar.com/en">English</Link>
                            </li>
                            <li
                              className="language-selector-item"
                              data-language-code="ar"
                              data-country-code="sa"
                            >
                              <Link href="https://www.aldar.com/ar">العربية</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
                <div className="header__r1-right">
                  <nav>
                    <ul className="header__commerce-nav">
                      <li>
                        <Link href="https://www.aldar.com/en" className="header__main-link">
                          Buy
                        </Link>
                        <div className="header__commerce-nav_dd">
                          <label className="h2--box">What are you looking to Buy?</label>
                          <button
                            onClick={() => {
                              return false;
                            }}
                            className="close-button -white"
                          ></button>
                          <ul className="header__commerce-nav_list">
                            <li>
                              <Link
                                href="https://www.aldar.com/properties"
                                className="header__commerce-nav_link"
                              >
                                Residential
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="https://www.aldar.com/en/buying-lands"
                                className="header__commerce-nav_link"
                              >
                                Building Plots
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <Link href="https://www.aldar.com/en" className="header__main-link">
                          Rent
                        </Link>
                        <div className="header__commerce-nav_dd">
                          <label className="h2--box">What are you looking to Rent?</label>
                          <button
                            onClick={() => {
                              return false;
                            }}
                            className="close-button -white"
                          ></button>
                          <ul className="header__commerce-nav_list">
                            <li>
                              <Link
                                href="https://www.aldar.com/en/rent-residential"
                                className="header__commerce-nav_link"
                              >
                                Residential
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="https://www.aldar.com/en/renting-commercial"
                                className="header__commerce-nav_link"
                              >
                                Commercial
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="https://www.aldar.com/en/retail-renting"
                                className="header__commerce-nav_link"
                              >
                                Retail
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </nav>
                  <ul className="header__desktop-buttons">
                    <li>
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        className="button__language notouch-only"
                      ></a>
                      <div className="component language-selector header__desktop-buttons-dd initialized">
                        <div className="component-content">
                          <div
                            className="language-selector-select-item"
                            data-language-code="en"
                            data-country-code="us"
                          >
                            <Link className="language-selector-select-link" href={''}>
                              English
                            </Link>
                          </div>
                          <ul className="language-selector-item-container">
                            <li
                              className="language-selector-item is-active"
                              data-language-code="en"
                              data-country-code="us"
                            >
                              <Link href="https://www.aldar.com/en">English</Link>
                            </li>
                            <li
                              className="language-selector-item"
                              data-language-code="ar"
                              data-country-code="sa"
                            >
                              <Link href="https://www.aldar.com/ar">العربية</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          return false;
                        }}
                        className="button__search"
                      ></button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          return false;
                        }}
                        className="header__menu-button"
                      >
                        <span></span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="header__menu-dropdown__container">
              <div className="header__menu-dropdown container">
                <ul
                  className="header__menu-dropdown__item-group"
                  data-id="{290FE6B7-3606-4C78-BD08-EB9B58CBD76D}"
                >
                  <li
                    className="header__menu-dropdown__item"
                    data-id="{8279EB7A-C24F-41D5-B0EF-C5AF1F22E83A}"
                  >
                    <Link
                      href="https://www.aldar.com/en/about-abu-dhabi/market-overview"
                      className="header__menu-dropdown__item__link"
                      data-id="{8279EB7A-C24F-41D5-B0EF-C5AF1F22E83A}"
                    >
                      <span>Market Overview</span>
                    </Link>
                  </li>
                  <li
                    className="header__menu-dropdown__item"
                    data-id="{EEBC96FD-28D6-4B0C-A9DC-64C511199FED}"
                  >
                    <Link
                      href="https://www.aldar.com/en/about-abu-dhabi/golden-visa"
                      className="header__menu-dropdown__item__link"
                      data-id="{EEBC96FD-28D6-4B0C-A9DC-64C511199FED}"
                    >
                      <span>Golden Visa</span>
                    </Link>
                  </li>
                  <li
                    className="header__menu-dropdown__item"
                    data-id="{1FB15AF7-A639-46D7-BC66-96C67A7064D3}"
                  >
                    <Link
                      href="https://www.aldar.com/en/about-abu-dhabi/dari"
                      className="header__menu-dropdown__item__link"
                      data-id="{1FB15AF7-A639-46D7-BC66-96C67A7064D3}"
                    >
                      <span>Dari</span>
                    </Link>
                  </li>
                </ul>
                <ul
                  className="header__menu-dropdown__item-group"
                  data-id="{C9DC014D-FE14-4A8D-990A-0D6C6FF93E58}"
                >
                  <li
                    className="header__menu-dropdown__item"
                    data-id="{3CD00255-E2EA-4EE9-BE9D-9A3D9D8AF526}"
                  >
                    <span className="header__menu-dropdown__item__span">About Aldar</span>
                    <ul
                      className="header__menu-dropdown__subitem-group"
                      data-id="{3CD00255-E2EA-4EE9-BE9D-9A3D9D8AF526}"
                    >
                      <li
                        className="header__menu-dropdown__subitem"
                        data-id="{FF0DB164-0BB2-448F-AC11-793181A264D2}"
                      >
                        <Link
                          href="https://www.aldar.com/en/explore-aldar/about-aldar/story"
                          className="header__menu-dropdown__item__link"
                        >
                          <span>Story</span>
                        </Link>
                      </li>
                      <li
                        className="header__menu-dropdown__subitem"
                        data-id="{3F65314F-B4DE-4A4B-BCBA-6C0C20D96AD8}"
                      >
                        <Link
                          href="https://www.aldar.com/en/explore-aldar/about-aldar/leadership"
                          className="header__menu-dropdown__item__link"
                        >
                          <span>Leadership</span>
                        </Link>
                      </li>
                      <li
                        className="header__menu-dropdown__subitem"
                        data-id="{BDA7F4C7-4AE0-4733-AA7B-4CACA48A7F21}"
                      >
                        <Link
                          href="https://www.aldar.com/en/explore-aldar/about-aldar/culture-and-values"
                          className="header__menu-dropdown__item__link"
                        >
                          <span>Culture and Values</span>
                        </Link>
                        <ul
                          className="header__menu-dropdown__subitem-group"
                          data-id="{BDA7F4C7-4AE0-4733-AA7B-4CACA48A7F21}"
                        >
                          <li
                            className="header__menu-dropdown__subitem"
                            data-id="{2FAEBCD7-E441-4BDA-B895-FD1DF647EDA7}"
                          >
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/about-aldar/culture-and-values/values"
                              className="header__menu-dropdown__item__link"
                            >
                              <span>Values</span>
                            </Link>
                          </li>
                          <li
                            className="header__menu-dropdown__subitem"
                            data-id="{D18A3757-9269-42F3-85BB-E38FE6A93EAA}"
                          >
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/about-aldar/culture-and-values/talent"
                              className="header__menu-dropdown__item__link"
                            >
                              <span>Talent</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="header__menu-dropdown__subitem"
                        data-id="{8DFCE321-804A-4249-952B-39EDB8C87DD5}"
                      >
                        <Link
                          href="https://www.aldar.com/en/explore-aldar/about-aldar/strategy"
                          className="header__menu-dropdown__item__link"
                        >
                          <span>Strategy</span>
                        </Link>
                      </li>
                      <li
                        className="header__menu-dropdown__subitem"
                        data-id="{1DF11A3E-D3B7-45CB-8F7B-7B0B7785A062}"
                      >
                        <Link
                          href="https://www.aldar.com/en/explore-aldar/about-aldar/sponsorships"
                          className="header__menu-dropdown__item__link"
                        >
                          <span>Sponsorships</span>
                        </Link>
                      </li>
                      <li
                        className="header__menu-dropdown__subitem"
                        data-id="{EDF08168-B6AE-4B3F-98A7-D1244D75E32D}"
                      >
                        <Link
                          href="https://www.aldar.com/en/explore-aldar/about-aldar/procurement"
                          className="header__menu-dropdown__item__link"
                        >
                          <span>Procurement</span>
                        </Link>
                        <ul
                          className="header__menu-dropdown__subitem-group"
                          data-id="{EDF08168-B6AE-4B3F-98A7-D1244D75E32D}"
                        >
                          <li
                            className="header__menu-dropdown__subitem"
                            data-id="{80C2FDF0-A3C1-4A02-99ED-17F8AE8AC608}"
                          >
                            <Link
                              href="https://aldar.supplier.mn1.ariba.com/register"
                              rel="noopener noreferrer"
                              className="header__menu-dropdown__item__link"
                              target="_blank"
                            >
                              <span>E-sourcing Portal</span>
                            </Link>
                          </li>
                          <li
                            className="header__menu-dropdown__subitem"
                            data-id="{15BAE04E-C79E-497E-97AB-B7B3696CE0FE}"
                          >
                            <Link
                              href="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/procurement/po-terms-and-conditions/purchase-order--general-terms-and-conditions-legal-june-2023.pdf?rev=9c07b50856944b798569f36747375c45"
                              rel="noopener noreferrer"
                              className="header__menu-dropdown__item__link"
                              target="_blank"
                            >
                              <span>PO Terms & Conditions</span>
                            </Link>
                          </li>
                          <li
                            className="header__menu-dropdown__subitem"
                            data-id="{49B912CF-0A89-4A05-95CA-793E73E5DCA7}"
                          >
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/about-aldar/procurement/workers-welfare"
                              className="header__menu-dropdown__item__link"
                            >
                              <span>Workers Welfare</span>
                            </Link>
                          </li>
                          <li
                            className="header__menu-dropdown__subitem"
                            data-id="{AFE0FC4B-D2BA-44DA-83D7-5DD9F2D58D54}"
                          >
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/about-aldar/procurement/sustainability"
                              className="header__menu-dropdown__item__link"
                            >
                              <span>Procurement Sustainability</span>
                            </Link>
                          </li>
                          <li
                            className="header__menu-dropdown__subitem"
                            data-id="{38FB3212-4A4E-4143-83FD-18D71CEEEDF0}"
                          >
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/about-aldar/procurement/icv-program"
                              className="header__menu-dropdown__item__link"
                            >
                              <span>ICV Program</span>
                            </Link>
                          </li>
                          <li
                            className="header__menu-dropdown__subitem"
                            data-id="{B9F339E2-A589-4CB6-AED4-E6C88A7D899F}"
                          >
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/about-aldar/procurement/certifying-bodies"
                              className="header__menu-dropdown__item__link"
                            >
                              <span>Certifying Bodies</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="header__menu-dropdown__subitem"
                        data-id="{7748673D-098E-4033-ADEA-0D92DED6E49C}"
                      >
                        <span className="header__menu-dropdown__item__span">E-Services</span>
                        <ul
                          className="header__menu-dropdown__subitem-group"
                          data-id="{7748673D-098E-4033-ADEA-0D92DED6E49C}"
                        >
                          <li
                            className="header__menu-dropdown__subitem"
                            data-id="{CF910452-4999-4C54-9C4A-0BF75BD8BB62}"
                          >
                            <Link
                              href="https://www.aldar.com/live/login"
                              rel="noopener noreferrer"
                              className="header__menu-dropdown__item__link"
                              target="_blank"
                            >
                              <span>Customer Portal</span>
                            </Link>
                          </li>
                          <li
                            className="header__menu-dropdown__subitem"
                            data-id="{EADED852-C2D5-473A-85CD-13770B7280BA}"
                          >
                            <Link
                              href="https://www.khidmah.com/en"
                              rel="noopener noreferrer"
                              className="header__menu-dropdown__item__link"
                              target="_blank"
                            >
                              <span>Khidmah</span>
                            </Link>
                          </li>
                          <li
                            className="header__menu-dropdown__subitem"
                            data-id="{164B2103-58AB-4D01-AB2E-70656A0015D0}"
                          >
                            <Link
                              href="https://www.provis.ae/en"
                              rel="noopener noreferrer"
                              className="header__menu-dropdown__item__link"
                              target="_blank"
                            >
                              <span>Provis</span>
                            </Link>
                          </li>
                          <li
                            className="header__menu-dropdown__subitem"
                            data-id="{6D244FBB-F236-49BB-AC2F-9D84069254F8}"
                          >
                            <Link
                              href="https://broker.aldar.com/_layouts/15/brokerportal/BrokerLogin.aspx?ReturnUrl=%2f_layouts%2f15%2fAuthenticate.aspx%3fSource%3d%252F&amp;Source=%2F&amp;_gl=1*11sd6ih*_gcl_au*MTM4ODQzNzk5LjE2ODcyNTAxMDc"
                              rel="noopener noreferrer"
                              className="header__menu-dropdown__item__link"
                              target="_blank"
                            >
                              <span>Aldar Brokers</span>
                            </Link>
                          </li>
                          <li
                            className="header__menu-dropdown__subitem"
                            data-id="{18A3A15A-5459-4FBA-A49B-295924408180}"
                          >
                            <Link
                              href="https://apps.apple.com/us/app/live-aldar/id6468037968"
                              rel="noopener noreferrer"
                              className="header__menu-dropdown__item__link"
                              target="_blank"
                            >
                              <span>Aldar IOS app</span>
                            </Link>
                          </li>
                          <li
                            className="header__menu-dropdown__subitem"
                            data-id="{F1EFBBF9-ACBE-4FD7-AE39-C87D582373F6}"
                          >
                            <Link
                              href="https://play.google.com/store/apps/details?id=app.aldar.live"
                              rel="noopener noreferrer"
                              className="header__menu-dropdown__item__link"
                              target="_blank"
                            >
                              <span>Aldar Android App</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="header__menu-dropdown__subitem"
                        data-id="{5145E4B4-7B02-4271-BD5F-6134DC3843B2}"
                      >
                        <Link
                          href="https://www.aldar.com/en/explore-aldar/about-aldar/aldar-square"
                          className="header__menu-dropdown__item__link"
                        >
                          <span>Aldar Square</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className="header__menu-dropdown__item"
                    data-id="{AEC9BD11-5F5F-489C-B543-637033FF7DAA}"
                  >
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses"
                      className="header__menu-dropdown__item__link"
                      data-id="{AEC9BD11-5F5F-489C-B543-637033FF7DAA}"
                    >
                      <span>Businesses</span>
                    </Link>
                    <ul
                      className="header__menu-dropdown__subitem-group"
                      data-id="{AEC9BD11-5F5F-489C-B543-637033FF7DAA}"
                    >
                      <li
                        className="header__menu-dropdown__subitem"
                        data-id="{B3AC7E5B-33C4-42EC-AD46-B9C3D043ADEF}"
                      >
                        <span className="header__menu-dropdown__item__span">Development</span>
                        <ul
                          className="header__menu-dropdown__subitem-group"
                          data-id="{B3AC7E5B-33C4-42EC-AD46-B9C3D043ADEF}"
                        >
                          <li
                            className="header__menu-dropdown__subitem"
                            data-id="{43044A61-26FF-473C-AEBE-AD18E440B907}"
                          >
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/residential"
                              className="header__menu-dropdown__item__link"
                            >
                              <span>Residential</span>
                            </Link>
                            <ul
                              className="header__menu-dropdown__subitem-group"
                              data-id="{43044A61-26FF-473C-AEBE-AD18E440B907}"
                            >
                              <li
                                className="header__menu-dropdown__subitem"
                                data-id="{5C0895F4-07C3-4B2C-BF1C-DF5903421BB1}"
                              >
                                <Link
                                  href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island"
                                  className="header__menu-dropdown__item__link"
                                >
                                  <span>Yas Island</span>
                                </Link>
                                <ul
                                  className="header__menu-dropdown__subitem-group"
                                  data-id="{5C0895F4-07C3-4B2C-BF1C-DF5903421BB1}"
                                >
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{219BED00-434F-42BE-85F3-58ECEADCB9B0}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/yas-island-sustainable-city"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>The Sustainable City</span>
                                    </Link>
                                  </li>
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{CA5CD003-C276-48EC-9EC5-280DEA92F218}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/yas-park-views"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>Yas Park Views</span>
                                    </Link>
                                  </li>
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{D45BF7CE-50D2-4A85-B815-93211C1D7FFF}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/yas-acres-north-bay"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>Yas Acres North Bay</span>
                                    </Link>
                                  </li>
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{414B5807-4FA7-4005-A467-938BE4F713CA}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/yas-golf"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>Yas Golf Collection</span>
                                    </Link>
                                  </li>
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{5296CD8B-B1CE-436C-BFA5-45C3FE8CE72B}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/yas-golf-collection-views"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>Yas Golf Collection Views</span>
                                    </Link>
                                  </li>
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{17738A9C-5CDB-4887-8D73-E60867EB1696}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/yas-park-gate"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>Yas Park Gate</span>
                                    </Link>
                                  </li>
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{19B94A19-6AB8-4E29-A247-74E2FE61B4ED}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/lea-yas-island"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>Lea Yas Island</span>
                                    </Link>
                                    <ul
                                      className="header__menu-dropdown__subitem-group"
                                      data-id="{19B94A19-6AB8-4E29-A247-74E2FE61B4ED}"
                                    >
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{3CEFEDE8-F617-481C-88F3-6C955836F1CE}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/lea-yas-island"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>About the project</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{43F6F372-A113-4F81-886D-05FA18C46941}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/lea-yas-island/project-features"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Features</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{C695F154-E532-483F-B033-5FB289B2AD43}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/mayan"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>Mayan</span>
                                    </Link>
                                    <ul
                                      className="header__menu-dropdown__subitem-group"
                                      data-id="{C695F154-E532-483F-B033-5FB289B2AD43}"
                                    >
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{3381DF01-1776-479D-B046-7F6515AC9246}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/mayan"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>About the project</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{5D15F9D5-437C-47A4-BC74-F3B482CBA143}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/mayan/project-features"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Features</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{ACCA0539-5AC4-4D0C-8AEA-2C0741AAA09F}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/ansam"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>Ansam</span>
                                    </Link>
                                    <ul
                                      className="header__menu-dropdown__subitem-group"
                                      data-id="{ACCA0539-5AC4-4D0C-8AEA-2C0741AAA09F}"
                                    >
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{74BD2660-2961-46FF-92EC-43AC71782B0F}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/ansam"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>About the project</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{A1A5A743-1822-43B2-87FE-433797240781}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/ansam/project-features"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Features</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{D52C21BD-F70B-4D42-916E-AF6ED174EE0D}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/noya"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>Noya</span>
                                    </Link>
                                    <ul
                                      className="header__menu-dropdown__subitem-group"
                                      data-id="{D52C21BD-F70B-4D42-916E-AF6ED174EE0D}"
                                    >
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{90542F9F-EF74-46F9-8330-06363D6B4859}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/noya"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>About the project</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{C786B3AD-2A12-4D57-A578-D236D2DDF2F8}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/noya/project-features"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Features</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{6D613337-9BBD-4055-B7A0-722285C0E323}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/noya-luma"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>Noya Luma</span>
                                    </Link>
                                    <ul
                                      className="header__menu-dropdown__subitem-group"
                                      data-id="{6D613337-9BBD-4055-B7A0-722285C0E323}"
                                    >
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{EBC8D70B-EA8A-4165-A5D6-85209626777B}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/noya-luma"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>About the project</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{AC2C9C65-90B8-49C0-87EB-79A268E646FB}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/noya-luma/project-features"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Features</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{61C38DDA-2599-45C0-AD35-724C127D8DE7}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/noya-viva"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>Noya Viva</span>
                                    </Link>
                                    <ul
                                      className="header__menu-dropdown__subitem-group"
                                      data-id="{61C38DDA-2599-45C0-AD35-724C127D8DE7}"
                                    >
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{9477C767-6FF2-4033-99E4-2D5CD2512091}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/noya-viva"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>About the project</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{2BD88445-3827-4EBD-BD2C-DCD704FB031B}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/noya-viva/project-features"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Features</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{587035B8-266B-485C-9CAD-2020F1765E11}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/yas-acres"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>Yas Acres</span>
                                    </Link>
                                    <ul
                                      className="header__menu-dropdown__subitem-group"
                                      data-id="{587035B8-266B-485C-9CAD-2020F1765E11}"
                                    >
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{09922C21-7D5C-44AF-823D-BCC7BEAF13AA}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/yas-acres"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>About the project</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{59E2EC47-F085-4690-B203-F95F481B0219}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/yas-acres/project-features"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Features</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{3C970FC0-BA36-439E-AE69-77D45CD24D68}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/waters-edge"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>Water&apos;s Edge</span>
                                    </Link>
                                    <ul
                                      className="header__menu-dropdown__subitem-group"
                                      data-id="{3C970FC0-BA36-439E-AE69-77D45CD24D68}"
                                    >
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{13083ED4-AA91-4BFE-BE8F-0A4A6C4DE7A2}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/waters-edge/buy"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Buy</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{35A76A88-7DF2-4318-BA44-38A1A122E09B}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/waters-edge"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>About the project</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{7A6C070D-765A-4739-B4DA-7175918B9DEB}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/waters-edge/project-features"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Features</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{E083243A-FC0D-4844-AE52-39A52811EA7F}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/west-yas"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>West Yas</span>
                                    </Link>
                                    <ul
                                      className="header__menu-dropdown__subitem-group"
                                      data-id="{E083243A-FC0D-4844-AE52-39A52811EA7F}"
                                    >
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{E5472269-53ED-4F27-87B3-F54C090DDD9C}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/west-yas"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>About the project</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{408766EE-42C3-493C-9ABB-8CE2F3ECCBBE}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/west-yas/project-features"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Features</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li
                                className="header__menu-dropdown__subitem"
                                data-id="{8A4673AE-AEC4-4647-A162-58AC20BAA572}"
                              >
                                <Link
                                  href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island"
                                  className="header__menu-dropdown__item__link"
                                >
                                  <span>Saadiyat Island</span>
                                </Link>
                                <ul
                                  className="header__menu-dropdown__subitem-group"
                                  data-id="{8A4673AE-AEC4-4647-A162-58AC20BAA572}"
                                >
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{9445FEAA-C7B8-414B-9D9C-97D10FF32738}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/the-source"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>The Source</span>
                                    </Link>
                                  </li>
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{46456FBE-BC5B-4106-9E8D-E9D1D8154A72}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/the-source-ii"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>The Source II</span>
                                    </Link>
                                  </li>
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{D06A62A9-3EEB-44B9-BFBD-9ECC0C7871BD}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/grove-beach-views"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>Grove Beach Views</span>
                                    </Link>
                                  </li>
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{344D2864-02BD-4299-A4DB-33CF8B75BA85}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/grove-museum-views"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>Grove Museum Views</span>
                                    </Link>
                                  </li>
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{54C3DDF6-CEC7-4A6A-8949-6A202F222D9B}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/Aldar Tenant/Aldar2/Home/explore-aldar/businesses/development/residential/saadiyat-island/manarat-living"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>Manarat Living</span>
                                    </Link>
                                  </li>
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{FA699985-5BDA-4131-A51E-EB7D5954D25D}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/saadiyat-lagoons"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>Saadiyat Lagoons</span>
                                    </Link>
                                  </li>
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{0CC4A77B-1973-473D-9D3F-5B875E15F0A2}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/jawaher-al-saadiyat"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>Jawaher Al Saadiyat</span>
                                    </Link>
                                    <ul
                                      className="header__menu-dropdown__subitem-group"
                                      data-id="{0CC4A77B-1973-473D-9D3F-5B875E15F0A2}"
                                    >
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{A6817C4E-6B6C-4B31-8F27-D745DDCDCE58}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/jawaher-al-saadiyat"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>About the Project</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{8CD6E3A9-9869-4B59-BE70-BC62CDA575A1}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/jawaher-al-saadiyat/project-features"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Features</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{5E1A5963-55D8-49DF-80D6-449201A45B1E}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/mamsha-al-saadiyat"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>Mamsha Al Saadiyat</span>
                                    </Link>
                                    <ul
                                      className="header__menu-dropdown__subitem-group"
                                      data-id="{5E1A5963-55D8-49DF-80D6-449201A45B1E}"
                                    >
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{78CE4B43-B394-4AF4-8D9C-70BED692244D}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/mamsha-al-saadiyat/buy"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Buy</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{6D82D8A5-42A7-4631-B80D-2BF8134C1F3C}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/mamsha-al-saadiyat"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>About the Project</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{D930468D-50DF-4CBC-A387-DBE30B1B0213}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/mamsha-al-saadiyat/project-features"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Features</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{716117E2-FAB3-414E-BE6F-E73688829072}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/saadiyat-reserve"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>Saadiyat Reserve </span>
                                    </Link>
                                    <ul
                                      className="header__menu-dropdown__subitem-group"
                                      data-id="{716117E2-FAB3-414E-BE6F-E73688829072}"
                                    >
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{87C9CF73-2257-4E19-9645-2FF440CE295A}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/saadiyat-reserve"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>About the Project</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{C5F4DB3D-7BA0-4734-A31A-B31B7A8F124D}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/saadiyat-reserve/project-features"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Features</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{19E74DBE-88DE-44CE-A093-62DAE5D4BBDC}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/saadiyat-reserve-the-dunes"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>Saadiyat Reserve The Dunes</span>
                                    </Link>
                                    <ul
                                      className="header__menu-dropdown__subitem-group"
                                      data-id="{19E74DBE-88DE-44CE-A093-62DAE5D4BBDC}"
                                    >
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{FDF06CEE-59B7-4D34-A482-2EB9036C5521}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/saadiyat-reserve-the-dunes"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>About the Project</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{98975D74-61B3-4515-85CF-EF16F63F29F9}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/saadiyat-reserve-the-dunes/project-features"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Features</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li
                                className="header__menu-dropdown__subitem"
                                data-id="{2B6B4042-8B60-449E-9EB9-FF3292625768}"
                              >
                                <Link
                                  href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island"
                                  className="header__menu-dropdown__item__link"
                                >
                                  <span>Reem Island</span>
                                </Link>
                                <ul
                                  className="header__menu-dropdown__subitem-group"
                                  data-id="{2B6B4042-8B60-449E-9EB9-FF3292625768}"
                                >
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{396335A9-6A83-4A49-98CF-F7651BF46CA6}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/reflection"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>Reflection</span>
                                    </Link>
                                    <ul
                                      className="header__menu-dropdown__subitem-group"
                                      data-id="{396335A9-6A83-4A49-98CF-F7651BF46CA6}"
                                    >
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{EE5C8883-EB59-4A8C-A178-CD57FA1D5345}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/reflection/buy"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Buy</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{A58DA9A9-EC2B-414D-8ADE-610102C3D400}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/reflection"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>About the project</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{65A25586-3090-42D8-8660-9604F8FA96F9}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/reflection/project-features"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Features</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{F3E7A1D1-E6DE-48E9-A01B-B12905802237}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/shams-meera"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>Meera</span>
                                    </Link>
                                    <ul
                                      className="header__menu-dropdown__subitem-group"
                                      data-id="{F3E7A1D1-E6DE-48E9-A01B-B12905802237}"
                                    >
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{6F35A373-9CBE-4FFF-88C3-0F7ABD5FC51D}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/shams-meera/buy"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Buy</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{1C6E6158-29CB-4760-B0A1-2CEE86A6BC0F}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/shams-meera"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>About the project</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{46AC8CA8-2A20-4961-893A-035E364365D6}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/shams-meera/project-features"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Features</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{CD3C4DC3-528F-49ED-A32E-1E87A14DC259}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/arc-towers"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>Arc Towers</span>
                                    </Link>
                                    <ul
                                      className="header__menu-dropdown__subitem-group"
                                      data-id="{CD3C4DC3-528F-49ED-A32E-1E87A14DC259}"
                                    >
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{479F8C51-11B8-4F5D-B764-9310939B890A}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/arc-towers/rent"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Rent</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{168FD3A9-E851-47BC-BB19-54EAADAEAB81}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/arc-towers"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>About the project</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{4D889B4B-FCE5-4C68-9481-08675BD47F5E}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/arc-towers/project-features"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Features</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{B497B952-7B8C-404B-9591-6989DA475BF6}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/sun-and-sky-towers"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>Sun and Sky Towers </span>
                                    </Link>
                                    <ul
                                      className="header__menu-dropdown__subitem-group"
                                      data-id="{B497B952-7B8C-404B-9591-6989DA475BF6}"
                                    >
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{A430D10D-E10F-4B8A-8B10-47B049928AB6}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/sun-and-sky-towers/rent"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Rent</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{BE9F11B9-8C62-41F0-8BEF-F3978C42656D}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/sun-and-sky-towers"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>About the project</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{CA0A9B35-4837-4318-982B-8B3FA503D927}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/sun-and-sky-towers/project-features"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Features</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{6975077A-07FE-46EF-876E-35FC3BA56614}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/the-gate-towers"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>The Gate Towers </span>
                                    </Link>
                                    <ul
                                      className="header__menu-dropdown__subitem-group"
                                      data-id="{6975077A-07FE-46EF-876E-35FC3BA56614}"
                                    >
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{F67A64FB-13B2-48BE-B773-F7BBCCB3BADA}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/the-gate-towers/rent"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Rent</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{DA8DFF35-2AF7-497A-96ED-59033B741CEA}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/the-gate-towers"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>About the project</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{B7C6B6B1-0B24-4CCC-8502-0E113DA4F65D}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/the-gate-towers/project-features"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Features</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{17605E68-1FA6-4339-9AAB-5EA1E9680C94}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/the-bridges"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>The Bridges</span>
                                    </Link>
                                    <ul
                                      className="header__menu-dropdown__subitem-group"
                                      data-id="{17605E68-1FA6-4339-9AAB-5EA1E9680C94}"
                                    >
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{5B113795-13E3-49B3-BAC4-3FAECA30E750}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/the-bridges/buy"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Buy</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{AE20C0E1-CD79-4764-9E3A-8BCD0DCC7E4E}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/the-bridges/rent"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Rent</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{5FDC1F1E-02CF-4B99-A135-51D0BC6CB3E5}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/the-bridges"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>About the project</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{444D2676-6D78-4801-A153-85CE07FF3FD7}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/the-bridges/project-features"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Features</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li
                                className="header__menu-dropdown__subitem"
                                data-id="{81D1982E-966A-46F3-9EAB-56ADAFAE5EE2}"
                              >
                                <Link
                                  href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/al-raha-beach"
                                  className="header__menu-dropdown__item__link"
                                >
                                  <span>Al Raha Beach</span>
                                </Link>
                                <ul
                                  className="header__menu-dropdown__subitem-group"
                                  data-id="{81D1982E-966A-46F3-9EAB-56ADAFAE5EE2}"
                                >
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{1F83A43C-88A8-46F1-A945-3BA4F246ABA4}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/al-raha-beach/al-bandar"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>Al Bandar</span>
                                    </Link>
                                    <ul
                                      className="header__menu-dropdown__subitem-group"
                                      data-id="{1F83A43C-88A8-46F1-A945-3BA4F246ABA4}"
                                    >
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{A06F460C-4D7B-464F-8F48-B4E96F65D0BF}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/al-raha-beach/al-bandar"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>About the project</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{766DC3F7-DD0A-4514-B16E-19D4D390B177}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/al-raha-beach/al-bandar/project-features"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Features</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{980518E6-64F0-4BDA-9F13-27C0B58D6150}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/al-raha-beach/al-hadeel"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>Al Hadeel</span>
                                    </Link>
                                    <ul
                                      className="header__menu-dropdown__subitem-group"
                                      data-id="{980518E6-64F0-4BDA-9F13-27C0B58D6150}"
                                    >
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{8CA2C15E-6A7B-45FA-8728-28E87C3AA96E}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/al-raha-beach/al-hadeel/buy"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Buy</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{75B564DF-7A8C-4598-86A9-8776FC22226A}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/al-raha-beach/al-hadeel"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>About the project</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{DE0A829B-9456-4A9B-AE6E-09A6AF3FD1F4}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/al-raha-beach/al-hadeel/project-features"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Features</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{E4F6B981-910A-47B6-A092-923FF18EE8C1}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/al-raha-beach/al-muneera"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>Al Muneera</span>
                                    </Link>
                                    <ul
                                      className="header__menu-dropdown__subitem-group"
                                      data-id="{E4F6B981-910A-47B6-A092-923FF18EE8C1}"
                                    >
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{900C314A-FAEB-453F-B368-5B2233F8786E}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/al-raha-beach/al-muneera"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>About the project</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{2AA7EE96-8CB2-4562-B4AF-2490B0B79776}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/al-raha-beach/al-muneera/project-features"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Features</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{71056207-DCB6-4CAA-901D-A78BF0D54195}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/al-raha-beach/al-zeina"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>Al Zeina</span>
                                    </Link>
                                    <ul
                                      className="header__menu-dropdown__subitem-group"
                                      data-id="{71056207-DCB6-4CAA-901D-A78BF0D54195}"
                                    >
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{B2F62060-A5CE-4C20-9F08-6DD70E741A9D}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/al-raha-beach/al-zeina/rent"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Rent</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{A55FD004-3F0C-4B11-B53C-86517E86988D}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/al-raha-beach/al-zeina"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>About the project</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{A828138B-FABC-4A06-A84C-2DD7FA670E45}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/al-raha-beach/al-zeina/project-features"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Features</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li
                                className="header__menu-dropdown__subitem"
                                data-id="{65B08FF6-EECF-4F0C-8B28-81944214EF00}"
                              >
                                <Link
                                  href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations"
                                  className="header__menu-dropdown__item__link"
                                >
                                  <span>Other Destinations</span>
                                </Link>
                                <ul
                                  className="header__menu-dropdown__subitem-group"
                                  data-id="{65B08FF6-EECF-4F0C-8B28-81944214EF00}"
                                >
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{B523CA2D-1D14-4A08-A2D9-BA2F3209AD95}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/alghadeer"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>Alghadeer</span>
                                    </Link>
                                    <ul
                                      className="header__menu-dropdown__subitem-group"
                                      data-id="{B523CA2D-1D14-4A08-A2D9-BA2F3209AD95}"
                                    >
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{18EDA008-CEF9-439A-BC63-444F65954194}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/alghadeer/buy"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Buy</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{19181505-6987-420F-AD21-D5085124903A}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/alghadeer"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>About the project</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{7866EA9C-093B-42C8-A790-3A9325551666}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/alghadeer/project-features"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Features</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{A2D670C8-3C9D-4EEF-8AF6-7293849B9593}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/al-reeman-i"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>Alreeman </span>
                                    </Link>
                                    <ul
                                      className="header__menu-dropdown__subitem-group"
                                      data-id="{A2D670C8-3C9D-4EEF-8AF6-7293849B9593}"
                                    >
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{EC95B9BB-A0A6-4976-BC1A-8749360CE872}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/al-reeman-i/buy"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Buy</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{D5BE6F4A-1784-4BC1-8D86-E9867A155BD2}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/al-reeman-i"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>About the project</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{E25201FA-C758-4E9A-A0AB-5FE6CB495288}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/al-reeman-i/project-features"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Features</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{65F6623B-B71F-47DE-94FE-401F6E6270FE}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/fay-alreeman"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>Fay Alreeman</span>
                                    </Link>
                                    <ul
                                      className="header__menu-dropdown__subitem-group"
                                      data-id="{65F6623B-B71F-47DE-94FE-401F6E6270FE}"
                                    >
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{21768820-5496-439C-8D75-05CCDAE43344}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/fay-alreeman"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>About the project</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{056FEDF9-ECAE-40E7-AE01-E9B8848A14ED}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/fay-alreeman/project-features"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Features</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{FFF66263-8BBC-41BE-9129-45BF91AE8CDF}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/fay-alreeman-ii"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>Fay Alreeman II</span>
                                    </Link>
                                  </li>
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{8ABBC01F-7EE8-44DF-B40D-2D8461584488}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/haven"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>Haven</span>
                                    </Link>
                                  </li>
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{74F1CCCF-9ECC-4A68-9E7D-8F0F64C434D2}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/reeman-living-phase-2"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>Reeman Living</span>
                                    </Link>
                                  </li>
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{5CE39564-048D-4755-9FD1-57FEDECDD32E}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/al-reeman-ii"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>Alreeman II</span>
                                    </Link>
                                    <ul
                                      className="header__menu-dropdown__subitem-group"
                                      data-id="{5CE39564-048D-4755-9FD1-57FEDECDD32E}"
                                    >
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{40B7FFA7-FB72-4657-A3D4-ECF4F9BAA858}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/al-reeman-ii"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>About the project</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{5DD6BDCE-84BB-475D-813F-B90404C7BF73}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/al-reeman-ii/project-features"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Features</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{37E48DFC-0814-4DEC-A4FD-EB8E14FFB9BE}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/the-burj-mohammed-bin-rashid"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>The Burj Mohammed Bin Rashid </span>
                                    </Link>
                                    <ul
                                      className="header__menu-dropdown__subitem-group"
                                      data-id="{37E48DFC-0814-4DEC-A4FD-EB8E14FFB9BE}"
                                    >
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{B360D13F-D655-4B43-ADA8-057D83FF8BD0}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/the-burj-mohammed-bin-rashid/rent"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Rent</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{C09CDAE1-C15A-4ACC-89F6-7FBE4396BCA3}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/the-burj-mohammed-bin-rashid"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>About the project</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{D410D016-790E-4603-8A2C-CD47FF4BAA43}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/the-burj-mohammed-bin-rashid/project-features"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Features</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{FA773F02-4C48-44B5-9FD0-EED89C7B1224}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/al-oyoun-village"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>Al Oyoun Village</span>
                                    </Link>
                                    <ul
                                      className="header__menu-dropdown__subitem-group"
                                      data-id="{FA773F02-4C48-44B5-9FD0-EED89C7B1224}"
                                    >
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{740043E2-472F-4FB0-A354-2BC75580FB07}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/al-oyoun-village/rent"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Rent</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{8EC0BEEF-7E3C-4F17-8CFF-3909AD77DA70}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/al-oyoun-village"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>About the project</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{13284A22-30BD-4A8E-8E55-75557E44CB49}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/al-oyoun-village/project-features"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Features</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{78DE6479-8EEC-452F-AFBF-A2891116350E}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/al-rayyana"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>Al Rayyana</span>
                                    </Link>
                                    <ul
                                      className="header__menu-dropdown__subitem-group"
                                      data-id="{78DE6479-8EEC-452F-AFBF-A2891116350E}"
                                    >
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{B7940374-25CC-44D1-8FDC-2637C2A83763}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/al-rayyana/rent"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Rent</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{1ACD3476-62FF-4373-9816-8464816782E3}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/al-rayyana"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>About the project</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{FA20F481-3A0A-4106-8454-FF14846DE7A2}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/al-rayyana/project-features"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Features</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{66443945-C160-4BFD-8B84-C4FD7D0267A7}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/eastern-mangroves"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>Eastern Mangroves</span>
                                    </Link>
                                    <ul
                                      className="header__menu-dropdown__subitem-group"
                                      data-id="{66443945-C160-4BFD-8B84-C4FD7D0267A7}"
                                    >
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{0EFF00B2-36EA-4324-920F-9ABD6137FB3A}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/eastern-mangroves/rent"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Rent</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{9AB12800-E0A1-4968-B3B6-615159757C3C}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/eastern-mangroves"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>About the project</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{BAB9B051-7971-44A4-991F-8CA1060DA5A3}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/eastern-mangroves/project-features"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Features</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{87FB50B5-35AA-444E-A848-4DB8254CAC1C}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/nareel-island"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>Nareel Island</span>
                                    </Link>
                                    <ul
                                      className="header__menu-dropdown__subitem-group"
                                      data-id="{87FB50B5-35AA-444E-A848-4DB8254CAC1C}"
                                    >
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{A588FB5E-BE62-45BB-A6EE-A57C88F22F63}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/nareel-island"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>About the project</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{A39600BA-DC28-44E9-A5F8-20CEA0588134}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/nareel-island/project-features"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Features</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li
                                    className="header__menu-dropdown__subitem"
                                    data-id="{33C4F553-0DF5-4964-9025-21236A4595C2}"
                                  >
                                    <Link
                                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/sas-al-nakhl-village"
                                      className="header__menu-dropdown__item__link"
                                    >
                                      <span>Sas Al Nakhl Village</span>
                                    </Link>
                                    <ul
                                      className="header__menu-dropdown__subitem-group"
                                      data-id="{33C4F553-0DF5-4964-9025-21236A4595C2}"
                                    >
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{16F3A5AE-759B-41DD-87AD-538B798FB2DC}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/sas-al-nakhl-village"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>About the project</span>
                                        </Link>
                                      </li>
                                      <li
                                        className="header__menu-dropdown__subitem"
                                        data-id="{9A697402-AD00-4FFD-AC3D-EBE471834E81}"
                                      >
                                        <Link
                                          href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/sas-al-nakhl-village/project-features"
                                          className="header__menu-dropdown__item__link"
                                        >
                                          <span>Features</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li
                            className="header__menu-dropdown__subitem"
                            data-id="{182B80BC-F491-4079-9175-2F3DE902561B}"
                          >
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/land"
                              className="header__menu-dropdown__item__link"
                            >
                              <span>Land Portfolio</span>
                            </Link>
                          </li>
                          <li
                            className="header__menu-dropdown__subitem"
                            data-id="{955A491D-7FB8-4357-B483-3A7F352F1A2D}"
                          >
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/development/partnerships"
                              className="header__menu-dropdown__item__link"
                            >
                              <span>Partnerships</span>
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li
                        className="header__menu-dropdown__subitem"
                        data-id="{A9DAE922-B2F1-474B-B48A-99BC01AE1F72}"
                      >
                        <span className="header__menu-dropdown__item__span">Investment</span>
                        <ul
                          className="header__menu-dropdown__subitem-group"
                          data-id="{A9DAE922-B2F1-474B-B48A-99BC01AE1F72}"
                        >
                          <li
                            className="header__menu-dropdown__subitem"
                            data-id="{5D5E561C-5907-41A9-AD36-42C290DA47C8}"
                          >
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/investment/commercial"
                              className="header__menu-dropdown__item__link"
                            >
                              <span>Commercial</span>
                            </Link>
                            <ul
                              className="header__menu-dropdown__subitem-group"
                              data-id="{5D5E561C-5907-41A9-AD36-42C290DA47C8}"
                            >
                              <li
                                className="header__menu-dropdown__subitem"
                                data-id="{30DCD8DE-491C-452A-BF4A-D2C30BB34045}"
                              >
                                <Link
                                  href="https://www.aldar.com/en/explore-aldar/businesses/investment/commercial/offices"
                                  className="header__menu-dropdown__item__link"
                                >
                                  <span>Offices</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li
                            className="header__menu-dropdown__subitem"
                            data-id="{26539EF0-A460-4DD0-814C-3D95293A4241}"
                          >
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/investment/retail"
                              className="header__menu-dropdown__item__link"
                            >
                              <span>Retail</span>
                            </Link>
                            <ul
                              className="header__menu-dropdown__subitem-group"
                              data-id="{26539EF0-A460-4DD0-814C-3D95293A4241}"
                            >
                              <li
                                className="header__menu-dropdown__subitem"
                                data-id="{CE9DFD8D-7668-41F1-A97B-B9CC085F1848}"
                              >
                                <Link
                                  href="https://www.aldar.com/en/explore-aldar/businesses/investment/retail/malls"
                                  className="header__menu-dropdown__item__link"
                                >
                                  <span>Our Malls</span>
                                </Link>
                              </li>
                              <li
                                className="header__menu-dropdown__subitem"
                                data-id="{E5AC1E12-288C-46A3-8E4A-47AEBC861D73}"
                              >
                                <Link
                                  href="https://www.aldar.com/en/explore-aldar/businesses/investment/retail/communities"
                                  className="header__menu-dropdown__item__link"
                                >
                                  <span>Retail Communities</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                      <li
                        className="header__menu-dropdown__subitem"
                        data-id="{646AB515-B8A5-4A75-BC05-38C2E0420897}"
                      >
                        <Link
                          href="https://www.aldar.com/en/explore-aldar/businesses/education"
                          className="header__menu-dropdown__item__link"
                        >
                          <span>Education</span>
                        </Link>
                        <ul
                          className="header__menu-dropdown__subitem-group"
                          data-id="{646AB515-B8A5-4A75-BC05-38C2E0420897}"
                        >
                          <li
                            className="header__menu-dropdown__subitem"
                            data-id="{4692C89B-3318-4982-BE6C-F364A792FA2B}"
                          >
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/education/academies"
                              className="header__menu-dropdown__item__link"
                            >
                              <span>Our Academies</span>
                            </Link>
                          </li>
                          <li
                            className="header__menu-dropdown__subitem"
                            data-id="{49345935-4AE4-4D0A-AF37-BF54C7B3EF4F}"
                          >
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/education/our-schools"
                              className="header__menu-dropdown__item__link"
                            >
                              <span>Our Schools</span>
                            </Link>
                          </li>
                          <li
                            className="header__menu-dropdown__subitem"
                            data-id="{DE6E09D8-554B-45FE-B53A-C9CAD3528DB5}"
                          >
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/education/aldar-training-academy"
                              className="header__menu-dropdown__item__link"
                            >
                              <span>Training Academy</span>
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li
                        className="header__menu-dropdown__subitem"
                        data-id="{51B9DA07-0D73-4291-B7ED-9B1DB8531A07}"
                      >
                        <Link
                          href="https://www.aldar.com/en/explore-aldar/businesses/hospitality"
                          className="header__menu-dropdown__item__link"
                        >
                          <span>Hospitality</span>
                        </Link>
                        <ul
                          className="header__menu-dropdown__subitem-group"
                          data-id="{51B9DA07-0D73-4291-B7ED-9B1DB8531A07}"
                        >
                          <li
                            className="header__menu-dropdown__subitem"
                            data-id="{FCDBCFCE-4CEE-41FA-961C-53C9DF45AE00}"
                          >
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/hospitality/hotels"
                              className="header__menu-dropdown__item__link"
                            >
                              <span>Hotels</span>
                            </Link>
                          </li>
                          <li
                            className="header__menu-dropdown__subitem"
                            data-id="{D036E6EB-0A3E-4887-84F5-7130F59FA18D}"
                          >
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/hospitality/golf-course"
                              className="header__menu-dropdown__item__link"
                            >
                              <span>Golf Courses</span>
                            </Link>
                          </li>
                          <li
                            className="header__menu-dropdown__subitem"
                            data-id="{A1F99369-F49C-452D-9149-EC2365E0DB55}"
                          >
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/hospitality/beach-clubs"
                              className="header__menu-dropdown__item__link"
                            >
                              <span>Beach Clubs</span>
                            </Link>
                          </li>
                          <li
                            className="header__menu-dropdown__subitem"
                            data-id="{E05CE5A0-1F06-4103-B8A0-774E546090B2}"
                          >
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/hospitality/marinas"
                              className="header__menu-dropdown__item__link"
                            >
                              <span>Marinas</span>
                            </Link>
                          </li>
                          <li
                            className="header__menu-dropdown__subitem"
                            data-id="{73190DEC-E14C-408D-BD66-4FAB0D6BD7F9}"
                          >
                            <Link
                              href="https://www.aldar.com/en/explore-aldar/businesses/hospitality/parks"
                              className="header__menu-dropdown__item__link"
                            >
                              <span>Parks</span>
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li
                        className="header__menu-dropdown__subitem"
                        data-id="{BA7DACBB-1A3A-486C-BA45-A71F6C9C06FF}"
                      >
                        <Link
                          href="https://www.aldar.com/en/explore-aldar/businesses/aldar-projects"
                          className="header__menu-dropdown__item__link"
                        >
                          <span>Projects</span>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li
                    className="header__menu-dropdown__item"
                    data-id="{D62BACCF-B4EF-432A-8900-88FBB0441F0D}"
                  >
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/corporate-governance"
                      className="header__menu-dropdown__item__link"
                      data-id="{D62BACCF-B4EF-432A-8900-88FBB0441F0D}"
                    >
                      <span>Corporate Governance </span>
                    </Link>
                  </li>

                  <li
                    className="header__menu-dropdown__item"
                    data-id="{7C8E74B8-A1DE-40F4-B76E-AF2A1E2A8838}"
                  >
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/sustainability"
                      className="header__menu-dropdown__item__link"
                      data-id="{7C8E74B8-A1DE-40F4-B76E-AF2A1E2A8838}"
                    >
                      <span>Sustainability</span>
                    </Link>
                    <ul
                      className="header__menu-dropdown__subitem-group"
                      data-id="{7C8E74B8-A1DE-40F4-B76E-AF2A1E2A8838}"
                    >
                      <li
                        className="header__menu-dropdown__subitem"
                        data-id="{B5EB0316-FB2D-48D2-B04A-A71EB98F108A}"
                      >
                        <Link
                          href="https://www.aldar.com/en/explore-aldar/sustainability/strategy"
                          className="header__menu-dropdown__item__link"
                        >
                          <span>Sustainability Strategy</span>
                        </Link>
                      </li>

                      <li
                        className="header__menu-dropdown__subitem"
                        data-id="{D0429E8E-1137-495F-B944-185189735226}"
                      >
                        <Link
                          href="https://www.aldar.com/en/explore-aldar/sustainability/governance-and-policies"
                          className="header__menu-dropdown__item__link"
                        >
                          <span>Governance & Policies</span>
                        </Link>
                      </li>

                      <li
                        className="header__menu-dropdown__subitem"
                        data-id="{155F87DD-395A-497E-A2D8-C493974DBDDD}"
                      >
                        <Link
                          href="https://www.aldar.com/en/explore-aldar/sustainability/reporting"
                          className="header__menu-dropdown__item__link"
                        >
                          <span>Reporting & Performance</span>
                        </Link>
                      </li>

                      <li
                        className="header__menu-dropdown__subitem"
                        data-id="{784C5843-44A6-45F4-A50D-3744F1CA7C89}"
                      >
                        <Link
                          href="https://www.aldar.com/en/explore-aldar/sustainability/netzero"
                          className="header__menu-dropdown__item__link"
                        >
                          <span>Net Zero</span>
                        </Link>
                      </li>

                      <li
                        className="header__menu-dropdown__subitem"
                        data-id="{A22FC8BC-8906-44DD-9111-51FAB0CFDA98}"
                      >
                        <Link
                          href="https://www.aldar.com/en/explore-aldar/sustainability/corporate-social-responsibility"
                          className="header__menu-dropdown__item__link"
                        >
                          <span>Community Outreach</span>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li
                    className="header__menu-dropdown__item"
                    data-id="{065FB7C1-945D-4BEE-9318-1ED6A63F73C8}"
                  >
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/aldar-brand"
                      className="header__menu-dropdown__item__link"
                      data-id="{065FB7C1-945D-4BEE-9318-1ED6A63F73C8}"
                    >
                      <span>Aldar Brand</span>
                    </Link>
                  </li>

                  <li
                    className="header__menu-dropdown__item"
                    data-id="{E1132B35-B5E2-47BC-8F4A-3170C279CAAC}"
                  >
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/live-aldar"
                      className="header__menu-dropdown__item__link"
                      data-id="{E1132B35-B5E2-47BC-8F4A-3170C279CAAC}"
                    >
                      <span>Live Aldar</span>
                    </Link>
                    <ul
                      className="header__menu-dropdown__subitem-group"
                      data-id="{E1132B35-B5E2-47BC-8F4A-3170C279CAAC}"
                    >
                      <li
                        className="header__menu-dropdown__subitem"
                        data-id="{D67003EC-D707-4F3F-8691-1ACAA3D8A833}"
                      >
                        <Link
                          href="https://www.aldar.com/en/explore-aldar/live-aldar/year-of-sustainability"
                          className="header__menu-dropdown__item__link"
                        >
                          <span>Year of Sustainability</span>
                        </Link>
                      </li>

                      <li
                        className="header__menu-dropdown__subitem"
                        data-id="{5BED3181-2327-43A8-895A-DDCDFA69D8DD}"
                      >
                        <Link
                          href="https://www.aldar.com/en/explore-aldar/live-aldar/emirati-womens-day"
                          className="header__menu-dropdown__item__link"
                        >
                          <span>Emirati Women&apos;s Day</span>
                        </Link>
                      </li>

                      <li
                        className="header__menu-dropdown__subitem"
                        data-id="{0A999D4B-7AF3-4460-918B-9CE7A59E5B13}"
                      >
                        <Link
                          href="https://www.aldar.com/en/explore-aldar/live-aldar/ahal-aldar"
                          className="header__menu-dropdown__item__link"
                        >
                          <span>Ahal Aldar</span>
                        </Link>
                      </li>

                      <li
                        className="header__menu-dropdown__subitem"
                        data-id="{B0CD045F-75F7-42CD-A6D3-EDF4100BFD4C}"
                      >
                        <Link
                          href="https://www.aldar.com/en/explore-aldar/live-aldar/aldar-stories"
                          className="header__menu-dropdown__item__link"
                        >
                          <span>Aldar Stories</span>
                        </Link>
                      </li>

                      <li
                        className="header__menu-dropdown__subitem"
                        data-id="{423FBF61-A413-4359-94C8-C7202FF8BDC3}"
                      >
                        <Link
                          href="https://www.aldar.com/en/explore-aldar/live-aldar/in-focus"
                          className="header__menu-dropdown__item__link"
                        >
                          <span>In Focus</span>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li
                    className="header__menu-dropdown__item"
                    data-id="{D01C59BB-FE5C-4F92-B877-41944156DF13}"
                  >
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/art"
                      className="header__menu-dropdown__item__link"
                      data-id="{D01C59BB-FE5C-4F92-B877-41944156DF13}"
                    >
                      <span>Art</span>
                    </Link>
                  </li>

                  <li
                    className="header__menu-dropdown__item"
                    data-id="{BCC2FA58-7881-4A0D-AE8E-036EA9EF0813}"
                  >
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/innovation"
                      className="header__menu-dropdown__item__link"
                      data-id="{BCC2FA58-7881-4A0D-AE8E-036EA9EF0813}"
                    >
                      <span>Innovation</span>
                    </Link>
                    <ul
                      className="header__menu-dropdown__subitem-group"
                      data-id="{BCC2FA58-7881-4A0D-AE8E-036EA9EF0813}"
                    >
                      <li
                        className="header__menu-dropdown__subitem"
                        data-id="{3C7FD7D4-7031-4088-A00A-AFEDE6B3AE53}"
                      >
                        <Link
                          href="https://www.aldar.com/en/explore-aldar/innovation/manassah3"
                          className="header__menu-dropdown__item__link"
                        >
                          <span>Manassah</span>
                        </Link>
                      </li>

                      <li
                        className="header__menu-dropdown__subitem"
                        data-id="{479D9BCF-6B82-4765-B3C1-0AD47A535877}"
                      >
                        <Link
                          href="https://www.aldar.com/en/explore-aldar/innovation/scale-up"
                          className="header__menu-dropdown__item__link"
                        >
                          <span>Scale Up By Aldar</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul
                  className="header__menu-dropdown__item-group"
                  data-id="{9A802E34-08B6-45BC-894B-CA399470BFBD}"
                >
                  <li
                    className="header__menu-dropdown__item"
                    data-id="{6EDDB5A5-1B3E-4DC8-94B9-3F2C057226D3}"
                  >
                    <Link
                      href="https://www.aldar.com/en/news-and-media"
                      className="header__menu-dropdown__item__link"
                      data-id="{6EDDB5A5-1B3E-4DC8-94B9-3F2C057226D3}"
                    >
                      <span>News</span>
                    </Link>
                  </li>

                  <li
                    className="header__menu-dropdown__item"
                    data-id="{2D5AC7A9-BC36-42A2-A979-AE0F9F91A55C}"
                  >
                    <Link
                      href="https://www.aldar.com/en/media/gallery"
                      className="header__menu-dropdown__item__link"
                      data-id="{2D5AC7A9-BC36-42A2-A979-AE0F9F91A55C}"
                    >
                      <span>Gallery</span>
                    </Link>
                  </li>

                  <li
                    className="header__menu-dropdown__item"
                    data-id="{3740875F-9D20-4E51-8492-DF8B8937FCED}"
                  >
                    <Link
                      href="https://www.aldar.com/en/blog"
                      className="header__menu-dropdown__item__link"
                      data-id="{3740875F-9D20-4E51-8492-DF8B8937FCED}"
                    >
                      <span>Blog</span>
                    </Link>
                  </li>
                </ul>
                <ul
                  className="header__menu-dropdown__item-group"
                  data-id="{7C182C04-0559-431D-9DD5-4543416E6FF1}"
                >
                  <li
                    className="header__menu-dropdown__item"
                    data-id="{67A85B72-0B1A-43A7-9F07-08B81FEB47EE}"
                  >
                    <span className="header__menu-dropdown__item__span">
                      Reports & Presentations
                    </span>
                    <ul
                      className="header__menu-dropdown__subitem-group"
                      data-id="{67A85B72-0B1A-43A7-9F07-08B81FEB47EE}"
                    >
                      <li
                        className="header__menu-dropdown__subitem"
                        data-id="{A0F832BE-96D5-4499-B1D5-B164755C1A6F}"
                      >
                        <Link
                          href="https://www.aldar.com/en/investors/reports/annual-reports"
                          className="header__menu-dropdown__item__link"
                        >
                          <span>Annual Reports</span>
                        </Link>
                      </li>

                      <li
                        className="header__menu-dropdown__subitem"
                        data-id="{E220C1C9-08BB-4404-9B83-2DC2903D42B1}"
                      >
                        <Link
                          href="https://www.aldar.com/en/investors/reports/financial-statements"
                          className="header__menu-dropdown__item__link"
                        >
                          <span>Financial Statements</span>
                        </Link>
                      </li>

                      <li
                        className="header__menu-dropdown__subitem"
                        data-id="{F424634B-9982-4F07-82FD-80C3ECBE2D90}"
                      >
                        <Link
                          href="https://www.aldar.com/en/investors/reports/quarterly-results"
                          className="header__menu-dropdown__item__link"
                        >
                          <span>Quarterly Results</span>
                        </Link>
                      </li>

                      <li
                        className="header__menu-dropdown__subitem"
                        data-id="{7294A2D5-21D6-45A6-85B9-80C4F60B9460}"
                      >
                        <Link
                          href="https://www.aldar.com/en/investors/reports/investor-presentations"
                          className="header__menu-dropdown__item__link"
                        >
                          <span>Investor Presentations</span>
                        </Link>
                      </li>

                      <li
                        className="header__menu-dropdown__subitem"
                        data-id="{861870A4-2B6E-4AAD-988B-62F4A1DB4A31}"
                      >
                        <Link
                          href="https://www.aldar.com/en/investors/reports/sustainability-reports"
                          className="header__menu-dropdown__item__link"
                        >
                          <span>Sustainability Reports</span>
                        </Link>
                      </li>

                      <li
                        className="header__menu-dropdown__subitem"
                        data-id="{50C2BEAF-5762-4592-B3F5-CCECA1A528DD}"
                      >
                        <Link
                          href="https://www.aldar.com/en/investors/reports/capital-markets-day"
                          className="header__menu-dropdown__item__link"
                        >
                          <span>Capital Markets Day</span>
                        </Link>
                      </li>

                      <li
                        className="header__menu-dropdown__subitem"
                        data-id="{37F84296-BF15-4F19-B66E-821ACF071C30}"
                      >
                        <Link
                          href="https://www.aldar.com/en/investors/reports/factsheet"
                          className="header__menu-dropdown__item__link"
                        >
                          <span>Factsheet</span>
                        </Link>
                      </li>

                      <li
                        className="header__menu-dropdown__subitem"
                        data-id="{2C59EFA3-CFE2-443E-B6E2-107AE0D8E39A}"
                      >
                        <Link
                          href="https://www.aldar.com/en/investors/reports/key-figures"
                          className="header__menu-dropdown__item__link"
                        >
                          <span>Key Figures</span>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li
                    className="header__menu-dropdown__item"
                    data-id="{42C189DB-9DFF-48E2-8F2B-CA47670F4DD7}"
                  >
                    <span className="header__menu-dropdown__item__span">Shareholder Center</span>
                    <ul
                      className="header__menu-dropdown__subitem-group"
                      data-id="{42C189DB-9DFF-48E2-8F2B-CA47670F4DD7}"
                    >
                      <li
                        className="header__menu-dropdown__subitem"
                        data-id="{2226BFF2-7D85-4557-8428-B96C8E49B771}"
                      >
                        <Link
                          href="https://www.aldar.com/en/investors/shareholders/share-information"
                          className="header__menu-dropdown__item__link"
                        >
                          <span>Share Information</span>
                        </Link>
                      </li>

                      <li
                        className="header__menu-dropdown__subitem"
                        data-id="{490C743E-70DB-4C03-A02B-C7916BBB8782}"
                      >
                        <Link
                          href="https://www.aldar.com/en/investors/shareholders/dividends"
                          className="header__menu-dropdown__item__link"
                        >
                          <span>Dividends</span>
                        </Link>
                      </li>

                      <li
                        className="header__menu-dropdown__subitem"
                        data-id="{5658F475-5E4A-44E2-9E65-716B93C03568}"
                      >
                        <Link
                          href="https://www.aldar.com/en/explore-aldar/corporate-governance#AGM"
                          className="header__menu-dropdown__item__link"
                        >
                          <span>AGM</span>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li
                    className="header__menu-dropdown__item"
                    data-id="{FED3BF9E-94FC-4B51-9BC9-4B26BF472E56}"
                  >
                    <span className="header__menu-dropdown__item__span">Debt Investors</span>
                    <ul
                      className="header__menu-dropdown__subitem-group"
                      data-id="{FED3BF9E-94FC-4B51-9BC9-4B26BF472E56}"
                    >
                      <li
                        className="header__menu-dropdown__subitem"
                        data-id="{CF6B51EE-7B05-4E66-95E7-6F26FCA32431}"
                      >
                        <Link
                          href="https://www.aldar.com/en/investors/debt/credit-ratings"
                          className="header__menu-dropdown__item__link"
                        >
                          <span>Credit Ratings</span>
                        </Link>
                      </li>

                      <li
                        className="header__menu-dropdown__subitem"
                        data-id="{F7137ACD-5195-4FBF-AF5F-33D215161C82}"
                      >
                        <Link
                          href="https://www.aldar.com/en/investors/debt/issuances"
                          className="header__menu-dropdown__item__link"
                        >
                          <span>Issuances</span>
                        </Link>
                      </li>

                      <li
                        className="header__menu-dropdown__subitem"
                        data-id="{9B9AE755-F4A0-4D3C-BF6F-AA1601906327}"
                      >
                        <Link
                          href="https://www.aldar.com/en/investors/debt/debt-investor-presentations"
                          className="header__menu-dropdown__item__link"
                        >
                          <span>Debt Investor Presentations</span>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li
                    className="header__menu-dropdown__item"
                    data-id="{C1B428B7-043A-40DF-B179-513C9C14BEF4}"
                  >
                    <span className="header__menu-dropdown__item__span">Analyst Coverage</span>
                    <ul
                      className="header__menu-dropdown__subitem-group"
                      data-id="{C1B428B7-043A-40DF-B179-513C9C14BEF4}"
                    >
                      <li
                        className="header__menu-dropdown__subitem"
                        data-id="{B9B7F8C1-CF6B-403C-92DB-E890072F970B}"
                      >
                        <Link
                          href="https://www.aldar.com/en/investors/coverage/analyst-list"
                          className="header__menu-dropdown__item__link"
                        >
                          <span>Analyst List</span>
                        </Link>
                      </li>

                      <li
                        className="header__menu-dropdown__subitem"
                        data-id="{D9044F29-F6BB-4958-800A-B52ACDA01079}"
                      >
                        <Link
                          href="https://www.aldar.com/en/investors/coverage/recommendation-overview"
                          className="header__menu-dropdown__item__link"
                        >
                          <span>Recommendation Overview</span>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li
                    className="header__menu-dropdown__item"
                    data-id="{ECEB7D6B-8BC0-416A-8C96-1F722788AE58}"
                  >
                    <Link
                      href="https://www.aldar.com/en/investors/financial-calendar"
                      className="header__menu-dropdown__item__link"
                      data-id="{ECEB7D6B-8BC0-416A-8C96-1F722788AE58}"
                    >
                      <span>Financial Calendar</span>
                    </Link>
                  </li>

                  <li
                    className="header__menu-dropdown__item"
                    data-id="{CC96C208-2747-4766-98AB-FF980592A17F}"
                  >
                    <Link
                      href="https://www.aldar.com/en/investors/company-announcements"
                      className="header__menu-dropdown__item__link"
                      data-id="{CC96C208-2747-4766-98AB-FF980592A17F}"
                    >
                      <span>Company Announcements</span>
                    </Link>
                  </li>

                  <li
                    className="header__menu-dropdown__item"
                    data-id="{8E068EEB-3C6F-40FC-843F-0F151920D215}"
                  >
                    <span className="header__menu-dropdown__item__span">Contact Us</span>
                    <ul
                      className="header__menu-dropdown__subitem-group"
                      data-id="{8E068EEB-3C6F-40FC-843F-0F151920D215}"
                    >
                      <li
                        className="header__menu-dropdown__subitem"
                        data-id="{91DD581A-84F5-4B60-BE29-926773438CDF}"
                      >
                        <Link
                          href="https://www.aldar.com/en/investors/contact-us/contact-details"
                          className="header__menu-dropdown__item__link"
                        >
                          <span>Contact Details</span>
                        </Link>
                      </li>

                      <li
                        className="header__menu-dropdown__subitem"
                        data-id="{9AE68490-E06D-4D0D-9A16-6F46BC25E699}"
                      >
                        <Link
                          href="https://www.aldar.com/en/investors/contact-us/subscription-center"
                          className="header__menu-dropdown__item__link"
                        >
                          <span>Subscription Center</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul
                  className="header__menu-dropdown__item-group"
                  data-id="{1683580F-32E0-4178-8A8B-617A801D6D81}"
                >
                  <li
                    className="header__menu-dropdown__item"
                    data-id="{73C1DB6D-092B-4BF9-9F9A-E6D1B18A3637}"
                  >
                    <Link
                      href="https://fa-ewnp-saasfaprod1.fa.ocs.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="header__menu-dropdown__item__link"
                      data-id="{73C1DB6D-092B-4BF9-9F9A-E6D1B18A3637}"
                    >
                      <span>Work with us</span>
                    </Link>
                  </li>

                  <li
                    className="header__menu-dropdown__item"
                    data-id="{CA3257B0-AB3A-4779-98B0-88FE1CE06153}"
                  >
                    <Link
                      href="https://www.aldar.com/en/careers/graduate-programme"
                      className="header__menu-dropdown__item__link"
                      data-id="{CA3257B0-AB3A-4779-98B0-88FE1CE06153}"
                    >
                      <span>Graduate Programme</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header__r2-container">
              <div className="container">
                <ul
                  className="header__submenu"
                  data-parentmobileid="{19B94A19-6AB8-4E29-A247-74E2FE61B4ED}"
                  data-parentid="{D431F222-136A-40FB-8FC4-C594BEF5674C}"
                >
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/lea-yas-island"
                      data-linkid="{D431F222-136A-40FB-8FC4-C594BEF5674C}"
                      className="header__submenu-item"
                      data-id="{3CEFEDE8-F617-481C-88F3-6C955836F1CE}"
                    >
                      About the project
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/lea-yas-island/project-features"
                      data-linkid="{4D24F9CD-FB29-4EF5-878A-C8BBFA349058}"
                      className="header__submenu-item"
                      data-id="{43F6F372-A113-4F81-886D-05FA18C46941}"
                    >
                      Features
                    </Link>
                  </li>
                </ul>
                <ul
                  className="header__submenu"
                  data-parentmobileid="{C695F154-E532-483F-B033-5FB289B2AD43}"
                  data-parentid="{91D8D3C4-8CA3-43DD-93AC-643C06A8B7DA}"
                >
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/mayan"
                      data-linkid="{91D8D3C4-8CA3-43DD-93AC-643C06A8B7DA}"
                      className="header__submenu-item"
                      data-id="{3381DF01-1776-479D-B046-7F6515AC9246}"
                    >
                      About the project
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/mayan/project-features"
                      data-linkid="{CD141ABE-EF65-4E0A-A5AA-9E38389DFE21}"
                      className="header__submenu-item"
                      data-id="{5D15F9D5-437C-47A4-BC74-F3B482CBA143}"
                    >
                      Features
                    </Link>
                  </li>
                </ul>
                <ul
                  className="header__submenu"
                  data-parentmobileid="{ACCA0539-5AC4-4D0C-8AEA-2C0741AAA09F}"
                  data-parentid="{ACD71176-159F-479E-BF95-478564706BAF}"
                >
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/ansam"
                      data-linkid="{ACD71176-159F-479E-BF95-478564706BAF}"
                      className="header__submenu-item"
                      data-id="{74BD2660-2961-46FF-92EC-43AC71782B0F}"
                    >
                      About the project
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/ansam/project-features"
                      data-linkid="{417D6B5B-3A22-4F19-8328-3D6C9E924E69}"
                      className="header__submenu-item"
                      data-id="{A1A5A743-1822-43B2-87FE-433797240781}"
                    >
                      Features
                    </Link>
                  </li>
                </ul>
                <ul
                  className="header__submenu"
                  data-parentmobileid="{D52C21BD-F70B-4D42-916E-AF6ED174EE0D}"
                  data-parentid="{9EF48127-1FDC-4521-BA66-02024DF23CFB}"
                >
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/noya"
                      data-linkid="{9EF48127-1FDC-4521-BA66-02024DF23CFB}"
                      className="header__submenu-item"
                      data-id="{90542F9F-EF74-46F9-8330-06363D6B4859}"
                    >
                      About the project
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/noya/project-features"
                      data-linkid="{62B83E63-C4C6-4310-9042-431E492123B9}"
                      className="header__submenu-item"
                      data-id="{C786B3AD-2A12-4D57-A578-D236D2DDF2F8}"
                    >
                      Features
                    </Link>
                  </li>
                </ul>
                <ul
                  className="header__submenu"
                  data-parentmobileid="{6D613337-9BBD-4055-B7A0-722285C0E323}"
                  data-parentid="{5305A7C4-3EFB-4BBA-BC48-A26B282DDCA5}"
                >
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/noya-luma"
                      data-linkid="{5305A7C4-3EFB-4BBA-BC48-A26B282DDCA5}"
                      className="header__submenu-item"
                      data-id="{EBC8D70B-EA8A-4165-A5D6-85209626777B}"
                    >
                      About the project
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/noya-luma/project-features"
                      data-linkid="{3128B7C9-6DDE-4311-9846-140A1FFF4D10}"
                      className="header__submenu-item"
                      data-id="{AC2C9C65-90B8-49C0-87EB-79A268E646FB}"
                    >
                      Features
                    </Link>
                  </li>
                </ul>
                <ul
                  className="header__submenu"
                  data-parentmobileid="{61C38DDA-2599-45C0-AD35-724C127D8DE7}"
                  data-parentid="{1803D367-13C9-453A-A045-0F8657732395}"
                >
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/noya-viva"
                      data-linkid="{1803D367-13C9-453A-A045-0F8657732395}"
                      className="header__submenu-item"
                      data-id="{9477C767-6FF2-4033-99E4-2D5CD2512091}"
                    >
                      About the project
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/noya-viva/project-features"
                      data-linkid="{1383E10C-3AC4-4BF5-BA91-BF02730B5E41}"
                      className="header__submenu-item"
                      data-id="{2BD88445-3827-4EBD-BD2C-DCD704FB031B}"
                    >
                      Features
                    </Link>
                  </li>
                </ul>
                <ul
                  className="header__submenu"
                  data-parentmobileid="{587035B8-266B-485C-9CAD-2020F1765E11}"
                  data-parentid="{0989FBEE-DAD6-4AEB-A225-827E2CBE6B84}"
                >
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/yas-acres"
                      data-linkid="{0989FBEE-DAD6-4AEB-A225-827E2CBE6B84}"
                      className="header__submenu-item"
                      data-id="{09922C21-7D5C-44AF-823D-BCC7BEAF13AA}"
                    >
                      About the project
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/yas-acres/project-features"
                      data-linkid="{CDDF99F1-BD33-41D2-BC7B-8F07E39ACD83}"
                      className="header__submenu-item"
                      data-id="{59E2EC47-F085-4690-B203-F95F481B0219}"
                    >
                      Features
                    </Link>
                  </li>
                </ul>
                <ul
                  className="header__submenu"
                  data-parentmobileid="{3C970FC0-BA36-439E-AE69-77D45CD24D68}"
                  data-parentid="{CC20DA72-A421-466C-9049-434AFC85308A}"
                >
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/waters-edge/buy"
                      data-linkid="{B975586D-181D-4D22-88FE-1F1DFC72E59A}"
                      className="header__submenu-item"
                      data-id="{13083ED4-AA91-4BFE-BE8F-0A4A6C4DE7A2}"
                    >
                      Buy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/waters-edge"
                      data-linkid="{CC20DA72-A421-466C-9049-434AFC85308A}"
                      className="header__submenu-item"
                      data-id="{35A76A88-7DF2-4318-BA44-38A1A122E09B}"
                    >
                      About the project
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/waters-edge/project-features"
                      data-linkid="{6B238147-C57A-4761-8622-8659DE106205}"
                      className="header__submenu-item"
                      data-id="{7A6C070D-765A-4739-B4DA-7175918B9DEB}"
                    >
                      Features
                    </Link>
                  </li>
                </ul>
                <ul
                  className="header__submenu"
                  data-parentmobileid="{E083243A-FC0D-4844-AE52-39A52811EA7F}"
                  data-parentid="{49CD8B3E-F6DB-45F8-9461-11B627F564D6}"
                >
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/west-yas"
                      data-linkid="{49CD8B3E-F6DB-45F8-9461-11B627F564D6}"
                      className="header__submenu-item"
                      data-id="{E5472269-53ED-4F27-87B3-F54C090DDD9C}"
                    >
                      About the project
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/yas-island/west-yas/project-features"
                      data-linkid="{37D1D784-6081-43AE-A048-CE0C5C6344A2}"
                      className="header__submenu-item"
                      data-id="{408766EE-42C3-493C-9ABB-8CE2F3ECCBBE}"
                    >
                      Features
                    </Link>
                  </li>
                </ul>
                <ul
                  className="header__submenu"
                  data-parentmobileid="{0CC4A77B-1973-473D-9D3F-5B875E15F0A2}"
                  data-parentid="{2F0878AE-AECF-456F-9A11-E3DFDEF6466E}"
                >
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/jawaher-al-saadiyat"
                      data-linkid="{2F0878AE-AECF-456F-9A11-E3DFDEF6466E}"
                      className="header__submenu-item"
                      data-id="{A6817C4E-6B6C-4B31-8F27-D745DDCDCE58}"
                    >
                      About the Project
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/jawaher-al-saadiyat/project-features"
                      data-linkid="{74B4C6F3-7609-4397-BD15-57D780F6993B}"
                      className="header__submenu-item"
                      data-id="{8CD6E3A9-9869-4B59-BE70-BC62CDA575A1}"
                    >
                      Features
                    </Link>
                  </li>
                </ul>
                <ul
                  className="header__submenu"
                  data-parentmobileid="{5E1A5963-55D8-49DF-80D6-449201A45B1E}"
                  data-parentid="{5ED13E24-93AC-49FF-BB23-A81C24917FE0}"
                >
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/mamsha-al-saadiyat/buy"
                      data-linkid="{AB8ECDA0-5161-47ED-BE3B-D0DDE36FF8A8}"
                      className="header__submenu-item"
                      data-id="{78CE4B43-B394-4AF4-8D9C-70BED692244D}"
                    >
                      Buy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/mamsha-al-saadiyat"
                      data-linkid="{5ED13E24-93AC-49FF-BB23-A81C24917FE0}"
                      className="header__submenu-item"
                      data-id="{6D82D8A5-42A7-4631-B80D-2BF8134C1F3C}"
                    >
                      About the Project
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/mamsha-al-saadiyat/project-features"
                      data-linkid="{F2364E3D-19F5-4291-B36E-30ACAFF7839B}"
                      className="header__submenu-item"
                      data-id="{D930468D-50DF-4CBC-A387-DBE30B1B0213}"
                    >
                      Features
                    </Link>
                  </li>
                </ul>
                <ul
                  className="header__submenu"
                  data-parentmobileid="{716117E2-FAB3-414E-BE6F-E73688829072}"
                  data-parentid="{5233D170-FE69-4804-A691-D01BDABC782D}"
                >
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/saadiyat-reserve"
                      data-linkid="{5233D170-FE69-4804-A691-D01BDABC782D}"
                      className="header__submenu-item"
                      data-id="{87C9CF73-2257-4E19-9645-2FF440CE295A}"
                    >
                      About the Project
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/saadiyat-reserve/project-features"
                      data-linkid="{C131859B-C002-4771-9E0A-376DAA35DD25}"
                      className="header__submenu-item"
                      data-id="{C5F4DB3D-7BA0-4734-A31A-B31B7A8F124D}"
                    >
                      Features
                    </Link>
                  </li>
                </ul>
                <ul
                  className="header__submenu"
                  data-parentmobileid="{19E74DBE-88DE-44CE-A093-62DAE5D4BBDC}"
                  data-parentid="{9D55F6A7-4521-4FFB-ABEE-FFDE5B29DEC5}"
                >
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/saadiyat-reserve-the-dunes"
                      data-linkid="{9D55F6A7-4521-4FFB-ABEE-FFDE5B29DEC5}"
                      className="header__submenu-item"
                      data-id="{FDF06CEE-59B7-4D34-A482-2EB9036C5521}"
                    >
                      About the Project
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/saadiyat-island/saadiyat-reserve-the-dunes/project-features"
                      data-linkid="{F80B03B1-CD9C-48E2-B4F3-C318E4B9D742}"
                      className="header__submenu-item"
                      data-id="{98975D74-61B3-4515-85CF-EF16F63F29F9}"
                    >
                      Features
                    </Link>
                  </li>
                </ul>
                <ul
                  className="header__submenu"
                  data-parentmobileid="{396335A9-6A83-4A49-98CF-F7651BF46CA6}"
                  data-parentid="{CC3ABB34-1A9D-4347-9F2D-3D93605727F2}"
                >
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/reflection/buy"
                      data-linkid="{115DE78F-BBD7-4F80-ACF5-9D42CC78B0D4}"
                      className="header__submenu-item"
                      data-id="{EE5C8883-EB59-4A8C-A178-CD57FA1D5345}"
                    >
                      Buy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/reflection"
                      data-linkid="{CC3ABB34-1A9D-4347-9F2D-3D93605727F2}"
                      className="header__submenu-item"
                      data-id="{A58DA9A9-EC2B-414D-8ADE-610102C3D400}"
                    >
                      About the project
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/reflection/project-features"
                      data-linkid="{246A9A6B-D926-470B-A2B8-1DF615515340}"
                      className="header__submenu-item"
                      data-id="{65A25586-3090-42D8-8660-9604F8FA96F9}"
                    >
                      Features
                    </Link>
                  </li>
                </ul>
                <ul
                  className="header__submenu"
                  data-parentmobileid="{F3E7A1D1-E6DE-48E9-A01B-B12905802237}"
                  data-parentid="{BC4EB050-12CE-49D3-B138-51C62AB6662F}"
                >
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/shams-meera/buy"
                      data-linkid="{056D1712-55A4-4DB5-BFF1-BEF52204E2B6}"
                      className="header__submenu-item"
                      data-id="{6F35A373-9CBE-4FFF-88C3-0F7ABD5FC51D}"
                    >
                      Buy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/shams-meera"
                      data-linkid="{BC4EB050-12CE-49D3-B138-51C62AB6662F}"
                      className="header__submenu-item"
                      data-id="{1C6E6158-29CB-4760-B0A1-2CEE86A6BC0F}"
                    >
                      About the project
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/shams-meera/project-features"
                      data-linkid="{FF694EA0-2D55-4CC4-9B95-01F7E567895E}"
                      className="header__submenu-item"
                      data-id="{46AC8CA8-2A20-4961-893A-035E364365D6}"
                    >
                      Features
                    </Link>
                  </li>
                </ul>
                <ul
                  className="header__submenu"
                  data-parentmobileid="{CD3C4DC3-528F-49ED-A32E-1E87A14DC259}"
                  data-parentid="{13EB8064-4EEE-4E7F-B2DC-3C0251EEC4F4}"
                >
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/arc-towers/rent"
                      data-linkid="{F3E517B6-5F98-4BEE-9682-C8DA395A9277}"
                      className="header__submenu-item"
                      data-id="{479F8C51-11B8-4F5D-B764-9310939B890A}"
                    >
                      Rent
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/arc-towers"
                      data-linkid="{13EB8064-4EEE-4E7F-B2DC-3C0251EEC4F4}"
                      className="header__submenu-item"
                      data-id="{168FD3A9-E851-47BC-BB19-54EAADAEAB81}"
                    >
                      About the project
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/arc-towers/project-features"
                      data-linkid="{5ED9D638-FB28-4F3E-ADE1-013BCCA2CA1A}"
                      className="header__submenu-item"
                      data-id="{4D889B4B-FCE5-4C68-9481-08675BD47F5E}"
                    >
                      Features
                    </Link>
                  </li>
                </ul>
                <ul
                  className="header__submenu"
                  data-parentmobileid="{B497B952-7B8C-404B-9591-6989DA475BF6}"
                  data-parentid="{F580DCEC-135F-416C-A5A0-5FB3B42BD87D}"
                >
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/sun-and-sky-towers/rent"
                      data-linkid="{FF62D53A-326A-4495-8F9D-1345F0EA12BA}"
                      className="header__submenu-item"
                      data-id="{A430D10D-E10F-4B8A-8B10-47B049928AB6}"
                    >
                      Rent
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/sun-and-sky-towers"
                      data-linkid="{F580DCEC-135F-416C-A5A0-5FB3B42BD87D}"
                      className="header__submenu-item"
                      data-id="{BE9F11B9-8C62-41F0-8BEF-F3978C42656D}"
                    >
                      About the project
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/sun-and-sky-towers/project-features"
                      data-linkid="{D26DC6CA-E684-4A24-A578-E74EF9DD17BC}"
                      className="header__submenu-item"
                      data-id="{CA0A9B35-4837-4318-982B-8B3FA503D927}"
                    >
                      Features
                    </Link>
                  </li>
                </ul>
                <ul
                  className="header__submenu"
                  data-parentmobileid="{6975077A-07FE-46EF-876E-35FC3BA56614}"
                  data-parentid="{40FF3E80-7D0B-458C-9FEC-6BD30E7EACEE}"
                >
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/the-gate-towers/rent"
                      data-linkid="{086606AF-15E8-452B-93F3-10C2E97BB3B2}"
                      className="header__submenu-item"
                      data-id="{F67A64FB-13B2-48BE-B773-F7BBCCB3BADA}"
                    >
                      Rent
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/the-gate-towers"
                      data-linkid="{40FF3E80-7D0B-458C-9FEC-6BD30E7EACEE}"
                      className="header__submenu-item"
                      data-id="{DA8DFF35-2AF7-497A-96ED-59033B741CEA}"
                    >
                      About the project
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/the-gate-towers/project-features"
                      data-linkid="{A89C5EFC-72C8-457D-B5AC-E1140C9A016F}"
                      className="header__submenu-item"
                      data-id="{B7C6B6B1-0B24-4CCC-8502-0E113DA4F65D}"
                    >
                      Features
                    </Link>
                  </li>
                </ul>
                <ul
                  className="header__submenu"
                  data-parentmobileid="{17605E68-1FA6-4339-9AAB-5EA1E9680C94}"
                  data-parentid="{2B1512CB-2A64-4C19-A761-4E2D764A83FC}"
                >
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/the-bridges/buy"
                      data-linkid="{86F09EFC-2284-4EF5-BF8C-3162D6ABAEDD}"
                      className="header__submenu-item"
                      data-id="{5B113795-13E3-49B3-BAC4-3FAECA30E750}"
                    >
                      Buy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/the-bridges/rent"
                      data-linkid="{A5AE7FDC-B26C-4F0B-A42E-77236B2224EA}"
                      className="header__submenu-item"
                      data-id="{AE20C0E1-CD79-4764-9E3A-8BCD0DCC7E4E}"
                    >
                      Rent
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/the-bridges"
                      data-linkid="{2B1512CB-2A64-4C19-A761-4E2D764A83FC}"
                      className="header__submenu-item"
                      data-id="{5FDC1F1E-02CF-4B99-A135-51D0BC6CB3E5}"
                    >
                      About the project
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/reem-island/the-bridges/project-features"
                      data-linkid="{F9F52F43-1F73-4D9E-8E31-325CCCB8B88A}"
                      className="header__submenu-item"
                      data-id="{444D2676-6D78-4801-A153-85CE07FF3FD7}"
                    >
                      Features
                    </Link>
                  </li>
                </ul>
                <ul
                  className="header__submenu"
                  data-parentmobileid="{1F83A43C-88A8-46F1-A945-3BA4F246ABA4}"
                  data-parentid="{130B5B9B-8E9C-4984-8459-AE180F8F4D19}"
                >
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/al-raha-beach/al-bandar"
                      data-linkid="{130B5B9B-8E9C-4984-8459-AE180F8F4D19}"
                      className="header__submenu-item"
                      data-id="{A06F460C-4D7B-464F-8F48-B4E96F65D0BF}"
                    >
                      About the project
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/al-raha-beach/al-bandar/project-features"
                      data-linkid="{2C3800FB-21E0-4C9E-B311-4B7A44B6A288}"
                      className="header__submenu-item"
                      data-id="{766DC3F7-DD0A-4514-B16E-19D4D390B177}"
                    >
                      Features
                    </Link>
                  </li>
                </ul>
                <ul
                  className="header__submenu"
                  data-parentmobileid="{980518E6-64F0-4BDA-9F13-27C0B58D6150}"
                  data-parentid="{1D373F97-FBF7-4B51-93EA-5109C9C27C3B}"
                >
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/al-raha-beach/al-hadeel/buy"
                      data-linkid="{BB025750-8B12-4245-9B11-F9C8166CBA71}"
                      className="header__submenu-item"
                      data-id="{8CA2C15E-6A7B-45FA-8728-28E87C3AA96E}"
                    >
                      Buy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/al-raha-beach/al-hadeel"
                      data-linkid="{1D373F97-FBF7-4B51-93EA-5109C9C27C3B}"
                      className="header__submenu-item"
                      data-id="{75B564DF-7A8C-4598-86A9-8776FC22226A}"
                    >
                      About the project
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/al-raha-beach/al-hadeel/project-features"
                      data-linkid="{DA542FA8-58AD-48F9-BA83-8B447585EE8B}"
                      className="header__submenu-item"
                      data-id="{DE0A829B-9456-4A9B-AE6E-09A6AF3FD1F4}"
                    >
                      Features
                    </Link>
                  </li>
                </ul>
                <ul
                  className="header__submenu"
                  data-parentmobileid="{E4F6B981-910A-47B6-A092-923FF18EE8C1}"
                  data-parentid="{FE405FF6-02FB-488B-ADAB-58A2AAC6D735}"
                >
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/al-raha-beach/al-muneera"
                      data-linkid="{FE405FF6-02FB-488B-ADAB-58A2AAC6D735}"
                      className="header__submenu-item"
                      data-id="{900C314A-FAEB-453F-B368-5B2233F8786E}"
                    >
                      About the project
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/al-raha-beach/al-muneera/project-features"
                      data-linkid="{04744DC6-1FF0-47DC-ACFE-4EDEE55074B5}"
                      className="header__submenu-item"
                      data-id="{2AA7EE96-8CB2-4562-B4AF-2490B0B79776}"
                    >
                      Features
                    </Link>
                  </li>
                </ul>
                <ul
                  className="header__submenu"
                  data-parentmobileid="{71056207-DCB6-4CAA-901D-A78BF0D54195}"
                  data-parentid="{5C1F7856-6E7A-4C12-A3E7-2806C7776923}"
                >
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/al-raha-beach/al-zeina/rent"
                      data-linkid="{DA209DFF-C74E-4B96-BB48-BD8722CEB77B}"
                      className="header__submenu-item"
                      data-id="{B2F62060-A5CE-4C20-9F08-6DD70E741A9D}"
                    >
                      Rent
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/al-raha-beach/al-zeina"
                      data-linkid="{5C1F7856-6E7A-4C12-A3E7-2806C7776923}"
                      className="header__submenu-item"
                      data-id="{A55FD004-3F0C-4B11-B53C-86517E86988D}"
                    >
                      About the project
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/al-raha-beach/al-zeina/project-features"
                      data-linkid="{88F7A8CA-DB20-4592-BE21-2574E0CAC47C}"
                      className="header__submenu-item"
                      data-id="{A828138B-FABC-4A06-A84C-2DD7FA670E45}"
                    >
                      Features
                    </Link>
                  </li>
                </ul>
                <ul
                  className="header__submenu"
                  data-parentmobileid="{B523CA2D-1D14-4A08-A2D9-BA2F3209AD95}"
                  data-parentid="{2D060F10-E07E-428D-8230-69E01341E8CD}"
                >
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/alghadeer/buy"
                      data-linkid="{31860B8C-D11C-4123-B48C-F9953795D557}"
                      className="header__submenu-item"
                      data-id="{18EDA008-CEF9-439A-BC63-444F65954194}"
                    >
                      Buy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/alghadeer"
                      data-linkid="{2D060F10-E07E-428D-8230-69E01341E8CD}"
                      className="header__submenu-item"
                      data-id="{19181505-6987-420F-AD21-D5085124903A}"
                    >
                      About the project
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/alghadeer/project-features"
                      data-linkid="{BE262FD0-77C6-48A2-9C34-FAAE6AB2E82C}"
                      className="header__submenu-item"
                      data-id="{7866EA9C-093B-42C8-A790-3A9325551666}"
                    >
                      Features
                    </Link>
                  </li>
                </ul>
                <ul
                  className="header__submenu"
                  data-parentmobileid="{A2D670C8-3C9D-4EEF-8AF6-7293849B9593}"
                  data-parentid="{E5B659A8-7ECC-49EA-B7FA-F8B3BAF69107}"
                >
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/al-reeman-i/buy"
                      data-linkid="{370846BC-9AAB-495C-AA9E-581E759E00E5}"
                      className="header__submenu-item"
                      data-id="{EC95B9BB-A0A6-4976-BC1A-8749360CE872}"
                    >
                      Buy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/al-reeman-i"
                      data-linkid="{E5B659A8-7ECC-49EA-B7FA-F8B3BAF69107}"
                      className="header__submenu-item"
                      data-id="{D5BE6F4A-1784-4BC1-8D86-E9867A155BD2}"
                    >
                      About the project
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/al-reeman-i/project-features"
                      data-linkid="{92FC94D3-4EA9-4002-BAC0-FF78D165B36E}"
                      className="header__submenu-item"
                      data-id="{E25201FA-C758-4E9A-A0AB-5FE6CB495288}"
                    >
                      Features
                    </Link>
                  </li>
                </ul>
                <ul
                  className="header__submenu"
                  data-parentmobileid="{65F6623B-B71F-47DE-94FE-401F6E6270FE}"
                  data-parentid="{1A56DB9D-BA0C-4BDF-950E-8FB2EA0CEB70}"
                >
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/fay-alreeman"
                      data-linkid="{1A56DB9D-BA0C-4BDF-950E-8FB2EA0CEB70}"
                      className="header__submenu-item"
                      data-id="{21768820-5496-439C-8D75-05CCDAE43344}"
                    >
                      About the project
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/fay-alreeman/project-features"
                      data-linkid="{9661454A-D7F2-4727-9C77-C16CAA9F332D}"
                      className="header__submenu-item"
                      data-id="{056FEDF9-ECAE-40E7-AE01-E9B8848A14ED}"
                    >
                      Features
                    </Link>
                  </li>
                </ul>
                <ul
                  className="header__submenu"
                  data-parentmobileid="{5CE39564-048D-4755-9FD1-57FEDECDD32E}"
                  data-parentid="{3945242A-9381-42A2-A7FC-E54948631DBB}"
                >
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/al-reeman-ii"
                      data-linkid="{3945242A-9381-42A2-A7FC-E54948631DBB}"
                      className="header__submenu-item"
                      data-id="{40B7FFA7-FB72-4657-A3D4-ECF4F9BAA858}"
                    >
                      About the project
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/al-reeman-ii/project-features"
                      data-linkid="{7191D7C1-162F-4B3D-8EF8-868076A3BCDC}"
                      className="header__submenu-item"
                      data-id="{5DD6BDCE-84BB-475D-813F-B90404C7BF73}"
                    >
                      Features
                    </Link>
                  </li>
                </ul>
                <ul
                  className="header__submenu"
                  data-parentmobileid="{37E48DFC-0814-4DEC-A4FD-EB8E14FFB9BE}"
                  data-parentid="{7921C517-BEB1-4E40-B223-EFE578CD0E53}"
                >
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/the-burj-mohammed-bin-rashid/rent"
                      data-linkid="{D457593E-B005-4F50-8CC8-C21C61A7093B}"
                      className="header__submenu-item"
                      data-id="{B360D13F-D655-4B43-ADA8-057D83FF8BD0}"
                    >
                      Rent
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/the-burj-mohammed-bin-rashid"
                      data-linkid="{7921C517-BEB1-4E40-B223-EFE578CD0E53}"
                      className="header__submenu-item"
                      data-id="{C09CDAE1-C15A-4ACC-89F6-7FBE4396BCA3}"
                    >
                      About the project
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/the-burj-mohammed-bin-rashid/project-features"
                      data-linkid="{508B7DAC-06C1-482C-A9F3-B728A5DE0796}"
                      className="header__submenu-item"
                      data-id="{D410D016-790E-4603-8A2C-CD47FF4BAA43}"
                    >
                      Features
                    </Link>
                  </li>
                </ul>
                <ul
                  className="header__submenu"
                  data-parentmobileid="{FA773F02-4C48-44B5-9FD0-EED89C7B1224}"
                  data-parentid="{DDA45A9E-4CF3-4B24-B0C6-5F2BAB880618}"
                >
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/al-oyoun-village/rent"
                      data-linkid="{0F7A859B-8A0D-45EC-A382-B582C3A039FB}"
                      className="header__submenu-item"
                      data-id="{740043E2-472F-4FB0-A354-2BC75580FB07}"
                    >
                      Rent
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/al-oyoun-village"
                      data-linkid="{DDA45A9E-4CF3-4B24-B0C6-5F2BAB880618}"
                      className="header__submenu-item"
                      data-id="{8EC0BEEF-7E3C-4F17-8CFF-3909AD77DA70}"
                    >
                      About the project
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/al-oyoun-village/project-features"
                      data-linkid="{FB89A840-64D0-4F81-A8CC-CC9A7A3A8371}"
                      className="header__submenu-item"
                      data-id="{13284A22-30BD-4A8E-8E55-75557E44CB49}"
                    >
                      Features
                    </Link>
                  </li>
                </ul>
                <ul
                  className="header__submenu"
                  data-parentmobileid="{78DE6479-8EEC-452F-AFBF-A2891116350E}"
                  data-parentid="{4746CE39-5B30-46B7-A403-E2E036D1A364}"
                >
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/al-rayyana/rent"
                      data-linkid="{F0524061-AF4D-4796-971D-884250EA1524}"
                      className="header__submenu-item"
                      data-id="{B7940374-25CC-44D1-8FDC-2637C2A83763}"
                    >
                      Rent
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/al-rayyana"
                      data-linkid="{4746CE39-5B30-46B7-A403-E2E036D1A364}"
                      className="header__submenu-item"
                      data-id="{1ACD3476-62FF-4373-9816-8464816782E3}"
                    >
                      About the project
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/al-rayyana/project-features"
                      data-linkid="{06C60D57-CEA9-4AB1-AF88-76101C87FC1D}"
                      className="header__submenu-item"
                      data-id="{FA20F481-3A0A-4106-8454-FF14846DE7A2}"
                    >
                      Features
                    </Link>
                  </li>
                </ul>
                <ul
                  className="header__submenu"
                  data-parentmobileid="{66443945-C160-4BFD-8B84-C4FD7D0267A7}"
                  data-parentid="{099BDBAB-E47C-46C9-A1F3-B50443E5CD49}"
                >
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/eastern-mangroves/rent"
                      data-linkid="{A0623CCF-FB4A-4614-8B7B-C59129A0C67B}"
                      className="header__submenu-item"
                      data-id="{0EFF00B2-36EA-4324-920F-9ABD6137FB3A}"
                    >
                      Rent
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/eastern-mangroves"
                      data-linkid="{099BDBAB-E47C-46C9-A1F3-B50443E5CD49}"
                      className="header__submenu-item"
                      data-id="{9AB12800-E0A1-4968-B3B6-615159757C3C}"
                    >
                      About the project
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/eastern-mangroves/project-features"
                      data-linkid="{82F73509-9BBE-401A-9916-087D3C8D1C05}"
                      className="header__submenu-item"
                      data-id="{BAB9B051-7971-44A4-991F-8CA1060DA5A3}"
                    >
                      Features
                    </Link>
                  </li>
                </ul>
                <ul
                  className="header__submenu"
                  data-parentmobileid="{87FB50B5-35AA-444E-A848-4DB8254CAC1C}"
                  data-parentid="{C13BBDA7-221C-4963-BAD7-2DDC8702A597}"
                >
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/nareel-island"
                      data-linkid="{C13BBDA7-221C-4963-BAD7-2DDC8702A597}"
                      className="header__submenu-item"
                      data-id="{A588FB5E-BE62-45BB-A6EE-A57C88F22F63}"
                    >
                      About the project
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/nareel-island/project-features"
                      data-linkid="{E7C932E0-E35A-42C2-9F80-A2C4D301B538}"
                      className="header__submenu-item"
                      data-id="{A39600BA-DC28-44E9-A5F8-20CEA0588134}"
                    >
                      Features
                    </Link>
                  </li>
                </ul>
                <ul
                  className="header__submenu"
                  data-parentmobileid="{33C4F553-0DF5-4964-9025-21236A4595C2}"
                  data-parentid="{76769AAC-8812-4751-9283-EBC45F165AD3}"
                >
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/sas-al-nakhl-village"
                      data-linkid="{76769AAC-8812-4751-9283-EBC45F165AD3}"
                      className="header__submenu-item"
                      data-id="{16F3A5AE-759B-41DD-87AD-538B798FB2DC}"
                    >
                      About the project
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.aldar.com/en/explore-aldar/businesses/development/residential/other-destinations/sas-al-nakhl-village/project-features"
                      data-linkid="{BF159D44-972B-4400-93D4-13C362B2154B}"
                      className="header__submenu-item"
                      data-id="{9A697402-AD00-4FFD-AC3D-EBE471834E81}"
                    >
                      Features
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </header>
          <template id="chocolateTemplate">
            <section id="chocolate-menu">
              <aside className="container chocolate__links-container">
                <div className="chocolate__left">
                  MAIN_LINKS_PLACEHOLDER
                  <ul>
                    <li></li>
                  </ul>
                </div>
                <div className="chocolate__right"></div>
              </aside>
              <div className="container chocolate__floating-container">
                <div className="chocolate__quick-links">QUICK_LINKS_PLACEHOLDER</div>
                <div className="chocolate__image-container">
                  <figure className="">
                    <img
                      src="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/aldar-menu/menu.jpg?h=507&amp;iar=0&amp;w=461&amp;rev=378676794f37406c8bf0b1f7100e66e3"
                      alt="Aldar menu img"
                      width="461"
                      height="507"
                    />
                  </figure>
                </div>
              </div>
            </section>
          </template>
        </div>
        <div className="component content">
          <div className="component-content">
            <div className="search search-dark-mobile d-none">
              <div className="search__container">
                <div className="row">
                  <div className="col-lg-3 col-12"></div>
                  <div className="col-lg-6 col-12">
                    <div
                      className="search__input-container"
                      id="searchInputBox"
                      data-view-results-label="View All Results"
                    >
                      <div className="search-input__wrapper">
                        <div className="search-input__header-text">
                          <span>How can we help?</span>
                        </div>
                        <div className="search-input__box">
                          <div className="search-input__input-wrapper">
                            <div
                              className="component search-box search-input__input search-input"
                              data-properties='{"endpoint":"/en/sxa/search/results/","suggestionEndpoint":"/en/sxa/search/suggestions/","suggestionsMode":"ShowSearchResults","resultPage":"/en/global-search","targetSignature":"","v":"{0D39941D-575A-4E23-9F6B-0610AEF9FFD9}","s":"{CCA8AC9A-AFEC-46A0-9FE2-2B6FBEC40135}","p":5,"l":"en","languageSource":"CurrentLanguage","searchResultsSignature":"global-search","itemid":"{A14E2BDD-F9F7-4E94-BBCA-43F8AD8BB69D}","minSuggestionsTriggerCharacterCount":2}'
                            >
                              <div className="component-content">
                                <input
                                  type="text"
                                  className="search-box-input"
                                  autoComplete="off"
                                  name="textBoxSearch"
                                  placeholder="Search aldar.com"
                                />
                              </div>
                            </div>
                          </div>
                          <span className="search-input__cancel-text cancel-text">Cancel</span>
                        </div>
                        <div
                          className="search-input_no-results-found no-results-found"
                          style={{ display: 'none' }}
                        >
                          <span>We’re sorry. We cannot find any matches for your search term.</span>
                        </div>
                      </div>
                    </div>
                    <div className="search__quick-links-container" id="quickLinksBox">
                      <div className="quick-links__wrapper margin-bottom-80">
                        <h2 className="quick-links__title">Quick Links</h2>
                        <div className="quick-links__options-wrapper">
                          <div className="component aldar-listing">
                            <div className="component-content">
                              <ul className="quick-links__list">
                                <li>
                                  <Link href="https://www.aldar.com/en/buy-residential">
                                    Buy (Residential)
                                  </Link>
                                </li>
                                <li>
                                  <Link href="https://www.aldar.com/en/renting-commercial">
                                    Commercial
                                  </Link>
                                </li>
                                <li>
                                  <Link href="https://www.aldar.com/en/explore-aldar/businesses/education">
                                    Education
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="https://www.aldar.com/en/explore-aldar/businesses/hospitality"
                                    target="|Custom"
                                  >
                                    Hospitality and Leisure
                                  </Link>
                                </li>
                                <li>
                                  <Link href="https://www.aldar.com/en/explore-aldar/businesses/development/land">
                                    Land Bank
                                  </Link>
                                </li>
                                <li>
                                  <Link href="https://www.aldar.com/en/rent-residential">
                                    Residential
                                  </Link>
                                </li>
                                <li>
                                  <Link href="https://www.aldar.com/en/explore-aldar/businesses/investment/retail">
                                    Retail
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
