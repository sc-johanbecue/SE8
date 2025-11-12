'use client';

import type { JSX } from 'react';
import Link from 'next/link';
import { useBasket } from '@/lib/basket-context';
import type { ComponentParams, ComponentRendering } from '@sitecore-content-sdk/nextjs';

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const { items, isOpen, closeBasket, removeItem, totalPrice } = useBasket();

  if (!isOpen) return <></>;

  return (
    <>
      {/* Overlay */}
      <div
        key={`${id}-overlay`}
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={closeBasket}
      />

      {/* Drawer */}
      <div
        key={id}
        className="fixed top-0 right-0 h-full w-full md:w-[500px] bg-white z-50 shadow-2xl transform transition-transform"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-2xl font-bold text-[#1a1a4d]">Basket</h2>
            <button
              onClick={closeBasket}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0066ff] text-white hover:bg-[#0052cc] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500">Your basket is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    {/* Item Header */}
                    <div className="bg-[#0066ff] text-white px-4 py-3 flex items-center justify-between">
                      <span className="font-medium">Pay as you go SIM</span>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1 hover:bg-white/20 rounded transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>

                    {/* Item Content */}
                    <div className="p-4 space-y-4">
                      {/* SIM Type Selection */}
                      <div className="flex items-center gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name={`sim-type-${item.id}`}
                            defaultChecked
                            className="text-[#0066ff]"
                          />
                          <span className="text-sm font-medium text-[#0066ff]">SIM card</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name={`sim-type-${item.id}`}
                            className="text-[#0066ff]"
                          />
                          <span className="text-sm text-gray-600">eSIM</span>
                        </label>
                        <button className="ml-auto p-1 text-gray-400 hover:text-gray-600">
                          <svg
                            className="w-5 h-5"
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
                        </button>
                      </div>

                      <div className="flex items-start gap-2 text-sm text-gray-600">
                        <svg
                          className="w-5 h-5 flex-shrink-0"
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
                        <span>A SIM card will be sent with your order</span>
                      </div>

                      {/* Plan Details */}
                      <div className="flex items-center justify-between pt-4 border-t">
                        <div>
                          <div className="font-medium text-[#1a1a4d]">{item.planName}</div>
                          <div className="text-sm text-gray-600">
                            {item.dataAmount} - {item.period}
                          </div>
                        </div>
                        <div className="text-xl font-bold text-[#1a1a4d]">{item.price}</div>
                      </div>

                      {/* SIM Kit */}
                      <div className="flex items-center justify-between pt-4 border-t">
                        <span className="text-sm text-gray-700">SIM Kit</span>
                        <div className="flex items-center gap-2">
                          <span className="bg-yellow-400 text-[#1a1a4d] text-xs font-bold px-2 py-1 rounded">
                            FREE
                          </span>
                          <span className="text-lg font-bold text-[#1a1a4d]">£0.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t p-6 space-y-4">
              <Link href="/basket" onClick={closeBasket}>
                <button className="w-full bg-[#00d4aa] text-white font-medium py-4 rounded-lg hover:bg-[#00c299] transition-colors text-lg">
                  Go to basket now :£{totalPrice.toFixed(2)}
                </button>
              </Link>
              <button
                onClick={closeBasket}
                className="w-full text-gray-600 font-medium py-3 hover:text-gray-800 transition-colors"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
