import React, { useState } from "react";

import SearchProduct from "./SearchProduct";
import useFetch from "../hooks/useFetch";
import ListingList from "./ListingList";
import DataRender from "./DataRender";

const ProductFilter = ({
  data,
  isLoading,
  error,
  searchTerm,
  setSearchTerm,
  onItemSelect,
}) => {
  return (
    <>
      <div className="container">
        <SearchProduct searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <div className="mt-4">
          <h3 className="text-xl font-semibold">Movies Name: </h3>

          <DataRender isloading={isLoading} error={error}>
            <ListingList movies={data} onItemSelect={onItemSelect} />
          </DataRender>
        </div>
      </div>
    </>
  );
};

export default ProductFilter;
