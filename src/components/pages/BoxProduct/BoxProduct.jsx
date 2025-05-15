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
      <div className="boxProduct p-2 flex justify-between items-center xl:w-[80%] lg:w-[90%] mx-auto flex-wrap xl:gap-[2rem] sm:gap-[2rem] gap-4">
        {loadedData &&
          shopData.map((item) => <Product data={item} key={item.id} />)}
      </div>
    </>
  );
};
