import React, { useEffect, useState } from "react";
import Footer from "./footer";

const Movie = () => {
  const [meal, setMeal] = useState(null);
  const [search, setSearch] = useState("");
  const [recipe, setRecipe] = useState("");
  const [preview, setPreview] = useState(false);

  const getRecipie = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const result = await response.json();
      if (result.meals && result.meals.length > 0) {
        setMeal(result.meals[0]);
      } else {
        setMeal(null);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = () => {
    setPreview(true);
    setRecipe(meal.strInstructions);
  };

  useEffect(() => {
    getRecipie();
  }, []);

  return (
    <div className="w-screen min-h-screen bg-black p-6 flex flex-col items-center font-sans">
      <Footer setSearch={setSearch} getRecipie={getRecipie} />

      {meal ? (
        <div className="flex flex-col items-center justify-center  w-full max-w-6xl gap-10 mt-16">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-white ">
            {meal.strMeal}
          </h1>

          <div className="flex flex-col md:flex-row gap-10 items-center justify-center w-full px-4">
            <div className="glass-card p-6 rounded-2xl flex flex-col items-center">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-72 h-72 object-cover rounded-2xl shadow-2xl border-4 border-pink-400"
              />
              <p className="text-white text-lg mt-4">Meal ID: {meal.idMeal}</p>
              <p className="text-white text-lg">Cuisine: {meal.strArea}</p>

              <button
                className="mt-6 bg-purple-600 px-6 py-3 text-white font-bold rounded-full transition-all duration-300 shadow-lg"
                onClick={handleClick}
              >
                🍳 Show Recipe
              </button>
            </div>

            <div className="glass-card bg-opacity-40 p-6 rounded-2xl shadow-xl w-full md:w-1/2 backdrop-blur-md">
              <h2 className="text-2xl font-semibold text-center text-white mb-6">
                Ingredients
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[...Array(9)].map((_, i) => {
                  const ingredient = meal[`strIngredient${i + 1}`];
                  return (
                    ingredient && (
                      <p
                        key={i}
                        className="text-sm sm:text-md bg-white bg-opacity-20 text-white px-4 py-2 rounded-xl text-center shadow hover:bg-opacity-40 transition"
                      >
                        {ingredient}
                      </p>
                    )
                  );
                })}
              </div>
            </div>
          </div>

          {preview && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 backdrop-blur-md flex items-center justify-center z-50 p-4">
              <div className="glass-card bg-white bg-opacity-90 p-8 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80%] overflow-y-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
                  🍽️ Recipe Instructions
                </h2>
                <p className="text-gray-800 whitespace-pre-line leading-relaxed text-lg">
                  {recipe}
                </p>
                <div className="flex justify-center mt-6">
                  <button
                    className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-full text-white font-bold shadow-md"
                    onClick={() => setPreview(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <p className="text-white text-xl mt-24 font-semibold">
          No meal found 😢. Try another search!
        </p>
      )}
    </div>
  );
};

export default Movie;
