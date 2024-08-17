import React, { useState } from "react";

const FindWinner = ({ onData, nominatedMovies }) => {
  const [isDisabled, setDisabled] = useState(false);

  function handleClick(nominatedMovies) {
    onData(nominatedMovies);
    setDisabled(true);
  }
  return (
    <div className="w-full h-60 bg-purple-300 mt-4 rounded-lg flex justify-center items-center">
      <button
        className="bg-green-500 px-4 py-2 rounded-xl text-white disabled:bg-gray-500"
        onClick={() => handleClick(nominatedMovies)}
        disabled={isDisabled}
      >
        Find a Winner
      </button>
    </div>
  );
};

export default FindWinner;
