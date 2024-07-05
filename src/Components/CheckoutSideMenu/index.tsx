import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { CartContextType } from "../../Types/Types";
import "../../Styles/styles.css";
import { OrderCard } from "../OrderCard";

export const CheckoutSideMenu = (): JSX.Element => {
  const { cartProducts, isCheckoutSideOpen, closeSideMenu, count } =
    useContext(ShoppingCartContext) || ({} as CartContextType);
  return (
    <aside
      className={`${
        isCheckoutSideOpen && count > 0 ? "flex" : "hidden"
      } side-details   flex-col fixed right-0 border border-black rounded bg-white`}
    >
      <div className="flex justify-between items-center p-2">
        <h2 className="font-medium text-xl">My Order Details</h2>
        <button onClick={() => closeSideMenu("Checkout")}>
          <XMarkIcon className="size-6 text-black-500" />
        </button>
      </div>
      <OrderCard cartProducts={cartProducts} />
    </aside>
  );
};
