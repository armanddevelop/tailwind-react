import { Card } from "../../Components/Card";
import { Layout } from "../../Components/Layout";
import { useItems } from "../../Hooks/useItems";

export const Home = (): JSX.Element => {
  const { items } = useItems();
  console.log("Home ", items);
  return (
    <Layout>
      <>
        <h1 className="text-3xl font-bold">Home</h1>
        <Card />
      </>
    </Layout>
  );
};
