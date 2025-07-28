import React from 'react'
import { createContext, useState } from 'react';

export const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('#FFC436'); // 🟡 Yellow

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
};

