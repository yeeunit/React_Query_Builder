import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageListMUI from "./ImageList";

const MovieList = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();

  const getMovieData = async () => {
    let response = await fetch("http://localhost:3001/movie");
    let result = await response.json();
    setData(result);
  };

  const onClickMove = (event) => {
    navigate(`/movie/${event.currentTarget.id}`);
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <div className="QueryBuilderComponent">
      <h1>MovieList</h1>
      <ImageListMUI data={data} />

      <div className="movie_list_wrap">
        {data &&
          data.map((item, index) => (
            <div
              className="movie_list"
              key={index}
              id={item.id}
              onClick={onClickMove}
            >
              <h3 style={{ display: "inline-block" }}> {item.id}. &nbsp; </h3>
              <h3 style={{ display: "inline-block" }}> {item.movie}</h3>
              <div>등장인물: {item.actor}</div>
              <div>출연: {item.character}</div>
              <div>장르: {item.genre}</div>
              <div>{item.runtime}분</div>
              <div>펑점: {item.rate}</div>
              <div>
                <img height={100} src={item.poster} alt={item.poster} />{" "}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MovieList;
