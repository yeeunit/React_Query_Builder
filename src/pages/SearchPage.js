import React from "react";
import QueryBuilder1 from "../components/QueryBuilder1";
import QueryBuilder2 from "../components/QueryBuilder2";

const SearchPage = () => {
  return (
    <div className="search_page">
      <div className="page_title">Search Page</div>
      <QueryBuilder1 />
      {/* <QueryBuilder2 /> */}
    </div>
  );
};

export default SearchPage;
