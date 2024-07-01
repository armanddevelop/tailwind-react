import { ReactNode } from "react";
import { IItem, IRoute } from "../Interface/interface";

export type RoutesType = IRoute[];
export type Items = Array<IItem>;
export type ShoppingCardProps = {
  children: ReactNode;
};
export type CartContextType = {
  count: number;
  isProductDetailOpen: boolean;
  isCheckoutSideOpen: boolean;
  productDetail: IItem;
  cartProducts: Array<IItem>;
  setCartProducts: React.Dispatch<React.SetStateAction<IItem[]>>;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  setProductDetail: React.Dispatch<React.SetStateAction<IItem>>;
  openSideMenu: (menuSide?: string) => void;
  closeSideMenu: (menuSide?: string) => void;
};
