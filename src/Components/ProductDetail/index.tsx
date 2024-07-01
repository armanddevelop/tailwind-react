import { XMarkIcon } from "@heroicons/react/16/solid";
import "./styles.css";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { CartContextType } from "../../Types/Types";

export const ProductDetail = (): JSX.Element => {
  const { isProductDetailOpen, closeSideMenu, productDetail } =
    useContext(ShoppingCartContext) || ({} as CartContextType);

  const {
    images,
    title,
    price,
    description,
    category: { image },
  } = productDetail;
  return (
    <aside
      className={`${
        isProductDetailOpen ? "flex" : "hidden"
      } product-detail  flex-col fixed right-0 border border-black rounded bg-white`}
    >
      <div className="flex justify-end items-center p-2">
        <button onClick={() => closeSideMenu("Details")}>
          <XMarkIcon className="size-6 text-black-500" />
        </button>
      </div>
      <p className="font-medium text-md flex justify-around items-center pb-5">
        <span> {title}</span>
      </p>
      <figure className="px-6">
        <img
          className="w-full h-full rounded-lg"
          src={images.length === 3 ? images[0] : image}
          alt={title}
        />
      </figure>
      <p className="flex flex-col p-6 ">
        <span className="font-medium text-xl mb-2">Price $ {price}</span>
        <span className="font-light text-sm">{description}</span>
      </p>
    </aside>
  );
};
