import type { JSX } from 'react';
import type { TextField, ComponentParams, ComponentRendering } from '@sitecore-content-sdk/nextjs';

type ExistingCustomerFields = {
  Heading: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: ExistingCustomerFields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;

  const features = ['Renew current plan', 'View upgrade options', 'Add a new plan'];

  return (
    <div key={id} className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm p-8 text-center">
          <h2 className="text-2xl font-bold text-[#1a1a4d] mb-6">Are you an existing customer?</h2>

          <ul className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-700">
                <svg
                  className="w-5 h-5 text-green-500 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          <button className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center mx-auto hover:border-[#0066ff] hover:text-[#0066ff] transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
