import React, { useContext } from "react";
import { State } from "../context/stateContext";

export default function Table() {
  const { list, total } = useContext(State);

  return (
    <>
      <table width="100%" className="mb-10">
        <thead>
          <tr className="bg-gray-100 p-1">
            <td className="font-bold">Sr No</td>
            <td className="font-bold">Item Name</td>
            <td className="font-bold">Make</td>
            <td className="font-bold">Quantity</td>
            <td className="font-bold">UOM</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Discount</td>
          </tr>
        </thead>
        <tbody>
          {list.map(({ id, description, make, quantity, uom, price, discount }, index) => (
            <tr key={id} className="h-10">
              <td>{index + 1}</td>
              <td>{description}</td>
              <td>{make}</td>
              <td>{quantity}</td>
              <td>{uom}</td>
              <td>{price}</td>
              <td>{discount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">
          Rs. {total.toLocaleString()}
        </h2>
      </div>
    </>
  );
}
