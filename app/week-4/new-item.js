"use client";
import { useState } from "react";

export default function NewItem({ addNewItem, bgClass, padding }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState("Produce");

  const handleForm = (event) => {
    // prevent default submission
    event.preventDefault();

    // returns new added item
    const addedItem = {
      name,
      quantity,
      category,
    };
    if (addNewItem) {
      addNewItem(addedItem);
    } else {
      alert(
        `Added item: ${name}, quantity: ${quantity}, category: ${category}`
      );
    }
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <form
      onSubmit={handleForm}
      className={`my-2 ${
        bgClass ?? "bg-slate-900"
      } text-black max-w-sm w-full p-${padding ?? 2}`}
    >
      <div className="mb-2">
        <input
          className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
          type="text"
          placeholder="item name"
          required
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className="flex justify-between">
        <input
          className="w-20 ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
          min={1}
          max={99}
          required
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
        />

        <select
          className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="Produce">Produce</option>
          <option value="Diary">Diary</option>
          <option value="Bakery">Bakery</option>
          <option value="Meat">Meat</option>
          <option value="Frozen Foods">Frozen Foods</option>
          <option value="Canned Goods">Canned Goods</option>
          <option value="Dry Goods">Dry Goods</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Household">Household</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <button
        className="w-full rounded-lg mt-4 py-2 px-4 bg-blue-500 text-white font-semibold focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 "
        type="submit"
      >
        {" "}
        +
      </button>
    </form>
  );
}
