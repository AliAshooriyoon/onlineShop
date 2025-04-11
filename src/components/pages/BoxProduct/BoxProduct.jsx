import { Product } from "../Product/Product.jsx";
import { useEffect, useState } from "react";
import { supabase } from "../../../supabase-client.js";
export const BoxProduct = () => {
  const [shopData, setShopData] = useState([]);
  const [loadedData, setLoadedData] = useState(false);

  useEffect(() => {
    const readData = async () => {
      const { data, error } = await supabase.from("menu").select("*");
      data
        ? setShopData(data) & console.log(data) & setLoadedData(true)
        : console.log("Error", error);
    };
    readData();
  }, []);
  return (
    <>
      <div className="boxProduct p-4 flex justify-between items-center w-[70%] mx-auto flex-wrap gap-y-12">
        {loadedData &&
          shopData.map((item) => <Product data={item} key={item.id} />)}
      </div>
    </>
  );
};
