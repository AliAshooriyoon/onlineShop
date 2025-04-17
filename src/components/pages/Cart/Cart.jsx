import { useEffect, useState } from "react";
import { useDataCart } from "../../../useDataCart.jsx";
import { Count } from "../Count.jsx";

const Cart = () => {
  const { products } = useDataCart();
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  useEffect(() => {
    const newMap = new Map();
    console.log(products);
    products.forEach((element) => {
      newMap.set(`item${element.id}`, element);
    });
    console.log([...newMap]);
    console.log(Array.from(newMap));
    const arrForm = [...newMap];
    const secondItem = arrForm.map((i) => i[1]);
    setCart(secondItem);
    console.log(secondItem);
    console.log(newMap);
  }, [products]);
  useEffect(() => {
    console.log(cart);
  }, [cart]);
  // --------------------------------------

  return (
    <>
      <div onClick={() => setShowCart(!showCart)} className="cart">
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
                <tbody className="">
                  <tr>
                    <th scope="col" className="py-2">
                      {item.name}
                    </th>
                    <td scope="col" className="flex gap-1 px-4 items-center">
                      <Count />
                    </td>
                    <td scope="col">{item.price} $</td>
                  </tr>
                </tbody>
              ))}
          </table>
          <div className="btns flex w-full justify-around">
            <button
              className="cursor-pointer bg-amber-500 text-white py-3 px-8 rounded-2xl text-2xl"
              type="button"
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
    </>
  );
};
export default Cart;
