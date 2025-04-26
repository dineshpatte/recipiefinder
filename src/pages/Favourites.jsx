import React from "react";
import { useNavigate } from "react-router-dom";

const Favourites = ({ favourites, setFavourites }) => {
  const navigate = useNavigate();

  const removeFavourite = (id) => {
    const updatedFavourites = favourites.filter((item) => item.id !== id);
    setFavourites(updatedFavourites);
  };

  return (
    <div className="p-8 mt-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {favourites.map((item, index) => (
        <div
          key={index}
          className="cursor-pointer shadow-lg p-4 rounded-xl border hover:scale-105 transition relative"
          onClick={() => navigate(`/recipe/${item.id}`)}
        >
          <p
            className="absolute top-0 right-0 px-3 font-bold text-lg bg-red-500 rounded-full text-white hover:px-2"
            onClick={(e) => {
              e.stopPropagation();
              removeFavourite(item.id);
            }}
          >
            x
          </p>
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-40 object-cover rounded-md mb-2"
          />
          <h2 className="font-bold text-lg text-center">{item.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Favourites;
