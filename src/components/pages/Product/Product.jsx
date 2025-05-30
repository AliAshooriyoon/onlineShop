import { useContext, useState } from "react";
import "./Product.css";
import { useDataCart } from "../../../useDataCart.jsx";
export const Product = ({ data }) => {
  const { addToCart } = useDataCart();
  return (
    <>
      <div
        className="product lg:w-[30%] h-[45rem] text-white rounded-2xl bg-stone-700 md:w-[48%]"
        id={data.id}
      >
        <img
          src={data.picadd}
          alt=""
          className="productPic h-[50%] w-full rounded-t-2xl"
          draggable={false}
        />
        <div className="productInfo flex flex-col justify-between h-[50%] py-4">
          <p className="productTitle text-center text-3xl pt-2">{data.name}</p>
          <div className="priceShower text-center text-xl mt-4 p-2  text-yellow-400 lg:w-[32%] md:w-[40%] mx-auto rounded-[8px] flex justify-center items-center">
            {data.price} $
          </div>
          <div className="productCaption text-center pt-4 max-w-[90%] mx-auto">
            {data.caption}
          </div>
          <div className="buttonBox text-center p-4">
            <button
              onClick={() => addToCart(data)}
              type="button"
              className="btnBuy text-center mx-auto rounded-[10px] text-black bg-yellow-400 w-28 py-2 text-xl cursor-pointer"
            >
              Kaufen
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
