import { Layout } from "../../Components/Layout";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { CartContextType } from "../../Types/Types";
import { Card } from "../../Components/OrderCard/Card";

export const MyOrder = (): JSX.Element => {
  const { orders, handleDeleteProduct } =
    useContext(ShoppingCartContext) || ({} as CartContextType);
  console.log("esto vale orders ", orders);
  return (
    <Layout>
      <>
        {orders.length !== 0 &&
          orders.map(({ products, totalAmount, totalProducts }) =>
            products.map(({ images, price, quantity, title, category, id }) => {
              return (
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
              );
            })
          )}
      </>
    </Layout>
  );
};
