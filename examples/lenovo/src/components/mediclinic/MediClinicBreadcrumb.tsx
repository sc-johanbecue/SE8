import { LinkField, Link as JssLink } from '@sitecore-content-sdk/nextjs';
import { ChevronRight } from 'lucide-react';

type GqlFieldString = {
  jsonValue: {
    value: string;
  };
};

type BreadcrumbsPage = {
  name: string;
  title: GqlFieldString;
  navigationTitle: GqlFieldString;
  url?: LinkField;
};

type MediClinicBreadcrumbFields = {
  data: {
    datasource: {
      ancestors: BreadcrumbsPage[];
      name: string;
    };
  };
};

type MediClinicBreadcrumbProps = {
  fields: MediClinicBreadcrumbFields;
};

export function MediClinicBreadcrumb({ fields }: MediClinicBreadcrumbProps) {
  const truncate = (str: string): string => {
    return str?.length > 25
      ? str
          .replace(/(.{24})..+/, '$1')
          .trim()
          .concat('...')
      : str;
  };

  const { ancestors, name } = fields?.data?.datasource ?? {};

  if (!fields) {
    return (
      <nav className="container mx-auto px-4 py-4" aria-label="Breadcrumb">
        <div className="text-sm text-gray-500">Breadcrumb data not available</div>
      </nav>
    );
  }

  if (!ancestors || ancestors.length === 0) {
    return (
      <nav className="container mx-auto px-4 py-4" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-gray-600">
          <li>
            <JssLink
              field={{ value: { href: '/', text: 'Home' } }}
              className="hover:text-[#00A0C6] transition-colors"
            >
              Home
            </JssLink>
          </li>
        </ol>
      </nav>
    );
  }

  const reversedAncestors = [...ancestors].reverse();

  return (
    <nav className="container mx-auto px-4 py-4" aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 text-sm text-gray-600">
        {reversedAncestors.map((ancestor: BreadcrumbsPage, index: number) => {
          const title =
            ancestor.name ||
            ancestor.navigationTitle?.jsonValue?.value ||
            ancestor.title?.jsonValue?.value;

          return (
            <li key={index} className="flex items-center gap-2">
              {index > 0 && <ChevronRight className="h-4 w-4" />}
              <JssLink
                field={ancestor.url || { value: { href: '/', text: title } }}
                className="hover:text-[#00A0C6] transition-colors"
              >
                {title}
              </JssLink>
            </li>
          );
        })}
        <li className="flex items-center gap-2">
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-900">{truncate(name)}</span>
        </li>
      </ol>
    </nav>
  );
}

export default MediClinicBreadcrumb;
