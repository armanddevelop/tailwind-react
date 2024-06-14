export const getItems = async <T>(url = ""): Promise<T | Array<[]>> => {
  try {
    const data = await fetch(url);
    const items = await data.json();
    console.log("items ", items);
    return items;
  } catch (error) {
    console.error("[getItemsError]: ", error);
    return [];
  }
};
