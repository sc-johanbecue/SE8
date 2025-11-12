import { JSX } from 'react';
import {
  Field,
  TextField,
  Text,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';
import { useBasket } from '@/lib/basket-context';

type Feature = {
  fields: {
    Text: TextField;
  };
};

type Fields = {
  Badge: TextField;
  PlanName: TextField;
  DataAmount: TextField;
  Price: TextField;
  Features: Feature[];
  Period: TextField;
  ShowOfferPrice?: Field<boolean>;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const PricingCard = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const { addItem } = useBasket();

  const handleAddToBasket = () => {
    addItem({
      id: `${id}-${Date.now()}`,
      planName: props.fields.PlanName.value as string,
      dataAmount: props.fields.DataAmount.value as string,
      price: props.fields.Price.value as number,
      period: props.fields.Period.value as string,
      quantity: 1,
    });
  };

  return (
    <div
      key={id}
      className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
    >
      {props.fields.Badge && (
        <div className="inline-block bg-yellow-400 text-[#1a1a4d] text-xs font-bold px-3 py-1 rounded-full mb-4">
          <Text field={props.fields.Badge} />
        </div>
      )}

      <div className="text-xs text-gray-600 mb-2">
        <Text field={props.fields.PlanName} />
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-[#1a1a4d]">
            <Text field={props.fields.DataAmount} />
          </span>
          <span className="text-gray-600 text-sm">Data</span>
        </div>
        <div className="flex items-baseline gap-1 mt-2">
          <span className="text-2xl font-bold text-[#1a1a4d]">
            <Text field={props.fields.Price} />
          </span>
          <span className="text-gray-600 text-sm">
            <Text field={props.fields.Period} />
          </span>
        </div>
      </div>

      <ul className="space-y-3 mb-6">
        {props.fields.Features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
            <svg
              className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>
              <Text field={feature.fields.Text} />
            </span>
          </li>
        ))}
      </ul>

      <button className="text-[#0066ff] text-sm font-medium hover:underline mb-4">View more</button>

      <div className="space-y-2">
        <button className="w-full bg-[#00d4aa] text-white font-medium py-3 rounded hover:bg-[#00c299] transition-colors">
          Buy Now
        </button>
        <button
          onClick={handleAddToBasket}
          className="w-full border border-gray-300 text-gray-700 font-medium py-3 rounded hover:bg-gray-50 transition-colors"
        >
          Add to basket
        </button>
      </div>

      {props.fields.ShowOfferPrice && (
        <p className="text-xs text-gray-500 text-center mt-3">Offer price vs purchase</p>
      )}
    </div>
  );
};
