import { TextField, Text } from '@sitecore-content-sdk/nextjs';

type MediClinicPageHeaderFields = {
  Title: TextField;
};

type MediClinicPageHeaderProps = {
  fields: MediClinicPageHeaderFields;
};

export function MediClinicPageHeader({ fields }: MediClinicPageHeaderProps) {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100">
      <Text
        tag="h1"
        field={fields.Title}
        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
      />
    </div>
  );
}

export default MediClinicPageHeader;
