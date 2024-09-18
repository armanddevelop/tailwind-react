import { useState, createContext } from "react";
import { CartContextType, ShoppingCardProps } from "../Types/Types";
import { IItem, IItemOrder } from "../Interface/interface";
import { deleteProduct } from "../Helpers/cardHelpers";

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
  //calculate total amount
  const [totalAmount, setTotalAmount] = useState<number>(0);
  //order
  const [orders, setOrders] = useState<IItemOrder[]>([]);

  const openSideMenu = (menuSide = "") => {
    if (menuSide === "Details") {
      setIsProductDetailOpen(true);
      setIsCheckoutSideOpen(false);
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
  const handleDeleteProduct = (
    idProduct: number,
    quantity: number,
    price: number
  ) => {
    if (cartProducts.length === 0) {
      const products = deleteProduct<IItemOrder>(
        orders,
        idProduct,
        quantity,
        price
      );
      setOrders([...products]);
      setCount(count - quantity);
    } else {
      const products = deleteProduct<IItem>(cartProducts, idProduct);
      setTotalAmount(totalAmount - price * quantity);
      setCartProducts(products);
      setCount(count - quantity);
    }
  };
  return (
    <ShoppingCartContext.Provider
      value={{
        cartProducts,
        count,
        productDetail,
        totalAmount,
        orders,
        setTotalAmount,
        setCartProducts,
        setProductDetail,
        setCount,
        setOrders,
        isProductDetailOpen,
        isCheckoutSideOpen,
        openSideMenu,
        closeSideMenu,
        handleDeleteProduct,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
