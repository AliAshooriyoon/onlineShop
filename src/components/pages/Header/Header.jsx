import Cart from "../Cart/Cart.jsx";

export const Header = () => {
  return (
    <>
      <div className="Header w-full h-20 flex justify-between items-center mb-24 ">
        <div className="nameBox pl-12 pt-6 flex  flex-wrap break-all items-center text-4xl text-yellow-400 max-[550px]:max-w-36 max-[550px]:pt-4 max-[550px]:pl-4 max-[550px]:text-2xl">
          Fertiggerichten
        </div>
        <div className="cartBoxShower pr-18 pt-6 text-yellow-400 text-2xl cursor-pointer ">
          <Cart />
        </div>
      </div>
    </>
  );
};
