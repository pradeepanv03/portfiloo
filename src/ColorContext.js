// src/ColorContext.js
import { createContext, useState } from 'react';

export const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('#76ABA8'); // 🟡 Default Yellow

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
};
