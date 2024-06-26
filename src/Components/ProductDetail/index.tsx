import { XMarkIcon } from "@heroicons/react/16/solid";
import "./styles.css";

export const ProductDetail = (): JSX.Element => {
  return (
    <aside className="product-detail flex flex-col fixed right-0 border border-black rounded bg-white">
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <button>
          <XMarkIcon className="size-6 text-black-500" />
        </button>
      </div>
    </aside>
  );
};
