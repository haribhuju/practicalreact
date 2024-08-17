import React, { useState } from "react";
import ProductFilter from "../components/ProductFilter";
import useFetch from "../hooks/useFetch";

const HomePage = () => {
  const { data, isLoading, error, searchTerm, setSearchTerm } = useFetch();
  const [selectedItem, setSelectedItem] = useState([]);

  const handleItemSelect = (item) => {
    setSelectedItem((prevItems) => [...prevItems, item]);
  };

  console.log(selectedItem);
  return (
    <div className="container ">
      <div className="flex gap-4 p-4 w-full h-[650px] border border-black">
        <div className="border border-purple-500 p-2">
          <ProductFilter
            data={data}
            isLoading={isLoading}
            error={error}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onItemSelect={handleItemSelect}
          />
        </div>
        <div className="text-red-500 border border-red-500 w-full p-2">
          {selectedItem.length > 0 ? (
            <div>
              {selectedItem.map((item, index) => (
                <div className="flex h-20" key={index}>
                  <img src={item.Poster} alt="image" />
                  <div>
                    <p>{item.Title}</p>
                    <p>{item.Year}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            "No item selected"
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
