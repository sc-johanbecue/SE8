import type { JSX } from 'react';
import {
  type TextField,
  type ComponentParams,
  type ComponentRendering,
  Placeholder,
} from '@sitecore-content-sdk/nextjs';

type Fields = {
  Heading: TextField;
  BackgroundColor: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export default function StatsSection(props: ComponentProps): JSX.Element {
  const id = props.rendering.uid;
  const fields = props.fields;
  const phStatsCards = `lenovoStatsCardsContainer-${props.params.DynamicPlaceholderId}`;

  return (
    <section key={id} className={`py-16 ${fields.BackgroundColor.value}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <Placeholder name={phStatsCards} rendering={props.rendering} />
        </div>
      </div>
    </section>
  );
}

export const Default = StatsSection;
