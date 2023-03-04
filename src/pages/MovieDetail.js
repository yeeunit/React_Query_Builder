import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  // console.log(useParams() === {id:'xx'})
  let { id } = useParams();
  const [data, setData] = useState(null);

  const getMovieDetail = async () => {
    let url = `http://localhost:3001/movie/${id}`;
    let response = await fetch(url);
    let result = await response.json();
    // console.log("result", result);

    setData(result);
  };
  //   console.log("data", data);

  useEffect(() => {
    getMovieDetail();
  }, []);

  return (
    <>
      <div className="QueryBuilderComponent">
        <h1>MovieDetail</h1>

        <div className="movie_detail_wrap">
          {data && (
            <div>
              <h2>
                {" "}
                {data.id}. {data.movie}{" "}
              </h2>
              <img width={100} src={data.poster} />

              <div>등장인물 : {data.character}</div>
              <div>배우 : {data.actor}</div>
              <div>장르 : {data.genre}</div>
              <div>{data.runtime}분</div>
              <div>개봉일 : {data.date}</div>
              <div>평점 : {data.rate}</div>

              <br />
              <br />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
