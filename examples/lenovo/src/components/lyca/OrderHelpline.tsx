import type { JSX } from 'react';
import type { TextField, ComponentParams, ComponentRendering } from '@sitecore-content-sdk/nextjs';

type OrderHelplineFields = {
  Title: TextField;
  PhoneNumber: TextField;
  Description: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: OrderHelplineFields;
};

export const OrderHelpline = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;

  return (
    <div key={id} className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </div>
        <div>
          <h3 className="font-bold text-gray-900 mb-2">Order helpline</h3>
          <p className="text-sm text-gray-600">
            Call us on <span className="font-medium text-gray-900">0207 132 0322</span> from any
            network OR on <span className="font-medium text-gray-900">322</span> from any Lyca
            Mobile number
          </p>
        </div>
      </div>
    </div>
  );
};
