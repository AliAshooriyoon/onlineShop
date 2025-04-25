import { useEffect, useState } from "react";
import { useDataCart } from "../../../useDataCart.jsx";
// import { Count } from "../Count/Count.jsx";
// import { AllPrice } from "../AllPrice/AllPrice.jsx";
import { ProductCart } from "../ProductCart/ProductCart.jsx";
import { Rechnung } from "../Rechnung/Rechnung.jsx";
import { useStatusOpacity } from "../../../useFinalCartData.jsx";

const Cart = () => {
  const { products } = useDataCart();
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showRechnung, setShowRechnung] = useState(false);
  const [finalPrice, setFinalPrice] = useState([]);
  const [calculateFinal, setCalculateFinal] = useState(0);
  useEffect(() => {
    const newMap = new Map();
    // console.log(products);
    products.forEach((element) => {
      newMap.set(`item${element.id}`, element);
    });
    // console.log([...newMap]);
    // console.log(Array.from(newMap));
    const arrForm = [...newMap];
    const secondItem = arrForm.map((i) => i[1]);
    setCart(secondItem);
    // console.log(secondItem);
    // console.log(newMap);
  }, [products]);
  const { changeStatus } = useStatusOpacity();
  useEffect(() => {
    changeStatus(showRechnung);
    console.log(showRechnung);
  }, [showRechnung, changeStatus]);
  // --------------------------------------
  // Funktionen :
  const getAllFinalPrice = (inpID, inpValue) => {
    // finalPrice.inpID = inpValue;
    console.log(inpID);
    console.log(inpValue);
    // finalPrice[inpID] = inpValue;
    setFinalPrice((prev) => {
      prev[inpID] = inpValue;
      return [...prev];
    });
  };
  const closeRechnung = (inp) => {
    setShowRechnung(inp);
  };
  useEffect(() => {
    setCalculateFinal(0);
    console.log(
      "-----------------------finalPrice-----------------------------",
    );
    console.log(finalPrice);
    finalPrice.forEach((item) => {
      setCalculateFinal((prev) => (item ? prev + Number(item) : prev));
    });
  }, [finalPrice]);
  useEffect(() => {
    console.log("********************calculateFinal***********************");
    console.log(calculateFinal);
  }, [calculateFinal]);
  return (
    <>
      <div onClick={() => setShowCart(!showCart)} className={`cart `}>
        Cart ( {cart ? cart.length : 0} )
      </div>
      {showCart && (
        <div className="itemsBox absolute top-16 mt-10 bg-stone-950 rounded-2xl w-[45rem] py-12 right-10 p-6">
          <table className="w-full text-center">
            <thead className="w-full">
              <tr className="flex justify-between w-full ">
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            {cart &&
              cart.map((item) => (
                <ProductCart
                  item={item}
                  num={item.id}
                  getAllFinalPrice={getAllFinalPrice}
                />
              ))}
          </table>
          <div className="btns flex w-full justify-around">
            <button
              className="cursor-pointer bg-amber-500 text-white py-3 px-8 rounded-2xl text-2xl"
              type="button"
              onClick={() => setShowRechnung(true)}
            >
              Kaufen
            </button>
            <button
              onClick={() => setShowCart(false)}
              className="cursor-pointer bg-cyan-500 text-white py-2 px-8 rounded-2xl"
              type="button"
            >
              weiter suchen
            </button>
          </div>
        </div>
      )}
      {showRechnung && (
        <Rechnung
          closeRechnung={closeRechnung}
          calculateFinal={calculateFinal}
        />
      )}
    </>
  );
};
export default Cart;
