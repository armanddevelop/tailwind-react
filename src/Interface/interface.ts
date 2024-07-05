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
