import { useState } from "react";
import Movie from "./components/Movie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import RecipeDetail from "./pages/RecipieDetails";
import Favourites from "./pages/Favourites";

function App() {
  const [favourites, setFavourites] = useState([]);
  const [favCount, setFavCount] = useState(0);
  return (
    <Router>
      <Header favCount={favourites.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        <Route
          path="/recipe/:id"
          element={
            <RecipeDetail
              favourites={favourites}
              setFavourites={setFavourites}
              favCount={favCount}
              setFavCount={setFavCount}
            />
          }
        />
        <Route
          path="/favourites"
          element={
            <Favourites favourites={favourites} setFavourites={setFavourites} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
