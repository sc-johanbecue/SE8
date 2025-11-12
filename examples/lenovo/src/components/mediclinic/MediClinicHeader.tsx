'use client';

import React, { useState } from 'react';
import {
  Image as JssImage,
  Link as JssLink,
  TextField,
  ImageField,
  LinkField,
} from '@sitecore-content-sdk/nextjs';
import { Search, Menu, X, Phone, Home, Users, Heart, ChevronRight, LifeBuoy } from 'lucide-react';
import Link from 'next/link';

type NavigationItem = {
  link: LinkField;
};

type MediClinicHeaderFields = {
  Logo: ImageField;
  PhoneNumber: TextField;
  PhoneLink: LinkField;
  HospitalLink: LinkField;
  DoctorsLink: LinkField;
  MediaLink: LinkField;
  LanguageSelector: TextField;
  NavigationItems: NavigationItem[];
};

type MediClinicHeaderProps = {
  fields: MediClinicHeaderFields;
};

/**
 * MediClinic Header Component
 * Top navigation with logo, utilities, and mobile menu overlay
 */
export const MediClinicHeader = ({ fields }: MediClinicHeaderProps): React.JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = ['Jobs', 'Doctors search', 'Baby Gallery'];

  return (
    <>
      <header className="bg-white border-b border-gray-200 relative z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <JssImage field={fields.Logo} className="h-8 w-auto" priority />
            </div>

            {/* Navigation Links - Desktop Only */}
            <nav className="hidden lg:flex items-center gap-6 text-sm">
              <JssLink
                field={fields.PhoneLink}
                className="flex items-center gap-2 text-gray-700 hover:text-cyan-500 transition-colors"
              >
                <Phone className="w-4 h-4" />
                {fields.PhoneLink.value?.text || 'Phonenumber'}
              </JssLink>

              <JssLink
                field={fields.HospitalLink}
                className="flex items-center gap-2 text-gray-700 hover:text-cyan-500 transition-colors"
              >
                <Home className="w-4 h-4" />
                {fields.HospitalLink.value?.text || 'Hospitals'}
              </JssLink>

              <JssLink
                field={fields.DoctorsLink}
                className="flex items-center gap-2 text-gray-700 hover:text-cyan-500 transition-colors"
              >
                <Users className="w-4 h-4" />
                {fields.DoctorsLink.value?.text || 'Doctors'}
              </JssLink>

              <JssLink
                field={fields.MediaLink}
                className="text-gray-700 hover:text-cyan-500 transition-colors"
              >
                {fields.MediaLink.value?.text || 'Media/News'}
              </JssLink>

              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-xs">DE</span>
                <span className="text-xs">|</span>
                <span className="text-xs font-semibold text-cyan-500">EN</span>
                <span className="text-xs">|</span>
                <span className="text-xs">FR</span>
              </div>
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button className="hidden md:flex p-2 rounded-full bg-cyan-500 text-white hover:bg-cyan-600 transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          <div className="container mx-auto px-4">
            {/* Header with Logo and Close Button */}
            <div className="flex items-center justify-between py-4 border-b border-gray-200">
              <JssImage field={fields.Logo} className="h-8 w-auto" priority />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            {/* Search Bar */}
            <div className="py-6 border-b border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Keyword..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                <button className="px-6 py-3 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition-colors font-medium whitespace-nowrap">
                  Search
                </button>
              </div>

              {/* Search Tabs */}
              <div className="flex gap-2">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`px-4 py-2 rounded text-sm transition-colors ${
                      activeTab === index
                        ? 'bg-gray-100 text-gray-900 font-medium'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Menu Items */}
            <nav className="py-6">
              {/* Primary Menu Items with Icons */}
              <div className="space-y-1 mb-6">
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-gray-50 rounded transition-colors"
                >
                  <LifeBuoy className="w-5 h-5" />
                  <span className="font-medium">Emergency</span>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">Healthline</span>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded transition-colors"
                >
                  <Home className="w-5 h-5" />
                  <span className="font-medium">Hospitals</span>
                </a>

                <Link
                  href="/doctors-search"
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded transition-colors"
                >
                  <Users className="w-5 h-5" />
                  <span className="font-medium">Doctors</span>
                </Link>

                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded transition-colors"
                >
                  <Heart className="w-5 h-5" />
                  <span className="font-medium">Specialities</span>
                </a>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 my-4" />

              {/* Expandable Sections */}
              <div className="space-y-1">
                <button className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-gray-50 rounded transition-colors">
                  <span className="font-medium">Patients & Visitors</span>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>

                <button className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-gray-50 rounded transition-colors">
                  <span className="font-medium">Service Offerings</span>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>

                <button className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-gray-50 rounded transition-colors">
                  <span className="font-medium">Jobs & Career</span>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default MediClinicHeader;
