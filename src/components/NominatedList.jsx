import React from "react";

const NominatedList = ({ nominatedMovies, onData }) => {
  function handleClick(data) {
    onData(data);
  }
  return (
    <>
      <div className="flex flex-col gap-4">
        {nominatedMovies.length > 0 ? (
          nominatedMovies.map((movie, index) => (
            <div key={index}>
              <div className="flex justify-between items-center ">
                <div>
                  <img
                    src={movie.Poster}
                    alt="image"
                    className="w-20 rounded-lg"
                  />
                </div>
                <div className="flex flex-col text-sm  w-full ml-5">
                  <p>{movie.Title}</p>
                  <p>{movie.Year}</p>
                  <p>{movie.Type}</p>
                </div>
                <button
                  className="bg-purple-500 text-white rounded-full px-2 text-lg hover:bg-purple-700"
                  onClick={() => handleClick(movie)}
                >
                  X
                </button>
              </div>
            </div>
          ))
        ) : (
          <div>List is empty</div>
        )}
      </div>
    </>
  );
};

export default NominatedList;
