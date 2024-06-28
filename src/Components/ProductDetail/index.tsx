import { XMarkIcon } from "@heroicons/react/16/solid";
import "./styles.css";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { CartContextType } from "../../Types/Types";

export const ProductDetail = (): JSX.Element => {
  const { isProductDetailOpen, closeProductDetail, productDetail } =
    useContext(ShoppingCartContext) || ({} as CartContextType);
  console.log(productDetail);
  const {
    images,
    title,
    category: { image },
  } = productDetail;
  return (
    <aside
      className={`${
        isProductDetailOpen ? "flex" : "hidden"
      } product-detail  flex-col fixed right-0 border border-black rounded bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <button onClick={closeProductDetail}>
          <XMarkIcon className="size-6 text-black-500" />
        </button>
      </div>
      <figure>
        <img src={image} alt={title} />
      </figure>
    </aside>
  );
};
