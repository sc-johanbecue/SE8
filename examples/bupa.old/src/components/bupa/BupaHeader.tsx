'use client';

import React, { JSX } from 'react';
import {
  ComponentParams,
  ComponentRendering,
  Item,
  Image as JssImage,
  Link as JssLink,
  RichTextField,
  TextField,
  type Field,
  type ImageField,
  type LinkField,
} from '@sitecore-content-sdk/nextjs';

type SubMenuItem = Item & {
  fields: {
    title: TextField;
    link: LinkField;
  };
};

type NavigationItem = Item & {
  fields: {
    title: TextField;
    link: LinkField;
    hasSubmenu: Field<boolean>;
    submenuTitle?: TextField;
    submenuDescription?: RichTextField;
    submenuCategories?: SubMenuItem[];
    submenuTrending?: SubMenuItem[];
  };
};

type HeaderFields = {
  Logo: ImageField;
  FacilitiesFinderLink: LinkField;
  GetQuoteLink: LinkField;
  ContactUsLink: LinkField;
  languageSelector: Field<string>;
  MyAccountLink: LinkField;
  navigationLinks: NavigationItem[];
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: HeaderFields;
};

/**
 * Header Component
 * Inspired by Bupa Global's navigation header with top utility bar and mega menu
 */
export const Default = (props: ComponentProps): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [openSubmenu, setOpenSubmenu] = React.useState<number | null>(null);
  const [mobileOpenSubmenu, setMobileOpenSubmenu] = React.useState<number | null>(null);

  const handleMenuClick = (index: number, hasSubmenu: boolean) => {
    if (hasSubmenu) {
      setOpenSubmenu(openSubmenu === index ? null : index);
    }
  };

  const handleMobileSubmenuClick = (index: number) => {
    setMobileOpenSubmenu(mobileOpenSubmenu === index ? null : index);
  };

  return (
    <header className="text-white sticky top-0 z-50">
      <div className="hidden lg:block bg-[#001F54]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo on the left */}
            <div className="flex-shrink-0">
              <JssLink field={{ value: { href: '/', text: 'Home' } }}>
                <JssImage field={props.fields.Logo} className="h-12 w-auto" />
              </JssLink>
            </div>

            {/* Action buttons on the right */}
            <div className="flex items-center gap-4">
              <JssLink
                field={props.fields.FacilitiesFinderLink}
                className="text-sm text-white hover:text-gray-200 transition-colors px-6 py-2.5 border border-white rounded"
              />
              <JssLink
                field={props.fields.GetQuoteLink}
                className="text-sm bg-[#0091DA] text-white hover:bg-[#007AB8] transition-colors px-6 py-2.5 rounded font-semibold"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0091DA]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="lg:hidden flex-shrink-0">
              <JssLink field={{ value: { href: '/', text: 'Home' } }}>
                <JssImage field={props.fields.Logo} className="h-10 w-auto" />
              </JssLink>
            </div>

            {/* Desktop Navigation - Left side */}
            <nav className="hidden lg:flex items-center gap-1 flex-1">
              {props.fields.navigationLinks?.map((navItem, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => navItem.fields.hasSubmenu?.value && setOpenSubmenu(index)}
                  onMouseLeave={() => setOpenSubmenu(null)}
                >
                  <button
                    onClick={() =>
                      handleMenuClick(index, navItem.fields.hasSubmenu?.value || false)
                    }
                    className="text-white hover:bg-[#007AB8] transition-colors font-medium flex items-center gap-1 px-4 py-3 text-sm cursor-pointer"
                  >
                    {navItem.fields.title.value}
                    {navItem.fields.hasSubmenu?.value && (
                      <svg
                        className={`w-4 h-4 transition-transform ${openSubmenu === index ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </button>

                  {navItem.fields.hasSubmenu?.value && openSubmenu === index && (
                    <div className="fixed left-1/2 -translate-x-1/2 top-[8.5rem] w-[900px] bg-white rounded-2xl shadow-2xl p-8 text-gray-900">
                      <div className="grid grid-cols-[280px_1fr] gap-8">
                        {/* Left side - Icon, title and description */}
                        <div className="pr-6">
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-12 h-12 bg-[#0091DA] rounded-full flex items-center justify-center flex-shrink-0">
                              <svg
                                className="w-7 h-7 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                              </svg>
                            </div>
                          </div>
                          <h3 className="text-2xl font-bold text-[#003087] mb-3">
                            {navItem.fields.submenuTitle?.value || navItem.fields.title.value}
                          </h3>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            {navItem.fields.submenuDescription?.value}
                          </p>
                        </div>

                        {/* Right side - Two columns of links */}
                        <div className="grid grid-cols-2 gap-12 border-l border-gray-200 pl-8">
                          {/* What matters most to you? column */}
                          {navItem.fields.submenuCategories &&
                            navItem.fields.submenuCategories.length > 0 && (
                              <div>
                                <h4 className="text-base font-bold text-[#003087] mb-4">
                                  What matters most to you?
                                </h4>
                                <ul className="space-y-3">
                                  {navItem.fields.submenuCategories.map((item, idx) => (
                                    <li key={idx}>
                                      <JssLink
                                        field={item.fields.link}
                                        className="text-[#0091DA] hover:underline text-sm block"
                                      />
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                          {/* Types of cover column */}
                          {navItem.fields.submenuTrending &&
                            navItem.fields.submenuTrending.length > 0 && (
                              <div>
                                <h4 className="text-base font-bold text-[#003087] mb-4">
                                  Types of cover
                                </h4>
                                <ul className="space-y-3">
                                  {navItem.fields.submenuTrending.map((item, idx) => (
                                    <li key={idx}>
                                      <JssLink
                                        field={item.fields.link}
                                        className="text-[#0091DA] hover:underline text-sm block"
                                      />
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-6">
              <JssLink
                field={props.fields.ContactUsLink}
                className="text-white hover:bg-[#007AB8] transition-colors text-sm flex items-center gap-2 px-3 py-2 rounded"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {props.fields.ContactUsLink.value.text}
              </JssLink>

              <button className="text-white hover:bg-[#007AB8] transition-colors text-sm flex items-center gap-2 px-3 py-2 rounded">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {props.fields.languageSelector?.value || 'EN'}
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <JssLink
                field={props.fields.MyAccountLink}
                className="text-white hover:bg-[#007AB8] transition-colors text-sm flex items-center gap-2 px-3 py-2 rounded"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                {props.fields.MyAccountLink.value.text}
              </JssLink>
            </div>

            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-[#001F54] z-50 overflow-y-auto">
          <div className="flex flex-col h-full">
            {/* Mobile menu header */}
            <div className="flex items-center justify-between p-4 border-b border-blue-900">
              <JssLink field={{ value: { href: '/', text: 'Home' } }}>
                <JssImage field={props.fields.Logo} className="h-10 w-auto" />
              </JssLink>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-white"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile navigation items with accordion */}
            <nav className="flex-1 overflow-y-auto">
              {props.fields.navigationLinks?.map((navItem, index) => (
                <div key={index} className="border-b border-blue-900">
                  <button
                    onClick={() => handleMobileSubmenuClick(index)}
                    className="w-full flex items-center justify-between p-4 text-white text-lg font-semibold hover:bg-blue-900 transition-colors"
                  >
                    {navItem.fields.title.value}
                    {navItem.fields.hasSubmenu?.value && (
                      <svg
                        className={`w-5 h-5 transition-transform ${mobileOpenSubmenu === index ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </button>

                  {/* Submenu content - shown when accordion is open */}
                  {navItem.fields.hasSubmenu?.value && mobileOpenSubmenu === index && (
                    <div className="bg-[#002B5C] p-4 space-y-4">
                      {navItem.fields.submenuCategories &&
                        navItem.fields.submenuCategories.length > 0 && (
                          <div>
                            <h4 className="text-sm font-semibold text-gray-300 mb-2">
                              What matters most to you?
                            </h4>
                            <ul className="space-y-2">
                              {navItem.fields.submenuCategories.map((item, idx) => (
                                <li key={idx}>
                                  <JssLink
                                    field={item.fields.link}
                                    className="text-[#0091DA] hover:underline text-sm block"
                                  />
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                      {navItem.fields.submenuTrending &&
                        navItem.fields.submenuTrending.length > 0 && (
                          <div>
                            <h4 className="text-sm font-semibold text-gray-300 mb-2">
                              Types of cover
                            </h4>
                            <ul className="space-y-2">
                              {navItem.fields.submenuTrending.map((item, idx) => (
                                <li key={idx}>
                                  <JssLink
                                    field={item.fields.link}
                                    className="text-[#0091DA] hover:underline text-sm block"
                                  />
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile utility links and buttons at bottom */}
            <div className="border-t border-blue-900 bg-white p-4 space-y-3">
              <JssLink
                field={props.fields.ContactUsLink}
                className="flex items-center gap-3 text-gray-700 hover:text-gray-900 py-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {props.fields.ContactUsLink.value.text}
              </JssLink>

              <button className="flex items-center justify-between w-full text-gray-700 hover:text-gray-900 py-2">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012-2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{props.fields.languageSelector?.value || 'EN'}</span>
                </div>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <JssLink
                field={props.fields.MyAccountLink}
                className="flex items-center gap-3 text-gray-700 hover:text-gray-900 py-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                {props.fields.MyAccountLink.value.text}
              </JssLink>

              <JssLink
                field={props.fields.FacilitiesFinderLink}
                className="flex items-center justify-center gap-2 w-full py-3 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {props.fields.FacilitiesFinderLink.value.text}
              </JssLink>

              <JssLink
                field={props.fields.GetQuoteLink}
                className="flex items-center justify-center w-full py-3 bg-[#0091DA] text-white rounded font-semibold hover:bg-[#007AB8] transition-colors"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
