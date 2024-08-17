import React from "react";
import { isDuplicate } from "../helpers/duplicateObject";

const SearchResult = ({ data, onData, nominatedMovies }) => {
  function handleClick(item) {
    onData(item);
  }
  return (
    <div className="mt-2">
      <ul className="flex flex-col gap-4 mt-2">
        {data.length > 0 ? (
          <>
            {data.map((item, index) => (
              <li key={index} className="bg-purple-200 rounded-lg p-2">
                <div className="flex justify-between items-center ">
                  <div className="flex flex-col text-sm">
                    <p>{item.Title}</p>
                    <p>{item.Year}</p>
                  </div>
                  {nominatedMovies.length > 0 &&
                  isDuplicate(item, nominatedMovies) ? (
                    <button
                      className="bg-gray-500 text-white rounded-full px-2 text-lg "
                      disabled
                    >
                      +
                    </button>
                  ) : (
                    <button
                      className="bg-purple-500 text-white rounded-full px-2 text-lg hover:bg-purple-700"
                      onClick={() => handleClick(item)}
                    >
                      +
                    </button>
                  )}
                </div>
              </li>
            ))}
          </>
        ) : (
          <div>No movies</div>
        )}
      </ul>
    </div>
  );
};

export default SearchResult;
