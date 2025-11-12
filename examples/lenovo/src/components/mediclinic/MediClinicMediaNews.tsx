import type React from 'react';
import {
  Text,
  Link as JssLink,
  TextField,
  LinkField,
  Placeholder,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';
import { ArrowRight } from 'lucide-react';

type NewsArticle = {
  category: TextField;
  date: TextField;
  title: TextField;
  source: TextField;
  link: LinkField;
};

type MediClinicMediaNewsFields = {
  Heading: TextField;
  Articles: NewsArticle[];
  ViewAllLink: LinkField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: MediClinicMediaNewsFields;
};

/**
 * MediClinic Media News Component
 * News article listing with categories
 */
export const MediClinicMediaNews = (props: ComponentProps): React.JSX.Element => {
  const phMediaNewsContainer = `MediClinicMediaNewsContainer-${props.params.DynamicPlaceholderId}`;

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <Text
          tag="h2"
          field={props.fields.Heading}
          className="text-3xl font-bold text-gray-900 mb-8"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Placeholder name={phMediaNewsContainer} rendering={props.rendering} />
        </div>

        <div className="text-center">
          <JssLink
            field={props.fields.ViewAllLink}
            className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-600 font-medium transition-colors"
          >
            All media and news
            <ArrowRight className="w-4 h-4" />
          </JssLink>
        </div>
      </div>
    </section>
  );
};

export default MediClinicMediaNews;
