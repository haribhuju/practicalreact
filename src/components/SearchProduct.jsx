const SearchProduct = ({ searchTerm, setSearchTerm }) => {
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="flex gap-4">
      <input
        type="text"
        name="search"
        id="search"
        value={searchTerm}
        onChange={handleInputChange}
        className="border border-blue-500 px-2 rounded-md"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchProduct;
