import React, { useState } from "react";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);

  const getRecipe = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await res.json();
      console.log(data.meals);
      setMeals(data.meals || []);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-6 mt-16 overflow-y-scroll">
      <input
        className="border p-2 rounded w-full mb-4 outline-none"
        placeholder="Search meals..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="bg-black text-white px-4 py-2 rounded"
        onClick={getRecipe}
      >
        Search
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {meals.map((meal) => (
          <Link
            key={meal.idMeal}
            to={`/recipe/${meal.idMeal}`}
            className="border p-4 rounded shadow hover:bg-gray-100"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-lg font-bold mt-2">{meal.strMeal}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
