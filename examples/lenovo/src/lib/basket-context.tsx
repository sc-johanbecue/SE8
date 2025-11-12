'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';
import { fireAddToCartEvent } from './cdp-events';

type BasketItem = {
  id: string;
  planName: string;
  dataAmount: string;
  quantity: number;
  price: number;
  period: string;
};

type BasketContextType = {
  items: BasketItem[];
  isOpen: boolean;
  addItem: (item: BasketItem) => void;
  removeItem: (id: string) => void;
  openBasket: () => void;
  closeBasket: () => void;
  totalPrice: number;
};

const defaultContextValue: BasketContextType = {
  items: [],
  isOpen: false,
  addItem: () => {},
  removeItem: () => {},
  openBasket: () => {},
  closeBasket: () => {},
  totalPrice: 0,
};

const BasketContext = createContext<BasketContextType>(defaultContextValue);

export function BasketProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<BasketItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = (item: BasketItem) => {
    setItems((prev) => [...prev, item]);
    console.log('🛒 ADD TO BASKET:', item.planName);
    fireAddToCartEvent(item);
    setIsOpen(true);
  };

  const removeItem = (id: string) => {
    console.log(`[v0] Removing item with id: ${id}`);
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const openBasket = () => setIsOpen(true);
  const closeBasket = () => setIsOpen(false);

  const totalPrice = items.reduce((sum, item) => {
    const price = item.price;
    return sum + price;
  }, 0);

  return (
    <BasketContext.Provider
      value={{ items, isOpen, addItem, removeItem, openBasket, closeBasket, totalPrice }}
    >
      {children}
    </BasketContext.Provider>
  );
}

export function useBasket() {
  const context = useContext(BasketContext);
  return context;
}
