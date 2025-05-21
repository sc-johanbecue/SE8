import React from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import {
  Placeholder,
  ComponentRendering,
  ComponentParams,
} from '@sitecore-jss/sitecore-jss-nextjs';

import 'animate.css';

type HeaderTopProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
};

const HeaderTopDefaultComponent = (props: HeaderTopProps): JSX.Element => (
  <div className={`component HeaderTop ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">HeaderTop</span>
    </div>
  </div>
);

/**
 * Header Top component that combines Logo, Language Switcher, and Top Menu
 *
 * Sitecore XM Cloud Configuration:
 * - Each child component will have its own datasource item in Sitecore
 * - No fields are needed at the HeaderTop level
 */
export const Default = (props: HeaderTopProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  const phKeyLogo = `GeberitLogo-${props.params.DynamicPlaceholderId}`;
  const phKeyLanguageSwitcher = `GeberitLanguageSwitcher-${props.params.DynamicPlaceholderId}`;
  const phKeyTopMenu = `GeberitTopMenu-${props.params.DynamicPlaceholderId}`;

  return (
    <>
      <div id="mega-menu" className="sc-821ebc6d-0 fFGleh">
        <div className="sc-821ebc6d-9 eMdFQK">
          <div id="page-header" className="sc-eb953e09-0 kbKFyA">
            <div className="sc-gFqAkR pBsox">
              <nav className="sc-eb953e09-1 kndgIn">
                <Placeholder name={phKeyLogo} rendering={props.rendering} />
                <div className="sc-446dc962-0 gYlZIO">
                  <ul className="sc-446dc962-1 llYepF">
                    <li className="sc-821ebc6d-1 hkLOLM with-border">
                      <Link
                        className="sc-28a4cd60-0 jaagoI gtm-utm-ignored-link"
                        href="/service-support/contact/"
                      >
                        Contact
                      </Link>
                    </li>
                    <li className="sc-821ebc6d-1 hkLOLM with-border">
                      <Link className="sc-28a4cd60-0 jaagoI gtm-utm-ignored-link" href="/about-us/">
                        About us
                      </Link>
                    </li>
                    <li className="sc-821ebc6d-1 hkLOLM with-border">
                      <Link className="sc-28a4cd60-0 jaagoI gtm-utm-ignored-link" href="/career/">
                        Careers
                      </Link>
                    </li>
                    <li className="sc-821ebc6d-1 hkLOLM with-border">
                      <Link
                        className="sc-28a4cd60-0 jaagoI gtm-utm-ignored-link"
                        href="/media/press/"
                      >
                        Media
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="sc-eb953e09-3 iqEvvd">
                  <div className="sc-eb953e09-9 dswcqB">
                    <div className="sc-eb953e09-4 inwfsW">
                      <div className="sc-sLsrZ fWhegE">
                        <span role="button" style={{ outline: 'none' }} tabIndex={0}>
                          <button className="sc-gEvEer gGbxpp" type="button" aria-label="">
                            <span style={{ width: '1rem' }} className="sc-aXZVg dRbgvV icon ">
                              <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.35 14.65L10.58 9.87002C11.579 8.68782 12.0826 7.16527 11.9854 5.62053C11.8882 4.07578 11.1978 2.62835 10.0585 1.58068C8.91916 0.533009 7.41904 -0.0338427 5.87157 -0.00142934C4.32411 0.030984 2.84904 0.660154 1.75458 1.75461C0.660123 2.84907 0.0309535 4.32414 -0.00145986 5.87161C-0.0338732 7.41907 0.532978 8.91919 1.58065 10.0585C2.62832 11.1978 4.07575 11.8882 5.6205 11.9854C7.16524 12.0826 8.68779 11.5791 9.86999 10.58L14.65 15.35L15.35 14.65ZM5.99999 11C5.01108 11 4.04438 10.7068 3.22214 10.1574C2.39989 9.60796 1.75903 8.82707 1.38059 7.91343C1.00215 6.9998 0.903134 5.99447 1.09606 5.02457C1.28899 4.05466 1.76519 3.16375 2.46445 2.46448C3.16372 1.76522 4.05463 1.28902 5.02454 1.09609C5.99444 0.903165 6.99977 1.00218 7.9134 1.38062C8.82703 1.75906 9.60793 2.39992 10.1573 3.22217C10.7067 4.04441 11 5.01111 11 6.00002C11 7.3261 10.4732 8.59787 9.53552 9.53555C8.59784 10.4732 7.32607 11 5.99999 11Z"></path>
                              </svg>
                            </span>
                            <div className="sc-eb953e09-6 fhigZi">Search</div>
                          </button>
                        </span>
                      </div>
                    </div>
                    <div className="sc-eb953e09-10 iHKyEw">
                      <div className="sc-d464b8f3-0 cvGnjx">
                        <input
                          className="sc-d464b8f3-1 kHQuJG mobile-search"
                          placeholder="What are you looking for?"
                          autoFocus
                          value=""
                        />
                        <span
                          style={{ width: '1rem' }}
                          className="sc-aXZVg dRbgvV icon sc-d464b8f3-5 izVVYd"
                        >
                          <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.35 14.65L10.58 9.87002C11.579 8.68782 12.0826 7.16527 11.9854 5.62053C11.8882 4.07578 11.1978 2.62835 10.0585 1.58068C8.91916 0.533009 7.41904 -0.0338427 5.87157 -0.00142934C4.32411 0.030984 2.84904 0.660154 1.75458 1.75461C0.660123 2.84907 0.0309535 4.32414 -0.00145986 5.87161C-0.0338732 7.41907 0.532978 8.91919 1.58065 10.0585C2.62832 11.1978 4.07575 11.8882 5.6205 11.9854C7.16524 12.0826 8.68779 11.5791 9.86999 10.58L14.65 15.35L15.35 14.65ZM5.99999 11C5.01108 11 4.04438 10.7068 3.22214 10.1574C2.39989 9.60796 1.75903 8.82707 1.38059 7.91343C1.00215 6.9998 0.903134 5.99447 1.09606 5.02457C1.28899 4.05466 1.76519 3.16375 2.46445 2.46448C3.16372 1.76522 4.05463 1.28902 5.02454 1.09609C5.99444 0.903165 6.99977 1.00218 7.9134 1.38062C8.82703 1.75906 9.60793 2.39992 10.1573 3.22217C10.7067 4.04441 11 5.01111 11 6.00002C11 7.3261 10.4732 8.59787 9.53552 9.53555C8.59784 10.4732 7.32607 11 5.99999 11Z"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="sc-eb953e09-7 bReebN">
                    <div className="sc-eb953e09-4 kViWoD">
                      <div>
                        <button
                          className="sc-gEvEer gGbxpp"
                          type="button"
                          aria-label=""
                          aria-activedescendant=""
                          aria-controls="downshift-«R18ldb»-menu"
                          aria-expanded="false"
                          aria-haspopup="listbox"
                          aria-labelledby="downshift-«R18ldb»-label"
                          id="downshift-«R18ldb»-toggle-button"
                          role="combobox"
                          tabIndex={0}
                        >
                          <span style={{ width: '1rem' }} className="sc-aXZVg dRbgvV icon ">
                            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M3.75737 1.75736C4.88259 0.632141 6.40871 0 8.00001 0C9.59131 0 11.1174 0.632141 12.2427 1.75736C13.3679 2.88258 14 4.4087 14 6C14.0023 7.29714 13.577 8.55888 12.79 9.59L8.00001 16L3.21001 9.59C2.423 8.55888 1.99774 7.29714 2.00001 6C2.00001 4.4087 2.63215 2.88258 3.75737 1.75736ZM8.00001 14.31L12 9C12.5571 8.25715 12.8964 7.37384 12.9798 6.44903C13.0632 5.52422 12.8874 4.59446 12.4721 3.76393C12.0569 2.9334 11.4185 2.23492 10.6287 1.74675C9.83879 1.25857 8.92857 1 8.00001 1C7.07145 1 6.16123 1.25857 5.37135 1.74675C4.58147 2.23492 3.94314 2.9334 3.52787 3.76393C3.11261 4.59446 2.93682 5.52422 3.02021 6.44903C3.1036 7.37384 3.44287 8.25715 4.00001 9L8.00001 14.31ZM6.33329 3.50559C6.82664 3.17595 7.40666 3 8 3C8.79565 3 9.55871 3.31607 10.1213 3.87868C10.6839 4.44129 11 5.20435 11 6C11 6.59334 10.8241 7.17336 10.4944 7.66671C10.1648 8.16006 9.69623 8.54458 9.14805 8.77164C8.59987 8.9987 7.99667 9.05811 7.41473 8.94236C6.83279 8.8266 6.29824 8.54088 5.87868 8.12132C5.45912 7.70176 5.1734 7.16721 5.05765 6.58527C4.94189 6.00333 5.0013 5.40013 5.22836 4.85195C5.45543 4.30377 5.83994 3.83524 6.33329 3.50559ZM6.88886 7.66294C7.21776 7.8827 7.60444 8 8 8C8.53043 8 9.03914 7.78929 9.41421 7.41421C9.78929 7.03914 10 6.53043 10 6C10 5.60444 9.8827 5.21776 9.66294 4.88886C9.44318 4.55996 9.13082 4.30362 8.76537 4.15224C8.39992 4.00087 7.99778 3.96126 7.60982 4.03843C7.22186 4.1156 6.86549 4.30608 6.58579 4.58579C6.30608 4.86549 6.1156 5.22186 6.03843 5.60982C5.96126 5.99778 6.00087 6.39991 6.15224 6.76537C6.30362 7.13082 6.55996 7.44318 6.88886 7.66294Z"
                              ></path>
                            </svg>
                          </span>
                          <div className="sc-eb953e09-6 fhigZi">
                            <span className="label">Find bathroom showrooms</span>
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="sc-eb953e09-4 inwfsW">
                      <div className="sc-sLsrZ fWhegE">
                        <span role="button" style={{ outline: 'none' }} tabIndex={0}>
                          <Link
                            className="sc-2097f723-0 fkMPpU"
                            aria-label=""
                            href="/find-dealer/showrooms/"
                          >
                            <span
                              style={{ width: '1rem' }}
                              className="sc-aXZVg dRbgvV icon first-icon"
                            >
                              <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M3.75737 1.75736C4.88259 0.632141 6.40871 0 8.00001 0C9.59131 0 11.1174 0.632141 12.2427 1.75736C13.3679 2.88258 14 4.4087 14 6C14.0023 7.29714 13.577 8.55888 12.79 9.59L8.00001 16L3.21001 9.59C2.423 8.55888 1.99774 7.29714 2.00001 6C2.00001 4.4087 2.63215 2.88258 3.75737 1.75736ZM8.00001 14.31L12 9C12.5571 8.25715 12.8964 7.37384 12.9798 6.44903C13.0632 5.52422 12.8874 4.59446 12.4721 3.76393C12.0569 2.9334 11.4185 2.23492 10.6287 1.74675C9.83879 1.25857 8.92857 1 8.00001 1C7.07145 1 6.16123 1.25857 5.37135 1.74675C4.58147 2.23492 3.94314 2.9334 3.52787 3.76393C3.11261 4.59446 2.93682 5.52422 3.02021 6.44903C3.1036 7.37384 3.44287 8.25715 4.00001 9L8.00001 14.31ZM6.33329 3.50559C6.82664 3.17595 7.40666 3 8 3C8.79565 3 9.55871 3.31607 10.1213 3.87868C10.6839 4.44129 11 5.20435 11 6C11 6.59334 10.8241 7.17336 10.4944 7.66671C10.1648 8.16006 9.69623 8.54458 9.14805 8.77164C8.59987 8.9987 7.99667 9.05811 7.41473 8.94236C6.83279 8.8266 6.29824 8.54088 5.87868 8.12132C5.45912 7.70176 5.1734 7.16721 5.05765 6.58527C4.94189 6.00333 5.0013 5.40013 5.22836 4.85195C5.45543 4.30377 5.83994 3.83524 6.33329 3.50559ZM6.88886 7.66294C7.21776 7.8827 7.60444 8 8 8C8.53043 8 9.03914 7.78929 9.41421 7.41421C9.78929 7.03914 10 6.53043 10 6C10 5.60444 9.8827 5.21776 9.66294 4.88886C9.44318 4.55996 9.13082 4.30362 8.76537 4.15224C8.39992 4.00087 7.99778 3.96126 7.60982 4.03843C7.22186 4.1156 6.86549 4.30608 6.58579 4.58579C6.30608 4.86549 6.1156 5.22186 6.03843 5.60982C5.96126 5.99778 6.00087 6.39991 6.15224 6.76537C6.30362 7.13082 6.55996 7.44318 6.88886 7.66294Z"
                                ></path>
                              </svg>
                            </span>
                            <div className="sc-eb953e09-6 fhigZi">
                              <span className="label">Find bathroom showrooms</span>
                            </div>
                          </Link>
                        </span>
                      </div>
                    </div>
                    <div
                      id="downshift-«R18ldb»-menu"
                      role="listbox"
                      aria-labelledby="downshift-«R18ldb»-label"
                      className="sc-c0aec0-0 fwGqIk"
                    >
                      <Link
                        className="sc-2097f723-0 gfpXHQ gtm-utm-ignored-link"
                        aria-label="Find bathroom showrooms"
                        tabIndex={-1}
                        aria-disabled="false"
                        aria-selected="false"
                        id="downshift-«R18ldb»-item-0"
                        role="option"
                        href="/find-dealer/showrooms/"
                      >
                        <span style={{ width: '1rem' }} className="sc-aXZVg dRbgvV icon first-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            <path d="M5 12.71L1 8.71L1.71 8L5 11.29L14.29 2L15 2.71L5 12.71Z"></path>
                          </svg>
                        </span>
                        Find bathroom showrooms
                      </Link>
                    </div>
                    <div className="sc-821ebc6d-8 cgoKAP">
                      <div className="sc-gFqAkR pBsox">
                        <div className="sc-821ebc6d-7 hfqKdm">
                          <Link
                            className="sc-28a4cd60-0 iGocAk gtm-utm-ignored-link"
                            aria-label="Find bathroom showrooms"
                            tabIndex={-1}
                            href="/find-dealer/showrooms/"
                          >
                            <span
                              style={{ width: '1rem' }}
                              className="sc-aXZVg dRbgvV icon first-icon"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                <path d="M5 12.71L1 8.71L1.71 8L5 11.29L14.29 2L15 2.71L5 12.71Z"></path>
                              </svg>
                            </span>
                            Find bathroom showrooms
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sc-eb953e09-5 jizqKn icons">
                    <div className="sc-eb953e09-8 MnrHO">
                      <div className="sc-eb953e09-4 inwfsW user-icon">
                        <div className="sc-sLsrZ fWhegE">
                          <span role="button" style={{ outline: 'none' }} tabIndex={0}>
                            <button className="sc-gEvEer gGbxpp" type="button" aria-label="">
                              <span style={{ width: '1rem' }} className="sc-aXZVg dRbgvV icon ">
                                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M5.77772 7.32588C6.43443 7.76468 7.20633 7.99923 7.99609 8H6C4.93913 8 3.92172 8.42143 3.17157 9.17157C2.42143 9.92172 2 10.9391 2 12V16H3V12C3 11.2044 3.31607 10.4413 3.87868 9.87868C4.44129 9.31607 5.20435 9 6 9H10C10.7956 9 11.5587 9.31607 12.1213 9.87868C12.6839 10.4413 13 11.2044 13 12V16H14V12C14 10.9391 13.5786 9.92172 12.8284 9.17157C12.0783 8.42143 11.0609 8 10 8H8.00391C9.06337 7.99897 10.0792 7.57765 10.8284 6.82843C11.5786 6.07828 12 5.06087 12 4C12 3.20888 11.7654 2.43552 11.3259 1.77772C10.8864 1.11992 10.2616 0.607234 9.53074 0.304484C8.79983 0.00173313 7.99556 -0.0774802 7.21964 0.0768607C6.44372 0.231202 5.73098 0.612165 5.17157 1.17157C4.61216 1.73098 4.2312 2.44372 4.07686 3.21964C3.92252 3.99556 4.00173 4.79983 4.30448 5.53074C4.60723 6.26164 5.11992 6.88635 5.77772 7.32588ZM6.33329 1.50559C6.82664 1.17595 7.40666 1 8 1C8.79565 1 9.55871 1.31607 10.1213 1.87868C10.6839 2.44129 11 3.20435 11 4C11 4.59335 10.8241 5.17337 10.4944 5.66671C10.1648 6.16006 9.69623 6.54458 9.14805 6.77164C8.59987 6.9987 7.99667 7.05811 7.41473 6.94236C6.83279 6.8266 6.29824 6.54088 5.87868 6.12132C5.45912 5.70176 5.1734 5.16722 5.05765 4.58527C4.94189 4.00333 5.0013 3.40013 5.22836 2.85195C5.45543 2.30377 5.83994 1.83524 6.33329 1.50559Z"
                                  ></path>
                                </svg>
                              </span>
                              <div className="sc-eb953e09-6 fhigZi">Login</div>
                            </button>
                            <div
                              hidden
                              aria-activedescendant=""
                              aria-controls="downshift-«R9oldb»-menu"
                              aria-expanded="false"
                              aria-haspopup="listbox"
                              aria-labelledby="downshift-«R9oldb»-label"
                              id="downshift-«R9oldb»-toggle-button"
                              role="combobox"
                              tabIndex={0}
                            ></div>
                          </span>
                        </div>
                      </div>
                      <div
                        id="downshift-«R9oldb»-menu"
                        role="listbox"
                        aria-labelledby="downshift-«R9oldb»-label"
                        className="sc-4b5a4535-0 ibLwzK"
                      >
                        <Link
                          className="sc-2097f723-0 fkMPpU gtm-utm-ignored-link"
                          tabIndex={-1}
                          aria-disabled="false"
                          aria-selected="false"
                          id="downshift-«R9oldb»-item-0"
                          role="option"
                          href=""
                        >
                          <span
                            style={{ width: '1rem' }}
                            className="sc-aXZVg dRbgvV icon first-icon"
                          >
                            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M5.77772 7.32588C6.43443 7.76468 7.20633 7.99923 7.99609 8H6C4.93913 8 3.92172 8.42143 3.17157 9.17157C2.42143 9.92172 2 10.9391 2 12V16H3V12C3 11.2044 3.31607 10.4413 3.87868 9.87868C4.44129 9.31607 5.20435 9 6 9H10C10.7956 9 11.5587 9.31607 12.1213 9.87868C12.6839 10.4413 13 11.2044 13 12V16H14V12C14 10.9391 13.5786 9.92172 12.8284 9.17157C12.0783 8.42143 11.0609 8 10 8H8.00391C9.06337 7.99897 10.0792 7.57765 10.8284 6.82843C11.5786 6.07828 12 5.06087 12 4C12 3.20888 11.7654 2.43552 11.3259 1.77772C10.8864 1.11992 10.2616 0.607234 9.53074 0.304484C8.79983 0.00173313 7.99556 -0.0774802 7.21964 0.0768607C6.44372 0.231202 5.73098 0.612165 5.17157 1.17157C4.61216 1.73098 4.2312 2.44372 4.07686 3.21964C3.92252 3.99556 4.00173 4.79983 4.30448 5.53074C4.60723 6.26164 5.11992 6.88635 5.77772 7.32588ZM6.33329 1.50559C6.82664 1.17595 7.40666 1 8 1C8.79565 1 9.55871 1.31607 10.1213 1.87868C10.6839 2.44129 11 3.20435 11 4C11 4.59335 10.8241 5.17337 10.4944 5.66671C10.1648 6.16006 9.69623 6.54458 9.14805 6.77164C8.59987 6.9987 7.99667 7.05811 7.41473 6.94236C6.83279 6.8266 6.29824 6.54088 5.87868 6.12132C5.45912 5.70176 5.1734 5.16722 5.05765 4.58527C4.94189 4.00333 5.0013 3.40013 5.22836 2.85195C5.45543 2.30377 5.83994 1.83524 6.33329 1.50559Z"
                              ></path>
                            </svg>
                          </span>
                          My profile
                        </Link>
                        <div className="sc-821ebc6d-5 flRCiV">
                          <hr className="sc-dtBdUo hiCRZc" />
                        </div>
                        <button
                          tabIndex={-1}
                          aria-disabled="false"
                          aria-selected="false"
                          id="downshift-«R9oldb»-item-1"
                          role="option"
                          className="sc-44675b79-0 fVIlkR"
                        >
                          <span
                            style={{ width: '1rem' }}
                            className="sc-aXZVg dRbgvV icon first-icon"
                          >
                            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M16 16H6V11H7V15H15V2H7V6H6V1H16V16ZM4.24 11.33L3.54 12.04L0 8.49999L3.54 4.95999L4.24 5.66999L1.91 7.99999H12V8.99999H1.91L4.24 11.33Z"
                              ></path>
                            </svg>
                          </span>
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
                  <button className="sc-gEvEer bngqul sc-821ebc6d-4 PvzvN" type="button">
                    Product Catalogue
                  </button>
                  <div className="sc-eb953e09-4 inwfsW close-icon">
                    <button className="sc-gEvEer fkdofr menu-button" type="button">
                      <span style={{ width: '1rem' }} className="sc-aXZVg dRbgvV icon ">
                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15 3H1V4H15V3ZM15 8H1V9H15V8ZM1 13H15V14H1V13Z"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="sc-e5ce6e88-0 dwrTHV"></div>
          <div className="sc-e5ce6e88-1 iXbDnK">
            <div className="sc-587a74fb-0 hvXFzQ">
              <div className="sc-gFqAkR pBsox">
                <ul className="sc-2abe06a4-0 bbOiuQ">
                  <div className="sc-821ebc6d-6 eMqlDi">
                    <li className="sc-821ebc6d-1 hkLOLM">
                      <Link className="sc-5b3e516d-0 dJecPp gtm-utm-ignored-link" href="#">
                        <span className="label">Bathroom Products</span>
                        <span style={{ width: '1rem' }} className="sc-aXZVg dRbgvV icon last-icon">
                          <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.29 8.00001L4.79001 13.5L5.50001 14.21L11.71 8.00001L5.50001 1.79001L4.79001 2.50001L10.29 8.00001Z"></path>
                          </svg>
                        </span>
                      </Link>
                    </li>
                    <li className="sc-821ebc6d-1 hkLOLM">
                      <Link className="sc-5b3e516d-0 dJecPp gtm-utm-ignored-link" href="#">
                        <span className="label">Sanitary &amp; Piping Systems</span>
                        <span style={{ width: '1rem' }} className="sc-aXZVg dRbgvV icon last-icon">
                          <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.29 8.00001L4.79001 13.5L5.50001 14.21L11.71 8.00001L5.50001 1.79001L4.79001 2.50001L10.29 8.00001Z"></path>
                          </svg>
                        </span>
                      </Link>
                    </li>
                    <li className="sc-821ebc6d-1 hkLOLM">
                      <Link className="sc-5b3e516d-0 dJecPp gtm-utm-ignored-link" href="#">
                        <span className="label">Know-how</span>
                        <span style={{ width: '1rem' }} className="sc-aXZVg dRbgvV icon last-icon">
                          <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.29 8.00001L4.79001 13.5L5.50001 14.21L11.71 8.00001L5.50001 1.79001L4.79001 2.50001L10.29 8.00001Z"></path>
                          </svg>
                        </span>
                      </Link>
                    </li>
                    <li className="sc-821ebc6d-1 hkLOLM">
                      <Link className="sc-5b3e516d-0 dJecPp gtm-utm-ignored-link" href="#">
                        <span className="label">Service &amp; Support</span>
                        <span style={{ width: '1rem' }} className="sc-aXZVg dRbgvV icon last-icon">
                          <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.29 8.00001L4.79001 13.5L5.50001 14.21L11.71 8.00001L5.50001 1.79001L4.79001 2.50001L10.29 8.00001Z"></path>
                          </svg>
                        </span>
                      </Link>
                    </li>
                    <li className="sc-821ebc6d-1 hkLOLM">
                      <Link className="sc-5b3e516d-0 dJecPp gtm-utm-ignored-link" href="#">
                        <span className="label">Trainings &amp; Events</span>
                        <span style={{ width: '1rem' }} className="sc-aXZVg dRbgvV icon last-icon">
                          <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.29 8.00001L4.79001 13.5L5.50001 14.21L11.71 8.00001L5.50001 1.79001L4.79001 2.50001L10.29 8.00001Z"></path>
                          </svg>
                        </span>
                      </Link>
                    </li>
                  </div>
                </ul>
                <ul className="sc-42f4379a-1 hRofbz first-level">
                  <li className="sc-821ebc6d-1 hkLOLM">
                    <Link className="sc-955e2100-0 kJMsPW gtm-utm-ignored-link" href="#">
                      Bathroom Products
                    </Link>
                    <div className="sc-42f4379a-2 iyEqST"></div>
                  </li>
                  <li className="sc-821ebc6d-1 hkLOLM">
                    <Link className="sc-955e2100-0 kJMsPW gtm-utm-ignored-link" href="#">
                      Sanitary &amp; Piping Systems
                    </Link>
                    <div className="sc-42f4379a-2 iyEqST"></div>
                  </li>
                  <li className="sc-821ebc6d-1 hkLOLM">
                    <Link className="sc-955e2100-0 kJMsPW gtm-utm-ignored-link" href="#">
                      Know-how
                    </Link>
                    <div className="sc-42f4379a-2 iyEqST"></div>
                  </li>
                  <li className="sc-821ebc6d-1 hkLOLM">
                    <Link className="sc-955e2100-0 kJMsPW gtm-utm-ignored-link" href="#">
                      Service &amp; Support
                    </Link>
                    <div className="sc-42f4379a-2 iyEqST"></div>
                  </li>
                  <li className="sc-821ebc6d-1 hkLOLM">
                    <Link className="sc-955e2100-0 kJMsPW gtm-utm-ignored-link" href="#">
                      Trainings &amp; Events
                    </Link>
                    <div className="sc-42f4379a-2 iyEqST"></div>
                  </li>
                </ul>
                <div className="sc-8671e318-0 KTZOk" style={{ left: '0px', width: '0px;' }}></div>
              </div>
              <div className="sc-eb953e09-11 jA-dEPF">
                <div className="sc-eb953e09-12 llTAjB">
                  <div className="sc-gFqAkR pBsox">
                    <span className="sc-eb953e09-13 hhHhqc">
                      <button className="sc-gEvEer fkdofr" type="button">
                        <span style={{ width: '1rem' }} className="sc-aXZVg dRbgvV icon ">
                          <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.66 1.64L8.00001 7.29L2.34001 1.64L1.64001 2.34L7.29001 8L1.64001 13.66L2.34001 14.36L8.00001 8.71L13.66 14.36L14.36 13.66L8.71001 8L14.36 2.34L13.66 1.64Z"></path>
                          </svg>
                        </span>
                      </button>
                    </span>
                    <div className="sc-587a74fb-2 bGWSFJ">
                      <div className="sc-587a74fb-1 eyicku">
                        <div className="sc-d464b8f3-0 cvGnjx">
                          <input
                            className="sc-d464b8f3-1 kHQuJG desktop-search"
                            placeholder="What are you looking for?"
                            autoFocus
                            value=""
                          />
                          <span
                            style={{ width: '1rem' }}
                            className="sc-aXZVg dRbgvV icon sc-d464b8f3-5 izVVYd"
                          >
                            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.35 14.65L10.58 9.87002C11.579 8.68782 12.0826 7.16527 11.9854 5.62053C11.8882 4.07578 11.1978 2.62835 10.0585 1.58068C8.91916 0.533009 7.41904 -0.0338427 5.87157 -0.00142934C4.32411 0.030984 2.84904 0.660154 1.75458 1.75461C0.660123 2.84907 0.0309535 4.32414 -0.00145986 5.87161C-0.0338732 7.41907 0.532978 8.91919 1.58065 10.0585C2.62832 11.1978 4.07575 11.8882 5.6205 11.9854C7.16524 12.0826 8.68779 11.5791 9.86999 10.58L14.65 15.35L15.35 14.65ZM5.99999 11C5.01108 11 4.04438 10.7068 3.22214 10.1574C2.39989 9.60796 1.75903 8.82707 1.38059 7.91343C1.00215 6.9998 0.903134 5.99447 1.09606 5.02457C1.28899 4.05466 1.76519 3.16375 2.46445 2.46448C3.16372 1.76522 4.05463 1.28902 5.02454 1.09609C5.99444 0.903165 6.99977 1.00218 7.9134 1.38062C8.82703 1.75906 9.60793 2.39992 10.1573 3.22217C10.7067 4.04441 11 5.01111 11 6.00002C11 7.3261 10.4732 8.59787 9.53552 9.53555C8.59784 10.4732 7.32607 11 5.99999 11Z"></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sc-6df84c7d-0 kkEfFy">
              <div className="sc-821ebc6d-6 eMqlDi">
                <div className="sc-gFqAkR pBsox">
                  <div className="sc-86e8dd6c-0 kSknSn">
                    <Link
                      className="sc-28a4cd60-0 ZgqtA trigger gtm-utm-ignored-link"
                      aria-label="Find bathroom showrooms"
                      href="/find-dealer/showrooms/"
                    >
                      <span style={{ width: '1rem' }} className="sc-aXZVg dRbgvV icon first-icon">
                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.75737 1.75736C4.88259 0.632141 6.40871 0 8.00001 0C9.59131 0 11.1174 0.632141 12.2427 1.75736C13.3679 2.88258 14 4.4087 14 6C14.0023 7.29714 13.577 8.55888 12.79 9.59L8.00001 16L3.21001 9.59C2.423 8.55888 1.99774 7.29714 2.00001 6C2.00001 4.4087 2.63215 2.88258 3.75737 1.75736ZM8.00001 14.31L12 9C12.5571 8.25715 12.8964 7.37384 12.9798 6.44903C13.0632 5.52422 12.8874 4.59446 12.4721 3.76393C12.0569 2.9334 11.4185 2.23492 10.6287 1.74675C9.83879 1.25857 8.92857 1 8.00001 1C7.07145 1 6.16123 1.25857 5.37135 1.74675C4.58147 2.23492 3.94314 2.9334 3.52787 3.76393C3.11261 4.59446 2.93682 5.52422 3.02021 6.44903C3.1036 7.37384 3.44287 8.25715 4.00001 9L8.00001 14.31ZM6.33329 3.50559C6.82664 3.17595 7.40666 3 8 3C8.79565 3 9.55871 3.31607 10.1213 3.87868C10.6839 4.44129 11 5.20435 11 6C11 6.59334 10.8241 7.17336 10.4944 7.66671C10.1648 8.16006 9.69623 8.54458 9.14805 8.77164C8.59987 8.9987 7.99667 9.05811 7.41473 8.94236C6.83279 8.8266 6.29824 8.54088 5.87868 8.12132C5.45912 7.70176 5.1734 7.16721 5.05765 6.58527C4.94189 6.00333 5.0013 5.40013 5.22836 4.85195C5.45543 4.30377 5.83994 3.83524 6.33329 3.50559ZM6.88886 7.66294C7.21776 7.8827 7.60444 8 8 8C8.53043 8 9.03914 7.78929 9.41421 7.41421C9.78929 7.03914 10 6.53043 10 6C10 5.60444 9.8827 5.21776 9.66294 4.88886C9.44318 4.55996 9.13082 4.30362 8.76537 4.15224C8.39992 4.00087 7.99778 3.96126 7.60982 4.03843C7.22186 4.1156 6.86549 4.30608 6.58579 4.58579C6.30608 4.86549 6.1156 5.22186 6.03843 5.60982C5.96126 5.99778 6.00087 6.39991 6.15224 6.76537C6.30362 7.13082 6.55996 7.44318 6.88886 7.66294Z"
                          ></path>
                        </svg>
                      </span>
                      <span className="label">Find bathroom showrooms</span>
                    </Link>
                    <div className="sc-821ebc6d-5 flRCiV">
                      <hr className="sc-dtBdUo hiCRZc" />
                    </div>
                  </div>
                  <div className="sc-6df84c7d-1 kGearL">
                    <button className="sc-44675b79-0 fVIlkR">
                      <span style={{ width: '1rem' }} className="sc-aXZVg dRbgvV icon first-icon">
                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.77772 7.32588C6.43443 7.76468 7.20633 7.99923 7.99609 8H6C4.93913 8 3.92172 8.42143 3.17157 9.17157C2.42143 9.92172 2 10.9391 2 12V16H3V12C3 11.2044 3.31607 10.4413 3.87868 9.87868C4.44129 9.31607 5.20435 9 6 9H10C10.7956 9 11.5587 9.31607 12.1213 9.87868C12.6839 10.4413 13 11.2044 13 12V16H14V12C14 10.9391 13.5786 9.92172 12.8284 9.17157C12.0783 8.42143 11.0609 8 10 8H8.00391C9.06337 7.99897 10.0792 7.57765 10.8284 6.82843C11.5786 6.07828 12 5.06087 12 4C12 3.20888 11.7654 2.43552 11.3259 1.77772C10.8864 1.11992 10.2616 0.607234 9.53074 0.304484C8.79983 0.00173313 7.99556 -0.0774802 7.21964 0.0768607C6.44372 0.231202 5.73098 0.612165 5.17157 1.17157C4.61216 1.73098 4.2312 2.44372 4.07686 3.21964C3.92252 3.99556 4.00173 4.79983 4.30448 5.53074C4.60723 6.26164 5.11992 6.88635 5.77772 7.32588ZM6.33329 1.50559C6.82664 1.17595 7.40666 1 8 1C8.79565 1 9.55871 1.31607 10.1213 1.87868C10.6839 2.44129 11 3.20435 11 4C11 4.59335 10.8241 5.17337 10.4944 5.66671C10.1648 6.16006 9.69623 6.54458 9.14805 6.77164C8.59987 6.9987 7.99667 7.05811 7.41473 6.94236C6.83279 6.8266 6.29824 6.54088 5.87868 6.12132C5.45912 5.70176 5.1734 5.16722 5.05765 4.58527C4.94189 4.00333 5.0013 3.40013 5.22836 2.85195C5.45543 2.30377 5.83994 1.83524 6.33329 1.50559Z"
                          ></path>
                        </svg>
                      </span>
                      Login
                    </button>
                  </div>
                  <button className="sc-gEvEer ljAFzM sc-821ebc6d-4 hPUDx" type="button">
                    Product Catalogue
                  </button>
                  <ul className="sc-6df84c7d-2 kxtfEE">
                    <li className="sc-821ebc6d-1 hkLOLM">
                      <Link
                        className="sc-28a4cd60-0 jaagoI gtm-utm-ignored-link"
                        target="_self"
                        href="/service-support/contact/"
                      >
                        Contact
                      </Link>
                    </li>
                    <li className="sc-821ebc6d-1 hkLOLM">
                      <Link
                        className="sc-28a4cd60-0 jaagoI gtm-utm-ignored-link"
                        target="_self"
                        href="/about-us/"
                      >
                        About us
                      </Link>
                    </li>
                    <li className="sc-821ebc6d-1 hkLOLM">
                      <Link
                        className="sc-28a4cd60-0 jaagoI gtm-utm-ignored-link"
                        target="_self"
                        href="/career/"
                      >
                        Careers
                      </Link>
                    </li>
                    <li className="sc-821ebc6d-1 hkLOLM">
                      <Link
                        className="sc-28a4cd60-0 jaagoI gtm-utm-ignored-link"
                        target="_self"
                        href="/media/press/"
                      >
                        Media
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="sc-86e8dd6c-1 gHVWEl">
                <div className="sc-821ebc6d-7 hfqKdm">
                  <div className="sc-gFqAkR pBsox">
                    <div className="sc-4b5a4535-0 ibLwzK">
                      <Link className="sc-28a4cd60-0 ZgqtA gtm-utm-ignored-link" href="">
                        <span style={{ width: '1rem' }} className="sc-aXZVg dRbgvV icon first-icon">
                          <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M5.77772 7.32588C6.43443 7.76468 7.20633 7.99923 7.99609 8H6C4.93913 8 3.92172 8.42143 3.17157 9.17157C2.42143 9.92172 2 10.9391 2 12V16H3V12C3 11.2044 3.31607 10.4413 3.87868 9.87868C4.44129 9.31607 5.20435 9 6 9H10C10.7956 9 11.5587 9.31607 12.1213 9.87868C12.6839 10.4413 13 11.2044 13 12V16H14V12C14 10.9391 13.5786 9.92172 12.8284 9.17157C12.0783 8.42143 11.0609 8 10 8H8.00391C9.06337 7.99897 10.0792 7.57765 10.8284 6.82843C11.5786 6.07828 12 5.06087 12 4C12 3.20888 11.7654 2.43552 11.3259 1.77772C10.8864 1.11992 10.2616 0.607234 9.53074 0.304484C8.79983 0.00173313 7.99556 -0.0774802 7.21964 0.0768607C6.44372 0.231202 5.73098 0.612165 5.17157 1.17157C4.61216 1.73098 4.2312 2.44372 4.07686 3.21964C3.92252 3.99556 4.00173 4.79983 4.30448 5.53074C4.60723 6.26164 5.11992 6.88635 5.77772 7.32588ZM6.33329 1.50559C6.82664 1.17595 7.40666 1 8 1C8.79565 1 9.55871 1.31607 10.1213 1.87868C10.6839 2.44129 11 3.20435 11 4C11 4.59335 10.8241 5.17337 10.4944 5.66671C10.1648 6.16006 9.69623 6.54458 9.14805 6.77164C8.59987 6.9987 7.99667 7.05811 7.41473 6.94236C6.83279 6.8266 6.29824 6.54088 5.87868 6.12132C5.45912 5.70176 5.1734 5.16722 5.05765 4.58527C4.94189 4.00333 5.0013 3.40013 5.22836 2.85195C5.45543 2.30377 5.83994 1.83524 6.33329 1.50559Z"
                            ></path>
                          </svg>
                        </span>
                        My profile
                      </Link>
                      <div className="sc-821ebc6d-5 flRCiV">
                        <hr className="sc-dtBdUo hiCRZc" />
                      </div>
                      <button className="sc-44675b79-0 fVIlkR">
                        <span style={{ width: '1rem' }} className="sc-aXZVg dRbgvV icon first-icon">
                          <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M16 16H6V11H7V15H15V2H7V6H6V1H16V16ZM4.24 11.33L3.54 12.04L0 8.49999L3.54 4.95999L4.24 5.66999L1.91 7.99999H12V8.99999H1.91L4.24 11.33Z"
                            ></path>
                          </svg>
                        </span>
                        Logout
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
        className={`component header-top py-2 border-bottom ${props.params.styles}`}
        key={id ? id : undefined}
        id={id ? id : undefined}
      >
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={4}>
              <Placeholder name={phKeyLogo} rendering={props.rendering} />
            </Col>
            <Col xs={12} md={8}>
              <div className="d-flex justify-content-end align-items-center">
                <Placeholder name={phKeyLanguageSwitcher} rendering={props.rendering} />
                <Placeholder name={phKeyTopMenu} rendering={props.rendering} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );

  return <HeaderTopDefaultComponent {...props} />;
};
