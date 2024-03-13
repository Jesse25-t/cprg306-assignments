"use client";
import { useState, useEffect } from "react";

const loadMealIdeas = async (idea) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${idea}`
    );
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.log(`error ${error}`);
  }
};

export default function MealIdeas({ ingredient }) {
  const [mealIdea, setMealIdea] = useState([]);
  const getMealIdea = async () => {
    if (ingredient === "") {
      return;
    }
    const response = await loadMealIdeas(ingredient);
    setMealIdea(response);
  };
  console.log(mealIdea);

  useEffect(() => {
    getMealIdea();
  }, [ingredient]);
  return (
    <main>
      <h2 className="font-bold text-xl">Meal Ideas</h2>
      <div className="">Select an item to see meal ideas</div>
      <div>
        {mealIdea !== null
          ? mealIdea.map((meal) => <h1>{meal.strMeal}</h1>)
          : "There are no suggestions for this meal."}
      </div>
    </main>
  );
}
