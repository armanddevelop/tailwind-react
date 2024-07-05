import { TrashIcon } from "@heroicons/react/24/outline";
import { IItem } from "../../Interface/interface";

interface IOrderCard {
  cartProducts: IItem[];
}
export const OrderCard = ({ cartProducts }: IOrderCard): JSX.Element => {
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
                $ {price} X {quantity}
              </p>
              <button>
                <TrashIcon className="size-6 text-red-500" />
              </button>
            </div>
            <p className="text-sm font-light mb-3 ml-3">{title}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
};
