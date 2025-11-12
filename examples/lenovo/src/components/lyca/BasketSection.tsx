/* eslint-disable @typescript-eslint/no-empty-object-type */
'use client';

import { BasketItem } from 'src/components/lyca/BasketItem';
import { OrderHelpline } from 'src/components/lyca/OrderHelpline';
import { useBasket } from '@/lib/basket-context';
import { useUser } from '@/lib/user-context';
import { ComponentRendering, ComponentParams } from '@sitecore-content-sdk/nextjs';
import type { JSX } from 'react';

type BasketContentFields = {};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: BasketContentFields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;

  const { items, totalPrice, removeItem } = useBasket();
  const { userInfo, setFirstName, setLastName, setEmail } = useUser();

  const helplineProps = {
    rendering: { componentName: '', uid: 'helpline-1', params: {} },
    params: {},
    fields: {
      Title: { value: 'Order helpline' },
      PhoneNumber: { value: '0207 132 0322' },
      Description: { value: 'Call us from any network OR on 322 from any Lyca Mobile number' },
    },
  };

  const handleAddAnotherLine = () => {
    console.log('[v0] Add another line clicked');
    // Logic to add another line would go here
  };

  const handleCheckout = () => {
    console.log('[v0] Checkout clicked');
    // Logic to proceed to checkout would go here
  };

  if (items.length === 0) {
    return (
      <div key={id} className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
          <svg
            className="w-16 h-16 mx-auto mb-4 text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your basket is empty</h2>
          <p className="text-gray-600 mb-6">Add some items to get started</p>
          <button
            onClick={handleAddAnotherLine}
            className="bg-[#0066ff] hover:bg-[#0052cc] text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Browse Plans
          </button>
        </div>
      </div>
    );
  }

  return (
    <div key={id} className="max-w-3xl mx-auto mb-10">
      {/* Customer Information Form */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <h2 className="text-xl font-bold text-[#1a1a4d] mb-4">Your details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
              First name
            </label>
            <input
              type="text"
              id="firstName"
              value={userInfo.firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066ff] focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              value={userInfo.lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your last name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066ff] focus:border-transparent"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={userInfo.email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066ff] focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Basket Items List */}
      <div className="space-y-4 mb-6">
        {items.map((item) => (
          <BasketItem
            key={item.id}
            rendering={{ componentName: '', uid: item.id, params: {} }}
            params={{}}
            fields={{
              PlanName: { value: item.planName },
              DataAmount: { value: item.dataAmount },
              Duration: { value: item.period },
              Price: { value: item.price },
              SimType: { value: 'SIM card' },
            }}
            onRemove={() => removeItem(item.id)}
          />
        ))}
      </div>

      {/* Add Another Line Button */}
      <button
        onClick={handleAddAnotherLine}
        className="w-full bg-[#0066ff] hover:bg-[#0052cc] text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 mb-6 transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
        <span>Add another line</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>

      {/* Order Helpline Section */}
      <div className="mb-6">
        <OrderHelpline {...helplineProps} />
      </div>

      {/* Desktop Checkout Button */}
      <button
        onClick={handleCheckout}
        className="hidden lg:block w-full bg-[#00d4aa] hover:bg-[#00c299] text-[#1a1a4d] font-bold py-4 rounded-lg transition-colors text-lg"
      >
        Checkout now: £{totalPrice.toFixed(2)}
      </button>
    </div>
  );
};

export const BasketContent = Default;
