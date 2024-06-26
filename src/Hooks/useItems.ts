import { useEffect, useState } from "react";
import { getItems } from "../Api/api";
import { Items } from "../Types/Types";

export const useItems = () => {
  const [items, setItems] = useState<Items>([]);
  useEffect(() => {
    getItems("products")
      .then((data) => setItems(data as Items))
      .catch((err) => console.error("[useItemsError]: ", err));
  }, []);

  return { items };
};
