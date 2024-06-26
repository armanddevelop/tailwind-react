import { useState, createContext } from "react";
import { CartContextType, ShoppingCardProps } from "../Types/Types";

export const ShoppingCartContext = createContext<CartContextType | null>(null);
export const ShoopingCardProvider = ({ children }: ShoppingCardProps) => {
  const [count, setCount] = useState<number>(0);
  return (
    <ShoppingCartContext.Provider value={{ count, setCount }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
