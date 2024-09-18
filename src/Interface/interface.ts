export interface IRoute {
  path: string;
  element?: JSX.Element | string;
  name?: string;
}
export interface ICategory {
  id: number;
  name: string;
  image: string;
  creationAt: Date;
  updatedAt: Date;
}
export interface IItem {
  id: number;
  title: string;
  price: number;
  description: string;
  images: Array<string>;
  creationAt: Date;
  updatedAt: Date;
  category: ICategory;
  quantity?: number;
}

type TypeProductOrder = Pick<
  IItem,
  "quantity" | "id" | "title" | "category" | "price" | "images"
>;
export interface IItemOrder {
  date: Date;
  totalAmount: number;
  totalProducts: number;
  products: Array<TypeProductOrder>;
}
