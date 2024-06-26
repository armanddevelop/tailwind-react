import { ShoppingCartIcon as ShoppingCardIconSolid } from "@heroicons/react/16/solid";
import { ShoppingCartIcon as ShoppingCardIconOutline } from "@heroicons/react/24/outline";

interface ICartIconProps {
  count?: number;
}

export const CartIcon = ({ count }: ICartIconProps): JSX.Element => {
  return (count as number) > 0 ? (
    <ShoppingCardIconSolid className="size-6 text-black-500" />
  ) : (
    <ShoppingCardIconOutline className="size-6 text-black-500" />
  );
};
