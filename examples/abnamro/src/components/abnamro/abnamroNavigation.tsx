'use client';
import React, { JSX } from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, ChevronRight, Search, User, Menu, X, ChevronLeft, Lock } from 'lucide-react';
import { ComponentParams, ComponentRendering } from '@sitecore-content-sdk/nextjs';

type MenuItem4thLevel = {
  label: string;
  href: string;
};

type MenuItem3rdLevel = {
  title: string;
  items: MenuItem4thLevel[];
};

type MenuItem2ndLevel = {
  label: string;
  href: string;
  subItems?: MenuItem3rdLevel[];
  image?: {
    src: string;
    alt: string;
    title: string;
    description: string;
  };
};

type MegaMenuData = {
  secondLevelItems: MenuItem2ndLevel[];
};

type Fields = {
  logo: {
    src: string;
    alt: string;
    href?: string;
  };
  utilityLinks: Array<{
    label: string;
    href: string;
    variant?: 'default' | 'outlined';
  }>;
  loginButton: {
    label: string;
    href: string;
  };
  mainNavItems: Array<{
    label: string;
    href: string;
    hasDropdown?: boolean;
    megaMenu?: MegaMenuData;
  }>;
};

const fields = {
  logo: {
    src: '/abn-amro-logo.svg',
    alt: 'ABN AMRO',
    href: '/',
  },
  utilityLinks: [
    { label: 'Privé', href: '/prive', variant: 'outlined' as const },
    { label: 'Zakelijk', href: '/zakelijk' },
    { label: 'Private banking', href: '#' },
  ],
  loginButton: {
    label: 'Inloggen',
    href: '#',
  },
  mainNavItems: [
    {
      label: 'Home',
      href: '/',
      hasDropdown: false,
    },
    {
      label: 'Producten',
      href: '#',
      hasDropdown: true,
      megaMenu: {
        secondLevelItems: [
          {
            label: 'Betalen & Creditcards',
            href: '#',
            subItems: [
              {
                title: 'Betalen',
                items: [
                  { label: 'Betaalrekening', href: '#' },
                  { label: 'Betaalpas', href: '#' },
                  { label: 'Creditcard', href: '#' },
                ],
              },
            ],
          },
          {
            label: 'Hypotheken',
            href: '#',
            subItems: [
              {
                title: 'Hypotheek',
                items: [
                  { label: 'Hypotheek afsluiten', href: '#' },
                  { label: 'Hypotheek oversluiten', href: '#' },
                  { label: 'Extra aflossen', href: '#' },
                ],
              },
            ],
          },
        ],
      },
    },
    {
      label: 'Je situatie',
      href: '#',
      hasDropdown: true,
      megaMenu: {
        secondLevelItems: [
          {
            label: 'Familie & relaties',
            href: '#',
            subItems: [
              {
                title: 'Gezin',
                items: [
                  { label: 'Kinderen krijgen', href: '#' },
                  { label: 'Financiële opvoeding', href: '#' },
                  { label: 'Studeren', href: '#' },
                ],
              },
              {
                title: 'Relatie',
                items: [
                  { label: 'Samenwonen', href: '#' },
                  { label: 'Trouwen', href: '#' },
                  { label: 'Uit elkaar', href: '#' },
                ],
              },
            ],
          },
          {
            label: 'Wonen',
            href: '#',
            subItems: [
              {
                title: 'Huis kopen',
                items: [
                  { label: 'Eerste huis kopen', href: '#' },
                  { label: 'Verhuizen', href: '#' },
                  { label: 'Hypotheek afsluiten', href: '#' },
                ],
              },
              {
                title: 'Verbouwen',
                items: [
                  { label: 'Verbouwing financieren', href: '#' },
                  { label: 'Verduurzamen', href: '#' },
                ],
              },
            ],
          },
          {
            label: 'Studeren & Werken',
            href: '#',
            subItems: [
              {
                title: 'Studeren',
                items: [
                  { label: 'Studierekening', href: '#' },
                  { label: 'Studiefinanciering', href: '#' },
                  { label: 'Studeren in het buitenland', href: '#' },
                ],
              },
              {
                title: 'Werken',
                items: [
                  { label: 'Eerste baan', href: '#' },
                  { label: 'Carrière maken', href: '#' },
                  { label: 'Eigen bedrijf starten', href: '#' },
                ],
              },
            ],
          },
          {
            label: 'Preferred Banking',
            href: '#',
            subItems: [
              {
                title: 'Preferred Banking',
                items: [
                  { label: 'Alles over Preferred Banking', href: '#' },
                  { label: 'Klant worden', href: '#' },
                  { label: 'Persoonlijk contact', href: '#' },
                  { label: 'Actuele inspiratie en tips', href: '#' },
                  { label: 'Exclusieve voordelen', href: '#' },
                  { label: 'Over Preferred Banking', href: '#' },
                ],
              },
              {
                title: 'Vermogen',
                items: [
                  { label: 'Inzicht in je vermogen', href: '#' },
                  { label: 'Vermogen beleggen', href: '#' },
                  { label: 'Vermogen laten beheren', href: '#' },
                  { label: 'Schenken en nalaten', href: '#' },
                  { label: 'Private Banking', href: '#' },
                ],
              },
            ],
            image: {
              src: '/preferred-banking-illustration.jpg',
              alt: 'Preferred Banking',
              title: 'Preferred Banking',
              description: 'Haal meer uit je geld dankzij persoonlijk contact met een adviseur',
            },
          },
          {
            label: 'Senioren',
            href: '#',
            subItems: [
              {
                title: 'Pensioen',
                items: [
                  { label: 'Pensioen regelen', href: '#' },
                  { label: 'AOW aanvragen', href: '#' },
                  { label: 'Pensioen aanvullen', href: '#' },
                ],
              },
              {
                title: 'Later',
                items: [
                  { label: 'Nalatenschap regelen', href: '#' },
                  { label: 'Testament maken', href: '#' },
                ],
              },
            ],
          },
          {
            label: 'Ondernemers & medici',
            href: '#',
            subItems: [
              {
                title: 'Ondernemen',
                items: [
                  { label: 'Bedrijf starten', href: '#' },
                  { label: 'Zakelijke rekening', href: '#' },
                  { label: 'Zakelijk financieren', href: '#' },
                ],
              },
            ],
          },
          {
            label: 'Speciaal voor',
            href: '#',
            subItems: [
              {
                title: 'Doelgroepen',
                items: [
                  { label: 'Jongeren', href: '#' },
                  { label: 'Studenten', href: '#' },
                  { label: 'Expats', href: '#' },
                ],
              },
            ],
          },
        ],
      },
    },
    {
      label: 'App en Internet Bankieren',
      href: '#',
      hasDropdown: true,
      megaMenu: {
        secondLevelItems: [
          {
            label: 'Internet Bankieren',
            href: '#',
            subItems: [
              {
                title: 'Online bankieren',
                items: [
                  { label: 'Inloggen', href: '#' },
                  { label: 'Overzicht', href: '#' },
                  { label: 'Betalen', href: '#' },
                ],
              },
            ],
          },
          {
            label: 'Mobiel Bankieren',
            href: '#',
            subItems: [
              {
                title: 'Apps',
                items: [
                  { label: 'ABN AMRO app', href: '#' },
                  { label: 'Grip app', href: '#' },
                  { label: 'Tikkie', href: '#' },
                ],
              },
            ],
          },
        ],
      },
    },
    {
      label: 'Service en Contact',
      href: '#',
      hasDropdown: false,
    },
  ],
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDesktopMenu, setActiveDesktopMenu] = useState<number | null>(null);
  const [selectedSecondLevel, setSelectedSecondLevel] = useState<number | null>(null);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<number | null>(null);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [privateDropdownOpen, setPrivateDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveMobileSubmenu(null);
  };

  const toggleDesktopMenu = (index: number) => {
    if (activeDesktopMenu === index) {
      setActiveDesktopMenu(null);
      setSelectedSecondLevel(null);
    } else {
      setActiveDesktopMenu(index);
      setSelectedSecondLevel(null);
    }
  };

  const closeDesktopMenu = () => {
    setActiveDesktopMenu(null);
    setSelectedSecondLevel(null);
  };

  const toggleMobileSubmenu = (index: number) => {
    setActiveMobileSubmenu(activeMobileSubmenu === index ? null : index);
  };

  const closeMobileSubmenu = () => {
    setActiveMobileSubmenu(null);
  };

  const handleSecondLevelHover = (index: number) => {
    setSelectedSecondLevel(index);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50" key={id}>
      {/* Mobile Header - Two rows */}
      <div className="lg:hidden">
        {/* Top row - NL dropdown (left) and Privé dropdown (right) */}
        <div className="flex items-center justify-between px-4 h-12 border-b border-gray-200">
          {/* NL Language dropdown */}
          <div className="relative">
            <button
              onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
              className="flex items-center gap-1 text-sm font-semibold text-[#00716B] hover:text-[#005952]"
            >
              <ChevronDown className="w-4 h-4" />
              NL
            </button>

            {languageDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setLanguageDropdownOpen(false)}
                />
                <div className="absolute top-full left-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg z-50">
                  <Link
                    href="/en"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 border-b border-gray-200"
                    onClick={() => setLanguageDropdownOpen(false)}
                  >
                    English
                  </Link>
                  <Link
                    href="/nl-NL"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50"
                    onClick={() => setLanguageDropdownOpen(false)}
                  >
                    Nederlands
                  </Link>
                  <Link
                    href="/fr-BE"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50"
                    onClick={() => setLanguageDropdownOpen(false)}
                  >
                    Français
                  </Link>
                </div>
              </>
            )}
          </div>

          {/* Privé dropdown */}
          <div className="relative">
            <button
              onClick={() => setPrivateDropdownOpen(!privateDropdownOpen)}
              className="flex items-center gap-1 text-sm font-semibold text-[#00716B] hover:text-[#005952]"
            >
              <ChevronDown className="w-4 h-4" />
              Privé
            </button>

            {privateDropdownOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setPrivateDropdownOpen(false)} />
                <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-50">
                  <Link
                    href="#"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 border-b border-gray-200"
                    onClick={() => setPrivateDropdownOpen(false)}
                  >
                    Privé
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 border-b border-gray-200"
                    onClick={() => setPrivateDropdownOpen(false)}
                  >
                    Zakelijk
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50"
                    onClick={() => setPrivateDropdownOpen(false)}
                  >
                    Private banking
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Bottom row - Logo (left) and icons (right) */}
        <div className="flex items-center justify-between px-4 h-16">
          {/* Logo */}
          <Link href={fields.logo.href || '/'}>
            <Image
              src={fields.logo.src || '/placeholder.svg'}
              alt={fields.logo.alt}
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          {/* Icons */}
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <User className="w-5 h-5 text-gray-600" />
            </button>
            <button onClick={toggleMobileMenu} className="p-2 hover:bg-gray-100 rounded">
              <Menu className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Header - Logo + Utility Bar */}
      <div className="hidden lg:block border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link href={fields.logo.href || '/'}>
              <Image
                src={fields.logo.src || '/placeholder.svg'}
                alt={fields.logo.alt}
                width={140}
                height={48}
                className="h-10 w-auto"
              />
            </Link>

            {/* Utility links and login */}
            <div className="flex items-center gap-2">
              {fields.utilityLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    link.variant === 'outlined'
                      ? 'border border-gray-300 rounded hover:bg-gray-50 text-gray-700'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="relative">
                <button
                  onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                  className="px-4 py-2 text-sm font-medium transition-colors text-gray-600 hover:text-gray-900"
                >
                  English
                </button>

                {languageDropdownOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setLanguageDropdownOpen(false)}
                    />
                    <div className="absolute top-full left-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg z-50">
                      <Link
                        href="#"
                        locale="en"
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 border-b border-gray-200"
                        onClick={() => setLanguageDropdownOpen(false)}
                      >
                        English
                      </Link>
                      <Link
                        href=""
                        locale="nl-NL"
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50"
                        onClick={() => setLanguageDropdownOpen(false)}
                      >
                        Nederlands
                      </Link>
                      <Link
                        href="#"
                        locale="fr-BE"
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50"
                        onClick={() => setLanguageDropdownOpen(false)}
                      >
                        Français
                      </Link>
                    </div>
                  </>
                )}
              </div>

              <Link
                href={fields.loginButton.href}
                className="flex items-center gap-2 bg-[#00716B] text-white px-4 py-2 rounded font-medium hover:bg-[#005952] transition-colors"
              >
                <Lock className="w-4 h-4" />
                {fields.loginButton.label}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Nav Items + Search (Desktop only) */}
      <div className="hidden lg:block bg-white">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Main Navigation Items - Left aligned */}
            <div className="flex items-center gap-1">
              {fields.mainNavItems.map((item, index) => (
                <div key={index} className="relative">
                  {item.hasDropdown ? (
                    <button
                      onClick={() => toggleDesktopMenu(index)}
                      className={`flex items-center gap-1 px-4 py-6 text-base font-medium transition-colors hover:text-[#00716B] ${
                        activeDesktopMenu === index
                          ? 'text-[#00716B] border-b-2 border-[#00716B]'
                          : 'text-gray-700'
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${activeDesktopMenu === index ? 'rotate-180' : ''}`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-6 text-base font-medium text-gray-700 hover:text-[#00716B] transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Search Icon - Right aligned */}
            <button className="p-2 hover:bg-gray-100 rounded">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {activeDesktopMenu !== null && fields.mainNavItems[activeDesktopMenu]?.megaMenu && (
        <div className="hidden lg:block absolute left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
          <div className="max-w-[1440px] mx-auto px-8 py-8">
            <div className="flex gap-8">
              {/* Left Column - 2nd Level Items */}
              <div className="w-64 flex-shrink-0">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                  {fields.mainNavItems[activeDesktopMenu].label}
                </h3>
                <ul className="space-y-1">
                  {fields.mainNavItems[activeDesktopMenu].megaMenu!.secondLevelItems.map(
                    (item, index) => (
                      <li key={index}>
                        <button
                          onMouseEnter={() => handleSecondLevelHover(index)}
                          className={`w-full flex items-center justify-between text-left px-4 py-3 rounded transition-colors ${
                            selectedSecondLevel === index
                              ? 'bg-gray-200 text-gray-900 font-medium'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          <span>{item.label}</span>
                          {item.subItems && <ChevronRight className="w-4 h-4" />}
                        </button>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Right Columns - 3rd and 4th Level Items */}
              {selectedSecondLevel !== null && (
                <div className="flex-1 flex gap-8">
                  {/* 3rd and 4th level content */}
                  <div className="flex-1 flex gap-8">
                    {fields.mainNavItems[activeDesktopMenu].megaMenu!.secondLevelItems[
                      selectedSecondLevel
                    ]?.subItems?.map((subItem, subIndex) => (
                      <div key={subIndex} className="flex-1">
                        <h4 className="text-lg font-semibold mb-4 text-gray-900">
                          {subItem.title}
                        </h4>
                        <ul className="space-y-2">
                          {subItem.items.map((link, linkIndex) => (
                            <li key={linkIndex}>
                              <Link
                                href={link.href}
                                onClick={closeDesktopMenu}
                                className="block text-gray-700 hover:text-[#00716B] transition-colors py-1"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Image (if available for selected 2nd level item) */}
                  {fields.mainNavItems[activeDesktopMenu].megaMenu!.secondLevelItems[
                    selectedSecondLevel
                  ]?.image && (
                    <div className="w-80 flex flex-col items-center justify-center text-center flex-shrink-0">
                      <div className="mb-6">
                        <Image
                          src={
                            fields.mainNavItems[activeDesktopMenu].megaMenu!.secondLevelItems[
                              selectedSecondLevel
                            ].image!.src || '/placeholder.svg'
                          }
                          alt={
                            fields.mainNavItems[activeDesktopMenu].megaMenu!.secondLevelItems[
                              selectedSecondLevel
                            ].image!.alt
                          }
                          width={280}
                          height={280}
                          className="rounded-full"
                        />
                      </div>
                      <h4 className="text-xl font-semibold mb-2 text-gray-900">
                        {
                          fields.mainNavItems[activeDesktopMenu].megaMenu!.secondLevelItems[
                            selectedSecondLevel
                          ].image!.title
                        }
                      </h4>
                      <p className="text-sm text-gray-600">
                        {
                          fields.mainNavItems[activeDesktopMenu].megaMenu!.secondLevelItems[
                            selectedSecondLevel
                          ].image!.description
                        }
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Close button */}
            <button
              onClick={closeDesktopMenu}
              className="absolute top-6 right-8 flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <X className="w-5 h-5" />
              <span className="font-medium">Sluiten</span>
            </button>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-50 overflow-y-auto">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
            {activeMobileSubmenu !== null ? (
              <button
                onClick={closeMobileSubmenu}
                className="flex items-center gap-2 text-[#00716B] font-semibold"
              >
                <ChevronLeft className="w-5 h-5" />
                Terug
              </button>
            ) : (
              <div />
            )}
            <button
              onClick={toggleMobileMenu}
              className="flex items-center gap-2 text-gray-700 font-semibold"
            >
              Sluiten
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="px-4 py-6">
            {activeMobileSubmenu === null ? (
              // Main menu items
              <ul className="space-y-1">
                {fields.mainNavItems.map((item, index) => (
                  <li key={index}>
                    {item.hasDropdown ? (
                      <button
                        onClick={() => toggleMobileSubmenu(index)}
                        className="w-full text-left px-4 py-4 text-lg font-medium text-gray-900 hover:bg-gray-50 rounded"
                      >
                        {item.label}
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-4 py-4 text-lg font-medium text-gray-900 hover:bg-gray-50 rounded"
                        onClick={toggleMobileMenu}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              // Submenu items
              <div>
                {fields.mainNavItems[activeMobileSubmenu]?.megaMenu?.secondLevelItems.map(
                  (item, itemIndex) => (
                    <div key={itemIndex} className="mb-8">
                      <h3 className="text-xl font-semibold mb-4 text-gray-900 px-4">
                        {item.label}
                      </h3>
                      {item.subItems?.map((subItem, subIndex) => (
                        <div key={subIndex} className="mb-6">
                          <h4 className="text-base font-semibold mb-2 text-gray-700 px-4">
                            {subItem.title}
                          </h4>
                          <ul className="space-y-1">
                            {subItem.items.map((link, linkIndex) => (
                              <li key={linkIndex}>
                                <Link
                                  href={link.href}
                                  className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-50 rounded"
                                  onClick={toggleMobileMenu}
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Overlay backdrop for desktop mega menu */}
      {activeDesktopMenu !== null && (
        <div
          className="hidden lg:block fixed inset-0 bg-black/20 z-40"
          onClick={closeDesktopMenu}
        />
      )}
    </nav>
  );
};
