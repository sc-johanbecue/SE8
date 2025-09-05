/* eslint-disable jsx-a11y/role-supports-aria-props */
import React, { useEffect, useRef } from 'react';
import {
  ComponentRendering,
  ComponentParams,
  ImageField,
  TextField,
  Image as JssImage,
  RichText,
  RichTextField,
  Text,
} from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

interface Fields {
  Image: ImageField;
  RecipeName: TextField;
  ShortDescription: RichTextField;
  Ingredients: RichTextField;
  Directions: RichTextField;
}

type VideoHeroProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: VideoHeroProps): JSX.Element => {
  // Tabs controller: attach to the tabs wrapper
  const tabsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = tabsRef.current;
    if (!root) return;

    const links = root.querySelectorAll<HTMLAnchorElement>('.tabs-controls a[data-tab-trigger]');
    const panels = root.querySelectorAll<HTMLElement>('.tabs-content .tab-panel');

    const showPanel = (trigger: string) => {
      // 1) Active state on tab links
      links.forEach((a) => {
        const isActive = a.getAttribute('data-tab-trigger') === trigger;
        a.classList.toggle('active', isActive);
      });

      // 2) ARIA on <li role="tab">
      root.querySelectorAll<HTMLLIElement>('.tabs-controls .tab-item[role="tab"]').forEach((li) => {
        const a = li.querySelector('a[data-tab-trigger]');
        const selected = a?.getAttribute('data-tab-trigger') === trigger;
        li.setAttribute('aria-selected', selected ? 'true' : 'false');
        li.setAttribute('tabindex', selected ? '0' : '-1');
      });

      // 3) Panels: show matching, hide others
      panels.forEach((p) => {
        const match = p.dataset.tabContent === trigger;
        p.classList.toggle('open', match);
        if (match) p.removeAttribute('hidden');
        else p.setAttribute('hidden', 'true');
      });
    };

    // Initialize state from the currently active tab (or first)
    const initial =
      root
        .querySelector<HTMLAnchorElement>('.tabs-controls a.active')
        ?.getAttribute('data-tab-trigger') || links[0]?.getAttribute('data-tab-trigger');
    if (initial) showPanel(initial);

    // Click delegation
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[data-tab-trigger]');
      if (!a || !root.contains(a)) return;
      e.preventDefault();
      const trigger = a.getAttribute('data-tab-trigger');
      if (trigger) showPanel(trigger);
    };

    root.addEventListener('click', onClick);
    return () => root.removeEventListener('click', onClick);
  }, []);

  return (
    <div
      className="component container layout--fluid container--no-padding no-padding-sm--top-bottom"
      id="recipe-detail-violife-new"
    >
      <div className="component-content">
        <div className="component row-splitter">
          <div className="" style={{ marginTop: '130px' }}>
            <div>
              <div className="component container layout--fluid">
                <div className="component-content"></div>
              </div>
            </div>
          </div>
          <div className="">
            <div>
              <div className="component container layout--fluid container--no-padding">
                <div className="component-content">
                  <div className="component content">
                    <div className="component-content">
                      <div className="row recipe-header">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 img-container">
                          <div className="new-component">
                            <JssImage field={props.fields.Image} fetchPriority="high" />
                          </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 content-container">
                          <div className="tag-name field-name">
                            <span className="field-title">Everyday cooking </span>
                          </div>
                          <h1 className="recipe-title field-title">
                            <Text field={props.fields.RecipeName} />
                          </h1>
                          <div className="recipe-intro">
                            <RichText
                              field={props.fields.ShortDescription}
                              className="field-shortdescription"
                            />
                          </div>
                          <div>
                            <div>
                              <div className="form-group">
                                <div className="be-first-container" style={{ display: 'none' }}>
                                  <div className="star" aria-hidden="true">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="22"
                                      viewBox="0 0 22 21"
                                      fill="none"
                                    >
                                      <path d="M14.2464 11.8844L19.5 8.11556H13.0071L10.9955 2L8.99287 8.11556H2.5L7.75357 11.8844L5.74194 18L10.9955 14.2222L16.2491 18L14.2464 11.8844Z"></path>
                                    </svg>
                                  </div>
                                  <p className="be-first-text scroll-to-view" tabIndex={0}>
                                    Rate This
                                  </p>
                                </div>
                                <div
                                  id="upfield-star-rating"
                                  className="starrating starrating--small"
                                  data-recicpeid="247148"
                                  data-languageid="en-US"
                                  data-sitename="Violife"
                                  data-rowid="0"
                                  data-username="Anonymous"
                                  data-itemid="{22E93C1F-FABB-4F66-9F2C-434C2B96AEB6}"
                                  data-databasename="web"
                                  style={{ display: 'flex' }}
                                >
                                  <div className="star-rating-container">
                                    <div className="starrating starrating--small starrating--4">
                                      <ul className="avg-rating" aria-hidden="true" role="list">
                                        <li className="star" data-rating="1" role="listitem">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="22"
                                            height="21"
                                            viewBox="0 0 22 21"
                                            fill="none"
                                          >
                                            <path d="M14.2464 11.8844L19.5 8.11556H13.0071L10.9955 2L8.99287 8.11556H2.5L7.75357 11.8844L5.74194 18L10.9955 14.2222L16.2491 18L14.2464 11.8844Z"></path>
                                          </svg>
                                        </li>
                                        <li className="star" data-rating="2" role="listitem">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="22"
                                            height="21"
                                            viewBox="0 0 22 21"
                                            fill="none"
                                          >
                                            <path d="M14.2464 11.8844L19.5 8.11556H13.0071L10.9955 2L8.99287 8.11556H2.5L7.75357 11.8844L5.74194 18L10.9955 14.2222L16.2491 18L14.2464 11.8844Z"></path>
                                          </svg>
                                        </li>
                                        <li className="star" data-rating="3" role="listitem">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="22"
                                            height="21"
                                            viewBox="0 0 22 21"
                                            fill="none"
                                          >
                                            <path d="M14.2464 11.8844L19.5 8.11556H13.0071L10.9955 2L8.99287 8.11556H2.5L7.75357 11.8844L5.74194 18L10.9955 14.2222L16.2491 18L14.2464 11.8844Z"></path>
                                          </svg>
                                        </li>
                                        <li className="star active" data-rating="4" role="listitem">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="22"
                                            height="21"
                                            viewBox="0 0 22 21"
                                            fill="none"
                                          >
                                            <path d="M14.2464 11.8844L19.5 8.11556H13.0071L10.9955 2L8.99287 8.11556H2.5L7.75357 11.8844L5.74194 18L10.9955 14.2222L16.2491 18L14.2464 11.8844Z"></path>
                                          </svg>
                                        </li>
                                        <li className="star" data-rating="5" role="listitem">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="22"
                                            height="21"
                                            viewBox="0 0 22 21"
                                            fill="none"
                                          >
                                            <path
                                              d="M14.2464 11.8844L19.5 8.11556H13.0071L10.9955 2L8.99287 8.11556H2.5L7.75357 11.8844L5.74194 18L10.9955 14.2222L16.2491 18L14.2464 11.8844Z"
                                              fill="url(#gradientStar)"
                                            ></path>
                                            <defs>
                                              <linearGradient
                                                id="gradientStar"
                                                x1="0%"
                                                y1="0%"
                                                x2="100%"
                                                y2="0%"
                                              >
                                                <stop
                                                  offset="0"
                                                  style={{
                                                    stopColor: 'var(--filled-star-color)',
                                                    stopOpacity: '1',
                                                  }}
                                                ></stop>
                                                <stop
                                                  offset="40%"
                                                  style={{
                                                    stopColor: 'var(--filled-star-color)',
                                                    stopOpacity: '1',
                                                  }}
                                                ></stop>
                                                <stop
                                                  offset="40%"
                                                  style={{
                                                    stopColor: 'var(--plain-star-color)',
                                                    stopOpacity: '1',
                                                  }}
                                                ></stop>
                                                <stop
                                                  style={{
                                                    stopColor: 'var(--plain-star-color)',
                                                    stopOpacity: '1',
                                                  }}
                                                ></stop>
                                              </linearGradient>
                                            </defs>
                                          </svg>
                                        </li>
                                      </ul>
                                      <div
                                        className="average-count-container"
                                        id="avg-rating-details"
                                      >
                                        <div>
                                          <div className="label-hidden">Has average rating</div>
                                          <p id="recipeAvgRating">4.4</p>
                                        </div>
                                        <div>
                                          <div className="label-hidden">Total rating count</div>
                                          <p id="recipeRatingCount">(13)</p>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="rating-separator"></div>
                                    <div className="add-rating-container" data-yourratingtext="">
                                      <div className="star-count"></div>
                                      <div className="star" aria-hidden="true">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="22"
                                          height="21"
                                          viewBox="0 0 22 21"
                                          fill="none"
                                        >
                                          <path d="M14.2464 11.8844L19.5 8.11556H13.0071L10.9955 2L8.99287 8.11556H2.5L7.75357 11.8844L5.74194 18L10.9955 14.2222L16.2491 18L14.2464 11.8844Z"></path>
                                        </svg>
                                      </div>
                                      <Link
                                        href="#rate-this"
                                        className="rate-text scroll-to-view"
                                        aria-describedby="avg-rating-details"
                                      >
                                        Rate Recipe
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <meta itemProp="ratingValue" content="3" />
                              <meta itemProp="bestRating" content="5" />
                              <meta itemProp="ratingCount" content="9" />
                            </div>
                          </div>
                          <div className="recipe-short-summary padding-bottom-s">
                            <ul className="recipe-short-summary-list" role="list">
                              <li role="listitem">
                                <img
                                  alt="cooktime"
                                  src="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New/Icons/cooktime.svg?rev=5c3074ae09c041e19356dae7aa723628"
                                />
                                <span className="recipe-short-summary-title field-text">
                                  Cooking time
                                </span>
                                <span className="recipe-short-summary-value field-cooktime">
                                  5 min
                                </span>
                              </li>
                              <li role="listitem">
                                <img
                                  alt="preparation time"
                                  src="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New/Icons/preptime.svg?rev=746fada508b649d8aaeaaf3f6c2eafbf"
                                />
                                <span className="recipe-short-summary-title field-text">
                                  Prep time
                                </span>
                                <span className="recipe-short-summary-value field-preparationtime">
                                  20 min
                                </span>
                              </li>
                              <li role="listitem">
                                <img
                                  alt="difficulty"
                                  src="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New/Icons/difficulty.svg?rev=75e0983f503e4e37a067ba00e2fbc5c2"
                                />
                                <span className="recipe-short-summary-title field-text">
                                  Difficulty
                                </span>
                                <span className="recipe-short-summary-value field-difficulties">
                                  Easy
                                </span>
                              </li>
                              <li role="listitem">
                                <img
                                  alt="servings"
                                  src="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New/Icons/servings.svg?rev=c675da28070742a8ac3d09b81a75e749"
                                />
                                <span className="recipe-short-summary-title field-text">
                                  Servings
                                </span>
                                <span className="recipe-short-summary-value field-servings">
                                  Portions 4
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="recipe-header-tags">
                            <div className="recipe-tags field-name">
                              <span className="field-title">Dinner</span>
                            </div>
                            <div className="recipe-tags field-name">
                              <span className="field-title">lunch</span>
                            </div>
                            <div className="recipe-tags field-name">
                              <span className="field-title">Italian</span>
                            </div>
                            <div className="recipe-tags field-name">
                              <span className="field-title">pasta</span>
                            </div>
                          </div>
                          <div className="component container" id="products-in-recipes">
                            <div className="component-content">
                              <div className="component plain-html">
                                <div className="component-content">
                                  <button className="btn btn-primary product-used-in-this-recipe-cta hidden">
                                    Products Used In Recipe
                                  </button>
                                </div>
                              </div>

                              <div
                                className="component content"
                                id="products-in-recipes-pagecontent-component"
                              >
                                <div className="component-content">
                                  <div className="global-product-overview">
                                    <div className="component link-list title-link"></div>
                                    <div className="item-clik-close-popup">
                                      <span></span>
                                    </div>
                                    <div className="page-teaser-overview global-product-item">
                                      <div className="component page-list page-teaser-overview global-product-item">
                                        <div className="component-content"></div>
                                      </div>
                                    </div>
                                    <div className="btn btn-primary field-link">
                                      <Link
                                        data-variantfieldname="Link"
                                        title="Discover all"
                                        href="/products"
                                        data-variantitemid="{99037134-8B5F-45C8-8876-AC047E079B4C}"
                                      >
                                        Discover Products
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* TABS */}
                          <div className="component tabs initialized" ref={tabsRef}>
                            <div className="component-content">
                              <ul
                                className="tabs-controls"
                                role="tablist"
                                aria-label="INGREDIENTS,DIRECTIONS"
                              >
                                <li
                                  className="tab-item"
                                  role="tab"
                                  aria-selected="true"
                                  aria-controls="panel-1"
                                  id="tab-1"
                                  tabIndex={0}
                                  aria-describedby="tab-label"
                                >
                                  <Link
                                    href=""
                                    className="active"
                                    data-tab-trigger="tab1-0c82ba13-3689-4cd0-a597-7f8868de3fb9"
                                  >
                                    <span className="field-tabtext1">INGREDIENTS</span>
                                  </Link>
                                </li>
                                <li
                                  className="tab-item"
                                  role="tab"
                                  aria-selected="false"
                                  aria-controls="panel-2"
                                  id="tab-2"
                                  tabIndex={-1}
                                  aria-describedby="tab-label"
                                >
                                  <Link
                                    href=""
                                    data-tab-trigger="tab2-0c82ba13-3689-4cd0-a597-7f8868de3fb9"
                                  >
                                    <span className="field-tabtext2">DIRECTIONS</span>
                                  </Link>
                                </li>
                              </ul>
                              <div className="tabs-content">
                                <div
                                  className="tab-panel open"
                                  data-tab-content="tab1-0c82ba13-3689-4cd0-a597-7f8868de3fb9"
                                  role="tabpanel"
                                  aria-labelledby="tab-1"
                                  id="panel-1"
                                  tabIndex={0}
                                >
                                  <div className="component content">
                                    <div className="component-content">
                                      <div className="row" id="ingredients">
                                        <div className="col-xs-12 col-md-12 col-lg-12 recipe-detail-body-left">
                                          <div className="recipe-detail-ingredients">
                                            <div className="recipe-related-product"></div>

                                            <div className="check-list field-ingredientstext recipe-ingredient-list">
                                              <div>
                                                <RichText field={props.fields.Ingredients} />
                                                {/* <ul role="list">
                                                  <li role="listitem">
                                                    <div className="tick-wrapper">
                                                      <span
                                                        className="tick"
                                                        aria-hidden="true"
                                                      ></span>
                                                      <span
                                                        className="tick-label"
                                                        aria-hidden="false"
                                                      >
                                                        Includes
                                                      </span>
                                                    </div>
                                                    1 pack Violife Just Like Cream Cheese Original
                                                  </li>
                                                  <li role="listitem">
                                                    <div className="tick-wrapper">
                                                      <span
                                                        className="tick"
                                                        aria-hidden="true"
                                                      ></span>
                                                      <span
                                                        className="tick-label"
                                                        aria-hidden="false"
                                                      >
                                                        Includes
                                                      </span>
                                                    </div>
                                                    18 oz linguini
                                                  </li>
                                                  <li role="listitem">
                                                    <div className="tick-wrapper">
                                                      <span
                                                        className="tick"
                                                        aria-hidden="true"
                                                      ></span>
                                                      <span
                                                        className="tick-label"
                                                        aria-hidden="false"
                                                      >
                                                        Includes
                                                      </span>
                                                    </div>
                                                    10 cherry tomatoes, cut in half
                                                  </li>
                                                  <li role="listitem">
                                                    <div className="tick-wrapper">
                                                      <span
                                                        className="tick"
                                                        aria-hidden="true"
                                                      ></span>
                                                      <span
                                                        className="tick-label"
                                                        aria-hidden="false"
                                                      >
                                                        Includes
                                                      </span>
                                                    </div>
                                                    1 clove of garlic, cut in slices
                                                  </li>
                                                  <li role="listitem">
                                                    <div className="tick-wrapper">
                                                      <span
                                                        className="tick"
                                                        aria-hidden="true"
                                                      ></span>
                                                      <span
                                                        className="tick-label"
                                                        aria-hidden="false"
                                                      >
                                                        Includes
                                                      </span>
                                                    </div>
                                                    3 oz vegetable stock
                                                  </li>
                                                  <li role="listitem">
                                                    <div className="tick-wrapper">
                                                      <span
                                                        className="tick"
                                                        aria-hidden="true"
                                                      ></span>
                                                      <span
                                                        className="tick-label"
                                                        aria-hidden="false"
                                                      >
                                                        Includes
                                                      </span>
                                                    </div>
                                                    fresh basil and thyme
                                                  </li>
                                                  <li role="listitem">
                                                    <div className="tick-wrapper">
                                                      <span
                                                        className="tick"
                                                        aria-hidden="true"
                                                      ></span>
                                                      <span
                                                        className="tick-label"
                                                        aria-hidden="false"
                                                      >
                                                        Includes
                                                      </span>
                                                    </div>
                                                    olive oil
                                                  </li>
                                                  <li role="listitem">
                                                    <div className="tick-wrapper">
                                                      <span
                                                        className="tick"
                                                        aria-hidden="true"
                                                      ></span>
                                                      <span
                                                        className="tick-label"
                                                        aria-hidden="false"
                                                      >
                                                        Includes
                                                      </span>
                                                    </div>
                                                    salt and pepper
                                                  </li>
                                                </ul> */}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="tab-panel"
                                  data-tab-content="tab2-0c82ba13-3689-4cd0-a597-7f8868de3fb9"
                                  role="tabpanel"
                                  aria-labelledby="tab-2"
                                  id="panel-2"
                                  tabIndex={0}
                                >
                                  <div className="component content">
                                    <div className="component-content">
                                      <div className="recipe-detail-instructions field-instructionstext recipe-ingredient-list">
                                        <div>
                                          <RichText field={props.fields.Directions} />
                                          {/* <ol role="list">
                                            <li role="listitem">
                                              Sauté the cherry tomatoes with a bit of olive oil in a
                                              pan. Once they become soft, add garlic, fresh basil
                                              and thyme.
                                            </li>
                                            <li role="listitem">
                                              Stir for 1-2 minutes, add salt and pepper, and remove
                                              pan from the heat.
                                            </li>
                                            <li role="listitem">
                                              In a small pot add the vegetable stock and Violife
                                              Just Like Cream Cheese Original. Cook in low heat,
                                              while stirring continuously, until the cheese spread
                                              has become a smooth cream.
                                            </li>
                                            <li role="listitem">
                                              Bring a large pot of salted water to boil. Cook
                                              linguini according to the package instructions.
                                            </li>
                                            <li role="listitem">
                                              Once linguini is prepared, drain the pasta and add a
                                              bit of olive oil, the cherry tomatoes and the cheese
                                              cream. Stir until the cream has spread evenly among
                                              the pasta and serve immediately, adding fresh basil
                                              and thyme on top.
                                            </li>
                                          </ol> */}
                                        </div>
                                      </div>
                                      <div className="recipe-detail-tip"></div>
                                      <div className="container logo-for-pdf">
                                        <img
                                          alt="Violife 100% Dairy Free"
                                          src="https://www.violife.com/en-us/-/media/Project/Upfield/Brands/Violife-Foods/Violife-Foods-US-New-2025/Logos/violife-dairy-free-logo-234x132.png?rev=39f20fa4d2ac40969b39ace16fdfb963"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="tab-panel"
                                  data-tab-content="tab3-0c82ba13-3689-4cd0-a597-7f8868de3fb9"
                                ></div>
                                <div
                                  className="tab-panel"
                                  data-tab-content="tab4-0c82ba13-3689-4cd0-a597-7f8868de3fb9"
                                ></div>
                                <div
                                  className="tab-panel"
                                  data-tab-content="tab5-0c82ba13-3689-4cd0-a597-7f8868de3fb9"
                                ></div>
                              </div>
                            </div>
                          </div>
                          {/* /TABS */}

                          <div
                            className="component container layout--small no-padding-sm padding-bottom-m padding-top-m"
                            id="recipe-download-print"
                          >
                            <div className="component-content">
                              <div className="component link-list">
                                <div className="component-content">
                                  <ul role="list">
                                    <li className="item0 odd first last" role="listitem">
                                      <div
                                        className="field-copiedtotext"
                                        style={{ display: 'none' }}
                                      >
                                        Copied!
                                      </div>
                                      <div className="field-link">
                                        <Link
                                          href=""
                                          className="btn btn-primary copycipboard"
                                          data-variantfieldname="Link"
                                          title=" Copy Ingredients"
                                          data-variantitemid="{F7069293-3E80-4353-A396-ABF354C54DB8}"
                                        >
                                          Copy Ingredients
                                        </Link>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <div className="component link-list">
                                <div className="component-content">
                                  <ul role="list">
                                    <li className="item0 odd first last" role="listitem">
                                      <div className="field-link">
                                        <Link
                                          className="btn btn-primary download-recipe"
                                          data-variantfieldname="Link"
                                          title="Download Recipe"
                                          href="#"
                                          data-variantitemid="{0E328198-5DF5-4767-8968-20CF8A6A7ADB}"
                                        >
                                          Download Recipe
                                        </Link>
                                      </div>
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
        </div>
      </div>
    </div>
  );
};
