import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipieDetails = ({
  favourites,
  setFavourites,
  favCount,
  setFavCount,
}) => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [cover, setCover] = useState([]);

  const addToFavourites = () => {
    setFavourites((prev) => [
      ...prev,
      {
        name: meal.strMeal,
        image: meal.strMealThumb,
        id: meal.idMeal,
      },
    ]);
  };
  useEffect(() => {
    setFavCount(favourites.length);
  }, [favourites]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals[0]));
  }, [id]);

  if (!meal) return <p className="text-black p-6">Loading...</p>;

  return (
    <div className="px-4 py-8 text-black flex flex-col mt-16 w-full items-center justify-center gap-8">
      <div className="flex flex-col md:flex-row w-full items-center justify-center gap-8">
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            {meal.strMeal}
          </h1>
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full max-w-sm rounded-xl mb-6 border-4 border-black"
          />
        </div>

        <div className="flex flex-col items-start w-full md:w-1/2 bg-white/30 shadow-lg p-5 rounded-lg text-sm sm:text-base">
          <p className="mb-4">
            <strong>Area:</strong> {meal.strArea}
          </p>
          <p className="mb-4 text-justify">
            <strong>Instructions:</strong> {meal.strInstructions}
          </p>
        </div>
      </div>

      <div>
        <button
          className="bg-black text-white rounded-lg px-6 py-3 font-bold"
          onClick={addToFavourites}
        >
          Add to favourites
        </button>
      </div>
    </div>
  );
};

export default RecipieDetails;
