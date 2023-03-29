import React, { useState } from "react";
import * as A from "./style";

const SmallerBox = () => {
  const [boxes, setBoxes] = useState([]);

  const handleAddBox = () => {
    setBoxes([...boxes, {}]);
  };

  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <A.RuleBtn onClick={handleAddBox}>Add Rule</A.RuleBtn>
      {boxes.map((box, index) => (
        <div
          key={index}
          style={{
            border: "1px solid blue",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          {index > 0 && <SmallerBox />}
        </div>
      ))}
    </div>
  );
};

export default SmallerBox;
