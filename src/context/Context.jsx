import { createContext, useState } from 'react';

export const SendContext = createContext();

export function SendProvider({ children }) {
  const [isSended, setIsSended] = useState(false);

  return (
    <SendContext.Provider value={{ isSended, setIsSended }}>
      {children}
    </SendContext.Provider>
  );
}