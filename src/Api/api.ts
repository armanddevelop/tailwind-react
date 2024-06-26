export const getItems = async <T>(service = ""): Promise<T | Array<[]>> => {
  try {
    const baseUrl = `https://api.escuelajs.co/api/v1/${service}`;
    const data = await fetch(baseUrl);
    const items = await data.json();
    return items;
  } catch (error) {
    console.error("[getItemsError]: ", error);
    return [];
  }
};
