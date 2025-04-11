import { Product } from "../Product/Product.jsx";

export const BoxProduct = () => {
  return (
    <>
      <div className="boxProduct p-4 flex justify-between items-center w-[70%] mx-auto flex-wrap gap-y-12">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </>
  );
};
