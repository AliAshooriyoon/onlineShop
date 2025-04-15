import { useEffect, useState } from "react";
import { useDataCart } from "../../../useDataCart.jsx";

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
        <div className="itemsBox absolute top-16">
          {cart &&
            cart.map((item) => (
              <div className="cartBoxShower absolu" key={item.id}>
                {item.name}
              </div>
            ))}
        </div>
      )}
    </>
  );
};
export default Cart;
