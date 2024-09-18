import { useContext } from "react";
//import { TrashIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../Context";
import { CartContextType } from "../../Types/Types";
import { CheckoutButton } from "../../Atoms/Button";
import { buildOder } from "./utils";
import { Link } from "react-router-dom";
import { Card } from "./Card";

export const OrderCard = (): JSX.Element => {
  const {
    handleDeleteProduct,
    cartProducts,
    totalAmount,
    orders,
    setOrders,
    setCartProducts,
    closeSideMenu,
  } = useContext(ShoppingCartContext) || ({} as CartContextType);
  const handleCheckOut = () => {
    const orderToAdd = buildOder(cartProducts, totalAmount);
    setOrders([...orders, orderToAdd]);
    setCartProducts([]);
    closeSideMenu();
  };
  return (
    <>
      {cartProducts.map(({ quantity, id, images, title, price, category }) => (
        <div key={id}>
          <Card
            image={images.length === 3 ? images[0] : category.image}
            id={id}
            quantity={quantity as number}
            title={title}
            price={price}
            deleteProduct={handleDeleteProduct}
          />
        </div>
      ))}
      <div className="p-3">
        <span className="font-medium text-xl">Total: ${totalAmount} </span>
        <Link to="/my-orders/last">
          <CheckoutButton
            label="checkout"
            onClick={handleCheckOut}
            className="bg-black w-full py-3 text-white mt-5 rounded-lg"
          />
        </Link>
      </div>
    </>
  );
};
