import React, { useState } from "react";
import AddBox from "../components/AddBox.js";
import MovieList from "../components/MovieList";
import NestedBox from "../components/NestedBox.js/index";
import TestBox from "../components/TestBox.js/index.js";
import TodoList from "../components/TodoList.js";

const HomePage = () => {
  // const [boxes, setBoxes] = useState([
  //   <div
  //     key={0}
  //     style={{
  //       width: "100%",
  //       height: "100%",
  //       border: "1px solid black",
  //       position: "relative",
  //     }}
  //   ></div>,
  // ]);
  // const [counter, setCounter] = useState(0);

  // const handleAddBox = () => {
  //   setCounter(counter + 1);
  //   setBoxes([
  //     ...boxes,
  //     <div
  //       key={counter + 1}
  //       style={{
  //         width: "50%",
  //         height: "50%",
  //         border: "1px solid black",
  //         position: "absolute",
  //         top: "25%",
  //         left: "25%",
  //       }}
  //     ></div>,
  //   ]);
  // };

  // const handleRemoveBox = () => {
  //   setBoxes([]);
  // };

  return (
    <>
      <div className="home_page">
        {/* <div className="page_title">HomePage</div> */}
        {/* <MovieList /> */}

        <h1>GPT</h1>

        {/* <div>
          <button onClick={handleAddBox}>Add Box</button>
          <button onClick={handleRemoveBox}>Remove Box</button>
          <div
            style={{
              width: "300px",
              height: "300px",
              border: "1px solid black",
              position: "relative",
            }}
          >
            {boxes}
          </div>
        </div> */}
        <TestBox />
        <NestedBox />
        <AddBox />
        <TodoList />
      </div>
    </>
  );
};

export default HomePage;
