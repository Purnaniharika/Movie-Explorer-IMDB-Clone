import React, { useEffect, useState } from "react";
import genreIds from "../utility/genre";

function Watchlist({ watchList, setWatchList, handleRemoveFromWatchlist }) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genre"]);
  const [currGenre, setCurrGenre] = useState("All Genre");

  let handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let sortIncreasing = () => {
    let sortedIncreasing = watchList.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchList([...sortedIncreasing]);
  };

  let sortDecreasing = () => {
    let sortedIDecreasing = watchList.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchList([...sortedIDecreasing]);
  };

  useEffect(() => {
    let temp = watchList.map((movieObj) => {
      return genreIds[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenreList(["All Genre", ...temp]);
  }, [watchList]);

  return (
    <>
      <div className="flex justify-center flex-wrap m-4 gap-2">
        {genreList.map((genre) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              className={
                currGenre === genre
                  ? "flex justify-center items-center h-[2.5rem] w-[7rem] text-white text-center bg-yellow-500 rounded-xl font-bold p-2 hover:cursor-pointer"
                  : "flex justify-center items-center h-[2.5rem] w-[7rem] text-white text-center bg-gray-400/50 rounded-xl font-bold p-2 hover:cursor-pointer"
              }
            >
              {genre}
            </div>
          );
        })}

        {/* <div className="flex justify-center items-center h-[2.5rem] w-[7rem] text-white text-center bg-gray-400/50 rounded-xl font-bold p-2 hover:cursor-pointer">
          Romance
        </div> */}
      </div>

      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="search movies ..."
          className="h-[2.5rem] w-[16rem] bg-gray-200 outline-none pl-6 rounded-2xl"
        />
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-400 m-8">
        <table className="w-full text-gray-600 text-center">
          <thead className="border-b-4">
            <tr>
              <th>Name</th>
              <th className="flex justify-center ">
                <div
                  onClick={sortIncreasing}
                  className="p-2 hover:cursor-pointer "
                >
                  <i class="fa-sharp fa-solid fa-arrow-up"></i>
                </div>
                <div className="p-2">Rating</div>
                <div
                  onClick={sortDecreasing}
                  className=" hover:cursor-pointer p-2"
                >
                  <i class="fa-sharp fa-solid fa-arrow-down"></i>
                </div>
              </th>

              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchList
              .filter((movieObj) => {
                if (currGenre === "All Genre") {
                  return true;
                } else {
                  return genreIds[movieObj.genre_ids[0]] == currGenre;
                }
              })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr className="border-b-2 text-xl">
                    <td className="flex items-center px-2 py-4">
                      <img
                        className="h-[6rem] w-[10rem] bg-cover bg-center"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                        alt="#"
                      />

                      <div className="mx-10 text-xl">{movieObj.title} </div>
                    </td>
                    <td>{movieObj.vote_average} </td>
                    <td>{movieObj.popularity} </td>
                    <td> {genreIds[movieObj.genre_ids[0]]} </td>
                    <td onClick={()=> handleRemoveFromWatchlist(movieObj)} className="text-red-600 font-semibold hover:cursor-pointer pr-4">
                      <i class="fa-sharp fa-solid fa-trash"></i>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
