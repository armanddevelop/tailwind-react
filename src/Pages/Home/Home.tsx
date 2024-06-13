import { Card } from "../../Components/Card";
import { Layout } from "../../Components/Layout";

export const Home = (): JSX.Element => {
  return (
    <Layout>
      <>
        <h1 className="text-3xl font-bold">Home</h1>
        <Card />
      </>
    </Layout>
  );
};
