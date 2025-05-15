import { useState } from "react";
import Cart from "../Cart/Cart.jsx";
export const Header = () => {
  const [pageSize, setPageSize] = useState();
  const checkSize = () => {
    console.log(window.innerWidth);
    setPageSize(window.innerWidth);
  };
  window.addEventListener("load", checkSize);
  return (
    <>
      <div className="Header w-full h-20 flex justify-between items-center mb-24">
        <div className="nameBox pl-12 pt-6 flex  flex-wrap break-all items-center text-4xl text-yellow-400 max-[550px]:max-w-36 max-[550px]:pt-4 max-[550px]:pl-4 max-[550px]:text-2xl">
          <img
            src="Food4-removebg-preview.png"
            alt=""
            className="sm:w-24 sm:h-20 mb:max-w-24 mb:h-20 "
          />{" "}
          {pageSize > 450 && "Fertiggerichten"}
        </div>
        <div className="cartBoxShower sm:pr-18 mb:pr-8 pt-6 text-yellow-400 text-2xl cursor-pointer ">
          <Cart />
        </div>
      </div>
    </>
  );
};
