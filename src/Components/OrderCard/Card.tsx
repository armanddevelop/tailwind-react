import { TrashIcon } from "@heroicons/react/24/outline";

interface ICardProps {
  image: string;
  title: string;
  price: number;
  quantity: number;
  deleteProduct: (id: number, quantity: number, price: number) => void;
  id: number;
}

export const Card = ({
  image,
  title,
  price,
  quantity,
  deleteProduct,
  id,
}: ICardProps): JSX.Element => {
  return (
    <>
      <div className="flex items-center gap-2 mt-3 ml-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={image}
            alt={title}
          />
        </figure>
        <p className="text-lg font-medium">
          $ {price} X {quantity} = {quantity && price * quantity}
        </p>
        <button onClick={() => deleteProduct(id, quantity as number, price)}>
          <TrashIcon className="size-6 text-red-500" />
        </button>
      </div>
      <p className="text-sm font-light mb-3 ml-3">{title}</p>
      <hr />
    </>
  );
};
