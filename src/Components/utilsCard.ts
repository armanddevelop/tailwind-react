import { IItem } from "../Interface/interface";

export const calculateAmount = (products: IItem[]) => {
  const total = products.reduce((acc, element) => {
    if (element.quantity) {
      acc += element.price * element.quantity;
    }
    return acc;
  }, 0);
  return total;
};
