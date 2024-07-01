import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { CartContextType } from "../../Types/Types";

export const CheckoutSideMenu = (): JSX.Element => {
  const { cartProducts, isCheckoutSideOpen, closeSideMenu } =
    useContext(ShoppingCartContext) || ({} as CartContextType);
  return (
    <aside
      className={`${
        isCheckoutSideOpen ? "flex" : "hidden"
      } product-detail  flex-col fixed right-0 border border-black rounded bg-white`}
    >
      <div className="flex justify-end items-center p-2">
        <button onClick={() => closeSideMenu("Checkout")}>
          <XMarkIcon className="size-6 text-black-500" />
        </button>
      </div>
    </aside>
  );
};
