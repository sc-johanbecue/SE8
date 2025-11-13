import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type RichTextField,
  RichText,
  type ComponentParams,
  type ComponentRendering,
  Placeholder,
} from '@sitecore-content-sdk/nextjs';

type Fields = {
  Heading: TextField;
  Description: RichTextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export default function SolutionsSection(props: ComponentProps): JSX.Element {
  const id = props.rendering?.uid;
  const fields = props.fields;
  const phSolutionCards = `lenovoSolutionCardsContainer-${props?.params?.DynamicPlaceholderId}`;

  return (
    <section key={id} className="py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <Text field={fields.Heading} />
          </h2>
          <div className="text-muted-foreground max-w-2xl mx-auto">
            <RichText field={fields.Description} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Placeholder name={phSolutionCards} rendering={props.rendering} />
        </div>
      </div>
    </section>
  );
}

export const Default = SolutionsSection;
