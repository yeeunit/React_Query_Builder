import React from "react";
import ImageListMUI from "../components/ImageListMUI";
import MovieList from "../components/MovieList";

const HomePage = () => {
  return (
    <div className="home_page">
      <div className="page_title">HomePage</div>

      {/* <ImageListMUI /> */}
      <MovieList />
    </div>
  );
};

export default HomePage;
