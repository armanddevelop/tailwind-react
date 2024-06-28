import { useState, createContext } from "react";
import { CartContextType, ShoppingCardProps } from "../Types/Types";
import { IItem } from "../Interface/interface";

export const ShoppingCartContext = createContext<CartContextType | null>(null);
export const ShoopingCardProvider = ({ children }: ShoppingCardProps) => {
  //Quantity cart
  const [count, setCount] = useState<number>(0);
  //open/close Details
  const [isProductDetailOpen, setIsProductDetailOpen] =
    useState<boolean>(false);
  //Detail product
  const [productDetail, setProductDetail] = useState<IItem>({
    title: "",
    images: [],
    category: {
      id: 0,
      name: "",
      image: "",
      creationAt: new Date(),
      updatedAt: new Date(),
    },
    creationAt: new Date(),
    updatedAt: new Date(),
    id: 0,
    price: 0,
    description: "",
  });

  const openProductDetail = () => setIsProductDetailOpen(true);

  const closeProductDetail = () => setIsProductDetailOpen(false);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        productDetail,
        setProductDetail,
        setCount,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
