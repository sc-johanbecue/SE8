import React, { JSX } from 'react';
import {
  Text,
  TextField,
  RichTextField,
  ComponentParams,
  ComponentRendering,
  Item,
} from '@sitecore-content-sdk/nextjs';
import Link from 'next/link';

type Article = Item & {
  url?: string; // Optional, if provided by Sitecore SDK
  fields: {
    Title: TextField;
    Description: RichTextField;
    Content: RichTextField;
    AdditionalContent: RichTextField;
    Author: TextField;
    DateTime: TextField;
    RelatedTags: TextField;
  };
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: {
    Title: TextField;
    items: Article[];
  };
};

const calculateReadingTime = (text: string): string => {
  const wordsPerMinute = 200;
  const wordCount = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} minute${minutes !== 1 ? 's' : ''} to read`;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const tags = [
    'Health',
    'Young',
    'Fitness',
    'General health',
    'Healthy mind',
    'Healthy body',
    'Wellbeing at work',
    'Discover Bupa Global',
  ];

  const categories = [
    'General health',
    'Healthy mind',
    'Healthy body',
    'Wellbeing at work',
    'Discover Bupa Global',
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <h1 className="text-4xl font-bold text-[#1a1f71] mb-2">
            <Text field={props.fields.Title} />
          </h1>
        </div>
      </div>

      {/* Category Filter Bar - Non-functional UI */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <div className="flex items-center gap-4 overflow-x-auto">
            <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
              Browse by category:
            </span>
            <div className="flex gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Articles List - Dynamic from children */}
          <div className="lg:col-span-2 space-y-6">
            {(props.fields.items || []).map((article: Article, index: number) => {
              const readingTime = calculateReadingTime(article.fields.Description?.value || '');
              return (
                <Link href={article.url as string} key={index}>
                  <article
                    key={index}
                    className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
                  >
                    <div className="block group">
                      <h2 className="text-2xl font-bold text-[#1a1f71] mb-3 group-hover:text-[#0071ce] transition-colors">
                        <Text field={article.fields.Title} />
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        <Text field={article.fields.Description} />
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>
                          <Text field={article.fields.DateTime} />
                        </span>
                        <span>•</span>
                        <span>{readingTime}</span>
                        <span>•</span>
                        <span>
                          By <Text tag="span" field={article.fields.Author} />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}

            {/* Promotional Card - Hardcoded */}
            {props.fields.items && (
              <div className="bg-gradient-to-br from-[#1a1f71] to-[#0071ce] rounded-lg shadow-sm p-8 text-white">
                <h3 className="text-2xl font-bold mb-3">Bupa Digital health by Bupa</h3>
                <p className="mb-6 text-white/90">
                  Take care of yourself wherever you are with our digital health services. From
                  wellbeing articles and tips to consultations, we&quot;re here to help you live a
                  healthier life.
                </p>
                <button className="bg-white text-[#0071ce] px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                  Explore Bupa →
                </button>
              </div>
            )}
          </div>

          {/* Sidebar - All hardcoded */}
          <aside className="space-y-6">
            {/* Related Tags */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold text-[#1a1f71] mb-4">Related tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Articles - Hardcoded */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold text-[#1a1f71] mb-4">Featured</h3>
              <div className="space-y-4">
                <Link href="/article" className="block group">
                  <h4 className="text-[#1a1f71] font-semibold group-hover:text-[#0071ce] transition-colors">
                    How to stay well this flu season
                  </h4>
                </Link>
                <Link href="/article" className="block group">
                  <h4 className="text-[#1a1f71] font-semibold group-hover:text-[#0071ce] transition-colors">
                    Understanding your mental health
                  </h4>
                </Link>
              </div>
            </div>

            {/* Promotional Card - Hardcoded */}
            <div className="bg-gradient-to-br from-[#1a1f71] to-[#0071ce] rounded-lg shadow-sm p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Bupa Digital health by Bupa</h3>
              <p className="text-sm mb-4 text-white/90">
                Get expert health advice and support when you need it most.
              </p>
              <button className="bg-white text-[#0071ce] px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-100 transition-colors w-full">
                Explore Bupa →
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
