import { useState, createContext } from "react";
import { CartContextType, ShoppingCardProps } from "../Types/Types";
import { IItem } from "../Interface/interface";

export const ShoppingCartContext = createContext<CartContextType | null>(null);
const initilaState: IItem = {
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
};
export const ShoopingCardProvider = ({ children }: ShoppingCardProps) => {
  //Quantity cart
  const [count, setCount] = useState<number>(0);
  //open/close Details
  const [isProductDetailOpen, setIsProductDetailOpen] =
    useState<boolean>(false);
  //Detail product
  const [productDetail, setProductDetail] = useState<IItem>(initilaState);
  //Shopping cart
  const [cartProducts, setCartProducts] = useState<IItem[]>([]);
  //checkoutSideMenu
  const [isCheckoutSideOpen, setIsCheckoutSideOpen] = useState<boolean>(false);

  const openSideMenu = (menuSide = "") => {
    if (menuSide === "Details") {
      setIsProductDetailOpen(true);
    } else if (menuSide === "Checkout") setIsCheckoutSideOpen(true);
    else if (menuSide === "") {
      setIsProductDetailOpen(false);
      setIsCheckoutSideOpen(false);
    }
  };

  const closeSideMenu = (menuSide = "") => {
    if (menuSide === "Details") {
      setIsProductDetailOpen(false);
    } else if (menuSide === "Checkout") {
      setIsCheckoutSideOpen(false);
    } else if (menuSide === "") {
      setIsProductDetailOpen(false);
      setIsCheckoutSideOpen(false);
    }
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartProducts,
        count,
        productDetail,
        setCartProducts,
        setProductDetail,
        setCount,
        isProductDetailOpen,
        isCheckoutSideOpen,
        openSideMenu,
        closeSideMenu,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
