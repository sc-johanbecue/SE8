import React, { JSX } from 'react';
import {
  TextField,
  Text,
  ComponentParams,
  ComponentRendering,
  Placeholder,
} from '@sitecore-content-sdk/nextjs';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plane, Briefcase as Suitcase, Car, MapPin, Calendar, Users, X } from 'lucide-react';

interface Fields {
  FlightsTabLabel: TextField;
  CarsTabLabel: TextField;
  PackageHolidaysTabLabel: TextField;
  MainHeading: TextField;
  FromLabel: TextField;
  FromPlaceholder: TextField;
  FromDefaultValue: TextField;
  ToLabel: TextField;
  ToPlaceholder: TextField;
  WhenLabel: TextField;
  WhenPlaceholder: TextField;
  WhoLabel: TextField;
  WhoDefaultValue: TextField;
  SearchButtonText: TextField;
}

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const phPromoCardsContainer = `EasyjetPromoCardsContainer-${props.params.DynamicPlaceholderId}`;
  const phCountdownTimerContainer = `EasyjetCountdownTimerContainer-${props.params.DynamicPlaceholderId}`;

  const [activeTab, setActiveTab] = useState<'flights' | 'packages' | 'cars'>('flights');

  return (
    <section
      className="relative bg-[#FF6600] overflow-hidden"
      key={id}
      style={{ clipPath: 'polygon(0 0, 100% 0, 100% 95%, 0 100%)' }}
    >
      <div className="relative" style={{ clipPath: 'polygon(0 3%, 100% 0, 100% 97%, 0 100%)' }}>
        <div className="bg-[#FF6600] py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="md:hidden mb-8">
              <Placeholder name={phCountdownTimerContainer} rendering={props.rendering} />
            </div>

            <div className="hidden md:grid md:grid-cols-2 gap-8 mb-8">
              {/* Left side: Heading and Countdown */}
              <div className="flex flex-col justify-center">
                <Text
                  tag="h1"
                  field={props.fields.MainHeading}
                  className="text-5xl lg:text-6xl font-bold text-white mb-8"
                />
                <Placeholder name={phCountdownTimerContainer} rendering={props.rendering} />
              </div>

              <div className="flex flex-col gap-6">
                <Placeholder name={phPromoCardsContainer} rendering={props.rendering} />
              </div>
            </div>

            {/* Flight Search Form */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              {/* Tabs */}
              <div className="flex gap-3 md:gap-6 mb-6 border-b border-gray-200">
                <button
                  onClick={() => setActiveTab('flights')}
                  className={`flex items-center gap-1.5 md:gap-2 pb-3 text-sm md:text-base font-semibold transition-colors ${
                    activeTab === 'flights'
                      ? 'text-[#FF6600] border-b-2 border-[#FF6600]'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Plane className="w-4 h-4 md:w-5 md:h-5" />
                  <Text
                    tag="span"
                    className="hidden sm:inline"
                    field={props.fields.FlightsTabLabel}
                  />
                  <Text tag="span" className="sm:hidden" field={props.fields.FlightsTabLabel} />
                </button>
                <button
                  onClick={() => setActiveTab('packages')}
                  className={`flex items-center gap-1.5 md:gap-2 pb-3 text-sm md:text-base font-semibold transition-colors whitespace-nowrap ${
                    activeTab === 'packages'
                      ? 'text-[#FF6600] border-b-2 border-[#FF6600]'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Suitcase className="w-4 h-4 md:w-5 md:h-5" />

                  <Text
                    tag="span"
                    field={props.fields.PackageHolidaysTabLabel}
                    className="hidden sm:inline"
                  />
                  <Text
                    tag="span"
                    field={props.fields.PackageHolidaysTabLabel}
                    className="sm:hidden text-xs"
                  />
                </button>
                <button
                  onClick={() => setActiveTab('cars')}
                  className={`flex items-center gap-1.5 md:gap-2 pb-3 text-sm md:text-base font-semibold transition-colors ${
                    activeTab === 'cars'
                      ? 'text-[#FF6600] border-b-2 border-[#FF6600]'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Car className="w-4 h-4 md:w-5 md:h-5" />
                  Cars
                </button>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                {/* From Field */}
                <div className="relative">
                  <Text
                    tag="label"
                    field={props.fields.FromLabel}
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  />
                  <div className="relative">
                    <Plane className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#FF6600]" />
                    <input
                      type="text"
                      defaultValue={props.fields.FromDefaultValue.value}
                      className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#FF6600] text-sm md:text-base"
                    />
                    <X className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
                  </div>
                </div>

                {/* To Field */}
                <div className="relative">
                  <Text
                    tag="label"
                    field={props.fields.ToLabel}
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  />
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#FF6600]" />
                    <input
                      type="text"
                      placeholder={props.fields.ToPlaceholder.value as string}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#FF6600] text-sm md:text-base"
                    />
                  </div>
                </div>

                {/* When Field */}
                <div className="relative">
                  <Text
                    tag="label"
                    field={props.fields.WhenLabel}
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  />
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#FF6600]" />
                    <input
                      type="text"
                      placeholder={props.fields.WhenPlaceholder.value as string}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#FF6600] text-sm md:text-base"
                    />
                  </div>
                </div>

                {/* Who Field */}
                <div className="relative">
                  <Text
                    tag="label"
                    field={props.fields.WhoLabel}
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  />
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#FF6600]" />
                    <input
                      type="text"
                      defaultValue={props.fields.WhoDefaultValue.value}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#FF6600] text-sm md:text-base"
                    />
                  </div>
                </div>
              </div>

              {/* Search Button */}
              <Button className="w-full md:w-auto bg-[#FF6600] hover:bg-[#E55A00] text-white font-semibold px-12 py-3 text-lg">
                {props.fields.SearchButtonText.value}
              </Button>
            </div>

            <div className="md:hidden mt-8">
              <Text
                tag="h1"
                field={props.fields.MainHeading}
                className="text-4xl font-bold text-white mb-6 text-center"
              />
              <div className="space-y-6">
                <Placeholder name={phPromoCardsContainer} rendering={props.rendering} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
