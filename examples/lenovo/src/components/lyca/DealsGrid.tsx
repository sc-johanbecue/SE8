/* eslint-disable @typescript-eslint/no-explicit-any */
import { JSX, useState } from 'react';
import {
  TextField,
  Text,
  LinkField,
  Link as JssLink,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';
import { useBasket } from '@/lib/basket-context';

type Feature = {
  fields: {
    Text: TextField;
  };
};

type Plan = {
  name: string;
  fields: {
    Badge: TextField;
    PlanName: TextField;
    DataAmount: TextField;
    Price: TextField;
    Features: Feature[];
    Period: TextField;
    OfferPriceText: TextField;
    DataText: TextField;
    ViewAllPlansLink: LinkField;
    ViewAllPlansLinkText: TextField;
    BuyNowButtonText: TextField;
    AddToBasketButtonText: TextField;
    AddedToBasketButtonText: TextField;
  };
};

type Fields = {
  items: Plan[];
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;

  const { addItem } = useBasket();
  const [addedToBasket, setAddedToBasket] = useState(false);

  const handleAddToBasket = (plan: Plan) => {
    addItem({
      id: `${id}-${Date.now()}`,
      planName: plan.fields.PlanName.value as string,
      dataAmount: plan.fields.DataAmount.value as string,
      price: plan.fields.Price.value as number,
      period: plan.fields.Period.value as string,
      quantity: 1,
    });
    setAddedToBasket(true);
    setTimeout(() => setAddedToBasket(false), 2000);
  };

  return (
    <div key={id} className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {props.fields.items
            .filter((e) => e.name != 'Data')
            .map((plan, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg pb-0 hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="bg-[#eff8ff] px-8 pt-8">
                  {plan.fields.Badge && (
                    <div className="inline-block bg-yellow-400 text-[#1a1a4d] text-xs font-bold px-3 py-1 rounded-full mb-4">
                      <Text field={plan.fields.Badge} />
                    </div>
                  )}

                  <div className="text-xl font-extrabold text-gray-600 mb-2">
                    <Text field={plan.fields.PlanName} />
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-[#1a1a4d]">
                        <Text field={plan.fields.DataAmount} />
                      </span>
                      <span className="text-gray-600 text-sm">
                        <Text field={plan.fields.DataText} />
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1 mt-2">
                      <span className="text-2xl font-bold text-[#1a1a4d]">
                        <Text field={plan.fields.Price} />
                      </span>
                      <span className="text-gray-600 text-sm">
                        <Text field={plan.fields.Period} />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="px-8 pt-8">
                  {/* Limit features to first 3 */}
                  <ul className="space-y-3 mb-6">
                    {plan.fields.Features.slice(0, 3).map((feature, index) => (
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

                  <JssLink
                    field={plan.fields.ViewAllPlansLink}
                    className="text-[#0066ff] text-sm font-medium hover:underline mb-4"
                  >
                    <Text field={plan.fields.ViewAllPlansLinkText} />
                  </JssLink>

                  <div className="space-y-2">
                    <button
                      className="w-full bg-[#00d4aa] text-white font-medium py-3 rounded hover:bg-[#00c299] transition-colors"
                      onClick={() => handleAddToBasket(plan)}
                    >
                      <Text field={plan.fields.BuyNowButtonText} />
                    </button>
                    <button
                      onClick={() => handleAddToBasket(plan)}
                      className={`w-full border-2 ${
                        addedToBasket
                          ? 'border-green-600 text-green-600'
                          : 'border-gray-300 text-gray-700'
                      } font-semibold py-3 rounded-lg transition-colors hover:bg-gray-50`}
                    >
                      {addedToBasket
                        ? plan.fields.AddedToBasketButtonText.value
                        : plan.fields.AddToBasketButtonText.value}
                    </button>
                  </div>
                </div>
                {/* Push OfferPriceText to the bottom */}
                <div className="mt-auto pt-4">
                  {plan.fields.OfferPriceText?.value && (
                    <p className="text-xs font-bold text-center bg-[#eff8ff] text-gray-700 py-2">
                      <Text field={plan.fields.OfferPriceText} />
                    </p>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
