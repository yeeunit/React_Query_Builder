import { useState } from "react";
import NestedBoxComponent from "./NestedBoxComponent";

const STEP1 = (props) => {
  const [list, setList] = useState([]);

  // Add Rule or Group
  const onClickAdd = (type) => {
    setList((prevState) => [...prevState, { type: type, nested: [] }]);
  };

  // Remove Rule or Group
  const onClickRemove = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  // Add Nested Rule or Group
  const onClickAddNested = (listindex, type) => {
    const newList = [...list];
    const parentItem = newList[listindex];
    parentItem.nested.push({ type: type, nested: [] });
    setList(newList);
  };

  // Remove Nested Rule or Group
  const onClickRemoveNested = (listIndex, index) => {
    const newList = [...list];
    newList[listIndex].nested.splice(index, 1);
    setList(newList);
  };

  // TTT Remove Nested Group
  const onClickRemoveGroupTest = (parentIndex, index) => {
    const newList = [...props.list];
    console.log("newList", newList);
    newList[parentIndex].nested.splice(index, 1);
    setList(newList);
  };

  const onDeleteGroup = (listIndex) => {
    console.log("listIndex", listIndex);

    const newList = [...list];
    console.log("newList", newList);

    newList.splice(listIndex, 1);
    setList(newList);
  };

  console.log("list", list);

  return (
    <>
      <NestedBoxComponent
        nestedList={props.nestedList}
        nestedIndex={props.nestedIndex}
        listIndex={props.listIndex}
        listItem={props.listItem}
        onDeleteGroup={onDeleteGroup}
        list={list}
        setList={setList}
        onClickAdd={onClickAdd}
        onClickRemove={onClickRemove}
        onClickAddNested={onClickAddNested}
        onClickRemoveNested={onClickRemoveNested}
        onClickRemoveGroupTest={onClickRemoveGroupTest}
      />
    </>
  );
};

export default STEP1;
