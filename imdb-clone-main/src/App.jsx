import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";

function App() {
  const [watchList, setWatchList] = useState([]);

  const handleAddToWatchlist = (movieObj) => {
    // Check if movieObj is already in watchList
    if (!watchList.some((movie) => movie.id === movieObj.id)) {
      let newWatchlist = [...watchList, movieObj];
      localStorage.setItem("moviesApp", JSON.stringify(newWatchlist));
      setWatchList(newWatchlist);
      console.log("Added to watchlist:", newWatchlist);
    }
  };

  const handleRemoveFromWatchlist = (movieObj) => {
    const updatedWatchlist = watchList.filter(
      (movie) => movie.id !== movieObj.id
    );
    localStorage.setItem("moviesApp", JSON.stringify(updatedWatchlist))
    setWatchList(updatedWatchlist);
    console.log("Removed from watchlist:", updatedWatchlist);
  };

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("moviesApp");
    if (moviesFromLocalStorage) {
      return setWatchList(JSON.parse(moviesFromLocalStorage));
    } else return;
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  watchList={watchList}
                  handleAddToWatchlist={handleAddToWatchlist}
                  handleRemoveFromWatchlist={handleRemoveFromWatchlist}
                />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={<Watchlist watchList={watchList}  setWatchList={setWatchList} handleRemoveFromWatchlist={handleRemoveFromWatchlist} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
