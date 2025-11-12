import { JSX } from 'react';
import { useState } from 'react';
import {
  Field,
  TextField,
  Text,
  ImageField,
  Image as JssImage,
  LinkField,
  Link as JssLink,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';
import { useBasket } from '@/lib/basket-context';
import { Check } from 'lucide-react';

type Feature = {
  fields: {
    Text: TextField;
  };
};

type Fields = {
  Badge: TextField;
  PlanName: TextField;
  DataAmount: TextField;
  Price: Field<number>;
  Features: Feature[];
  Period: TextField;
  OfferPriceTewt: TextField;
  OriginalPrice: Field<number>;
  Currency: TextField;
  Image: ImageField;
  ViewAllPlansLink: LinkField;
  ViewAllPlansLinkText: TextField;
  BuyNowButtonText: TextField;
  AddToBasketButtonText: TextField;
  AddedToBasketButtonText: TextField;
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

  const handleBuyNow = () => {
    addItem({
      id: `product-${id}`,
      planName: props.fields.PlanName.value as string,
      dataAmount: props.fields.DataAmount.value as string,
      period: props.fields.Period.value as string,
      price: props.fields.Price.value,
      quantity: 1,
    });
    // Redirect to basket page
    window.location.href = '/basket';
  };

  const handleAddToBasket = () => {
    addItem({
      id: `product-${id}`,
      planName: props.fields.PlanName.value as string,
      dataAmount: props.fields.DataAmount.value as string,
      period: props.fields.Period.value as string,
      price: props.fields.Price.value,
      quantity: 1,
    });
    setAddedToBasket(true);
    setTimeout(() => setAddedToBasket(false), 2000);
  };

  return (
    <div key={id} className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Product Image */}
          <div className="flex items-center justify-center">
            <JssImage field={props.fields.Image} className="max-w-full h-auto" />
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            {/* Promo Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {props.fields.Badge?.value && (
                <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded text-sm font-medium">
                  {props.fields.Badge.value}
                </span>
              )}
            </div>

            {/* Product Name */}
            <h1 className="text-3xl lg:text-4xl font-bold text-[#1a1a4d] mb-6">
              <Text field={props.fields.PlanName} />
            </h1>

            {/* Pricing */}
            <div className="flex items-end gap-4 mb-6">
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-[#1a1a4d]">
                  <Text field={props.fields.DataAmount} />
                </div>
                <div className="text-sm text-gray-600">
                  <Text field={props.fields.Period} />
                </div>
              </div>
              <div>
                {props.fields.OriginalPrice?.value && (
                  <div className="text-lg text-gray-400 line-through">
                    <Text field={props.fields.Currency} />
                    <Text field={props.fields.OriginalPrice} />
                  </div>
                )}
                <div className="text-4xl lg:text-5xl font-bold text-[#1a1a4d]">
                  <Text field={props.fields.Currency} />
                  <Text field={props.fields.Price} />
                </div>
                <div className="text-sm text-gray-600">
                  <Text field={props.fields.Period} />
                </div>
              </div>
            </div>

            {/* Features List */}
            <ul className="space-y-3 mb-8">
              {props.fields.Features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">
                    <Text field={feature.fields.Text} />
                  </span>
                </li>
              ))}
            </ul>

            {/* View All Plans Link */}
            <div className="mt-6 text-right mb-2">
              <JssLink
                field={props.fields.ViewAllPlansLink}
                className="text-[#0066ff] hover:underline text-sm"
              >
                <Text field={props.fields.ViewAllPlansLinkText} />
              </JssLink>
            </div>
            {/* CTA Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleBuyNow}
                className="w-full bg-[#00d98e] hover:bg-[#00c280] text-white font-semibold py-3 rounded-lg transition-colors"
              >
                <Text field={props.fields.BuyNowButtonText} />
              </button>
              <button
                onClick={handleAddToBasket}
                className={`w-full border-2 ${
                  addedToBasket
                    ? 'border-green-600 text-green-600'
                    : 'border-gray-300 text-gray-700'
                } font-semibold py-3 rounded-lg transition-colors hover:bg-gray-50`}
              >
                {addedToBasket
                  ? props.fields.AddedToBasketButtonText.value
                  : props.fields.AddToBasketButtonText.value}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
