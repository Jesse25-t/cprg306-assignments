"use client"
import { useState, useEffect } from "react"; 

const loadMealIdeas =  async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals;
}

export default function MealIdeas({ingredient}) {
    const [mealIdea, setMealIdea] = useState([]);
    const getMealIdea = async () => {
        const response = await loadMealIdeas(ingredient);
        setMealIdea(response); 
    }

    // const handleMealIdea = (event) => {
    //     setMealIdea(event.target.value);
    // }
useEffect(() => {
    getMealIdea();
}, [])
  return (
  <main>
      <h2 className="font-bold text-xl">Meal Ideas</h2>
      <div className="">Select an item to see meal ideas</div>
      <div> 
        {mealIdea.map((meal) => <h1>{meal.strMeal}</h1>)}
      </div>
  </main>
  );
}
