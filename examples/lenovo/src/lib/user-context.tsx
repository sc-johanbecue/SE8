'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';

type UserInfo = {
  firstName: string;
  lastName: string;
  email: string;
};

type UserContextType = {
  userInfo: UserInfo;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  setEmail: (email: string) => void;
  updateUserInfo: (info: Partial<UserInfo>) => void;
};

const defaultContextValue: UserContextType = {
  userInfo: { firstName: '', lastName: '', email: '' },
  setFirstName: () => {},
  setLastName: () => {},
  setEmail: () => {},
  updateUserInfo: () => {},
};

const UserContext = createContext<UserContextType>(defaultContextValue);

export function UserProvider({ children }: { children: ReactNode }) {
  const [userInfo, setUserInfo] = useState<UserInfo>({ firstName: '', lastName: '', email: '' });

  const setFirstName = (firstName: string) => {
    setUserInfo((prev) => ({ ...prev, firstName }));
  };

  const setLastName = (lastName: string) => {
    setUserInfo((prev) => ({ ...prev, lastName }));
  };

  const setEmail = (email: string) => {
    setUserInfo((prev) => ({ ...prev, email }));
  };

  const updateUserInfo = (info: Partial<UserInfo>) => {
    setUserInfo((prev) => ({ ...prev, ...info }));
  };

  return (
    <UserContext.Provider value={{ userInfo, setFirstName, setLastName, setEmail, updateUserInfo }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  return context;
}
