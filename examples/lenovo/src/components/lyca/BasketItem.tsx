'use client';

import type { JSX } from 'react';
import type { TextField, ComponentParams, ComponentRendering } from '@sitecore-content-sdk/nextjs';

type BasketItemFields = {
  PlanName: TextField;
  DataAmount: TextField;
  Duration: TextField;
  Price: TextField;
  SimType: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: BasketItemFields;
  onRemove?: () => void; // Added optional onRemove callback
};

export const BasketItem = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const { onRemove } = props;

  const topUpAmounts = [
    { amount: '£10.00', label: 'Credit only' },
    { amount: '£20.00', label: 'Plus more' },
    { amount: '£30.00', label: 'Plus more' },
    { amount: '£50.00', label: 'Plus more' },
    { amount: '£100.00', label: 'Plus more' },
  ];

  return (
    <div
      key={id}
      className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-4"
    >
      {/* Header */}
      <div className="bg-[#0066ff] text-white px-4 py-3 flex items-center justify-between">
        <span className="font-medium">Pay as you go SIM</span>
        <button onClick={onRemove} className="hover:bg-white/10 p-1 rounded transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* SIM Type Selection */}
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name={`sim-type-${id}`}
                defaultChecked
                className="w-4 h-4 text-[#0066ff] focus:ring-[#0066ff]"
              />
              <span className="text-sm font-medium text-gray-700">SIM card</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name={`sim-type-${id}`}
                className="w-4 h-4 text-[#0066ff] focus:ring-[#0066ff]"
              />
              <span className="text-sm font-medium text-gray-700">eSIM</span>
            </label>
            <button className="text-gray-400 hover:text-gray-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
          <span className="text-lg font-bold text-gray-900">FREE</span>
        </div>

        {/* Info Message */}
        <div className="flex items-start gap-2 mb-4">
          <svg
            className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-xs text-gray-600">A SIM card will be sent with your order</p>
        </div>

        {/* Plan Details */}
        <div className="flex items-start justify-between mb-4 pb-4 border-b border-gray-200">
          <div>
            <h3 className="font-bold text-gray-900 mb-1">{props.fields.PlanName.value}</h3>
            <p className="text-sm text-gray-600 mb-2">
              {props.fields.DataAmount.value} - {props.fields.Duration.value}
            </p>
            <a href="#" className="text-sm text-[#0066ff] hover:underline">
              View details
            </a>
          </div>
          <div className="text-right">
            <span className="text-xl font-bold text-gray-900">{props.fields.Price.value}</span>
          </div>
        </div>

        {/* Add Top-up */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-700">Add top-up</span>
            <span className="text-sm text-gray-400">£0.00</span>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {topUpAmounts.map((item, index) => (
              <button
                key={index}
                className="border border-gray-300 rounded px-2 py-2 hover:border-[#0066ff] hover:bg-blue-50 transition-colors"
              >
                <div className="text-sm font-bold text-gray-900">{item.amount}</div>
                <div className="text-xs text-gray-500">{item.label}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
