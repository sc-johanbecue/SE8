/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Link from 'next/link';
import { TextField } from '@sitecore-jss/sitecore-jss-nextjs';
import 'animate.css';

interface Fields {
  Title: TextField;
  Text: TextField;
}

type HeaderProps = {
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
  const id = 'header-content'; //props.params.RenderingIdentifier;

  if (props.fields) {
    return (
      <>
        <div
          data-ga-element="header-content"
          id={id ? id : undefined}
          style={{ width: '100%' }}
          className={`component flex flex-justify-between content-margin ${props.params.styles}`}
        >
          <div className="header-left">
            <div className="header-logo-cont">
              <div data-ga-element="header-logo" id="logo">
                <Link href="https://www.imaginecruising.co.uk" title="Imagine Cruising">
                  <img
                    id="dark-logo--image"
                    className=""
                    alt="Imagine Cruising"
                    src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/logos/black-white-no-reg.png"
                  />

                  {/* <span className="visuallyhidden">Imagine Cruising</span> */}
                </Link>
              </div>
              <div className="header-favourites">
                <div className="favourites-top">
                  <Link
                    className="favourites-count"
                    href="https://www.imaginecruising.co.uk/favourites/"
                    data-favourites-count="0"
                  >
                    <span>
                      Favourites <i className="fa-regular fa-heart" aria-hidden></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* header-left */}
          <div className="header-right">
            <div className="phone-title">
              <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/phone_icon.svg" />
              Holiday Enquiries
            </div>
            <div data-ga-element="header-telephone" className="header-telephone">
              <Link
                className="fsource__tel"
                href=""
                data-default="0800 840 5801 "
                aria-label="Telephone"
              ></Link>
            </div>
            <div className="schedule">Mon - Sun: 9am - 8pm</div>
          </div>
          {/* header-right */}
          <div data-ga-element="mobile-nav-block" id="mobile-nav-block">
            <div className="item-menu">
              <Link
                className="fsource__tel no-text"
                href="tel:0800 840 5801"
                aria-label="Telephone"
              >
                <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/phone_icon.svg" />
              </Link>
            </div>
            <div data-ga-element="mobile-logo" className="mobile-logo">
              <Link href="https://www.imaginecruising.co.uk">
                <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/logos/black-white-no-reg-mobile.png" />
              </Link>
            </div>
            <div className="item-menu" id="mobile-navigation-control">
              <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/hamburger_menu_icon.svg" />
            </div>
          </div>
        </div>
        <div data-ga-element="header-navigation-container" className="header-nav-cont">
          <nav className="header-nav">
            <ul id="custom-nav" className="flex flex-justify-between flex-align-left">
              <li className="top-level " key="0">
                <Link href="https://www.imaginecruising.co.uk/">Home</Link>
              </li>
              <li className="top-level " key="1">
                <Link href="https://www.imaginecruising.co.uk/cruise-deals/">Cruise Deals</Link>
              </li>
              <li className="top-level has-children" key="2">
                <Link href="https://www.imaginecruising.co.uk/holiday-types/">
                  Holiday Types <i className="fa-solid fa-chevron-down" aria-hidden></i>
                </Link>
                <ul className="custom-sub-nav">
                  <li className="sub-page" key="0">
                    <Link href="https://www.imaginecruising.co.uk/holiday-types/cruise-touring/">
                      <div className="child-name">
                        <span>Cruise & Touring</span>
                        <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Cruise-and-Touring.jpg" />
                      </div>
                    </Link>
                  </li>
                  <li className="sub-page" key="1">
                    <Link href="https://www.imaginecruising.co.uk/holiday-types/cruise-rail/">
                      <div className="child-name">
                        <span>Cruise & Rail</span>
                        <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Cruise-and-Rail-1.jpg" />
                      </div>
                    </Link>
                  </li>
                  <li className="sub-page" key="2">
                    <Link href="https://www.imaginecruising.co.uk/holiday-types/cruise-stay/">
                      <div className="child-name">
                        <span>Cruise & Stay</span>
                        <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Cruise-and-Rail-OCo-1-1-300x158.jpg" />
                      </div>
                    </Link>
                  </li>
                  <li className="sub-page" key="3">
                    <Link href="https://www.imaginecruising.co.uk/holiday-types/cruise-event/">
                      <div className="child-name">
                        <span>Cruise & Event</span>
                        <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2023/10/Cruise-Event-300x136.jpg" />
                      </div>
                    </Link>
                  </li>
                  <li className="sub-page" key="4">
                    <Link href="https://www.imaginecruising.co.uk/cruise-from-the-uk/">
                      <div className="child-name">
                        <span>Cruise from the UK</span>
                        <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Cruise_From_UK_Tile.jpg" />
                      </div>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="top-level " key="3">
                <Link href="https://www.imaginecruising.co.uk/cruise-from-the-uk/">
                  Cruise from the UK
                </Link>
              </li>
              <li className="top-level " key="4">
                <Link href="https://www.imaginecruising.co.uk/river-cruise-collection/">
                  River Cruising
                </Link>
              </li>
              <li className="top-level has-children" key="5">
                <Link href="https://www.imaginecruising.co.uk/cruise-lines/">
                  Cruise Lines <i className="fa-solid fa-chevron-down" aria-hidden></i>
                </Link>
                <ul className="custom-sub-nav">
                  <li className="sub-page" key="0">
                    <Link href="https://www.imaginecruising.co.uk/cruise-lines/azamara/">
                      <div className="child-name">
                        <span>Azamara</span>
                        <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Azamara-OCo-1-300x158.jpg" />
                      </div>
                    </Link>
                  </li>
                  <li className="sub-page" key="1">
                    <Link href="https://www.imaginecruising.co.uk/cruise-lines/celebrity-cruises/">
                      <div className="child-name">
                        <span>Celebrity </span>
                        <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Celebrity-OCo-1-300x158.jpg" />
                      </div>
                    </Link>
                  </li>
                  <li className="sub-page" key="2">
                    <Link href="https://www.imaginecruising.co.uk/cruise-lines/cunard-line/">
                      <div className="child-name">
                        <span>Cunard</span>
                        <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Cunard-OCo-1-300x158.jpg" />
                      </div>
                    </Link>
                  </li>
                  <li className="sub-page" key="3">
                    <Link href="https://www.imaginecruising.co.uk/cruise-lines/holland-america-line/">
                      <div className="child-name">
                        <span>Holland America Line</span>
                        <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-HAL-OCo-1-300x158.jpg" />
                      </div>
                    </Link>
                  </li>
                  <li className="sub-page" key="4">
                    <Link href="https://www.imaginecruising.co.uk/cruise-lines/po-cruises/">
                      <div className="child-name">
                        <span>P&O</span>
                        <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-PO-OCo-1-300x158.jpg" />
                      </div>
                    </Link>
                  </li>
                  <li className="sub-page" key="5">
                    <Link href="https://www.imaginecruising.co.uk/cruise-lines/princess-cruises/">
                      <div className="child-name">
                        <span>Princess</span>
                        <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Princess-OCo-1-300x158.jpg" />
                      </div>
                    </Link>
                  </li>
                  <li className="sub-page" key="6">
                    <Link href="https://www.imaginecruising.co.uk/cruise-lines/silversea-cruises/">
                      <div className="child-name">
                        <span>Silversea</span>
                        <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Silversea-1-300x158.jpg" />
                      </div>
                    </Link>
                  </li>
                  <li className="sub-page" key="7">
                    <Link href="https://www.imaginecruising.co.uk/cruise-lines/">
                      <div className="child-name">
                        <span>View all </span>
                        <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Cruise-Line-300x158.jpg" />
                      </div>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="top-level has-children" key="6">
                <Link href="https://www.imaginecruising.co.uk/destinations/">
                  Destinations <i className="fa-solid fa-chevron-down" aria-hidden></i>
                </Link>
                <ul className="custom-sub-nav">
                  <li className="sub-page" key="0">
                    <Link href="https://www.imaginecruising.co.uk/destinations/africa/">
                      <div className="child-name">
                        <span>Africa</span>
                        <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Africa.jpg" />
                      </div>
                    </Link>
                  </li>
                  <li className="sub-page" key="1">
                    <Link href="https://www.imaginecruising.co.uk/destinations/asia/">
                      <div className="child-name">
                        <span>Asia</span>
                        <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Asia-nav-images-mobile-desktop-300x158-Destination.jpg" />
                      </div>
                    </Link>
                  </li>
                  <li className="sub-page" key="2">
                    <Link href="https://www.imaginecruising.co.uk/australia-and-new-zealand/">
                      <div className="child-name">
                        <span>Australia & New Zealand</span>
                        <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Australia-nav-images-mobile-desktop-300x158-Destination-OCo-1.jpg" />
                      </div>
                    </Link>
                  </li>
                  <li className="sub-page" key="3">
                    <Link href="https://www.imaginecruising.co.uk/destinations/caribbean/">
                      <div className="child-name">
                        <span>Caribbean</span>
                        <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Caribbean-nav-images-mobile-desktop-300x158-Destination-OCo-2.jpg" />
                      </div>
                    </Link>
                  </li>
                  <li className="sub-page" key="4">
                    <Link href="https://www.imaginecruising.co.uk/destinations/europe/">
                      <div className="child-name">
                        <span>Europe</span>
                        <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Europe-nav-images-mobile-desktop-300x158-Destination-OCo-4-300x158.jpg" />
                      </div>
                    </Link>
                  </li>
                  <li className="sub-page" key="5">
                    <Link href="https://www.imaginecruising.co.uk/destinations/indian-ocean/">
                      <div className="child-name">
                        <span>Indian Ocean</span>
                        <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Indian-Ocean-nav-images-mobile-desktop-300x158-Destination-OCo-5-300x158.jpg" />
                      </div>
                    </Link>
                  </li>
                  <li className="sub-page" key="6">
                    <Link href="https://www.imaginecruising.co.uk/destinations/indian-subcontinent/">
                      <div className="child-name">
                        <span>Indian Subcontinent </span>
                        <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/nav-images-mobile-desktop-300x158-Indian-sub-1-300x158.jpg" />
                      </div>
                    </Link>
                  </li>
                  <li className="sub-page" key="7">
                    <Link href="https://www.imaginecruising.co.uk/destinations/middle-east/">
                      <div className="child-name">
                        <span>Middle East</span>
                        <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Middle-East-nav-images-mobile-desktop-300x158-Destination-OCo-6-300x158.jpg" />
                      </div>
                    </Link>
                  </li>
                  <li className="sub-page" key="8">
                    <Link href="https://www.imaginecruising.co.uk/north-america/">
                      <div className="child-name">
                        <span>North America</span>
                        <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/North-America-1.jpg" />
                      </div>
                    </Link>
                  </li>
                  <li className="sub-page" key="9">
                    <Link href="https://www.imaginecruising.co.uk/destinations/south-america/">
                      <div className="child-name">
                        <span>South America</span>
                        <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/South-America-nav-images-mobile-desktop-300x158-Destination-OCo-7-300x158.jpg" />
                      </div>
                    </Link>
                  </li>
                  <li className="sub-page" key="10">
                    <Link href="https://www.imaginecruising.co.uk/cruise-from-the-uk/">
                      <div className="child-name">
                        <span>Cruise from the UK</span>
                        <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/Cruise_From_UK_Tile.jpg" />
                      </div>
                    </Link>
                  </li>
                  <li className="sub-page" key="11">
                    <Link href="https://www.imaginecruising.co.uk/destinations/">
                      <div className="child-name">
                        <span>View all</span>
                        <img src="https://www.imaginecruising.co.uk/wp-content/uploads/2024/12/View-all-nav-images-mobile-desktop-300x158-Destination-OCo-3-300x158.jpg" />
                      </div>
                    </Link>
                  </li>
                </ul>
              </li>
              <li data-ga-element="header-nav-list-item" className="top-level " key="7">
                <Link href="https://www.imaginecruising.co.uk/about-us/">About us</Link>
              </li>
              <li data-ga-element="manage-my-booking" key="8">
                <Link
                  className=""
                  href="https://www.imaginecruising.co.uk/manage-my-booking/"
                  target="_blank"
                  rel="noopener"
                >
                  <img src="https://www.imaginecruising.co.uk/wp-content/themes/imagine-rebrand/images/passenger_icon_white.svg" />
                  Manage my booking
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  }
  return <HeaderDefaultComponent {...props} />;
};
