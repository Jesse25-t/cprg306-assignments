"use client"
import { useState } from "react";
import NewItem from "../week-4/new-item";
import ItemList from "../week-5/item-list";
import jsonData from "../week-5/item.json";

export default function AddItem({selectItem}){
const [ingredientList, setIngredientList] = useState(jsonData);
    return(
        <div className="flex flex-col p-2">
            <h2 className="font-bold text-xl">Add New Item</h2>
            <NewItem addNewItem={(item) => setIngredientList([...ingredientList, item])} bgClass="" padding={0} />
            <ItemList allItems={ingredientList} selectItem={selectItem}/>
        </div>
    );
}