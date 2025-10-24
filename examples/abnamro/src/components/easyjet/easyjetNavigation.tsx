/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { JSX } from 'react';
import { useState } from 'react';
import Link from 'next/link';
import {
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  User,
  Plane,
  Compass,
  Briefcase as Suitcase,
  UsersIcon,
  Tag,
  DollarSign,
  Globe,
  Calendar,
  Lightbulb,
  Umbrella,
  Snowflake,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  ImageField,
  Image as JssImage,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';
import { navigationItems, topNavItems } from '@/lib/mock-data';

const iconMap: Record<string, any> = {
  compass: Compass,
  plane: Plane,
  suitcase: Suitcase,
  accessibility: UsersIcon,
  'plane-orange': Plane,
  tag: Tag,
  money: DollarSign,
  'plane-search': Plane,
  globe: Globe,
  connection: Plane,
  beach: Umbrella,
  group: UsersIcon,
  ski: Snowflake,
  calendar: Calendar,
  lightbulb: Lightbulb,
};

type NavItem = {
  title: string;
  description?: string;
  icon?: string;
  link: string;
};

type NavSection = {
  items: NavItem[];
};

type FlightInfoMenu = {
  title: string;
  sections: NavSection[];
};

type TopNavItem = {
  title: string;
  link: string;
  hasFlag?: boolean;
};

interface Fields {
  Logo: ImageField;
  SignInText: string;
  FlightInfo: FlightInfoMenu;
  Holidays: { title: string; link: string };
  CarsExtras: { title: string; link: string };
  Business: { title: string; link: string };
  BookingCom: { title: string; link: string };
  TopNavItems: TopNavItem[];
  FlightTrackerTitle: string;
  FlightTrackerDescription: string;
  FlightTrackerPlaceholder: string;
  FlightTrackerButtonText: string;
  MobileMenuTitle: string;
  CheckInText: string;
  ManageBookingsText: string;
}

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState<string | null>(null);

  const fields = {
    Logo: 'easyJet',
    SignInText: 'Sign In',
    FlightInfo: navigationItems.flightInfo,
    Holidays: navigationItems.holidays,
    CarsExtras: navigationItems.carsExtras,
    Business: navigationItems.business,
    BookingCom: navigationItems.bookingCom,
    TopNavItems: topNavItems,
    FlightTrackerTitle: 'Flight Tracker',
    FlightTrackerDescription: 'Check your flight status by',
    FlightTrackerPlaceholder: 'Flight number',
    FlightTrackerButtonText: 'Check status',
    MobileMenuTitle: 'Menu',
    CheckInText: 'Check In',
    ManageBookingsText: 'Manage Bookings',
  };

  return (
    <>
      {/* Top utility bar - desktop only */}
      <div className="hidden md:block bg-[#FF6600] text-white" key={id}>
        <div className="container mx-auto px-4">
          <div className="flex justify-end items-center h-10 text-sm">
            {fields.TopNavItems.map((item, index) => (
              <Link key={index} href={item.link} className="px-3 hover:underline flex items-center">
                {item.title}
                {item.hasFlag && <span className="ml-1">🇬🇧</span>}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header className="bg-[#FF6600] text-white sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="text-2xl md:text-3xl font-bold">
              <JssImage field={props.fields.Logo} className="w-50 pb-9" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {/* Flight Info with dropdown */}
              <div className="relative">
                <button
                  className="px-4 py-2 hover:bg-[#E55A00] flex items-center font-semibold border-b-4 border-transparent hover:border-white transition-all"
                  onMouseEnter={() => setDesktopMenuOpen('flightInfo')}
                  onClick={() =>
                    setDesktopMenuOpen(desktopMenuOpen === 'flightInfo' ? null : 'flightInfo')
                  }
                >
                  {fields.FlightInfo.title}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>

              <Link
                href={fields.Holidays.link}
                className="px-4 py-2 hover:bg-[#E55A00] rounded flex items-center font-semibold"
              >
                {fields.Holidays.title}
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <Link
                href={fields.CarsExtras.link}
                className="px-4 py-2 hover:bg-[#E55A00] rounded flex items-center font-semibold"
              >
                {fields.CarsExtras.title}
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <Link
                href={fields.Business.link}
                className="px-4 py-2 hover:bg-[#E55A00] rounded flex items-center font-semibold"
              >
                {fields.Business.title}
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <Link
                href={fields.BookingCom.link}
                className="px-4 py-2 hover:bg-[#E55A00] rounded flex items-center font-semibold"
              >
                {fields.BookingCom.title}
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
            </nav>

            {/* Sign In Button - Desktop */}
            <Button className="hidden md:flex bg-white text-[#FF6600] hover:bg-gray-100 font-semibold">
              <User className="mr-2 h-4 w-4" />
              {fields.SignInText}
            </Button>

            {/* Mobile Menu Button and Sign In */}
            <div className="flex md:hidden items-center gap-2">
              <Button className="bg-white text-[#FF6600] hover:bg-gray-100 font-semibold text-sm px-3 py-2 h-9">
                <User className="mr-1 h-4 w-4" />
                {fields.SignInText}
              </Button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Dropdown Menu */}
        {desktopMenuOpen === 'flightInfo' && (
          <div
            className="absolute left-0 right-0 bg-white text-gray-800 shadow-lg"
            onMouseLeave={() => setDesktopMenuOpen(null)}
          >
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-12 gap-8">
                {/* Left Column */}
                <div className="col-span-3 space-y-6">
                  {fields.FlightInfo.sections[0].items.map((item, index) => {
                    const Icon = iconMap[item.icon || ''];
                    return (
                      <Link key={index} href={item.link} className="flex items-start gap-3 group">
                        <div className="text-gray-400 mt-1">
                          {Icon && <Icon className="h-5 w-5" />}
                        </div>
                        <div>
                          <div className="font-semibold group-hover:text-[#FF6600] flex items-center">
                            {item.title}
                            <ChevronRight className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          {item.description && (
                            <div className="text-sm text-gray-600">{item.description}</div>
                          )}
                        </div>
                      </Link>
                    );
                  })}
                </div>

                {/* Middle Column */}
                <div className="col-span-6 grid grid-cols-2 gap-x-8 gap-y-4">
                  {fields.FlightInfo.sections[1].items.map((item, index) => {
                    const Icon = iconMap[item.icon || ''];
                    return (
                      <Link key={index} href={item.link} className="flex items-start gap-3 group">
                        <div
                          className={
                            item.icon?.includes('orange') ? 'text-[#FF6600]' : 'text-gray-400'
                          }
                        >
                          {Icon && <Icon className="h-5 w-5 mt-1" />}
                        </div>
                        <div>
                          <div className="font-semibold group-hover:text-[#FF6600]">
                            {item.title}
                          </div>
                          {item.description && (
                            <div className="text-sm text-gray-600">{item.description}</div>
                          )}
                        </div>
                      </Link>
                    );
                  })}
                </div>

                {/* Right Column - Flight Tracker */}
                <div className="col-span-3 bg-gray-50 p-6 rounded">
                  <h3 className="font-bold text-lg mb-4">{fields.FlightTrackerTitle}</h3>
                  <p className="text-sm text-gray-600 mb-4">{fields.FlightTrackerDescription}</p>
                  <div className="flex gap-2 mb-4 border-b">
                    <button className="pb-2 px-3 border-b-2 border-[#FF6600] font-semibold text-sm">
                      Flight
                    </button>
                    <button className="pb-2 px-3 text-gray-600 text-sm">Route</button>
                  </div>
                  <div className="space-y-3">
                    <div className="relative">
                      <Plane className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder={fields.FlightTrackerPlaceholder}
                        className="w-full pl-10 pr-3 py-2 border rounded"
                      />
                    </div>
                    <Button className="w-full bg-[#FF6600] hover:bg-[#E55A00] text-white font-semibold">
                      {fields.FlightTrackerButtonText}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 md:hidden overflow-y-auto">
          <div className="bg-[#FF6600] text-white p-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold" onClick={() => setMobileMenuOpen(false)}>
              <span className="font-[easyjet_rounded_headlineRg,sans-serif]">{fields.Logo}</span>
            </Link>
            <div className="flex items-center gap-2">
              <Button className="bg-white text-[#FF6600] hover:bg-gray-100 font-semibold text-sm px-3 py-2 h-9">
                <User className="mr-1 h-4 w-4" />
                {fields.SignInText}
              </Button>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2">
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="p-6">
            {!mobileSubmenuOpen ? (
              <>
                <h2 className="text-2xl font-bold mb-6 uppercase">{fields.MobileMenuTitle}</h2>
                <nav className="space-y-1">
                  <button
                    onClick={() => setMobileSubmenuOpen('flightInfo')}
                    className="w-full flex items-center justify-between py-4 border-b text-left font-semibold"
                  >
                    <span className="flex items-center gap-3">
                      <Plane className="h-5 w-5 text-gray-400" />
                      {fields.FlightInfo.title}
                    </span>
                    <ChevronRight className="h-5 w-5 text-[#FF6600]" />
                  </button>
                  <Link
                    href={fields.Holidays.link}
                    className="w-full flex items-center justify-between py-4 border-b font-semibold"
                  >
                    <span>{fields.Holidays.title}</span>
                    <ChevronRight className="h-5 w-5 text-[#FF6600]" />
                  </Link>
                  <Link
                    href={fields.CarsExtras.link}
                    className="w-full flex items-center justify-between py-4 border-b font-semibold"
                  >
                    <span>{fields.CarsExtras.title}</span>
                    <ChevronRight className="h-5 w-5 text-[#FF6600]" />
                  </Link>
                  <Link
                    href={fields.Business.link}
                    className="w-full flex items-center justify-between py-4 border-b font-semibold"
                  >
                    <span>{fields.Business.title}</span>
                    <ChevronRight className="h-5 w-5 text-[#FF6600]" />
                  </Link>
                  <Link
                    href={fields.BookingCom.link}
                    className="w-full flex items-center justify-between py-4 border-b font-semibold"
                  >
                    <span>{fields.BookingCom.title}</span>
                    <ChevronRight className="h-5 w-5 text-[#FF6600]" />
                  </Link>
                </nav>

                <div className="mt-8 space-y-4 pt-6 border-t">
                  <Link href="#" className="block py-2 text-gray-700">
                    {fields.CheckInText}
                  </Link>
                  <Link href="#" className="block py-2 text-gray-700">
                    {fields.ManageBookingsText}
                  </Link>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-6 uppercase">{fields.FlightInfo.title}</h2>
                <nav className="space-y-1">
                  {fields.FlightInfo.sections[0].items.map((item, index) => {
                    const Icon = iconMap[item.icon || ''];
                    return (
                      <Link
                        key={index}
                        href={item.link}
                        className="flex items-start gap-3 py-4 border-b"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="text-[#FF6600] mt-1">
                          {Icon && <Icon className="h-5 w-5" />}
                        </div>
                        <div>
                          <div className="font-semibold">{item.title}</div>
                          {item.description && (
                            <div className="text-sm text-gray-600">{item.description}</div>
                          )}
                        </div>
                      </Link>
                    );
                  })}
                </nav>

                <Button
                  onClick={() => setMobileSubmenuOpen(null)}
                  className="mt-6 bg-[#FF6600] hover:bg-[#E55A00] text-white font-semibold"
                >
                  <ChevronRight className="mr-2 h-4 w-4 rotate-180" />
                  {fields.MobileMenuTitle}
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};
