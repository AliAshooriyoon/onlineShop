export const ProductCart = ({ item }) => {
  return (
    <>
      <div className="productCart">
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
      </div>
    </>
  );
};
