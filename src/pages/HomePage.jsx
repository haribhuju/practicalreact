import React, { useState } from "react";
import SearchInput from "../components/SearchInput";
import SearchResult from "../components/SearchResult";
import NominatedList from "../components/NominatedList";
import { isDuplicate } from "../helpers/duplicateObject";
import FindWinner from "../components/FindWinner";
import WinnerResult from "../components/WinnerResult";
import useFetch from "../hooks/useFetch";
import DataRender from "../components/DataRender";

const HomePage = () => {
  const [nominatedMovies, setNominatedMovies] = useState([]);
  const [winner, setWinner] = useState([]);

  const { data: Movies, isLoading, error, search, setSearch } = useFetch();

  function handleAddFromSearch(data) {
    if (!isDuplicate(data, nominatedMovies)) {
      setNominatedMovies((prevState) => [...prevState, data]);
    }
  }

  function handleRemoveFromNominated(data) {
    setNominatedMovies((prevState) => {
      const filteredMovies = prevState.filter(
        (item) => !(item.Title === data.Title && item.Year === data.Year) // item.Title !== data.Title && item.Year !== data.Year
      );

      return filteredMovies.length > 0 ? filteredMovies : [];
    });
  }

  function handleWinner(data) {
    const randomIndex = Math.floor(Math.random() * nominatedMovies.length);
    setWinner((prevState) => [...prevState, data[randomIndex]]);
  }

  function handleReset() {
    setNominatedMovies([]);
    setWinner([]);
    setSearch("");
  }

  return (
    <>
      <div className="flex gap-2 h-full">
        <div className="border border-pink-500 w-[300px] rounded-md p-2">
          <SearchInput search={search} setSearch={setSearch} />
          <h2 className="text-lg font-semibold mt-2">Movies List:</h2>

          {nominatedMovies.length > 4 ? (
            <FindWinner
              onData={handleWinner}
              nominatedMovies={nominatedMovies}
            />
          ) : (
            <DataRender isloading={isLoading} error={error}>
              <SearchResult
                data={Movies}
                onData={handleAddFromSearch}
                nominatedMovies={nominatedMovies}
              />
            </DataRender>
          )}
        </div>
        <div className="border border-purple-500 rounded-md w-full p-2">
          {winner.length > 0 ? (
            <WinnerResult winner={winner} onData={handleReset} />
          ) : (
            <NominatedList
              nominatedMovies={nominatedMovies}
              onData={handleRemoveFromNominated}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
