import React from "react";
import * as A from "./style";

const RuleGroupBtn = () => {
  return (
    <>
      <A.BtnWrap>
        <A.AddBtn name="rule">+Rule</A.AddBtn>

        <A.AddBtn name="group">+Group</A.AddBtn>

        <A.DeleteBtn>x</A.DeleteBtn>
      </A.BtnWrap>
    </>
  );
};

export default RuleGroupBtn;
