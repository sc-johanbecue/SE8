import type React from 'react';
import { Text, Link as JssLink, TextField, LinkField } from '@sitecore-content-sdk/nextjs';
import { ArrowRight } from 'lucide-react';

type EventItem = {
  day: TextField;
  month: TextField;
  location: TextField;
  availability: TextField;
  title: TextField;
  link: LinkField;
};

type MediClinicEventsFields = {
  sectionHeading: TextField;
  events: EventItem[];
  viewAllLink: LinkField;
};

type MediClinicEventsProps = {
  fields: MediClinicEventsFields;
};

/**
 * MediClinic Events Component
 * Events calendar listing with date boxes
 */
export const MediClinicEvents = ({ fields }: MediClinicEventsProps): React.JSX.Element => {
  return (
    <section className="container mx-auto px-4 py-16">
      <Text
        tag="h2"
        field={fields.sectionHeading}
        className="text-3xl font-bold text-gray-900 mb-8"
      />

      <div className="space-y-4 mb-8">
        {fields.events?.map((event, index) => (
          <JssLink
            key={index}
            field={event.link}
            className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-lg hover:border-cyan-500 hover:shadow-md transition-all group"
          >
            <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-gray-900">{event.day?.value}</span>
              <span className="text-xs text-gray-600 uppercase">{event.month?.value}</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                <Text field={event.location} />
                <span>•</span>
                <Text field={event.availability} />
              </div>
              <Text
                tag="h3"
                field={event.title}
                className="text-lg font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors"
              />
            </div>
          </JssLink>
        ))}
      </div>

      <div className="text-center">
        <JssLink
          field={fields.viewAllLink}
          className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-600 font-medium transition-colors"
        >
          All events
          <ArrowRight className="w-4 h-4" />
        </JssLink>
      </div>
    </section>
  );
};

export default MediClinicEvents;
