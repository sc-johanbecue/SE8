import React, { JSX } from 'react';
import {
  Text,
  RichText,
  TextField,
  RichTextField,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';
import { useState } from 'react';

interface ArticleFields {
  Title: TextField;
  Description: RichTextField;
  Content: RichTextField;
  AdditionalContent: RichTextField;
  Author: TextField;
  DateTime: TextField;
  RelatedTags: TextField;
}

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: ArticleFields;
};

/**
 * Calculate reading time based on word count
 * Average reading speed: 200 words per minute
 */
const calculateReadingTime = (content: string): number => {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return readingTime;
};

/**
 * Article Component
 * Displays article content with sidebar for related information
 */
export const Default = (props: ComponentProps): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState('');

  // Calculate reading time from content
  const contentText = props.fields.Content.value + ' ' + props.fields.AdditionalContent.value;
  const readingTime = calculateReadingTime(contentText);

  // Parse tags from space-separated string
  const tags = props.fields.RelatedTags.value
    ? (props.fields.RelatedTags.value as string).split(' ').filter((tag) => tag.trim())
    : [];

  // Hardcoded related articles
  const relatedArticles = [
    {
      title: 'Why active recovery matters: the best way to rest',
      image: '/happy-diverse-family.png',
    },
    {
      title: 'Understanding your resting heart rate',
      image: '/woman-swimming-in-water-happy.jpg',
    },
  ];

  // Hardcoded categories
  const categories = ['General health', 'Healthy mind', 'Healthy body', 'Wellbeing at work'];

  return (
    <div className="bg-white">
      {/* Article Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl">
          <Text
            tag="h1"
            className="text-4xl md:text-5xl font-bold text-[#003087] mb-4"
            field={props.fields.Title}
          />

          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
            <span>
              By <Text tag="span" className="font-semibold" field={props.fields.Author} />
            </span>
            <span>•</span>
            <Text tag="span" field={props.fields.DateTime} />
            <span>•</span>
            <span>{readingTime} min read</span>
          </div>

          <Text
            tag="p"
            className="text-lg text-gray-700 leading-relaxed"
            field={props.fields.Description}
          />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Article Content */}
          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none">
              <RichText field={props.fields.Content} className="text-gray-800 leading-relaxed" />

              {props.fields.AdditionalContent.value && (
                <div className="mt-8">
                  <RichText
                    field={props.fields.AdditionalContent}
                    className="text-gray-800 leading-relaxed"
                  />
                </div>
              )}
            </article>

            {/* Author Bio Section */}
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-[#003087] mb-2">
                <Text field={props.fields.Author} />
              </h3>
              <p className="text-gray-600 text-sm">
                Medical expert and contributor to Bupa Global health articles.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 space-y-6">
              {/* Related Tags */}
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-lg font-bold text-[#003087] mb-4">Related Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <button
                      key={index}
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full text-sm font-medium transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Related Articles */}
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-lg font-bold text-[#003087] mb-4">Related articles</h3>
                <div className="space-y-4">
                  {relatedArticles.map((article, index) => (
                    <a key={index} href="#" className="flex gap-3 group">
                      <p className="text-sm text-gray-800 group-hover:text-[#0071CE] transition-colors line-clamp-3">
                        {article.title}
                      </p>
                    </a>
                  ))}
                </div>
              </div>

              {/* Browse by Category */}
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-lg font-bold text-[#003087] mb-4">Browse by category</h3>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0071CE]"
                >
                  <option value="">Select a category</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Featured Promo Card */}
              <div className="bg-gradient-to-br from-[#003087] to-[#0071CE] text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Bupa Digital health by Bupa</h3>
                <p className="text-sm mb-4 text-blue-100">
                  Get 24/7 care from Bupa health professionals
                </p>
                <button className="w-full bg-white text-[#0071CE] font-semibold py-2 px-4 rounded hover:bg-gray-100 transition-colors">
                  Explore Bupa →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
