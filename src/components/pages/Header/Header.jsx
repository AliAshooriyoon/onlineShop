import Cart from "../Cart/Cart.jsx";

export const Header = () => {
  return (
    <>
      <div className="Header w-full h-20 flex justify-between items-center mb-24">
        <div className="nameBox pl-12 pt-6 flex justify-baseline items-center text-4xl text-yellow-400">
          Fertiggerichten
        </div>
        <div className="cartBoxShower pr-18 pt-6 text-yellow-400 text-2xl cursor-pointer">
          <Cart />
        </div>
      </div>
    </>
  );
};
