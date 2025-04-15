import { createContext, useState, useContext } from "react";

const cartData = createContext([]);
const DataCartShower = ({ children }) => {
  const [products, setProducts] = useState([]);
  const addToCart = (newVal) => {
    setProducts((prev) => [...prev, newVal]);
    console.log(products);
  };
  return (
    <cartData.Provider value={{ addToCart, products }}>
      {children}
    </cartData.Provider>
  );
};
export const useDataCart = () => useContext(cartData);
export default DataCartShower;
