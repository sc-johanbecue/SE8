'use client';

import type React from 'react';
import { useState } from 'react';
import { Search } from 'lucide-react';
import type { TextField } from '@sitecore-content-sdk/nextjs';

type MediClinicSearchBarFields = {
  PlaceholderText: TextField;
  SearchButtonText: TextField;
  JobsTab: TextField;
  DoctorsTab: TextField;
  BabyGalleryTab: TextField;
};

type MediClinicSearchBarProps = {
  fields: MediClinicSearchBarFields;
};

/**
 * MediClinic Search Bar Component
 * Search with tabs for different search types
 */
export const MediClinicSearchBar = ({ fields }: MediClinicSearchBarProps): React.JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 -mt-8 relative z-10 max-w-3xl mx-auto">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder={(fields.PlaceholderText?.value as string) || 'Keyword...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
        <button className="px-8 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors font-medium">
          {fields.SearchButtonText?.value || 'Search'}
        </button>
      </div>

      <div className="flex gap-4 text-sm">
        <button
          key={1}
          onClick={() => setActiveTab(1)}
          className={`px-4 py-2 rounded transition-colors ${
            activeTab === 1
              ? 'bg-gray-100 text-gray-900 font-medium'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          {fields.JobsTab.value}
        </button>
        <button
          key={2}
          onClick={() => setActiveTab(2)}
          className={`px-4 py-2 rounded transition-colors ${
            activeTab === 2
              ? 'bg-gray-100 text-gray-900 font-medium'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          {fields.DoctorsTab.value}
        </button>
        <button
          key={3}
          onClick={() => setActiveTab(3)}
          className={`px-4 py-2 rounded transition-colors ${
            activeTab === 3
              ? 'bg-gray-100 text-gray-900 font-medium'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          {fields.BabyGalleryTab.value}
        </button>
      </div>
    </div>
  );
};

export default MediClinicSearchBar;
