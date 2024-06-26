import { ReactNode } from "react";
import { IItem, IRoute } from "../Interface/interface";

export type RoutesType = IRoute[];
export type Items = Array<IItem>;
export type ShoppingCardProps = {
  children: ReactNode;
};
export type CartContextType = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};
