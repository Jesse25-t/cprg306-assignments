"use client";
import { useState, useEffect } from "react";
import AddItem from "../week-6/add-new-item";
import MealIdeas from "./meal-ideas";   

export default function Page() {
  const [selectedItem, setSelectedItem] = useState("");

  const handleItemSelected = (itemName) => {
    const cleanedItemName = itemName
      .split(",")[0]
      .trim()
      .replace(/[^\w\s]/gi, "");
    setSelectedItem(cleanedItemName);
    console.log(selectedItem);
  };
  return (
    <main className="bg-slate-950 p-1">
      <h2 className="text-3xl font-bold m-1 py-2">Shopping List</h2>
      <div className="flex">
        <AddItem selectItem={handleItemSelected} />
        <MealIdeas ingredient={selectedItem} />
      </div>
    </main>
  );
}
