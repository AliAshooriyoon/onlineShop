import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import { useDataCart } from "../../../useDataCart";

export const Count = ({ changeCount, item, doDelete }) => {
  const [countProduct, setCountProduct] = useState(1);
  const [wasIstEs, setWasEsIst] = useState(item);
  // const { deleteItem } = useDataCart();
  // -----------------------------------
  const deleteProduct = () => {
    console.log(wasIstEs);
    // deleteItem(wasIstEs);
    doDelete(true);
    setCountProduct(0);
    changeCount(0);
    console.log("deleteProduct");
  };
  const steigernNummer = () => {
    setCountProduct(countProduct < 10 ? countProduct + 1 : 10);
    console.log("steigernNummer");
  };
  const reduzierenNummer = () => {
    setCountProduct(countProduct > 1 ? countProduct - 1 : 1);
    console.log("reduzierenNummer");
  };
  const chnageFunc = (inp) => {
    // for changing Count with Input directly;
    setCountProduct(Number(inp));
    console.log("chnageFunc");
  };
  useEffect(() => {
    // changeCount(countProduct);
    changeCount(countProduct);
    console.log("Value ist geschickt! : ", countProduct);
  }, [countProduct]);
  return (
    <>
      {countProduct > 1 ? (
        <FaMinus onClick={reduzierenNummer} />
      ) : (
        <MdDelete onClick={deleteProduct} />
      )}
      <input
        className="count max-w-16 border-2 border-yellow-400 outline-0 rounded-2xl text-center"
        type="number"
        name="count"
        value={countProduct}
        onChange={(event) => chnageFunc(event.target.value)}
        min={"1"}
        max={"10"}
      />
      <FaPlus onClick={steigernNummer} />
    </>
  );
};
