import React, { useState } from "react";
import * as A from "./style";

const AddBox = () => {
  const [boxes, setBoxes] = useState([]);

  const handleAddBox = () => {
    setBoxes([...boxes, {}]);
  };

  const handleRemoveBox = (index) => {
    const newBoxes = [...boxes];
    newBoxes.splice(index, 1);
    setBoxes(newBoxes);
  };

  return (
    <>
      <A.Wrapper>
        <h3>Add Box</h3>
        <br />
        <A.AddBtn onClick={handleAddBox}>Add Box</A.AddBtn>
        {boxes.map((box, index) => (
          <A.DivWrap key={index}>
            <A.Box>{index}</A.Box>
            <A.DeleteBtn onClick={() => handleRemoveBox(index)}>X</A.DeleteBtn>
          </A.DivWrap>
        ))}
      </A.Wrapper>
    </>
  );
};

export default AddBox;
