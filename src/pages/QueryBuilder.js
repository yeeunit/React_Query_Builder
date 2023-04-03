import * as A from "./style";
import Group from "../GROUP/index";
import { useState, useEffect } from "react";
import axios from "axios";

const QueryBuilder = () => {
  const [root, setRoot] = useState({ isAnd: true, rules: [], isGroup: true });
  const [fields, setFields] = useState([]);
  const getFields = async () => {
    let response1 = await axios.get(
      "http://localhost:4000/hutomdb/videos/fields"
    );
    let data1 = await response1.data;

    let response2 = await axios.get("http://localhost:4000/hutomdb/task/codes");
    let data2 = await response2.data;
    const lst = [];
    for (const videoField of data1) {
      lst.push(videoField);
    }
    lst.push({ name: "Annotation", type: "exists" });
    for (const taskCode of data2) {
      lst.push({ name: "Annotation " + taskCode.name, type: "exists" });
    }
    setFields(lst);
  };
  // const optionList = result1 && result2 && [...result1, ...result2]

  useEffect(() => {
    getFields();
  }, []);

  return (
    <>
      <div>
        <h1>Query Builder</h1>
        <div>
          <Group
            rootData={root}
            groupData={root}
            updateViewData={setRoot}
            fields={fields}
          />
        </div>
      </div>
    </>
  );
};

export default QueryBuilder;
