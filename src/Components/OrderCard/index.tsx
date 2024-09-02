import { useContext } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../Context";
import { CartContextType } from "../../Types/Types";

export const OrderCard = (): JSX.Element => {
  const { handleDeleteProduct, cartProducts, totalAmount } =
    useContext(ShoppingCartContext) || ({} as CartContextType);
  return (
    <>
      {cartProducts.map(({ quantity, id, images, title, price }) => {
        return (
          <div key={id}>
            <div className="flex items-center gap-2 mt-3 ml-2">
              <figure className="w-20 h-20">
                <img
                  className="w-full h-full rounded-lg object-cover"
                  src={images[0]}
                  alt={title}
                />
              </figure>
              <p className="text-lg font-medium">
                $ {price} X {quantity} = {quantity && price * quantity}
              </p>
              <button
                onClick={() =>
                  handleDeleteProduct(id, quantity as number, price)
                }
              >
                <TrashIcon className="size-6 text-red-500" />
              </button>
            </div>
            <p className="text-sm font-light mb-3 ml-3">{title}</p>
            <hr />
          </div>
        );
      })}
      <div className="p-2">
        <span>Total: {totalAmount} </span>
      </div>
    </>
  );
};
