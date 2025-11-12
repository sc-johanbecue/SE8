import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type ComponentParams,
  type ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

type Fields = {
  Title: TextField;
  Description: TextField;
  ShowBreadcrumb?: TextField;
  BreadcrumbText?: TextField;
  BreadcrumbLink?: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const showBreadcrumb = props.fields.ShowBreadcrumb?.value === 'true';

  return (
    <div className="mb-8" key={id}>
      {showBreadcrumb && props.fields.BreadcrumbText?.value && (
        <div className="flex items-center gap-2 mb-4">
          <a
            href={(props.fields.BreadcrumbLink?.value as string) || '#'}
            className="text-[#E2231A] hover:underline"
          >
            <Text field={props.fields.BreadcrumbText} />
          </a>
          <span className="text-muted-foreground">/</span>
          <Text field={props.fields.Title} />
        </div>
      )}
      <h1 className="text-4xl font-bold mb-4">
        <Text field={props.fields.Title} />
      </h1>
      <p className="text-muted-foreground text-lg">
        <Text field={props.fields.Description} />
      </p>
    </div>
  );
};
