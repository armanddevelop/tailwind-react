import { IItem } from "../Interface/interface";

export const setQuatity = (cartProducts: IItem[], product: IItem) => {
  const productsWithQuantity = cartProducts;
  const findProduct = cartProducts.find((item) => item.id === product.id);
  if (findProduct) {
    productsWithQuantity.forEach((item) => {
      if (item.id === findProduct.id) {
        item.quantity = (item.quantity as number) + 1;
      }
    });
  } else {
    if (!product.quantity) {
      product.quantity = 0;
      product.quantity = product.quantity + 1;
      productsWithQuantity.push(product);
    }
  }
  return { productsWithQuantity };
};
