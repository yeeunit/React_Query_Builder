import React from "react";
import * as A from "./style";

const AndOrSelect = () => {
  return (
    <>
      <A.Select className="AndOrSelect">
        <A.Option value="and">AND</A.Option>
        <A.Option value="or">OR</A.Option>
      </A.Select>
    </>
  );
};

export default AndOrSelect;
