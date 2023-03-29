import React, { useState } from "react";
import NestedBoxComponent from "./NestedBoxComponent";
import SmallerBox from "./SmallerBox";
import * as A from "./style";

const TestBox = () => {
  return (
    <>
      <A.Wrapper>
        <NestedBoxComponent />
        <SmallerBox />
      </A.Wrapper>
    </>
  );
};

export default TestBox;
