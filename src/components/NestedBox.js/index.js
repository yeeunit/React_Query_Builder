import React, { useState } from "react";
import ObtionWrap from "./ObtionWrap";
import * as A from "./style";

const NestedBox = () => {
  const [rules, setRules] = useState([]);
  const handleAddRule = () => {
    setRules([...rules, []]);
  };

  const handleRemoveRule = (index) => {
    const newRules = [...rules];
    newRules.splice(index, 1);
    setRules(newRules);
  };

  //
  const [rules2, setRules2] = useState([]);
  const handleAddRule2 = () => {
    setRules2([...rules2, []]);
  };

  const handleRemoveRule2 = (index) => {
    const newRules2 = [...rules2];
    newRules2.splice(index, 1);
    setRules2(newRules2);
  };
  //

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
          <A.RuleBtn onClick={handleAddRule}>Add Rule</A.RuleBtn>
          <A.GroupBtn onClick={handleAddBox}> Add Group </A.GroupBtn>
        </A.BtnWrap>

        <A.BuilderWrap>
          {rules.map((rule, index) => (
            <div key={index}>
              <ObtionWrap />
              <A.RemoveBtn onClick={() => handleRemoveRule(index)}>
                X
              </A.RemoveBtn>
            </div>
          ))}

          {boxes.map((nestedBoxes, index) => (
            <A.NewRuleBox key={index}>
              <A.RuleBtn onClick={handleAddRule2}>+Rule</A.RuleBtn>
              <A.GroupBtn onClick={() => handleAddNestedBox(index)}>
                + Group
              </A.GroupBtn>

              <A.RemoveBtn onClick={() => handleRemoveBox(index)}>
                X
              </A.RemoveBtn>

              {rules2.map((rule, index) => (
                <div key={index}>
                  <ObtionWrap />
                  <A.RemoveBtn onClick={() => handleRemoveRule2(index)}>
                    X
                  </A.RemoveBtn>
                </div>
              ))}

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
