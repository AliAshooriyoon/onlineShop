import { useEffect, useMemo, useState } from "react";
import { AllPrice } from "../AllPrice/AllPrice";
import { Count } from "../Count/Count";
import { useDataCart } from "../../../useDataCart";
export const ProductCart = ({ item, getAllFinalPrice, num }) => {
  const [currentCount, setCurrentCount] = useState();
  const [finalPrice, setFinalPrice] = useState(0);
  const [doDelete, setDoDelete] = useState(false);
  const [deleteFinal, setDeleteFinal] = useState(1);
  const { deleteItem } = useDataCart();

  const doDeleteFunc = (stat) => {
    setDoDelete(stat);
    setDeleteFinal(2);
  };
  const changeCount = (inp) => {
    setCurrentCount(Number(inp));
    console.log(`Change Count ist : ${inp}`);
    console.log(inp);
  };
  const giveFinalPrice = (inp) => {
    setFinalPrice(doDelete ? 0 : inp);
    console.log(doDelete ? 0 : inp);
  };
  useEffect(() => {
    getAllFinalPrice(Number(num), Number(finalPrice));
    console.log(Number(num), Number(finalPrice));
    console.log("-----------finalPrice------------");
    console.log(finalPrice);
    deleteFinal == 2 && deleteItem(item);
    //disable-eslint-next-line
  }, [finalPrice]);
  return (
    <>
      <tbody className="" key={item.id}>
        <tr>
          <th scope="col" className="py-2">
            {/* {num}  */}
            {item.name}
          </th>
          <td scope="col" className="flex gap-1 px-4 items-center">
            <Count
              changeCount={changeCount}
              item={item}
              doDelete={doDeleteFunc}
            />
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
