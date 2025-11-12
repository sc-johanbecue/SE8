import type { JSX } from 'react';
import type { TextField, ComponentParams, ComponentRendering } from '@sitecore-content-sdk/nextjs';

type CheckoutBarFields = {
  TotalAmount: TextField;
  ButtonText: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: CheckoutBarFields;
};

export const CheckoutBar = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;

  return (
    <div
      key={id}
      className="fixed bottom-0 left-0 right-0 bg-[#1a1a4d] text-white p-4 lg:hidden z-40"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium">Total</span>
          <span className="text-xl font-bold">£7.50</span>
        </div>
        <button className="w-full bg-[#00d4aa] hover:bg-[#00c299] text-[#1a1a4d] font-bold py-3 rounded-lg transition-colors">
          Checkout now
        </button>
      </div>
    </div>
  );
};
