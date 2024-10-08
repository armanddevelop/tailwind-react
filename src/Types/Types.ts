import { ReactNode } from "react";
import { IItem, IRoute, IItemOrder } from "../Interface/interface";

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
  totalAmount: number;
  orders: Array<IItemOrder>;
  setOrders: React.Dispatch<React.SetStateAction<IItemOrder[]>>;
  setTotalAmount: React.Dispatch<React.SetStateAction<number>>;
  setCartProducts: React.Dispatch<React.SetStateAction<IItem[]>>;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  setProductDetail: React.Dispatch<React.SetStateAction<IItem>>;
  openSideMenu: (menuSide?: string) => void;
  closeSideMenu: (menuSide?: string) => void;
  handleDeleteProduct: (id: number, quantity: number, price: number) => void;
};
