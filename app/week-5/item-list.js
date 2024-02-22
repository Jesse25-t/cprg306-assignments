"use client";
import Item from "./item";
import { useState } from "react";
import { useMemo } from "react";
import jsonData from "./item.json";

const sortByKey = (key) => (a, b) => {
  if (a[key] > b[key]) {
    return 1;
  }
  if (a[key] < b[key]) {
    return -1;
  }
  return 0;
};

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  const [isGrouped, setIsGrouped] = useState(false);
  const sortedData = useMemo(() => {
    return [...jsonData].sort(sortByKey(sortBy));
  }, [sortBy]);
  const groupedItems = useMemo(() => {
    return sortedData.reduce((acc, item) => {
      if (acc[item.category] === undefined) {
        acc[item.category] = [item];
      } else {
        acc[item.category].push(item);
      }
      return acc;
    }, {});
  }, [sortedData]);

  return (
    <div>
      <div className="flex space-x-3 p-5">
        <p>Sort By:</p>
        <button
          className="bg-amber-700 px-7 py-1 "
          onClick={() => {
            setSortBy("name");
            setIsGrouped(false);
          }}
        >
          Name
        </button>
        <button
          className="bg-amber-700 px-7 py-1 m1-1"
          onClick={() => {
            setSortBy("category");
            setIsGrouped(false);
          }}
        >
          Category
        </button>
        <button
          className="bg-amber-700 px-7 py-1 m1-1"
          onClick={() => {
            setSortBy("name");
            setIsGrouped(true);
          }}
        >
          Grouped category
        </button>
      </div>
      {isGrouped &&
        Object.keys(groupedItems).sort().map((category) => {
          return (
            <div key={category}>
              <div className="capitalize">{category}</div>
              {groupedItems[category].map((item) => (
                <div className="p-2 m-4 bg-slate-900 max-w-sm" key={item.id}>
                  <Item
                    name={item.name}
                    category={item.category}
                    quantity={item.quantity}
                  />
                </div>
              ))}
            </div>
          );
        })}
      {!isGrouped &&
        sortedData.map((item) => (
          <div className="p-2 m-4 bg-slate-900 max-w-sm" key={item.id}>
            <Item
              name={item.name}
              category={item.category}
              quantity={item.quantity}
            />
          </div>
        ))}
    </div>
  );
}
