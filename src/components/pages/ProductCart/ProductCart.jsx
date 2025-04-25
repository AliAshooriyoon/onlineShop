import { useEffect, useMemo, useState } from "react";
import { AllPrice } from "../AllPrice/AllPrice";
import { Count } from "../Count/Count";
export const ProductCart = ({ item, getAllFinalPrice, num }) => {
  const [currentCount, setCurrentCount] = useState();
  const [finalPrice, setFinalPrice] = useState(0);
  const changeCount = (inp) => {
    setCurrentCount(Number(inp));
  };
  const giveFinalPrice = (inp) => {
    setFinalPrice(inp);
  };
  useEffect(() => {
    getAllFinalPrice(Number(num), Number(finalPrice));
  }, [finalPrice]);
  return (
    <>
      <tbody className="" key={item.id}>
        <tr>
          <th scope="col" className="py-2">
            {num} {item.name}
          </th>
          <td scope="col" className="flex gap-1 px-4 items-center">
            <Count changeCount={changeCount} />
          </td>
          <td scope="col">
            <AllPrice
              price={item.price}
              count={currentCount}
              sendAllPrice={giveFinalPrice}
            />
          </td>
        </tr>
      </tbody>
    </>
  );
};
