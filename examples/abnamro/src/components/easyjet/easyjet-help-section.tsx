/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { JSX } from 'react';
import {
  Headset,
  FileText,
  Shield,
  Plane,
  Clock,
  Luggage,
  Ticket,
  Calendar,
  CreditCard,
  Users,
  Accessibility,
  MapPin,
} from 'lucide-react';
import { ComponentParams, ComponentRendering } from '@sitecore-content-sdk/nextjs';

const iconMap: Record<string, any> = {
  headset: Headset,
  'file-text': FileText,
  shield: Shield,
  'plane-departure': Plane,
  clock: Clock,
  luggage: Luggage,
  ticket: Ticket,
  'calendar-check': Calendar,
  'credit-card': CreditCard,
  users: Users,
  accessibility: Accessibility,
  'map-pin': MapPin,
};

type HelpItem = {
  icon: string;
  title: string;
  link: string;
};

interface Fields {
  Title: string;
  Items: HelpItem[];
}

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase">
          {props.fields.Title}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {props.fields.Items.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <a
                key={index}
                href={item.link}
                className="flex flex-col items-center text-center p-4 hover:bg-gray-50 rounded-lg transition-colors group"
              >
                <div className="text-[#FF6600] mb-3 group-hover:scale-110 transition-transform">
                  {Icon && <Icon className="h-8 w-8" />}
                </div>
                <span className="text-sm font-semibold text-gray-800">{item.title}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { Default as EasyjetHelpSection };
