import React from "react";

const ListingList = ({ movies, onItemSelect }) => {
  if (!movies || Object.keys(movies).length === 0) return null;
  return (
    <>
      <div className="flex justify-between items-center mt-4 bg-purple-200 p-2 rounded-lg">
        {
          <>
            <div className="">
              <h2 className="font-semibold text-sm">{movies.Title}</h2>
              <p className="text-xs">{movies.Year}</p>
            </div>
            <button
              className="text-xs bg-purple-500 rounded-full px-1.5 py-0.5 max-h-5 text-white hover:bg-purple-700"
              onClick={() => {
                onItemSelect(movies);
              }}
            >
              +
            </button>
          </>
        }
      </div>
    </>
  );
};

export default ListingList;
