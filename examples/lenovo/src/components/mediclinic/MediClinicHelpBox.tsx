import type { TextField, RichTextField, LinkField } from '@sitecore-content-sdk/nextjs';

type MediClinicHelpBoxFields = {
  title: TextField;
  description: RichTextField;
  phoneLabel: TextField;
  phoneNumber: TextField;
  phoneLink: LinkField;
  additionalText: RichTextField;
};

type MediClinicHelpBoxProps = {
  fields: MediClinicHelpBoxFields;
};

export function MediClinicHelpBox({ fields }: MediClinicHelpBoxProps) {
  return (
    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
      <div
        className="text-gray-700 mb-4"
        dangerouslySetInnerHTML={{ __html: fields.description.value as string }}
      />
      <div
        className="text-gray-700"
        dangerouslySetInnerHTML={{ __html: fields.additionalText.value as string }}
      />
    </div>
  );
}

export default MediClinicHelpBox;
