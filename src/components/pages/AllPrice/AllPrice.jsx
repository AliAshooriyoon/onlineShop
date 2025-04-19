import { useEffect } from "react";
import "./AllPrice.css";
import { useState } from "react";
export const AllPrice = ({ price, count }) => {
  const [newPrice, setNewPrice] = useState();
  useEffect(() => {
    console.log(`Price : ${price}  count : ${count}`);
    setNewPrice(count * Number(price));
    console.log("AllPrice ist hier!");
    console.log("AllPrice kostet : ", count * price);
  }, [price, count]);
  return (
    <>
      <div className="allPrice">{!newPrice ? price : newPrice} $</div>
    </>
  );
};
