import React, { JSX, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  LinkField,
  Link as JssLink,
  RichTextField,
  RichText,
  TextField,
  Text,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

interface ContentCard {
  fields: {
    Title: TextField;
    Description: RichTextField;
  };
}

interface Tab {
  fields: {
    Label: TextField;
    Cards: ContentCard[];
  };
}

interface Fields {
  PromoLink: LinkField;
  PromoText: RichTextField;
  Tabs: Tab[];
}

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const [activeTab, setActiveTab] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const activeContent = props.fields.Tabs[activeTab].fields.Cards;
  const totalSlides = activeContent.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="bg-[#f5f5f5] py-8 md:py-12" key={id}>
      <div className="container mx-auto px-4">
        {/* Tabs Navigation */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center min-w-max md:min-w-0">
            {props.fields.Tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveTab(index);
                  setCurrentSlide(0);
                }}
                className={`text-sm md:text-base font-medium pb-2 transition-colors whitespace-nowrap ${
                  activeTab === index
                    ? 'text-[#ff6600] border-b-2 border-[#ff6600]'
                    : 'text-gray-700 hover:text-[#ff6600]'
                }`}
              >
                {tab.fields.Label.value}
              </button>
            ))}
          </div>
        </div>

        {/* Content Cards Carousel */}
        <div className="relative mb-6">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {/* Show current card on mobile, two cards on desktop */}
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm">
              <Text
                tag="h3"
                field={activeContent[currentSlide].fields.Title}
                className="text-xl md:text-2xl font-bold mb-4"
              />
              <RichText
                field={activeContent[currentSlide].fields.Description}
                className="text-gray-700 leading-relaxed"
              />
            </div>

            {/* Second card - only visible on desktop */}
            <div className="hidden md:block bg-white rounded-lg p-6 md:p-8 shadow-sm relative group">
              <Text
                tag="h3"
                field={activeContent[(currentSlide + 1) % totalSlides].fields.Title}
                className="text-xl md:text-2xl font-bold mb-4"
              />
              <RichText
                field={activeContent[(currentSlide + 1) % totalSlides].fields.Description}
                className="text-gray-700 leading-relaxed"
              />
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#ff6600] opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Next slide"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>
          </div>

          {/* Mobile Navigation Arrows */}
          <div className="md:hidden flex justify-between mt-4">
            <button onClick={prevSlide} className="text-[#ff6600] p-2" aria-label="Previous slide">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={nextSlide} className="text-[#ff6600] p-2" aria-label="Next slide">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mb-8">
          {activeContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-[#ff6600]' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Promotional Banner */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 bg-white rounded-lg p-6 shadow-sm">
          <RichText field={props.fields.PromoText} className="text-lg md:text-xl text-center" />
          <JssLink
            field={props.fields.PromoLink}
            className="bg-[#ff6600] hover:bg-[#e55a00] text-white font-bold px-8 py-3 rounded transition-colors whitespace-nowrap"
          />
        </div>
      </div>
    </section>
  );
};
