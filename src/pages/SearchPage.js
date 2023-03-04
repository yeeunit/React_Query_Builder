import React from "react";
import ImageListMUI from "../components/ImageListMUI";
import QueryBuilderComponent from "../components/QueryBuilder";

const SearchPage = () => {
  return (
    <div className="search_page">
      <div className="page_title">Search Page</div>
      <QueryBuilderComponent />
    </div>
  );
};

export default SearchPage;
