import { IItem } from "../../Interface/interface";

export const buildOder = (cartProducts: IItem[], totalAmount: number) => {
  const buildProductsOrder = cartProducts.map(
    ({ quantity, category, id, title, price, images }) => ({
      quantity,
      category,
      id,
      title,
      price,
      images,
    })
  );
  const orderToAdd = {
    products: buildProductsOrder,
    date: new Date(),
    totalAmount,
    totalProducts: buildProductsOrder.length,
  };
  return orderToAdd;
};
