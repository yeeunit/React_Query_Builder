import React from "react";
import * as A from "./style";

const RuleBox = () => {
  return (
    <>
      {/* <label>Field</label> */}
      <A.OptionSelect name="fields">
        <option hidden defaultValue>
          Choose a Field
        </option>
        <A.Option>1</A.Option>
        <A.Option>2</A.Option>
      </A.OptionSelect>

      <A.OptionSelect name="operators">
        <option hidden defaultValue>
          Select a Operator
        </option>
        <A.Option>1</A.Option>
        <A.Option>2</A.Option>
      </A.OptionSelect>

      <A.Input />
    </>
  );
};

export default RuleBox;
