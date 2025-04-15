import { useEffect, useState } from "react";
import { useDataCart } from "../../../useDataCart.jsx";

const Cart = () => {
  const { products } = useDataCart();
  const [cart, setCart] = useState(products);
  const [showCart, setShowCart] = useState(false);
  useEffect(() => {
    console.log(products);
    console.log(cart);
    setCart(products);
  });
  return (
    <>
      <div onClick={() => setShowCart(!showCart)} className="cart">
        Cart ( {products ? products.length : 0} )
      </div>
      {showCart &&
        cart.map((item) => <div className="cartBoxShower">{item.name}</div>)}
    </>
  );
};
export default Cart;
