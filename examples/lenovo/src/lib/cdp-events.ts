/**
 * CDP Event Tracking Utilities
 *
 * Centralized functions for firing Sitecore CDP events.
 * Uses @sitecore-cloudsdk/events for event tracking.
 *
 * @see https://doc.sitecore.com/sdk/en/developers/latest/cloud-sdk/events.html
 * @see https://doc.sitecore.com/sdk/en/developers/latest/cloud-sdk/custom-events.html
 */

import { event, identity } from '@sitecore-cloudsdk/events/browser';

/**
 * CDP Configuration Constants
 */
const CDP_CONFIG = {
  channel: 'WEB' as const,
  currency: 'GBP' as const,
  language: 'en' as const,
};

/**
 * CDP Event Type Constants
 */
const CDP_EVENTS = {
  ADD_TO_BASKET: 'ADD_TO_BASKET',
  SEARCH_PERFORMED: 'SEARCH_PERFORMED',
} as const;

/**
 * Basket Item Type (matches basket-context.tsx structure)
 */
type BasketItem = {
  id: string;
  planName: string;
  dataAmount: string;
  price: number;
  period: string;
};

/**
 * Clean and normalize product data before sending to CDP
 *
 * Normalizes product data for CDP:
 * - Trims planName and dataAmount strings
 * - Passes price as-is (already a number)
 * - Removes leading "/" from period
 * - Handles missing values gracefully
 *
 * @param item - Raw basket item data
 * @returns Cleaned product data ready for CDP
 */
function cleanProductData(item: BasketItem) {
  return {
    planName: (item.planName || '').trim(),
    dataAmount: (item.dataAmount || '').trim(),
    // Price is already a number, no cleaning needed
    price: item.price,
    // Remove leading / with optional spaces, trim result
    period: (item.period || '').replace(/^\s*\/\s*/, '').trim(),
  };
}

/**
 * Fire ADD_TO_BASKET event when user adds item to basket
 *
 * @param item - The basket item being added
 * @returns Promise that resolves when event is sent
 *
 * @example
 * await fireAddToCartEvent({
 *   id: 'plan-123',
 *   planName: '10GB Data Plan',
 *   dataAmount: '10GB',
 *   price: 10.00,
 *   period: '/ 30 days'
 * });
 */
export async function fireAddToCartEvent(item: BasketItem): Promise<void> {
  try {
    // Clean product data before sending to CDP
    const cleanedData = cleanProductData(item);

    await event({
      type: CDP_EVENTS.ADD_TO_BASKET,
      channel: CDP_CONFIG.channel,
      currency: CDP_CONFIG.currency,
      language: CDP_CONFIG.language,
      extensionData: {
        // Extension data (max 50 custom attributes)
        planName: cleanedData.planName,
        dataAmount: cleanedData.dataAmount,
        price: cleanedData.price,
        period: cleanedData.period,
      },
    });

    // Debug logging for development
    console.log('[CDP] ADD_TO_BASKET event sent', {
      type: CDP_EVENTS.ADD_TO_BASKET,
      data: item,
      cleanedData,
    });
  } catch (error) {
    // Log errors but don't throw - CDP tracking should not break app functionality
    console.error('[CDP] Failed to send ADD_TO_BASKET event', error);
  }
}

/**
 * Fire IDENTITY event when user provides email address
 *
 * This event associates the current session with a known email address,
 * enabling personalized tracking and communications.
 *
 * @param email - User's email address
 * @returns Promise that resolves when event is sent
 *
 * @example
 * await fireIdentityEvent('user@example.com');
 */
export async function fireIdentityEvent(email: string): Promise<void> {
  try {
    await identity({
      channel: CDP_CONFIG.channel,
      currency: CDP_CONFIG.currency,
      email: email.toLowerCase().trim(),
      identifiers: [
        {
          provider: 'email',
          id: email.toLowerCase().trim(),
        },
      ],
    });

    console.debug('[CDP] IDENTITY event sent', {
      email: email.toLowerCase(),
    });
  } catch (error) {
    console.error('[CDP] Failed to send IDENTITY event', error);
  }
}

/**
 * Fire SEARCH_PERFORMED event when user performs a search
 *
 * Tracks search behavior for analytics and personalization.
 * Placeholder implementation - to be integrated when search UI is available.
 *
 * @param searchTerm - The search query entered by the user
 * @returns Promise that resolves when event is sent
 *
 * @example
 * await fireSearchEvent('unlimited data plans');
 */
export async function fireSearchEvent(searchTerm: string): Promise<void> {
  try {
    await event({
      type: CDP_EVENTS.SEARCH_PERFORMED,
      channel: CDP_CONFIG.channel,
      currency: CDP_CONFIG.currency,
      language: CDP_CONFIG.language,
      extensionData: {
        // Extension data
        searchTerm: searchTerm.trim(),
        timestamp: new Date().toISOString(),
      },
    });

    console.debug('[CDP] SEARCH_PERFORMED event sent', {
      searchTerm,
    });
  } catch (error) {
    console.error('[CDP] Failed to send SEARCH_PERFORMED event', error);
  }
}

/**
 * Export constants for use in other parts of the application
 */
export { CDP_CONFIG, CDP_EVENTS };
