import React from "react";

const WinnerResult = ({ winner, onData }) => {
  function handleClick() {
    onData();
  }
  return (
    <div className="w-full h-full flex items-center justify-center bg-purple-500 rounded-lg text-white">
      {winner.map((item, index) => (
        <div className="text-center flex flex-col gap-5" key={index}>
          <div>
            <img src={item.Poster} alt="image" className="w-50 rounded-lg" />
          </div>
          <div>
            <p>{item.Title}</p>
            <p>{item.Year}</p>
          </div>
          <button
            className="bg-green-500 px-4 py-1 mt-4 rounded-lg"
            onClick={() => handleClick()}
          >
            Restart
          </button>
        </div>
      ))}
    </div>
  );
};

export default WinnerResult;
