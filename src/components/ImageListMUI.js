import { ImageList, ImageListItem } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const ImageListMUI = (data) => {
  // const [clickId, setClickId] = useState();

  // console.log("이미지의", data.data && data.data[0].poster);

  let movie = data.data;
  // console.log("movie", movie);
  const navigate = useNavigate();

  const onClickMoveToDetail = (event) => {
    navigate(`/movie/${event.target.id}`);
  };

  // {
  //   img: `${data.data && data.data[0].poster}`,
  //   title: `${data.data && data.data[0].movie}`,
  //   rows: 2,
  //   cols: 2,
  // },
  // {
  //   img: `${data.data && data.data[1].poster}`,
  //   title: `${data.data && data.data[1].movie}`,
  // },
  // {
  //   img: `${data.data && data.data[2].poster}`,
  //   title: "Camera",
  // },
  // ];

  return (
    <div className="QueryBuilderComponent">
      <h1>Image List</h1>
      <div className="image_list_wrap">
        <ImageList
          sx={{ width: 770, height: 550 }}
          variant="quilted"
          cols={5}
          rowHeight={200}
          className="image_list"
        >
          {movie &&
            movie.map((item) => (
              <ImageListItem
                key={item.poster}
                // cols={item.id % 2 === 0 ? 2 : 1}
                // rows={item.id % 2 === 1 ? 2 : 1}
              >
                <img
                  {...srcset(item.poster, item.rows, item.cols)}
                  id={item.id}
                  alt={item.movie}
                  loading="lazy"
                  onClick={onClickMoveToDetail}
                />
              </ImageListItem>
            ))}
        </ImageList>
      </div>
    </div>
  );
};

export default ImageListMUI;
