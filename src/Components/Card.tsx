import { useContext } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { IItem } from "../Interface/interface";
import { ShoppingCartContext } from "../Context";
import { CartContextType } from "../Types/Types";
import { setQuatity } from "../Helpers/cardHelpers";

interface ICardProp {
  item: IItem;
}
export const Card = ({ item }: ICardProp): JSX.Element => {
  const {
    category: { name, image },
    price,
    title,
    images,
  } = item;
  const {
    setCount,
    count,
    openSideMenu,
    setProductDetail,
    setCartProducts,
    cartProducts,
  } = useContext(ShoppingCartContext) || ({} as CartContextType);
  const handleOnclick = () => {
    openSideMenu("Details");
    setProductDetail(item);
  };
  const addProductToCart = (evt: React.MouseEvent, product: IItem) => {
    evt.stopPropagation();
    const { productsWithQuantity } = setQuatity(cartProducts, product);
    setCartProducts(productsWithQuantity);
    setCount(count + 1);
    openSideMenu("Checkout");
  };

  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative  w-full h-4/5" onClick={handleOnclick}>
        <span className="absolute bottom-0 left-0 font-semibold text-black text-sm mx-1 mb-3 bg-slate-50 rounded">
          {name}
        </span>
        <img
          src={images.length === 3 ? images[0] : image}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
        <button
          className="absolute top-0 right-0 flex justify-center bg-stone-300 items-center w-8 h-8 rounded-full font-semibold border-2 border-neutral-300 m-2 p-1"
          onClick={(evt) => addProductToCart(evt, item)}
        >
          <PlusIcon />
        </button>
      </figure>
      <p className="flex justify-around items-center">
        <span className="text-sm font-light">{title}</span>
        <span className="text-lg font-medium">${price}</span>
      </p>
    </div>
  );
};
