import React, { useState } from "react";
import * as A from "./style";

const NestedBoxComponent = () => {
  const [boxes, setBoxes] = useState([]);
  const [boxes2, setBoxes2] = useState([]);

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

  const handleAddBox2 = () => {
    setBoxes2([...boxes2, []]);
  };

  const handleRemoveBox2 = (index) => {
    const newBoxes = [...boxes];
    newBoxes.splice(index, 1);
    setBoxes2(newBoxes);
  };

  const handleAddNestedBox2 = (index) => {
    const newBoxes = [...boxes2];
    newBoxes[index] = [...newBoxes[index], []];
    setBoxes2(newBoxes);
  };

  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <A.GroupBtn onClick={handleAddBox}>Add Group</A.GroupBtn>
      {/* <button onClick={handleAddBox2}>Add Rule2</button> */}

      {boxes.map((nestedBoxes, index) => (
        <div key={index} style={{ marginTop: "10px" }}>
          <A.GroupBtn onClick={() => handleAddNestedBox(index)}>
            그룹 생성{" "}
          </A.GroupBtn>

          <button onClick={() => handleRemoveBox(index)}>X</button>
          <div style={{ border: "1px solid blue", padding: "10px" }}>
            {nestedBoxes.map((_, nestedIndex) => (
              <NestedBoxComponent key={`${index}-${nestedIndex}`} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NestedBoxComponent;
