import React, { useState } from "react";
import * as A from "./style";

const NestedBox = () => {
  const [boxes, setBoxes] = useState([]);

  const handleAddBox = () => {
    setBoxes([...boxes, []]);
  };

  const handleRemoveBox = (index) => {
    const newBoxes = [...boxes];
    newBoxes.splice(index, 1);
    setBoxes(newBoxes);
  };

  const handleAddNestedBox = (index) => {
    const newBoxes = [...boxes];
    newBoxes[index] = [...newBoxes[index], []];
    setBoxes(newBoxes);
  };

  return (
    <>
      <A.Wrapper>
        <A.BtnWrap>
          <A.RuleBtn>Rule</A.RuleBtn>
          <A.GroupBtn onClick={handleAddBox}> Add Group </A.GroupBtn>
        </A.BtnWrap>

        <A.BuilderWrap>
          <A.OptionWrap>
            <A.OptionSelect>
              <A.Option>1</A.Option>
              <A.Option>2</A.Option>
              <A.Option>3</A.Option>
            </A.OptionSelect>

            <A.OperatorSelect>
              <A.Option>a</A.Option>
              <A.Option>b</A.Option>
              <A.Option>c</A.Option>
            </A.OperatorSelect>
            <A.Input />
            <A.RemoveBtn>x</A.RemoveBtn>
          </A.OptionWrap>

          {boxes.map((nestedBoxes, index) => (
            <A.NewRuleBox key={index}>
              <A.RuleBtn onClick={() => handleAddNestedBox(index)}>
                + Rule
              </A.RuleBtn>
              <A.GroupBtn onClick={handleAddBox}>+ Group</A.GroupBtn>

              <A.RemoveBtn onClick={() => handleRemoveBox(index)}>
                X
              </A.RemoveBtn>

              <A.InnerGroupBox>
                {nestedBoxes.map((_, nestedIndex) => (
                  <NestedBox key={`${index}-${nestedIndex}`} />
                ))}
              </A.InnerGroupBox>
            </A.NewRuleBox>
          ))}
        </A.BuilderWrap>
      </A.Wrapper>
    </>
  );
};

export default NestedBox;
