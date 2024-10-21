import React from "react";

function MovieCard({
  poster_path,
  name,
  movieObj,
  handleAddToWatchlist,
  handleRemoveFromWatchlist,
  watchList,
}) {
  // Function to check if movieObj exists in watchList based on movie.id
  const doesContain = (movieObj) => {
    return watchList.some((movie) => movie.id === movieObj.id);
  };

  return (
    <div
      className="h-[60vh] w-[230px] bg-cover bg-center rounded-xl flex flex-col hover:scale-110 duration-300 hover:cursor-pointer relative"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          onClick={() => handleRemoveFromWatchlist(movieObj)}
          className="m-4 h-8 w-9 bg-gray-900/60 flex justify-center items-center rounded-lg cursor-pointer"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handleAddToWatchlist(movieObj)}
          className="m-4 h-8 w-9 bg-gray-900/60 flex justify-center items-center rounded-lg cursor-pointer"
        >
          &#128525;
        </div>
      )}

      <div className="absolute bottom-0 text-white text-xl w-full p-2 text-center bg-gray-900/60">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
