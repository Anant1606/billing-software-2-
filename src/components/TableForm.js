import React, { useContext } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteModal from "./DeleteModal";
import { State } from "../context/stateContext";

export default function TableForm() {
  const {
    description,
    setDescription,
    make,
    setMake,
    quantity,
    setQuantity,
    uom,
    setUom,
    price,
    setPrice,
    discount,
    setDiscount,
    list,
    total,
    isEditing,
    showModal,
    setShowModal,
    handleSubmit,
    editRow,
  } = useContext(State);

  return (
    <>
      <ToastContainer position="top-right" theme="colored" />

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:mt-16">
          <label htmlFor="description">Item description</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Item description"
            maxLength={96}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="make">Make</label>
          <input
            type="text"
            name="make"
            id="make"
            placeholder="Make"
            maxLength={96}
            value={make}
            onChange={(e) => setMake(e.target.value)}
          />
        </div>

        <div className="md:grid grid-cols-3 gap-10">
          <div className="flex flex-col">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="text"
              name="quantity"
              id="quantity"
              placeholder="Quantity"
              maxLength={33}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="uom">UOM</label>
            <input
              type="text"
              name="uom"
              id="uom"
              placeholder="UOM"
              maxLength={33}
              value={uom}
              onChange={(e) => setUom(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="Price"
              maxLength={33}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="discount">Discount</label>
            <input
              type="text"
              name="discount"
              id="discount"
              placeholder="Discount"
              maxLength={33}
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 mb-5 text-white font-bold py-2 px-8 rounded hover:bg-blue-600 hover:text-white transition-all duration-150 hover:ring-4 hover:ring-blue-400"
        >
          {isEditing ? "Finish Editing" : "Add Table Item"}
        </button>
      </form>

      {/* Table items */}

      <table width="100%" className="mb-10 overflow-auto">
        <thead>
          <tr className="bg-gray-100 p-1">
            <td className="font-bold">Sr No</td>
            <td className="font-bold">Item Name</td>
            <td className="font-bold">Make</td>
            <td className="font-bold">Quantity</td>
            <td className="font-bold">UOM</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Discount</td>
            <td className="font-bold">Actions</td>
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
              <td>
                <button onClick={() => editRow(id)}>
                  <AiOutlineEdit className="text-green-500 font-bold text-xl" />
                </button>
                <button onClick={() => setShowModal(true)}>
                  <AiOutlineDelete className="text-red-500 font-bold text-xl" />
                </button>
              </td>
              {showModal && <DeleteModal id={id} />}
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
