import { IItem } from "../Interface/interface";

export const setQuatity = (cartProducts: IItem[], product: IItem) => {
  const productsWithQuantity = [...cartProducts];
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
    } else {
      productsWithQuantity.push(product);
    }
  }
  return { productsWithQuantity };
};

export const deleteProduct = <T extends object>(
  products: T[],
  id: number,
  quantity?: number,
  price?: number
): T[] => {
  let newProducts: T[] = [];
  if ("quantity" in products[0]) {
    const updateProducts = [...products];
    updateProducts.forEach((product) => {
      if (product.id === id) {
        delete product.quantity;
      }
    });
    newProducts = updateProducts.filter((item) => item.id !== id);
  } else {
    const updateOrders = [...products];
    updateOrders.forEach(({ date, products, totalAmount }) => {
      const newProductsOrder = products.filter((item) => item.id !== id);
      const objTest = {
        date,
        products: newProductsOrder,
        totalProducts: newProductsOrder.length,
        totalAmount: quantity && price && totalAmount - quantity * price,
      };
      newProducts.push(objTest);
    });
  }
  return newProducts;
};
