import React, { useEffect, useState } from "react";
import MyQueryBuilder from "./myQueryBuilder.container";

export const TestGetData = () => {
  const [data, setData] = useState();

  const getMovieData = async () => {
    let response = await fetch("http://localhost:3001/movie");
    let result = await response.json();
    setData(result);
  };
  // getMovieData();

  useEffect(() => {
    getMovieData();
  }, []);

  let movieTitles = data && data.map((el) => el.movie);
  console.log("movieTitles", movieTitles);

  return (
    <>
      <MyQueryBuilder movieTitles={movieTitles} />
    </>
  );
};
