import { useEffect, useState } from "react";
import { getItems } from "../Api/api";
import { Items } from "../Types/Types";

export const useItems = () => {
  const [items, setItems] = useState<Items>([]);
  useEffect(() => {
    getItems("https://api.escuelajs.co/api/v1/products")
      .then((data) => setItems(data as Items))
      .catch((err) => console.error(err));
  }, []);

  return { items };
};
