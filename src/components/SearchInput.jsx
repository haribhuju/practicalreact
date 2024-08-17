import React from "react";

const SearchInput = ({ search, setSearch }) => {
  function handleChange(e) {
    setSearch(e.target.value);
  }
  return (
    <div>
      <input
        type="text"
        value={search}
        name="Search"
        id="Search"
        className="border border-gray-500 rounded-md px-2 py-1"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchInput;
