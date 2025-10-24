import React, { JSX } from 'react';
import { Cloud, CloudRain, Sun, Plane } from 'lucide-react';
import {
  TextField,
  Text,
  RichTextField,
  RichText,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

interface Fields {
  Title: TextField;
  Description: RichTextField;
  HottestMonthLabel: TextField;
  HottestMonthValue: TextField;
  ColdestMonthLabel: TextField;
  ColdestMonthValue: TextField;
  WettestMonthLabel: TextField;
  WettestMonthValue: TextField;
  FlightTimeLabel: TextField;
  FlightTimeValue: TextField;
}

export const spainDestinationData = {
  title: 'A VIBRANT MEDITERRANEAN DESTINATION',
  description: [
    "Spain is a sun-soaked paradise of culture, history, and stunning coastlines. From the vibrant cities of Barcelona and Madrid to the tranquil beaches of the Costa del Sol, there's something for everyone.",
    "From the Mediterranean coast to the Balearic Islands, to the volcanic landscapes of the Canary Islands, Spain offers an incredible variety of destinations. Whether you're seeking adventure, relaxation, or cultural immersion, Spain has it all.",
    'This vibrant country welcomes millions of visitors each year with its rich history, world-class cuisine, and warm hospitality. With year-round sunshine and easy access from the UK, Spain is the perfect destination for your next getaway.',
  ],
  buttonText: 'Discover Spain',
  buttonLink: '#',
  weatherInfo: {
    hottestMonth: { label: 'Hottest Month', value: 'August', icon: 'sun' },
    coldestMonth: { label: 'Coldest Month', value: 'January', icon: 'cloud' },
    wettestMonth: { label: 'Wettest Month', value: 'November', icon: 'rain' },
    flightTime: { label: 'Flight Time', value: '2-3 hours', icon: 'plane' },
  },
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  //const fields = spainDestinationData;
  return (
    <div className="container mx-auto px-4 py-12 md:py-16" key={id}>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="md:col-span-2">
          <Text
            tag="h2"
            field={props.fields.Title}
            className="text-3xl md:text-4xl font-bold mb-6"
          />
          <div className="space-y-4 text-gray-700">
            <RichText field={props.fields.Description} />
          </div>
        </div>

        {/* Need to Know Box */}
        <div className="bg-white rounded-lg p-6 shadow-md h-fit">
          <h3 className="text-xl font-bold mb-4">Need to Know</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Sun className="w-6 h-6 text-[#ff6600]" />
              <div>
                <div className="text-sm text-gray-600">
                  <Text field={props.fields.HottestMonthLabel} />
                </div>
                <div className="font-semibold">
                  <Text field={props.fields.HottestMonthValue} />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Cloud className="w-6 h-6 text-[#ff6600]" />
              <div>
                <div className="text-sm text-gray-600">
                  <Text field={props.fields.ColdestMonthLabel} />
                </div>
                <div className="font-semibold">
                  <Text field={props.fields.ColdestMonthValue} />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CloudRain className="w-6 h-6 text-[#ff6600]" />
              <div>
                <div className="text-sm text-gray-600">
                  <Text field={props.fields.WettestMonthLabel} />
                </div>
                <div className="font-semibold">
                  <Text field={props.fields.WettestMonthValue} />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Plane className="w-6 h-6 text-[#ff6600]" />
              <div>
                <div className="text-sm text-gray-600">
                  <Text field={props.fields.FlightTimeLabel} />
                </div>
                <div className="font-semibold">
                  <Text field={props.fields.FlightTimeValue} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
