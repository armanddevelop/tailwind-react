import { Card } from "../../Components/Card";
import { Layout } from "../../Components/Layout";
import { ProductDetail } from "../../Components/ProductDetail";
import { useItems } from "../../Hooks/useItems";

export const Home = (): JSX.Element => {
  const { items } = useItems();
  return (
    <Layout>
      <>
        <h1 className="text-3xl font-bold mb-2">Home</h1>
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          {items.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
        <ProductDetail />
      </>
    </Layout>
  );
};
