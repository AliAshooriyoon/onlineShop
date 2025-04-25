import { useEffect } from "react";
import "./AllPrice.css";
import { useState } from "react";
export const AllPrice = ({ price, count, sendAllPrice }) => {
  const [newPrice, setNewPrice] = useState();
  // const [finalPrice, setFinalPrice] = useState(0);
  useEffect(() => {
    console.log(`Price : ${price}  count : ${count}`);
    setNewPrice(count * Number(price));
    console.log("AllPrice ist hier!");
    console.log("AllPrice kostet : ", count * price);
  }, [price, count]);
  useEffect(() => {
    // setFinalPrice((prev) => prev + newPrice);
    sendAllPrice(newPrice ? newPrice : price);
  }, [newPrice]);
  return (
    <>
      <div className="allPrice">{!newPrice ? price : newPrice} $</div>
    </>
  );
};
