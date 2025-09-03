/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from 'react'; //{ useState }
import { ComponentRendering, ComponentParams, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

interface Fields {
  Logo: ImageField;
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
      <div id="header" className="mainmegaMenu1">
        <div
          className="component container header global-header layout--fluid container--no-padding"
          id="mainHeaderMenu"
        >
          <div className="component-content">
            <div className="component container header-with-icons layout--fluid container--no-padding">
              <div className="component-content">
                <div className="component image file-type-icon-media-link header-logo-wrapper scale-logo">
                  <div className="component-content">
                    <Link title="Logo Header" href="https://www.violife.com/en-us">
                      <img
                        src="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Logos/violife_logo_500x100_V2-(1).svg?iar=0&amp;rev=8282d8290ebd4208aac7b43e5d6dc38a"
                        alt="Violife 100% Dairy Free"
                        data-variantitemid="{96B5014C-3582-47E2-9B16-C7262647F2AB}"
                        data-variantfieldname="Image"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="component container header-with-nav layout--fluid container--no-padding"
              id="global-nav-search"
            >
              <div className="component-content">
                <div className="hamburger mobile">
                  <div
                    className="nav-icon"
                    tabIndex={0}
                    role="button"
                    aria-expanded="false"
                    aria-labelledby="menu-open-button-label"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="hamburger desktop mainNav">
                  <div className="component link-list MainMenu">
                    <div className="component-content">
                      <ul role="list">
                        <li className="item0 odd first" role="listitem">
                          <div className="MainMenu field-link">
                            <Link
                              data-variantfieldname="Link"
                              title="Products"
                              href="/products"
                              data-variantitemid="{2BB6BCB7-A482-4EBE-90AE-E375703173B6}"
                            >
                              Products
                            </Link>
                          </div>
                        </li>
                        <li className="item1 even last" role="listitem">
                          <div className="MainMenu field-link">
                            <Link
                              data-variantfieldname="Link"
                              title="Recipes"
                              href="/easy-recipes"
                              data-variantitemid="{5B5B7FA6-1FC2-4EB8-BE6C-0775FABD11FE}"
                            >
                              Recipes
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="imageListItems">
                  <div className="component plain-html">
                    <div className="component-content">
                      <button type="button" name="searchbutton" className="expandsubmit desk">
                        <i>Search</i>
                      </button>
                    </div>
                  </div>

                  <div className="component image-list image-list-logo" id="global-icons">
                    <div className="component-content">
                      <ul role="list">
                        <li
                          className="item0 odd first"
                          role="listitem"
                          style={{ pointerEvents: 'auto' }}
                        >
                          <Link
                            className="overlay-source custom-popup splash-popup initialized"
                            title="Splash page"
                            href="https://www.violife.com/en-gb/overlays/splash-page"
                            role="button"
                          >
                            <img
                              alt="Globe"
                              data-variantitemid="{CC425974-E800-4D39-A74E-E4DCA941D727}"
                              data-variantfieldname="Image"
                              src="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Icons/splash1.svg?iar=0&amp;rev=632f708ec99442b98adbacc3142555ff"
                            />
                          </Link>
                          <span className="image-caption field-imagecaption">
                            Change location/language
                          </span>
                        </li>
                        <li
                          className="item1 even last"
                          role="listitem"
                          style={{ pointerEvents: 'auto' }}
                        >
                          <Link
                            title="StoreLocator"
                            href="https://www.violife.com/en-us/store-locator"
                          >
                            <img
                              src="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Icons/store.svg?iar=0&amp;rev=e3086561caf14ba18b7f259b87f7fb74"
                              alt="Violife store"
                              data-variantitemid="{5A58BF1B-E7E6-4C63-8098-275196626C3C}"
                              data-variantfieldname="Image"
                            />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="component container header-navigation-wrapper layout--fluid container--no-padding">
                  <div className="component container megaHeaderMenu layout--fluid container--no-padding">
                    <div className="component-content">
                      <div className="parent">
                        <div className="component link-list">
                          <ul className="menuItems" role="list">
                            <div className="Backhumberger">
                              <Link href="#" title="Backhumberger"></Link>
                            </div>
                            <li className="item odd first" role="listitem">
                              <div className="field-link">
                                <Link
                                  href="javascript:void(0)"
                                  title="Products "
                                  data-variantfieldname="Link"
                                >
                                  PRODUCTS
                                </Link>
                                <span
                                  className="chevron"
                                  tabIndex={0}
                                  role="button"
                                  aria-controls="submenu1"
                                  aria-expanded="false"
                                  aria-label="Our Products"
                                ></span>
                              </div>
                              <div className="submenu-container">
                                <div className="CtaBack">
                                  <Link href="#" title="CtaBack"></Link>
                                </div>
                                <div className="itemList">
                                  <ul className="menu-sublist" role="list">
                                    <li role="listitem">
                                      <Link href="https://www.violife.com/en-us/products">
                                        View all
                                      </Link>
                                    </li>
                                    <li role="listitem">
                                      <Link href="https://www.violife.com/en-us/products/dairy-free-cheese-shreds">
                                        Dairy Free Cheese Shreds
                                      </Link>
                                    </li>
                                    <li role="listitem">
                                      <Link href="https://www.violife.com/en-us/products/dairy-free-cheese-slices">
                                        Dairy Free Slices
                                      </Link>
                                    </li>
                                    <li role="listitem">
                                      <Link href="https://www.violife.com/en-us/products/dairy-free-cream-cheese">
                                        Dairy Free Cream Cheese
                                      </Link>
                                    </li>
                                    <li role="listitem">
                                      <Link href="https://www.violife.com/en-us/products/dairy-free-cheese-blocks">
                                        Dairy Free Cheese Blocks
                                      </Link>
                                    </li>
                                    <li role="listitem">
                                      <Link href="https://www.violife.com/en-us/products/dairy-free-coffee-creamers">
                                        Dairy Free Coffee Creamers
                                      </Link>
                                    </li>
                                    <li role="listitem">
                                      <Link href="https://www.violife.com/en-us/products/plant-butter">
                                        Plant Butter
                                      </Link>
                                    </li>
                                    <li role="listitem">
                                      <Link href="https://www.violife.com/en-us/products/dairy-free-dips">
                                        Dairy Free Dips
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </li>
                            <li className="item odd first" role="listitem">
                              <div className="field-link">
                                <Link
                                  href="javascript:void(0)"
                                  title="Recipes"
                                  data-variantfieldname="Link"
                                >
                                  Recipes
                                </Link>
                                <span
                                  className="chevron"
                                  tabIndex={0}
                                  role="button"
                                  aria-controls="submenu1"
                                  aria-expanded="false"
                                  aria-label="Our Products"
                                ></span>
                              </div>
                              <div className="submenu-container">
                                <div className="CtaBack">
                                  <Link href="#" title="CtaBack"></Link>
                                </div>
                                <div className="itemList">
                                  <ul className="menu-sublist" role="list">
                                    <li role="listitem">
                                      <Link href="https://www.violife.com/en-us/easy-recipes">
                                        View all
                                      </Link>
                                    </li>
                                    <li role="listitem">
                                      <Link href="https://www.violife.com/en-us/easy-recipes/dairy-free-recipes">
                                        Dairy Free Recipes
                                      </Link>
                                    </li>
                                    <li role="listitem">
                                      <Link href="https://www.violife.com/en-us/easy-recipes/gluten-free-recipes">
                                        Gluten-Free Recipes
                                      </Link>
                                    </li>
                                    <li role="listitem">
                                      <Link href="https://www.violife.com/en-us/easy-recipes/vegan-meals">
                                        Vegan Meals
                                      </Link>
                                    </li>
                                    <li role="listitem">
                                      <Link href="https://www.violife.com/en-us/easy-recipes/vegetarian-recipes">
                                        Vegetarian Recipes
                                      </Link>
                                    </li>
                                    <li role="listitem">
                                      <Link href="https://www.violife.com/en-us/easy-recipes/wheat-free-diet-plan">
                                        Wheat-Free Diet Plan
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </li>
                            <li className="item odd first" role="listitem">
                              <div className="field-link">
                                <Link
                                  href="https://www.violife.com/en-us/our-story"
                                  title="Our Story"
                                  data-variantfieldname="Link"
                                >
                                  Our Story
                                </Link>
                              </div>
                            </li>
                            <li className="item odd first" role="listitem">
                              <div className="field-link">
                                <Link
                                  href="https://www.violife.com/en-us/store-locator"
                                  title="Store Locator"
                                  data-variantfieldname="Link"
                                >
                                  Store Locator
                                </Link>
                              </div>
                            </li>
                            <li className="item odd first" role="listitem">
                              <div className="field-link">
                                <Link
                                  href="https://www.violife.com/en-us/coffee-creamers"
                                  title="Coffee Creamers"
                                  data-variantfieldname="Link"
                                >
                                  coffee creamers
                                </Link>
                              </div>
                            </li>
                            <li className="item odd first" role="listitem">
                              <div className="field-link">
                                <Link
                                  href="https://www.violife.com/en-us/creamy-confessions"
                                  title="Creamy Confessions"
                                  data-variantfieldname="Link"
                                >
                                  creamy confessions
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </div>
                        {/* <!-- Header Navigation external links--> */}
                        <div className="globe-site-link">
                          <div className="component link-list MainMenu">
                            <div className="component-content">
                              <ul role="list"></ul>
                            </div>
                          </div>
                        </div>
                        {/* <!-- Meta Navigation mobile--> */}
                        <div className="topmenuMobile">
                          <div className="imageListItems">
                            <div className="component plain-html">
                              <div className="component-content">
                                <button
                                  type="button"
                                  name="searchbutton"
                                  className="expandsubmit desk"
                                >
                                  <i>Search</i>
                                </button>
                              </div>
                            </div>

                            <div className="component image-list image-list-logo" id="global-icons">
                              <div className="component-content">
                                <ul role="list">
                                  <li
                                    className="item0 odd first"
                                    role="listitem"
                                    style={{ pointerEvents: 'auto' }}
                                  >
                                    <Link
                                      className="overlay-source custom-popup splash-popup initialized"
                                      title="Splash page"
                                      href="https://www.violife.com/en-gb/overlays/splash-page"
                                      role="button"
                                    >
                                      <img
                                        src="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Icons/splash1.svg?iar=0&amp;rev=632f708ec99442b98adbacc3142555ff"
                                        alt="Globe"
                                        data-variantitemid="{CC425974-E800-4D39-A74E-E4DCA941D727}"
                                        data-variantfieldname="Image"
                                      />
                                    </Link>
                                    <span className="image-caption field-imagecaption">
                                      Change location/language
                                    </span>
                                  </li>
                                  <li
                                    className="item1 even last"
                                    role="listitem"
                                    style={{ pointerEvents: 'auto' }}
                                  >
                                    <Link
                                      title="StoreLocator"
                                      href="https://www.violife.com/en-us/store-locator"
                                    >
                                      <img
                                        src="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Icons/store.svg?iar=0&amp;rev=e3086561caf14ba18b7f259b87f7fb74"
                                        alt="Violife store"
                                        data-variantitemid="{5A58BF1B-E7E6-4C63-8098-275196626C3C}"
                                        data-variantfieldname="Image"
                                      />
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div
                            className="component image-list image-list-logo"
                            id="social-mobile-view"
                          >
                            <div className="component-content">
                              <ul role="list">
                                <li className="item0 odd first" role="listitem">
                                  <Link
                                    target="_blank"
                                    title="Instagram"
                                    rel="noopener noreferrer"
                                    href="https://www.instagram.com/violife_foods/"
                                  >
                                    <img
                                      src="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New/Assets/Socials/instagram-icon-white.svg?iar=0&amp;rev=-1"
                                      alt=""
                                      data-variantitemid="{C205E20A-A8D6-47EF-9A60-465501F86037}"
                                      data-variantfieldname="Image"
                                    />
                                  </Link>
                                </li>
                                <li className="item1 even last" role="listitem">
                                  <Link
                                    target="_blank"
                                    title="TikTok"
                                    rel="noopener noreferrer"
                                    href="https://www.tiktok.com/@violife_foods"
                                  >
                                    <img
                                      src="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Icons/tiktok-icon-white.svg?iar=0&amp;rev=934e254a534c46b6806f3b37dd155295"
                                      alt="tiktok"
                                      data-variantitemid="{3DE9DDA8-A2E9-453A-9EDD-85A5D8F26C1E}"
                                      data-variantfieldname="Image"
                                    />
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>

                          {/* <!-- End Meta Navigation mobile--> */}
                        </div>
                        <div className="sliderContaner">
                          <div className="component content component-content animate-section">
                            <div className="component-content">
                              <div className="container play-video-on-hover" id="carousel-on-right">
                                <div className="left">
                                  <h2 className="field-list-name">Product Categories</h2>
                                </div>
                                <div className="right">
                                  <div
                                    className="component page-list global-product-category recipe-v3 has-bullets-and-arrows toggle-arrows hide-bullets-on-mobile has-slider"
                                    dir="ltr"
                                  >
                                    <div className="component-content">
                                      <div
                                        className="arrow-left d-none"
                                        tabIndex={0}
                                        role="button"
                                        aria-labelledby="previous-arrow-label"
                                        style={{ bottom: '221.5px' }}
                                      ></div>
                                      <div
                                        className="arrow-right"
                                        tabIndex={0}
                                        role="button"
                                        aria-labelledby="next-arrow-label"
                                        style={{ bottom: '221.5px' }}
                                      ></div>
                                      <ul className="items" role="list">
                                        <li className="item" role="listitem">
                                          <div className="field-item-link">
                                            <Link
                                              className="btn btn-primary"
                                              data-variantfieldname="Item Link"
                                              title="Dairy free cream cheese"
                                              href="https://www.violife.com/en-us/products/dairy-free-cream-cheese"
                                              data-variantitemid="{F8ADB8E4-570B-4890-B45F-26DCA4367A15}"
                                            >
                                              Learn more
                                            </Link>
                                          </div>
                                          <div className="recipe-card-v3">
                                            <div className="recipe-card-image-container">
                                              <div className="recipe-image-wrapper">
                                                <img
                                                  alt="Dairy free cream cheese"
                                                  sizes="(max-width: 1900px)100vw,(max-width: 1200px) 50vw, (max-width: 992px) 50vw, (max-width: 768px) 50vw, (max-width: 576px) 100vw"
                                                  src="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-cream-cheese.png?rev=c9f9d96442c9436baf13a4e0acada94a&amp;w=533"
                                                  srcSet="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-cream-cheese.png?rev=c9f9d96442c9436baf13a4e0acada94a&amp;w=533 533w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-cream-cheese.png?rev=c9f9d96442c9436baf13a4e0acada94a&amp;w=320 320w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-cream-cheese.png?rev=c9f9d96442c9436baf13a4e0acada94a&amp;w=250 250w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-cream-cheese.png?rev=c9f9d96442c9436baf13a4e0acada94a&amp;w=738 738w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-cream-cheese.png?rev=c9f9d96442c9436baf13a4e0acada94a&amp;w=546 546w"
                                                />
                                                <div className="custom-video"></div>
                                              </div>
                                            </div>
                                            <div className="recipe-card-content-wrapper">
                                              <h3 className="recipe-card-title field-title field-item-title">
                                                DAIRY FREE CREAM CHEESE
                                              </h3>
                                              <div className="product-card-title field-title field-item-link">
                                                <Link
                                                  className="btn btn-primary"
                                                  data-variantfieldname="Item Link"
                                                  title="Dairy free cream cheese"
                                                  href="https://www.violife.com/en-us/products/dairy-free-cream-cheese"
                                                  data-variantitemid="{F8ADB8E4-570B-4890-B45F-26DCA4367A15}"
                                                >
                                                  Learn more
                                                </Link>
                                              </div>
                                            </div>
                                          </div>
                                        </li>
                                        <li className="item" role="listitem">
                                          <div className="field-item-link">
                                            <Link
                                              className="btn btn-primary"
                                              data-variantfieldname="Item Link"
                                              title="Dairy free cheese shreds"
                                              href="https://www.violife.com/en-us/products/dairy-free-cheese-shreds"
                                              data-variantitemid="{BB7B22B4-7928-49CB-96DD-0BD04574EBEE}"
                                            >
                                              Learn more
                                            </Link>
                                          </div>
                                          <div className="recipe-card-v3">
                                            <div className="recipe-card-image-container">
                                              <div className="recipe-image-wrapper">
                                                <img
                                                  alt="Dairy free shreds"
                                                  sizes="(max-width: 1900px)100vw,(max-width: 1200px) 50vw, (max-width: 992px) 50vw, (max-width: 768px) 50vw, (max-width: 576px) 100vw"
                                                  src="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-shreds.png?rev=888ef20cfae84fd2b1c8c51b02f13f10&amp;w=533"
                                                  srcSet="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-shreds.png?rev=888ef20cfae84fd2b1c8c51b02f13f10&amp;w=533 533w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-shreds.png?rev=888ef20cfae84fd2b1c8c51b02f13f10&amp;w=320 320w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-shreds.png?rev=888ef20cfae84fd2b1c8c51b02f13f10&amp;w=250 250w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-shreds.png?rev=888ef20cfae84fd2b1c8c51b02f13f10&amp;w=738 738w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-shreds.png?rev=888ef20cfae84fd2b1c8c51b02f13f10&amp;w=546 546w"
                                                />
                                                <div className="custom-video"></div>
                                              </div>
                                            </div>
                                            <div className="recipe-card-content-wrapper">
                                              <h3 className="recipe-card-title field-title field-item-title">
                                                DAIRY FREE CHEESE SHREDS
                                              </h3>
                                              <div className="product-card-title field-title field-item-link">
                                                <Link
                                                  className="btn btn-primary"
                                                  data-variantfieldname="Item Link"
                                                  title="Dairy free cheese shreds"
                                                  href="https://www.violife.com/en-us/products/dairy-free-cheese-shreds"
                                                  data-variantitemid="{BB7B22B4-7928-49CB-96DD-0BD04574EBEE}"
                                                >
                                                  Learn more
                                                </Link>
                                              </div>
                                            </div>
                                          </div>
                                        </li>
                                        <li className="item" role="listitem">
                                          <div className="field-item-link">
                                            <Link
                                              className="btn btn-primary"
                                              data-variantfieldname="Item Link"
                                              title="Dairy free cheese slices"
                                              href="https://www.violife.com/en-us/products/dairy-free-cheese-slices"
                                              data-variantitemid="{7E1F19AF-691B-427C-B96C-7AACF77EDAD3}"
                                            >
                                              Learn more
                                            </Link>
                                          </div>
                                          <div className="recipe-card-v3">
                                            <div className="recipe-card-image-container">
                                              <div className="recipe-image-wrapper">
                                                <img
                                                  alt="Dairy free slices"
                                                  sizes="(max-width: 1900px)100vw,(max-width: 1200px) 50vw, (max-width: 992px) 50vw, (max-width: 768px) 50vw, (max-width: 576px) 100vw"
                                                  src="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-slices.png?rev=e5e2f74c912d41bcbc9724215e596eb8&amp;w=533"
                                                  srcSet="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-slices.png?rev=e5e2f74c912d41bcbc9724215e596eb8&amp;w=533 533w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-slices.png?rev=e5e2f74c912d41bcbc9724215e596eb8&amp;w=320 320w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-slices.png?rev=e5e2f74c912d41bcbc9724215e596eb8&amp;w=250 250w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-slices.png?rev=e5e2f74c912d41bcbc9724215e596eb8&amp;w=738 738w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-slices.png?rev=e5e2f74c912d41bcbc9724215e596eb8&amp;w=546 546w"
                                                />
                                                <div className="custom-video"></div>
                                              </div>
                                            </div>
                                            <div className="recipe-card-content-wrapper">
                                              <h3 className="recipe-card-title field-title field-item-title">
                                                DAIRY FREE CHEESE SLICES
                                              </h3>
                                              <div className="product-card-title field-title field-item-link">
                                                <Link
                                                  className="btn btn-primary"
                                                  data-variantfieldname="Item Link"
                                                  title="Dairy free cheese slices"
                                                  href="https://www.violife.com/en-us/products/dairy-free-cheese-slices"
                                                  data-variantitemid="{7E1F19AF-691B-427C-B96C-7AACF77EDAD3}"
                                                >
                                                  Learn more
                                                </Link>
                                              </div>
                                            </div>
                                          </div>
                                        </li>
                                        <li className="item" role="listitem">
                                          <div className="field-item-link">
                                            <Link
                                              className="btn btn-primary"
                                              data-variantfieldname="Item Link"
                                              title="Dairy free cheese blocks"
                                              href="https://www.violife.com/en-us/products/dairy-free-cheese-blocks"
                                              data-variantitemid="{1057792C-C6C3-49B2-87F7-1DBC7C1B3729}"
                                            >
                                              Learn more
                                            </Link>
                                          </div>
                                          <div className="recipe-card-v3">
                                            <div className="recipe-card-image-container">
                                              <div className="recipe-image-wrapper">
                                                <img
                                                  alt="Dairy free cheese blocks"
                                                  sizes="(max-width: 1900px)100vw,(max-width: 1200px) 50vw, (max-width: 992px) 50vw, (max-width: 768px) 50vw, (max-width: 576px) 100vw"
                                                  src="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-cheese-blocks.png?rev=075e764dceae43c29e1a0339029d2d59&amp;w=533"
                                                  srcSet="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-cheese-blocks.png?rev=075e764dceae43c29e1a0339029d2d59&amp;w=533 533w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-cheese-blocks.png?rev=075e764dceae43c29e1a0339029d2d59&amp;w=320 320w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-cheese-blocks.png?rev=075e764dceae43c29e1a0339029d2d59&amp;w=250 250w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-cheese-blocks.png?rev=075e764dceae43c29e1a0339029d2d59&amp;w=738 738w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-cheese-blocks.png?rev=075e764dceae43c29e1a0339029d2d59&amp;w=546 546w"
                                                />
                                                <div className="custom-video"></div>
                                              </div>
                                            </div>
                                            <div className="recipe-card-content-wrapper">
                                              <h3 className="recipe-card-title field-title field-item-title">
                                                DAIRY FREE CHEESE BLOCKS
                                              </h3>
                                              <div className="product-card-title field-title field-item-link">
                                                <Link
                                                  className="btn btn-primary"
                                                  data-variantfieldname="Item Link"
                                                  title="Dairy free cheese blocks"
                                                  href="https://www.violife.com/en-us/products/dairy-free-cheese-blocks"
                                                  data-variantitemid="{1057792C-C6C3-49B2-87F7-1DBC7C1B3729}"
                                                >
                                                  Learn more
                                                </Link>
                                              </div>
                                            </div>
                                          </div>
                                        </li>
                                        <li className="item" role="listitem">
                                          <div className="field-item-link">
                                            <Link
                                              className="btn btn-primary"
                                              data-variantfieldname="Item Link"
                                              title="Dairy free coffee creamers"
                                              href="https://www.violife.com/en-us/products/dairy-free-coffee-creamers"
                                              data-variantitemid="{B7913CB7-363B-456C-9A59-564EED5A24C6}"
                                            >
                                              Learn more
                                            </Link>
                                          </div>
                                          <div className="recipe-card-v3">
                                            <div className="recipe-card-image-container">
                                              <div className="recipe-image-wrapper">
                                                <img
                                                  alt="Dairy free coffee creamers"
                                                  sizes="(max-width: 1900px)100vw,(max-width: 1200px) 50vw, (max-width: 992px) 50vw, (max-width: 768px) 50vw, (max-width: 576px) 100vw"
                                                  src="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/coffee-creamers-dairy-free.png?rev=718c1f3d83fe420da8249543304a5e7e&amp;w=533"
                                                  srcSet="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/coffee-creamers-dairy-free.png?rev=718c1f3d83fe420da8249543304a5e7e&amp;w=533 533w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/coffee-creamers-dairy-free.png?rev=718c1f3d83fe420da8249543304a5e7e&amp;w=320 320w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/coffee-creamers-dairy-free.png?rev=718c1f3d83fe420da8249543304a5e7e&amp;w=250 250w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/coffee-creamers-dairy-free.png?rev=718c1f3d83fe420da8249543304a5e7e&amp;w=738 738w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/coffee-creamers-dairy-free.png?rev=718c1f3d83fe420da8249543304a5e7e&amp;w=546 546w"
                                                />
                                                <div className="custom-video"></div>
                                              </div>
                                            </div>
                                            <div className="recipe-card-content-wrapper">
                                              <h3 className="recipe-card-title field-title field-item-title">
                                                DAIRY FREE COFFEE CREAMERS
                                              </h3>
                                              <div className="product-card-title field-title field-item-link">
                                                <Link
                                                  className="btn btn-primary"
                                                  data-variantfieldname="Item Link"
                                                  title="Dairy free coffee creamers"
                                                  href="https://www.violife.com/en-us/products/dairy-free-coffee-creamers"
                                                  data-variantitemid="{B7913CB7-363B-456C-9A59-564EED5A24C6}"
                                                >
                                                  Learn more
                                                </Link>
                                              </div>
                                            </div>
                                          </div>
                                        </li>
                                        <li className="item" role="listitem">
                                          <div className="field-item-link">
                                            <Link
                                              className="btn btn-primary"
                                              data-variantfieldname="Item Link"
                                              title="Dairy free dips"
                                              href="https://www.violife.com/en-us/products/dairy-free-dips"
                                              data-variantitemid="{2BF2CFC2-D45D-4D83-84A2-B6A549F8816C}"
                                            >
                                              Learn more
                                            </Link>
                                          </div>
                                          <div className="recipe-card-v3">
                                            <div className="recipe-card-image-container">
                                              <div className="recipe-image-wrapper">
                                                <img
                                                  alt="Dairy free dips"
                                                  sizes="(max-width: 1900px)100vw,(max-width: 1200px) 50vw, (max-width: 992px) 50vw, (max-width: 768px) 50vw, (max-width: 576px) 100vw"
                                                  src="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-dips.png?rev=c3ee8b1414674d3eae590db44fff7913&amp;w=533"
                                                  srcSet="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-dips.png?rev=c3ee8b1414674d3eae590db44fff7913&amp;w=533 533w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-dips.png?rev=c3ee8b1414674d3eae590db44fff7913&amp;w=320 320w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-dips.png?rev=c3ee8b1414674d3eae590db44fff7913&amp;w=250 250w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-dips.png?rev=c3ee8b1414674d3eae590db44fff7913&amp;w=738 738w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/dairy-free-dips.png?rev=c3ee8b1414674d3eae590db44fff7913&amp;w=546 546w"
                                                />
                                                <div className="custom-video"></div>
                                              </div>
                                            </div>
                                            <div className="recipe-card-content-wrapper">
                                              <h3 className="recipe-card-title field-title field-item-title">
                                                DAIRY FREE DIPS
                                              </h3>
                                              <div className="product-card-title field-title field-item-link">
                                                <Link
                                                  className="btn btn-primary"
                                                  data-variantfieldname="Item Link"
                                                  title="Dairy free dips"
                                                  href="https://www.violife.com/en-us/products/dairy-free-dips"
                                                  data-variantitemid="{2BF2CFC2-D45D-4D83-84A2-B6A549F8816C}"
                                                >
                                                  Learn more
                                                </Link>
                                              </div>
                                            </div>
                                          </div>
                                        </li>
                                        <li className="item" role="listitem">
                                          <div className="field-item-link">
                                            <Link
                                              className="btn btn-primary"
                                              data-variantfieldname="Item Link"
                                              title="Plant butter"
                                              href="https://www.violife.com/en-us/products/plant-butter"
                                              data-variantitemid="{593D2824-363D-48D6-9F90-E6B2A73F51D1}"
                                            >
                                              Learn more
                                            </Link>
                                          </div>
                                          <div className="recipe-card-v3">
                                            <div className="recipe-card-image-container">
                                              <div className="recipe-image-wrapper">
                                                <img
                                                  alt="Dairy free plant butter"
                                                  sizes="(max-width: 1900px)100vw,(max-width: 1200px) 50vw, (max-width: 992px) 50vw, (max-width: 768px) 50vw, (max-width: 576px) 100vw"
                                                  src="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/plant-butter.png?rev=e607f6ae4b264917b1a5f219ac983b21&amp;w=533"
                                                  srcSet="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/plant-butter.png?rev=e607f6ae4b264917b1a5f219ac983b21&amp;w=533 533w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/plant-butter.png?rev=e607f6ae4b264917b1a5f219ac983b21&amp;w=320 320w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/plant-butter.png?rev=e607f6ae4b264917b1a5f219ac983b21&amp;w=250 250w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/plant-butter.png?rev=e607f6ae4b264917b1a5f219ac983b21&amp;w=738 738w,https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Assets/Homepage/plant-butter.png?rev=e607f6ae4b264917b1a5f219ac983b21&amp;w=546 546w"
                                                />
                                                <div className="custom-video"></div>
                                              </div>
                                            </div>
                                            <div className="recipe-card-content-wrapper">
                                              <h3 className="recipe-card-title field-title field-item-title">
                                                PLANT BUTTER
                                              </h3>
                                              <div className="product-card-title field-title field-item-link">
                                                <Link
                                                  className="btn btn-primary"
                                                  data-variantfieldname="Item Link"
                                                  title="Plant butter"
                                                  href="https://www.violife.com/en-us/products/plant-butter"
                                                  data-variantitemid="{593D2824-363D-48D6-9F90-E6B2A73F51D1}"
                                                >
                                                  Learn more
                                                </Link>
                                              </div>
                                            </div>
                                          </div>
                                        </li>
                                      </ul>
                                      <div className="bullets">
                                        <div
                                          className="dot active"
                                          data-item={0}
                                          tabIndex={0}
                                          role="button"
                                          aria-label="Carousel slide 1"
                                        ></div>
                                        <div
                                          className="dot"
                                          data-item="1"
                                          tabIndex={0}
                                          role="button"
                                          aria-label="Carousel slide 2"
                                        ></div>
                                        <div
                                          className="dot"
                                          data-item="2"
                                          tabIndex={0}
                                          role="button"
                                          aria-label="Carousel slide 3"
                                        ></div>
                                      </div>
                                      <div className="scrollbar">
                                        <span
                                          className="thumb"
                                          style={{
                                            width: '524.203px',
                                            transform: 'translate3d(0px, 0px, 0px)',
                                            cursor: 'default',
                                            touchAction: 'pan-y',
                                            userSelect: 'none',
                                          }}
                                        ></span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* <!-- End Meta Navigation mobile--> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="component container" id="searchPopup">
                  <div className="component-content">
                    <div className="component plain-html">
                      <div className="component-content">
                        <button type="button" name="searchbutton" className="expandsubmit desk">
                          <i>Search</i>
                        </button>
                      </div>
                    </div>

                    <div
                      className="component search-box search-box-with-icon move-up-half initialized"
                      id="global-search"
                      data-properties='{"endpoint":"/en-us/sxa/search/results/","suggestionEndpoint":"/en-us/sxa/search/suggestions/","suggestionsMode":"ShowPredictions","resultPage":"/en-us/search-results","targetSignature":"","v":"{3CBA7C4D-C7DC-4B4D-8B7C-0BB726225293}","s":"{EA5DEA73-36B3-4E3E-8085-89A5305B3D40}","p":6,"l":"en-US","languageSource":"CurrentLanguage","searchResultsSignature":"product-search,article-search,recipe-search","itemid":"{09E9C01F-52BC-422C-B465-287C7887561C}","minSuggestionsTriggerCharacterCount":2}'
                    >
                      <div className="component-content">
                        <label htmlFor="textBoxSearch">Search textbox label</label>
                        <div
                          className="autoComplete_wrapper"
                          role="combobox"
                          aria-owns="autoComplete_list_1"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <input
                            type="text"
                            className="search-box-input"
                            autoComplete="off"
                            name="textBoxSearch"
                            maxLength={100}
                            placeholder="Search..."
                            aria-label="Search..."
                            aria-controls="autoComplete_list_1"
                            aria-autocomplete="both"
                            role="searchbox"
                          />
                          <div
                            id="autoComplete_list_1"
                            role="listbox"
                            hidden
                            className="autocomplete-menu autocomplete-menu__absolute"
                          ></div>
                        </div>
                        <button className="search-box-button-with-redirect" type="submit">
                          Search...
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="component container meta-header layout--fluid container--no-padding"
          data-dm="component.meta-nav"
        >
          <div className="component-content">
            <div className="row component column-splitter">
              <div className="col-12 col-lg-6"></div>
              <div className="col-12 col-lg-6">
                <div className="component image-list image-list-logo text-align-right">
                  <div className="component-content">
                    <ul role="list">
                      <li className="item0 odd first" role="listitem">
                        <Link
                          target="_blank"
                          title="Instagram"
                          rel="noopener noreferrer"
                          href="https://www.instagram.com/violife_foods/"
                        >
                          <img
                            src="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New/Assets/Socials/instagram-icon-white.svg?iar=0&amp;rev=-1"
                            alt=""
                            data-variantitemid="{C205E20A-A8D6-47EF-9A60-465501F86037}"
                            data-variantfieldname="Image"
                          />
                        </Link>
                      </li>
                      <li className="item1 even last" role="listitem">
                        <Link
                          target="_blank"
                          title="TikTok"
                          rel="noopener noreferrer"
                          href="https://www.tiktok.com/@violife_foods"
                        >
                          <img
                            src="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Icons/tiktok-icon-white.svg?iar=0&amp;rev=934e254a534c46b6806f3b37dd155295"
                            alt="tiktok"
                            data-variantitemid="{3DE9DDA8-A2E9-453A-9EDD-85A5D8F26C1E}"
                            data-variantfieldname="Image"
                          />
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
    );
  }
  return <HeaderDefaultComponent {...props} />;
};
