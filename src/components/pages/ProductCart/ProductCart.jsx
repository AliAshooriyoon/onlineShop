import { useState } from "react";
import { AllPrice } from "../AllPrice/AllPrice";
import { Count } from "../Count/Count";
export const ProductCart = ({ item }) => {
  const [currentCount, setCurrentCount] = useState();
  const changeCount = (inp) => {
    setCurrentCount(Number(inp));
  };

  return (
    <>
      <tbody className="" key={item.id}>
        <tr>
          <th scope="col" className="py-2">
            {item.name}
          </th>
          <td scope="col" className="flex gap-1 px-4 items-center">
            <Count changeCount={changeCount} />
          </td>
          <td scope="col">
            <AllPrice price={item.price} count={currentCount} />
          </td>
        </tr>
      </tbody>
    </>
  );
};
