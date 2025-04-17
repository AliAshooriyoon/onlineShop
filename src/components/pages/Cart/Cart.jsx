import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
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
        <div className="itemsBox absolute top-16 mt-10 bg-stone-950 rounded-2xl w-[30rem] py-12 right-10 flex gap-8 flex-col p-6">
          {cart &&
            cart.map((item) => (
              <div
                className="cartBoxShower justify-between flex items-center gap-6"
                key={item.id}
              >
                {item.name}
                <div className="flex items-center gap-4">
                  <Count />
                </div>
                {`${item.price} $`}
              </div>
            ))}
        </div>
      )}
    </>
  );
};
export default Cart;
