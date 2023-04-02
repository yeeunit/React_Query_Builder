import React, { useState } from "react";
import AddBox from "../components/AddBox.js";
import MovieList from "../components/MovieList";
import NestedBox from "../components/NestedBox.js/index";
import TestBox from "../components/TestBox.js/index.js";
import TodoList from "../components/TodoList.js";
import STEP1 from "../STEP1/index.js";
import STEP2 from "../STEP2/index.js";

const HomePage = () => {
  return (
    <>
      <div className="home_page">
        {/* <TestBox /> */}
        {/* <NestedBox /> */}
        {/* <AddBox /> */}
        <TodoList />
        <STEP1 />
        {/* <STEP2 /> */}
      </div>
    </>
  );
};

export default HomePage;
